/* Run synchronously in the document head, before Gradio or the teaching UI. */
(() => {
  'use strict';
  if (window.StylometryTheme) return;
  const KEY = 'stylometry-theme-v1';
  const choices = ['system', 'light', 'dark'];
  const root = document.documentElement;
  const media = matchMedia('(prefers-color-scheme: dark)');
  const origins = new Set([location.origin, 'https://stylometry.digihumeng.org',
    'https://interpretable-deep-learning-stylometry.ngrok.app']);
  const allowed = value => choices.includes(value);
  let saved;
  try { saved = localStorage.getItem(KEY); } catch {}
  const requested = new URL(location.href).searchParams.get('theme');
  let preference = allowed(requested) ? requested : allowed(saved) ? saved : 'system';
  let resolved;
  let scanning = false;
  const embedded = window !== window.top || new URL(location.href).searchParams.get('embedded') === '1';
  const isGradio = /^\/(play|train)\/?$/.test(location.pathname);

  function url(value) {
    const u = new URL(value, location.href);
    if (origins.has(u.origin) && /^https?:$/.test(u.protocol)) {
      u.searchParams.set('theme', preference);
      u.searchParams.delete('__theme');
    }
    return u.href;
  }
  function remember() { try { localStorage.setItem(KEY, preference); } catch {} }
  function syncClasses() {
    for (const node of [root, document.body, ...document.querySelectorAll('.gradio-container')]) {
      if (node && node.classList.contains('dark') !== (resolved === 'dark'))
        node.classList.toggle('dark', resolved === 'dark');
    }
  }
  function notifyFrames() {
    document.querySelectorAll('iframe').forEach(frame => {
      if (frame.hasAttribute('data-theme-result')) {
        frame.contentWindow?.postMessage({type:'stylometry-result-theme', theme:resolved}, '*');
        return;
      }
      try {
        const origin = new URL(frame.src, location.href).origin;
        if (origins.has(origin)) frame.contentWindow?.postMessage({type:'stylometry-theme', choice:preference}, origin);
      } catch {}
    });
  }
  function apply({persist = false, updateURL = false} = {}) {
    resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    root.dataset.theme = resolved;
    root.dataset.themeChoice = preference;
    root.style.colorScheme = resolved;
    syncClasses();
    const u = new URL(location.href);
    if (updateURL || u.searchParams.has('theme')) u.searchParams.set('theme', preference);
    if (isGradio) u.searchParams.set('__theme', resolved);
    else u.searchParams.delete('__theme');
    if (u.href !== location.href) history.replaceState(history.state, '', u.href);
    if (persist) remember();
    const control = document.getElementById('site-theme-choice');
    if (control) control.value = preference;
    notifyFrames();
    window.dispatchEvent(new CustomEvent('stylometry-theme-change', {detail:{choice:preference, theme:resolved}}));
  }
  function set(choice) {
    if (!allowed(choice)) return;
    preference = choice;
    apply({persist:true, updateURL:true});
  }
  window.StylometryTheme = {set, url, get choice(){return preference;}, get theme(){return resolved;}};
  apply({persist:allowed(requested)});

  function resultBootstrap(theme) {
    // This function is serialized only into server-generated result frames.
    const css = document.createElement('style');
    css.textContent = 'html,body{background:var(--result-bg)!important;color:var(--result-ink)!important;color-scheme:var(--result-scheme)}a{color:var(--result-link)}';
    document.head.append(css);
    let current = theme;
    function plotColors() {
      if (!window.Plotly) return;
      document.querySelectorAll('.js-plotly-plot').forEach(plot => {
        if (!plot._fullLayout || plot.dataset.sitePlotTheme === current) return;
        plot.dataset.sitePlotTheme = current;
        const dark = current === 'dark';
        window.Plotly.relayout(plot, {paper_bgcolor:dark?'#16262f':'#ffffff',
          plot_bgcolor:dark?'#16262f':'#ffffff', 'font.color':dark?'#e6edf1':'#172d39',
          'xaxis.gridcolor':dark?'#344954':'#e5e9ed', 'yaxis.gridcolor':dark?'#344954':'#e5e9ed'});
      });
    }
    function paint(next) {
      current = next;
      const dark = next === 'dark', style = document.documentElement.style;
      style.setProperty('--result-bg', dark?'#16262f':'#ffffff');
      style.setProperty('--result-ink', dark?'#e6edf1':'#172d39');
      style.setProperty('--result-link', dark?'#94c9ff':'#1c5cab');
      style.setProperty('--result-scheme', next);
      plotColors();
    }
    paint(theme);
    addEventListener('message', event => {
      if (event.source === parent && event.data?.type === 'stylometry-result-theme' &&
          ['light','dark'].includes(event.data.theme)) paint(event.data.theme);
    });
    new MutationObserver(plotColors).observe(document.documentElement,{childList:true,subtree:true});
    addEventListener('load', plotColors);
  }
  function prepareResults() {
    document.querySelectorAll('iframe[data-result-html]:not([data-theme-ready])').forEach(frame => {
      frame.dataset.themeReady = 'true';
      const raw = new TextDecoder().decode(Uint8Array.from(atob(frame.dataset.resultHtml), c=>c.charCodeAt(0)));
      const injection = '<script>(' + resultBootstrap.toString() + ')(' + JSON.stringify(resolved) + ');<\/script>';
      const html = /<head(?:\s[^>]*)?>/i.test(raw) ? raw.replace(/<head(?:\s[^>]*)?>/i, '$&'+injection)
        : '<!doctype html><html><head>'+injection+'</head><body>'+raw+'</body></html>';
      const bytes = new TextEncoder().encode(html);
      let binary = ''; for (const b of bytes) binary += String.fromCharCode(b);
      frame.src = 'data:text/html;base64,' + btoa(binary);
      frame.addEventListener('load', notifyFrames);
    });
  }
  function scan() {
    scanning = false;
    if (!document.body) return;
    syncClasses();
    if (!embedded && !document.getElementById('site-theme-choice')) {
      const bar = document.createElement('div');
      bar.className = 'site-appearance';
      bar.innerHTML = '<label for="site-theme-choice">Appearance</label><select id="site-theme-choice" aria-label="Appearance"><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select>';
      document.body.prepend(bar);
      bar.querySelector('select').value = preference;
      bar.querySelector('select').addEventListener('change', event => set(event.target.value));
    }
    prepareResults();
  }
  new MutationObserver(() => {
    if (!scanning) { scanning = true; queueMicrotask(scan); }
  }).observe(root,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded', scan, {once:true});
  for (const type of ['click','auxclick','contextmenu']) document.addEventListener(type, event => {
    const link = event.target.closest?.('a[href]');
    if (!link || link.hasAttribute('download') || link.getAttribute('href').startsWith('#')) return;
    try { const decorated = url(link.href); if (decorated !== link.href) link.href = decorated; } catch {}
  }, true);
  media.addEventListener('change', () => { if (preference === 'system') apply(); });
  addEventListener('storage', event => {
    if (event.key === KEY && allowed(event.newValue)) { preference=event.newValue; apply({updateURL:true}); }
  });
  addEventListener('message', event => {
    if (event.source === parent && parent !== window && origins.has(event.origin) &&
        event.data?.type === 'stylometry-theme' && allowed(event.data.choice)) {
      if (preference !== event.data.choice) set(event.data.choice);
    }
    if (event.data?.type === 'stylometry-theme-ready' && origins.has(event.origin) &&
        [...document.querySelectorAll('iframe')].some(frame=>frame.contentWindow===event.source)) notifyFrames();
  });
  if (embedded) addEventListener('DOMContentLoaded', () => {
    try { parent.postMessage({type:'stylometry-theme-ready'}, new URL(document.referrer).origin); } catch {}
  }, {once:true});
})();

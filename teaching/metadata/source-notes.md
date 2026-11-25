# Tragedy or History? Reading Genre with Models — sources and methods

## Published source and coverage

김희진·강수진, 「비극인가 역사극인가? 딥러닝 텍스트 분류를 통한 르네상스 희곡 분석」, 『디지털인문학의 길잡이: 입문』, printed pages 421–470. The case study contains 68 substantive slides in complete Korean and English. Its descriptive section names preserve the source’s hierarchy while foregrounding the literary problem, model comparisons and interpretive questions. `coverage.json` maps every slide, page reference, literary quotation and figure. The complete final exercise on p.470 was read directly from the PDF; the earlier text extraction had stopped after that page’s first line.

The user explicitly confirmed ownership and authorized the original book images. The published electronic-book PDF has SHA-256 `18387600d94cd124632dadc3dba1ce21849adb6f99b2e8799993a6cb47d9f6bc`. Printed page N appears at PDF ordinal page N+1. `figure-provenance.json` records the original local source files and image extraction details.

## Figures

All fourteen figures are the published versions, not reconstructed or generated replacements. Figures 1–9 and 13–14 are original embedded images. Figure 10 is the published vector artwork rendered at four times PDF scale. Figures 11–12 were rendered as complete regions at five times scale because their numeric labels, axes and legends are separate vector overlays. Extracting their embedded bitmaps alone would omit essential evidence.

The manuscript image folder differs from the published edition, notably for figures 10, 13 and 14. Only the published versions are used. Figures 3–9 are identified as conceptual teaching illustrations, not measured outputs of a current model. Figures 11–14 retain their original captions and are identified as printed historical results, not new executions.

## Literary quotations and source matching

- The Gloucester proclamation (King Lear 2.1.58–61), Fool/Lear storm excerpts (3.4.63; 3.4.80–81), and Pericles passage reproduce the chapter’s English and Korean on pp.427, 428 and 465. The chapter’s footnote identifies The New Oxford Shakespeare: Modern Critical Edition as its quotation edition.
- The six masked prompts on p.436 are separately identified as adapted teaching prompts. They include `coward` rather than the earlier quotation’s `caitiff`, and `a grave` rather than `thy grave`.
- Figure 13’s complete displayed chunk was visually transcribed and independently matched, including punctuation and case after whitespace normalization, against official Folger XML: **2 Henry IV 5.2.79–130**, beginning in the Chief Justice’s speech `sp-3038` and continuing into Henry V’s `sp-3067`. It starts mid-sentence at `justice,` and ends at `The tide of blood`.
- Figure 14’s complete displayed chunk was similarly verified: **Richard II**, Exton **5.4.11–12** (`sp-2684`), followed by Richard **5.5.1–50** (`sp-2689`). It begins `Pomfret. Come, let’s go. I am the King’s friend and will rid his foe.` and ends `I wasted time, and now`. The opening is not Richard’s self-description. The course explicitly teaches this removed-speaker/chunk-boundary issue.
- Full Korean translations of the two figure passages were newly written for this course, and are labelled accordingly. They are not represented as the book’s full translations.
- `figure-passages.json` records the transcription and attribution. The corpus/model workstream retains the XML hashes and offsets for the matched passages.

## Numerical and methodological fidelity

- The chapter states eleven tragedy works and ten history works, but does not enumerate the complete training filenames. Figure 2’s historical catalogue and figure 6’s conceptual cluster differ over Cymbeline/Troilus. Newly reconstructed datasets therefore must disclose their actual selected works and cannot be called the exact recovered training manifest.
- The book uses `bert-base-uncased`, a 510-content-token chunk budget, class undersampling to `n_min` using NumPy seed42, and an 80:20 stratified chunk split with random_state42. The course explains that chunk-level splitting can share works across training and validation.
- The chunking code’s prose/docstring mentions scene context, but the printed loop examines whitespace-separated words and token counts, not scene or speaker boundaries. The distinction is taught explicitly.
- Epoch, Batch_size and Warmup_steps are variables in the printed configuration, not supplied numeric values. Weight decay is0.01; logging and evaluation occur every10 steps. Library-specific parameter names in this historical snippet require verification in a new runtime.
- Figure12: `[[112,3],[2,112]]`, total229, correct224, accuracy97.8165938865%, rounded97.82%. Class A is Tragedy, Class B History. These are chunk results, not a percentage of plays assigned definitive literary genres.
- Figure13 displays rounded probabilities A0.00/B1.00 and royal word weight0.75. Figure14 displays A0.99/B0.01 and Bolingbroke on the B side with0.34. Word weights and probabilities are distinguished.
- The published heading “3.6. 어텐션 기반 해석 가능성 분석” and figure captions are preserved. The course does not conflate their word-contribution displays with raw attention tensors, a causal proof, or newly computed LIME results. Attention and perturbation-based LIME receive separate lab links.
- The reported Pericles History score is0.5987 (p.465). The threshold widget changes a reporting policy while holding that printed score fixed. Below threshold means judgment withheld, not relabelled as Tragedy.
- The TF-IDF widget explicitly defines its own illustrative formula `idf=ln(N/df)` and fixed TF3; it does not claim to reproduce a particular library implementation. Five-chunk majority voting uses invented equal-length examples, not a fabricated Pericles or Two Noble Kinsmen result.

## Interface

Both languages include slide prose, section navigation, labels, activity prompts, source notes in the interface, widget explanations and figure captions. The published Korean headings remain visible as source headings in the English course. The language is retained in `?lang=ko|en` and `localStorage['chapter11-language']`; the direct slide is in `#slide-N`. Notes are held only in the current tab and can be downloaded. Native modal figure zoom, keyboard arrows, expand/collapse source readers, section navigation and mobile layouts are included.

The static course runs without a GPU. Connected labs open separately; their model provenance, evaluation records and newly executed outputs must remain distinct from printed book results. Embedded mode reports same-origin `playground-lesson-height` messages for station `genre-case-study`.

## New case-study framing and visual evidence

The opening organizes the investigation around contrasting registers in Lear, royal justice in 2 Henry IV, and Richard II’s prison soliloquy. A four-part case map links reading, representation, evaluation and explanation. The concluding deliverable is an argument with a passage, controlled comparison, interpretation and counterexample.

A new representation-pipeline illustration is explicitly conceptual and contains no invented measurements. The split diagram uses actual recorded training/evaluation work and chunk counts. The model comparison chart reads the saved ten-model manifest, groups within-work chunk validation, held-out-work validation and the three-class extension separately, and offers Accuracy and Macro F1 views. The full extracted records and original manifest SHA-256 are in `data/model-comparison.json`. These are validation results from final-epoch checkpoints, monitored during training, not untouched final-test results; changed schedules and data units prevent simple causal comparisons.

The comparison also retains the disagreement between the printed prison-passage prediction and the newly saved baseline’s History prediction. Original printed figures and their numeric reports have not been altered. The case page is available at `/play/genre-case-study/`; the permanent static copy may live at `/teaching/`.

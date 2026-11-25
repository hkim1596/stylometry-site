/* Case framing and original visuals; all published passages and figures are preserved. */
(() => {
const c=window.ChapterCourse,{B,P,U,W}=c;
c.sourceGroups={...c.groups};
const names={
 '1':['1. 장르가 문제가 되는 순간','1. A disputed genre'],
 '2.1':['2.1. 단어 빈도와 분류','2.1. Counts and classification'],
 '2.2.1':['(1) 텍스트를 벡터로 표현하기','(1) Representing text'],
 '2.2.2':['(2) 언어의 패턴 학습하기','(2) Learning from language'],
 '2.2.3':['(3) 장르 레이블 학습하기','(3) Learning genre labels'],
 '2.2.4':['(4) 어텐션 살펴보기','(4) Inspecting attention'],
 '3':['3. 장르 분류 실험 설계','3. A genre-classification experiment'],
 '3.1':['3.1. 원문과 판본','3.1. Source texts and editions'],
 '3.2':['3.2. 대사 텍스트 준비하기','3.2. Preparing dialogue'],
 '3.3':['3.3. 레이블·청크·분할','3.3. Labels, chunks and splits'],
 '3.4':['3.4. 학습 과정과 손실','3.4. Training and loss'],
 '3.5':['3.5. 평가와 증거','3.5. Evaluation and evidence'],
 '3.6':['3.6. 대조되는 두 구절 해석하기','3.6. Explaining contrasting passages'],
 '3.7':['3.7. 새로운 작품 읽기','3.7. Reading unseen plays'],
 '4':['4. 장르 이름이 드러내는 것','4. What genre labels reveal'],
 'ex1':['탐구 ① 설명 비교하기','Investigation 1 · Compare explanations'],
 'ex2':['탐구 ② 하디로 확장하기','Investigation 2 · Transfer to Hardy'],
 'ex3':['탐구 ③ 레이블과 연구 질문','Investigation 3 · Rethink the labels']
};
c.sections.forEach(s=>{s.sourceHeading=s.title;s.title=B(...names[s.id]);});
c.groups['2']=B('2. 단어에서 모델로','2. From words to models');
c.groups['2.2']=B('2.2. 문맥을 읽는 모델','2.2. Contextual models');
c.groups.ex=B('후속 탐구','Further investigations');
function revise(value){if(typeof value==='string')return value.replace(/\bThe chapter\b/g,'The book').replace(/\bthe chapter\b/g,'the book').replace(/\bthis chapter\b/g,'this study').replace(/\bChapter 11\b/g,'the genre study').replace(/11장/g,'장르 연구');if(Array.isArray(value))return value.map(revise);if(value&&typeof value==='object'){for(const k of Object.keys(value))value[k]=revise(value[k]);}return value;}
for(const s of c.slides)revise(s);
for(const q of Object.values(c.quotations))revise(q);
c.slides[0].title=B('같은 작품을 왜 다르게 읽을까?','Why do we read the same work differently?');
c.slides[0].lead=B('『리어왕』의 달라진 장르 이름에서 출발해, 원문·표현·학습·설명을 하나의 사례로 연결합니다.','Start with Lear’s changing genre label, then connect literary passages, representations, training and explanation in one case.');
c.slides[0].blocks=[
 P('이 사례의 질문은 “모델이 진짜 장르를 알아맞혔는가?”보다 구체적입니다. 왕권을 선언하는 대사와 폭풍 속의 대사, 사법권을 정당화하는 대화와 감옥의 독백이 서로 다른 장르 신호를 만든다면, 그 차이를 어떤 증거로 설명할 수 있을까요?','The question is more specific than whether a model discovers the true genre. If a proclamation and a storm speech, a defence of judicial authority and a prison soliloquy produce different genre signals, what evidence supports our interpretation?'),
 W('case-route'),
 U(['원문에서 시작합니다: 글로스터의 공표, 폭풍 속 리어, 『헨리 4세 2부』의 사법권 논쟁, 『리처드 2세』의 감옥 독백을 읽습니다.','Begin with passages: Gloucester’s proclamation, Lear in the storm, the judicial exchange in 2 Henry IV, and Richard II’s prison soliloquy.'],['모델의 조건을 비교합니다: 이름 가리기, 문맥 길이, 학습량, 작품 단위 분할이 어떤 질문에 답하는지 구분합니다.','Compare model conditions: distinguish the questions answered by name masking, context length, training duration and holding out entire works.'],['설명을 검토합니다: 예측 점수, 어텐션, LIME 가중치와 문학적 해석을 구분하고 후속 실험을 제안합니다.','Examine explanations: separate prediction scores, attention, LIME weights and literary interpretation, then propose a further test.']),
 P('원본 도판과 출판된 결과는 출처를 표시한 자료로 읽고, 새로 훈련한 열 모델의 측정값은 별도 비교로 확인합니다. 68개의 단계는 기초 개념부터 실험 설계와 하디에 대한 후속 연구까지 이어집니다.','Read original illustrations and printed results as attributed evidence, and inspect measured results from ten newly trained models separately. The 68 steps lead from foundations through experiment design to a further study of Hardy.')
];
c.slides[0].activity=B('『리어왕』의 서지적 장르와 한 대사의 언어적 특징이 다를 수 있는 이유를 먼저 적어 보세요. 수업이 끝날 때 같은 질문에 증거를 덧붙입니다.','First explain why Lear’s bibliographical genre and the register of one speech might differ. Return to the same question at the end with evidence.');
c.slides[15].blocks.push(W('representation-pipeline'));
c.slides[43].blocks.push(W('split-comparison'));
c.slides[50].blocks.push(W('model-comparison'));
c.slides[50].lead=B('출판된 평가를 읽은 뒤, 새로 훈련한 열 모델의 실제 결과를 조건별로 비교합니다.','After reading the printed evaluation, compare actual results from ten new models by experimental condition.');
c.slides[56].blocks.push(P('현재 저장된 기준 모델은 그림 14의 감옥 청크를 역사극으로 예측합니다. 출판된 그림의 비극 예측과 다릅니다. 이 불일치는 원본 도표를 고칠 이유가 아니라 학습 자료, 레이블, 이름, 분할과 설명 방법을 함께 검토할 이유입니다.','The saved baseline model currently predicts History for the prison chunk in figure 14, unlike the printed figure’s Tragedy prediction. This disagreement calls for examining training data, labels, names, splits and explanation methods together; it does not justify rewriting the original figure.'));
c.slides[62].blocks.push(P('사례 연구의 최종 결과물은 한 페이지짜리 주장과 증거입니다. 선택한 구절, 비교할 모델 조건, 결과와 설명의 차이, 반례, 다음 실험을 함께 제시하세요.','The case-study deliverable is a one-page argument with evidence: the selected passage, model conditions, differences between results and explanations, a counterexample, and a next experiment.'));
})();

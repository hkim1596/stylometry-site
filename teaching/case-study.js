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
/* The independent readings replace the former source-commentary paragraphs.
   Keep the historical quotations, figures, runnable teaching widgets, code and useful lists. */
c.slides.forEach(s=>{s.blocks=s.blocks.filter(b=>b.type!=='p');});
const set=(n,field,ko,en)=>{c.slides[n-1][field]=B(ko,en);};
set(1,'title','같은 작품을 왜 다르게 읽을까?','Why do we read the same work differently?');
set(1,'lead','『리어왕』에서 출발해 원문·표현·실험·해석을 하나의 질문으로 연결한다.','Start with Lear and connect passages, representations, experiments and interpretation.');
set(3,'lead','비극의 정의로 리어의 판단과 파국을 읽고, 그 정의가 설명하는 범위를 검토한다.','Read Lear’s judgment and catastrophe through a definition of tragedy, then examine what that definition explains.');
set(5,'lead','문학적 질문을 유지하면서 텍스트를 비교하는 방법을 바꾼다.','Keep the literary question in view while changing how texts are compared.');
set(11,'lead','같은 특징 배열에 나이브 베이즈·SVM·로지스틱 회귀가 적용하는 규칙을 비교한다.','Compare how Naive Bayes, an SVM and logistic regression use the same feature arrays.');
set(15,'title','2차원 지도와 전체 벡터를 함께 읽기','Read the two-dimensional map alongside full vectors');
set(15,'lead','실제 PCA 투영과 전체 차원의 코사인 값을 비교하고, 설명용 지도와 구별한다.','Compare measured PCA with full-dimensional cosine, distinguishing both from a conceptual map.');
set(19,'title','여섯 문장의 빈칸을 예측하기','Predict the gaps in six sentences');
set(19,'lead','먼저 직접 답하고, 그럴듯한 대안과 원래 목표 단어를 구분한다.','Answer first, then distinguish plausible alternatives from the recorded target.');
set(27,'lead','글로스터의 발화와 어텐션의 개념적 관계를 나란히 읽는다.','Read Gloucester’s speech beside a conceptual illustration of attention.');
set(32,'lead','비극과 역사극을 학습·평가하고, 새로운 작품을 탐색할 범위를 정한다.','Define the scope for learning and evaluating tragedy/history labels, then exploring unfamiliar works.');
set(45,'lead','설정에서 고정된 값과 실행 전에 정해야 하는 변수를 구분한다.','Distinguish fixed settings from variables that must be assigned before execution.');
set(47,'title','서로 다른 실행의 손실 곡선 비교하기','Compare loss curves from distinct runs');
set(47,'lead','저장된 기준 모델의 단계별 로그를 읽고, 참고 이미지의 별도 궤적과 비교한다.','Read the saved baseline’s step-level logs, then compare the separate trajectory in the reference image.');
set(51,'lead','실제로 저장된 열 모델의 평가 조건과 오류를 비교한다.','Compare evaluation conditions and errors across ten saved models.');
set(52,'title','세 종류의 설명값을 구분하기','Distinguish three kinds of explanatory quantity');
set(52,'lead','클래스 점수, 토큰 간 어텐션, 교란 기반 단어 기여도는 다른 계산이다.','Class scores, token-to-token attention and perturbation-based word contributions are different computations.');
set(53,'title','먼저 사법권 논쟁의 원문 읽기','Read the judicial exchange before its explanation');
set(54,'title','왕권·법·판단의 언어','The language of kingship, law and judgment');
set(54,'lead','현재 LIME의 liege·King·justice와 참고 화면의 royal을 같은 대화에 대조한다.','Compare liege, King and justice in the saved LIME result with royal in the reference display, using the same exchange.');
set(55,'title','감옥의 독백: 한 사람과 여러 존재','A prison soliloquy: one person, many selves');
set(56,'title','시간과 음악의 불협화음','The discord of time and music');
set(57,'title','두 구절, 여러 실행, 하나의 비교 질문','Two passages, several runs, one comparison');
set(59,'title','『페리클레스』: 반역과 명예','Pericles: treason and honour');
set(62,'lead','분류가 보여 주는 관계를 설명하고, 그 이름이 가리는 차이도 남겨 둔다.','Explain the relations classification reveals while retaining differences its labels conceal.');
set(64,'lead','세 장면의 설명을 비교하고 단어의 순위보다 발화 속 기능을 읽는다.','Compare explanations of three scenes and read word functions as well as rankings.');

// Preserve concise procedural lists; remove their former publication framing.
const list=(n)=>c.slides[n-1].blocks.find(b=>b.type==='list').items;
list(46)[3]=B('기록·평가 주기: 참고 구성은 10스텝마다 로그와 평가를 남긴다.','Logging and evaluation: the reference configuration records them every ten steps.');
list(57)[0]=B('참고 실행의 관찰: 사법권 청크는 History, 감옥 청크는 Tragedy 쪽이다.','Reference-run observation: the judicial chunk favours History and the prison chunk favours Tragedy.');

const captions={
 9:['짧은 인용문에서 여섯 단어만 소문자로 세는 수작업 예시.','A manual count of six lowercased words in the short quotations.'],
 19:['빈칸 연습을 위해 각색한 문장과 목표 단어. 현재 모델의 예측 결과가 아니다.','Adapted masked-language exercises with target words, not current model predictions.'],
 34:['원문과 파생 파일을 연결하는 기록 구조.','A record connecting sources and derived files.'],
 35:['TEI 구조를 설명하는 축약 예시. 실제 Folger 파일의 전사문은 아니다.','A schematic TEI example, not a transcription of an actual Folger file.'],
 40:['폴더 내용과 숫자 레이블을 연결하는 로더 구조.','A loader structure connecting folder contents with numeric labels.'],
 41:['토큰 예산에 따라 청크를 저장하는 반복문. 장면 경계를 검사하지 않는다.','A token-budget chunking loop; it does not test scene boundaries.'],
 43:['작은 클래스의 크기에 맞춘 무작위 선택. 시드 42는 선택을 반복하게 한다.','Random sampling to the smaller class size, with seed 42 for repeatability.'],
 44:['청크의 클래스 비율을 유지하며 훈련 80%, 검증 20%로 분할.','A stratified 80% training and 20% validation split of chunks.'],
 45:['참고 학습 구성. 실제 값과 실행 환경의 인자 이름을 확인한다.','Reference training configuration. Verify actual values and runtime parameter names.'],
 49:['참고 혼동행렬의 네 칸에서 직접 계산한 정확도.','Accuracy calculated directly from the four cells of the reference confusion matrix.'],
 58:['텍스트에서 청크별 예측표로 이어지는 절차.','A workflow from text to a table of chunk predictions.'],
 64:['원문 관찰과 설명값을 함께 기록하는 비교표의 열.','Comparison-table columns connecting textual observations and explanation values.']
};
for(const [n,pair]of Object.entries(captions)){const b=c.slides[n-1].blocks.find(b=>b.type==='code');if(!b)throw new Error('Missing code slide '+n);b.caption=B(...pair);}
c.slides[39].blocks.find(b=>b.type==='code').code='load_texts(data_a, 0)  # Tragedy\nload_texts(data_b, 1)  # History\n# Each item is a (text, label) pair.';

c.slides[0].blocks=[W('case-route')];
c.slides[15].blocks.push(W('representation-pipeline'));
c.slides[43].blocks.push(W('split-comparison'));
c.slides[50].blocks.push(W('model-comparison'));

const q=c.quotations;
q.gloucester.source=B('『리어왕』 2.1.58–61','King Lear 2.1.58–61');
q.gloucester.note=B('보상과 처벌의 조건, 그리고 공표의 권한을 확인하며 읽는다. 영문과 한국어 인용은 그대로 보존했다.','Read the conditions of reward and punishment and the authority for the proclamation. English and Korean quotations are preserved unchanged.');
q.storm.source=B('『리어왕』 3.4.63; 3.4.80–81','King Lear 3.4.63; 3.4.80–81');
q.storm.note=B('[…]는 두 발화 사이에 생략된 대사를 표시한다. 하나의 연속된 발화가 아니다.','[…] marks omitted dialogue between two speeches. This is not one continuous utterance.');
q.pericles.source=B('『페리클레스』 · 반역과 명예를 둘러싼 대화','Pericles · an exchange about treason and honour');
q.pericles.note=B('누가 반역자라고 부르고, 누가 그 이름을 거부하거나 승인하는지 읽는다. 두 언어의 인용을 그대로 보존했다.','Read who names a traitor and who rejects or endorses that naming. The quotations in both languages are preserved unchanged.');
q.richard.source=B('『리처드 2세』 5.5 · 감옥 독백의 어구','Richard II 5.5 · phrases from the prison soliloquy');
q.richard.note=B('서로 떨어져 있는 어구를 모은 목록이다. 연속된 인용문이 아니며, 전체 독백에서 각 어구의 관계를 확인한다.','A collection of separate phrases, not a continuous quotation. Check their relationships in the full soliloquy.');
c.figures[12].title=B('왕권과 사법권: 클래스 점수와 단어 기여도','Royal authority and justice: class scores and word contributions');
c.figures[13].title=B('감옥 독백: 클래스 점수와 단어 기여도','A prison soliloquy: class scores and word contributions');

c.slides[0].blocks.push(P('이 수업은 김희진·강수진의 「비극인가 역사극인가? 딥러닝 텍스트 분류를 통한 르네상스 희곡 분석」, 『디지털인문학의 길잡이: 입문』 421–470쪽을 바탕으로 새롭게 구성했다. 원문 인용과 그림 14개를 보존하고, 일부 한국어 분석 문단을 원문 그대로 수록했다. 분석 문단의 영어 번역과 추가 설명은 이 수업을 위해 작성했다. 상세 대조와 실행 기록은 출처 패널에서 확인할 수 있다.','Developed from Kim Heejin and Kang Sujin, “Is it tragedy or history? Analysing Renaissance drama through deep-learning text classification,” in Digital Humanities: An Introductory Guide, pp. 421–470. Literary quotations and fourteen figures are preserved, alongside selected verbatim Korean analytical passages. Their English translations and the additional teaching prose were prepared for this course. Sources provides detailed textual checks and experimental records.'));
c.slides[67].blocks.push(P('읽기 자료: 김희진·강수진, 「비극인가 역사극인가? 딥러닝 텍스트 분류를 통한 르네상스 희곡 분석」, 『디지털인문학의 길잡이: 입문』, 421–470쪽. 셰익스피어 인용의 판본·전사 대조, 원본 그림, 직접 수록한 분석 문단, 새 실험의 조건은 출처 패널에 기록했다. 참고 실험과 현재 실행, 설명용 가상 예시는 각각 구분하여 사용한다.','Reading source: Kim Heejin and Kang Sujin, “Is it tragedy or history? Analysing Renaissance drama through deep-learning text classification,” in Digital Humanities: An Introductory Guide, pp. 421–470. Sources records quotation editions and transcription checks, original figures, verbatim analytical passages and conditions of new experiments. Reference runs, current measurements and illustrative examples remain distinct.'));
})();

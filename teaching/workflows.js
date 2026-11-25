/* Selected student investigations. Source evidence remains the initial view.
   This mapping only prepares workbenches; it never invokes a model. */
(()=>{'use strict';
const B=(en,ko)=>({en,ko});
const catalogue=Object.values(window.CasePractice?.slides||{}).flatMap(s=>[...(s.primary||[]),...(s.furtherLinks||[])]);
function station(slug,example,optional=false){const found=catalogue.find(x=>x.slug===slug&&x.example===example);if(!found)throw Error(`Unvalidated teaching activity: ${slug}/${example}`);const label={...found.label};if(optional){label.en='Optional · '+label.en;label.ko='선택 활동 · '+label.ko;}return {...found,label,optional};}
const workflows={};
function add(slide,observe,prediction,experiment,compare,actionExperiment,actionCompare,stations){workflows[slide-1]={observe,prediction,experiment,compare,actionExperiment,actionCompare,actionObserve:B('Return to the source evidence','원문과 근거로 돌아가기'),stations};}
add(9,
 B('The table counts six words in two passages; neither speaker order nor syntax is represented.','표는 두 구절의 여섯 단어를 센다. 화자의 순서와 구문 관계는 표현하지 않는다.'),
 B('Which words will most strongly separate the proclamation from the storm?','공표와 폭풍을 가장 뚜렷하게 가를 단어는 무엇일까?'),
 B('Load Public authority and exposed bodies. Compare the count vectors, then inspect a word whose role depends on its sentence.','공적 권위와 노출된 신체 예제를 열어 빈도 벡터를 비교한 뒤, 문장에 따라 역할이 달라지는 단어를 살펴보자.'),
 B('Do the largest counts support your reading? Name one relation in the source that the counts cannot express.','가장 큰 빈도는 자신의 독해를 뒷받침하는가? 빈도가 표현하지 못하는 원문의 관계를 하나 지목하자.'),
 B('Count the two passages','두 구절의 단어 세기'),B('Compare counts with the passages','빈도와 원문 비교하기'),[station('bag-of-words','public-private')]);
add(10,
 B('The illustrative formula holds TF at three while changing the number of documents containing a word.','설명용 공식은 TF를3으로 고정하고 그 단어가 나오는 문서 수를 바꾼다.'),
 B('Will a word keep the same importance when the comparison collection changes?','비교 자료 모음이 바뀌어도 단어의 중요도는 같을까?'),
 B('Open the rarity example. Keep the focal passage fixed and compare the supplied document collection; inspect the station’s stated TF-IDF formula.','희소성 예제를 열자. 중심 구절을 고정한 채 제시된 비교 문서들을 살펴보고, 실습에 명시된 TF-IDF 공식을 확인하자.'),
 B('Explain one weight using both its within-passage frequency and its document frequency. Account for the live formula’s smoothing and normalization.','구절 안의 빈도와 문서 빈도로 가중치 하나를 설명하자. 실시간 공식의 평활화와 정규화도 구분하자.'),
 B('Test rarity in a corpus','코퍼스에서 희소성 검토하기'),B('Compare the weighting rules','가중치 규칙 비교하기'),[station('bag-of-words','rare-words')]);
add(13,
 B('Each word has hundreds of coordinates; the strips show only sixteen of them.','각 단어는 수백 개 좌표를 가지며 띠에는 그중16개만 보인다.'),
 B('Which pair among the eight words should be closest, and what is your textual reason?','여덟 단어 중 어느 쌍이 가장 가까울까? 원문에서 그 이유를 찾아보자.'),
 B('Inspect the eight-word embedding example and compare full-vector cosine with the projected view. Optionally inspect crown in Word neighborhoods.','여덟 단어 임베딩 예제에서 전체 벡터 코사인과 투영 화면을 비교하자. 선택 활동으로 Word neighborhoods에서 crown을 살펴볼 수 있다.'),
 B('Did the measured relation match your prediction? Separate full-vector evidence from the geometry of a two-dimensional picture.','측정된 관계가 예상과 맞았는가? 전체 벡터의 근거와2차원 그림의 기하를 구분하자.'),
 B('Inspect the eight embeddings','여덟 임베딩 살펴보기'),B('Compare distance and projection','거리와 투영 비교하기'),[station('embeddings','chapter-map'),station('neighbors','crown',true)]);
add(14,
 B('The source phrases place death-related language in punishment and bodily exposure.','원문의 어구는 죽음 관련 언어를 처벌과 신체의 노출 속에 놓는다.'),
 B('Will the same word have the same representation in burial, manner, and punning contexts?','같은 단어가 매장·태도·말장난 문맥에서 같은 표현을 가질까?'),
 B('Open the graue contexts. Keep the target word fixed, compare its supplied contexts, and inspect the contextual similarities.','graue 문맥 예제를 열자. 목표 단어를 고정한 채 제시된 문맥과 문맥적 유사도를 비교하자.'),
 B('Which change can you connect to surrounding words? How does the result qualify a fixed meaning for grave?','어떤 변화를 주변 단어와 연결할 수 있는가? 결과는 grave의 고정된 의미라는 생각을 어떻게 보완하는가?'),
 B('Test one word in context','같은 단어를 문맥에서 검토하기'),B('Compare contextual relations','문맥적 관계 비교하기'),[station('context','graue')]);
add(16,
 B('A passage vector aggregates many tokens; retrieval compares that summary with indexed works.','구절 벡터는 여러 토큰을 집계하며, 검색은 그 요약을 색인된 작품과 비교한다.'),
 B('Which kind of play might sound close to a revenge speech inside a comedy?','희극 안의 복수 연설은 어떤 종류의 극과 가깝게 들릴까?'),
 B('Open the Merchant passage in Find the nearest play. Read the source, run the comparison, and record the nearest works and similarity scores.','Find the nearest play에서 Merchant 구절을 열자. 원문을 읽고 비교를 실행한 뒤 가까운 작품과 유사도를 기록하자.'),
 B('Does the nearest work match the source genre? Distinguish similarity to indexed representations from a supervised genre prediction.','가장 가까운 작품이 원문의 장르와 일치하는가? 색인 표현 사이의 유사도와 지도학습 장르 예측을 구분하자.'),
 B('Retrieve nearby plays','가까운 작품 검색하기'),B('Compare retrieval with genre','검색 결과와 장르 비교하기'),[station('nearest','merchant')]);
add(18,
 B('The masked proclamation has a source target, proclaim; revealing it is not a model prediction.','빈칸 공표문에는 원문 정답 proclaim이 있다. 이를 공개하는 것은 모델 예측이 아니다.'),
 B('In Lear’s repeated exchange, will the model prefer the source word or another plausible word?','리어의 반복되는 대화에서 모델은 원문 단어와 다른 그럴듯한 단어 중 무엇을 선호할까?'),
 B('Open the prepared Lear exchange in Finish the line. Predict a word before asking for candidates. Optionally contrast one-word filling with a Hamlet continuation in Watch it write.','Finish the line의 준비된 리어 대화를 열자. 후보를 요청하기 전에 단어를 예상하자. 선택 활동으로 Watch it write의 햄릿 이어 쓰기와 한 단어 채우기를 대조할 수 있다.'),
 B('Where does the source word rank? Explain why a plausible completion is neither proof of textual recall nor a genre judgment.','원문 단어는 몇 위인가? 그럴듯한 완성이 원문 기억의 증거나 장르 판단과 다른 이유를 설명하자.'),
 B('Test the masked exchange','빈칸 대화 검토하기'),B('Compare source and candidates','원문과 후보 비교하기'),[station('finish-the-line','lear-nothing'),station('generate','hamlet',true)]);
add(21,
 B('The five named axes are interpretive coordinates in a conceptual figure, not named dimensions of BERT.','이름 붙인 다섯 축은 개념도의 해석적 좌표이며 BERT 차원의 이름이 아니다.'),
 B('Does subtracting a word associated with an opposite meaning remove a single semantic property?','반대 의미와 관련된 단어를 빼면 의미적 속성 하나만 제거될까?'),
 B('Open Subtract an association in Word arithmetic. Inspect the operands, predict a neighbour, then compare the measured output with that expectation.','Word arithmetic에서 연관 하나를 빼기 예제를 열자. 피연산자를 읽고 이웃을 예상한 뒤 측정 출력과 대조하자.'),
 B('What does the arithmetic demonstrate, and what does it fail to establish about a dimension named power or grief?','산술은 무엇을 보여 주며, 권력이나 슬픔이라는 이름의 차원에 대해서는 무엇을 입증하지 못하는가?'),
 B('Test a vector subtraction','벡터 빼기 검토하기'),B('Compare arithmetic with the axes','산술과 해석 축 비교하기'),[station('arithmetic','opposites')]);
add(23,
 B('Figure 5 illustrates changing relations after task training; it is not a measured displacement plot.','그림5는 과제 학습 뒤 관계 변화를 설명하며 이동량을 측정한 도표는 아니다.'),
 B('Will the same proclamation receive identical scores from differently trained classifiers?','같은 공표문이 서로 다르게 학습된 분류기에서 같은 점수를 받을까?'),
 B('Keep the Gloucester input fixed in Compare ten trained classifiers. Compare the one-epoch and baseline recipes and record each class score with its model ID.','Compare ten trained classifiers에서 글로스터 입력을 고정하자.1에포크와 기준 설정을 비교하고 모델 ID와 클래스 점수를 함께 기록하자.'),
 B('A score changed—or stayed similar. What does that establish about classification, and why does it not measure the movement pictured in Figure 5?','점수가 달라졌거나 비슷하게 유지되었다. 이는 분류에 대해 무엇을 보여 주며, 왜 그림5의 이동을 측정한 것은 아닌가?'),
 B('Compare two trained decisions','두 학습 모델의 판단 비교하기'),B('Relate results to the figure','결과를 그림과 연결하기'),[station('classifier-lab','gloucester')]);
add(27,
 B('By his authority I will proclaim it connects a verb of declaration with delegated power and a pronoun.','By his authority I will proclaim it은 선언 동사를 위임된 권위와 대명사에 연결한다.'),
 B('From proclaim, which positions will receive the strongest attention in the chosen layer and head?','선택한 층과 헤드에서 proclaim은 어느 위치에 가장 큰 어텐션을 둘까?'),
 B('Open the middle-layer proclamation example. Select proclaim as the query, inspect its destinations, then change only the head or layer.','중간 층 공표 예제를 열자. proclaim을 질의로 선택하고 참조 위치를 확인한 뒤 헤드나 층 하나만 바꾸자.'),
 B('Which relations persist and which change? Compare the actual weights with the conceptual arrows without treating either as a causal explanation.','어떤 관계가 유지되고 어떤 관계가 바뀌는가? 실제 가중치와 개념도의 화살표를 비교하되 인과적 설명으로 간주하지 말자.'),
 B('Trace proclaim’s attention','proclaim의 어텐션 추적하기'),B('Compare weights and source relations','가중치와 원문 관계 비교하기'),[station('attention','authority-middle')]);
add(39,
 B('The recorded examples split jest and nunnery into more than one WordPiece.','저장된 예제에서 jest와 nunnery는 둘 이상의 워드피스로 나뉜다.'),
 B('How many model positions will the spelling in the source use?','원문의 철자는 모델 위치를 몇 개 사용할까?'),
 B('Open jest in The tokenizer’s scissors and inspect the actual pieces. Optionally repeat with nunnery, keeping the tokenizer fixed.','The tokenizer’s scissors에서 jest의 실제 조각을 살펴보자. 선택 활동으로 같은 토크나이저에서 nunnery를 반복해 볼 수 있다.'),
 B('Compare your word count with the token count. Which unit belongs in the 510-token limit?','예상한 단어 수와 토큰 수를 비교하자.510토큰 제한에는 어느 단위를 사용해야 하는가?'),
 B('Inspect the source tokens','원문의 토큰 살펴보기'),B('Compare words with tokens','단어와 토큰 비교하기'),[station('tokenizer','jest'),station('tokenizer','nunnery',true)]);
add(41,
 B('The chunking condition tests token length; it does not test a speaker or scene boundary.','청크 조건은 토큰 길이를 검사하며 화자나 장면의 경계를 검사하지 않는다.'),
 B('Which local context might disappear when the content window shrinks from 510 to 128 tokens?','내용 길이가510토큰에서128토큰으로 줄면 어떤 가까운 문맥이 사라질까?'),
 B('Open the recorded 128-token training recipe. Inspect its chunking and run record, then compare its settings with the baseline recipe.','저장된128토큰 학습 설정을 열자. 청크 구성과 실행 기록을 살펴보고 기준 설정과 비교하자.'),
 B('Which differences concern input context, chunk counts, or training updates? Avoid attributing every score change to context alone.','어떤 차이가 입력 문맥·청크 수·학습 갱신에 해당하는가? 모든 점수 변화를 문맥만의 효과로 돌리지 말자.'),
 B('Inspect the short-context recipe','짧은 문맥 설정 살펴보기'),B('Compare context and training budgets','문맥과 학습량 비교하기'),[station('train-classifier','th-short-128')]);
add(44,
 B('The chunk split shares works across training and validation; the held-out-work design does not.','청크 분할은 학습과 검증에 작품이 겹치지만 작품 홀드아웃 설계는 그렇지 않다.'),
 B('Which design better tests a claim about entirely unfamiliar works?','전혀 익숙하지 않은 작품에 대한 주장은 어느 설계가 더 잘 검토하는가?'),
 B('Inspect the held-out-work recipe. Record its training works, evaluation works, chunk counts, and saved validation result.','작품 홀드아웃 설정을 살펴보자. 학습 작품·평가 작품·청크 수·저장된 검증 결과를 기록하자.'),
 B('Compare the population behind each score. Write one claim that the chunk split supports and one that it cannot establish.','각 점수의 평가 대상을 비교하자. 청크 분할이 뒷받침하는 주장과 입증하지 못하는 주장을 하나씩 쓰자.'),
 B('Inspect the held-out works','홀드아웃 작품 살펴보기'),B('Compare the evaluation populations','평가 대상 비교하기'),[station('train-classifier','th-play-heldout')]);
add(50,
 B('The reference matrix contains 229 chunks, with three Tragedy→History errors and two in the reverse direction.','기준 행렬에는229청크가 있으며 비극→역사극 오류3개와 반대 방향 오류2개가 있다.'),
 B('Where will those two error directions appear in another run’s matrix?','다른 실행의 행렬에서는 두 오류 방향이 어느 칸에 나타날까?'),
 B('Open the saved baseline evaluation. Identify the matrix axes, denominator, and each error direction before interpreting its accuracy.','저장된 기준 실행의 평가를 열자. 정확도를 해석하기 전에 행렬 축·분모·각 오류 방향을 확인하자.'),
 B('Compare the two matrices as separate experiments. Which counts differ, and why must they not be merged into one result?','두 행렬을 별도 실험으로 비교하자. 어떤 수치가 다르며, 왜 하나의 결과로 합치면 안 되는가?'),
 B('Inspect a recorded confusion matrix','저장된 오류 행렬 살펴보기'),B('Compare two evaluation records','두 평가 기록 비교하기'),[station('train-classifier','th-baseline')]);
add(52,
 B('Class scores, token-to-token attention, and LIME coefficients have different units and origins.','클래스 점수·토큰 간 어텐션·LIME 계수는 단위와 산출 방식이 다르다.'),
 B('Will the strongest attention destination also be the word with the largest local LIME coefficient?','가장 강한 어텐션의 대상이 가장 큰 국소 LIME 계수를 갖는 단어이기도 할까?'),
 B('Inspect the proclamation in both attention and LIME. Keep track of the input, model, selected layer/head, explained class, and local fit.','어텐션과 LIME에서 공표문을 살펴보자. 입력·모델·선택한 층과 헤드·설명 대상 클래스·국소 적합도를 함께 기록하자.'),
 B('Describe what each number measures before comparing highlighted words. Attention and LIME need not rank words alike.','강조된 단어를 비교하기 전에 각 숫자가 측정하는 것을 설명하자. 어텐션과 LIME의 단어 순위는 같을 필요가 없다.'),
 B('Inspect attention and LIME','어텐션과 LIME 살펴보기'),B('Compare the explanatory quantities','설명 수치 비교하기'),[station('attention','authority'),station('lime-lab','gloucester')]);
add(54,
 B('The reference explanation gives royal a large History-side contribution in the judicial passage.','기준 설명에서는 사법권 구절의 royal에 큰 역사극 방향 기여도가 붙는다.'),
 B('Will the newly recorded model emphasize royal or other words of law and authority?','새로 기록한 모델은 royal을 강조할까, 법과 권위의 다른 단어를 강조할까?'),
 B('In Investigate with LIME, choose “Open this model’s prepared passage results” and select the royal-justice passage. Inspect its saved explanation and local fit before any new run.','Investigate with LIME에서 “Open this model’s prepared passage results”를 누르고 왕권·사법권 구절을 선택하자. 새 실행 전에 저장된 설명과 국소 적합도를 확인하자.'),
 B('Compare the leading words with the reference image and with each speaker’s argument. Separate differences between runs from differences between speakers.','상위 단어를 기준 이미지와 각 화자의 논증에 대조하자. 실행 사이의 차이와 화자 사이의 차이를 구분하자.'),
 B('Inspect the judicial explanation','사법권 구절의 설명 살펴보기'),B('Compare contributions with the dialogue','기여도와 대화 비교하기'),[station('lime-lab','chapter-royal')]);
add(56,
 B('Time and music shape Richard’s prison meditation; the reference model favours Tragedy for this chunk.','시간과 음악은 리처드의 감옥 사색을 구성하며 기준 모델은 이 청크에서 비극을 선호한다.'),
 B('Will the saved baseline agree with the reference decision, and which words might account for a disagreement?','저장된 기준 모델은 원래 판단에 동의할까? 불일치와 관련될 만한 단어는 무엇일까?'),
 B('In Investigate with LIME, choose “Open this model’s prepared passage results” and select the prison passage. Read its score, explained class, leading coefficients, and local fit together.','Investigate with LIME에서 “Open this model’s prepared passage results”를 누르고 감옥 구절을 선택하자. 점수·설명 대상 클래스·상위 계수·국소 적합도를 함께 읽자.'),
 B('Return to the time/music words and Bolingbroke. Which explanation supports your reading, and where does the model comparison leave uncertainty?','시간·음악의 어휘와 Bolingbroke로 돌아가자. 어떤 설명이 독해를 지지하며, 모델 비교에서 무엇이 여전히 불확실한가?'),
 B('Inspect the prison explanation','감옥 구절의 설명 살펴보기'),B('Compare the two prison decisions','두 감옥 구절 판단 비교하기'),[station('lime-lab','chapter-prison')]);
add(60,
 B('The threshold control changes a reporting policy while the reference score stays at 0.5987.','기준 조절은 보고 방침을 바꾸며 원래 점수0.5987은 고정되어 있다.'),
 B('Would your reporting policy still call the passage History-leaning if a different checkpoint gave a different score?','다른 체크포인트의 점수가 달라져도 같은 방침으로 이 구절을 역사극 쪽이라고 보고할까?'),
 B('Open the Pericles input in Compare ten trained classifiers. Keep its wording fixed and record the score from an explicitly identified model.','Compare ten trained classifiers에서 Pericles 입력을 열자. 문구를 고정하고 명시한 모델의 점수를 기록하자.'),
 B('Apply your threshold to the new score separately. Distinguish changing the checkpoint, changing the text, and changing only the reporting rule.','새 점수에 기준을 별도로 적용하자. 체크포인트 변경·텍스트 변경·보고 규칙만의 변경을 구분하자.'),
 B('Check another Pericles score','다른 Pericles 점수 확인하기'),B('Compare scores and reporting policy','점수와 보고 방침 비교하기'),[station('classifier-lab','pericles')]);
add(62,
 B('Lear’s publication labels and local registers need not give the same kind of genre evidence.','리어의 출판 분류와 구절의 말투는 같은 종류의 장르 근거가 아니다.'),
 B('How might a classifier label a revenge speech inside a comedy?','분류기는 희극 속 복수 연설에 어떤 레이블을 붙일까?'),
 B('Read the Merchant example in Judge my passage, then inspect Explain the verdict for the same example. Record the available labels and model identity.','Judge my passage에서 Merchant 예제를 읽고 같은 예제를 Explain the verdict에서도 살펴보자. 가능한 레이블과 모델 정체성을 기록하자.'),
 B('Return to your initial genre definition. Which words or relations explain the decision, and what does the source’s comedy classification still tell you?','처음의 장르 정의로 돌아가자. 어떤 단어나 관계가 판단을 설명하며, 원문의 희극 분류는 여전히 무엇을 알려 주는가?'),
 B('Test the revenge speech','복수 연설 검토하기'),B('Return to the genre question','장르 질문으로 돌아가기'),[station('judge','merchant'),station('explain','merchant')]);
add(64,
 B('The worksheet compares word functions across three passages rather than copying a single ranked list.','비교표는 하나의 순위를 옮겨 적는 대신 세 구절에서 단어의 기능을 비교한다.'),
 B('Which words will link royal justice, storm suffering, and the accusation of treason?','왕권·사법권, 폭풍의 고통, 반역 혐의를 연결할 단어는 무엇일까?'),
 B('Choose “Open this model’s prepared passage results” and inspect royal justice, the storm, and Pericles. Record the model, class, local fit, and five meaningful words with their directions for each.','“Open this model’s prepared passage results”에서 왕권·사법권, 폭풍, Pericles를 살펴보자. 각각의 모델·클래스·국소 적합도와 의미 있는 단어5개의 방향을 기록하자.'),
 B('Complete the three rows with functions such as command, condition, naming, or bodily imagery. Add a counterexample to your strongest generalization.','명령·조건·이름 부르기·신체 이미지 같은 기능으로 세 행을 채우자. 가장 강한 일반화에 대한 반례를 덧붙이자.'),
 B('Inspect three explanation files','세 설명 파일 살펴보기'),B('Compare word functions across passages','구절 간 단어 기능 비교하기'),[station('lime-lab','chapter-royal'),station('lime-lab','storm'),station('lime-lab','pericles')]);
add(67,
 B('Giving Hardy a third class changes the target definition. The available Shakespeare experiment offers a parallel label-design comparison.','하디를 세 번째 클래스로 두면 정답 정의가 바뀐다. 준비된 셰익스피어 실험으로 유사한 레이블 설계를 비교할 수 있다.'),
 B('What can change when Comedy becomes an available label alongside Tragedy and History?','비극·역사극과 함께 희극을 선택할 수 있게 되면 무엇이 달라질까?'),
 B('Inspect the recorded three-class training recipe and its class mapping. Optionally test the prepared Pericles input with that three-class model.','저장된 세 클래스 학습 설정과 클래스 대응을 확인하자. 선택 활동으로 준비된 Pericles 입력을 세 클래스 모델에서 검토할 수 있다.'),
 B('Which changed results follow from a changed task? Transfer the design lesson to Hardy without claiming that a Hardy model has been trained here.','어떤 결과 변화가 과제 변경과 관련되는가? 여기서 하디 모델을 학습했다는 주장 없이 설계의 교훈을 하디 문제로 옮겨 보자.'),
 B('Inspect the three-class design','세 클래스 설계 살펴보기'),B('Compare the meaning of the labels','레이블 의미 비교하기'),[station('train-classifier','genre-three-way'),station('classifier-lab','pericles-three-way',true)]);
window.TeachingWorkflows=workflows;
})();

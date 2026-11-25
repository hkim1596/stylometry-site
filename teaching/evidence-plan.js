/* Per-slide evidence and selected workflow targets for independent QA. Not required by the runtime. */
window.TeachingEvidencePlan = [
  {
    "slide": 1,
    "title": {
      "ko": "같은 작품을 왜 다르게 읽을까?",
      "en": "Why do we read the same work differently?"
    },
    "evidence": "Two exact Lear quotations juxtapose public authority and storm vulnerability.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which words make the two registers different?",
      "ko": "두 말투의 차이를 만드는 단어는 무엇인가?"
    },
    "workflow": null
  },
  {
    "slide": 2,
    "title": {
      "ko": "1608년의 표제와 1623년의 목차",
      "en": "A 1608 title and a 1623 catalogue"
    },
    "evidence": "Original Figures 1–2 show the 1608 title and 1623 catalogue.",
    "defaultFigures": [
      1,
      2
    ],
    "studentPrompt": {
      "en": "What kind of evidence does each document provide?",
      "ko": "각 문서는 어떤 종류의 근거를 제공하는가?"
    },
    "workflow": null
  },
  {
    "slide": 3,
    "title": {
      "ko": "본질로 정의하기: 아리스토텔레스",
      "en": "Defining genre through essential features"
    },
    "evidence": "Large Aristotle terms distinguish theoretical summary from Lear's catastrophe.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which terms concern action, and which concern an audience?",
      "ko": "어떤 용어는 행위를, 어떤 용어는 관객을 가리키는가?"
    },
    "workflow": null
  },
  {
    "slide": 4,
    "title": {
      "ko": "관계로 읽기: 역사극 목록의 자리",
      "en": "Reading genre relationally: a place in the histories"
    },
    "evidence": "Named history and tragedy plays form conceptual comparison sets around Lear.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "How does the comparison set frame Lear?",
      "ko": "비교 집합은 리어를 어떻게 규정하는가?"
    },
    "workflow": null
  },
  {
    "slide": 5,
    "title": {
      "ko": "빈도에서 문맥과 관계망으로",
      "en": "From frequencies to contexts and relations"
    },
    "evidence": "One source sentence becomes counts, a conditional relation, and speaker context.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What does each representation keep?",
      "ko": "각 표현 방식에는 무엇이 남는가?"
    },
    "workflow": null
  },
  {
    "slide": 6,
    "title": {
      "ko": "특징과 레이블: 질문을 학습 문제로 바꾸기",
      "en": "Features and labels: translating a question into a task"
    },
    "evidence": "Selected source counts form X; King Lear supplies the inherited Tragedy label y.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Does the label describe the work or this speech?",
      "ko": "레이블은 작품을 설명하는가,이 대사를 설명하는가?"
    },
    "workflow": null
  },
  {
    "slide": 7,
    "title": {
      "ko": "원문 ①: 글로스터의 공표",
      "en": "Passage 1: Gloucester’s proclamation"
    },
    "evidence": "The complete Gloucester proclamation displays authority, reward, and punishment.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What does the conditional threat make death mean?",
      "ko": "조건부 위협은 죽음을 어떤 의미로 만드는가?"
    },
    "workflow": null
  },
  {
    "slide": 8,
    "title": {
      "ko": "원문 ②: 폭풍 속의 신체와 광기",
      "en": "Passage 2: bodily exposure and madness in the storm"
    },
    "evidence": "The complete Fool/Lear storm excerpt retains speaker labels and bodily language.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "How does the body change the meaning of death?",
      "ko": "신체의 상황은 죽음의 의미를 어떻게 바꾸는가?"
    },
    "workflow": null
  },
  {
    "slide": 9,
    "title": {
      "ko": "단어 주머니: 순서를 접고 횟수 세기",
      "en": "Bag of words: counting while discarding order"
    },
    "evidence": "A manual table counts six terms in the two verified excerpts.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What cannot be recovered from this table?",
      "ko": "이 표에서 복원할 수 없는 것은 무엇인가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "bag-of-words",
          "example": "public-private",
          "optional": false
        }
      ],
      "observe": {
        "en": "The table counts six words in two passages; neither speaker order nor syntax is represented.",
        "ko": "표는 두 구절의 여섯 단어를 센다. 화자의 순서와 구문 관계는 표현하지 않는다."
      },
      "experiment": {
        "en": "Load Public authority and exposed bodies. Compare the count vectors, then inspect a word whose role depends on its sentence.",
        "ko": "공적 권위와 노출된 신체 예제를 열어 빈도 벡터를 비교한 뒤, 문장에 따라 역할이 달라지는 단어를 살펴보자."
      },
      "compare": {
        "en": "Do the largest counts support your reading? Name one relation in the source that the counts cannot express.",
        "ko": "가장 큰 빈도는 자신의 독해를 뒷받침하는가? 빈도가 표현하지 못하는 원문의 관계를 하나 지목하자."
      }
    }
  },
  {
    "slide": 10,
    "title": {
      "ko": "TF-IDF: 많이 나오면서 드문 단어",
      "en": "TF-IDF: frequent here, uncommon elsewhere"
    },
    "evidence": "An interactive TF-IDF equation and dot field hold TF at three.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "When does the same TF receive a smaller weight?",
      "ko": "같은TF에 더 작은 가중치가 붙는 때는 언제인가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "bag-of-words",
          "example": "rare-words",
          "optional": false
        }
      ],
      "observe": {
        "en": "The illustrative formula holds TF at three while changing the number of documents containing a word.",
        "ko": "설명용 공식은 TF를3으로 고정하고 그 단어가 나오는 문서 수를 바꾼다."
      },
      "experiment": {
        "en": "Open the rarity example. Keep the focal passage fixed and compare the supplied document collection; inspect the station’s stated TF-IDF formula.",
        "ko": "희소성 예제를 열자. 중심 구절을 고정한 채 제시된 비교 문서들을 살펴보고, 실습에 명시된 TF-IDF 공식을 확인하자."
      },
      "compare": {
        "en": "Explain one weight using both its within-passage frequency and its document frequency. Account for the live formula’s smoothing and normalization.",
        "ko": "구절 안의 빈도와 문서 빈도로 가중치 하나를 설명하자. 실시간 공식의 평활화와 정규화도 구분하자."
      }
    }
  },
  {
    "slide": 11,
    "title": {
      "ko": "같은 벡터, 다른 분류 규칙",
      "en": "The same vectors, different classification rules"
    },
    "evidence": "Three classification equations use one shared feature vector.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which part changes while the feature vector stays fixed?",
      "ko": "특성 벡터가 같을 때 어느 부분이 달라지는가?"
    },
    "workflow": null
  },
  {
    "slide": 12,
    "title": {
      "ko": "통계적 읽기의 장점과 한계",
      "en": "The gains and limits of statistical reading"
    },
    "evidence": "A source sentence and unordered word bag expose the loss of relations.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Who acts on whom—and where is that relation lost?",
      "ko": "누가 누구에게 행위하며,그 관계는 어디서 사라지는가?"
    },
    "workflow": null
  },
  {
    "slide": 13,
    "title": {
      "ko": "임베딩: 횟수에서 관계의 좌표로",
      "en": "Embedding: from counts to relational coordinates"
    },
    "evidence": "Recorded BERT embeddings display the first 16 coordinates of five words.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Can one coordinate be named grief from these numbers alone?",
      "ko": "이 숫자만으로 한 좌표를 슬픔이라 부를 수 있는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "embeddings",
          "example": "chapter-map",
          "optional": false
        },
        {
          "slug": "neighbors",
          "example": "crown",
          "optional": true
        }
      ],
      "observe": {
        "en": "Each word has hundreds of coordinates; the strips show only sixteen of them.",
        "ko": "각 단어는 수백 개 좌표를 가지며 띠에는 그중16개만 보인다."
      },
      "experiment": {
        "en": "Inspect the eight-word embedding example and compare full-vector cosine with the projected view. Optionally inspect crown in Word neighborhoods.",
        "ko": "여덟 단어 임베딩 예제에서 전체 벡터 코사인과 투영 화면을 비교하자. 선택 활동으로 Word neighborhoods에서 crown을 살펴볼 수 있다."
      },
      "compare": {
        "en": "Did the measured relation match your prediction? Separate full-vector evidence from the geometry of a two-dimensional picture.",
        "ko": "측정된 관계가 예상과 맞았는가? 전체 벡터의 근거와2차원 그림의 기하를 구분하자."
      }
    }
  },
  {
    "slide": 14,
    "title": {
      "ko": "같은 죽음, 다른 관계",
      "en": "The same field of death, different relations"
    },
    "evidence": "Exact death/grave phrases contrast a conditional sanction with bodily exposure.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What relation surrounds each death-related expression?",
      "ko": "죽음 관련 표현은 각각 어떤 관계 속에 놓이는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "context",
          "example": "graue",
          "optional": false
        }
      ],
      "observe": {
        "en": "The source phrases place death-related language in punishment and bodily exposure.",
        "ko": "원문의 어구는 죽음 관련 언어를 처벌과 신체의 노출 속에 놓는다."
      },
      "experiment": {
        "en": "Open the graue contexts. Keep the target word fixed, compare its supplied contexts, and inspect the contextual similarities.",
        "ko": "graue 문맥 예제를 열자. 목표 단어를 고정한 채 제시된 문맥과 문맥적 유사도를 비교하자."
      },
      "compare": {
        "en": "Which change can you connect to surrounding words? How does the result qualify a fixed meaning for grave?",
        "ko": "어떤 변화를 주변 단어와 연결할 수 있는가? 결과는 grave의 고정된 의미라는 생각을 어떻게 보완하는가?"
      }
    }
  },
  {
    "slide": 15,
    "title": {
      "ko": "2차원 지도와 전체 벡터를 함께 읽기",
      "en": "Read the two-dimensional map alongside full vectors"
    },
    "evidence": "Figure 3 leads; Explore contains recorded PCA and full-vector cosine.",
    "defaultFigures": [
      3
    ],
    "studentPrompt": {
      "en": "What can a two-dimensional projection hide?",
      "ko": "2차원 투영은 무엇을 숨길 수 있는가?"
    },
    "workflow": null
  },
  {
    "slide": 16,
    "title": {
      "ko": "단어에서 장면과 작품의 벡터로",
      "en": "From word vectors to scenes and works"
    },
    "evidence": "Illustrative pooling compares 80/20 token shares with 50/50 scene weighting.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which averaging rule gives the long scene more influence?",
      "ko": "어느 평균 규칙이 긴 장면에 더 큰 비중을 주는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "nearest",
          "example": "merchant",
          "optional": false
        }
      ],
      "observe": {
        "en": "A passage vector aggregates many tokens; retrieval compares that summary with indexed works.",
        "ko": "구절 벡터는 여러 토큰을 집계하며, 검색은 그 요약을 색인된 작품과 비교한다."
      },
      "experiment": {
        "en": "Open the Merchant passage in Find the nearest play. Read the source, run the comparison, and record the nearest works and similarity scores.",
        "ko": "Find the nearest play에서 Merchant 구절을 열자. 원문을 읽고 비교를 실행한 뒤 가까운 작품과 유사도를 기록하자."
      },
      "compare": {
        "en": "Does the nearest work match the source genre? Distinguish similarity to indexed representations from a supervised genre prediction.",
        "ko": "가장 가까운 작품이 원문의 장르와 일치하는가? 색인 표현 사이의 유사도와 지도학습 장르 예측을 구분하자."
      }
    }
  },
  {
    "slide": 17,
    "title": {
      "ko": "임베딩은 형식, 사전학습은 학습 과정",
      "en": "Embedding is a form; pretraining is a learning process"
    },
    "evidence": "Recorded vector coordinates stand beside a source-derived masked target.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which panel shows a form, and which shows a learning objective?",
      "ko": "어느 쪽이 표현 형식이며,어느 쪽이 학습 목표인가?"
    },
    "workflow": null
  },
  {
    "slide": 18,
    "title": {
      "ko": "자기지도학습: 답을 텍스트에서 만들기",
      "en": "Self-supervision: deriving targets from the text"
    },
    "evidence": "A masked proclamation reveals proclaim as its source target.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What word does the source supply?",
      "ko": "원문이 제공하는 단어는 무엇인가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "finish-the-line",
          "example": "lear-nothing",
          "optional": false
        },
        {
          "slug": "generate",
          "example": "hamlet",
          "optional": true
        }
      ],
      "observe": {
        "en": "The masked proclamation has a source target, proclaim; revealing it is not a model prediction.",
        "ko": "빈칸 공표문에는 원문 정답 proclaim이 있다. 이를 공개하는 것은 모델 예측이 아니다."
      },
      "experiment": {
        "en": "Open the prepared Lear exchange in Finish the line. Predict a word before asking for candidates. Optionally contrast one-word filling with a Hamlet continuation in Watch it write.",
        "ko": "Finish the line의 준비된 리어 대화를 열자. 후보를 요청하기 전에 단어를 예상하자. 선택 활동으로 Watch it write의 햄릿 이어 쓰기와 한 단어 채우기를 대조할 수 있다."
      },
      "compare": {
        "en": "Where does the source word rank? Explain why a plausible completion is neither proof of textual recall nor a genre judgment.",
        "ko": "원문 단어는 몇 위인가? 그럴듯한 완성이 원문 기억의 증거나 장르 판단과 다른 이유를 설명하자."
      }
    }
  },
  {
    "slide": 19,
    "title": {
      "ko": "여섯 문장의 빈칸을 예측하기",
      "en": "Predict the gaps in six sentences"
    },
    "evidence": "Six explicitly adapted masked prompts reveal their supplied targets.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which completions are plausible before revealing the targets?",
      "ko": "정답을 보기 전에 어떤 완성이 그럴듯한가?"
    },
    "workflow": null
  },
  {
    "slide": 20,
    "title": {
      "ko": "예측 → 손실 → 역전파 → 갱신",
      "en": "Prediction → loss → backpropagation → update"
    },
    "evidence": "Source-target cross-entropy, gradient, and update equations show learning operations.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which operation changes the parameters?",
      "ko": "어떤 연산이 매개변수를 바꾸는가?"
    },
    "workflow": null
  },
  {
    "slide": 21,
    "title": {
      "ko": "의미축 프로필: 이름은 사후 해석이다",
      "en": "Semantic-axis profiles: names are interpretations"
    },
    "evidence": "Figure 4 leads beside its five exact interpretive axis names.",
    "defaultFigures": [
      4
    ],
    "studentPrompt": {
      "en": "Which words resist a simple public/private division?",
      "ko": "공적/사적구분에 쉽게 들어맞지 않는 단어는 무엇인가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "arithmetic",
          "example": "opposites",
          "optional": false
        }
      ],
      "observe": {
        "en": "The five named axes are interpretive coordinates in a conceptual figure, not named dimensions of BERT.",
        "ko": "이름 붙인 다섯 축은 개념도의 해석적 좌표이며 BERT 차원의 이름이 아니다."
      },
      "experiment": {
        "en": "Open Subtract an association in Word arithmetic. Inspect the operands, predict a neighbour, then compare the measured output with that expectation.",
        "ko": "Word arithmetic에서 연관 하나를 빼기 예제를 열자. 피연산자를 읽고 이웃을 예상한 뒤 측정 출력과 대조하자."
      },
      "compare": {
        "en": "What does the arithmetic demonstrate, and what does it fail to establish about a dimension named power or grief?",
        "ko": "산술은 무엇을 보여 주며, 권력이나 슬픔이라는 이름의 차원에 대해서는 무엇을 입증하지 못하는가?"
      }
    }
  },
  {
    "slide": 22,
    "title": {
      "ko": "레이블로 경계 만들기",
      "en": "Learning a boundary from labels"
    },
    "evidence": "The BERT classification head connects representations, softmax, and a work label.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Who supplies the target genre?",
      "ko": "정답 장르는 누가 제공하는가?"
    },
    "workflow": null
  },
  {
    "slide": 23,
    "title": {
      "ko": "미세 조정 전후의 관계 비교",
      "en": "Comparing relations before and after fine tuning"
    },
    "evidence": "Figure 5 leads; Explore lists the fixed conditions for a before/after comparison.",
    "defaultFigures": [
      5
    ],
    "studentPrompt": {
      "en": "Where do death and extremity sit before and after fine tuning?",
      "ko": "미세 조정 전후 death와 extremity는 어디에 놓이는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "optional": false
        }
      ],
      "observe": {
        "en": "Figure 5 illustrates changing relations after task training; it is not a measured displacement plot.",
        "ko": "그림5는 과제 학습 뒤 관계 변화를 설명하며 이동량을 측정한 도표는 아니다."
      },
      "experiment": {
        "en": "Keep the Gloucester input fixed in Compare ten trained classifiers. Compare the one-epoch and baseline recipes and record each class score with its model ID.",
        "ko": "Compare ten trained classifiers에서 글로스터 입력을 고정하자.1에포크와 기준 설정을 비교하고 모델 ID와 클래스 점수를 함께 기록하자."
      },
      "compare": {
        "en": "A score changed—or stayed similar. What does that establish about classification, and why does it not measure the movement pictured in Figure 5?",
        "ko": "점수가 달라졌거나 비슷하게 유지되었다. 이는 분류에 대해 무엇을 보여 주며, 왜 그림5의 이동을 측정한 것은 아닌가?"
      }
    }
  },
  {
    "slide": 24,
    "title": {
      "ko": "미세 조정의 네 단계",
      "en": "Four operations in fine tuning"
    },
    "evidence": "Encoding, representation, class-score, and update equations trace one training step.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "At which step is the supplied label used?",
      "ko": "어느 단계에서 제시한 레이블을 사용하는가?"
    },
    "workflow": null
  },
  {
    "slide": 25,
    "title": {
      "ko": "작품 지도와 『리어왕』의 경계",
      "en": "A map of plays and Lear at the boundary"
    },
    "evidence": "Figure 6 leads; Explore contains a clearly conceptual boundary map.",
    "defaultFigures": [
      6
    ],
    "studentPrompt": {
      "en": "What could a boundary position mean besides error?",
      "ko": "경계의 위치는 오류 이외에 무엇을 의미할 수 있는가?"
    },
    "workflow": null
  },
  {
    "slide": 26,
    "title": {
      "ko": "어텐션은 어떤 계산을 기록하는가?",
      "en": "What does attention record?"
    },
    "evidence": "Recorded attention controls select a head and query to show destination weights.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Where does this query place its strongest weights?",
      "ko": "이 질의는 어느 위치에 가장 큰 가중치를 두는가?"
    },
    "workflow": null
  },
  {
    "slide": 27,
    "title": {
      "ko": "proclaim이 참조하는 문맥",
      "en": "The context attended to by proclaim"
    },
    "evidence": "Figure 7 leads beside proclaim, authority, and the exact source phrase.",
    "defaultFigures": [
      7
    ],
    "studentPrompt": {
      "en": "Whose authority does his name?",
      "ko": "his는 누구의 권위를 가리키는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "attention",
          "example": "authority-middle",
          "optional": false
        }
      ],
      "observe": {
        "en": "By his authority I will proclaim it connects a verb of declaration with delegated power and a pronoun.",
        "ko": "By his authority I will proclaim it은 선언 동사를 위임된 권위와 대명사에 연결한다."
      },
      "experiment": {
        "en": "Open the middle-layer proclamation example. Select proclaim as the query, inspect its destinations, then change only the head or layer.",
        "ko": "중간 층 공표 예제를 열자. proclaim을 질의로 선택하고 참조 위치를 확인한 뒤 헤드나 층 하나만 바꾸자."
      },
      "compare": {
        "en": "Which relations persist and which change? Compare the actual weights with the conceptual arrows without treating either as a causal explanation.",
        "ko": "어떤 관계가 유지되고 어떤 관계가 바뀌는가? 실제 가중치와 개념도의 화살표를 비교하되 인과적 설명으로 간주하지 말자."
      }
    }
  },
  {
    "slide": 28,
    "title": {
      "ko": "death와 grave의 연결망",
      "en": "The relational patterns of death and grave"
    },
    "evidence": "Figure 8 leads beside the exact death/grave relations and surrounding words.",
    "defaultFigures": [
      8
    ],
    "studentPrompt": {
      "en": "What changes when death is a sanction or a bodily comparison?",
      "ko": "죽음이 처벌일 때와 신체의 비교일 때 무엇이 달라지는가?"
    },
    "workflow": null
  },
  {
    "slide": 29,
    "title": {
      "ko": "멀티헤드: 네 렌즈의 비유",
      "en": "Multi-head attention: the four-lens analogy"
    },
    "evidence": "Figure 9 leads; Explore compares actual recorded attention heads.",
    "defaultFigures": [
      9
    ],
    "studentPrompt": {
      "en": "Are the named lenses fixed jobs of actual heads?",
      "ko": "이름 붙인 렌즈는 실제 헤드의 고정된 역할인가?"
    },
    "workflow": null
  },
  {
    "slide": 30,
    "title": {
      "ko": "여러 표현을 합칠 때 생기는 해석",
      "en": "Interpreting combined representations"
    },
    "evidence": "Head concatenation and an illustrative chunk vote occupy separate analytical levels.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which combination happens inside the model?",
      "ko": "어느 결합이 모델 내부에서 일어나는가?"
    },
    "workflow": null
  },
  {
    "slide": 31,
    "title": {
      "ko": "해석 가능성에서 멀리서 읽기로",
      "en": "From interpretability to distant reading"
    },
    "evidence": "An actual prison-input score accompanies a source phrase and explanation units.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which claim is measured, and which is interpretive?",
      "ko": "어느 주장이 측정이며,어느 주장이 해석인가?"
    },
    "workflow": null
  },
  {
    "slide": 32,
    "title": {
      "ko": "실습의 질문과 범위를 정하기",
      "en": "Define the practical question and its scope"
    },
    "evidence": "A concrete King Lear label choice contrasts with later Pericles exploration.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Can a two-label model predict Romance?",
      "ko": "두 레이블 모델이 로맨스를 예측할 수 있는가?"
    },
    "workflow": null
  },
  {
    "slide": 33,
    "title": {
      "ko": "일곱 단계의 연구 흐름",
      "en": "The seven-stage research workflow"
    },
    "evidence": "Figure 10 leads with the English companion or unchanged Korean original.",
    "defaultFigures": [
      10
    ],
    "studentPrompt": {
      "en": "Which earlier decision can change the final prediction?",
      "ko": "어떤 앞선 결정이 최종 예측을 바꿀 수 있는가?"
    },
    "workflow": null
  },
  {
    "slide": 34,
    "title": {
      "ko": "Folger에서 TEI-XML 확보하기",
      "en": "Obtain TEI-XML from Folger"
    },
    "evidence": "A verified Richard II XML record shows its hash, speech IDs, and source location.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Can this result be traced back to a source speech?",
      "ko": "이 결과에서 원문 발화로 되돌아갈 수 있는가?"
    },
    "workflow": null
  },
  {
    "slide": 35,
    "title": {
      "ko": "TEI 태그를 읽는 이유",
      "en": "Why read the TEI tags?"
    },
    "evidence": "The existing TEI code snippet labels speaker, dialogue, and stage-direction roles.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which tags contribute text to the model input?",
      "ko": "어떤 태그의 텍스트가 모델 입력에 들어가는가?"
    },
    "workflow": null
  },
  {
    "slide": 36,
    "title": {
      "ko": "판본·서지 정보와 EEBO-TCP로의 확장",
      "en": "Editions, bibliography and an EEBO-TCP extension"
    },
    "evidence": "Edition types accompany explicitly illustrative historical/modern spelling pairs.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Could a spelling change alter tokenization?",
      "ko": "철자 변화가 토큰화를 바꿀 수 있는가?"
    },
    "workflow": null
  },
  {
    "slide": 37,
    "title": {
      "ko": "대사만 추출하기",
      "en": "Extract speech-only text"
    },
    "evidence": "Exact Exton/Richard quotations reveal the speaker boundary removed by extraction.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Who does I refer to before and after the boundary?",
      "ko": "경계 전후 I는 각각 누구를 가리키는가?"
    },
    "workflow": null
  },
  {
    "slide": 38,
    "title": {
      "ko": "고유명사 치환은 별도의 실험이다",
      "en": "Name masking is a separate experiment"
    },
    "evidence": "An original Bolingbroke phrase contrasts with its derived person replacement.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What is removed besides a work-identification cue?",
      "ko": "작품 식별 단서 이외에 무엇이 사라지는가?"
    },
    "workflow": null
  },
  {
    "slide": 39,
    "title": {
      "ko": "단어와 토큰은 같은 단위가 아니다",
      "en": "Words and tokens are not the same unit"
    },
    "evidence": "Actual jest and nunnery WordPiece outputs show that words differ from tokens.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "How many model positions does each word occupy?",
      "ko": "각 단어가 모델 위치를 몇 개 차지하는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "tokenizer",
          "example": "jest",
          "optional": false
        },
        {
          "slug": "tokenizer",
          "example": "nunnery",
          "optional": true
        }
      ],
      "observe": {
        "en": "The recorded examples split jest and nunnery into more than one WordPiece.",
        "ko": "저장된 예제에서 jest와 nunnery는 둘 이상의 워드피스로 나뉜다."
      },
      "experiment": {
        "en": "Open jest in The tokenizer’s scissors and inspect the actual pieces. Optionally repeat with nunnery, keeping the tokenizer fixed.",
        "ko": "The tokenizer’s scissors에서 jest의 실제 조각을 살펴보자. 선택 활동으로 같은 토크나이저에서 nunnery를 반복해 볼 수 있다."
      },
      "compare": {
        "en": "Compare your word count with the token count. Which unit belongs in the 510-token limit?",
        "ko": "예상한 단어 수와 토큰 수를 비교하자.510토큰 제한에는 어느 단위를 사용해야 하는가?"
      }
    }
  },
  {
    "slide": 40,
    "title": {
      "ko": "data_a와 data_b가 연구 질문을 정한다",
      "en": "data_a and data_b define the research question"
    },
    "evidence": "The exact data_a→0 Tragedy and data_b→1 History mapping leads the loader code.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What happens if the label dictionary is reversed?",
      "ko": "레이블 사전을 뒤집으면 어떤 일이 생기는가?"
    },
    "workflow": null
  },
  {
    "slide": 41,
    "title": {
      "ko": "510토큰 청크 코드 읽기",
      "en": "Read the 510-token chunking code"
    },
    "evidence": "The operative chunk-length condition accompanies the 510+2 token budget.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Does this condition test a scene boundary?",
      "ko": "이 조건은 장면 경계를 검사하는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "train-classifier",
          "example": "th-short-128",
          "optional": false
        }
      ],
      "observe": {
        "en": "The chunking condition tests token length; it does not test a speaker or scene boundary.",
        "ko": "청크 조건은 토큰 길이를 검사하며 화자나 장면의 경계를 검사하지 않는다."
      },
      "experiment": {
        "en": "Open the recorded 128-token training recipe. Inspect its chunking and run record, then compare its settings with the baseline recipe.",
        "ko": "저장된128토큰 학습 설정을 열자. 청크 구성과 실행 기록을 살펴보고 기준 설정과 비교하자."
      },
      "compare": {
        "en": "Which differences concern input context, chunk counts, or training updates? Avoid attributing every score change to context alone.",
        "ko": "어떤 차이가 입력 문맥·청크 수·학습 갱신에 해당하는가? 모든 점수 변화를 문맥만의 효과로 돌리지 말자."
      }
    }
  },
  {
    "slide": 42,
    "title": {
      "ko": "청크 수와 작품 다양성",
      "en": "Chunk counts and diversity of works"
    },
    "evidence": "Recorded baseline counts compare 1000/250 chunks with 21 shared works.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "How many new works does the validation set introduce?",
      "ko": "검증 집합에는 새 작품이 몇 개 들어오는가?"
    },
    "workflow": null
  },
  {
    "slide": 43,
    "title": {
      "ko": "언더샘플링으로 클래스 균형 맞추기",
      "en": "Balance the classes by undersampling"
    },
    "evidence": "Exact seeded undersampling code accompanies an explicitly illustrative 6/4 example.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which information is discarded by balancing?",
      "ko": "균형을 맞추면서 어떤 정보가 버려지는가?"
    },
    "workflow": null
  },
  {
    "slide": 44,
    "title": {
      "ko": "80:20 층화 분할과 작품 단위 분할",
      "en": "The 80:20 stratified split and work-level splitting"
    },
    "evidence": "Exact stratified-split code sits beside actual chunk-split and work-split records.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Are the evaluation works already present in training?",
      "ko": "평가 작품이 이미 학습에 포함되어 있는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "optional": false
        }
      ],
      "observe": {
        "en": "The chunk split shares works across training and validation; the held-out-work design does not.",
        "ko": "청크 분할은 학습과 검증에 작품이 겹치지만 작품 홀드아웃 설계는 그렇지 않다."
      },
      "experiment": {
        "en": "Inspect the held-out-work recipe. Record its training works, evaluation works, chunk counts, and saved validation result.",
        "ko": "작품 홀드아웃 설정을 살펴보자. 학습 작품·평가 작품·청크 수·저장된 검증 결과를 기록하자."
      },
      "compare": {
        "en": "Compare the population behind each score. Write one claim that the chunk split supports and one that it cannot establish.",
        "ko": "각 점수의 평가 대상을 비교하자. 청크 분할이 뒷받침하는 주장과 입증하지 못하는 주장을 하나씩 쓰자."
      }
    }
  },
  {
    "slide": 45,
    "title": {
      "ko": "학습 설정 코드의 각 항목",
      "en": "Read the training configuration"
    },
    "evidence": "Reference configuration variables sit beside separately recorded baseline settings.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which values are known from the reference snippet alone?",
      "ko": "기준 코드만으로 알 수 있는 수치는 무엇인가?"
    },
    "workflow": null
  },
  {
    "slide": 46,
    "title": {
      "ko": "에포크·배치·워밍업을 이해하기",
      "en": "Understand epochs, batches and warmup"
    },
    "evidence": "Actual 63 updates per epoch, three epochs, and 19 warmup steps clarify the units.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Why are 3 epochs not the same as 3 updates?",
      "ko": "왜 3에포크가 3번의 갱신과 다른가?"
    },
    "workflow": null
  },
  {
    "slide": 47,
    "title": {
      "ko": "서로 다른 실행의 손실 곡선 비교하기",
      "en": "Compare loss curves from distinct runs"
    },
    "evidence": "Figure 11 leads; Explore contains recorded th-baseline loss curves.",
    "defaultFigures": [
      11
    ],
    "studentPrompt": {
      "en": "Are these curves from the same run and recording interval?",
      "ko": "곡선들이 같은 실행과 기록 간격에서 나왔는가?"
    },
    "workflow": null
  },
  {
    "slide": 48,
    "title": {
      "ko": "곡선에서 과적합을 질문하기",
      "en": "Use the curves to question overfitting"
    },
    "evidence": "Explicitly illustrative training and validation curves diverge.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "At what point do the two curves separate?",
      "ko": "어느 지점에서 두 곡선이 갈라지는가?"
    },
    "workflow": null
  },
  {
    "slide": 49,
    "title": {
      "ko": "정확도: 어떤 자료에서 몇 개를 맞혔는가?",
      "en": "Accuracy: how many correct, on which material?"
    },
    "evidence": "Reference accuracy 224/229 appears beside a 229-cell correctness display.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What is the denominator measuring?",
      "ko": "분모는 무엇을 세는가?"
    },
    "workflow": null
  },
  {
    "slide": 50,
    "title": {
      "ko": "분류 오류 행렬의 네 칸",
      "en": "The four cells of the confusion matrix"
    },
    "evidence": "Figure 12 leads; Explore retains the interactive four-cell confusion matrix.",
    "defaultFigures": [
      12
    ],
    "studentPrompt": {
      "en": "Which mistake is actual Tragedy predicted as History?",
      "ko": "실제 비극을 역사극으로 예측한 오류는 어느 칸인가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "optional": false
        }
      ],
      "observe": {
        "en": "The reference matrix contains 229 chunks, with three Tragedy→History errors and two in the reverse direction.",
        "ko": "기준 행렬에는229청크가 있으며 비극→역사극 오류3개와 반대 방향 오류2개가 있다."
      },
      "experiment": {
        "en": "Open the saved baseline evaluation. Identify the matrix axes, denominator, and each error direction before interpreting its accuracy.",
        "ko": "저장된 기준 실행의 평가를 열자. 정확도를 해석하기 전에 행렬 축·분모·각 오류 방향을 확인하자."
      },
      "compare": {
        "en": "Compare the two matrices as separate experiments. Which counts differ, and why must they not be merged into one result?",
        "ko": "두 행렬을 별도 실험으로 비교하자. 어떤 수치가 다르며, 왜 하나의 결과로 합치면 안 되는가?"
      }
    }
  },
  {
    "slide": 51,
    "title": {
      "ko": "오류를 다시 읽고 평가 범위를 정하기",
      "en": "Reread errors and delimit the evaluation claim"
    },
    "evidence": "Actual validation bars retain their distinct split and masking conditions.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Are these scores answering the same question?",
      "ko": "이 점수들은 같은 질문에 답하는가?"
    },
    "workflow": null
  },
  {
    "slide": 52,
    "title": {
      "ko": "세 종류의 설명값을 구분하기",
      "en": "Distinguish three kinds of explanatory quantity"
    },
    "evidence": "Actual class probability, attention weight, and LIME coefficient retain their units.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which of these numbers is a probability of a class?",
      "ko": "어느 숫자가 클래스의 확률인가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "attention",
          "example": "authority",
          "optional": false
        },
        {
          "slug": "lime-lab",
          "example": "gloucester",
          "optional": false
        }
      ],
      "observe": {
        "en": "Class scores, token-to-token attention, and LIME coefficients have different units and origins.",
        "ko": "클래스 점수·토큰 간 어텐션·LIME 계수는 단위와 산출 방식이 다르다."
      },
      "experiment": {
        "en": "Inspect the proclamation in both attention and LIME. Keep track of the input, model, selected layer/head, explained class, and local fit.",
        "ko": "어텐션과 LIME에서 공표문을 살펴보자. 입력·모델·선택한 층과 헤드·설명 대상 클래스·국소 적합도를 함께 기록하자."
      },
      "compare": {
        "en": "Describe what each number measures before comparing highlighted words. Attention and LIME need not rank words alike.",
        "ko": "강조된 단어를 비교하기 전에 각 숫자가 측정하는 것을 설명하자. 어텐션과 LIME의 단어 순위는 같을 필요가 없다."
      }
    }
  },
  {
    "slide": 53,
    "title": {
      "ko": "먼저 사법권 논쟁의 원문 읽기",
      "en": "Read the judicial exchange before its explanation"
    },
    "evidence": "Exact Chief Justice and Henry V lines foreground judgment and renewed authority.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Who claims authority, and who renews it?",
      "ko": "누가 권위를 주장하고 누가 다시 부여하는가?"
    },
    "workflow": null
  },
  {
    "slide": 54,
    "title": {
      "ko": "왕권·법·판단의 언어",
      "en": "The language of kingship, law and judgment"
    },
    "evidence": "Figure 13 leads beside its royal weight; Explore contains actual saved LIME.",
    "defaultFigures": [
      13
    ],
    "studentPrompt": {
      "en": "Which word has the largest reference contribution?",
      "ko": "기준 설명에서 기여도가 가장 큰 단어는 무엇인가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "lime-lab",
          "example": "chapter-royal",
          "optional": false
        }
      ],
      "observe": {
        "en": "The reference explanation gives royal a large History-side contribution in the judicial passage.",
        "ko": "기준 설명에서는 사법권 구절의 royal에 큰 역사극 방향 기여도가 붙는다."
      },
      "experiment": {
        "en": "In Investigate with LIME, choose “Open this model’s prepared passage results” and select the royal-justice passage. Inspect its saved explanation and local fit before any new run.",
        "ko": "Investigate with LIME에서 “Open this model’s prepared passage results”를 누르고 왕권·사법권 구절을 선택하자. 새 실행 전에 저장된 설명과 국소 적합도를 확인하자."
      },
      "compare": {
        "en": "Compare the leading words with the reference image and with each speaker’s argument. Separate differences between runs from differences between speakers.",
        "ko": "상위 단어를 기준 이미지와 각 화자의 논증에 대조하자. 실행 사이의 차이와 화자 사이의 차이를 구분하자."
      }
    }
  },
  {
    "slide": 55,
    "title": {
      "ko": "감옥의 독백: 한 사람과 여러 존재",
      "en": "A prison soliloquy: one person, many selves"
    },
    "evidence": "Exact Exton and Richard lines distinguish two speakers and several imagined selves.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Do the two occurrences of I belong to one speaker?",
      "ko": "두 I는 같은 화자의 말인가?"
    },
    "workflow": null
  },
  {
    "slide": 56,
    "title": {
      "ko": "시간과 음악의 불협화음",
      "en": "The discord of time and music"
    },
    "evidence": "Figure 14 leads beside time/music words; Explore contains actual saved LIME.",
    "defaultFigures": [
      14
    ],
    "studentPrompt": {
      "en": "How do time and music extend the prison meditation?",
      "ko": "시간과 음악은 감옥의 사색을 어떻게 확장하는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "lime-lab",
          "example": "chapter-prison",
          "optional": false
        }
      ],
      "observe": {
        "en": "Time and music shape Richard’s prison meditation; the reference model favours Tragedy for this chunk.",
        "ko": "시간과 음악은 리처드의 감옥 사색을 구성하며 기준 모델은 이 청크에서 비극을 선호한다."
      },
      "experiment": {
        "en": "In Investigate with LIME, choose “Open this model’s prepared passage results” and select the prison passage. Read its score, explained class, leading coefficients, and local fit together.",
        "ko": "Investigate with LIME에서 “Open this model’s prepared passage results”를 누르고 감옥 구절을 선택하자. 점수·설명 대상 클래스·상위 계수·국소 적합도를 함께 읽자."
      },
      "compare": {
        "en": "Return to the time/music words and Bolingbroke. Which explanation supports your reading, and where does the model comparison leave uncertainty?",
        "ko": "시간·음악의 어휘와 Bolingbroke로 돌아가자. 어떤 설명이 독해를 지지하며, 모델 비교에서 무엇이 여전히 불확실한가?"
      }
    }
  },
  {
    "slide": 57,
    "title": {
      "ko": "두 구절, 여러 실행, 하나의 비교 질문",
      "en": "Two passages, several runs, one comparison"
    },
    "evidence": "Reference and current prison probabilities preserve their disagreement.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What differs between the two recorded decisions?",
      "ko": "기록된 두 판단은 어떻게 다른가?"
    },
    "workflow": null
  },
  {
    "slide": 58,
    "title": {
      "ko": "data_c에서 predictions.csv까지",
      "en": "From data_c to predictions.csv"
    },
    "evidence": "A prediction-file schema shows required columns without fabricated result rows.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which fields let another reader verify the input?",
      "ko": "어떤 필드가 다른 독자의 입력 검증을 가능하게 하는가?"
    },
    "workflow": null
  },
  {
    "slide": 59,
    "title": {
      "ko": "『페리클레스』: 반역과 명예",
      "en": "Pericles: treason and honour"
    },
    "evidence": "The complete Pericles passage foregrounds King, traitor, and conditional authority.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Who is exempted by unless it be the King?",
      "ko": "왕이 아니라면이라는 조건은 누구를 예외로 두는가?"
    },
    "workflow": null
  },
  {
    "slide": 60,
    "title": {
      "ko": "0.5987과 정치적 자기 옹호",
      "en": "0.5987 and political self-justification"
    },
    "evidence": "A reporting threshold moves while the reference History score remains 0.5987.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Does moving the threshold change the model score?",
      "ko": "기준을 움직이면 모델 점수가 달라지는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "classifier-lab",
          "example": "pericles",
          "optional": false
        }
      ],
      "observe": {
        "en": "The threshold control changes a reporting policy while the reference score stays at 0.5987.",
        "ko": "기준 조절은 보고 방침을 바꾸며 원래 점수0.5987은 고정되어 있다."
      },
      "experiment": {
        "en": "Open the Pericles input in Compare ten trained classifiers. Keep its wording fixed and record the score from an explicitly identified model.",
        "ko": "Compare ten trained classifiers에서 Pericles 입력을 열자. 문구를 고정하고 명시한 모델의 점수를 기록하자."
      },
      "compare": {
        "en": "Apply your threshold to the new score separately. Distinguish changing the checkpoint, changing the text, and changing only the reporting rule.",
        "ko": "새 점수에 기준을 별도로 적용하자. 체크포인트 변경·텍스트 변경·보고 규칙만의 변경을 구분하자."
      }
    }
  },
  {
    "slide": 61,
    "title": {
      "ko": "작품을 청크의 분포로 읽기",
      "en": "Read a work through its distribution of chunks"
    },
    "evidence": "Five explicitly illustrative chunk labels retain interactive majority voting.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which local differences does the majority conceal?",
      "ko": "다수결은 어떤 국소적 차이를 가리는가?"
    },
    "workflow": null
  },
  {
    "slide": 62,
    "title": {
      "ko": "장르는 본질인가, 관계인가?",
      "en": "Is genre essence or relation?"
    },
    "evidence": "Concrete Lear publication labels and local registers return to the genre question.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Can all four observations be true at once?",
      "ko": "네 관찰이 동시에 참일 수 있는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "judge",
          "example": "merchant",
          "optional": false
        },
        {
          "slug": "explain",
          "example": "merchant",
          "optional": false
        }
      ],
      "observe": {
        "en": "Lear’s publication labels and local registers need not give the same kind of genre evidence.",
        "ko": "리어의 출판 분류와 구절의 말투는 같은 종류의 장르 근거가 아니다."
      },
      "experiment": {
        "en": "Read the Merchant example in Judge my passage, then inspect Explain the verdict for the same example. Record the available labels and model identity.",
        "ko": "Judge my passage에서 Merchant 예제를 읽고 같은 예제를 Explain the verdict에서도 살펴보자. 가능한 레이블과 모델 정체성을 기록하자."
      },
      "compare": {
        "en": "Return to your initial genre definition. Which words or relations explain the decision, and what does the source’s comedy classification still tell you?",
        "ko": "처음의 장르 정의로 돌아가자. 어떤 단어나 관계가 판단을 설명하며, 원문의 희극 분류는 여전히 무엇을 알려 주는가?"
      }
    }
  },
  {
    "slide": 63,
    "title": {
      "ko": "결과·설명·비평을 연결하는 연구 기록",
      "en": "A research record connecting results, explanations and criticism"
    },
    "evidence": "An actual prison research record separates measurements, hypothesis, and proposed test.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which row is a hypothesis rather than a measured output?",
      "ko": "어느 행이 측정 출력이 아닌 가설인가?"
    },
    "workflow": null
  },
  {
    "slide": 64,
    "title": {
      "ko": "기초: 세 설명 파일을 비교하기",
      "en": "Basic exercise: compare three explanation files"
    },
    "evidence": "A blank three-source explanation worksheet identifies word functions and directions.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "How do similar ranked words perform different functions?",
      "ko": "비슷한 상위 단어는 어떻게 다른 기능을 하는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "lime-lab",
          "example": "chapter-royal",
          "optional": false
        },
        {
          "slug": "lime-lab",
          "example": "storm",
          "optional": false
        },
        {
          "slug": "lime-lab",
          "example": "pericles",
          "optional": false
        }
      ],
      "observe": {
        "en": "The worksheet compares word functions across three passages rather than copying a single ranked list.",
        "ko": "비교표는 하나의 순위를 옮겨 적는 대신 세 구절에서 단어의 기능을 비교한다."
      },
      "experiment": {
        "en": "Choose “Open this model’s prepared passage results” and inspect royal justice, the storm, and Pericles. Record the model, class, local fit, and five meaningful words with their directions for each.",
        "ko": "“Open this model’s prepared passage results”에서 왕권·사법권, 폭풍, Pericles를 살펴보자. 각각의 모델·클래스·국소 적합도와 의미 있는 단어5개의 방향을 기록하자."
      },
      "compare": {
        "en": "Complete the three rows with functions such as command, condition, naming, or bodily imagery. Add a counterexample to your strongest generalization.",
        "ko": "명령·조건·이름 부르기·신체 이미지 같은 기능으로 세 행을 채우자. 가장 강한 일반화에 대한 반례를 덧붙이자."
      }
    }
  },
  {
    "slide": 65,
    "title": {
      "ko": "중급 ①: 빅토리언과 모더니즘 학습",
      "en": "Intermediate 1: train Victorian versus Modernist"
    },
    "evidence": "A Victorian/Modernist label design reserves Hardy for later exploration.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What changes when the target is period instead of genre?",
      "ko": "정답이 장르가 아닌 시대일 때 무엇이 달라지는가?"
    },
    "workflow": null
  },
  {
    "slide": 66,
    "title": {
      "ko": "중급 ②: 하디의 확률 분포와 경계 청크",
      "en": "Intermediate 2: Hardy’s score distribution and boundary chunks"
    },
    "evidence": "The 0.45–0.55 selection band has no invented Hardy scores; two summary formulas differ.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Why can label proportions and mean scores disagree?",
      "ko": "왜 레이블 비율과 평균 점수가 다를 수 있는가?"
    },
    "workflow": null
  },
  {
    "slide": 67,
    "title": {
      "ko": "심화 ①: 레이블을 바꾸어 연구 설계하기",
      "en": "Advanced 1: redesign the labels"
    },
    "evidence": "Three alternative label schemes assign Hardy different targets without invented results.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "What research question does each scheme create?",
      "ko": "각 설계는 어떤 연구 질문을 만드는가?"
    },
    "workflow": {
      "stations": [
        {
          "slug": "train-classifier",
          "example": "genre-three-way",
          "optional": false
        },
        {
          "slug": "classifier-lab",
          "example": "pericles-three-way",
          "optional": true
        }
      ],
      "observe": {
        "en": "Giving Hardy a third class changes the target definition. The available Shakespeare experiment offers a parallel label-design comparison.",
        "ko": "하디를 세 번째 클래스로 두면 정답 정의가 바뀐다. 준비된 셰익스피어 실험으로 유사한 레이블 설계를 비교할 수 있다."
      },
      "experiment": {
        "en": "Inspect the recorded three-class training recipe and its class mapping. Optionally test the prepared Pericles input with that three-class model.",
        "ko": "저장된 세 클래스 학습 설정과 클래스 대응을 확인하자. 선택 활동으로 준비된 Pericles 입력을 세 클래스 모델에서 검토할 수 있다."
      },
      "compare": {
        "en": "Which changed results follow from a changed task? Transfer the design lesson to Hardy without claiming that a Hardy model has been trained here.",
        "ko": "어떤 결과 변화가 과제 변경과 관련되는가? 여기서 하디 모델을 학습했다는 주장 없이 설계의 교훈을 하디 문제로 옮겨 보자."
      }
    }
  },
  {
    "slide": 68,
    "title": {
      "ko": "심화 ②: 스타일 마커와 비평적 종합",
      "en": "Advanced 2: style markers and critical synthesis"
    },
    "evidence": "A critical synthesis schema connects quoted wording, literary pattern, and measured evidence.",
    "defaultFigures": [],
    "studentPrompt": {
      "en": "Which counterexample would weaken your final claim?",
      "ko": "어떤 반례가 최종 주장을 약화하는가?"
    },
    "workflow": null
  }
];

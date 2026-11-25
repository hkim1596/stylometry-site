'use strict';
window.CasePractice = {
  "stations": [
    {
      "slug": "finish-the-line",
      "number": 1,
      "title": {
        "ko": "빈칸의 말을 예측하기",
        "en": "Finish the line"
      },
      "purpose": {
        "ko": "빈 토큰을 예측하고 실제 사료의 단어와 후보를 비교합니다.",
        "en": "Predict one masked token, then compare candidates with the historical witness."
      }
    },
    {
      "slug": "tokenizer",
      "number": 2,
      "title": {
        "ko": "토크나이저의 가위",
        "en": "The tokenizer’s scissors"
      },
      "purpose": {
        "ko": "철자와 문장부호가 모델의 토큰으로 나뉘는 과정을 살펴봅니다.",
        "en": "Inspect how spelling and punctuation become model tokens."
      }
    },
    {
      "slug": "bag-of-words",
      "number": 3,
      "title": {
        "ko": "분류에 앞서 세어 보기",
        "en": "Count before you classify"
      },
      "purpose": {
        "ko": "선택한 글 모음에서 단어 빈도와 TF-IDF를 비교합니다.",
        "en": "Compare word counts and TF-IDF within a chosen collection."
      }
    },
    {
      "slug": "embeddings",
      "number": 4,
      "title": {
        "ko": "임베딩 들여다보기",
        "en": "Inside an embedding"
      },
      "purpose": {
        "ko": "투영 지도를 해석하기 전에 정적·문맥 임베딩을 비교합니다.",
        "en": "Compare static or contextual vectors before interpreting a projected map."
      }
    },
    {
      "slug": "neighbors",
      "number": 5,
      "title": {
        "ko": "단어의 이웃",
        "en": "Word neighborhoods"
      },
      "purpose": {
        "ko": "정적 임베딩에서 단어와 가까운 어휘를 탐색합니다.",
        "en": "Explore associations in a static embedding vocabulary."
      }
    },
    {
      "slug": "arithmetic",
      "number": 6,
      "title": {
        "ko": "단어 벡터의 산술",
        "en": "Word arithmetic"
      },
      "purpose": {
        "ko": "역방향 연산과 상쇄 대조로 벡터 유추를 시험합니다.",
        "en": "Test a vector analogy with reversals and cancellation controls."
      }
    },
    {
      "slug": "context",
      "number": 7,
      "title": {
        "ko": "하나의 단어, 여러 문맥",
        "en": "One word, many coats"
      },
      "purpose": {
        "ko": "서로 다른 문장에 놓인 같은 목표 단어를 비교합니다.",
        "en": "Compare the same target word in different sentences."
      }
    },
    {
      "slug": "attention",
      "number": 8,
      "title": {
        "ko": "어텐션 헤드 따라가기",
        "en": "Follow an attention head"
      },
      "purpose": {
        "ko": "층과 헤드를 지정하여 토큰 사이의 가중치를 살펴봅니다.",
        "en": "Follow token-to-token weights at a specified layer and head."
      }
    },
    {
      "slug": "nearest",
      "number": 9,
      "title": {
        "ko": "가장 가까운 희곡 찾기",
        "en": "Find the nearest play"
      },
      "purpose": {
        "ko": "유사성을 작가 판정으로 여기지 않고 색인된 희곡을 검색합니다.",
        "en": "Retrieve similar indexed plays without treating similarity as authorship."
      }
    },
    {
      "slug": "train-classifier",
      "number": 10,
      "title": {
        "ko": "단계별 분류기 학습",
        "en": "Train a classifier, step by step"
      },
      "purpose": {
        "ko": "완료된 열 가지 학습 설계와 분할, 평가 결과를 살펴봅니다.",
        "en": "Inspect ten completed training recipes, splits and measured evaluations."
      }
    },
    {
      "slug": "judge",
      "number": 11,
      "title": {
        "ko": "이 구절을 판정하기",
        "en": "Judge my passage"
      },
      "purpose": {
        "ko": "같은 입력에 대한 희극·비극 판정 모델을 비교합니다.",
        "en": "Compare the deployed Comedy/Tragedy judges on the same input."
      }
    },
    {
      "slug": "classifier-lab",
      "number": 12,
      "title": {
        "ko": "학습된 분류기 열 개 비교",
        "en": "Compare ten trained classifiers"
      },
      "purpose": {
        "ko": "레이블과 학습 조건을 확인하며 기록된 분류기를 시험합니다.",
        "en": "Test documented classifiers while tracking their labels and training conditions."
      }
    },
    {
      "slug": "explain",
      "number": 13,
      "title": {
        "ko": "판정의 근거 살펴보기",
        "en": "Explain the verdict"
      },
      "purpose": {
        "ko": "희극·비극 예측을 설명하는 국소적 LIME 결과를 살펴봅니다.",
        "en": "Examine a local LIME explanation for a Comedy/Tragedy prediction."
      }
    },
    {
      "slug": "lime-lab",
      "number": 14,
      "title": {
        "ko": "LIME으로 탐구하기",
        "en": "Investigate with LIME"
      },
      "purpose": {
        "ko": "선택한 분류기의 예측과 국소 대리 모델의 적합도를 확인합니다.",
        "en": "Explain a selected prepared classifier and check its local surrogate fit."
      }
    },
    {
      "slug": "generate",
      "number": 15,
      "title": {
        "ko": "생성 과정을 지켜보기",
        "en": "Watch it write"
      },
      "purpose": {
        "ko": "생성된 후속 문장과 표본 추출 설정, 실제 원문을 비교합니다.",
        "en": "Compare generated continuation, sampling choices and the original source."
      }
    }
  ],
  "slides": {
    "0": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        },
        {
          "slug": "bag-of-words",
          "example": "public-private",
          "label": {
            "ko": "공적 권위와 노출된 신체",
            "en": "Public authority and exposed bodies"
          }
        }
      ],
      "before": {
        "ko": "글로스터의 공표와 폭풍 속 대화는 같은 레이블을 받을까요? 예상의 근거가 된 단어를 적으세요.",
        "en": "Will Gloucester’s proclamation and the storm exchange receive the same label? Name the words behind your prediction."
      },
      "change": {
        "ko": "th-baseline을 유지하고 공표문만 준비된 폭풍 발췌문으로 바꾸세요.",
        "en": "Keep th-baseline fixed; replace the proclamation with the curated storm excerpt."
      },
      "record": {
        "ko": "두 입력과 클래스 확률, 같은 『리어왕』 안에서 두 구절이 다른 이유를 기록하세요.",
        "en": "Save both inputs, class probabilities and one literary reason the passages may differ within King Lear."
      },
      "further": {
        "ko": "두 구절을 함께 세어 보세요. 어휘 차이가 예상한 차이를 뒷받침하나요?",
        "en": "Count the two passages together. Does the lexical contrast support the difference you expected?"
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "storm",
          "label": {
            "ko": "폭풍 속 어릿광대와 리어 · th-baseline",
            "en": "The Fool and Lear in the storm · th-baseline"
          }
        }
      ]
    },
    "1": {
      "primary": [
        {
          "slug": "tokenizer",
          "example": "worke",
          "label": {
            "ko": "worke라는 표현",
            "en": "A piece of worke"
          }
        },
        {
          "slug": "nearest",
          "example": "hamlet",
          "label": {
            "ko": "즐거움을 잃은 세계",
            "en": "A world that has lost its delight"
          }
        }
      ],
      "before": {
        "ko": "어떤 증거가 출판 당시의 분류를 보여 주고, 어떤 증거는 구절의 언어만 설명하나요?",
        "en": "Which evidence could establish a publication label, and which could only describe a passage’s language?"
      },
      "change": {
        "ko": "EEBO-TCP 입력에서 worke만 work로 바꾸고 원문 읽기창은 그대로 두세요.",
        "en": "In the EEBO-TCP input, change only worke to work; leave the source reader unchanged."
      },
      "record": {
        "ko": "사료와 수정 철자, 토큰 변화를 기록하세요. 토큰화가 역사적 장르 분류를 알려 주지는 않습니다.",
        "en": "Record the witness, the edited spelling and token changes; neither tokenization supplies a historical genre label."
      },
      "further": {
        "ko": "원래 발췌문으로 가까운 희곡을 찾고 검색 결과를 표제지의 증거와 구분하세요.",
        "en": "Retrieve neighboring plays for the original excerpt. Separate retrieval evidence from title-page evidence."
      },
      "furtherLinks": [
        {
          "slug": "nearest",
          "example": "hamlet",
          "label": {
            "ko": "즐거움을 잃은 세계",
            "en": "A world that has lost its delight"
          }
        }
      ]
    },
    "2": {
      "primary": [
        {
          "slug": "judge",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "복수의 언어만으로 비극이라고 할 수 있나요? 기준과 반례를 하나씩 제시하세요.",
        "en": "Would revenge language alone make a passage tragic? State a rule and one possible counterexample."
      },
      "change": {
        "ko": "같은 『베니스의 상인』 구절을 분류기 실험실에 복사하고 철자를 유지한 채 th-baseline을 선택하세요.",
        "en": "Copy the same Merchant passage into the classifier lab and select th-baseline; keep its spelling unchanged."
      },
      "record": {
        "ko": "희극·비극과 비극·역사극이라는 두 레이블 집합을 적으세요. 두 확률은 다른 질문에 답합니다.",
        "en": "Record both label sets: Comedy/Tragedy versus Tragedy/History. Their probabilities answer different questions."
      },
      "further": {
        "ko": "「판정의 근거」에서 최초의 정의를 옹호하기보다 희극·비극 예측의 근거를 살펴보세요.",
        "en": "Use Explain the verdict to ask what supports the Comedy/Tragedy result, rather than defending your initial definition."
      },
      "furtherLinks": [
        {
          "slug": "explain",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        }
      ]
    },
    "3": {
      "primary": [
        {
          "slug": "nearest",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "pericles-three-way",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · genre-three-way",
            "en": "Treason, kingship and honour in Pericles · genre-three-way"
          }
        }
      ],
      "before": {
        "ko": "어떤 희곡들과 비교하면 고통보다 정치적 권위가 더 두드러질까요?",
        "en": "Which comparison plays would make political authority more prominent than suffering?"
      },
      "change": {
        "ko": "『페리클레스』 입력을 유지하고 th-baseline과 genre-three-way를 번갈아 선택하세요.",
        "en": "Keep the Pericles input fixed and switch between th-baseline and genre-three-way."
      },
      "record": {
        "ko": "선택 가능한 레이블과 순위를 적으세요. 희극 추가는 과제와 학습 자료를 함께 바꿉니다.",
        "en": "List the available labels and their ranking; adding Comedy changes the task and its training collection."
      },
      "further": {
        "ko": "가까운 작품과 분류 레이블을 비교하세요. 이웃 작품은 비교 대상이지 장르 판정이 아닙니다.",
        "en": "Compare retrieval neighbors with classifier labels. A nearby work is a comparison partner, not a genre verdict."
      },
      "furtherLinks": [
        {
          "slug": "nearest",
          "example": "henry",
          "label": {
            "ko": "함께 행동하라는 호소",
            "en": "A speech urging collective action"
          }
        }
      ]
    },
    "4": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "public-private",
          "label": {
            "ko": "공적 권위와 노출된 신체",
            "en": "Public authority and exposed bodies"
          }
        },
        {
          "slug": "embeddings",
          "example": "passages",
          "label": {
            "ko": "두 구절의 벡터 표현",
            "en": "Represent the two passages"
          }
        }
      ],
      "before": {
        "ko": "단어 순서가 사라져도 공표문과 폭풍 장면의 어떤 차이가 남을까요?",
        "en": "Which differences between proclamation and storm survive if word order disappears?"
      },
      "change": {
        "ko": "동일한 두 발췌문을 빈도와 문맥 임베딩에 넣고 표현 방법만 바꾸세요.",
        "en": "Use the same two source excerpts in counts and contextual embeddings; change only the representation method."
      },
      "record": {
        "ko": "표현 방법과 코사인 비교, 각 방법이 설명하지 못하는 관계를 기록하세요.",
        "en": "Record the representation, cosine comparison and a relation each method leaves unexplained."
      },
      "further": {
        "ko": "공통 단어 하나를 골라 다른 문맥에서 살핀 뒤 유사성에 문학적 의미를 부여하세요.",
        "en": "Choose one shared word and inspect it in distinct contexts before giving the similarity a literary meaning."
      },
      "furtherLinks": [
        {
          "slug": "context",
          "example": "graue",
          "label": {
            "ko": "매장·태도·말장난",
            "en": "A burial, a manner, and a pun"
          }
        }
      ]
    },
    "5": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "rare-words",
          "label": {
            "ko": "비교 집합에 따른 희소성 변화",
            "en": "How the comparison set changes rarity"
          }
        },
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ],
      "before": {
        "ko": "입력 특성은 무엇이며 작품 전체에 붙은 레이블은 무엇인가요?",
        "en": "What is an input feature, and what is the label attached to an entire play?"
      },
      "change": {
        "ko": "세 입력 구절을 유지하고 빈도 계산을 TF-IDF로 바꾸세요.",
        "en": "Hold the three input passages fixed and switch the counting station from counts to TF-IDF."
      },
      "record": {
        "ko": "달라진 특성값과 그대로인 작품 레이블을 구분하세요. 빈도 실습은 분류기를 학습하지 않습니다.",
        "en": "Separate changed feature values from unchanged play labels; this counting station does not train a classifier."
      },
      "further": {
        "ko": "기준 모델의 자료 레이블을 확인하고 작가 분류라면 목록이 어떻게 달라져야 할지 설명하세요.",
        "en": "Inspect the baseline’s corpus labels and describe how an authorship task would require a different manifest."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "genre-three-way",
          "label": {
            "ko": "확장: 세 번째 선택지로 희극 추가",
            "en": "Extension: add Comedy as a third choice"
          }
        }
      ]
    },
    "6": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "public-private",
          "label": {
            "ko": "공적 권위와 노출된 신체",
            "en": "Public authority and exposed bodies"
          }
        },
        {
          "slug": "attention",
          "example": "authority",
          "label": {
            "ko": "글로스터의 공표 · 1층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 1, head 1"
          }
        }
      ],
      "before": {
        "ko": "어떤 단어가 권위를 나타내며 어떤 문법 관계가 위협을 조건부로 만드나요?",
        "en": "Which word expresses authority, and which grammatical relation makes the threat conditional?"
      },
      "change": {
        "ko": "공표문의 사본에서 마지막 death만 지우고 두 문서 비교의 나머지는 유지하세요.",
        "en": "In a copy of the proclamation, remove only the final word death; retain the rest of the two-document comparison."
      },
      "record": {
        "ko": "빈도 변화와 함께 조건문에서 단어 수 이상의 무엇이 사라졌는지 적으세요.",
        "en": "Record the changed counts and what the conditional sentence loses beyond that single count."
      },
      "further": {
        "ko": "원문을 복원하고 proclaim의 어텐션 행을 살피되 이를 장르 판정의 근거와 동일시하지 마세요.",
        "en": "Inspect proclaim’s attention row with the original text restored; do not equate attention with genre evidence."
      },
      "furtherLinks": [
        {
          "slug": "attention",
          "example": "authority-middle",
          "label": {
            "ko": "글로스터의 공표 · 6층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 6, head 1"
          }
        }
      ]
    },
    "7": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "fool-lear",
          "label": {
            "ko": "폭풍 속 두 목소리",
            "en": "Two voices inside the storm"
          }
        },
        {
          "slug": "attention",
          "example": "body",
          "label": {
            "ko": "리어의 노출된 신체 · 6층, 1번 헤드",
            "en": "Lear: the exposed body · layer 6, head 1"
          }
        }
      ],
      "before": {
        "ko": "어릿광대와 리어가 취약함을 같은 방식으로 표현하나요? 발화를 합치기 전에 글로스터를 고정된 세 번째 비교로 추가하세요.",
        "en": "Do the Fool and Lear express vulnerability alike? Add Gloucester as a fixed third comparison before merging their speeches."
      },
      "change": {
        "ko": "두 발화를 따로 센 뒤 비교 구절은 유지하고 두 발화만 한 줄로 합치세요.",
        "en": "Count their speeches separately, then join them into one line while retaining the comparison passage."
      },
      "record": {
        "ko": "화자 경계와 문서 길이, 문서 단위 변경의 영향을 기록하세요.",
        "en": "Record speaker boundaries, document lengths and the effect of changing the document unit."
      },
      "further": {
        "ko": "리어의 신체 구절을 두 헤드에서 살피고 토큰 관계가 예상한 의미 범주를 넘는지 보세요.",
        "en": "Inspect Lear’s body passage at two heads. Ask whether a token relation crosses your proposed semantic categories."
      },
      "furtherLinks": [
        {
          "slug": "attention",
          "example": "body-head-eight",
          "label": {
            "ko": "리어의 노출된 신체 · 6층, 8번 헤드",
            "en": "Lear: the exposed body · layer 6, head 8"
          }
        }
      ]
    },
    "8": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "public-private",
          "label": {
            "ko": "공적 권위와 노출된 신체",
            "en": "Public authority and exposed bodies"
          }
        }
      ],
      "before": {
        "ko": "단어 목록을 그대로 두고 문장이 수행하는 행위를 바꿀 수 있나요?",
        "en": "Can you change a sentence’s action without changing its inventory of words?"
      },
      "change": {
        "ko": "공표문의 단어를 추가하거나 삭제하지 말고 순서만 바꾼 뒤 빈도를 다시 계산하세요.",
        "en": "Reorder the proclamation’s words without adding or deleting a word; rerun raw counts."
      },
      "record": {
        "ko": "전후 빈도 행과 코사인을 비교하고 빈도로 포착할 수 없는 의미 변화를 인용하세요.",
        "en": "Compare count rows and cosine before and after; quote the change in meaning that the counts cannot register."
      },
      "further": {
        "ko": "같은 두 버전을 문맥 임베딩에 넣어 보세요. 이는 순서에 대한 민감도 실험이지 문학 이해 시험은 아닙니다.",
        "en": "Use those same two versions in contextual embeddings; this tests sensitivity to order, not literary comprehension."
      },
      "furtherLinks": [
        {
          "slug": "embeddings",
          "example": "passages",
          "label": {
            "ko": "두 구절의 벡터 표현",
            "en": "Represent the two passages"
          }
        }
      ]
    },
    "9": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "rare-words",
          "label": {
            "ko": "비교 집합에 따른 희소성 변화",
            "en": "How the comparison set changes rarity"
          }
        }
      ],
      "before": {
        "ko": "정치적 구절을 추가하면 king의 구별력이 커질까요, 작아질까요?",
        "en": "Will king become more or less distinctive when another political passage joins the collection?"
      },
      "change": {
        "ko": "글로스터와 폭풍 구절을 유지하고 『페리클레스』 비교 행만 추가하거나 제거하세요.",
        "en": "Keep Gloucester and the storm fixed; add or remove only the Pericles comparison line."
      },
      "record": {
        "ko": "king의 실제 출현 여부, 빈도와 TF-IDF, 비교에 사용한 문서 모음을 기록하세요.",
        "en": "Record king’s count, displayed TF-IDF and the document collection used; inspect whether the word actually occurs."
      },
      "further": {
        "ko": "왕권·사법권 구절로 반복하고 이 모음의 희소성이 역사적 희소성과 다른 이유를 설명하세요.",
        "en": "Repeat with the royal-justice comparison and explain why local rarity is not historical rarity."
      },
      "furtherLinks": [
        {
          "slug": "bag-of-words",
          "example": "royal-idf",
          "label": {
            "ko": "왕권·사법권과 TF-IDF",
            "en": "Royal justice with TF-IDF"
          }
        }
      ]
    },
    "10": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "public-private",
          "label": {
            "ko": "공적 권위와 노출된 신체",
            "en": "Public authority and exposed bodies"
          }
        },
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ],
      "before": {
        "ko": "어떤 결정이 특성 구성에 속하고 어떤 결정이 분류기의 학습 규칙에 속하나요?",
        "en": "Which decisions belong to feature construction, and which belong to a classifier’s learning rule?"
      },
      "change": {
        "ko": "입력을 유지하고 빈도를 TF-IDF로 바꾼 뒤 고전적 분류기들이 공유할 입력을 설명하세요.",
        "en": "Switch counts to TF-IDF on fixed inputs; identify what would be passed unchanged to alternative classical classifiers."
      },
      "record": {
        "ko": "계산한 특성표와 준비된 BERT 모델을 구분하세요. 이 화면은 나이브 베이즈나 SVM을 학습하지 않습니다.",
        "en": "Separate the measured feature table from the prepared BERT model; this interface does not train Naive Bayes or SVM."
      },
      "further": {
        "ko": "학습 알고리즘을 비교하기 전에 자료와 분할을 고정한 별도 벤치마크를 설계하세요.",
        "en": "Design a separate benchmark with one fixed corpus and split before comparing learning algorithms."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        }
      ]
    },
    "11": {
      "primary": [
        {
          "slug": "explain",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        },
        {
          "slug": "bag-of-words",
          "example": "honour-count",
          "label": {
            "ko": "반복과 반역 혐의",
            "en": "Repetition and the accusation of treason"
          }
        }
      ],
      "before": {
        "ko": "빈번하거나 정서적으로 강한 단어가 특정 분류기에도 반드시 중요할까요?",
        "en": "Must a frequent or emotionally striking word be important to a particular classifier?"
      },
      "change": {
        "ko": "「판정의 근거」에서 양의 가중치를 받은 단어 하나만 지우고 다시 실행하세요.",
        "en": "In Explain the verdict, remove one positively weighted word and rerun on the otherwise unchanged passage."
      },
      "record": {
        "ko": "모델명과 원래 예측, LIME 적합도와 수정 후 예측을 기록하세요. 빈도는 기여도와 다릅니다.",
        "en": "Record the named model, original prediction, LIME fit and edited prediction; a count is not an attribution."
      },
      "further": {
        "ko": "『페리클레스』의 traitor 반복을 해당 분류 과제에서 계산한 LIME 설명과 비교하세요.",
        "en": "Compare repeated traitor in Pericles with the measured LIME explanation for that separate classification task."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ]
    },
    "12": {
      "primary": [
        {
          "slug": "embeddings",
          "example": "chapter-map",
          "label": {
            "ko": "대조되는 발화의 여덟 단어",
            "en": "Eight words from contrasting speeches"
          }
        },
        {
          "slug": "neighbors",
          "example": "crown",
          "label": {
            "ko": "행위로서의 crown",
            "en": "Crown as an action"
          }
        }
      ],
      "before": {
        "ko": "authority와 proclaim은 사전적 동의어가 아니어도 연관될 수 있을까요?",
        "en": "Would authority and proclaim be associated without being dictionary synonyms?"
      },
      "change": {
        "ko": "정적 모드를 유지하고 여덟 단어 중 하나만 바꿔 다시 계산하세요.",
        "en": "Keep static mode fixed; replace one word in the eight-word list and recompute."
      },
      "record": {
        "ko": "전체 벡터 유사성과 지도 이동을 기록하세요. 단어 집합 변경은 PCA 축도 다시 맞춥니다.",
        "en": "Record full-vector similarities and any map movement; changing the set refits the PCA axes."
      },
      "further": {
        "ko": "「단어의 이웃」에서 authority를 검색하고 이웃 순위를 처음 예상한 연관과 비교하세요.",
        "en": "Query authority in Word neighborhoods and compare its ranked neighbors with your initial association."
      },
      "furtherLinks": [
        {
          "slug": "neighbors",
          "example": "crown",
          "label": {
            "ko": "행위로서의 crown",
            "en": "Crown as an action"
          }
        }
      ]
    },
    "13": {
      "primary": [
        {
          "slug": "context",
          "example": "graue",
          "label": {
            "ko": "매장·태도·말장난",
            "en": "A burial, a manner, and a pun"
          }
        }
      ],
      "before": {
        "ko": "같은 철자 graue가 매장, 태도, 말장난과 어떻게 연결될까요?",
        "en": "How could the same written graue refer to burial, manner, or wordplay?"
      },
      "change": {
        "ko": "목표어 graue로 제시된 문맥 둘을 사용하고 하나는 유지한 채 다른 하나를 확인된 다른 용례로 바꾸세요.",
        "en": "Use two listed contexts with target graue; hold one fixed and replace the other with another verified occurrence."
      },
      "record": {
        "ko": "문장 원문과 쌍별 순위를 적고 사료의 철자 graue를 임의로 grave로 바꾸지 마세요.",
        "en": "Record the exact sentences and pairwise ranking; retain the witness’s spelling rather than silently writing grave."
      },
      "further": {
        "ko": "정적 임베딩의 grave와 death를 비교하고 왜 다른 표현 방식의 질문인지 설명하세요.",
        "en": "Compare isolated grave and death in static embeddings; explain why that is a different representation question."
      },
      "furtherLinks": [
        {
          "slug": "embeddings",
          "example": "boundary-words",
          "label": {
            "ko": "장르 경계의 죽음",
            "en": "Death at a genre boundary"
          }
        }
      ]
    },
    "14": {
      "primary": [
        {
          "slug": "embeddings",
          "example": "chapter-map",
          "label": {
            "ko": "대조되는 발화의 여덟 단어",
            "en": "Eight words from contrasting speeches"
          }
        },
        {
          "slug": "arithmetic",
          "example": "royal",
          "label": {
            "ko": "익숙한 성별 유추",
            "en": "A familiar gender analogy"
          }
        }
      ],
      "before": {
        "ko": "이차원 투영을 보기 전에 어떤 단어 관계를 예상하나요?",
        "en": "Which relationships do you expect before seeing a two-dimensional projection?"
      },
      "change": {
        "ko": "단어 산술에서 king − man을 유지하고 더하는 단어 woman만 바꾸세요.",
        "en": "Keep king − man fixed in Word arithmetic and change only the added word woman."
      },
      "record": {
        "ko": "반환된 이웃과 수식을 적으세요. PCA 축과 벡터 차이에 문학적 의미가 보장되지는 않습니다.",
        "en": "Record returned neighbors and the exact formula; neither a PCA axis nor a vector offset has a guaranteed literary meaning."
      },
      "further": {
        "ko": "흥미로운 유추를 믿기 전에 king − king + queen으로 상쇄 대조를 실행하세요.",
        "en": "Run king − king + queen as a cancellation control before trusting a more attractive analogy."
      },
      "furtherLinks": [
        {
          "slug": "arithmetic",
          "example": "cancel",
          "label": {
            "ko": "상쇄 대조",
            "en": "A cancellation control"
          }
        }
      ]
    },
    "15": {
      "primary": [
        {
          "slug": "embeddings",
          "example": "storm-voices",
          "label": {
            "ko": "폭풍 속 두 목소리 구분하기",
            "en": "Keep the two storm voices separate"
          }
        },
        {
          "slug": "nearest",
          "example": "henry",
          "label": {
            "ko": "함께 행동하라는 호소",
            "en": "A speech urging collective action"
          }
        }
      ],
      "before": {
        "ko": "두 화자를 하나의 문서 벡터로 합치면 무엇이 달라질까요?",
        "en": "What changes when two speakers become one pooled document?"
      },
      "change": {
        "ko": "어릿광대와 리어의 발화를 한 입력 행으로 합치고 글로스터 행과 문맥 모드는 유지하세요.",
        "en": "Join the Fool and Lear into one input line; keep Gloucester’s line and contextual mode fixed."
      },
      "record": {
        "ko": "입력 경계와 코사인 비교를 적으세요. 이 실습에서 풀링 규칙 자체는 고정되어 있습니다.",
        "en": "Record input boundaries and cosine comparisons; the pooling rule itself is fixed in this station."
      },
      "further": {
        "ko": "가까운 희곡 결과와 색인 청크 제한을 확인하세요. 저장된 벡터가 작품 일부만 대표할 수 있습니다.",
        "en": "Inspect nearest-play results and their indexed-chunk limit; a stored work vector may cover only part of a play."
      },
      "furtherLinks": [
        {
          "slug": "nearest",
          "example": "richard",
          "label": {
            "ko": "하나의 세계로 상상한 감옥",
            "en": "A prison imagined as a world"
          }
        }
      ]
    },
    "16": {
      "primary": [
        {
          "slug": "tokenizer",
          "example": "jest",
          "label": {
            "ko": "고통을 jest의 대상으로 삼기",
            "en": "Affliction as a toy to jest at"
          }
        },
        {
          "slug": "neighbors",
          "example": "jest",
          "label": {
            "ko": "두 조각으로 나뉜 단어",
            "en": "A word in two pieces"
          }
        }
      ],
      "before": {
        "ko": "jest는 하나의 어휘 항목으로 처리될까요, 여러 조각으로 나뉠까요?",
        "en": "Will jest behave as one vocabulary entry or as several pieces?"
      },
      "change": {
        "ko": "jest를 살핀 뒤 「단어의 이웃」에서 검색어만 laughter로 바꾸세요.",
        "en": "Inspect jest, then change only the queried form to laughter in Word neighborhoods."
      },
      "record": {
        "ko": "WordPiece와 풀링 설명, 이웃 목록을 적으세요. 검색으로 사전학습 벡터가 갱신되지는 않습니다.",
        "en": "Record WordPieces, pooling note and returned neighbors; querying does not update the pretrained vectors."
      },
      "further": {
        "ko": "nunnery로 반복하며 토큰 구성과 극적 상황에 대한 해석을 구분하세요.",
        "en": "Repeat with nunnery, separating token construction from your interpretation of the dramatic setting."
      },
      "furtherLinks": [
        {
          "slug": "tokenizer",
          "example": "nunnery",
          "label": {
            "ko": "비난과 Nunnery",
            "en": "An accusation and a Nunnery"
          }
        },
        {
          "slug": "neighbors",
          "example": "nunnery",
          "label": {
            "ko": "복잡한 문맥의 장소",
            "en": "A place with a difficult context"
          }
        }
      ]
    },
    "17": {
      "primary": [
        {
          "slug": "finish-the-line",
          "example": "lear-nothing",
          "label": {
            "ko": "대화에서 되돌아오는 단어",
            "en": "A word returns in an exchange"
          }
        },
        {
          "slug": "generate",
          "example": "hamlet",
          "label": {
            "ko": "즐거움을 잃은 세계",
            "en": "A world that has lost its delight"
          }
        }
      ],
      "before": {
        "ko": "빈칸의 단서를 주는 말은 빈칸 앞과 뒤에 각각 무엇이 있나요?",
        "en": "Which clues to the missing word occur before the gap, and which occur after it?"
      },
      "change": {
        "ko": "하나의 [MASK] 뒤에 있는 내용만 지운 뒤, 두 번째 실행에서는 복원하세요.",
        "en": "Remove only the text after the single [MASK]; restore it for a second run."
      },
      "record": {
        "ko": "후보 순위와 실제 원문의 답, 제거한 정보를 적으세요. 이는 학습이 아니라 추론입니다.",
        "en": "Record candidate ranks, the actual source answer and the information removed; this is inference, not training."
      },
      "further": {
        "ko": "「생성 과정」과 비교하세요. 이어 쓰기는 앞부분을 받아 새 글을 만들며 원문의 한 토큰을 복원하는 작업과 다릅니다.",
        "en": "Compare with Watch it write: continuation uses a left-hand prompt and generates new text rather than recovering a source token."
      },
      "furtherLinks": [
        {
          "slug": "generate",
          "example": "hamlet",
          "label": {
            "ko": "즐거움을 잃은 세계",
            "en": "A world that has lost its delight"
          }
        }
      ]
    },
    "18": {
      "primary": [
        {
          "slug": "finish-the-line",
          "example": "lear-nothing",
          "label": {
            "ko": "대화에서 되돌아오는 단어",
            "en": "A word returns in an exchange"
          }
        },
        {
          "slug": "tokenizer",
          "example": "murther",
          "label": {
            "ko": "가장 흉악한 murther",
            "en": "Murther most foule"
          }
        }
      ],
      "before": {
        "ko": "실제 기록된 단어와 달라도 그럴듯한 완성 후보는 무엇인가요?",
        "en": "Which alternative completion is plausible even if it differs from the attested word?"
      },
      "change": {
        "ko": "여섯 연습 문장 중 하나를 수정 입력이라고 명시하고 정확히 하나의 [MASK]로 시험하세요.",
        "en": "Try one of the six teaching prompts as an explicitly edited input with exactly one [MASK]."
      },
      "record": {
        "ko": "실제 인용과 만든 변형을 따로 표시하고 수정문을 원문처럼 제시하지 않은 채 후보를 기록하세요.",
        "en": "Label the attested quotation and your constructed variant separately; record candidates without presenting edits as source text."
      },
      "further": {
        "ko": "후보가 여러 WordPiece로 나뉘면 먼저 대체 표현을 토큰화하세요. 빈칸 하나는 어휘 토큰 하나를 예측합니다.",
        "en": "Tokenize the alternative wording first when a candidate needs several WordPieces; one blank predicts one vocabulary token."
      },
      "furtherLinks": [
        {
          "slug": "tokenizer",
          "example": "jest",
          "label": {
            "ko": "고통을 jest의 대상으로 삼기",
            "en": "Affliction as a toy to jest at"
          }
        }
      ]
    },
    "19": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-one-epoch",
          "label": {
            "ko": "학습 자료를 한 번 통과하기",
            "en": "One pass through the training data"
          }
        },
        {
          "slug": "finish-the-line",
          "example": "lear-nothing",
          "label": {
            "ko": "대화에서 되돌아오는 단어",
            "en": "A word returns in an exchange"
          }
        }
      ],
      "before": {
        "ko": "추론 한 번과 학습 에포크 한 번 중 무엇이 모델 매개변수를 바꾸나요?",
        "en": "Which operation changes model parameters: another prediction, or another training epoch?"
      },
      "change": {
        "ko": "기록된 자료와 분할을 확인하며 완료된 1에포크·2에포크 모델을 비교하세요.",
        "en": "Compare the completed one- and two-epoch profiles while keeping the recorded corpus and split in view."
      },
      "record": {
        "ko": "갱신 단계와 손실, 검증 지표를 적으세요. 빈칸 질의를 반복해도 학습 단계가 늘지는 않습니다.",
        "en": "Record update steps, losses and validation measures; repeated cloze queries are not extra training steps."
      },
      "further": {
        "ko": "새 모델을 학습한다면 준비된 체크포인트와 실행 ID를 구분하고 실제 기록을 비교하세요.",
        "en": "If you launch a fresh copy, keep its run identifier separate from the prepared checkpoint and compare actual traces."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-two-epochs",
          "label": {
            "ko": "학습 자료를 두 번 통과하기",
            "en": "Two passes through the training data"
          }
        }
      ]
    },
    "20": {
      "primary": [
        {
          "slug": "arithmetic",
          "example": "opposites",
          "label": {
            "ko": "연관 하나를 빼기",
            "en": "Subtract an association"
          }
        },
        {
          "slug": "neighbors",
          "example": "death",
          "label": {
            "ko": "반복되는 대조",
            "en": "A repeated contrast"
          }
        }
      ],
      "before": {
        "ko": "death를 빼고 life를 더하면 poison이 반드시 의미 있는 반대말로 바뀔까요?",
        "en": "Does subtracting death and adding life necessarily turn poison into a meaningful opposite?"
      },
      "change": {
        "ko": "poison과 life를 유지하고 빼는 단어 death만 다른 가설 단어로 바꾸세요.",
        "en": "Keep poison and life fixed; replace only the subtracted word death with another declared hypothesis."
      },
      "record": {
        "ko": "수식과 가까운 결과, 실패를 함께 적고 유추 하나로 임베딩 좌표에 이름을 붙이지 마세요.",
        "en": "Record the formula and nearest outputs, including failures; do not name an embedding coordinate from one analogy."
      },
      "further": {
        "ko": "상쇄·역방향 대조로 산술적 동작과 설득력 있어 보이는 문학적 이야기를 구분하세요.",
        "en": "Use the cancellation and reverse controls to distinguish arithmetic behavior from a persuasive literary story."
      },
      "furtherLinks": [
        {
          "slug": "arithmetic",
          "example": "cancel",
          "label": {
            "ko": "상쇄 대조",
            "en": "A cancellation control"
          }
        },
        {
          "slug": "arithmetic",
          "example": "reverse",
          "label": {
            "ko": "관계를 역방향으로 바꾸기",
            "en": "Reverse the relationship"
          }
        }
      ]
    },
    "21": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "richard-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "사적인 감옥 독백에 역사극 레이블이 붙는 이유는 무엇일까요?",
        "en": "Why might a private prison meditation inherit the label History?"
      },
      "change": {
        "ko": "감옥 구절을 유지하고 th-baseline에서 작품 단위 홀드아웃 모델로 바꾸세요.",
        "en": "Keep the prison text fixed; switch from th-baseline to the play-heldout model."
      },
      "record": {
        "ko": "작품에서 물려받은 레이블과 예측 순위, 『리처드 2세』의 학습 포함 여부를 적으세요.",
        "en": "Record the inherited play label, predicted ranking and whether Richard II was present in training."
      },
      "further": {
        "ko": "예측 설명과 미지 작품으로의 전이 평가 중 무엇을 묻는지 정한 뒤 LIME을 살펴보세요.",
        "en": "Inspect LIME only after stating whether you are explaining the prediction or evaluating transfer to an unseen work."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "prison-heldout",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ]
    },
    "22": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-one-epoch",
          "label": {
            "ko": "학습 자료를 한 번 통과하기",
            "en": "One pass through the training data"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "장르 점수가 바뀌었다고 모든 단어 벡터가 같은 방식으로 이동했다고 할 수 있나요?",
        "en": "Would a changed genre score prove that every word vector moved in the same way?"
      },
      "change": {
        "ko": "글로스터 입력을 유지하고 1·2·3에포크 분류기를 비교하세요.",
        "en": "Keep Gloucester’s input fixed and compare the one-, two- and three-epoch classifiers."
      },
      "record": {
        "ko": "예측과 체크포인트 설정을 적으세요. 임베딩 실습은 이 미세조정 공간이 아니라 기본 BERT를 보여 줍니다.",
        "en": "Record predictions and checkpoint settings; the embedding station exposes base BERT, not these fine-tuned vector spaces."
      },
      "further": {
        "ko": "표현의 이동을 주장하려면 텍스트·층·풀링을 고정한 별도 벡터 추출 실험을 설계하세요.",
        "en": "Design a separate vector-export experiment with identical texts, layer and pooling before claiming representational movement."
      },
      "furtherLinks": [
        {
          "slug": "embeddings",
          "example": "passages",
          "label": {
            "ko": "두 구절의 벡터 표현",
            "en": "Represent the two passages"
          }
        }
      ]
    },
    "23": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-two-epochs",
          "label": {
            "ko": "학습 자료를 두 번 통과하기",
            "en": "Two passes through the training data"
          }
        },
        {
          "slug": "finish-the-line",
          "example": "hamlet-question",
          "label": {
            "ko": "익숙한 대사, 새로운 질문",
            "en": "A familiar line, a new question"
          }
        }
      ],
      "before": {
        "ko": "학습 설계에서 인코딩·풀링·손실 계산·매개변수 갱신은 각각 어디에 있나요?",
        "en": "Where do encoding, pooling, loss calculation and parameter updating appear in the training recipe?"
      },
      "change": {
        "ko": "완료된 프로필을 2에포크에서 3에포크로 바꾸고 설정을 확인한 뒤 차이를 해석하세요.",
        "en": "Switch only the selected completed profile from two epochs to three; inspect the settings before interpreting the difference."
      },
      "record": {
        "ko": "학습 때 반복되는 연산과 빈칸 추론 한 번에 실행되는 연산을 구분해 적으세요.",
        "en": "Record which operations repeat during training and which run during a single cloze prediction."
      },
      "further": {
        "ko": "그럴듯한 빈칸 후보가 지도학습 장르 과제의 성공을 입증하지 못하는 이유를 설명하세요.",
        "en": "Explain why a plausible missing-word candidate cannot establish success on a supervised genre task."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ]
    },
    "24": {
      "primary": [
        {
          "slug": "nearest",
          "example": "richard",
          "label": {
            "ko": "하나의 세계로 상상한 감옥",
            "en": "A prison imagined as a world"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ],
      "before": {
        "ko": "구절 하나가 여러 작품과 유사하면서 분류에서는 한 레이블이 가장 높을 수 있을까요?",
        "en": "Could a passage resemble several plays while receiving one highest-ranked classifier label?"
      },
      "change": {
        "ko": "리처드 구절의 검색 입력에서 짧은 첫 구절만 지우고 다시 검색하세요.",
        "en": "In retrieval, remove only a short opening phrase from the Richard excerpt and repeat the search."
      },
      "record": {
        "ko": "이웃 순서와 원작 포함 여부, 색인 청크 제한을 적으세요. 지도가 작품 전체를 분류하지는 않습니다.",
        "en": "Record the neighbor order, source inclusion and indexed-chunk limitation; the map does not classify the whole play."
      },
      "further": {
        "ko": "별도의 Folger 감옥 구절을 홀드아웃 분류기로 시험하고 판본과 입력 변경을 명시하세요.",
        "en": "Test the separate Folger prison excerpt with the held-out classifier; record the edition and input change explicitly."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ]
    },
    "25": {
      "primary": [
        {
          "slug": "attention",
          "example": "authority",
          "label": {
            "ko": "글로스터의 공표 · 1층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 1, head 1"
          }
        },
        {
          "slug": "lime-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "proclaim이 authority에 주의를 준다면 무엇을 알 수 있고 무엇은 아직 검증되지 않나요?",
        "en": "What would proclaim attending to authority establish—and what would it leave untested?"
      },
      "change": {
        "ko": "공표문과 층을 유지하고 어텐션 헤드만 바꾸세요.",
        "en": "Keep the proclamation and layer fixed; change only the attention head."
      },
      "record": {
        "ko": "질의 행 하나와 큰 가중치의 도착 토큰, 층·헤드를 적으세요. 이는 부호 있는 장르 기여도가 아닙니다.",
        "en": "Record one query row, its strongest destinations, layer and head; these are not signed genre contributions."
      },
      "further": {
        "ko": "같은 인용문에 LIME을 실행하고 추가된 분류기·섭동 가정을 확인하세요.",
        "en": "Run LIME on the same quotation and identify the additional classifier and perturbation assumptions."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ]
    },
    "26": {
      "primary": [
        {
          "slug": "attention",
          "example": "authority-middle",
          "label": {
            "ko": "글로스터의 공표 · 6층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 6, head 1"
          }
        }
      ],
      "before": {
        "ko": "어떤 토큰이 proclaim을 his가 가리키는 권위와 연결할까요?",
        "en": "Which tokens might connect proclaim with the authority expressed by his?"
      },
      "change": {
        "ko": "헤드와 단어를 유지하고 6층과 12층을 비교하세요.",
        "en": "Keep the head and words fixed; compare layer 6 with layer 12."
      },
      "record": {
        "ko": "두 층의 proclaim 행을 적고 문장부호나 특수 토큰으로 향하는 가중치도 포함하세요.",
        "en": "Record the proclaim row in both layers, including punctuation or special-token destinations."
      },
      "further": {
        "ko": "층을 하나로 복원한 뒤 별도 입력 실험으로 his를 지우세요. 두 변경을 한 비교에 섞지 마세요.",
        "en": "Restore one layer, then remove his as a separate text intervention; do not combine the two changes in one comparison."
      },
      "furtherLinks": [
        {
          "slug": "attention",
          "example": "authority-late",
          "label": {
            "ko": "글로스터의 공표 · 12층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 12, head 1"
          }
        }
      ]
    },
    "27": {
      "primary": [
        {
          "slug": "attention",
          "example": "body",
          "label": {
            "ko": "리어의 노출된 신체 · 6층, 1번 헤드",
            "en": "Lear: the exposed body · layer 6, head 1"
          }
        },
        {
          "slug": "context",
          "example": "graue",
          "label": {
            "ko": "매장·태도·말장난",
            "en": "A burial, a manner, and a pun"
          }
        }
      ],
      "before": {
        "ko": "리어의 문장에서 grave와 death가 서로 같은 역할을 할까요?",
        "en": "Would grave and death have interchangeable roles in Lear’s sentence?"
      },
      "change": {
        "ko": "층과 헤드를 고정하고 수정한 사본에서 grave만 death로 바꾸세요.",
        "en": "At fixed layer and head, replace only grave with death in an explicitly edited copy."
      },
      "record": {
        "ko": "토큰화와 어텐션 도착점의 변화, 문법·의미 변화를 함께 적으세요.",
        "en": "Record tokenization and changed attention destinations alongside the altered grammar and sense."
      },
      "further": {
        "ko": "grave·death의 정적 이웃과 문맥 속 graue를 비교하며 철자와 표현 방식의 차이를 명시하세요.",
        "en": "Compare static neighbors for grave and death, then contextual graue examples; keep spelling and representation differences explicit."
      },
      "furtherLinks": [
        {
          "slug": "neighbors",
          "example": "death",
          "label": {
            "ko": "반복되는 대조",
            "en": "A repeated contrast"
          }
        }
      ]
    },
    "28": {
      "primary": [
        {
          "slug": "attention",
          "example": "storm",
          "label": {
            "ko": "폭풍 속 어릿광대 · 6층, 1번 헤드",
            "en": "The Fool in the storm · layer 6, head 1"
          }
        }
      ],
      "before": {
        "ko": "헤드를 보기 전에 cold·night·fools·madmen 사이의 관계를 하나 예상하세요.",
        "en": "Before seeing a head, propose one relation among cold, night, fools and madmen."
      },
      "change": {
        "ko": "6층과 어릿광대의 문장을 유지하고 1번·2번 헤드를 비교하세요.",
        "en": "Keep layer 6 and the Fool’s sentence fixed; compare head 1 with head 2."
      },
      "record": {
        "ko": "주제 이름을 붙이기 전에 실제 토큰 연결 둘을 설명하고 예상에 어긋난 증거도 적으세요.",
        "en": "Describe two actual token links before naming a theme; record any evidence that contradicts your proposed theme."
      },
      "further": {
        "ko": "세 번째 헤드도 살펴보세요. 감정 같은 이름은 헤드에 지정된 기능이 아니라 해석 가설입니다.",
        "en": "Try a third head. A label such as emotion is your hypothesis, not an assigned function of that head."
      },
      "furtherLinks": [
        {
          "slug": "attention",
          "example": "storm-head-two",
          "label": {
            "ko": "폭풍 속 어릿광대 · 6층, 2번 헤드",
            "en": "The Fool in the storm · layer 6, head 2"
          }
        }
      ]
    },
    "29": {
      "primary": [
        {
          "slug": "attention",
          "example": "authority-late",
          "label": {
            "ko": "글로스터의 공표 · 12층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 12, head 1"
          }
        },
        {
          "slug": "nearest",
          "example": "henry",
          "label": {
            "ko": "함께 행동하라는 호소",
            "en": "A speech urging collective action"
          }
        }
      ],
      "before": {
        "ko": "한 문장 안의 헤드 결합과 작품의 여러 청크 결합은 어떻게 다른가요?",
        "en": "How does combining heads within a sentence differ from combining chunks of a play?"
      },
      "change": {
        "ko": "공표문을 유지하고 헤드만 바꾼 뒤, 별도로 검색 모델의 작품 벡터 설명을 확인하세요.",
        "en": "Hold the proclamation fixed and change only its head; separately inspect the retrieval model’s work-vector description."
      },
      "record": {
        "ko": "토큰 어텐션과 색인 청크 평균의 단위·화살표를 따로 그리고 둘을 장르 투표로 설명하지 마세요.",
        "en": "Draw separate units and arrows for token attention and indexed-chunk averaging; do not describe either as a genre vote."
      },
      "further": {
        "ko": "작품 전체의 집계 규칙을 제안하기 전에 같은 작품의 두 발췌문을 분류기에서 비교하세요.",
        "en": "Compare two excerpts of one work in the classifier lab before proposing a rule for work-level aggregation."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ]
    },
    "30": {
      "primary": [
        {
          "slug": "explain",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        },
        {
          "slug": "lime-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "예측, 국소 설명, 문학적 주장을 각각 어떤 문장으로 구분할 수 있나요?",
        "en": "What separate sentences would describe a prediction, a local explanation and your literary claim?"
      },
      "change": {
        "ko": "하나의 과제에서만 분류기와 나머지 글을 유지하고 큰 가중치의 단어를 지우세요.",
        "en": "In one task only, remove a strongly weighted word while keeping the classifier and other text fixed."
      },
      "record": {
        "ko": "원래 점수와 부호 있는 가중치, 국소 적합도, 수정 후 점수를 증거 유형별로 적으세요.",
        "en": "Record the original score, signed weight, local fit and edited score; label each evidence type separately."
      },
      "further": {
        "ko": "희극·비극과 비극·역사극의 설명을 비교하되 레이블과 가중치 척도를 같은 것으로 보지 마세요.",
        "en": "Contrast the Comedy/Tragedy and Tragedy/History explanations without treating their labels or weight scales as interchangeable."
      },
      "furtherLinks": [
        {
          "slug": "judge",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        }
      ]
    },
    "31": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "어떤 글을 학습·평가·후속 탐색에 각각 사용할 것인가요?",
        "en": "Which texts will teach the model, evaluate it, and remain for later exploration?"
      },
      "change": {
        "ko": "기준 모델과 작품 홀드아웃 목록을 비교하되 살펴보는 완료 프로필만 바꾸세요.",
        "en": "Compare the baseline and play-heldout manifests; change only which completed profile you inspect."
      },
      "record": {
        "ko": "학습 작품과 홀드아웃 작품, 별도 탐색 대상인 『페리클레스』를 역할별로 적으세요.",
        "en": "List training titles, held-out titles and Pericles as a separate exploration case; distinguish those roles."
      },
      "further": {
        "ko": "예측을 보기 전에 외부 구절을 하나 정하여 인상적인 결과만 고르는 일을 줄이세요.",
        "en": "Choose one external passage before viewing its predictions, reducing the temptation to select only striking results."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "all-models",
          "label": {
            "ko": "『페리클레스』 · 열 모델 모두 비교",
            "en": "Pericles · compare all ten models"
          }
        }
      ]
    },
    "32": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ],
      "before": {
        "ko": "자료에서 예측까지 실험을 되짚으려면 어떤 일곱 기록이 필요할까요?",
        "en": "Which seven records would let another reader retrace the experiment from source to prediction?"
      },
      "change": {
        "ko": "짧은 창 설계를 살펴보고 의도한 변경 하나와 그에 따른 후속 영향을 구분하세요.",
        "en": "Inspect the shorter-window recipe and identify the single intended design change and its downstream effects."
      },
      "record": {
        "ko": "최종 점수만 적지 말고 자료·추출·청크·분할·설정·평가·예측을 연결한 기록을 만드세요.",
        "en": "Build a log linking source, extraction, chunks, split, settings, evaluation and prediction—not just the final score."
      },
      "further": {
        "ko": "입력과 모델 ID를 유지한 채 기록한 구절 하나를 분류와 LIME으로 이어 가세요.",
        "en": "Carry one recorded passage through classification and LIME, keeping its input and model identifier attached."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        },
        {
          "slug": "lime-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ]
    },
    "33": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        },
        {
          "slug": "tokenizer",
          "example": "names",
          "label": {
            "ko": "로마와 시민들",
            "en": "Rome and its citizens"
          }
        }
      ],
      "before": {
        "ko": "작품명과 특정 디지털 판본·파일을 구분하는 식별자는 무엇인가요?",
        "en": "What identifiers distinguish a play title from a particular digital edition and file?"
      },
      "change": {
        "ko": "자료 링크를 연 뒤 EEBO-TCP 예제를 별도 사료로 확인하고 Folger 자료를 몰래 대체하지 마세요.",
        "en": "Follow a source link, then inspect an EEBO-TCP example as a separate witness rather than replacing the Folger source silently."
      },
      "record": {
        "ko": "추출된 언어를 비교하기 전에 제공처·작품·판본·파일 식별자·입수 정보를 기록하세요.",
        "en": "Record provider, work, edition, file identifier and retrieval information before comparing extracted language."
      },
      "further": {
        "ko": "저장한 모델 입력을 전체 원문 읽기창에서 다시 찾을 수 있도록 기준 구절을 정하세요.",
        "en": "Choose an anchor phrase that lets a saved model input be found again in the full source reader."
      },
      "furtherLinks": [
        {
          "slug": "nearest",
          "example": "henry",
          "label": {
            "ko": "함께 행동하라는 호소",
            "en": "A speech urging collective action"
          }
        }
      ]
    },
    "34": {
      "primary": [
        {
          "slug": "tokenizer",
          "example": "names",
          "label": {
            "ko": "로마와 시민들",
            "en": "Rome and its citizens"
          }
        },
        {
          "slug": "attention",
          "example": "authority",
          "label": {
            "ko": "글로스터의 공표 · 1층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 1, head 1"
          }
        }
      ],
      "before": {
        "ko": "어떤 정보가 발화이고 어떤 정보가 화자나 무대 행동을 식별하나요?",
        "en": "Which information belongs to spoken text, and which identifies the speaker or stage action?"
      },
      "change": {
        "ko": "표시된 화자 표지 하나를 토큰화 입력에 복사한 뒤 그 표지만 제거하세요.",
        "en": "Copy one displayed speaker prefix into an editable tokenizer input, then remove only that prefix."
      },
      "record": {
        "ko": "토큰 수 변화와 사라진 화자 정보를 기록하세요. 이 수동 비교가 원본 XML을 파싱하거나 바꾸지는 않습니다.",
        "en": "Record token-count change and lost speaker information; this manual comparison does not parse or rewrite the source XML."
      },
      "further": {
        "ko": "모델 글에서 제외하더라도 추출기가 메타데이터로 보존해야 할 TEI 필드를 설명하세요.",
        "en": "Explain which TEI fields a reproducible extractor must preserve as metadata even when excluding them from model text."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "35": {
      "primary": [
        {
          "slug": "tokenizer",
          "example": "worke",
          "label": {
            "ko": "worke라는 표현",
            "en": "A piece of worke"
          }
        },
        {
          "slug": "neighbors",
          "example": "murther",
          "label": {
            "ko": "철자에 따라 달라지는 검색",
            "en": "Spelling changes the query"
          }
        }
      ],
      "before": {
        "ko": "철자만으로도 초기 인쇄 사료에 대한 현대 모델의 표현이 바뀔까요?",
        "en": "Could spelling alone change a modern model’s representation of an early printed witness?"
      },
      "change": {
        "ko": "검색 방법을 유지하고 murther와 murder를 비교하며 수정한 형태를 명시하세요.",
        "en": "Compare murther with murder while keeping the query method fixed; identify the edited form explicitly."
      },
      "record": {
        "ko": "조각과 이웃, 판본을 기록하세요. 철자 하나를 바꿔도 검증된 현대 판본이 되지는 않습니다.",
        "en": "Record pieces, neighbors and edition labels; replacing one spelling does not create a verified modern edition."
      },
      "further": {
        "ko": "긴 s의 정규화와 실제 철자 수정을 구분한 뒤 별도의 판본 비교를 설계하세요.",
        "en": "Compare long-s normalization with a substantive spelling edit, then plan a separate edition-level comparison."
      },
      "furtherLinks": [
        {
          "slug": "tokenizer",
          "example": "jest",
          "label": {
            "ko": "고통을 jest의 대상으로 삼기",
            "en": "Affliction as a toy to jest at"
          }
        }
      ]
    },
    "36": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "richard-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        },
        {
          "slug": "lime-lab",
          "example": "chapter-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "입력된 리처드의 감옥 독백 앞에는 누구의 말이 있나요?",
        "en": "Whose words appear before Richard’s prison soliloquy in the supplied input?"
      },
      "change": {
        "ko": "th-baseline을 유지하고 엑스턴의 앞부분만 제거하며 리처드의 발화는 그대로 두세요.",
        "en": "Keep th-baseline fixed and remove only Exton’s opening words, retaining Richard’s speech unchanged."
      },
      "record": {
        "ko": "정확한 경계와 화자, 두 예측을 저장하세요. 원래 입력은 장면과 화자 경계를 넘었습니다.",
        "en": "Save exact boundaries, speaker attribution and both predictions; the original input crossed a scene and speaker boundary."
      },
      "further": {
        "ko": "가중치가 있는 모든 단어를 리처드의 말로 여기기 전에 두 입력의 국소 설명을 비교하세요.",
        "en": "Compare the local explanations for these two inputs before treating every weighted word as Richard’s voice."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "chapter-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        }
      ]
    },
    "37": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        },
        {
          "slug": "judge",
          "example": "richard",
          "label": {
            "ko": "하나의 세계로 상상한 감옥",
            "en": "A prison imagined as a world"
          }
        }
      ],
      "before": {
        "ko": "masked는 입력의 자동 수정인가요, 모델의 학습 조건인가요?",
        "en": "Does masked describe an automatic input edit or a model’s training condition?"
      },
      "change": {
        "ko": "Folger 감옥 입력을 유지하고 th-play-heldout을 th-play-heldout-masked로 바꾸세요.",
        "en": "Keep the Folger prison input unchanged; switch th-play-heldout to th-play-heldout-masked."
      },
      "record": {
        "ko": "두 모델 ID와 같은 이름 포함 입력을 기록하고 추론 때 이름이 사라졌다고 설명하지 마세요.",
        "en": "Record both model IDs and confirm the same name-bearing text reached both; do not claim names vanished at inference."
      },
      "further": {
        "ko": "별도 수정으로 Bolingbroke를 someone으로 바꾸고 학습 조건 비교와 구분하여 살펴보세요.",
        "en": "As a separate edit, replace Bolingbroke with someone; compare that intervention with the training-condition comparison."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "prison-masked",
          "label": {
            "ko": "감옥·시간·음악 · th-masked",
            "en": "Prison, time and music · th-masked"
          }
        }
      ]
    },
    "38": {
      "primary": [
        {
          "slug": "tokenizer",
          "example": "jest",
          "label": {
            "ko": "고통을 jest의 대상으로 삼기",
            "en": "Affliction as a toy to jest at"
          }
        }
      ],
      "before": {
        "ko": "같은 사료 구간에 표기 단어와 모델 토큰이 각각 몇 개일까요?",
        "en": "How many written words and model tokens do you expect in the same source window?"
      },
      "change": {
        "ko": "구절에서 철자 하나만 바꾼 뒤 jest와 nunnery를 각각 단독 입력으로도 살펴보세요.",
        "en": "Keep the passage fixed except for one spelling, then inspect jest and nunnery as separate single-word inputs."
      },
      "record": {
        "ko": "토큰 조각과 수를 적고 이어짐 표지를 음절 경계와 구분하세요.",
        "en": "Record token pieces and counts, distinguishing continuation markers from syllable boundaries."
      },
      "further": {
        "ko": "분류나 어텐션 입력을 준비할 때 단어 수 추정이 아니라 토큰 한도를 사용하세요.",
        "en": "Use the token budget—not a word-count estimate—to prepare a passage for classification or attention."
      },
      "furtherLinks": [
        {
          "slug": "tokenizer",
          "example": "nunnery",
          "label": {
            "ko": "비난과 Nunnery",
            "en": "An accusation and a Nunnery"
          }
        },
        {
          "slug": "attention",
          "example": "body",
          "label": {
            "ko": "리어의 노출된 신체 · 6층, 1번 헤드",
            "en": "Lear: the exposed body · layer 6, head 1"
          }
        }
      ]
    },
    "39": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "genre-three-way",
          "label": {
            "ko": "확장: 세 번째 선택지로 희극 추가",
            "en": "Extension: add Comedy as a third choice"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "pericles-three-way",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · genre-three-way",
            "en": "Treason, kingship and honour in Pericles · genre-three-way"
          }
        }
      ],
      "before": {
        "ko": "비극·역사극에 희극을 추가하면 어떤 답이 새로 가능해지나요?",
        "en": "What becomes an available answer when Comedy is added to Tragedy and History?"
      },
      "change": {
        "ko": "『페리클레스』 구절을 유지하고 이진 모델을 세 레이블 프로필로 바꾸세요.",
        "en": "Hold the Pericles passage fixed and switch the binary model to the three-label profile."
      },
      "record": {
        "ko": "클래스 순서와 자료 구성, 전체 확률을 적으세요. 레이블 추가에는 학습 자료 추가도 따릅니다.",
        "en": "Record class order, corpus membership and all probabilities; extra training data accompanies the extra label."
      },
      "further": {
        "ko": "새 분류 과제를 설계하기 전에 각 폴더의 포함 기준을 문장으로 쓰세요.",
        "en": "Write inclusion criteria for each folder before designing a new classification task."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "40": {
      "primary": [
        {
          "slug": "tokenizer",
          "example": "worke",
          "label": {
            "ko": "worke라는 표현",
            "en": "A piece of worke"
          }
        },
        {
          "slug": "train-classifier",
          "example": "th-short-128",
          "label": {
            "ko": "짧은 문맥: 128토큰",
            "en": "Short contexts: 128 tokens"
          }
        }
      ],
      "before": {
        "ko": "고정된 토큰 경계가 반드시 장면 끝과 일치할까요?",
        "en": "Would a fixed token boundary necessarily coincide with a scene ending?"
      },
      "change": {
        "ko": "수정 가능한 발췌문에 이웃 문장 하나를 더하고 제한된 실습에 넣기 전에 토큰 수를 다시 세세요.",
        "en": "Extend an editable excerpt by one neighboring sentence and recount tokens before submitting it to a length-limited station."
      },
      "record": {
        "ko": "마지막 단어와 토큰 한도를 적으세요. 입력 거절은 자동 잘림이나 장면 보존 분할이 아닙니다.",
        "en": "Record the exact final words and token budget; an input rejection is not silent truncation or a scene-preserving cut."
      },
      "further": {
        "ko": "128·510 내용 토큰 설계를 비교하고 표본 수와 에포크당 갱신 횟수 변화도 확인하세요.",
        "en": "Compare the 128- and 510-content-token recipes, including changed sample counts and updates per epoch."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "41": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        }
      ],
      "before": {
        "ko": "소수 작품의 많은 청크가 여러 독립 작품과 같은 다양성을 제공할까요?",
        "en": "Would many chunks from a few works provide the same diversity as many independent works?"
      },
      "change": {
        "ko": "클래스 정의를 유지하고 홀드아웃 설계 다음에 기준 모델을 살펴보세요.",
        "en": "Inspect the baseline after the held-out recipe, keeping the class definitions fixed."
      },
      "record": {
        "ko": "서로 다른 작품 수와 청크 수, 작품 중복을 각각 기록하세요.",
        "en": "Record distinct work counts, chunk counts and title overlap; keep those three quantities separate."
      },
      "further": {
        "ko": "다음 자료를 긴 작품으로 늘릴지 작가 수로 늘릴지 정하고 증거의 단위를 설명하세요.",
        "en": "Choose whether a future corpus should grow by longer works or more authors, and justify the unit of evidence."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "42": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-seed-17",
          "label": {
            "ko": "학습 시드를 바꾸어 반복하기",
            "en": "Repeat with a different training seed"
          }
        }
      ],
      "before": {
        "ko": "학습 무작위성만 바뀐다면 어떤 수치가 그대로여야 할까요?",
        "en": "Which counts should stay fixed when only training randomness changes?"
      },
      "change": {
        "ko": "seed-17과 기준 모델을 비교하고 점수에 앞서 균형화·분할 기록을 확인하세요.",
        "en": "Compare seed-17 with the baseline and inspect the balancing and split records before comparing scores."
      },
      "record": {
        "ko": "클래스별 유지 수와 분할·학습 시드를 구분해 적으세요. 이 비교는 새 언더샘플링 시드 실험이 아닙니다.",
        "en": "Record retained counts by class and the separate split/training seeds; this pair does not test a new undersampling seed."
      },
      "further": {
        "ko": "제외한 청크 ID를 남기고 평가 집합을 고정하는 별도의 재표집 실험을 설계하세요.",
        "en": "Design a separate resampling experiment that logs discarded chunk IDs and holds the evaluation set fixed."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "43": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ],
      "before": {
        "ko": "어떤 분할이 완전히 보지 못한 작품으로의 일반화에 답하나요?",
        "en": "Which split answers whether the classifier can generalize to an entirely unseen play?"
      },
      "change": {
        "ko": "리처드 구절을 유지하고 청크 분할·작품 홀드아웃 분류기를 비교하세요.",
        "en": "Keep Richard’s passage fixed and compare the chunk-split and play-heldout classifiers."
      },
      "record": {
        "ko": "『리처드 2세』의 학습 포함 여부와 검증 단위, 구절 예측을 서로 다른 관찰로 적으세요.",
        "en": "Record Richard II’s training membership, the validation unit and the passage prediction; these are different observations."
      },
      "further": {
        "ko": "홀드아웃 비극에서도 반복하여 역사극 구절 하나로 전체 전이를 판단하지 마세요.",
        "en": "Repeat on a held-out tragedy to avoid drawing a general transfer claim from one History-labelled passage."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout-masked",
          "label": {
            "ko": "이름 마스킹과 작품 홀드아웃",
            "en": "Held-out plays with name masking"
          }
        }
      ]
    },
    "44": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ],
      "before": {
        "ko": "어떤 설정이 학습 절차를 바꾸고 어떤 설정은 저장 위치만 정하나요?",
        "en": "Which settings change the learning procedure, and which merely determine where files are saved?"
      },
      "change": {
        "ko": "256토큰 프로필을 선택하고 기준 모델과 다른 설정을 모두 확인하세요.",
        "en": "Select the 256-token profile and identify every recorded setting that differs from the baseline."
      },
      "record": {
        "ko": "정확도를 해석하기 전에 모델명·내용 토큰 한도·배치 설정·에포크·시드·분할을 기록하세요.",
        "en": "Record model name, content-token limit, batch settings, epochs, seeds and split before interpreting accuracy."
      },
      "further": {
        "ko": "새 복제 실행의 최소 설정을 쓰고 준비 프로필 선택기와 별도 설계 편집 기능을 구분하세요.",
        "en": "Write a minimal configuration for a fresh-copy run; distinguish editable recipes elsewhere from this prepared profile selector."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-medium-256",
          "label": {
            "ko": "중간 길이 문맥: 256토큰",
            "en": "Middle-sized contexts: 256 tokens"
          }
        }
      ]
    },
    "45": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-one-epoch",
          "label": {
            "ko": "학습 자료를 한 번 통과하기",
            "en": "One pass through the training data"
          }
        }
      ],
      "before": {
        "ko": "에포크를 늘리면 새로운 원문이 추가되나요, 기존 청크를 다시 보나요?",
        "en": "Does another epoch add new source texts, or another pass through existing chunks?"
      },
      "change": {
        "ko": "자료·분할·내용 토큰 한도가 같은지 확인하며 1·2·3에포크를 비교하세요.",
        "en": "Compare one, two and three epochs while checking that the corpus, split and content-token limit agree."
      },
      "record": {
        "ko": "실제 갱신 단계와 손실·검증 지표를 적고 학습 기간을 배치 크기·워밍업과 구분하세요.",
        "en": "Record actual update steps, loss and validation measures; distinguish duration from batch size and warmup."
      },
      "further": {
        "ko": "새 복제 학습을 시작하기 전에 중단 기준을 정하고 나중에 유리한 끝점만 고르지 마세요.",
        "en": "Choose a stopping rule before launching a fresh copy, rather than choosing the most flattering endpoint afterwards."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-two-epochs",
          "label": {
            "ko": "학습 자료를 두 번 통과하기",
            "en": "Two passes through the training data"
          }
        }
      ]
    },
    "46": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ],
      "before": {
        "ko": "어떤 곡선 형태가 학습 청크 밖으로의 전이를 의심하게 할까요?",
        "en": "What curve pattern would make you question whether learning transfers beyond the training chunks?"
      },
      "change": {
        "ko": "기록된 2에포크 실행으로 바꾸고 공통 에포크를 같은 기준으로 비교하세요.",
        "en": "Switch to the two-epoch recorded run and compare common epochs without changing the plot’s interpretation."
      },
      "record": {
        "ko": "축 단위와 각 에포크의 학습·검증 손실을 적고 원인보다 변화 방향을 먼저 설명하세요.",
        "en": "Record axis units, training loss and validation loss at each available epoch; describe direction before explaining it."
      },
      "further": {
        "ko": "차이를 과적합 탓으로 돌리기 전에 분할이나 시드도 달라졌는지 확인하세요.",
        "en": "Check whether a difference accompanies a different split or seed before attributing it to overfitting."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-seed-17",
          "label": {
            "ko": "학습 시드를 바꾸어 반복하기",
            "en": "Repeat with a different training seed"
          }
        }
      ]
    },
    "47": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        },
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        }
      ],
      "before": {
        "ko": "낮은 검증 손실과 학습 작품에 대한 친숙함이 함께 나타날 수 있나요?",
        "en": "Can low validation loss coexist with familiarity with the same plays used in training?"
      },
      "change": {
        "ko": "비극·역사극 질문을 명시한 채 청크 단위와 작품 단위 분할을 비교하세요.",
        "en": "Compare chunk-level and whole-play separation while keeping the intended Tragedy/History question explicit."
      },
      "record": {
        "ko": "손실·정확도 옆에 작품 중복을 기록하세요. 좋은 곡선만으로 작품 단위 지름길을 배제할 수 없습니다.",
        "en": "Record title overlap beside the loss and accuracy; a favorable curve alone cannot rule out work-level shortcuts."
      },
      "further": {
        "ko": "보지 못한 작품을 정하고 구절 예측을 미리 적은 뒤 전이를 직접 시험하세요.",
        "en": "Choose an unseen work and prerecord a passage-level prediction to test transfer directly."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ]
    },
    "48": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        }
      ],
      "before": {
        "ko": "정확도 백분율을 해석하려면 먼저 어떤 분모를 알아야 하나요?",
        "en": "What must the denominator be before an accuracy percentage becomes interpretable?"
      },
      "change": {
        "ko": "표시된 혼동행렬 수로 정확도를 계산한 뒤 분할이 다른 기준 모델을 확인하세요.",
        "en": "Compute accuracy from the displayed confusion counts, then inspect the baseline under its different split."
      },
      "record": {
        "ko": "모델 ID·정답 청크 수·평가 청크 수·분할 방식·작품 중복을 하나의 결과 문장에 적으세요.",
        "en": "Write model ID, correct chunks, evaluated chunks, split type and work overlap in one complete result sentence."
      },
      "further": {
        "ko": "매크로 F1과 클래스별 재현율을 비교하여 정확도 하나가 감추는 정보를 찾으세요.",
        "en": "Compare macro F1 and per-class recall to identify what a single accuracy value conceals."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "49": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ],
      "before": {
        "ko": "역사극 레이블 청크를 비극으로 예측한 결과는 어느 칸에 들어가나요?",
        "en": "Which cell means a History-labelled chunk was predicted Tragedy?"
      },
      "change": {
        "ko": "0이 아닌 오류 칸을 행·열 레이블과 함께 읽고 홀드아웃 모델의 행렬로 바꾸세요.",
        "en": "Read each nonzero error cell with its row and column labels; then switch to the held-out model’s matrix."
      },
      "record": {
        "ko": "두 오류 방향과 분모를 적으세요. 준비된 시연 구절을 확인된 검증 오류 행으로 간주하지 마세요.",
        "en": "Record both error directions and denominators; do not relabel a prepared demonstration as an identified validation-error row."
      },
      "further": {
        "ko": "별도의 감옥 예측으로 오류 읽기 질문을 만들고 실제로 역사극과 다른 결과인지 기록하세요.",
        "en": "Use a separate prison prediction to formulate an error-reading question, recording whether it actually disagrees with History."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ]
    },
    "50": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        },
        {
          "slug": "lime-lab",
          "example": "prison-heldout",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ],
      "before": {
        "ko": "역사극 작품에서 비극이 예측된다면 단순한 모델 실패 외에 무엇을 살펴보겠나요?",
        "en": "If a History-labelled work yields Tragedy, what alternatives to simple model failure would you investigate?"
      },
      "change": {
        "ko": "홀드아웃 모델을 유지하고 감옥 입력의 엑스턴 앞부분만 제거하세요.",
        "en": "Keep the held-out model fixed; remove only the opening Exton material from the prison input."
      },
      "record": {
        "ko": "판본·정확한 입력·작품 레이블·실제 예측·국소 적합도·대안 설명을 기록하세요.",
        "en": "Log edition, exact input, inherited label, actual prediction, local fit and a competing explanation."
      },
      "further": {
        "ko": "모델이 어려워하는 것을 일반화하기 전에 다른 홀드아웃 작품과 비교하세요.",
        "en": "Compare with a different held-out work before generalizing about what the model finds difficult."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        }
      ]
    },
    "51": {
      "primary": [
        {
          "slug": "attention",
          "example": "authority",
          "label": {
            "ko": "글로스터의 공표 · 1층, 1번 헤드",
            "en": "Gloucester’s proclamation · layer 1, head 1"
          }
        },
        {
          "slug": "lime-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "어떤 화면이 토큰의 주의 방향을 보여 주고 어떤 화면이 단어 제거에 대한 분류기 반응을 근사하나요?",
        "en": "Which display answers where a token attends, and which approximates a classifier’s response to word removal?"
      },
      "change": {
        "ko": "공표문을 그대로 두고 두 방법을 실행하며 사용된 서로 다른 모델을 확인하세요.",
        "en": "Keep the proclamation unchanged and run the two methods, identifying their different underlying models."
      },
      "record": {
        "ko": "어텐션 행·층·헤드와 예측 클래스·LIME 부호 가중치·대리 모델 적합도를 따로 기록하세요.",
        "en": "Record attention row/layer/head separately from predicted class, signed LIME weights and surrogate fit."
      },
      "further": {
        "ko": "LIME 순위의 단어 하나를 제거해 분류 효과를 시험하세요. 어텐션 연결만으로 그 효과를 예측할 수는 없습니다.",
        "en": "Remove one LIME-ranked word and test its classification effect; an attention link alone cannot predict that effect."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ]
    },
    "52": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "royal-justice",
          "label": {
            "ko": "왕권과 사법권 · th-baseline",
            "en": "Royal authority and justice · th-baseline"
          }
        },
        {
          "slug": "lime-lab",
          "example": "chapter-royal",
          "label": {
            "ko": "왕권과 사법권 · th-baseline",
            "en": "Royal authority and justice · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "누가 위임된 왕권을 논증하고 누가 그 논증에 답하나요?",
        "en": "Who argues for delegated royal authority, and who answers that argument?"
      },
      "change": {
        "ko": "th-baseline을 유지하고 royal 한 번을 지우되 정확한 위치를 표시하세요.",
        "en": "Keep th-baseline fixed; remove one occurrence of royal and mark its exact location."
      },
      "record": {
        "ko": "대법원장·헨리 5세의 경계와 수정 전후 확률, 삭제 범위를 기록하세요.",
        "en": "Record the Chief Justice/Henry V boundary, original and edited probabilities, and the scope of the deletion."
      },
      "further": {
        "ko": "이 국소 삭제를 별도로 만든 절 단위 수정과 비교하세요. 두 개입은 다른 주장을 시험합니다.",
        "en": "Compare this local deletion with a separately prepared clause-level edit; the interventions test different claims."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "chapter-royal",
          "label": {
            "ko": "왕권과 사법권 · th-baseline",
            "en": "Royal authority and justice · th-baseline"
          }
        }
      ]
    },
    "53": {
      "primary": [
        {
          "slug": "lime-lab",
          "example": "chapter-royal",
          "label": {
            "ko": "왕권과 사법권 · th-baseline",
            "en": "Royal authority and justice · th-baseline"
          }
        },
        {
          "slug": "bag-of-words",
          "example": "royal-idf",
          "label": {
            "ko": "왕권·사법권과 TF-IDF",
            "en": "Royal justice with TF-IDF"
          }
        }
      ],
      "before": {
        "ko": "royal이 중요한 이유는 빈도, 구별력, 이 분류기에서의 유용성 중 무엇일까요?",
        "en": "Would royal matter because it is frequent, distinctive, or useful to this classifier?"
      },
      "change": {
        "ko": "모델과 원래 구절을 유지하고 LIME 가중치와 선택한 문서 모음의 빈도를 비교하세요.",
        "en": "Keep the model and original passage fixed while comparing its LIME weights with its counts in the selected collection."
      },
      "record": {
        "ko": "예측 클래스와 표시된다면 royal의 부호, 국소 적합도와 TF-IDF의 비교 문서를 기록하세요.",
        "en": "Record the predicted class, royal’s sign if reported, local fit and the collection used for TF-IDF."
      },
      "further": {
        "ko": "별도 분류에서 royal을 제거하세요. 상위 LIME 특성에 없다는 사실도 결과로 기록하세요.",
        "en": "Remove royal in a separate classification run. Absence from the top LIME features is also a result to record."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "royal-justice",
          "label": {
            "ko": "왕권과 사법권 · th-baseline",
            "en": "Royal authority and justice · th-baseline"
          }
        }
      ]
    },
    "54": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "prison-unseen",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        },
        {
          "slug": "lime-lab",
          "example": "prison-heldout",
          "label": {
            "ko": "감옥·시간·음악 · th-play-heldout",
            "en": "Prison, time and music · th-play-heldout"
          }
        }
      ],
      "before": {
        "ko": "king·beggar·nothing은 고정된 범주보다 바뀌는 정체성을 어떻게 드러내나요?",
        "en": "How do king, beggar and nothing describe changing identities rather than a stable category?"
      },
      "change": {
        "ko": "홀드아웃 모델을 유지하고 수정 사본에서 리처드 발화의 전환 표현 하나만 지우세요.",
        "en": "Keep the held-out model fixed and remove only one transition phrase from Richard’s speech in an edited copy."
      },
      "record": {
        "ko": "정확한 표현과 사료 경계, 예측 변화를 적고 리처드의 말과 엑스턴의 앞부분을 구분하세요.",
        "en": "Record the exact phrase, source boundary and prediction change; distinguish Richard’s words from Exton’s opening."
      },
      "further": {
        "ko": "같은 수정을 th-baseline에서도 시험하여 『리처드 2세』 학습 경험에 따라 효과가 달라지는지 보세요.",
        "en": "Test the same edit under th-baseline to ask whether its effect depends on training exposure to Richard II."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "chapter-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        }
      ]
    },
    "55": {
      "primary": [
        {
          "slug": "lime-lab",
          "example": "chapter-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        },
        {
          "slug": "embeddings",
          "example": "king-self",
          "label": {
            "ko": "이름·직위·자아",
            "en": "Names, office and selfhood"
          }
        }
      ],
      "before": {
        "ko": "time과 music이 Bolingbroke라는 이름 하나로 요약되지 않는 해석을 뒷받침할까요?",
        "en": "Could time and music support a reading that the single name Bolingbroke does not summarize?"
      },
      "change": {
        "ko": "분류 입력에서 Bolingbroke만 someone으로 바꾸고 나머지 내용과 체크포인트를 유지하세요.",
        "en": "Replace only Bolingbroke with someone in the classifier input, preserving the rest and the checkpoint."
      },
      "record": {
        "ko": "수정 내용과 확률 변화, 국소 적합도를 기록하세요. 정치적 이름을 가리는 것은 문학적 정보도 바꿉니다.",
        "en": "Record the literal edit, probability change and local fit; masking a political name also changes literary information."
      },
      "further": {
        "ko": "끝부분 확장 실험은 먼저 토큰 한도 안의 짧은 대응 구간을 준비하고 경계를 모두 기록한 뒤 진행하세요.",
        "en": "For an ending-extension experiment, first prepare shorter matched windows within the token budget and document every boundary."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "richard-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        }
      ]
    },
    "56": {
      "primary": [
        {
          "slug": "lime-lab",
          "example": "chapter-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        },
        {
          "slug": "attention",
          "example": "body",
          "label": {
            "ko": "리어의 노출된 신체 · 6층, 1번 헤드",
            "en": "Lear: the exposed body · layer 6, head 1"
          }
        }
      ],
      "before": {
        "ko": "두 모델이 같은 레이블을 예측하면서 서로 다른 국소 특성을 보일 수 있을까요?",
        "en": "Could two models agree on a label while relying on different local features?"
      },
      "change": {
        "ko": "감옥 입력을 유지하고 LIME에서 th-baseline과 th-masked를 비교하세요.",
        "en": "Keep the prison input fixed and compare th-baseline with th-masked in LIME."
      },
      "record": {
        "ko": "클래스 일치와 부호별 특성 중복, 두 적합도를 기록하세요. 안정된 예측이 안정된 설명을 보장하지는 않습니다.",
        "en": "Record class agreement, signed feature overlap and both fit scores; stable predictions do not guarantee stable explanations."
      },
      "further": {
        "ko": "짧은 사료 구절로 다른 방법인 어텐션을 다시 살피고 LIME 막대를 어텐션 헤드처럼 다루지 마세요.",
        "en": "Return to attention as a different method, using a short source passage rather than treating LIME bars as attention heads."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "prison-masked",
          "label": {
            "ko": "감옥·시간·음악 · th-masked",
            "en": "Prison, time and music · th-masked"
          }
        }
      ]
    },
    "57": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "all-models",
          "label": {
            "ko": "『페리클레스』 · 열 모델 모두 비교",
            "en": "Pericles · compare all ten models"
          }
        },
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        }
      ],
      "before": {
        "ko": "자료의 정체와 모델 선택, 예측을 구별하려면 어떤 열이 필요할까요?",
        "en": "Which columns would let you distinguish source identity, model choice and a prediction?"
      },
      "change": {
        "ko": "두 번째 구절을 고르기 전에 『페리클레스』 입력을 유지하고 완료된 열 모델을 비교하세요.",
        "en": "Keep the Pericles input fixed and compare all ten completed models before choosing a second passage."
      },
      "record": {
        "ko": "입력·모델 쌍마다 판본·글·모델 ID·클래스명·확률을 한 행으로 기록하세요.",
        "en": "Record one row per input/model pair with edition, text, model ID, class names and probabilities."
      },
      "further": {
        "ko": "외부 서지 분류는 별도 열에 두고 모델 출력으로 자료 목록을 덮어쓰지 마세요.",
        "en": "Keep external bibliographical categories in separate columns; model output must not overwrite the source catalogue."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ]
    },
    "58": {
      "primary": [
        {
          "slug": "bag-of-words",
          "example": "honour-count",
          "label": {
            "ko": "반복과 반역 혐의",
            "en": "Repetition and the accusation of treason"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "누가 누군가를 traitor라 부를 수 있으며 noble과 descent는 그 비난에 어떻게 답하나요?",
        "en": "Who may call someone traitor, and how do noble and descent answer that accusation?"
      },
      "change": {
        "ko": "수정 사본에서 traitor 한 번만 지우고 선택한 모델과 나머지 구문을 유지하세요.",
        "en": "In a marked copy, remove one traitor occurrence while preserving the selected model and remaining syntax."
      },
      "record": {
        "ko": "원 인용문의 판본과 삭제 위치, 예측 변화를 기록하고 출처의 행 번호 주의사항도 유지하세요.",
        "en": "Record the original quotation’s edition, the removed occurrence and any prediction change; retain the source citation caveat."
      },
      "further": {
        "ko": "국소 설명과 반복 빈도를 비교하세요. 수사적 강조와 모델의 가장 큰 특성이 같을 필요는 없습니다.",
        "en": "Compare the local explanation with raw repetition; a rhetorical emphasis need not match a model’s strongest feature."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ]
    },
    "59": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        },
        {
          "slug": "lime-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "보고 기준값은 모델의 최고 확률 클래스와 어떻게 다른가요?",
        "en": "How would a reporting threshold differ from the model’s highest-probability class?"
      },
      "change": {
        "ko": "계산된 예측은 그대로 두고 재학습 대신 기록지에서 두 보고 기준값을 적용하세요.",
        "en": "Keep the measured prediction unchanged; apply two reporting thresholds in your notes rather than retraining."
      },
      "record": {
        "ko": "현재 실행의 실제 확률과 각 보고 결정을 적으세요. 판단 유보는 모델 순위의 역전이 아닙니다.",
        "en": "Record the current run’s actual probability and each reporting decision; withholding judgment does not reverse the model’s ranking."
      },
      "further": {
        "ko": "정치적 해석 가설을 LIME으로 살핀 뒤 명시적 글 수정 하나를 시험하고 기준값을 설명으로 여기지 마세요.",
        "en": "Inspect LIME for a proposed political reading, then test one explicit textual edit without treating the threshold as explanation."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "pericles-three-way",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · genre-three-way",
            "en": "Treason, kingship and honour in Pericles · genre-three-way"
          }
        }
      ]
    },
    "60": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        },
        {
          "slug": "nearest",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        }
      ],
      "before": {
        "ko": "역사극 성향 청크 수가 같아도 한 장면에 모여 있다면 의미가 같을까요?",
        "en": "Would the same number of History-leaning chunks mean the same thing if they clustered in one scene?"
      },
      "change": {
        "ko": "Folger 읽기창에서 서로 다른 장면의 짧은 『페리클레스』 구간 둘을 골라 한 모델로 분류하세요.",
        "en": "From the Folger reader, choose two short Pericles windows from different scenes and classify both with one fixed model."
      },
      "record": {
        "ko": "판본·장면·정확한 구간·확률을 기록하세요. 선택한 두 구간은 작품 전체의 분포가 아닙니다.",
        "en": "Record edition, scene, exact windows and probabilities; two selected windows are not a whole-play distribution."
      },
      "further": {
        "ko": "작품별 비율을 계산하기 전에 전체 청크 표집을 계획하고 색인 작품 검색과 절차를 비교하세요.",
        "en": "Plan exhaustive chunk sampling before computing work-level shares, and compare that procedure with indexed-play retrieval."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "61": {
      "primary": [
        {
          "slug": "nearest",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "처음의 장르 주장 중 무엇이 고정된 본질에 관한 것이고 무엇이 비교에 관한 것이었나요?",
        "en": "Which of your initial genre claims concerned a fixed essence, and which concerned comparison?"
      },
      "change": {
        "ko": "한 구절을 유지하고 분류기 프로필을 바꾼 뒤, 별도로 가까운 작품도 확인하세요.",
        "en": "Keep one passage fixed while changing the classifier profile; separately inspect its retrieval neighbors."
      },
      "record": {
        "ko": "두 비교에서도 유지되는 주장과 레이블·자료·표현 방식에 의존하는 주장을 구분해 적으세요.",
        "en": "Record which claims survive both comparisons and which depend on a label set, corpus or representation."
      },
      "further": {
        "ko": "선호하는 장르 설명을 확인해 주는 예만 고르지 말고 반대되는 구절로 돌아가세요.",
        "en": "Return to a contrary passage rather than selecting only an example that confirms your preferred account of genre."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "storm",
          "label": {
            "ko": "폭풍 속 어릿광대와 리어 · th-baseline",
            "en": "The Fool and Lear in the storm · th-baseline"
          }
        }
      ]
    },
    "62": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "all-models",
          "label": {
            "ko": "『페리클레스』 · 열 모델 모두 비교",
            "en": "Pericles · compare all ten models"
          }
        },
        {
          "slug": "lime-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "다른 독자가 결과를 재현하면서도 해석에는 동의하지 않는 일이 모순 없이 가능할까요?",
        "en": "Could another reader reproduce your result and disagree with your interpretation without a contradiction?"
      },
      "change": {
        "ko": "비교한 모델 중 하나를 고르고 나머지 입력을 유지한 채 기록한 단어 수정 하나를 시험하세요.",
        "en": "Choose one model from the comparison and test one documented word edit; keep the remaining input fixed."
      },
      "record": {
        "ko": "자료·입력·설정·결과·설명을 포함한 관찰 기록을 내려받고 관찰과 해석을 따로 쓰세요.",
        "en": "Download the observation with source, input, settings, result and explanation; write observation and interpretation separately."
      },
      "further": {
        "ko": "Qwen을 쓴다면 제안을 생성된 논평으로 표시하고 검증된 결과와 원문에 대조하세요.",
        "en": "If using Qwen, quote its suggestion as generated commentary and test it against the verified result and source."
      },
      "furtherLinks": [
        {
          "slug": "explain",
          "example": "merchant",
          "label": {
            "ko": "희극 속의 복수",
            "en": "Revenge inside a comedy"
          }
        }
      ]
    },
    "63": {
      "primary": [
        {
          "slug": "lime-lab",
          "example": "gloucester",
          "label": {
            "ko": "글로스터의 공표 · th-baseline",
            "en": "Gloucester’s proclamation · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "가중치를 보기 전에 공표문·폭풍·『페리클레스』에서 어떤 문체 차이를 예상하나요?",
        "en": "Which stylistic differences do you expect across proclamation, storm and Pericles before seeing weights?"
      },
      "change": {
        "ko": "th-baseline을 유지하고 세 예제의 준비된 구절만 차례로 바꾸세요.",
        "en": "Keep th-baseline fixed and change only the curated passage across those three examples."
      },
      "record": {
        "ko": "양·음 특성을 각각 최대 다섯 개와 목표 클래스·적합도를 기록하되 부족하면 그대로 보고하세요.",
        "en": "Record up to five positive and negative features, their target class and fit; if fewer exist, report that honestly."
      },
      "further": {
        "ko": "각 목록의 수사적 해석을 쓴 뒤 중요하다고 주장한 표지 하나를 통제된 삭제로 시험하세요.",
        "en": "Write a rhetorical interpretation for each list, then test one claimed marker with a controlled deletion."
      },
      "furtherLinks": [
        {
          "slug": "lime-lab",
          "example": "storm",
          "label": {
            "ko": "폭풍 속 어릿광대와 리어 · th-baseline",
            "en": "The Fool and Lear in the storm · th-baseline"
          }
        },
        {
          "slug": "lime-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ]
    },
    "64": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        },
        {
          "slug": "bag-of-words",
          "example": "all-passages",
          "label": {
            "ko": "작은 비교 자료 모음",
            "en": "A small comparison corpus"
          }
        }
      ],
      "before": {
        "ko": "빅토리아·모더니즘 실험에는 이 셰익스피어 모델이 제공하지 못하는 어떤 자료·작가 통제가 필요한가요?",
        "en": "What corpus and author controls would a Victorian/Modernist experiment require that these Shakespeare models cannot supply?"
      },
      "change": {
        "ko": "현재 설계로 작품 단위 분할을 연습한 뒤 계획한 시대 자료의 작가 홀드아웃 분할을 작성하세요.",
        "en": "Rehearse work-level splitting with the available recipe; then draft an author-heldout split for your proposed period corpus."
      },
      "record": {
        "ko": "포함 기준·판본 사용 조건·작가와 작품 수·레이블을 적으세요. 이 선택으로 시대 분류기가 학습된 것은 아닙니다.",
        "en": "Record inclusion criteria, edition permissions, author/work counts and labels; no period classifier has been trained by this selection."
      },
      "further": {
        "ko": "새 자료를 확보하고 기록한 뒤 학습하세요. 빈도 실습은 범위를 밝힌 예비 자료 모음에만 사용하세요.",
        "en": "Acquire and document the new corpus before training; use the counting station only for a clearly identified pilot collection."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "genre-three-way",
          "label": {
            "ko": "확장: 세 번째 선택지로 희극 추가",
            "en": "Extension: add Comedy as a third choice"
          }
        }
      ]
    },
    "65": {
      "primary": [
        {
          "slug": "classifier-lab",
          "example": "pericles",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · th-baseline",
            "en": "Treason, kingship and honour in Pericles · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "예측 레이블 수가 같아도 평균 확률은 다를 수 있나요?",
        "en": "Can equal predicted-label counts coexist with different average probabilities?"
      },
      "change": {
        "ko": "하나의 모델로 짧은 Folger 『페리클레스』 구간 둘을 분류하고 레이블 집합은 유지하세요.",
        "en": "With one fixed model, classify two short Folger Pericles windows; vary only the passage, not the label set."
      },
      "record": {
        "ko": "레이블 비율과 평균 확률을 따로 계산하고 경계에 가까운 구간이 없다면 그 사실을 적으세요.",
        "en": "Calculate label shares and mean probabilities separately; if neither window is near your boundary, record that absence."
      },
      "further": {
        "ko": "시대 모델과 원문 자료가 마련된 뒤 이 표 설계를 하디에 적용하세요. 현재 결과는 방법 연습용입니다.",
        "en": "Transfer this table design to Hardy only after a period model and source corpus exist; these are method-rehearsal results."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-play-heldout",
          "label": {
            "ko": "완전히 제외한 네 작품에서 평가하기",
            "en": "Evaluate on four entirely held-out plays"
          }
        }
      ]
    },
    "66": {
      "primary": [
        {
          "slug": "train-classifier",
          "example": "genre-three-way",
          "label": {
            "ko": "확장: 세 번째 선택지로 희극 추가",
            "en": "Extension: add Comedy as a third choice"
          }
        },
        {
          "slug": "classifier-lab",
          "example": "pericles-three-way",
          "label": {
            "ko": "『페리클레스』의 반역·왕권·명예 · genre-three-way",
            "en": "Treason, kingship and honour in Pericles · genre-three-way"
          }
        }
      ],
      "before": {
        "ko": "세 번째 클래스를 더하면 같은 답이 정밀해지는 것과 달리 질문 자체가 어떻게 바뀌나요?",
        "en": "How does adding a third class change the question rather than merely making the same answer more precise?"
      },
      "change": {
        "ko": "『페리클레스』 입력을 유지하고 이진·삼원 프로필을 비교하되 학습 자료 변화도 적으세요.",
        "en": "Keep the Pericles input fixed and compare binary and three-way profiles, noting the accompanying training-corpus change."
      },
      "record": {
        "ko": "레이블 정의와 순위를 기록하고 서로 다른 레이블 공간의 확률을 단순히 빼지 마세요.",
        "en": "Record label definitions and ranking, not a direct subtraction of probabilities from incompatible label spaces."
      },
      "further": {
        "ko": "하디 레이블 설계 둘을 만들고 실행 전에 각각 필요한 글·홀드아웃 단위·비교를 나열하세요.",
        "en": "Draft two Hardy labelling designs and list the texts, held-out units and comparisons each would require before running either."
      },
      "furtherLinks": [
        {
          "slug": "train-classifier",
          "example": "th-baseline",
          "label": {
            "ko": "비극인가 역사극인가: 기준 모델",
            "en": "Tragedy or History: a baseline"
          }
        }
      ]
    },
    "67": {
      "primary": [
        {
          "slug": "generate",
          "example": "richard",
          "label": {
            "ko": "하나의 세계로 상상한 감옥",
            "en": "A prison imagined as a world"
          }
        },
        {
          "slug": "lime-lab",
          "example": "chapter-prison",
          "label": {
            "ko": "감옥·시간·음악 · th-baseline",
            "en": "Prison, time and music · th-baseline"
          }
        }
      ],
      "before": {
        "ko": "어떤 문체 주장이 원문에 근거하고 어떤 주장은 생성된 이어 쓰기에서 그럴듯하게만 들리나요?",
        "en": "Which style claim is supported by an original passage, and which merely sounds plausible in a generated continuation?"
      },
      "change": {
        "ko": "생성 프롬프트를 유지해 두 번 실행한 뒤 온도만 바꾸고 표본 추출의 변동도 관찰에 포함하세요.",
        "en": "Keep the generation prompt fixed, run twice, then change only temperature; treat sampling variation as part of the observation."
      },
      "record": {
        "ko": "원문·생성된 추가 내용·분류기 측정 근거·비평적 해석을 구분하고 판본 차이도 적으세요.",
        "en": "Separate source words, generated additions, measured classifier evidence and your critical interpretation; note edition differences."
      },
      "further": {
        "ko": "주장과 반대 증거, 다음 실험을 발표하세요. 하디 연구 계획과 측정된 셰익스피어 연습을 구분하세요.",
        "en": "Present a claim, contrary evidence and a next experiment. For Hardy, distinguish the proposed research from the measured Shakespeare rehearsal."
      },
      "furtherLinks": [
        {
          "slug": "classifier-lab",
          "example": "all-models",
          "label": {
            "ko": "『페리클레스』 · 열 모델 모두 비교",
            "en": "Pericles · compare all ten models"
          }
        },
        {
          "slug": "explain",
          "example": "richard",
          "label": {
            "ko": "하나의 세계로 상상한 감옥",
            "en": "A prison imagined as a world"
          }
        }
      ]
    }
  }
};

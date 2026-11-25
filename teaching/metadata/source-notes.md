# Chapter 11: source and teaching notes

This tutorial was newly designed around the published chapter, rather than copying the earlier website lesson. The user explicitly stated that they own the copyright and authorized original book images in this teaching website.

**Source:** 김희진·강수진, 「비극인가 역사극인가? 딥러닝 텍스트 분류를 통한 르네상스 희곡 분석」, 『디지털인문학의 길잡이: 입문』, chapter 11, printed pp. 421 onward. All page references in the tutorial use printed page numbers; PDF ordinal pages are one higher.

The supplied, published electronic book was located locally as `디지털인문학의 길잡이_입문_PDF 전자책_업데이트.pdf`. Figure assets were extracted from this published PDF. Figures 1–9 and 13–14 are the original embedded raster images, extracted without visual alteration. Figure 10 is vector artwork in the PDF and was rendered from its original page region at four times PDF scale. Figures 11–12 combine bitmap artwork with separate vector labels, so their complete original figure regions were rendered at five times PDF scale to preserve axes, legends and numerical annotations. No generated reconstruction or image editing was used.

The author manuscript folder also contains files numbered 1–14, but some are earlier variants: notably figures 10, 13 and 14 differ from the published edition. The website deliberately uses the published edition throughout. `figure-provenance.json` records the original source paths, page numbers, image object identifiers, extraction method, and SHA-256 checksums. The published PDF checksum is `18387600d94cd124632dadc3dba1ce21849adb6f99b2e8799993a6cb47d9f6bc`.

| Figure | Printed page | Published caption | How this tutorial treats it |
|---|---:|---|---|
| 1 | 422 | 『리어왕』 1608년 사절본 초판 | Historical document |
| 2 | 422 | 1623년 제1이절판본 | Historical document; catalogue page |
| 3 | 433 | 비극 및 역사극 어휘의 임베딩 예시 | Conceptual coordinates, not live embeddings |
| 4 | 438 | 사전학습이 형성하는 의미축과 단어 임베딩 프로필의 예시 | Illustrative semantic axes and values |
| 5 | 440 | 미세 조정 후 단어 임베딩의 재배치 | Simplified before/after illustration |
| 6 | 442 | 미세 조정 후 작품 임베딩의 군집과 장르 경계 예시(역사극/비극) | Conceptual cluster illustration |
| 7 | 444 | 어텐션의 기본 작동 방식 | Simplified explanation |
| 8 | 445 | 유사한 어휘의 문맥별 어텐션 패턴 차이 | Simplified explanation |
| 9 | 447 | 멀티헤드 어텐션: 여러 렌즈의 병렬 작동 | Conceptual lenses, not guaranteed head roles |
| 10 | 451 | 딥러닝 기반 텍스트 분류의 실습 절차 | Original research-workflow diagram |
| 11 | 458 | 학습 및 검증 손실 변화 곡선 | Historical experiment reported by book |
| 12 | 460 | 분류 오류 행렬 | Historical experiment reported by book |
| 13 | 461 | 어텐션 스코어 기반 분석 | Original title retained; explanation-method caution |
| 14 | 463 | 어텐션 스코어 기반 분석(확장 모델) | Original title retained; Richard II passage |

## Numerical checks and interpretation

- The book describes 11 tragedy plays and 10 history plays (p. 451), and an 80:20 chunk-level training/validation split (pp. 456–457). The tutorial does not claim that this evaluates generalization to wholly unseen plays.
- Figure 12's row-major counts are `[112, 3; 2, 112]`. Class A is tragedy and Class B is history. Total = 229 chunks, correct = 224, accuracy = 224/229 = 97.8165938865%, rounded to 97.82%. The interactive matrix uses these historical counts; it is not a new model run.
- The score 0.5987 for the quoted *Pericles* passage comes from p. 465. The threshold widget is an explicitly simplified reporting-rule exercise. Changing its slider does not change the model score or reclassify the text using a live model. A score below the selected reporting threshold is labelled “judgment withheld”, not automatically the opposite genre.
- The five-chunk voting widget is entirely invented teaching data. It assumes equal-size chunks and shows simple majority counts, not averaged model confidence.
- Figures 13–14 retain the published captions but their word-contribution screenshots must not be confused with raw attention matrices, proof of causation, or the Playground's separate LIME procedure. The slides explicitly distinguish those concepts.
- The book's Folger/EEBO-TCP discussion and the website's EEBO-TCP excerpts do not imply identical editions, preprocessing or training data. The tutorial instructs students to verify the current model's labels and provenance.

## Interface and classroom use

Eighteen slides provide source comparison, interpretation, discussion prompts, and links to all nine Playground stations and the Trainer. Previous/Next buttons, a complete slide menu, keyboard arrows, direct slide hashes, native modal image zoom, local-in-tab notes and text download are available. Notes are not sent to a server. Embedded mode hides the standalone header and reports document height to the same-origin parent using the `playground-lesson-height` message with station `chapter-11`.

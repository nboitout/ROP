# English slide publication report

Date: 2026-09-04
Branch: `codex/english-codex-translation-v2`

## Publication summary

- Audited Chapters 0–21 in reading order.
- Selected 151 available V2 English slide assets across Chapters 0–18 and 20–21. Chapter 19 had no V2 asset.
- Chapter 0 retains six inline figures in the same semantic positions as French; figure 2 now uses its V2 English asset.
- Chapter 4 now exposes all 32 available English synthesis slides instead of stopping at slide 12. Slides 13–32 follow the French synthesis order and are anchored to the corresponding English passages.
- Chapter 14 now uses the new English vascular slide 4 in the vascularisation passage, in addition to its four direct V2 replacements.
- Chapter 16 slide 10 now uses the correctly numbered Chapter 16 V2 asset rather than the older misnamed Chapter 9 file.
- Every published English slide has an anchor, every anchor resolves to an existing English content block, and every selected slide asset is readable.

## Chapter audit

The French and English counts below are the visual sequences currently configured for the reader. A lower English count means that no English counterpart is available for one or more French synthesis, cartography, pathology, or photo visuals. These gaps were not filled with French-language artwork.

| Chapter | French visuals | English visuals after publication | V2 assets selected | Result / remaining issue |
| ---: | ---: | ---: | ---: | --- |
| 0 | 6 inline figures | 6 inline figures | 1 | Complete semantic parity |
| 1 | 19 | 17 | 4 | 2 English counterparts unavailable |
| 2 | 15 | 15 | 4 | Complete count parity |
| 3 | 23 | 19 | 5 | 4 English counterparts unavailable, including the supplementary cartography sequence |
| 4 | 48 | 32 | 10 | All English synthesis slides published; 16 French cartography/photo visuals have no English counterparts |
| 5 | 26 | 30 | 5 | English deck contains four additional stress/SAM/HPA visuals; all 30 are anchored |
| 6 | 18 | 18 | 11 | Complete slide parity; see workspace-only media issue below |
| 7 | 19 | 19 | 11 | Complete count parity |
| 8 | 24 | 16 | 2 | 8 English counterparts unavailable |
| 9 | 23 | 10 | 9 | 13 English counterparts unavailable |
| 10 | 18 | 14 | 10 | 4 English counterparts unavailable |
| 11 | 18 | 15 | 12 | 3 English counterparts unavailable |
| 12 | 16 | 14 | 13 | 2 English counterparts unavailable |
| 13 | 21 | 19 | 11 | 2 English counterparts unavailable |
| 14 | 23 | 23 | 5 | Complete count parity; new vascular slide inserted at the French-equivalent passage |
| 15 | 33 | 15 | 10 | 18 English pathology/reflex/cartography counterparts unavailable |
| 16 | 28 | 22 | 16 | 6 English counterparts unavailable |
| 17 | 25 | 19 | 6 | 6 English counterparts unavailable |
| 18 | 30 | 22 | 3 | 8 English counterparts unavailable |
| 19 | 48 | 35 | 0 | No new English slide update found; 13 English counterparts unavailable |
| 20 | 25 | 15 | 1 | 10 English counterparts unavailable |
| 21 | 17 | 10 | 2 | 7 English counterparts unavailable |

## Validation and issues

- All 151 selected V2 English images opened successfully. No corrupt image was found.
- English slide and anchor validation passes apart from two Chapter 6 inline media files currently deleted in the local working tree: `public/chapter-6/EN/figure-6-1.png` and `public/chapter-6/EN/figure-6-2.png`.
- Those two deletions are unrelated, were not included in this publication, and the files remain present in the committed branch used by Vercel.
- Other unrelated modified, deleted, and untracked workspace files were excluded from the publication commit.

// Chapter 5 — slide ↔ text synchronisation map for the combined reading
// experience prototype (/lecture/chapitre-5).
//
// The slide order and their position in the text come from Guy's source
// document "Chapitre 5 Mécanisme de Stress (test of new reader experience)",
// where each slide of the synthesis deck is embedded at the exact point of
// the text it illustrates. Slide images are pre-rendered pages of
// public/chapter-5/synthese.pdf.

export type SyncSlide = { src: string; title: string }

// blockIndex refers to the position in chapter5Fr sections[].blocks[].
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number }

export const chapter5Slides: SyncSlide[] = [
  { src: '/chapter-5/slides/slide-01.jpg', title: 'L’équilibre vital : homéostasie et allostasie' },
  { src: '/chapter-5/slides/slide-02.jpg', title: 'Stabilité dans le changement' },
  { src: '/chapter-5/slides/slide-03.jpg', title: 'Dualité du stress : distress vs eustress' },
  { src: '/chapter-5/slides/slide-04.jpg', title: 'La trilogie des stresseurs et l’effet cumulatif' },
  { src: '/chapter-5/slides/slide-05.jpg', title: 'Le syndrome général d’adaptation (SGA)' },
  { src: '/chapter-5/slides/slide-06.jpg', title: 'Phase d’alarme : matrice de réponse physiologique' },
  { src: '/chapter-5/slides/slide-07.jpg', title: 'Le point de bascule : cerveau limbique et hypothalamus' },
  { src: '/chapter-5/slides/slide-08.jpg', title: 'Phase 2 : recouvrement et vulnérabilité' },
  { src: '/chapter-5/slides/slide-09.jpg', title: 'Phase 3 : adaptation-résistance' },
  { src: '/chapter-5/slides/slide-10.jpg', title: 'L’épuisement : du dysfonctionnement à la chronicité' },
  { src: '/chapter-5/slides/slide-11.jpg', title: '« Nous sommes malades parce que nous perdons la santé »' },
  // Slide 12 reuses figure 5.13 (moved out of the inline text into the deck).
  { src: '/chapter-5/figure-5-13.png', title: 'Territoires crânien et cervical du nerf Vague X' },
  // Slide 13 reuses figure 5.16 (moved out of the inline text into the deck).
  { src: '/chapter-5/figure-5-16.png', title: 'Territoire abdominal gauche du nerf Vague X' },
]

// English deck — same slides, translated. The text↔slide anchors are shared
// (chapter5SlideAnchors): the EN content mirrors the FR block structure.
export const chapter5SlidesEn: SyncSlide[] = [
  { src: '/chapter-5/slides/en/slide-01.jpg', title: 'Vital balance: homeostasis and allostasis' },
  { src: '/chapter-5/slides/en/slide-02.jpg', title: 'The stress mechanism: stability in change' },
  { src: '/chapter-5/slides/en/slide-03.jpg', title: 'Duality of stress: distress vs. eustress' },
  { src: '/chapter-5/slides/en/slide-04.jpg', title: 'The trilogy of stressors and the cumulative effect' },
  { src: '/chapter-5/slides/en/slide-05.jpg', title: 'The general adaptation syndrome (GAS)' },
  { src: '/chapter-5/slides/en/slide-06.jpg', title: 'Alarm phase: physiological response matrix' },
  { src: '/chapter-5/slides/en/slide-07.jpg', title: 'The tipping point: limbic brain and hypothalamus' },
  { src: '/chapter-5/slides/en/slide-08.jpg', title: 'Phase 2: recovery and vulnerability' },
  { src: '/chapter-5/slides/en/slide-09.jpg', title: 'Phase 3: adaptation-resistance' },
  { src: '/chapter-5/slides/en/slide-10.jpg', title: 'Exhaustion: from dysfunction to chronicity' },
  { src: '/chapter-5/slides/en/slide-11.jpg', title: '“We are ill because we lose our health, not the other way around.”' },
  { src: '/chapter-5/figure-5-13.en.png', title: 'Cranial and cervical territories of the Vagus nerve X' },
  { src: '/chapter-5/figure-5-16.en.png', title: 'Left abdominal territory of the Vagus nerve X' },
]

// blockIndex -1 anchors a slide to the section heading itself: the marker is
// rendered just above the <h2> instead of inside a content block.
export const chapter5SlideAnchors: SyncAnchor[] = [
  { sectionId: 'definitions', blockIndex: 0,  slide: 1 },
  { sectionId: 'definitions', blockIndex: 2,  slide: 2 },
  { sectionId: 'stresseurs',  blockIndex: 2,  slide: 3 },
  { sectionId: 'stresseurs',  blockIndex: 6,  slide: 4 },
  { sectionId: 'sga',         blockIndex: 0,  slide: 5 },
  { sectionId: 'sga',         blockIndex: 3,  slide: 6 },
  { sectionId: 'sga',         blockIndex: 5,  slide: 7 },
  { sectionId: 'sga',         blockIndex: 15, slide: 8 },
  { sectionId: 'sga',         blockIndex: 20, slide: 9 },
  { sectionId: 'sga',         blockIndex: 35, slide: 10 },
  { sectionId: 'rop-stress',  blockIndex: -1, slide: 11 },
  { sectionId: 'rop-stress',  blockIndex: 2,  slide: 12 },
  // Just after the figure 5.15 caption (figure 5.17 is the next block).
  { sectionId: 'rop-stress',  blockIndex: 7,  slide: 13 },
]

import { chapter3Slides } from './chapter3.slidesync'

const existing = (slide: number) => chapter3Slides.find((candidate) => candidate.src.endsWith(`/slide-${String(slide).padStart(2, '0')}.png`))!
const endAt = (sectionId: string, blockIndex: number) => ({ end: { sectionId, blockIndex } })

export const chapter3ReworkSlides = [
  existing(1),
  existing(2),
  existing(5),
  existing(8),
  existing(9),
  existing(10),
  existing(11),
  existing(12),
  existing(13),
  existing(14),
  existing(15),
  existing(16),
  existing(17),
  existing(18),
  { src: '/chapter-3/rework-reflex/slide-01.png', title: 'Cartographie ROP : tronc cérébral' },
  { src: '/chapter-3/rework-reflex/slide-03.png', title: 'Cartographie ROP : réseaux limbiques et cortico-limbiques' },
  { src: '/chapter-3/rework-reflex/slide-05.png', title: 'Cartographie ROP : diencéphale et hypophyse' },
  existing(22),
  existing(23),
  existing(24),
  existing(25),
]

export const chapter3ReworkSlideAnchors = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'du-corps-vers-les-centres-d-integration', blockIndex: -1, slide: 2 },
  { sectionId: 'tronc-cerebral', blockIndex: 7, slide: 3 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 1, slide: 4 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 3, slide: 5 },
  { sectionId: 'cervelet-et-ganglions-de-la-base', blockIndex: 3, slide: 6 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 4, slide: 7 },
  { sectionId: 'diencephale', blockIndex: -1, slide: 8 },
  { sectionId: 'diencephale', blockIndex: 8, slide: 9 },
  { sectionId: 'diencephale', blockIndex: 9, slide: 10 },
  { sectionId: 'environnement-neuro-meninge', blockIndex: 2, slide: 11 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 13, slide: 12 },
  { sectionId: 'zones-reflexes-rop', blockIndex: -1, slide: 13, gapBefore: 'half' as const },
  { sectionId: 'zones-reflexes-rop', blockIndex: 0, slide: 14 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 3, slide: 15, ...endAt('zones-reflexes-rop', 3) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 6, slide: 16, ...endAt('zones-reflexes-rop', 6) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 10, slide: 17, ...endAt('zones-reflexes-rop', 10) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 13, slide: 18 },
  { sectionId: 'environnement-neuro-meninge', blockIndex: 5, slide: 19 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 11, slide: 20 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 12, slide: 21 },
]

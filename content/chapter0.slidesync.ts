export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & {
  slide: number | number[]
  gapBefore?: 'half'
  end?: SyncAnchorPoint
}

const endAt = (sectionId: string, blockIndex: number): Pick<SyncAnchor, 'end'> => ({
  end: { sectionId, blockIndex },
})

export const chapter0Slides: SyncSlide[] = [
  { src: '/chapter-0/FR/slides/figure-0-1.png', title: 'La séquence clinique ROP' },
  { src: '/chapter-0/FR/slides/figure-0-2.png', title: 'Les quatre niveaux complémentaires' },
  { src: '/chapter-0/FR/slides/figure-0-3.png', title: 'Terminologie clinique ROP' },
  { src: '/chapter-0/FR/slides/figure-0-4.png', title: 'Fondements neuro-anatomiques' },
  { src: '/chapter-0/FR/slides/figure-0-5.png', title: 'Le pelvis : un territoire particulièrement intéressant' },
  { src: '/chapter-0/FR/slides/figure-0-6.png', title: 'Modulation à distance et geste manuel' },
]

export const chapter0SlidesEn: SyncSlide[] = [
  { src: '/chapter-0/EN/Images/NCH%200%20EN%20IMG%201.png', title: 'The ROP Clinical Sequence' },
  { src: '/chapter-0/EN/Images/NCH%200%20EN%20IMG%202%20V2.png', title: 'Four Complementary Levels' },
  { src: '/chapter-0/EN/Images/NCH%200%20EN%20IMG%203.png', title: 'ROP Clinical Terminology' },
  { src: '/chapter-0/EN/Images/NCH%200%20EN%20IMG%204.png', title: 'Neuroanatomical Foundations' },
  { src: '/chapter-0/EN/Images/NCH%200%20EN%20IMG%205.png', title: 'The Pelvis: a Particularly Informative Region' },
  { src: '/chapter-0/EN/Images/NCH%200%20EN%20IMG%206.png', title: 'Distant Modulation and Manual Technique' },
]

// The deck remains in canonical numeric order. Anchors place each plate at its
// actual reading passage; Figure 3 is therefore encountered after Figure 6.
export const chapter0SlideAnchors: SyncAnchor[] = [
  { sectionId: '2-la-sequence-clinique-rop-quatre-niveaux-complementaires', blockIndex: 0, slide: 1, ...endAt('2-la-sequence-clinique-rop-quatre-niveaux-complementaires', 2) },
  { sectionId: '2-la-sequence-clinique-rop-quatre-niveaux-complementaires', blockIndex: 3, slide: 2, ...endAt('2-la-sequence-clinique-rop-quatre-niveaux-complementaires', 9) },
  { sectionId: '6-les-fondements-neuro-anatomiques-en-quelques-lignes', blockIndex: 0, slide: 4, ...endAt('6-les-fondements-neuro-anatomiques-en-quelques-lignes', 6) },
  { sectionId: '7-le-pelvis-un-territoire-particulierement-interessant', blockIndex: 0, slide: 5, ...endAt('7-le-pelvis-un-territoire-particulierement-interessant', 5) },
  { sectionId: '8-au-dela-du-pelvis-modulation-a-distance-et-geste-manuel', blockIndex: 0, slide: 6, ...endAt('8-au-dela-du-pelvis-modulation-a-distance-et-geste-manuel', 8) },
  { sectionId: '13-terminologie', blockIndex: 0, slide: 3, ...endAt('13-terminologie', 3) },
]

export const chapter0SlideAnchorsEn: SyncAnchor[] = chapter0SlideAnchors.map((anchor) => ({
  ...anchor,
  end: anchor.end ? { ...anchor.end } : undefined,
}))

// Chapter 6 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-6).
//
// Slides are pre-rendered from:
// public/chapter-6/Chapter6 Slides de synthese FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter6Slides: SyncSlide[] = [
  { src: '/chapter-6/slides/slide-01.png', title: 'Theorie polyvagale et ROP' },
  { src: '/chapter-6/slides/slide-02.png', title: 'Du syndrome general d adaptation a la theorie polyvagale' },
  { src: '/chapter-6/slides/slide-03.png', title: 'Chronologie evolutive du systeme autonome' },
  { src: '/chapter-6/slides/slide-04.png', title: 'Neuroception et frein vagal' },
  { src: '/chapter-6/slides/slide-05.png', title: 'Phase 1 : nerf vague ancien' },
  { src: '/chapter-6/slides/slide-06.png', title: 'Phase 2 : systeme sympathique' },
  { src: '/chapter-6/slides/slide-07.png', title: 'Phase 3 : nerf vague nouveau' },
  { src: '/chapter-6/slides/slide-08.png', title: 'Engagement social et nerfs craniens' },
  { src: '/chapter-6/slides/slide-09.png', title: 'Le paradoxe vagal' },
  { src: '/chapter-6/slides/slide-10.png', title: 'Hierarchisation polyvagale' },
  { src: '/chapter-6/slides/slide-11.png', title: 'Consequences cliniques du stress prolonge' },
  { src: '/chapter-6/slides/slide-12.png', title: 'Principe therapeutique de la ROP' },
  { src: '/chapter-6/slides/slide-13.png', title: 'Cartographie therapeutique ROP' },
  { src: '/chapter-6/slides/slide-14.png', title: 'Protocole ROP : etage superieur' },
  { src: '/chapter-6/slides/slide-15.png', title: 'Focus clinique : etage superieur' },
  { src: '/chapter-6/slides/slide-16.png', title: 'Protocole ROP : etages moyen et inferieur' },
  { src: '/chapter-6/slides/slide-17.png', title: 'Synthèse : carte polyvagale ROP' },
]

export const chapter6SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation-generale', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation-generale', blockIndex: 2, slide: 2 },
  { sectionId: 'theorie-polyvagale', blockIndex: 0, slide: 3 },
  { sectionId: 'theorie-polyvagale', blockIndex: 2, slide: 4 },
  { sectionId: 'theorie-polyvagale', blockIndex: 3, slide: 5 },
  { sectionId: 'theorie-polyvagale', blockIndex: 4, slide: 6 },
  { sectionId: 'theorie-polyvagale', blockIndex: 5, slide: 7 },
  { sectionId: 'theorie-polyvagale', blockIndex: 6, slide: 8 },
  { sectionId: 'theorie-polyvagale', blockIndex: 7, slide: 9 },
  { sectionId: 'engagement-social', blockIndex: 3, slide: 10 },
  { sectionId: 'engagement-social', blockIndex: 7, slide: 11 },
  { sectionId: 'engagement-social', blockIndex: 12, slide: [12, 13, 14, 15, 16, 17] },
]

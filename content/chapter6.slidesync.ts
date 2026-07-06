// Chapter 6 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-6).
//
// Slides are pre-rendered from:
// public/chapter-6/Chapter6 Slides de synthese FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter6Slides: SyncSlide[] = [
  { src: '/chapter-6/slides/slide-01.png', title: 'Theorie polyvagale et ROP' },
  { src: '/chapter-6/slides/slide-02.png', title: 'Du syndrome general d adaptation a la theorie polyvagale' },
  { src: '/chapter-6/slides/slide-03.png', title: 'Chronologie évolutive du système autonome' },
  { src: '/chapter-6/slides/slide-04.png', title: 'Matrice differentielle : la dualité du nerf vague' },
  { src: '/chapter-6/slides/slide-05.png', title: 'Phase 1 : nerf vague ancien' },
  { src: '/chapter-6/slides/slide-06.png', title: 'Phase 2 : système sympathique' },
  { src: '/chapter-6/slides/slide-08.png', title: 'Phase 3 : nerf vague nouveau' },
  { src: '/chapter-6/slides/slide-14.png', title: 'Le paradoxe vagal et l effondrement physiologique' },
  { src: '/chapter-6/slides/slide-15.png', title: 'Le paradoxe vagal' },
  { src: '/chapter-6/slides/slide-07.png', title: 'Neurophysiologie de la régulation cardiaque' },
  { src: '/chapter-6/slides/slide-09.png', title: 'Neurophysiologie de l engagement social' },
  { src: '/chapter-6/slides/slide-10.png', title: 'Engagement social et nerfs craniens' },
  { src: '/chapter-6/slides/slide-11.png', title: 'Neuroception et frein vagal' },
  { src: '/chapter-6/slides/slide-12.png', title: 'Neuroception : détection subconsciente' },
  { src: '/chapter-6/slides/slide-13.png', title: 'Synthèse : neuroception et contrôle interne' },
  { src: '/chapter-6/slides/slide-16.png', title: 'Conséquences cliniques du stress prolongé' },
  { src: '/chapter-6/slides/slide-17.png', title: 'Impératif thérapeutique ROP : approche hiérarchisée' },
  { src: '/chapter-6/slides/slide-23.png', title: 'Principe thérapeutique de la ROP' },
  { src: '/chapter-6/slides/slide-18.png', title: 'Protocole ROP : etage superieur' },
  { src: '/chapter-6/slides/slide-19.png', title: 'Focus clinique : etage superieur' },
  { src: '/chapter-6/slides/slide-20.png', title: 'Protocole ROP II : etage moyen' },
  { src: '/chapter-6/slides/slide-21.png', title: 'Protocole ROP III : etage inférieur' },
  { src: '/chapter-6/slides/slide-22.png', title: 'Synthèse : carte polyvagale ROP' },
]

export const chapter6SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation-generale', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation-generale', blockIndex: 2, slide: 2 },
  { sectionId: 'theorie-polyvagale', blockIndex: 0, slide: 3 },
  { sectionId: 'theorie-polyvagale', blockIndex: 10, itemIndex: 0, slide: 4 },
  { sectionId: 'theorie-polyvagale', blockIndex: 3, slide: 5 },
  { sectionId: 'theorie-polyvagale', blockIndex: 4, slide: 6 },
  { sectionId: 'theorie-polyvagale', blockIndex: 5, slide: 7 },
  { sectionId: 'theorie-polyvagale', blockIndex: 7, slide: 8 },
  { sectionId: 'theorie-polyvagale', blockIndex: 8, slide: 9 },
  { sectionId: 'theorie-polyvagale', blockIndex: 12, slide: 10 },
  { sectionId: 'engagement-social', blockIndex: 0, slide: 11 },
  { sectionId: 'engagement-social', blockIndex: 2, slide: 12 },
  { sectionId: 'engagement-social', blockIndex: 3, slide: 13 },
  { sectionId: 'engagement-social', blockIndex: 4, slide: 14 },
  { sectionId: 'engagement-social', blockIndex: 5, slide: 15 },
  { sectionId: 'engagement-social', blockIndex: 7, slide: 16 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 0, slide: 17 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 1, slide: 18 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 2, slide: 19 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 3, slide: 20 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 4, slide: 21 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 5, slide: 22 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 6, slide: 23 },
]

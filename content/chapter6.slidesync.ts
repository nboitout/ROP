// Chapter 6 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-6).
//
// Slides are supplied as pre-rendered PNGs in public/chapter-6/slides.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter6Slides: SyncSlide[] = [
  { src: '/chapter-6/slides/slide-01.png', title: 'Théorie polyvagale et ROP' },
  { src: '/chapter-6/slides/slide-02.png', title: 'Du syndrome général d’adaptation à la théorie polyvagale' },
  { src: '/chapter-6/slides/slide-03.png', title: 'Modèle évolutif du système autonome' },
  { src: '/chapter-6/slides/slide-04.png', title: 'Phase 1 — complexe vagal dorsal' },
  { src: '/chapter-6/slides/slide-05.png', title: 'Phase 2 — système sympathique' },
  { src: '/chapter-6/slides/slide-06.png', title: 'Phase 3 — complexe vagal ventral' },
  { src: '/chapter-6/slides/slide-07.png', title: 'Du stress au malaise vagal' },
  { src: '/chapter-6/slides/slide-08.png', title: 'Le paradoxe vagal' },
  { src: '/chapter-6/slides/slide-09.png', title: 'Les deux composantes du nerf vague selon la TPV' },
  { src: '/chapter-6/slides/slide-10.png', title: 'La neurophysiologie de l’engagement social' },
  { src: '/chapter-6/slides/slide-11.png', title: 'De l’attachement précoce à l’engagement social' },
  { src: '/chapter-6/slides/slide-12.png', title: 'Neuroception : détection subconsciente' },
  { src: '/chapter-6/slides/slide-13.png', title: 'Conséquences cliniques d’un stress prolongé selon la TPV' },
  { src: '/chapter-6/slides/slide-14.png', title: 'L’impératif thérapeutique ROP : une approche hiérarchisée' },
  { src: '/chapter-6/slides/slide-15.png', title: 'Protocole ROP : l’étage supérieur' },
  { src: '/chapter-6/slides/slide-16.png', title: 'Protocole ROP II : l’étage moyen' },
  { src: '/chapter-6/slides/slide-17.png', title: 'Protocole ROP III : l’étage inférieur' },
  { src: '/chapter-6/slides/slide-18.png', title: 'Synthèse : la carte polyvagale ROP' },
]

export const chapter6SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation-generale', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation-generale', blockIndex: 2, slide: 2 },
  { sectionId: 'theorie-polyvagale', blockIndex: 0, slide: 3 },
  { sectionId: 'theorie-polyvagale', blockIndex: 3, slide: 4 },
  { sectionId: 'theorie-polyvagale', blockIndex: 4, slide: 5 },
  { sectionId: 'theorie-polyvagale', blockIndex: 5, slide: 6 },
  { sectionId: 'theorie-polyvagale', blockIndex: 7, slide: 7 },
  { sectionId: 'theorie-polyvagale', blockIndex: 8, slide: 8 },
  { sectionId: 'theorie-polyvagale', blockIndex: 10, itemIndex: 0, slide: 9 },
  { sectionId: 'engagement-social', blockIndex: 0, slide: 10 },
  { sectionId: 'engagement-social', blockIndex: 2, slide: 11 },
  { sectionId: 'engagement-social', blockIndex: 4, slide: 12 },
  { sectionId: 'engagement-social', blockIndex: 7, slide: 13 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 0, slide: 14 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 2, slide: 15 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 4, slide: 16 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 5, slide: 17 },
  { sectionId: 'engagement-social', blockIndex: 12, itemIndex: 6, slide: 18 },
]

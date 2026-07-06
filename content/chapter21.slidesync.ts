// Chapter 21 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-21).
//
// Slides are pre-rendered from:
// public/chapter-21/Chapter21 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter21Slides: SyncSlide[] = [
  { src: '/chapter-21/slides/slide-01.png', title: 'Système érectile masculin et féminin' },
  { src: '/chapter-21/slides/slide-02.png', title: 'Finalité et situation anatomique' },
  { src: '/chapter-21/slides/slide-03.png', title: 'La dynamique musculaire' },
  { src: '/chapter-21/slides/slide-04.png', title: 'Glandes annexes et vascularisation' },
  { src: '/chapter-21/slides/slide-05.png', title: 'Réseau vasculaire et drainage' },
  { src: '/chapter-21/slides/slide-06.png', title: 'Câblage somatique : le nerf pudendal' },
  { src: '/chapter-21/slides/slide-07.png', title: 'Contrôle autonome : dualité sympathique et parasympathique' },
  { src: '/chapter-21/slides/slide-08.png', title: 'La séquence physiologique' },
  { src: '/chapter-21/slides/slide-09.png', title: 'Perspective clinique : dysfonctions sexuelles' },
  { src: '/chapter-21/slides/slide-10.png', title: 'La dimension psycho-émotionnelle' },
  { src: '/chapter-21/slides/slide-11.png', title: 'Cartographie ROP : le nerf pudendal' },
  { src: '/chapter-21/slides/slide-12.png', title: 'Cartographie ROP : structures érectiles et ligaments' },
  { src: '/chapter-21/slides/slide-13.png', title: 'Synergie de la fonction érectile' },
]

export const chapter21SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'situation', blockIndex: -1, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'vascularisation', blockIndex: -1, slide: 4 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 5 },
  { sectionId: 'innervation', blockIndex: -1, slide: 6 },
  { sectionId: 'innervation', blockIndex: 0, slide: 7 },
  { sectionId: 'physiologie', blockIndex: -1, slide: 8 },
  { sectionId: 'pathologies-courantes', blockIndex: -1, slide: 9 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1, slide: 10 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 11 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 12 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: [12, 13] },
]

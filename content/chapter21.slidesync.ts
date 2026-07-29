// Chapter 21 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-21).
//
// Slides are pre-rendered from the current Chapter 21 synthesis deck.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }
export type SyncBreakPoint = { sectionId: string; blockIndex: number; itemIndex?: number }

export const chapter21Slides: SyncSlide[] = [
  { src: '/chapter-21/slides/slide-01.png', title: 'Chapitre 21 : système érectile masculin et féminin' },
  { src: '/chapter-21/slides/slide-02.png', title: 'Fonction et situation anatomique' },
  { src: '/chapter-21/slides/slide-03.png', title: 'La dynamique musculaire' },
  { src: '/chapter-21/slides/slide-04.png', title: 'Glandes annexes et vascularisation' },
  { src: '/chapter-21/slides/slide-05.png', title: 'Réseau vasculaire et drainage' },
  { src: '/chapter-21/slides/slide-06.png', title: 'Innervation somatique : le nerf pudendal' },
  { src: '/chapter-21/slides/slide-07.png', title: 'Séquence physiologique de la réponse sexuelle' },
  { src: '/chapter-21/slides/slide-08.png', title: 'Pathologies courantes et facteurs associés' },
  { src: '/chapter-21/slides/slide-09.png', title: 'Relations viscéro-somatiques' },
  { src: '/chapter-21/slides/slide-10.png', title: 'La dimension psycho-émotionnelle' },
  { src: '/chapter-21/slides/slide-11.png', title: 'Zones réflexes podales' },
]

export const chapter21SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'situation', blockIndex: -1, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 1, slide: 4 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 5 },
  { sectionId: 'innervation', blockIndex: -1, slide: 6 },
  { sectionId: 'physiologie', blockIndex: -1, slide: 7 },
  { sectionId: 'pathologies-courantes', blockIndex: -1, slide: 8 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 9 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 10 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 11 },
]

export const chapter21HalfBreaks: SyncBreakPoint[] = [
  { sectionId: 'innervation', blockIndex: -1 },
  { sectionId: 'physiologie', blockIndex: -1 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 },
]

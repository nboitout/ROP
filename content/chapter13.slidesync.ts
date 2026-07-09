// Chapter 13 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-13).
//
// Slides 1-21 are pre-rendered from:
// public/chapter-13/Chapter13 Slides de synthese - FR.pdf
//
// Slides 22+ reuse the cartography pages from:
// public/chapter-13/Chapter13 Cartographie et Photos.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

const chapter13SlidesBySource: SyncSlide[] = [
  { src: '/chapter-13/slides/slide-01.png', title: 'La Rate' },
  { src: '/chapter-13/slides/slide-02.png', title: 'Identité et fonctions premières' },
  { src: '/chapter-13/slides/slide-03.png', title: 'Profil physiologique' },
  { src: '/chapter-13/slides/slide-04.png', title: 'Topographie viscérale' },
  { src: '/chapter-13/slides/slide-05.png', title: 'Morphologie externe et faces' },
  { src: '/chapter-13/slides/slide-06.png', title: 'Le réseau de fixité' },
  { src: '/chapter-13/slides/slide-07.png', title: 'Dualité tissulaire : pulpe blanche et pulpe rouge' },
  { src: '/chapter-13/slides/slide-08.png', title: 'Vascularisation : le réseau sanguin' },
  { src: '/chapter-13/slides/slide-09.png', title: 'Le réseau vasculaire : artériel et veineux' },
  { src: '/chapter-13/slides/slide-10.png', title: 'Innervation et zone d écoute ROP' },
  { src: '/chapter-13/slides/slide-11.png', title: 'Matrice fonctionnelle : le parenchyme splénique' },
  { src: '/chapter-13/slides/slide-12.png', title: 'Vulnérabilité et mécaniques traumatiques' },
  { src: '/chapter-13/slides/slide-13.png', title: 'Diagnostic d exclusion : signes d alerte' },
  { src: '/chapter-13/slides/slide-14.png', title: 'Vulnérabilités : traumatismes et mononucléose' },
  { src: '/chapter-13/slides/slide-15.png', title: 'Focus pathologique : la mononucléose' },
  { src: '/chapter-13/slides/slide-16.png', title: 'Indications ROP et troubles fonctionnels' },
  { src: '/chapter-13/slides/slide-17.png', title: 'Relations holistiques de la rate' },
  { src: '/chapter-13/slides/slide-18.png', title: 'Cartographie podale : les zones réflexes' },
  { src: '/chapter-13/slides/slide-19.png', title: 'Cartographie podale : zones réflexes' },
  { src: '/chapter-13/slides/slide-20.png', title: 'Synthèse : l écoute splénique' },
  { src: '/chapter-13/slides/slide-21.png', title: 'Synthèse clinique ROP' },
  { src: '/chapter-13/cartographie/figure-13-01.png', title: 'Cartographie : Articulations costo-vertebrales' },
  { src: '/chapter-13/cartographie/figure-13-03.png', title: 'Cartographie : Rate' },
]

const chapter13ReadingOrder = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 21, 18, 19, 22, 20, 23]
const chapter13SlideNumberByReadingOrder = new Map(chapter13ReadingOrder.map((sourceSlide, index) => [sourceSlide, index + 1]))

function remapChapter13Slide(slide: number) {
  return chapter13SlideNumberByReadingOrder.get(slide) ?? slide
}

export const chapter13Slides: SyncSlide[] = chapter13ReadingOrder.map((slideNumber) => chapter13SlidesBySource[slideNumber - 1])

const chapter13SlideAnchorsBySource: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'presentation', blockIndex: 2, slide: 3 },
  { sectionId: 'situation', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 6, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 3, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 8 },
  { sectionId: 'vascularisation', blockIndex: 1, slide: 9 },
  { sectionId: 'innervation', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 8, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 9, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 12, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 17, slide: 16 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 17 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 18 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 1, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 22 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 4, slide: 20 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 5, slide: 23 },
  { sectionId: 'conseils', blockIndex: 0, slide: 21 },
]

export const chapter13SlideAnchors: SyncAnchor[] = chapter13SlideAnchorsBySource.map((anchor) => ({
  ...anchor,
  slide: remapChapter13Slide(anchor.slide),
}))

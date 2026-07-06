// Chapter 19 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-19).
//
// Slides are pre-rendered from:
// public/chapter-19/Chapter19 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter19Slides: SyncSlide[] = [
  { src: '/chapter-19/slides/slide-01.png', title: 'Appareil genital féminin' },
  { src: '/chapter-19/slides/slide-02.png', title: 'La loge viscérale' },
  { src: '/chapter-19/slides/slide-03.png', title: 'La loge viscérale pelvienne' },
  { src: '/chapter-19/slides/slide-04.png', title: 'Loge viscérale et topographie pelvienne' },
  { src: '/chapter-19/slides/slide-05.png', title: 'Architecture spatiale de l appareil reproducteur' },
  { src: '/chapter-19/slides/slide-06.png', title: 'Morphologie de l utérus' },
  { src: '/chapter-19/slides/slide-07.png', title: 'Statique genito-pelvienne et axes d orientation' },
  { src: '/chapter-19/slides/slide-08.png', title: 'La statique utérine : les axes' },
  { src: '/chapter-19/slides/slide-09.png', title: 'La statique pelvienne : la croix de Richard' },
  { src: '/chapter-19/slides/slide-10.png', title: 'La cinematique pelvienne' },
  { src: '/chapter-19/slides/slide-11.png', title: 'Annexes : trompes et ovaire' },
  { src: '/chapter-19/slides/slide-12.png', title: 'Le câblage neuro-végétatif uro-génital' },
  { src: '/chapter-19/slides/slide-13.png', title: 'Fixation et vascularisation ovarienne' },
  { src: '/chapter-19/slides/slide-14.png', title: 'Moteurs systemiques : diaphragme et foie' },
  { src: '/chapter-19/slides/slide-15.png', title: 'Topographie et mobilite ovarienne' },
  { src: '/chapter-19/slides/slide-16.png', title: 'Le cycle hormonal et l axe hepatique' },
  { src: '/chapter-19/slides/slide-17.png', title: 'Matrice neuro-vegetative pelvienne' },
  { src: '/chapter-19/slides/slide-18.png', title: 'Evaluation de la douleur pelvienne' },
  { src: '/chapter-19/slides/slide-19.png', title: 'Diagnostics d exclusion et alertes cliniques' },
  { src: '/chapter-19/slides/slide-20.png', title: 'Pathologies fonctionnelles et chaînes lésionnelles' },
  { src: '/chapter-19/slides/slide-21.png', title: 'Cascades pathologiques mécaniques' },
  { src: '/chapter-19/slides/slide-22.png', title: 'Dimensions viscéro-émotionnelles' },
  { src: '/chapter-19/slides/slide-23.png', title: 'Synthèse du protocole d intégration ROP' },
]

export const chapter19SlideAnchors: SyncAnchor[] = [
  { sectionId: 'uterus-presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'uterus-presentation', blockIndex: 1, slide: 2 },
  { sectionId: 'uterus-situation', blockIndex: -1, slide: 3 },
  { sectionId: 'uterus-situation', blockIndex: 0, slide: 4 },
  { sectionId: 'uterus-anatomie', blockIndex: -1, slide: 5 },
  { sectionId: 'uterus-anatomie', blockIndex: 0, slide: 6 },
  { sectionId: 'uterus-anatomie', blockIndex: 6, slide: 7 },
  { sectionId: 'uterus-anatomie', blockIndex: 18, slide: 8 },
  { sectionId: 'uterus-anatomie', blockIndex: 20, slide: 9 },
  { sectionId: 'uterus-physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'ovaires-trompes-presentation', blockIndex: -1, slide: 11 },
  { sectionId: 'ovaires-trompes-presentation', blockIndex: 0, slide: 12 },
  { sectionId: 'ovaires-trompes-anatomie', blockIndex: 2, slide: 13 },
  { sectionId: 'ovaires-trompes-rapports', blockIndex: 0, slide: 14 },
  { sectionId: 'ovaires-trompes-rapports', blockIndex: 1, slide: 15 },
  { sectionId: 'ovaires-trompes-physiologie', blockIndex: 4, slide: 16 },
  { sectionId: 'ovaires-trompes-physiologie', blockIndex: 10, slide: 17 },
  { sectionId: 'ovaires-trompes-pathologies-courantes', blockIndex: 0, slide: 18 },
  { sectionId: 'ovaires-trompes-pathologies-courantes', blockIndex: 28, slide: 19 },
  { sectionId: 'ovaires-trompes-pathologies-courantes', blockIndex: 42, slide: 20 },
  { sectionId: 'ovaires-trompes-pathologies-courantes', blockIndex: 50, slide: 21 },
  { sectionId: 'ovaires-trompes-relations-viscero-emotionnelles', blockIndex: 0, slide: 22 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 23 },
]

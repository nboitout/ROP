// Chapter 20 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-20).
//
// Slides are pre-rendered from:
// public/chapter-20/Chapter20 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter20Slides: SyncSlide[] = [
  { src: '/chapter-20/slides/slide-01.png', title: 'Appareil reproducteur masculin' },
  { src: '/chapter-20/slides/slide-02.png', title: 'Architecture pelvienne et enjeux de la soixantaine' },
  { src: '/chapter-20/slides/slide-03.png', title: 'Migration embryonnaire et correspondances réflexes' },
  { src: '/chapter-20/slides/slide-04.png', title: 'La double usine testiculaire' },
  { src: '/chapter-20/slides/slide-05.png', title: 'Le carrefour inguinal sous pression' },
  { src: '/chapter-20/slides/slide-06.png', title: 'Mécaniques herniaires' },
  { src: '/chapter-20/slides/slide-07.png', title: 'Complexe prostatique et fluide seminal' },
  { src: '/chapter-20/slides/slide-08.png', title: 'Urètre prostatique et carrefour uro-génital' },
  { src: '/chapter-20/slides/slide-09.png', title: 'Hemodynamique et stase veineuse' },
  { src: '/chapter-20/slides/slide-10.png', title: 'Câblage nerveux et vasculaire' },
  { src: '/chapter-20/slides/slide-11.png', title: 'Matrice diagnostique des pathologies' },
  { src: '/chapter-20/slides/slide-12.png', title: 'Dissonance mécanique : effet cascade de l HBP' },
  { src: '/chapter-20/slides/slide-13.png', title: 'Dimension psycho-émotionnelle' },
  { src: '/chapter-20/slides/slide-14.png', title: 'Synthèse thérapeutique ROP' },
  { src: '/chapter-20/slides/slide-15.png', title: 'Synthèse pratique ROP : cartographie du protocole' },
  { src: '/chapter-20/slides/slide-16.png', title: 'Reflexologie occipito-podale et troubles prostatiques' },
]

export const chapter20SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 2, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 6, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 14, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 23, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 33, slide: 8 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 9 },
  { sectionId: 'innervation', blockIndex: 0, slide: 10 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 25, slide: 12 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 13 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 15 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 4, slide: 16 },
]

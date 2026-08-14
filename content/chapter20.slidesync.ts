// Chapter 20 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-20).
//
// Slides are pre-rendered from:
// public/chapter-20/Chapter20 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[]; gapBefore?: 'half'; end?: { sectionId: string; blockIndex: number; itemIndex?: number } }

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
  { src: '/chapter-20/slides/slide-13.png', title: 'Organes génitaux de l’homme — relations viscéro-somatiques' },
  { src: '/chapter-20/slides/slide-14.png', title: 'Dimension psycho-émotionnelle' },
  { src: '/chapter-20/slides/slide-15.png', title: 'Protocole clinique ROP : organes génitaux masculins' },
  { src: '/chapter-20/cartographie/figure-20-01.png', title: 'Cartographie ROP : chaîne ganglionnaire lombaire et piliers du diaphragme' },
  { src: '/chapter-20/cartographie/figure-20-03.png', title: 'Cartographie ROP : rein gauche' },
  { src: '/chapter-20/cartographie/figure-20-05.png', title: 'Cartographie ROP : surrénale gauche' },
  { src: '/chapter-20/cartographie/figure-20-07.png', title: 'Cartographie ROP : grand foramen ischiatique' },
  { src: '/chapter-20/cartographie/figure-20-09.png', title: 'Cartographie ROP : grand et petit foramens ischiatiques' },
  { src: '/chapter-20/cartographie/figure-20-11.png', title: 'Cartographie ROP : fosse obturée et muscles obturateurs' },
  { src: '/chapter-20/cartographie/figure-20-13.png', title: 'Cartographie ROP : ligaments sacro-tubéral et sacro-épineux' },
  { src: '/chapter-20/cartographie/figure-20-15.png', title: 'Cartographie ROP : testicule' },
  { src: '/chapter-20/cartographie/figure-20-17.png', title: 'Cartographie ROP : ligament et canal inguinaux' },
  { src: '/chapter-20/cartographie/figure-20-19.png', title: 'Cartographie ROP : prostate et trigone vésical' },
]

export const chapter20SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, itemIndex: 4, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 7, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 15, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 33, slide: 8 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 9 },
  { sectionId: 'innervation', blockIndex: 0, slide: 10 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 18, slide: 12 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: -1, slide: 13 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 15 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 10, slide: 16, end: { sectionId: 'zones-reflexes-podales', blockIndex: 10 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 23, end: { sectionId: 'zones-reflexes-podales', blockIndex: 15 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 24, end: { sectionId: 'zones-reflexes-podales', blockIndex: 16 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 23, slide: 19, end: { sectionId: 'zones-reflexes-podales', blockIndex: 23 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 24, slide: 20, end: { sectionId: 'zones-reflexes-podales', blockIndex: 24 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 25, slide: 21, end: { sectionId: 'zones-reflexes-podales', blockIndex: 25 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 26, slide: 22, end: { sectionId: 'zones-reflexes-podales', blockIndex: 26 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 43, slide: 25, end: { sectionId: 'zones-reflexes-podales', blockIndex: 43 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 56, slide: 17, end: { sectionId: 'zones-reflexes-podales', blockIndex: 56 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 57, slide: 18, end: { sectionId: 'zones-reflexes-podales', blockIndex: 57 } },
]

// Chapter 10 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-10).
//
// Slide images are the pre-rendered pages of the chapter 10 synthesis deck,
// stored under public/chapter-10/slides/.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number | number[]; gapBefore?: 'half'; end?: SyncAnchorPoint }

export const chapter10Slides: SyncSlide[] = [
  { src: '/chapter-10/slides/slide-01.png', title: 'Chapitre 10 : Duodenum' },
  { src: '/chapter-10/slides/slide-02.png', title: 'Le carrefour visceral de l abdomen' },
  { src: '/chapter-10/slides/slide-03.png', title: 'Les quatre segments du duodenum' },
  { src: '/chapter-10/slides/slide-04.png', title: 'D2 et les papilles duodenales' },
  { src: '/chapter-10/slides/slide-05.png', title: 'Muscle de Treitz et dynamique de vidange' },
  { src: '/chapter-10/slides/slide-06.png', title: 'Cartographie palpatoire : quadrilatere de Rogie' },
  { src: '/chapter-10/slides/slide-07.png', title: 'Vascularisation artérielle et veineuse' },
  { src: '/chapter-10/slides/slide-08.png', title: 'Réseau neurologique et autonomie' },
  { src: '/chapter-10/slides/slide-09.png', title: 'Dynamique secretoire et biochimique' },
  { src: '/chapter-10/slides/slide-10.png', title: 'Régulation et hydrolyse' },
  { src: '/chapter-10/slides/slide-11.png', title: 'Grille de lecture pathologique' },
  { src: '/chapter-10/slides/slide-12.png', title: 'Conflit mécanique de D4' },
  { src: '/chapter-10/slides/slide-14.png', title: 'Protocole clinique ROP en 4 niveaux — Duodénum' },
  { src: '/chapter-10/slides/slide-13.png', title: 'Objectifs thérapeutiques en ROP' },
  { src: '/chapter-10/figure-10-cartographie-duodenum-d1-d3.png', title: 'Cartographie : duodénum D1, D2 et D3' },
  { src: '/chapter-10/figure-10-cartographie-sphincter-oddi.png', title: 'Cartographie : sphincter d’Oddi' },
  { src: '/chapter-10/figure-10-cartographie-duodenum-d4-hiatus-oesophagien.png', title: 'Cartographie : duodénum D4' },
  { src: '/chapter-10/figure-10-cartographie-jonction-duodeno-jejunale.png', title: 'Cartographie : jonction duodéno-jéjunale' },
]

export const chapter10SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie-figure-10-1', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie-figure-10-1', blockIndex: 9, slide: 4 },
  { sectionId: 'anatomie-figure-10-1', blockIndex: 23, slide: 5, end: { sectionId: 'rapports', blockIndex: -1 } },
  { sectionId: 'rapports', blockIndex: 8, slide: 6 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 7 },
  { sectionId: 'innervation', blockIndex: 0, slide: 8 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 8, slide: 10 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 11 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 1, slide: 12 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 13, end: { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 } },
  { sectionId: 'conseils', blockIndex: -1, slide: 14, gapBefore: 'half' },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 13 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 1, slide: 15, end: { sectionId: 'zones-reflexes-podales', blockIndex: 20 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 20, slide: 16, end: { sectionId: 'zones-reflexes-podales', blockIndex: 22 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 23, slide: 17, end: { sectionId: 'zones-reflexes-podales', blockIndex: 24 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 24, slide: 18, end: { sectionId: 'zones-reflexes-podales', blockIndex: 26 } },
]

export const chapter10HalfBreaks: SyncAnchorPoint[] = [
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 },
]

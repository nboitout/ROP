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
  { src: '/chapter-10/slides/slide-14.png', title: 'Synthèse ROP : axe viscéro-somatique et limbique' },
  { src: '/chapter-10/slides/slide-13.png', title: 'Objectifs thérapeutiques en ROP' },
  { src: '/chapter-10/slides/slide-15.png', title: 'Cartographie : nerf vague X dans la moelle allongee' },
  { src: '/chapter-10/slides/slide-16.png', title: 'Cartographie : nerf vague X dans le foramen jugulaire' },
  { src: '/chapter-10/slides/slide-17.png', title: 'Cartographie : articulations costo-transversaires' },
  { src: '/chapter-10/slides/slide-19.png', title: 'Cartographie : duodenum D1, D2, D3' },
  { src: '/chapter-10/slides/slide-18.png', title: 'Cartographie : sphincter d Oddi' },
  { src: '/chapter-10/slides/slide-20.png', title: 'Cartographie : duodenum D4' },
  { src: '/chapter-10/slides/slide-21.png', title: 'Cartographie : jonction duodeno-jejunale' },
]

export const chapter10SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie-figure-10-1', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie-figure-10-1', blockIndex: 9, slide: 4 },
  { sectionId: 'anatomie-figure-10-1', blockIndex: 23, slide: 5 },
  { sectionId: 'rapports', blockIndex: 8, slide: 6 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 7 },
  { sectionId: 'innervation', blockIndex: 0, slide: 8 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 8, slide: 10 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 18, slide: 12 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 13 },
  { sectionId: 'conseils', blockIndex: 0, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 13 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 1, slide: 15, end: { sectionId: 'zones-reflexes-podales', blockIndex: 3 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 3, slide: 16 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 5, slide: 17 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 8, slide: 18 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 10, slide: 20, gapBefore: 'half' },
  { sectionId: 'zones-reflexes-podales', blockIndex: 11, slide: 21 },
]

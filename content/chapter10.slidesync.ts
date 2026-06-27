// Chapter 10 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-10).
//
// Slide images are the pre-rendered pages of the chapter 10 synthesis deck,
// stored under public/chapter-10/slides/.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter10Slides: SyncSlide[] = [
  { src: '/chapter-10/slides/slide-01.png', title: 'Chapitre 10 : Duodenum' },
  { src: '/chapter-10/slides/slide-02.png', title: 'Le carrefour visceral de l abdomen' },
  { src: '/chapter-10/slides/slide-03.png', title: 'Les quatre segments du duodenum' },
  { src: '/chapter-10/slides/slide-04.png', title: 'D2 et les papilles duodenales' },
  { src: '/chapter-10/slides/slide-05.png', title: 'Muscle de Treitz et dynamique de vidange' },
  { src: '/chapter-10/slides/slide-06.png', title: 'Cartographie palpatoire : quadrilatere de Rogie' },
  { src: '/chapter-10/slides/slide-07.png', title: 'Vascularisation arterielle et veineuse' },
  { src: '/chapter-10/slides/slide-08.png', title: 'Reseau neurologique et autonomie' },
  { src: '/chapter-10/slides/slide-09.png', title: 'Dynamique secretoire et biochimique' },
  { src: '/chapter-10/slides/slide-10.png', title: 'Regulation et hydrolyse' },
  { src: '/chapter-10/slides/slide-11.png', title: 'Grille de lecture pathologique' },
  { src: '/chapter-10/slides/slide-12.png', title: 'Conflit mecanique de D4' },
  { src: '/chapter-10/slides/slide-14.png', title: 'Synthese ROP : axe viscero-somatique et limbique' },
  { src: '/chapter-10/slides/slide-13.png', title: 'Objectifs therapeutiques en ROP' },
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
]

// Chapter 12 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-12).
//
// Slide images are the pre-rendered pages of the chapter 12 synthesis deck,
// stored under public/chapter-12/slides/.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter12Slides: SyncSlide[] = [
  { src: '/chapter-12/slides/slide-01.png', title: 'Le Pancréas' },
  { src: '/chapter-12/slides/slide-02.png', title: 'La dualité fonctionnelle du pancréas' },
  { src: '/chapter-12/slides/slide-03.png', title: 'Un organe profond et vulnerable' },
  { src: '/chapter-12/slides/slide-04.png', title: 'Morphologie anatomique' },
  { src: '/chapter-12/slides/slide-05.png', title: 'Le réseau canalaire exocrine' },
  { src: '/chapter-12/slides/slide-06.png', title: 'Un écosystème vasculaire partagé' },
  { src: '/chapter-12/slides/slide-07.png', title: 'Innervation et commande neurovegetative' },
  { src: '/chapter-12/slides/slide-08.png', title: 'Physiologie exocrine : la machine digestive' },
  { src: '/chapter-12/slides/slide-09.png', title: 'Physiologie endocrine : l homéostasie glycémique' },
  { src: '/chapter-12/slides/slide-10.png', title: 'Manifestations cliniques et diagnostics d exclusion' },
  { src: '/chapter-12/slides/slide-11.png', title: 'Pathologies glycémiques : le spectre du diabète' },
  { src: '/chapter-12/slides/slide-12.png', title: 'Pathologies severes : pancreatites et tumeurs' },
  { src: '/chapter-12/slides/slide-13.png', title: 'Synthèse viscéro-émotionnelle' },
]

export const chapter12SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 16, slide: 5 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 6 },
  { sectionId: 'innervation', blockIndex: 0, slide: 7 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 8 },
  { sectionId: 'interet-en-rop-2', blockIndex: 0, slide: 9 },
  { sectionId: 'diagnostics-exclusion', blockIndex: 0, slide: 10 },
  { sectionId: 'diabete', blockIndex: 0, slide: 11 },
  { sectionId: 'pancreatite', blockIndex: 0, slide: 12 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 13 },
]

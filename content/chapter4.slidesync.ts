// Chapter 4 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-4).
//
// The source PDF is ordered as a visual synthesis deck. The array below follows
// the chapter's reading flow where that differs slightly from the PDF page
// order, while each slide image still points to its rendered PDF page.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter4Slides: SyncSlide[] = [
  { src: '/chapter-4/slides/slide-01.png', title: 'Systeme nerveux autonome' },
  { src: '/chapter-4/slides/slide-03.png', title: 'La triade de l homeostasie' },
  { src: '/chapter-4/slides/slide-02.png', title: 'La dualite fondamentale du SNA' },
  { src: '/chapter-4/slides/slide-04.png', title: 'Origine cranienne du Parasympathique : base du crane' },
  { src: '/chapter-4/slides/slide-05.png', title: 'Origine cranienne du Parasympathique : tronc cerebral' },
  { src: '/chapter-4/slides/slide-06.png', title: 'Le nerf vague X : chef d orchestre' },
  { src: '/chapter-4/slides/slide-07.png', title: 'Le nerf vague X : noyaux et voies sensitives' },
  { src: '/chapter-4/slides/slide-09.png', title: 'Le carrefour cervical sympathique' },
  { src: '/chapter-4/slides/slide-10.png', title: 'Chaine sympathique cervicale' },
  { src: '/chapter-4/slides/slide-11.png', title: 'Etage thoracique : plexus cardiaque' },
  { src: '/chapter-4/slides/slide-12.png', title: 'Etage thoracique : plexus cardiaque et pulmonaire' },
  { src: '/chapter-4/slides/slide-13.png', title: 'Le franchissement diaphragmatique' },
  { src: '/chapter-4/slides/slide-14.png', title: 'Etage abdominal : frontieres vagales' },
  { src: '/chapter-4/slides/slide-08.png', title: 'Nerf vague X : role sensitif et interoception' },
  { src: '/chapter-4/slides/slide-15.png', title: 'Sympathique : origines medullaires' },
  { src: '/chapter-4/slides/slide-16.png', title: 'Mecanique du Sympathique : rameaux communicants' },
  { src: '/chapter-4/slides/slide-17.png', title: 'Le carrefour cervical sympathique' },
  { src: '/chapter-4/slides/slide-18.png', title: 'Chaine sympathique cervicale' },
  { src: '/chapter-4/slides/slide-20.png', title: 'Les nerfs splanchniques : l autoroute abdominale' },
  { src: '/chapter-4/slides/slide-24.png', title: 'Interoception, nociception et douleurs rapportees' },
  { src: '/chapter-4/slides/slide-19.png', title: 'Plexus prevertebraux abdominaux' },
  { src: '/chapter-4/slides/slide-21.png', title: 'Le carrefour pelvien' },
  { src: '/chapter-4/slides/slide-22.png', title: 'Le systeme nerveux enterique : le deuxieme cerveau' },
  { src: '/chapter-4/slides/slide-23.png', title: 'Zones reflexes podales : grands reperes du SNA' },
  { src: '/chapter-4/slides/slide-25.png', title: 'Principes therapeutiques en ROP' },
]

export const chapter4SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 2, slide: 2 },
  { sectionId: 'presentation', blockIndex: 8, slide: 3 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 1, slide: 4, gapBefore: 'half' },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 2, slide: 5 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 3, slide: 6 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 4, slide: 7 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 7, slide: 8 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 9, slide: 9 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 12, slide: 10 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 13, slide: 11 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 14, slide: 12 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 16, slide: 13 },
  { sectionId: 'nerf-vague-sensitif', blockIndex: 0, slide: 14, gapBefore: 'half' },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 0, slide: 15, gapBefore: 'half' },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 2, slide: 16 },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 5, slide: 17 },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 9, slide: 18 },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 18, slide: 19 },
  { sectionId: 'sympathique-sensitif', blockIndex: 0, slide: 20, gapBefore: 'half' },
  { sectionId: 'chaine-plexique-prevertebrale', blockIndex: 0, slide: 21 },
  { sectionId: 'plexus-pelvien', blockIndex: 0, slide: 22 },
  { sectionId: 'sne', blockIndex: 0, slide: 23 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 24, gapBefore: 'half' },
  { sectionId: 'zones-reflexes-podales', blockIndex: 40, slide: 25 },
]

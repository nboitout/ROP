// Chapter 4 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-4).
//
// The source PDF is ordered as a visual synthesis deck. The array below follows
// the chapter's reading flow where that differs slightly from the PDF page
// order, while each slide image still points to its rendered PDF page.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & {
  slide: number | number[]
  gapBefore?: 'half'
  end?: SyncAnchorPoint
}

const endAt = (sectionId: string, blockIndex: number, itemIndex?: number): Pick<SyncAnchor, 'end'> => ({
  end: { sectionId, blockIndex, ...(itemIndex === undefined ? {} : { itemIndex }) },
})

export const chapter4Slides: SyncSlide[] = [
  { src: '/chapter-4/slides/slide-01.png', title: 'Système nerveux autonome' },
  { src: '/chapter-4/slides/slide-02.png', title: 'La dualité fondamentale du SNA' },
  { src: '/chapter-4/slides/slide-sns-01.png', title: 'SNS et SNA : point de jonction mécanique-végétatif' },
  { src: '/chapter-4/slides/slide-sns-02.png', title: 'Voies sensitives : entrée par la racine postérieure' },
  { src: '/chapter-4/slides/slide-sns-03.png', title: 'Convergence somatique et végétative au même segment' },
  { src: '/chapter-4/slides/slide-sns-04.png', title: 'Réponses motrices et végétatives de la moelle' },
  { src: '/chapter-4/slides/slide-04.png', title: 'Organisation segmentaire du SNA' },
  { src: '/chapter-4/slides/slide-05.png', title: 'Origine cranienne du Parasympathique : base du crane' },
  { src: '/chapter-4/slides/slide-06.png', title: 'Origine cranienne du Parasympathique : tronc cerebral' },
  { src: '/chapter-4/slides/slide-07.png', title: 'Le nerf vague X : grand axe viscéro-sensitif et parasympathique' },
  { src: '/chapter-4/slides/slide-08.png', title: 'Le nerf vague X : chef d orchestre' },
  { src: '/chapter-4/slides/slide-09.png', title: 'Le nerf vague X : noyaux et voies sensitives' },
  { src: '/chapter-4/slides/slide-13.png', title: 'Etage thoracique : plexus cardiaque' },
  { src: '/chapter-4/slides/slide-14.png', title: 'Etage thoracique : plexus cardiaque et pulmonaire' },
  { src: '/chapter-4/slides/slide-15.png', title: 'Le franchissement diaphragmatique' },
  { src: '/chapter-4/slides/slide-16.png', title: 'Etage abdominal : frontieres vagales' },
  { src: '/chapter-4/slides/slide-10.png', title: 'Nerf vague X : role sensitif et interoception' },
  { src: '/chapter-4/slides/slide-17.png', title: 'Sympathique : origines medullaires' },
  { src: '/chapter-4/slides/slide-18.png', title: 'Mécanique du Sympathique : rameaux communicants' },
  { src: '/chapter-4/slides/slide-19.png', title: 'Le carrefour cervical sympathique' },
  { src: '/chapter-4/slides/slide-20.png', title: 'Chaîne sympathique cervicale' },
  { src: '/chapter-4/slides/slide-22.png', title: 'Les nerfs splanchniques : l autoroute abdominale' },
  { src: '/chapter-4/slides/slide-26.png', title: 'Interoception, nociception et douleurs rapportees' },
  { src: '/chapter-4/slides/slide-21.png', title: 'Plexus prévertébraux abdominaux' },
  { src: '/chapter-4/slides/slide-23.png', title: 'Le carrefour pelvien' },
  { src: '/chapter-4/slides/slide-24.png', title: 'Le système nerveux entérique : le deuxième cerveau' },
  { src: '/chapter-4/cartographie/figure-4-01.png', title: 'Cartographie ROP : territoire cephalique et nerfs craniens' },
  { src: '/chapter-4/cartographie/figure-4-03.png', title: 'Cartographie ROP : noyaux du nerf vague X' },
  { src: '/chapter-4/cartographie/figure-4-05.png', title: 'Cartographie ROP : nerf vague X dans le foramen jugulaire' },
  { src: '/chapter-4/cartographie/figure-4-07.png', title: 'Cartographie ROP : nerf larynge superieur, sinus et glomus carotidien' },
  { src: '/chapter-4/cartographie/figure-4-09.png', title: 'Cartographie ROP : nerf vague X, territoire thoracique gauche' },
  { src: '/chapter-4/cartographie/figure-4-11.png', title: 'Cartographie ROP : nerf vague X, territoire thoracique droit' },
  { src: '/chapter-4/cartographie/figure-4-13.png', title: 'Cartographie ROP : nerf vague X, hiatus et territoire abdominal gauche' },
  { src: '/chapter-4/cartographie/figure-4-15.png', title: 'Cartographie ROP : petite courbure de l estomac' },
  { src: '/chapter-4/cartographie/figure-4-17.png', title: 'Cartographie ROP : territoire abdominal droit du nerf vague X' },
  { src: '/chapter-4/cartographie/figure-4-19.png', title: 'Cartographie ROP : origine parasympathique sacree' },
  { src: '/chapter-4/cartographie/figure-4-21.png', title: 'Cartographie ROP : origine medullaire du sympathique' },
  { src: '/chapter-4/cartographie/figure-4-23.png', title: 'Cartographie ROP : chaine ganglionnaire thoracique' },
  { src: '/chapter-4/cartographie/figure-4-25.png', title: 'Cartographie ROP : chaine ganglionnaire cervicale' },
  { src: '/chapter-4/cartographie/figure-4-27.png', title: 'Cartographie ROP : chaine ganglionnaire lombale' },
  { src: '/chapter-4/cartographie/figure-4-29.png', title: 'Cartographie ROP : chaine ganglionnaire sacro-coccygienne' },
  { src: '/chapter-4/cartographie/figure-4-31.png', title: 'Cartographie ROP : plexus hypogastrique inferieur, fibres anterieures' },
  { src: '/chapter-4/cartographie/figure-4-33.png', title: 'Cartographie ROP : plexus hypogastrique inferieur, fibres moyennes et posterieures' },
]

export const chapter4SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 9, itemIndex: 0, slide: 2, ...endAt('presentation', 9, 7) },
  { sectionId: 'presentation', blockIndex: 20, slide: 3 },
  { sectionId: 'presentation', blockIndex: 21, slide: 4 },
  { sectionId: 'presentation', blockIndex: 22, slide: 5 },
  { sectionId: 'presentation', blockIndex: 22, itemIndex: 3, slide: 6 },
  { sectionId: 'organisation', blockIndex: 0, slide: 7, ...endAt('parasympathique-visceromoteur', -1) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 1, slide: 8, gapBefore: 'half' },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 2, slide: 9 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 3, slide: 10 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 4, slide: 11 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 5, slide: 12, ...endAt('parasympathique-visceromoteur', 6) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 12, slide: 13 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 13, slide: 14 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 14, slide: 15 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 16, slide: 16, ...endAt('nerf-vague-sensitif', -1) },
  { sectionId: 'nerf-vague-sensitif', blockIndex: 0, slide: 17, gapBefore: 'half', ...endAt('sympathique-visceromoteur', -1) },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 0, slide: 18, gapBefore: 'half' },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 2, slide: 19 },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 5, slide: 20 },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 9, slide: 21, ...endAt('sympathique-visceromoteur', 10) },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 18, slide: 22, ...endAt('sympathique-sensitif', -1) },
  { sectionId: 'sympathique-sensitif', blockIndex: 0, slide: 23, gapBefore: 'half', ...endAt('chaine-plexique-prevertebrale', -1) },
  { sectionId: 'chaine-plexique-prevertebrale', blockIndex: 0, slide: 24 },
  { sectionId: 'plexus-pelvien', blockIndex: 0, slide: 25 },
  { sectionId: 'sne', blockIndex: 0, slide: 26 },
  { sectionId: 'glandes-surrenales', blockIndex: 2, slide: 27, ...endAt('zones-reflexes-podales', -1) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 1, itemIndex: 0, slide: 27, ...endAt('zones-reflexes-podales', 2) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, slide: 28 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 29, ...endAt('zones-reflexes-podales', 8) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 11, slide: 30 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 31 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 32 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 20, slide: 33 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 25, slide: 34 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 26, slide: 35 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 29, slide: 36 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 32, slide: 37 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 35, slide: 38 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 39, slide: 39 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 43, slide: 40 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 47, slide: 41 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 56, slide: 42 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 57, slide: 43 },
]

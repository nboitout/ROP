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
  { src: '/chapter-4/slides/slide-02.png', title: 'Deux systèmes : Parasympathique et Sympathique' },
  { src: '/chapter-4/slides/slide-03.png', title: 'L’équilibre du milieu intérieur' },
  { src: '/chapter-4/slides/slide-04.png', title: 'Physiologie générale du SNA' },
  { src: '/chapter-4/slides/slide-05.png', title: 'Cartographie des innervations' },
  { src: '/chapter-4/slides/slide-06.png', title: 'Relation Parasympathique–Sympathique' },
  { src: '/chapter-4/slides/slide-07.png', title: 'Interdépendance fonctionnelle au sein des plexus autonomes' },
  { src: '/chapter-4/slides/slide-08.png', title: 'Neuro-endocrinologie et neuromédiateurs' },
  { src: '/chapter-4/slides/slide-09.png', title: 'Le sommeil : prérequis de l’équilibre autonome' },
  { src: '/chapter-4/slides/slide-10.png', title: 'Organisation fonctionnelle du système nerveux autonome' },
  { src: '/chapter-4/slides/slide-11.png', title: 'Organisation crânio-sacrale du parasympathique' },
  { src: '/chapter-4/slides/slide-12.png', title: 'Innervation parasympathique céphalique : les ganglions crâniens' },
  { src: '/chapter-4/slides/slide-13.png', title: 'Origines motrices du nerf vague : noyau dorsal et noyau ambigu' },
  { src: '/chapter-4/slides/slide-14.png', title: 'Le trajet du nerf vague (X) : du crâne à l’abdomen' },
  { src: '/chapter-4/slides/slide-15.png', title: 'Les troncs vagaux : passage diaphragmatique et distribution abdominale' },
  { src: '/chapter-4/slides/slide-16.png', title: 'Le Parasympathique pelvien' },
  { src: '/chapter-4/slides/slide-17.png', title: 'Nerf vague viscéro-sensitif : intéroception' },
  { src: '/chapter-4/slides/slide-18.png', title: 'Intéroception, nociception et douleurs rapportées' },
  { src: '/chapter-4/slides/slide-19.png', title: 'Les dermalgies réflexes' },
  { src: '/chapter-4/slides/slide-20.png', title: 'Chaîne plexique prévertébrale (ou pré-aortique)' },
  { src: '/chapter-4/slides/slide-21.png', title: 'Intéroception, nociception et douleurs rapportées — application en ROP' },
  { src: '/chapter-4/slides/slide-22.png', title: 'Plexus prévertébraux : convergence vagale et sympathique' },
  { src: '/chapter-4/slides/slide-23.png', title: 'Le plexus hypogastrique inférieur' },
  { src: '/chapter-4/slides/slide-24.png', title: 'Fonctions pelviennes : contrôle autonome et somatique' },
  { src: '/chapter-4/slides/slide-25.png', title: 'Le système nerveux entérique : autonomie locale et modulation extrinsèque' },
  { src: '/chapter-4/slides/slide-26.png', title: 'Les glandes surrénales et le stress' },
  { src: '/chapter-4/slides/slide-27.png', title: 'Synthèse : trois modalités coordonnées de régulation viscérale' },
  { src: '/chapter-4/slides/slide-28.png', title: 'Zones réflexes podales du SNA' },
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
  { sectionId: 'presentation', blockIndex: 1, slide: 2 },
  { sectionId: 'presentation', blockIndex: 4, slide: 3 },
  { sectionId: 'presentation', blockIndex: 8, slide: 4 },
  { sectionId: 'presentation', blockIndex: 11, slide: 5 },
  { sectionId: 'presentation', blockIndex: 16, slide: 6 },
  { sectionId: 'presentation', blockIndex: 18, slide: 7 },
  { sectionId: 'presentation', blockIndex: 20, slide: 8 },
  { sectionId: 'presentation', blockIndex: 25, slide: 9, ...endAt('organisation', -1) },
  { sectionId: 'organisation', blockIndex: 0, slide: 10, ...endAt('parasympathique-visceromoteur', -1) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 1, slide: 11, gapBefore: 'half' },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 2, slide: 12, ...endAt('parasympathique-visceromoteur', 2, 12) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 4, slide: 13, ...endAt('parasympathique-visceromoteur', 6) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 7, slide: 14 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 12, slide: 15 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 14, slide: 16, ...endAt('nerf-vague-sensitif', -1) },
  { sectionId: 'nerf-vague-sensitif', blockIndex: 0, slide: 17, gapBefore: 'half' },
  { sectionId: 'nerf-vague-sensitif', blockIndex: 1, slide: 18, ...endAt('sympathique-sensitif', -1) },
  { sectionId: 'sympathique-sensitif', blockIndex: 0, slide: 19, gapBefore: 'half' },
  { sectionId: 'chaine-plexique-prevertebrale', blockIndex: 0, slide: 20 },
  { sectionId: 'sympathique-sensitif', blockIndex: 3, slide: 21, ...endAt('chaine-plexique-prevertebrale', -1) },
  { sectionId: 'chaine-plexique-prevertebrale', blockIndex: 1, slide: 22 },
  { sectionId: 'plexus-pelvien', blockIndex: 0, slide: [23, 24] },
  { sectionId: 'sne', blockIndex: 0, slide: 25 },
  { sectionId: 'glandes-surrenales', blockIndex: 0, slide: 26 },
  { sectionId: 'glandes-surrenales', blockIndex: 2, slide: 27, ...endAt('zones-reflexes-podales', -1) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 28 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 29 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 3, slide: 30 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 31, ...endAt('zones-reflexes-podales', 8) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 32 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 33 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 34 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 20, slide: 35 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 25, slide: 36 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 26, slide: 37 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 29, slide: 38 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 32, slide: 39 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 35, slide: 40 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 39, slide: 41 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 43, slide: 42 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 47, slide: 43 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 56, slide: 44 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 57, slide: 45 },
]

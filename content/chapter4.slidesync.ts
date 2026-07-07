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
  { src: '/chapter-4/slides/slide-03.png', title: 'La triade de l homéostasie' },
  { src: '/chapter-4/slides/slide-02.png', title: 'La dualité fondamentale du SNA' },
  { src: '/chapter-4/slides/slide-04.png', title: 'Organisation segmentaire du SNA' },
  { src: '/chapter-4/slides/slide-05.png', title: 'Origine cranienne du Parasympathique : base du crane' },
  { src: '/chapter-4/slides/slide-06.png', title: 'Origine cranienne du Parasympathique : tronc cerebral' },
  { src: '/chapter-4/slides/slide-07.png', title: 'Le nerf vague X : grand axe viscéro-sensitif et parasympathique' },
  { src: '/chapter-4/slides/slide-08.png', title: 'Le nerf vague X : chef d orchestre' },
  { src: '/chapter-4/slides/slide-09.png', title: 'Le nerf vague X : noyaux et voies sensitives' },
  { src: '/chapter-4/slides/slide-11.png', title: 'Le carrefour cervical sympathique' },
  { src: '/chapter-4/slides/slide-12.png', title: 'Chaîne sympathique cervicale' },
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
  { src: '/chapter-4/slides/slide-25.png', title: 'Zones réflexes podales' },
  { src: '/chapter-4/Chapter4 - Fig2 Rework Series FR.png', title: 'Chapter4 - Fig2 Rework Series FR' },
  { src: '/chapter-4/Chapter4 - Fig3 Rework Series FR.png', title: 'Reperes ROP du tronc cerebral, de la base endocrinienne et des noyaux limbiques' },
  { src: '/chapter-4/Chapter4 - Fig3 moelle allongée FR.png', title: 'Base exocranienne : moelle allongee et noyaux du nerf vague X' },
  { src: '/chapter-4/Chapter4 - Fig4 Rework Series FR.png', title: 'Base exocranienne et nerf vague X dans le foramen jugulaire' },
  { src: '/chapter-4/Chapter4 - Fig  Nerf Vague X etage thoracique FR.png', title: 'Base du crane exocranienne - Nerf vague X - etage cervical' },
  { src: '/chapter-4/Chapter4 - Fig4  hiatus FR.png', title: 'Etage thoracique et diaphragmatique : hiatus oesophagien' },
  { src: '/chapter-4/figure-4-14.png', title: 'Cartographie : nerf vague X, territoire thoracique gauche' },
  { src: '/chapter-4/figure-4-15.png', title: 'Cartographie : nerf vague X, territoire thoracique droit' },
  { src: '/chapter-4/figure-4-17.png', title: 'Cartographie : nerf vague X, territoire abdominal gauche' },
  { src: '/chapter-4/figure-4-22.png', title: 'Cartographie : nerf vague X, territoire abdominal droit' },
  { src: '/chapter-4/figure-4-24.png', title: 'Cartographie : parasympathique pelvien' },
  { src: '/chapter-4/figure-4-28.png', title: 'Cartographie : articulations costo-vertebrales', orientation: 'portrait' },
  { src: '/chapter-4/figure-4-31.png', title: 'Cartographie : chaîne ganglionnaire latéro-vertébrale' },
  { src: '/chapter-4/figure-4-37.png', title: 'Cartographie : plexus hypogastrique inférieur, fibres antérieures' },
  { src: '/chapter-4/figure-4-39.png', title: 'Cartographie : plexus hypogastrique inférieur, fibres moyennes et postérieures' },
  { src: '/chapter-4/slides/slide-27.png', title: 'Principes thérapeutiques en ROP' },
]

export const chapter4SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 2, slide: 2, ...endAt('presentation', 3) },
  { sectionId: 'presentation', blockIndex: 8, slide: 3, ...endAt('presentation', 10) },
  { sectionId: 'organisation', blockIndex: 0, slide: 4, ...endAt('parasympathique-visceromoteur', -1) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 1, slide: 5, gapBefore: 'half' },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 2, slide: 6 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 3, slide: 7 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 4, slide: 8 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 5, slide: 9, ...endAt('parasympathique-visceromoteur', 6) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 7, slide: 10 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 9, slide: 11, ...endAt('parasympathique-visceromoteur', 10) },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 12, slide: 12 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 13, slide: 13 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 14, slide: 14 },
  { sectionId: 'parasympathique-visceromoteur', blockIndex: 16, slide: 15, ...endAt('nerf-vague-sensitif', -1) },
  { sectionId: 'nerf-vague-sensitif', blockIndex: 0, slide: 16, gapBefore: 'half', ...endAt('sympathique-visceromoteur', -1) },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 0, slide: 17, gapBefore: 'half' },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 2, slide: 18 },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 5, slide: 19 },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 9, slide: 20, ...endAt('sympathique-visceromoteur', 10) },
  { sectionId: 'sympathique-visceromoteur', blockIndex: 18, slide: 21, ...endAt('sympathique-sensitif', -1) },
  { sectionId: 'sympathique-sensitif', blockIndex: 0, slide: 22, gapBefore: 'half', ...endAt('chaine-plexique-prevertebrale', -1) },
  { sectionId: 'chaine-plexique-prevertebrale', blockIndex: 0, slide: 23 },
  { sectionId: 'plexus-pelvien', blockIndex: 0, slide: 24 },
  { sectionId: 'sne', blockIndex: 0, slide: 25 },
  { sectionId: 'glandes-surrenales', blockIndex: 2, slide: 26, ...endAt('zones-reflexes-podales', -1) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 27, ...endAt('zones-reflexes-podales', 1, 9) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 28, ...endAt('zones-reflexes-podales', 3) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 5, slide: 29, ...endAt('zones-reflexes-podales', 7) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 30, ...endAt('zones-reflexes-podales', 8) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 10, slide: 31, ...endAt('zones-reflexes-podales', 12) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 14, slide: 32, ...endAt('zones-reflexes-podales', 16) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 18, slide: [33, 34], ...endAt('zones-reflexes-podales', 20) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 22, slide: 35, ...endAt('zones-reflexes-podales', 23) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 23, slide: 36, ...endAt('zones-reflexes-podales', 24) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 24, slide: 37, ...endAt('zones-reflexes-podales', 25) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 30, slide: 38, ...endAt('zones-reflexes-podales', 32) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 34, slide: 39, ...endAt('zones-reflexes-podales', 36) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 50, slide: 40, ...endAt('zones-reflexes-podales', 51) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 51, slide: 41, ...endAt('zones-reflexes-podales', 52) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 52, slide: 42 },
]

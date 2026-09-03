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

// The refreshed PDF has 19 pages. A few pages are ordered thematically in the
// source PDF; this array follows the chapter reading flow.
export const chapter1Slides: SyncSlide[] = [
  { src: '/chapter-1/FR/slides/slide-01.png', title: 'Chapitre 1 : Généralités biomécaniques et neurophysiologiques en ROP' },
  { src: '/chapter-1/FR/slides/slide-02.png', title: 'L’écosystème viscéral : au-delà de la biochimie' },
  { src: '/chapter-1/FR/slides/slide-03.png', title: 'Mobilité et motilité' },
  { src: '/chapter-1/FR/slides/slide-04.png', title: 'Les quatre moteurs de la mobilité viscérale' },
  { src: '/chapter-1/FR/slides/slide-05.png', title: 'Le diaphragme : moteur somatique principal' },
  { src: '/chapter-1/FR/slides/slide-07.png', title: 'Régulation neurovégétative' },
  { src: '/chapter-1/FR/slides/slide-06.png', title: 'La mobilité automatique : le choc mécanique cardiaque' },
  { src: '/chapter-1/FR/slides/slide-08.png', title: 'La motilité et le mécanisme respiratoire primaire' },
  { src: '/chapter-1/FR/slides/slide-09.png', title: 'Les articulations viscérales' },
  { src: '/chapter-1/FR/slides/slide-10.png', title: 'Interstitium, séreuses et pressions' },
  { src: '/chapter-1/FR/slides/slide-11.png', title: 'Les moyens d’union : haubans et passages' },
  { src: '/chapter-1/FR/slides/slide-12.png', title: 'Exemple clinique des moyens d’union' },
  { src: '/chapter-1/FR/slides/slide-13.png', title: 'Petit omentum et foramen omental' },
  { src: '/chapter-1/FR/slides/slide-14.png', title: 'Douleur viscérale, pariétale et projetée' },
  { src: '/chapter-1/FR/slides/slide-15.png', title: 'Sécurité clinique : reconnaître les signes d’alerte' },
  { src: '/chapter-1/FR/slides/slide-16.png', title: 'Quand la mobilité se perd : adhérences et ptoses' },
  { src: '/chapter-1/FR/slides/slide-17.png', title: 'Spasmes et hypertonies réflexes' },
  { src: '/chapter-1/FR/slides/slide-18.png', title: 'L’approche clinique ROP : le retour à l’équilibre' },
  { src: '/chapter-1/FR/slides/slide-19.png', title: 'Synthèse opérationnelle' },
]

export const chapter1SlidesEn: SyncSlide[] = [
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%201.png', title: 'Biomechanical and Neurophysiological Principles of ROP' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%202.png', title: 'Visceral function: an integrated balance' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%203.png', title: 'Mobility and Motility' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%204.png', title: 'The Four Determinants of Visceral Mobility' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%205.png', title: 'Somatic mobility and visceral gliding' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%206.png', title: 'Automatic mobility: cardiac motion' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%207.png', title: 'The autonomic nervous system' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%208.png', title: 'Motility: Intrinsic Movement and Clinical Assessment' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%209.png', title: 'Biorhythms: Cyclical Variations Useful for Diagnosis' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2010.png', title: 'Visceral “Joints”' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2011.png', title: 'Serous Membranes and Interstitium' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2012.png', title: 'Visceral Means of Attachment' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2013.png', title: 'Lesser omentum and omental foramen' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2014.png', title: 'Visceral, Parietal, and Referred Pain' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2015.png', title: 'Clinical safety: recognizing red flags' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2016.png', title: 'When Mobility Is Lost: Adhesions and Ptosis' },
  { src: '/chapter-1/EN/Images/NCH%201%20EN%20IMG%2017.png', title: 'Reflex Spasms and Hypertonicity' },
]

export const chapter1SlideAnchors: SyncAnchor[] = [
  { sectionId: 'intention', blockIndex: 0, slide: 1, ...endAt('intention', 1) },
  { sectionId: 'intention', blockIndex: 1, slide: 2, ...endAt('mobilite-viscerale', 0) },
  { sectionId: 'mobilite-viscerale', blockIndex: 0, slide: 3, ...endAt('mobilite-viscerale', 2) },
  { sectionId: 'mobilite-viscerale', blockIndex: 2, slide: 4, gapBefore: 'half', ...endAt('mobilite-viscerale', 4) },
  { sectionId: 'mobilite-viscerale', blockIndex: 4, slide: 5, ...endAt('mobilite-viscerale', 11) },
  { sectionId: 'mobilite-viscerale', blockIndex: 11, slide: 6, ...endAt('mobilite-viscerale', 13) },
  { sectionId: 'mobilite-viscerale', blockIndex: 13, slide: 7, ...endAt('mobilite-viscerale', 17) },
  { sectionId: 'mobilite-viscerale', blockIndex: 17, slide: 8, ...endAt('mobilite-viscerale', 22) },
  { sectionId: 'mobilite-viscerale', blockIndex: 23, slide: 9, ...endAt('mrp', -1) },
  { sectionId: 'mrp', blockIndex: -1, slide: 10, ...endAt('articulations-viscerales', 9) },
  { sectionId: 'articulations-viscerales', blockIndex: 9, slide: 11, ...endAt('articulations-viscerales', 12) },
  { sectionId: 'articulations-viscerales', blockIndex: 12, slide: 12, ...endAt('articulations-viscerales', 13) },
  { sectionId: 'articulations-viscerales', blockIndex: 12, slide: 13, ...endAt('articulations-viscerales', 13) },
  { sectionId: 'articulations-viscerales', blockIndex: 13, slide: 14, ...endAt('securite', -1) },
  { sectionId: 'securite', blockIndex: -1, slide: 15, ...endAt('perte-de-mobilite', -1) },
  { sectionId: 'perte-de-mobilite', blockIndex: -1, slide: 16, ...endAt('perte-de-mobilite', 13) },
  { sectionId: 'perte-de-mobilite', blockIndex: 13, slide: 17, ...endAt('approche-clinique', 0) },
  { sectionId: 'approche-clinique', blockIndex: 0, slide: 18, ...endAt('synthese-operationnelle', 0) },
  { sectionId: 'synthese-operationnelle', blockIndex: 0, slide: 19, ...endAt('synthese-operationnelle', 1) },
]

export const chapter1SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'intention', blockIndex: 0, slide: 1, ...endAt('intention', 1) },
  { sectionId: 'intention', blockIndex: 1, slide: 2, ...endAt('mobilite-viscerale', 0) },
  { sectionId: 'mobilite-viscerale', blockIndex: 0, slide: 3, ...endAt('mobilite-viscerale', 2) },
  { sectionId: 'mobilite-viscerale', blockIndex: 2, slide: 4, gapBefore: 'half', ...endAt('mobilite-viscerale', 4) },
  { sectionId: 'mobilite-viscerale', blockIndex: 4, slide: 5, ...endAt('mobilite-viscerale', 11) },
  { sectionId: 'mobilite-viscerale', blockIndex: 11, slide: 6, ...endAt('mobilite-viscerale', 14) },
  { sectionId: 'mobilite-viscerale', blockIndex: 12, slide: 7, ...endAt('mobilite-viscerale', 17) },
  { sectionId: 'mobilite-viscerale', blockIndex: 17, slide: 8, ...endAt('mobilite-viscerale', 22) },
  { sectionId: 'mobilite-viscerale', blockIndex: 22, slide: 9, ...endAt('articulations-viscerales', -1) },
  { sectionId: 'articulations-viscerales', blockIndex: -1, slide: 10, ...endAt('articulations-viscerales', 3) },
  { sectionId: 'articulations-viscerales', blockIndex: 3, slide: 11, ...endAt('articulations-viscerales', 9) },
  { sectionId: 'articulations-viscerales', blockIndex: 9, slide: 12, ...endAt('articulations-viscerales', 13) },
  { sectionId: 'articulations-viscerales', blockIndex: 12, slide: 13, ...endAt('articulations-viscerales', 13) },
  { sectionId: 'articulations-viscerales', blockIndex: 13, slide: 14, ...endAt('securite', -1) },
  { sectionId: 'securite', blockIndex: -1, slide: 15, ...endAt('perte-de-mobilite', -1) },
  { sectionId: 'perte-de-mobilite', blockIndex: -1, slide: 16, ...endAt('perte-de-mobilite', 13) },
  { sectionId: 'perte-de-mobilite', blockIndex: 13, slide: 17, ...endAt('approche-clinique', -1) },
]

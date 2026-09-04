const synthesis = (file: number, title: string) => ({
  src: `/chapter-3/FR/slides/slide-${String(file).padStart(2, '0')}.png`,
  title,
})

const endAt = (sectionId: string, blockIndex: number) => ({ end: { sectionId, blockIndex } })

// The supplied synthesis deck is reordered here to follow the revised text.
// Its source numbering remains visible in the asset path for straightforward replacement.
export const chapter3ReworkSlides = [
  synthesis(1, 'Le système nerveux central'),
  synthesis(2, 'Niveau 1 — Régulation des centres supérieurs'),
  synthesis(3, 'Le SNC coordonne les réponses automatiques, émotionnelles et cognitives'),
  synthesis(5, 'Tronc cérébral et cervelet'),
  synthesis(20, 'Sinus carotidien et afférences vers le NTS'),
  synthesis(6, 'Ganglions de la base et formation réticulaire'),
  synthesis(13, 'Le diencéphale : chef d’orchestre neuro-hormonal'),
  synthesis(14, 'Mécanique vasculaire : système porte hypothalamo-hypophysaire'),
  synthesis(15, 'Axe hypothalamo-hypophysaire : système porte'),
  synthesis(4, 'La théorie des trois cerveaux : un modèle historique'),
  synthesis(7, 'Le système limbique : l’architecture des émotions'),
  synthesis(8, 'Matrice clinique des noyaux limbiques'),
  synthesis(9, 'L’insula : la conscience intéroceptive'),
  synthesis(10, 'Réseaux limbiques et cortico-limbiques'),
  synthesis(12, 'L’instinct'),
  synthesis(17, 'Le néocortex nécessite une approche thérapeutique indirecte'),
  synthesis(16, 'Le système glymphatique : détoxification cérébrale'),
  synthesis(11, 'Ganglions de la base : repères anatomiques'),
  synthesis(18, 'Cartographie ROP — les zones occipitales'),
  { src: '/chapter-3/FR/cartographies/slide-01.png', title: 'Cartographie ROP : tronc cérébral' },
  { src: '/chapter-3/FR/cartographies/slide-03.png', title: 'Cartographie ROP : réseaux limbiques et cortico-limbiques' },
  { src: '/chapter-3/FR/cartographies/slide-05.png', title: 'Cartographie ROP : diencéphale et hypophyse' },
  synthesis(19, 'Cortex : pas de zone ROP directe, mais des voies ascendantes réelles'),
]

const chapter3EnglishV2Slides = new Set([2, 3, 5, 17, 18])

const synthesisEn = (file: number, title: string) => ({
  src: `/chapter-3/EN/Images/NCH 3 EN IMG ${file}${chapter3EnglishV2Slides.has(file) ? ' V2' : ''}.png`,
  title,
})

export const chapter3ReworkSlidesEn = [
  synthesisEn(1, 'The Central Nervous System'),
  synthesisEn(2, 'Level 1 — Regulation of the Higher Centers'),
  synthesisEn(3, 'The CNS coordinates automatic, emotional, and cognitive responses'),
  synthesisEn(4, 'The theory of the three brains: a historical model'),
  synthesisEn(5, 'Cerebral trunk and cerebellum'),
  synthesisEn(6, 'The Basal Ganglia & The Reticular Formation'),
  synthesisEn(7, 'The Limbic System: The Architecture of Emotions'),
  synthesisEn(8, 'Clinical Matrix of the Limbic Nuclei'),
  synthesisEn(9, 'Insula: Interoceptive Awareness'),
  synthesisEn(10, 'Limbic system: anatomical landmarks'),
  synthesisEn(11, 'Basal ganglia: anatomical landmarks'),
  synthesisEn(12, 'Instinct'),
  synthesisEn(13, 'The Diencephalon: Neuro-Hormonal Conductor'),
  synthesisEn(14, 'Vascular Mechanics: The Hypothalamic-Pituitary Portal System'),
  synthesisEn(15, 'The Hypothalamo-Hypophyseal Axis: Gating System'),
  synthesisEn(16, 'The Glymphatic System: Cerebral Detoxification'),
  synthesisEn(17, 'The neocortex requires a purely indirect therapeutic approach'),
  synthesisEn(18, 'Cartographie ROP — Occipital Zones'),
  synthesisEn(19, 'ROP Mapping — The Occipital Zones'),
]

export const chapter3ReworkSlideAnchors = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'du-corps-vers-les-centres-d-integration', blockIndex: -1, slide: 3 },
  { sectionId: 'tronc-cerebral', blockIndex: -1, slide: 4 },
  { sectionId: 'tronc-cerebral', blockIndex: 3, slide: 5 },
  { sectionId: 'tronc-cerebral', blockIndex: 7, slide: 6 },
  { sectionId: 'diencephale', blockIndex: -1, slide: 7 },
  { sectionId: 'diencephale', blockIndex: 8, slide: 8 },
  { sectionId: 'diencephale', blockIndex: 9, slide: 9 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: -1, slide: 10 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 0, slide: 11 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 7, slide: 12 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 1, slide: 13 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 3, slide: 14 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 7, slide: 15 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 11, slide: 16 },
  { sectionId: 'environnement-neuro-meninge', blockIndex: 2, slide: 17 },
  { sectionId: 'cervelet-et-ganglions-de-la-base', blockIndex: 3, slide: 18 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 1, slide: 19 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 8, slide: 20, gapBefore: 'half' as const, ...endAt('zones-reflexes-rop', 8) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 11, slide: 21, ...endAt('zones-reflexes-rop', 11) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 14, slide: 22, ...endAt('zones-reflexes-rop', 14) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 17, slide: 23, ...endAt('zones-reflexes-rop', 20) },
]

export const chapter3ReworkSlideAnchorsEn = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 4, slide: 2 },
  { sectionId: 'du-corps-vers-les-centres-d-integration', blockIndex: -1, slide: 3 },
  { sectionId: 'tronc-cerebral', blockIndex: -1, slide: 5 },
  { sectionId: 'tronc-cerebral', blockIndex: 5, slide: 6 },
  { sectionId: 'diencephale', blockIndex: -1, slide: 13 },
  { sectionId: 'diencephale', blockIndex: 5, slide: 14 },
  { sectionId: 'diencephale', blockIndex: 6, slide: 15 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: -1, slide: 4 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 1, slide: 9 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 3, slide: 7 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 5, slide: 17 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 7, slide: 8 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 8, slide: 10 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 10, slide: 12 },
  { sectionId: 'environnement-neuro-meninge', blockIndex: 2, slide: 16 },
  { sectionId: 'cervelet-et-ganglions-de-la-base', blockIndex: -1, slide: 5 },
  { sectionId: 'cervelet-et-ganglions-de-la-base', blockIndex: 3, slide: 11 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 1, slide: 18 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 2, slide: 19 },
]

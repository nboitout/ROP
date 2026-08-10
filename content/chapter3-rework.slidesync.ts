const synthesis = (file: number, title: string) => ({
  src: `/chapter-3/rework-slides/slide-${String(file).padStart(2, '0')}.png`,
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
  { src: '/chapter-3/rework-reflex/slide-01.png', title: 'Cartographie ROP : tronc cérébral' },
  { src: '/chapter-3/rework-reflex/slide-03.png', title: 'Cartographie ROP : réseaux limbiques et cortico-limbiques' },
  { src: '/chapter-3/rework-reflex/slide-05.png', title: 'Cartographie ROP : diencéphale et hypophyse' },
  synthesis(19, 'Cortex : pas de zone ROP directe, mais des voies ascendantes réelles'),
]

export const chapter3ReworkSlideAnchors = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'du-corps-vers-les-centres-d-integration', blockIndex: -1, slide: 3 },
  { sectionId: 'tronc-cerebral', blockIndex: -1, slide: 4 },
  { sectionId: 'tronc-cerebral', blockIndex: 7, slide: 5 },
  { sectionId: 'diencephale', blockIndex: -1, slide: 6 },
  { sectionId: 'diencephale', blockIndex: 8, slide: 7 },
  { sectionId: 'diencephale', blockIndex: 9, slide: 8 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: -1, slide: 9 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 0, slide: 10 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 7, slide: 11 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 1, slide: 12 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 3, slide: 13 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 7, slide: 14 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques', blockIndex: 11, slide: 15 },
  { sectionId: 'environnement-neuro-meninge', blockIndex: 2, slide: 16 },
  { sectionId: 'cervelet-et-ganglions-de-la-base', blockIndex: 3, slide: 17 },
  { sectionId: 'niveau-1-logique-clinique', blockIndex: 3, slide: 18 },
  { sectionId: 'zones-reflexes-rop', blockIndex: 3, slide: 19, gapBefore: 'half' as const, ...endAt('zones-reflexes-rop', 3) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 6, slide: 20, ...endAt('zones-reflexes-rop', 6) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 9, slide: 21, ...endAt('zones-reflexes-rop', 9) },
  { sectionId: 'zones-reflexes-rop', blockIndex: 12, slide: 22, ...endAt('zones-reflexes-rop', 15) },
]

// Chapter 2 — slide ↔ text synchronisation map for the combined reading
// experience (/lecture/traitement-rop).
//
// Slides are rendered from the Chapter 2 synthesis PDFs in public/chapter-2/.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }

// blockIndex refers to the position in chapter2Fr sections[].blocks[].
// blockIndex -1 anchors a slide to the section heading itself.
export type SyncAnchor = SyncAnchorPoint & {
  slide: number
  gapBefore?: 'half'
  end?: SyncAnchorPoint
}

const endAt = (sectionId: string, blockIndex: number, itemIndex?: number): Pick<SyncAnchor, 'end'> => ({
  end: { sectionId, blockIndex, ...(itemIndex === undefined ? {} : { itemIndex }) },
})

export const chapter2Slides: SyncSlide[] = [
  { src: '/chapter-2/FR/slides/slide-01.png', title: 'Traitement par la Réflexothérapie Occipito-Podale (ROP)' },
  { src: '/chapter-2/FR/slides/slide-02.png', title: 'L’exigence du geste thérapeutique' },
  { src: '/chapter-2/FR/slides/slide-03.png', title: 'La pression fine sollicite les mécanorécepteurs superficiels' },
  { src: '/chapter-2/FR/slides/slide-04.png', title: 'La pression en ROP : une action superficielle' },
  { src: '/chapter-2/FR/slides/slide-05.png', title: 'Le système lemniscal et le contrôle de la douleur' },
  { src: '/chapter-2/FR/slides/slide-06.png', title: 'Les trois temps du massage' },
  { src: '/chapter-2/FR/slides/slide-07.png', title: 'Fenêtre d’adaptation après la séance' },
  { src: '/chapter-2/FR/slides/slide-08.png', title: 'Hiérarchisation du plan de traitement' },
  // One plate per level of section 4 ("Séquence clinique ROP : quatre niveaux").
  { src: '/chapter-2/FR/slides/slide-09.png', title: 'Niveau 1 — Régulation des centres supérieurs' },
  { src: '/chapter-2/FR/slides/slide-09b.png', title: 'Niveau 2 — Régulation neuro-végétative et adaptation' },
  { src: '/chapter-2/FR/slides/slide-10.png', title: 'Niveau 3 — Régulation viscérale loco-régionale' },
  { src: '/chapter-2/FR/slides/slide-11.png', title: 'Niveau 4 — Intégration viscéro-somatique et viscéro-émotionnelle' },
  { src: '/chapter-2/FR/slides/slide-12.png', title: 'Cas clinique : lombo-sciatalgie gauche post-partum' },
  { src: '/chapter-2/FR/slides/slide-14.png', title: 'Contre-indications et signes d’alarme en ROP' },
  { src: '/chapter-2/FR/slides/slide-13.png', title: 'Indications de la ROP' },
]

export const chapter2SlidesEn: SyncSlide[] = [
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 1.png', title: 'Treatment by Occipito-Podal Reflexotherapy (ROP)' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 2.png', title: 'The Requirement for the Therapeutic Gesture' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 3.png', title: 'Fine pressure stimulates superficial mechanoreceptors' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 4.png', title: 'Pressure in ROP: a superficial action' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 5.png', title: 'The lemniscal system and pain control' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 6.png', title: 'The Three Times of Massage' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 7.png', title: 'Adaptation window after the session' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 8.png', title: 'Hierarchy of the Treatment Plan' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 9.png', title: 'Level 1 — Regulation of Higher Centers' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 9b.png', title: 'Level 2 — Neuro-vegetative Regulation and Adaptation' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 10.png', title: 'Level 3 — Loco-regional Visceral Regulation' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 11.png', title: 'Level 4 — Viscero-somatic and Viscero-emotional Integration' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 12.png', title: 'Clinical case: postpartum left lumbosciatica' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 13.png', title: 'Indications for ROP' },
  { src: '/chapter-2/EN/Images/NCH 2 EN IMG 14.png', title: 'Contraindications and warning signs in ROP' },
]

export const chapter2SlideAnchorsFr: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1, ...endAt('technique', -1) },
  { sectionId: 'technique', blockIndex: 0, slide: 2, ...endAt('technique', 5) },
  { sectionId: 'technique', blockIndex: 5, slide: 3, ...endAt('technique', 8) },
  { sectionId: 'technique', blockIndex: 8, slide: 4, ...endAt('technique', 12) },
  { sectionId: 'technique', blockIndex: 12, slide: 5, ...endAt('technique', 15) },
  { sectionId: 'technique', blockIndex: 15, slide: 6, ...endAt('modalites', -1) },
  { sectionId: 'modalites', blockIndex: 1, slide: 7, ...endAt('hierarchisation', -1) },
  { sectionId: 'reactions', blockIndex: 0, slide: 7, ...endAt('conseils', -1) },
  { sectionId: 'hierarchisation', blockIndex: -1, slide: 8, ...endAt('zones-reflexes', -1) },
  // Section 4 runs one plate per level; the sub headings sit at blocks 1, 5, 9
  // and 13, so level 1 also carries the section intro.
  { sectionId: 'zones-reflexes', blockIndex: -1, slide: 9, ...endAt('zones-reflexes', 5) },
  { sectionId: 'zones-reflexes', blockIndex: 5, slide: 10, ...endAt('zones-reflexes', 9) },
  { sectionId: 'zones-reflexes', blockIndex: 9, slide: 11, ...endAt('zones-reflexes', 13) },
  { sectionId: 'zones-reflexes', blockIndex: 13, slide: 12, ...endAt('exemple-clinique', -1) },
  { sectionId: 'exemple-clinique', blockIndex: -1, slide: 13, ...endAt('contre-indications', -1) },
  { sectionId: 'contre-indications', blockIndex: -1, slide: 14, ...endAt('indications', -1) },
  { sectionId: 'indications', blockIndex: -1, slide: 15, ...endAt('actions', -1) },
]

export const chapter2SlideAnchors: SyncAnchor[] = [
  { sectionId: 'technique', blockIndex: -1, slide: 1, ...endAt('technique', 1) },
  { sectionId: 'technique', blockIndex: 1, slide: 2, ...endAt('technique', 5) },
  { sectionId: 'technique', blockIndex: 5, slide: 3, ...endAt('technique', 7) },
  { sectionId: 'technique', blockIndex: 7, slide: 4, gapBefore: 'half', ...endAt('technique', 8) },
  { sectionId: 'technique', blockIndex: 8, slide: 5, ...endAt('technique', 13) },
  { sectionId: 'technique', blockIndex: 13, slide: 6, ...endAt('modalites', 0) },
  { sectionId: 'modalites', blockIndex: 0, slide: 7, ...endAt('hierarchisation', -1) },
  { sectionId: 'hierarchisation', blockIndex: -1, slide: 8, ...endAt('hierarchisation', 3) },
  { sectionId: 'hierarchisation', blockIndex: 3, slide: 9, ...endAt('hierarchisation', 4) },
  { sectionId: 'hierarchisation', blockIndex: 4, slide: 10, ...endAt('hierarchisation', 5) },
  { sectionId: 'hierarchisation', blockIndex: 5, slide: 11, ...endAt('hierarchisation', 6) },
  { sectionId: 'hierarchisation', blockIndex: 6, slide: 12, ...endAt('exemple-clinique', -1) },
  { sectionId: 'exemple-clinique', blockIndex: -1, slide: 13, ...endAt('exemple-clinique', 6) },
  { sectionId: 'exemple-clinique', blockIndex: 6, slide: 14, ...endAt('exemple-clinique', 10) },
  { sectionId: 'exemple-clinique', blockIndex: 10, slide: 15, gapBefore: 'half', ...endAt('contre-indications', -1) },
  { sectionId: 'contre-indications', blockIndex: -1, slide: 16, ...endAt('indications', -1) },
  { sectionId: 'indications', blockIndex: -1, slide: 17, ...endAt('conseils', -1) },
  { sectionId: 'conseils', blockIndex: -1, slide: 18, ...endAt('conseils', 4) },
]

export const chapter2SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1, ...endAt('technique', -1) },
  { sectionId: 'technique', blockIndex: 0, slide: 2, ...endAt('technique', 2) },
  { sectionId: 'technique', blockIndex: 2, slide: 3, ...endAt('technique', 5) },
  { sectionId: 'technique', blockIndex: 5, slide: 4, ...endAt('technique', 6) },
  { sectionId: 'technique', blockIndex: 6, slide: 5, ...endAt('technique', 12) },
  { sectionId: 'technique', blockIndex: 12, slide: 6, ...endAt('modalites', -1) },
  { sectionId: 'modalites', blockIndex: -1, slide: 7, ...endAt('hierarchisation', -1) },
  { sectionId: 'hierarchisation', blockIndex: -1, slide: 8, ...endAt('zones-reflexes', -1) },
  { sectionId: 'zones-reflexes', blockIndex: -1, slide: 9, ...endAt('zones-reflexes', 5) },
  { sectionId: 'zones-reflexes', blockIndex: 5, slide: 10, ...endAt('zones-reflexes', 9) },
  { sectionId: 'zones-reflexes', blockIndex: 9, slide: 11, ...endAt('zones-reflexes', 13) },
  { sectionId: 'zones-reflexes', blockIndex: 13, slide: 12, ...endAt('exemple-clinique', -1) },
  { sectionId: 'exemple-clinique', blockIndex: -1, slide: 13, ...endAt('contre-indications', -1) },
  { sectionId: 'contre-indications', blockIndex: -1, slide: 15, ...endAt('indications', -1) },
  { sectionId: 'indications', blockIndex: -1, slide: 14, ...endAt('actions', -1) },
]

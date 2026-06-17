// Chapter 2 — slide ↔ text synchronisation map for the combined reading
// experience (/lecture/traitement-rop).
//
// French only for now. Slides are rendered from:
// public/chapter-2/Chapter2 - Slides de synthese.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }

// blockIndex refers to the position in chapter2Fr sections[].blocks[].
// blockIndex -1 anchors a slide to the section heading itself.
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter2Slides: SyncSlide[] = [
  { src: '/chapter-2/slides/slide-01.png', title: 'Traitement par la Réflexothérapie Occipito-Podale (ROP)' },
  { src: '/chapter-2/slides/slide-02.png', title: 'L’exigence du geste thérapeutique' },
  { src: '/chapter-2/slides/slide-03.png', title: 'La peau' },
  { src: '/chapter-2/slides/slide-04.png', title: 'La cible tissulaire : couche épidermo-dermique' },
  { src: '/chapter-2/slides/slide-05.png', title: 'Le vecteur neurologique' },
  { src: '/chapter-2/slides/slide-06.png', title: 'Chronologie clinique : les trois temps du massage' },
  { src: '/chapter-2/slides/slide-07.png', title: 'La fenêtre d’assimilation neuro-vasculaire' },
  { src: '/chapter-2/slides/slide-08.png', title: 'Hiérarchisation du plan de traitement' },
  { src: '/chapter-2/slides/slide-09.png', title: 'Cartographie d’intervention' },
  { src: '/chapter-2/slides/slide-10.png', title: 'Cibles anatomiques I : syndrome général d’adaptation' },
  { src: '/chapter-2/slides/slide-11.png', title: 'Cible II : syndrome locorégional' },
  { src: '/chapter-2/slides/slide-12.png', title: 'Cible III : système limbique' },
  { src: '/chapter-2/slides/slide-13.png', title: 'Application clinique : lombo-sciatalgie post-partum' },
  { src: '/chapter-2/slides/slide-15.png', title: 'Plan de traitement ROP — application au cas de Mme X' },
  { src: '/chapter-2/slides/slide-14.png', title: 'Le plan de traitement ROP ciblé pour Madame X' },
  { src: '/chapter-2/slides/slide-16.png', title: 'Indications thérapeutiques : le domaine des troubles fonctionnels' },
  { src: '/chapter-2/slides/slide-17.png', title: 'Gouvernance clinique : sécurité et limites' },
  { src: '/chapter-2/slides/slide-18.png', title: 'L’accompagnement global du patient' },
]

export const chapter2SlideAnchors: SyncAnchor[] = [
  { sectionId: 'technique', blockIndex: -1, slide: 1 },
  { sectionId: 'technique', blockIndex: 0, slide: 2 },
  { sectionId: 'technique', blockIndex: 2, slide: 3 },
  { sectionId: 'technique', blockIndex: 5, slide: 4, gapBefore: 'half' },
  { sectionId: 'technique', blockIndex: 6, slide: 5 },
  { sectionId: 'technique', blockIndex: 11, slide: 6 },
  { sectionId: 'modalites', blockIndex: 0, slide: 7 },
  { sectionId: 'hierarchisation', blockIndex: -1, slide: 8 },
  { sectionId: 'hierarchisation', blockIndex: 2, slide: 9 },
  { sectionId: 'hierarchisation', blockIndex: 3, slide: 10 },
  { sectionId: 'hierarchisation', blockIndex: 4, slide: 11 },
  { sectionId: 'hierarchisation', blockIndex: 5, slide: 12 },
  { sectionId: 'exemple-clinique', blockIndex: -1, slide: 13 },
  { sectionId: 'exemple-clinique', blockIndex: 6, slide: 14 },
  { sectionId: 'exemple-clinique', blockIndex: 10, slide: 15 },
  { sectionId: 'indications', blockIndex: -1, slide: 16 },
  { sectionId: 'contre-indications', blockIndex: -1, slide: 17 },
  { sectionId: 'conseils', blockIndex: -1, slide: 18 },
]

// Chapter 11 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-11).
//
// Slides 1-15 are pre-rendered from:
// public/chapter-11/Chapter11 Slides de synthese - FR.pdf
//
// Slides 16+ reuse the cartography pages from:
// public/chapter-11/Chapter11 Cartographie et Photos.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half'; end?: { sectionId: string; blockIndex: number } }

export const chapter11Slides: SyncSlide[] = [
  { src: '/chapter-11/FR/slides/slide-01.png', title: 'Foie et voies biliaires' },
  { src: '/chapter-11/FR/slides/slide-02.png', title: 'Macro-anatomie et structure tissulaire' },
  { src: '/chapter-11/FR/slides/slide-03.png', title: 'Architecture mécanique et points de fixité' },
  { src: '/chapter-11/FR/slides/slide-04.png', title: 'Face viscérale du foie' },
  { src: '/chapter-11/FR/slides/slide-06.png', title: 'Le lobule hépatique : carrefour fluides et énergie' },
  { src: '/chapter-11/FR/slides/slide-07.png', title: 'Le réseau porte et les voies de dérivation' },
  { src: '/chapter-11/FR/slides/slide-08.png', title: 'Dynamique des fluides et congestion' },
  { src: '/chapter-11/FR/slides/slide-09.png', title: 'Circulation lymphatique et drainage' },
  { src: '/chapter-11/FR/slides/slide-10.png', title: 'Les 4 segments fonctionnels' },
  { src: '/chapter-11/FR/slides/slide-11.png', title: 'Physiologie globale : les 4 piliers fonctionnels' },
  { src: '/chapter-11/FR/slides/slide-12.png', title: 'Mécanique hormono-biliaire' },
  { src: '/chapter-11/FR/slides/slide-13.png', title: 'Matrice diagnostique clinique' },
  { src: '/chapter-11/FR/slides/slide-15.png', title: 'Profils viscéro-émotionnels' },
  { src: '/chapter-11/FR/slides/slide-16.png', title: 'Synthèse clinique et hygiène de vie' },
  { src: '/chapter-11/FR/cartographies/figure-11-01.png', title: 'Cartographie : Foie — lobe gauche' },
  { src: '/chapter-11/FR/cartographies/figure-11-02.png', title: 'Cartographie : Foie — lobe droit' },
  { src: '/chapter-11/FR/cartographies/figure-11-06.png', title: 'Cartographie : Nerf phrénique C3-C4-C5' },
  { src: '/chapter-11/FR/cartographies/figure-11-08.png', title: 'Cartographie : Nerf phrénique — triangle de Sédillot' },
]

export const chapter11SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 9, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'interet-en-rop-3', blockIndex: 0, slide: 4, end: { sectionId: 'vascularisation', blockIndex: 0 } },
  { sectionId: 'vascularisation', blockIndex: 10, slide: 5 },
  { sectionId: 'vascularisation', blockIndex: 14, slide: 6 },
  { sectionId: 'vascularisation', blockIndex: 18, slide: 7 },
  { sectionId: 'circulation-lymphatique', blockIndex: 0, slide: 8 },
  { sectionId: 'interet-en-rop-6', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 11, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 12 },
  { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 15, slide: 15, end: { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 15 } },
  { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 17, slide: 16, end: { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 17 } },
  { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 26, slide: 17, end: { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 26 } },
  { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 27, slide: 18, end: { sectionId: 'zones-reflexes-podales-du-foie-et-des-voies-biliaires', blockIndex: 27 } },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 13 },
  { sectionId: 'conseils', blockIndex: 0, slide: 14 },
]

export const chapter11SlidesEn: SyncSlide[] = [
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 1.png', title: 'Chapter 11 — Liver and Biliary Tract' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 2.png', title: 'Macro-Anatomy and Tissue Structure' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 3 V2.png', title: 'Mechanical Architecture and Fixation Points' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 4.png', title: 'Visceral Surface of the Liver' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 6 V2.png', title: 'The Hepatic Lobule: A Crossroads of Fluids and Energies' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 7 V2.png', title: 'The Portal System and Collateral Pathways' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 8 V2.png', title: 'Fluid Dynamics and Congestion' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 9 V2.png', title: 'Lymphatic Circulation and Drainage' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 10 V2.png', title: 'The 4 Functional Segments' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 11 V2.png', title: 'Overall Physiology: The 4 Functional Pillars' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 12 V2.png', title: 'Hormono-Biliary Mechanics' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 13 V2.png', title: 'Clinical Diagnostic Matrix' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 14 V2.png', title: 'Map of Viscero-Somatic Referred Projections' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 15 V2.png', title: 'Viscero-Emotional Profiles' },
  { src: '/chapter-11/EN/Images/NCH 11 EN IMG 16 V2.png', title: 'Clinical Summary and Lifestyle Hygiene' },
]

export const chapter11SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 1, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 33, slide: 4 },
  { sectionId: 'vascularisation', blockIndex: 3, slide: 5 },
  { sectionId: 'vascularisation', blockIndex: 14, slide: 6 },
  { sectionId: 'vascularisation', blockIndex: 22, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 40, slide: 8 },
  { sectionId: 'segmentation-hepatique', blockIndex: 11, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 15, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 12 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 11, slide: 13 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 14 },
  { sectionId: 'conseils', blockIndex: 0, slide: 15 },
]

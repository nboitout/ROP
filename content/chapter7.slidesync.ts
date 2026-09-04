export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & {
  slide: number | number[]
  gapBefore?: 'half'
  end?: SyncAnchorPoint
}

// The first 14 slides are the rebuilt synthesis deck.
// Slides 15-19 reuse the cartography pages paired with the reflex-zone text.
export const chapter7Slides: SyncSlide[] = [
  { src: '/chapter-7/FR/slides/slide-01.png', title: 'Chapitre 7 — Cavités abdominale et péritonéale' },
  { src: '/chapter-7/FR/slides/slide-02.png', title: 'Le contenant abdominal : frontières et pressions' },
  { src: '/chapter-7/FR/slides/slide-03.png', title: 'Les trois espaces viscéraux' },
  { src: '/chapter-7/FR/slides/slide-04.png', title: 'L’architecture du péritoine' },
  { src: '/chapter-7/FR/slides/slide-05.png', title: 'Péritoine, feuillets et liquide péritonéal' },
  { src: '/chapter-7/FR/slides/slide-06.png', title: 'Replis péritonéaux : ligaments, omentums et mésos' },
  { src: '/chapter-7/FR/slides/slide-07.png', title: 'Orifices et hiatus de la cavité abdominale' },
  { src: '/chapter-7/FR/slides/slide-08.png', title: 'L’axe vasculaire principal' },
  { src: '/chapter-7/FR/slides/slide-09.png', title: 'Double réseau nerveux : somatique et autonome' },
  { src: '/chapter-7/FR/slides/slide-10.png', title: 'Physiologie pariéto-viscérale : le rôle du transverse' },
  { src: '/chapter-7/FR/slides/slide-11.png', title: 'Dynamique du liquide péritonéal' },
  { src: '/chapter-7/FR/slides/slide-12.png', title: 'Pathologies du péritoine : mécaniques et cliniques' },
  { src: '/chapter-7/FR/slides/slide-13.png', title: 'Cartographie des douleurs projetées' },
  { src: '/chapter-7/FR/slides/slide-14.png', title: 'Synthèse — contenant, contenu et réseaux péritonéaux' },
  { src: '/chapter-7/FR/cartographies/figure-7-01.png', title: 'Cartographie : racine du mésentère — jonction duodéno-jéjunale à ombilic' },
  { src: '/chapter-7/FR/cartographies/figure-7-03.png', title: 'Cartographie : racine du mésentère — ombilic à valvule iléocæcale' },
  { src: '/chapter-7/FR/cartographies/figure-7-05.png', title: 'Cartographie : racine du mésocôlon transverse — deuxième duodénum à L2' },
  { src: '/chapter-7/FR/cartographies/figure-7-07.png', title: 'Cartographie : racine du mésocôlon transverse — L2 au corps du pancréas' },
  { src: '/chapter-7/FR/cartographies/figure-7-09.png', title: 'Cartographie : racine du mésosigmoïde' },
]

export const chapter7SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 5, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 8, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 42, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 12, slide: 11 },
  { sectionId: 'pathologie', blockIndex: 0, slide: 12 },
  { sectionId: 'relations-peritoneo-somatiques', blockIndex: 0, slide: 13 },
  {
    sectionId: 'relations-peritoneo-somatiques',
    blockIndex: 6,
    itemIndex: 4,
    slide: 14,
    end: { sectionId: 'zones-reflexes-podales', blockIndex: -1 },
  },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 15, end: { sectionId: 'zones-reflexes-podales', blockIndex: 8 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 16, end: { sectionId: 'zones-reflexes-podales', blockIndex: 10 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 11, slide: 17, end: { sectionId: 'zones-reflexes-podales', blockIndex: 12 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 13, slide: 18, end: { sectionId: 'zones-reflexes-podales', blockIndex: 14 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 19, end: { sectionId: 'zones-reflexes-podales', blockIndex: 16 } },
]

export const chapter7SlidesEn: SyncSlide[] = [
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 1.png', title: 'Chapter 7 — Abdominal and Peritoneal Cavities' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 2 V2.png', title: 'The Abdominal Container: Boundaries and Pressures' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 3 V2.png', title: 'The Three Visceral Spaces (Contents)' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 4 V2.png', title: 'The Architecture of the Peritoneum' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 5 V2.png', title: 'Peritoneum, Peritoneal Folds, and Peritoneal Fluid' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 6.png', title: 'Peritoneal Folds: Ligaments, Omenta and Mesenteries' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 7.png', title: 'Orifices and Hiatuses of the Abdominal Cavity' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 8 V2.png', title: 'The Main Vascular Axis' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 9 V2.png', title: 'Dual Nervous Network: Somatic and Autonomic' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 10 V2.png', title: 'Parietal-Visceral Physiology: The Role of the Transverse' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 11 V2.png', title: 'Dynamics of Peritoneal Fluid' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 12 V2.png', title: 'Peritoneal Pathologies: Mechanisms and Clinical Features' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 13 V2.png', title: 'Map of Referred Pain' },
  { src: '/chapter-7/EN/IMAGES/NCH 7 EN IMG 14 V2.png', title: 'Synthesis — Containing, Contained and Peritoneal Networks' },
  { src: '/chapter-7/EN/cartography/figure-7-01.png', title: 'Cartography: root of the mesentery — duodenojejunal junction to umbilicus' },
  { src: '/chapter-7/EN/cartography/figure-7-03.png', title: 'Cartography: root of the mesentery — umbilicus to ileocecal valve' },
  { src: '/chapter-7/EN/cartography/figure-7-05.png', title: 'Cartography: root of the transverse mesocolon — second part of the duodenum to L2' },
  { src: '/chapter-7/EN/cartography/figure-7-07.png', title: 'Cartography: root of the transverse mesocolon — L2 to the body of the pancreas' },
  { src: '/chapter-7/EN/cartography/figure-7-09.png', title: 'Cartography: root of the sigmoid mesocolon' },
]

export const chapter7SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 9, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 8, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 47, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 8, slide: 11 },
  { sectionId: 'pathologie', blockIndex: 0, slide: 12 },
  { sectionId: 'relations-peritoneo-somatiques', blockIndex: 0, slide: 13 },
  {
    sectionId: 'relations-peritoneo-somatiques',
    blockIndex: 5,
    slide: 14,
    end: { sectionId: 'zones-reflexes-podales', blockIndex: -1 },
  },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 15, end: { sectionId: 'zones-reflexes-podales', blockIndex: 8 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 16, end: { sectionId: 'zones-reflexes-podales', blockIndex: 10 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 11, slide: 17, end: { sectionId: 'zones-reflexes-podales', blockIndex: 12 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 13, slide: 18, end: { sectionId: 'zones-reflexes-podales', blockIndex: 14 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 19, end: { sectionId: 'zones-reflexes-podales', blockIndex: 16 } },
]

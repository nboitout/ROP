// Chapter 5 — slide ↔ text synchronisation map for the combined reading
// experience prototype (/lecture/chapitre-5).
//
// The slide order and their position in the text come from Guy's source
// document "Chapitre 5 Mécanisme de Stress (test of new reader experience)",
// where each slide of the synthesis deck is embedded at the exact point of
// the text it illustrates. Slide images are pre-rendered pages of
// public/chapter-5/Chapter5 Slides FR.pdf.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }

// blockIndex refers to the position in chapter5Fr sections[].blocks[].
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number | number[]; gapBefore?: 'half'; end?: SyncAnchorPoint }

export const chapter5Slides: SyncSlide[] = [
  { src: '/chapter-5/slides/slide-01.png', title: 'Mécanisme de stress' },
  { src: '/chapter-5/slides/slide-02.png', title: 'L’équilibre vital : homéostasie et allostasie' },
  { src: '/chapter-5/slides/slide-03.png', title: 'Le mécanisme de stress : stabilité dans le changement' },
  { src: '/chapter-5/slides/slide-04.png', title: 'Dualité du stress : distress vs eustress' },
  { src: '/chapter-5/slides/slide-05.png', title: 'La trilogie des stresseurs et l’effet cumulatif' },
  { src: '/chapter-5/slides/slide-06.png', title: 'Le syndrome général d’adaptation (SGA)' },
  { src: '/chapter-5/slides/slide-07.png', title: 'Le point de bascule : cerveau limbique et hypothalamus' },
  { src: '/chapter-5/slides/slide-08.png', title: 'Mécanisme de stress : axes neurologique (SAM) et hormonal (HHS)' },
  { src: '/chapter-5/slides/slide-09.png', title: 'Mécanisme de stress : axe neurologique (SAM)' },
  { src: '/chapter-5/slides/slide-10.png', title: 'Mécanisme de stress : axe hormonal (HHS)' },
  { src: '/chapter-5/slides/slide-11.png', title: 'Phase 2 du SGA : récupération et vulnérabilité' },
  { src: '/chapter-5/slides/slide-12.png', title: 'Phase 3 du SGA : adaptation-résistance' },
  { src: '/chapter-5/slides/slide-13.png', title: 'Phase d’adaptation-résistance' },
  { src: '/chapter-5/slides/slide-14.png', title: 'Phase 4 du SGA : épuisement et chronicisation' },
  { src: '/chapter-5/slides/slide-15.png', title: '« Nous sommes malades parce que nous perdons la santé, et non l’inverse. »' },
  { src: '/chapter-5/slides/cartographie-fr/slide-01.png', title: 'Cartographie ROP — zones occipitales' },
  { src: '/chapter-5/slides/cartographie-fr/slide-02.png', title: 'Base exocrânienne — face plantaire des orteils' },
  { src: '/chapter-5/slides/cartographie-fr/slide-03.png', title: 'Système limbique et tronc cérébral — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-05.png', title: 'Système limbique — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-07.png', title: 'Diencéphale et hypophyse — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-09.png', title: 'Sinus et glomus carotidien — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-11.png', title: 'Nerf vague X dans le foramen jugulaire — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-13.png', title: 'Nerfs vagues au hiatus œsophagien — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-15.png', title: 'Parasympathique pelvien ou sacré — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-17.png', title: 'Nerf phrénique (C3-C4-C5) — cartographie' },
  { src: '/chapter-5/slides/cartographie-fr/slide-19.png', title: 'Nerf phrénique (triangle de Sédillot) — cartographie' },
]

export const chapter5SlidesEn: SyncSlide[] = [
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 1.png', title: 'Stress Mechanism' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 2.png', title: 'Homeostasis and Allostasis' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 3_V2.png', title: 'Allostatic load: the cumulative cost of adaptation' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 4.png', title: 'The Stressor Triad' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 5.png', title: 'Stress is not the event; it is the response' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 6.png', title: 'The dual response to a stressor: emergency and support' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 7_V2.png', title: 'General Adaptation Syndrome (GAS)' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 8.png', title: 'From alarm to recovery' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 9.png', title: 'Phase 3: Adaptation-Resistance' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 10.png', title: 'Phase 4: Decompensation or exhaustion' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 11.png', title: 'The true cost of stress: the absence of recovery' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 12.png', title: 'The Adaptive Challenge: Completing the Response' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 13.png', title: 'The cost of regulation: active mobilization, not a leaky reservoir' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 14.png', title: 'The cost of regulation and allostatic load' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 15.png', title: 'Cellular hypermetabolism under stress' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 16.png', title: 'The Threshold Model: Functional Disorder and Structural Alteration' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 17.png', title: 'The autonomic target: flexibility' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 18.png', title: 'The autonomic goal: flexibility, not vagal dominance' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 19.png', title: 'The ascending pathway (bottom-up): informing interoception' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 20.png', title: 'The ROP session: stimulate, then allow integration' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 21_V2.png', title: 'The ROP Clinical Sequence: A Four-Level Progression' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 22_V2.png', title: 'The ROP clinical sequence: a four-level progression' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 23_V2.png', title: 'Level 1 — Regulation of Higher Centers' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 24.png', title: 'Level 2 — Autonomic regulation and adaptation' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 25.png', title: 'Level 3 — Locoregional Regulation' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 26.png', title: 'Level 4 — Visceral or functional target and integration' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 27.png', title: 'Fibromyalgia and Allostatic Load' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 28.png', title: 'Research directions: measuring recovery kinetics' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 29.png', title: 'Stress Mechanism: Neurological Response (SAM)' },
  { src: '/chapter-5/EN/Images/NCH 5 EN IMG 30.png', title: 'Stress mechanism: hormonal axis (HPA)' },
]

// German deck — same slides, translated. Slides 12/13 reuse the base figure
// images (translated figure artwork to follow). Anchors are shared.
export const chapter5SlidesDe: SyncSlide[] = [
  { src: '/chapter-5/slides/de/slide-01.jpg', title: 'Das vitale Gleichgewicht: Homöostase und Allostase' },
  { src: '/chapter-5/slides/de/slide-02.jpg', title: 'Der Stressmechanismus: Stabilität im Wandel' },
  { src: '/chapter-5/slides/de/slide-03.jpg', title: 'Doppelgesichtigkeit des Stresses: Distress vs. Eustress' },
  { src: '/chapter-5/slides/de/slide-04.jpg', title: 'Die Trilogie der Stressoren und der kumulative Effekt' },
  { src: '/chapter-5/slides/de/slide-05.jpg', title: 'Das allgemeine Adaptationssyndrom (AAS)' },
  { src: '/chapter-5/slides/de/slide-06.jpg', title: 'Alarmphase: Matrix der physiologischen Reaktion' },
  { src: '/chapter-5/slides/de/slide-07.jpg', title: 'Der Kipppunkt: limbisches Gehirn und Hypothalamus' },
  { src: '/chapter-5/slides/de/slide-08.jpg', title: 'Phase 2: Erholung und Vulnerabilität' },
  { src: '/chapter-5/slides/de/slide-09.jpg', title: 'Phase 3: Adaptation-Resistenz' },
  { src: '/chapter-5/slides/de/slide-10.jpg', title: 'Die Erschöpfung: vom Fehlfunktionieren zur Chronizität' },
  { src: '/chapter-5/slides/de/slide-11.jpg', title: '„Wir sind krank, weil wir die Gesundheit verlieren, und nicht umgekehrt.“' },
  { src: '/chapter-5/figure-5-13.png', title: 'Kraniales und zervikales Gebiet des Nervus vagus X' },
  { src: '/chapter-5/figure-5-16.png', title: 'Linkes abdominelles Gebiet des Nervus vagus X' },
]

// Spanish deck — same slides, translated.
export const chapter5SlidesEs: SyncSlide[] = [
  { src: '/chapter-5/slides/es/slide-01.jpg', title: 'El equilibrio vital: homeostasis y alostasis' },
  { src: '/chapter-5/slides/es/slide-02.jpg', title: 'El mecanismo del estrés: estabilidad en el cambio' },
  { src: '/chapter-5/slides/es/slide-03.jpg', title: 'Dualidad del estrés: distrés vs. eustrés' },
  { src: '/chapter-5/slides/es/slide-04.jpg', title: 'La trilogía de los estresores y el efecto acumulativo' },
  { src: '/chapter-5/slides/es/slide-05.jpg', title: 'El síndrome general de adaptación (SGA)' },
  { src: '/chapter-5/slides/es/slide-06.jpg', title: 'Fase de alarma: matriz de respuesta fisiológica' },
  { src: '/chapter-5/slides/es/slide-07.jpg', title: 'El punto de inflexión: cerebro límbico e hipotálamo' },
  { src: '/chapter-5/slides/es/slide-08.jpg', title: 'Fase 2: recuperación y vulnerabilidad' },
  { src: '/chapter-5/slides/es/slide-09.jpg', title: 'Fase 3: adaptación-resistencia' },
  { src: '/chapter-5/slides/es/slide-10.jpg', title: 'El agotamiento: del disfuncionamiento a la cronicidad' },
  { src: '/chapter-5/slides/es/slide-11.jpg', title: '«Somos enfermos porque perdemos la salud, y no al revés.»' },
  { src: '/chapter-5/figure-5-13.png', title: 'Territorios craneal y cervical del nervio vago X' },
  { src: '/chapter-5/figure-5-16.png', title: 'Territorio abdominal izquierdo del nervio vago X' },
]

// Italian deck — same slides, translated. (Slide 4 of the source PDF still
// shows Spanish text — a translation slip in the deck, flagged to the author.)
export const chapter5SlidesIt: SyncSlide[] = [
  { src: '/chapter-5/slides/it/slide-01.jpg', title: 'L’equilibrio vitale: omeostasi e allostasi' },
  { src: '/chapter-5/slides/it/slide-02.jpg', title: 'Il meccanismo dello stress: stabilità nel cambiamento' },
  { src: '/chapter-5/slides/it/slide-03.jpg', title: 'Dualità dello stress: distress vs. eustress' },
  { src: '/chapter-5/slides/it/slide-04.jpg', title: 'La trilogia degli stressori e l’effetto cumulativo' },
  { src: '/chapter-5/slides/it/slide-05.jpg', title: 'La sindrome generale di adattamento (SGA)' },
  { src: '/chapter-5/slides/it/slide-06.jpg', title: 'Fase di allarme: matrice di risposta fisiologica' },
  { src: '/chapter-5/slides/it/slide-07.jpg', title: 'Il punto di bilanciamento: cervello limbico e ipotalamo' },
  { src: '/chapter-5/slides/it/slide-08.jpg', title: 'Fase 2: recupero e vulnerabilità' },
  { src: '/chapter-5/slides/it/slide-09.jpg', title: 'Fase 3: adattamento-resistenza' },
  { src: '/chapter-5/slides/it/slide-10.jpg', title: 'L’esaurimento: dal malfunzionamento alla cronicità' },
  { src: '/chapter-5/slides/it/slide-11.jpg', title: '«Siamo malati perché perdiamo la salute, non il contrario.»' },
  { src: '/chapter-5/figure-5-13.png', title: 'Territori cranico e cervicale del nervo vago X' },
  { src: '/chapter-5/figure-5-16.png', title: 'Territorio addominale sinistro del nervo vago X' },
]

// blockIndex -1 anchors a slide to the section heading itself: the marker is
// rendered just above the <h2> instead of inside a content block.
export const chapter5SlideAnchorsFr: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0,  slide: 1,  end: { sectionId: 'definitions', blockIndex: 0 } },
  { sectionId: 'definitions',  blockIndex: 0,  slide: 2,  end: { sectionId: 'definitions', blockIndex: 2 } },
  { sectionId: 'definitions',  blockIndex: 2,  slide: 3,  end: { sectionId: 'stresseurs', blockIndex: 2 } },
  { sectionId: 'stresseurs',   blockIndex: 2,  slide: 4,  end: { sectionId: 'stresseurs', blockIndex: 5 } },
  { sectionId: 'stresseurs',   blockIndex: 5,  slide: 5,  end: { sectionId: 'sga', blockIndex: 0 } },
  { sectionId: 'sga',          blockIndex: 0,  slide: 6,  end: { sectionId: 'sga', blockIndex: 3 } },
  { sectionId: 'sga',          blockIndex: 3,  slide: 7,  end: { sectionId: 'sga', blockIndex: 6 } },
  { sectionId: 'sga',          blockIndex: 6,  slide: 8,  end: { sectionId: 'sga', blockIndex: 7 } },
  { sectionId: 'sga',          blockIndex: 7,  slide: 9,  end: { sectionId: 'sga', blockIndex: 10 } },
  { sectionId: 'sga',          blockIndex: 10, slide: 10, end: { sectionId: 'sga', blockIndex: 13 } },
  { sectionId: 'sga',          blockIndex: 13, slide: 11, end: { sectionId: 'sga', blockIndex: 18 } },
  { sectionId: 'sga',          blockIndex: 18, slide: 12, end: { sectionId: 'sga', blockIndex: 20 } },
  { sectionId: 'sga',          blockIndex: 20, slide: 13, end: { sectionId: 'sga', blockIndex: 33 } },
  { sectionId: 'sga',          blockIndex: 33, slide: 14, end: { sectionId: 'sga', blockIndex: 40 } },
  { sectionId: 'sga',          blockIndex: 40, slide: 15, end: { sectionId: 'rop-stress', blockIndex: -1 } },
  { sectionId: 'rop-stress',   blockIndex: -1, slide: 16, end: { sectionId: 'rop-stress', blockIndex: 4 } },
  { sectionId: 'rop-stress',   blockIndex: 4,  slide: 17, gapBefore: 'half', end: { sectionId: 'rop-stress', blockIndex: 5 } },
  { sectionId: 'rop-stress',   blockIndex: 5,  slide: 18, end: { sectionId: 'rop-stress', blockIndex: 7 } },
  { sectionId: 'rop-stress',   blockIndex: 7,  slide: 19, end: { sectionId: 'rop-stress', blockIndex: 8 } },
  { sectionId: 'rop-stress',   blockIndex: 8,  slide: 20, end: { sectionId: 'rop-stress', blockIndex: 9 } },
  { sectionId: 'rop-stress',   blockIndex: 9,  slide: 21, end: { sectionId: 'rop-stress', blockIndex: 11 } },
  { sectionId: 'rop-stress',   blockIndex: 11, slide: 22, end: { sectionId: 'rop-stress', blockIndex: 13 } },
  { sectionId: 'rop-stress',   blockIndex: 13, slide: 23, end: { sectionId: 'rop-stress', blockIndex: 14 } },
  { sectionId: 'rop-stress',   blockIndex: 14, slide: 24, end: { sectionId: 'rop-stress', blockIndex: 16 } },
  { sectionId: 'rop-stress',   blockIndex: 16, slide: 25, end: { sectionId: 'rop-stress', blockIndex: 18 } },
  { sectionId: 'rop-stress',   blockIndex: 18, slide: 26, end: { sectionId: 'rop-stress', blockIndex: 19 } },
]

export const chapter5SlideAnchorsLegacy: SyncAnchor[] = [
  { sectionId: 'definitions', blockIndex: 0,  slide: 1 },
  { sectionId: 'definitions', blockIndex: 2,  slide: 2 },
  { sectionId: 'stresseurs',  blockIndex: 2,  slide: 3 },
  { sectionId: 'stresseurs',  blockIndex: 6,  slide: 4 },
  { sectionId: 'sga',         blockIndex: 0,  slide: 5 },
  { sectionId: 'sga',         blockIndex: 3,  slide: 6 },
  { sectionId: 'sga',         blockIndex: 5,  slide: 7 },
  { sectionId: 'sga',         blockIndex: 15, slide: 8 },
  { sectionId: 'sga',         blockIndex: 20, slide: 9 },
  { sectionId: 'sga',         blockIndex: 35, slide: 10 },
  { sectionId: 'rop-stress',  blockIndex: -1, slide: 11 },
  { sectionId: 'rop-stress',  blockIndex: 2,  slide: 12 },
  { sectionId: 'rop-stress',  blockIndex: 7,  slide: 13 },
]

export const chapter5SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'le-stress-une-reponse-d-adaptation', blockIndex: -1, slide: 1 },
  { sectionId: 'de-l-homeostasie-a-l-allostasie', blockIndex: -1, slide: 2 },
  { sectionId: 'de-l-homeostasie-a-l-allostasie', blockIndex: 5, slide: 3 },
  { sectionId: 'la-trilogie-des-stresseurs', blockIndex: -1, slide: 4 },
  { sectionId: 'le-stress-n-est-pas-seulement-l-evenement-c-est-la-reponse', blockIndex: -1, slide: 5 },
  { sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: -1, slide: 6 },
  { sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 0, slide: 29 },
  { sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 3, slide: 30 },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: -1, slide: 7 },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 3, slide: 8 },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 6, slide: 9 },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 9, slide: 10 },
  { sectionId: 'le-veritable-cout-du-stress-l-absence-de-recuperation', blockIndex: -1, slide: 11 },
  { sectionId: 'le-veritable-cout-du-stress-l-absence-de-recuperation', blockIndex: 1, slide: 12 },
  { sectionId: 'le-cout-de-regulation-une-mobilisation-active-pas-une-batterie-qui-se-vide', blockIndex: -1, slide: 13 },
  { sectionId: 'le-cout-de-regulation-une-mobilisation-active-pas-une-batterie-qui-se-vide', blockIndex: 2, slide: 14 },
  { sectionId: 'a-l-echelle-cellulaire-le-prix-de-la-compensation', blockIndex: -1, slide: 15 },
  { sectionId: 'le-modele-du-seuil-trouble-fonctionnel-et-alteration-structurelle', blockIndex: -1, slide: 16 },
  { sectionId: 'la-cible-autonome-la-flexibilite-non-la-domination-vagale', blockIndex: -1, slide: 17 },
  { sectionId: 'la-cible-autonome-la-flexibilite-non-la-domination-vagale', blockIndex: 1, slide: 18 },
  { sectionId: 'le-pont-avec-la-rop-agir-sur-la-reponse-non-sur-l-existence-du-stresseur', blockIndex: -1, slide: 19 },
  { sectionId: 'la-seance-rop-stimuler-puis-laisser-integrer', blockIndex: -1, slide: 20 },
  { sectionId: 'les-quatre-niveaux-rop-appliques-au-stress', blockIndex: -1, slide: 21 },
  { sectionId: 'les-quatre-niveaux-rop-appliques-au-stress', blockIndex: 0, slide: 22 },
  { sectionId: 'les-quatre-niveaux-rop-appliques-au-stress', blockIndex: 2, slide: 23 },
  { sectionId: 'les-quatre-niveaux-rop-appliques-au-stress', blockIndex: 2, slide: 24 },
  { sectionId: 'les-quatre-niveaux-rop-appliques-au-stress', blockIndex: 2, slide: 25 },
  { sectionId: 'les-quatre-niveaux-rop-appliques-au-stress', blockIndex: 2, slide: 26 },
  { sectionId: 'illustration-clinique-fibromyalgie-et-charge-allostatique', blockIndex: -1, slide: 27 },
  { sectionId: 'vers-une-recherche-sur-la-cinetique-de-recuperation', blockIndex: -1, slide: 28 },
]

export const chapter5SlideAnchors = chapter5SlideAnchorsFr

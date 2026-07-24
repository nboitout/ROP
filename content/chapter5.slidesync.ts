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

// English deck — same slides, translated. The text↔slide anchors are shared
// (chapter5SlideAnchors): the EN content mirrors the FR block structure.
export const chapter5SlidesEn: SyncSlide[] = [
  { src: '/chapter-5/slides/en/slide-01.jpg', title: 'Vital balance: homeostasis and allostasis' },
  { src: '/chapter-5/slides/en/slide-02.jpg', title: 'The stress mechanism: stability in change' },
  { src: '/chapter-5/slides/en/slide-03.jpg', title: 'Duality of stress: distress vs. eustress' },
  { src: '/chapter-5/slides/en/slide-04.jpg', title: 'The trilogy of stressors and the cumulative effect' },
  { src: '/chapter-5/slides/en/slide-05.jpg', title: 'The general adaptation syndrome (GAS)' },
  { src: '/chapter-5/slides/en/slide-06.jpg', title: 'Alarm phase: physiological response matrix' },
  { src: '/chapter-5/slides/en/slide-07.jpg', title: 'The tipping point: limbic brain and hypothalamus' },
  { src: '/chapter-5/slides/en/slide-08.jpg', title: 'Phase 2: recovery and vulnerability' },
  { src: '/chapter-5/slides/en/slide-09.jpg', title: 'Phase 3: adaptation-resistance' },
  { src: '/chapter-5/slides/en/slide-10.jpg', title: 'Exhaustion: from dysfunction to chronicity' },
  { src: '/chapter-5/slides/en/slide-11.jpg', title: '“We are ill because we lose our health, not the other way around.”' },
  { src: '/chapter-5/figure-5-13.en.png', title: 'Cranial and cervical territories of the Vagus nerve X' },
  { src: '/chapter-5/figure-5-16.en.png', title: 'Left abdominal territory of the Vagus nerve X' },
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

export const chapter5SlideAnchors = chapter5SlideAnchorsFr

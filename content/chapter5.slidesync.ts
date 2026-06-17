// Chapter 5 — slide ↔ text synchronisation map for the combined reading
// experience prototype (/lecture/chapitre-5).
//
// The slide order and their position in the text come from Guy's source
// document "Chapitre 5 Mécanisme de Stress (test of new reader experience)",
// where each slide of the synthesis deck is embedded at the exact point of
// the text it illustrates. Slide images are pre-rendered pages of
// public/chapter-5/synthese.pdf.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }

// blockIndex refers to the position in chapter5Fr sections[].blocks[].
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter5Slides: SyncSlide[] = [
  { src: '/chapter-5/slides/slide-01.jpg', title: 'L’équilibre vital : homéostasie et allostasie' },
  { src: '/chapter-5/slides/slide-02.jpg', title: 'Stabilité dans le changement' },
  { src: '/chapter-5/slides/slide-03.jpg', title: 'Dualité du stress : distress vs eustress' },
  { src: '/chapter-5/slides/slide-04.jpg', title: 'La trilogie des stresseurs et l’effet cumulatif' },
  { src: '/chapter-5/slides/slide-05.jpg', title: 'Le syndrome général d’adaptation (SGA)' },
  { src: '/chapter-5/slides/slide-06.jpg', title: 'Phase d’alarme : matrice de réponse physiologique' },
  { src: '/chapter-5/slides/slide-07.jpg', title: 'Le point de bascule : cerveau limbique et hypothalamus' },
  { src: '/chapter-5/slides/slide-08.jpg', title: 'Phase 2 : recouvrement et vulnérabilité' },
  { src: '/chapter-5/slides/slide-09.jpg', title: 'Phase 3 : adaptation-résistance' },
  { src: '/chapter-5/slides/slide-10.jpg', title: 'L’épuisement : du dysfonctionnement à la chronicité' },
  { src: '/chapter-5/slides/slide-11.jpg', title: '« Nous sommes malades parce que nous perdons la santé »' },
  // Slide 12 reuses figure 5.13 (moved out of the inline text into the deck).
  { src: '/chapter-5/figure-5-13.png', title: 'Territoires crânien et cervical du nerf Vague X' },
  // Slide 13 reuses figure 5.16 (moved out of the inline text into the deck).
  { src: '/chapter-5/figure-5-16.png', title: 'Territoire abdominal gauche du nerf Vague X' },
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
export const chapter5SlideAnchors: SyncAnchor[] = [
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
  // Just after the figure 5.15 caption (figure 5.17 is the next block).
  { sectionId: 'rop-stress',  blockIndex: 7,  slide: 13 },
]

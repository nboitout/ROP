// Chapter 14 — slide ↔ text synchronisation map for the combined reading
// experience (/lecture/chapitre-14).
//
// Slide images are the pre-rendered pages of public/chapter-14/synthese.pdf.
// Each slide of the synthesis deck is anchored to the passage of the text it
// best illustrates. The deck is a thematic synthesis, so a few slides do not
// follow the strict linear order of the chapter (e.g. the emotional-profile
// slide is anchored to the "Relations viscéro-émotionnelles" section, which
// comes after the ROP section in the text).

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }

// blockIndex refers to the position in chapter14Fr sections[].blocks[].
// blockIndex -1 anchors a slide to the section heading itself (the marker is
// rendered just above the <h2> instead of inside a content block).
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number }

export const chapter14Slides: SyncSlide[] = [
  { src: '/chapter-14/slides/slide-01.jpg', title: 'L’intestin grêle : anatomie, écosystème et approche ROP' },
  { src: '/chapter-14/slides/slide-02.jpg', title: 'Topographie et disposition intra-abdominale' },
  { src: '/chapter-14/slides/slide-03.jpg', title: 'L’ancrage mécanique : mésentère et muscle de Treitz' },
  { src: '/chapter-14/slides/slide-04.jpg', title: 'L’axe de l’irrigation et du drainage : tronc mésentérique supérieur' },
  { src: '/chapter-14/slides/slide-05.jpg', title: 'La double réalité neurologique du péritoine' },
  { src: '/chapter-14/slides/slide-06.jpg', title: 'Le deuxième cerveau : autonomie du système nerveux entérique' },
  { src: '/chapter-14/slides/slide-07.jpg', title: 'Le deuxième cerveau : système nerveux entérique' },
  { src: '/chapter-14/slides/slide-08.jpg', title: 'L’écosystème intestinal : le trépied de la santé digestive' },
  { src: '/chapter-14/slides/slide-09.jpg', title: 'La double voie d’absorption micronutritionnelle' },
  { src: '/chapter-14/slides/slide-10.jpg', title: 'La spirale : dysbiose et hyperperméabilité' },
  { src: '/chapter-14/slides/slide-11.jpg', title: 'Pathologie I : l’hyperperméabilité intestinale (leaky gut)' },
  { src: '/chapter-14/slides/slide-12.jpg', title: 'Pathologie II : la dysbiose et ses manifestations' },
  { src: '/chapter-14/slides/slide-13.jpg', title: 'Signes d’alerte et diagnostic d’exclusion' },
  { src: '/chapter-14/slides/slide-14.jpg', title: 'Profil viscéro-émotionnel : la personne intestin' },
  { src: '/chapter-14/slides/slide-17.jpg', title: 'Synthèse d’intervention ROP : protocole intestin grêle' },
  { src: '/chapter-14/slides/Chapter14 FigCrohn FR.png', title: 'Cas clinique — maladie de Crohn et spondylarthrite' },
]

// English deck — same slides, translated. The text↔slide anchors are shared
// (chapter14SlideAnchors): the EN content mirrors the FR block structure.
export const chapter14SlidesEn: SyncSlide[] = [
  { src: '/chapter-14/slides/en/slide-01.jpg', title: 'The small intestine: anatomy, ecosystem and ROP approach' },
  { src: '/chapter-14/slides/en/slide-02.jpg', title: 'Topography and intra-abdominal arrangement' },
  { src: '/chapter-14/slides/en/slide-03.jpg', title: 'Mechanical anchoring: mesentery and Treitz muscle' },
  { src: '/chapter-14/slides/en/slide-04.jpg', title: 'The axis of irrigation and drainage: superior mesenteric trunk' },
  { src: '/chapter-14/slides/en/slide-05.jpg', title: 'The double neurological reality of the peritoneum' },
  { src: '/chapter-14/slides/en/slide-06.jpg', title: 'The second brain: autonomy of the enteric nervous system' },
  { src: '/chapter-14/slides/en/slide-07.jpg', title: 'The second brain: enteric nervous system' },
  { src: '/chapter-14/slides/en/slide-08.jpg', title: 'The intestinal ecosystem: the tripod of digestive health' },
  { src: '/chapter-14/slides/en/slide-09.jpg', title: 'The dual pathway of micronutrient absorption' },
  { src: '/chapter-14/slides/en/slide-10.jpg', title: 'The spiral: dysbiosis and hyperpermeability' },
  { src: '/chapter-14/slides/en/slide-11.jpg', title: 'Pathology I: intestinal hyperpermeability (leaky gut)' },
  { src: '/chapter-14/slides/en/slide-12.jpg', title: 'Pathology II: dysbiosis and its manifestations' },
  { src: '/chapter-14/slides/en/slide-13.jpg', title: 'Warning signs and diagnosis of exclusion' },
  { src: '/chapter-14/slides/en/slide-14.jpg', title: 'Viscero-emotional profile: the intestine person' },
  { src: '/chapter-14/slides/en/slide-17.jpg', title: 'ROP intervention summary: small intestine protocol' },
  { src: '/chapter-14/slides/en/Chapter14 FigCrohn EN.png', title: 'Clinical case — Crohn’s disease and spondyloarthritis' },
]

// German deck — same slides, translated. Anchors are shared.
// (Deck note: slide 10's inner labels are still in English in the source PDF.)
export const chapter14SlidesDe: SyncSlide[] = [
  { src: '/chapter-14/slides/de/slide-01.jpg', title: 'Der Dünndarm: Anatomie, Ökosystem und ROP-Ansatz' },
  { src: '/chapter-14/slides/de/slide-02.jpg', title: 'Topographie und intraabdominale Anordnung' },
  { src: '/chapter-14/slides/de/slide-03.jpg', title: 'Die mechanische Verankerung: Mesenterium und Treitz-Muskel' },
  { src: '/chapter-14/slides/de/slide-04.jpg', title: 'Die Achse der Versorgung und des Abflusses: oberer Mesenterialstamm' },
  { src: '/chapter-14/slides/de/slide-05.jpg', title: 'Die doppelte neurologische Realität des Peritoneums' },
  { src: '/chapter-14/slides/de/slide-06.jpg', title: 'Das zweite Gehirn: Autonomie des enterischen Nervensystems (ENS)' },
  { src: '/chapter-14/slides/de/slide-07.jpg', title: 'Das „zweite Gehirn“: enterisches Nervensystem' },
  { src: '/chapter-14/slides/de/slide-08.jpg', title: 'Das intestinale Ökosystem: das Dreibein der Verdauungsgesundheit' },
  { src: '/chapter-14/slides/de/slide-09.jpg', title: 'Der doppelte Weg der Mikronährstoffabsorption' },
  { src: '/chapter-14/slides/de/slide-10.jpg', title: 'Die Spirale: Dysbiose und Hyperpermeabilität' },
  { src: '/chapter-14/slides/de/slide-11.jpg', title: 'Pathologie I: erhöhte intestinale Permeabilität (Leaky Gut)' },
  { src: '/chapter-14/slides/de/slide-12.jpg', title: 'Pathologie II: die Dysbiose und ihre Manifestationen' },
  { src: '/chapter-14/slides/de/slide-13.jpg', title: 'Warnzeichen und Ausschlussdiagnostik' },
  { src: '/chapter-14/slides/de/slide-14.jpg', title: 'Viszero-emotionales Profil: die Person mit ROP' },
  { src: '/chapter-14/slides/de/slide-17.jpg', title: 'Synthese der ROP-Intervention: Darm-Protokoll' },
  { src: '/chapter-14/slides/de/Chapter14 FigCrohn GE.png', title: 'Klinischer Fall — Morbus Crohn und Spondyloarthritis' },
]

// Spanish deck — same slides, translated. Anchors are shared.
export const chapter14SlidesEs: SyncSlide[] = [
  { src: '/chapter-14/slides/es/slide-01.jpg', title: 'El intestino delgado: anatomía, ecosistema y enfoque ROP' },
  { src: '/chapter-14/slides/es/slide-02.jpg', title: 'Topografía y disposición intraabdominal' },
  { src: '/chapter-14/slides/es/slide-03.jpg', title: 'El anclaje mecánico: mesenterio y músculo de Treitz' },
  { src: '/chapter-14/slides/es/slide-04.jpg', title: 'El eje de la irrigación y el drenaje: tronco mesentérico superior' },
  { src: '/chapter-14/slides/es/slide-05.jpg', title: 'La doble realidad neurológica del peritoneo' },
  { src: '/chapter-14/slides/es/slide-06.jpg', title: 'El segundo cerebro: autonomía del sistema nervioso entérico (SNE)' },
  { src: '/chapter-14/slides/es/slide-07.jpg', title: 'El segundo cerebro: sistema nervioso entérico' },
  { src: '/chapter-14/slides/es/slide-08.jpg', title: 'El ecosistema intestinal: el trípode de la salud digestiva' },
  { src: '/chapter-14/slides/es/slide-09.jpg', title: 'La doble vía de absorción de micronutrientes' },
  { src: '/chapter-14/slides/es/slide-10.jpg', title: 'La espiral: disbiosis e hiperpermeabilidad' },
  { src: '/chapter-14/slides/es/slide-11.jpg', title: 'Patología I: hiperpermeabilidad intestinal (leaky gut)' },
  { src: '/chapter-14/slides/es/slide-12.jpg', title: 'Patología II: la disbiosis y sus manifestaciones' },
  { src: '/chapter-14/slides/es/slide-13.jpg', title: 'Signos de alerta y diagnóstico de exclusión' },
  { src: '/chapter-14/slides/es/slide-14.jpg', title: 'Perfil viscero-emocional: la persona intestino' },
  { src: '/chapter-14/slides/es/slide-17.jpg', title: 'Síntesis de intervención ROP: protocolo intestino delgado' },
  { src: '/chapter-14/slides/es/Chapter14 FigCrohn ES.png', title: 'Caso clínico — enfermedad de Crohn y espondiloartritis' },
]

// Italian deck — same slides, translated. Anchors are shared.
// (Deck note: the source PDF says "intestino crasso" (large intestine) where it
// should read "intestino tenue" (small intestine) — titles mirror the deck.)
export const chapter14SlidesIt: SyncSlide[] = [
  { src: '/chapter-14/slides/it/slide-01.jpg', title: 'L’intestino crasso: anatomia, ecosistema e approccio ROP' },
  { src: '/chapter-14/slides/it/slide-02.jpg', title: 'Topografia e disposizione intra-addominale' },
  { src: '/chapter-14/slides/it/slide-03.jpg', title: 'L’ancoraggio meccanico: mesentere e muscolo di Treitz' },
  { src: '/chapter-14/slides/it/slide-04.jpg', title: 'L’asse dell’irrigazione e del drenaggio: tronco mesenterico superiore' },
  { src: '/chapter-14/slides/it/slide-05.jpg', title: 'La doppia realtà neurologica del peritoneo' },
  { src: '/chapter-14/slides/it/slide-06.jpg', title: 'Il secondo cervello: autonomia del sistema nervoso enterico (SNE)' },
  { src: '/chapter-14/slides/it/slide-07.jpg', title: 'Il secondo cervello: sistema nervoso enterico' },
  { src: '/chapter-14/slides/it/slide-08.jpg', title: 'L’ecosistema intestinale: il treppiede della salute digestiva' },
  { src: '/chapter-14/slides/it/slide-09.jpg', title: 'La doppia via di assorbimento dei micronutrienti' },
  { src: '/chapter-14/slides/it/slide-10.jpg', title: 'La spirale: disbiosi e iperpermeabilità' },
  { src: '/chapter-14/slides/it/slide-11.jpg', title: 'Patologia I: iperpermeabilità intestinale (leaky gut)' },
  { src: '/chapter-14/slides/it/slide-12.jpg', title: 'Patologia II: la disbiosi e le sue manifestazioni' },
  { src: '/chapter-14/slides/it/slide-13.jpg', title: 'Segnali d’allarme e diagnosi di esclusione' },
  { src: '/chapter-14/slides/it/slide-14.jpg', title: 'Profilo viscerale-emotivo: la persona con ROP' },
  { src: '/chapter-14/slides/it/slide-17.jpg', title: 'Sintesi dell’intervento ROP: protocollo intestino crasso' },
  { src: '/chapter-14/slides/it/Chapter14 FigCrohn IT.png', title: 'Caso clinico — malattia di Crohn e spondiloartrite' },
]

export const chapter14SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation',   blockIndex: 0,  slide: 1 },
  // Slide 2 points to "Le jéjunum-iléum se distingue du duodénum par…".
  { sectionId: 'presentation',   blockIndex: 3,  slide: 2 },
  // Slide 3 points just before "Mésentère — c'est un méso…".
  { sectionId: 'anatomie',       blockIndex: 1,  slide: 3 },
  { sectionId: 'vascularisation', blockIndex: 1, slide: 4 },
  { sectionId: 'innervation',    blockIndex: 2,  slide: 5 },
  { sectionId: 'innervation',    blockIndex: 10, slide: 6 },
  { sectionId: 'innervation',    blockIndex: 12, slide: 7 },
  { sectionId: 'physiologie',    blockIndex: 5,  slide: 8 },
  { sectionId: 'physiologie',    blockIndex: 10, slide: 9 },
  { sectionId: 'pathologies',    blockIndex: 0,  slide: 10 },
  { sectionId: 'pathologies',    blockIndex: 1,  slide: 11 },
  { sectionId: 'pathologies',    blockIndex: 7,  slide: 12 },
  { sectionId: 'pathologies',    blockIndex: 11, slide: 13 },
  { sectionId: 'rop',            blockIndex: 13, slide: 15 },
  { sectionId: 'relations',      blockIndex: 2,  slide: 14 },
  // Crohn clinical-case slide, right after the "Maladie de Crohn" heading.
  { sectionId: 'pathologies',    blockIndex: 14, slide: 16 },
]

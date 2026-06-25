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
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

// French deck — re-rendered from the trimmed/reorganised synthese.pdf (16 pages,
// slides 1–16), followed by the supplementary anatomical figure-slides (17–22).
// Because the FR PDF was reorganised independently of EN/DE/ES/IT, the French
// deck uses its own anchor table (chapter14SlideAnchorsFr); the other four
// languages still share chapter14SlideAnchors until their PDFs are updated too.
export const chapter14Slides: SyncSlide[] = [
  { src: '/chapter-14/slides/fr-rework/slide-01.png', title: 'L’intestin grêle' },
  { src: '/chapter-14/slides/fr-rework/slide-02.png', title: 'Topographie : l’intestin grêle au sein du cadre colique' },
  { src: '/chapter-14/slides/fr-rework/slide-03.png', title: 'Le mésentère et sa mécanique de suspension' },
  { src: '/chapter-14/slides/fr-rework/slide-04.png', title: 'Suspension et mécanique intestinale' },
  { src: '/chapter-14/slides/fr-rework/slide-05.png', title: 'L’axe vasculaire et le système porte' },
  { src: '/chapter-14/slides/fr-rework/slide-06.png', title: 'Le réseau lymphatique et immunitaire' },
  { src: '/chapter-14/slides/fr-rework/slide-07.png', title: 'L’axe de l’irrigation et du drainage : tronc mésentérique supérieur' },
  { src: '/chapter-14/slides/fr-rework/slide-08.png', title: 'La double réalité neurologique du péritoine' },
  { src: '/chapter-14/slides/fr-rework/slide-09.png', title: 'Le deuxième cerveau : autonomie du système nerveux entérique (SNE)' },
  { src: '/chapter-14/slides/fr-rework/slide-10.png', title: 'Le deuxième cerveau : système nerveux entérique' },
  { src: '/chapter-14/slides/fr-rework/slide-11.png', title: 'L’écosystème intestinal : frontière biologique' },
  { src: '/chapter-14/slides/fr-rework/slide-12.png', title: 'La double voie d’absorption micronutritionnelle' },
  { src: '/chapter-14/slides/fr-rework/slide-14.png', title: 'La spirale : dysbiose et hyperperméabilité' },
  { src: '/chapter-14/slides/fr-rework/slide-15.png', title: 'Déséquilibre : hyperperméabilité et dysbiose' },
  { src: '/chapter-14/slides/fr-rework/slide-16.png', title: 'Les conséquences systémiques du terrain inflammatoire' },
  { src: '/chapter-14/slides/fr-rework/slide-17.png', title: 'Signes d’alerte et diagnostic d’exclusion' },
  { src: '/chapter-14/slides/fr-rework/slide-18.png', title: 'Protocole ROP : ordre de traitement' },
  { src: '/chapter-14/figure-14-15.png', title: 'Territoire crânien et cervical du nerf vague' },
  { src: '/chapter-14/figure-14-16.png', title: 'Territoire abdominal gauche du nerf vague et plexus cœliaque (solaire)' },
  { src: '/chapter-14/Chapter14 Fig19 FR.png', title: 'Système sympathique (origine médullaire)' },
  { src: '/chapter-14/Chapter14 Fig21 FR.png', title: 'Plexus cœliaque (solaire)' },
  { src: '/chapter-14/figure-14-25.png', title: 'Jéjunum (zone réflexe podale)' },
  { src: '/chapter-14/figure-14-27.png', title: 'Iléum et racine du mésentère (zone réflexe podale)' },
  { src: '/chapter-14/slides/fr-rework/slide-19.png', title: 'Synthèse d’intervention ROP : protocole intestin grêle' },
  { src: '/chapter-14/slides/fr-rework/slide-20.png', title: 'Profil viscéro-émotionnel : la personne intestin' },
]

// English deck — same slides, translated. The text↔slide anchors are shared
// (chapter14SlideAnchors): the EN content mirrors the FR block structure.
export const chapter14SlidesEn: SyncSlide[] = [
  { src: '/chapter-14/slides/en/slide-01.jpg', title: 'The small intestine: anatomy, ecosystem and ROP approach' },
  { src: '/chapter-14/slides/en/slide-02.jpg', title: 'Topography and intra-abdominal arrangement' },
  { src: '/chapter-14/en/figure-14-2.png', title: 'Mesos', orientation: 'portrait' },
  { src: '/chapter-14/en/figure-14-3.png', title: 'Root of the mesentery' },
  { src: '/chapter-14/en/figure-14-4.png', title: 'Suspensory muscle of the duodenum (muscle of Treitz)' },
  { src: '/chapter-14/en/figure-14-5.png', title: 'The axis of irrigation and drainage: superior mesenteric trunk', orientation: 'portrait' },
  { src: '/chapter-14/slides/en/slide-05.jpg', title: 'The double neurological reality of the peritoneum' },
  { src: '/chapter-14/slides/en/slide-06.jpg', title: 'The second brain: autonomy of the enteric nervous system' },
  { src: '/chapter-14/slides/en/slide-07.jpg', title: 'The second brain: enteric nervous system' },
  { src: '/chapter-14/slides/en/slide-08.jpg', title: 'The intestinal ecosystem: the tripod of digestive health' },
  { src: '/chapter-14/slides/en/slide-09.jpg', title: 'The dual pathway of micronutrient absorption' },
  { src: '/chapter-14/slides/en/slide-10.jpg', title: 'The spiral: dysbiosis and hyperpermeability' },
  { src: '/chapter-14/slides/en/slide-11.jpg', title: 'Pathology I: intestinal hyperpermeability (leaky gut)' },
  { src: '/chapter-14/slides/en/slide-12.jpg', title: 'Pathology II: dysbiosis and its manifestations' },
  { src: '/chapter-14/slides/en/slide-13.jpg', title: 'Warning signs and diagnosis of exclusion' },
  { src: '/chapter-14/slides/en/Chapter14 FigCrohn EN.png', title: 'Clinical case — Crohn’s disease and spondyloarthritis' },
  { src: '/chapter-14/slides/en/slide-14.jpg', title: 'ROP treatment protocol: order of management' },
  { src: '/chapter-14/en/figure-14-15 EN.png', title: 'Cranial and cervical territory of the vagus nerve' },
  { src: '/chapter-14/en/figure-14-16.png', title: 'Left abdominal territory of the vagus nerve and coeliac (solar) plexus' },
  { src: '/chapter-14/en/Chapter14 Fig19 EN.png', title: 'Sympathetic system (spinal origin)' },
  { src: '/chapter-14/en/figure-14-25.png', title: 'Jejunum (foot reflex zone)' },
  { src: '/chapter-14/en/figure-14-27.png', title: 'Ileum and root of the mesentery (foot reflex zone)' },
  { src: '/chapter-14/slides/en/slide-15.jpg', title: 'ROP intervention summary: small intestine protocol' },
  { src: '/chapter-14/slides/en/slide-16.jpg', title: 'Viscero-emotional profile: the intestine person' },
]

// German deck — same slides, translated. Anchors are shared.
// (Deck note: slide 10's inner labels are still in English in the source PDF.)
export const chapter14SlidesDe: SyncSlide[] = [
  { src: '/chapter-14/slides/de/slide-01.jpg', title: 'Der Dünndarm: Anatomie, Ökosystem und ROP-Ansatz' },
  { src: '/chapter-14/slides/de/slide-02.jpg', title: 'Topographie und intraabdominale Anordnung' },
  { src: '/chapter-14/ge/Chapter14 Fig2 GE.png', title: 'Mesos', orientation: 'portrait' },
  { src: '/chapter-14/ge/Chapter14 Fig3 GE.png', title: 'Mesenterialwurzel' },
  { src: '/chapter-14/ge/Chapter14 Fig4 GE.png', title: 'Treitz-Muskel' },
  { src: '/chapter-14/ge/Chapter14 Fig5 GE.png', title: 'Die Achse der Versorgung und des Abflusses: oberer Mesenterialstamm', orientation: 'portrait' },
  { src: '/chapter-14/slides/de/slide-05.jpg', title: 'Die doppelte neurologische Realität des Peritoneums' },
  { src: '/chapter-14/slides/de/slide-06.jpg', title: 'Das zweite Gehirn: Autonomie des enterischen Nervensystems (ENS)' },
  { src: '/chapter-14/slides/de/slide-07.jpg', title: 'Das „zweite Gehirn“: enterisches Nervensystem' },
  { src: '/chapter-14/slides/de/slide-08.jpg', title: 'Das intestinale Ökosystem: das Dreibein der Verdauungsgesundheit' },
  { src: '/chapter-14/slides/de/slide-09.jpg', title: 'Der doppelte Weg der Mikronährstoffabsorption' },
  { src: '/chapter-14/slides/de/slide-10.jpg', title: 'Die Spirale: Dysbiose und Hyperpermeabilität' },
  { src: '/chapter-14/slides/de/slide-11.jpg', title: 'Pathologie I: erhöhte intestinale Permeabilität (Leaky Gut)' },
  { src: '/chapter-14/slides/de/slide-12.jpg', title: 'Pathologie II: die Dysbiose und ihre Manifestationen' },
  { src: '/chapter-14/slides/de/slide-13.jpg', title: 'Warnzeichen und Ausschlussdiagnostik' },
  { src: '/chapter-14/slides/de/Chapter14 FigCrohn GE.png', title: 'Klinischer Fall — Morbus Crohn und Spondyloarthritis' },
  { src: '/chapter-14/slides/de/slide-14.jpg', title: 'ROP-Behandlungsprotokoll: Reihenfolge der Behandlung' },
  { src: '/chapter-14/ge/figure-14-15 GE.png', title: 'Kranialer und zervikaler Bereich des Vagusnervs' },
  { src: '/chapter-14/ge/Chapter14 Fig16 GE.png', title: 'Linker abdominaler Bereich des Vagusnervs und Plexus coeliacus (Solarplexus)' },
  { src: '/chapter-14/ge/Chapter14 Fig19 GE.png', title: 'Sympathisches System (spinaler Ursprung)' },
  { src: '/chapter-14/ge/Chapter14 Fig25 GE.png', title: 'Jejunum (podale Reflexzone)' },
  { src: '/chapter-14/ge/Chapter14 Fig27 GE.png', title: 'Ileum und Mesenterialwurzel (podale Reflexzone)' },
  { src: '/chapter-14/slides/de/slide-15.jpg', title: 'Synthese der ROP-Intervention: Dünndarm-Protokoll' },
  { src: '/chapter-14/slides/de/slide-16.jpg', title: 'Viszero-emotionales Profil: die Person mit ROP' },
]

// Spanish deck — same slides, translated. Anchors are shared.
export const chapter14SlidesEs: SyncSlide[] = [
  { src: '/chapter-14/slides/es/slide-01.jpg', title: 'El intestino delgado: anatomía, ecosistema y enfoque ROP' },
  { src: '/chapter-14/slides/es/slide-02.jpg', title: 'Topografía y disposición intraabdominal' },
  { src: '/chapter-14/es/Chapter14 Fig2 ES.png', title: 'Mesos', orientation: 'portrait' },
  { src: '/chapter-14/es/Chapter14 Fig3 ES.png', title: 'Raíz del mesenterio' },
  { src: '/chapter-14/es/Chapter14 Fig4 ES.png', title: 'Músculo de Treitz' },
  { src: '/chapter-14/es/Chapter14 Fig5 ES.png', title: 'El eje de la irrigación y el drenaje: tronco mesentérico superior', orientation: 'portrait' },
  { src: '/chapter-14/slides/es/slide-05.jpg', title: 'La doble realidad neurológica del peritoneo' },
  { src: '/chapter-14/slides/es/slide-06.jpg', title: 'El segundo cerebro: autonomía del sistema nervioso entérico (SNE)' },
  { src: '/chapter-14/slides/es/slide-07.jpg', title: 'El segundo cerebro: sistema nervioso entérico' },
  { src: '/chapter-14/slides/es/slide-08.jpg', title: 'El ecosistema intestinal: el trípode de la salud digestiva' },
  { src: '/chapter-14/slides/es/slide-09.jpg', title: 'La doble vía de absorción de micronutrientes' },
  { src: '/chapter-14/slides/es/slide-10.jpg', title: 'La espiral: disbiosis e hiperpermeabilidad' },
  { src: '/chapter-14/slides/es/slide-11.jpg', title: 'Patología I: hiperpermeabilidad intestinal (leaky gut)' },
  { src: '/chapter-14/slides/es/slide-12.jpg', title: 'Patología II: la disbiosis y sus manifestaciones' },
  { src: '/chapter-14/slides/es/slide-13.jpg', title: 'Signos de alerta y diagnóstico de exclusión' },
  { src: '/chapter-14/slides/es/Chapter14 FigCrohn ES.png', title: 'Caso clínico — enfermedad de Crohn y espondiloartritis' },
  { src: '/chapter-14/slides/es/slide-14.jpg', title: 'Protocolo de tratamiento ROP: orden de tratamiento' },
  { src: '/chapter-14/es/figure-14-15 ES.png', title: 'Territorio craneal y cervical del nervio vago' },
  { src: '/chapter-14/es/Chapter14 Fig16 ES.png', title: 'Territorio abdominal izquierdo del nervio vago y plexo celíaco (solar)' },
  { src: '/chapter-14/es/Chapter14 Fig19 ES.png', title: 'Sistema simpático (origen medular)' },
  { src: '/chapter-14/figure-14-25.png', title: 'Yeyuno (zona refleja podal)' },
  { src: '/chapter-14/figure-14-27.png', title: 'Íleon y raíz del mesenterio (zona refleja podal)' },
  { src: '/chapter-14/slides/es/slide-15.jpg', title: 'Síntesis de intervención ROP: protocolo intestino delgado' },
  { src: '/chapter-14/slides/es/slide-16.jpg', title: 'Perfil viscero-emocional: la persona intestino' },
]

// Italian deck — same slides, translated. Anchors are shared.
// (Deck note: the source PDF says "intestino crasso" (large intestine) where it
// should read "intestino tenue" (small intestine) — titles mirror the deck.)
export const chapter14SlidesIt: SyncSlide[] = [
  { src: '/chapter-14/slides/it/slide-01.jpg', title: 'L’intestino crasso: anatomia, ecosistema e approccio ROP' },
  { src: '/chapter-14/slides/it/slide-02.jpg', title: 'Topografia e disposizione intra-addominale' },
  { src: '/chapter-14/it/Chapter14 Fig2 IT.png', title: 'Mesos', orientation: 'portrait' },
  { src: '/chapter-14/it/Chapter14 Fig3 IT.png', title: 'Radice del mesentere' },
  { src: '/chapter-14/it/Chapter14 Fig4 IT.png', title: 'Muscolo di Treitz' },
  { src: '/chapter-14/it/Chapter14 Fig5 IT.png', title: 'L’asse dell’irrigazione e del drenaggio: tronco mesenterico superiore', orientation: 'portrait' },
  { src: '/chapter-14/slides/it/slide-05.jpg', title: 'La doppia realtà neurologica del peritoneo' },
  { src: '/chapter-14/slides/it/slide-06.jpg', title: 'Il secondo cervello: autonomia del sistema nervoso enterico (SNE)' },
  { src: '/chapter-14/slides/it/slide-07.jpg', title: 'Il secondo cervello: sistema nervoso enterico' },
  { src: '/chapter-14/slides/it/slide-08.jpg', title: 'L’ecosistema intestinale: il treppiede della salute digestiva' },
  { src: '/chapter-14/slides/it/slide-09.jpg', title: 'La doppia via di assorbimento dei micronutrienti' },
  { src: '/chapter-14/slides/it/slide-10.jpg', title: 'La spirale: disbiosi e iperpermeabilità' },
  { src: '/chapter-14/slides/it/slide-11.jpg', title: 'Patologia I: iperpermeabilità intestinale (leaky gut)' },
  { src: '/chapter-14/slides/it/slide-12.jpg', title: 'Patologia II: la disbiosi e le sue manifestazioni' },
  { src: '/chapter-14/slides/it/slide-13.jpg', title: 'Segnali d’allarme e diagnosi di esclusione' },
  { src: '/chapter-14/slides/it/Chapter14 FigCrohn IT.png', title: 'Caso clinico — malattia di Crohn e spondiloartrite' },
  { src: '/chapter-14/slides/it/slide-14.jpg', title: 'Protocollo di trattamento ROP: ordine di trattamento' },
  { src: '/chapter-14/it/figure-14-15 IT.png', title: 'Territorio cranico e cervicale del nervo vago' },
  { src: '/chapter-14/it/Chapter14 Fig16 IT.png', title: 'Territorio addominale sinistro del nervo vago e plesso celiaco (solare)' },
  { src: '/chapter-14/it/Chapter14 Fig19 IT.png', title: 'Sistema simpatico (origine midollare)' },
  { src: '/chapter-14/it/Chapter14 Fig25 IT.png', title: 'Digiuno (zona riflessa podalica)' },
  { src: '/chapter-14/it/Chapter14 Fig27 IT.png', title: 'Ileo e radice del mesentere (zona riflessa podalica)' },
  { src: '/chapter-14/slides/it/slide-15.jpg', title: 'Sintesi dell’intervento ROP: protocollo intestino tenue' },
  { src: '/chapter-14/slides/it/slide-16.jpg', title: 'Profilo viscerale-emotivo: la persona con ROP' },
]

export const chapter14SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation',   blockIndex: 0,  slide: 1 },
  // Slide 2 sits just above the "Ils s'étendent du pylore…" paragraph (presentation block 2).
  { sectionId: 'presentation',   blockIndex: 2,  slide: 2 },
  // Slide 3 is Figure 14.2 and appears immediately after the Anatomy heading.
  { sectionId: 'anatomie',       blockIndex: 0,  slide: 3 },
  // Slide 4 is Figure 14.3 and appears before the duodenojejunal-junction sentence.
  { sectionId: 'anatomie',       blockIndex: 4,  slide: 4 },
  // Slide 5 is Figure 14.4 and appears before the longitudinal-tension sentence.
  { sectionId: 'anatomie',       blockIndex: 7,  slide: 5 },
  // Slide 6 points to the "Artère mésentérique supérieure" lead (block 2 now
  // that figure 14.5 leads the Vascularisation section).
  { sectionId: 'vascularisation', blockIndex: 2, slide: 6 },
  { sectionId: 'innervation',    blockIndex: 2,  slide: 7 },
  { sectionId: 'innervation',    blockIndex: 10, slide: 8 },
  { sectionId: 'innervation',    blockIndex: 12, slide: 9 },
  { sectionId: 'physiologie',    blockIndex: 5,  slide: 10 },
  { sectionId: 'physiologie',    blockIndex: 10, slide: 11 },
  { sectionId: 'pathologies',    blockIndex: 0,  slide: 12 },
  { sectionId: 'pathologies',    blockIndex: 1,  slide: 13 },
  { sectionId: 'pathologies',    blockIndex: 7,  slide: 14 },
  { sectionId: 'pathologies',    blockIndex: 11, slide: 15 },
  // Crohn clinical-case slide, right after the "Maladie de Crohn" heading.
  { sectionId: 'pathologies',    blockIndex: 14, slide: 16 },
  // Protocole ROP (ordre de traitement) — overview, at the ROP section heading.
  { sectionId: 'rop',            blockIndex: -1, slide: 17 },
  // Cranial/cervical vagus-nerve territory slide, right after the "1. Nerf vague" heading.
  { sectionId: 'rop',            blockIndex: 1,  slide: 18 },
  // Left-abdominal vagus territory slide, right below figure 14.17 (rendered
  // above figure 14.18, which is block 4 after figure 14.16 moved to the deck).
  { sectionId: 'rop',            blockIndex: 4,  slide: 19 },
  // Sympathetic-system slide, right above figure 14.20 (block 7 after figure
  // 14.19 moved to the deck).
  { sectionId: 'rop',            blockIndex: 7,  slide: 20 },
  // Jejunum reflex-zone slide, right above figure 14.24 (block 16).
  { sectionId: 'rop',            blockIndex: 16, slide: 21 },
  // Ileum reflex-zone slide, right below the "Iléum (pied droit)" heading
  // (rendered above the bullets, which are block 18).
  { sectionId: 'rop',            blockIndex: 18, slide: 22 },
  // ROP intervention synthesis — after the reflex-zone slides, at the limbic step.
  { sectionId: 'rop',            blockIndex: 20, slide: 23 },
  // Viscero-emotional profile — final slide encountered in the text.
  { sectionId: 'relations',      blockIndex: 2,  slide: 24 },
]

// French anchor table — for the re-rendered 16-page deck (FR only). The Crohn
// case is shown before the ROP sequence; the emotional-profile slide is last
// because it is the final slide encountered in the text.
export const chapter14SlideAnchorsFr: SyncAnchor[] = [
  { sectionId: 'presentation',   blockIndex: 0,  slide: 1 },
  // Slide 2 sits just above the "Ils s'étendent du pylore…" paragraph (presentation block 2).
  { sectionId: 'presentation',   blockIndex: 2,  slide: 2 },
  { sectionId: 'anatomie',       blockIndex: 2,  slide: 3 },
  { sectionId: 'anatomie',       blockIndex: 3,  slide: 4 },
  { sectionId: 'vascularisation', blockIndex: 2,  slide: 5 },
  // Markers 6 and 7 swapped so each lead points to its own slide, with a
  // half-page break after the "Veine mésentérique supérieure" paragraph (block 4).
  { sectionId: 'vascularisation', blockIndex: 4,  slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 5,  slide: 6, gapBefore: 'half' },
  { sectionId: 'innervation',    blockIndex: 2,  slide: 8 },
  { sectionId: 'innervation',    blockIndex: 6,  slide: 9 },
  { sectionId: 'innervation',    blockIndex: 8,  slide: 10 },
  { sectionId: 'physiologie',    blockIndex: 5,  slide: 11 },
  { sectionId: 'physiologie',    blockIndex: 8,  slide: 12 },
  { sectionId: 'pathologies',    blockIndex: 0,  slide: 13 },
  { sectionId: 'pathologies',    blockIndex: 1,  slide: 14 },
  { sectionId: 'pathologies',    blockIndex: 7,  slide: 15 },
  { sectionId: 'pathologies',    blockIndex: 11, slide: 16 },
  // Protocole ROP (ordre de traitement) — overview, at the ROP section heading.
  { sectionId: 'rop',            blockIndex: -1, slide: 17 },
  // Figure-slides (cranial vagus, left-abdominal vagus, sympathetic system,
  // celiac plexus, jejunum and ileum reflex zones) anchored in the ROP section.
  { sectionId: 'rop',            blockIndex: 1,  slide: 18 },
  { sectionId: 'rop',            blockIndex: 4,  slide: 19 },
  { sectionId: 'rop',            blockIndex: 7,  slide: 20 },
  // Plexus cœliaque slide; the marker appears just before the new plexique photo.
  { sectionId: 'rop',            blockIndex: 8,  slide: 21, gapBefore: 'half' },
  { sectionId: 'rop',            blockIndex: 12, slide: 22 },
  { sectionId: 'rop',            blockIndex: 18, slide: 23 },
  // Synthèse d'intervention ROP — after the reflex-zone slides, at the limbic step.
  { sectionId: 'rop',            blockIndex: 20, slide: 24 },
  // Profil viscéro-émotionnel — at "Relations viscéro-émotionnelles".
  { sectionId: 'relations',      blockIndex: 2,  slide: 25 },
]

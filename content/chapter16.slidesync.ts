// Chapter 16 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-16).
//
// Slides are pre-rendered from:
// public/chapter-16/Chapter16 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

const chapter16SlidesBySource: SyncSlide[] = [
  { src: '/chapter-16/slides/slide-01.png', title: 'Chapitre 16 : les Reins' },
  { src: '/chapter-16/slides/slide-02.png', title: 'Situation et topographie' },
  { src: '/chapter-16/slides/slide-03.png', title: 'La loge rénale et ses enveloppes' },
  { src: '/chapter-16/slides/slide-04.png', title: 'L enveloppe fasciale : une loge ouverte' },
  { src: '/chapter-16/slides/slide-05.png', title: 'Architecture interne et unite fonctionnelle' },
  { src: '/chapter-16/slides/slide-06.png', title: 'Le nephron : l unite fonctionnelle' },
  { src: '/chapter-16/slides/slide-07.png', title: 'Rapports dorsaux et plexus lombaire' },
  { src: '/chapter-16/slides/slide-08.png', title: 'Fenetres thérapeutiques : les zones de faiblesse' },
  { src: '/chapter-16/slides/slide-09.png', title: 'Le carrefour veineux et le syndrome de la pince' },
  { src: '/chapter-16/slides/slide-10.png', title: 'Asymetrie clinique : rein droit vs rein gauche' },
  { src: '/chapter-16/slides/slide-11.png', title: 'Régulation de la pression artérielle' },
  { src: '/chapter-16/slides/slide-12.png', title: 'Équilibre acido-basique et impact nutritionnel' },
  { src: '/chapter-16/slides/slide-13.png', title: 'Dynamique respiratoire et motilite' },
  { src: '/chapter-16/slides/slide-14.png', title: 'Pathologie mécanique : les 3 degrés de ptose' },
  { src: '/chapter-16/slides/slide-15.png', title: 'Pathologie mécanique : la ptose rénale' },
  { src: '/chapter-16/slides/slide-16.png', title: 'Fixations tissulaires et lignes rouges' },
  { src: '/chapter-16/slides/slide-17.png', title: 'Fixations tissulaires : perte de mobilite' },
  { src: '/chapter-16/slides/slide-18.png', title: 'Approche ROP : lecture émotionnelle' },
  { src: '/chapter-16/slides/slide-19.png', title: 'Approche ROP : zones réflexes podales' },
  { src: '/chapter-16/slides/slide-20.png', title: 'Cartographie ROP : zones réflexes podales' },
  { src: '/chapter-16/slides/slide-21.png', title: 'Cartographie ROP et manoeuvres réflexes' },
  { src: '/chapter-16/slides/slide-22.png', title: 'Recommandations et autocorrection' },
  { src: '/chapter-16/slides/slide-23.png', title: 'Conseils thérapeutiques au patient' },
]

const chapter16ReadingOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 11, 12, 16, 14, 15, 17, 18, 22, 23, 19, 20, 21]
const chapter16SlideNumberByReadingOrder = new Map(chapter16ReadingOrder.map((sourceSlide, index) => [sourceSlide, index + 1]))

function remapChapter16Slide(slide: number | number[]) {
  if (Array.isArray(slide)) return slide.map((n) => chapter16SlideNumberByReadingOrder.get(n) ?? n)
  return chapter16SlideNumberByReadingOrder.get(slide) ?? slide
}

export const chapter16Slides: SyncSlide[] = chapter16ReadingOrder.map((slideNumber) => chapter16SlidesBySource[slideNumber - 1])

function withChapter16Titles(titles: string[]): SyncSlide[] {
  const orderedTitles = chapter16ReadingOrder.map((slideNumber) => titles[slideNumber - 1])
  return chapter16Slides.map((slide, index) => ({ ...slide, title: orderedTitles[index] ?? slide.title }))
}

export const chapter16SlidesEn = withChapter16Titles([
  'Chapter 16: the Kidneys',
  'Location and topography',
  'The renal lodge and its envelopes',
  'The fascial envelope: an open lodge',
  'Internal architecture and functional unit',
  'The nephron: the functional unit',
  'Posterior relations and lumbar plexus',
  'Therapeutic windows: weak zones',
  'The venous crossroads and nutcracker syndrome',
  'Clinical asymmetry: right kidney vs left kidney',
  'Regulation of arterial pressure',
  'Acid-base balance and nutritional impact',
  'Respiratory dynamics and motility',
  'Mechanical pathology: the 3 degrees of ptosis',
  'Mechanical pathology: renal ptosis',
  'Tissue fixations and red lines',
  'Tissue fixations: loss of mobility',
  'ROP approach: emotional reading',
  'ROP approach: foot reflex zones',
  'ROP mapping: foot reflex zones',
  'ROP mapping and reflex maneuvers',
  'Recommendations and self-correction',
  'Therapeutic advice for the patient',
])

export const chapter16SlidesDe = withChapter16Titles([
  'Kapitel 16: die Nieren',
  'Lage und Topographie',
  'Die Nierenloge und ihre Huellen',
  'Die Faszienhuelle: eine offene Loge',
  'Innere Architektur und funktionelle Einheit',
  'Das Nephron: die funktionelle Einheit',
  'Dorsale Beziehungen und Plexus lumbalis',
  'Therapeutische Fenster: Schwachstellen',
  'Der venoese Kreuzungspunkt und das Nussknacker-Syndrom',
  'Klinische Asymmetrie: rechte Niere vs linke Niere',
  'Regulation des arteriellen Drucks',
  'Saeure-Basen-Gleichgewicht und Einfluss der Ernaehrung',
  'Atemdynamik und Motilitaet',
  'Mechanische Pathologie: die 3 Ptosegrade',
  'Mechanische Pathologie: Nierenptose',
  'Gewebefixierungen und rote Linien',
  'Gewebefixierungen: Verlust der Mobilitaet',
  'ROP-Ansatz: emotionale Lesart',
  'ROP-Ansatz: Fussreflexzonen',
  'ROP-Kartographie: Fussreflexzonen',
  'ROP-Kartographie und Reflexmanoever',
  'Empfehlungen und Selbstkorrektur',
  'Therapeutische Ratschlaege fuer den Patienten',
])

export const chapter16SlidesEs = withChapter16Titles([
  'Capitulo 16: los rinones',
  'Situacion y topografia',
  'La logia renal y sus envolturas',
  'La envoltura fascial: una logia abierta',
  'Arquitectura interna y unidad funcional',
  'La nefrona: la unidad funcional',
  'Relaciones dorsales y plexo lumbar',
  'Ventanas terapeuticas: zonas de debilidad',
  'La encrucijada venosa y el sindrome de la pinza',
  'Asimetria clinica: rinon derecho vs rinon izquierdo',
  'Regulacion de la presion arterial',
  'Equilibrio acido-base e impacto nutricional',
  'Dinamica respiratoria y motilidad',
  'Patologia mecanica: los 3 grados de ptosis',
  'Patologia mecanica: ptosis renal',
  'Fijaciones tisulares y lineas rojas',
  'Fijaciones tisulares: perdida de movilidad',
  'Enfoque ROP: lectura emocional',
  'Enfoque ROP: zonas reflejas podales',
  'Cartografia ROP: zonas reflejas podales',
  'Cartografia ROP y maniobras reflejas',
  'Recomendaciones y autocorreccion',
  'Consejos terapeuticos para el paciente',
])

export const chapter16SlidesIt = withChapter16Titles([
  'Capitolo 16: i reni',
  'Situazione e topografia',
  'La loggia renale e i suoi involucri',
  'L involucro fasciale: una loggia aperta',
  'Architettura interna e unita funzionale',
  'Il nefrone: l unita funzionale',
  'Rapporti dorsali e plesso lombare',
  'Finestre terapeutiche: zone di debolezza',
  'Il crocevia venoso e la sindrome della pinza',
  'Asimmetria clinica: rene destro vs rene sinistro',
  'Regolazione della pressione arteriosa',
  'Equilibrio acido-base e impatto nutrizionale',
  'Dinamica respiratoria e motilita',
  'Patologia meccanica: i 3 gradi di ptosi',
  'Patologia meccanica: ptosi renale',
  'Fissazioni tissutali e linee rosse',
  'Fissazioni tissutali: perdita di mobilita',
  'Approccio ROP: lettura emozionale',
  'Approccio ROP: zone riflesse podaliche',
  'Mappatura ROP: zone riflesse podaliche',
  'Mappatura ROP e manovre riflesse',
  'Raccomandazioni e autocorrezione',
  'Consigli terapeutici al paziente',
])

const chapter16SlideAnchorsBySource: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 4, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 10, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 14, slide: 6 },
  { sectionId: 'rapports', blockIndex: 0, slide: 7 },
  { sectionId: 'rapports', blockIndex: 3, slide: 8 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 9 },
  { sectionId: 'vascularisation', blockIndex: 8, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 3, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 5, slide: 12 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 8, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 11, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 2, slide: 16 },
  { sectionId: 'pathologies-courantes', blockIndex: 12, slide: 17 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 18 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 4, slide: 20 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 21 },
  { sectionId: 'conseils', blockIndex: 0, slide: [22, 23] },
]

export const chapter16SlideAnchors: SyncAnchor[] = chapter16SlideAnchorsBySource.map((anchor) => ({
  ...anchor,
  slide: remapChapter16Slide(anchor.slide),
}))

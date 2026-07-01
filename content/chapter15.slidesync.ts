// Chapter 15 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-15).
//
// Slides are pre-rendered from:
// public/chapter-15/Chapter15 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter15Slides: SyncSlide[] = [
  { src: '/chapter-15/slides/slide-01.png', title: 'Colon et Rectum' },
  { src: '/chapter-15/slides/slide-02.png', title: 'Architecture du cadre colique' },
  { src: '/chapter-15/slides/slide-03.png', title: 'Origine : caecum et jonction ileo-caecale' },
  { src: '/chapter-15/slides/slide-04.png', title: 'Ascension, travers et angles coliques' },
  { src: '/chapter-15/slides/slide-05.png', title: 'Descente et boucle sigmoidienne' },
  { src: '/chapter-15/slides/slide-06.png', title: 'Carrefour pelvien : rectum et canal anal' },
  { src: '/chapter-15/slides/slide-07.png', title: 'Matrice fonctionnelle : controle anorectal' },
  { src: '/chapter-15/slides/slide-08.png', title: 'Irrigation vasculaire et consequences' },
  { src: '/chapter-15/slides/slide-09.png', title: 'Cablage neurologique autonome' },
  { src: '/chapter-15/slides/slide-10.png', title: 'Physiologie : motricite et absorption' },
  { src: '/chapter-15/slides/slide-11.png', title: 'Cablage autonome : innervation et reflexes' },
  { src: '/chapter-15/slides/slide-12.png', title: 'Mecanique de la defecation' },
  { src: '/chapter-15/slides/slide-13.png', title: 'Clinique : constipation et colopathies' },
  { src: '/chapter-15/slides/slide-14.png', title: 'Synthese viscero-somatique' },
  { src: '/chapter-15/slides/slide-15.png', title: 'Cartographie ROP : systeme nerveux, limbique et microbiote' },
  { src: '/chapter-15/slides/slide-16.png', title: 'Cartographie podale ROP' },
]

function withChapter15Titles(titles: string[]): SyncSlide[] {
  return chapter15Slides.map((slide, index) => ({ ...slide, title: titles[index] ?? slide.title }))
}

// English deck — rendered from the dedicated English synthesis slides
// (public/chapter-15/slides/en, 1920x1080 to mirror the French deck). Unlike
// DE/ES/IT (which reuse the French diagrams with translated titles), the English
// deck has its own artwork and one extra slide (16 — colon reflex zones), so it
// uses its own anchor table (chapter15SlideAnchorsEn) below.
export const chapter15SlidesEn: SyncSlide[] = [
  { src: '/chapter-15/slides/en/slide-01.png', title: 'Colon and Rectum' },
  { src: '/chapter-15/slides/en/slide-02.png', title: 'Architecture of the Colonic Frame' },
  { src: '/chapter-15/slides/en/slide-03.png', title: 'The Origin: Cecum and Ileocecal Junction' },
  { src: '/chapter-15/slides/en/slide-04.png', title: 'The Ascent and the Transverse: The Colic Angles' },
  { src: '/chapter-15/slides/en/slide-05.png', title: 'The Descent and the Sigmoid Loop' },
  { src: '/chapter-15/slides/en/slide-06.png', title: 'The Pelvic Crossroads: Rectum and Anal Canal' },
  { src: '/chapter-15/slides/en/slide-07.png', title: 'Functional Matrix: Anorectal Control' },
  { src: '/chapter-15/slides/en/slide-08.png', title: 'Vascular Supply and Consequences' },
  { src: '/chapter-15/slides/en/slide-09.png', title: 'Autonomic Neurological Wiring' },
  { src: '/chapter-15/slides/en/slide-10.png', title: 'Physiology: Motility and Absorption' },
  { src: '/chapter-15/slides/en/slide-11.png', title: 'Autonomic Wiring: Innervation and Reflexes' },
  { src: '/chapter-15/slides/en/slide-12.png', title: 'Mechanics of Defecation' },
  { src: '/chapter-15/slides/en/slide-13.png', title: 'Clinical Aspects: Constipation and Colopathies' },
  { src: '/chapter-15/slides/en/slide-14.png', title: 'Viscerosomatic Synthesis' },
  { src: '/chapter-15/slides/en/slide-15.png', title: 'ROP Cartography: Nervous System, Limbic System and Microbiota' },
  { src: '/chapter-15/slides/en/slide-16.png', title: 'ROP Cartography: Reflex Zones of the Colon' },
  { src: '/chapter-15/slides/en/slide-17.png', title: 'ROP Podal Cartography' },
]

export const chapter15SlidesDe = withChapter15Titles([
  'Kolon und Rektum',
  'Architektur des Kolonrahmens',
  'Ursprung: Caecum und ileocaecaler Uebergang',
  'Aufsteigendes Kolon, Querkolon und Kolonflexuren',
  'Absteigendes Kolon und Sigmaschleife',
  'Pelviner Kreuzungspunkt: Rektum und Analkanal',
  'Funktionelle Matrix: anorektale Kontrolle',
  'Gefaessversorgung und Folgen',
  'Autonome nervale Verschaltung',
  'Physiologie: Motilitaet und Absorption',
  'Autonome Verschaltung: Innervation und Reflexe',
  'Mechanik der Defaekation',
  'Klinik: Obstipation und Kolopathien',
  'Viszerosomatische Synthese',
  'ROP-Kartographie: Nervensystem, limbisches System und Mikrobiota',
  'ROP-Fusskartographie',
])

export const chapter15SlidesEs = withChapter15Titles([
  'Colon y recto',
  'Arquitectura del marco colonico',
  'Origen: ciego y union ileocecal',
  'Colon ascendente, transverso y angulos colonicos',
  'Colon descendente y asa sigmoidea',
  'Encrucijada pelvica: recto y canal anal',
  'Matriz funcional: control anorrectal',
  'Irrigacion vascular y consecuencias',
  'Cableado neurologico autonomo',
  'Fisiologia: motilidad y absorcion',
  'Cableado autonomo: inervacion y reflejos',
  'Mecanica de la defecacion',
  'Clinica: estrenimiento y colopatias',
  'Sintesis viscerosomatica',
  'Cartografia ROP: sistema nervioso, limbico y microbiota',
  'Cartografia podal ROP',
])

export const chapter15SlidesIt = withChapter15Titles([
  'Colon e retto',
  'Architettura della cornice colica',
  'Origine: cieco e giunzione ileocecale',
  'Colon ascendente, trasverso e flessure coliche',
  'Discesa e ansa sigmoidea',
  'Crocevia pelvico: retto e canale anale',
  'Matrice funzionale: controllo anorettale',
  'Irrorazione vascolare e conseguenze',
  'Cablaggio neurologico autonomo',
  'Fisiologia: motilita e assorbimento',
  'Cablaggio autonomo: innervazione e riflessi',
  'Meccanica della defecazione',
  'Clinica: stipsi e colopatie',
  'Sintesi viscerosomatica',
  'Mappatura ROP: sistema nervoso, sistema limbico e microbiota',
  'Mappatura podalica ROP',
])

export const chapter15SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 12, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 19, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 23, slide: 6 },
  { sectionId: 'physiologie', blockIndex: 3, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 4, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 5, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 13 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 14 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 15 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 16 },
]

// English anchor table — the English deck has 17 slides (one extra colon
// reflex-zone slide, 16). Slides 1–15 mirror the French anchors; the reflex-zone
// section carries both the colon reflex-zone slide (16) and the podal
// cartography (17). The English content mirrors the French block structure, so
// the shared block indices apply.
export const chapter15SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 12, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 19, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 23, slide: 6 },
  { sectionId: 'physiologie', blockIndex: 3, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 4, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 5, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 13 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 14 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 15 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 16 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 3, slide: 17 },
]

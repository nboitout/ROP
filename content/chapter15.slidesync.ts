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

export const chapter15SlidesEn = withChapter15Titles([
  'Colon and Rectum',
  'Architecture of the colonic frame',
  'Origin: caecum and ileocaecal junction',
  'Ascending colon, transverse colon and colic flexures',
  'Descending colon and sigmoid loop',
  'Pelvic crossroads: rectum and anal canal',
  'Functional matrix: anorectal control',
  'Vascular supply and consequences',
  'Autonomic neural wiring',
  'Physiology: motility and absorption',
  'Autonomic wiring: innervation and reflexes',
  'Mechanics of defecation',
  'Clinical picture: constipation and colopathies',
  'Viscerosomatic synthesis',
  'ROP mapping: nervous system, limbic system and microbiota',
  'ROP foot mapping',
])

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

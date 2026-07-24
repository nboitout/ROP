// Chapter 17 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-17).
//
// Slides are supplied as pre-rendered PNGs in public/chapter-17/slides.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number; gapBefore?: 'half' }

export const chapter17Slides: SyncSlide[] = [
  { src: '/chapter-17/slides/slide-01.png', title: 'Chapitre 17 : la cavité pelvienne' },
  { src: '/chapter-17/slides/slide-02.png', title: 'Le péritoine et le système de suspension' },
  { src: '/chapter-17/slides/slide-03.png', title: 'Organisation de la loge viscérale médiale — vue frontale' },
  { src: '/chapter-17/slides/slide-04.png', title: 'Organisation de la loge viscérale médiale — vue sagittale' },
  { src: '/chapter-17/slides/slide-05.png', title: 'L’unité vertébro-coxo-pelvienne' },
  { src: '/chapter-17/slides/slide-06.png', title: 'Les communications pelviennes externes et le relais obturateur' },
  { src: '/chapter-17/slides/slide-07.png', title: 'L’équilibre ligamentaire : les freins sacrés' },
  { src: '/chapter-17/slides/slide-08.png', title: 'Le périnée : limites et organisation' },
  { src: '/chapter-17/slides/slide-09.png', title: 'Parois et musculature profonde du pelvis' },
  { src: '/chapter-17/slides/slide-10.png', title: 'Vascularisation artérielle et drainage veineux du pelvis' },
  { src: '/chapter-17/slides/slide-11.png', title: 'Innervation somatique I : le piège du piriforme' },
  { src: '/chapter-17/slides/slide-12.png', title: 'Innervation somatique II : le trajet du nerf pudendal' },
  { src: '/chapter-17/slides/slide-13.png', title: 'Innervation autonome et contrôle central' },
  { src: '/chapter-17/slides/slide-14.png', title: 'Les centres supérieurs neuro-végétatifs' },
  { src: '/chapter-17/slides/slide-15.png', title: 'Biomécanique : gestion des pressions et de la gravité' },
  { src: '/chapter-17/slides/slide-16.png', title: 'Biomécanique : équilibre des trois diaphragmes' },
  { src: '/chapter-17/slides/slide-17.png', title: 'Pathologie biomécanique : la ptose viscérale' },
  { src: '/chapter-17/slides/slide-18.png', title: 'Syndrome pudendal' },
  { src: '/chapter-17/slides/slide-19.png', title: 'Synthèse clinique : défaillances mécaniques et neurologiques' },
  { src: '/chapter-17/slides/slide-20.png', title: 'Synthèse clinique ROP : zones réflexes et cibles' },
]

function withChapter17Titles(titles: string[]): SyncSlide[] {
  return chapter17Slides.map((slide, index) => ({ ...slide, title: titles[index] ?? slide.title }))
}

export const chapter17SlidesEn = withChapter17Titles([
  'Chapter 17: the pelvic cavity',
  'The peritoneum and suspension system',
  'Organization of the medial visceral compartment — frontal view',
  'Organization of the medial visceral compartment — sagittal view',
  'The vertebro-coxo-pelvic unit',
  'External pelvic communications and the obturator relay',
  'Ligament balance: the sacral restraints',
  'The perineum: boundaries and organization',
  'Deep walls and musculature of the pelvis',
  'Arterial supply and venous drainage of the pelvis',
  'Somatic innervation I: the piriformis trap',
  'Somatic innervation II: the pudendal pathway',
  'Autonomic innervation and central control',
  'Higher neurovegetative centers',
  'Biomechanics: pressure and gravity management',
  'Biomechanics: balance of the three diaphragms',
  'Biomechanical pathology: visceral ptosis',
  'Pudendal syndrome',
  'Clinical synthesis: mechanical and neurological failures',
  'ROP clinical synthesis: reflex zones and targets',
])

export const chapter17SlidesDe = withChapter17Titles([
  'Kapitel 17: die Beckenhoehle',
  'Das Peritoneum und das Aufhaengesystem',
  'Organisation der medialen viszeralen Loge — Frontalansicht',
  'Organisation der medialen viszeralen Loge — Sagittalansicht',
  'Die vertebro-coxo-pelvine Einheit',
  'Externe Beckenverbindungen und Obturatorrelais',
  'Ligamentaeres Gleichgewicht: die sakralen Bremsen',
  'Das Perineum: Grenzen und Organisation',
  'Tiefe Waende und Muskulatur des Beckens',
  'Arterielle Versorgung und venöser Abfluss des Beckens',
  'Somatische Innervation I: die Piriformis-Falle',
  'Somatische Innervation II: der Pudendus-Verlauf',
  'Autonome Innervation und zentrale Kontrolle',
  'Hoehere neurovegetative Zentren',
  'Biomechanik: Druck- und Schwerkraftmanagement',
  'Biomechanik: Gleichgewicht der drei Diaphragmen',
  'Biomechanische Pathologie: viszerale Ptose',
  'Pudendussyndrom',
  'Klinische Synthese: mechanische und neurologische Defizite',
  'ROP-Kliniksynthese: Reflexzonen und Ziele',
])

export const chapter17SlidesEs = withChapter17Titles([
  'Capitulo 17: la cavidad pelvica',
  'El peritoneo y el sistema de suspension',
  'Organizacion del compartimento visceral medial — vista frontal',
  'Organizacion del compartimento visceral medial — vista sagital',
  'La unidad vertebro-coxo-pelvica',
  'Comunicaciones pelvicas externas y relevo obturador',
  'Equilibrio ligamentario: frenos sacros',
  'El perineo: limites y organizacion',
  'Paredes y musculatura profunda de la pelvis',
  'Vascularizacion arterial y drenaje venoso de la pelvis',
  'Inervacion somatica I: la trampa del piriforme',
  'Inervacion somatica II: el trayecto del pudendo',
  'Inervacion autonoma y control central',
  'Centros neurovegetativos superiores',
  'Biomecanica: gestion de presiones y gravedad',
  'Biomecanica: equilibrio de los tres diafragmas',
  'Patologia biomecanica: ptosis visceral',
  'Sindrome pudendo',
  'Sintesis clinica: fallos mecanicos y neurologicos',
  'Sintesis clinica ROP: zonas reflejas y objetivos',
])

export const chapter17SlidesIt = withChapter17Titles([
  'Capitolo 17: la cavita pelvica',
  'Il peritoneo e il sistema di sospensione',
  'Organizzazione della loggia viscerale mediale — vista frontale',
  'Organizzazione della loggia viscerale mediale — vista sagittale',
  'L unita vertebro-coxo-pelvica',
  'Comunicazioni pelviche esterne e relais otturatorio',
  'Equilibrio legamentoso: freni sacrali',
  'Il perineo: limiti e organizzazione',
  'Pareti e muscolatura profonda della pelvi',
  'Vascolarizzazione arteriosa e drenaggio venoso della pelvi',
  'Innervazione somatica I: la trappola del piriforme',
  'Innervazione somatica II: il tragitto del pudendo',
  'Innervazione autonoma e controllo centrale',
  'Centri neurovegetativi superiori',
  'Biomeccanica: gestione delle pressioni e della gravita',
  'Biomeccanica: equilibrio dei tre diaframmi',
  'Patologia biomeccanica: ptosi viscerale',
  'Sindrome pudendale',
  'Sintesi clinica: cedimenti meccanici e neurologici',
  'Sintesi clinica ROP: zone riflesse e bersagli',
])

export const chapter17SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'situation', blockIndex: 1, itemIndex: 6, slide: 4 },
  { sectionId: 'situation', blockIndex: 1, itemIndex: 22, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 10, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 13, slide: 8 },
  { sectionId: 'anatomie', blockIndex: 14, slide: 9 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 10 },
  { sectionId: 'innervation', blockIndex: 0, slide: 11 },
  { sectionId: 'innervation', blockIndex: 1, itemIndex: 6, slide: 12 },
  { sectionId: 'innervation', blockIndex: 6, slide: 13 },
  { sectionId: 'innervation', blockIndex: 8, slide: 14 },
  { sectionId: 'innervation', blockIndex: 13, slide: 15 },
  { sectionId: 'innervation', blockIndex: 18, itemIndex: 6, slide: 16 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 17 },
  { sectionId: 'pathologies-courantes', blockIndex: 4, slide: 18 },
  { sectionId: 'pathologies-courantes', blockIndex: 16, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 20 },
]

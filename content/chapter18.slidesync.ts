// Chapter 18 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-18).
//
// Slides are pre-rendered from:
// public/chapter-18/Chapter18 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

const chapter18SlidesBySource: SyncSlide[] = [
  { src: '/chapter-18/slides/slide-01.png', title: 'La vessie : anatomie, physiologie et ROP' },
  { src: '/chapter-18/slides/slide-02.png', title: 'Le panorama clinique' },
  { src: '/chapter-18/slides/slide-03.png', title: 'Situation anatomique dans la cavite pelvienne (femme)' },
  { src: '/chapter-18/slides/slide-04.png', title: 'Situation anatomique dans la cavite pelvienne (homme)' },
  { src: '/chapter-18/slides/slide-05.png', title: 'Morphologie et dynamique volumetrique' },
  { src: '/chapter-18/slides/slide-06.png', title: 'Architecture interne : le detrusor et le trigone' },
  { src: '/chapter-18/slides/slide-07.png', title: 'Morphologie interne : le trigone de Lieutaud' },
  { src: '/chapter-18/slides/slide-08.png', title: 'Le système de suspension mécanique' },
  { src: '/chapter-18/slides/slide-09.png', title: 'Amarrage et soutenement pelvien' },
  { src: '/chapter-18/slides/slide-10.png', title: 'Câblage neurologique : contrôle autonome et somatique' },
  { src: '/chapter-18/slides/slide-11.png', title: 'Physiologie : le cycle de la miction' },
  { src: '/chapter-18/slides/slide-12.png', title: 'Biomécanique : l enceinte manométrique pelvienne' },
  { src: '/chapter-18/slides/slide-13.png', title: 'Mecanismes pathologiques et dysfonctions' },
  { src: '/chapter-18/slides/slide-14.png', title: 'Biomécanique : l enceinte manométrique pelvienne' },
  { src: '/chapter-18/slides/slide-15.png', title: 'Pathologie : incontinence urinaire d effort (IUE)' },
  { src: '/chapter-18/slides/slide-16.png', title: 'Diagnostics differentiels : cystites et imperiosites' },
  { src: '/chapter-18/slides/slide-17.png', title: 'Le profil viscéro-émotionnel' },
  { src: '/chapter-18/slides/slide-18.png', title: 'Conseils pratiques : gymnastique périnéale hypopressive' },
  { src: '/chapter-18/slides/slide-19.png', title: 'Conseils pratiques et gymnastique périnéale' },
  { src: '/chapter-18/slides/slide-20.png', title: 'L approche thérapeutique ROP : cartographie d intervention' },
  { src: '/chapter-18/slides/slide-21.png', title: 'L approche ROP : cartographie des zones podales' },
  { src: '/chapter-18/slides/slide-22.png', title: 'Application ROP : zones réflexes podales' },
]

const chapter18ReadingOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15, 16, 17, 18, 19, 20, 21, 22]
const chapter18SlideNumberByReadingOrder = new Map(chapter18ReadingOrder.map((sourceSlide, index) => [sourceSlide, index + 1]))

function remapChapter18Slide(slide: number | number[]) {
  if (Array.isArray(slide)) return slide.map((n) => chapter18SlideNumberByReadingOrder.get(n) ?? n)
  return chapter18SlideNumberByReadingOrder.get(slide) ?? slide
}

export const chapter18Slides: SyncSlide[] = chapter18ReadingOrder.map((slideNumber) => chapter18SlidesBySource[slideNumber - 1])

function withChapter18Titles(titles: string[]): SyncSlide[] {
  const orderedTitles = chapter18ReadingOrder.map((slideNumber) => titles[slideNumber - 1])
  return chapter18Slides.map((slide, index) => ({ ...slide, title: orderedTitles[index] ?? slide.title }))
}

export const chapter18SlidesEn = withChapter18Titles([
  'The bladder: anatomy, physiology and ROP',
  'The clinical overview',
  'Anatomical position in the pelvic cavity (female)',
  'Anatomical position in the pelvic cavity (male)',
  'Morphology and volumetric dynamics',
  'Internal architecture: the detrusor and trigone',
  'Internal morphology: Lieutaud trigone',
  'The mechanical suspension system',
  'Anchoring and pelvic support',
  'Neurological wiring: autonomic and somatic control',
  'Physiology: the micturition cycle',
  'Biomechanics: the pelvic pressure chamber',
  'Pathological mechanisms and dysfunctions',
  'Biomechanics: the pelvic pressure chamber',
  'Pathology: stress urinary incontinence (SUI)',
  'Differential diagnoses: cystitis and urgency',
  'The viscero-emotional profile',
  'Practical advice: hypopressive perineal gymnastics',
  'Practical advice and perineal gymnastics',
  'The ROP therapeutic approach: intervention mapping',
  'The ROP approach: foot zone mapping',
  'ROP application: foot reflex zones',
])

export const chapter18SlidesDe = withChapter18Titles([
  'Die Blase: Anatomie, Physiologie und ROP',
  'Der klinische Ueberblick',
  'Anatomische Lage in der Beckenhoehle (Frau)',
  'Anatomische Lage in der Beckenhoehle (Mann)',
  'Morphologie und Volumendynamik',
  'Innere Architektur: Detrusor und Trigonum',
  'Innere Morphologie: Trigonum nach Lieutaud',
  'Das mechanische Aufhaengesystem',
  'Verankerung und pelvine Stuetzung',
  'Neurologische Verschaltung: autonome und somatische Kontrolle',
  'Physiologie: der Miktionszyklus',
  'Biomechanik: die pelvine Druckkammer',
  'Pathologische Mechanismen und Dysfunktionen',
  'Biomechanik: die pelvine Druckkammer',
  'Pathologie: Belastungsinkontinenz',
  'Differenzialdiagnosen: Zystitiden und Harndrang',
  'Das viszero-emotionale Profil',
  'Praktische Ratschlaege: hypopressive Beckenbodengymnastik',
  'Praktische Ratschlaege und Beckenbodengymnastik',
  'Der therapeutische ROP-Ansatz: Interventionskartographie',
  'Der ROP-Ansatz: Kartographie der Fusszonen',
  'ROP-Anwendung: Fussreflexzonen',
])

export const chapter18SlidesEs = withChapter18Titles([
  'La vejiga: anatomia, fisiologia y ROP',
  'El panorama clinico',
  'Situacion anatomica en la cavidad pelvica (mujer)',
  'Situacion anatomica en la cavidad pelvica (hombre)',
  'Morfologia y dinamica volumetrica',
  'Arquitectura interna: detrusor y trigono',
  'Morfologia interna: trigono de Lieutaud',
  'El sistema mecanico de suspension',
  'Anclaje y sosten pelvico',
  'Cableado neurologico: control autonomo y somatico',
  'Fisiologia: el ciclo de la miccion',
  'Biomecanica: la camara manometrica pelvica',
  'Mecanismos patologicos y disfunciones',
  'Biomecanica: la camara manometrica pelvica',
  'Patologia: incontinencia urinaria de esfuerzo',
  'Diagnosticos diferenciales: cistitis e imperiosidad',
  'El perfil visceroemocional',
  'Consejos practicos: gimnasia perineal hipopresiva',
  'Consejos practicos y gimnasia perineal',
  'El enfoque terapeutico ROP: cartografia de intervencion',
  'El enfoque ROP: cartografia de zonas podales',
  'Aplicacion ROP: zonas reflejas podales',
])

export const chapter18SlidesIt = withChapter18Titles([
  'La vescica: anatomia, fisiologia e ROP',
  'Il panorama clinico',
  'Situazione anatomica nella cavita pelvica (donna)',
  'Situazione anatomica nella cavita pelvica (uomo)',
  'Morfologia e dinamica volumetrica',
  'Architettura interna: detrusore e trigono',
  'Morfologia interna: trigono di Lieutaud',
  'Il sistema meccanico di sospensione',
  'Ancoraggio e sostegno pelvico',
  'Cablaggio neurologico: controllo autonomo e somatico',
  'Fisiologia: il ciclo della minzione',
  'Biomeccanica: la camera manometrica pelvica',
  'Meccanismi patologici e disfunzioni',
  'Biomeccanica: la camera manometrica pelvica',
  'Patologia: incontinenza urinaria da sforzo',
  'Diagnosi differenziali: cistiti e urgenza',
  'Il profilo viscero-emozionale',
  'Consigli pratici: ginnastica perineale ipopressiva',
  'Consigli pratici e ginnastica perineale',
  'L approccio terapeutico ROP: mappatura di intervento',
  'L approccio ROP: mappatura delle zone podaliche',
  'Applicazione ROP: zone riflesse podaliche',
])

const chapter18SlideAnchorsBySource: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 1, slide: 3 },
  { sectionId: 'situation', blockIndex: 3, slide: 4 },
  { sectionId: 'situation', blockIndex: 4, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 2, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 6, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 13, slide: 8 },
  { sectionId: 'anatomie', blockIndex: 19, slide: 9 },
  { sectionId: 'innervation', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 19, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 13 },
  { sectionId: 'physiologie', blockIndex: 22, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 2, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 7, slide: 16 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 17 },
  { sectionId: 'conseils', blockIndex: 0, slide: 18 },
  { sectionId: 'conseils', blockIndex: 1, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 20 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 21 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 22 },
]

export const chapter18SlideAnchors: SyncAnchor[] = chapter18SlideAnchorsBySource.map((anchor) => ({
  ...anchor,
  slide: remapChapter18Slide(anchor.slide),
}))

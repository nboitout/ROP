// Chapter 18 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-18).
//
// Slides are supplied as pre-rendered PNGs in public/chapter-18/slides.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = {
  sectionId: string
  blockIndex: number
  itemIndex?: number
  slide: number | number[]
  gapBefore?: 'half'
  end?: { sectionId: string; blockIndex: number; itemIndex?: number }
}

export const chapter18Slides: SyncSlide[] = [
  { src: '/chapter-18/slides/slide-01.png', title: 'La vessie : anatomie, physiologie et ROP' },
  { src: '/chapter-18/slides/slide-02.png', title: 'Le panorama clinique' },
  { src: '/chapter-18/slides/slide-03.png', title: 'Situation anatomique dans la cavité pelvienne — femme' },
  { src: '/chapter-18/slides/slide-04.png', title: 'Situation anatomique dans la cavité pelvienne — homme' },
  { src: '/chapter-18/slides/slide-05.png', title: 'Quand la vessie se remplit' },
  { src: '/chapter-18/slides/slide-06.png', title: 'Architecture interne : les trois parois de la vessie' },
  { src: '/chapter-18/slides/slide-07.png', title: 'Morphologie interne : le trigone de Lieutaud' },
  { src: '/chapter-18/slides/slide-08.png', title: 'Le système de suspension mécanique' },
  { src: '/chapter-18/slides/slide-09.png', title: 'La vessie suspendue : péritoine et ligaments' },
  { src: '/chapter-18/slides/slide-10.png', title: 'Le système de soutènement de la vessie' },
  { src: '/chapter-18/slides/slide-11.png', title: 'Innervation de la vessie' },
  { src: '/chapter-18/slides/slide-12.png', title: 'Physiologie : le cycle de la miction' },
  { src: '/chapter-18/slides/slide-13.png', title: 'Biomécanique : l’enceinte manométrique pelvienne' },
  { src: '/chapter-18/slides/slide-14.png', title: 'Mécanismes pathologiques et dysfonctions' },
  { src: '/chapter-18/slides/slide-15.png', title: 'Comment les tensions créent une béance urétrale' },
  { src: '/chapter-18/slides/slide-16.png', title: 'Diagnostics différentiels : cystites et impériosités' },
  { src: '/chapter-18/slides/slide-17.png', title: 'Troubles urinaires : indications et diagnostics d’exclusion' },
  { src: '/chapter-18/slides/slide-18.png', title: 'Le profil viscéro-émotionnel' },
  { src: '/chapter-18/slides/slide-19.png', title: 'Conseils pratiques : gymnastique périnéale hypopressive' },
  { src: '/chapter-18/slides/slide-20.png', title: 'Zones réflexes ROP : vessie, pelvis et régulation neuro-végétative' },
  { src: '/chapter-18/slides/slide-21.png', title: 'Centres supérieurs du contrôle neurovégétatif' },
  { src: '/chapter-18/cartographie/figure-18-01.png', title: 'Cartographie : chaîne ganglionnaire latéro-vertébrale thoracique' },
  { src: '/chapter-18/cartographie/figure-18-03.png', title: 'Cartographie : origine médullaire du parasympathique pelvien ou sacré' },
  { src: '/chapter-18/cartographie/figure-18-05.png', title: 'Cartographie : foramens ischiatiques et muscles pelviens profonds' },
  { src: '/chapter-18/cartographie/figure-18-07.png', title: 'Cartographie : foramens ischiatiques et muscles pelviens profonds' },
  { src: '/chapter-18/cartographie/figure-18-09.png', title: 'Cartographie : foramens ischiatiques et muscles pelviens profonds' },
  { src: '/chapter-18/cartographie/figure-18-10.png', title: 'Cartographie : fosse obturée, muscles obturateurs et nerf pudendal' },
  { src: '/chapter-18/cartographie/figure-18-12.png', title: 'Cartographie : ligaments sacro-tubéral et sacro-épineux, nerf pudendal' },
  { src: '/chapter-18/cartographie/figure-18-14.png', title: 'Cartographie : vessie, utérus ou prostate' },
  { src: '/chapter-18/cartographie/figure-18-16.png', title: 'Cartographie : vessie, utérus ou prostate' },
  { src: '/chapter-18/cartographie/figure-18-18.png', title: 'Cartographie : vessie, utérus ou prostate' },
]

function withChapter18Titles(titles: string[]): SyncSlide[] {
  return chapter18Slides.map((slide, index) => ({ ...slide, title: titles[index] ?? slide.title }))
}

export const chapter18SlidesEn = withChapter18Titles([
  'The bladder: anatomy, physiology and ROP',
  'The clinical overview',
  'Anatomical position in the pelvic cavity (female)',
  'Anatomical position in the pelvic cavity (male)',
  'When the bladder fills',
  'Internal architecture: the three walls of the bladder',
  'Internal morphology: Lieutaud trigone',
  'The mechanical suspension system',
  'The suspended bladder: peritoneum and ligaments',
  'The bladder support system',
  'Innervation of the bladder',
  'Physiology: the micturition cycle',
  'Biomechanics: the pelvic pressure chamber',
  'Pathological mechanisms and dysfunctions',
  'How tension creates a urethral opening',
  'Differential diagnoses: cystitis and urgency',
  'Urinary disorders: indications and exclusion diagnoses',
  'The viscero-emotional profile',
  'Practical advice: hypopressive perineal gymnastics',
  'ROP reflex zones: bladder, pelvis and neurovegetative regulation',
  'Higher centres of neurovegetative control',
])

export const chapter18SlidesDe = withChapter18Titles([
  'Die Blase: Anatomie, Physiologie und ROP',
  'Der klinische Ueberblick',
  'Anatomische Lage in der Beckenhoehle (Frau)',
  'Anatomische Lage in der Beckenhoehle (Mann)',
  'Wenn sich die Blase fuellt',
  'Innere Architektur: die drei Waende der Blase',
  'Innere Morphologie: Trigonum nach Lieutaud',
  'Das mechanische Aufhaengesystem',
  'Die aufgehaengte Blase: Peritoneum und Baender',
  'Das Stuetzsystem der Blase',
  'Innervation der Blase',
  'Physiologie: der Miktionszyklus',
  'Biomechanik: die pelvine Druckkammer',
  'Pathologische Mechanismen und Dysfunktionen',
  'Wie Spannungen eine Harnröhrenöffnung verursachen',
  'Differenzialdiagnosen: Zystitiden und Harndrang',
  'Harnwegserkrankungen: Indikationen und Ausschlussdiagnosen',
  'Das viszero-emotionale Profil',
  'Praktische Ratschlaege: hypopressive Beckenbodengymnastik',
  'ROP-Reflexzonen: Blase, Becken und neurovegetative Regulation',
  'Hoehere Zentren der neurovegetativen Kontrolle',
])

export const chapter18SlidesEs = withChapter18Titles([
  'La vejiga: anatomia, fisiologia y ROP',
  'El panorama clinico',
  'Situacion anatomica en la cavidad pelvica (mujer)',
  'Situacion anatomica en la cavidad pelvica (hombre)',
  'Cuando se llena la vejiga',
  'Arquitectura interna: las tres paredes de la vejiga',
  'Morfologia interna: trigono de Lieutaud',
  'El sistema mecanico de suspension',
  'La vejiga suspendida: peritoneo y ligamentos',
  'El sistema de sosten de la vejiga',
  'Inervacion de la vejiga',
  'Fisiologia: el ciclo de la miccion',
  'Biomecanica: la camara manometrica pelvica',
  'Mecanismos patologicos y disfunciones',
  'Como las tensiones crean una abertura uretral',
  'Diagnosticos diferenciales: cistitis e imperiosidad',
  'Trastornos urinarios: indicaciones y diagnosticos de exclusion',
  'El perfil visceroemocional',
  'Consejos practicos: gimnasia perineal hipopresiva',
  'Zonas reflejas ROP: vejiga, pelvis y regulacion neurovegetativa',
  'Centros superiores del control neurovegetativo',
])

export const chapter18SlidesIt = withChapter18Titles([
  'La vescica: anatomia, fisiologia e ROP',
  'Il panorama clinico',
  'Situazione anatomica nella cavita pelvica (donna)',
  'Situazione anatomica nella cavita pelvica (uomo)',
  'Quando la vescica si riempie',
  'Architettura interna: le tre pareti della vescica',
  'Morfologia interna: trigono di Lieutaud',
  'Il sistema meccanico di sospensione',
  'La vescica sospesa: peritoneo e legamenti',
  'Il sistema di sostegno della vescica',
  'Innervazione della vescica',
  'Fisiologia: il ciclo della minzione',
  'Biomeccanica: la camera manometrica pelvica',
  'Meccanismi patologici e disfunzioni',
  'Come le tensioni creano un’apertura uretrale',
  'Diagnosi differenziali: cistiti e urgenza',
  'Disturbi urinari: indicazioni e diagnosi di esclusione',
  'Il profilo viscero-emozionale',
  'Consigli pratici: ginnastica perineale ipopressiva',
  'Zone riflesse ROP: vescica, pelvi e regolazione neurovegetativa',
  'Centri superiori del controllo neurovegetativo',
])

export const chapter18SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2, end: { sectionId: 'presentation', blockIndex: 3 } },
  { sectionId: 'situation', blockIndex: 1, slide: 3 },
  { sectionId: 'situation', blockIndex: 4, slide: 4 },
  { sectionId: 'situation', blockIndex: 4, itemIndex: 5, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 2, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 6, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 13, slide: 8 },
  { sectionId: 'anatomie', blockIndex: 15, slide: 9 },
  { sectionId: 'anatomie', blockIndex: 19, slide: 10 },
  { sectionId: 'innervation', blockIndex: 0, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 12 },
  { sectionId: 'physiologie', blockIndex: 19, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 2, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 7, slide: 16 },
  {
    sectionId: 'pathologies-courantes',
    blockIndex: 9,
    slide: 17,
    end: { sectionId: 'pathologies-courantes', blockIndex: 12, itemIndex: 3 },
  },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 18 },
  { sectionId: 'conseils', blockIndex: 0, slide: 19, end: { sectionId: 'conseils', blockIndex: 1, itemIndex: 5 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 20 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 22 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 3, slide: 23 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, slide: 24 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 25 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 8, slide: [26, 27] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 28 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 10, slide: 29 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 11, slide: 30 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 12, slide: 31 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 21 },
]

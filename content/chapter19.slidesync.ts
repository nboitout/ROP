// Chapter 19 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-19).
//
// Slides are supplied as pre-rendered PNGs in public/chapter-19/slides.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[]; gapBefore?: 'half' }
export type SyncBreakPoint = { sectionId: string; blockIndex: number; itemIndex?: number }

export const chapter19Slides: SyncSlide[] = [
  { src: '/chapter-19/slides/slide-01.png', title: 'Chapitre 19 : appareil génital féminin' },
  { src: '/chapter-19/slides/slide-02.png', title: 'La loge viscérale pelvienne' },
  { src: '/chapter-19/slides/slide-03.png', title: 'Morphologie et paroi de l’utérus' },
  { src: '/chapter-19/slides/slide-04.png', title: 'Orientation physiologique : antéversion et antéflexion' },
  { src: '/chapter-19/slides/slide-05.png', title: 'Moyens de soutien de l’utérus et modèle de la Croix de Richard' },
  { src: '/chapter-19/slides/slide-06.png', title: 'Vascularisation de l’utérus' },
  { src: '/chapter-19/slides/slide-07.png', title: 'Innervation autonome de l’utérus' },
  { src: '/chapter-19/slides/slide-08.png', title: 'La cinématique pelvienne' },
  { src: '/chapter-19/slides/slide-09.png', title: 'Topographie et variabilité de position de l’ovaire' },
  { src: '/chapter-19/slides/slide-10.png', title: 'Fixation et vascularisation ovarienne' },
  { src: '/chapter-19/slides/slide-11.png', title: 'Trompe utérine : segments et rapports avec l’ovaire' },
  { src: '/chapter-19/slides/slide-12.png', title: 'Ovaire : situation, rapports et mobilité' },
  { src: '/chapter-19/slides/slide-13.png', title: 'Physiologie hormonale : axe hypothalamo-hypophyso-ovarien' },
  { src: '/chapter-19/slides/slide-14.png', title: 'Cycle ovarien : trois temps clés' },
  { src: '/chapter-19/slides/slide-15.png', title: 'Pathologies courantes : quatre motifs principaux' },
  { src: '/chapter-19/slides/slide-16.png', title: 'Signes d’alerte gynécologiques — quand orienter rapidement' },
  { src: '/chapter-19/slides/slide-17.png', title: 'De la plainte à l’orientation' },
  { src: '/chapter-19/slides/slide-18.png', title: 'Douleurs pelviennes — douleurs cycliques' },
  { src: '/chapter-19/slides/slide-19.png', title: 'Douleurs pelviennes — douleurs non cycliques' },
  { src: '/chapter-19/slides/slide-20.png', title: 'Dyspareunies — superficielles, intermédiaires et profondes' },
  { src: '/chapter-19/slides/slide-21.png', title: 'Hémorragies génitales — ménorragies et métrorragies' },
  { src: '/chapter-19/slides/slide-22.png', title: 'Aménorrhées — primaires ou secondaires' },
  { src: '/chapter-19/slides/slide-23.png', title: 'Leucorrhées pathologiques — pertes vaginales anormales' },
  { src: '/chapter-19/slides/slide-24.png', title: 'Grossesse extra-utérine — urgence médicale' },
  { src: '/chapter-19/slides/slide-25.png', title: 'Salpingite — infection des trompes utérines' },
  { src: '/chapter-19/slides/slide-26.png', title: 'Fibrome utérin' },
  { src: '/chapter-19/slides/slide-27.png', title: 'Kystes ovariens — fonctionnels ou organiques' },
  { src: '/chapter-19/slides/slide-28.png', title: 'Pathologies fonctionnelles et chaînes lésionnelles' },
  { src: '/chapter-19/slides/slide-29.png', title: 'Conséquences possibles d’une perte de mobilité pelvienne' },
  { src: '/chapter-19/slides/slide-30.png', title: 'Syndrome prémenstruel — manifestations de la phase lutéale' },
  { src: '/chapter-19/slides/slide-31.png', title: 'Règles douloureuses — rôle des prostaglandines' },
  { src: '/chapter-19/slides/slide-32.png', title: 'Endométriose : maladie inflammatoire chronique' },
  { src: '/chapter-19/slides/slide-33.png', title: 'Vécu émotionnel, stress et symptômes uro-génitaux ou mammaires' },
  { src: '/chapter-19/slides/slide-34.png', title: 'Synthèse du protocole ROP — utérus, ovaires et trompes' },
]

export const chapter19SlideAnchors: SyncAnchor[] = [
  { sectionId: 'uterus-presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'uterus-presentation', blockIndex: 1, slide: 2 },
  { sectionId: 'uterus-anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'uterus-anatomie', blockIndex: 6, slide: 4 },
  { sectionId: 'uterus-anatomie', blockIndex: 10, slide: 5 },
  { sectionId: 'uterus-vascularisation', blockIndex: -1, slide: 6 },
  { sectionId: 'uterus-innervation', blockIndex: -1, slide: 7 },
  { sectionId: 'uterus-physiologie', blockIndex: 0, slide: 8 },
  { sectionId: 'ovaires-trompes-situation', blockIndex: 0, slide: 9 },
  { sectionId: 'ovaires-trompes-anatomie', blockIndex: 2, slide: 10 },
  { sectionId: 'ovaires-trompes-anatomie', blockIndex: 4, slide: 11 },
  { sectionId: 'ovaires-trompes-rapports', blockIndex: 0, slide: 12 },
  { sectionId: 'ovaires-trompes-physiologie', blockIndex: 4, slide: 13 },
  { sectionId: 'ovaires-trompes-physiologie', blockIndex: 6, slide: 14 },
  { sectionId: 'approche-clinique-commune', blockIndex: 0, slide: 15 },
  { sectionId: 'approche-clinique-commune', blockIndex: 1, slide: [16, 17] },
  { sectionId: 'approche-clinique-commune', blockIndex: 4, itemIndex: 0, slide: 18 },
  { sectionId: 'approche-clinique-commune', blockIndex: 4, itemIndex: 1, slide: 19 },
  { sectionId: 'approche-clinique-commune', blockIndex: 4, itemIndex: 2, slide: 20 },
  { sectionId: 'approche-clinique-commune', blockIndex: 6, slide: 21 },
  { sectionId: 'approche-clinique-commune', blockIndex: 8, slide: 22 },
  { sectionId: 'approche-clinique-commune', blockIndex: 10, slide: 23 },
  { sectionId: 'approche-clinique-commune', blockIndex: 13, itemIndex: 0, slide: 24 },
  { sectionId: 'approche-clinique-commune', blockIndex: 13, itemIndex: 2, slide: 25 },
  { sectionId: 'approche-clinique-commune', blockIndex: 13, itemIndex: 4, slide: [26, 27] },
  { sectionId: 'approche-clinique-commune', blockIndex: 16, slide: 28 },
  { sectionId: 'approche-clinique-commune', blockIndex: 18, slide: 29 },
  { sectionId: 'approche-clinique-commune', blockIndex: 20, slide: 30 },
  { sectionId: 'approche-clinique-commune', blockIndex: 22, slide: 31 },
  { sectionId: 'approche-clinique-commune', blockIndex: 24, slide: 32 },
  { sectionId: 'approche-clinique-commune', blockIndex: 29, slide: 33 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 34 },
]

export const chapter19HalfBreaks: SyncBreakPoint[] = [
  { sectionId: 'approche-clinique-commune', blockIndex: 2 },
  { sectionId: 'approche-clinique-commune', blockIndex: 5 },
  { sectionId: 'approche-clinique-commune', blockIndex: 11 },
  { sectionId: 'approche-clinique-commune', blockIndex: 15 },
  { sectionId: 'approche-clinique-commune', blockIndex: 23 },
  { sectionId: 'approche-clinique-commune', blockIndex: 28 },
]

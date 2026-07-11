// Chapter 15 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-15).
//
// Slides 1-13 are pre-rendered from:
// public/chapter-15/Chapter15 Slides de synthese - FR.pdf
//
// Slides 14-26 are pre-rendered from:
// public/chapter-15/Chapter15 Pathologies courantes - FR.pdf
//
// Slides 27+ reuse the cartography/photo pages from:
// public/chapter-15/Chapter15 Cartographie et Photos.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter15Slides: SyncSlide[] = [
  { src: '/chapter-15/slides/slide-01.png', title: 'Colon et rectum' },
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
  { src: '/chapter-15/slides/slide-13.png', title: 'Synthese viscero-somatique' },
  { src: '/chapter-15/slides/pathologies/slide-01.png', title: 'Pathologies : diagnostics d exclusion' },
  { src: '/chapter-15/slides/pathologies/slide-02.png', title: 'Pathologies organiques severes' },
  { src: '/chapter-15/slides/pathologies/slide-03.png', title: 'Equilibre du transit au quotidien' },
  { src: '/chapter-15/slides/pathologies/slide-04.png', title: 'Inhibition du reflexe de defecation' },
  { src: '/chapter-15/slides/pathologies/slide-05.png', title: 'Constipation distale ou proximale' },
  { src: '/chapter-15/slides/pathologies/slide-06.png', title: 'Constipations proximales droites' },
  { src: '/chapter-15/slides/pathologies/slide-07.png', title: 'Gastroparesie et reflexe gastro-colique' },
  { src: '/chapter-15/slides/pathologies/slide-08.png', title: 'Controle systemique du transit' },
  { src: '/chapter-15/slides/pathologies/slide-09.png', title: 'Constipations distales gauches' },
  { src: '/chapter-15/slides/pathologies/slide-10.png', title: 'Epreinte et tenesme' },
  { src: '/chapter-15/slides/pathologies/slide-11.png', title: 'Complications mecaniques' },
  { src: '/chapter-15/slides/pathologies/slide-12.png', title: 'Distinguer les colopathies' },
  { src: '/chapter-15/slides/pathologies/slide-13.png', title: 'Cercle vicieux de la colopathie fonctionnelle' },
  { src: '/chapter-15/cartographie/figure-15-01.png', title: 'Cartographie : Nerf vague X - moelle allongee' },
  { src: '/chapter-15/cartographie/figure-15-03.png', title: 'Cartographie : Nerf vague X - foramen jugulaire' },
  { src: '/chapter-15/cartographie/figure-15-05.png', title: 'Cartographie : Parasympathique pelvien sacre' },
  { src: '/chapter-15/cartographie/figure-15-07.png', title: 'Cartographie : Origine medullaire du sympathique' },
  { src: '/chapter-15/cartographie/figure-15-09.png', title: 'Cartographie : Chaine ganglionnaire latero-vertebrale thoracique' },
  { src: '/chapter-15/cartographie/figure-15-11.png', title: 'Cartographie : Colon ascendant et colon transverse' },
  { src: '/chapter-15/cartographie/figure-15-13.png', title: 'Cartographie : Colon transverse et colon descendant' },
  { src: '/chapter-15/cartographie/figure-15-21.png', title: 'Cartographie : Rectum, anus et mesosigmoide' },
]

// English deck - rendered from the dedicated English synthesis slides
// (public/chapter-15/slides/en). It intentionally stays on the earlier English
// artwork until a matching English rework deck is provided.
const chapter15SlidesEnBySource: SyncSlide[] = [
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

const chapter15ReadingOrderEn = [1, 2, 3, 4, 5, 6, 8, 9, 10, 7, 11, 12, 13, 14, 15, 16, 17]
const chapter15SlideNumberByReadingOrderEn = new Map(chapter15ReadingOrderEn.map((sourceSlide, index) => [sourceSlide, index + 1]))

function remapChapter15SlideEn(slide: number) {
  return chapter15SlideNumberByReadingOrderEn.get(slide) ?? slide
}

export const chapter15SlidesEn: SyncSlide[] = chapter15ReadingOrderEn.map((slideNumber) => chapter15SlidesEnBySource[slideNumber - 1])

export const chapter15SlidesDe: SyncSlide[] = chapter15Slides
export const chapter15SlidesEs: SyncSlide[] = chapter15Slides
export const chapter15SlidesIt: SyncSlide[] = chapter15Slides

export const chapter15SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 11, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 18, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 22, slide: 6 },
  { sectionId: 'physiologie', blockIndex: 4, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'innervation', blockIndex: 2, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 5, slide: 12 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 1, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 3, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 5, slide: 16 },
  { sectionId: 'pathologies-courantes', blockIndex: 9, slide: 17 },
  { sectionId: 'pathologies-courantes', blockIndex: 11, slide: 18 },
  { sectionId: 'pathologies-courantes', blockIndex: 13, slide: 19 },
  { sectionId: 'pathologies-courantes', blockIndex: 15, slide: 20 },
  { sectionId: 'pathologies-courantes', blockIndex: 17, slide: 21 },
  { sectionId: 'pathologies-courantes', blockIndex: 19, slide: 22 },
  { sectionId: 'pathologies-courantes', blockIndex: 21, slide: 23 },
  { sectionId: 'pathologies-courantes', blockIndex: 23, slide: 24 },
  { sectionId: 'pathologies-courantes', blockIndex: 25, slide: 25 },
  { sectionId: 'pathologies-courantes', blockIndex: 27, slide: 26 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 27 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 27 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 28 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 3, slide: 29 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 5, slide: 30 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 31 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 8, slide: 32 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 14, slide: 33 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 20, slide: 34 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 22, slide: 34 },
]

const chapter15SlideAnchorsEnBySource: SyncAnchor[] = [
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

export const chapter15SlideAnchorsEn: SyncAnchor[] = chapter15SlideAnchorsEnBySource.map((anchor) => ({
  ...anchor,
  slide: remapChapter15SlideEn(anchor.slide),
}))

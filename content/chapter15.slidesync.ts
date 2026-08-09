// Chapter 15 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-15).
//
// Slides 1-15 come from the current French synthesis deck.
//
// Slides 16-28 come from the current French "Pathologies courantes" deck.
//
// Slides 29+ retain the existing cartography/photo assets.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter15Slides: SyncSlide[] = [
  { src: '/chapter-15/slides/slide-01.png', title: 'Chapitre 15 : côlon et rectum' },
  { src: '/chapter-15/slides/slide-02.png', title: 'L’architecture du cadre colique' },
  { src: '/chapter-15/slides/slide-03.png', title: 'Situation et trajet du côlon' },
  { src: '/chapter-15/slides/slide-04.png', title: 'Cæcum, jonction iléo-cæcale et appendice' },
  { src: '/chapter-15/slides/slide-05.png', title: 'Côlon transverse et angles coliques' },
  { src: '/chapter-15/slides/slide-06.png', title: 'Côlon descendant, sigmoïde et mésosigmoïde' },
  { src: '/chapter-15/slides/slide-07.png', title: 'Rectum, angle ano-rectal et canal anal' },
  { src: '/chapter-15/slides/slide-08.png', title: 'Rapports anatomiques du cadre colique' },
  { src: '/chapter-15/slides/slide-09.png', title: 'Vascularisation du côlon et drainage veineux rectal' },
  { src: '/chapter-15/slides/slide-10.png', title: 'Innervation autonome du côlon' },
  { src: '/chapter-15/slides/slide-11.png', title: 'Innervation du rectum et de l’anus' },
  { src: '/chapter-15/slides/slide-12.png', title: 'Physiologie du côlon : fermentation, réabsorption et motricité' },
  { src: '/chapter-15/slides/slide-13.png', title: 'Rectum, anus et mécanisme de la défécation' },
  { src: '/chapter-15/slides/slide-14.png', title: 'Physiologie du côlon, du rectum et de l’anus' },
  { src: '/chapter-15/slides/pathologies/slide-01.png', title: 'Pathologies organiques sévères et signes d’alerte' },
  { src: '/chapter-15/slides/pathologies/slide-02.png', title: 'Principales pathologies organiques du côlon et du rectum' },
  { src: '/chapter-15/slides/pathologies/slide-03.png', title: 'Les habitudes qui influencent le transit' },
  { src: '/chapter-15/slides/pathologies/slide-04.png', title: 'Quand le réflexe de défécation diminue' },
  { src: '/chapter-15/slides/pathologies/slide-05.png', title: 'Constipation proximale ou distale' },
  { src: '/chapter-15/slides/pathologies/slide-06.png', title: 'Constipation proximale' },
  { src: '/chapter-15/slides/pathologies/slide-07.png', title: 'Gastroparésie et réflexe gastro-colique' },
  { src: '/chapter-15/slides/pathologies/slide-09.png', title: 'Contrôle systémique du transit' },
  { src: '/chapter-15/slides/pathologies/slide-08.png', title: 'Constipation distale' },
  { src: '/chapter-15/slides/pathologies/slide-10.png', title: 'Épreinte et ténesme : deux sensations différentes' },
  { src: '/chapter-15/slides/pathologies/slide-11.png', title: 'Complications possibles d’une constipation prolongée' },
  { src: '/chapter-15/slides/pathologies/slide-12.png', title: 'Distinguer les grands types de colopathies' },
  { src: '/chapter-15/slides/pathologies/slide-13.png', title: 'Le cercle vicieux de la colopathie fonctionnelle' },
  { src: '/chapter-15/slides/slide-15.png', title: 'Relations viscéro-somatiques du côlon' },
  { src: '/chapter-15/cartographie/figure-15-01.png', title: 'Cartographie : nerf vague X — moelle allongée' },
  { src: '/chapter-15/cartographie/figure-15-03.png', title: 'Cartographie : nerf vague X — foramen jugulaire' },
  { src: '/chapter-15/cartographie/figure-15-05.png', title: 'Cartographie : parasympathique pelvien sacré' },
  { src: '/chapter-15/cartographie/figure-15-07.png', title: 'Cartographie : origine médullaire du sympathique' },
  { src: '/chapter-15/cartographie/figure-15-09.png', title: 'Cartographie : chaîne ganglionnaire latéro-vertébrale thoracique' },
  { src: '/chapter-15/cartographie/figure-15-11.png', title: 'Cartographie : côlon ascendant et côlon transverse' },
  { src: '/chapter-15/cartographie/figure-15-13.png', title: 'Cartographie : côlon transverse et côlon descendant' },
  { src: '/chapter-15/cartographie/figure-15-21.png', title: 'Cartographie : rectum, anus et mésosigmoïde' },
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
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 12, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 24, slide: 7 },
  { sectionId: 'rapports', blockIndex: 0, slide: 8 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 9 },
  { sectionId: 'innervation', blockIndex: 0, slide: 10 },
  { sectionId: 'innervation', blockIndex: 5, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 12 },
  { sectionId: 'physiologie', blockIndex: 3, slide: 13 },
  { sectionId: 'physiologie', blockIndex: 8, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 1, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 3, slide: 16 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 0, slide: 17 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 3, slide: 18 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 5, slide: 19 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 7, slide: 20 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 9, slide: 21 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 11, slide: 22 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 13, slide: 23 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 15, slide: 24 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 17, slide: 25 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 19, slide: 26 },
  { sectionId: 'indications-troubles-fonctionnels', blockIndex: 21, slide: 27 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 28 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 29 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 30 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 22, slide: 31 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 17, slide: 32 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 18, slide: 33 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 33, slide: 34 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 44, slide: 35 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 48, slide: 36 },
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

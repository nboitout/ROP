// Chapter 15 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-15).
//
// Slides 1-15 come from the current French synthesis deck.
//
// Slides 16-28 come from the current French "Pathologies courantes" deck.
//
// Slides 29-33 are the five reflex cartographies. Each is anchored directly
// to its matching treatment photo in the text column.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number; end?: SyncAnchorPoint; gapBefore?: 'half' }

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
  { src: '/chapter-15/cartographie/figure-15-01.png', title: 'Cartographie : côlon transverse et côlon descendant' },
  { src: '/chapter-15/cartographie/figure-15-03.png', title: 'Cartographie : valvule iléo-cæcale, côlon ascendant et côlon transverse' },
  { src: '/chapter-15/cartographie/figure-15-05.png', title: 'Cartographie : racine du mésocôlon transverse — premier segment' },
  { src: '/chapter-15/cartographie/figure-15-07.png', title: 'Cartographie : racine du mésocôlon transverse — second segment' },
  { src: '/chapter-15/cartographie/figure-15-09.png', title: 'Cartographie : rectum, anus et mésosigmoïde' },
]

export const chapter15SlidesEn: SyncSlide[] = [
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 1.png', title: 'Chapter 15 — Colon and Rectum' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 2.png', title: 'Anatomical Relationships of the Colonic Framework' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 3.png', title: 'Location and Course of the Colon' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 4.png', title: 'Cecum, Ileocecal Junction and Appendix' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 5.png', title: 'Transverse Colon and Colic Flexures' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 6.png', title: 'Descending Colon, Sigmoid Colon and Mesosigmoid' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 7.png', title: 'Rectum, Anorectal Angle, and Anal Canal' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 8.png', title: 'The Architecture of the Colonic Frame' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 9.png', title: 'Vascularization of the Colon and Rectal Venous Drainage' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 10.png', title: 'Rectum, Anus and Mechanism of Defecation' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 11.png', title: 'Innervation of the Rectum and Anus' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 12.png', title: 'Physiology of the Colon: Fermentation, Reabsorption, and Motility' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 13.png', title: 'Autonomic Innervation of the Colon' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 14.png', title: 'Physiology of the Colon, Rectum, and Anus' },
  { src: '/chapter-15/EN/Images/NCH 15 EN IMG 15.png', title: 'Colon — Viscero-Somatic Relations' },
]

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
  {
    sectionId: 'relations-viscero-somatiques',
    blockIndex: 0,
    slide: 28,
    end: { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 },
  },
  { sectionId: 'zones-reflexes-podales', blockIndex: 3, slide: 29, end: { sectionId: 'zones-reflexes-podales', blockIndex: 3 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 22, slide: 30, end: { sectionId: 'zones-reflexes-podales', blockIndex: 22 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 27, slide: 31, end: { sectionId: 'zones-reflexes-podales', blockIndex: 27 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 28, slide: 32, end: { sectionId: 'zones-reflexes-podales', blockIndex: 28 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 31, slide: 33, end: { sectionId: 'zones-reflexes-podales', blockIndex: 31 } },
]

export const chapter15HalfBreaks: SyncAnchorPoint[] = [
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 },
]

export const chapter15SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'rapports', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 14, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 30, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 39, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 1, slide: 8 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 4, slide: 10 },
  { sectionId: 'innervation', blockIndex: 11, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 12 },
  { sectionId: 'innervation', blockIndex: 0, slide: 13 },
  { sectionId: 'physiologie', blockIndex: 2, slide: 14 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 15 },
]

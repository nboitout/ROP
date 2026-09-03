// Chapter 13 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-13).
//
// Slides 1-19 come from the current synthesis deck. Slides 20-21 retain the
// existing cartography assets and their established positions in the text.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & {
  slide: number | number[]
  gapBefore?: 'half'
  end?: SyncAnchorPoint
}

export const chapter13Slides: SyncSlide[] = [
  { src: '/chapter-13/FR/slides/slide-01.png', title: 'Chapitre 13 : la rate' },
  { src: '/chapter-13/FR/slides/slide-02.png', title: 'La rate : identité et fonctions essentielles' },
  { src: '/chapter-13/FR/slides/slide-03.png', title: 'La rate : organisation et fonctionnement' },
  { src: '/chapter-13/FR/slides/slide-04.png', title: 'Situation topographique de la rate' },
  { src: '/chapter-13/FR/slides/slide-05.png', title: 'Morphologie externe : faces, bords et pôles' },
  { src: '/chapter-13/FR/slides/slide-06.png', title: 'Structure du parenchyme splénique' },
  { src: '/chapter-13/FR/slides/slide-07.png', title: 'Moyens de fixité de la rate' },
  { src: '/chapter-13/FR/slides/slide-08.png', title: 'Moyens de fixité de la rate : rapports péritonéaux' },
  { src: '/chapter-13/FR/slides/slide-09.png', title: 'Rapports anatomiques de la rate' },
  { src: '/chapter-13/FR/slides/slide-10.png', title: 'Vascularisation de la rate' },
  { src: '/chapter-13/FR/slides/slide-11.png', title: 'Innervation autonome et zone d’écoute ROP' },
  { src: '/chapter-13/FR/slides/slide-12.png', title: 'Physiologie du parenchyme splénique' },
  { src: '/chapter-13/FR/slides/slide-13.png', title: 'Splénomégalie : signes d’alerte et orientation médicale' },
  { src: '/chapter-13/FR/slides/slide-14.png', title: 'Traumatismes spléniques : mécanismes et signes d’urgence' },
  { src: '/chapter-13/FR/slides/slide-15.png', title: 'Mononucléose : splénomégalie et précautions' },
  { src: '/chapter-13/FR/slides/slide-16.png', title: 'Indications fonctionnelles en ROP — principe de prudence' },
  { src: '/chapter-13/FR/slides/slide-17.png', title: 'Relations viscéro-somatiques de la rate' },
  { src: '/chapter-13/FR/slides/slide-18.png', title: 'Relations viscéro-émotionnelles' },
  { src: '/chapter-13/FR/slides/slide-20.png', title: 'Synthèse ROP : écoute de la rate' },
  { src: '/chapter-13/FR/cartographie/figure-13-01.png', title: 'Cartographie : articulations costo-vertébrales' },
  { src: '/chapter-13/FR/cartographie/figure-13-03.png', title: 'Cartographie : rate' },
]

export const chapter13SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'presentation', blockIndex: 2, slide: 3 },
  { sectionId: 'situation', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 3, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 6, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 7, slide: 8 },
  { sectionId: 'rapports', blockIndex: 0, slide: 9 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 10 },
  { sectionId: 'innervation', blockIndex: 0, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 1, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 8, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 12, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 17, slide: 16 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 17 },
  {
    sectionId: 'relations-viscero-emotionnelles',
    blockIndex: 0,
    slide: 18,
    end: { sectionId: 'relations-viscero-emotionnelles', blockIndex: 2 },
  },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 19, slide: 20, end: { sectionId: 'zones-reflexes-podales', blockIndex: 19 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 21, end: { sectionId: 'zones-reflexes-podales', blockIndex: 2 } },
]

export const chapter13SlidesEn: SyncSlide[] = [
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 1.png', title: 'Chapter 13 — The Spleen' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 2.png', title: 'The Spleen: Identity and Essential Functions' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 3.png', title: 'The Spleen: Organization and Function' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 4.png', title: 'Topographic Location of the Spleen' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 5.png', title: 'External Morphology: Surfaces, Borders, and Poles' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 6.png', title: 'Structure of the Spleen Parenchyma' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 7.png', title: 'Fixation of the Spleen' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 8.png', title: 'Means of Fixation of the Spleen' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 9.png', title: 'Anatomical Relations of the Spleen' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 10.png', title: 'Vascular Supply of the Spleen' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 11.png', title: 'Autonomic Innervation and ROP Listening Zone' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 12.png', title: 'Spleen Parenchyma Physiology' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 13.png', title: 'Splenomegaly: Warning Signs and Medical Guidance' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 14.png', title: 'Splenic Trauma: Mechanisms and Signs of Urgency' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 15.png', title: 'Infectious Mononucleosis: Splenomegaly and Precautions' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 16.png', title: 'Functional Indications in ROP — Principle of Caution' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 17.png', title: 'Viscero-Somatic Relationships of the Spleen' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 18.png', title: 'Splenic Trauma: Mechanisms and Signs of Urgency' },
  { src: '/chapter-13/EN/Images/NCH 13 EN IMG 20.png', title: 'Viscero-Somatic Relationships of the Spleen' },
]

export const chapter13SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 1, slide: 2 },
  { sectionId: 'presentation', blockIndex: 2, slide: 3 },
  { sectionId: 'situation', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 10, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 14, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 15, slide: 8 },
  { sectionId: 'rapports', blockIndex: 0, slide: 9 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 10 },
  { sectionId: 'innervation', blockIndex: 0, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 1, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 17, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 22, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 32, slide: 16 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 17 },
  { sectionId: 'pathologies-courantes', blockIndex: 19, slide: 18 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 1, slide: 19 },
]

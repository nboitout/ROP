// Chapter 21 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-21).
//
// Slides are pre-rendered from the current Chapter 21 synthesis deck.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half'; end?: { sectionId: string; blockIndex: number; itemIndex?: number } }
export type SyncBreakPoint = { sectionId: string; blockIndex: number; itemIndex?: number }

export const chapter21Slides: SyncSlide[] = [
  { src: '/chapter-21/FR/slides/slide-01.png', title: 'Chapitre 21 : système érectile masculin et féminin' },
  { src: '/chapter-21/FR/slides/slide-02.png', title: 'Fonction et situation anatomique' },
  { src: '/chapter-21/FR/slides/slide-03.png', title: 'La dynamique musculaire' },
  { src: '/chapter-21/FR/slides/slide-04.png', title: 'Glandes annexes et vascularisation' },
  { src: '/chapter-21/FR/slides/slide-05.png', title: 'Réseau vasculaire et drainage' },
  { src: '/chapter-21/FR/slides/slide-06.png', title: 'Innervation somatique : le nerf pudendal' },
  { src: '/chapter-21/FR/slides/slide-07.png', title: 'Séquence physiologique de la réponse sexuelle' },
  { src: '/chapter-21/FR/slides/slide-08.png', title: 'Pathologies courantes et facteurs associés' },
  { src: '/chapter-21/FR/slides/slide-09.png', title: 'Relations viscéro-somatiques' },
  { src: '/chapter-21/FR/slides/slide-10.png', title: 'La dimension psycho-émotionnelle' },
  { src: '/chapter-21/FR/slides/slide-11.png', title: 'Protocole clinique ROP : système érectile masculin et féminin' },
  { src: '/chapter-21/FR/cartographie/figure-21-01.png', title: 'Cartographie ROP : grand foramen ischiatique' },
  { src: '/chapter-21/FR/cartographie/figure-21-03.png', title: 'Cartographie ROP : petit foramen ischiatique' },
  { src: '/chapter-21/FR/cartographie/figure-21-05.png', title: 'Cartographie ROP : ligaments sacro-tubéral et sacro-épineux' },
  { src: '/chapter-21/FR/cartographie/figure-21-07.png', title: 'Cartographie ROP : ligament et canal inguinaux' },
  { src: '/chapter-21/FR/cartographie/figure-21-09.png', title: 'Cartographie ROP : nerf pudendal et organes érectiles' },
  { src: '/chapter-21/FR/cartographie/figure-21-11.png', title: 'Cartographie ROP : nerf olfactif I' },
]

export const chapter21SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'situation', blockIndex: -1, slide: 2 },
  { sectionId: 'anatomie', blockIndex: -1, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 7, slide: 4 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 5 },
  { sectionId: 'innervation', blockIndex: -1, slide: 6 },
  { sectionId: 'physiologie', blockIndex: -1, slide: 7 },
  { sectionId: 'pathologies-courantes', blockIndex: -1, slide: 8 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 9 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 10 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 11 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 31, slide: 17, end: { sectionId: 'zones-reflexes-podales', blockIndex: 31 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 15, end: { sectionId: 'zones-reflexes-podales', blockIndex: 16 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 24, slide: 12, end: { sectionId: 'zones-reflexes-podales', blockIndex: 24 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 25, slide: 13, end: { sectionId: 'zones-reflexes-podales', blockIndex: 25 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 26, slide: 14, end: { sectionId: 'zones-reflexes-podales', blockIndex: 26 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 27, slide: 16, end: { sectionId: 'zones-reflexes-podales', blockIndex: 27 } },
]

export const chapter21HalfBreaks: SyncBreakPoint[] = [
  { sectionId: 'innervation', blockIndex: -1 },
  { sectionId: 'physiologie', blockIndex: -1 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 },
]

// EN REVISED DECK CHAPTER 21
export const chapter21SlidesEn: SyncSlide[] = [
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 1.png', title: 'Chapter 21: Male and Female Erectile System' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 2.png', title: 'Function and Anatomical Location' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 3.png', title: 'Muscular Dynamics' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 4.png', title: 'Accessory Glands and Vascular Supply' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 5.png', title: 'Vascular Network and Drainage' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 7.png', title: 'Physiological Sequence of the Sexual Response' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 8.png', title: 'Common Disorders and Associated Factors' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 9.png', title: 'Viscerosomatic Relationships' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 10.png', title: 'The Psycho-Emotional Dimension' },
  { src: '/chapter-21/EN/Images/NCH 21 EN IMG 11.png', title: 'ROP Clinical Protocol: Male and Female Erectile System' },
]

export const chapter21SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'situation', blockIndex: -1, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 7, slide: 4 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 5 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 6 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 7 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 8 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 9 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 10 },
]

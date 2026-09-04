// Chapter 6 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-6).
//
// Slides are supplied as pre-rendered PNGs in public/chapter-6/slides.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter6Slides: SyncSlide[] = [
  { src: '/chapter-6/FR/slides/slide-01.png', title: 'Théorie polyvagale et ROP' },
  { src: '/chapter-6/FR/slides/slide-02.png', title: 'Du syndrome général d’adaptation à la théorie polyvagale' },
  { src: '/chapter-6/FR/slides/slide-03.png', title: 'Modèle évolutif du système autonome' },
  { src: '/chapter-6/FR/slides/slide-04.png', title: 'Phase 1 — complexe vagal dorsal' },
  { src: '/chapter-6/FR/slides/slide-05.png', title: 'Phase 2 — système sympathique' },
  { src: '/chapter-6/FR/slides/slide-06.png', title: 'Phase 3 — complexe vagal ventral' },
  { src: '/chapter-6/FR/slides/slide-07.png', title: 'Du stress au malaise vagal' },
  { src: '/chapter-6/FR/slides/slide-08.png', title: 'Le paradoxe vagal' },
  { src: '/chapter-6/FR/slides/slide-09.png', title: 'Les deux composantes du nerf vague selon la TPV' },
  { src: '/chapter-6/FR/slides/slide-10.png', title: 'La neurophysiologie de l’engagement social' },
  { src: '/chapter-6/FR/slides/slide-11.png', title: 'De l’attachement précoce à l’engagement social' },
  { src: '/chapter-6/FR/slides/slide-12.png', title: 'Neuroception : détection subconsciente' },
  { src: '/chapter-6/FR/slides/slide-13.png', title: 'Conséquences cliniques d’un stress prolongé selon la TPV' },
  { src: '/chapter-6/FR/slides/slide-14.png', title: 'L’impératif thérapeutique ROP : une approche hiérarchisée' },
  { src: '/chapter-6/FR/slides/slide-15.png', title: 'Protocole ROP : l’étage supérieur' },
  { src: '/chapter-6/FR/slides/slide-16.png', title: 'Protocole ROP II : l’étage moyen' },
  { src: '/chapter-6/FR/slides/slide-17.png', title: 'Protocole ROP III : l’étage inférieur' },
  { src: '/chapter-6/FR/slides/slide-18.png', title: 'Synthèse : la carte polyvagale ROP' },
]

export const chapter6SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation-generale', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation-generale', blockIndex: 2, slide: 2 },
  { sectionId: 'theorie-polyvagale', blockIndex: 0, slide: 3 },
  { sectionId: 'theorie-polyvagale', blockIndex: 2, slide: 4 },
  { sectionId: 'theorie-polyvagale', blockIndex: 3, slide: 5 },
  { sectionId: 'theorie-polyvagale', blockIndex: 4, slide: 6 },
  { sectionId: 'malaise-vagal', blockIndex: 0, slide: 7 },
  { sectionId: 'malaise-vagal', blockIndex: 1, slide: 8 },
  { sectionId: 'anatomie-nerf-vague', blockIndex: 1, slide: 9 },
  { sectionId: 'engagement-social', blockIndex: 0, slide: 10 },
  { sectionId: 'engagement-social', blockIndex: 2, slide: 11 },
  { sectionId: 'neuroception', blockIndex: 0, slide: 12 },
  { sectionId: 'consequences-cliniques', blockIndex: 0, slide: 13 },
  { sectionId: 'consequences-cliniques', blockIndex: 4, slide: 14 },
  { sectionId: 'application-clinique-rop', blockIndex: 0, slide: 15 },
  { sectionId: 'application-clinique-rop', blockIndex: 3, slide: 16 },
  { sectionId: 'application-clinique-rop', blockIndex: 4, slide: 17 },
  { sectionId: 'application-clinique-rop', blockIndex: 5, slide: 18 },
]

export const chapter6SlidesEn: SyncSlide[] = [
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 1 V2.png', title: 'Polyvagal Theory and ROP' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 2 V2.png', title: 'From General Adaptation Syndrome to Polyvagal Theory' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 3 V2.png', title: 'Evolutionary Model of the Autonomic Nervous System' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 4 V2.png', title: 'Phase 1 — Complexe dorsal vagal' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 5 V2.png', title: 'Phase 2 — Sympathetic System' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 6.png', title: 'Phase 3 — Ventral vagal complex' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 7 V2.png', title: 'From Stress to Vasovagal Malaise' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 8.png', title: 'The vagal paradox' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 9 V2.png', title: 'The two components of the vagus nerve according to the PVS' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 10 V2.png', title: 'The neurophysiology of social engagement' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 11 V2.png', title: 'The neurophysiology of social engagement' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 12.png', title: 'Neuroception: subconscious detection' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 13.png', title: 'Clinical Consequences of Prolonged Stress According to ROP' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 14.png', title: 'ROP therapeutic approach: A hierarchical method' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 15.png', title: 'ROP Protocol: The Upper Level' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 16 V2.png', title: 'Protocole ROP II: The middle level' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 17 V2.png', title: 'Protocole ROP III: The lower level' },
  { src: '/chapter-6/EN/Images/NCH 6 EN IMG 18.png', title: 'Synthesis: The Polyvagal ROP Map' },
]

export const chapter6SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation-generale', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation-generale', blockIndex: 0, slide: 2 },
  { sectionId: 'theorie-polyvagale', blockIndex: -1, slide: 3 },
  { sectionId: 'theorie-polyvagale', blockIndex: 0, itemIndex: 3, slide: 4 },
  { sectionId: 'theorie-polyvagale', blockIndex: 0, itemIndex: 5, slide: 5 },
  { sectionId: 'theorie-polyvagale', blockIndex: 0, itemIndex: 6, slide: 6 },
  { sectionId: 'malaise-vagal', blockIndex: -1, slide: 7 },
  { sectionId: 'malaise-vagal', blockIndex: 1, slide: 8 },
  { sectionId: 'anatomie-nerf-vague', blockIndex: -1, slide: 9 },
  { sectionId: 'engagement-social', blockIndex: -1, slide: 10 },
  { sectionId: 'engagement-social', blockIndex: 0, itemIndex: 8, slide: 11 },
  { sectionId: 'neuroception', blockIndex: -1, slide: 12 },
  { sectionId: 'consequences-cliniques', blockIndex: -1, slide: 13 },
  { sectionId: 'consequences-cliniques', blockIndex: 1, slide: 14 },
  { sectionId: 'application-clinique-rop', blockIndex: -1, slide: 15 },
  { sectionId: 'application-clinique-rop', blockIndex: 1, slide: 16 },
  { sectionId: 'application-clinique-rop', blockIndex: 2, slide: 17 },
  { sectionId: 'application-clinique-rop', blockIndex: 3, slide: 18 },
]

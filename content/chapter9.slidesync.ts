// Chapter 9 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-9).
//
// Slides 1-20 and 25 are pre-rendered pages of the chapter 9 synthesis deck,
// stored under public/chapter-9/slides/.
//
// Slides 21-24 reuse the cartography pages from:
// public/chapter-9/Chapter 9 Cartographie et Photos.pdf
//
// They are ordered here by their appearance in the reading flow, so the
// displayed slide numbers progress with the text rather than the source PDF
// page order.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number | number[]; gapBefore?: 'half'; end?: SyncAnchorPoint }

export const chapter9Slides: SyncSlide[] = [
  { src: '/chapter-9/slides/slide-01.png', title: 'Chapitre 9 : Estomac' },
  { src: '/chapter-9/slides/slide-02.png', title: 'Situation topographique' },
  { src: '/chapter-9/slides/slide-03.png', title: 'Morphologie et segments gastriques' },
  { src: '/chapter-9/slides/slide-04.png', title: 'Vascularisation et petite courbure' },
  { src: '/chapter-9/slides/slide-06.png', title: 'Les sphincters : gardiens du transit' },
  { src: '/chapter-9/slides/slide-05.png', title: 'Les rapports anatomiques' },
  { src: '/chapter-9/slides/slide-07.png', title: 'Vascularisation : l origine coeliaque' },
  { src: '/chapter-9/slides/slide-08.png', title: 'La balance neuro-vegetative' },
  { src: '/chapter-9/slides/slide-09.png', title: 'Le rythme gastrique : le pacemaker stomacal' },
  { src: '/chapter-9/slides/slide-10.png', title: 'La cascade neuro-hormonale' },
  { src: '/chapter-9/slides/slide-11.png', title: 'Matrice de la digestion chimico-hormonale' },
  { src: '/chapter-9/slides/slide-12.png', title: 'La vidange gastrique : le tamis pylorique' },
  { src: '/chapter-9/slides/slide-16.png', title: 'Le continuum pathologique gastrique' },
  { src: '/chapter-9/slides/slide-15.png', title: 'Drapeaux rouges : diagnostics d exclusion' },
  { src: '/chapter-9/slides/slide-14.png', title: 'Matrice des pathologies fonctionnelles' },
  { src: '/chapter-9/slides/slide-17.png', title: 'Focus clinique ROP : trois dysfonctions cles' },
  { src: '/chapter-9/slides/slide-18.png', title: 'Cascade pathologique : l hypochlorhydrie et le fer' },
  { src: '/chapter-9/slides/slide-20.png', title: 'Le profil emotionnel : l organe du moi social' },
  { src: '/chapter-9/slides/slide-21.png', title: 'Tableau de bord therapeutique ROP' },
  { src: '/chapter-9/slides/slide-19.png', title: 'Cartographie ROP : cibles reflexes' },
  { src: '/chapter-9/cartographie/figure-9-05.png', title: 'Cartographie : articulations costo-transversaires' },
  { src: '/chapter-9/cartographie/figure-9-03.png', title: 'Cartographie : hiatus oesophagien, nerfs vagues et estomac' },
  { src: '/chapter-9/cartographie/figure-9-07.png', title: 'Cartographie plantaire : estomac' },
  { src: '/chapter-9/cartographie/figure-9-09.png', title: 'Cartographie : relation cerveau limbique-estomac' },
  { src: '/chapter-9/slides/slide-13.png', title: 'La balance neuro-vegetative en ROP' },
]

export const chapter9SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 34, slide: 5 },
  { sectionId: 'rapports', blockIndex: 0, slide: 6 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 7 },
  { sectionId: 'innervation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 7, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 4, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 18, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 22, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 9, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 11, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 15, slide: 16 },
  { sectionId: 'pathologies-courantes', blockIndex: 28, slide: 17 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 18 },
  { sectionId: 'conseils', blockIndex: 0, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 20 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 21, end: { sectionId: 'zones-reflexes-podales', blockIndex: 4 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, slide: 22, end: { sectionId: 'zones-reflexes-podales', blockIndex: 8 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 8, slide: 23, end: { sectionId: 'zones-reflexes-podales', blockIndex: 9 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 11, slide: 24, gapBefore: 'half' },
  { sectionId: 'zones-reflexes-podales', blockIndex: 12, slide: 25 },
]

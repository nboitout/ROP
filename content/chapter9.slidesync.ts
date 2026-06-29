// Chapter 9 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-9).
//
// Slide images are the pre-rendered pages of the chapter 9 synthesis deck,
// stored under public/chapter-9/slides/. Each slide is anchored to the passage
// of the text it best illustrates.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter9Slides: SyncSlide[] = [
  { src: '/chapter-9/slides/slide-01.png', title: 'Chapitre 9 : Estomac' },
  { src: '/chapter-9/slides/slide-02.png', title: 'Situation topographique' },
  { src: '/chapter-9/slides/slide-03.png', title: 'Morphologie et segments gastriques' },
  { src: '/chapter-9/slides/slide-04.png', title: 'Vascularisation et petite courbure' },
  { src: '/chapter-9/slides/slide-05.png', title: 'Les rapports anatomiques' },
  { src: '/chapter-9/slides/slide-06.png', title: 'Les sphincters : gardiens du transit' },
  { src: '/chapter-9/slides/slide-07.png', title: 'Vascularisation : l origine coeliaque' },
  { src: '/chapter-9/slides/slide-08.png', title: 'La balance neuro-vegetative' },
  { src: '/chapter-9/slides/slide-09.png', title: 'Le rythme gastrique : le pacemaker stomacal' },
  { src: '/chapter-9/slides/slide-10.png', title: 'La cascade neuro-hormonale' },
  { src: '/chapter-9/slides/slide-11.png', title: 'Matrice de la digestion chimico-hormonale' },
  { src: '/chapter-9/slides/slide-12.png', title: 'La vidange gastrique : le tamis pylorique' },
  { src: '/chapter-9/slides/slide-13.png', title: 'La balance neuro-vegetative en ROP' },
  { src: '/chapter-9/slides/slide-14.png', title: 'Matrice des pathologies fonctionnelles' },
  { src: '/chapter-9/slides/slide-15.png', title: 'Drapeaux rouges : diagnostics d exclusion' },
  { src: '/chapter-9/slides/slide-16.png', title: 'Le continuum pathologique gastrique' },
  { src: '/chapter-9/slides/slide-17.png', title: 'Focus clinique ROP : trois dysfonctions cles' },
  { src: '/chapter-9/slides/slide-18.png', title: 'Cascade pathologique : l hypochlorhydrie et le fer' },
  { src: '/chapter-9/slides/slide-19.png', title: 'Cartographie ROP : cibles réflexes' },
  { src: '/chapter-9/slides/slide-20.png', title: 'Le profil emotionnel : l organe du moi social' },
  { src: '/chapter-9/slides/slide-21.png', title: 'Tableau de bord therapeutique ROP' },
]

export const chapter9SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 4 },
  { sectionId: 'rapports', blockIndex: 0, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 34, slide: 6 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 7 },
  { sectionId: 'innervation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 7, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 4, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 18, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 22, slide: 12 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, slide: 13, gapBefore: 'half' },
  { sectionId: 'pathologies-courantes', blockIndex: 11, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 9, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 16 },
  { sectionId: 'pathologies-courantes', blockIndex: 15, slide: 17 },
  { sectionId: 'pathologies-courantes', blockIndex: 28, slide: 18 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 19 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 20 },
  { sectionId: 'conseils', blockIndex: 0, slide: 21 },
]

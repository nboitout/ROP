export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter1Slides: SyncSlide[] = [
  { src: '/chapter-1/slides/slide-01.png', title: 'Chapitre 1 : Généralités biomécaniques et neurophysiologiques en ROP' },
  { src: '/chapter-1/slides/slide-02.png', title: 'Mobilité et motilité' },
  { src: '/chapter-1/slides/slide-03.png', title: 'Les quatre moteurs de la mobilité viscérale' },
  { src: '/chapter-1/slides/slide-04.png', title: 'Le diaphragme : moteur somatique principal' },
  { src: '/chapter-1/slides/slide-05.png', title: 'Régulation neurovégétative' },
  { src: '/chapter-1/slides/slide-06.png', title: 'La mobilité automatique : le choc mécanique cardiaque' },
  { src: '/chapter-1/slides/slide-07.png', title: 'La motilité et le mécanisme respiratoire primaire' },
  { src: '/chapter-1/slides/slide-08.png', title: 'Les articulations viscérales' },
  { src: '/chapter-1/slides/slide-09.png', title: 'Interstitium, sereuses et pressions' },
  { src: '/chapter-1/slides/slide-10.png', title: 'Les moyens d’union : haubans et passages' },
  { src: '/chapter-1/slides/slide-11.png', title: 'Exemple clinique des moyens d’union' },
  { src: '/chapter-1/slides/slide-12.png', title: 'La douleur projetée : convergence viscéro-somatique' },
  { src: '/chapter-1/slides/slide-13.png', title: 'Diagnostic différentiel et sécurité clinique' },
  { src: '/chapter-1/slides/slide-14.png', title: 'L’approche clinique ROP : le retour à l’équilibre' },
]

export const chapter1SlideAnchors: SyncAnchor[] = [
  { sectionId: 'intention', blockIndex: 0, slide: 1 },
  { sectionId: 'mobilite-viscerale', blockIndex: 1, slide: 2 },
  { sectionId: 'mobilite-viscerale', blockIndex: 7, slide: 3, gapBefore: 'half' },
  { sectionId: 'mobilite-viscerale', blockIndex: 12, slide: 4 },
  { sectionId: 'mobilite-viscerale', blockIndex: 16, slide: 5 },
  { sectionId: 'mobilite-viscerale', blockIndex: 18, slide: 6 },
  { sectionId: 'mrp', blockIndex: 0, slide: 7 },
  { sectionId: 'articulations-viscerales', blockIndex: 0, slide: 8 },
  { sectionId: 'articulations-viscerales', blockIndex: 6, slide: 9 },
  { sectionId: 'articulations-viscerales', blockIndex: 9, slide: 10 },
  { sectionId: 'articulations-viscerales', blockIndex: 10, slide: 11 },
  { sectionId: 'articulations-viscerales', blockIndex: 15, slide: 12 },
  { sectionId: 'securite', blockIndex: 0, slide: 13 },
  { sectionId: 'approche-clinique', blockIndex: 5, slide: 14 },
]

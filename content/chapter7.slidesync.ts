export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter7Slides: SyncSlide[] = [
  { src: '/chapter-7/slides/slide-01.png', title: 'Chapitre 7 - Cavites abdominale et peritoneale' },
  { src: '/chapter-7/slides/slide-02.png', title: 'Le contenant abdominal : frontieres et pressions' },
  { src: '/chapter-7/slides/slide-03.png', title: 'Les trois espaces visceraux (le contenu)' },
  { src: '/chapter-7/slides/slide-04.png', title: 'L architecture du peritoine' },
  { src: '/chapter-7/slides/slide-05.png', title: 'Architecture du peritoine : une sereuse complexe' },
  { src: '/chapter-7/slides/slide-06.png', title: 'L ecosysteme liquidien et la dynamique peritoneale' },
  { src: '/chapter-7/slides/slide-07.png', title: 'Dynamique des fluides : l aimantation diaphragmatique' },
  { src: '/chapter-7/slides/slide-08.png', title: 'Les amarres peritoneales : typologie des replis' },
  { src: '/chapter-7/slides/slide-09.png', title: 'Les racines et les mesos : les points d ancrage' },
  { src: '/chapter-7/slides/slide-10.png', title: 'Carrefours, hiatus et tensions mecaniques' },
  { src: '/chapter-7/slides/slide-11.png', title: 'L axe vasculaire principal' },
  { src: '/chapter-7/slides/slide-12.png', title: 'Double reseau nerveux : somatique et autonome' },
  { src: '/chapter-7/slides/slide-13.png', title: 'Physiologie parieto-viscerale : le role du transverse' },
  { src: '/chapter-7/slides/slide-14.png', title: 'Consequences mecaniques et pathologies' },
  { src: '/chapter-7/slides/slide-15.png', title: 'Synthèse somatique : les quatre quadrants' },
  { src: '/chapter-7/slides/slide-16.png', title: 'Cartographie des douleurs projetees' },
  { src: '/chapter-7/slides/slide-17.png', title: 'L approche ROP : de l anatomie a l equilibre' },
  { src: '/chapter-7/slides/slide-18.png', title: 'Synthèse clinique ROP : de l’abdomen au pied' },
]

export const chapter7SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 5, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 8, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 8 },
  { sectionId: 'interet-rop-racines', blockIndex: 0, slide: 9 },
  { sectionId: 'anatomie', blockIndex: 42, slide: 10 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 11 },
  { sectionId: 'innervation', blockIndex: 0, slide: 12 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 13 },
  { sectionId: 'physiologie', blockIndex: 12, slide: 7 },
  { sectionId: 'pathologie', blockIndex: 0, slide: 14 },
  { sectionId: 'relations-peritoneo-somatiques', blockIndex: 0, slide: 15 },
  { sectionId: 'relations-peritoneo-somatiques', blockIndex: 5, slide: 16 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 17 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 1, slide: 18 },
]

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

const chapter7SlidesBySource: SyncSlide[] = [
  { src: '/chapter-7/slides/slide-01.png', title: 'Chapitre 7 - Cavités abdominale et péritonéale' },
  { src: '/chapter-7/slides/slide-02.png', title: 'Le contenant abdominal : frontieres et pressions' },
  { src: '/chapter-7/slides/slide-03.png', title: 'Les trois espaces visceraux (le contenu)' },
  { src: '/chapter-7/slides/slide-04.png', title: 'L architecture du péritoine' },
  { src: '/chapter-7/slides/slide-05.png', title: 'Architecture du péritoine : une sereuse complexe' },
  { src: '/chapter-7/slides/slide-06.png', title: 'L écosystème liquidien et la dynamique péritonéale' },
  { src: '/chapter-7/slides/slide-07.png', title: 'Dynamique des fluides : l aimantation diaphragmatique' },
  { src: '/chapter-7/slides/slide-08.png', title: 'Les amarres péritonéales : typologie des replis' },
  { src: '/chapter-7/slides/slide-09.png', title: 'Les racines et les mesos : les points d ancrage' },
  { src: '/chapter-7/slides/slide-10.png', title: 'Carrefours, hiatus et tensions mécaniques' },
  { src: '/chapter-7/slides/slide-11.png', title: 'L axe vasculaire principal' },
  { src: '/chapter-7/slides/slide-12.png', title: 'Double réseau nerveux : somatique et autonome' },
  { src: '/chapter-7/slides/slide-13.png', title: 'Physiologie parieto-viscérale : le role du transverse' },
  { src: '/chapter-7/slides/slide-14.png', title: 'Conséquences mécaniques et pathologies' },
  { src: '/chapter-7/slides/slide-15.png', title: 'Synthèse somatique : les quatre quadrants' },
  { src: '/chapter-7/slides/slide-16.png', title: 'Cartographie des douleurs projetees' },
  { src: '/chapter-7/slides/slide-17.png', title: 'L approche ROP : de l anatomie a l équilibre' },
  { src: '/chapter-7/slides/slide-18.png', title: 'Synthèse clinique ROP : de l’abdomen au pied' },
]

const chapter7ReadingOrder = [1, 2, 3, 4, 6, 5, 8, 10, 9, 11, 12, 13, 7, 14, 15, 16, 17, 18]
const chapter7SlideNumberByReadingOrder = new Map(chapter7ReadingOrder.map((sourceSlide, index) => [sourceSlide, index + 1]))

function remapChapter7Slide(slide: number | number[]) {
  if (Array.isArray(slide)) return slide.map((n) => chapter7SlideNumberByReadingOrder.get(n) ?? n)
  return chapter7SlideNumberByReadingOrder.get(slide) ?? slide
}

export const chapter7Slides: SyncSlide[] = chapter7ReadingOrder.map((slideNumber) => chapter7SlidesBySource[slideNumber - 1])

const chapter7SlideAnchorsBySource: SyncAnchor[] = [
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

export const chapter7SlideAnchors: SyncAnchor[] = chapter7SlideAnchorsBySource.map((anchor) => ({
  ...anchor,
  slide: remapChapter7Slide(anchor.slide),
}))

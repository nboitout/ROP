// Chapter 17 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-17).
//
// Slides are pre-rendered from:
// public/chapter-17/Chapter17 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter17Slides: SyncSlide[] = [
  { src: '/chapter-17/slides/slide-01.png', title: 'Chapitre 17 : la cavite pelvienne' },
  { src: '/chapter-17/slides/slide-02.png', title: 'L unite vertebro-coxo-pelvienne' },
  { src: '/chapter-17/slides/slide-03.png', title: 'Les voies de communication exterieures' },
  { src: '/chapter-17/slides/slide-04.png', title: 'Le peritoine et le systeme de suspension' },
  { src: '/chapter-17/slides/slide-05.png', title: 'Organisation des loges viscerales' },
  { src: '/chapter-17/slides/slide-06.png', title: 'Le drapage peritoneal et les culs-de-sacs' },
  { src: '/chapter-17/slides/slide-07.png', title: 'La couverture peritoneale' },
  { src: '/chapter-17/slides/slide-08.png', title: 'Biomecanique : gestion des pressions et gravite' },
  { src: '/chapter-17/slides/slide-09.png', title: 'L equilibre ligamentaire : les freins sacres' },
  { src: '/chapter-17/slides/slide-10.png', title: 'La musculature pelvienne profonde' },
  { src: '/chapter-17/slides/slide-11.png', title: 'Le plancher pelvien : diaphragme et perinee' },
  { src: '/chapter-17/slides/slide-12.png', title: 'Dynamique vasculaire et systeme porte' },
  { src: '/chapter-17/slides/slide-13.png', title: 'Reseau somatique : voies nerveuses et sciatalgies' },
  { src: '/chapter-17/slides/slide-14.png', title: 'Innervation somatique I : le piege du piriforme' },
  { src: '/chapter-17/slides/slide-15.png', title: 'Innervation somatique II : le trajet du pudendal' },
  { src: '/chapter-17/slides/slide-16.png', title: 'Innervation somatique : le trajet du nerf pudendal' },
  { src: '/chapter-17/slides/slide-17.png', title: 'Innervation autonome et controle central' },
  { src: '/chapter-17/slides/slide-18.png', title: 'Le controle central neuro-vegetatif' },
  { src: '/chapter-17/slides/slide-19.png', title: 'Biomecanique : gestion des pressions gravitaires' },
  { src: '/chapter-17/slides/slide-20.png', title: 'Pathologie biomecanique : la ptose viscerale' },
  { src: '/chapter-17/slides/slide-21.png', title: 'Le relais obturateur : la relation vessie-hanche' },
  { src: '/chapter-17/slides/slide-22.png', title: 'Synthese clinique : defaillances mecaniques et neurologiques' },
  { src: '/chapter-17/slides/slide-23.png', title: 'Synthese clinique ROP : zones reflexes et cibles' },
]

export const chapter17SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'situation', blockIndex: 1, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 2, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 4, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 6, slide: 8 },
  { sectionId: 'anatomie', blockIndex: 10, slide: 9 },
  { sectionId: 'anatomie', blockIndex: 13, slide: 10 },
  { sectionId: 'anatomie', blockIndex: 14, slide: 11 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 12 },
  { sectionId: 'innervation', blockIndex: 0, slide: 13 },
  { sectionId: 'innervation', blockIndex: 1, slide: 14 },
  { sectionId: 'innervation', blockIndex: 3, slide: 15 },
  { sectionId: 'innervation', blockIndex: 4, slide: 16 },
  { sectionId: 'innervation', blockIndex: 6, slide: 17 },
  { sectionId: 'innervation', blockIndex: 8, slide: 18 },
  { sectionId: 'innervation', blockIndex: 13, slide: 19 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 20 },
  { sectionId: 'pathologies-courantes', blockIndex: 1, slide: 21 },
  { sectionId: 'pathologies-courantes', blockIndex: 4, slide: 22 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 23 },
]

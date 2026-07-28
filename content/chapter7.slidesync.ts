export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

// The first 14 slides are the rebuilt synthesis deck.
// Slides 15-19 reuse the cartography pages paired with the reflex-zone text.
export const chapter7Slides: SyncSlide[] = [
  { src: '/chapter-7/slides/slide-01.png', title: 'Chapitre 7 — Cavités abdominale et péritonéale' },
  { src: '/chapter-7/slides/slide-02.png', title: 'Le contenant abdominal : frontières et pressions' },
  { src: '/chapter-7/slides/slide-03.png', title: 'Les trois espaces viscéraux' },
  { src: '/chapter-7/slides/slide-04.png', title: 'L’architecture du péritoine' },
  { src: '/chapter-7/slides/slide-05.png', title: 'Péritoine, feuillets et liquide péritonéal' },
  { src: '/chapter-7/slides/slide-06.png', title: 'Replis péritonéaux : ligaments, omentums et mésos' },
  { src: '/chapter-7/slides/slide-07.png', title: 'Orifices et hiatus de la cavité abdominale' },
  { src: '/chapter-7/slides/slide-08.png', title: 'L’axe vasculaire principal' },
  { src: '/chapter-7/slides/slide-09.png', title: 'Double réseau nerveux : somatique et autonome' },
  { src: '/chapter-7/slides/slide-10.png', title: 'Physiologie pariéto-viscérale : le rôle du transverse' },
  { src: '/chapter-7/slides/slide-11.png', title: 'Dynamique du liquide péritonéal' },
  { src: '/chapter-7/slides/slide-12.png', title: 'Pathologies du péritoine : mécaniques et cliniques' },
  { src: '/chapter-7/slides/slide-13.png', title: 'Cartographie des douleurs projetées' },
  { src: '/chapter-7/slides/slide-14.png', title: 'Synthèse — contenant, contenu et réseaux péritonéaux' },
  { src: '/chapter-7/cartographie/figure-7-01.png', title: 'Cartographie : racine du mésentère — jonction duodéno-jéjunale à ombilic' },
  { src: '/chapter-7/cartographie/figure-7-03.png', title: 'Cartographie : racine du mésentère — ombilic à valvule iléocæcale' },
  { src: '/chapter-7/cartographie/figure-7-05.png', title: 'Cartographie : racine du mésocôlon transverse — deuxième duodénum à L2' },
  { src: '/chapter-7/cartographie/figure-7-07.png', title: 'Cartographie : racine du mésocôlon transverse — L2 au corps du pancréas' },
  { src: '/chapter-7/cartographie/figure-7-09.png', title: 'Cartographie : racine du mésosigmoïde' },
]

export const chapter7SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 5, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 8, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 20, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 42, slide: 7 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 8 },
  { sectionId: 'innervation', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 12, slide: 11 },
  { sectionId: 'pathologie', blockIndex: 0, slide: 12 },
  { sectionId: 'relations-peritoneo-somatiques', blockIndex: 0, slide: 13 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 15 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 4, slide: 16 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, slide: 17 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 8, slide: 18 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 10, slide: 19 },
]

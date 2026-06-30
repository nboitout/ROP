// Chapter 16 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-16).
//
// Slides are pre-rendered from:
// public/chapter-16/Chapter16 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter16Slides: SyncSlide[] = [
  { src: '/chapter-16/slides/slide-01.png', title: 'Chapitre 16 : les Reins' },
  { src: '/chapter-16/slides/slide-02.png', title: 'Situation et topographie' },
  { src: '/chapter-16/slides/slide-03.png', title: 'La loge renale et ses enveloppes' },
  { src: '/chapter-16/slides/slide-04.png', title: 'L enveloppe fasciale : une loge ouverte' },
  { src: '/chapter-16/slides/slide-05.png', title: 'Architecture interne et unite fonctionnelle' },
  { src: '/chapter-16/slides/slide-06.png', title: 'Le nephron : l unite fonctionnelle' },
  { src: '/chapter-16/slides/slide-07.png', title: 'Rapports dorsaux et plexus lombaire' },
  { src: '/chapter-16/slides/slide-08.png', title: 'Fenetres therapeutiques : les zones de faiblesse' },
  { src: '/chapter-16/slides/slide-09.png', title: 'Le carrefour veineux et le syndrome de la pince' },
  { src: '/chapter-16/slides/slide-10.png', title: 'Asymetrie clinique : rein droit vs rein gauche' },
  { src: '/chapter-16/slides/slide-11.png', title: 'Regulation de la pression arterielle' },
  { src: '/chapter-16/slides/slide-12.png', title: 'Equilibre acido-basique et impact nutritionnel' },
  { src: '/chapter-16/slides/slide-13.png', title: 'Dynamique respiratoire et motilite' },
  { src: '/chapter-16/slides/slide-14.png', title: 'Pathologie mecanique : les 3 degres de ptose' },
  { src: '/chapter-16/slides/slide-15.png', title: 'Pathologie mecanique : la ptose renale' },
  { src: '/chapter-16/slides/slide-16.png', title: 'Fixations tissulaires et lignes rouges' },
  { src: '/chapter-16/slides/slide-17.png', title: 'Fixations tissulaires : perte de mobilite' },
  { src: '/chapter-16/slides/slide-18.png', title: 'Approche ROP : lecture emotionnelle' },
  { src: '/chapter-16/slides/slide-19.png', title: 'Approche ROP : zones reflexes podales' },
  { src: '/chapter-16/slides/slide-20.png', title: 'Cartographie ROP : zones reflexes podales' },
  { src: '/chapter-16/slides/slide-21.png', title: 'Cartographie ROP et manoeuvres reflexes' },
  { src: '/chapter-16/slides/slide-22.png', title: 'Recommandations et autocorrection' },
  { src: '/chapter-16/slides/slide-23.png', title: 'Conseils therapeutiques au patient' },
]

export const chapter16SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'situation', blockIndex: 0, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 4, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 10, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 14, slide: 6 },
  { sectionId: 'rapports', blockIndex: 0, slide: 7 },
  { sectionId: 'rapports', blockIndex: 3, slide: 8 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 9 },
  { sectionId: 'vascularisation', blockIndex: 8, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 3, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 5, slide: 12 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 13 },
  { sectionId: 'pathologies-courantes', blockIndex: 8, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 11, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 2, slide: 16 },
  { sectionId: 'pathologies-courantes', blockIndex: 12, slide: 17 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 18 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 4, slide: 20 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 21 },
  { sectionId: 'conseils', blockIndex: 0, slide: [22, 23] },
]

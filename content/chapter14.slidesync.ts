// Chapter 14 — slide ↔ text synchronisation map for the combined reading
// experience (/lecture/chapitre-14).
//
// Slide images are the pre-rendered pages of public/chapter-14/synthese.pdf.
// Each slide of the synthesis deck is anchored to the passage of the text it
// best illustrates. The deck is a thematic synthesis, so a few slides do not
// follow the strict linear order of the chapter (e.g. the emotional-profile
// slide is anchored to the "Relations viscéro-émotionnelles" section, which
// comes after the ROP section in the text).

export type SyncSlide = { src: string; title: string }

// blockIndex refers to the position in chapter14Fr sections[].blocks[].
// blockIndex -1 anchors a slide to the section heading itself (the marker is
// rendered just above the <h2> instead of inside a content block).
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number }

export const chapter14Slides: SyncSlide[] = [
  { src: '/chapter-14/slides/slide-01.jpg', title: 'L’intestin grêle : anatomie, écosystème et approche ROP' },
  { src: '/chapter-14/slides/slide-02.jpg', title: 'Topographie et disposition intra-abdominale' },
  { src: '/chapter-14/slides/slide-03.jpg', title: 'L’ancrage mécanique : mésentère et muscle de Treitz' },
  { src: '/chapter-14/slides/slide-04.jpg', title: 'L’axe de l’irrigation et du drainage : tronc mésentérique supérieur' },
  { src: '/chapter-14/slides/slide-05.jpg', title: 'La double réalité neurologique du péritoine' },
  { src: '/chapter-14/slides/slide-06.jpg', title: 'Le deuxième cerveau : autonomie du système nerveux entérique' },
  { src: '/chapter-14/slides/slide-07.jpg', title: 'Le deuxième cerveau : système nerveux entérique' },
  { src: '/chapter-14/slides/slide-08.jpg', title: 'L’écosystème intestinal : le trépied de la santé digestive' },
  { src: '/chapter-14/slides/slide-09.jpg', title: 'La double voie d’absorption micronutritionnelle' },
  { src: '/chapter-14/slides/slide-10.jpg', title: 'La spirale : dysbiose et hyperperméabilité' },
  { src: '/chapter-14/slides/slide-11.jpg', title: 'Pathologie I : l’hyperperméabilité intestinale (leaky gut)' },
  { src: '/chapter-14/slides/slide-12.jpg', title: 'Pathologie II : la dysbiose et ses manifestations' },
  { src: '/chapter-14/slides/slide-13.jpg', title: 'Signes d’alerte et diagnostic d’exclusion' },
  { src: '/chapter-14/slides/slide-14.jpg', title: 'Profil viscéro-émotionnel : la personne intestin' },
  { src: '/chapter-14/slides/slide-15.jpg', title: 'Stratégie ROP 1 : régulation du système nerveux et liens somatiques' },
  { src: '/chapter-14/slides/slide-16.jpg', title: 'Accompagnement ROP des pathologies fonctionnelles' },
  { src: '/chapter-14/slides/slide-17.jpg', title: 'Synthèse d’intervention ROP : protocole intestin grêle' },
]

export const chapter14SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation',   blockIndex: 0,  slide: 1 },
  { sectionId: 'situation',      blockIndex: 0,  slide: 2 },
  { sectionId: 'anatomie',       blockIndex: 3,  slide: 3 },
  { sectionId: 'vascularisation', blockIndex: 1, slide: 4 },
  { sectionId: 'innervation',    blockIndex: 2,  slide: 5 },
  { sectionId: 'innervation',    blockIndex: 11, slide: 6 },
  { sectionId: 'innervation',    blockIndex: 13, slide: 7 },
  { sectionId: 'physiologie',    blockIndex: 5,  slide: 8 },
  { sectionId: 'physiologie',    blockIndex: 10, slide: 9 },
  { sectionId: 'pathologies',    blockIndex: 0,  slide: 10 },
  { sectionId: 'pathologies',    blockIndex: 1,  slide: 11 },
  { sectionId: 'pathologies',    blockIndex: 7,  slide: 12 },
  { sectionId: 'pathologies',    blockIndex: 11, slide: 13 },
  { sectionId: 'pathologies',    blockIndex: 12, slide: 16 },
  { sectionId: 'rop',            blockIndex: -1, slide: 15 },
  { sectionId: 'rop',            blockIndex: 13, slide: 17 },
  { sectionId: 'relations',      blockIndex: 2,  slide: 14 },
]

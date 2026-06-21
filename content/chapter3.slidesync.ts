// Chapter 3 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-3).
//
// Slide images are the pre-rendered pages of the chapter 3 synthesis deck,
// stored under public/chapter-3/slides/. Each slide is anchored to the passage
// of the text it best illustrates. The deck is partly thematic rather than
// strictly linear, so some of the later ROP slides are aligned with the
// reflex-zone passages they clarify rather than with the slide number order.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter3Slides: SyncSlide[] = [
  { src: '/chapter-3/slides/slide-01.png', title: 'Le systeme nerveux central (SNC) en Reflexotherapie Occipito-Podale' },
  { src: '/chapter-3/slides/slide-02.png', title: 'Le SNC : tronc cerebral, diencephale et telencephale' },
  { src: '/chapter-3/slides/slide-03.png', title: 'Theorie des trois cerveaux' },
  { src: '/chapter-3/slides/slide-04.png', title: 'Le cerveau reptilien : anatomie de la survie' },
  { src: '/chapter-3/slides/slide-05.png', title: 'Les ganglions de la base et la formation reticulaire' },
  { src: '/chapter-3/slides/slide-06.png', title: 'Le systeme limbique : l architecture des emotions' },
  { src: '/chapter-3/slides/slide-07.png', title: 'Matrice clinique des noyaux limbiques' },
  { src: '/chapter-3/slides/slide-08.png', title: 'L insula : la conscience interoceptive' },
  { src: '/chapter-3/slides/slide-09.png', title: 'Le diencephale : chef d orchestre neuro-hormonal' },
  { src: '/chapter-3/slides/slide-10.png', title: 'Mecanique vasculaire : le systeme porte hypothalamo-hypophysaire' },
  { src: '/chapter-3/slides/slide-11.png', title: 'L axe hypothalamo-hypophysaire : systeme porte' },
  { src: '/chapter-3/slides/slide-12.png', title: 'Le systeme glymphatique : detoxification cerebrale' },
  { src: '/chapter-3/slides/slide-13.png', title: 'Le neocortex necessite une approche purement indirecte' },
  { src: '/chapter-3/slides/slide-14.png', title: 'Cartographie ROP : les zones occipitales' },
  { src: '/chapter-3/slides/slide-15.png', title: 'Zones reflexes podales' },
  { src: '/chapter-3/slides/slide-16.png', title: 'Reperes ROP du tronc cerebral, de la base endocrinienne et des noyaux limbiques' },
  { src: '/chapter-3/slides/slide-17.png', title: 'Reperes ROP du cerveau limbique' },
  { src: '/chapter-3/slides/slide-18.png', title: 'Reperes ROP du diencephale et de l hypophyse' },
  { src: '/chapter-3/slides/slide-19.png', title: 'Les trois piliers d action indirecte sur le cortex et la cognition' },
  { src: '/chapter-3/slides/slide-20.png', title: 'Action indirecte : le MRP et la dura-mere' },
  { src: '/chapter-3/slides/slide-21.png', title: 'Base exocranienne et nerf vague X dans le foramen jugulaire' },
  { src: '/chapter-3/slides/slide-22.png', title: 'Reperes ROP du diencephale, de l hypophyse et de la dure-mere cranienne' },
]

export const chapter3SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 2, slide: 2 },
  { sectionId: 'presentation', blockIndex: 6, slide: 3 },

  { sectionId: 'les-trois-cerveaux', blockIndex: 0, slide: 4 },
  { sectionId: 'les-trois-cerveaux', blockIndex: 6, slide: 5 },
  { sectionId: 'les-trois-cerveaux', blockIndex: 10, slide: 14 },
  { sectionId: 'les-trois-cerveaux', blockIndex: 11, slide: 15, gapBefore: 'half' },
  { sectionId: 'les-trois-cerveaux', blockIndex: 16, slide: 21 },

  { sectionId: 'cerveau-limbique', blockIndex: -1, slide: 6 },
  { sectionId: 'cerveau-limbique', blockIndex: 3, slide: 7 },
  { sectionId: 'cerveau-limbique', blockIndex: 13, slide: 12 },
  { sectionId: 'cerveau-limbique', blockIndex: 20, slide: 8 },
  { sectionId: 'cerveau-limbique', blockIndex: 22, slide: 16 },
  { sectionId: 'cerveau-limbique', blockIndex: 43, slide: 17, gapBefore: 'half' },

  { sectionId: 'diencephale', blockIndex: -1, slide: 9 },
  { sectionId: 'diencephale', blockIndex: 7, slide: 10 },
  { sectionId: 'diencephale', blockIndex: 11, slide: 11 },
  { sectionId: 'diencephale', blockIndex: 12, slide: 18 },
  { sectionId: 'diencephale', blockIndex: 25, slide: 22, gapBefore: 'half' },

  { sectionId: 'cortex', blockIndex: -1, slide: 13 },
  { sectionId: 'cortex', blockIndex: 4, slide: 19 },
  { sectionId: 'cortex', blockIndex: 5, slide: 20, gapBefore: 'half' },
]

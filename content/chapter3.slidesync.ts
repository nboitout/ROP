// Chapter 3 — slide ↔ text synchronisation map for the combined reading
// experience (/lecture/chapitre-3).
//
// Slide images are the pre-rendered pages of the chapter 3 synthesis deck,
// stored under public/chapter-3/slides/. Each slide is anchored to the passage
// of the text it best illustrates. Chapter 3 ("Système nerveux central") is
// French only, so there is a single deck and a single anchor table.
//
// blockIndex refers to the position in chapter3Fr sections[].blocks[].
// blockIndex -1 anchors a slide to the section heading itself (the marker is
// rendered just above the <h2> instead of inside a content block).

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number }

// Section ids (in order): 'presentation', 'les-trois-cerveaux',
// 'cerveau-limbique', 'diencephale', 'cortex'.

// TODO: populate from the synthesis deck once the rendered slide images are in.
export const chapter3Slides: SyncSlide[] = [
  // { src: '/chapter-3/slides/slide-01.jpg', title: '…' },
]

// TODO: anchor each slide to the block it illustrates.
export const chapter3SlideAnchors: SyncAnchor[] = [
  // { sectionId: 'presentation', blockIndex: 0, slide: 1 },
]

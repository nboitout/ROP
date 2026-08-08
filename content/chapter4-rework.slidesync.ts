// Chapter 4 — private reworked-edition slide ↔ text map.
// Reflex-zone synchronization is inherited unchanged from the published chapter.

import { chapter4Slides, chapter4SlideAnchors } from './chapter4.slidesync'

export const chapter4ReworkSlides = chapter4Slides

export const chapter4ReworkSlideAnchors = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'presentation', blockIndex: 1, slide: 3 },
  { sectionId: 'presentation', blockIndex: 3, slide: 4 },
  { sectionId: 'presentation', blockIndex: 7, slide: 5 },
  { sectionId: 'presentation', blockIndex: 10, slide: 6 },
  { sectionId: 'presentation', blockIndex: 11, slide: 7 },
  { sectionId: 'presentation', blockIndex: 14, slide: 8 },
  { sectionId: 'presentation', blockIndex: 25, slide: 9 },
  { sectionId: 'organisation-du-sna', blockIndex: 0, slide: 10 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: -1, slide: 11, gapBefore: 'half' as const },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 1, slide: 12 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 6, slide: 13 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 8, slide: 14 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 23, slide: 15 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 32, slide: 16 },
  { sectionId: 'nerf-vague-viscero-sensitif', blockIndex: -1, slide: 17 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: -1, slide: 18 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: 3, slide: 19 },
  { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: -1, slide: 20 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: 5, slide: 21 },
  { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: 3, slide: 22 },
  { sectionId: 'plexus-previsceral-pelvien', blockIndex: -1, slide: 23 },
  { sectionId: 'plexus-previsceral-pelvien', blockIndex: 2, slide: 24 },
  { sectionId: 'systeme-nerveux-intrinseque-ou-enterique-sne', blockIndex: -1, slide: 25 },
  { sectionId: 'glandes-surrenales', blockIndex: -1, slide: 26 },
  { sectionId: 'glandes-surrenales', blockIndex: 6, slide: 27 },
  ...chapter4SlideAnchors.filter((anchor) => anchor.sectionId === 'zones-reflexes-podales'),
]

// Chapter 4 — private reworked-edition slide ↔ text map.
// The visual deck and reflex cartographies are shared with the published chapter.

import { chapter4Slides } from './chapter4.slidesync'

export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter4ReworkSlides = chapter4Slides

export const chapter4ReworkSlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 3, slide: 2 },
  { sectionId: 'presentation', blockIndex: 1, slide: 3 },
  { sectionId: 'organisation-du-sna', blockIndex: -1, slide: 4 },
  { sectionId: 'presentation', blockIndex: 9, slide: 5 },
  { sectionId: 'presentation', blockIndex: 4, slide: 6 },
  { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: -1, slide: 7 },
  { sectionId: 'organisation-du-sna', blockIndex: 3, slide: 8 },
  { sectionId: 'presentation', blockIndex: 4, slide: 9 },
  { sectionId: 'organisation-du-sna', blockIndex: 0, slide: 10 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: -1, slide: 11, gapBefore: 'half' },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 1, slide: 12 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 5, slide: 13 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 6, slide: 14 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 14, slide: 15 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 20, slide: 16 },
  { sectionId: 'nerf-vague-viscero-sensitif', blockIndex: -1, slide: 17 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: -1, slide: 18 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: 3, slide: 19 },
  { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: 0, slide: 20 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: 6, slide: 21 },
  { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: 1, slide: 22 },
  { sectionId: 'plexus-previsceral-pelvien', blockIndex: -1, slide: 23 },
  { sectionId: 'plexus-previsceral-pelvien', blockIndex: 3, slide: 24 },
  { sectionId: 'systeme-nerveux-intrinseque-ou-enterique-sne', blockIndex: -1, slide: 25 },
  { sectionId: 'glandes-surrenales', blockIndex: -1, slide: 26 },
  { sectionId: 'glandes-surrenales', blockIndex: 5, slide: 27 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 28 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 29 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 5, slide: [30, 31, 32] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 10, slide: [33, 34] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 14, slide: [35, 36, 37] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 19, slide: 38 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 23, slide: 39 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 26, slide: 40 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 29, slide: 41 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 32, slide: [42, 43] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 40, slide: [44, 45] },
]

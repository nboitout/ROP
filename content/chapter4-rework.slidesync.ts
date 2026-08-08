// Chapter 4 — private reworked-edition slide ↔ text map.
// Reflex-zone synchronization is inherited unchanged from the published chapter.

import { chapter4Slides } from './chapter4.slidesync'

const endAt = (sectionId: string, blockIndex: number) => ({ end: { sectionId, blockIndex } })

export const chapter4ReworkSlides = [
  chapter4Slides[0],
  {
    src: '/chapter-4/slides/slide-private-02.png',
    title: 'Niveau 2 — Régulation neuro-végétative et adaptation',
  },
  ...chapter4Slides.slice(1),
]

const priorSlideAnchors = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2, gapBefore: 'half' as const },
  { sectionId: 'presentation', blockIndex: 1, slide: 3 },
  { sectionId: 'presentation', blockIndex: 2, slide: 4 },
  { sectionId: 'presentation', blockIndex: 6, slide: 5 },
  { sectionId: 'presentation', blockIndex: 9, slide: 6, gapBefore: 'half' as const },
  { sectionId: 'presentation', blockIndex: 10, slide: 7 },
  { sectionId: 'presentation', blockIndex: 13, slide: 8, ...endAt('presentation', 17) },
  { sectionId: 'presentation', blockIndex: 24, slide: 9 },
  { sectionId: 'organisation-du-sna', blockIndex: 0, slide: 10 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: -1, slide: 11 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 1, slide: 12, gapBefore: 'half' as const },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 6, slide: 13 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 8, slide: 14 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 23, slide: 15 },
  { sectionId: 'parasympathique-viscero-moteur', blockIndex: 32, slide: 16 },
  { sectionId: 'nerf-vague-viscero-sensitif', blockIndex: -1, slide: 17, ...endAt('sympathique-viscero-moteur', -1) },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: -1, slide: 18 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: 3, slide: 19 },
  { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: -1, slide: 20 },
  { sectionId: 'sympathique-somato-viscero-sensitif', blockIndex: 5, slide: 21 },
  { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: 3, slide: 22 },
  { sectionId: 'plexus-previsceral-pelvien', blockIndex: -1, slide: 23 },
  { sectionId: 'plexus-previsceral-pelvien', blockIndex: 2, slide: 24 },
  { sectionId: 'systeme-nerveux-intrinseque-ou-enterique-sne', blockIndex: -1, slide: 25 },
  { sectionId: 'glandes-surrenales', blockIndex: -1, slide: 26 },
  { sectionId: 'glandes-surrenales', blockIndex: 6, slide: 27, ...endAt('glandes-surrenales', 8) },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 28, gapBefore: 'half' as const },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 29, ...endAt('zones-reflexes-podales', 2) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 3, slide: 30, ...endAt('zones-reflexes-podales', 6) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 31, ...endAt('zones-reflexes-podales', 7) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 9, slide: 32, ...endAt('zones-reflexes-podales', 11) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 33, ...endAt('zones-reflexes-podales', 15) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 34, ...endAt('zones-reflexes-podales', 16) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 20, slide: 35, ...endAt('zones-reflexes-podales', 20) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 25, slide: 36, ...endAt('zones-reflexes-podales', 25) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 26, slide: 37, ...endAt('zones-reflexes-podales', 26) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 29, slide: 38, ...endAt('zones-reflexes-podales', 29) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 32, slide: 39, ...endAt('zones-reflexes-podales', 32) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 35, slide: 40, ...endAt('zones-reflexes-podales', 35) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 39, slide: 41, ...endAt('zones-reflexes-podales', 39) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 43, slide: 42, ...endAt('zones-reflexes-podales', 43) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 47, slide: 43, ...endAt('zones-reflexes-podales', 47) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 56, slide: 44, ...endAt('zones-reflexes-podales', 56) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 57, slide: 45, ...endAt('zones-reflexes-podales', 57) },
]

export const chapter4ReworkSlideAnchors = [
  priorSlideAnchors[0],
  { sectionId: 'presentation', blockIndex: -1, slide: 2 },
  ...priorSlideAnchors.slice(1).map((anchor) => ({ ...anchor, slide: anchor.slide + 1 })),
]

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
  ...chapter4Slides.slice(1, 2),
  ...chapter4Slides.slice(3, 28),
  { src: '/chapter-4/rework-reflex/slide-01.png', title: 'Cartographie ROP : territoire céphalique du parasympathique' },
  { src: '/chapter-4/rework-reflex/slide-02.png', title: 'Cartographie ROP : tronc cérébral' },
  { src: '/chapter-4/rework-reflex/slide-04.png', title: 'Cartographie ROP : nerf vague X dans la moelle allongée' },
  { src: '/chapter-4/rework-reflex/slide-06.png', title: 'Cartographie ROP : nerf vague X dans le foramen jugulaire' },
  { src: '/chapter-4/rework-reflex/slide-08.png', title: 'Cartographie ROP : sinus carotidien' },
  { src: '/chapter-4/rework-reflex/slide-10.png', title: 'Cartographie ROP : territoire gauche du nerf vague X' },
  { src: '/chapter-4/rework-reflex/slide-13.png', title: 'Cartographie ROP : territoire droit du nerf vague X' },
  { src: '/chapter-4/rework-reflex/slide-15.png', title: 'Cartographie ROP : hiatus œsophagien et nerfs vagues' },
  { src: '/chapter-4/rework-reflex/slide-17.png', title: 'Cartographie ROP : territoire abdominal droit du nerf vague X' },
  { src: '/chapter-4/rework-reflex/slide-19.png', title: 'Cartographie ROP : origine parasympathique pelvienne ou sacrée' },
  { src: '/chapter-4/rework-reflex/slide-21.png', title: 'Cartographie ROP : origine médullaire du sympathique' },
  { src: '/chapter-4/rework-reflex/slide-23.png', title: 'Cartographie ROP : chaîne ganglionnaire thoracique' },
  { src: '/chapter-4/rework-reflex/slide-25.png', title: 'Cartographie ROP : chaîne ganglionnaire cervicale' },
  { src: '/chapter-4/rework-reflex/slide-27.png', title: 'Cartographie ROP : chaîne ganglionnaire lombale' },
  { src: '/chapter-4/rework-reflex/slide-29.png', title: 'Cartographie ROP : chaîne ganglionnaire sacro-coccygienne' },
  { src: '/chapter-4/rework-reflex/slide-31.png', title: 'Cartographie ROP : plexus hypogastrique inférieur, fibres antérieures' },
  { src: '/chapter-4/rework-reflex/slide-33.png', title: 'Cartographie ROP : plexus hypogastrique inférieur, fibres moyennes et postérieures' },
]

const priorSlideAnchors = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 1, slide: 2, gapBefore: 'half' as const },
  { sectionId: 'presentation', blockIndex: 2, slide: 3 },
  { sectionId: 'presentation', blockIndex: 3, slide: 4 },
  { sectionId: 'presentation', blockIndex: 7, slide: 5 },
  { sectionId: 'presentation', blockIndex: 10, slide: 6, gapBefore: 'half' as const },
  { sectionId: 'presentation', blockIndex: 11, slide: 7 },
  { sectionId: 'presentation', blockIndex: 14, slide: 8, ...endAt('presentation', 18) },
  { sectionId: 'presentation', blockIndex: 25, slide: 9 },
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
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 29 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 30, ...endAt('zones-reflexes-podales', 2) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, slide: 31, ...endAt('zones-reflexes-podales', 6) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 7, slide: 32, ...endAt('zones-reflexes-podales', 7) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 11, slide: 33, ...endAt('zones-reflexes-podales', 11) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 34, ...endAt('zones-reflexes-podales', 15) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 35, ...endAt('zones-reflexes-podales', 16) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 21, slide: 36, ...endAt('zones-reflexes-podales', 21) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 25, slide: 37, ...endAt('zones-reflexes-podales', 25) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 28, slide: 38, ...endAt('zones-reflexes-podales', 28) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 31, slide: 39, ...endAt('zones-reflexes-podales', 31) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 34, slide: 40, ...endAt('zones-reflexes-podales', 34) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 38, slide: 41, ...endAt('zones-reflexes-podales', 38) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 42, slide: 42, ...endAt('zones-reflexes-podales', 42) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 46, slide: 43, ...endAt('zones-reflexes-podales', 46) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 55, slide: 44, ...endAt('zones-reflexes-podales', 55) },
  { sectionId: 'zones-reflexes-podales', blockIndex: 56, slide: 45, ...endAt('zones-reflexes-podales', 56) },
]

export const chapter4ReworkSlideAnchors = [
  priorSlideAnchors[0],
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  ...priorSlideAnchors
    .slice(1)
    .filter((anchor) => anchor.slide !== 3)
    .map((anchor) => ({ ...anchor, slide: anchor.slide === 2 ? 3 : anchor.slide })),
]

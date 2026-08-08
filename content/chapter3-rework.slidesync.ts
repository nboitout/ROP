// Chapter 3 — private reworked-edition slide ↔ text map.
// The visual deck is shared unchanged with the published Chapter 3.

import { chapter3Slides } from './chapter3.slidesync'

export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter3ReworkSlides = chapter3Slides

export const chapter3ReworkSlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation-pourquoi-commencer-par-le-systeme-nerveux-central', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation-pourquoi-commencer-par-le-systeme-nerveux-central', blockIndex: 1, slide: 2 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques-percevoir-letat-du-corps-et-lui-donner-un-contexte', blockIndex: -1, slide: 3 },
  { sectionId: 'le-tronc-cerebral-premier-grand-carrefour-supraspinal', blockIndex: -1, slide: 4 },
  { sectionId: 'le-tronc-cerebral-premier-grand-carrefour-supraspinal', blockIndex: 5, slide: 5 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques-percevoir-letat-du-corps-et-lui-donner-un-contexte', blockIndex: 0, slide: 6 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques-percevoir-letat-du-corps-et-lui-donner-un-contexte', blockIndex: 7, slide: 7 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques-percevoir-letat-du-corps-et-lui-donner-un-contexte', blockIndex: 1, slide: 8 },
  { sectionId: 'reseaux-corticaux-et-cortico-limbiques-percevoir-letat-du-corps-et-lui-donner-un-contexte', blockIndex: 3, slide: 9 },
  { sectionId: 'deux-reperes-complementaires-cervelet-et-ganglions-de-la-base', blockIndex: 3, slide: 10 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 4, slide: 11 },
  { sectionId: 'diencephale-relier-sensation-homeostasie-et-adaptation', blockIndex: -1, slide: 12 },
  { sectionId: 'diencephale-relier-sensation-homeostasie-et-adaptation', blockIndex: 6, slide: 13 },
  { sectionId: 'diencephale-relier-sensation-homeostasie-et-adaptation', blockIndex: 7, slide: 14 },
  { sectionId: 'environnement-neuro-meninge-et-circulation-liquidienne', blockIndex: 2, slide: 15, gapBefore: 'half' },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 15, slide: 16 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: -1, slide: 17 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 0, slide: 18 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 1, slide: 19 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 4, slide: 20 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 8, slide: 21 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 11, slide: 22 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 12, slide: 23 },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 15, slide: 24, gapBefore: 'half' },
  { sectionId: 'zones-reflexes-rop-du-niveau-1', blockIndex: 17, slide: 25 },
]

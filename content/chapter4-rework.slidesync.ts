// Chapter 4 — private reworked-edition slide ↔ text map.
// The visual deck and reflex cartographies are shared with the published chapter.

import { chapter4Slides } from './chapter4.slidesync'

export type SyncAnchor = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter4ReworkSlides = chapter4Slides

export const chapter4ReworkSlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation-comment-les-centres-et-les-visceres-communiquent', blockIndex: -1, slide: 1 },
  { sectionId: 'une-regulation-bidirectionnelle-des-commandes-qui-descendent-des-informations-qui-remontent', blockIndex: 5, slide: 2 },
  { sectionId: 'presentation-comment-les-centres-et-les-visceres-communiquent', blockIndex: 3, slide: 3 },
  { sectionId: 'une-regulation-bidirectionnelle-des-commandes-qui-descendent-des-informations-qui-remontent', blockIndex: -1, slide: 4 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: -1, slide: 5 },
  { sectionId: 'une-regulation-bidirectionnelle-des-commandes-qui-descendent-des-informations-qui-remontent', blockIndex: 6, slide: 6 },
  { sectionId: 'les-plexus-carrefours-autonomes-entre-les-voies-nerveuses-et-les-organes', blockIndex: -1, slide: 7 },
  { sectionId: 'glandes-surrenales-interface-entre-systeme-sympathique-et-reponse-hormonale', blockIndex: -1, slide: 8 },
  { sectionId: 'presentation-comment-les-centres-et-les-visceres-communiquent', blockIndex: 3, slide: 9 },
  { sectionId: 'une-regulation-bidirectionnelle-des-commandes-qui-descendent-des-informations-qui-remontent', blockIndex: 0, slide: 10 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: -1, slide: 11, gapBefore: 'half' },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: 1, slide: 12 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: 5, slide: 13 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: 6, slide: 14 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: 9, slide: 15 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: 14, slide: 16 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: 7, slide: 17 },
  { sectionId: 'les-visceres-parlent-au-cerveau-interoception-et-sensibilite-viscerale', blockIndex: -1, slide: 18 },
  { sectionId: 'les-visceres-parlent-au-cerveau-interoception-et-sensibilite-viscerale', blockIndex: 5, slide: 19 },
  { sectionId: 'les-plexus-carrefours-autonomes-entre-les-voies-nerveuses-et-les-organes', blockIndex: 0, slide: 20 },
  { sectionId: 'les-visceres-parlent-au-cerveau-interoception-et-sensibilite-viscerale', blockIndex: 6, slide: 21 },
  { sectionId: 'les-plexus-carrefours-autonomes-entre-les-voies-nerveuses-et-les-organes', blockIndex: 1, slide: 22 },
  { sectionId: 'les-plexus-carrefours-autonomes-entre-les-voies-nerveuses-et-les-organes', blockIndex: 3, slide: 23 },
  { sectionId: 'le-parasympathique-trois-grandes-portes-fonctionnelles', blockIndex: 15, slide: 24 },
  { sectionId: 'et-le-systeme-nerveux-enterique', blockIndex: -1, slide: 25 },
  { sectionId: 'glandes-surrenales-interface-entre-systeme-sympathique-et-reponse-hormonale', blockIndex: 0, slide: 26 },
  { sectionId: 'le-niveau-2-en-pratique-rop', blockIndex: -1, slide: 27 },
  { sectionId: 'zones-reflexes-rop-du-niveau-2', blockIndex: -1, slide: 28 },
  { sectionId: 'zones-reflexes-rop-du-niveau-2', blockIndex: 2, slide: 29 },
  { sectionId: 'zones-reflexes-rop-du-niveau-2', blockIndex: 5, slide: [30, 31, 32, 33, 34, 35, 36, 37] },
  { sectionId: 'zones-reflexes-rop-du-niveau-2', blockIndex: 16, slide: 38 },
  { sectionId: 'zones-reflexes-rop-du-niveau-2', blockIndex: 19, slide: [39, 40, 41, 42, 43] },
  { sectionId: 'zones-reflexes-rop-du-niveau-2', blockIndex: 26, slide: [44, 45] },
]

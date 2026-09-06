// Chapter 14 — slide ↔ text synchronisation map for the combined reading
// experience (/lecture/chapitre-14).
//
// Slide images are the published French and English synthesis decks.
// Each slide of the synthesis deck is anchored to the passage of the text it
// best illustrates. The deck is a thematic synthesis, so a few slides do not
// follow the strict linear order of the chapter (e.g. the emotional-profile
// slide is anchored to the "Relations viscéro-émotionnelles" section, which
// comes after the ROP section in the text).

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }

// blockIndex refers to the position in chapter14Fr sections[].blocks[].
// blockIndex -1 anchors a slide to the section heading itself (the marker is
// rendered just above the <h2> instead of inside a content block).
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number; gapBefore?: 'half'; end?: SyncAnchorPoint }

// French deck — rebuilt from the 13-page synthesis deck. The existing
// pathology slides remain in place until their dedicated update, followed by
// the supplementary reflex-zone figure-slides.
// Because the FR PDF was reorganised independently of EN/DE/ES/IT, the French
// deck uses its own anchor table (chapter14SlideAnchorsFr); English uses the
// original anchor table.
export const chapter14Slides: SyncSlide[] = [
  { src: '/chapter-14/FR/slides/slide-01.png', title: 'L’intestin grêle' },
  { src: '/chapter-14/FR/slides/slide-02.png', title: 'Le jéjunum-iléum dans le cadre colique' },
  { src: '/chapter-14/FR/slides/slide-03.png', title: 'Le mésentère : racine et suspension de l’intestin grêle' },
  { src: '/chapter-14/FR/slides/slide-04.png', title: 'Vascularisation de l’intestin grêle' },
  { src: '/chapter-14/FR/slides/slide-05.png', title: 'Le réseau lymphatique de l’intestin grêle' },
  { src: '/chapter-14/FR/slides/slide-06.png', title: 'La double innervation du péritoine' },
  { src: '/chapter-14/FR/slides/slide-07.png', title: 'Nerf vague et système sympathique' },
  { src: '/chapter-14/FR/slides/slide-08.png', title: 'Le deuxième cerveau : système nerveux entérique (SNE)' },
  { src: '/chapter-14/FR/slides/slide-09.png', title: 'Motricité de l’intestin grêle' },
  { src: '/chapter-14/FR/slides/slide-10.png', title: 'L’écosystème intestinal : frontière biologique' },
  { src: '/chapter-14/FR/slides/slide-11.png', title: 'La double voie d’absorption micronutritionnelle' },
  { src: '/chapter-14/FR/slides/slide-12.png', title: 'Micro-anatomie : la barrière intestinale' },
  { src: '/chapter-14/FR/slides/slide-13.png', title: 'Hyperperméabilité et dysbiose : une association réciproque' },
  { src: '/chapter-14/FR/slides/slide-14.png', title: 'Hyperperméabilité intestinale' },
  { src: '/chapter-14/FR/slides/slide-15.png', title: 'La dysbiose et l’axe intestin-cerveau' },
  { src: '/chapter-14/FR/slides/slide-16.png', title: 'Indications en ROP et critères d’orientation médicale' },
  { src: '/chapter-14/FR/slides/slide-17.png', title: 'Maladie de Crohn' },
  { src: '/chapter-14/FR/slides/slide-18.png', title: 'Intestin grêle — relations viscéro-somatiques' },
  { src: '/chapter-14/FR/slides/slide-21.png', title: 'Protocole clinique ROP : l’intestin grêle' },
  { src: '/chapter-14/FR/cartographies/figure-14-01.png', title: 'Cartographie : Racine du mésentère — jonction duodéno-jéjunale à ombilic' },
  { src: '/chapter-14/FR/cartographies/figure-14-03.png', title: 'Cartographie : Racine du mésentère — valvule iléo-cæcale à ombilic' },
  { src: '/chapter-14/FR/cartographies/figure-14-05.png', title: 'Cartographie : Jéjunum' },
  { src: '/chapter-14/FR/slides/slide-20.png', title: 'Relations viscéro-émotionnelles' },
]

// English deck — canonical logical inventory, in the same order as French.
export const chapter14SlidesEn: SyncSlide[] = [
  { src: '/chapter-14/EN/slides/slide-01_V3.png', title: 'Small Intestine' },
  { src: '/chapter-14/EN/slides/slide-02.jpg', title: 'Jejunum–Ileum Within the Colonic Frame' },
  { src: '/chapter-14/EN/slides/slide-03_V3.png', title: 'Mesentery: Root and Suspension of the Small Intestine' },
  { src: '/chapter-14/EN/slides/slide-04_V3.png', title: 'Vascular Supply of the Small Intestine' },
  { src: '/chapter-14/EN/slides/slide-05_V3.png', title: 'Lymphatic Network of the Small Intestine' },
  { src: '/chapter-14/EN/slides/slide-06_V3.png', title: 'Dual Innervation of the Peritoneum' },
  { src: '/chapter-14/EN/slides/slide-07_V3.png', title: 'Vagus Nerve and Sympathetic System' },
  { src: '/chapter-14/EN/slides/slide-08_V3.png', title: 'The Second Brain: Enteric Nervous System' },
  { src: '/chapter-14/EN/slides/slide-09_V3.png', title: 'Motility of the Small Intestine' },
  { src: '/chapter-14/EN/slides/slide-10_V3.png', title: 'The Intestinal Ecosystem: A Biological Boundary' },
  { src: '/chapter-14/EN/slides/slide-11_V3.png', title: 'The Dual Route of Micronutrient Absorption' },
  { src: '/chapter-14/EN/slides/slide-12_V4.png', title: 'Microanatomy: The Intestinal Barrier' },
  { src: '/chapter-14/EN/slides/slide-13_V3.png', title: 'Hyperpermeability and Dysbiosis: A Reciprocal Association' },
  { src: '/chapter-14/EN/slides/slide-14_V3.png', title: 'Intestinal Hyperpermeability' },
  { src: '/chapter-14/EN/slides/slide-15_V3.png', title: 'Dysbiosis and the Brain–Gut Axis' },
  { src: '/chapter-14/EN/slides/slide-16_V4.png', title: 'ROP Indications and Medical-Referral Criteria' },
  { src: '/chapter-14/EN/slides/slide-17_V3.png', title: 'Crohn’s Disease' },
  { src: '/chapter-14/EN/slides/slide-18_V3.png', title: 'Small Intestine — Viscerosomatic Relationships' },
  { src: '/chapter-14/EN/slides/slide-21_V3.png', title: 'Clinical ROP Protocol: Small Intestine' },
  { src: '/chapter-14/EN/Cartography/figure-14-01_EN.png', title: 'Cartography: Root of the Mesentery — Duodenojejunal Junction to Umbilicus' },
  { src: '/chapter-14/EN/Cartography/figure-14-03_EN.png', title: 'Cartography: Root of the Mesentery — Ileocaecal Valve to Umbilicus' },
  { src: '/chapter-14/EN/Cartography/figure-14-05_EN.png', title: 'Cartography: Jejunum' },
  { src: '/chapter-14/EN/slides/slide-20_V3.png', title: 'Viscero-emotional Relationships' },
]

export const chapter14SlideAnchors: SyncAnchor[] = []

// French anchor table — for the rebuilt synthesis deck (FR only). The retained
// pathology slides stay before the ROP sequence; the relations slide remains
// last because it is the final slide encountered in the text.
export const chapter14SlideAnchorsFr: SyncAnchor[] = [
  { sectionId: 'presentation',   blockIndex: 0,  slide: 1 },
  { sectionId: 'presentation',   blockIndex: 2,  slide: 2 },
  { sectionId: 'anatomie',       blockIndex: 1,  slide: 3, end: { sectionId: 'anatomie', blockIndex: 6 } },
  { sectionId: 'vascularisation', blockIndex: 0,  slide: 4, end: { sectionId: 'vascularisation', blockIndex: 3 } },
  { sectionId: 'vascularisation', blockIndex: 4,  slide: 5, gapBefore: 'half', end: { sectionId: 'innervation', blockIndex: -1 } },
  { sectionId: 'innervation',    blockIndex: 2,  slide: 6 },
  { sectionId: 'innervation',    blockIndex: 5,  slide: 7 },
  { sectionId: 'innervation',    blockIndex: 6,  slide: 8, end: { sectionId: 'innervation', blockIndex: 8 } },
  { sectionId: 'physiologie',    blockIndex: 0,  slide: 9 },
  { sectionId: 'physiologie',    blockIndex: 4,  slide: 10 },
  { sectionId: 'physiologie',    blockIndex: 7,  slide: 11 },
  { sectionId: 'physiologie',    blockIndex: 8,  slide: 12, end: { sectionId: 'physiologie', blockIndex: 9, itemIndex: 1 } },
  { sectionId: 'physiologie',    blockIndex: 11, slide: 10 },
  { sectionId: 'pathologies',    blockIndex: 0,  slide: 13 },
  { sectionId: 'pathologies',    blockIndex: 1,  slide: 14, gapBefore: 'half', end: { sectionId: 'pathologies', blockIndex: 5, itemIndex: 3 } },
  { sectionId: 'pathologies',    blockIndex: 7,  slide: 15 },
  { sectionId: 'pathologies',    blockIndex: 11, slide: 16 },
  { sectionId: 'pathologies',    blockIndex: 13, slide: 17, gapBefore: 'half' },
  { sectionId: 'rop',            blockIndex: -1, slide: 19, end: { sectionId: 'rop', blockIndex: 25 } },
  { sectionId: 'rop',            blockIndex: 19, slide: 20, end: { sectionId: 'rop', blockIndex: 19 } },
  { sectionId: 'rop',            blockIndex: 20, slide: 21, end: { sectionId: 'rop', blockIndex: 20 } },
  { sectionId: 'rop',            blockIndex: 21, slide: 22, end: { sectionId: 'rop', blockIndex: 21 } },
  { sectionId: 'relations',      blockIndex: 0,  slide: 18 },
  { sectionId: 'relations',      blockIndex: 2,  slide: 23, end: { sectionId: 'relations', blockIndex: 7 } },
]

// Exact structural mirror: keep a separate export so consumers may select by language.
chapter14SlideAnchors.push(...chapter14SlideAnchorsFr.map((anchor) => ({ ...anchor, ...(anchor.end ? { end: { ...anchor.end } } : {}) })))

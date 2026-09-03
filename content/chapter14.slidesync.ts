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

// English deck — same slides, translated. The text↔slide anchors are shared
// (chapter14SlideAnchors): the EN content mirrors the FR block structure.
export const chapter14SlidesEn: SyncSlide[] = [
  { src: '/chapter-14/EN/slides/slide-01.jpg', title: 'The small intestine: anatomy, ecosystem and ROP approach' },
  { src: '/chapter-14/EN/slides/slide-02.jpg', title: 'Topography and intra-abdominal arrangement' },
  { src: '/chapter-14/EN/figure-14-2.png', title: 'Mesos', orientation: 'portrait' },
  { src: '/chapter-14/EN/figure-14-4.png', title: 'Suspensory muscle of the duodenum (muscle of Treitz)' },
  { src: '/chapter-14/EN/figure-14-5.png', title: 'The axis of irrigation and drainage: superior mesenteric trunk', orientation: 'portrait' },
  { src: '/chapter-14/EN/slides/slide-05.jpg', title: 'The double neurological reality of the peritoneum' },
  { src: '/chapter-14/EN/slides/slide-06.jpg', title: 'The second brain: autonomy of the enteric nervous system' },
  { src: '/chapter-14/EN/slides/slide-07.jpg', title: 'The second brain: enteric nervous system' },
  { src: '/chapter-14/EN/slides/slide-08.jpg', title: 'The intestinal ecosystem: the tripod of digestive health' },
  { src: '/chapter-14/EN/slides/slide-09.jpg', title: 'The dual pathway of micronutrient absorption' },
  { src: '/chapter-14/EN/slides/slide-10.jpg', title: 'The spiral: dysbiosis and hyperpermeability' },
  { src: '/chapter-14/EN/slides/slide-11.jpg', title: 'Pathology I: intestinal hyperpermeability (leaky gut)' },
  { src: '/chapter-14/EN/slides/slide-12.jpg', title: 'Pathology II: dysbiosis and its manifestations' },
  { src: '/chapter-14/EN/slides/slide-13.jpg', title: 'Warning signs and diagnosis of exclusion' },
  { src: '/chapter-14/EN/slides/Chapter14 FigCrohn EN.png', title: 'Clinical case — Crohn’s disease and spondyloarthritis' },
  { src: '/chapter-14/EN/slides/slide-14.jpg', title: 'ROP treatment protocol: order of management' },
  { src: '/chapter-14/EN/figure-14-15 EN.png', title: 'Cranial and cervical territory of the vagus nerve' },
  { src: '/chapter-14/EN/figure-14-16.png', title: 'Left abdominal territory of the vagus nerve and coeliac (solar) plexus' },
  { src: '/chapter-14/EN/Chapter14 Fig19 EN.png', title: 'Sympathetic system (spinal origin)' },
  { src: '/chapter-14/EN/figure-14-25.png', title: 'Jejunum (foot reflex zone)' },
  { src: '/chapter-14/EN/figure-14-27.png', title: 'Ileum and root of the mesentery (foot reflex zone)' },
  { src: '/chapter-14/EN/slides/slide-15.jpg', title: 'ROP intervention summary: small intestine protocol' },
  { src: '/chapter-14/EN/slides/slide-16.jpg', title: 'Viscero-emotional profile: the intestine person' },
]

export const chapter14SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation',   blockIndex: 0,  slide: 1 },
  // Slide 2 sits just above the "Ils s'étendent du pylore…" paragraph (presentation block 2).
  { sectionId: 'presentation',   blockIndex: 2,  slide: 2 },
  // Slide 3 is Figure 14.2 and appears immediately after the Anatomy heading.
  { sectionId: 'anatomie',       blockIndex: 0,  slide: 3 },
  // Slide 4 is Figure 14.4 and appears before the longitudinal-tension sentence.
  { sectionId: 'anatomie',       blockIndex: 7,  slide: 4 },
  // Slide 5 points to the "Artère mésentérique supérieure" lead (block 2 now
  // that figure 14.5 leads the Vascularisation section).
  { sectionId: 'vascularisation', blockIndex: 2, slide: 5 },
  { sectionId: 'innervation',    blockIndex: 2,  slide: 6 },
  { sectionId: 'innervation',    blockIndex: 10, slide: 7 },
  { sectionId: 'innervation',    blockIndex: 12, slide: 8 },
  { sectionId: 'physiologie',    blockIndex: 5,  slide: 9 },
  { sectionId: 'physiologie',    blockIndex: 10, slide: 10 },
  { sectionId: 'pathologies',    blockIndex: 0,  slide: 11 },
  { sectionId: 'pathologies',    blockIndex: 1,  slide: 12 },
  { sectionId: 'pathologies',    blockIndex: 7,  slide: 13 },
  { sectionId: 'pathologies',    blockIndex: 11, slide: 14 },
  // Crohn clinical-case slide, right after the "Maladie de Crohn" heading.
  { sectionId: 'pathologies',    blockIndex: 14, slide: 15 },
  // Protocole ROP (ordre de traitement) — overview, at the ROP section heading.
  { sectionId: 'rop',            blockIndex: -1, slide: 16 },
  // Cranial/cervical vagus-nerve territory slide, right after the "1. Nerf vague" heading.
  { sectionId: 'rop',            blockIndex: 1,  slide: 17 },
  // Left-abdominal vagus territory slide, right below figure 14.17 (rendered
  // above figure 14.18, which is block 4 after figure 14.16 moved to the deck).
  { sectionId: 'rop',            blockIndex: 4,  slide: 18 },
  // Sympathetic-system slide, right above figure 14.20 (block 7 after figure
  // 14.19 moved to the deck).
  { sectionId: 'rop',            blockIndex: 7,  slide: 19 },
  // Jejunum reflex-zone slide, right above figure 14.24 (block 16).
  { sectionId: 'rop',            blockIndex: 16, slide: 20 },
  // Ileum reflex-zone slide, right below the "Iléum (pied droit)" heading
  // (rendered above the bullets, which are block 18).
  { sectionId: 'rop',            blockIndex: 18, slide: 21 },
  // ROP intervention synthesis — after the reflex-zone slides, at the limbic step.
  { sectionId: 'rop',            blockIndex: 20, slide: 22 },
  // Viscero-emotional profile — final slide encountered in the text.
  { sectionId: 'relations',      blockIndex: 2,  slide: 23 },
]

// French anchor table — for the rebuilt synthesis deck (FR only). The retained
// pathology slides stay before the ROP sequence; the relations slide remains
// last because it is the final slide encountered in the text.
export const chapter14SlideAnchorsFr: SyncAnchor[] = [
  { sectionId: 'presentation',   blockIndex: 0,  slide: 1 },
  { sectionId: 'presentation',   blockIndex: 2,  slide: 2 },
  { sectionId: 'anatomie',       blockIndex: 2,  slide: 3, end: { sectionId: 'anatomie', blockIndex: 10 } },
  { sectionId: 'vascularisation', blockIndex: 2,  slide: 4, end: { sectionId: 'vascularisation', blockIndex: 5 } },
  { sectionId: 'vascularisation', blockIndex: 5,  slide: 5, gapBefore: 'half', end: { sectionId: 'innervation', blockIndex: -1 } },
  { sectionId: 'innervation',    blockIndex: 2,  slide: 6 },
  { sectionId: 'innervation',    blockIndex: 5,  slide: 7 },
  { sectionId: 'innervation',    blockIndex: 6,  slide: 8, end: { sectionId: 'innervation', blockIndex: 9 } },
  { sectionId: 'physiologie',    blockIndex: 0,  slide: 9 },
  { sectionId: 'physiologie',    blockIndex: 4,  slide: 10 },
  { sectionId: 'physiologie',    blockIndex: 7,  slide: 11 },
  { sectionId: 'physiologie',    blockIndex: 8,  slide: 12, end: { sectionId: 'physiologie', blockIndex: 9, itemIndex: 1 } },
  { sectionId: 'physiologie',    blockIndex: 10, itemIndex: 2, slide: 10 },
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

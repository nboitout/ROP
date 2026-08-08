// Chapter 14 — private new-edition slide ↔ text map.
// Reuses the current French Chapter 14 visuals, reordered for the rewritten text.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number; gapBefore?: 'half'; end?: SyncAnchorPoint }

export const chapter14ReworkSlides: SyncSlide[] = [
  { src: '/chapter-14/slides/fr-rework/slide-01.png', title: 'L’intestin grêle' },
  { src: '/chapter-14/slides/fr-rework/slide-02.png', title: 'Le jéjunum-iléum dans le cadre colique' },
  { src: '/chapter-14/slides/fr-rework/slide-03.png', title: 'Le mésentère : racine et suspension de l’intestin grêle' },
  { src: '/chapter-14/slides/fr-rework/slide-04.png', title: 'Vascularisation de l’intestin grêle' },
  { src: '/chapter-14/slides/fr-rework/slide-05.png', title: 'Le réseau lymphatique de l’intestin grêle' },
  { src: '/chapter-14/slides/fr-rework/slide-07.png', title: 'Nerf vague et système sympathique' },
  { src: '/chapter-14/slides/fr-rework/slide-06.png', title: 'La double innervation du péritoine' },
  { src: '/chapter-14/slides/fr-rework/slide-08.png', title: 'Le deuxième cerveau : système nerveux entérique (SNE)' },
  { src: '/chapter-14/slides/fr-rework/slide-09.png', title: 'Motricité de l’intestin grêle' },
  { src: '/chapter-14/slides/fr-rework/slide-11.png', title: 'La double voie d’absorption micronutritionnelle' },
  { src: '/chapter-14/slides/fr-rework/slide-12.png', title: 'Micro-anatomie : la barrière intestinale' },
  { src: '/chapter-14/slides/fr-rework/slide-10.png', title: 'L’écosystème intestinal : frontière biologique' },
  { src: '/chapter-14/slides/fr-rework/slide-13.png', title: 'Hyperperméabilité et dysbiose : une association réciproque' },
  { src: '/chapter-14/slides/fr-rework/slide-14.png', title: 'Hyperperméabilité intestinale' },
  { src: '/chapter-14/slides/fr-rework/slide-15.png', title: 'La dysbiose et l’axe intestin-cerveau' },
  { src: '/chapter-14/slides/fr-rework/slide-17.png', title: 'Maladie de Crohn' },
  { src: '/chapter-14/slides/fr-rework/slide-16.png', title: 'Indications en ROP et critères d’orientation médicale' },
  { src: '/chapter-14/cartographie/figure-14-01.png', title: 'Cartographie : nerf vague X — moelle allongée' },
  { src: '/chapter-14/cartographie/figure-14-03.png', title: 'Cartographie : nerf vague X — foramen jugulaire' },
  { src: '/chapter-14/cartographie/figure-14-05.png', title: 'Cartographie : hiatus œsophagien et nerfs vagues' },
  { src: '/chapter-14/cartographie/figure-14-11.png', title: 'Cartographie : chaîne plexique prévertébrale' },
  { src: '/chapter-14/cartographie/figure-14-13.png', title: 'Cartographie : racine du mésentère — jonction duodéno-jéjunale' },
  { src: '/chapter-14/cartographie/figure-14-15.png', title: 'Cartographie : racine du mésentère — valvule iléo-cæcale' },
  { src: '/chapter-14/slides/fr-rework/slide-18.png', title: 'Intestin grêle — relations viscéro-somatiques' },
  { src: '/chapter-14/slides/fr-rework/slide-20.png', title: 'Relations viscéro-émotionnelles' },
]

export const chapter14ReworkSlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'situation', blockIndex: -1, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 3, slide: 3 },
  { sectionId: 'vascularisation-et-drainage-lymphatique', blockIndex: -1, slide: 4 },
  { sectionId: 'vascularisation-et-drainage-lymphatique', blockIndex: 5, slide: 5 },
  { sectionId: 'innervation-du-sna-au-systeme-nerveux-enterique', blockIndex: 1, slide: 6 },
  { sectionId: 'innervation-du-sna-au-systeme-nerveux-enterique', blockIndex: 5, slide: 7 },
  { sectionId: 'innervation-du-sna-au-systeme-nerveux-enterique', blockIndex: 8, slide: 8 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 9 },
  { sectionId: 'physiologie', blockIndex: 3, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 8, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 11, slide: 12 },
  { sectionId: 'pathologies-et-situations-cliniques-a-connaitre', blockIndex: -1, slide: 13 },
  { sectionId: 'pathologies-et-situations-cliniques-a-connaitre', blockIndex: 1, slide: 14 },
  { sectionId: 'pathologies-et-situations-cliniques-a-connaitre', blockIndex: 5, slide: 15 },
  { sectionId: 'pathologies-et-situations-cliniques-a-connaitre', blockIndex: 13, slide: 16 },
  { sectionId: 'pathologies-et-situations-cliniques-a-connaitre', blockIndex: 17, slide: 17 },
  { sectionId: 'application-en-rop-lecture-en-quatre-niveaux', blockIndex: 3, slide: 18 },
  { sectionId: 'application-en-rop-lecture-en-quatre-niveaux', blockIndex: 4, itemIndex: 0, slide: 19 },
  { sectionId: 'application-en-rop-lecture-en-quatre-niveaux', blockIndex: 4, itemIndex: 1, slide: 20 },
  { sectionId: 'application-en-rop-lecture-en-quatre-niveaux', blockIndex: 4, itemIndex: 2, slide: 21 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, itemIndex: 0, slide: 22 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, itemIndex: 3, slide: 23 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: -1, slide: 24 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1, slide: 25 },
  { sectionId: 'cas-clinique-maladie-de-crohn-et-spondylarthrite', blockIndex: -1, slide: 16 },
]

export const chapter14ReworkSlidesSetAside = [
  { src: '/chapter-14/slides/fr-rework/slide-19.png', reason: 'Protocole consacré aux reins, sans rapport avec le nouveau chapitre 14.' },
  { src: '/chapter-14/cartographie/figure-14-07.png', reason: 'Petite courbure de l’estomac non développée dans le nouveau texte.' },
  { src: '/chapter-14/cartographie/figure-14-09.png', reason: 'Parasympathique pelvien non retenu pour l’innervation du jéjunum-iléum.' },
] as const

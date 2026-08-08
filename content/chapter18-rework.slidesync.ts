// Chapter 18 — private new-edition slide ↔ text map.
// Reuses compatible visuals from the current French Chapter 18 deck.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number | number[]; gapBefore?: 'half'; end?: SyncAnchorPoint }

export const chapter18ReworkSlides: SyncSlide[] = [
  { src: '/chapter-18/slides/slide-01.png', title: 'La vessie : anatomie, physiologie et ROP' },
  { src: '/chapter-18/slides/slide-05.png', title: 'Quand la vessie se remplit' },
  { src: '/chapter-18/slides/slide-03.png', title: 'Situation anatomique dans la cavité pelvienne — femme' },
  { src: '/chapter-18/slides/slide-04.png', title: 'Situation anatomique dans la cavité pelvienne — homme' },
  { src: '/chapter-18/slides/slide-06.png', title: 'Architecture interne : les trois parois de la vessie' },
  { src: '/chapter-18/slides/slide-07.png', title: 'Morphologie interne : le trigone de Lieutaud' },
  { src: '/chapter-18/slides/slide-10.png', title: 'Le système de soutènement de la vessie' },
  { src: '/chapter-18/slides/slide-11.png', title: 'Innervation de la vessie' },
  { src: '/chapter-18/slides/slide-21.png', title: 'Centres supérieurs du contrôle neurovégétatif' },
  { src: '/chapter-18/slides/slide-12.png', title: 'Physiologie : le cycle de la miction' },
  { src: '/chapter-18/slides/slide-14.png', title: 'Mécanismes pathologiques et dysfonctions' },
  { src: '/chapter-18/slides/slide-17.png', title: 'Troubles urinaires : indications et diagnostics d’exclusion' },
  { src: '/chapter-18/slides/slide-20.png', title: 'Protocole clinique ROP : la vessie' },
  { src: '/chapter-18/slides/slide-18.png', title: 'Relations viscéro-émotionnelles' },
  { src: '/chapter-18/slides/slide-19.png', title: 'Conseils pratiques : rééducation abdomino-périnéale' },
  { src: '/chapter-18/cartographie/figure-18-01.png', title: 'Cartographie : chaîne ganglionnaire latéro-vertébrale thoracique' },
  { src: '/chapter-18/cartographie/figure-18-02.png', title: 'Photo : chaîne ganglionnaire latéro-vertébrale thoracique' },
  { src: '/chapter-18/cartographie/figure-18-03.png', title: 'Cartographie : origine médullaire du parasympathique pelvien ou sacré' },
  { src: '/chapter-18/cartographie/figure-18-04.png', title: 'Photo : chaîne ganglionnaire lombaire et piliers du diaphragme' },
  { src: '/chapter-18/cartographie/figure-18-05.png', title: 'Cartographie : foramens ischiatiques et muscles pelviens profonds' },
  { src: '/chapter-18/cartographie/figure-18-06.png', title: 'Photo : grand foramen ischiatique' },
  { src: '/chapter-18/cartographie/figure-18-07.png', title: 'Cartographie : foramens ischiatiques et muscles pelviens profonds' },
  { src: '/chapter-18/cartographie/figure-18-08.png', title: 'Photo : petit foramen ischiatique' },
  { src: '/chapter-18/cartographie/figure-18-09.png', title: 'Cartographie : foramens ischiatiques et muscles pelviens profonds' },
  { src: '/chapter-18/cartographie/figure-18-10.png', title: 'Cartographie : fosse obturée, muscles obturateurs et nerf pudendal' },
  { src: '/chapter-18/cartographie/figure-18-11.png', title: 'Photo : fosse obturée et muscles obturateurs' },
  { src: '/chapter-18/cartographie/figure-18-12.png', title: 'Cartographie : ligaments sacro-tubéral et sacro-épineux, nerf pudendal' },
  { src: '/chapter-18/cartographie/figure-18-13.png', title: 'Photo : ligaments sacro-tubéral et sacro-épineux' },
  { src: '/chapter-18/cartographie/figure-18-14.png', title: 'Cartographie : vessie, utérus ou prostate' },
  { src: '/chapter-18/cartographie/figure-18-15.png', title: 'Photo : ligament pubo-vésical' },
  { src: '/chapter-18/cartographie/figure-18-16.png', title: 'Cartographie : vessie, utérus ou prostate' },
  { src: '/chapter-18/cartographie/figure-18-17.png', title: 'Photo : trigone de la vessie et plexus hypogastrique' },
  { src: '/chapter-18/cartographie/figure-18-18.png', title: 'Cartographie : vessie, utérus ou prostate' },
  { src: '/chapter-18/cartographie/figure-18-19.png', title: 'Photo : noyau fibreux central du périnée et fente uro-génitale' },
]

export const chapter18ReworkSlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation-pourquoi-la-vessie-est-un-organe-majeur-pour-la-rop', blockIndex: -1, slide: 1 },
  { sectionId: 'situation-et-anatomie-fonctionnelle', blockIndex: 0, slide: 2 },
  { sectionId: 'situation-et-anatomie-fonctionnelle', blockIndex: 1, slide: 3 },
  { sectionId: 'situation-et-anatomie-fonctionnelle', blockIndex: 2, slide: 4 },
  { sectionId: 'situation-et-anatomie-fonctionnelle', blockIndex: 3, slide: 5 },
  { sectionId: 'situation-et-anatomie-fonctionnelle', blockIndex: 6, slide: 6 },
  { sectionId: 'soutien-loco-regional-de-la-vessie-niveau-3', blockIndex: -1, slide: 7 },
  { sectionId: 'innervation-le-carrefour-neuro-anatomique-de-la-vessie', blockIndex: -1, slide: 8 },
  { sectionId: 'controle-spinal-et-supraspinal-de-la-miction-niveau-1', blockIndex: -1, slide: 9 },
  { sectionId: 'physiologie-le-cycle-remplissage-besoin-miction', blockIndex: -1, slide: 10 },
  { sectionId: 'troubles-fonctionnels-de-la-vessie', blockIndex: -1, slide: 11 },
  { sectionId: 'diagnostic-dexclusion-et-signes-dalarme', blockIndex: -1, slide: 12 },
  { sectionId: 'application-en-rop-la-vessie-selon-les-quatre-niveaux', blockIndex: -1, slide: 13 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1, slide: 14 },
  { sectionId: 'conseils-et-reeducation-fonctionnelle', blockIndex: -1, slide: 15 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, itemIndex: 1, slide: [16, 17] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, itemIndex: 0, slide: [18, 19] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 4, itemIndex: 2, slide: [20, 21, 22, 23, 24] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, itemIndex: 0, slide: [25, 26] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 6, itemIndex: 1, slide: [27, 28] },
  { sectionId: 'zones-reflexes-podales', blockIndex: 4, itemIndex: 1, slide: [29, 30, 31, 32, 33, 34] },
]

export const chapter18ReworkSlidesSetAside = [
  { src: '/chapter-18/slides/slide-02.png', reason: 'Panorama chiffré absent du nouveau texte et fondé sur l’ancienne présentation clinique.' },
  { src: '/chapter-18/slides/slide-08.png', reason: 'Attribue aux tensions ligamentaires des mécanismes causaux que le nouveau texte présente comme non démontrés.' },
  { src: '/chapter-18/slides/slide-09.png', reason: 'Reprend une lecture mécanique des ligaments et du remplissage qui n’est plus retenue dans la réécriture.' },
  { src: '/chapter-18/slides/slide-13.png', reason: 'Modèle d’enceinte manométrique pelvienne non développé dans la nouvelle version.' },
  { src: '/chapter-18/slides/slide-15.png', reason: 'Présente la tension ligamentaire comme cause directe d’une béance urétrale, contrairement aux précautions du nouveau texte.' },
  { src: '/chapter-18/slides/slide-16.png', reason: 'Propose une action ROP sur le « terrain » des cystites alors que la nouvelle version sépare clairement infection et accompagnement fonctionnel.' },
] as const

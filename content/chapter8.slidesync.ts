// Chapter 8 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-8).
//
// Slides 1-16 are the retained pre-rendered pages of the chapter 8 synthesis deck,
// stored under public/chapter-8/FR/slides/.
//
// Slides 20+ reuse the cartography pages from:
// public/chapter-8/Chapter8 Cartes et Photos.pdf
//
// They are ordered here by their appearance in the reading flow, so the
// displayed slide numbers progress with the text rather than the source PDF
// page order.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = {
  sectionId: string
  blockIndex: number
  slide: number | number[]
  gapBefore?: 'half'
  end?: { sectionId: string; blockIndex: number }
}

export const chapter8Slides: SyncSlide[] = [
  {
    src: "/chapter-8/FR/slides/slide-01.png",
    title: "Chapitre 8 : Diaphragme"
  },
  {
    src: "/chapter-8/FR/slides/slide-02.png",
    title: "Les 8 dimensions fonctionnelles du diaphragme"
  },
  {
    src: "/chapter-8/FR/slides/slide-06.png",
    title: "Anatomie du diaphragme et des passages"
  },
  {
    src: "/chapter-8/FR/slides/slide-03.png",
    title: "Coupoles et centre phrénique"
  },
  {
    src: "/chapter-8/FR/slides/slide-05.png",
    title: "Trois hiatus principaux"
  },
  {
    src: "/chapter-8/FR/slides/slide-08.png",
    title: "Les hiatus accessoires et leurs vulnérabilités"
  },
  {
    src: "/chapter-8/FR/slides/slide-07.png",
    title: "Vascularisation du diaphragme"
  },
  {
    src: "/chapter-8/FR/slides/slide-09.png",
    title: "Le câblage électrique : les nerfs phréniques"
  },
  {
    src: "/chapter-8/FR/slides/slide-11.png",
    title: "L équilibre barometrique et le soutien visceral"
  },
  {
    src: "/chapter-8/FR/slides/slide-13.png",
    title: "Biomécanique de la JOCT"
  },
  {
    src: "/chapter-8/FR/slides/slide-12.png",
    title: "Le mecanisme anti-reflux : le noeud de cravate"
  },
  {
    src: "/chapter-8/FR/slides/slide-14.png",
    title: "Pathologie mécanique : les hernies hiatales"
  },
  {
    src: "/chapter-8/FR/slides/slide-15.png",
    title: "Le reflux gastro-œsophagien et le symptôme de tensions globales"
  },
  {
    src: "/chapter-8/FR/slides/slide-16.png",
    title: "Focus pediatrique : RGO du nouveau-ne"
  },
  {
    src: "/chapter-8/FR/slides/slide-10.png",
    title: "Le carrefour azygo-cave et l axe du stress"
  },
  {
    src: "/chapter-8/FR/slides/slide-04.png",
    title: "Topographie asymetrique en ROP"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-02.png",
    title: "Cartographie podale : coupole diaphragmatique gauche et hiatus œsophagien"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-03.png",
    title: "Cartographie podale : coupole diaphragmatique droite"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-05.png",
    title: "Cartographie podale : hiatus œsophagien"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-07.png",
    title: "Cartographie podale : hiatus de Marfran et de Larrey"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-12.png",
    title: "Cartographie podale : nerf phrénique"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-14.png",
    title: "Cartographie podale : articulations costo-vertébrales"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-09.png",
    title: "Cartographie podale : jonction azygo-cave"
  },
  {
    src: "/chapter-8/FR/cartographies/figure-8-16.png",
    title: "Cartographie podale : nerf intercostal brachial de Hyrtl"
  }
]

export const chapter8SlideAnchors: SyncAnchor[] = [
  {
    sectionId: "presentation",
    blockIndex: 0,
    slide: 1
  },
  {
    sectionId: "presentation",
    blockIndex: 0,
    slide: 2
  },
  {
    sectionId: "anatomie",
    blockIndex: 0,
    slide: 3
  },
  {
    sectionId: "anatomie",
    blockIndex: 5,
    slide: 4
  },
  {
    sectionId: "anatomie",
    blockIndex: 27,
    slide: 5
  },
  {
    sectionId: "anatomie",
    blockIndex: 45,
    slide: 6
  },
  {
    sectionId: "vascularisation",
    blockIndex: 0,
    slide: 7
  },
  {
    sectionId: "innervation",
    blockIndex: 1,
    slide: 8
  },
  {
    sectionId: "physiologie",
    blockIndex: 2,
    slide: 9,
    gapBefore: "half"
  },
  {
    sectionId: "physiologie",
    blockIndex: 14,
    slide: 10
  },
  {
    sectionId: "physiologie",
    blockIndex: 21,
    slide: 11
  },
  {
    sectionId: "pathologies-courantes-diagnostic-d-exclusion-indications-troubles-fonctionnels",
    blockIndex: 0,
    slide: 12
  },
  {
    sectionId: "pathologies-courantes-diagnostic-d-exclusion-indications-troubles-fonctionnels",
    blockIndex: 2,
    slide: 13
  },
  {
    sectionId: "pathologies-courantes-diagnostic-d-exclusion-indications-troubles-fonctionnels",
    blockIndex: 28,
    slide: 14
  },
  {
    sectionId: "relations-viscero-somatiques",
    blockIndex: 1,
    slide: 15
  },
  {
    sectionId: "conseils",
    blockIndex: 1,
    slide: 16
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 4,
    slide: 17,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 4 }
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 4,
    slide: 18,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 4 }
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 29,
    slide: 19,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 29 }
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 30,
    slide: 20,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 30 }
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 18,
    slide: 21,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 19 }
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 43,
    slide: 22,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 43 }
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 32,
    slide: 23,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 32 }
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 45,
    slide: 24,
    end: { sectionId: "zones-reflexes-podales", blockIndex: 45 }
  }
]

export const chapter8SlidesEn: SyncSlide[] = [
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 1.png', title: 'Chapter 8 — Diaphragm' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 2 V2.png', title: 'The 8 Functional Dimensions of the Diaphragm' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 3 V2.png', title: 'Diaphragmatic Domes and Central Tendon' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 4.png', title: 'Clinical Application: Asymmetric Topography in ROP' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 5.png', title: 'Three Main Hiatuses' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 6.png', title: 'Inferior Anatomy of the Diaphragm' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 7.png', title: 'Arteries of the Diaphragm' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 8.png', title: 'Accessory Hiatuses: Passageways and Sites of Vulnerability' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 9.png', title: 'The Electrical Wiring: The Phrenic Nerves' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 10.png', title: 'The Azygos–Caval Junction and the Stress Axis' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 11.png', title: 'Barometric Balance and Visceral Support' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 12.png', title: 'The Anti-Reflux Mechanism: The Tie-Knot' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 13.png', title: 'Biomechanics of the Esophagogastric Junction' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 14.png', title: 'Mechanical Pathology: Hiatal Hernias' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 15.png', title: 'Gastroesophageal Reflux Is a Manifestation of Global Tension Patterns' },
  { src: '/chapter-8/EN/Images/NCH 8 EN IMG 16.png', title: 'Pediatric Focus: Neonatal GERD' },
]

export const chapter8SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 1, slide: 2 },
  { sectionId: 'anatomie', blockIndex: 5, slide: 3 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 28, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 33, slide: 6 },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 46, slide: 8 },
  { sectionId: 'innervation', blockIndex: 1, slide: 9 },
  { sectionId: 'vascularisation', blockIndex: 5, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 4, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 19, slide: 12 },
  { sectionId: 'physiologie', blockIndex: 23, slide: 13 },
  { sectionId: 'pathologies-courantes-diagnostic-d-exclusion-indications-troubles-fonctionnels', blockIndex: 5, slide: 14 },
  { sectionId: 'pathologies-courantes-diagnostic-d-exclusion-indications-troubles-fonctionnels', blockIndex: 0, slide: 15 },
  { sectionId: 'pathologies-courantes-diagnostic-d-exclusion-indications-troubles-fonctionnels', blockIndex: 28, slide: 16 },
]

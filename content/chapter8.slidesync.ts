// Chapter 8 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-8).
//
// Slide images are the pre-rendered pages of the chapter 8 synthesis deck,
// stored under public/chapter-8/slides/. They are ordered here by their
// appearance in the reading flow, so the displayed slide numbers progress with
// the text rather than the source PDF page order.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter8Slides: SyncSlide[] = [
  {
    src: "/chapter-8/slides/slide-01.png",
    title: "Chapitre 8 : Diaphragme"
  },
  {
    src: "/chapter-8/slides/slide-02.png",
    title: "Les 8 dimensions fonctionnelles du diaphragme"
  },
  {
    src: "/chapter-8/slides/slide-06.png",
    title: "Anatomie du diaphragme et des passages"
  },
  {
    src: "/chapter-8/slides/slide-03.png",
    title: "Coupoles et centre phrénique"
  },
  {
    src: "/chapter-8/slides/slide-05.png",
    title: "Trois hiatus principaux"
  },
  {
    src: "/chapter-8/slides/slide-08.png",
    title: "Les hiatus accessoires et leurs vulnerabilites"
  },
  {
    src: "/chapter-8/slides/slide-07.png",
    title: "Vascularisation du diaphragme"
  },
  {
    src: "/chapter-8/slides/slide-09.png",
    title: "Le cablage electrique : les nerfs phreniques"
  },
  {
    src: "/chapter-8/slides/slide-11.png",
    title: "L equilibre barometrique et le soutien visceral"
  },
  {
    src: "/chapter-8/slides/slide-13.png",
    title: "Biomecanique de la JOCT"
  },
  {
    src: "/chapter-8/slides/slide-12.png",
    title: "Le mecanisme anti-reflux : le noeud de cravate"
  },
  {
    src: "/chapter-8/slides/slide-14.png",
    title: "Pathologie mecanique : les hernies hiatales"
  },
  {
    src: "/chapter-8/slides/slide-15.png",
    title: "Le reflux gastro-œsophagien et le symptôme de tensions globales"
  },
  {
    src: "/chapter-8/slides/slide-16.png",
    title: "Focus pediatrique : RGO du nouveau-ne"
  },
  {
    src: "/chapter-8/slides/slide-10.png",
    title: "Le carrefour azygo-cave et l axe du stress"
  },
  {
    src: "/chapter-8/slides/slide-19.png",
    title: "Synthèse : de la fixation à la thérapeutique ROP"
  },
  {
    src: "/chapter-8/slides/slide-04.png",
    title: "Topographie asymetrique en ROP"
  },
  {
    src: "/chapter-8/slides/slide-17.png",
    title: "Synthèse : matrice topographique podale ROP"
  },
  {
    src: "/chapter-8/slides/slide-18.png",
    title: "Synthèse : précision de la projection réflexe"
  },
  {
    src: "/chapter-8/slides/slide-20.png",
    title: "Cartographie podale : coupole diaphragmatique gauche et hiatus œsophagien"
  },
  {
    src: "/chapter-8/slides/slide-21.png",
    title: "Cartographie podale : coupole diaphragmatique droite"
  },
  {
    src: "/chapter-8/slides/slide-22.png",
    title: "Cartographie podale : hiatus œsophagien"
  },
  {
    src: "/chapter-8/slides/slide-23.png",
    title: "Cartographie podale : hiatus de Marfran et de Larrey"
  },
  {
    src: "/chapter-8/slides/slide-24.png",
    title: "Cartographie podale : jonction azygo-cave"
  },
  {
    src: "/chapter-8/slides/slide-25.png",
    title: "Cartographie podale : nerf phrénique"
  },
  {
    src: "/chapter-8/slides/slide-26.png",
    title: "Cartographie podale : articulations costo-vertébrales"
  },
  {
    src: "/chapter-8/slides/slide-27.png",
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
    blockIndex: 1,
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
    blockIndex: 1,
    slide: 17
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 4,
    slide: 18
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 5,
    slide: 19
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 6,
    slide: 20
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 7,
    slide: 21
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 14,
    slide: 22
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 19,
    slide: 23
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 23,
    slide: 24
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 25,
    slide: 25
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 28,
    slide: 25
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 32,
    slide: 26
  },
  {
    sectionId: "zones-reflexes-podales",
    blockIndex: 34,
    slide: 27
  }
]

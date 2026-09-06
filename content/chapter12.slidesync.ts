// Chapter 12 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-12).
//
// Slides 1-14 are the pre-rendered pages of the chapter 12 synthesis deck,
// stored under public/chapter-12/FR/slides/.
//
// Slides 15+ reuse the cartography pages from:
// public/chapter-12/Chapter12 Cartographie et Photos.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half'; end?: { sectionId: string; blockIndex: number } }

export const chapter12Slides: SyncSlide[] = [
  { src: '/chapter-12/FR/slides/slide-01.png', title: 'Le Pancréas' },
  { src: '/chapter-12/FR/slides/slide-02.png', title: 'La dualité fonctionnelle du pancréas' },
  { src: '/chapter-12/FR/slides/slide-03.png', title: 'Un organe profond et vulnerable' },
  { src: '/chapter-12/FR/slides/slide-04.png', title: 'Morphologie anatomique' },
  { src: '/chapter-12/FR/slides/slide-05.png', title: 'Le réseau canalaire exocrine' },
  { src: '/chapter-12/FR/slides/slide-06.png', title: 'Un écosystème vasculaire partagé' },
  { src: '/chapter-12/FR/slides/slide-07.png', title: 'Innervation et commande neurovegetative' },
  { src: '/chapter-12/FR/slides/slide-08.png', title: 'Physiologie exocrine : la machine digestive' },
  { src: '/chapter-12/FR/slides/slide-09.png', title: 'Physiologie endocrine : l homéostasie glycémique' },
  { src: '/chapter-12/FR/slides/slide-10.png', title: 'Manifestations cliniques et diagnostics d exclusion' },
  { src: '/chapter-12/FR/slides/slide-11.png', title: 'Pathologies glycémiques : le spectre du diabète' },
  { src: '/chapter-12/FR/slides/slide-12.png', title: 'Pathologies severes : pancreatites et tumeurs' },
  { src: '/chapter-12/FR/slides/slide-14.png', title: 'Pancréas — relations viscéro-somatiques' },
  { src: '/chapter-12/FR/slides/slide-13.png', title: 'Synthèse viscéro-émotionnelle' },
  { src: '/chapter-12/FR/cartographies/figure-12-01.png', title: 'Cartographie : Pancréas — tête et col' },
  { src: '/chapter-12/FR/cartographies/figure-12-03.png', title: 'Cartographie : Pancréas — corps et queue' },
]

export const chapter12SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 16, slide: 5, end: { sectionId: 'moyens-de-fixite', blockIndex: -1 } },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 6 },
  { sectionId: 'innervation', blockIndex: 0, slide: 7 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 8 },
  { sectionId: 'interet-en-rop-2', blockIndex: 1, slide: 9 },
  { sectionId: 'pathologies-courantes', blockIndex: 3, slide: 10 },
  { sectionId: 'pathologies-courantes', blockIndex: 6, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 40, slide: 12 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 13 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 15, end: { sectionId: 'zones-reflexes-podales', blockIndex: 15 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 16, end: { sectionId: 'zones-reflexes-podales', blockIndex: 16 } },
]

export const chapter12SlidesEn: SyncSlide[] = [
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 1.png', title: 'Chapter 12 — The Pancreas' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 2 V2.png', title: 'The Functional Duality of the Pancreas' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 3 V2.png', title: 'A Deep and Vulnerable Organ' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 4 V2.png', title: 'Anatomical Morphology' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 5 V3.png', title: 'The Exocrine Duct Network' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 6 V3.png', title: 'A Shared Vascular System' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 7 V3.png', title: 'Innervation and Autonomic Control' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 5 V2.png', title: 'Exocrine Physiology: The Digestive Machine' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 9 V3.png', title: 'Endocrine Physiology: Glycaemic Homeostasis' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 10 V3.png', title: 'Clinical Manifestations and Diagnoses of Exclusion' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 9 V2.png', title: 'Glycaemic Disorders: The Spectrum of Diabetes' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 10 V2.png', title: 'Severe Disorders: Pancreatitis and Tumours' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 14 V2.png', title: 'Pancreas — Viscerosomatic Relationships' },
  { src: '/chapter-12/EN/Images/NCH 12 EN IMG 13 V2.png', title: 'Viscero-emotional Overview' },
  { src: '/chapter-12/EN/cartography/figure-12-01-V2.png', title: 'Cartography: Pancreas — Head and Neck' },
  { src: '/chapter-12/EN/cartography/figure-12-03-V2.png', title: 'Cartography: Pancreas — Body and Tail' },
]

export const chapter12SlideAnchorsEn: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 0, slide: 3 },
  { sectionId: 'anatomie', blockIndex: 0, slide: 4 },
  { sectionId: 'anatomie', blockIndex: 16, slide: 5, end: { sectionId: 'moyens-de-fixite', blockIndex: -1 } },
  { sectionId: 'vascularisation', blockIndex: 0, slide: 6 },
  { sectionId: 'innervation', blockIndex: 0, slide: 7 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 8 },
  { sectionId: 'interet-en-rop-2', blockIndex: 1, slide: 9 },
  { sectionId: 'pathologies-courantes', blockIndex: 3, slide: 10 },
  { sectionId: 'pathologies-courantes', blockIndex: 6, slide: 11 },
  { sectionId: 'pathologies-courantes', blockIndex: 40, slide: 12 },
  { sectionId: 'relations-viscero-somatiques', blockIndex: 0, slide: 13 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 14 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 15, slide: 15, end: { sectionId: 'zones-reflexes-podales', blockIndex: 15 } },
  { sectionId: 'zones-reflexes-podales', blockIndex: 16, slide: 16, end: { sectionId: 'zones-reflexes-podales', blockIndex: 16 } },
]

// Chapter 18 - slide <-> text synchronisation map for the combined reading
// experience (/lecture/chapitre-18).
//
// Slides are pre-rendered from:
// public/chapter-18/Chapter18 Slides de synthese - FR.pdf

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

export const chapter18Slides: SyncSlide[] = [
  { src: '/chapter-18/slides/slide-01.png', title: 'La vessie : anatomie, physiologie et ROP' },
  { src: '/chapter-18/slides/slide-02.png', title: 'Le panorama clinique' },
  { src: '/chapter-18/slides/slide-03.png', title: 'Situation anatomique dans la cavite pelvienne (femme)' },
  { src: '/chapter-18/slides/slide-04.png', title: 'Situation anatomique dans la cavite pelvienne (homme)' },
  { src: '/chapter-18/slides/slide-05.png', title: 'Morphologie et dynamique volumetrique' },
  { src: '/chapter-18/slides/slide-06.png', title: 'Architecture interne : le detrusor et le trigone' },
  { src: '/chapter-18/slides/slide-07.png', title: 'Morphologie interne : le trigone de Lieutaud' },
  { src: '/chapter-18/slides/slide-08.png', title: 'Le systeme de suspension mecanique' },
  { src: '/chapter-18/slides/slide-09.png', title: 'Amarrage et soutenement pelvien' },
  { src: '/chapter-18/slides/slide-10.png', title: 'Cablage neurologique : controle autonome et somatique' },
  { src: '/chapter-18/slides/slide-11.png', title: 'Physiologie : le cycle de la miction' },
  { src: '/chapter-18/slides/slide-12.png', title: 'Biomecanique : l enceinte manometrique pelvienne' },
  { src: '/chapter-18/slides/slide-13.png', title: 'Mecanismes pathologiques et dysfonctions' },
  { src: '/chapter-18/slides/slide-14.png', title: 'Biomecanique : l enceinte manometrique pelvienne' },
  { src: '/chapter-18/slides/slide-15.png', title: 'Pathologie : incontinence urinaire d effort (IUE)' },
  { src: '/chapter-18/slides/slide-16.png', title: 'Diagnostics differentiels : cystites et imperiosites' },
  { src: '/chapter-18/slides/slide-17.png', title: 'Le profil viscero-emotionnel' },
  { src: '/chapter-18/slides/slide-18.png', title: 'Conseils pratiques : gymnastique perineale hypopressive' },
  { src: '/chapter-18/slides/slide-19.png', title: 'Conseils pratiques et gymnastique perineale' },
  { src: '/chapter-18/slides/slide-20.png', title: 'L approche therapeutique ROP : cartographie d intervention' },
  { src: '/chapter-18/slides/slide-21.png', title: 'L approche ROP : cartographie des zones podales' },
  { src: '/chapter-18/slides/slide-22.png', title: 'Application ROP : zones reflexes podales' },
]

export const chapter18SlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: -1, slide: 1 },
  { sectionId: 'presentation', blockIndex: 0, slide: 2 },
  { sectionId: 'situation', blockIndex: 1, slide: 3 },
  { sectionId: 'situation', blockIndex: 3, slide: 4 },
  { sectionId: 'situation', blockIndex: 4, slide: 5 },
  { sectionId: 'anatomie', blockIndex: 2, slide: 6 },
  { sectionId: 'anatomie', blockIndex: 6, slide: 7 },
  { sectionId: 'anatomie', blockIndex: 13, slide: 8 },
  { sectionId: 'anatomie', blockIndex: 19, slide: 9 },
  { sectionId: 'innervation', blockIndex: 0, slide: 10 },
  { sectionId: 'physiologie', blockIndex: 0, slide: 11 },
  { sectionId: 'physiologie', blockIndex: 19, slide: 12 },
  { sectionId: 'pathologies-courantes', blockIndex: 0, slide: 13 },
  { sectionId: 'physiologie', blockIndex: 22, slide: 14 },
  { sectionId: 'pathologies-courantes', blockIndex: 2, slide: 15 },
  { sectionId: 'pathologies-courantes', blockIndex: 7, slide: 16 },
  { sectionId: 'relations-viscero-emotionnelles', blockIndex: 0, slide: 17 },
  { sectionId: 'conseils', blockIndex: 0, slide: 18 },
  { sectionId: 'conseils', blockIndex: 1, slide: 19 },
  { sectionId: 'zones-reflexes-podales', blockIndex: -1, slide: 20 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 0, slide: 21 },
  { sectionId: 'zones-reflexes-podales', blockIndex: 2, slide: 22 },
]

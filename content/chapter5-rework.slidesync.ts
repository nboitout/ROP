// Chapter 5 rework - slide <-> text synchronisation map for the dedicated
// review page (/lecture/chapitre-5-rework).
//
// Slide images are rendered from:
// public/Chapter-5 Rework/Mecanime de Stress -  ROP et physiologie de l'Allostasie.pdf
//
// The PDF page order is not always the reading order; this array follows the
// flow of the rewritten text.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
export type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
export type SyncAnchor = SyncAnchorPoint & { slide: number | number[]; gapBefore?: 'half'; end?: SyncAnchorPoint }

export const chapter5ReworkSlides: SyncSlide[] = [
  { src: '/chapter-5-rework/slides/slide-01.png', title: "La physiologie de l'adaptation et l'approche ROP" },
  { src: '/chapter-5-rework/slides/slide-02.png', title: 'Le changement de paradigme biologique' },
  { src: '/chapter-5-rework/slides/slide-03.png', title: 'La trilogie des stresseurs et la charge allostatique' },
  { src: '/chapter-5-rework/slides/slide-04.png', title: "Le stress n'est pas l'evenement, c'est la reponse" },
  { src: '/chapter-5-rework/slides/slide-05.png', title: 'La double reponse au stresseur : urgence et soutien' },
  { src: '/chapter-5-rework/slides/slide-06.png', title: "Le syndrome general d'adaptation" },
  { src: '/chapter-5-rework/slides/slide-07.png', title: 'Phases 1 et 2 : alarme et vulnerabilite passagere' },
  { src: '/chapter-5-rework/slides/slide-08.png', title: "Phase 3 : l'hyperstimulation fonctionnelle" },
  { src: '/chapter-5-rework/slides/slide-09.png', title: 'Phase 4 : la bascule vers la chronicite' },
  { src: '/chapter-5-rework/slides/slide-10.png', title: "Le veritable cout du stress : l'absence de recuperation" },
  { src: '/chapter-5-rework/slides/slide-13.png', title: "L'enjeu adaptatif : la capacite a terminer la reaction" },
  { src: '/chapter-5-rework/slides/slide-11.png', title: 'Le cout de regulation : une mobilisation active, pas un reservoir perdu' },
  { src: '/chapter-5-rework/slides/slide-12.png', title: 'Le cout de regulation et la charge allostatique' },
  { src: '/chapter-5-rework/slides/slide-14.png', title: "L'hypermetabolisme cellulaire sous contrainte" },
  { src: '/chapter-5-rework/slides/slide-16.png', title: 'Le cout energetique : la signature mitochondriale' },
  { src: '/chapter-5-rework/slides/slide-15.png', title: 'Le cheveu comme archive biologique du stress' },
  { src: '/chapter-5-rework/slides/slide-17.png', title: 'Le modele du seuil et la marge de reversibilite' },
  { src: '/chapter-5-rework/slides/slide-18.png', title: 'Le balancier : viser la flexibilite autonome' },
  { src: '/chapter-5-rework/slides/slide-19.png', title: "L'objectif autonome : la flexibilite, non la domination vagale" },
  { src: '/chapter-5-rework/slides/slide-22.png', title: "La voie ascendante : informer l'interoception" },
  { src: '/chapter-5-rework/slides/slide-20.png', title: 'Synthese clinique : la perturbation sensorielle mesuree' },
  { src: '/chapter-5-rework/slides/slide-21.png', title: 'La sequence clinique ROP : cartographie du deverrouillage' },
  { src: '/chapter-5-rework/slides/slide-23.png', title: 'Niveau 1 : diminuer la persistance du signal' },
  { src: '/chapter-5-rework/slides/slide-24.png', title: 'Niveau 2 : reduire la mobilisation devenue inutile' },
  { src: '/chapter-5-rework/slides/slide-25.png', title: 'Niveau 3 : restaurer la disponibilite respiratoire' },
  { src: '/chapter-5-rework/slides/slide-26.png', title: 'Niveau 4 : le retour des fonctions viscerales' },
  { src: '/chapter-5-rework/slides/slide-27.png', title: 'Vers la recherche : etudier la cinetique de recuperation' },
]

export const chapter5ReworkSlideAnchors: SyncAnchor[] = [
  { sectionId: 'presentation', blockIndex: 0, slide: 1, end: { sectionId: 'de-l-homeostasie-a-l-allostasie', blockIndex: 0 } },
  { sectionId: 'de-l-homeostasie-a-l-allostasie', blockIndex: 0, slide: 2, end: { sectionId: 'la-trilogie-des-stresseurs', blockIndex: 0 } },
  { sectionId: 'la-trilogie-des-stresseurs', blockIndex: 0, slide: 3, end: { sectionId: 'le-stress-n-est-pas-seulement-l-evenement-c-est-la-reponse', blockIndex: 0 } },
  { sectionId: 'le-stress-n-est-pas-seulement-l-evenement-c-est-la-reponse', blockIndex: 0, slide: 4, end: { sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 0 } },
  { sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 0, slide: 5, end: { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 0 } },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 0, slide: 6, end: { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 1 } },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 1, slide: 7, end: { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 6 } },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 6, slide: 8, end: { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 9 } },
  { sectionId: 'le-syndrome-general-d-adaptation-un-modele-pedagogique', blockIndex: 9, slide: 9, end: { sectionId: 'le-veritable-cout-du-stress-l-absence-de-recuperation', blockIndex: 0 } },
  { sectionId: 'le-veritable-cout-du-stress-l-absence-de-recuperation', blockIndex: 0, slide: 10, end: { sectionId: 'le-veritable-cout-du-stress-l-absence-de-recuperation', blockIndex: 7 } },
  { sectionId: 'le-veritable-cout-du-stress-l-absence-de-recuperation', blockIndex: 7, slide: 11, end: { sectionId: 'le-cout-de-regulation-une-mobilisation-active-pas-une-batterie-qui-se-vide', blockIndex: 0 } },
  { sectionId: 'le-cout-de-regulation-une-mobilisation-active-pas-une-batterie-qui-se-vide', blockIndex: 0, slide: 12, end: { sectionId: 'le-cout-de-regulation-une-mobilisation-active-pas-une-batterie-qui-se-vide', blockIndex: 3 } },
  { sectionId: 'le-cout-de-regulation-une-mobilisation-active-pas-une-batterie-qui-se-vide', blockIndex: 3, slide: 13, end: { sectionId: 'a-l-echelle-cellulaire-mitochondries-et-hypermetabolisme-sous-contrainte', blockIndex: 0 } },
  { sectionId: 'a-l-echelle-cellulaire-mitochondries-et-hypermetabolisme-sous-contrainte', blockIndex: 0, slide: 14, end: { sectionId: 'a-l-echelle-cellulaire-mitochondries-et-hypermetabolisme-sous-contrainte', blockIndex: 7 } },
  { sectionId: 'a-l-echelle-cellulaire-mitochondries-et-hypermetabolisme-sous-contrainte', blockIndex: 7, slide: 15, end: { sectionId: 'le-cheveu-comme-archive-biologique-et-la-marge-de-reversibilite', blockIndex: 0 } },
  { sectionId: 'le-cheveu-comme-archive-biologique-et-la-marge-de-reversibilite', blockIndex: 0, slide: 16, end: { sectionId: 'le-modele-du-seuil-trouble-fonctionnel-et-alteration-structurelle', blockIndex: 0 } },
  { sectionId: 'le-modele-du-seuil-trouble-fonctionnel-et-alteration-structurelle', blockIndex: 0, slide: 17, end: { sectionId: 'la-cible-autonome-la-flexibilite-non-la-domination-vagale', blockIndex: 0 } },
  { sectionId: 'la-cible-autonome-la-flexibilite-non-la-domination-vagale', blockIndex: 0, slide: 18, end: { sectionId: 'la-cible-autonome-la-flexibilite-non-la-domination-vagale', blockIndex: 1 } },
  { sectionId: 'la-cible-autonome-la-flexibilite-non-la-domination-vagale', blockIndex: 1, slide: 19, end: { sectionId: 'le-pont-avec-la-rop-agir-sur-la-reponse-non-sur-l-existence-du-stresseur', blockIndex: 0 } },
  { sectionId: 'le-pont-avec-la-rop-agir-sur-la-reponse-non-sur-l-existence-du-stresseur', blockIndex: 0, slide: 20, end: { sectionId: 'la-seance-rop-comme-perturbation-sensorielle-mesuree', blockIndex: 0 } },
  { sectionId: 'la-seance-rop-comme-perturbation-sensorielle-mesuree', blockIndex: 0, slide: 21, end: { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 0 } },
  { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 0, slide: 22, end: { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 1 } },
  { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 1, slide: 23, end: { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 4 } },
  { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 4, slide: 24, end: { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 7 } },
  { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 7, slide: 25, end: { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 10 } },
  { sectionId: 'la-sequence-clinique-rop-en-quatre-niveaux', blockIndex: 10, slide: 26, end: { sectionId: 'vers-une-recherche-sur-la-cinetique-de-recuperation', blockIndex: 0 } },
  { sectionId: 'vers-une-recherche-sur-la-cinetique-de-recuperation', blockIndex: 0, slide: 27, end: { sectionId: 'conclusion', blockIndex: 0 } },
]

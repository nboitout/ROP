// Chapter 2 — slide ↔ text synchronisation map for the combined reading
// experience (/lecture/traitement-rop).
//
// Slides are rendered from the Chapter 2 synthesis PDFs in public/chapter-2/.

export type SyncSlide = { src: string; title: string; orientation?: 'portrait' }

// blockIndex refers to the position in chapter2Fr sections[].blocks[].
// blockIndex -1 anchors a slide to the section heading itself.
export type SyncAnchor = { sectionId: string; blockIndex: number; slide: number; gapBefore?: 'half' }

export const chapter2Slides: SyncSlide[] = [
  { src: '/chapter-2/slides/slide-01.png', title: 'Traitement par la Réflexothérapie Occipito-Podale (ROP)' },
  { src: '/chapter-2/slides/slide-02.png', title: 'L’exigence du geste thérapeutique' },
  { src: '/chapter-2/slides/slide-03.png', title: 'La peau' },
  { src: '/chapter-2/slides/slide-04.png', title: 'La cible tissulaire : couche épidermo-dermique' },
  { src: '/chapter-2/slides/slide-05.png', title: 'Le vecteur neurologique' },
  { src: '/chapter-2/slides/slide-06.png', title: 'Chronologie clinique : les trois temps du massage' },
  { src: '/chapter-2/slides/slide-07.png', title: 'La fenêtre d’assimilation neuro-vasculaire' },
  { src: '/chapter-2/slides/slide-08.png', title: 'Hiérarchisation du plan de traitement' },
  { src: '/chapter-2/slides/slide-09.png', title: 'Cartographie d’intervention' },
  { src: '/chapter-2/slides/slide-10.png', title: 'Cibles anatomiques I : syndrome général d’adaptation' },
  { src: '/chapter-2/slides/slide-11.png', title: 'Cible II : syndrome locorégional' },
  { src: '/chapter-2/slides/slide-12.png', title: 'Cible III : système limbique' },
  { src: '/chapter-2/slides/slide-13.png', title: 'Application clinique : lombo-sciatalgie post-partum' },
  { src: '/chapter-2/slides/slide-15.png', title: 'Plan de traitement ROP — application au cas de Mme X' },
  { src: '/chapter-2/slides/slide-14.png', title: 'Le plan de traitement ROP ciblé pour Madame X' },
  { src: '/chapter-2/slides/slide-16.png', title: 'Indications thérapeutiques : le domaine des troubles fonctionnels' },
  { src: '/chapter-2/slides/slide-17.png', title: 'Gouvernance clinique : sécurité et limites' },
  { src: '/chapter-2/slides/slide-18.png', title: 'L’accompagnement global du patient' },
]

export const chapter2SlidesEn: SyncSlide[] = [
  { src: '/chapter-2/slides/en/slide-01.png', title: 'Occipito-Podal Reflexotherapy Treatment (ORT)' },
  { src: '/chapter-2/slides/en/slide-02.png', title: 'The precision of the therapeutic gesture' },
  { src: '/chapter-2/slides/en/slide-03.png', title: 'The skin' },
  { src: '/chapter-2/slides/en/slide-04.png', title: 'Tissue target: epidermal-dermal layer' },
  { src: '/chapter-2/slides/en/slide-05.png', title: 'The neurological vector' },
  { src: '/chapter-2/slides/en/slide-06.png', title: 'Clinical chronology: the three phases of massage' },
  { src: '/chapter-2/slides/en/slide-07.png', title: 'The neurovascular assimilation window' },
  { src: '/chapter-2/slides/en/slide-08.png', title: 'Hierarchy of the treatment plan' },
  { src: '/chapter-2/slides/en/slide-09.png', title: 'Intervention mapping' },
  { src: '/chapter-2/slides/en/slide-10.png', title: 'Anatomical targets I: general adaptation syndrome' },
  { src: '/chapter-2/slides/en/slide-11.png', title: 'Target II: locoregional syndrome' },
  { src: '/chapter-2/slides/en/slide-12.png', title: 'Target III: limbic system' },
  { src: '/chapter-2/slides/en/slide-13.png', title: 'Clinical application: postpartum lumbosciatica' },
  { src: '/chapter-2/slides/en/slide-15.png', title: 'ROP treatment plan — case application: Mrs X' },
  { src: '/chapter-2/slides/en/slide-14.png', title: 'Targeted ROP treatment plan for patient X' },
  { src: '/chapter-2/slides/en/slide-16.png', title: 'Therapeutic indications: reversible functional disorders' },
  { src: '/chapter-2/slides/en/slide-17.png', title: 'Clinical governance: safety and limits' },
  { src: '/chapter-2/slides/en/slide-18.png', title: 'Global patient support' },
]

export const chapter2SlidesDe: SyncSlide[] = [
  { src: '/chapter-2/slides/de/slide-01.png', title: 'Behandlung mit der okzipito-podalen Reflexotherapie (ROP)' },
  { src: '/chapter-2/slides/de/slide-02.png', title: 'Die Präzision der therapeutischen Geste' },
  { src: '/chapter-2/slides/de/slide-03.png', title: 'Die Haut' },
  { src: '/chapter-2/slides/de/slide-04.png', title: 'Gewebeziel: epidermal-dermale Schicht' },
  { src: '/chapter-2/slides/de/slide-05.png', title: 'Der neurologische Vektor' },
  { src: '/chapter-2/slides/de/slide-06.png', title: 'Klinische Chronologie: die drei Phasen der Massage' },
  { src: '/chapter-2/slides/de/slide-07.png', title: 'Das neurovaskuläre Assimilationsfenster' },
  { src: '/chapter-2/slides/de/slide-08.png', title: 'Hierarchie des Behandlungsplans' },
  { src: '/chapter-2/slides/de/slide-09.png', title: 'Interventionskartographie' },
  { src: '/chapter-2/slides/de/slide-10.png', title: 'Anatomische Ziele I: allgemeines Adaptationssyndrom' },
  { src: '/chapter-2/slides/de/slide-11.png', title: 'Ziel II: lokoregionales Syndrom' },
  { src: '/chapter-2/slides/de/slide-12.png', title: 'Ziel III: limbisches System' },
  { src: '/chapter-2/slides/de/slide-13.png', title: 'Klinische Anwendung: postpartale Lumbosciatalgie' },
  { src: '/chapter-2/slides/de/slide-15.png', title: 'ROP-Behandlungsplan — Anwendung auf den Fall Frau X' },
  { src: '/chapter-2/slides/de/slide-14.png', title: 'Gezielter ROP-Behandlungsplan für Patientin X' },
  { src: '/chapter-2/slides/de/slide-16.png', title: 'Therapeutische Indikationen: reversible funktionelle Störungen' },
  { src: '/chapter-2/slides/de/slide-17.png', title: 'Klinische Steuerung: Sicherheit und Grenzen' },
  { src: '/chapter-2/slides/de/slide-18.png', title: 'Ganzheitliche Begleitung des Patienten' },
]

export const chapter2SlidesEs: SyncSlide[] = [
  { src: '/chapter-2/slides/es/slide-01.png', title: 'Tratamiento por reflexoterapia occípito-podal (ROP)' },
  { src: '/chapter-2/slides/es/slide-02.png', title: 'La precisión del gesto terapéutico' },
  { src: '/chapter-2/slides/es/slide-03.png', title: 'La piel' },
  { src: '/chapter-2/slides/es/slide-04.png', title: 'Diana tisular: capa epidérmico-dérmica' },
  { src: '/chapter-2/slides/es/slide-05.png', title: 'El vector neurológico' },
  { src: '/chapter-2/slides/es/slide-06.png', title: 'Cronología clínica: las tres fases del masaje' },
  { src: '/chapter-2/slides/es/slide-07.png', title: 'La ventana de asimilación neurovascular' },
  { src: '/chapter-2/slides/es/slide-08.png', title: 'Jerarquía del plan de tratamiento' },
  { src: '/chapter-2/slides/es/slide-09.png', title: 'Cartografía de intervención' },
  { src: '/chapter-2/slides/es/slide-10.png', title: 'Dianas anatómicas I: síndrome general de adaptación' },
  { src: '/chapter-2/slides/es/slide-11.png', title: 'Diana II: síndrome locorregional' },
  { src: '/chapter-2/slides/es/slide-12.png', title: 'Diana III: sistema límbico' },
  { src: '/chapter-2/slides/es/slide-13.png', title: 'Aplicación clínica: lumbociatalgia posparto' },
  { src: '/chapter-2/slides/es/slide-15.png', title: 'Plan de tratamiento ROP — aplicación al caso de la Sra. X' },
  { src: '/chapter-2/slides/es/slide-14.png', title: 'Plan de tratamiento ROP dirigido para la paciente X' },
  { src: '/chapter-2/slides/es/slide-16.png', title: 'Indicaciones terapéuticas: trastornos funcionales reversibles' },
  { src: '/chapter-2/slides/es/slide-17.png', title: 'Gobernanza clínica: seguridad y límites' },
  { src: '/chapter-2/slides/es/slide-18.png', title: 'Acompañamiento global del paciente' },
]

export const chapter2SlidesIt: SyncSlide[] = [
  { src: '/chapter-2/slides/it/slide-01.png', title: 'Trattamento con riflessoterapia occipito-podalica (ROP)' },
  { src: '/chapter-2/slides/it/slide-02.png', title: 'La precisione del gesto terapeutico' },
  { src: '/chapter-2/slides/it/slide-03.png', title: 'La pelle' },
  { src: '/chapter-2/slides/it/slide-04.png', title: 'Bersaglio tissutale: strato epidermico-dermico' },
  { src: '/chapter-2/slides/it/slide-05.png', title: 'Il vettore neurologico' },
  { src: '/chapter-2/slides/it/slide-06.png', title: 'Cronologia clinica: le tre fasi del massaggio' },
  { src: '/chapter-2/slides/it/slide-07.png', title: 'La finestra di assimilazione neurovascolare' },
  { src: '/chapter-2/slides/it/slide-08.png', title: 'Gerarchia del piano di trattamento' },
  { src: '/chapter-2/slides/it/slide-09.png', title: 'Mappatura dell’intervento' },
  { src: '/chapter-2/slides/it/slide-10.png', title: 'Bersagli anatomici I: sindrome generale di adattamento' },
  { src: '/chapter-2/slides/it/slide-11.png', title: 'Bersaglio II: sindrome locoregionale' },
  { src: '/chapter-2/slides/it/slide-12.png', title: 'Bersaglio III: sistema limbico' },
  { src: '/chapter-2/slides/it/slide-13.png', title: 'Applicazione clinica: lombosciatalgia post-partum' },
  { src: '/chapter-2/slides/it/slide-15.png', title: 'Piano di trattamento ROP — applicazione al caso della Sig.ra X' },
  { src: '/chapter-2/slides/it/slide-14.png', title: 'Piano di trattamento ROP mirato per la paziente X' },
  { src: '/chapter-2/slides/it/slide-16.png', title: 'Indicazioni terapeutiche: disturbi funzionali reversibili' },
  { src: '/chapter-2/slides/it/slide-17.png', title: 'Governance clinica: sicurezza e limiti' },
  { src: '/chapter-2/slides/it/slide-18.png', title: 'Accompagnamento globale del paziente' },
]

export const chapter2SlideAnchorsFr: SyncAnchor[] = [
  { sectionId: 'technique', blockIndex: -1, slide: 1 },
  { sectionId: 'technique', blockIndex: 0, slide: 2 },
  { sectionId: 'technique', blockIndex: 2, slide: 3 },
  { sectionId: 'technique', blockIndex: 5, slide: 4, gapBefore: 'half' },
  { sectionId: 'technique', blockIndex: 6, slide: 5 },
  { sectionId: 'technique', blockIndex: 11, slide: 6 },
  { sectionId: 'modalites', blockIndex: 0, slide: 7 },
  { sectionId: 'hierarchisation', blockIndex: -1, slide: 8 },
  { sectionId: 'hierarchisation', blockIndex: 2, slide: 9 },
  { sectionId: 'hierarchisation', blockIndex: 3, slide: 10 },
  { sectionId: 'hierarchisation', blockIndex: 4, slide: 11 },
  { sectionId: 'hierarchisation', blockIndex: 5, slide: 12 },
  { sectionId: 'exemple-clinique', blockIndex: -1, slide: 13 },
  { sectionId: 'exemple-clinique', blockIndex: 6, slide: 14 },
  { sectionId: 'exemple-clinique', blockIndex: 10, slide: 15, gapBefore: 'half' },
  { sectionId: 'indications', blockIndex: -1, slide: 16 },
  { sectionId: 'contre-indications', blockIndex: -1, slide: 17 },
  { sectionId: 'conseils', blockIndex: -1, slide: 18 },
]

export const chapter2SlideAnchors: SyncAnchor[] = [
  { sectionId: 'technique', blockIndex: -1, slide: 1 },
  { sectionId: 'technique', blockIndex: 1, slide: 2 },
  { sectionId: 'technique', blockIndex: 5, slide: 3 },
  { sectionId: 'technique', blockIndex: 7, slide: 4, gapBefore: 'half' },
  { sectionId: 'technique', blockIndex: 8, slide: 5 },
  { sectionId: 'technique', blockIndex: 13, slide: 6 },
  { sectionId: 'modalites', blockIndex: 0, slide: 7 },
  { sectionId: 'hierarchisation', blockIndex: -1, slide: 8 },
  { sectionId: 'hierarchisation', blockIndex: 3, slide: 9 },
  { sectionId: 'hierarchisation', blockIndex: 4, slide: 10 },
  { sectionId: 'hierarchisation', blockIndex: 5, slide: 11 },
  { sectionId: 'hierarchisation', blockIndex: 6, slide: 12 },
  { sectionId: 'exemple-clinique', blockIndex: -1, slide: 13 },
  { sectionId: 'exemple-clinique', blockIndex: 6, slide: 14 },
  { sectionId: 'exemple-clinique', blockIndex: 10, slide: 15, gapBefore: 'half' },
  { sectionId: 'indications', blockIndex: -1, slide: 16 },
  { sectionId: 'contre-indications', blockIndex: -1, slide: 17 },
  { sectionId: 'conseils', blockIndex: -1, slide: 18 },
]

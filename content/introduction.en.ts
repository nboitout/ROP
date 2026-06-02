// Introduction — English
// Source: public/chapter-0/Chapter_0 Introduction_ROP_Medical_English -- ground source.docx

import type { Chapter } from './types'

export const introductionEn: Chapter = {
  slug: 'introduction',
  title: 'Introduction',
  sections: [
    {
      id: 'avant-propos',
      title: 'Foreword',
      blocks: [
        { type: 'para', text: 'This third volume on Réflexothérapie Occipito-Podale — ROP is the natural continuation of the two preceding volumes. After the osteo-musculo-articular system in Volume 1 and the neuromeningeal system in Volume 2, we now turn to the field of the abdomino-pelvic viscera, the autonomic nervous system, and the mechanisms of stress.' },
        { type: 'para', text: 'The ambition remains the same: to provide a coherent mapping, aligned with anatomy and physiology, conceived three-dimensionally, with the body represented as an infant in the fetal position within the foot, and articulated with the occipital reflex zones.' },
      ],
    },
    {
      id: 'en-bref',
      title: 'In brief: what this book offers',
      blocks: [
        { type: 'bullets', items: [
          'A clear interpretation of viscero-somatic relationships: how visceral dysfunction may affect the locomotor system, and how locomotor disorders may, in turn, influence visceral function.',
          'Clinical landmarks and a palpatory rationale for locating reflex zones, despite the limited bony landmarks available on the plantar surface.',
          'Maps adjusted according to key anatomical reference points, including the diaphragm, and interpreted in relation to the patient\'s history as well as medical and surgical reports.',
          'A global approach designed to interrupt pathological reflex loops — neurological, visceral, somatic, and emotional — stimulate the body\'s intrinsic regulatory capacities, and support vitality.',
        ]},
      ],
    },
    {
      id: 'visceral-incontournable',
      title: 'Why the visceral system is essential',
      blocks: [
        { type: 'para', text: 'The visceral system is responsible for the body\'s core logistical functions: nutrition, elimination, and internal homeostasis. In this context, many musculoskeletal pain syndromes may arise as a consequence of visceral dysfunction — and the converse is also true. Treating one system while ignoring the other often leads to incomplete results.' },
      ],
    },
    {
      id: 'parti-pris',
      title: 'Our position: anatomical rigor and clinical pragmatism',
      blocks: [
        { type: 'para', text: 'As in any manual therapeutic approach, we sometimes observe results that cannot be fully objectified. Clinical observation does not have the methodological rigor of a laboratory protocol, but it retains its value when conducted systematically. This is why this book prioritizes: (1) anatomical coherence; (2) reproducibility of landmarks; (3) correlation with clinical reality, including patient history, imaging findings, and surgical observations.' },
        { type: 'para', text: 'Two points deserve particular emphasis:' },
        { type: 'leadBullets', items: [
          { label: 'The diaphragm', text: 'the two domes are not positioned at the same height. Ignoring this asymmetry renders any mapping inaccurate, both for the diaphragm itself and for the viscera attached to it.' },
          { label: 'The peritoneum', text: 'a major interface between the viscera and the body walls, with significant reflexogenic potential, capable of transmitting tensions and dysfunctions in both directions.' },
        ]},
      ],
    },
    {
      id: 'terminologie',
      title: 'Terminology',
      blocks: [
        { type: 'para', text: 'For the sake of clarity, we will use the following terminology:' },
        { type: 'leadBullets', items: [
          { label: 'Dorsally', text: 'instead of "posteriorly".' },
          { label: 'Ventrally', text: 'instead of "anteriorly".' },
          { label: 'Laterally', text: 'instead of "externally".' },
          { label: 'Medially', text: 'instead of "internally".' },
          { label: 'Cephalically', text: 'instead of "upward".' },
          { label: 'Caudally', text: 'instead of "downward".' },
          { label: 'Frontally', text: 'instead of "transversely".' },
          { label: 'Sagittally', text: 'instead of "anteroposteriorly".' },
        ]},
      ],
    },
    {
      id: 'plan-type',
      title: 'Standard chapter structure',
      blocks: [
        { type: 'para', text: 'Each chapter devoted to a viscus follows a common structure:' },
        { type: 'bullets', items: [
          'Presentation.',
          'Location.',
          'Anatomy.',
          'Anatomical relationships.',
          'Vascularization.',
          'Innervation.',
          'Physiology.',
          'Common pathologies — diagnosis of exclusion; indications: functional disorders.',
          'Podal reflex zones — general syndrome; locoregional syndrome.',
          'Viscero-somatic relationships.',
          'Viscero-emotional relationships.',
          'Advice.',
        ]},
      ],
    },
  ],
}

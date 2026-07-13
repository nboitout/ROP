// Introduction - French
// Source: public/chapter-0/Chapter0 Introduction FR.docx

import type { Chapter } from './types'

export const introductionFr: Chapter = {
  slug: 'introduction',
  title: "Introduction",
  sections: [
    {
      id: "avant-propos",
      title: "Avant-propos",
      blocks: [
        { type: 'para', text: "Ce troisième volume de Réflexothérapie occipito-podale (ROP) prolonge naturellement les deux précédents : après le système ostéo-musculo-articulaire (tome 1) puis le système neuro-méningé (tome 2), nous entrons ici dans le champ du viscéral abdomino-pelvien, du système nerveux autonome et du mécanisme du stress." },
        { type: 'para', text: "L’ambition reste la même : une cartographie cohérente avec l’anatomie et la physiologie, pensée en 3D, sous la forme d’un bébé en position fœtale dans le pied, et articulée avec les zones réflexes occipitales. Ensemble, les zones réflexes occipitales et podales constituent les zones réflexes ROP." },
      ],
    },
    {
      id: "en-bref",
      title: "En bref : ce que ce livre vous apporte",
      blocks: [
        { type: 'bullets', items: [
          "Une lecture simple des liens viscéro-somatiques : quand un viscère perturbe le locomoteur, et quand le locomoteur perturbe le viscéral.",
          "Des repères cliniques et une logique de palpation pour localiser les zones réflexes podales de la ROP, malgré les faibles repères osseux de la face plantaire.",
          "Des cartographies ajustées sur des points anatomiques clés (dont le diaphragme) et mises en perspective avec l’anamnèse et des comptes rendus médicaux/chirurgicaux.",
          "Une approche globale : désamorcer les boucles réflexes pathologiques (neurologiques, viscérales, somatiques et émotionnelles), stimuler les capacités propres de l’organisme, et soutenir la vitalité.",
        ]},
      ],
    },
    {
      id: "visceral-incontournable",
      title: "Pourquoi le viscéral est incontournable",
      blocks: [
        { type: 'para', text: "Le système viscéral assure la logistique : nutrition, élimination, équilibre interne. Dans ce cadre, de nombreuses douleurs ostéo-musculo-articulaires peuvent être la conséquence de dysfonctions viscérales – et l’inverse est aussi vrai. Travailler l’un en ignorant l’autre conduit souvent à des résultats incomplets." },
      ],
    },
    {
      id: "parti-pris",
      title: "Notre parti-pris : rigueur anatomique, pragmatisme clinique",
      blocks: [
        { type: 'para', text: "Comme dans toute approche manuelle, nous constatons parfois des résultats sans pouvoir les objectiver pleinement. L’observation clinique n’a pas la rigueur d’un protocole de laboratoire, mais elle garde sa valeur lorsqu’elle est conduite avec méthode. C’est pourquoi ce livre privilégie : (1) la cohérence anatomique, (2) la reproductibilité des repères, (3) la confrontation au réel (anamnèse, imagerie, chirurgie)." },
        { type: 'para', text: "Deux points méritent d’être soulignés :" },
        { type: 'leadBullets', items: [
          { label: "Le diaphragme", text: "les deux coupoles ne sont pas à la même hauteur. Ignorer cette asymétrie rend toute cartographie incohérente pour le diaphragme et les viscères qui s’y attachent." },
          { label: "Le péritoine", text: "interface majeure entre viscères et parois, au fort pouvoir réflexogène, capable de relayer tensions et dysfonctions dans les deux sens." },
        ]},
      ],
    },
    {
      id: "terminologie",
      title: "Terminologie",
      blocks: [
        { type: 'para', text: "Dans un souci de clarté, nous adopterons la terminologie suivante :" },
        { type: 'leadBullets', items: [
          { label: "Dorsalement", text: "à la place de « postérieur »." },
          { label: "Ventralement", text: "à la place de « antérieur »." },
          { label: "Latéralement", text: "à la place de « externe »." },
          { label: "Médialement", text: "à la place de « interne »." },
          { label: "Céphaliquement", text: "à la place de « en haut »." },
          { label: "Caudalement", text: "à la place de « en bas »." },
          { label: "Frontalement", text: "à la place de « transversal »." },
          { label: "Sagittalement", text: "à la place de « antéro-postérieur »." },
        ]},
      ],
    },
    {
      id: "plan-type",
      title: "Plan-type des chapitres",
      blocks: [
        { type: 'para', text: "Chaque chapitre consacré à un viscère suit un plan commun :" },
        { type: 'bullets', items: [
          "Présentation.",
          "Situation.",
          "Anatomie.",
          "Rapports.",
          "Vascularisation.",
          "Innervation.",
          "Physiologie.",
          "Pathologies courantes (diagnostic d’exclusion ; indications : troubles fonctionnels).",
          "Zones réflexes podales (syndrome général ; syndrome loco-régional).",
          "Relations viscéro-somatiques.",
          "Relations viscéro-émotionnelles.",
          "Conseils.",
        ]},
      ],
    },
  ],
}

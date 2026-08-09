// Chapter 4 — private reworked edition
// Source: public/chapter-4/Chapter4_SNA_AI_Rework_v2.docx
// Reflex-zone section: shared verbatim with the published Chapter 4.

import type { Block, Chapter } from './types'
import { chapter4Fr } from './chapter4.fr'

const publishedReflexSection = chapter4Fr.sections.find((section) => section.id === 'zones-reflexes-podales')
if (!publishedReflexSection) throw new Error('Published Chapter 4 reflex-zone section is missing')

const privateReflexSection: Chapter['sections'][number] = {
  ...publishedReflexSection,
  blocks: publishedReflexSection.blocks.filter((block) => block.type !== 'figure'),
}

const privateReflexPhoto = (
  slide: string,
  caption: string,
  orientation: 'landscape' | 'portrait' = 'landscape',
): Block => ({
  type: 'figure',
  src: `/chapter-4/rework-reflex/slide-${slide}.png`,
  caption: `Photo : ${caption}`,
  alt: `Repère podal — ${caption}`,
  orientation,
})

function appendPrivatePhotos(subtitle: string, photos: Block[]) {
  const start = privateReflexSection.blocks.findIndex((block) => block.type === 'sub' && block.text === subtitle)
  if (start < 0) throw new Error(`Private Chapter 4 reflex subsection missing: ${subtitle}`)
  const next = privateReflexSection.blocks.findIndex((block, index) => index > start && block.type === 'sub')
  privateReflexSection.blocks.splice(next < 0 ? privateReflexSection.blocks.length : next, 0, ...photos)
}

appendPrivatePhotos('11.1. Parasympathique crânien — territoire céphalique', [
  privateReflexPhoto('03', 'tronc cérébral', 'portrait'),
])
appendPrivatePhotos('11.2. Nerf vague X — trajet crânien / foramen jugulaire', [
  privateReflexPhoto('05', 'nerf vague X dans la moelle allongée', 'portrait'),
  privateReflexPhoto('07', 'nerf vague X dans le foramen jugulaire', 'portrait'),
])
appendPrivatePhotos('11.3. Nerf vague X — étage cervical', [
  privateReflexPhoto('09', 'sinus carotidien'),
])
appendPrivatePhotos('11.4. Nerf vague X — étage thoracique / plexus cardiaque', [
  privateReflexPhoto('11', 'territoires cervical, thoracique et diaphragmatique gauches du nerf vague X', 'portrait'),
  privateReflexPhoto('14', 'territoires cervical et thoracique droits du nerf vague X'),
])
appendPrivatePhotos('11.5. Nerf vague X — étage diaphragmatique / hiatus œsophagien', [
  privateReflexPhoto('16', 'hiatus œsophagien et nerfs vagues droit et gauche', 'portrait'),
])
appendPrivatePhotos('11.6. Nerf vague X — étage abdominal', [
  privateReflexPhoto('18', 'territoire abdominal droit du nerf vague X'),
])
appendPrivatePhotos('11.7. Parasympathique pelvien (ou sacral)', [
  privateReflexPhoto('20', 'origine médullaire du parasympathique pelvien ou sacré'),
])
appendPrivatePhotos('11.8. Sympathique viscéro-moteur — origine médullaire', [
  privateReflexPhoto('22', 'origine médullaire du sympathique'),
])
appendPrivatePhotos('11.9. Sympathique viscéro-moteur — chaîne ganglionnaire thoracique', [
  privateReflexPhoto('24', 'chaîne ganglionnaire latéro-vertébrale thoracique'),
])
appendPrivatePhotos('11.10. Sympathique viscéro-moteur — chaîne ganglionnaire cervicale', [
  privateReflexPhoto('26', 'ganglion cervical inférieur', 'portrait'),
])
appendPrivatePhotos('11.11. Sympathique viscéro-moteur — chaîne ganglionnaire lombale', [
  privateReflexPhoto('28', 'chaîne ganglionnaire lombaire et piliers du diaphragme'),
])
appendPrivatePhotos('11.12. Sympathique viscéro-moteur — chaîne ganglionnaire sacrale et coccygienne', [
  privateReflexPhoto('30', 'chaîne ganglionnaire latéro-vertébrale sacro-coccygienne'),
])
appendPrivatePhotos('11.15. Plexus préviscéral pelvien', [
  privateReflexPhoto('32', 'plexus hypogastrique inférieur, fibres antérieures', 'portrait'),
  privateReflexPhoto('34', 'plexus hypogastrique inférieur, fibres moyennes et postérieures'),
])

export const chapter4ReworkFr: Chapter = { slug: 'chapter-4-rework', number: '4', title: 'Système nerveux autonome', sections: [
  {
    "id": "presentation",
    "title": "1. Présentation",
    "blocks": [
      {
        "type": "note",
        "label": "INTRODUCTION",
        "body": [
          "Le système nerveux autonome (SNA) participe à l’ajustement permanent du fonctionnement des viscères, des glandes, des vaisseaux et de nombreuses fonctions internes. Dans la séquence clinique ROP, il correspond au Niveau 2 — Régulation neuro-végétative et adaptation."
        ]
      },
      {
        "type": "sub",
        "text": "1.1. Deux systèmes : Parasympathique et Sympathique"
      },
      {
        "type": "para",
        "text": "Le parasympathique et le sympathique constituent les deux grandes composantes efférentes du SNA. Ils ne fonctionnent pas comme deux systèmes systématiquement opposés : leurs actions sont complémentaires, coordonnées et variables selon l’organe et le contexte."
      },
      {
        "type": "sub",
        "text": "1.2. Physiologie générale du SNA"
      },
      {
        "type": "para",
        "text": "Le SNA régule notamment les fonctions digestives, cardio-vasculaires, respiratoires, urinaires, génitales, glandulaires et vasculaires. Son rôle général est de permettre l’adaptation de l’organisme tout en contribuant au maintien de l’homéostasie."
      },
      {
        "type": "para",
        "text": "Cette adaptation est particulièrement sollicitée lors de l’effort, de la douleur, du stress, des émotions, des variations de température, de l’alimentation et du sommeil."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Mécanisme de stress",
        "href": "/lecture/chapitre-5?lang=fr"
      },
      {
        "type": "sub",
        "text": "1.3. Différences fonctionnelles"
      },
      {
        "type": "bullets",
        "items": [
          "Parasympathique : participe notamment à la digestion, aux sécrétions, au ralentissement cardiaque, à la récupération et à plusieurs fonctions pelviennes.",
          "Sympathique : participe notamment à l’adaptation cardio-vasculaire, à la vasomotricité, à la thermorégulation, à la mobilisation énergétique et aux réponses à l’effort ou à la contrainte.",
          "Viscères : la plupart reçoivent une double modulation autonome, organisée selon la fonction et le contexte.",
          "Paroi corporelle, membres et téguments : la vasomotricité, la sudation et la piloérection relèvent principalement du sympathique.",
          "Corps érectiles : la vasodilatation participant à l’érection dépend largement des voies parasympathiques pelviennes."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 21",
        "text": "Système érectile masculin et féminin",
        "href": "/lecture/chapitre-21?lang=fr"
      },
      {
        "type": "sub",
        "text": "1.4. Relation Parasympathique–Sympathique"
      },
      {
        "type": "para",
        "text": "Les deux systèmes sont étroitement associés dans les plexus et les réseaux viscéraux. Il est donc souvent artificiel de rechercher une domination absolue de l’un sur l’autre. La régulation fonctionnelle dépend surtout de leur capacité à s’ajuster et à se coordonner."
      },
      {
        "type": "rop",
        "body": [
          "Le SNA est une des clés de l’approche ROP. Fidèle au principe « priorité au nerf », le Niveau 2 cherche à prendre en compte les voies autonomes avant ou en complément du travail loco-régional sur le viscère. Les symptômes ne sont toutefois pas interprétés comme la conséquence automatique d’un « déséquilibre sympathique/parasympathique »."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Mécanisme de stress",
        "href": "/lecture/chapitre-5?lang=fr"
      },
      {
        "type": "sub",
        "text": "1.5. Relation SNA–système hormonal"
      },
      {
        "type": "para",
        "text": "Le SNA est étroitement connecté au système endocrinien par l’intermédiaire de l’hypothalamus et de l’hypophyse. Les réponses nerveuses autonomes et les réponses hormonales participent ensemble à l’adaptation."
      },
      {
        "type": "para",
        "text": "Sur le plan des neurotransmetteurs, l’acétylcholine est utilisée par les neurones préganglionnaires sympathiques et parasympathiques ainsi que par les neurones postganglionnaires parasympathiques. La noradrénaline est le médiateur postganglionnaire principal du sympathique, avec plusieurs exceptions fonctionnelles."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 3",
        "text": "Système nerveux central",
        "href": "/lecture/chapitre-3?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Mécanisme de stress",
        "href": "/lecture/chapitre-5?lang=fr"
      },
      {
        "type": "sub",
        "text": "1.6. Relation SNA–système nerveux somatique (SNS)"
      },
      {
        "type": "para",
        "text": "Les systèmes autonome et somatique sont anatomiquement distincts mais fonctionnellement étroitement associés. Les nerfs spinaux transportent notamment des fibres sympathiques destinées à la peau, aux vaisseaux et aux glandes sudoripares. Dans le pelvis, les fonctions autonomes et somatiques doivent être coordonnées, par exemple entre voies pelviennes et nerf pudendal."
      },
      {
        "type": "para",
        "text": "Cette proximité ne signifie pas qu’un nerf somatique devienne une voie autonome : elle traduit l’intégration de plusieurs systèmes dans un même territoire fonctionnel."
      },
      {
        "type": "para",
        "text": "Cf. Réflexothérapie occipito-podale et système neuro-méningé — nerfs spinaux et crâniens"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 17",
        "text": "Cavité pelvienne",
        "href": "/lecture/chapitre-17?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 18",
        "text": "Vessie",
        "href": "/lecture/chapitre-18?lang=fr"
      },
      {
        "type": "sub",
        "text": "1.7. Relation entre le SNA et le sommeil"
      },
      {
        "type": "para",
        "text": "Les ruminations, les préoccupations et les stress de différentes natures peuvent perturber le sommeil, en réduire la durée et surtout en altérer la qualité."
      },
      {
        "type": "para",
        "text": "Un sommeil régulier et suffisant participe au bon fonctionnement neuroendocrinien et à la régulation du système nerveux autonome. La privation de sommeil peut modifier la variabilité de la fréquence cardiaque et favoriser une augmentation relative de l’activité sympathique avec une moindre modulation vagale. À long terme, un sommeil insuffisant est associé à un risque accru de troubles cardiométaboliques et de troubles de l’humeur."
      },
      {
        "type": "para",
        "text": "Les cellules gliales participent elles aussi aux adaptations liées au cycle veille-sommeil. Chez la souris, des travaux expérimentaux ont montré qu’une privation aiguë ou chronique de sommeil augmente l’activité phagocytaire des astrocytes sur certains composants présynaptiques et s’accompagne d’une activation microgliale. Ces résultats ne permettent pas d’affirmer que les astrocytes éliminent les synapses de façon généralisée chez l’être humain."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 3",
        "text": "Système nerveux central",
        "href": "/lecture/chapitre-3?lang=fr"
      },
      {
        "type": "rop",
        "body": [
          "L’équilibre autonome ne peut être apprécié indépendamment du sommeil. Une récupération nocturne insuffisante peut entretenir fatigue, hypervigilance et difficulté d’adaptation ; elle doit donc être recherchée dans l’anamnèse et intégrée à la réévaluation du Niveau 2."
        ]
      }
    ]
  },
  {
    "id": "organisation-du-sna",
    "title": "2. Organisation du SNA",
    "blocks": [
      {
        "type": "para",
        "text": "Le SNA comporte des voies efférentes et des voies afférentes. Cette circulation bidirectionnelle est essentielle à sa compréhension : le système nerveux commande les viscères, mais il reçoit aussi en permanence des informations sur leur état."
      },
      {
        "type": "sub",
        "text": "2.1. Viscéro-motricité"
      },
      {
        "type": "para",
        "text": "Les voies sympathiques et parasympathiques modulent les muscles lisses, le muscle cardiaque, les glandes et les sphincters internes. La plupart des voies autonomes efférentes comportent un neurone préganglionnaire puis un neurone postganglionnaire."
      },
      {
        "type": "sub",
        "text": "2.2. Viscéro-sensitivité"
      },
      {
        "type": "para",
        "text": "Les viscères possèdent des mécanorécepteurs, chémorécepteurs et nocicepteurs. Les afférences viscérales peuvent emprunter le nerf vague ou des voies spinales accompagnant les nerfs splanchniques et pelviens."
      },
      {
        "type": "para",
        "text": "Une fibre sensitive qui chemine avec une voie sympathique ou parasympathique reste une afférence viscérale ; elle ne doit pas être confondue avec une commande autonome efférente."
      },
      {
        "type": "sub",
        "text": "2.3. Système nerveux entérique (SNE)"
      },
      {
        "type": "para",
        "text": "Le tube digestif possède un réseau intrinsèque très développé, le système nerveux entérique. Il peut organiser localement une grande partie de la motricité et des sécrétions digestives tout en restant modulé par les voies parasympathiques et sympathiques."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 14",
        "text": "Intestin grêle, section Système nerveux entérique",
        "href": "/lecture/chapitre-14?lang=fr"
      }
    ]
  },
  {
    "id": "parasympathique-viscero-moteur",
    "title": "3. Parasympathique viscéro-moteur",
    "blocks": [
      {
        "type": "para",
        "text": "Le parasympathique possède des origines crâniennes et sacrées. Il participe notamment aux sécrétions, à la motricité digestive, au ralentissement cardiaque et aux fonctions pelviennes."
      },
      {
        "type": "sub",
        "text": "3.1. Parasympathique crânien — territoire céphalique"
      },
      {
        "type": "para",
        "text": "Les fibres parasympathiques destinées à la tête empruntent principalement les nerfs crâniens III, VII et IX. Elles font relais dans des ganglions périphériques avant de rejoindre leurs organes cibles."
      },
      {
        "type": "bullets",
        "items": [
          "Nerf oculomoteur III → ganglion ciliaire → myosis et accommodation.",
          "Nerf facial VII → ganglions ptérygopalatin et submandibulaire → sécrétions lacrymales, nasales et salivaires.",
          "Nerf glossopharyngien IX → ganglion otique → sécrétion parotidienne."
        ]
      },
      {
        "type": "para",
        "text": "Se reporter aussi à Réflexothérapie occipito-podale et système neuro-méningé, chapitre 8 — Nerfs crâniens et ganglions."
      },
      {
        "type": "rop",
        "body": [
          "Dans la cartographie ROP, ces voies sont abordées par les repères de la base du crâne et des ganglions parasympathiques céphaliques."
        ]
      },
      {
        "type": "sub",
        "text": "3.2. Nerf vague X — territoire cervico-thoraco-abdominal"
      },
      {
        "type": "para",
        "text": "Le nerf vague constitue la grande voie parasympathique des organes cervicaux, thoraciques et d’une large partie de l’abdomen. Ses neurones efférents prennent notamment origine dans le noyau dorsal du vague et le noyau ambigu, situés dans la moelle allongée."
      },
      {
        "type": "para",
        "text": "Il quitte le crâne par le foramen jugulaire, descend dans le cou, traverse le thorax au contact des organes médiastinaux puis accompagne l’œsophage à travers le diaphragme avant de se distribuer aux territoires abdominaux."
      },
      {
        "type": "rop",
        "body": [
          "Le vague est une cible importante du Niveau 2 en raison de son rôle de modulation cardio-respiratoire et digestive, mais aussi de sa forte composante afférente."
        ]
      },
      {
        "type": "sub",
        "text": "3.2.1. Trajet crânien : foramen jugulaire"
      },
      {
        "type": "para",
        "text": "Le vague quitte le crâne par le foramen jugulaire avec les nerfs glossopharyngien IX et accessoire XI. Les corps cellulaires de nombreuses afférences viscérales se trouvent dans son ganglion inférieur."
      },
      {
        "type": "para",
        "text": "Cf. Réflexothérapie occipito-podale et système neuro-méningé — base du crâne et foramen jugulaire."
      },
      {
        "type": "sub",
        "text": "3.2.2. Étage cervical"
      },
      {
        "type": "para",
        "text": "Dans le cou, le vague descend dans la gaine carotidienne. Il donne notamment le nerf laryngé supérieur et participe aux réseaux pharyngés et laryngés."
      },
      {
        "type": "para",
        "text": "Le sinus carotidien contient des barorécepteurs dont les afférences empruntent principalement le nerf glossopharyngien IX ; le vague participe notamment aux afférences provenant de l’arc aortique."
      },
      {
        "type": "rop",
        "body": [
          "Le sinus carotidien et le glomus carotidien sont des repères physiologiques importants. Tout malaise, syncope, douleur thoracique ou dyspnée impose d’interrompre le geste et d’orienter vers une évaluation médicale."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 6",
        "text": "Théorie polyvagale, section Malaise vagal",
        "href": "/lecture/chapitre-6?lang=fr"
      },
      {
        "type": "sub",
        "text": "3.2.3. Étage thoracique"
      },
      {
        "type": "para",
        "text": "Dans le thorax, les nerfs vagues participent aux plexus cardiaques, broncho-pulmonaires et œsophagiens. Le vague contribue au ralentissement de la fréquence cardiaque, à la modulation de la conduction atrioventriculaire, à la bronchoconstriction et aux sécrétions bronchiques, ainsi qu’à la motricité œsophagienne."
      },
      {
        "type": "para",
        "text": "Le nerf laryngé récurrent droit contourne l’artère subclavière droite ; le gauche contourne la crosse aortique."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 6",
        "text": "Théorie polyvagale, pour la variabilité de la fréquence cardiaque et les modèles vagaux",
        "href": "/lecture/chapitre-6?lang=fr"
      },
      {
        "type": "rop",
        "body": [
          "Les plexus cardiaque, broncho-pulmonaire et œsophagien constituent des carrefours où se rencontrent fibres vagales, sympathiques et afférentes. En ROP, ils sont envisagés comme des interfaces régionales plutôt que comme des cibles isolées."
        ]
      },
      {
        "type": "sub",
        "text": "3.2.4. Étage diaphragmatique"
      },
      {
        "type": "para",
        "text": "Les deux troncs vagaux accompagnent l’œsophage à travers le hiatus œsophagien. Le vague antérieur dérive principalement du vague gauche et le vague postérieur principalement du vague droit."
      },
      {
        "type": "para",
        "text": "Le diaphragme n’appartient pas au SNA, mais il constitue une interface fonctionnelle du Niveau 2 par ses relations avec la respiration, les pressions thoraco-abdominales et les structures qui le traversent."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 8",
        "text": "Diaphragme",
        "href": "/lecture/chapitre-8?lang=fr"
      },
      {
        "type": "sub",
        "text": "3.2.5. Étage abdominal"
      },
      {
        "type": "para",
        "text": "Dans l’abdomen, les branches vagales rejoignent les plexus péri-artériels et prévertébraux et modulent notamment l’estomac, le duodénum, l’intestin grêle et le côlon proximal."
      },
      {
        "type": "para",
        "text": "La transition vers le territoire parasympathique pelvien se situe classiquement vers le côlon transverse distal et la région de l’angle colique gauche, avec une variabilité anatomique."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 15",
        "text": "Côlon, zone de Cannon–Böhm",
        "href": "/lecture/chapitre-15?lang=fr"
      },
      {
        "type": "rop",
        "body": [
          "Dans le Niveau 2 digestif, le vague est intégré avec les plexus prévertébraux et le SNE. L’objectif clinique est de soutenir une coordination fonctionnelle plutôt que d’opposer systématiquement vague et sympathique."
        ]
      },
      {
        "type": "sub",
        "text": "3.3. Parasympathique pelvien (ou sacral)"
      },
      {
        "type": "para",
        "text": "Les nerfs splanchniques pelviens prennent origine principalement dans les segments sacrés S2 à S4. Ils rejoignent le plexus hypogastrique inférieur et participent à la régulation de la vessie, du rectum, du côlon distal et des organes génitaux."
      },
      {
        "type": "bullets",
        "items": [
          "Miction : participation à la contraction du détrusor et à la diminution coordonnée des résistances urétrales.",
          "Défécation : participation à la motricité rectale et au relâchement du sphincter anal interne.",
          "Fonctions sexuelles : participation aux réponses vasculaires et réflexes pelviennes."
        ]
      },
      {
        "type": "para",
        "text": "Le parasympathique pelvien doit être distingué du nerf pudendal, voie somatique également issue de S2-S4 et impliquée dans les sphincters externes et le périnée."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 17",
        "text": "Cavité pelvienne",
        "href": "/lecture/chapitre-17?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 18",
        "text": "Vessie",
        "href": "/lecture/chapitre-18?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 21",
        "text": "Système érectile masculin et féminin",
        "href": "/lecture/chapitre-21?lang=fr"
      },
      {
        "type": "rop",
        "body": [
          "Le chevauchement segmentaire S2-S4 entre voies autonomes pelviennes et voies somatiques constitue un territoire particulièrement intéressant pour l’étude des convergences régionales en ROP."
        ]
      }
    ]
  },
  {
    "id": "nerf-vague-viscero-sensitif",
    "title": "4. Nerf vague viscéro-sensitif",
    "blocks": [
      {
        "type": "para",
        "text": "Le nerf vague est majoritairement afférent : une grande partie de ses fibres transmet des informations des viscères vers le tronc cérébral. Cette fonction sensitive est essentielle au dialogue permanent entre organes et centres supérieurs."
      },
      {
        "type": "sub",
        "text": "4.1. Intéroception"
      },
      {
        "type": "para",
        "text": "Les corps cellulaires de nombreuses afférences vagales se situent dans le ganglion inférieur du vague. Leurs prolongements centraux gagnent principalement le noyau du tractus solitaire (NTS), puis des réseaux du tronc cérébral, de l’hypothalamus et des régions corticales impliquées dans l’interoception."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 3",
        "text": "Système nerveux central, tronc cérébral et NTS",
        "href": "/lecture/chapitre-3?lang=fr"
      },
      {
        "type": "sub",
        "text": "4.2. Fonctions"
      },
      {
        "type": "bullets",
        "items": [
          "Réflexes cardiovasculaires et respiratoires.",
          "Régulation digestive et signaux de satiété.",
          "Toux, déglutition, nausée et vomissement selon les territoires stimulés.",
          "Participation au dialogue cerveau–intestin et aux boucles neuro-immunes."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 14",
        "text": "Intestin grêle, axe cerveau–intestin et interface SNA–SNE",
        "href": "/lecture/chapitre-14?lang=fr"
      },
      {
        "type": "rop",
        "body": [
          "Dans le Niveau 2, le vague est abordé comme une grande voie de communication bidirectionnelle. Les données de neuromodulation permettent d’identifier des circuits plausibles."
        ]
      }
    ]
  },
  {
    "id": "sympathique-viscero-moteur",
    "title": "5. Sympathique viscéro-moteur",
    "blocks": [
      {
        "type": "para",
        "text": "Les neurones sympathiques préganglionnaires sont principalement situés dans la colonne intermédio-latérale de la moelle entre T1 et L2. Leurs axones quittent la moelle par les racines ventrales, rejoignent les nerfs spinaux puis la chaîne sympathique par les rameaux communicants blancs."
      },
      {
        "type": "para",
        "text": "À partir de la chaîne paravertébrale, les fibres peuvent faire relais au même niveau, monter ou descendre avant de faire relais, ou traverser la chaîne pour former des nerfs splanchniques destinés aux plexus prévertébraux."
      },
      {
        "type": "sub",
        "text": "5.1. Organisation métamérique"
      },
      {
        "type": "para",
        "text": "L’origine thoraco-lombaire du sympathique explique l’existence de territoires fonctionnels segmentaires. Les niveaux exacts varient selon les organes et les individus et doivent être utilisés comme repères anatomiques, non comme correspondances absolues."
      },
      {
        "type": "sub",
        "text": "5.2. Chaîne ganglionnaire thoracique"
      },
      {
        "type": "para",
        "text": "La chaîne sympathique thoracique longe les articulations costo-vertébrales. Les rameaux communicants blancs apportent les fibres préganglionnaires depuis les nerfs spinaux ; les rameaux communicants gris redistribuent des fibres postganglionnaires aux nerfs spinaux."
      },
      {
        "type": "para",
        "text": "Les fibres destinées aux viscères abdominaux peuvent traverser les ganglions thoraciques sans synapse et former les nerfs splanchniques."
      },
      {
        "type": "sub",
        "text": "5.2.1. Rameaux méningés récurrents"
      },
      {
        "type": "para",
        "text": "Les rameaux méningés récurrents retournent vers le canal vertébral et participent à l’innervation des méninges spinales, des disques et de plusieurs structures vertébrales."
      },
      {
        "type": "rop",
        "body": [
          "La proximité entre nerfs spinaux, structures costo-vertébrales, rameaux méningés et chaîne sympathique constitue un carrefour régional intéressant."
        ]
      },
      {
        "type": "para",
        "text": "Cf. Réflexothérapie occipito-podale et système neuro-méningé — méninges spinales et nerfs spinaux."
      },
      {
        "type": "sub",
        "text": "5.3. Chaîne ganglionnaire cervicale"
      },
      {
        "type": "para",
        "text": "La chaîne cervicale comprend classiquement un ganglion cervical supérieur, un ganglion moyen inconstant et un ganglion cervical inférieur souvent associé au premier ganglion thoracique pour former le ganglion stellaire."
      },
      {
        "type": "sub",
        "text": "5.3.1. Ganglion cervical inférieur ou stellaire"
      },
      {
        "type": "para",
        "text": "Le ganglion stellaire constitue un carrefour cervico-thoracique en relation avec le membre supérieur, les voies cardiaques et plusieurs plexus péri-artériels."
      },
      {
        "type": "rop",
        "body": [
          "Dans la lecture ROP, cette région est importante par ses connexions anatomiques, mais les vertiges, acouphènes, douleurs du membre supérieur ou capsulites ne doivent pas être attribués automatiquement au ganglion stellaire."
        ]
      },
      {
        "type": "sub",
        "text": "5.3.2. Ganglion cervical moyen"
      },
      {
        "type": "para",
        "text": "Le ganglion cervical moyen est inconstant et peut fusionner avec les ganglions voisins. Il participe notamment à des rameaux thyroïdiens et cardiaques."
      },
      {
        "type": "sub",
        "text": "5.3.3. Ganglion cervical supérieur"
      },
      {
        "type": "para",
        "text": "Le ganglion cervical supérieur distribue des fibres sympathiques vers la tête et le cou, notamment par les plexus péri-carotidiens, et donne aussi des rameaux pharyngés, laryngés et cardiaques."
      },
      {
        "type": "rop",
        "body": [
          "Le ganglion cervical supérieur représente un autre carrefour crânio-cervical. En ROP, il peut être intégré à la lecture régionale sans attribuer à une structure unique des symptômes complexes d’origine cervicale, vasculaire, vestibulaire ou neurologique."
        ]
      },
      {
        "type": "para",
        "text": "Cf. Réflexothérapie occipito-podale et système neuro-méningé — charnière crânio-cervicale et nerfs crâniens."
      },
      {
        "type": "sub",
        "text": "5.4. Chaîne ganglionnaire lombale"
      },
      {
        "type": "para",
        "text": "La chaîne sympathique lombale se poursuit sur la face antéro-latérale des corps vertébraux, à proximité du psoas et des piliers du diaphragme, et participe aux voies autonomes abdomino-pelviennes."
      },
      {
        "type": "rop",
        "body": [
          "Les rapports entre chaîne lombale, psoas et diaphragme justifient une lecture loco-régionale. Une tension du psoas ou du diaphragme ne doit toutefois pas être considérée comme la cause automatique d’une dysfonction des ganglions sympathiques ou d’un viscère."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 8",
        "text": "Diaphragme",
        "href": "/lecture/chapitre-8?lang=fr"
      },
      {
        "type": "sub",
        "text": "5.5. Chaîne ganglionnaire sacrale et coccygienne"
      },
      {
        "type": "para",
        "text": "La chaîne sympathique se poursuit sur la face antérieure du sacrum et se termine caudalement au niveau du ganglion impair. Elle contribue aux voies autonomes destinées aux territoires pelviens."
      },
      {
        "type": "rop",
        "body": [
          "Les traumatismes du sacrum ou du coccyx peuvent coexister avec des douleurs et des dysfonctions pelviennes. En ROP, ces rapports sont explorés comme éléments régionaux, sans présumer d’une répercussion automatique sur l’ensemble de la chaîne sympathique ou la dure-mère."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 17",
        "text": "Cavité pelvienne",
        "href": "/lecture/chapitre-17?lang=fr"
      },
      {
        "type": "sub",
        "text": "5.6. Nerfs splanchniques"
      },
      {
        "type": "para",
        "text": "Les nerfs splanchniques thoraciques et lombaires transportent principalement des fibres sympathiques préganglionnaires vers les plexus prévertébraux. Ils peuvent également accompagner des afférences viscérales qui remontent vers les ganglions spinaux et la moelle."
      },
      {
        "type": "para",
        "text": "On distingue classiquement les grands, petits et moindres splanchniques thoraciques puis les splanchniques lombaires ; leurs distributions se chevauchent et présentent une variabilité anatomique."
      }
    ]
  },
  {
    "id": "sympathique-somato-viscero-sensitif",
    "title": "6. Sympathique somato-viscéro-sensitif",
    "blocks": [
      {
        "type": "para",
        "text": "Les fibres sensitives viscérales cheminent avec les voies sympathiques avant de rejoindre leurs corps cellulaires dans les ganglions spinaux."
      },
      {
        "type": "sub",
        "text": "6.1. Nociception et afférences viscérales"
      },
      {
        "type": "para",
        "text": "Les afférences viscérales spinales renseignent notamment sur la distension, l’ischémie, l’inflammation et la douleur. Elles rejoignent la moelle par les racines dorsales."
      },
      {
        "type": "sub",
        "text": "6.2. Convergence somato-viscérale"
      },
      {
        "type": "para",
        "text": "Dans la corne dorsale, certains neurones reçoivent à la fois des informations viscérales et somatiques. Cette convergence contribue aux douleurs projetées et à certaines réponses réflexes musculaires ou cutanées."
      },
      {
        "type": "rop",
        "body": [
          "Les relations médullaires entre afférences viscérales et somatiques fournissent un cadre neuro-anatomique aux douleurs projetées et aux relations viscéro-somatiques. Les correspondances cliniques restent variables et ne constituent pas un diagnostic spécifique."
        ]
      },
      {
        "type": "para",
        "text": "Cf. les sections Relations viscéro-somatiques des chapitres d’organes"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 0",
        "text": "Fondements neuro-anatomiques de la ROP",
        "href": "/lecture/fondements-neuro-anatomiques?lang=fr"
      }
    ]
  },
  {
    "id": "chaine-plexique-prevertebrale-ou-pre-aortique",
    "title": "7. Chaîne plexique prévertébrale (ou pré-aortique)",
    "blocks": [
      {
        "type": "para",
        "text": "Les plexus prévertébraux sont situés autour des grands axes artériels de l’abdomen. Ils réunissent des fibres sympathiques, parasympathiques et afférentes viscérales avant leur distribution aux organes."
      },
      {
        "type": "sub",
        "text": "7.1. Principaux plexus"
      },
      {
        "type": "bullets",
        "items": [
          "Plexus cœliaque : territoires abdominaux supérieurs, notamment estomac, foie, pancréas, rate et duodénum.",
          "Plexus mésentérique supérieur : intestin grêle et côlon proximal.",
          "Plexus aortorénal : rein, surrénale et voies gonadiques associées.",
          "Plexus mésentérique inférieur : côlon distal.",
          "Plexus hypogastrique supérieur : transition vers les réseaux autonomes pelviens."
        ]
      },
      {
        "type": "sub",
        "text": "7.2. Fonction"
      },
      {
        "type": "para",
        "text": "Ces plexus constituent des carrefours de distribution. Les voies vagales et sympathiques s’y mêlent aux afférences viscérales selon les territoires."
      },
      {
        "type": "rop",
        "body": [
          "Dans le modèle ROP, les zones réflexes des plexus prévertébraux sont utilisées comme repères de régulation régionale neuro-végétative. Leur stimulation ne doit pas être présentée comme une activation directe et sélective du plexus anatomique correspondant."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 9",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-9?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 10",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-10?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 11",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-11?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 12",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-12?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 13",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-13?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 14",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-14?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 15",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-15?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 16",
        "text": "pour les plexus propres aux différents territoires digestifs et rénaux",
        "href": "/lecture/chapitre-16?lang=fr"
      }
    ]
  },
  {
    "id": "plexus-previsceral-pelvien",
    "title": "8. Plexus préviscéral pelvien",
    "blocks": [
      {
        "type": "sub",
        "text": "8.1. Plexus hypogastrique inférieur"
      },
      {
        "type": "para",
        "text": "Le plexus hypogastrique inférieur est un réseau pair situé sur les parois latérales du pelvis. Il reçoit des fibres sympathiques descendant notamment par les nerfs hypogastriques et des fibres parasympathiques issues des nerfs splanchniques pelviens S2-S4."
      },
      {
        "type": "sub",
        "text": "8.2. Fonction"
      },
      {
        "type": "para",
        "text": "Ses branches se distribuent à la vessie, au rectum, aux organes génitaux internes et aux tissus érectiles. La fonction pelvienne dépend d’une coordination entre voies autonomes et voies somatiques, notamment pudendales."
      },
      {
        "type": "rop",
        "body": [
          "Le plexus hypogastrique inférieur constitue l’un des meilleurs exemples de carrefour autonome régional du Niveau 2. Il permet de comprendre pourquoi les fonctions pelviennes ne dépendent jamais d’une voie unique."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 17",
        "text": "Cavité pelvienne",
        "href": "/lecture/chapitre-17?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 18",
        "text": "Vessie",
        "href": "/lecture/chapitre-18?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 19",
        "text": "Utérus",
        "href": "/lecture/chapitre-19?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 20",
        "text": "Organes génitaux masculins",
        "href": "/lecture/chapitre-20?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 21",
        "text": "Système érectile masculin et féminin",
        "href": "/lecture/chapitre-21?lang=fr"
      }
    ]
  },
  {
    "id": "systeme-nerveux-intrinseque-ou-enterique-sne",
    "title": "9. Système nerveux intrinsèque ou entérique (SNE)",
    "blocks": [
      {
        "type": "para",
        "text": "Le système nerveux entérique est situé dans la paroi du tube digestif. Il possède ses propres neurones sensoriels, interneurones et motoneurones et peut organiser localement de nombreux réflexes digestifs."
      },
      {
        "type": "sub",
        "text": "9.1. Plexus entériques"
      },
      {
        "type": "bullets",
        "items": [
          "Plexus myentérique d’Auerbach : entre les couches musculaires ; rôle majeur dans la motricité.",
          "Plexus sous-muqueux de Meissner : dans la sous-muqueuse ; rôle dans les sécrétions, les échanges locaux et la régulation de la muqueuse."
        ]
      },
      {
        "type": "para",
        "text": "Les cellules interstitielles de Cajal ne sont pas des neurones ; elles participent à la génération et à la coordination des ondes lentes électriques."
      },
      {
        "type": "sub",
        "text": "9.2. Interface SNA–SNE"
      },
      {
        "type": "para",
        "text": "Le SNE peut fonctionner avec une importante autonomie locale, mais il reste modulé par les voies parasympathiques et sympathiques et participe au dialogue cerveau–intestin."
      },
      {
        "type": "rop",
        "body": [
          "Dans le Niveau 2 digestif, le SNE est considéré comme l’interface intrinsèque du viscère avec laquelle les voies autonomes extrinsèques interagissent. Les zones réflexes restent celles du territoire digestif concerné."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 14",
        "text": "Intestin grêle, système nerveux entérique et axe cerveau–intestin",
        "href": "/lecture/chapitre-14?lang=fr"
      }
    ]
  },
  {
    "id": "glandes-surrenales",
    "title": "10. Glandes surrénales",
    "blocks": [
      {
        "type": "para",
        "text": "Les glandes surrénales illustrent la continuité entre système nerveux autonome et régulation hormonale."
      },
      {
        "type": "sub",
        "text": "10.1. Médullosurrénale"
      },
      {
        "type": "para",
        "text": "La médullosurrénale reçoit directement des fibres sympathiques préganglionnaires. Les cellules chromaffines libèrent principalement adrénaline et noradrénaline dans la circulation, participant à la réponse sympatho-adrénale aiguë."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Mécanisme de stress",
        "href": "/lecture/chapitre-5?lang=fr"
      },
      {
        "type": "sub",
        "text": "10.2. Corticosurrénale"
      },
      {
        "type": "para",
        "text": "La corticosurrénale produit notamment cortisol, aldostérone et androgènes surrénaliens. Le cortisol dépend de l’axe hypothalamo-hypophyso-surrénalien ; l’aldostérone est régulée surtout par le système rénine-angiotensine et la kaliémie."
      },
      {
        "type": "rop",
        "body": [
          "Dans le Niveau 2, les surrénales sont considérées comme une interface neuroendocrine de l’adaptation. Leur cartographie ROP ne doit pas être assimilée à une stimulation directe de la sécrétion hormonale."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 16",
        "text": "Reins et surrénales",
        "href": "/lecture/chapitre-16?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Mécanisme de stress",
        "href": "/lecture/chapitre-5?lang=fr"
      }
    ]
  },
  {
    "id": "a-retenir",
    "title": "À retenir",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "Le chapitre 4 conserve l’architecture de la version originale tout en étant recentré sur le Niveau 2 : régulation neuro-végétative et adaptation.",
          "Les références entre chapitres sont conservées afin de maintenir la continuité de lecture du livre.",
          "Les encadrés « Intérêt en ROP » sont maintenus aux endroits où l’anatomie ou la physiologie est mise en relation avec la pratique clinique.",
          "Le SNA fonctionne dans les deux sens : commandes efférentes vers les viscères et informations afférentes vers les centres.",
          "Le parasympathique pelvien S2-S4 est distinct du nerf pudendal somatique S2-S4.",
          "Les zones réflexes ROP restent des repères cliniques et non une anatomie directe du système autonome sur le pied."
        ]
      }
    ]
  },
  {
    "id": "bibliographie-selective",
    "title": "Bibliographie sélective",
    "blocks": [
      {
        "type": "para",
        "text": "1. Standring S, ed. Gray’s Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. Elsevier; 2020."
      },
      {
        "type": "para",
        "text": "2. Jänig W. Neurobiology of visceral afferent neurons: neuroanatomy, functions, organ regulations and sensations. Biol Psychol. 1996;42(1-2):29-51."
      },
      {
        "type": "para",
        "text": "3. Sato A, Sato Y, Schmidt RF. The impact of somatosensory input on autonomic functions. Rev Physiol Biochem Pharmacol. 1997;130:1-328."
      },
      {
        "type": "para",
        "text": "4. Fowler CJ, Griffiths D, de Groat WC. The neural control of micturition. Nat Rev Neurosci. 2008;9(6):453-466."
      },
      {
        "type": "para",
        "text": "5. de Groat WC, Vizzard MA, Araki I, Roppolo JR. Spinal interneurons and preganglionic neurons in sacral autonomic reflex pathways. Prog Brain Res. 1996;107:97-111."
      },
      {
        "type": "para",
        "text": "6. Brierley SM, Hibberd TJ, Spencer NJ. Spinal afferent innervation of the colon and rectum. Front Cell Neurosci. 2018;12:467."
      },
      {
        "type": "para",
        "text": "7. Spencer NJ, Hu H. Enteric nervous system: sensory transduction, neural circuits and gastrointestinal motility. Nat Rev Gastroenterol Hepatol. 2020;17(6):338-351."
      },
      {
        "type": "para",
        "text": "8. Tobaldini E, Costantino G, Solbiati M, et al. Sleep, sleep deprivation, autonomic nervous system and cardiovascular diseases. Neurosci Biobehav Rev. 2017;74(Pt B):321-329."
      },
      {
        "type": "para",
        "text": "9. Bellesi M, de Vivo L, Chini M, et al. Sleep Loss Promotes Astrocytic Phagocytosis and Microglial Activation in Mouse Cerebral Cortex. J Neurosci. 2017;37(21):5263-5273."
      }
    ]
  }
] }

const reflexInsertIndex = chapter4ReworkFr.sections.findIndex((section) => section.id === 'a-retenir')
chapter4ReworkFr.sections.splice(reflexInsertIndex, 0, privateReflexSection)

// Keep every foundational reference inside the private reworked edition.
for (const section of chapter4ReworkFr.sections) {
  for (const block of section.blocks) {
    if (block.type !== 'xref') continue
    block.href = block.href
      .replace('/lecture/chapitre-3?', '/lecture/chapitre-3-rework?')
      .replace('/lecture/chapitre-4?', '/lecture/chapitre-4-rework?')
      .replace('/lecture/chapitre-5?', '/lecture/chapitre-5-rework?')
  }
}

// Chapter 4 — private reworked edition
// Source: public/chapter-4/Chapter4_SNA_AI_Rework_v2.docx
// Reflex-zone section: shared verbatim with the published Chapter 4.

import type { Chapter } from './types'
import { chapter4Fr } from './chapter4.fr'

const publishedReflexSection = chapter4Fr.sections.find((section) => section.id === 'zones-reflexes-podales')
if (!publishedReflexSection) throw new Error('Published Chapter 4 reflex-zone section is missing')

export const chapter4ReworkFr: Chapter = {
  slug: 'chapter-4-rework',
  number: '4',
  title: 'Système nerveux autonome',
  sections: [
  {
    "id": "presentation",
    "title": "1. Présentation",
    "blocks": [
      {
        "type": "para",
        "text": "Niveau 2 du protocole ROP — Régulation neuro-végétative et adaptation"
      },
      {
        "type": "para",
        "text": "Le système nerveux autonome (SNA) participe à l’ajustement permanent du fonctionnement des viscères, des glandes, des vaisseaux et de nombreuses fonctions internes. Il contribue ainsi à l’adaptation de l’organisme et au maintien de l’homéostasie."
      },
      {
        "type": "para",
        "text": "Dans la séquence clinique ROP, ce chapitre correspond au Niveau 2 — Régulation neuro-végétative et adaptation. Après les centres d’intégration étudiés au chapitre 3, il décrit les principales voies par lesquelles le cerveau et la moelle modulent l’activité viscérale, mais aussi les voies afférentes par lesquelles les viscères renseignent le système nerveux central."
      },
      {
        "type": "para",
        "text": "Le SNA comprend principalement deux grandes composantes efférentes : le parasympathique et le sympathique. Le tube digestif possède en outre son propre réseau intrinsèque, le système nerveux entérique, qui reste modulé par ces voies extrinsèques."
      },
      {
        "type": "para",
        "text": "Sympathique et parasympathique ont parfois des effets opposés, mais cette opposition ne résume pas leur fonctionnement. Leur activité est coordonnée et varie selon l’organe, le contexte, l’effort, le sommeil, la douleur, le stress et les besoins métaboliques."
      },
      {
        "type": "sub",
        "text": "1.1. Fonctions générales"
      },
      {
        "type": "bullets",
        "items": [
          "Régulation cardiovasculaire : fréquence cardiaque, contractilité, vasomotricité et pression artérielle.",
          "Régulation respiratoire : calibre bronchique, sécrétions et adaptation aux besoins ventilatoires.",
          "Régulation digestive : motricité, sécrétions, sphincters et interactions avec le système nerveux entérique.",
          "Régulation urinaire et génitale : stockage, vidange, continence et réponses sexuelles.",
          "Régulation glandulaire et métabolique : sécrétions exocrines et participation aux réponses neuroendocrines."
        ]
      },
      {
        "type": "sub",
        "text": "1.2. Intérêt en ROP"
      },
      {
        "type": "para",
        "text": "Dans la logique « priorité au nerf », le Niveau 2 vise à prendre en compte les voies autonomes avant ou en complément du travail loco-régional sur le viscère. L’objectif n’est pas de « stimuler le parasympathique » ou « freiner le sympathique » de manière systématique, mais de favoriser une régulation adaptée au contexte clinique."
      },
      {
        "type": "sub",
        "text": "1.3. Relations avec les autres niveaux"
      },
      {
        "type": "bullets",
        "items": [
          "Niveau 1 : centres supérieurs du SNC, tronc cérébral, hypothalamus et axe hypothalamo-hypophysaire.",
          "Niveau 2 : voies autonomes, plexus, surrénales et interfaces de régulation.",
          "Niveau 3 : viscères, péritoine, mésos, fascias et environnement loco-régional.",
          "Niveau 4 : convergences viscéro-somatiques, réseaux somatiques et dimension viscéro-émotionnelle."
        ]
      },
      {
        "type": "sub",
        "text": "1.7. Relation entre le SNA et le sommeil"
      },
      {
        "type": "para",
        "text": "Diapositive 9 · Le sommeil : prérequis de l’équilibre autonome"
      },
      {
        "type": "para",
        "text": "Les ruminations, les préoccupations et les stress de différentes natures peuvent perturber le sommeil, en réduire la durée et surtout en altérer la qualité."
      },
      {
        "type": "para",
        "text": "Un sommeil régulier et suffisant participe au bon fonctionnement neuroendocrinien et à la régulation du système nerveux autonome. La privation de sommeil peut modifier la variabilité de la fréquence cardiaque et favoriser une augmentation relative de l’activité sympathique avec une moindre modulation vagale. À long terme, un sommeil insuffisant est associé à un risque accru de troubles cardiométaboliques, notamment hypertension, diabète de type 2, obésité et maladies cardiovasculaires, ainsi qu’à des troubles de l’humeur et des performances cognitives."
      },
      {
        "type": "para",
        "text": "Les cellules gliales participent elles aussi aux adaptations liées au cycle veille-sommeil. Chez la souris, des travaux expérimentaux ont montré qu’une privation aiguë ou chronique de sommeil augmente l’activité phagocytaire des astrocytes sur certains composants présynaptiques et s’accompagne d’une activation microgliale. Ces résultats ne permettent pas d’affirmer que les astrocytes « éliminent les synapses » de façon généralisée chez l’être humain."
      },
      {
        "type": "para",
        "text": "Intérêt en ROP — L’équilibre autonome ne peut être apprécié indépendamment du sommeil. Une mauvaise récupération nocturne peut entretenir fatigue, hypervigilance et difficulté d’adaptation ; elle doit donc être recherchée dans l’anamnèse et intégrée à la réévaluation du Niveau 2."
      }
    ]
  },
  {
    "id": "organisation-du-sna",
    "title": "2. Organisation du SNA",
    "blocks": [
      {
        "type": "para",
        "text": "Comme le système nerveux somatique, le SNA comporte des voies efférentes et des voies afférentes. Cette distinction est essentielle : le fonctionnement autonome n’est pas une commande à sens unique, mais une boucle de régulation."
      },
      {
        "type": "sub",
        "text": "2.1. Viscéro-motricité : centres vers viscères"
      },
      {
        "type": "para",
        "text": "Les voies efférentes sympathiques et parasympathiques modulent les muscles lisses, le muscle cardiaque, les glandes, les sphincters internes et certains territoires vasculaires. La plupart des voies autonomes efférentes comportent un neurone préganglionnaire puis un neurone postganglionnaire."
      },
      {
        "type": "para",
        "text": "Le parasympathique utilise l’acétylcholine au niveau ganglionnaire et postganglionnaire. Le sympathique utilise l’acétylcholine au niveau préganglionnaire ; la noradrénaline est le médiateur postganglionnaire principal, avec plusieurs exceptions fonctionnelles."
      },
      {
        "type": "sub",
        "text": "2.2. Viscéro-sensitivité : viscères vers centres"
      },
      {
        "type": "para",
        "text": "Les viscères possèdent des mécanorécepteurs, chémorécepteurs et nocicepteurs qui informent en permanence le SNC. Ces afférences peuvent emprunter le nerf vague ou des voies spinales accompagnant les nerfs splanchniques et pelviens."
      },
      {
        "type": "para",
        "text": "Une fibre sensitive qui chemine avec une voie sympathique ou parasympathique reste une afférence viscérale : elle ne doit pas être confondue avec la commande autonome motrice qui circule en sens inverse."
      },
      {
        "type": "sub",
        "text": "2.3. Système nerveux entérique"
      },
      {
        "type": "para",
        "text": "Le tube digestif possède un réseau intrinsèque très développé, le système nerveux entérique (SNE). Il peut organiser localement une grande partie de la motricité et des sécrétions digestives, tout en restant modulé par le vague et le sympathique."
      },
      {
        "type": "para",
        "text": "Le SNE est repris plus loin dans ce chapitre et développé dans le chapitre 14 consacré à l’intestin grêle."
      }
    ]
  },
  {
    "id": "parasympathique-viscero-moteur",
    "title": "3. Parasympathique viscéro-moteur",
    "blocks": [
      {
        "type": "para",
        "text": "Le parasympathique possède des origines crâniennes et sacrées. Il participe notamment aux sécrétions, à la motricité digestive, au ralentissement cardiaque et aux fonctions pelviennes. Son action dépend du territoire et du contexte fonctionnel."
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
        "text": "Les fibres postganglionnaires empruntent souvent des branches du nerf trijumeau pour atteindre les territoires céphaliques. Les détails de la base du crâne et de ces ganglions sont développés dans le volume consacré au système neuro-méningé."
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
        "text": "Il quitte le crâne par le foramen jugulaire, descend dans la gaine carotidienne, traverse le thorax au contact des organes médiastinaux puis accompagne l’œsophage à travers le diaphragme avant de se distribuer aux territoires abdominaux."
      },
      {
        "type": "sub",
        "text": "3.2.1. Étage cervical"
      },
      {
        "type": "para",
        "text": "Dans le cou, le vague chemine entre les grands axes vasculaires. Il donne notamment le nerf laryngé supérieur et participe aux réseaux pharyngés et laryngés. Les afférences baroréceptrices du sinus carotidien empruntent principalement le nerf glossopharyngien, tandis que le vague participe notamment aux afférences provenant de l’arc aortique."
      },
      {
        "type": "para",
        "text": "Le sinus carotidien est un repère physiologique important, mais ne doit pas être utilisé comme cible de manipulation thérapeutique directe."
      },
      {
        "type": "sub",
        "text": "3.2.2. Étage thoracique"
      },
      {
        "type": "para",
        "text": "Dans le thorax, les nerfs vagues participent aux plexus cardiaques, pulmonaires et œsophagiens. Le vague contribue au ralentissement de la fréquence cardiaque, à la modulation de la conduction atrioventriculaire, à la bronchoconstriction et aux sécrétions bronchiques, ainsi qu’à la motricité œsophagienne."
      },
      {
        "type": "para",
        "text": "Le nerf laryngé récurrent droit contourne l’artère subclavière droite ; le gauche contourne la crosse aortique. Ces rapports anatomiques sont importants pour comprendre la proximité entre voies vagales, larynx, œsophage et médiastin."
      },
      {
        "type": "sub",
        "text": "3.2.3. Étage diaphragmatique"
      },
      {
        "type": "para",
        "text": "Les deux troncs vagaux accompagnent l’œsophage à travers le hiatus œsophagien. Le vague antérieur dérive principalement du vague gauche et le vague postérieur principalement du vague droit."
      },
      {
        "type": "para",
        "text": "Le diaphragme n’appartient pas au SNA, mais il constitue une interface fonctionnelle du Niveau 2 : respiration, variations de pression thoraco-abdominales, retour veineux et activité autonome interagissent en permanence."
      },
      {
        "type": "sub",
        "text": "3.2.4. Étage abdominal"
      },
      {
        "type": "para",
        "text": "Dans l’abdomen, les branches vagales rejoignent les plexus péri-artériels et prévertébraux et modulent notamment l’estomac, le duodénum, l’intestin grêle et le côlon proximal. La frontière avec le parasympathique pelvien se situe vers le côlon transverse distal, sans constituer une ligne anatomique rigide."
      },
      {
        "type": "para",
        "text": "Le vague favorise globalement la motricité et les sécrétions digestives, en interaction étroite avec le SNE."
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
        "type": "para",
        "text": "Repère important pour la ROP : le chevauchement segmentaire S2-S4 entre voies autonomes pelviennes et voies somatiques constitue un terrain particulièrement intéressant pour l’étude des convergences régionales."
      }
    ]
  },
  {
    "id": "nerf-vague-viscero-sensitif",
    "title": "4. Nerf vague viscéro-sensitif",
    "blocks": [
      {
        "type": "para",
        "text": "Le nerf vague est majoritairement afférent : une grande partie de ses fibres transmet des informations des viscères vers le tronc cérébral. Cette fonction sensitive est essentielle pour comprendre le dialogue permanent entre organes et centres supérieurs."
      },
      {
        "type": "sub",
        "text": "4.1. Intéroception vagale"
      },
      {
        "type": "para",
        "text": "Les corps cellulaires de nombreuses afférences vagales se situent dans le ganglion inférieur du vague. Leurs prolongements centraux gagnent principalement le noyau du tractus solitaire (NTS), puis des réseaux du tronc cérébral, de l’hypothalamus et des régions corticales impliquées dans l’interoception."
      },
      {
        "type": "para",
        "text": "Les informations véhiculées concernent notamment la distension, l’état chimique du milieu, certaines réponses inflammatoires et de nombreux réflexes viscéraux."
      },
      {
        "type": "sub",
        "text": "4.2. Fonctions réflexes et protectrices"
      },
      {
        "type": "bullets",
        "items": [
          "Réflexes cardiovasculaires et respiratoires.",
          "Régulation digestive et signaux de satiété.",
          "Toux, déglutition, nausée et vomissement selon les territoires stimulés.",
          "Participation au dialogue intestin-cerveau."
        ]
      },
      {
        "type": "para",
        "text": "Le vague ne constitue pas à lui seul un « nerf anti-inflammatoire » simple : ses voies afférentes et efférentes participent à des boucles neuro-immunes complexes."
      },
      {
        "type": "sub",
        "text": "4.3. Intérêt en ROP"
      },
      {
        "type": "para",
        "text": "Dans le Niveau 2, le vague est abordé comme une grande voie de communication bidirectionnelle. La stimulation manuelle ROP n’est pas équivalente à une stimulation électrique directe du nerf ; les données de neuromodulation permettent surtout d’identifier des circuits plausibles."
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
        "text": "L’origine thoraco-lombaire du sympathique explique l’existence de territoires fonctionnels segmentaires. Les niveaux exacts varient selon les organes et les individus ; ils doivent être utilisés comme repères anatomiques et non comme correspondances absolues."
      },
      {
        "type": "bullets",
        "items": [
          "Segments thoraciques supérieurs : tête, cou et une partie des fonctions cardio-pulmonaires.",
          "Segments thoraciques moyens et inférieurs : viscères thoraciques et abdominaux.",
          "Segments thoraco-lombaires inférieurs : côlon distal, organes uro-génitaux et territoires pelviens."
        ]
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
        "text": "5.3. Chaîne ganglionnaire cervicale"
      },
      {
        "type": "para",
        "text": "La chaîne cervicale comprend classiquement un ganglion cervical supérieur, un ganglion moyen inconstant et un ganglion cervical inférieur souvent associé au premier ganglion thoracique pour former le ganglion stellaire."
      },
      {
        "type": "bullets",
        "items": [
          "Ganglion cervical supérieur : distribution sympathique vers la tête et le cou via les plexus péri-carotidiens.",
          "Ganglion cervical moyen : relations notamment thyroïdiennes et cardiaques.",
          "Ganglion cervical inférieur / stellaire : relations avec la région cervico-thoracique, l’artère subclavière et les voies cardiaques."
        ]
      },
      {
        "type": "para",
        "text": "Ces ganglions sont des carrefours anatomiques importants, mais des symptômes comme vertiges, acouphènes, capsulite ou canal carpien ne doivent pas être attribués automatiquement à un ganglion sympathique."
      },
      {
        "type": "sub",
        "text": "5.4. Chaîne ganglionnaire lombale, sacrale et coccygienne"
      },
      {
        "type": "para",
        "text": "La chaîne sympathique se poursuit le long des corps vertébraux lombaires puis sur la face antérieure du sacrum. Elle contribue aux voies autonomes destinées aux territoires abdomino-pelviens et se termine caudalement au niveau du ganglion impair."
      },
      {
        "type": "para",
        "text": "Ses rapports avec le psoas, le diaphragme, le sacrum et le coccyx sont pertinents sur le plan régional ; ils ne permettent cependant pas d’établir qu’une tension musculaire ou ligamentaire entraîne nécessairement une dysfonction autonome d’organe."
      },
      {
        "type": "sub",
        "text": "5.5. Nerfs splanchniques"
      },
      {
        "type": "para",
        "text": "Les nerfs splanchniques thoraciques et lombaires transportent principalement des fibres sympathiques préganglionnaires vers les plexus prévertébraux. Ils peuvent également accompagner des afférences viscérales qui remontent vers les ganglions spinaux et la moelle."
      },
      {
        "type": "para",
        "text": "On distingue classiquement les grands, petits et moindres splanchniques thoraciques, puis les splanchniques lombaires. Leurs distributions exactes se chevauchent et présentent une variabilité anatomique."
      }
    ]
  },
  {
    "id": "sympathique-somato-viscero-sensitif",
    "title": "6. Sympathique somato-viscéro-sensitif",
    "blocks": [
      {
        "type": "para",
        "text": "Cette section conserve la terminologie historique du chapitre, mais il est utile de préciser que les fibres sensitives viscérales ne sont pas des neurones sympathiques moteurs. Elles peuvent cheminer avec les nerfs sympathiques avant de rejoindre leurs corps cellulaires dans les ganglions spinaux."
      },
      {
        "type": "sub",
        "text": "6.1. Afférences viscérales spinales"
      },
      {
        "type": "para",
        "text": "Les afférences provenant des viscères rejoignent la moelle par les racines dorsales. Elles renseignent notamment sur la distension, l’ischémie, l’inflammation et la douleur."
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
        "type": "para",
        "text": "Une douleur viscérale peut donc être ressentie dans un territoire somatique partageant des niveaux spinaux voisins. Ces projections restent variables et ne constituent pas des tests diagnostiques spécifiques."
      },
      {
        "type": "sub",
        "text": "6.3. Intérêt en ROP"
      },
      {
        "type": "para",
        "text": "Le mécanisme de convergence fournit un cadre neuro-anatomique aux relations viscéro-somatiques. Le détail clinique de ces relations appartient toutefois au Niveau 4 et aux chapitres consacrés à chaque organe."
      }
    ]
  },
  {
    "id": "chaine-plexique-prevertebrale-ou-pre-aortique",
    "title": "7. Chaîne plexique prévertébrale (ou pré-aortique)",
    "blocks": [
      {
        "type": "para",
        "text": "Les plexus prévertébraux sont situés autour des grands axes artériels de l’abdomen. Ils réunissent des fibres sympathiques, des fibres parasympathiques et des afférences viscérales avant leur distribution aux organes."
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
        "text": "Ces plexus constituent des carrefours de distribution. Les voies vagales favorisent globalement certaines fonctions digestives, tandis que l’activation sympathique peut diminuer la motricité digestive et redistribuer le débit sanguin selon le contexte."
      },
      {
        "type": "sub",
        "text": "7.3. Intérêt en ROP"
      },
      {
        "type": "para",
        "text": "Dans le modèle ROP, les zones réflexes des plexus prévertébraux sont utilisées comme repères de régulation régionale neuro-végétative. Leur stimulation ne doit pas être présentée comme une activation directe et sélective du plexus anatomique correspondant."
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
        "type": "para",
        "text": "Ses branches se distribuent à la vessie, au rectum, aux organes génitaux internes et aux tissus érectiles."
      },
      {
        "type": "sub",
        "text": "8.2. Fonctions pelviennes"
      },
      {
        "type": "bullets",
        "items": [
          "Continence et miction : coordination entre voies autonomes et sphincters.",
          "Défécation : modulation de la motricité rectale et des sphincters internes.",
          "Fonctions sexuelles : réponses vasculaires, glandulaires et motrices selon les organes."
        ]
      },
      {
        "type": "para",
        "text": "Le contrôle des sphincters externes et d’une partie du plancher pelvien relève du système somatique, notamment du nerf pudendal S2-S4."
      },
      {
        "type": "sub",
        "text": "8.3. Intérêt en ROP"
      },
      {
        "type": "para",
        "text": "Le plexus hypogastrique inférieur constitue l’un des meilleurs exemples de carrefour autonome régional du Niveau 2. Il permet de comprendre pourquoi les fonctions pelviennes ne dépendent jamais d’une voie unique."
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
        "text": "Les cellules interstitielles de Cajal ne sont pas des neurones : ce sont des cellules spécialisées qui participent à la génération et à la coordination des ondes lentes électriques."
      },
      {
        "type": "sub",
        "text": "9.2. Autonomie relative et interface SNA-SNE"
      },
      {
        "type": "para",
        "text": "Le SNE peut fonctionner avec une importante autonomie locale, mais il reste modulé par les efférences parasympathiques et sympathiques. Il participe ainsi à une véritable interface SNA-SNE, particulièrement importante pour le tube digestif."
      },
      {
        "type": "para",
        "text": "Cette organisation est détaillée au chapitre 14 sur l’intestin grêle, où elle est mise en relation avec la motricité, l’immunité, le microbiote et l’axe cerveau-intestin."
      }
    ]
  },
  {
    "id": "glandes-surrenales",
    "title": "10. Glandes surrénales",
    "blocks": [
      {
        "type": "para",
        "text": "Les glandes surrénales illustrent la continuité entre système nerveux autonome et régulation hormonale. Leur médulla et leur cortex répondent à des mécanismes de contrôle différents."
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
        "type": "sub",
        "text": "10.2. Corticosurrénale"
      },
      {
        "type": "para",
        "text": "La corticosurrénale produit notamment cortisol, aldostérone et androgènes surrénaliens. Le cortisol dépend de l’axe hypothalamo-hypophyso-surrénalien ; l’aldostérone est régulée surtout par le système rénine-angiotensine et la kaliémie."
      },
      {
        "type": "sub",
        "text": "10.3. Intérêt en ROP"
      },
      {
        "type": "para",
        "text": "Dans le Niveau 2, les surrénales sont considérées comme une interface neuroendocrine de l’adaptation. Leur cartographie ROP appartient au modèle clinique et ne doit pas être assimilée à une stimulation directe de la sécrétion hormonale."
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
          "Le chapitre 4 conserve son architecture historique tout en étant recentré sur le Niveau 2 : régulation neuro-végétative et adaptation.",
          "Le SNA fonctionne dans les deux sens : commandes efférentes vers les viscères et informations afférentes vers les centres.",
          "Le vague est une grande voie parasympathique thoraco-abdominale et une voie afférente majeure.",
          "Le parasympathique pelvien S2-S4 est distinct du nerf pudendal somatique S2-S4.",
          "Le sympathique est principalement thoraco-lombaire et distribué par la chaîne paravertébrale, les splanchniques et les plexus prévertébraux.",
          "Les plexus prévertébraux et hypogastriques sont des carrefours régionaux importants du Niveau 2.",
          "Le SNE est un réseau intrinsèque digestif en interface permanente avec le SNA.",
          "Les surrénales illustrent la continuité entre régulation nerveuse et hormonale.",
          "Les zones réflexes ROP sont des repères cliniques et non une anatomie directe du système autonome sur le pied."
        ]
      }
    ]
  },
  {
    "id": "bibliographie-selective",
    "title": "Bibliographie sélective",
    "blocks": [
      {
        "type": "numbered",
        "items": [
          "Standring S, ed. Gray’s Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. Elsevier; 2020.",
          "Jänig W. Neurobiology of visceral afferent neurons: neuroanatomy, functions, organ regulations and sensations. Biol Psychol. 1996;42(1-2):29-51.",
          "Sato A, Sato Y, Schmidt RF. The impact of somatosensory input on autonomic functions. Rev Physiol Biochem Pharmacol. 1997;130:1-328.",
          "Fowler CJ, Griffiths D, de Groat WC. The neural control of micturition. Nat Rev Neurosci. 2008;9(6):453-466.",
          "Shefchyk SJ. Spinal cord neural organization controlling the urinary bladder and striated sphincter. Prog Brain Res. 2002;137:71-82.",
          "de Groat WC, Vizzard MA, Araki I, Roppolo JR. Spinal interneurons and preganglionic neurons in sacral autonomic reflex pathways. Prog Brain Res. 1996;107:97-111.",
          "Brierley SM, Hibberd TJ, Spencer NJ. Spinal afferent innervation of the colon and rectum. Front Cell Neurosci. 2018;12:467.",
          "Spencer NJ, Hu H. Enteric nervous system: sensory transduction, neural circuits and gastrointestinal motility. Nat Rev Gastroenterol Hepatol. 2020;17(6):338-351.",
          "Hotta H, Watanabe N. The enteric nervous system. J Physiol Sci. 2023;73:1.",
          "de Rijk MM, Fernández Chadily S, Knops A, Schoutens Y, Verstegen AMJ. The periaqueductal gray and its role in the neural control of lower urinary tract function. Auton Neurosci. 2026;265:103413.",
          "Tobaldini E, Costantino G, Solbiati M, et al. Sleep, sleep deprivation, autonomic nervous system and cardiovascular diseases. Neurosci Biobehav Rev. 2017;74(Pt B):321-329. doi:10.1016/j.neubiorev.2016.07.004.",
          "Hoyos CM, et al. Sleep Deficiency and Cardiometabolic Disease. Cardiol Clin. 2022;40(3):319-331. PMID: 35659028.",
          "Bellesi M, de Vivo L, Chini M, et al. Sleep Loss Promotes Astrocytic Phagocytosis and Microglial Activation in Mouse Cerebral Cortex. J Neurosci. 2017;37(21):5263-5273. doi:10.1523/JNEUROSCI.3981-16.2017."
        ]
      }
    ]
  }
]
}

const reflexInsertIndex = chapter4ReworkFr.sections.findIndex((section) => section.id === 'a-retenir')
chapter4ReworkFr.sections.splice(reflexInsertIndex, 0, publishedReflexSection)

// Chapter 3 — private reworked edition
// Source: public/chapter-3/Chapitre_3_SNC_ROP_avec_zones_occipitales.docx

import type { Block, Chapter } from './types'

export const chapter3ReworkFr: Chapter = { slug: 'chapter-3-rework', number: '3', title: 'Système nerveux central (SNC)', sections: [
  {
    "id": "presentation",
    "title": "1. Présentation : pourquoi commencer par le système nerveux central ?",
    "blocks": [
      {
        "type": "note",
        "label": "NIVEAU 1 DU PROTOCOLE ROP",
        "body": [
          "Niveau 1 du protocole ROP — Régulation des centres supérieurs"
        ]
      },
      {
        "type": "para",
        "text": "Le système nerveux central comprend l’encéphale et la moelle spinale. Il reçoit des informations venant du corps, les intègre et participe à l’organisation des réponses motrices, autonomes, endocrines, émotionnelles et cognitives."
      },
      {
        "type": "para",
        "text": "Dans la séquence clinique ROP présentée au chapitre 0, ce chapitre développe le Niveau 1 : la régulation des centres supérieurs. L’objectif n’est pas de « traiter le cerveau » comme un organe isolé. Il est de comprendre les grands réseaux d’intégration qui reçoivent des informations somatiques et viscérales et qui participent ensuite aux réponses d’adaptation de l’organisme."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 0",
        "text": "Fondements neuro-anatomiques de la ROP",
        "href": "/lecture/fondements-neuro-anatomiques?lang=fr"
      },
      {
        "type": "para",
        "text": "Le chapitre 4 est consacré au système nerveux autonome. Nous n’en détaillerons donc pas ici l’organisation périphérique sympathique et parasympathique. Le présent chapitre se concentre sur les centres du SNC qui reçoivent, intègrent et modulent ces informations."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 4",
        "text": "Chapitre 4",
        "href": "/lecture/chapitre-4?lang=fr"
      },
      {
        "type": "sub",
        "text": "1.1. Ce que le Niveau 1 regroupe en ROP"
      },
      {
        "type": "bullets",
        "items": [
          "Zones réflexes occipitales.",
          "Environnement neuro-méningé crânio-spinal.",
          "Liquide cérébrospinal (LCR) dans le modèle ROP.",
          "Axe crânio-sacré comme repère clinique de continuité crânio-spinale.",
          "Tronc cérébral.",
          "Diencéphale, notamment hypothalamus.",
          "Axe hypothalamo-hypophysaire."
        ]
      },
      {
        "type": "para",
        "text": "Les réseaux limbiques et corticaux sont également décrits dans ce chapitre parce qu’ils appartiennent au SNC et participent à l’intégration supraspinale. Leur utilisation clinique dans les relations viscéro-émotionnelles sera cependant reprise au Niveau 4. (Cf. chapitres d’organes, sections « Relations viscéro-émotionnelles », pour l’application clinique du Niveau 4.)"
      }
    ]
  },
  {
    "id": "du-corps-vers-les-centres-d-integration",
    "title": "2. Du corps vers les centres d’intégration : une lecture simple",
    "blocks": [
      {
        "type": "para",
        "text": "Toute stimulation somatosensorielle — toucher, pression, étirement, mouvement — génère une activité afférente qui rejoint les nerfs périphériques, la moelle spinale puis les centres supérieurs. Les viscères envoient eux aussi des informations vers le SNC par des voies afférentes spinales et vagales."
      },
      {
        "type": "para",
        "text": "Ces informations ne restent pas enfermées dans des voies indépendantes. Elles peuvent converger dans la moelle, le tronc cérébral et des réseaux corticaux. Le SNC compare ainsi en permanence ce qui vient de la peau, des muscles, des articulations, des viscères et de l’environnement."
      },
      {
        "type": "para",
        "text": "Pour la ROP, cette organisation est fondamentale : une pression sur une zone podale ou occipitale ne rejoint pas directement un organe ou une aire cérébrale. Elle constitue une entrée sensorielle susceptible de modifier l’état d’un réseau."
      },
      {
        "type": "sub",
        "text": "2.1. Voies ascendantes et commandes descendantes"
      },
      {
        "type": "para",
        "text": "Les informations sensitives remontent vers le tronc cérébral, le thalamus et différents réseaux corticaux. En retour, le cerveau peut modifier l’activité de la moelle et des circuits autonomes par des commandes descendantes."
      },
      {
        "type": "para",
        "text": "Cette organisation permet de comprendre comment une entrée somatique peut participer à une modulation plus générale de la douleur, du tonus, de la vigilance, de l’état autonome ou de certaines fonctions viscérales, sans supposer une connexion directe entre un point et une cible."
      },
      {
        "type": "rop",
        "body": [
          "Cette organisation constitue le cadre général des « ponts neuro-anatomiques » décrits dans l’introduction : une entrée somatique peut rejoindre des réseaux spinaux et supraspinaux, puis participer à une modulation descendante. Elle ne constitue pas une connexion directe point-organe. (Cf. chapitre 0, Fondements neuro-anatomiques de la ROP, et chapitre 4, Système nerveux autonome.)"
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 0",
        "text": "Fondements neuro-anatomiques de la ROP",
        "href": "/lecture/fondements-neuro-anatomiques?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 4",
        "text": "Chapitre 4",
        "href": "/lecture/chapitre-4?lang=fr"
      }
    ]
  },
  {
    "id": "tronc-cerebral",
    "title": "3. Le tronc cérébral : premier grand carrefour supraspinal",
    "blocks": [
      {
        "type": "para",
        "text": "Le tronc cérébral relie la moelle spinale, le cervelet, le diencéphale et les hémisphères cérébraux. Il comprend la moelle allongée, le pont et le mésencéphale. Il contient de nombreux noyaux de nerfs crâniens et plusieurs réseaux essentiels à la respiration, à la vigilance, à la douleur et aux fonctions autonomes."
      },
      {
        "type": "para",
        "text": "Dans le contexte de la ROP viscérale, son intérêt tient surtout à son rôle d’interface entre les informations ascendantes venant du corps et les réponses autonomes et comportementales organisées par les centres supérieurs."
      },
      {
        "type": "sub",
        "text": "3.1. Noyau du tractus solitaire : une porte d’entrée viscérale majeure"
      },
      {
        "type": "para",
        "text": "Le noyau du tractus solitaire (NTS), situé dans la moelle allongée, constitue un relais majeur des informations viscérales arrivant notamment par les nerfs vague et glossopharyngien. Il participe à l’intégration de signaux cardiovasculaires, respiratoires et digestifs, puis communique avec d’autres centres autonomes du tronc cérébral et de l’hypothalamus."
      },
      {
        "type": "para",
        "text": "Il illustre bien un principe général : les informations provenant des viscères sont intégrées très tôt dans des réseaux centraux avant de participer à des réponses réflexes ou adaptatives."
      },
      {
        "type": "para",
        "text": "Pour le détail des afférences vagales et du dialogue viscères–tronc cérébral, se reporter au chapitre 4, section « Nerf vague viscéro-sensitif »."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 4",
        "text": "Chapitre 4",
        "href": "/lecture/chapitre-4?lang=fr"
      },
      {
        "type": "sub",
        "text": "3.2. Formation réticulaire et locus coeruleus"
      },
      {
        "type": "para",
        "text": "La formation réticulaire est un réseau diffus du tronc cérébral impliqué dans l’éveil, la vigilance, le tonus musculaire, la douleur et plusieurs fonctions autonomes. Le locus coeruleus, situé dans le pont, contient de nombreux neurones noradrénergiques et participe à l’attention, à la vigilance et aux réponses au stress."
      },
      {
        "type": "para",
        "text": "Ces structures ne fonctionnent pas comme des interrupteurs isolés : elles reçoivent de multiples informations et modulent l’état général du système nerveux."
      },
      {
        "type": "rop",
        "body": [
          "Dans le modèle de la ROP, certaines zones réflexes occipitales sont mises en relation avec la formation réticulaire. Cette correspondance relève de la cartographie clinique propre à la méthode. Se reporter au livre Réflexothérapie occipito-podale, Elsevier-Masson, pages 63 à 66. Pour le locus coeruleus et les mécanismes d’adaptation au stress, cf. chapitre 5 « Mécanisme de stress »."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Chapitre 5",
        "href": "/lecture/chapitre-5?lang=fr"
      },
      {
        "type": "sub",
        "text": "3.3. Substance grise périaqueducale : intégration et commandes descendantes"
      },
      {
        "type": "para",
        "text": "La substance grise périaqueducale (PAG), située autour de l’aqueduc cérébral dans le mésencéphale, participe à la modulation de la douleur, aux réponses de défense et à l’intégration de certaines fonctions autonomes et viscérales. Elle intervient également dans les réseaux de contrôle des fonctions pelviennes."
      },
      {
        "type": "para",
        "text": "Pour notre modèle, elle constitue un exemple de relais supraspinal capable de transformer une information ascendante en une réponse descendante modulant les circuits spinaux. (Cf. chapitre 18 « Vessie » pour l’application de ces réseaux au contrôle des fonctions urinaires.)"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 18",
        "text": "Chapitre 18",
        "href": "/lecture/chapitre-18?lang=fr"
      }
    ]
  },
  {
    "id": "diencephale",
    "title": "4. Diencéphale : relier sensation, homéostasie et adaptation",
    "blocks": [
      {
        "type": "para",
        "text": "Le diencéphale est situé entre le tronc cérébral et les hémisphères cérébraux, autour du troisième ventricule. Pour la lecture ROP, deux structures sont particulièrement importantes : le thalamus et l’hypothalamus."
      },
      {
        "type": "sub",
        "text": "4.1. Thalamus"
      },
      {
        "type": "para",
        "text": "Le thalamus constitue un relais majeur pour de nombreuses informations sensitives et sensorielles destinées au cortex. Il participe aussi au traitement de la douleur, à l’attention et à l’adaptation du flux d’informations selon l’état de veille ou de sommeil."
      },
      {
        "type": "sub",
        "text": "4.2. Hypothalamus : interface centrale entre SNC, SNA et système endocrinien"
      },
      {
        "type": "para",
        "text": "L’hypothalamus est une petite région située sous le thalamus, mais son rôle fonctionnel est considérable. Il reçoit des informations du tronc cérébral, du cortex et des réseaux limbiques et participe au maintien de l’homéostasie : température, faim, soif, sommeil, réponses autonomes et fonctions endocrines."
      },
      {
        "type": "para",
        "text": "Dans les situations de stress, il participe à l’activation des réponses sympathiques et neuroendocrines. Il constitue ainsi un point de jonction important entre le Niveau 1 décrit ici, le système nerveux autonome développé au chapitre 4 et le mécanisme de stress développé au chapitre 5."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 4",
        "text": "Chapitre 4",
        "href": "/lecture/chapitre-4?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Chapitre 5",
        "href": "/lecture/chapitre-5?lang=fr"
      },
      {
        "type": "sub",
        "text": "4.3. Axe hypothalamo-hypophysaire"
      },
      {
        "type": "para",
        "text": "L’hypophyse ne fait pas partie du diencéphale au sens strict, mais son fonctionnement est étroitement lié à l’hypothalamus. La neurohypophyse libère notamment la vasopressine et l’ocytocine produites dans l’hypothalamus. L’adénohypophyse sécrète plusieurs hormones sous contrôle hypothalamique, dont l’ACTH, la TSH, la GH, la FSH, la LH et la prolactine."
      },
      {
        "type": "para",
        "text": "Pour la ROP, l’intérêt de cet axe est surtout fonctionnel : il rappelle que les réponses centrales, autonomes et hormonales sont intégrées et ne peuvent être comprises séparément."
      },
      {
        "type": "rop",
        "body": [
          "Par leurs fonctions neuro-végétatives et hormonales, l’hypothalamus et l’hypophyse occupent une place centrale dans la compréhension de l’adaptation au stress. Leur articulation avec le SNA est développée au chapitre 4 ; l’axe hypothalamo-hypophyso-surrénalien est repris au chapitre 5 « Mécanisme de stress »."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 4",
        "text": "Chapitre 4",
        "href": "/lecture/chapitre-4?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 5",
        "text": "Chapitre 5",
        "href": "/lecture/chapitre-5?lang=fr"
      }
    ]
  },
  {
    "id": "reseaux-corticaux-et-cortico-limbiques",
    "title": "5. Réseaux corticaux et cortico-limbiques : percevoir l’état du corps et lui donner un contexte",
    "blocks": [
      {
        "type": "para",
        "text": "Il est préférable de parler de réseaux limbiques et cortico-limbiques plutôt que d’un « cerveau limbique » séparé. Les émotions, la mémoire et les réponses autonomes émergent de réseaux distribués, en interaction avec le tronc cérébral, l’hypothalamus et le cortex préfrontal."
      },
      {
        "type": "sub",
        "text": "5.1. Insula : perception de l’état interne"
      },
      {
        "type": "para",
        "text": "L’insula reçoit, après plusieurs relais, des informations relatives à l’état interne du corps : activité cardiaque, respiration, digestion, douleur et autres sensations viscérales. Elle participe à l’intéroception, c’est-à-dire à la perception de l’état interne, et à la dimension corporelle des émotions."
      },
      {
        "type": "sub",
        "text": "5.2. Cortex cingulaire : attention, douleur et mobilisation de la réponse"
      },
      {
        "type": "para",
        "text": "Le cortex cingulaire participe à l’attention, à la motivation, à la douleur, à la régulation émotionnelle et à certaines réponses autonomes. Il contribue notamment à évaluer la pertinence d’un signal et à mobiliser une réponse lorsque cela est nécessaire."
      },
      {
        "type": "sub",
        "text": "5.3. Cortex préfrontal : évaluation et adaptation"
      },
      {
        "type": "para",
        "text": "Les régions préfrontales participent à la planification, à la prise de décision et à la régulation du comportement. Elles interagissent avec l’insula, le cortex cingulaire, l’amygdale, l’hippocampe et l’hypothalamus pour ajuster les réponses au contexte."
      },
      {
        "type": "sub",
        "text": "5.4. Amygdale et hippocampe : valeur émotionnelle et mémoire contextuelle"
      },
      {
        "type": "para",
        "text": "L’amygdale participe à l’évaluation de la valeur émotionnelle des situations, notamment face à la menace, tandis que l’hippocampe joue un rôle majeur dans la mémoire, l’apprentissage et la mise en contexte des expériences."
      },
      {
        "type": "para",
        "text": "Ces deux structures sont décrites ici parce qu’elles participent aux réseaux supraspinaux. Leur utilisation clinique dans les relations viscéro-émotionnelles appartient toutefois au Niveau 4 du protocole ROP et sera abordée comme telle."
      },
      {
        "type": "para",
        "text": "Une émotion peut modifier la respiration, le rythme cardiaque ou le transit ; inversement, les signaux corporels et viscéraux peuvent influencer l’état émotionnel. Cette bidirectionnalité est mieux comprise comme une interaction entre réseaux que comme une relation fixe entre un organe et une émotion."
      },
      {
        "type": "rop",
        "body": [
          "Dans la ROP, les réseaux corticaux et cortico-limbiques sont surtout mobilisés pour comprendre la dimension viscéro-émotionnelle du Niveau 4. Ils ne définissent pas une correspondance fixe entre une émotion, un viscère et une aire cérébrale. (Cf. chapitre 6 « Théorie polyvagale » et chapitres d’organes, sections « Relations viscéro-émotionnelles ».)"
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 6",
        "text": "Chapitre 6",
        "href": "/lecture/chapitre-6?lang=fr"
      }
    ]
  },
  {
    "id": "environnement-neuro-meninge",
    "title": "6. Environnement neuro-méningé et circulation liquidienne",
    "blocks": [
      {
        "type": "para",
        "text": "Le cerveau et la moelle spinale sont entourés par les méninges et baignés par le liquide cérébrospinal. Le LCR est produit principalement par les plexus choroïdes, circule dans les ventricules et les espaces sous-arachnoïdiens, puis est résorbé par plusieurs voies."
      },
      {
        "type": "para",
        "text": "Les méninges crâniennes se prolongent autour de la moelle spinale. Cette continuité anatomique constitue un cadre utile pour comprendre l’environnement neuro-méningé crânio-spinal."
      },
      {
        "type": "sub",
        "text": "6.1. Système glymphatique et lymphatiques méningés"
      },
      {
        "type": "para",
        "text": "Le système glymphatique désigne des échanges périvasculaires participant à la circulation des liquides et à l’élimination de certains déchets métaboliques dans le cerveau. Il fonctionne en relation avec le LCR et avec les vaisseaux lymphatiques des méninges, sans se confondre avec eux. Pour les relations entre sommeil et équilibre autonome, cf. chapitre 4, section 1.7 « Relation entre le SNA et le sommeil »."
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 4",
        "text": "Chapitre 4",
        "href": "/lecture/chapitre-4?lang=fr"
      },
      {
        "type": "sub",
        "text": "6.2. Axe crânio-sacré et MRP : repères cliniques propres à la ROP"
      },
      {
        "type": "para",
        "text": "Dans la méthode ROP, les termes « axe crânio-sacré » et « MRP » sont utilisés comme repères cliniques issus du modèle neuro-méningé développé dans les volumes précédents. Ils ne désignent pas un système anatomique autonome reconnu."
      },
      {
        "type": "para",
        "text": "De même, les techniques dites de compression du quatrième ventricule, de synchronisation SSB-S2 ou de travail sur la circulation du LCR appartiennent au modèle thérapeutique de la ROP. Leurs effets précis sur la dynamique intracrânienne ou sur le débit du LCR ne sont pas directement établis."
      },
      {
        "type": "para",
        "text": "Cette distinction permet de conserver la cohérence historique et clinique de la méthode tout en séparant clairement l’anatomie démontrée du modèle thérapeutique."
      },
      {
        "type": "rop",
        "body": [
          "L’environnement neuro-méningé reste un repère important du Niveau 1 dans la méthode. Les techniques MRP, CV4 et SSB–S2 appartiennent au modèle thérapeutique ROP et sont décrites dans les volumes précédents. Pour les repères dure-mériens : se reporter au livre Réflexothérapie occipito-podale et système neuro-méningé, Elsevier Masson, page 85, figure 7.8, et page 109, figure 8.12. Cf. également chapitre 1 « Généralités » pour la présentation méthodologique du MRP."
        ]
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 1",
        "text": "Chapitre 1",
        "href": "/lecture/chapitre-1?lang=fr"
      }
    ]
  },
  {
    "id": "cervelet-et-ganglions-de-la-base",
    "title": "7. Deux repères complémentaires : cervelet et ganglions de la base",
    "blocks": [
      {
        "type": "sub",
        "text": "7.1. Cervelet"
      },
      {
        "type": "para",
        "text": "Le cervelet est situé en arrière du tronc cérébral. Il compare des informations venant du cortex, de la moelle spinale et de l’appareil vestibulaire afin d’ajuster la posture, l’équilibre, la coordination et la précision des mouvements."
      },
      {
        "type": "para",
        "text": "Il est utile dans le livre comme repère de coordination sensorimotrice, mais il n’occupe pas la même place centrale que le tronc cérébral ou l’hypothalamus dans la régulation viscérale."
      },
      {
        "type": "sub",
        "text": "7.2. Ganglions de la base"
      },
      {
        "type": "para",
        "text": "Les ganglions de la base sont des noyaux profonds impliqués dans la sélection et la fluidité des mouvements, mais aussi dans certains circuits de motivation et d’apprentissage. Ils comprennent notamment le noyau caudé, le putamen et le pallidum ; la substance noire et le noyau subthalamique participent à leurs circuits."
      },
      {
        "type": "para",
        "text": "Ils sont présentés ici comme repères complémentaires et non comme structures du tronc cérébral."
      },
      {
        "type": "rop",
        "body": [
          "Le cervelet et les ganglions de la base restent des repères secondaires dans ce chapitre. Leur intérêt pratique est surtout cartographique ; les zones réflexes correspondantes sont regroupées en section 9.1 afin de ne pas interrompre le déroulé anatomique."
        ]
      }
    ]
  },
  {
    "id": "niveau-1-logique-clinique",
    "title": "8. Le Niveau 1 en ROP : quelle logique clinique ?",
    "blocks": [
      {
        "type": "para",
        "text": "Le Niveau 1 ne consiste pas à attribuer un symptôme à une structure cérébrale précise. Il correspond à une approche de régulation générale lorsque le praticien souhaite agir en amont d’un territoire viscéral ou somatique plus spécifique."
      },
      {
        "type": "para",
        "text": "Dans la pratique ROP, ce niveau peut intégrer :"
      },
      {
        "type": "bullets",
        "items": [
          "les zones réflexes occipitales ;",
          "les repères neuro-méningés crânio-spinaux du modèle ROP ;",
          "le tronc cérébral ;",
          "le diencéphale et l’hypothalamus ;",
          "l’axe hypothalamo-hypophysaire ;",
          "les réseaux supraspinaux lorsque l’on cherche à comprendre la modulation sensorielle, autonome ou émotionnelle."
        ]
      },
      {
        "type": "para",
        "text": "Le lien avec la ROP viscérale apparaît surtout dans la capacité du SNC à intégrer des informations somatiques et viscérales et à modifier ensuite les commandes descendantes. Cette logique complète les mécanismes spinaux et autonomes étudiés dans les chapitres suivants. (Cf. chapitre 0 pour la séquence clinique générale et chapitre 4 pour le Niveau 2 neuro-végétatif.)"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 0",
        "text": "Fondements neuro-anatomiques de la ROP",
        "href": "/lecture/fondements-neuro-anatomiques?lang=fr"
      },
      {
        "type": "xref",
        "label": "Voir la référence dans le chapitre 4",
        "text": "Chapitre 4",
        "href": "/lecture/chapitre-4?lang=fr"
      },
      {
        "type": "para",
        "text": "Schéma de lecture : entrée somatique → moelle → tronc cérébral → réseaux corticaux et cortico-limbiques → commandes descendantes."
      }
    ]
  },
  {
    "id": "zones-reflexes-rop",
    "title": "9. Zones réflexes ROP du Niveau 1",
    "blocks": [
      {
        "type": "para",
        "text": "Les localisations suivantes appartiennent à la cartographie clinique de la ROP."
      },
      {
        "type": "sub",
        "text": "Zones occipitales"
      },
      {
        "type": "para",
        "text": "Les zones occipitales constituent, en ROP, une porte d’entrée clinique du Niveau 1, consacré à la régulation des centres supérieurs. Elles sont réparties en trois bandes horizontales : une zone dite parasympathique, située dans la partie supérieure de l’occiput ; une zone dite orthosympathique, située dans la région moyenne ; et une zone structurelle, plus basse, au voisinage de la jonction cranio-cervicale."
      },
      {
        "type": "para",
        "text": "Les termes « parasympathique » et « orthosympathique » ne signifient donc pas que ces régions appartiennent au Niveau 2 du protocole consacré au système nerveux autonome. Les trois bandes appartiennent au Niveau 1. Leur distinction permet au praticien d’organiser l’exploration palpatoire de l’occiput selon la texture, la densité, la sensibilité, la mobilité tissulaire ou la réactivité rencontrées."
      },
      {
        "type": "para",
        "text": "Sur le plan neuro-anatomique, la stimulation de l’occiput sollicite principalement des afférences cutanées, myofasciales, cervicales et proprioceptives, notamment issues des territoires cervicaux supérieurs. Ces informations somatosensorielles peuvent rejoindre la moelle, le tronc cérébral puis des réseaux supraspinaux impliqués dans la douleur, le tonus, la vigilance et certaines réponses autonomes. Cette lecture est cohérente avec le principe général retenu dans ce chapitre : une stimulation occipitale ne « commande » pas directement un centre autonome déterminé ; elle constitue une entrée sensorielle susceptible de participer à la modulation de réseaux centraux et de l’état général d’activation."
      },
      {
        "type": "para",
        "text": "Dans la séquence ROP, l’exploration occipitale est ainsi utilisée en amont des approches plus régionales ou viscérales, avec l’objectif clinique de préparer le système, réduire le “bruit général” et apprécier son état d’adaptation avant de poursuivre le protocole. Cela s’inscrit dans la logique générale du Niveau 1, défini dans le chapitre comme une approche de régulation générale précédant l’exploration d’un territoire somatique ou viscéral plus spécifique."
      },
      {
        "type": "sub",
        "text": "9.1. Tronc cérébral et ganglions de la base"
      },
      {
        "type": "bullets",
        "items": [
          "Tronc cérébral : face plantaire médiale de la phalange distale du gros orteil, de l’articulation interphalangienne à la jonction diaphyse-tête.",
          "Ganglions de la base : repère situé à proximité de celui attribué au mésencéphale, latéralement à la jonction diaphyse-tête médiale."
        ]
      },
      {
        "type": "sub",
        "text": "9.2. Réseaux limbiques et cortico-limbiques"
      },
      {
        "type": "bullets",
        "items": [
          "Amygdale, hippocampe, fornix, noyau accumbens et corps mamillaires : recherchés latéralement au repère des ganglions de la base, au niveau de la diaphyse de la phalange distale du gros orteil.",
          "Insula : latérale aux repères limbiques principaux dans la cartographie ROP.",
          "Bulbe olfactif : tête médiale plantaire de la phalange distale du gros orteil.",
          "Cortex cingulaire et corps calleux : bord médial plantaire de la phalange distale du gros orteil."
        ]
      },
      {
        "type": "sub",
        "text": "9.3. Diencéphale et hypophyse"
      },
      {
        "type": "bullets",
        "items": [
          "Diencéphale : dans la cartographie ROP, repère situé dans le même plan sagittal que le sinus droit, à la jonction de la faux du cerveau et de la tente du cervelet.",
          "Hypophyse : repère à la jonction diaphyse-base médiale, en avant du repère attribué à la synchondrose sphéno-basilaire."
        ]
      },
      {
        "type": "sub",
        "text": "9.4. Membranes, vascularisation et innervation"
      },
      {
        "type": "bullets",
        "items": [
          "Dure-mère, faux du cerveau, faux du cervelet et tente du cervelet : se reporter au livre Réflexothérapie occipito-podale et système neuro-méningé, Elsevier Masson, page 85, figure 7.8, et page 109, figure 8.12.",
          "Vascularisation : chaîne ganglionnaire cervicale et sinus carotidien dans la cartographie ROP.",
          "Innervation : nerfs trijumeau V, vague X et hypoglosse XII selon les repères cliniques développés dans les ouvrages précédents."
        ]
      },
      {
        "type": "sub",
        "text": "9.5. Cortex : pas de zone ROP directe, mais des voies ascendantes réelles"
      },
      {
        "type": "para",
        "text": "La cartographie actuelle de la ROP n’attribue pas de zone réflexe directe au cortex cérébral. Cela ne signifie pas que le cortex soit inaccessible aux informations provenant du pied : toute stimulation somatosensorielle peut rejoindre des réseaux corticaux par les voies ascendantes."
      },
      {
        "type": "para",
        "text": "Les techniques ROP associées au MRP, aux membranes intracrâniennes ou à la circulation liquidienne constituent un modèle clinique distinct."
      },
      {
        "type": "rop",
        "body": [
          "L’absence de zone réflexe corticale directe n’exclut pas l’accès du cortex aux informations somatosensorielles. Dans la méthode, les techniques neuro-méningées constituent un modèle clinique distinct. Pour le cheminement zone podale → afférences → moelle → centres supérieurs, cf. chapitre 0 « Fondements neuro-anatomiques de la ROP »."
        ]
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
    "id": "a-retenir",
    "title": "10. À retenir",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "Le SNC est le Niveau 1 du protocole ROP : il correspond à la régulation des centres supérieurs.",
          "Le tronc cérébral, l’hypothalamus, l’insula, le cortex cingulaire et les réseaux préfrontaux constituent des carrefours importants de l’intégration somatique, viscérale, autonome et contextuelle.",
          "Le chapitre 4 détaillera le système nerveux autonome ; ici, l’accent reste sur les centres qui reçoivent et modulent l’information.",
          "Les réseaux limbiques sont décrits ici comme structures du SNC, mais leur application clinique viscéro-émotionnelle appartient au Niveau 4.",
          "L’environnement neuro-méningé et le LCR doivent être distingués des concepts thérapeutiques ROP tels que MRP, axe crânio-sacré, compression du quatrième ventricule ou synchronisation SSB-S2.",
          "Le principe central est celui d’une modulation de réseaux : une entrée somatique peut rejoindre la moelle, le tronc cérébral et les centres supérieurs, puis influencer des commandes descendantes. Cette logique sert de base au chapitre 4 (SNA) puis aux chapitres d’organes, où elle est appliquée aux Niveaux 2 à 4."
        ]
      }
    ]
  },
  {
    "id": "annexe-reperes-fonctionnels",
    "title": "Annexe — Repères fonctionnels des principales structures étudiées",
    "blocks": [
      {
        "type": "table",
        "headers": [
          "Structure",
          "Fonction à retenir dans ce chapitre"
        ],
        "rows": [
          [
            "Tronc cérébral",
            "Relais entre moelle, viscères et centres supérieurs ; fonctions autonomes, vigilance et douleur."
          ],
          [
            "NTS",
            "Intégration d’afférences viscérales, notamment vagales."
          ],
          [
            "Formation réticulaire / locus coeruleus",
            "Éveil, vigilance, tonus, attention et réponse au stress."
          ],
          [
            "PAG",
            "Modulation de la douleur, réponses de défense et commandes autonomes descendantes."
          ],
          [
            "Thalamus",
            "Relais et sélection de nombreuses informations sensitives vers le cortex."
          ],
          [
            "Hypothalamus",
            "Homéostasie, contrôle autonome et neuroendocrinien."
          ],
          [
            "Hypophyse",
            "Relais hormonal majeur sous contrôle hypothalamique."
          ],
          [
            "Insula",
            "Intéroception et représentation de l’état interne du corps."
          ],
          [
            "Cortex cingulaire",
            "Attention, douleur, salience et adaptation de la réponse."
          ],
          [
            "Cortex préfrontal",
            "Évaluation, décision et régulation contextuelle."
          ],
          [
            "Amygdale",
            "Valeur émotionnelle et détection de la menace."
          ],
          [
            "Hippocampe",
            "Mémoire, apprentissage et contextualisation."
          ],
          [
            "Cervelet",
            "Coordination, posture, équilibre et précision des mouvements."
          ],
          [
            "Ganglions de la base",
            "Sélection et fluidité des mouvements ; circuits de motivation et d’apprentissage."
          ]
        ]
      }
    ]
  },
  {
    "id": "references-complementaires",
    "title": "Références complémentaires pour les ajouts neurophysiologiques",
    "blocks": [
      {
        "type": "para",
        "text": "Andresen MC, Doyle MW, Bailey TW, Jin YH. Differentiation of autonomic reflex control begins with cellular mechanisms at the first synapse within the nucleus tractus solitarius. Braz J Med Biol Res. 2004;37(4):549-558."
      },
      {
        "type": "para",
        "text": "de Rijk MM, Fernández Chadily S, Knops A, Schoutens Y, Verstegen AMJ. The periaqueductal gray and its role in the neural control of lower urinary tract function. Auton Neurosci. 2026;265:103413."
      },
      {
        "type": "para",
        "text": "Critchley HD, Harrison NA. Visceral influences on brain and behavior. Neuron. 2013;77(4):624-638."
      },
      {
        "type": "para",
        "text": "Strigo IA, Craig AD. Interoception, homeostatic emotions and sympathovagal balance. Philos Trans R Soc Lond B Biol Sci. 2016;371(1708):20160010."
      }
    ]
  }
] }

const reworkFigure = (slide: string, caption: string, orientation: 'landscape' | 'portrait' = 'landscape'): Block => ({ type: 'figure', src: `/chapter-3/rework-reflex/slide-${slide}.png`, caption, alt: caption, orientation })
const addAfter = (sectionId: string, match: (block: Block) => boolean, figures: Block[]) => { const section=chapter3ReworkFr.sections.find(s=>s.id===sectionId); if(!section)throw new Error(`Missing section ${sectionId}`); const index=section.blocks.findIndex(match); if(index<0)throw new Error(`Missing insertion point in ${sectionId}`); section.blocks.splice(index+1,0,...figures) }
addAfter('zones-reflexes-rop', b=>b.type==='bullets'&&b.items.some(i=>i.startsWith('Tronc cérébral')), [reworkFigure('02','Photo : tronc cérébral','portrait')])
addAfter('zones-reflexes-rop', b=>b.type==='bullets'&&b.items.some(i=>i.startsWith('Amygdale')), [reworkFigure('04','Photo : système limbique','portrait')])
addAfter('zones-reflexes-rop', b=>b.type==='bullets'&&b.items.some(i=>i.startsWith('Diencéphale')), [reworkFigure('06','Photo : diencéphale et hypophyse','portrait')])
addAfter('environnement-neuro-meninge', b=>b.type==='para'&&b.text.includes('compression du quatrième ventricule'), [reworkFigure('07','Photo : technique de compression du quatrième ventricule'), reworkFigure('08','Photo : technique de synchronisation SSB-S2','portrait')])

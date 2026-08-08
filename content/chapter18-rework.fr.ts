// Chapter 18 — private new-edition rework
// Source: public/chapter-18/Chapitre_18_Vessie_AI_Rework.docx

import type { Chapter } from './types'

export const chapter18ReworkFr: Chapter = {
  slug: 'chapter-18-rework',
  number: '18',
  title: 'Vessie',
  sections: [
  {
    "id": "presentation-pourquoi-la-vessie-est-un-organe-majeur-pour-la-rop",
    "title": "1. Présentation : pourquoi la vessie est un organe majeur pour la ROP",
    "blocks": [
      {
        "type": "para",
        "text": "Un organe clé de la ROP : stockage, continence, miction et neuromodulation pelvienne"
      },
      {
        "type": "para",
        "text": "La vessie est un réservoir musculaire dont la fonction paraît simple — stocker puis évacuer l’urine — mais dont le contrôle neurologique est remarquablement élaboré. La continence et la miction nécessitent une coordination entre le détrusor, l’urètre, le plancher pelvien, les voies autonomes, le nerf pudendal et plusieurs réseaux spinaux et supraspinaux."
      },
      {
        "type": "para",
        "text": "Les troubles urinaires fonctionnels sont fréquents : urgence, pollakiurie, incontinence par urgenturie, incontinence urinaire d’effort, difficultés de vidange et douleurs vésicales ont un retentissement important sur la qualité de vie. Ils doivent être distingués des infections, des maladies neurologiques, des obstructions et des lésions organiques."
      },
      {
        "type": "para",
        "text": "Pour la ROP, la vessie constitue un territoire particulièrement intéressant parce que les voies somatiques et autonomes convergent dans la région lombo-sacrée. De plus, la neuromodulation médicale montre qu’une stimulation périphérique, notamment du nerf tibial, peut modifier certains symptômes d’hyperactivité vésicale. Cette observation ne valide pas la stimulation manuelle ROP, mais fournit un modèle neurophysiologique utile pour comprendre la plausibilité d’une modulation somato-viscérale."
      },
      {
        "type": "lead",
        "label": "Principe de lecture",
        "text": "la ROP ne traite ni une infection urinaire, ni une tumeur, ni une lésion neurologique. Elle s’inscrit comme approche fonctionnelle complémentaire lorsque le diagnostic médical est connu ou lorsque les signes d’alarme ont été écartés."
      },
      {
        "type": "sub",
        "text": "1.1. La vessie selon les quatre niveaux du protocole ROP"
      },
      {
        "type": "table",
        "headers": [
          "Niveau",
          "Question clinique",
          "Repères pour la vessie"
        ],
        "rows": [
          [
            "1 — Centres supérieurs",
            "Comment le besoin est-il perçu et contrôlé ?",
            "Moelle, PAG, réseaux pontiques, insula, cingulaire, préfrontal"
          ],
          [
            "2 — Neuro-végétatif",
            "Comment stockage et vidange sont-ils commandés ?",
            "Sympathique T11-L2 env., splanchniques pelviens S2-S4, plexus hypogastrique inférieur"
          ],
          [
            "3 — Loco-régional",
            "Dans quel environnement fonctionne la vessie ?",
            "Vessie, urètre, péritoine, fascias, pubis, plancher pelvien, cavité pelvienne"
          ],
          [
            "4 — Intégration",
            "Comment le somatique et le contexte modulent-ils la fonction ?",
            "Pudendal S2-S4, plancher pelvien, convergences, habitudes mictionnelles, stress et émotions"
          ]
        ]
      }
    ]
  },
  {
    "id": "situation-et-anatomie-fonctionnelle",
    "title": "2. Situation et anatomie fonctionnelle",
    "blocks": [
      {
        "type": "para",
        "text": "La vessie est située dans la partie antérieure de la cavité pelvienne, en arrière de la symphyse pubienne. Vide, elle reste principalement pelvienne ; lorsqu’elle se remplit, son dôme se soulève et peut dépasser le bord supérieur du pubis."
      },
      {
        "type": "lead",
        "label": "Chez la femme",
        "text": "La vessie est en avant du vagin et sous l’utérus ; sa face supérieure est en partie recouverte par le péritoine."
      },
      {
        "type": "lead",
        "label": "Chez l’homme",
        "text": "Elle est située au-dessus de la prostate et en avant du rectum, dont elle est séparée par les plans fasciaux pelviens."
      },
      {
        "type": "sub",
        "text": "2.1. Paroi vésicale et détrusor"
      },
      {
        "type": "para",
        "text": "La paroi vésicale comprend un urothélium interne, une lamina propria et un épais muscle lisse, le détrusor. Les faisceaux musculaires du détrusor sont entrecroisés plutôt qu’organisés en trois couches parfaitement indépendantes."
      },
      {
        "type": "para",
        "text": "Pendant le remplissage, le détrusor doit rester compliant et maintenir une pression relativement basse. Pendant la miction, sa contraction doit être coordonnée avec la diminution des résistances urétrales."
      },
      {
        "type": "sub",
        "text": "2.2. Trigone, col vésical et urètre"
      },
      {
        "type": "para",
        "text": "Le trigone est la région triangulaire comprise entre les deux orifices urétéraux et l’orifice urétral interne. Il constitue une zone fonctionnellement importante pour la perception du remplissage, la coordination du col et le passage de l’urine vers l’urètre."
      },
      {
        "type": "para",
        "text": "Le col vésical et l’urètre proximal participent au mécanisme de continence. Leur fonctionnement dépend à la fois du muscle lisse, du soutien conjonctif, de la pression abdominale et de l’activité du sphincter strié."
      }
    ]
  },
  {
    "id": "soutien-loco-regional-de-la-vessie-niveau-3",
    "title": "3. Soutien loco-régional de la vessie — Niveau 3",
    "blocks": [
      {
        "type": "para",
        "text": "La vessie n’est pas suspendue par un ligament unique. Son maintien dépend d’un ensemble associant fascia endopelvien, pubis, urètre, plancher pelvien, ligaments pubovésicaux ou puboprostatiques et rapports avec les organes voisins."
      },
      {
        "type": "para",
        "text": "Le péritoine recouvre surtout la face supérieure de la vessie et accompagne ses variations de volume. L’ouraque, devenu ligament ombilical médian, constitue un reliquat embryonnaire reliant l’apex vésical à l’ombilic ; il ne doit pas être présenté comme le principal système de suspension de la vessie."
      },
      {
        "type": "para",
        "text": "Les artères ombilicales oblitérées forment les ligaments ombilicaux médiaux. Ces éléments sont des repères anatomiques utiles, mais leur tension ne peut pas être considérée comme une cause démontrée d’urgenturie ou d’incontinence."
      },
      {
        "type": "lead",
        "label": "Lecture ROP",
        "text": "le Niveau 3 peut intégrer le pubis, les structures de soutien, le plancher pelvien, le péritoine et les rapports de la vessie lorsque l’examen retrouve une cohérence régionale. Ces constatations ne constituent pas un diagnostic mécanique de la cause des symptômes urinaires."
      },
      {
        "type": "sub",
        "text": "3.1. Plancher pelvien"
      },
      {
        "type": "para",
        "text": "Le plancher pelvien contribue au soutien de la vessie et de l’urètre et participe à la continence. Il possède une activité tonique de repos et doit pouvoir augmenter son recrutement lors d’une toux ou d’un effort, mais aussi se relâcher de manière coordonnée pendant la miction."
      },
      {
        "type": "para",
        "text": "Une faiblesse du plancher pelvien peut favoriser l’incontinence d’effort ; à l’inverse, une hypertonie ou une mauvaise relaxation peut contribuer à des douleurs ou à des difficultés de vidange. La rééducation doit donc être adaptée au profil fonctionnel plutôt que limitée au seul renforcement."
      }
    ]
  },
  {
    "id": "vascularisation",
    "title": "4. Vascularisation",
    "blocks": [
      {
        "type": "para",
        "text": "La vascularisation artérielle de la vessie provient principalement de branches de l’artère iliaque interne. Le drainage veineux s’effectue par des plexus vésicaux et prévésicaux rejoignant principalement les veines iliaques internes puis la circulation cave."
      },
      {
        "type": "para",
        "text": "Le plexus veineux dorsal du pubis, souvent associé à l’éponyme de Santorini, ne doit pas être considéré comme appartenant au système porte. Les communications veineuses pelviennes sont nombreuses, mais le drainage principal de la vessie est systémique."
      }
    ]
  },
  {
    "id": "innervation-le-carrefour-neuro-anatomique-de-la-vessie",
    "title": "5. Innervation : le carrefour neuro-anatomique de la vessie",
    "blocks": [
      {
        "type": "para",
        "text": "Le contrôle de la vessie associe des voies autonomes, somatiques et sensitives. La proximité segmentaire de plusieurs de ces voies dans la région lombo-sacrée constitue l’un des éléments les plus intéressants pour la compréhension des ponts somato-viscéraux."
      },
      {
        "type": "sub",
        "text": "5.1. Voies autonomes"
      },
      {
        "type": "lead",
        "label": "Sympathique",
        "text": "Les neurones préganglionnaires proviennent principalement des segments thoraco-lombaires inférieurs, approximativement T11-L2. Les fibres rejoignent les plexus hypogastriques et participent surtout à la phase de stockage."
      },
      {
        "type": "lead",
        "label": "Parasympathique pelvien",
        "text": "Les nerfs splanchniques pelviens proviennent de S2-S4 et rejoignent le plexus hypogastrique inférieur puis les plexus intramuraux de la vessie. Leur activation joue un rôle majeur dans la contraction du détrusor pendant la miction."
      },
      {
        "type": "para",
        "text": "Les voies sympathiques et parasympathiques ne doivent pas être décrites comme deux interrupteurs simplement antagonistes : la fonction normale dépend d’une coordination temporelle entre stockage, perception du besoin, continence et vidange."
      },
      {
        "type": "sub",
        "text": "5.2. Voie somatique : nerf pudendal S2-S4"
      },
      {
        "type": "para",
        "text": "Le nerf pudendal est une voie somatique distincte des nerfs splanchniques pelviens. Il participe à l’innervation du sphincter urétral externe et des muscles du périnée et intervient dans la continence volontaire."
      },
      {
        "type": "lead",
        "label": "Point clé",
        "text": "S2-S4 est à la fois un territoire important pour les voies parasympathiques pelviennes et pour le nerf pudendal, mais il s’agit de voies anatomiquement distinctes. Cette proximité segmentaire favorise une intégration régionale sans constituer une connexion directe entre un nerf somatique et la vessie."
      },
      {
        "type": "sub",
        "text": "5.3. Afférences vésicales"
      },
      {
        "type": "para",
        "text": "Les récepteurs de la paroi vésicale transmettent des informations sur le remplissage, la tension et certaines situations nociceptives. Ces afférences gagnent principalement les réseaux lombo-sacrés par les voies pelviennes et hypogastriques, puis les centres spinaux et supraspinaux."
      }
    ]
  },
  {
    "id": "controle-spinal-et-supraspinal-de-la-miction-niveau-1",
    "title": "6. Contrôle spinal et supraspinal de la miction — Niveau 1",
    "blocks": [
      {
        "type": "para",
        "text": "La sensation du besoin et la décision d’uriner ne dépendent pas d’un gyrus cérébral unique. Le contrôle de la miction repose sur un réseau distribué."
      },
      {
        "type": "bullets",
        "items": [
          "Moelle lombo-sacrée : intégration des réflexes vésico-sphinctériens.",
          "Substance grise périaqueducale (PAG) : intégration des informations de remplissage et relais vers les réseaux pontiques.",
          "Région pontique de la miction : coordination entre contraction du détrusor et ouverture de la voie de sortie.",
          "Insula et cortex cingulaire : perception de l’état interne, urgence, attention portée au besoin.",
          "Réseaux préfrontaux : évaluation du contexte social et décision de différer ou d’autoriser la miction."
        ]
      },
      {
        "type": "para",
        "text": "Le chapitre 3 développe ces réseaux centraux. Ici, leur intérêt est de montrer que la vessie est contrôlée par une boucle ascendante et descendante, et non par un simple réflexe local."
      }
    ]
  },
  {
    "id": "physiologie-le-cycle-remplissage-besoin-miction",
    "title": "7. Physiologie : le cycle remplissage — besoin — miction",
    "blocks": [
      {
        "type": "sub",
        "text": "7.1. Remplissage et continence"
      },
      {
        "type": "para",
        "text": "Pendant le remplissage, la vessie augmente progressivement de volume tout en maintenant une pression relativement basse. Le détrusor reste relâché tandis que les résistances urétrales et l’activité du sphincter externe maintiennent la continence."
      },
      {
        "type": "para",
        "text": "Cette phase fait intervenir principalement les mécanismes de stockage sympathiques et somatiques, tandis que l’activité parasympathique mictionnelle reste inhibée."
      },
      {
        "type": "sub",
        "text": "7.2. Perception du besoin"
      },
      {
        "type": "para",
        "text": "À mesure que la vessie se remplit, les afférences vésicales augmentent. La sensation du besoin dépend du volume, mais aussi de la vitesse de remplissage, de l’attention, du contexte, des habitudes mictionnelles et de la sensibilité individuelle."
      },
      {
        "type": "para",
        "text": "Il n’existe donc pas un volume unique définissant le premier besoin ou l’urgence chez tous les individus."
      },
      {
        "type": "sub",
        "text": "7.3. Miction"
      },
      {
        "type": "para",
        "text": "Lorsque le contexte permet la miction, les commandes descendantes favorisent l’activation parasympathique, la contraction coordonnée du détrusor et la diminution des résistances urétrales. Le sphincter strié se relâche."
      },
      {
        "type": "para",
        "text": "Une miction normale ne nécessite généralement pas de poussée abdominale importante. Le besoin habituel de pousser pour uriner peut au contraire signaler un trouble de vidange, une obstruction ou une mauvaise coordination du plancher pelvien."
      }
    ]
  },
  {
    "id": "pourquoi-une-entree-somatique-peripherique-peut-elle-influencer-la-vessie",
    "title": "8. Pourquoi une entrée somatique périphérique peut-elle influencer la vessie ?",
    "blocks": [
      {
        "type": "para",
        "text": "La vessie constitue un exemple particulièrement documenté de neuromodulation somato-viscérale. La stimulation électrique ou percutanée du nerf tibial est utilisée en médecine pour certains patients présentant une hyperactivité vésicale, et la neuromodulation sacrée est également une option thérapeutique reconnue."
      },
      {
        "type": "para",
        "text": "Le nerf tibial contient des fibres issues de plusieurs racines lombo-sacrées, dont des composantes sacrées proches des segments impliqués dans les fonctions pelviennes. La stimulation périphérique peut modifier l’excitabilité de réseaux spinaux et supraspinaux qui participent au contrôle vésical."
      },
      {
        "type": "lead",
        "label": "Portée pour la ROP",
        "text": "ces données montrent qu’une entrée somatique périphérique peut moduler des circuits vésicaux. Elles ne démontrent pas qu’une pression manuelle sur une zone podale produit le même effet qu’une stimulation électrique du nerf tibial. La neuromodulation médicale constitue ici un modèle de plausibilité, non une preuve du mécanisme ROP."
      }
    ]
  },
  {
    "id": "troubles-fonctionnels-de-la-vessie",
    "title": "9. Troubles fonctionnels de la vessie",
    "blocks": [
      {
        "type": "sub",
        "text": "9.1. Hyperactivité vésicale, urgence et urgenturie"
      },
      {
        "type": "para",
        "text": "Le syndrome d’hyperactivité vésicale est défini par une urgence urinaire, généralement associée à une augmentation de la fréquence diurne et/ou à une nycturie, avec ou sans incontinence par urgenturie, en l’absence d’infection urinaire ou d’autre pathologie évidente expliquant les symptômes."
      },
      {
        "type": "para",
        "text": "Il s’agit d’un diagnostic clinique. Une contraction involontaire du détrusor peut être observée en urodynamique, mais elle n’est ni nécessaire ni suffisante pour définir le syndrome."
      },
      {
        "type": "para",
        "text": "La prise en charge repose notamment sur l’éducation, le calendrier mictionnel, le bladder training, la prise en charge des facteurs aggravants et, selon les cas, des traitements médicamenteux ou de neuromodulation."
      },
      {
        "type": "sub",
        "text": "9.2. Incontinence urinaire d’effort"
      },
      {
        "type": "para",
        "text": "L’incontinence urinaire d’effort correspond à une fuite involontaire lors d’une augmentation de pression abdominale : toux, éternuement, rire, port de charge, course ou autre activité physique."
      },
      {
        "type": "para",
        "text": "Elle dépend principalement de l’efficacité du mécanisme sphinctérien et du soutien urétral et pelvien. Grossesse, accouchement, prolapsus, ménopause, chirurgie pelvienne et autres facteurs peuvent contribuer à son apparition."
      },
      {
        "type": "para",
        "text": "Dans l’approche ROP, le pubis, le plancher pelvien, les fascias, l’urètre et les structures voisines peuvent être intégrés à la lecture loco-régionale ; une « fixation » isolée ne doit cependant pas être présentée comme la cause démontrée de l’incontinence."
      },
      {
        "type": "sub",
        "text": "9.3. Troubles de vidange et rétention"
      },
      {
        "type": "para",
        "text": "Les difficultés à initier la miction, un jet faible, la sensation de mauvaise vidange ou la rétention peuvent être liées à une obstruction, une atteinte neurologique, des médicaments, une hypocontractilité du détrusor ou une mauvaise relaxation du plancher pelvien."
      },
      {
        "type": "para",
        "text": "Ces symptômes nécessitent une évaluation médicale lorsqu’ils sont nouveaux, persistants ou associés à un résidu post-mictionnel important."
      },
      {
        "type": "sub",
        "text": "9.4. Troubles neurogènes"
      },
      {
        "type": "para",
        "text": "Les lésions médullaires, la sclérose en plaques, le spina bifida, certaines neuropathies et d’autres maladies neurologiques peuvent perturber le stockage ou la vidange de façons très différentes. Il n’existe donc pas un tableau unique de « vessie neurologique »."
      }
    ]
  },
  {
    "id": "cystite-infectieuse-cystalgie-et-syndrome-douloureux-vesical",
    "title": "10. Cystite infectieuse, cystalgie et syndrome douloureux vésical",
    "blocks": [
      {
        "type": "sub",
        "text": "10.1. Infection urinaire"
      },
      {
        "type": "para",
        "text": "La cystite aiguë est le plus souvent une infection bactérienne des voies urinaires basses. Elle peut associer brûlures mictionnelles, fréquence accrue, urgence, douleur sus-pubienne et parfois hématurie."
      },
      {
        "type": "para",
        "text": "Le diagnostic et, lorsqu’il est nécessaire, le traitement antibiotique relèvent de la prise en charge médicale. La ROP ne traite pas l’infection."
      },
      {
        "type": "sub",
        "text": "10.2. Cystalgie et syndrome douloureux vésical"
      },
      {
        "type": "para",
        "text": "Des douleurs, pressions ou inconforts attribués à la vessie peuvent persister en l’absence d’infection démontrée. Le syndrome douloureux vésical / cystite interstitielle est un diagnostic clinique nécessitant d’exclure d’autres causes urologiques, gynécologiques ou pelviennes."
      },
      {
        "type": "para",
        "text": "Une hypertonie du plancher pelvien, une hypersensibilité viscérale et des facteurs neurofonctionnels peuvent participer à certains tableaux. Le stress peut moduler l’intensité des symptômes sans constituer une cause unique."
      }
    ]
  },
  {
    "id": "diagnostic-dexclusion-et-signes-dalarme",
    "title": "11. Diagnostic d’exclusion et signes d’alarme",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "Hématurie visible ou persistante.",
          "Fièvre, frissons ou douleur lombaire évoquant une infection haute.",
          "Rétention aiguë ou impossibilité d’uriner.",
          "Douleur pelvienne ou abdominale importante et inhabituelle.",
          "Infections urinaires récidivantes ou résistantes.",
          "Difficulté de vidange nouvelle ou aggravée.",
          "Déficit neurologique, anesthésie périnéale ou troubles sphinctériens d’apparition récente.",
          "Perte de poids inexpliquée, altération de l’état général ou suspicion de tumeur.",
          "Tout symptôme dont le mécanisme reste incertain malgré l’évaluation fonctionnelle."
        ]
      }
    ]
  },
  {
    "id": "application-en-rop-la-vessie-selon-les-quatre-niveaux",
    "title": "12. Application en ROP : la vessie selon les quatre niveaux",
    "blocks": [
      {
        "type": "para",
        "text": "La vessie est un bon exemple de la logique du protocole : aucun niveau ne suffit à lui seul. Le choix des cibles dépend du type de symptôme, du contexte médical, des tests et de la réponse du patient."
      },
      {
        "type": "sub",
        "text": "12.1. Niveau 1 — Régulation des centres supérieurs"
      },
      {
        "type": "bullets",
        "items": [
          "Zones occipitales et repères centraux de la cartographie ROP selon le contexte.",
          "Prise en compte du sommeil, du stress, de l’attention portée au besoin et de la capacité à différer la miction.",
          "Lecture supraspinale fondée sur l’intégration des afférences vésicales, sans attribuer une zone podale à une aire corticale précise."
        ]
      },
      {
        "type": "sub",
        "text": "12.2. Niveau 2 — Régulation neuro-végétative"
      },
      {
        "type": "bullets",
        "items": [
          "Parasympathique pelvien S2-S4.",
          "Voies sympathiques thoraco-lombaires inférieures.",
          "Plexus hypogastrique inférieur.",
          "Équilibre stockage-vidange plutôt que recherche d’une stimulation isolée du sympathique ou du parasympathique."
        ]
      },
      {
        "type": "sub",
        "text": "12.3. Niveau 3 — Régulation viscérale loco-régionale"
      },
      {
        "type": "bullets",
        "items": [
          "Vessie et urètre.",
          "Cavité pelvienne et péritoine supérieur de la vessie.",
          "Pubis, fascia endopelvien et structures de soutien.",
          "Plancher pelvien et rapports avec les organes voisins."
        ]
      },
      {
        "type": "sub",
        "text": "12.4. Niveau 4 — Intégration viscéro-somatique et viscéro-émotionnelle"
      },
      {
        "type": "bullets",
        "items": [
          "Nerf pudendal S2-S4 et contrôle du sphincter strié.",
          "Plancher pelvien : faiblesse, hypertonie ou défaut de coordination.",
          "Territoires lombo-sacrés associés aux afférences vésicales.",
          "Habitudes mictionnelles, anticipation, urgence conditionnée, anxiété et contexte social."
        ]
      },
      {
        "type": "para",
        "text": "Tous les niveaux ne sont pas travaillés systématiquement. Le protocole doit rester individualisé et réévalué à partir d’un symptôme mesurable : fréquence, urgence, fuites, douleur, nycturie ou qualité de vidange."
      }
    ]
  },
  {
    "id": "relations-viscero-somatiques",
    "title": "13. Relations viscéro-somatiques",
    "blocks": [
      {
        "type": "para",
        "text": "La vessie possède une double représentation spinale fonctionnelle : des afférences thoraco-lombaires accompagnent notamment les voies hypogastriques, tandis que d’autres afférences rejoignent les segments sacrés par les voies pelviennes."
      },
      {
        "type": "para",
        "text": "Une plage approximative T11-L2 et S2-S4 est donc plus pertinente qu’une correspondance vertébrale unique. Les convergences avec les territoires somatiques peuvent contribuer à des douleurs projetées ou à des modifications du tonus musculaire dans le bas-ventre, le bassin, le périnée ou la région lombo-sacrée."
      },
      {
        "type": "para",
        "text": "Ces manifestations restent non spécifiques. Elles ne permettent pas, à elles seules, de diagnostiquer un trouble vésical."
      }
    ]
  },
  {
    "id": "relations-viscero-emotionnelles",
    "title": "14. Relations viscéro-émotionnelles",
    "blocks": [
      {
        "type": "para",
        "text": "La vessie entretient des relations étroites avec les réseaux cérébraux impliqués dans la perception du besoin, l’attention, les émotions et le contrôle volontaire de la miction. Les signaux provenant du remplissage vésical sont intégrés à différents niveaux du système nerveux, depuis la moelle et le tronc cérébral jusqu’aux réseaux corticaux et cortico-limbiques."
      },
      {
        "type": "para",
        "text": "Le stress, l’anxiété ou l’anticipation d’une difficulté à se retenir peuvent modifier la perception du besoin d’uriner et contribuer, chez certaines personnes, à l’urgence, à la pollakiurie ou à l’aggravation d’une hyperactivité vésicale. Ces influences sont bidirectionnelles : des symptômes urinaires répétés peuvent eux-mêmes devenir une source d’anxiété, d’anticipation et de limitation sociale."
      },
      {
        "type": "para",
        "text": "L’apprentissage de la continence pendant l’enfance participe à la construction des habitudes mictionnelles. Certains comportements, comme différer régulièrement la miction ou uriner systématiquement « par précaution », peuvent modifier progressivement la relation aux sensations vésicales. Cela ne permet cependant pas de définir une personnalité particulière ni d’établir un lien causal entre une éducation stricte à la propreté et des troubles urinaires à l’âge adulte."
      },
      {
        "type": "para",
        "text": "Les émotions ne définissent donc pas une « personnalité vessie ». Elles constituent l’un des facteurs susceptibles de moduler les réseaux qui contrôlent la continence, l’urgence et la perception viscérale. Dans une approche ROP, cette dimension peut être explorée lorsqu’elle paraît cliniquement pertinente, sans attribuer automatiquement les symptômes urinaires à une origine psychologique et sans se substituer au diagnostic médical."
      }
    ]
  },
  {
    "id": "conseils-et-reeducation-fonctionnelle",
    "title": "15. Conseils et rééducation fonctionnelle",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "Tenir un calendrier mictionnel pendant quelques jours pour objectiver fréquence, volumes approximatifs, urgence, fuites et nycturie.",
          "Adapter l’hydratation aux besoins individuels ; éviter aussi bien la déshydratation que les apports excessifs.",
          "Réduire, lorsqu’ils aggravent les symptômes, la caféine, l’alcool et certaines boissons irritantes.",
          "Prendre en charge la constipation, qui peut majorer les symptômes urinaires.",
          "Pour l’hyperactivité vésicale, utiliser si indiqué un bladder training progressif plutôt que des mictions répétées « par précaution ».",
          "Pour l’incontinence d’effort, privilégier un entraînement du plancher pelvien individualisé, idéalement guidé par un professionnel formé.",
          "En cas de plancher pelvien douloureux ou hypertonique, le traitement peut nécessiter relaxation et coordination plutôt qu’un renforcement systématique.",
          "Ne pas utiliser l’arrêt répété du jet urinaire comme exercice de renforcement : les exercices du plancher pelvien ne doivent pas être réalisés pendant la miction."
        ]
      }
    ]
  },
  {
    "id": "zones-reflexes-podales",
    "title": "16. Zones réflexes podales",
    "blocks": [
      {
        "type": "para",
        "text": "Les localisations suivantes appartiennent à la cartographie clinique de la ROP. Elles ne constituent pas une projection anatomique directe de la vessie, de ses ligaments ou de ses voies nerveuses sur le pied."
      },
      {
        "type": "sub",
        "text": "16.1. Niveau 2 — Voies autonomes pelviennes"
      },
      {
        "type": "bullets",
        "items": [
          "Parasympathique pelvien S2-S4 selon la cartographie sacrée ROP.",
          "Voies sympathiques thoraco-lombaires inférieures et chaînes sympathiques selon les repères du chapitre 4.",
          "Plexus hypogastrique inférieur selon les zones pelviennes de la cartographie ROP."
        ]
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-02.png",
        "caption": "Photo : chaîne ganglionnaire latéro-vertébrale thoracique",
        "alt": "Repère podal de la chaîne ganglionnaire latéro-vertébrale thoracique",
        "orientation": "landscape"
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-04.png",
        "caption": "Photo : chaîne ganglionnaire lombaire et piliers du diaphragme",
        "alt": "Repère podal de la chaîne ganglionnaire lombaire et des piliers du diaphragme",
        "orientation": "landscape"
      },
      {
        "type": "sub",
        "text": "16.2. Niveau 3 — Vessie et environnement pelvien"
      },
      {
        "type": "bullets",
        "items": [
          "Cavité pelvienne et périnée.",
          "Vessie, trigone et région cervico-urétrale selon les figures du chapitre.",
          "Pubis, plancher pelvien et repères loco-régionaux utilisés dans la méthode."
        ]
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-06.png",
        "caption": "Photo : grand foramen ischiatique, muscle piriforme, plexus sacré et nerf pudendal",
        "alt": "Repère podal du grand foramen ischiatique, du muscle piriforme, du plexus sacré et du nerf pudendal",
        "orientation": "landscape"
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-08.png",
        "caption": "Photo : petit foramen ischiatique, muscles obturateurs et jumeaux",
        "alt": "Repère podal du petit foramen ischiatique et des muscles obturateurs et jumeaux",
        "orientation": "landscape"
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-11.png",
        "caption": "Photo : fosse obturée et muscles obturateurs",
        "alt": "Repère podal de la fosse obturée et des muscles obturateurs",
        "orientation": "portrait"
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-13.png",
        "caption": "Photo : ligaments sacro-tubéral et sacro-épineux",
        "alt": "Repère podal des ligaments sacro-tubéral et sacro-épineux",
        "orientation": "landscape"
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-15.png",
        "caption": "Photo : ligament pubo-vésical",
        "alt": "Repère podal du ligament pubo-vésical",
        "orientation": "landscape"
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-17.png",
        "caption": "Photo : trigone de la vessie et plexus hypogastrique",
        "alt": "Repère podal du trigone de la vessie et du plexus hypogastrique",
        "orientation": "landscape"
      },
      {
        "type": "figure",
        "src": "/chapter-18/cartographie/figure-18-19.png",
        "caption": "Photo : noyau fibreux central du périnée et fente uro-génitale",
        "alt": "Repère podal du noyau fibreux central du périnée et de la fente uro-génitale",
        "orientation": "landscape"
      },
      {
        "type": "sub",
        "text": "16.3. Niveau 4 — Intégration somatique"
      },
      {
        "type": "bullets",
        "items": [
          "Nerf pudendal et territoires S2-S4.",
          "Sacrum, coccyx et muscles du plancher pelvien selon les tests cliniques.",
          "Relations lombo-sacrées uniquement lorsqu’elles sont cohérentes avec le tableau fonctionnel."
        ]
      },
      {
        "type": "para",
        "text": "Une douleur, une sensibilité ou une modification texturale d’une zone réflexe constitue un élément de la lecture ROP et non un test diagnostique d’hyperactivité vésicale, d’incontinence, de cystite ou de maladie neurologique."
      }
    ]
  },
  {
    "id": "a-retenir",
    "title": "17. À retenir",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "La vessie est contrôlée par une boucle intégrée associant moelle, tronc cérébral, centres supraspinaux, voies autonomes et nerf pudendal.",
          "Le stockage repose sur une vessie compliant et un mécanisme de continence efficace ; la miction exige une coordination entre contraction du détrusor et ouverture de la voie urétrale.",
          "Le pudendal S2-S4 est somatique ; les nerfs splanchniques pelviens S2-S4 sont parasympathiques : ils sont proches segmentairement mais anatomiquement distincts.",
          "La neuromodulation tibiale montre qu’une entrée somatique périphérique peut modifier les circuits vésicaux ; elle ne prouve pas l’équivalence avec une stimulation manuelle ROP.",
          "Hyperactivité vésicale, incontinence d’effort, troubles de vidange, infection urinaire et syndrome douloureux vésical sont des entités différentes.",
          "La ROP vise l’accompagnement fonctionnel et doit toujours rester compatible avec le diagnostic médical et les signes de sécurité.",
          "Pour la vessie, les quatre niveaux du protocole peuvent être utilisés de manière particulièrement cohérente : centres supérieurs, régulation autonome, environnement pelvien et intégration somato-émotionnelle."
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
          "Fowler CJ, Griffiths D, de Groat WC. The neural control of micturition. Nat Rev Neurosci. 2008;9(6):453-466. doi:10.1038/nrn2401.",
          "Griffiths D. Neural control of micturition in humans: a working model. Nat Rev Urol. 2015;12(12):695-705. doi:10.1038/nrurol.2015.266.",
          "de Groat WC, Vizzard MA, Araki I, Roppolo JR. Spinal interneurons and preganglionic neurons in sacral autonomic reflex pathways. Prog Brain Res. 1996;107:97-111. doi:10.1016/S0079-6123(08)61860-9.",
          "de Rijk MM, Fernández Chadily S, Knops A, Schoutens Y, Verstegen AMJ. The periaqueductal gray and its role in the neural control of lower urinary tract function. Auton Neurosci. 2026;265:103413.",
          "Li X, Li X, Liao L. Mechanism of action of tibial nerve stimulation in the treatment of lower urinary tract dysfunction. Neuromodulation. 2024;27(2):256-266. doi:10.1016/j.neurom.2023.03.017.",
          "Cameron AP, Chung DE, Dielubanza EJ, et al. The AUA/SUFU Guideline on the Diagnosis and Treatment of Idiopathic Overactive Bladder. J Urol. 2024;212(1):11-20. doi:10.1097/JU.0000000000003985.",
          "Clemens JQ, Erickson DR, Varela NP, Lai HH. Diagnosis and Treatment of Interstitial Cystitis/Bladder Pain Syndrome. J Urol. 2022;208(1):34-42. doi:10.1097/JU.0000000000002756.",
          "Haylen BT, de Ridder D, Freeman RM, et al. An International Urogynecological Association (IUGA)/International Continence Society joint report on the terminology for female pelvic floor dysfunction. Neurourol Urodyn. 2010;29(1):4-20. doi:10.1002/nau.20798.",
          "National Institute of Diabetes and Digestive and Kidney Diseases. Treatments for Bladder Control Problems (Urinary Incontinence). National Institutes of Health; reviewed 2021."
        ]
      }
    ]
  }
]
}

// Chapter 14 — private new-edition rework
// Source: public/chapter-14/Chapitre_14_Intestin_grele_AI_Rework.docx

import type { Chapter } from './types'

export const chapter14ReworkFr: Chapter = {
  slug: 'chapter-14-rework',
  number: '14',
  title: 'Intestin grêle',
  sections: [
  {
    "id": "presentation",
    "title": "1. Présentation",
    "blocks": [
      {
        "type": "para",
        "text": "Jéjunum-iléum : anatomie, physiologie, système nerveux entérique et approche en ROP"
      },
      {
        "type": "para",
        "text": "L’intestin grêle, ou petit intestin, s’étend du pylore à la jonction iléo-cæcale. Il comprend le duodénum, traité dans un chapitre séparé, puis le jéjunum et l’iléum, qui occupent une grande partie de la cavité abdominale."
      },
      {
        "type": "para",
        "text": "Le jéjunum-iléum joue un rôle central dans la digestion et surtout dans l’absorption des nutriments. Il constitue aussi une interface majeure entre le contenu digestif, la muqueuse, le système immunitaire, le microbiote et le système nerveux entérique."
      },
      {
        "type": "para",
        "text": "Ce chapitre est particulièrement intéressant pour la ROP parce qu’il permet de relier les quatre niveaux du protocole : centres supérieurs et axe intestin-cerveau ; régulation neuro-végétative ; environnement viscéral loco-régional ; intégration viscéro-somatique et viscéro-émotionnelle."
      },
      {
        "type": "para",
        "text": "L’intestin grêle ne sera donc pas présenté comme un simple tube digestif : c’est un organe mobile, innervé, immunologiquement actif et doté de son propre réseau nerveux intrinsèque."
      },
      {
        "type": "sub",
        "text": "1.1. Lecture rapide en quatre niveaux"
      },
      {
        "type": "table",
        "headers": [
          "Niveau",
          "Lecture de l’intestin grêle",
          "Repères principaux"
        ],
        "rows": [
          [
            "1 — Centres supérieurs",
            "Intégration des signaux digestifs et du contexte",
            "Axe intestin-cerveau, interoception, réseaux supraspinaux"
          ],
          [
            "2 — Neuro-végétatif",
            "Dialogue entre SNC, SNA et SNE",
            "Nerf vague, sympathique thoracique, plexus mésentérique supérieur"
          ],
          [
            "3 — Viscéral loco-régional",
            "Organe et environnement anatomique",
            "Jéjunum-iléum, péritoine, mésentère, racine du mésentère"
          ],
          [
            "4 — Intégration",
            "Relations somatiques et émotionnelles",
            "Convergences thoraco-lombaires, territoires somatiques, réseaux cortico-limbiques"
          ]
        ]
      }
    ]
  },
  {
    "id": "situation",
    "title": "2. Situation",
    "blocks": [
      {
        "type": "para",
        "text": "Le jéjunum-iléum occupe la majeure partie de l’espace situé à l’intérieur du cadre colique. Le jéjunum se situe plus volontiers dans la partie supérieure gauche de l’abdomen, tandis que l’iléum occupe plus fréquemment la partie inférieure droite et le pelvis. Cette répartition est une tendance anatomique, et non une frontière fixe."
      }
    ]
  },
  {
    "id": "anatomie",
    "title": "3. Anatomie",
    "blocks": [
      {
        "type": "sub",
        "text": "3.1. Jéjunum et iléum"
      },
      {
        "type": "para",
        "text": "Le jéjunum et l’iléum forment de nombreuses anses mobiles, généralement disposées en U. Il n’existe pas de frontière extérieure nette entre les deux segments : la transition est progressive."
      },
      {
        "type": "bullets",
        "items": [
          "Le jéjunum possède en général une paroi plus épaisse, un calibre plus important et des plis circulaires plus développés.",
          "L’iléum présente une paroi plus fine, davantage de tissu lymphoïde organisé, notamment les plaques de Peyer, et se termine à la jonction iléo-cæcale.",
          "Les deux segments sont intrapéritonéaux et suspendus à la paroi postérieure par le mésentère."
        ]
      },
      {
        "type": "sub",
        "text": "3.2. Mésentère"
      },
      {
        "type": "para",
        "text": "Le mésentère est un double feuillet péritonéal qui relie le jéjunum-iléum à la paroi abdominale postérieure. Il accompagne les anses intestinales et véhicule leurs vaisseaux, leurs lymphatiques et leurs nerfs."
      },
      {
        "type": "para",
        "text": "Sa forme en éventail permet à un intestin très long et mobile d’être attaché à une racine relativement courte."
      },
      {
        "type": "sub",
        "text": "3.3. Racine du mésentère"
      },
      {
        "type": "para",
        "text": "La racine du mésentère constitue la ligne d’attache postérieure du mésentère. Elle s’étend obliquement de la région de la jonction duodéno-jéjunale vers la fosse iliaque droite et la jonction iléo-cæcale."
      },
      {
        "type": "para",
        "text": "Cette racine est importante en ROP parce qu’elle réunit, sur un territoire anatomique réduit, des rapports péritonéaux, vasculaires, lymphatiques et nerveux."
      },
      {
        "type": "para",
        "text": "Le muscle suspenseur du duodénum, ou muscle de Treitz, participe au maintien de l’angle duodéno-jéjunal. Il ne faut cependant pas assimiler une modification palpatoire du mésentère à un syndrome vasculaire ou compressif démontré."
      },
      {
        "type": "lead",
        "label": "Repère ROP",
        "text": "la racine du mésentère constitue une cible loco-régionale du Niveau 3. La sollicitation de sa zone réflexe appartient au modèle clinique ROP ; elle ne démontre pas une modification mécanique directe du mésentère réel."
      }
    ]
  },
  {
    "id": "rapports",
    "title": "4. Rapports",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "Ventralement : grand omentum et paroi abdominale antérieure.",
          "Dorsalement : paroi abdominale postérieure, gros vaisseaux et plusieurs structures rétro-péritonéales.",
          "Céphaliquement : mésocôlon transverse.",
          "Caudalement : région pelvienne, notamment vessie et organes génitaux selon le niveau des anses.",
          "Latéralement : côlon ascendant à droite et côlon descendant à gauche."
        ]
      },
      {
        "type": "para",
        "text": "Ces rapports expliquent pourquoi une plainte digestive peut s’accompagner de tensions ou de sensations provenant d’autres structures abdominales, sans que ces associations soient spécifiques d’une maladie de l’intestin grêle."
      }
    ]
  },
  {
    "id": "vascularisation-et-drainage-lymphatique",
    "title": "5. Vascularisation et drainage lymphatique",
    "blocks": [
      {
        "type": "sub",
        "text": "5.1. Artère mésentérique supérieure"
      },
      {
        "type": "para",
        "text": "L’artère mésentérique supérieure naît de l’aorte abdominale, habituellement au niveau de L1, sous le tronc cœliaque. Ses branches jéjunales et iléales cheminent dans le mésentère, où elles forment des arcades artérielles puis des vasa recta."
      },
      {
        "type": "para",
        "text": "Elle vascularise l’intestin grêle distal au duodénum proximal, ainsi qu’une grande partie du côlon droit et du côlon transverse proximal."
      },
      {
        "type": "sub",
        "text": "5.2. Drainage veineux"
      },
      {
        "type": "para",
        "text": "La veine mésentérique supérieure accompagne l’artère et rejoint le système porte. Le sang veineux chargé des nutriments absorbés est ainsi dirigé vers le foie."
      },
      {
        "type": "sub",
        "text": "5.3. Drainage lymphatique"
      },
      {
        "type": "para",
        "text": "Les capillaires lymphatiques des villosités, ou chylifères, prennent en charge principalement les lipides alimentaires à longue chaîne sous forme de chylomicrons ainsi que les vitamines liposolubles. Ils rejoignent les vaisseaux lymphatiques mésentériques puis le canal thoracique avant le retour dans la circulation veineuse."
      }
    ]
  },
  {
    "id": "innervation-du-sna-au-systeme-nerveux-enterique",
    "title": "6. Innervation : du SNA au système nerveux entérique",
    "blocks": [
      {
        "type": "para",
        "text": "L’intestin grêle possède une innervation extrinsèque, issue du système nerveux autonome, et une innervation intrinsèque, constituée par le système nerveux entérique. Ces deux niveaux dialoguent en permanence."
      },
      {
        "type": "sub",
        "text": "6.1. Innervation autonome extrinsèque"
      },
      {
        "type": "para",
        "text": "Nerf vague. Il apporte une grande partie de l’innervation parasympathique de l’intestin grêle. Ses fibres efférentes modulent notamment la motricité et les sécrétions ; ses nombreuses fibres afférentes renseignent le tronc cérébral sur l’état des viscères."
      },
      {
        "type": "para",
        "text": "Sympathique. Les fibres destinées au jéjunum-iléum proviennent surtout des segments thoraciques inférieurs et empruntent les nerfs splanchniques puis les plexus prévertébraux, notamment le plexus mésentérique supérieur."
      },
      {
        "type": "para",
        "text": "Les afférences viscérales spinales peuvent accompagner ces voies sympathiques vers les ganglions spinaux et la corne dorsale. Il est donc préférable de distinguer les commandes autonomes efférentes des informations viscérales afférentes qui cheminent parfois avec les mêmes nerfs."
      },
      {
        "type": "sub",
        "text": "6.2. Péritoine pariétal et viscéral"
      },
      {
        "type": "para",
        "text": "Le péritoine pariétal reçoit une innervation somatique en continuité avec la paroi abdominale et se montre sensible à la douleur, à la pression et à l’irritation. Le péritoine viscéral est beaucoup moins sensible au toucher ou à la température ; il répond davantage à la distension, à l’étirement et à certains médiateurs chimiques."
      },
      {
        "type": "para",
        "text": "Cette différence contribue aux douleurs projetées et aux manifestations somatiques observées lors de certaines atteintes péritonéales ou viscérales."
      },
      {
        "type": "sub",
        "text": "6.3. Système nerveux entérique : le réseau intrinsèque de l’intestin"
      },
      {
        "type": "para",
        "text": "Le système nerveux entérique (SNE) est un réseau neuronal situé dans la paroi digestive. Il est parfois surnommé « deuxième cerveau », mais cette expression doit rester une métaphore : le SNE possède une forte autonomie locale tout en restant connecté au SNC et au SNA."
      },
      {
        "type": "bullets",
        "items": [
          "Plexus myentérique d’Auerbach : situé entre les couches musculaires, il participe surtout à la motricité.",
          "Plexus sous-muqueux de Meissner : situé dans la sous-muqueuse, il participe notamment aux sécrétions, aux échanges locaux et à la régulation de la muqueuse.",
          "Neurones sensoriels, interneurones et motoneurones entériques : ils permettent des réflexes locaux sans commande centrale permanente."
        ]
      },
      {
        "type": "para",
        "text": "Les cellules interstitielles de Cajal ne sont pas des neurones : ce sont des cellules spécialisées qui génèrent et coordonnent des ondes lentes électriques contribuant à l’organisation de la motricité digestive."
      },
      {
        "type": "para",
        "text": "L’intestin constitue également la principale source de sérotonine périphérique. Celle-ci est produite majoritairement par les cellules entérochromaffines de la muqueuse ; certains neurones du SNE utilisent aussi la sérotonine comme neuromédiateur."
      },
      {
        "type": "lead",
        "label": "À retenir",
        "text": "SNC ⇄ SNA ⇄ SNE ⇄ muscle lisse et muqueuse. L’intestin peut donc organiser localement une grande partie de son activité tout en restant modulé par les centres supérieurs."
      },
      {
        "type": "sub",
        "text": "6.4. Axe intestin-cerveau"
      },
      {
        "type": "para",
        "text": "Le dialogue entre intestin et cerveau utilise plusieurs voies : nerveuses, endocrines, immunitaires et métaboliques. Le vague constitue l’une des grandes voies nerveuses de ce dialogue ; les afférences spinales et les signaux produits par la muqueuse, l’immunité et le microbiote y participent également."
      },
      {
        "type": "para",
        "text": "Cette communication est bidirectionnelle : l’état cérébral et autonome peut modifier la motricité et la sensibilité digestive ; les signaux provenant du tube digestif contribuent à l’interoception et peuvent influencer l’attention, l’humeur et la perception des symptômes."
      }
    ]
  },
  {
    "id": "physiologie",
    "title": "7. Physiologie",
    "blocks": [
      {
        "type": "sub",
        "text": "7.1. Motricité"
      },
      {
        "type": "para",
        "text": "La motricité du jéjunum-iléum résulte de l’interaction entre le SNE, les cellules de Cajal, l’état de remplissage, les signaux chimiques et la modulation autonome extrinsèque."
      },
      {
        "type": "bullets",
        "items": [
          "Segmentation : mélange du contenu intestinal et contact avec la muqueuse.",
          "Péristaltisme : progression du contenu dans le sens aboral.",
          "Complexes moteurs interdigestifs : activité organisée entre les repas, contribuant au nettoyage de la lumière digestive."
        ]
      },
      {
        "type": "sub",
        "text": "7.2. Digestion et absorption"
      },
      {
        "type": "para",
        "text": "La muqueuse transforme et absorbe les nutriments grâce à une organisation très spécialisée associant cryptes, villosités et microvillosités."
      },
      {
        "type": "para",
        "text": "Cellules caliciformes. Elles produisent un mucus qui protège la surface épithéliale."
      },
      {
        "type": "para",
        "text": "Cryptes de Lieberkühn. Elles contiennent notamment des cellules souches, des cellules sécrétoires et des cellules de Paneth."
      },
      {
        "type": "para",
        "text": "Entérocytes. Ils assurent l’absorption des nutriments et participent à la barrière intestinale."
      },
      {
        "type": "para",
        "text": "Les jonctions serrées entre cellules épithéliales jouent un rôle majeur dans la régulation du passage paracellulaire. La barrière intestinale est cependant un ensemble plus large associant mucus, épithélium, jonctions intercellulaires, système immunitaire et microbiote."
      },
      {
        "type": "para",
        "text": "La surface d’échange de l’intestin est considérable, de l’ordre de quelques dizaines de mètres carrés chez l’adulte. Cette grande surface résulte surtout des plis, des villosités et des microvillosités."
      },
      {
        "type": "bullets",
        "items": [
          "Voie porte : eau, électrolytes, monosaccharides, acides aminés, petits peptides et de nombreux micronutriments gagnent principalement la circulation sanguine puis le foie.",
          "Voie lymphatique : les lipides à longue chaîne et les vitamines liposolubles gagnent principalement les chylifères et la circulation lymphatique."
        ]
      },
      {
        "type": "sub",
        "text": "7.3. Immunité intestinale"
      },
      {
        "type": "para",
        "text": "L’intestin grêle représente une interface immunitaire majeure. Le tissu lymphoïde associé au tube digestif (GALT) comprend notamment des lymphocytes diffus, des follicules lymphoïdes et les plaques de Peyer, particulièrement développées dans l’iléum."
      },
      {
        "type": "para",
        "text": "Les cellules de Paneth participent à la défense de la muqueuse en produisant des peptides antimicrobiens. Les mastocytes, macrophages, cellules dendritiques et lymphocytes contribuent à l’équilibre entre défense contre les agents pathogènes et tolérance envers les aliments et les micro-organismes commensaux."
      },
      {
        "type": "sub",
        "text": "7.4. Microbiote"
      },
      {
        "type": "para",
        "text": "Le microbiote intestinal est l’ensemble des micro-organismes vivant en interaction avec leur hôte. Sa densité est beaucoup plus élevée dans le côlon que dans l’intestin grêle, mais les communautés du petit intestin participent elles aussi à la digestion, au métabolisme et aux interactions immunitaires."
      },
      {
        "type": "para",
        "text": "La composition du microbiote varie fortement entre les individus et au cours du temps. Elle est influencée notamment par l’alimentation, les médicaments, les infections, l’âge, l’environnement et l’état inflammatoire."
      }
    ]
  },
  {
    "id": "pathologies-et-situations-cliniques-a-connaitre",
    "title": "8. Pathologies et situations cliniques à connaître",
    "blocks": [
      {
        "type": "para",
        "text": "Cette section vise d’abord à aider au diagnostic d’exclusion. Une approche manuelle ne doit pas retarder une évaluation médicale lorsqu’un trouble organique est possible."
      },
      {
        "type": "sub",
        "text": "8.1. Augmentation de la perméabilité intestinale"
      },
      {
        "type": "para",
        "text": "Une augmentation de la perméabilité de la barrière intestinale peut survenir dans plusieurs contextes inflammatoires, infectieux, médicamenteux ou physiologiques. Elle concerne notamment l’altération fonctionnelle de l’épithélium et de ses jonctions serrées."
      },
      {
        "type": "para",
        "text": "Parmi les facteurs pouvant modifier transitoirement ou durablement la barrière figurent certaines infections, les maladies inflammatoires intestinales, l’usage d’AINS, certaines chimiothérapies, l’alcool, des contraintes physiologiques importantes telles que l’exercice prolongé avec hyperthermie, et certains contextes de stress."
      },
      {
        "type": "para",
        "text": "Les relations entre perméabilité, microbiote, inflammation et maladies extra-digestives sont complexes. Elles ne doivent pas être résumées par une théorie générale où des « toxines » se déposeraient dans différents tissus."
      },
      {
        "type": "sub",
        "text": "8.2. Dysbiose"
      },
      {
        "type": "para",
        "text": "La dysbiose désigne une modification de la composition ou du fonctionnement du microbiote associée à une perte d’équilibre de l’écosystème. Elle peut être observée après certaines infections, une antibiothérapie, des changements alimentaires ou au cours de plusieurs maladies digestives."
      },
      {
        "type": "para",
        "text": "Dysbiose, inflammation et perméabilité intestinale peuvent s’influencer mutuellement, mais corrélation ne signifie pas causalité. Le microbiote est aujourd’hui étudié dans de nombreuses maladies systémiques ; dans la plupart des cas, les mécanismes précis et la direction de la relation restent à établir."
      },
      {
        "type": "para",
        "text": "Pour ce livre, nous éviterons donc l’idée que « toute maladie commence dans l’intestin ». L’intestin est un acteur majeur de l’homéostasie ; il n’est pas l’explication unique de l’ensemble des maladies."
      },
      {
        "type": "sub",
        "text": "8.3. Iléus et occlusion : situations médicales, non indications ROP"
      },
      {
        "type": "para",
        "text": "L’iléus correspond à une diminution ou un arrêt de la propulsion digestive sans obstacle mécanique. Il peut notamment survenir après une chirurgie, lors de troubles électrolytiques, sous l’effet de certains médicaments — en particulier les opioïdes — ou dans des états inflammatoires ou infectieux importants."
      },
      {
        "type": "para",
        "text": "Une occlusion mécanique résulte au contraire d’un obstacle, par exemple une adhérence, une hernie, une tumeur ou une sténose. Ces tableaux peuvent se ressembler cliniquement et nécessitent une évaluation médicale."
      },
      {
        "type": "para",
        "text": "Distension importante, vomissements répétés, arrêt des matières et des gaz, douleur croissante, fièvre, altération de l’état général ou suspicion d’occlusion imposent une orientation médicale."
      },
      {
        "type": "sub",
        "text": "8.4. Maladie de Crohn"
      },
      {
        "type": "para",
        "text": "La maladie de Crohn est une maladie inflammatoire chronique du tube digestif qui touche fréquemment l’iléon terminal et le côlon. Elle associe des facteurs génétiques, immunitaires, microbiens et environnementaux."
      },
      {
        "type": "para",
        "text": "Les symptômes peuvent inclure diarrhée, douleurs abdominales, amaigrissement, fatigue et manifestations extra-digestives. Le diagnostic et le traitement relèvent d’une prise en charge médicale spécialisée visant à contrôler l’inflammation, prévenir les poussées et maintenir la rémission."
      },
      {
        "type": "para",
        "text": "La ROP ne vise pas l’inflammation intestinale de la maladie de Crohn. Chez une personne médicalement suivie, en dehors d’une situation aiguë, elle peut être envisagée comme approche complémentaire de certains symptômes fonctionnels, musculosquelettiques ou du vécu global de la maladie, sans modifier le traitement prescrit."
      },
      {
        "type": "sub",
        "text": "8.5. Signes d’alarme"
      },
      {
        "type": "bullets",
        "items": [
          "Fièvre ou altération inhabituelle de l’état général.",
          "Sang rouge ou noir dans les selles.",
          "Vomissements persistants ou déshydratation.",
          "Perte de poids importante et inexpliquée.",
          "Douleur abdominale intense, progressive ou nocturne.",
          "Distension majeure avec arrêt des matières et des gaz.",
          "Masse, hernie irréductible ou adénopathie suspecte.",
          "Tout tableau clinique incompris ou dépassant le champ de compétence du praticien."
        ]
      }
    ]
  },
  {
    "id": "application-en-rop-lecture-en-quatre-niveaux",
    "title": "9. Application en ROP : lecture en quatre niveaux",
    "blocks": [
      {
        "type": "para",
        "text": "L’intérêt de la nouvelle organisation du livre est de ne pas réduire le traitement à la seule zone réflexe de l’intestin. Le praticien replace le symptôme digestif dans les quatre niveaux du protocole."
      },
      {
        "type": "sub",
        "text": "9.1. Niveau 1 — Régulation des centres supérieurs"
      },
      {
        "type": "bullets",
        "items": [
          "Zones occipitales selon les tests et le contexte clinique.",
          "Prise en compte du sommeil, de la douleur, du stress, de la fatigue et de la perception corporelle.",
          "Axe intestin-cerveau comme cadre d’intégration, sans attribuer un symptôme à une aire cérébrale précise."
        ]
      },
      {
        "type": "sub",
        "text": "9.2. Niveau 2 — Régulation neuro-végétative et adaptation"
      },
      {
        "type": "bullets",
        "items": [
          "Nerf vague, dans la logique du dialogue cerveau-intestin.",
          "Voies sympathiques thoraciques inférieures et nerfs splanchniques.",
          "Plexus cœliaque et surtout plexus mésentérique supérieur.",
          "Diaphragme lorsque la respiration et les rapports thoraco-abdominaux sont cliniquement pertinents."
        ]
      },
      {
        "type": "sub",
        "text": "9.3. Niveau 3 — Régulation viscérale loco-régionale"
      },
      {
        "type": "bullets",
        "items": [
          "Jéjunum-iléum.",
          "Péritoine.",
          "Mésentère et racine du mésentère.",
          "Rapports avec estomac, duodénum, côlon et cavité abdominale."
        ]
      },
      {
        "type": "sub",
        "text": "9.4. Niveau 4 — Intégration viscéro-somatique et viscéro-émotionnelle"
      },
      {
        "type": "bullets",
        "items": [
          "Territoires thoraco-lombaires associés aux afférences intestinales.",
          "Muscles, articulations et régions douloureuses identifiés à l’examen.",
          "Contexte émotionnel et réseaux centraux d’intégration, sans psychologisation automatique des symptômes."
        ]
      },
      {
        "type": "para",
        "text": "Cette grille permet d’adapter la séance au patient. Tous les niveaux ne sont pas obligatoirement travaillés et l’ordre dépend de l’anamnèse, des tests et de la réponse observée."
      }
    ]
  },
  {
    "id": "zones-reflexes-podales",
    "title": "10. Zones réflexes podales",
    "blocks": [
      {
        "type": "para",
        "text": "Les localisations décrites ci-dessous appartiennent à la cartographie clinique ROP. Elles ne constituent pas une projection anatomique directe de l’intestin grêle sur le pied et ne démontrent pas qu’une pression manuelle active sélectivement le viscère."
      },
      {
        "type": "para",
        "text": "Les zones sont recherchées sur les faces plantaires des deux pieds."
      },
      {
        "type": "bullets",
        "items": [
          "Racine du mésentère : trajet clinique allant de la région correspondant à la jonction duodéno-jéjunale vers l’ombilic sur le pied gauche, puis de l’ombilic vers la jonction iléo-cæcale sur le pied droit.",
          "Intestin grêle : territoire compris entre la limite supérieure située approximativement au niveau des styloïdes des cinquièmes métatarsiens et la limite inférieure correspondant au bord antérieur des talons.",
          "Jéjunum : territoire prédominant à gauche, avec orientation clinique plutôt horizontale des anses.",
          "Iléum : territoire prédominant à droite, avec orientation clinique plutôt verticale des anses."
        ]
      },
      {
        "type": "para",
        "text": "Les figures du chapitre précisent les limites et les repères osseux utilisés dans la méthode. Une sensibilité ou une modification texturale de ces zones constitue un élément de la lecture ROP, non un test diagnostique de maladie intestinale."
      }
    ]
  },
  {
    "id": "relations-viscero-somatiques",
    "title": "11. Relations viscéro-somatiques",
    "blocks": [
      {
        "type": "para",
        "text": "Les relations viscéro-somatiques reposent sur la convergence, au niveau de la moelle, d’informations provenant des viscères et de territoires somatiques."
      },
      {
        "type": "para",
        "text": "Pour le jéjunum et l’iléum, les afférences spinales sont surtout rattachées aux segments thoraciques inférieurs, avec une prédominance autour de T10-T11 ; une plage T9-T11 peut être retenue pour tenir compte de la variabilité anatomique."
      },
      {
        "type": "para",
        "text": "Cette convergence peut contribuer à des douleurs projetées, à une hypersensibilité ou à une augmentation du tonus paravertébral thoracique bas. Ces manifestations sont variables et non spécifiques : elles ne permettent pas, à elles seules, d’identifier une dysfonction intestinale."
      },
      {
        "type": "para",
        "text": "La charnière thoraco-lombaire peut être intégrée à l’examen global, mais L1-L2 ne doit pas être présenté comme une correspondance autonome et spécifique du jéjunum-iléum."
      }
    ]
  },
  {
    "id": "relations-viscero-emotionnelles",
    "title": "12. Relations viscéro-émotionnelles",
    "blocks": [
      {
        "type": "para",
        "text": "Le ventre peut constituer un lieu d’expression somatique des tensions émotionnelles. Par l’intermédiaire de l’axe intestin-cerveau, le stress peut moduler la motricité, les sécrétions et la sensibilité viscérale. Une activation sympathique accrue, associée à une modification de la régulation vagale, peut ainsi contribuer à l’apparition ou à l’aggravation de certains symptômes digestifs."
      },
      {
        "type": "para",
        "text": "Sur le plan clinique, il est souvent difficile de distinguer nettement les manifestations fonctionnelles propres à l’intestin grêle de celles du côlon. La muqueuse, le système immunitaire intestinal et le système nerveux entérique forment une interface neuro-immuno-endocrine complexe en communication permanente avec le cerveau."
      },
      {
        "type": "para",
        "text": "Certaines personnes souffrant de troubles digestifs chroniques rapportent également fatigue, anxiété, irritabilité, troubles du sommeil ou hypersensibilité corporelle. Ces manifestations sont variables et non spécifiques. Elles ne définissent pas une personnalité propre à l’intestin et doivent être replacées dans le contexte médical, émotionnel et social de chaque personne."
      },
      {
        "type": "para",
        "text": "Dans une approche ROP, l’exploration des tensions émotionnelles peut compléter l’évaluation fonctionnelle, sans attribuer automatiquement les symptômes digestifs à une origine psychologique et sans se substituer au diagnostic médical."
      }
    ]
  },
  {
    "id": "cas-clinique-maladie-de-crohn-et-spondylarthrite",
    "title": "13. Cas clinique — Maladie de Crohn et spondylarthrite",
    "blocks": [
      {
        "type": "para",
        "text": "Ce cas illustre la manière dont la ROP organise une situation complexe sans prétendre traiter la maladie inflammatoire elle-même."
      },
      {
        "type": "para",
        "text": "Une personne suivie pour maladie de Crohn présente également des douleurs rachidiennes dans un contexte de spondylarthrite, avec fatigue et retentissement fonctionnel. La question clinique n’est pas de choisir entre une origine digestive ou articulaire, mais de replacer les symptômes dans un terrain inflammatoire chronique pris en charge médicalement."
      },
      {
        "type": "para",
        "text": "Lecture possible selon les quatre niveaux :"
      },
      {
        "type": "bullets",
        "items": [
          "Niveau 1 : sommeil, fatigue, douleur, stress et capacité de récupération.",
          "Niveau 2 : nerf vague, régulation autonome et plexus digestifs, lorsque ces cibles sont cohérentes avec les tests.",
          "Niveau 3 : iléum, intestin grêle, péritoine, mésentère et environnement abdominal.",
          "Niveau 4 : rachis, bassin, territoires somatiques douloureux et contexte émotionnel."
        ]
      },
      {
        "type": "para",
        "text": "La séance est complémentaire du suivi gastro-entérologique et rhumatologique. Toute poussée inflammatoire, fièvre, amaigrissement, saignement digestif, occlusion suspectée ou aggravation inhabituelle impose de privilégier l’évaluation médicale."
      },
      {
        "type": "lead",
        "label": "Message clinique",
        "text": "le cas montre l’intérêt d’une lecture intégrée du patient ; il ne constitue pas une preuve d’efficacité de la ROP sur la maladie de Crohn ou la spondylarthrite."
      }
    ]
  },
  {
    "id": "conseils",
    "title": "14. Conseils",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "Privilégier une alimentation variée et adaptée à la tolérance individuelle plutôt que des exclusions systématiques non justifiées.",
          "Adapter l’activité physique au contexte digestif et général ; éviter les efforts intenses immédiatement après un repas important.",
          "Veiller au sommeil, à l’hydratation et à la récupération.",
          "En présence de maladie inflammatoire intestinale, suivre les recommandations du gastro-entérologue et ne pas modifier le traitement prescrit sans avis médical.",
          "Documenter l’évolution des symptômes : douleur, transit, ballonnements, fatigue, sommeil et capacité fonctionnelle."
        ]
      }
    ]
  },
  {
    "id": "a-retenir",
    "title": "15. À retenir",
    "blocks": [
      {
        "type": "bullets",
        "items": [
          "Le jéjunum-iléum est un organe d’absorption, d’immunité et de régulation locale, fortement lié au mésentère.",
          "Le système nerveux entérique organise une grande partie de la motricité et des sécrétions, tout en restant connecté au vague, au sympathique et au SNC.",
          "L’axe intestin-cerveau est bidirectionnel et associe des voies nerveuses, immunitaires, endocrines et métaboliques.",
          "La barrière intestinale repose sur le mucus, l’épithélium, les jonctions serrées, l’immunité et le microbiote.",
          "Dysbiose et augmentation de perméabilité peuvent être associées à plusieurs maladies, sans constituer une explication universelle.",
          "Iléus, occlusion et maladie de Crohn relèvent d’une prise en charge médicale ; la ROP n’intervient qu’en accompagnement fonctionnel lorsque la situation le permet.",
          "L’application ROP suit les quatre niveaux : centres supérieurs, régulation neuro-végétative, viscéral loco-régional, intégration viscéro-somatique et viscéro-émotionnelle.",
          "Les cartes podales sont des repères cliniques de la méthode, non une projection anatomique directe de l’intestin sur le pied."
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
          "Spencer NJ, Hu H. Enteric nervous system: sensory transduction, neural circuits and gastrointestinal motility. Nat Rev Gastroenterol Hepatol. 2020;17(6):338-351. doi:10.1038/s41575-020-0271-2.",
          "Fung C, Vanden Berghe P. Functional circuits and signal processing in the enteric nervous system. Cell Mol Life Sci. 2020;77(22):4505-4522. doi:10.1007/s00018-020-03543-6.",
          "Helander HF, Fändriks L. Surface area of the digestive tract — revisited. Scand J Gastroenterol. 2014;49(6):681-689. doi:10.3109/00365521.2014.898326.",
          "Sender R, Fuchs S, Milo R. Revised estimates for the number of human and bacteria cells in the body. PLoS Biol. 2016;14(8):e1002533. doi:10.1371/journal.pbio.1002533.",
          "Suzuki T. Regulation of intestinal epithelial permeability by tight junctions. Cell Mol Life Sci. 2013;70(4):631-659. doi:10.1007/s00018-012-1070-x.",
          "Camilleri M. Human intestinal barrier: effects of stressors, diet, prebiotics, and probiotics. Clin Transl Gastroenterol. 2021;12(1):e00308. doi:10.14309/ctg.0000000000000308.",
          "Brierley SM, Hibberd TJ, Spencer NJ. Spinal afferent innervation of the colon and rectum. Front Cell Neurosci. 2018;12:467. doi:10.3389/fncel.2018.00467.",
          "Jänig W. Neurobiology of visceral afferent neurons: neuroanatomy, functions, organ regulations and sensations. Biol Psychol. 1996;42(1-2):29-51. doi:10.1016/0301-0511(95)05145-7.",
          "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). Treatment for Crohn’s Disease. Updated 2024.",
          "Beach EC, De Jesus O. Ileus. StatPearls. Updated 2023.",
          "Goosenberg E, Collier SA. Superior Mesenteric Artery Syndrome. StatPearls. Updated 2026."
        ]
      }
    ]
  }
],
}

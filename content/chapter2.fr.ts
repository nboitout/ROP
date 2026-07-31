// Chapter 2 content — French synchronized reading stream
// Source: public/chapter-2/Chapter2_ROP_version_revisee.docx

import type { Chapter } from './types'

export const chapter2Fr: Chapter = {
  slug: 'chapter-2',
  number: '2',
  title: 'Traitement par la Réflexothérapie Occipito-Podale',
  sections: [
    {
      id: 'presentation',
      title: 'Présentation',
      blocks: [
        {
          type: 'para',
          text: 'La Réflexothérapie Occipito-Podale (ROP) s’inscrit dans une démarche de soin fonctionnel et intégratif. Le traitement est guidé par l’anamnèse, l’examen clinique, les tests d’écoute et la lecture des zones réflexes. Il vise à solliciter les capacités de régulation et d’adaptation du patient, sans se substituer au diagnostic médical ni à un traitement médical indiqué.',
        },
        {
          type: 'note',
          label: 'Principes directeurs',
          body: [
            'Solliciter plutôt que forcer. La pression est fine, précise et non douloureuse.',
            'Hiérarchiser plutôt qu’appliquer un protocole fixe. Les tests et la situation clinique déterminent les priorités.',
            'Observer plutôt que présumer. La réponse du patient est suivie dans les heures et les jours qui suivent la séance.',
            'Réorienter lorsque nécessaire. Toute suspicion de pathologie organique ou de signe d’alarme impose un avis médical.',
          ],
        },
      ],
    },
    {
      id: 'technique',
      title: 'Technique',
      blocks: [
        {
          type: 'sub',
          text: 'Contact manuel et pression',
        },
        {
          type: 'para',
          text: 'La technique est exclusivement manuelle. Le praticien utilise la pulpe du pouce ou l’interphalangienne proximale de l’index, sans huile ni crème.',
        },
        {
          type: 'para',
          text: 'La pression est fine, progressive et non douloureuse. Elle mobilise la couche épidermo-dermique des zones réflexes occipitales et podales, tout en conservant la perception des repères osseux et de la texture cutanée.',
        },
        {
          type: 'para',
          text: 'Une douleur vive, une force excessive ou une trituration appuyée traduisent un surdosage de la stimulation et doivent être évitées.',
        },
        {
          type: 'sub',
          text: 'Mécanoréception et information tactile',
        },
        {
          type: 'para',
          text: 'La stimulation cutanée sollicite notamment des mécanorécepteurs à bas seuil présents dans la peau glabre, parmi lesquels :',
        },
        {
          type: 'leadBullets',
          items: [
            {
              label: 'Corpuscules de Meissner',
              text: 'sensibles au toucher léger et aux variations fines de pression.',
            },
            {
              label: 'Disques de Merkel',
              text: 'sensibles à une pression douce et maintenue ainsi qu’aux caractéristiques de forme et de texture.',
            },
          ],
        },
        {
          type: 'para',
          text: 'Lorsque la couche épidermo-dermique se déforme sous le doigt, ces récepteurs génèrent des influx afférents transmis par les voies de la sensibilité tactile fine. Dans le modèle de la ROP, cette information sensorielle est utilisée comme une sollicitation susceptible de moduler la perception, le tonus neuro-végétatif et la réponse du patient. La théorie du gate control peut contribuer à expliquer une partie de l’effet antalgique immédiat d’une stimulation tactile non douloureuse.',
        },
        {
          type: 'rop',
          body: [
            'La force et la trituration du massage réflexe doivent être proscrites. Plus la pression est forte, plus le praticien perçoit ses propres doigts au détriment des repères osseux et des modifications de texture qui guident la recherche des zones réflexes.',
            'Même bien conduite, une séance constitue une sollicitation pour l’organisme. Elle doit tenir compte de la vitalité du patient et de ses capacités d’adaptation.',
          ],
        },
        {
          type: 'sub',
          text: 'Les trois temps du massage',
        },
        {
          type: 'numbered',
          items: [
            'Temps du diagnostic textural. Recherche des zones réflexes caractérisées par une modification de la texture de la peau occipitale ou podale : rugosité, densification, perte de glissement ou sensation de « cristaux ». Ces éléments complètent l’anamnèse, l’examen clinique et les tests ; ils ne se substituent pas à eux.',
            'Temps thérapeutique. La pression reste fine, épicritique et non douloureuse. La manœuvre mobilise la couche épidermo-dermique afin de solliciter les mécanorécepteurs et d’apporter une information sensorielle au système nerveux.',
            'Temps du « laisser faire » et du « ne rien faire ». Après la stimulation, le praticien maintient un bref temps d’observation. La réponse est appréciée par l’évolution de la sensibilité, du glissement et de la souplesse de la zone réflexe, ainsi que par les signes généraux de détente.',
          ],
        },
        {
          type: 'para',
          text: 'La qualité de la réponse dépend de l’état général du patient, de sa vitalité et de ses capacités d’adaptation-compensation, en lien avec la phase du syndrome général d’adaptation dans laquelle il évolue : alarme, adaptation, résistance ou épuisement.',
        },
        {
          type: 'xref',
          label: 'Voir la référence dans le chapitre 5',
          text: 'Mécanisme de stress',
          href: '/lecture/chapitre-5?lang=fr#p-definitions-2',
        },
      ],
    },
    {
      id: 'modalites',
      title: 'Modalités du traitement',
      blocks: [
        {
          type: 'sub',
          text: 'Durée de la séance',
        },
        {
          type: 'para',
          text: 'L’efficacité du traitement n’est pas proportionnelle à la durée de la séance. Elle dépend surtout de la qualité de l’examen, de la hiérarchisation des priorités et de la précision de la stimulation. La séance doit rester adaptée aux capacités de réponse du patient, sans multiplier inutilement les zones traitées.',
        },
        {
          type: 'sub',
          text: 'Fréquence et cycle initial',
        },
        {
          type: 'para',
          text: 'La fréquence des séances ne repose pas sur un délai fixe. Elle est déterminée par l’évolution clinique observée après la première séance :',
        },
        {
          type: 'leadBullets',
          items: [
            {
              label: 'Immédiatement après le traitement',
              text: 'une détente, un besoin de repos ou certaines réactions végétatives peuvent apparaître.',
            },
            {
              label: 'Dans les 24 à 48 heures',
              text: 'des réactions transitoires sont possibles.',
            },
            {
              label: 'À J3-J4',
              text: 'l’évolution permet généralement de décider si l’amélioration est suffisante ou si une deuxième séance est indiquée.',
            },
          ],
        },
        {
          type: 'para',
          text: 'Lorsque le symptôme principal a disparu ou nettement régressé et que le patient a retrouvé son fonctionnement habituel, aucune nouvelle séance n’est nécessaire à court terme. Lorsque la récupération reste incomplète, une deuxième séance peut être proposée à J3-J4. Une troisième séance peut être envisagée quelques jours plus tard si l’évolution le justifie.',
        },
        {
          type: 'note',
          label: 'Fenêtre d’adaptation après la première séance',
          body: [
            'La courbe présentée dans les diapositives représente un modèle issu de l’expérience clinique. Elle doit être progressivement documentée par des mesures standardisées et ne constitue pas une mesure physiologique directe.',
          ],
        },
        {
          type: 'note',
          label: 'Comment interpréter le terme « vitalité » ?',
          body: [
            'Dans ce chapitre, la vitalité désigne une appréciation clinique et fonctionnelle : niveau d’énergie, fatigabilité, qualité du sommeil, capacité à reprendre les activités, évolution du symptôme principal et ressenti global.',
            'Elle ne correspond pas à une variable biologique unique. Pour être utile, elle doit être comparée au niveau initial du patient et suivie à l’aide de questions simples et reproductibles.',
          ],
        },
        {
          type: 'para',
          text: 'Dans la majorité des indications fonctionnelles, un cycle initial d’une à trois séances permet d’apprécier la réponse du patient. En l’absence d’amélioration notable après trois séances, le diagnostic fonctionnel, la hiérarchisation et l’indication de la ROP doivent être reconsidérés. Si nécessaire, le patient est orienté vers son médecin. Les affections chroniques peuvent nécessiter un suivi plus prolongé, dont le rythme reste individualisé.',
        },
      ],
    },
    {
      id: 'hierarchisation',
      title: 'Hiérarchisation du traitement',
      blocks: [
        {
          type: 'para',
          text: 'Il n’existe pas de protocole immuable. Une séquence identique appliquée à tous les patients serait contraire à l’approche globale de la ROP. Les tests, l’histoire clinique et la réponse observée déterminent la priorité. Les repères suivants structurent néanmoins le raisonnement :',
        },
        {
          type: 'leadBullets',
          items: [
            {
              label: 'Suites de traumatisme, de chirurgie ou d’infection',
              text: 'Lorsque les symptômes sont apparus après un événement clairement identifié, ils gardent un caractère prioritaire. L’anamnèse et l’examen clinique doivent vérifier la cohérence temporelle et fonctionnelle de cette relation.',
            },
            {
              label: 'Anamnèse et tests d’écoute globale et locale',
              text: 'En l’absence d’événement déclencheur évident, l’anamnèse, l’examen clinique et les tests orientent vers la fixation dominante et les adaptations susceptibles d’entretenir les symptômes.',
            },
            {
              label: 'Dimension psycho-émotionnelle',
              text: 'Certains événements physiques ou émotionnels peuvent influencer le vécu corporel, la perception douloureuse et l’état neuro-végétatif. Cette dimension est recherchée avec prudence, sans interprétation imposée au patient.',
            },
            {
              label: 'Mécanisme de stress',
              text: 'Toute fixation locale doit être replacée dans le contexte général du patient, de ses contraintes et de ses capacités d’adaptation.',
            },
          ],
        },
        {
          type: 'xref',
          label: 'Voir la référence dans le chapitre 5',
          text: 'Mécanisme de stress',
          href: '/lecture/chapitre-5?lang=fr#p-definitions-2',
        },
      ],
    },
    {
      id: 'zones-reflexes',
      title: 'Zones réflexes occipitales et podales',
      blocks: [
        {
          type: 'sub',
          text: 'Zones réflexes occipitales',
        },
        {
          type: 'para',
          text: 'Les zones occipitales constituent un point d’entrée fréquent du traitement. Leur lecture et leur stimulation sont décrites dans les figures correspondantes.',
        },
        {
          type: 'sub',
          text: 'Syndrome général d’adaptation',
        },
        {
          type: 'para',
          text: 'L’objectif est de soutenir la régulation neuro-végétative et l’adaptation générale avant de traiter le local. Selon les tests et la situation clinique, les zones suivantes peuvent être intégrées :',
        },
        {
          type: 'leadBullets',
          items: [
            {
              label: 'MRP',
              text: 'occiput-C1-C2, nerfs trijumeau V, vague X et hypoglosse XII, faux du cerveau et du cervelet, deuxième vertèbre sacrée S2, base et voûte crâniennes.',
            },
            {
              label: 'Circulation du liquide cérébro-spinal dans le modèle ROP',
              text: 'système veineux, foramen jugulaire, respiration profonde, compression du quatrième ventricule et synchronisation SSB-S2.',
            },
            {
              label: 'Centres supérieurs',
              text: 'diencéphale, tronc cérébral et hypophyse.',
            },
            {
              label: 'Nerf vague',
              text: 'pour le territoire cervico-thoraco-abdominal : foramen magnum, foramen jugulaire, sinus carotidien et hiatus œsophagien.',
            },
            {
              label: 'Parasympathique pelvien',
              text: 'pour le territoire pelvien et la partie distale du côlon.',
            },
            {
              label: 'Axe sympathique thoracique',
              text: 'colonne vertébrale, articulations costo-transversaires et chaîne ganglionnaire latéro-vertébrale thoracique.',
            },
            {
              label: 'Plexus prévertébraux',
              text: '',
            },
          ],
        },
        {
          type: 'sub',
          text: 'Syndrome locorégional',
        },
        {
          type: 'para',
          text: 'L’objectif est de traiter les boucles mécaniques et neuro-végétatives en relation avec la région symptomatique :',
        },
        {
          type: 'bullets',
          items: [
            'Plexus et nerfs du système nerveux somatique impliqués dans les relations viscéro-somatiques ;',
            'Viscère ou système viscéral concerné ;',
            'Cavité abdominale ou pelvienne selon le territoire ;',
            'Structures musculo-squelettiques et fasciales associées.',
          ],
        },
        {
          type: 'sub',
          text: 'Système limbique',
        },
        {
          type: 'para',
          text: 'L’objectif est d’intégrer, lorsque cela est pertinent, la dimension stress, émotion et mémoire corporelle susceptible d’entretenir certaines réponses végétatives ou tissulaires :',
        },
        {
          type: 'bullets',
          items: [
            'Amygdale, hippocampe et insula ;',
            'Balance cerveau limbique–viscère en dysfonction : écoute-induction, un pouce sur le viscère dominant et l’autre sur la zone réflexe du cerveau limbique.',
          ],
        },
      ],
    },
    {
      id: 'exemple-clinique',
      title: 'Exemple clinique : lombo-sciatalgie gauche après un accouchement',
      blocks: [
        {
          type: 'para',
          text: 'Madame X, âgée d’une trentaine d’années, consulte pour une lombo-sciatalgie gauche apparue quelques mois après un accouchement.',
        },
        {
          type: 'sub',
          text: 'Anamnèse',
        },
        {
          type: 'bullets',
          items: [
            'Aucun antécédent traumatique connu ;',
            'Douleurs lombo-sciatiques majorées au moment des règles ;',
            'Incontinence urinaire d’effort révélée lors de l’entretien ;',
            'Accouchement long chez une primipare ;',
            'Examen gynécologique sans anomalie identifiée ; radiographie montrant un léger pincement L5-S1 sans conflit radiculaire objectivé ;',
            'Retentissement moral important, la patiente souhaitant reprendre rapidement son activité professionnelle indépendante.',
          ],
        },
        {
          type: 'sub',
          text: 'Tests',
        },
        {
          type: 'bullets',
          items: [
            'Les tests d’écoute globale debout et assis montrent une flexion antérieure du tronc et une flexion latérale gauche, basses ;',
            'Les tests vertébraux mettent en évidence une diminution modérée de mobilité à gauche aux étages L2-L3 et L5-S1, ainsi qu’une fixation de la sacro-iliaque gauche et du coccyx ;',
            'En décubitus, le Lasègue complété est amélioré lorsque la main placée sur la symphyse pubienne est attirée légèrement à gauche et en profondeur vers la région cervico-isthmique de l’utérus ;',
            'En décubitus latéral gauche, l’écoute de la région abdominale inférieure retrouve une résistance à la mobilité de l’utérus ;',
            'La hanche gauche présente une diminution de rotation médiale.',
          ],
        },
        {
          type: 'sub',
          text: 'Interprétation fonctionnelle proposée en ROP',
        },
        {
          type: 'para',
          text: 'Les éléments recueillis orientent vers une contribution possible de la région utérine et pelvienne au syndrome locorégional. Dans cette hypothèse de travail :',
        },
        {
          type: 'bullets',
          items: [
            'Une tension prédominante du ligament utéro-sacré gauche pourrait contribuer à la déviation fonctionnelle de l’utérus et à la fixation sacro-iliaque gauche ;',
            'Une modification du tonus du muscle piriforme gauche pourrait participer à l’irritation mécanique du trajet sciatique ;',
            'Les relations entre utérus, vessie, sacrum et plancher pelvien pourraient contribuer à l’incontinence urinaire d’effort et à la perte de souplesse du complexe sacro-coccygien ;',
            'Le cycle menstruel et la régulation neuro-végétative sont pris en compte dans l’évaluation du syndrome général ;',
            'Dans le modèle ROP, la fixation sacro-coccygienne est également envisagée dans ses relations avec les enveloppes méningées et le MRP ;',
            'Le contexte émotionnel et l’anxiété liée à la douleur, à la maternité récente et à la reprise professionnelle peuvent entretenir le vécu symptomatique.',
          ],
        },
        {
          type: 'sub',
          text: 'Traitement par la ROP',
        },
        {
          type: 'numbered',
          items: [
            'Zones réflexes occipitales.',
            'Syndrome général d’adaptation : MRP, diencéphale, tronc cérébral, hypophyse, surrénales, colonne vertébrale, foie et rein gauche.',
            'Syndrome locorégional : région cervico-isthmique de l’utérus, muscle piriforme, ligaments sacro-tubéral et sacro-épineux, nerf pudendal, articulations sacro-coccygienne et sacro-iliaque, plexus sacré et trajet sciatique gauches.',
            'Système limbique : amygdale, hippocampe et insula.',
          ],
        },
        {
          type: 'para',
          text: 'L’évolution du symptôme principal, de la mobilité, de l’incontinence d’effort, du sommeil et de la vitalité doit être notée après la séance afin de confirmer ou de remettre en question cette hiérarchisation.',
        },
      ],
    },
    {
      id: 'contre-indications',
      title: 'Contre-indications et signes d’alarme',
      blocks: [
        {
          type: 'para',
          text: 'La ROP s’inscrit dans une logique de soin fonctionnel. Toute suspicion de pathologie organique, de complication ou de signe d’alarme impose un avis médical. Des symptômes apparemment anodins peuvent révéler une affection grave ; le praticien doit savoir reconnaître les situations dans lesquelles il ne doit pas intervenir, conformément au principe de prudence.',
        },
        {
          type: 'para',
          text: 'Les signes suivants doivent notamment conduire à réévaluer la situation et, selon le contexte, à orienter le patient :',
        },
        {
          type: 'bullets',
          items: [
            'Douleurs non mécaniques, persistantes ou aggravées en première partie de nuit ;',
            'Douleur thoracique atypique, dyspnée, malaise ;',
            'Sang dans les urines ou les selles ;',
            'Fièvre ou suspicion de maladie infectieuse ;',
            'Amaigrissement inexpliqué ;',
            'Risque connu de migration d’un thrombus ;',
            'Pâleur associée à une fatigue importante ;',
            'Déficit neurologique, troubles sphinctériens nouveaux ou troubles sensitifs progressifs ;',
            'Angoisse aiguë, peur de mourir ou altération inhabituelle de l’état général ;',
            'Situation clinique incomprise ou dépassant le champ de compétence du praticien.',
          ],
        },
        {
          type: 'para',
          text: 'La ROP ne doit jamais retarder un diagnostic médical ni se substituer à un traitement médical mieux adapté. Elle peut trouver une place complémentaire dans une démarche intégrative, notamment pour accompagner certains symptômes fonctionnels ou le bien-être du patient, avec l’accord de l’équipe médicale lorsque la situation l’exige.',
        },
      ],
    },
    {
      id: 'indications',
      title: 'Indications',
      blocks: [
        {
          type: 'para',
          text: 'Les indications reposent sur l’anamnèse, l’examen clinique, les tests, la cohérence des zones réflexes et la hiérarchisation du terrain. La ROP s’adresse en priorité à des troubles fonctionnels, après exclusion d’une pathologie organique nécessitant une prise en charge médicale spécifique.',
        },
        {
          type: 'para',
          text: 'Les situations fréquemment rencontrées comprennent :',
        },
        {
          type: 'bullets',
          items: [
            'Douleurs musculo-squelettiques à composante fonctionnelle ;',
            'Séquelles de traumatismes ostéo-musculo-articulaires ;',
            'Séquelles fonctionnelles de traumatismes de nerfs spinaux ou crâniens ;',
            'Dysfonctions viscérales associées à des fixations tissulaires et à des boucles neuro-végétatives dans le modèle de la ROP ;',
            'Troubles viscéro-somatiques et somato-viscéraux ;',
            'Déséquilibres neuro-végétatifs fonctionnels ;',
            'Stress émotionnel et anxiété, en complément d’une prise en charge adaptée.',
          ],
        },
      ],
    },
    {
      id: 'actions',
      title: 'Effets recherchés et observés',
      blocks: [
        {
          type: 'para',
          text: 'Les résultats cliniques de la ROP sont souvent rapportés par les patients et observés au cours des tests, mais restent parfois difficiles à objectiver. Les effets recherchés ou fréquemment décrits sont :',
        },
        {
          type: 'bullets',
          items: [
            'Une diminution de la douleur ou de la gêne ;',
            'Des signes de détente et de bascule neuro-végétative : calme, bâillements, somnolence, relâchement marqué ou besoin de repos ;',
            'Une évolution du transit, de la diurèse ou des sensations viscérales ;',
            'Une modification de la mobilité testée à l’étage métamérique associé au viscère ;',
            'Une amélioration du sommeil, de l’énergie et des capacités fonctionnelles.',
          ],
        },
        {
          type: 'para',
          text: 'Ces effets doivent être appréciés à partir d’indicateurs définis avant la séance : symptôme principal, douleur ou gêne, mobilité, sommeil, transit, énergie et capacité à reprendre les activités. L’objectif n’est pas seulement de recueillir une impression générale, mais de comparer l’évolution à un état initial clairement décrit.',
        },
      ],
    },
    {
      id: 'reactions',
      title: 'Réactions au traitement et réévaluation',
      blocks: [
        {
          type: 'sub',
          text: 'Réactions immédiates',
        },
        {
          type: 'para',
          text: 'Le patient ressent le plus souvent une détente. Une somnolence, un besoin de repos, une envie d’uriner ou d’aller à la selle peuvent également apparaître. Une baisse transitoire du niveau d’énergie peut être ressentie juste après la séance.',
        },
        {
          type: 'sub',
          text: 'Dans les 24 à 48 heures',
        },
        {
          type: 'para',
          text: 'Certains patients peuvent présenter des courbatures, une fatigabilité légère, un sommeil modifié, des rêves plus marqués ou une remontée de souvenirs. Ces réactions sont passagères, variables selon les individus et non systématiques. Leur absence ne signifie pas que le traitement est inefficace.',
        },
        {
          type: 'sub',
          text: 'Dans les jours suivants',
        },
        {
          type: 'para',
          text: 'La vitalité remonte progressivement vers le niveau physiologique habituel du patient. Cette évolution peut s’accompagner d’une diminution du symptôme principal, d’une amélioration du sommeil, du transit, de l’énergie ou des capacités fonctionnelles.',
        },
        {
          type: 'sub',
          text: 'Point de décision à J3-J4',
        },
        {
          type: 'para',
          text: 'À J3-J4, le praticien et le patient réévaluent l’évolution :',
        },
        {
          type: 'bullets',
          items: [
            'Si le symptôme principal a disparu ou nettement régressé et que le fonctionnement habituel est retrouvé, la rémission clinique est considérée comme acquise à ce stade ;',
            'Si l’amélioration demeure incomplète, une deuxième séance peut être proposée ;',
            'Si la réponse est absente, atypique ou défavorable, la hiérarchisation et l’indication doivent être reconsidérées.',
          ],
        },
        {
          type: 'note',
          label: 'Terminologie',
          body: [
            'Dans ce chapitre, le terme « rémission » décrit l’évolution du motif fonctionnel suivi ; il ne signifie pas la guérison d’une éventuelle maladie organique sous-jacente.',
          ],
        },
        {
          type: 'sub',
          text: 'Réactions inhabituelles',
        },
        {
          type: 'para',
          text: 'Si les réactions sont intenses, persistent au-delà de 72 heures ou s’accompagnent de signes inhabituels ou inquiétants, la situation doit être réévaluée. Le patient est orienté vers son médecin lorsque le contexte le justifie.',
        },
        {
          type: 'note',
          label: 'Participez au retour d’expérience en ROP avec SuiviPatient',
          body: [
            'La chronologie décrite dans ce chapitre repose sur l’expérience clinique des praticiens. Pour mieux l’objectiver, de courts questionnaires peuvent être proposés à intervalles réguliers après la séance, notamment à 24-48 heures puis à J3-J4, en comparaison avec l’état initial.',
            'Les questionnaires portent sur le symptôme principal, la douleur ou la gêne, la vitalité, le sommeil, les fonctions viscérales, les capacités fonctionnelles et les éventuelles réactions post-traitement.',
            'Les praticiens lecteurs qui souhaitent rejoindre la communauté ROP et utiliser gratuitement l’application SuiviPatient avec leur patientèle sont invités à nous contacter. Cette démarche doit respecter le consentement du patient et la confidentialité des informations recueillies.',
          ],
        },
      ],
    },
    {
      id: 'conseils',
      title: 'Conseils au patient',
      blocks: [
        {
          type: 'para',
          text: 'Le meilleur traitement ne peut garantir une amélioration durable s’il n’est pas accompagné d’une participation active du patient et de mesures simples adaptées à sa situation. Les conseils relèvent le plus souvent du bon sens :',
        },
        {
          type: 'bullets',
          items: [
            'Prévoir un repos relatif et éviter les surcharges physiques le jour de la séance ;',
            'Maintenir une hydratation suffisante ;',
            'Adopter une alimentation équilibrée ;',
            'Conserver une activité physique régulière adaptée aux capacités du moment ;',
            'Favoriser le sommeil, la récupération et un environnement social soutenant ;',
            'Rester acteur de sa santé et consulter lorsque des signes nouveaux ou inquiétants apparaissent ;',
            'Noter l’évolution du symptôme principal, de la douleur, du sommeil, du transit, de la vitalité et des capacités fonctionnelles ;',
            'Rapporter ces éléments au praticien afin d’objectiver l’effet de la séance et d’ajuster la suite du traitement.',
          ],
        },
        {
          type: 'note',
          label: 'Synthèse pratique',
          body: [
            'Avant la séance : définir le symptôme principal et recueillir un niveau initial simple.',
            'Immédiatement après : observer la détente et les éventuelles réactions végétatives.',
            'À 24-48 heures : documenter les réactions transitoires et le début de récupération.',
            'À J3-J4 : confirmer la rémission ou proposer une deuxième séance si l’amélioration reste incomplète.',
            'Après trois séances sans amélioration : reconsidérer le diagnostic fonctionnel, la hiérarchisation et l’orientation médicale.',
          ],
        },
        {
          type: 'lead',
          label: 'Principe de suivi',
          text: 'La réponse du patient guide le rythme du traitement : observer, mesurer, réévaluer.',
        },
      ],
    },
  ],
  revisionSheet: {
    src: '/chapter-2/Chap2 - Fiche de revision.png',
    alt: 'Fiche de révision — Chapitre 2, Traitement par la R.O.P.',
    caption: 'Fiche de révision — Chapitre 2 · Traitement par la R.O.P.',
  },
}

import type { Chapter } from './types'

export const chapter3Fr: Chapter = {
  slug: 'chapter-3',
  number: '3',
  title: 'Système nerveux central',
  sections: [
    {
      id: 'presentation',
      title: 'Présentation',
      blocks: [
        { type: 'para', text: 'Le système nerveux autonome (SNA) comprend le Parasympathique et le Sympathique. Ils ont des origines différentes :' },
        { type: 'bullets', items: [
          'Le Parasympathique a une origine crânio-sacrale',
          'Le Sympathique a une origine thoracique.',
        ]},
        { type: 'para', text: 'Par contre, ils ont des centres communs dans le cerveau afin d’autoriser le SNA à s’adapter en permanence aux multiples modulations provenant de son environnement et que lui demandent toutes les régions de l’organisme. Ces centres du SNC sont :' },
        { type: 'bullets', items: [
          'Tronc cérébral et cervelet : dans la fosse cérébrale postérieure',
          'Diencéphale et système limbique : dans la fosse cérébrale moyenne',
          'Ces deux fosses sont subtentorielles (au-dessous de la tente du cervelet)',
          'Cortex (télencéphale) : il est supra-tentoriel (au-dessus de la tente du cervelet)',
        ]},
        { type: 'lead', label: 'Phylogénèse', text: 'pour s’adapter aux variations environnementales, le cerveau a évolué en strates successives depuis les espèces animales les plus primitives jusqu’à l’être humain.' },
        { type: 'lead', label: 'Ontogénèse', text: 'de la fécondation à l’âge adulte, le cerveau humain retrace toute l’évolution phylogénétique, ce qui nous permet de signifier qu’une partie animale demeure au fond de l’être humain.' },
        { type: 'lead', label: 'Théorie des trois cerveaux', text: 'bien que maintenant dépassée, la théorie de Paul D. Mac Lean en 1952, n’en est pas moins intéressante. Selon l’évolution phylogénétique, le cerveau est passé par trois phases successives :' },
        { type: 'bullets', items: [
          'Cerveau reptilien : il est le premier à exister',
          'Cerveau limbique ou émotionnel recouvrant le cerveau reptilien',
          'Néocortex : il recouvre les deux premiers.',
        ]},
      ],
    },
    {
      id: 'les-trois-cerveaux',
      title: 'Les trois cerveaux',
      blocks: [
        { type: 'lead', label: 'Cerveau reptilien', text: 'c’est le cerveau le plus archaïque qu’on retrouve chez les poissons et les reptiles. Il gère nos besoins les plus élémentaires pour nous protéger et survivre : faim, soif, sommeil, procréation. Il comprend le tronc cérébral et le cervelet situés dans la fosse cérébrale postérieure.' },
        { type: 'lead', label: 'Tronc cérébral', text: 'il permet la communication entre le cortex, le cervelet et la moelle spinale. Il est à l’origine des nerfs crâniens, à l’exception des nerfs olfactif I et optique II. Le tronc cérébral est aussi le siège de la décussation des voies motrices volontaires du système pyramidal et des voies sensitives. Il comprend trois parties : la moelle allongée (anciennement bulbe), le pont (anciennement protubérance annulaire) et le mésencéphale appelé aussi cerveau moyen.' },
        { type: 'lead', label: 'Moelle allongée', text: 'elle est située dans le foramen magnum. Elle est à l’origine des nerfs crâniens — glossopharyngien IX, vague X, accessoire XI et hypoglosse XII. Elle abrite des centres de régulation automatique respiratoire, cardiaque et digestive.' },
        { type: 'lead', label: 'Pont', text: 'il relie le cervelet aux deux hémisphères cérébraux. Sa face antérieure est parcourue et irriguée par le tronc basilaire formé par la réunion des deux artères vertébrales dans le foramen magnum. Sa face postérieure abrite le 4ème ventricule. Le pont contient l’origine des nerfs crâniens trijumeau V, abducens VI et facial VII.' },
        { type: 'para', text: 'Dans le pont, se trouve le locus coeruleus, acteur majeur dans le mécanisme de stress en libérant, sous l’action de l’hypothalamus, la noradrénaline qui va permettre la libération de l’adrénaline par les médullosurrénales (axe SAM).' },
        { type: 'lead', label: 'Mésencéphale', text: 'il est à hauteur de la grande scissure de la tente du cervelet, à l’extrémité antérieure du sinus droit. Sa face antérieure est en arrière et au-dessus de la selle turcique du sphénoïde où loge l’hypophyse. Sa face postérieure est en avant de l’épiphyse. Il contient l’origine des nerfs oculomoteur III et trochléaire IV.' },
        { type: 'lead', label: 'Ganglions de la base et neurotransmetteurs', text: 'le tronc cérébral (principalement dans le mésencéphale), renferme la plupart des ganglions de la base (anciennement noyaux gris centraux) : noyaux caudé et lenticulaire, locus niger, noyaux rouges et le putamen.' },
        { type: 'para', text: 'Ces ganglions de la base élaborent des substances chimiques, les neurotransmetteurs dont la fonction est la transmission de l’influx nerveux au niveau de la synapse entre deux neurones. On dénombre de nombreux neurotransmetteurs : noradrénaline, acétylcholine, dopamine, sérotonine, adrénaline, endorphines, GABA, etc. Les uns sont inhibiteurs, les autres excitateurs. Les ganglions de la base programment et assurent la bonne exécution des mouvements volontaires et automatiques.' },
        { type: 'para', text: 'Pathologie : la maladie de Parkinson se caractérise par la pauvreté et la lenteur à exécuter des mouvements et tremblements par déficience des ganglions de la base producteurs de dopamine.' },
        { type: 'rop', body: [
          'La plupart de ces neurotransmetteurs sont aussi produits par l’intestin grêle. Le nerf vague et les neurotransmetteurs permettent la relation de l’innervation intrinsèque de l’intestin grêle avec le cerveau, notamment avec le système limbique.',
        ]},
        { type: 'lead', label: 'Formation réticulaire', text: 'cette bande de substance grise au sein du tronc cérébral, va de la moelle spinale au mésencéphale. Elle reçoit de nombreuses informations sensitives, sensorielles, motrices, neuro-végétatives et émotionnelles qu’elle transmet aux thalamus, hypothalamus, cortex et cervelet (à l’exception des voies olfactives directement connectées au cerveau limbique).' },
        { type: 'rop', body: [
          'Les zones réflexes de la région occipitale sont les témoins de l’activité de la formation réticulaire dont elles ont conservé la représentation topique.',
          'Zones réflexes occipitales — Se reporter au livre Réflexothérapie occipito-podale, Elsevier-Masson, page 63 à 66.',
        ]},
        { type: 'lead', label: 'Cervelet', text: 'il est en arrière du pont dont il est séparé par le 4ème ventricule. Il est composé d’un lobe médian, le vernis, de deux hémisphères cérébelleux et de l’archéocérebellum en avant.' },
        { type: 'para', text: 'Il reçoit des informations de la moelle spinale, du tronc cérébral et du cerveau pour contrôler et réguler l’activité motrice et posturale. Il reçoit également des informations de l’appareil vestibulaire sur la position et le déplacement de la tête.' },
        { type: 'para', text: 'Pathologie : la destruction du cervelet ne produit pas de paralysie mais des troubles de l’équilibre et de la coordination des mouvements appelés ataxie, dont les symptômes sont :' },
        { type: 'bullets', items: [
          'l’adiadococinésie : impossibilité de faire le test des marionnettes',
          'l’hypermétrie par le test de l’index sur le nez',
          'la dyschronométrie par défaut pour commencer ou arrêter un mouvement',
        ]},
        { type: 'rop', body: [
          'Zones réflexes podales :',
          'Tronc cérébral : face plantaire médiale de la phalange distale du gros orteil, de l’articulation interphalangienne à la jonction diaphyse-tête.',
          'Cervelet : c’est par son innervation que nous pouvons agir sur le cervelet — le ganglion cervical supérieur contrôle la vascularisation du tronc basilaire qui irrigue le cervelet et le tronc cérébral : jonction diaphyse-tête médio-plantaire de C2 et C3.',
          'Ganglions de la base : dans le tronc cérébral mais principalement concentrés latéralement au mésencéphale, ils sont latéraux à la jonction diaphyse-tête médiale, à hauteur de la grande scissure de la tente du cervelet.',
        ]},
      ],
    },
    {
      id: 'cerveau-limbique',
      title: 'Cerveau limbique ou émotionnel',
      blocks: [
        { type: 'para', text: 'Limbique signifie « en bordure de » car il tapisse la face interne du cortex. Son évolution est beaucoup plus tardive, c’est le cerveau des mammifères : il recouvre le cerveau reptilien. On lui associe le diencéphale.' },
        { type: 'para', text: 'Il n’est pas une entité anatomique bien définie mais plutôt une entité neurophysiologique.' },
        { type: 'para', text: 'Il est le cerveau de nos pulsions et de nos émotions, qui sont elles-mêmes dépendantes de notre mémoire des évènements qui ont marqué notre vie depuis notre petite enfance. Il est à l’origine de nos comportements affectifs, de nos motivations et de nos désirs. Les émotions sont le carburant de la cognition.' },
        { type: 'lead', label: 'Noyaux limbiques', text: 'ce sont : l’amygdale, l’hippocampe, le cortex angulaire, le noyau accumbens, le corps mamillaire, le fornix, le bulbe olfactif et le corps calleux, l’insula.' },

        { type: 'sub', text: 'Amygdale' },
        { type: 'lead', label: 'Anatomie', text: 'structure paire, dans la région ventrale du lobe temporal, en regard de la tempe, au fond du sillon latéral, elle est petite, de la taille d’une amande. Elle est très connectée au bulbe olfactif (sans relais thalamique), au cortex préfrontal, aux noyaux de la base, au tronc cérébral, à l’hypothalamus et au thalamus.' },
        { type: 'lead', label: 'Physiologie', text: 'l’amygdale est notre système d’alarme car elle est activée par des émotions fortes, la peur, les dangers, les traumatismes effrayants ou toute situation de stress réelle ou imaginaire. Elle produit des neurotransmetteurs pour stimuler l’hypothalamus qui va activer le mécanisme de stress.' },
        { type: 'lead', label: 'Pathologie', text: 'en cas de stress répétitifs ou chroniques, l’amygdale voit son seuil de réactivité s’abaisser et rend l’individu hyperémotif, anxieux, phobique, hypochondriaque ou paranoïaque. Elle peut créer la peur panique. L’hyperréactivité de l’amygdale fait perdre les capacités de discernement et de jugement.' },
        { type: 'para', text: 'L’amygdale est plus développée à droite dans les états de stress. L’hémisphère cérébral droit présente une mémoire émotionnelle plus marquée. L’amygdale s’atrophie dans les états dépressifs.' },

        { type: 'sub', text: 'Hippocampe' },
        { type: 'lead', label: 'Anatomie', text: 'structure paire en regard de la tempe, il est situé sous le cortex, au-dessus de la 5ème circonvolution du lobe temporal. C’est une commissure logée dans le fornix. À son extrémité antérieure est l’amygdale.' },
        { type: 'lead', label: 'Physiologie', text: 'ses principales fonctions sont la mémorisation, la géo-localisation, l’attention et la vigilance. En faisant relais entre l’amygdale et le cortex préfrontal, il modère l’activité de l’amygdale par la sécrétion d’ocytocine, avant que l’information de traumatismes émotionnels parvienne au cortex préfrontal. L’hippocampe a des propriétés de neurogénèse pour l’apprentissage grâce à la propriété des astrocytes de la substance gliale de se différencier en neurones.' },
        { type: 'lead', label: 'Pathologie', text: 'sous stress chronique, antécédents de traumatismes physiques ou psychologiques, l’hippocampe s’atrophie : la maladie d’Alzheimer se caractérise par la perte de mémoire et de sommeil, de désorientation, anxiété et dépression. L’accumulation massive de protéines béta-amyloïdes et de protéines Tau dans les neurones, peu ou mal éliminées par le liquide glymphatique, diminue la communication inter-neurale.' },

        { type: 'lead', label: 'Système glymphatique cérébral', text: 'de découverte récente, le liquide glymphatique est une organisation circulatoire entre le liquide cérébro-spinal, le parenchyme cérébral et les vaisseaux lymphatiques méningés. Il est chargé de désintoxiquer le cerveau.' },

        { type: 'sub', text: 'Fornix' },
        { type: 'lead', label: 'Anatomie', text: 'en forme de fer à cheval au centre du cerveau, sous le corps calleux, il est une commissure qui contient les fibres nerveuses de l’hippocampe qui le relie à l’amygdale.' },
        { type: 'lead', label: 'Physiologie', text: 'il est aussi impliqué dans la mémorisation.' },

        { type: 'sub', text: 'Insula' },
        { type: 'para', text: 'C’est «l’île mystérieuse» en forme de coquillage, restée longtemps ignorée pour sa position médiale, recouverte par les lobes frontal, pariétal et temporal.' },
        { type: 'lead', label: 'Anatomie', text: 'elle est en regard de la partie antérieure de la suture pariéto-squameuse, et latérale aux ganglions de la base et à l’amygdale. Elle est très connectée à l’amygdale, au cortex cingulaire, aux centres supérieurs du SNA, au thalamus, au cortex somato-sensoriel.' },
        { type: 'lead', label: 'Physiologie', text: 'l’insula recueille les informations venant des viscères, leur activité et leurs dysfonctions via le nerf vague. Elle est notre conscience intéroceptive des émotions et des peurs accompagnant les réactions viscérales. Elle contrôle la peur, la colère, la tristesse, la joie et les addictions. Par ses connexions avec le cortex somato-sensoriel, elle participe à la conscience de soi.' },
        { type: 'lead', label: 'Pathologie', text: 'dépression, douleurs chroniques de la fibromyalgie : difficulté à ressentir les tensions internes ou les déséquilibres neuro-végétatifs.' },
        { type: 'rop', body: [
          'L’insula joue un rôle majeur dans les relations viscéro-émotionnelles. Chaque type d’émotion ressenti par l’insula, est suivi d’une réaction viscérale et à chaque viscère correspond un type d’émotion particulier.',
        ]},

        { type: 'sub', text: 'Cortex cingulaire' },
        { type: 'lead', label: 'Anatomie', text: 'positionné à la face médiale des hémisphères cérébraux, au-dessus du corps calleux, il est la partie du cortex la plus proche des autres centres du système limbique.' },
        { type: 'lead', label: 'Physiologie', text: 'c’est l’interface entre émotion et raison. Il transforme une émotion en raison. Il perçoit les émotions et les sentiments des autres, leur joie, leur colère, leur peur. C’est l’aire de l’empathie et de l’attention envers les autres. « Il est l’expression externe des états internes » (Yakolov).' },
        { type: 'lead', label: 'Pathologie', text: 'troubles de l’humeur, anxiété, dépression, douleurs chroniques.' },

        { type: 'sub', text: 'Corps mamillaire' },
        { type: 'lead', label: 'Anatomie', text: 'pair et symétrique, médian à la jonction des lobes frontal et temporal, à l’extrémité ventrale du fornix, il est en avant de l’amygdale et juste au-dessus du noyau accumbens.' },
        { type: 'lead', label: 'Physiologie', text: 'il contribue à la mémorisation et à la consolidation de nos émotions.' },
        { type: 'lead', label: 'Pathologie', text: 'son atrophie entraîne des troubles de la mémoire chez les personnes alcooliques par carence en vitamine B12 (syndrome de Korsakoff).' },

        { type: 'sub', text: 'Noyau accumbens' },
        { type: 'lead', label: 'Anatomie', text: 'pair et symétrique en avant de l’amygdale, il est en regard du point pivot sphéno-squameux.' },
        { type: 'lead', label: 'Physiologie', text: '« Il est impliqué dans le système de la motivation et de la récompense. La sécrétion de dopamine stimule le plaisir à vivre, à découvrir, à innover et à aller de l’avant dans des projets. » (Nathalie Camirand).' },
        { type: 'lead', label: 'Pathologie', text: 'baisse de la motivation, apathie, perte de plaisir, dépression, boulimie, troubles obsessionnels compulsifs (TOC), dépendance aux addictions (drogue, alcool, tabac). Les addictions stimulent la sécrétion de dopamine mais en augmentant le seuil de chaque prise.' },

        { type: 'sub', text: 'Bulbe olfactif I' },
        { type: 'lead', label: 'Anatomie', text: 'structure paire sur la lame criblée de l’ethmoïde, il est directement connecté au système limbique sans passer par le thalamus.' },
        { type: 'lead', label: 'Physiologie', text: 'il est le nerf de l’olfaction. Sur le plan émotionnel, en nous fiant à notre instinct, le bulbe olfactif envoie des messages odorants qui permettent d’identifier nos ennemis et nos amis, ou un danger imminent. Il relie l’émotion à la mémoire des odeurs. Par les phéromones, il est aussi lié à la sexualité pour rechercher sa ou son partenaire.' },
        { type: 'lead', label: 'Pathologie', text: 'perte de l’odorat (anosmie) à la suite d’un traumatisme crânien : de nombreuses fibrilles olfactives sont cisaillées sur la lame criblée de l’ethmoïde.' },

        { type: 'sub', text: 'Corps calleux' },
        { type: 'lead', label: 'Anatomie', text: 'il est la commissure la plus importante qui relie les deux hémisphères cérébraux. Il contient 200 à 300 millions de fibres de substance blanche.' },
        { type: 'lead', label: 'Physiologie', text: 'il coordonne et transfère les informations entre les lobes du cortex, concernant la mémoire, l’apprentissage, la concentration intellectuelle et la vue. Il assure aussi la transmission des émotions des deux amygdales entre les deux hémisphères.' },
        { type: 'lead', label: 'Pathologie', text: 'en cas de stress, il y a une sorte de déconnexion inter-hémisphérique où l’individu a tendance à ne pas réagir face à une situation.' },

        { type: 'rop', body: [
          'Tout le cerveau a tendance à mémoriser des stress émotionnels tristes, négatifs, effrayants mais leur encodage, leur engramme et leur consolidation se concentrent plutôt sur quelques centres importants comme l’amygdale, l’hippocampe, l’insula et le cortex cingulaire.',
          '« On n’efface jamais la trace d’une émotion ou d’un stress important, ils font partie intégrante de notre vie. » (Jean-Pierre Barral) : hérédité, vie fœtale, naissance, maladie, traumatismes physiques ou psychologiques, stress en tous genres jalonnent notre vie. Notre but est d’alléger le poids des émotions mais pas de les supprimer. L’objectif est de permettre à l’individu de mieux s’adapter et de compenser les stress qu’il a mémorisés.',
          'Zones réflexes podales — face plantaire de la phalange distale du gros orteil :',
          'Noyaux du système limbique (amygdale, hippocampe, fornix, noyau accumbens, corps mamillaire) : latéraux aux ganglions de la base, au niveau de la diaphyse.',
          'Insula : latérale aux noyaux limbiques.',
          'Bulbe olfactif : tête médiale plantaire de la phalange distale du gros orteil.',
          'Cortex cingulaire et corps calleux : bord médial plantaire de la phalange distale du gros orteil.',
        ]},
      ],
    },
    {
      id: 'diencephale',
      title: 'Diencéphale',
      blocks: [
        { type: 'para', text: 'Médial, il relie le tronc cérébral aux deux hémisphères cérébraux. Les ganglions de la base lui sont latéraux. Il ne fait pas partie à proprement parlé du système limbique, cependant ses différentes structures — thalamus, hypothalamus, épithalamus et subthalamus — lui sont étroitement liées.' },

        { type: 'sub', text: 'Thalamus' },
        { type: 'lead', label: 'Anatomie', text: 'structure paire entre les deux hémisphères cérébraux, il occupe 80% du diencéphale. En forme de petit œuf, le thalamus comporte une trentaine de noyaux connectés au cortex, aux autres structures du diencéphale, au tronc cérébral et aux noyaux du système limbique. Entre les deux thalamus, se trouve le 3ème ventricule. Il est vascularisé par des branches de la carotide interne et du tronc basilaire.' },
        { type: 'lead', label: 'Physiologie', text: 'le thalamus est le relais des informations sensitives, sensorielles, limbiques et des ganglions de la base qui rejoignent le cortex cérébral. Il est le relais de la douleur provenant de la moelle spinale. Il est le filtre qui trie et sélectionne les très nombreuses informations qui lui parviennent pour protéger le cerveau, en particulier pendant le sommeil, en le déconnectant des stimuli qui pourraient l’assaillir.' },
        { type: 'lead', label: 'Pathologie', text: 'très vascularisé, le thalamus peut être victime d’AVC, de traumatismes crâniens, de maladies neuro-dégénératives et de tumeurs. Les symptômes sévères — moteurs, douleurs, désorientation, aphasie — soulignent le rôle important du thalamus.' },

        { type: 'sub', text: 'Hypothalamus' },
        { type: 'lead', label: 'Anatomie', text: 'situé sous le thalamus et au-dessus de l’hypophyse, il a la forme d’une amande pour un poids de 4 grammes, soit seulement 1% du volume du cerveau alors que sa fonction est importante. Il est connecté à la post-hypophyse par la tige pituitaire, au cortex et aux noyaux limbiques.' },
        { type: 'lead', label: 'Vascularisation artérielle', text: 'la double fonction hormonale et neurologique de l’hypothalamus nécessite une vascularisation très développée, assurée par la carotide interne et le tronc vertébral.' },
        { type: 'bullets', items: [
          'Carotide interne : elle transmet à l’hypophyse l’information hormonale venant de l’hypothalamus, sans passer dans la circulation générale, donc sans dilution grâce à son système porte artériel hypothalamo-hypophysaire.',
          'Système porte : c’est un réseau de vaisseaux capillaires interposé sur le trajet de vaisseaux de même nature (artère-capillaires-artère, ou veine-capillaires-veine). Son débit est régulé par le ganglion sympathique cervical supérieur (C2-C3) et les nerfs glosso-pharyngien IX et vague X.',
          'Tronc vertébral : son débit est régulé par la chaîne ganglionnaire cervicale.',
        ]},
        { type: 'sub', text: 'Physiologie de l’hypothalamus' },
        { type: 'bullets', items: [
          'L’hypothalamus est le chef d’orchestre du SNA et du système hormonal : sa petite taille ne l’empêche pas d’exercer son contrôle sur l’homéostasie.',
          'Il module les réactions émotionnelles en étant le relais entre l’amygdale et le cortex préfrontal.',
          'Dans les états de stress importants, il met en action l’axe neurologique sympathico-adrénalo-médullaire (axe SAM) puis l’axe hormonal hypothalamo-hypophyso-surrénalien (axe HHS).',
        ]},

        { type: 'sub', text: 'Hypophyse' },
        { type: 'lead', label: 'Hypophyse', text: 'encore plus petite que l’hypothalamus, de la taille d’un petit pois et seulement 1 g, elle ne fait pas partie du diencéphale mais sa fonction et sa même origine embryologique sont indissociables de l’hypothalamus.' },
        { type: 'lead', label: 'Anatomie', text: 'logée dans la selle turcique du sphénoïde, au centre du crâne, en regard de la suture fronto-zygomatique et en arrière du bulbe olfactif, l’hypophyse est entourée par la dure-mère percée à la face supérieure par la tige pituitaire qui la relie à l’hypothalamus. Elle est formée de deux lobes : la posthypophyse ou neuro-hypophyse et l’antéhypophyse ou adéno-hypophyse.' },
        { type: 'lead', label: 'Post-hypophyse', text: 'elle est constituée de cellules nerveuses, en prolongement avec l’hypothalamus par la tige pituitaire. Elle sécrète deux hormones synthétisées par l’hypothalamus :' },
        { type: 'bullets', items: [
          'Vasopressine ou hormone diurétique (ADH) : elle participe à la régulation de la pression artérielle au niveau des reins en contrôlant la volémie. Sa déficience est responsable du diabète insipide.',
          'Ocytocine : elle favorise la contraction de l’utérus lors de l’accouchement et la lactation. Sa déficience est responsable de l’inertie utérine. Son autre rôle est l’attachement de la mère à son enfant.',
        ]},
        { type: 'lead', label: 'Antéhypophyse', text: 'elle est la partie hormonale de l’hypophyse, qui, sous l’influence de l’hypothalamus, sécrète les hormones suivantes :' },
        { type: 'bullets', items: [
          'ACTH pour la sécrétion du cortisol par le cortex surrénalien (axe hypothalamo-hypophyso-surrénalien HHS)',
          'GH ou prolactine pour la lactation en post-partum',
          'FSH pour les follicules ovariens et la spermatogénèse',
          'LH pour l’ovulation et la synthèse de la testostérone',
          'TSH pour la régulation des hormones thyroïdiennes T3 et T4 à partir de l’iode alimentaire',
          'MSH pour la synthèse de la mélanine qui protège la peau des rayons UV du soleil et qui lui donne sa couleur',
          'Endorphines antalgiques, relaxantes et anxiolytiques.',
        ]},
        { type: 'lead', label: 'Pathologie hypophysaire', text: 'l’adénome hypophysaire est la lésion la plus fréquente. C’est une tumeur bénigne qui, par son expansion, comprime le chiasma optique ce qui entraîne une hémianopsie uni- ou bilatérale (perte de vue partielle dans la moitié du champ visuel d’un œil ou des deux yeux). Le traitement est chirurgical : la voie endo-nasale par la narine droite est la plus fréquente.' },

        { type: 'sub', text: 'Épithalamus' },
        { type: 'lead', label: 'Épithalamus', text: 'situé à la partie postérieure du diencéphale, il comprend l’épiphyse, l’habenula et la strie médullaire.' },
        { type: 'lead', label: 'Épiphyse ou glande pinéale', text: 'située en arrière du 3ème ventricule et entre les deux thalamus, elle synthétise la mélatonine à partir de la sérotonine pour réguler les rythmes circadiens et saisonniers en fonction de la luminosité solaire : c’est notre horloge biologique.' },
        { type: 'lead', label: 'Habenula', text: 'structure paire située en arrière du mésencéphale, elle relie l’épiphyse au thalamus. Elle est impliquée dans le système de récompense/punition (avec les noyaux accumbens). Elle est altérée dans la dépression.' },
        { type: 'lead', label: 'Strie médullaire', text: 'elle relie le thalamus à l’habenula.' },
        { type: 'lead', label: 'Subthalamus ou corps de Luys', text: 'structure paire située à la partie antérieure du diencéphale, il est régulateur des fonctions motrices somatiques.' },

        { type: 'rop', body: [
          'Par leurs nombreuses fonctions, l’hypothalamus et l’hypophyse sont donc en première ligne dans notre action réflexe sur le syndrome général d’adaptation (SGA).',
          'Zones réflexes podales — face plantaire de la phalange distale du gros orteil :',
          'Diencéphale : il est dans le même plan sagittal que le sinus droit (jonction de la faux du cerveau et de la tente du cervelet). Tous les deux se confondent à la jonction diaphyse-tête médiale.',
          'Hypophyse : jonction diaphyse-base médiale en avant de la synchondrose sphéno-basilaire.',
          'Vascularisation : chaîne ganglionnaire cervicale, sinus carotidien.',
          'Dure-mère crânienne : se reporter au livre Réflexothérapie occipito-podale et système neuro-méningé, Elsevier Masson.',
          'Faux du cerveau et du cervelet : idem tronc cérébral et bulbe olfactif.',
          'Tente du cervelet : jonction diaphyse-tête.',
          'Innervation : nerfs trijumeau V, vague X et hypoglosse XII.',
          'Ganglion cervical supérieur (C2, C3) et ganglion cervical inférieur (C7-T1).',
        ]},
      ],
    },
    {
      id: 'cortex',
      title: 'Cortex ou télencéphale',
      blocks: [
        { type: 'para', text: 'C’est notre calotte pensante qui nous distingue des animaux. Il est présent chez les êtres humains et chez les mammifères supérieurs (dauphins, baleines, chimpanzés), mais le cortex humain est trois fois plus développé que celui du singe, essentiellement grâce au lobe frontal.' },
        { type: 'lead', label: 'Anatomie', text: 'situé au-dessus du cerveau limbique, il est divisé en deux hémisphères cérébraux réunis en leur centre par le corps calleux. Il occupe 85% du volume cérébral avec 10 milliards de neurones. Chaque hémisphère compte des lobes — frontal, pariétal, temporal et occipital — et contient un ventricule latéral. Sa vascularisation est assurée par la carotide interne et le tronc basilaire.' },
        { type: 'lead', label: 'Physiologie', text: 'le cortex est le centre de commandement de toutes nos fonctions conscientes : perception, motricité, raison, abstraction, langage, analyse, créativité, décision, intelligence.' },
        { type: 'para', text: 'Les cortex préfrontal et orbito-frontal exercent un contrôle sur notre cerveau limbique en prenant un certain recul face à un danger : ils sélectionnent les réponses les mieux adaptées grâce à leur capacité d’analyse. Ils régulent nos émotions, en calmant la réponse négative de peur et d’anxiété générée par l’amygdale. Ils jouent un rôle dans le comportement social pour orienter nos décisions face à la société et à nos obligations. « Ils jugent ce qui est approprié ou non en fonction de notre éducation, du pays où nous résidons et de notre personnalité. » (Jean-Pierre Barral).' },
        { type: 'lead', label: 'Pathologie', text: 'seuls les cortex préfrontal et orbito-nasal nous concernent dans cet ouvrage : sous stress, ils sont toujours activés lors de troubles anxieux, phobie, et affaiblis dans la dépression.' },
        { type: 'rop', body: [
          'Il n’y a pas de zones réflexes du cortex, partie cognitive du cerveau, pour deux raisons : la Réflexothérapie occipito-podale fait appel à l’activité réflexe, et le cerveau n’a pas de sensibilité — il n’y a donc pas de boucles réflexes.',
          'C’est indirectement, par les zones réflexes du MRP et de l’innervation du système vasculaire (carotide et tronc basilaire) que nous avons une action sur le cortex.',
          'MRP : notre action sur les os de la voûte crânienne — leurs sutures, les membranes intracrâniennes, le liquide cérébro-spinal — a un effet indéniable sur le cortex. Se reporter au livre Réflexothérapie occipito-podale et système neuro-méningé, Elsevier Masson.',
          'Zones réflexes podales :',
          'Voûte crânienne : face dorsale des trois phalanges des quatre derniers orteils et de la phalange distale du gros orteil.',
          'Chaîne ganglionnaire cervicale : innervation de l’artère vertébrale et de la carotide.',
          'Artère carotide interne dans le sinus caverneux : face plantaire médiale de la diaphyse de la deuxième phalange du 2ème orteil.',
          'Circulation du liquide cérébro-spinal : système veineux (foramens jugulaires, membranes intra-crâniennes et spinales), aspiration veineuse et cérébro-spinale à l’inspiration.',
          'Technique de compression du 4ème ventricule.',
          'Synchronisation Synchondrose sphéno-basilaire (SSB) — 2ème vertèbre sacrée S2.',
        ]},
      ],
    },
  ],
}

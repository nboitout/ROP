// Chapter 14 content — French
// Source: public/chapter-14/Chapitre_14_Intestin_grele_version_publiable.docx

import type { Chapter } from './types'

export type { Block, Section, Chapter } from './types'

export const chapter14Fr: Chapter = {
  slug: 'chapter-14',
  number: '14',
  title: 'Intestin grêle',
  sections: [
    {
      id: 'presentation',
      title: '1. Présentation',
      blocks: [
        { type: 'para', text: 'L’intestin grêle (ou petit intestin) est le viscère abdominal le plus long du corps : sur le cadavre, sa longueur est autour de 6 à 7 mètres, alors que chez le vivant, elle est nettement moindre en raison de son tonus musculaire. Il est constitué de deux parties :' },
        { type: 'bullets', items: ['Le duodénum', 'Le jéjunum-iléum.'] },
        { type: 'para', text: 'Ils s’étendent du pylore à la valvule iléo-caecale et jouent un rôle majeur dans la digestion et l’absorption. Bien que faisant partie de l’intestin grêle, le duodénum a fait l’objet d’un chapitre séparé en raison de sa spécificité anatomique et physiologique.' },
        {
          type: 'xref',
          label: 'Voir la référence dans le chapitre 10',
          text: 'Duodénum : présentation anatomique et physiologique',
          href: '/lecture/chapitre-10?lang=fr&xrefBack=%2Flecture%2Fchapitre-14%3Flang%3Dfr%23p-presentation-2&xrefBackLabel=Retour%20au%20chapitre%2014#p-presentation-1',
        },
        { type: 'para', text: 'Le jéjunum-iléum se distingue du duodénum par :' },
        { type: 'bullets', items: [
          'Une paroi fine, lisse, entièrement péritonisée et très mobile. Sa lumière n’est que de 2 à 3 cm de diamètre ;',
          'Un rôle majeur dans la digestion, par l’interaction de la muqueuse, des sécrétions intestinales et du microbiote (ou flore intestinale) ;',
          'Un rôle important dans le métabolisme et l’immunité ;',
          'Son système nerveux intrinsèque, particulièrement développé ;',
          'Des interactions étroites avec l’axe intestin-cerveau, pouvant s’accompagner d’effets sur la sphère émotionnelle.',
          'Sur le plan fonctionnel, l’intestin grêle et le côlon sont interdépendants.',
        ]},
      ],
    },
    {
      id: 'situation',
      title: '2. Situation',
      blocks: [
        { type: 'para', text: 'Le jéjunum-iléum occupe une grande partie de la cavité abdominale, plus volontiers à gauche qu’à droite, à l’intérieur du cadre colique. Le jéjunum siège préférentiellement dans le quadrant supérieur gauche de l’abdomen. L’iléum siège préférentiellement dans le quadrant inférieur droit de l’abdomen.' },
      ],
    },
    {
      id: 'anatomie',
      title: '3. Anatomie',
      blocks: [
        { type: 'figure', src: '/chapter-14/figure-14-2.png', caption: 'Figure 14.2 — Mésos', alt: 'Les mésos du péritoine', orientation: 'portrait', syncHide: true },
        { type: 'lead', label: '3.1. Jéjunum-iléum', text: 'il comporte 15 à 16 anses intestinales en forme de U, disposées en deux groupes. Un groupe supérieur à gauche, le jéjunum, plus développé que l’iléum, dont les anses et le système vasculaire sont plutôt orientés horizontalement. Un groupe inférieur à droite, l’iléum, dont les anses et le système vasculaire sont plutôt orientés verticalement.' },
        { type: 'lead', label: '3.2. Mésentère', text: 'c’est un méso, c’est-à-dire une réflexion à double feuillet du péritoine. Il enveloppe le jéjunum-iléum et le relie à la paroi postérieure de l’abdomen par l’intermédiaire de la racine du mésentère.' },
        { type: 'lead', label: '3.3. Racine du mésentère', text: 'elle constitue la ligne d’attache du mésentère et contribue à la stabilité de l’intestin grêle par ailleurs très mobile. Elle mesure 16 à 18 cm. Elle s’étend de la jonction duodéno-jéjunale à la jonction iléo-caecale en croisant l’axe médian de l’abdomen au niveau de l’ombilic (à hauteur du disque L3-L4).' },
        { type: 'para', text: 'La jonction duodéno-jéjunale est maintenue par le muscle de Treitz dont les fibres lisses s’attachent sur le pilier droit du diaphragme.' },
        { type: 'figure', src: '/chapter-14/figure-14-3.png', caption: 'Figure 14.3 — Racine du mésentère', alt: 'Racine du mésentère et son trajet abdominal', orientation: 'landscape', syncHide: true },
        { type: 'lead', label: 'Muscle de Treitz', text: 'il participe au maintien de l’angle duodéno-jéjunal par sa contraction, en attirant la racine du mésentère en haut et à gauche.' },
        { type: 'para', text: 'En favorisant une tension longitudinale, il participe à l’évacuation du contenu duodénal dans le jéjunum. La racine du mésentère fournit la vascularisation et l’innervation à l’intestin grêle.' },
        { type: 'figure', src: '/chapter-14/figure-14-4.png', caption: 'Figure 14.4 — Muscle de Treitz', alt: 'Muscle de Treitz et angle duodéno-jéjunal', orientation: 'landscape', syncHide: true },
        { type: 'rop', body: [
          'La perte de tension longitudinale de la racine du mésentère est à rapprocher, sur le plan clinique, du syndrome de la pince aorto-mésentérique ou nutcracker syndrome : c’est une compression du 4ème duodénum et de la veine rénale gauche entre l’aorte et l’artère mésentérique supérieure. L’évacuation du contenu duodénal dans le jéjunum peut être retardée avec risque de reflux gastroduodénal.',
          'Le riche réseau vasculo-nerveux et lymphatique de la racine du mésentère est hautement réflexogène. La sollicitation de sa zone réflexe vise à faciliter une réponse fonctionnelle du jéjunum-iléum.',
        ]},
      ],
    },
    {
      id: 'rapports',
      title: '4. Rapports',
      blocks: [
        { type: 'bullets', items: [
          'L’intestin grêle est intra-péritonéal.',
          'À gauche, le jéjunum recouvre le côlon descendant.',
          'À droite, l’iléum laisse libre le côlon ascendant.',
          'Dorsalement, l’intestin grêle répond à la paroi abdominale postérieure et aux organes rétro-péritonéaux, notamment la partie sus-mésocolique du duodénum, les reins, les uretères et les côlons ascendant et descendant.',
          'Ventralement : le grand omentum, anciennement grand épiploon.',
          'Caudalement : les organes pelviens, surtout la vessie.',
          'Céphaliquement : le mésocôlon transverse.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: '5. Vascularisation',
      blocks: [
        { type: 'figure', src: '/chapter-14/figure-14-5.png', caption: 'Figure 14.5 — Artère mésentérique supérieure', alt: 'Artère mésentérique supérieure et ses branches', orientation: 'portrait', syncHide: true },
        { type: 'para', text: 'L’intestin grêle a besoin d’une importante irrigation vasculaire et lymphatique pour assurer ses fonctions de digestion, d’absorption et immunitaire.' },
        { type: 'lead', label: '5.1. Vascularisation artérielle — artère mésentérique supérieure', text: 'elle constitue l’axe artériel principal de l’intestin grêle. Elle est une branche de l’aorte abdominale. Son origine se situe 1 cm au-dessous du tronc cœliaque, en regard du disque intervertébral Th12-L1. D’abord rétro-pancréatique puis en avant de la 3ème portion du duodénum, elle chemine entre les deux feuillets du mésentère. Elle donne de nombreuses branches collatérales. Elle irrigue tout l’intestin grêle, le côlon ascendant et les 2/3 proximaux du côlon transverse.' },
        { type: 'para', text: 'Son pouls, perceptible au niveau de la 3ème portion du duodénum, à droite de l’ombilic, peut constituer un repère clinique vasculaire, sans préjuger à lui seul du fonctionnement de l’intestin.' },
        { type: 'lead', label: '5.2. Drainage veineux — veine mésentérique supérieure', text: 'située à droite de l’artère mésentérique supérieure, elle fait partie du système porte. Elle draine vers le foie le sang veineux chargé des nutriments absorbés dans l’intestin grêle.' },
        { type: 'lead', label: '5.3. Drainage lymphatique', text: 'l’intestin grêle possède un réseau lymphatique développé. Il participe au système immunitaire. Il prend en charge les molécules de lipides et de protéines à chaîne longue et les vitamines liposolubles A, D, E, K acheminées vers le carrefour jugulo-subclavier gauche, via la citerne de Pecquet et le canal thoracique.' },
      ],
    },
    {
      id: 'innervation',
      title: '6. Innervation',
      blocks: [
        { type: 'sub', text: '6.1. Innervation du péritoine' },
        { type: 'para', text: 'Le péritoine reçoit une double innervation, somatique et autonome.' },
        { type: 'lead', label: '6.1.1. Péritoine pariétal', text: 'il reçoit une innervation somatique commune avec la paroi abdominale via les nerfs phréniques, les six derniers nerfs intercostaux et les nerfs du plexus lombaire. Il comporte de nombreuses terminaisons sensibles à la température, à la pression et à la douleur. Cette innervation commune avec la paroi abdominale éclaire la projection des douleurs cervicales, scapulaires, abdominales, lombaires d’origines péritonéale et viscérale transmises au système ostéo-musculo-articulaire par les fibres somatiques du feuillet pariétal.' },
        { type: 'lead', label: '6.1.2. Péritoine viscéral', text: 'il reçoit une innervation autonome extrinsèque commune avec les viscères. Sympathique : ses racines proviennent de Th8 à Th11. Elles rejoignent les plexus pré-vertébraux cœliaque et mésentérique supérieur via les nerfs grands et petits splanchniques.' },

        { type: 'sub', text: 'Nerf vague et système nerveux sympathique' },
        { type: 'leadBullets', items: [
          { label: 'Sensibilité viscérale', text: 'le péritoine viscéral est peu sensible au toucher, aux variations thermiques et à la section chirurgicale. La sensibilité viscérale est tributaire du système sympathique, stimulé par les étirements de l’intestin et les substances chimiques.' },
          { label: 'Motricité sympathique', text: 'le Sympathique diminue le péristaltisme et les sécrétions intestinales, notamment dans les états de stress, d’anxiété, de peur ou d’efforts.' },
          { label: 'Nerf vague — motricité', text: 'il est globalement antagoniste du Sympathique. Il favorise le péristaltisme et les sécrétions intestinales ainsi que la perméabilité intestinale pour favoriser l’absorption.' },
          { label: 'Nerf vague — sensibilité', text: 'le nerf vague contient 70 à 80 % de fibres sensitives qui renseignent en permanence le cerveau de l’état des viscères. Il est connecté au système nerveux intrinsèque.' },
        ]},

        { type: 'sub', text: '6.2. Système nerveux intrinsèque ou entérique (SNE)' },
        { type: 'para', text: 'Le système nerveux intrinsèque ou entérique (SNE) est souvent qualifié de 2ème cerveau ou cerveau abdominal. Il est constitué de plexus intramuraux situés dans la paroi même de l’intestin grêle : le plexus myoentérique d’Auerbach et le plexus sous-muqueux de Meissner.' },
        { type: 'bullets', items: [
          'Le SNE est sensible aux signaux neuro-hormonaux et à la composition chimique du contenu intestinal.',
          'Il peut fonctionner largement de manière autonome par rapport au cerveau et à la moelle épinière tant que les conditions physiologiques le permettent.',
          'Il participe de façon majeure à la production de médiateurs neurochimiques, dont une grande part de la sérotonine, l’acétylcholine, la noradrénaline et le GABA.',
          'Pacemaker intestinal : la paroi de l’intestin grêle possède aussi des cellules de Cajal, situées au sein des couches musculaires longitudinales et circulaires. Elles sont à l’origine d’ondes lentes et participent à la coordination de la motricité intestinale.',
        ]},
      ],
    },
    {
      id: 'physiologie',
      title: '7. Physiologie',
      blocks: [
        { type: 'sub', text: '7.1. Motricité' },
        { type: 'para', text: 'Elle est déclenchée par trois grands types de mécanismes :' },
        { type: 'bullets', items: [
          'Mécanique : par l’étirement de la paroi intestinale lors du passage du chyme.',
          'Neurologique : par l’action du nerf vague influencé par des signaux céphaliques comme la vue, l’odeur, le goût et le toucher des aliments, ainsi que par les mécanorécepteurs intestinaux.',
          'Hormono-chimique : par les sécrétions gastriques, duodénales, hépatobiliaires et pancréatiques.',
        ]},
        { type: 'para', text: 'L’intestin grêle est animé de contractions rythmiques, de mouvements en va-et-vient et de segmentation assurant l’homogénéisation du chyme, et de péristaltismes permettant la progression du chyme.' },

        { type: 'sub', text: '7.2. Écosystème intestinal' },
        { type: 'para', text: 'L’intestin grêle constitue un écosystème formé par la muqueuse intestinale, le système immunitaire et le microbiote intestinal.' },
        { type: 'lead', label: '7.2.1. Muqueuse intestinale', text: 'elle constitue l’interface entre le milieu intérieur de l’organisme et le contenu de la lumière digestive. Elle agit comme une barrière sélective afin de permettre la digestion et l’absorption.' },
        { type: 'lead', label: 'Digestion', text: 'elle correspond à la transformation des aliments en molécules simples pouvant ensuite être absorbées. Les cellules caliciformes produisent un mucus protecteur. Les cellules de Lieberkühn participent à la sécrétion intestinale légèrement alcaline ainsi qu’à des fonctions enzymatiques et antimicrobiennes. Les entérocytes ou cellules absorbantes assurent une fonction de barrière sélective grâce à leur agencement intercellulaire (desmosomes), permettant l’absorption des micronutriments tout en limitant le passage de macromolécules insuffisamment dégradées.' },
        { type: 'lead', label: 'Absorption', text: 'la muqueuse intestinale est recouverte de villosités en forme d’expansions digitiformes dont l’axe central renferme des cellules musculaires lisses ainsi qu’un réseau sanguin et lymphatique. Les villosités sont elles-mêmes recouvertes de microvillosités formant une bordure en brosse, ce qui multiplie fortement la surface d’échange. L’intestin grêle étalé aurait une superficie équivalente à un court de tennis.' },
        { type: 'leadBullets', items: [
          { label: 'Voie sanguine', text: 'les capillaires sanguins absorbent l’eau, les sels minéraux, les oses simples, les acides aminés, les acides gras à chaîne courte et les vitamines hydrosolubles. Ces nutriments sont acheminés vers le foie par le système porte.' },
          { label: 'Voie lymphatique', text: 'les capillaires lymphatiques (ou chylifères) absorbent principalement les graisses, les protéines à chaîne longue et les vitamines liposolubles A, D, E, K. Ils rejoignent successivement le réseau lymphatique, la citerne de Pecquet, le canal thoracique, avant de déboucher dans le réseau veineux du carrefour jugulo-subclavier gauche.' },
        ]},
        { type: 'rop', body: [
          'L’action réflexe sur la motricité intestinale vise à soutenir la digestion et l’absorption.',
          'L’action réflexe sur le foie et le système lymphatique vise à soutenir la qualité de l’absorption et les fonctions immunitaires.',
        ]},
        { type: 'lead', label: '7.2.2. Système immunitaire intestinal', text: 'des récepteurs, situés à la surface de l’intestin, identifient certains agents pathogènes ou substances potentiellement nocives et les présentent aux cellules immunitaires intestinales : mastocytes (impliqués dans les réponses allergiques et inflammatoires), cellules de Paneth (libèrent des peptides antimicrobiens) et tissu lymphoïde associé au tube digestif (GALT), composé de lymphocytes isolés ou regroupés en plaques de Peyer.' },
        { type: 'lead', label: 'Microbiote intestinal', text: 'c’est un ensemble de bactéries, champignons, levures, virus et protozoaires vivant en interaction avec leur hôte. On estime leur nombre à environ 38 milliards de bactéries dans l’organisme humain. Chacun possède une signature propre du microbiote. Le microbiote constitue un déterminant important de notre bonne santé : il participe à l’immunité, à la digestion et à l’absorption, et interagit avec les fonctions cérébrales et émotionnelles via l’axe intestin-cerveau.' },
      ],
    },
    {
      id: 'pathologies',
      title: '8. Pathologies courantes',
      blocks: [
        { type: 'para', text: 'L’hyperperméabilité intestinale et la dysbiose sont souvent décrites comme associées, l’une provoquant l’autre et réciproquement.' },

        { type: 'lead', label: '8.1. Hyperperméabilité intestinale', text: 'lorsque les jonctions intercellulaires entre entérocytes sont altérées, la perméabilité intestinale peut augmenter. Cela peut s’accompagner d’un passage accru de macromolécules luminales insuffisamment dégradées entraînant une activation immunitaire ou inflammatoire.' },
        { type: 'sub', text: 'Causes' },
        { type: 'bullets', items: [
          'Agents infectieux : staphylocoques, streptocoques, colibacilles, salmonelle, candida albicans qui libèrent des toxines.',
          'Stress chronique : le Sympathique et les hormones du stress (adrénaline, cortisol) en excès provoquent une vasoconstriction et une fragilité de la muqueuse.',
          'Aliments hautement transformés ou raffinés, à index glycémique élevé, acides gras saturés, excès de lait de vache, de gluten et de viande.',
          'Activités sportives longues (type courses de grande distance) : elles peuvent réduire transitoirement la perfusion splanchnique.',
          'Médicaments : les anti-inflammatoires non stéroïdiens, salicylés, corticoïdes, antibiotiques et chimiothérapie.',
        ]},
        { type: 'sub', text: 'Conséquences' },
        { type: 'bullets', items: [
          'Allergies alimentaires : une altération de la barrière intestinale peut favoriser une exposition accrue du système immunitaire à certains antigènes alimentaires.',
          'Maladies auto-immunes : les protéines insuffisamment dégradées qui traversent la muqueuse sont considérées comme « non soi ». Les anticorps détruisent le « non soi » ainsi que le tissu sur lequel elles se sont fixées.',
          'Carences en micronutriments : la mauvaise qualité d’absorption peut entraîner une carence en vitamines, minéraux et acides gras essentiels.',
          'Surcharge hépatique : l’augmentation dans le système porte de substances issues de la lumière intestinale peut majorer le travail de détoxication hépatique.',
        ]},
        { type: 'rop', body: [
          'En présence de douleurs et de fixations ostéo-musculo-articulaires, surtout lorsque la notion de traumatisme ou de sur-sollicitation n’est pas évidente, la démarche de la ROP invite à rechercher un lien possible avec des dysfonctions viscérales.',
        ]},

        { type: 'lead', label: '8.2. Dysbiose', text: 'elle correspond à la perturbation du microbiote. Lorsque la composition du microbiote se modifie — avec baisse de diversité ou déséquilibre entre espèces commensales et espèces potentiellement pathogènes — la protection de la muqueuse peut être altérée.' },
        { type: 'lead', label: 'Causes de dysbiose', text: 'le stress, l’inflammation, les infections, une mauvaise hygiène de vie ou un déséquilibre alimentaire (abus d’alcool, de sucre et de protéines ou une absence de fibres), une antibiothérapie, certaines expositions environnementales ainsi que des fixations vertébrales et des fibroses de l’intestin et de ses attaches.' },
        { type: 'para', text: 'La dysbiose est considérée comme facteur associé dans de nombreuses pathologies, notamment : rectocolite hémorragique, thyroïdite, asthme, sinusite, allergies, arthralgies (lombalgies), fibromyalgie, cystite, certaines formes dépressives. Certains auteurs avancent que des maladies neuro-dégénératives telles que Parkinson, la sclérose en plaque ou la maladie d’Alzheimer pourraient être en lien avec le système nerveux entérique via le nerf vague.' },

        { type: 'lead', label: 'Signes annonciateurs', text: 'mauvaise haleine, éructation, aérocolie, émission de gaz malodorants, constipation/diarrhée, pyrosis, attirance exagérée pour le sucre et la viande crue.' },

        { type: 'lead', label: '8.3. Diagnostic d’exclusion', text: 'certains symptômes doivent orienter les patients vers un médecin : fièvre, sang rouge ou noir dans les selles, déshydratation importante, perte de poids importante et inexpliquée, alternance constipation-diarrhée, vomissements, douleur colique de la région ombilicale, météorisme, occlusion (iléus mécanique ou paralytique), hernie inguinale étranglée, ganglion de Troisier (suspicion de cancer), signe de l’épanchement intra-abdominal.' },

        { type: 'rop', body: [
          '8.4. Indications : pathologies fonctionnelles — dysbioses, suites de gastro-entérites, entéroptoses (tension anormale de l’intestin grêle associée à des vasoconstrictions, stases veineuses et lymphatiques, et spasmes des plexus nerveux péri-vasculaires), iléus paralytique (inhibition de la motricité et des sécrétions intestinales par irritation du péritoine à dominante sympathique).',
        ]},

        { type: 'sub', text: '8.4.3. Maladie de Crohn' },
        { type: 'para', text: 'Cette maladie touche essentiellement l’iléum et le côlon. Plusieurs facteurs y sont associés : génétique, dysbiose, environnement, et émotionnel comme facteur de modulation du vécu et parfois des poussées.' },
        { type: 'lead', label: 'Symptômes', text: 'diarrhée liée à l’inflammation de la paroi intestinale, douleurs abdomino-pelviennes, amaigrissement, asthénie, aphtes buccaux, lombalgie, érythèmes noueux des membres, atteinte pancréatique, syndrome dépressif.' },
        { type: 'lead', label: 'Évolution', text: 'chronicité, risque accru de cancer colorectal selon l’extension et l’ancienneté de la maladie. Ces patients sont souvent obligés d’adopter un régime strict comportant peu de fibres.' },
        { type: 'rop', body: [
          'Notre expérience clinique nous a montré que l’approche ROP peut contribuer à soulager certaines douleurs abdomino-pelviennes de la maladie de Crohn et à soutenir un meilleur transit.',
        ]},
      ],
    },
    {
      id: 'rop',
      title: 'Zones réflexes podales',
      blocks: [
        { type: 'sub', text: 'Syndrome général d’adaptation' },
        { type: 'sub', text: '1. Nerf vague' },
        { type: 'bullets', items: [
          'Territoire crânien et cervical du nerf vague.',
          'Territoire abdominal gauche du nerf vague et plexus cœliaque (solaire).',
          'Hiatus œsophagien (nerfs vagues droit et gauche) et cardia.',
          'Petite courbure de l’estomac, riche en fibres vagales.',
        ]},
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-02.png', caption: 'Photo : Nerf vague X dans la moelle allongée', alt: 'Repère podal du nerf vague X dans la moelle allongée', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-04.png', caption: 'Photo : Nerf vague X dans le foramen jugulaire', alt: 'Repère podal du nerf vague X dans le foramen jugulaire', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-06.png', caption: 'Photo : Hiatus œsophagien et nerfs vagues droit et gauche', alt: 'Repère podal du hiatus œsophagien et des nerfs vagues', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-08.png', caption: 'Photo : Petite courbure de l’estomac', alt: 'Repère podal de la petite courbure de l’estomac', orientation: 'portrait' },

        { type: 'sub', text: '2. Système sympathique' },
        { type: 'bullets', items: [
          'Colonne vertébrale, articulations costo-transversaires (chaîne ganglionnaire latéro-vertébrale thoracique Th8-Th10).',
          'Plexus cœliaque (solaire).',
          'Plexus lombaire (lien viscéro-somatique).',
        ]},
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-10.png', caption: 'Photo : Origine médullaire du parasympathique pelvien ou sacré', alt: 'Repère podal de l’origine médullaire du parasympathique pelvien ou sacré', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-12.png', caption: 'Photo : Chaîne plexique prévertébrale', alt: 'Repère podal de la chaîne plexique prévertébrale', orientation: 'landscape' },

        { type: 'para', text: 'N.B. Dans notre expérience clinique, les troubles fonctionnels intestinaux sont souvent observés chez la femme en lien avec des facteurs hormonaux et émotionnels.' },

        { type: 'sub', text: 'Syndrome locorégional' },
        { type: 'bullets', items: [
          'Diaphragme (attache du muscle de Treitz sur le pilier droit).',
          'Estomac (réflexe gastro-entérique).',
          'Racine du mésentère : une ligne de la jonction duodéno-jéjunale à l’ombilic, à hauteur de L3-L4 (face plantaire du pied gauche).',
          'Racine du mésentère : une ligne de la valvule iléo-caecale à l’ombilic (face plantaire du pied droit).',
        ]},
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-16.png', caption: 'Photo : Racine du mésentère entre la valvule iléo-caecale et l’ombilic', alt: 'Repère podal de la racine du mésentère côté iléum', orientation: 'portrait' },

        { type: 'sub', text: 'Zones réflexes podales — Jéjunum (pied gauche)' },
        { type: 'bullets', items: [
          'Limite supérieure : une ligne horizontale à hauteur des styloïdes des 5èmes métatarses.',
          'Limite inférieure : le bord antérieur des talons (branches ilio-pubiennes).',
          'Limite latérale : jusqu’au bord latéral du pied gauche.',
          'Respecter l’orientation des anses : horizontales pour le jéjunum.',
        ]},
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-17.png', caption: 'Photo : Jéjunum (limites supérieure et inférieure)', alt: 'Repère podal du jéjunum sur le pied gauche', orientation: 'portrait' },

        { type: 'sub', text: 'Zones réflexes podales — Iléum (pied droit)' },
        { type: 'bullets', items: [
          'Limite supérieure : une ligne horizontale à hauteur des styloïdes des 5èmes métatarses.',
          'Limite inférieure : le bord antérieur des talons (branches ilio-pubiennes).',
          'Limite latérale : à l’aplomb du 4ème orteil du pied droit.',
          'Respecter l’orientation des anses : verticales pour l’iléum.',
        ]},
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-18.png', caption: 'Photo : Iléum (limites supérieure et inférieure)', alt: 'Repère podal de l’iléum sur le pied droit', orientation: 'portrait' },

        { type: 'sub', text: '3. Système limbique' },
        { type: 'lead', label: 'Balance cerveau limbique — intestin grêle', text: 'écoute-induction : un pouce sur l’intestin grêle, l’autre pouce sur le cerveau limbique.' },
        { type: 'figure', src: '/chapter-14/cartographie/figure-14-19.png', caption: 'Photo : Technique balance viscéro-émotionnelle — intestin grêle', alt: 'Technique balance viscéro-émotionnelle intestin grêle et cerveau limbique', orientation: 'portrait' },
      ],
    },
    {
      id: 'relations',
      title: '9–11. Relations et conseils',
      blocks: [
        { type: 'sub', text: '9. Relations viscéro-somatiques' },
        { type: 'bullets', items: [
          'Fixation vertébrale de Th10 à Th12 et leurs côtes.',
          'L1 et L2.',
        ]},

        { type: 'sub', text: '10. Relations viscéro-émotionnelles' },
        { type: 'para', text: 'Le ventre peut constituer un lieu d’expression somatique des tensions émotionnelles. Par l’intermédiaire de l’axe intestin-cerveau, le stress peut moduler la motricité, les sécrétions et la sensibilité viscérale. Une activation sympathique accrue, associée à une moindre régulation vagale, peut ainsi contribuer à l’apparition ou à l’aggravation de certains symptômes digestifs.' },
        { type: 'para', text: 'Sur le plan clinique, il est souvent difficile de distinguer nettement les manifestations fonctionnelles propres à l’intestin grêle de celles du côlon. La muqueuse, le système immunitaire intestinal et le système nerveux entérique forment une interface neuro-immuno-endocrine en communication permanente avec le cerveau.' },
        { type: 'para', text: 'Certaines personnes souffrant de troubles digestifs chroniques rapportent également fatigue, anxiété, irritabilité, troubles du sommeil ou hypersensibilité corporelle. Ces manifestations sont variables et non spécifiques. Elles ne définissent pas une personnalité propre à l’intestin et doivent être replacées dans le contexte médical, émotionnel et social de chaque personne.' },
        { type: 'para', text: 'Dans une approche ROP, l’exploration des tensions émotionnelles peut compléter l’évaluation fonctionnelle, sans attribuer automatiquement les symptômes digestifs à une origine psychologique et sans se substituer au diagnostic médical.' },

        { type: 'sub', text: '11. Conseils' },
        { type: 'para', text: 'L’intestin grêle reflète les tensions émotionnelles et psychiques. Les spasmes intestinaux fixent la colonne lombaire. Privilégier une alimentation variée et équilibrée sans excès d’hydrates de carbone et de protéines animales. Ne pas faire d’activité sportive pendant la digestion.' },
      ],
    },
  ],
  revisionSheet: {
    src: '/chapter-14/fiche-de-revision.png',
    alt: 'Fiche de révision — Chapitre 14, Intestin grêle',
    caption: 'Fiche de révision — Chapitre 14 · Intestin grêle',
  },
  clinicalCase: {
    src: '/chapter-14/Chapter14 Cas Clinique.jpg',
    caption: 'Cas clinique — Chapitre 14',
    alt: 'Cas clinique intestin grêle en R.O.P.',
  },
}

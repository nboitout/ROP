// Chapter 5 content — French
// Source: assets/Chapitre 5 Mécanisme de Stress.docx (Guy Boitout)
// Structured for i18n: same shape will be reused for /en/chapter-5 etc.

import type { Chapter } from './types'

export type { Block, Section, Chapter } from './types'

export const chapter5Fr: Chapter = {
  slug: 'chapter-5',
  number: '5',
  title: 'Mécanisme de stress',
  sections: [
    {
      id: 'presentation',
      title: 'Présentation',
      blocks: [
        { type: 'para', text: 'Stress est un mot constamment utilisé dans nos sociétés modernes : la compétition, la concurrence, la recherche de la performance nous poussent à aller toujours plus vite, avec le risque, si nous n’en prenons pas garde, que le stress nous submerge jusqu’à l’épuisement.' },
        { type: 'para', text: 'La notion moderne de stress a été développée par Walter Cannon (1871-1945) qui a contribué à formaliser le concept d’homéostasie, dans le prolongement des travaux de Claude Bernard.' },
        { type: 'para', text: 'Hans Selye (1907-1982) a décrit le syndrome général d’adaptation (SGA) présenté comme l’ensemble des mécanismes physiologiques, neurologiques, endocriniens et immunitaires mobilisés par l’organisme face aux agressions.' },
        { type: 'para', text: 'A ces trois systèmes, s’est rajouté plus tard le système limbique ou émotionnel en raison de la charge affective rattachée au mécanisme de stress.' },
      ],
    },
    {
      id: 'definitions',
      title: 'Définitions',
      blocks: [
        { type: 'leadBullets', items: [
          { label: 'Stress', text: 'le stress, ou plus précisément la réponse à une situation perçue comme menaçante, met en place un ensemble de réactions destinées à préserver l’organisme d’un écart excessif par rapport aux normes homéostatiques.' },
          { label: 'Homéostasie', text: 'c’est la capacité de l’organisme à maintenir l’équilibre de son milieu intérieur : température corporelle, pH sanguin, constantes biologiques sanguines, glycémie, etc.' },
          { label: 'Allostasie', text: 'c’est la capacité d’adaptation de l’organisme en réponse aux différents agents stressants environnementaux, afin de maintenir l’homéostasie dans un contexte changeant.' },
        ]},
        { type: 'para', text: 'En d’autres termes, le mécanisme de stress a pour fonction de maintenir la stabilité (homéostasie) dans le changement (allostasie).' },
        { type: 'para', text: 'Mécanisme de stress, homéostasie et allostasie sont étroitement liés. En contrôlant les fonctions internes, le système nerveux autonome (SNA) est en première ligne pour répondre à une situation de stress ou de conflit, en vue de préserver l’homéostasie. C’est pourquoi ce chapitre sera consacré au rôle du SNA dans le mécanisme de stress, et à ses relations avec le cerveau limbique et le cortex.' },
        { type: 'para', text: 'Le mécanisme de stress est un phénomène protecteur fondamental de la vie auquel nous sommes tous soumis et pour lequel nous sommes biologiquement préparés. À court terme, le mécanisme de stress est protecteur en vue du retour à l’homéostasie. Quand il devient intense, durable et répétitif, il a un coût énergétique. Il peut affecter la vitalité et s’accompagne d’une diminution des capacités d’adaptation. L’organisme peut alors évoluer progressivement vers les pathologies fonctionnelles, puis, selon le terrain, vers les maladies chroniques ou dégénératives.' },
      ],
    },
    {
      id: 'stresseurs',
      title: 'Stresseurs',
      blocks: [
        { type: 'para', text: 'Dans le langage courant, nous avons tendance à confondre stress et stresseur. Le stresseur ou agent stressant déclenche le mécanisme de stress.' },
        { type: 'lead', label: 'Définition', text: 'les stresseurs sont des stimuli exacerbant la fonctionnalité habituelle de base d’un individu et mettant en marche le mécanisme de stress.' },
        { type: 'lead', label: 'Stress négatif', text: 'il est appelé distress et se manifeste par : tristesse, échec, doute, insécurité, peur, colère, etc. Il s’accompagne d’une réponse neuroendocrinienne impliquant le cortisol susceptible d’influencer les trois grands systèmes participant à l’homéostasie : nerveux, hormonal et immunitaire.' },
        { type: 'para', text: 'Tous les systèmes peuvent ensuite être concernés selon les prédispositions individuelles génétiques et le mode de vie : troubles digestifs, asthme, affections de l’appareil locomoteur, infections, maladies cardio-vasculaires, anxiété, dépression, maladies auto-immunes, maladies neuro-dégénératives, cancer, etc.' },
        { type: 'lead', label: 'Stress positif', text: 'il est appelé eustress et se manifeste par : amour, joie, enthousiasme, liberté, confiance, sécurité, etc. Il s’accompagne d’une activation de neuromédiateurs autres, dont l’adrénaline, pouvant soutenir une réponse adaptative favorable à court terme.' },
        { type: 'figure', src: '/chapter-5/figure-5-1.jpeg', alt: 'Schéma des trois grands stresseurs : physiques, émotionnels et biochimiques', caption: 'Figure 5.1 — Les trois grands stresseurs', orientation: 'landscape' },
        { type: 'lead', label: 'Types de stresseurs', text: 'certains sont facilement identifiables, notamment les stresseurs physiques et émotionnels. En revanche, les stresseurs biochimiques agissent très souvent à bas bruit et ne sont donc pas pris en compte (figure 5.1).' },
        { type: 'leadBullets', items: [
          { label: 'Stresseurs physiques', text: 'accidents, whiplashs (type coup du lapin), excès d’activité physique ou sportive jusqu’à l’épuisement ou à l’inverse insuffisante, conditions de naissance, rythme de vie effréné, manque de sommeil, agressions sensorielles — bruit, odeur, lumière, douleur intense ou chronique, dégoût nauséeux des aliments — pollution de l’air, climats extrêmes, etc.' },
          { label: 'Stresseurs émotionnels, psychologiques et sociaux', text: 'ils figurent parmi les stresseurs pouvant avoir un impact majeur sur la santé : ruptures affectives, conflits familiaux, séparations, rejets sociaux et professionnels, isolement, harcèlement, échecs scolaires ou professionnels. Les stresseurs les plus destructeurs, sur le plan émotionnel et psychologique, sont les abus et agressions sexuels, les incestes et les viols.' },
          { label: 'Stresseurs biochimiques', text: 'les déséquilibres et intolérances alimentaires, les dysbioses (déséquilibre du microbiote intestinal), les parasitoses, la charge virale, les expositions environnementales, les métaux lourds, les perturbateurs endocriniens, etc., peuvent altérer de façon insidieuse l’état général et contribuer à l’altération de la santé.' },
        ]},
        { type: 'lead', label: 'Interprétation', text: 'ce n’est pas seulement la nature du stresseur qui importe, mais aussi son interprétation par le sujet « stressé », c’est-à-dire l’idée qu’il se fait de la menace réelle ou supposée. En d’autres termes, ce qui importe, c’est la manière dont le cerveau interprète et répercute les stresseurs sur les grands systèmes qui participent au maintien de l’homéostasie.' },
        { type: 'lead', label: 'Charge allostatique', text: 'tant que la vitalité de l’individu supporte la charge de stress (ou charge allostatique), le mécanisme d’adaptation tient bon.' },
        { type: 'para', text: 'Quand l’intensité, la durée, la fréquence, l’urgence et l’inattendu des stresseurs s’accumulent, ils finissent avec le temps par fragiliser l’individu avec des effets délétères sur la santé. Sa vulnérabilité face aux stresseurs augmente. L’organisme peut alors évoluer progressivement vers une décompensation des mécanismes de stress.' },
        { type: 'lead', label: 'Effets cumulatifs des stresseurs', text: 'les trois types de stresseurs — physiques, émotionnels et biochimiques — interagissent entre eux (figure 5.2) : un stress émotionnel peut influencer le tractus gastro-intestinal et engendrer des douleurs vertébrales, lombaires ou cervicales et affecter la vie quotidienne, professionnelle ou sportive. Des dysfonctions ostéo-musculo-articulaires chroniques douloureuses, qu’on rencontre dans la fibromyalgie, peuvent s’accompagner de changements psychologiques tels que l’anxiété ou la dépression et influencer la biologie de l’organisme. Cette trilogie de stresseurs peut contribuer à l’installation de maladies chroniques dont la prise en charge gagne à être envisagée dans un esprit de santé globale.' },
        { type: 'rop', body: [
          'Le mécanisme de stress est en amont de la maladie. Selon les propres fragilités de l’individu, liées à son hérédité, à ses antécédents pathologiques et à son mode de vie, il peut développer des maladies par échec des mécanismes d’adaptation. Dans cette perspective, nous sommes malades parce que nous perdons la santé et non l’inverse.',
          'La ROP intègre complètement cette vision de la santé et de la maladie : un symptôme doit être replacé dans son contexte — le syndrome général d’adaptation.',
        ]},
        { type: 'figure', src: '/chapter-5/figure-5-2.jpeg', alt: 'Schéma de l’effet cumulatif des stresseurs physiques, émotionnels et biochimiques', caption: 'Figure 5.2 — Effet cumulatif des stresseurs', orientation: 'portrait' },
      ],
    },
    {
      id: 'sga',
      title: 'Syndrome général d’adaptation (SGA)',
      blocks: [
        { type: 'para', text: 'Ce modèle proposé par Hans Selye explique l’impact du stress sur l’organisme et la manière dont celui-ci tente d’y répondre. Il évolue selon quatre phases : alarme, recouvrement, adaptation-résistance, épuisement (figure 5.3).' },
        { type: 'figure', src: '/chapter-5/figure-5-3.jpeg', alt: 'Courbe des quatre phases du syndrome général d’adaptation', caption: 'Figure 5.3 — Les quatre phases du syndrome de stress', orientation: 'portrait' },

        { type: 'sub', text: 'Phase d’alarme' },
        { type: 'para', text: 'Mots-clés : réaction immédiate aux stresseurs, urgence, mobilisation des ressources énergétiques, activation du Sympathique.' },
        { type: 'para', text: 'Les trois cerveaux — reptilien, limbique et cortex — sont ici décrits dans le cadre du modèle utilisé dans cet ouvrage.' },
        { type: 'lead', label: 'L’amygdale', text: 'alertée par une menace, un danger réel ou imaginaire, elle active l’hypothalamus qui met en place le mécanisme de stress selon deux axes : en premier l’axe neurologique, puis l’axe hormonal.' },
        { type: 'para', text: 'En même temps, l’hippocampe et les circuits corticaux participent à la modulation de la réponse émotionnelle, avant que l’information n’atteigne le cortex préfrontal, où elle est analysée et rendue consciente.' },
        { type: 'figure', src: '/chapter-5/figure-5-4.jpeg', alt: 'Schéma des axes neurologique SAM et hormonal HHS', caption: 'Figure 5.4 — Axes neurologique SAM et hormonal HHS', orientation: 'landscape' },
        { type: 'lead', label: 'Axe neurologique (figure 5.4)', text: 'dans l’urgence, la réponse sympathique prime. Elle est immédiate. Elle passe par l’activation hypothalamique qui active le locus coeruleus situé dans le pont du tronc cérébral. Celui-ci libère la noradrénaline qui, à son tour, active la médullosurrénale, laquelle sécrète l’hormone de l’urgence : l’adrénaline. C’est l’axe sympathico-adrénalo-surrénalien (SAM). Le sympathique, présent dans tout le corps, induit une réponse globale afin de réagir à une menace ou un danger.' },
        { type: 'para', text: 'L’axe SAM accélère les rythmes cardiaque et respiratoire, augmente le métabolisme et la pression artérielle pour favoriser l’apport sanguin dans les muscles striés afin de permettre la réponse immédiate la mieux adaptée à la survie : fuir, combattre ou se figer.' },
        { type: 'para', text: 'Le sympathique stimule en même temps les activités sensorielles — visuelle, auditive, olfactive — face au danger. L’activation du sympathique entraîne, de facto, une mise en second plan des activités immédiates non vitales pour la survie, notamment les gonades et le système digestif. Cette phase neurologique d’urgence est de courte durée.' },
        { type: 'para', text: 'Si l’agent stressant cesse rapidement ou si la réponse est suffisante, le sympathique revient, par mécanisme de rétrocontrôle, à son équilibre ou normotonie. Dans le cas contraire, l’hypothalamus met en place, dans un second temps, l’axe hormonal hypothalamo-hypophyso-surrénalien (HHS).' },
        { type: 'lead', label: 'Axe hormonal (figure 5.4)', text: 'sous l’action de l’hormone hypothalamique CRH, l’antéhypophyse libère l’ACTH qui stimule, à son tour, les glandes corticosurrénales. Cette cascade hormonale libère différentes hormones : cortisol, aldostérone et DHEA. C’est l’axe HHS ou corticotrope.' },
        { type: 'leadBullets', items: [
          { label: 'Cortisol', text: 'il contribue à augmenter la disponibilité du glucose, des triglycérides et du cholestérol, et module la réponse immunitaire.' },
          { label: 'Aldostérone', text: 'elle intervient dans la réabsorption rénale de l’eau et de certains minéraux.' },
          { label: 'DHEA', text: 'elle constitue un précurseur des hormones stéroïdiennes — testostérone et progestérone — dont les effets précis sont encore mal connus : elle aurait une action anti-vieillissement et anti-inflammatoire, et favoriserait la libido et l’érection.' },
          { label: 'Feed-back', text: 'un mécanisme de rétrocontrôle s’exerce sur l’antéhypophyse, l’hypothalamus et l’hippocampe pour limiter la réponse au stress lorsque les niveaux hormonaux redeviennent compatibles avec l’équilibre.' },
        ]},
        { type: 'lead', label: 'Pathologies fonctionnelles', text: 'à cette phase d’alarme, les symptômes sont en principe réversibles. C’est le stade des troubles fonctionnels où l’intégrité anatomique reste préservée. La dysfonction est ici interprétée comme un déséquilibre persistant entre Parasympathique et Sympathique en faveur du Sympathique (figure 5.3).' },

        { type: 'sub', text: 'Phase de recouvrement' },
        { type: 'para', text: 'Mots-clés : fatigue, récupération, vulnérabilité passagère.' },
        { type: 'para', text: 'Après la mobilisation générale des ressources, l’organisme a « besoin de souffler » un peu. L’individu se sent fatigué et éprouve le besoin de se reposer. L’adrénaline et le cortisol baissent et la réponse au stress devient temporairement moins performante. Cette phase de vulnérabilité passagère peut se manifester par la recrudescence passagère de douleurs articulaires ou vertébrales, une évacuation intestinale et urinaire plus abondante mais sans caractère pathologique, ainsi qu’une prédisposition accrue aux infections.' },
        { type: 'para', text: 'Sur le plan émotionnel, des souvenirs et des rêves peuvent remonter et déclencher des larmes sans raison apparente. Cette phase de recouvrement est physiologique mais ne doit pas excéder 72 heures.' },
        { type: 'rop', body: [
          'Cette vulnérabilité passagère se rencontre souvent après une première séance de ROP. Les réactions sont interprétées comme salutaires, voire positives. Il est important d’avertir le patient de ces réactions afin qu’il ne s’inquiète pas.',
          'Ces réactions sont interprétées, dans cette approche, à la lumière de la loi de Hering qui s’énonce ainsi : les symptômes d’une maladie évoluent vers la guérison quand ils vont :',
          '— Du haut vers le bas • Du dedans vers le dehors • Du chronique vers l’aigu • En repassant par des phases antérieures de la maladie.',
          'Cela sous-entend que la vitalité soit suffisante pour réagir dans le sens de la loi de Hering. C’est pourquoi tout traitement doit être dosé, ni trop long, ni trop intense, ni trop fréquent, afin de laisser à l’organisme la possibilité de restaurer ses capacités d’adaptation. Des traitements espacés de trois à quatre semaines constituent dans la majorité des cas une bonne fréquence.',
          'Notre technique de massage en ROP, qu’on peut décomposer en trois temps — 1. diagnostic tissulaire, 2. sollicitation de la zone, 3. temps du « rien faire et laisser-faire » — est conforme à cette règle déjà énoncée par le fondateur de l’ostéopathie, le Dr A. T. Still : « sens-le, touche-le et laisse faire ».',
        ]},

        { type: 'sub', text: 'Phase d’adaptation-résistance' },
        { type: 'para', text: 'Mots-clés : organisation des défenses.' },
        { type: 'para', text: 'Cette phase se caractérise par la nécessité de gérer des stresseurs persistants, à moyen ou long terme. Le système sympathique est toujours présent mais moins actif que dans la phase d’alarme. L’axe hormonal HHS vient en soutien à l’axe neurologique SAM.' },
        { type: 'lead', label: 'Axe neurologique', text: 'dans ce modèle, les systèmes parasympathique et sympathique montrent des signes d’épuisement progressif.' },
        { type: 'lead', label: 'Axe hormonal', text: 'sous l’influence de l’amygdale modulée par l’hippocampe, l’axe hypothalamo-hypophyso-surrénalien peut se caractériser par une hyperstimulation hormonale, puis une hypostimulation.' },
        { type: 'leadBullets', items: [
          { label: 'Surrénales', text: 'l’axe HHS soutient la production de cortisol afin de maintenir la disponibilité de glucose, de triglycérides et de cholestérol nécessaire à la charge allostatique, avec possible majoration de la pression artérielle.' },
          { label: 'Pancréas', text: 'il sécrète l’insuline pour compenser l’élévation du taux de glucose sanguin conjointement avec la glycogénolyse hépatique. À terme, une hyper-insulinémie puis une insulino-résistance peuvent s’installer.' },
          { label: 'Thyroïde', text: 'sous l’influence de la TSH hypophysaire, la thyroïde libère les hormones T3 et T4 pour soutenir le métabolisme et la production d’ATP nécessaire à la contraction musculaire. Des perturbations de type hyperthyroïdien peuvent alors être observées — amaigrissement musculaire, asthénie, tachycardie, nervosité, tremblement, thermophobie, sueur profuse.' },
          { label: 'Déficit gonadique', text: 'il se traduit par une diminution de la fertilité, une baisse de libido, des dysménorrhées, une pré-ménopause ou une andropause précoces.' },
        ]},
        { type: 'lead', label: 'Stress aigu et stress chronique', text: 'le stress aigu est à la fois stimulant et nécessaire ; le stress chronique est délétère.' },
        { type: 'lead', label: 'Cortisol et stress chronique', text: 'à long terme, le cortisol peut avoir des effets délétères sur la santé physique et mentale :' },
        { type: 'bullets', items: [
          'Augmentation du taux de glucose, de triglycérides et de cholestérol, avec majoration du risque de diabète, d’athérosclérose, d’hypertension artérielle, à l’origine des maladies cardio-vasculaires.',
          'Atrophie musculaire par catabolisme des protéines.',
          'Ostéoporose.',
          'Altération de certaines fonctions immunitaires.',
          'Dysbiose et altération de la barrière intestinale, parfois mises en lien avec des phénomènes auto-immuns.',
          'Ralentissement de certains processus de réparation des tissus.',
          'Perturbation du cycle circadien avec troubles du sommeil nocturne.',
          'Conséquences possibles sur la santé mentale.',
        ]},
        { type: 'lead', label: 'Pathologies fonctionnelles', text: 'peu à peu, sous stress chronique, des dérèglements physiologiques encore réversibles s’installent progressivement selon la fragilité individuelle, l’hérédité, les antécédents traumatiques physiques ou émotionnels, le mode de vie et les dysfonctions ostéopathiques. Des douleurs articulaires peuvent apparaître à un seuil où normalement elles ne devraient pas être ressenties (allodynie).' },
        { type: 'lead', label: 'Hypostimulation hormonale', text: 'elle peut faire suite à une phase d’hyperstimulation hormonale.' },
        { type: 'leadBullets', items: [
          { label: 'Hypothyroïdie', text: 'les symptômes peuvent associer frilosité, manque d’énergie par baisse du métabolisme, prise de poids, anxiété, dépression.' },
          { label: 'Hypo-insulinémie', text: 'après une période de résistance cellulaire, liée à l’hyper-insulinémie, peut survenir une hypoglycémie ou un pré-diabète, évoluant vers un diabète insulinodépendant de type 2.' },
          { label: 'Hypocorticisme', text: 'le déficit de cortisol peut s’accompagner d’hypotension orthostatique et d’une sensation d’étourdissement au passage de la position couchée à la position debout.' },
        ]},
        { type: 'lead', label: 'Pathologies chroniques', text: 'progressivement, la charge allostatique supportable par l’organisme se fragilise. Celui-ci bascule alors d’un déséquilibre fonctionnel vers des pathologies évoluant vers la chronicité. L’intégrité anatomique n’est plus assurée et les symptômes deviennent de moins en moins réversibles :' },
        { type: 'leadBullets', items: [
          { label: 'Système immunitaire', text: 'allergies, asthme, intolérances alimentaires.' },
          { label: 'Système digestif', text: 'hypersensibilité viscérale, troubles digestifs ou de transit (constipation ou diarrhée), ulcération gastroduodénale, reflux gastro-œsophagien, dysbiose, colopathies fonctionnelles, côlon irritable.' },
          { label: 'Réponse émotionnelle', text: 'via le locus coeruleus, l’hypothalamus sur-sollicite le cerveau limbique, particulièrement l’amygdale, ainsi que le cerveau cognitif. Cela génère des réactions de peur et d’anxiété. Les individus deviennent sensibles aux évènements banals de la vie quotidienne, créant de multiples fausses alertes, ce qui augmente encore peur et anxiété. Dyspnées, oppression thoracique, sensation d’avoir le souffle coupé ou d’être à bout de souffle sont des altérations de la respiration retrouvées dans l’anxiété et la dépression.' },
        ]},
        { type: 'rop', body: [
          'Pendant le stade d’adaptation-compensation, la ROP, comme toutes les thérapies non médicamenteuses, a toute sa place pour aborder les pathologies fonctionnelles réversibles. Mais avec l’évolution vers la chronicité et l’irréversibilité partielle ou totale, les thérapies fonctionnelles seules ne sont plus suffisantes et doivent laisser la place à la médecine médicamenteuse.',
          'Les thérapies fonctionnelles peuvent toutefois s’intégrer aux traitements médicaux en tant que support, d’où le terme aujourd’hui utilisé de thérapies intégratives. Le but est alors, dans le cadre de la ROP, de solliciter les organes émonctoriels chargés d’éliminer la toxicité à long terme de ces médicaments nécessaires, mais aussi de soutenir les capacités vitales, dans le but de préserver au mieux la santé pour lutter contre la maladie.',
        ]},

        { type: 'sub', text: 'Phase d’épuisement' },
        { type: 'para', text: 'Mots-clés : épuisement, défaite, capitulation, renoncement.' },
        { type: 'para', text: 'Cette phase se caractérise par la décompensation : les systèmes, selon la fragilité individuelle, basculent vers l’épuisement, puis la fin de vie.' },
        { type: 'lead', label: 'Axe neurologique', text: 'dans ce modèle, les axes SAM et HHS ne fonctionnent plus correctement, et des maladies neurodégénératives peuvent apparaître : maladie de Parkinson, sclérose en plaques, maladie de Charcot, Alzheimer, etc.' },
        { type: 'lead', label: 'Axe hormonal', text: 'hypothyroïdie, insuffisance surrénalienne, diabète insulinodépendant.' },
        { type: 'lead', label: 'Pathologies chroniques', text: '' },
        { type: 'leadBullets', items: [
          { label: 'Système immunitaire', text: 'maladies infectieuses et auto-immunes, inflammation.' },
          { label: 'Système ostéo-musculo-articulaire', text: 'arthrose, arthrite, polyarthrite, fibromyalgie.' },
          { label: 'Système cardio-vasculaire', text: 'AVC, infarctus, artériopathie.' },
          { label: 'Système limbique', text: 'dépression. L’atrophie de l’hippocampe peut s’accompagner d’une perte de mémoire et d’une désorientation comme dans la maladie d’Alzheimer : les astrocytes de la substance gliale participent alors au processus pathologique. Les connexions dendritiques entre les neurones peuvent être altérées. C’est la mort cellulaire neuronale de l’hippocampe et l’évolution vers la maladie d’Alzheimer.' },
          { label: 'Cancers', text: '' },
        ]},
        { type: 'rop', body: [
          'À ce stade, les thérapies fonctionnelles n’ont plus de visée curative propre. Elles ne peuvent être qu’un support psychologique et d’accompagnement.',
        ]},
      ],
    },
    {
      id: 'rop-stress',
      title: 'ROP du Mécanisme de stress',
      blocks: [
        { type: 'sub', text: 'Zones occipitales' },
        { type: 'lead', label: 'Syndrome général d’adaptation SGA (figure 5.5)', text: '' },
        { type: 'bullets', items: [
          'Système limbique, diencéphale, tronc cérébral, hypophyse, surrénales (axe HHS).',
          'Nerfs crâniens : Jumeau V, Vague X, Hypoglosse XI, C2 et C3.',
          'Nerf vague X : foramen magnum, foramen jugulaire, loge viscérale du cou, plexus cardio-pulmonaire, hiatus œsophagien, plexus cœliaque.',
          'Colonne vertébrale : systèmes sympathique C8 à L2 et parasympathique pelvien S2 à S4.',
          'Nerf phrénique : C3-C4-C5 et Triangle de Sédillot.',
        ]},
        { type: 'lead', label: 'Syndrome locorégional', text: 'c’est une compression mécanique locale du système nerveux somatique ou autonome avec retentissement secondaire général.' },
        { type: 'leadBullets', items: [
          { label: '1ʳᵉ phase — irritation', text: 'irritation locale par emprisonnement d’un nerf (ex. : compression traumatique du ganglion cervical inférieur par blocage C7/D1/1ʳᵉ côte). Conséquence : facilitation sympathique du territoire d’influence du ganglion cervical inférieur.' },
          { label: '2ᵉ phase — inhibition', text: 'si la compression n’est pas levée, le nerf comprimé est considéré comme inhibé. Le système nerveux compensateur est alors libéré, d’où, dans l’exemple, un syndrome parasympathique par inhibition du système sympathique.' },
        ]},
        { type: 'figure', src: '/chapter-5/figure-5-5.jpeg', alt: 'Schéma de la ROP du mécanisme de stress', caption: 'Figure 5.5 — ROP du mécanisme de stress', orientation: 'portrait' },
      ],
    },
  ],
  revisionSheet: {
    src: '/chapter-5/fiche-revision.png',
    alt: 'Fiche de révision — Chapitre 5, Mécanisme de stress',
    caption: 'Fiche de révision — Chapitre 5 · Mécanisme de stress',
  },
}

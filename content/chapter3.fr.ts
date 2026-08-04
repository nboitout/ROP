// Source: public/chapter-3/Chapitre_3_SNC_version_publiable.docx
import type { Chapter } from "./types";

export const chapter3Fr: Chapter = {
  slug: "chapter-3",
  number: "3",
  title: "Système nerveux central (SNC)",
  sections: [
    {
      id: "section-1-presentation-generale",
      title: "1. Présentation générale",
      blocks: [
        {
          type: "para",
          text: "Le système nerveux central (SNC) comprend l’encéphale et la moelle spinale. Il reçoit les informations provenant du corps, les intègre et organise les réponses motrices, autonomes, hormonales, émotionnelles et cognitives.",
        },
        {
          type: "para",
          text: "Le système nerveux autonome (SNA) participe à la régulation involontaire des viscères, des glandes et des vaisseaux. Il comprend principalement les systèmes parasympathique et sympathique. Le système nerveux entérique constitue, quant à lui, un réseau spécialisé dans la régulation digestive.",
        },
        {
          type: "para",
          text: "Le parasympathique présente classiquement une origine crânio-sacrale, tandis que le sympathique présente une origine thoraco-lombaire. Malgré cette organisation différente, leurs activités sont coordonnées par des centres et des réseaux communs du SNC. Cette coordination permet d’adapter en permanence le fonctionnement des organes aux variations de l’environnement et aux besoins de l’organisme.",
        },
        {
          type: "para",
          text: "Dans ce chapitre, les principales structures sont présentées selon une logique anatomique et fonctionnelle :",
        },
        {
          type: "bullets",
          items: [
            "le tronc cérébral et le cervelet, principalement situés dans le compartiment infratentoriel ;",
            "le diencéphale, profondément situé au centre de l’encéphale ;",
            "les réseaux limbiques, distribués dans plusieurs régions cérébrales ;",
            "le télencéphale et le cortex cérébral, situés dans le compartiment supratentoriel.",
          ],
        },
        {
          type: "para",
          text: "Au cours de l’évolution, les différentes régions du cerveau se sont transformées et spécialisées tout en restant étroitement interconnectées. Les réponses automatiques, émotionnelles et cognitives ne proviennent donc pas de trois cerveaux séparés, mais de réseaux qui agissent ensemble.",
        },
      ],
    },
    {
      id: "section-2-cadre-terminologique",
      title:
        "2. Cadre terminologique : cerveau limbique, système limbique et réseaux limbiques",
      blocks: [
        {
          type: "para",
          text: "La théorie des trois cerveaux, proposée par Paul D. MacLean au milieu du XXe siècle, distingue un « cerveau reptilien », un « cerveau limbique » ou émotionnel et un néocortex. Cette représentation est aujourd’hui dépassée comme modèle scientifique strict : le cerveau ne fonctionne pas comme trois strates indépendantes.",
        },
        {
          type: "para",
          text: "Elle peut néanmoins conserver un intérêt comme repère historique et pédagogique pour distinguer les dimensions automatiques, émotionnelles et cognitives du fonctionnement humain, à condition de rappeler qu’elles sont étroitement intégrées.",
        },
        {
          type: "note",
          label: "NOTE TERMINOLOGIQUE",
          body: [
            "L’expression « cerveau limbique » appartient surtout au modèle historique des trois cerveaux. Elle ne doit pas être comprise comme une entité anatomique séparée.",
            "Dans une terminologie plus actuelle, il est préférable de parler de « système limbique » ou, plus précisément, de « réseaux limbiques ». Ces termes désignent des structures corticales et sous-corticales interconnectées, impliquées notamment dans les émotions, la mémoire, l’olfaction, la motivation, la récompense et certaines réponses neurovégétatives.",
            "Dans ce chapitre, l’expression « cerveau limbique » est réservée au rappel du modèle de MacLean. Les descriptions anatomiques et physiologiques utilisent prioritairement les termes « système limbique » ou « réseaux limbiques ».",
          ],
        },
        {
          type: "para",
          text: "Les émotions, la mémoire affective et les comportements d’adaptation émergent de circuits distribués, en interaction constante avec le cortex préfrontal, l’hypothalamus, le tronc cérébral, le SNA, les voies olfactives et les informations viscérales.",
        },
      ],
    },
    {
      id: "section-3-organisation-anatomique",
      title: "3. Organisation anatomique et fonctionnelle du SNC",
      blocks: [
        {
          type: "sub",
          text: "3.1. Tronc cérébral",
        },
        {
          type: "para",
          text: "Le tronc cérébral assure de nombreuses communications entre le cerveau, le cervelet et la moelle spinale. La plupart des nerfs crâniens sont reliés à des noyaux situés dans le tronc cérébral, à l’exception principale des nerfs olfactif I et optique II. Plusieurs voies motrices et sensitives s’y croisent.",
        },
        {
          type: "para",
          text: "Il comprend trois parties : la moelle allongée, le pont et le mésencéphale.",
        },
        {
          type: "sub",
          text: "3.1.1. Moelle allongée",
        },
        {
          type: "para",
          text: "La moelle allongée, anciennement appelée bulbe rachidien, constitue la partie inférieure du tronc cérébral. Elle se prolonge par la moelle spinale au niveau du foramen magnum.",
        },
        {
          type: "para",
          text: "Elle contient des noyaux associés aux nerfs glossopharyngien IX, vague X, accessoire XI et hypoglosse XII. Elle participe à la régulation automatique de la respiration, de l’activité cardiaque et de la digestion.",
        },
        {
          type: "sub",
          text: "3.1.2. Pont",
        },
        {
          type: "para",
          text: "Le pont assure de nombreuses communications entre le cerveau, le cervelet, la moelle allongée et la moelle spinale. L’artère basilaire chemine sur sa face antérieure ; elle est formée par la réunion des deux artères vertébrales. Le quatrième ventricule est situé en arrière du pont, entre le tronc cérébral et le cervelet.",
        },
        {
          type: "para",
          text: "Le pont contient des noyaux associés à plusieurs nerfs crâniens, notamment les nerfs V à VIII.",
        },
        {
          type: "para",
          text: "Il contient également le locus coeruleus, un noyau riche en neurones noradrénergiques. Celui-ci participe à l’éveil, à la vigilance et aux réponses cérébrales au stress, en interaction avec l’hypothalamus et les réseaux autonomes.",
        },
        {
          type: "xref",
          label: "Voir le chapitre 5",
          text: "Mécanisme de stress",
          href: "/lecture/chapitre-5?lang=fr&xrefBack=%2Flecture%2Fchapitre-3%3Flang%3Dfr%23p-section-3-organisation-anatomique-9&xrefBackLabel=Retour%20au%20chapitre%203#p-sga-6",
        },
        {
          type: "sub",
          text: "3.1.3. Mésencéphale",
        },
        {
          type: "para",
          text: "Le mésencéphale constitue la partie supérieure du tronc cérébral, entre le pont et le diencéphale. Il participe au contrôle des mouvements des yeux, de la posture, de certains réflexes visuels et auditifs, ainsi qu’à la modulation de la douleur et de la vigilance. Il contient des noyaux associés aux nerfs oculomoteur III et trochléaire IV.",
        },
        {
          type: "sub",
          text: "3.1.4. Ganglions de la base et contrôle du mouvement",
        },
        {
          type: "para",
          text: "Les ganglions de la base sont des noyaux profonds du cerveau impliqués dans la préparation, la sélection et la fluidité des mouvements. Ils comprennent principalement le noyau caudé, le putamen et le pallidum. La substance noire et le noyau subthalamique participent également à leurs circuits.",
        },
        {
          type: "para",
          text: "Le fonctionnement de ces circuits dépend notamment de la dopamine, du GABA et de l’acétylcholine.",
        },
        {
          type: "para",
          text: "Repère clinique : Dans la maladie de Parkinson, la diminution de l’activité dopaminergique perturbe ces circuits et entraîne notamment une lenteur des mouvements, une rigidité et, chez certains patients, un tremblement de repos.",
        },
        {
          type: "note",
          label: "INTÉRÊT EN ROP",
          body: [
            "L’intestin, le système nerveux entérique et le cerveau communiquent par des voies nerveuses, hormonales, immunitaires et métaboliques. Le nerf vague participe à ces échanges bidirectionnels. Les médiateurs produits dans l’intestin n’agissent pas nécessairement directement dans le cerveau, mais ils peuvent influencer l’axe intestin-cerveau. Voir le chapitre consacré au système nerveux entérique.",
          ],
        },
        {
          type: "sub",
          text: "3.1.5. Formation réticulaire",
        },
        {
          type: "para",
          text: "La formation réticulaire est un réseau diffus de neurones situé dans le tronc cérébral. Elle reçoit de nombreuses informations sensitives, motrices et viscérales. Elle participe à l’éveil, à la vigilance, au tonus musculaire, à la douleur et à plusieurs fonctions autonomes.",
        },
        {
          type: "para",
          text: "La majorité des informations sensorielles passent par un relais thalamique avant d’atteindre le cortex. Les voies olfactives constituent une exception partielle, car elles rejoignent directement plusieurs régions olfactives et limbiques.",
        },
        {
          type: "note",
          label: "INTÉRÊT EN ROP",
          body: [
            "Dans le modèle de la ROP, certaines zones réflexes occipitales sont mises en relation avec la formation réticulaire. Cette correspondance relève de la cartographie clinique propre à la méthode. Se reporter au livre Réflexothérapie occipito-podale, Elsevier-Masson, pages 63 à 66.",
          ],
        },
        {
          type: "sub",
          text: "3.2. Cervelet",
        },
        {
          type: "para",
          text: "Le cervelet est situé en arrière du pont, dont il est séparé par le quatrième ventricule. Il comprend une partie médiane, appelée vermis, et deux hémisphères cérébelleux. Une petite région, le lobe flocculo-nodulaire, participe particulièrement à l’équilibre et aux fonctions vestibulaires.",
        },
        {
          type: "para",
          text: "Il compare les informations venant du cerveau, de la moelle spinale et de l’appareil vestibulaire afin d’ajuster la posture, l’équilibre et la précision des mouvements.",
        },
        {
          type: "para",
          text: "Repère clinique : Une atteinte du cervelet ne provoque généralement pas de paralysie, mais peut entraîner une démarche instable, des troubles de l’équilibre et des mouvements mal coordonnés ou imprécis. Ces troubles sont regroupés sous le terme d’ataxie cérébelleuse.",
        },
        {
          type: "sub",
          text: "3.3. Système limbique et réseaux émotionnels",
        },
        {
          type: "para",
          text: "Dans le modèle historique des trois cerveaux, cette partie était appelée « cerveau limbique » ou « cerveau émotionnel ». Dans la terminologie retenue pour ce chapitre, il est préférable de parler de système limbique et de réseaux limbiques.",
        },
        {
          type: "para",
          text: "Le mot « limbique » vient du latin limbus, qui signifie bordure. Il désignait initialement des structures disposées autour de la partie centrale des hémisphères cérébraux. Le système limbique n’est pas une entité anatomique parfaitement délimitée : il s’agit plutôt d’un ensemble de structures et de circuits impliqués dans les émotions, la mémoire, la motivation, les comportements affectifs et les réponses neurovégétatives.",
        },
        {
          type: "para",
          text: "Les structures souvent associées aux réseaux limbiques comprennent notamment l’amygdale, l’hippocampe, le cortex cingulaire, l’insula, le noyau accumbens, les corps mamillaires, le fornix et les voies olfactives. Certaines sont des noyaux, d’autres des régions corticales ou des faisceaux de connexion.",
        },
        {
          type: "sub",
          text: "3.3.1. Amygdale",
        },
        {
          type: "para",
          text: "Anatomie : L’amygdale est une structure paire située profondément dans la partie antérieure et médiale du lobe temporal, en avant de l’hippocampe. Elle est petite, de la taille d’une amande, et fortement connectée au cortex préfrontal, à l’hypothalamus, au thalamus, au tronc cérébral et aux voies olfactives.",
        },
        {
          type: "para",
          text: "Physiologie : L’amygdale participe à l’évaluation de la valeur émotionnelle des situations. Elle peut agir comme un système d’alarme face à une menace, mais intervient aussi dans l’apprentissage émotionnel, l’attention et l’attribution d’une valeur positive ou négative aux événements. Elle communique avec l’hypothalamus et peut ainsi contribuer à l’activation des réponses au stress.",
        },
        {
          type: "para",
          text: "Repère clinique : En cas de stress chronique ou de traumatisme, certains circuits impliquant l’amygdale peuvent devenir plus réactifs. Cette hyperréactivité peut participer à l’anxiété, aux phobies et à l’hypervigilance, sans constituer à elle seule la cause de ces troubles.",
        },
        {
          type: "sub",
          text: "3.3.2. Hippocampe",
        },
        {
          type: "para",
          text: "Anatomie : L’hippocampe est une structure paire située profondément dans le lobe temporal. Il est étroitement relié à l’amygdale et communique avec d’autres régions par le fornix.",
        },
        {
          type: "para",
          text: "Physiologie : Ses fonctions principales concernent la mémoire, l’apprentissage et l’orientation dans l’espace. Il participe aussi à la mise en contexte des expériences émotionnelles. Sa plasticité joue un rôle essentiel dans l’apprentissage.",
        },
        {
          type: "para",
          text: "Repère clinique : Dans la maladie d’Alzheimer, l’hippocampe est souvent atteint précocement, ce qui contribue aux troubles de la mémoire récente et de l’orientation.",
        },
        {
          type: "note",
          label: "SYSTÈME GLYMPHATIQUE CÉRÉBRAL",
          body: [
            "Le système glymphatique désigne un ensemble de voies périvasculaires participant à la circulation des liquides et à l’élimination de certains déchets métaboliques dans le cerveau. Il fonctionne en relation avec le liquide cérébro-spinal et avec les vaisseaux lymphatiques des méninges, mais ces deux systèmes ne doivent pas être confondus.",
          ],
        },
        {
          type: "sub",
          text: "3.3.3. Fornix",
        },
        {
          type: "para",
          text: "Le fornix est un faisceau de fibres nerveuses en forme d’arche, situé sous le corps calleux. Il relie l’hippocampe à plusieurs structures, notamment aux corps mamillaires, et participe aux circuits de la mémoire. Il s’agit d’une voie de connexion et non d’un noyau limbique.",
        },
        {
          type: "sub",
          text: "3.3.4. Insula",
        },
        {
          type: "para",
          text: "Anatomie : L’insula est une région du cortex située profondément dans le sillon latéral. Elle est recouverte par des parties des lobes frontal, pariétal et temporal. Elle communique avec de nombreuses régions impliquées dans les sensations corporelles, les émotions et le contrôle autonome.",
        },
        {
          type: "para",
          text: "Physiologie : Après plusieurs relais dans le tronc cérébral et le thalamus, l’insula reçoit des informations relatives à l’état interne du corps : activité cardiaque, respiration, digestion, douleur et autres sensations viscérales. Elle participe à l’intéroception, c’est-à-dire à la perception de l’état interne du corps, ainsi qu’à la dimension corporelle des émotions.",
        },
        {
          type: "para",
          text: "Repère clinique : Des modifications du fonctionnement de l’insula sont observées dans certaines douleurs chroniques et certains troubles émotionnels, sans que cette structure puisse à elle seule expliquer ces troubles.",
        },
        {
          type: "note",
          label: "INTÉRÊT EN ROP",
          body: [
            "Les émotions s’accompagnent souvent de manifestations corporelles et viscérales : accélération du cœur, modification de la respiration, tensions abdominales ou changement du transit. Inversement, les signaux provenant des viscères peuvent influencer l’état émotionnel. Cette interaction bidirectionnelle soutient une lecture intégrée des relations entre viscères, SNA et réseaux émotionnels.",
          ],
        },
        {
          type: "sub",
          text: "3.3.5. Cortex cingulaire",
        },
        {
          type: "para",
          text: "Anatomie : Le cortex cingulaire est situé à la face médiale des hémisphères cérébraux, au-dessus du corps calleux.",
        },
        {
          type: "para",
          text: "Physiologie : Il participe à l’attention, à la motivation, au traitement de la douleur, à la régulation émotionnelle et au contrôle de certaines réponses autonomes. Sa partie antérieure intervient notamment lorsque l’organisme doit détecter un conflit, mobiliser son attention ou adapter son comportement.",
        },
        {
          type: "para",
          text: "Repère clinique : Son fonctionnement peut être modifié dans certains troubles de l’humeur, certains troubles anxieux et certaines douleurs chroniques.",
        },
        {
          type: "sub",
          text: "3.3.6. Corps mamillaires",
        },
        {
          type: "para",
          text: "Anatomie : Les corps mamillaires sont deux petites structures situées à la face inférieure de l’hypothalamus. Ils reçoivent des fibres venant de l’hippocampe par le fornix.",
        },
        {
          type: "para",
          text: "Physiologie : Ils participent aux circuits de la mémoire, notamment au rappel et à la consolidation de certaines informations.",
        },
        {
          type: "para",
          text: "Repère clinique : Leur atteinte peut entraîner des troubles importants de la mémoire, notamment dans le syndrome de Korsakoff, souvent associé à une carence sévère en vitamine B1.",
        },
        {
          type: "sub",
          text: "3.3.7. Noyau accumbens",
        },
        {
          type: "para",
          text: "Anatomie : Le noyau accumbens est une petite structure paire située profondément dans la partie antérieure du cerveau, à la jonction du noyau caudé et du putamen. Il appartient au striatum ventral.",
        },
        {
          type: "para",
          text: "Physiologie : Il participe aux circuits de la motivation, de la récompense, de l’apprentissage et du renforcement des comportements. La dopamine joue un rôle important dans ces circuits.",
        },
        {
          type: "para",
          text: "Repère clinique : Une perturbation de ces circuits peut participer aux addictions, à la perte de motivation et à la diminution de la capacité à ressentir du plaisir, sans constituer à elle seule la cause de ces troubles.",
        },
        {
          type: "sub",
          text: "3.3.8. Voies olfactives et bulbe olfactif",
        },
        {
          type: "para",
          text: "Anatomie : Le bulbe olfactif est une structure paire située sur la lame criblée de l’ethmoïde. Les voies olfactives rejoignent plusieurs régions olfactives et limbiques sans relais thalamique initial obligatoire.",
        },
        {
          type: "para",
          text: "Physiologie : L’olfaction associe fortement les odeurs à la mémoire et aux émotions. Elle participe à l’identification de signaux de sécurité, de danger, d’attirance ou d’aversion.",
        },
        {
          type: "para",
          text: "Repère clinique : Après certains traumatismes crâniens, les fins filets du nerf olfactif peuvent être lésés au passage de la lame criblée, entraînant une diminution ou une perte de l’odorat.",
        },
        {
          type: "sub",
          text: "3.3.9. Corps calleux",
        },
        {
          type: "para",
          text: "Anatomie : Le corps calleux est la principale commissure reliant les deux hémisphères cérébraux. Il contient plusieurs centaines de millions de fibres de substance blanche. Il ne s’agit pas d’un noyau limbique, mais d’une structure de connexion interhémisphérique.",
        },
        {
          type: "para",
          text: "Physiologie : Il permet l’échange d’informations sensorielles, motrices, cognitives et émotionnelles entre les deux hémisphères.",
        },
        {
          type: "para",
          text: "Repère clinique : Les lésions du corps calleux peuvent perturber la coordination et l’échange d’informations entre les deux hémisphères.",
        },
        {
          type: "note",
          label: "INTÉRÊT EN ROP",
          body: [
            "Dans le cadre de la ROP, l’expression « libération émotionnelle » ne signifie pas que le souvenir est effacé. Elle désigne plutôt une diminution de la réaction émotionnelle ou corporelle associée à ce souvenir. L’amygdale, l’hippocampe, l’insula et le cortex cingulaire participent à l’enregistrement, à la mémorisation et à la réactivation de certaines expériences émotionnelles.",
          ],
        },
        {
          type: "sub",
          text: "3.4. Diencéphale et axe hypothalamo-hypophysaire",
        },
        {
          type: "para",
          text: "Le diencéphale est une région médiane, située entre le tronc cérébral et les hémisphères cérébraux, autour du troisième ventricule. Il comprend notamment le thalamus, l’hypothalamus, l’épithalamus et le subthalamus. Plusieurs de ces structures sont étroitement intégrées aux réseaux limbiques et autonomes.",
        },
        {
          type: "sub",
          text: "3.4.1. Thalamus",
        },
        {
          type: "para",
          text: "Anatomie : Le thalamus est une structure paire qui occupe une grande partie du diencéphale. Les deux thalamus sont disposés de part et d’autre du troisième ventricule.",
        },
        {
          type: "para",
          text: "Physiologie : Le thalamus constitue un relais majeur des informations sensitives, sensorielles, motrices et limbiques vers le cortex. Il participe notamment au traitement de la douleur et sélectionne une partie des informations transmises au cortex selon l’état d’éveil ou de sommeil.",
        },
        {
          type: "para",
          text: "Repère clinique : Une atteinte du thalamus peut provoquer des troubles sensitifs, moteurs, douloureux ou cognitifs, selon les noyaux concernés.",
        },
        {
          type: "sub",
          text: "3.4.2. Hypothalamus",
        },
        {
          type: "para",
          text: "Anatomie : L’hypothalamus est situé sous le thalamus et au-dessus de l’hypophyse. Malgré sa petite taille, il occupe une position centrale. Il est relié à l’hypophyse par la tige pituitaire et communique avec le cortex, les réseaux limbiques et le tronc cérébral.",
        },
        {
          type: "para",
          text: "Vascularisation : Un réseau vasculaire spécialisé, appelé système porte hypothalamo-hypophysaire, transmet directement à l’antéhypophyse les hormones de commande produites par l’hypothalamus.",
        },
        {
          type: "para",
          text: "Physiologie : L’hypothalamus agit comme un chef d’orchestre du SNA et du système hormonal. Il participe au maintien de l’homéostasie, notamment pour la température, la faim, la soif, le sommeil et les fonctions endocrines. En situation de stress, il contribue à activer la réponse sympathique et médullosurrénalienne, puis l’axe hypothalamo-hypophyso-surrénalien.",
        },
        {
          type: "xref",
          label: "Voir le chapitre 5",
          text: "Mécanisme de stress",
          href: "/lecture/chapitre-5?lang=fr&xrefBack=%2Flecture%2Fchapitre-3%3Flang%3Dfr%23p-section-3-organisation-anatomique-76&xrefBackLabel=Retour%20au%20chapitre%203#p-sga-6",
        },
        {
          type: "sub",
          text: "3.4.3. Hypophyse",
        },
        {
          type: "para",
          text: "L’hypophyse ne fait pas partie du diencéphale au sens strict, mais son fonctionnement est indissociable de celui de l’hypothalamus. Elle est logée dans la selle turcique du sphénoïde et comprend deux parties : la post-hypophyse ou neurohypophyse, et l’antéhypophyse ou adénohypophyse.",
        },
        {
          type: "para",
          text: "Post-hypophyse : Elle est un prolongement fonctionnel de l’hypothalamus. Elle stocke et libère dans le sang la vasopressine, ou hormone antidiurétique, et l’ocytocine, toutes deux synthétisées dans l’hypothalamus.",
        },
        {
          type: "para",
          text: "Antéhypophyse : Sous le contrôle hormonal de l’hypothalamus, elle sécrète plusieurs hormones qui régulent notamment les glandes surrénales, la thyroïde, la croissance, la reproduction et la lactation : ACTH, TSH, GH, FSH, LH et prolactine.",
        },
        {
          type: "para",
          text: "Repère clinique : Un adénome hypophysaire est une tumeur le plus souvent bénigne. Lorsqu’il est volumineux, il peut comprimer le chiasma optique et réduire le champ visuel, souvent sur les côtés. Le traitement dépend du type, du volume et des effets de l’adénome ; il peut être médicamenteux, chirurgical ou, plus rarement, radiothérapique.",
        },
        {
          type: "sub",
          text: "3.4.4. Épithalamus",
        },
        {
          type: "para",
          text: "L’épithalamus est situé à la partie postérieure du diencéphale. Il comprend notamment l’épiphyse, ou glande pinéale, et l’habenula.",
        },
        {
          type: "para",
          text: "Épiphyse : Elle synthétise la mélatonine à partir de la sérotonine et participe à la régulation des rythmes circadiens et saisonniers en fonction de l’alternance entre lumière et obscurité.",
        },
        {
          type: "para",
          text: "Habenula : Elle participe aux circuits de la motivation, de la récompense et de l’aversion. Elle intervient notamment dans l’apprentissage à partir des expériences négatives. Des modifications de son activité ont été observées dans certains troubles dépressifs.",
        },
        {
          type: "sub",
          text: "3.4.5. Subthalamus",
        },
        {
          type: "para",
          text: "Le subthalamus est une petite région située sous le thalamus. Il contient notamment le noyau subthalamique, anciennement appelé corps de Luys, qui participe aux circuits de contrôle du mouvement avec les ganglions de la base.",
        },
        {
          type: "note",
          label: "INTÉRÊT EN ROP",
          body: [
            "Par leurs nombreuses fonctions neurovégétatives et hormonales, l’hypothalamus et l’hypophyse occupent une place centrale dans la compréhension du syndrome général d’adaptation. Leur intégration avec les réseaux limbiques, le SNA et les axes de stress justifie leur importance dans la lecture ROP du mécanisme de stress. Voir le chapitre 5.",
          ],
        },
        {
          type: "sub",
          text: "3.5. Télencéphale et cortex cérébral",
        },
        {
          type: "para",
          text: "Le télencéphale comprend les deux hémisphères cérébraux. Leur surface est formée par le cortex cérébral, particulièrement développé chez l’être humain, notamment dans les régions préfrontales.",
        },
        {
          type: "para",
          text: "Anatomie : Le cortex forme la couche superficielle des hémisphères cérébraux. Chaque hémisphère comprend plusieurs lobes : frontal, pariétal, temporal et occipital. Certaines régions corticales, notamment le cortex cingulaire et le cortex orbitofrontal, participent également aux réseaux limbiques. Le cerveau est vascularisé par les systèmes carotidien et vertébro-basilaire.",
        },
        {
          type: "para",
          text: "Physiologie : Les différentes régions corticales participent à la perception consciente, aux mouvements volontaires, au langage, à l’analyse, à la planification, à la prise de décision et à la créativité. Les régions préfrontales contribuent à l’évaluation des situations et à la régulation des réponses émotionnelles, en interaction avec l’amygdale, l’insula, le cortex cingulaire et l’hypothalamus.",
        },
        {
          type: "para",
          text: "Repère clinique : Le stress intense ou prolongé peut perturber temporairement certaines fonctions préfrontales, avec une diminution de la concentration, de la flexibilité mentale et de la capacité à prendre du recul.",
        },
        {
          type: "note",
          label: "INTÉRÊT EN ROP",
          body: [
            "Dans le modèle de la ROP, il n’existe pas de zone réflexe directe attribuée au cortex. Une action indirecte est envisagée à travers le travail portant sur le MRP, les structures crâniennes et méningées, la circulation liquidienne et certaines relations vasculo-nerveuses. Ces correspondances relèvent du cadre théorique et clinique de la méthode.",
          ],
        },
      ],
    },
    {
      id: "section-4-zones-reflexes",
      title: "4. Zones réflexes podales",
      blocks: [
        {
          type: "para",
          text: "Les passages relatifs aux zones réflexes sont regroupés dans cette dernière partie afin de distinguer clairement l’anatomie et la physiologie de la cartographie thérapeutique.",
        },
        {
          type: "note",
          label: "PRÉCISION MÉTHODOLOGIQUE",
          body: [
            "Les localisations décrites ci-dessous correspondent à la cartographie clinique de la ROP. Elles ne constituent pas une projection anatomique directe des structures cérébrales sur le pied.",
          ],
        },
        {
          type: "sub",
          text: "4.1. Tronc cérébral, cervelet et ganglions de la base",
        },
        {
          type: "bullets",
          items: [
            "Tronc cérébral : face plantaire médiale de la phalange distale du gros orteil, de l’articulation interphalangienne à la jonction diaphyse-tête.",
          ],
        },
        {
          type: "figure",
          src: "/chapter-3/figures/figure-01.png",
          caption: "Tronc cérébral (entre les deux pouces)",
          alt: "Photo du repérage podal du tronc cérébral entre les deux pouces",
          orientation: "portrait",
        },
        {
          type: "bullets",
          items: [
            "Cervelet : dans le modèle ROP, l’action est notamment mise en relation avec l’innervation sympathique des artères vertébrales et de l’artère basilaire ; repère à la jonction diaphyse-tête médio-plantaire des deuxième et troisième orteils.",
            "Ganglions de la base : dans la cartographie ROP, ils sont recherchés à proximité du repère attribué au mésencéphale, latéralement à la jonction diaphyse-tête médiale. Cette proximité correspond au modèle topographique de la méthode et non à leur position anatomique exacte dans l’encéphale.",
          ],
        },
        {
          type: "sub",
          text: "4.2. Système limbique et réseaux émotionnels",
        },
        {
          type: "bullets",
          items: [
            "Structures limbiques principales : amygdale, hippocampe, fornix, noyau accumbens et corps mamillaires, recherchés latéralement au repère des ganglions de la base, au niveau de la diaphyse de la phalange distale du gros orteil. À la palpation, rechercher les zones présentant une induration ou une sensibilité particulière.",
            "Insula : latérale aux structures limbiques principales.",
            "Bulbe olfactif : tête médiale plantaire de la phalange distale du gros orteil.",
            "Cortex cingulaire et corps calleux : bord médial plantaire de la phalange distale du gros orteil.",
          ],
        },
        {
          type: "figure",
          src: "/chapter-3/figures/figure-02.png",
          caption: "Amygdale du cerveau limbique (pouce gauche)",
          alt: "Photo du repérage podal de l’amygdale du cerveau limbique",
          orientation: "portrait",
        },
        {
          type: "sub",
          text: "4.3. Diencéphale, hypophyse, membranes et vascularisation",
        },
        {
          type: "sub",
          text: "4.3.1. Centres neuroendocriniens",
        },
        {
          type: "bullets",
          items: [
            "Diencéphale : dans le même plan sagittal que le sinus droit, à la jonction de la faux du cerveau et de la tente du cervelet ; les deux repères se confondent à la jonction diaphyse-tête médiale.",
            "Hypophyse : jonction diaphyse-base médiale, en avant de la synchondrose sphéno-basilaire.",
          ],
        },
        {
          type: "figure",
          src: "/chapter-3/figures/figure-05.png",
          caption: "Diencéphale (pouce gauche)",
          alt: "Photo du repérage podal du diencéphale",
          orientation: "portrait",
        },
        {
          type: "sub",
          text: "4.3.2. Membranes intracrâniennes",
        },
        {
          type: "bullets",
          items: [
            "Dure-mère crânienne : se reporter au livre Réflexothérapie occipito-podale et système neuro-méningé, Elsevier Masson, page 85, figure 7.8, et page 109, figure 8.12.",
            "Faux du cerveau et faux du cervelet : mêmes repères que le tronc cérébral et le bulbe olfactif.",
            "Tente du cervelet : jonction diaphyse-tête.",
          ],
        },
        {
          type: "sub",
          text: "4.3.3. Innervation et vascularisation",
        },
        {
          type: "bullets",
          items: [
            "Vascularisation : chaîne ganglionnaire cervicale et sinus carotidien.",
            "Innervation : nerfs trijumeau V, vague X et hypoglosse XII.",
            "Ganglions cervicaux : ganglion cervical supérieur C2-C3 et ganglion cervical inférieur C7-T1.",
          ],
        },
        {
          type: "figure",
          src: "/chapter-3/figures/figure-04.png",
          caption: "Sinus et glomus carotidien Index Gauche",
          alt: "Photo du repérage podal du sinus et du glomus carotidien à l’index gauche",
          orientation: "landscape",
        },
        {
          type: "figure",
          src: "/chapter-3/figures/figure-03.png",
          caption: "Nerf vague X dans le foramen jugulaire",
          alt: "Photo du repérage podal du nerf vague X dans le foramen jugulaire",
          orientation: "portrait",
        },
        {
          type: "sub",
          text: "4.4. Cortex : absence de zone réflexe directe et action indirecte",
        },
        {
          type: "para",
          text: "Dans la cartographie actuelle de la ROP, aucune zone réflexe directe n’est attribuée au cortex cérébral. Le travail est envisagé de manière indirecte, à travers les repères associés au MRP, aux membranes intracrâniennes, à la circulation du liquide cérébro-spinal et à l’innervation vasculaire. Cette absence de zone directe relève du modèle clinique de la méthode ; elle ne peut pas être déduite simplement de la sensibilité du tissu cérébral.",
        },
        {
          type: "bullets",
          items: [
            "MRP : dans le cadre théorique de la ROP, le travail est mis en relation avec les os de la voûte, les sutures, les membranes intracrâniennes et la dynamique du liquide cérébro-spinal. Les effets précis de cette approche sur le cortex ou sur la circulation intracrânienne ne sont pas directement établis.",
            "Os de la voûte : face dorsale des trois phalanges des quatre derniers orteils et de la phalange distale du gros orteil.",
            "Chaîne ganglionnaire cervicale : mise en relation avec l’innervation sympathique des artères vertébrales et carotides.",
            "Artère carotide interne dans le sinus caverneux : face plantaire médiale de la diaphyse de la deuxième phalange du deuxième orteil.",
            "Circulation du liquide cérébro-spinal : la respiration influence les pressions veineuses et la dynamique du liquide cérébro-spinal. Dans la pratique ROP, cette dynamique est également abordée par le travail des foramens jugulaires, des membranes intracrâniennes et spinales, ainsi que par les techniques dites de compression du quatrième ventricule et de synchronisation SSB-S2. Ces techniques relèvent du modèle thérapeutique utilisé.",
          ],
        },
        {
          type: "figure",
          src: "/chapter-3/figures/figure-06.png",
          caption: "Technique compression du IVème ventricule",
          alt: "Photo de la technique de compression du quatrième ventricule",
          orientation: "landscape",
        },
        {
          type: "figure",
          src: "/chapter-3/figures/figure-07.png",
          caption: "Technique de synchronisation SSB-S2",
          alt: "Photo de la technique de synchronisation SSB-S2",
          orientation: "portrait",
        },
      ],
    },
    {
      id: "annexe-manifestations",
      title:
        "Annexe 1. Principales manifestations associées aux structures étudiées",
      blocks: [
        {
          type: "para",
          text: "Les manifestations présentées dans cette annexe sont données à titre de repères. Elles ne traduisent pas une relation causale simple entre une structure cérébrale et un trouble particulier. Les symptômes neurologiques, psychologiques ou fonctionnels résultent généralement de l’interaction de plusieurs réseaux.",
        },
        {
          type: "table",
          headers: [
            "Structure",
            "Fonction principale",
            "Manifestations ou troubles associés",
            "Remarque",
          ],
          rows: [
            [
              "Ganglions de la base",
              "Préparation et fluidité du mouvement",
              "Lenteur des mouvements, rigidité, tremblement possible",
              "Exemple représentatif : maladie de Parkinson.",
            ],
            [
              "Cervelet",
              "Coordination, posture et équilibre",
              "Ataxie, démarche instable, mouvements imprécis, adiadococinésie, hypermétrie, dyschronométrie",
              "Une atteinte cérébelleuse ne provoque généralement pas de paralysie.",
            ],
            [
              "Amygdale",
              "Évaluation émotionnelle et détection de la menace",
              "Hyperémotivité, anxiété, phobies, hypocondrie, réactions de peur intense, hypervigilance",
              "Associations multifactorielles ; l’amygdale ne constitue pas une cause isolée.",
            ],
            [
              "Hippocampe",
              "Mémoire, apprentissage et orientation",
              "Troubles de la mémoire, de l’orientation, du sommeil ; anxiété ou dépression associées",
              "Atteinte précoce possible dans la maladie d’Alzheimer.",
            ],
            [
              "Insula",
              "Intéroception et intégration viscéro-émotionnelle",
              "Douleurs chroniques, fibromyalgie, dépression, perturbation de la perception des sensations internes",
              "Ne constitue pas une cause isolée.",
            ],
            [
              "Cortex cingulaire",
              "Attention, douleur et régulation émotionnelle",
              "Troubles de l’humeur, anxiété, dépression, douleurs chroniques",
              "Fonctionnement intégré à de nombreux réseaux.",
            ],
            [
              "Corps mamillaires",
              "Circuits de la mémoire",
              "Troubles de la mémoire",
              "Atteinte possible dans le syndrome de Korsakoff.",
            ],
            [
              "Noyau accumbens",
              "Motivation, récompense et renforcement",
              "Baisse de motivation, apathie, perte de plaisir, addictions, troubles alimentaires ou compulsifs",
              "Associations multifactorielles.",
            ],
            [
              "Thalamus",
              "Relais et modulation des informations",
              "Troubles sensitifs, moteurs, douloureux, cognitifs ou langagiers",
              "La présentation dépend des noyaux et des voies atteints.",
            ],
            [
              "Hypophyse",
              "Régulation endocrine",
              "Troubles hormonaux et visuels en cas d’adénome volumineux",
              "Une compression du chiasma optique peut réduire le champ visuel latéral.",
            ],
            [
              "Corps calleux",
              "Communication interhémisphérique",
              "Difficultés de coordination ou d’échange d’informations entre les hémisphères",
              "Les symptômes dépendent de la cause et de l’étendue de la lésion.",
            ],
            [
              "Cortex préfrontal",
              "Planification, décision et régulation émotionnelle",
              "Difficultés de concentration, diminution de la flexibilité mentale, troubles anxieux ou dépressifs associés",
              "Le stress peut perturber temporairement certaines fonctions préfrontales.",
            ],
          ],
        },
      ],
    },
  ],
  slides: {
    url: "/chapter-3/Chapter3 Slides FR.pdf",
    label: "Diapositives",
    description: "Synthèse visuelle du chapitre 3.",
  },
};

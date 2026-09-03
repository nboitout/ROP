import type { Chapter } from './types'

// Source: public/chapter-9/FR/Chapitre_9_Estomac_version_finale_publiable.docx
export const chapter9Fr: Chapter = {
  slug: 'chapter-9',
  number: '9',
  title: 'Estomac',
  sections: [
    {
      id: 'presentation',
      title: '1. Présentation',
      blocks: [
        { type: 'para', text: 'L\'estomac est le premier segment dilaté du tube digestif.' },
        { type: 'para', text: 'Il fait suite à l\'œsophage.' },
        { type: 'para', text: 'Il assure le remplissage, le brassage et le malaxage des aliments, ainsi qu\'une première phase chimique de digestion dans un milieu très acide, avant leur passage dans le duodénum.' },
      ],
    },
    {
      id: 'situation',
      title: '2. Situation',
      blocks: [
        { type: 'para', text: 'L\'estomac est localisé au niveau de l\'hypochondre gauche et de l\'épigastre, sous l\'hémi-coupole diaphragmatique gauche.' },
        { type: 'para', text: 'Il s\'étend globalement de Th11 à L2 dans l\'étage sus-mésocolique de l\'abdomen.' },
        { type: 'para', text: 'Sa face antérieure est partiellement protégée, dans sa partie supérieure, par le gril costal gauche et répond aussi à la face postérieure du lobe gauche du foie.' },
        { type: 'para', text: 'Sa partie inférieure répond à la paroi abdominale.' },
        { type: 'para', text: 'Sa face postérieure répond à la bourse omentale (anciennement arrière-cavité des épiploons).' },
        { type: 'para', text: 'L\'estomac est un organe intra-péritonéal.' },
      ],
    },
    {
      id: 'anatomie',
      title: '3. Anatomie',
      blocks: [
        { type: 'para', text: 'Globalement, l\'estomac a la forme d\'un J et comprend quatre segments et deux zones sphinctériennes.' },
        { type: 'sub', text: '3.1. Sphincter inférieur œsophagien (SIO)' },
        { type: 'para', text: 'Après la traversée du hiatus œsophagien du diaphragme, à hauteur de Th10, l\'œsophage abdominal présente une zone de haute pression fonctionnelle correspondant au SIO.' },
        { type: 'para', text: 'Le SIO n\'est pas une entité anatomique individualisable, mais une entité physiologique se comportant comme un sphincter.' },
        { type: 'para', text: 'Il contribue à la continence de la jonction œso-gastrique.' },
        { type: 'para', text: 'Sa projection est située en arrière et légèrement à gauche du processus xyphoïde.' },
        { type: 'sub', text: '3.2. Cardia' },
        { type: 'para', text: 'Le cardia est l\'orifice de jonction entre l\'œsophage distal et l\'estomac.' },
        { type: 'para', text: 'Il est projeté à environ 2 à 4 cm à gauche du processus xyphoïde, en regard du 6e cartilage costal.' },
        { type: 'para', text: 'Il forme avec le fundus l\'incisure cardiale, ou angle de His.' },
        { type: 'sub', text: '3.3. Grosse tubérosité ou fundus' },
        { type: 'para', text: 'Le fundus correspond à la partie supérieure de l\'estomac.' },
        { type: 'para', text: 'Il est situé au-dessus du cardia et participe surtout à l\'accommodation gastrique.' },
        { type: 'para', text: 'En pratique radiologique, il contient fréquemment une poche à air visible sur les clichés sans préparation.' },
        { type: 'sub', text: '3.4. Corps gastrique' },
        { type: 'para', text: 'Le corps gastrique prolonge le fundus vers le bas.' },
        { type: 'para', text: 'C\'est dans cette région que se déroulent l\'essentiel du brassage et du malaxage des aliments grâce à la musculature pariétale.' },
        { type: 'para', text: 'Il comporte deux courbures.' },
        { type: 'sub', text: '3.4.1. Grande courbure' },
        { type: 'para', text: 'La grande courbure suit une ligne latérale allant globalement des 9e et 10e cartilages costaux vers l\'ombilic, situé vers L3.' },
        { type: 'sub', text: '3.4.2. Petite courbure' },
        { type: 'para', text: 'La petite courbure est médiale, entre le cardia et la région antropylorique.' },
        { type: 'para', text: 'Elle est plus profonde que la grande courbure et plus proche du plan vertébral entre Th10 et L1.' },
        { type: 'para', text: 'Le petit omentum s\'y fixe.' },
        { type: 'para', text: 'Cette région est richement vascularisée et innervée, notamment par les branches vagales et sympathiques.' },
        { type: 'para', text: 'Elle comporte également de nombreux mécanorécepteurs.' },
        { type: 'rop', body: [
          'Dans le cadre ROP, une attention particulière est portée à la petite courbure en raison de sa riche innervation, de sa vascularisation et de sa place dans certaines fixations cliniques décrites de l\'estomac.',
          'Elle est aussi une zone classiquement concernée par les ulcérations.',
        ]},
        { type: 'sub', text: '3.5. Petite tubérosité (fond)' },
        { type: 'para', text: 'La petite tubérosité correspond à la partie caudale de l\'estomac.' },
        { type: 'para', text: 'Sa position varie selon le remplissage gastrique et la morphologie des individus.' },
        { type: 'para', text: 'Chez certains sujets longilignes et hypotoniques, sa projection peut être plus basse.' },
        { type: 'sub', text: '3.6. Antre pylorique' },
        { type: 'para', text: 'L\'antre pylorique est situé entre la partie caudale de l\'estomac et le pylore.' },
        { type: 'para', text: 'Il joue un rôle majeur dans la préparation mécanique de la vidange gastrique et dans certaines régulations neuro-hormonales.' },
        { type: 'sub', text: '3.7. Pylore' },
        { type: 'para', text: 'Le pylore comprend deux parties.' },
        { type: 'sub', text: '3.7.1. Canal pylorique' },
        { type: 'para', text: 'Le canal pylorique est la portion rétrécie qui fait suite à l\'antre.' },
        { type: 'sub', text: '3.7.2. Sphincter pylorique' },
        { type: 'para', text: 'Le sphincter pylorique est projeté à mi-distance d\'une ligne joignant l\'incisure jugulaire au pubis, soit environ cinq travers de doigts au-dessus de l\'ombilic, vers L1.' },
        { type: 'para', text: 'Il régule la vidange de l\'estomac dans le duodénum.' },
        { type: 'para', text: 'Il alterne des phases d\'ouverture et de résistance au passage, avec un rôle de sélection des particules suffisamment fines et des liquides.' },
        { type: 'para', text: 'Dans le cadre clinique, sa projection peut paraître se déplacer de part et d\'autre de la ligne xypho-pubienne selon son activité.' },
        { type: 'para', text: 'Dans ce même cadre, elle peut sembler plus à droite chez certains sujets stressés.' },
        { type: 'sub', text: '3.8. Incisure angulaire' },
        { type: 'para', text: 'L\'incisure angulaire correspond à l\'angle formé par la petite courbure et l\'antre pylorique.' },
        { type: 'para', text: 'Elle est située plus crânialement que le pylore.' },
      ],
    },
    {
      id: 'rapports',
      title: '4. Rapports',
      blocks: [
        { type: 'bullets', items: [
          'Céphaliquement : l\'estomac est en rapport avec le diaphragme, auquel il est relié notamment par le ligament phrénico-gastrique.',
          'Caudalement : il est en rapport avec le côlon transverse, auquel il est relié par le grand omentum.',
          'Ventralement : il répond au lobe gauche du foie, au gril costal et à la paroi abdominale.',
          'Dorsalement : il répond à la bourse omentale, au pancréas et à la 4e portion duodénale.',
          'Latéralement : il est en rapport avec la rate, à laquelle il est relié par le ligament gastro-splénique.',
          'Médialement : le petit omentum relie la petite courbure à la 1re portion du duodénum et au hile hépatique.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: '5. Vascularisation',
      blocks: [
        { type: 'sub', text: '5.1. Vascularisation artérielle' },
        { type: 'para', text: 'L\'estomac est vascularisé par des branches du tronc cœliaque, branche collatérale de l\'aorte abdominale située vers Th12.' },
        { type: 'para', text: 'Ces branches comprennent l\'artère splénique, l\'artère gastrique gauche et, via l\'artère hépatique propre issue de l\'artère hépatique commune, l\'artère gastrique droite.' },
        { type: 'para', text: 'Les branches collatérales de ces artères participent aux cercles artériels de la petite et de la grande courbure.' },
        { type: 'sub', text: '5.2. Vascularisation veineuse' },
        { type: 'para', text: 'Les veines gastriques, globalement satellites des artères, se drainent vers le système porte.' },
      ],
    },
    {
      id: 'innervation',
      title: '6. Innervation',
      blocks: [
        { type: 'sub', text: '6.1. Innervation parasympathique' },
        { type: 'para', text: 'Les nerfs vagues droit et gauche jouent un rôle majeur dans la fonction mécanique et sécrétoire de l\'estomac.' },
        { type: 'para', text: 'Ils stimulent notamment la sécrétion gastrique et participent à la régulation de la motricité gastrique.' },
        { type: 'sub', text: '6.2. Innervation sympathique' },
        { type: 'para', text: 'L\'innervation sympathique provient notamment du grand nerf splanchnique issu des niveaux thoraciques moyens.' },
        { type: 'para', text: 'Elle a globalement une action antagoniste de l\'activité vagale sur la motricité et la sécrétion.' },
        { type: 'rop', body: [
          'Dans le cadre ROP, une dysfonction de l\'estomac peut s\'accompagner de tensions projetées dans la région thoracique haute, en particulier autour de Th6.',
        ]},
        { type: 'sub', text: '6.3. Pacemaker gastrique' },
        { type: 'para', text: 'L\'estomac possède une activité rythmique propre qui participe aux contractions de base.' },
        { type: 'para', text: 'Cette activité est en lien avec des cellules interstitielles spécialisées, souvent désignées comme cellules de Cajal, situées dans la région jonctionnelle entre fundus et corps, près de la grande courbure.' },
        { type: 'para', text: 'Les ondes lentes se propagent ensuite vers l\'antre pylorique et le pylore selon un rythme de l\'ordre de quelques dizaines de secondes.' },
        { type: 'para', text: 'Le fundus participe surtout à la fonction de réservoir et d\'accommodation.' },
      ],
    },
    {
      id: 'physiologie',
      title: '7. Physiologie',
      blocks: [
        { type: 'para', text: 'L\'estomac assure des fonctions mécaniques et neuro-hormonales dans la digestion des aliments.' },
        { type: 'sub', text: '7.1. Fonction mécanique' },
        { type: 'para', text: 'Sous l\'action conjointe des voies vagales et de la distension induite par les aliments, la paroi gastrique se relâche activement pour le remplissage.' },
        { type: 'para', text: 'Puis, grâce à la tunique musculaire du corps gastrique, les aliments sont dissociés, brassés, malaxés et homogénéisés avant d\'être mélangés aux sucs gastriques.' },
        { type: 'sub', text: '7.2. Fonction sécrétoire et neuro-hormonale' },
        { type: 'para', text: 'La distension gastrique, la présence des aliments et les stimulations vagales déclenchent la production d\'un suc gastrique sécrété par la muqueuse, dans un ordre de grandeur d\'environ 1,5 litre par 24 heures.' },
        { type: 'sub', text: '7.2.1. Acide chlorhydrique (HCl)' },
        { type: 'para', text: 'L\'acide chlorhydrique est sécrété par les cellules pariétales de la muqueuse gastrique.' },
        { type: 'para', text: 'Il contribue à l\'acidité intragastrique, à l\'effet antibactérien du contenu gastrique et à certaines étapes de l\'absorption du fer.' },
        { type: 'sub', text: '7.2.2. Pompe à protons gastrique' },
        { type: 'para', text: 'La pompe à protons permet la sécrétion des ions H+ par l\'épithélium gastrique.' },
        { type: 'para', text: 'Elle est responsable du pH très bas du contenu gastrique, créant un milieu favorable à l\'activation de la pepsine pour la digestion des protéines.' },
        { type: 'sub', text: '7.2.3. Mucus' },
        { type: 'para', text: 'Le mucus protège la muqueuse gastrique contre l\'acidité luminale et facilite le glissement du bol alimentaire le long de la paroi.' },
        { type: 'sub', text: '7.2.4. Pepsinogène' },
        { type: 'para', text: 'Le pepsinogène est le précurseur de la pepsine impliquée dans la digestion des protéines.' },
        { type: 'sub', text: '7.2.5. Enzymes' },
        { type: 'para', text: 'Plusieurs enzymes sont sécrétées par la muqueuse gastrique.' },
        { type: 'sub', text: '7.2.6. Gastrine' },
        { type: 'para', text: 'Les cellules G, concentrées dans la région antro-pylorique, sécrètent la gastrine sous l\'influence notamment des stimulations vagales.' },
        { type: 'para', text: 'La gastrine est libérée dans la circulation sanguine.' },
        { type: 'para', text: 'Elle stimule la sécrétion acide et participe à l\'augmentation de l\'activité contractile gastrique, notamment au niveau de l\'antre pylorique.' },
        { type: 'sub', text: '7.3. Vidange gastrique' },
        { type: 'para', text: 'La contraction antrique, combinée au relâchement pylorique, permet le passage fractionné du contenu gastrique vers le duodénum.' },
        { type: 'para', text: 'Cette vidange est régulée par plusieurs signaux duodénaux et hormonaux, notamment la sécrétine, qui contribue à freiner la vidange lorsque l\'acidité du contenu duodénal est élevée et favorise la sécrétion pancréatique de bicarbonates.' },
        { type: 'para', text: 'La régulation de la vidange dépend donc de la capacité de traitement du duodénum et de l\'intestin grêle.' },
        { type: 'sub', text: '7.3.1. Phase liquidienne' },
        { type: 'para', text: 'La phase liquidienne est généralement rapide, souvent en moins de 30 minutes.' },
        { type: 'sub', text: '7.3.2. Phase solide digestive' },
        { type: 'para', text: 'La phase solide digestive a une durée variable selon la nature des aliments ingérés.' },
        { type: 'sub', text: '7.3.3. Phase solide indigestive' },
        { type: 'para', text: 'En période tardive, les particules plus difficiles à digérer sont davantage brassées jusqu\'à atteindre une taille compatible avec le passage pylorique.' },
        { type: 'rop', body: [
          'L\'action conjointe, mécanique et neuro-hormonale, conduit le cadre ROP à accorder une place prioritaire au nerf vague dans l\'action réflexe, selon le principe de « priorité au nerf ».',
        ]},
      ],
    },
    {
      id: 'pathologies-courantes',
      title: '8. Pathologies courantes',
      blocks: [
        { type: 'para', text: 'Le terme « gastrite » recouvre des réalités cliniques différentes, allant d\'un trouble fonctionnel à une inflammation objectivable, et ne doit pas être utilisé sans précision.' },
        { type: 'para', text: 'Il n\'existe pas de corrélation simple entre l\'intensité de la douleur et la gravité d\'une atteinte gastrique.' },
        { type: 'para', text: 'Comme pour d\'autres organes, des troubles fonctionnels peuvent partager certains symptômes avec une maladie organique débutante.' },
        { type: 'para', text: 'Certaines dysfonctions gastriques peuvent s\'accompagner d\'hypochlorhydrie, susceptible de favoriser fermentation, lourdeurs, ballonnements, reflux, renvois, nausées, dyspepsie ou retard de vidange.' },
        { type: 'para', text: 'Ces signes ne préjugent pas à eux seuls d\'une ulcération ou d\'une pathologie sévère.' },
        { type: 'para', text: 'Une dorsalgie, souvent inter-scapulaire gauche, autour de Th6 à Th9, peut être d\'origine ostéo-articulaire ou s\'accompagner d\'une symptomatologie gastrique.' },
        { type: 'para', text: 'Un symptôme isolé ne fait pas le diagnostic.' },
        { type: 'para', text: 'Celui-ci repose sur l\'examen clinique et, si besoin, sur des examens complémentaires.' },
        { type: 'para', text: 'Il est indispensable de reconnaître les signes de gravité.' },
        { type: 'sub', text: '8.1. Diagnostic d\'exclusion' },
        { type: 'bullets', items: [
          'Amaigrissement rapide non expliqué.',
          'Présence d\'un ganglion de Troisier rétro-claviculaire gauche.',
          'Douleurs thoraco-abdominales profondes.',
          'Fièvre.',
          'Hématémèse : rejet de sang rouge lors d\'un vomissement.',
          'Méléna : évacuation de sang digéré noir avec selles goudronneuses, compatible avec une hémorragie digestive haute.',
          'Douleurs nocturnes ou matinales.',
        ]},
        { type: 'sub', text: 'Indications : troubles fonctionnels' },
        { type: 'sub', text: '9.1. Gastralgie simple' },
        { type: 'para', text: 'La gastralgie simple désigne une douleur stomacale souvent associée au stress.' },
        { type: 'para', text: 'Elle peut s\'accompagner de douleurs épigastriques, digestion difficile, lenteur digestive, ballonnements, aigreurs, renvois, dyspepsie ou dorsalgie.' },
        { type: 'sub', text: '9.2. Gastroparésie ou estomac atone' },
        { type: 'para', text: 'La gastroparésie correspond à un retard de vidange gastrique.' },
        { type: 'para', text: 'Dans certains cas, elle peut être liée à une atteinte de la commande vagale.' },
        { type: 'para', text: 'La stagnation prolongée des aliments peut favoriser une prolifération microbienne et une mauvaise tolérance digestive.' },
        { type: 'para', text: 'Elle peut être aggravée par certains médicaments, notamment anti-inflammatoires et antibiotiques.' },
        { type: 'para', text: 'Les symptômes ressemblent à ceux d\'une gastralgie simple avec sensation d\'estomac plein, pesanteur abdominale et mauvaise tolérance à la compression vestimentaire.' },
        { type: 'sub', text: '9.3. Gastrite' },
        { type: 'para', text: 'La gastrite est une atteinte inflammatoire de la muqueuse gastrique.' },
        { type: 'para', text: 'Selon les cas, elle peut s\'accompagner d\'œdème, d\'altérations épithéliales et de modifications glandulaires.' },
        { type: 'sub', text: '9.3.1. Étiologie' },
        { type: 'bullets', items: [
          'Éthylisme.',
          'Prise prolongée d\'anti-inflammatoires, y compris aspirine.',
          'Primo-infection à Helicobacter pylori.',
          'Infection bactérienne gingivo-dentaire.',
          'Allergies ou intolérances alimentaires.',
          'Maladies auto-immunes.',
          'Avitaminoses ou carences nutritionnelles.',
        ]},
        { type: 'sub', text: '9.4. Reflux gastro-œsophagien et hernie hiatale' },
        {
          type: 'xref',
          label: 'Voir la référence dans le chapitre 8',
          text: 'Diaphragme : reflux gastro-œsophagien et hernie hiatale',
          href: '/lecture/chapitre-8?lang=fr&xrefBack=%2Flecture%2Fchapitre-9%3Flang%3Dfr%23p-indications-troubles-fonctionnels-15&xrefBackLabel=Retour%20au%20chapitre%209#p-pathologies-courantes-diagnostic-d-exclusion-indications-troubles-fonctionnels-0',
        },
        { type: 'sub', text: '9.5. Carences martiales' },
        { type: 'para', text: 'Les carences martiales correspondent à une carence en fer.' },
        { type: 'para', text: 'L\'acidité gastrique favorise la mise en solution et l\'absorption du fer alimentaire.' },
        { type: 'para', text: 'Une hypochlorhydrie, parfois rencontrée dans certaines gastrites ou gastroparésies, peut compromettre cette assimilation.' },
        { type: 'para', text: 'Les carences martiales ont des origines multiples.' },
        { type: 'bullets', items: [
          'Ménorragie au sens de pertes utérines anormales.',
          'Règles abondantes et prolongées.',
          'Hémorragie digestive.',
          'Carence alimentaire en fer.',
          'Grossesse.',
          'Activité physique intense.',
        ]},
        { type: 'para', text: 'Les besoins en fer sont particulièrement importants chez l\'enfant, l\'adolescent et la femme enceinte.' },
        { type: 'rop', body: [
          'En dehors des contre-indications, le traitement ROP de l\'anémie ferriprive vise notamment l\'estomac pour l\'assimilation du fer alimentaire, ainsi que le foie et la rate pour leur rôle dans le stockage et la gestion du fer.',
        ]},
        { type: 'sub', text: '9.6. Pylorospasme' },
        { type: 'para', text: 'Le pylorospasme doit être distingué de la sténose du pylore, qui relève d\'une prise en charge chirurgicale.' },
        { type: 'para', text: 'Il correspond à une difficulté de relâchement fonctionnel du pylore, susceptible d\'entraver la vidange gastrique.' },
        { type: 'para', text: 'Chez le nourrisson, il peut s\'accompagner de vomissements ou régurgitations post-prandiales, d\'inconfort, de pleurs et d\'une faim persistante.' },
        { type: 'para', text: 'Son étiologie reste discutée.' },
        { type: 'para', text: 'Une immaturité de la régulation vagale est parfois évoquée.' },
      ],
    },
    {
      id: 'relations-viscero-somatiques',
      title: '10. Relations viscéro-somatiques',
      blocks: [
        { type: 'bullets', items: [
          'Dorsalgie costo-vertébrale des 6e et 7e vertèbres thoraciques gauches.',
          'Cervicalgie et névralgie cervico-brachiale gauches.',
          'Douleur de l\'épaule gauche.',
          'Névralgies cervico-brachiales.',
        ]},
      ],
    },
    {
      id: 'relations-viscero-emotionnelles',
      title: '11. Relations viscéro-émotionnelles',
      blocks: [
        { type: 'para', text: 'Dans la lecture viscéro-émotionnelle propre à la ROP, l\'estomac est associé au registre du « moi social », du paraître et de la place occupée dans le groupe, la famille, le travail ou la hiérarchie.' },
        { type: 'para', text: 'Dans cette grille de lecture, sont notamment explorés les enjeux de reconnaissance, de valorisation, de place sociale et, selon l\'histoire du patient, de relation à la figure paternelle. L\'expression « avoir de l\'estomac » renvoie symboliquement à la détermination et au courage.' },
        { type: 'para', text: 'Ces associations constituent une grille d\'exploration clinique propre à la ROP. Elles ne signifient pas qu\'une émotion ou un conflit particulier provoque directement une pathologie gastrique.' },
        { type: 'para', text: 'Deux polarités sont classiquement décrites dans ce modèle :' },
        { type: 'para', text: 'Hypervalorisation. Elle peut s\'exprimer par une surestimation de soi, un besoin important de reconnaissance, une mauvaise tolérance à la critique, une attitude de démonstration ou de puissance, une colère impulsive ou une peur de l\'échec. Dans cette polarité, la recherche de réussite, de séduction ou de reconnaissance sociale peut occuper une place importante.' },
        { type: 'para', text: 'Hypovalorisation. Elle peut au contraire être associée à un manque de confiance en soi, au repli, à la dépréciation de soi, à des frustrations difficilement exprimées, à des rancœurs non verbalisées ou à un vécu répété de subordination.' },
        { type: 'para', text: 'Ces éléments ne constituent pas des profils psychologiques diagnostiques. Ils sont utilisés, lorsqu\'ils paraissent pertinents pour le patient, comme éléments complémentaires de la lecture clinique ROP.' },
      ],
    },
    {
      id: 'conseils',
      title: '12. Conseils',
      blocks: [
        { type: 'para', text: 'L\'acidité gastrique est nécessaire à la digestion.' },
        { type: 'para', text: 'L\'usage répété d\'aliments ou de boissons censés « calmer » les brûlures, comme le lait, peut donner un soulagement transitoire sans traiter la cause sous-jacente.' },
        { type: 'para', text: 'Les conséquences digestives à distance ne peuvent pas être généralisées sans contexte clinique.' },
        { type: 'para', text: 'Parmi les aliments ou boissons susceptibles d\'augmenter les symptômes chez certains patients, on peut citer les agrumes, les produits très sucrés, certaines boissons acides et l\'alcool.' },
        { type: 'para', text: 'Il est généralement conseillé d\'éviter les boissons très froides si elles majorent les symptômes.' },
        { type: 'para', text: 'Boire de l\'eau tempérée peut être mieux toléré.' },
        { type: 'para', text: 'La recommandation d\'eau additionnée de jus de citron relève davantage d\'un conseil empirique que d\'un mécanisme établi.' },
      ],
    },
    {
      id: 'zones-reflexes-podales',
      title: '13. Zones réflexes podales',
      blocks: [
        { type: 'sub', text: '13.1. Syndrome général d\'adaptation' },
        {
          type: 'xref',
          label: 'Voir la référence dans le chapitre 2',
          text: 'Zones réflexes occipitales et podales',
          href: '/lecture/traitement-rop?lang=fr&xrefBack=%2Flecture%2Fchapitre-9%3Flang%3Dfr%23p-zones-reflexes-podales-1&xrefBackLabel=Retour%20au%20chapitre%209#p-hierarchisation-3',
        },
        { type: 'bullets', items: [
          'Colonne vertébrale, articulations costo-transversaires et chaîne ganglionnaire latéro-vertébrale thoracique (Th6-Th9).',
          'Diaphragme et piliers.',
          'Plexus prévertébral.',
        ]},
        { type: 'sub', text: '13.2. Syndrome loco-régional' },
        {
          type: 'xref',
          label: 'Voir la référence dans le chapitre 2',
          text: 'Zones réflexes occipitales et podales',
          href: '/lecture/traitement-rop?lang=fr&xrefBack=%2Flecture%2Fchapitre-9%3Flang%3Dfr%23p-zones-reflexes-podales-4&xrefBackLabel=Retour%20au%20chapitre%209#p-hierarchisation-4',
        },
        { type: 'bullets', items: [
          'Estomac.',
          'SIO : il est confondu avec le hiatus œsophagien.',
          'Petite courbure : ligne courbe allant du hiatus œsophagien au pylore.',
          'Grande courbure : ligne courbe plus latérale, allant du hiatus œsophagien au pylore.',
          'Pylore : sur le bord médian plantaire des deux pieds, généralement plus marqué sur le pied droit.',
        ]},
        { type: 'figure', src: '/chapter-9/FR/cartographies/figure-9-02.png', caption: 'Photo — Hiatus œsophagien et nerfs vagues droit et gauche', alt: 'Repère podal du hiatus œsophagien avec les nerfs vagues droit et gauche', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-9/FR/cartographies/figure-9-04.png', caption: 'Photo — Petite courbure de l’estomac', alt: 'Repère podal de la petite courbure de l’estomac entre cardia et pylore', orientation: 'portrait' },
        { type: 'sub', text: '13.3. Système limbique' },
        {
          type: 'xref',
          label: 'Voir la référence dans le chapitre 2',
          text: 'Zones réflexes occipitales et podales',
          href: '/lecture/traitement-rop?lang=fr&xrefBack=%2Flecture%2Fchapitre-9%3Flang%3Dfr%23p-zones-reflexes-podales-7&xrefBackLabel=Retour%20au%20chapitre%209#p-hierarchisation-5',
        },
        { type: 'para', text: 'Balance cerveau limbique-estomac : écoute-induction, un pouce sur l\'estomac, l\'autre sur le cerveau limbique.' },
      ],
    },
  ],
  slides: {
    url: '/chapter-9/FR/Chapter9 Slides de synthese FR.pdf',
    label: 'Diapositives',
    description: 'Synthèse visuelle du chapitre 9.',
  },
}

const chapter9Pathologies = chapter9Fr.sections.find(
  (section) => section.id === 'pathologies-courantes',
)

if (chapter9Pathologies) {
  const indicationBlocks = chapter9Pathologies.blocks.splice(11)
  if (indicationBlocks[0]?.type === 'sub') indicationBlocks.shift()

  const pathologiesIndex = chapter9Fr.sections.indexOf(chapter9Pathologies)
  chapter9Fr.sections.splice(pathologiesIndex + 1, 0, {
    id: 'indications-troubles-fonctionnels',
    title: '9. Indications : troubles fonctionnels',
    blocks: indicationBlocks,
  })
}

const chapter9ReflexSection = chapter9Fr.sections.find((section) => section.id === 'zones-reflexes-podales')
if (chapter9ReflexSection) chapter9ReflexSection.blocks = [
  { type: 'note', label: 'Précision méthodologique', body: ['Pour l’estomac, le protocole associe la zone spécifique de l’organe, la régulation neuro-végétative, l’environnement loco-régional abdominal, puis l’intégration viscéro-somatique et la Balance cerveau limbique-estomac.'] },
  { type: 'sub', text: '13.1. Repères propres à l’estomac' },
  { type: 'para', text: 'La cartographie actuelle est conservée et précisée selon les principales régions fonctionnelles de l’estomac.' },
  { type: 'bullets', items: ['Estomac : zone générale de l’organe.', 'Sphincter inférieur de l’œsophage (SIO) : en relation avec la zone du hiatus œsophagien.', 'Petite courbure : ligne courbe allant du hiatus œsophagien au pylore.', 'Grande courbure : ligne courbe plus latérale, allant également du hiatus œsophagien au pylore.', 'Pylore : sur le bord médial plantaire des deux pieds, généralement plus marqué à droite.'] },
  { type: 'para', text: 'Fundus, corps gastrique et antre pylorique peuvent être utilisés comme repères fonctionnels secondaires lorsqu’ils sont individualisés dans la cartographie de la méthode, sans créer de nouvelles coordonnées podales en l’absence de repères déjà validés.' },
  { type: 'rop', body: ['La zone propre de l’estomac reste la cible principale ; SIO, courbures et pylore sont précisés selon le trouble fonctionnel dominant.'] },
  { type: 'sub', text: '13.2. Niveau 1 — Régulation des centres supérieurs' },
  { type: 'para', text: 'Le Niveau 1 reste court et optionnel. Il devient plus pertinent lorsque le tableau associe stress important, hypervigilance digestive, gastralgies fonctionnelles liées au contexte émotionnel, ou troubles du sommeil et de l’adaptation.' },
  { type: 'bullets', items: ['Zones réflexes occipitales.', 'Tronc cérébral et centres d’intégration.', 'Hypothalamus.', 'Axe hypothalamo-hypophysaire.'] },
  { type: 'xref', label: 'Voir le chapitre 3 — Système nerveux central', href: '/lecture/chapitre-3-rework?lang=fr' },
  { type: 'rop', body: ['Le Niveau 1 constitue une préparation générale lorsque le contexte central et émotionnel paraît participer au tableau.'] },
  { type: 'sub', text: '13.3. Niveau 2 — Régulation neuro-végétative et adaptation' },
  { type: 'para', text: 'Le Niveau 2 constitue le niveau fonctionnel majeur de l’estomac. Il associe les voies vagales, le sympathique thoracique et les plexus prévertébraux impliqués dans l’accommodation, la motricité et la sécrétion gastriques.' },
  { type: 'bullets', items: ['Nerfs vagues droit et gauche.', 'Sympathique thoracique, autour de Th6-Th9 dans la lecture clinique du chapitre.', 'Grand nerf splanchnique.', 'Plexus cœliaque.', 'Coordination autonome de l’accommodation, de la motricité et de la sécrétion gastriques.'] },
  { type: 'figure', src: '/chapter-9/FR/cartographies/figure-9-02.png', caption: 'Photo : Hiatus œsophagien et nerfs vagues droit et gauche', alt: 'Repère podal du hiatus œsophagien avec les nerfs vagues droit et gauche', orientation: 'portrait' },
  { type: 'para', text: 'Le diaphragme et ses piliers restent associés à ce Niveau 2 comme interface fonctionnelle, notamment autour du hiatus œsophagien, de la jonction gastro-œsophagienne et de la dynamique thoraco-abdominale.' },
  { type: 'xref', label: 'Voir le chapitre 4 — Système nerveux autonome', href: '/lecture/chapitre-4-rework?lang=fr' },
  { type: 'xref', label: 'Voir le chapitre 8 — Diaphragme', href: '/lecture/chapitre-8?lang=fr' },
  { type: 'rop', body: ['Le Niveau 2 vise la coordination vagale, sympathique et gastrique, plutôt qu’une stimulation isolée du nerf vague.'] },
  { type: 'sub', text: '13.4. Niveau 3 — Régulation viscérale loco-régionale' },
  { type: 'para', text: 'Le Niveau 3 constitue le cœur anatomique du protocole gastrique. Il permet d’adapter la lecture à la région fonctionnelle concernée.' },
  { type: 'para', text: 'Jonction œso-gastrique. Selon les tests : SIO, cardia, hiatus œsophagien, fundus et ligament phrénico-gastrique.' },
  { type: 'para', text: 'Corps gastrique. Fundus et corps, petite et grande courbures, petit omentum, grand omentum et rapports avec le foie, la rate et le pancréas.' },
  { type: 'figure', src: '/chapter-9/FR/cartographies/figure-9-04.png', caption: 'Photo : Petite courbure de l’estomac', alt: 'Repère podal de la petite courbure de l’estomac entre cardia et pylore', orientation: 'portrait' },
  { type: 'para', text: 'Région antro-pylorique. Antre, pylore, premier duodénum et continuité avec la vidange gastrique.' },
  { type: 'xref', label: 'Voir le chapitre 7 — Socle régional abdominal et péritonéal', href: '/lecture/chapitre-7?lang=fr' },
  { type: 'xref', label: 'Voir le chapitre 10 — Duodénum', href: '/lecture/chapitre-10?lang=fr' },
  { type: 'rop', body: ['Le Niveau 3 permet d’adapter le traitement à la région fonctionnelle — jonction œso-gastrique, corps gastrique ou antre-pylore — plutôt que de considérer l’estomac comme une zone homogène.'] },
  { type: 'sub', text: '13.5. Niveau 4 — Intégration viscéro-somatique et Balance cerveau limbique–estomac' },
  { type: 'para', text: 'Versant viscéro-somatique. Selon les tests, la lecture peut intégrer Th6-Th9, surtout à gauche, les articulations costo-vertébrales correspondantes, la région interscapulaire gauche, les territoires cervico-brachiaux et l’épaule gauche lorsque le contexte clinique le rend pertinent. Le diaphragme gauche et la paroi thoraco-abdominale supérieure peuvent compléter cette lecture.' },
  { type: 'para', text: 'Balance cerveau limbique–estomac. Dans le vocabulaire propre à la ROP, l’écoute-induction associe un pouce sur la zone de l’estomac et l’autre sur la zone du cerveau limbique.' },
  { type: 'para', text: 'Cette « balance » constitue une technique clinique d’intégration propre à la ROP. Elle ne décrit pas une connexion anatomique directe entre la zone podale, les réseaux limbiques et l’estomac.' },
  { type: 'xref', label: 'Voir le chapitre 3 — Système nerveux central', href: '/lecture/chapitre-3-rework?lang=fr' },
  { type: 'xref', label: 'Voir le chapitre 5 — Mécanisme de stress', href: '/lecture/chapitre-5-rework?lang=fr' },
  { type: 'rop', body: ['Le Niveau 4 associe les convergences somatiques et la dimension émotionnelle propre à la méthode, tout en distinguant clairement le vocabulaire clinique ROP des mécanismes anatomiques démontrés.'] },
  { type: 'sub', text: '13.6. Soutiens associés selon les tests' },
  { type: 'bullets', items: ['Diaphragme : SIO, cardia et fundus.', 'Duodénum : pylore et vidange gastrique.', 'Foie : petit omentum et lobe gauche.', 'Pancréas : rapport postérieur.', 'Rate : fundus et grande courbure.', 'Côlon transverse : grand omentum et partie caudale de l’estomac.'] },
  { type: 'para', text: 'Ces territoires sont des soutiens régionaux ou fonctionnels, et non une séquence systématique.' },
  { type: 'sub', text: '13.7. Lecture clinique' },
  { type: 'bullets', items: ['Gastralgie fonctionnelle ou stress : Niveau 2 + zone gastrique + Balance cerveau limbique–estomac selon les tests.', 'Gastroparésie ou lenteur de vidange : vague au Niveau 2 + corps/antre/pylore au Niveau 3 + duodénum selon les tests.', 'Reflux gastro-œsophagien ou inconfort de la jonction œso-gastrique : SIO + hiatus + diaphragme + estomac proximal ; voir le chapitre 8.', 'Pylorospasme fonctionnel après exclusion médicale : pylore + antre + duodénum proximal + régulation autonome.'] },
  { type: 'note', label: 'Principe de sécurité', body: ['Hématémèse, méléna, amaigrissement inexpliqué, douleur nocturne persistante, vomissements répétés, fièvre ou douleur thoraco-abdominale profonde nécessitent une évaluation médicale.'] },
]

// Final publication revision.
const chapter9Situation = chapter9Fr.sections.find((section) => section.id === 'situation')
if (chapter9Situation) {
  for (const block of chapter9Situation.blocks) {
    if (block.type === 'para') block.text = block.text.replace(' (figure 1.6)', '')
  }
}
const chapter9Anatomy = chapter9Fr.sections.find((section) => section.id === 'anatomie')
if (chapter9Anatomy) {
  for (const block of chapter9Anatomy.blocks) {
    if (block.type === 'para') block.text = block.text.replace(' (figure 8.1)', '')
  }
}
const chapter9Emotional = chapter9Fr.sections.find((section) => section.id === 'relations-viscero-emotionnelles')
if (chapter9Emotional) chapter9Emotional.blocks = [
  { type: 'para', text: 'Dans la lecture viscéro-émotionnelle propre à la ROP, l’estomac est associé au registre du « moi social », du paraître et de la place occupée dans le groupe, la famille, le travail ou la hiérarchie.' },
  { type: 'para', text: 'Dans cette grille de lecture symbolique, sont notamment explorés les enjeux de reconnaissance, de valorisation, de place sociale et, selon l’histoire du patient, de relation à la figure paternelle. L’expression « avoir de l’estomac » renvoie symboliquement à la détermination et au courage.' },
  { type: 'para', text: 'Deux polarités sont classiquement décrites dans cette lecture :' },
  { type: 'para', text: 'Hypervalorisation. Elle peut s’exprimer par une surestimation de soi, un besoin important de reconnaissance, une mauvaise tolérance à la critique, une attitude de démonstration ou de puissance, une colère impulsive ou une peur de l’échec. Dans cette polarité, la recherche de réussite, de séduction ou de reconnaissance sociale peut occuper une place importante.' },
  { type: 'para', text: 'Hypovalorisation. Elle peut au contraire être associée à un manque de confiance en soi, au repli, à la dépréciation de soi, à des frustrations difficilement exprimées, à des rancœurs non verbalisées ou à un vécu répété de subordination.' },
]
if (chapter9ReflexSection) {
  chapter9ReflexSection.title = '13. Zones réflexes ROP'
  chapter9ReflexSection.blocks = chapter9ReflexSection.blocks.filter((block) => block.type !== 'rop' && (block.type !== 'note' || block.label === 'Principe de sécurité'))
  chapter9ReflexSection.blocks.splice(4, 0, { type: 'para', text: 'La zone propre de l’estomac reste la cible principale ; SIO, courbures et pylore sont précisés selon le trouble fonctionnel dominant.' })
  for (const block of chapter9ReflexSection.blocks) {
    if (block.type !== 'para') continue
    block.text = block.text
      .replace('Le Niveau 3 constitue le cœur anatomique du protocole gastrique. Il permet d’adapter la lecture à la région fonctionnelle concernée.', 'Le Niveau 3 constitue le cœur anatomique du protocole gastrique.')
  }
}

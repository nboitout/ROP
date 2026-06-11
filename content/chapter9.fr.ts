import type { Chapter } from './types'

export const chapter9Fr: Chapter = {
  slug: 'chapter-9',
  number: '9',
  title: 'Estomac',
  sections: [
    {
      id: 'presentation',
      title: 'Présentation',
      blocks: [
        { type: 'para', text: 'L\'estomac est le premier segment dilaté du tube digestif. Il fait suite à l\'oesophage. Il a pour fonction le remplissage, le stockage, le brassage et la vidange progressive du bol alimentaire pour permettre la digestion intestinale.' },
      ],
    },
    {
      id: 'situation',
      title: 'Situation',
      blocks: [
        { type: 'para', text: 'L\'estomac est localisé au niveau de l\'hypochondre gauche et de l\'épigastre, sous l\'hémi-coupole diaphragmatique gauche. Sa position est variable selon son état de remplissage et selon la morphologie (bréviligne ou longiligne).' },
      ],
    },
    {
      id: 'anatomie',
      title: 'Anatomie',
      blocks: [
        { type: 'para', text: 'Globalement, l\'estomac a la forme d\'un J et comprend quatre segments et deux sphincters :' },
        { type: 'bullets', items: [
          'Sphincter inférieur oesophagien (SIO) : après sa traversée du hiatus oesophagien du diaphragme, à hauteur de Th10, l\'oesophage abdominal se continue avec le SIO, sphincter fonctionnel à haute pression assurant la continence entre l\'oesophage et l\'estomac.',
          'Le cardia est un orifice qui assure la jonction entre le SIO et l\'estomac. Il est situé 2 à 4 cm à gauche du processus xyphoïde.',
          'Grosse tubérosité ou fundus : partie supérieure de l\'estomac, située plus haute que l\'incisure cardiale.',
          'Corps gastrique : vertical, il prolonge vers le bas le fundus. C\'est dans le corps que se font le brassage et le malaxage des aliments.',
          'Grande courbure : suit le bord latéral du muscle grand droit de l\'abdomen gauche, des 9ème et 10ème côtes au pylore.',
          'Petite courbure : médiale le long de la ligne blanche, entre le cardia et la région antropylorique.',
          'Petite tubérosité (fond) : fond caudal de l\'estomac, position variable selon le taux de remplissage et la morphologie.',
          'Antre pylorique : situé entre la petite tubérosité et le pylore ; réservoir contrôlant la vidange gastrique.',
          'Pylore — canal pylorique : portion rétrécie faisant suite à l\'antre. Sphincter pylorique : à mi-distance d\'une ligne joignant l\'incisure jugulaire au pubis.',
          'L\'incisure angulaire est l\'angle formé par la petite courbure et l\'antre pylorique.',
        ]},
        { type: 'rop', body: [
          'Nous devons porter notre attention sur la petite courbure en raison de sa riche innervation parasympathique et sa vascularisation, qui en font une zone à fort potentiel réflexe.',
          'Zone réflexe podale de la petite courbure : une ligne courbe allant du hiatus oesophagien au pylore.',
        ]},
      ],
    },
    {
      id: 'rapports',
      title: 'Rapports',
      blocks: [
        { type: 'bullets', items: [
          'Céphaliquement : le diaphragme, auquel il est fixé par le ligament phrénico-gastrique ;',
          'Caudalement : le colon transverse auquel il est relié par le grand omentum ;',
          'Ventralement : le lobe gauche du foie, le gril costal et la paroi abdominale ;',
          'Dorsalement : la bourse omentale (anciennement arrière-cavité des épiploons), le pancréas et la 4ème portion duodénale ;',
          'Latéralement : la rate à laquelle il est relié par le ligament gastro-splénique ;',
          'Médialement : le petit omentum qui relie la petite courbure à la 1ère portion du duodénum et au hile hépatique.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: 'Vascularisation',
      blocks: [
        { type: 'sub', text: 'Artérielle' },
        { type: 'para', text: 'Les trois branches du tronc coeliaque, branche collatérale de l\'aorte abdominale à hauteur de Th12-L1, irriguent l\'estomac :' },
        { type: 'bullets', items: [
          'L\'artère splénique ;',
          'L\'artère gastrique gauche ;',
          'L\'artère gastrique droite, issue de l\'artère hépatique propre, elle-même issue de l\'artère hépatique commune.',
        ]},
        { type: 'para', text: 'Les branches collatérales de ces trois artères forment les cercles artériels de la petite et de la grande courbure.' },
        { type: 'sub', text: 'Veineuse' },
        { type: 'para', text: 'Les veines, satellites des artères, se jettent dans la veine porte (système porte hépatique).' },
      ],
    },
    {
      id: 'innervation',
      title: 'Innervation',
      blocks: [
        { type: 'bullets', items: [
          'Parasympathique : les nerfs vagues droit et gauche ont un rôle essentiel sur la fonction mécanique et neuro-hormonale de l\'estomac. Ils stimulent la sécrétion acide, la motilité gastrique et le tonus du SIO.',
          'Sympathique : le grand nerf splanchnique issu des racines Th6 à Th9 a une action antagoniste. Une dysfonction de l\'estomac crée une tension musculaire au niveau de la vertèbre Th6.',
          'Pacemaker stomacal : l\'estomac possède un centre nerveux propre qui rythme les contractions stomacales de base à environ 3 cycles par minute.',
        ]},
      ],
    },
    {
      id: 'physiologie',
      title: 'Physiologie',
      blocks: [
        { type: 'para', text: 'L\'estomac réalise des fonctions mécaniques et neuro-hormonales pour la digestion des aliments.' },
        { type: 'lead', label: 'Fonction mécanique', text: 'Sous l\'action essentielle des deux nerfs vagues et la distension mécanique par les aliments, la paroi musculaire de l\'estomac se contracte de manière péristaltique.' },
        { type: 'sub', text: 'Fonction neuro-hormonale' },
        { type: 'para', text: 'La distension stomacale mécanique, la présence des aliments et les stimulations vagales déclenchent des sécrétions :' },
        { type: 'bullets', items: [
          'Acide chlorhydrique (HCL) : sécrété par le fundus, il aseptise le bol alimentaire et facilite l\'absorption des nutriments.',
          'Pompe à protons gastrique : permet la sécrétion des ions H+ par l\'épithélium gastrique, responsable du pH acide du suc gastrique (pH entre 1,5 et 3,5).',
          'Mucus : protège la muqueuse gastrique de l\'acidité chlorhydrique et fait glisser les aliments.',
          'Pepsinogène : précurseur de la pepsine pour la digestion des protéines.',
          'Enzymes : sécrétés par la muqueuse.',
          'Gastrine : les cellules G, concentrées dans la région antro-pylorique, sécrètent sous l\'action du nerf vague une hormone peptidique qui amplifie les sécrétions acides et stimule la motricité gastrique.',
        ]},
        { type: 'lead', label: 'Vidange gastrique', text: 'La contraction antrique, combinée au relâchement du sphincter pylorique, permet la vidange progressive du bol alimentaire vers le duodénum en trois phases : liquidienne (moins de 30 mn), solide digestive (variable selon les aliments) et solide indigestive (bien après le repas).' },
        { type: 'rop', body: [
          'L\'action conjointe — mécanique et neuro-hormonale — montre la priorité à donner au nerf vague dans notre action réflexe, à la fois pour la motricité gastrique, les sécrétions et la vidange.',
        ]},
      ],
    },
    {
      id: 'pathologies-courantes',
      title: 'Pathologies courantes',
      blocks: [
        { type: 'para', text: 'Toutes les dysfonctions gastriques se caractérisent par un manque d\'acidité favorisant la fermentation, avec ballonnements, flatulences, éructations et sensation de pesanteur post-prandiale. Une dorsalgie inter-scapulaire gauche autour des vertèbres Th6 à Th9 peut être d\'origine ostéo-articulaire comme d\'origine gastrique.' },
        { type: 'sub', text: 'Diagnostic d\'exclusion' },
        { type: 'bullets', items: [
          'Amaigrissement rapide non expliqué ;',
          'Présence de ganglion de Troisier rétro-claviculaire gauche ;',
          'Douleurs thoraco-abdominales profondes ;',
          'Fièvre ;',
          'Hématémèse : rejet de sang rouge lors d\'un vomissement ;',
          'Méléna : évacuation de sang noir digéré, suite à une hémorragie interne digestive haute ;',
          'Douleurs nocturnes ou au chant du coq.',
        ]},
        { type: 'sub', text: 'Indications — troubles fonctionnels' },
        { type: 'lead', label: 'Gastralgie simple', text: 'Douleur stomacale, le plus souvent en relation avec le stress. Les symptômes regroupent douleurs épigastriques, crampes gastriques, nausées et vomissements, éructations, flatulences, anorexie.' },
        { type: 'lead', label: 'Gastro-parésie ou estomac atone', text: 'Déficit du nerf vague secondaire à une mauvaise vidange pylorique. Par la stase alimentaire prolongée, il favorise la fermentation, l\'irritation de la muqueuse et à terme une gastrite.' },
        { type: 'lead', label: 'Gastrite', text: 'Maladie inflammatoire avec oedème, nécrose de l\'épithélium et raréfaction glandulaire. Étiologies : éthylisme, prise d\'anti-inflammatoires au long cours (aspirine), primo-infection à Hélicobacter pylori, infection bactérienne gingivo-dentaire, allergies alimentaires, maladies auto-immunes, avitaminose.' },
        { type: 'lead', label: 'Reflux gastro-oesophagien et hernie hiatale', text: 'Voir Chapitre 8 Diaphragme.' },
        { type: 'lead', label: 'Carences martiales', text: 'Carence en fer. Le HCL sécrété par la muqueuse stomacale rend le fer alimentaire plus assimilable. Toute hypochlorhydrie entraîne une mauvaise assimilation du fer. Étiologies : ménorragie, hémorragie digestive, carence alimentaire en fer, grossesse, activité physique intense.' },
        { type: 'lead', label: 'Pylorospasme', text: 'À différencier de la sténose du pylore qui relève de la chirurgie. Les fibres musculaires ont du mal à se relâcher, entravant la vidange gastrique.' },
        { type: 'rop', body: [
          'Zones réflexes podales :',
          'Syndrome général d\'adaptation (SGA) : Cf. Chapitre 2.',
          'Colonne vertébrale, articulations costo-transversaires (chaîne ganglionnaire latéro-vertébrale thoracique Th6-Th9) ;',
          'Diaphragme et Piliers ;',
          'Plexus prévertébral.',
          'Syndrome loco-régional :',
          'Estomac ;',
          'SIO : confondu avec le hiatus oesophagien ;',
          'Petite courbure : une ligne courbe allant du hiatus oesophagien au pylore ;',
          'Grande courbure : une ligne courbe plus latérale, allant du hiatus oesophagien au pylore ;',
          'Pylore : sur le bord médian plantaire, sur les deux pieds, généralement plus marqué sur le pied droit.',
          'Système limbique : balance cerveau limbique-estomac — écoute-induction, un pouce sur l\'estomac, l\'autre pouce sur le cerveau limbique.',
          'Relations viscéro-somatiques : dorsalgie costo-vertébrale des 6ème et 7ème vertèbres thoraciques gauches ; cervicalgie et névralgie cervico-brachiale gauches ; douleur de l\'épaule gauche.',
        ]},
      ],
    },
    {
      id: 'relations-viscero-emotionnelles',
      title: 'Relations viscéro-émotionnelles',
      blocks: [
        { type: 'para', text: 'L\'estomac est l\'organe du « moi social ». C\'est un organe du paraître. La personne « estomac » réagit aux émotions liées à l\'ambition de reconnaissance, à la peur du jugement d\'autrui, au désir de perfection et aux relations conflictuelles avec le père.' },
        { type: 'para', text: 'Les symptômes sont les signes avant-coureurs d\'une cratérisation des troubles émotionnels : ils signifient que la personne n\'est plus capable de s\'adapter au milieu social.' },
        { type: 'para', text: 'L\'hypervalorisation se traduit par la surestimation de soi, le sentiment de puissance et une fierté mal placée. L\'hypovalorisation se caractérise par un manque de confiance en soi, la résignation, le repli sur soi et un comportement timide toujours aux ordres d\'autrui.' },
      ],
    },
    {
      id: 'conseils',
      title: 'Conseils',
      blocks: [
        { type: 'para', text: 'L\'acidité du suc gastrique est nécessaire pour la digestion. Pour combattre l\'hyperacidité, on peut utiliser du bicarbonate de soude, des eaux minérales alcalines ou des inhibiteurs de la pompe à protons (IPP) — à utiliser avec discernement car l\'hypochlorhydrie induite peut aggraver les troubles digestifs et les carences en fer.' },
        { type: 'para', text: 'Parmi les aliments augmentant l\'acidité : les oranges, le sucre, les boissons acides, l\'alcool. Éviter de boire de l\'eau trop froide. Il est conseillé de boire un verre d\'eau contenant un peu de gros sel non raffiné avant chaque repas pour favoriser les sécrétions gastriques.' },
      ],
    },
  ],
}

// Chapter 4 content — French (draft, part 1)
// Source: public/chapter-4/Chapitre 4  Système nerveux autonome - part1.docx (Guy Boitout)
// Admin-only draft: surfaced exclusively from /admin/chapitres while in preparation.
// Internal illustrations extracted from the source document into public/chapter-4/.

import type { Chapter } from './types'

export const chapter4Fr: Chapter = {
  slug: 'chapter-4',
  number: '4',
  title: 'Système nerveux autonome',
  sections: [
    {
      id: 'presentation',
      title: 'Présentation',
      blocks: [
        { type: 'sub', text: 'Deux systèmes : Parasympathique et Sympathique' },
        { type: 'para', text: 'Dans le chapitre 1 Généralités, nous avons vu l’importance de la mobilité des viscères. Cette mobilité dépend, en grande partie, du bon fonctionnement des deux composantes du système nerveux autonome (SNA) : le Parasympathique et le Sympathique. (figure 4.1)' },
        { type: 'figure', src: '/chapter-4/figure-4-1.jpeg', alt: 'Schéma du Parasympathique et du Sympathique', caption: 'Figure 4.1 — Parasympathique et Sympathique', orientation: 'portrait' },
        { type: 'para', text: 'Ces deux composantes du SNA sont chargées d’ajuster le fonctionnement des viscères et des glandes aux besoins de l’organisme, tout en préservant, conjointement avec les systèmes hormonal et immunitaire, l’équilibre du milieu intérieur ou homéostasie.' },
        { type: 'para', text: 'Le SNA est la partie du système nerveux la plus ancienne dans l’ordre phylogénétique et ontogénique. (Cf. Chapitre 3 Système nerveux central)' },
        { type: 'para', text: 'La phylogénèse étudie l’évolution des espèces animales depuis les animaux les plus primitifs jusqu’à l’homme.' },
        { type: 'para', text: 'L’ontogénèse, c’est l’étude phylogénétique chez l’être humain depuis la fécondation jusqu’à l’âge adulte.' },

        { type: 'sub', text: 'Physiologie générale du SNA' },
        { type: 'leadBullets', items: [
          { label: 'Fonction générale', text: 'le SNA gouverne et harmonise les activités digestives, respiratoires, cardio-vasculaires, urinaires et glandulaires. Il préserve la trophicité des tissus et procède à leur renouvellement cellulaire.' },
          { label: 'Homéostasie', text: 'le maître-mot du rôle du SNA est l’adaptation en réponse à une situation de stress, de conflit ou d’émotions, en vue de préserver l’homéostasie (pH sanguin, glycémie, constantes biologiques, température, etc.). (Cf. Chapitre 5 Mécanisme de stress)' },
        ]},

        { type: 'sub', text: 'Différences fonctionnelles' },
        { type: 'leadBullets', items: [
          { label: 'Parasympathique', text: 'il gère le quotidien. Il est dit endophylactique : il protège et restaure le milieu intérieur. Il prédomine la nuit et pendant le sommeil. Il est anabolique et trophotrophique. Il contrebalance les effets du Sympathique.' },
          { label: 'Sympathique', text: 'il est dit ergotrophique : il prépare l’individu à l’action. Il réagit surtout aux situations nouvelles et urgentes, aux dangers, aux situations de stress, d’émotions négatives et de douleurs. Il prédomine le jour et dans les états de veille. Il est dit catabolique. C’est le système pour combattre ou fuir, le fameux « fight or flight » des anglo-saxons.' },
          { label: 'Viscères', text: 'ils reçoivent une double innervation parasympathique et sympathique.' },
          { label: 'Parois du tronc, membres et téguments', text: 'ils ne sont modulés que par le Sympathique.' },
          { label: 'Système vasculaire', text: 'il est presque exclusivement contrôlé par le Sympathique. Il a une action majoritairement vasoconstrictrice mais il provoque toutefois une vasodilatation des artères des muscles du système somatique, des coronaires myocardiques et des artères pulmonaires lors des activités physiques importantes et sportives.' },
          { label: 'Cerveau', text: 'il a son propre système de régulation de la circulation sanguine car il ne peut supporter des variations brusques. Son système de régulation repose sur le sinus et le glomus carotidiens, situés à la bifurcation carotidienne, à hauteur de la vertèbre C4, commandés conjointement par le ganglion sympathique cervical supérieur et les nerfs glossopharyngien IX et vague X.' },
          { label: 'Corps érectiles sexuels', text: 'l’apport sanguin pour l’érection des organes érectiles (pénis et clitoris) est gouverné par le Parasympathique. (Cf. Chapitre 21 Système érectile masculin et féminin)' },
          { label: 'Action anti-inflammatoire', text: 'les fibres sensitives du nerf vague, principal nerf parasympathique, informent l’hypothalamus de l’état des fonctions internes. Selon l’état de stress, l’hypothalamus met en route l’axe hormonal hypothalamo-hypophyso-surrénalien (Cf. Chapitre 5 Mécanisme de stress) en faisant libérer les corticoïdes anti-inflammatoires.' },
        ]},

        { type: 'sub', text: 'Relation Parasympathique-Sympathique' },
        { type: 'para', text: 'Bien qu’ils aient des fonctions différentes, les anastomoses et connexions entre ces deux systèmes sont nombreuses au niveau des plexus, pour que la complémentarité entre les deux systèmes puisse équilibrer et harmoniser les fonctions viscéro-glandulaires.' },
        { type: 'para', text: 'Il est parfois difficile de différencier les symptômes venant de l’un ou de l’autre, tant ces deux systèmes sont enchevêtrés et interdépendants.' },
        { type: 'rop', body: [
          'Le SNA est une des clés de notre action. Fidèles à notre principe « priorité au nerf », c’est d’abord en portant notre action sur le SNA que nous restituons les fonctions viscéro-glandulaires. Les déséquilibres du SNA sont, le plus souvent, en amont des dysfonctions viscéro-glandulaires. Celles-ci ne sont que les conséquences d’un état de stress où le SNA n’a pas pu mettre en route les mécanismes d’adaptation-compensation nécessaires au retour à l’équilibre. (Cf. Chapitre 5 Mécanisme de stress)',
        ]},
        { type: 'leadBullets', items: [
          { label: 'Relation SNA-système hormonal', text: 'le SNA est très connecté au système hormonal par l’hypothalamus et l’hypophyse, qui sont des neuroglandes combinant à la fois fonctions neurologique et hormonale.' },
          { label: 'Neuromédiateurs', text: 'le neuromédiateur du Parasympathique est l’acétylcholine. Les neuromédiateurs du Sympathique sont l’acétylcholine pour les neurones pré-ganglionnaires et la noradrénaline pour les neurones post-ganglionnaires.' },
        ]},

        { type: 'sub', text: 'Relation système nerveux autonome (SNA) – système nerveux somatique (SNS)' },
        { type: 'para', text: 'Notre livre Réflexothérapie Occipito-Podale et système neuro-méningé (Elsevier Masson) fut consacré aux nerfs du SNS — nerfs spinaux et crâniens — dans lequel nous avons signalé :' },
        { type: 'bullets', items: [
          'Les nombreuses anastomoses et connexions entre les nerfs du SNS et du SNA. Exemple : le nerf vague et les deux premiers nerfs cervicaux.',
        ]},
        { type: 'para', text: 'Les composantes neuro-végétatives des nerfs crâniens et spinaux :' },
        { type: 'leadBullets', items: [
          { label: 'Nerfs crâniens', text: 'les nerfs oculomoteur III, facial VII et glossopharyngien IX apportent l’innervation parasympathique aux organes de la tête. Le nerf trijumeau V véhicule des fibres sympathiques.' },
          { label: 'Nerfs spinaux', text: 'les fibres sympathiques entrent dans la composition des nerfs spinaux. Les nerfs médian et sciatique sont riches en fibres sympathiques ; leur atteinte explique les troubles vasomoteurs (cyanose) des extrémités des mains et des pieds, la décalcification (ostéoporose algique) et la fibrose des tissus articulaires (ankylose).' },
        ]},

        { type: 'sub', text: 'Relation SNA-sommeil' },
        { type: 'para', text: 'Les cogitations, les stress de toutes natures ont tendance à perturber le sommeil, à en diminuer la durée mais, surtout, la qualité.' },
        { type: 'para', text: 'Un bon sommeil est important pour le fonctionnement neuroendocrinien et pour conserver un bon équilibre du SNA. Un manque de sommeil prédispose à la dépression, au vieillissement prématuré, au diabète, à l’obésité et aux maladies cardio-vasculaires.' },
        { type: 'para', text: 'Des cellules de la névroglie (Cf. Chapitre 3 Système nerveux central), les astrocytes, éliminent les synapses entre les neurones lorsqu’elles sont privées de sommeil.' },
        { type: 'para', text: 'Il est donc inutile de chercher à rééquilibrer le SNA si le corps et l’esprit sont en manque de sommeil.' },
      ],
    },
    {
      id: 'organisation',
      title: 'Organisation du SNA',
      blocks: [
        { type: 'para', text: 'Le SNA est d’une anatomie complexe et d’une physiologie d’une grande subtilité. Un livre ne suffirait pas pour décrire son anatomie.' },
        { type: 'para', text: 'Comme le système nerveux somatique, le Parasympathique et le Sympathique comportent des fonctions motrices ou efférentes (viscéro-motricité) et sensitives ou afférentes (viscéro-sensibilité) :' },
        { type: 'leadBullets', items: [
          { label: 'Viscéro-motricité', text: 'le Parasympathique et le Sympathique ont longtemps été présentés en mettant l’accent sur les effets antagonistes de leurs actions motrices sur de nombreux organes. Exemple : le Parasympathique ralentit le rythme cardiaque (bradycardie) alors que le Sympathique l’accélère (tachycardie) ; le Parasympathique stimule la contraction des parois du tube digestif (péristaltisme) et la sécrétion des glandes muqueuses, alors que le Sympathique les inhibe. En réalité, ces deux systèmes sont complémentaires.' },
          { label: 'Viscéro-sensitivité', text: 'la fonction du SNA ne se réduit pas à cette dualité motrice : son rôle sensitif est essentiel. Le nerf vague est composé de 70 à 80 % de fibres sensitives informant en permanence le cerveau sur le fonctionnement de nos viscères et glandes. Avant d’être un nerf viscéro-moteur, le nerf vague est un nerf viscéro-sensitif.' },
          { label: 'Système nerveux entérique (SNE)', text: 'aux deux composantes parasympathique et sympathique du SNA, il faut en réalité ajouter une troisième composante, le système nerveux entérique (SNE), qui gouverne l’intestin de façon autonome. C’est notre fameux deuxième cerveau, qui fonctionne en pilote automatique sans recourir au Parasympathique ni au Sympathique dans les conditions physiologiques. Ceux-ci ne prennent le contrôle que lorsque apparaissent des dysfonctions de l’intestin. (Cf. Chapitre 9 Système nerveux entérique)' },
        ]},
      ],
    },
    {
      id: 'parasympathique-visceromoteur',
      title: 'Parasympathique viscéro-moteur',
      blocks: [
        { type: 'para', text: 'On distingue le Parasympathique crânien et le Parasympathique pelvien (ou sacral). (figure 4.2)' },
        { type: 'figure', src: '/chapter-4/figure-4-2.jpeg', alt: 'Schéma du Parasympathique crânien et pelvien', caption: 'Figure 4.2 — Parasympathique crânien et pelvien', orientation: 'portrait' },

        { type: 'sub', text: 'Parasympathique crânien' },
        { type: 'para', text: 'Il gouverne deux territoires : le territoire céphalique et le territoire cervico-thoraco-abdominal.' },
        { type: 'leadBullets', items: [
          { label: 'Territoire céphalique', text: 'se reporter aussi au livre Réflexothérapie et système neuro-méningé, chapitre 8, page 99 (Elsevier-Masson).' },
          { label: 'Origine', text: 'tronc cérébral. Il apporte l’innervation parasympathique aux organes de la tête.' },
          { label: 'Trajet', text: 'les fibres parasympathiques empruntent le trajet des nerfs crâniens suivants. (figure 4.2)' },
          { label: 'Nerf oculomoteur III', text: 'innervation parasympathique du muscle sphincter de la pupille (myosis) et des muscles ciliaires (augmentation de la courbure du cristallin) pour l’accommodation à la vue de près.' },
          { label: 'Nerf facial VII', text: 'innervation parasympathique des glandes lacrymales (larmes), salivaires submandibulaires et sublinguales (sécrétion permanente), des glandes muqueuses du nez, des sinus para-nasaux, du palais et du voile du palais.' },
          { label: 'Nerf glosso-pharyngien IX', text: 'son origine est dans la moelle allongée, située dans le foramen magnum : innervation parasympathique de la sécrétion salivaire de la glande parotide (lors de la mastication), régulation de la pression artérielle (hypotension) et ralentissement du rythme cardiaque (bradycardie), conjointement avec le nerf vague X, au niveau du sinus carotidien.' },
          { label: 'Terminaison', text: 'plexus pré-viscéraux des organes de la tête. Les fibres parasympathiques crâniennes forment, avec les fibres sympathiques issues des ganglions cervicaux et des ganglions thoraciques latéro-vertébraux de C8 à Th2 ou Th3, les plexus pré-viscéraux des organes de la tête. (figure 4.1)' },
          { label: 'Ganglion ciliaire', text: 'situé dans la cavité orbitaire et associé au nerf oculomoteur III, il commande le corps ciliaire (accommodation à la vue de près) et le muscle constricteur de la pupille (accommodation à la lumière).' },
          { label: 'Ganglion ptérygo-palatin', text: 'situé dans la fosse ptérygo-palatine, au fond de la fosse infra-temporale (carrefour des principales cavités du crâne), il est associé au nerf maxillaire V2, juste au-dessous du foramen grand rond, sous l’étage moyen de la base du crâne. Il commande les sécrétions lacrymale, muco-nasale et buccale.' },
          { label: 'Ganglions sub-maxillaire et sublingual', text: 'situés dans le plancher buccal et associés au nerf mandibulaire V3, ils commandent les sécrétions salivaires sub-maxillaire et sublinguale.' },
          { label: 'Ganglion otique', text: 'situé dans la fosse infra-temporale, associé au nerf mandibulaire V3, juste au-dessous du foramen ovale, il commande la sécrétion salivaire parotidienne.' },
        ]},

        { type: 'lead', label: 'Zones réflexes podales', text: 'face plantaire des orteils (base du crâne). (figure 4.3)' },
        { type: 'figure', src: '/chapter-4/figure-4-3.png', alt: 'Zones réflexes podales — base du crâne, face plantaire des orteils', caption: 'Figure 4.3 — Zones réflexes podales : base du crâne', orientation: 'landscape' },
        { type: 'leadBullets', items: [
          { label: 'Tronc cérébral', text: 'bord médial de la phalange distale du gros orteil. (figure 4.4)' },
          { label: 'Nerfs III, VII et IX (foramens de la base du crâne)', text: 'phalanges des quatre derniers orteils. (Cf. Réflexothérapie occipito-podale et système neuro-méningé, chapitre 8)' },
          { label: 'Nerf III (fissure orbitaire supérieure)', text: 'jonction diaphyse-tête médiale de la phalange moyenne du 2ᵉ orteil.' },
          { label: 'Ganglion ciliaire', text: 'jonction diaphyse-base médiale de la phalange distale du 2ᵉ orteil.' },
          { label: 'Nerf maxillaire (foramen grand rond)', text: 'diaphyse latérale de la phalange moyenne du 2ᵉ orteil.' },
          { label: 'Ganglion ptérygoïdien', text: 'partie médiale de la diaphyse de la phalange moyenne du 2ᵉ orteil.' },
          { label: 'Nerf mandibulaire (foramen ovale)', text: 'diaphyse latérale de la phalange moyenne du 3ᵉ orteil.' },
          { label: 'Ganglions submaxillaire et sublingual (plancher buccal)', text: 'partie rétro-capitale de la phalange distale des orteils.' },
          { label: 'Ganglion otique', text: 'partie médiale de la diaphyse de la phalange moyenne du 3ᵉ orteil.' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-4.png', alt: 'Zone réflexe podale du tronc cérébral', caption: 'Figure 4.4 — Tronc cérébral (zone réflexe podale)', orientation: 'portrait' },

        { type: 'sub', text: 'Territoire cervico-thoraco-abdominal' },
        { type: 'lead', label: 'Nerf vague X', text: 'il apporte l’innervation parasympathique aux organes cervico-thoraco-abdominaux.' },
        { type: 'para', text: 'Nous n’abordons ici que la fonction neuro-végétative du nerf vague. Sa fonction somatique est à retrouver dans le livre Réflexothérapie occipito-podale et système neuro-méningé (Elsevier Masson).' },
        { type: 'figure', src: '/chapter-4/figure-4-5.png', alt: 'Origine du nerf vague — noyaux dorsal et ambigu', caption: 'Figure 4.5 — Origine du nerf vague', orientation: 'landscape' },
        { type: 'leadBullets', items: [
          { label: 'Origine', text: 'les cellules d’origine motrice sont issues du noyau dorsal et du noyau ambigu ou ventral (figure 4.5), situés dans la moelle allongée (anciennement bulbe) à hauteur du foramen magnum. Ils sont connectés à l’hypothalamus, au système olfactif, au système limbique, et aux nerfs glosso-pharyngien IX et accessoire XI.' },
          { label: 'Noyau dorsal', text: 'les neurones issus du noyau dorsal sont constitués de fibres non myélinisées, à conduction lente de l’influx nerveux. Ils innervent essentiellement les organes sub-diaphragmatiques.' },
          { label: 'Noyau ambigu ou ventral', text: 'les neurones issus du noyau ventral sont constitués de fibres myélinisées à conduction rapide de l’influx nerveux. Ils innervent essentiellement les organes sus-diaphragmatiques :' },
        ]},
        { type: 'bullets', items: [
          'le larynx et le pharynx ;',
          'l’œsophage, dont ils activent la progression du bol alimentaire vers l’estomac ;',
          'le cœur : les atriums (anciennement oreillettes), situés à la base du cœur, ont une prédominance vagale. Le noyau ambigu exerce un contrôle sur l’activité cardiaque, non seulement sur le rythme (bradycardie) mais surtout sur la variabilité du rythme cardiaque (VRC), pour adapter le cœur aux mécanismes de stress (Cf. Chapitre 6 Théorie polyvagale) ;',
          'les poumons, dont ils sont broncho-constricteurs et augmentent la sécrétion mucosale.',
        ]},
        { type: 'rop', body: [
          'L’hyperactivité vagale des neurones issus du noyau dorsal est responsable d’ulcères gastroduodénaux, de colites, de crises d’asthme, d’apnée et de bradycardie.',
        ]},

        { type: 'lead', label: 'Trajet crânien — foramen jugulaire', text: 'le nerf vague sort du crâne par le foramen jugulaire en compagnie des nerfs glosso-pharyngien IX et accessoire XI, de la veine jugulaire interne et de l’artère méningée postérieure. (figure 4.6)' },
        { type: 'para', text: 'À ce niveau, il présente deux ganglions : le ganglion supérieur dans le foramen jugulaire et le ganglion inférieur (ou plexiforme) immédiatement au-dessous du foramen jugulaire. Les corps cellulaires des neurones sensitifs du nerf vague ont leur origine dans le ganglion inférieur.' },
        { type: 'figure', src: '/chapter-4/figure-4-6.png', alt: 'Foramen jugulaire — sortie du nerf vague', caption: 'Figure 4.6 — Foramen jugulaire', orientation: 'landscape' },

        { type: 'lead', label: 'Zones réflexes podales', text: '(figure 4.3)' },
        { type: 'leadBullets', items: [
          { label: 'Moelle allongée', text: 'face médiale de l’articulation inter-phalangienne du gros orteil. (figure 4.7)' },
          { label: 'Foramen jugulaire, ganglions supérieur et inférieur', text: 'articulation inter-phalangienne proximale des 4ᵉ et 5ᵉ orteils, du côté latéral sur le 4ᵉ et du côté médial sur le 5ᵉ. (figure 4.8)' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-7.png', alt: 'Zone réflexe podale de la moelle allongée', caption: 'Figure 4.7 — Moelle allongée (zone réflexe podale)', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-4/figure-4-8.png', alt: 'Zone réflexe podale du foramen jugulaire et des ganglions', caption: 'Figure 4.8 — Foramen jugulaire et ganglions (zone réflexe podale)', orientation: 'portrait' },

        { type: 'lead', label: 'Étage cervical', text: 'dans le cou, le nerf vague descend dans la gaine carotidienne (figure 4.9), puis s’anastomose avec les ganglions sympathiques cervicaux supérieur et inférieur.' },
        { type: 'figure', src: '/chapter-4/figure-4-9.png', alt: 'Coupe transversale cervicale — fascias et loges du cou', caption: 'Figure 4.9 — Étage cervical', orientation: 'landscape' },

        { type: 'lead', label: 'Branches collatérales', text: '' },
        { type: 'leadBullets', items: [
          { label: 'Nerf laryngé supérieur', text: 'il naît du ganglion inférieur. Sa branche interne est neuro-végétative et innerve la muqueuse du larynx, du dos de la langue, de l’épiglotte et des cordes vocales. Sa branche externe est somatique et innerve les muscles du larynx : c’est le nerf de la voix.' },
          { label: 'Nerfs du sinus carotidien', text: 'le nerf vague et le nerf glosso-pharyngien innervent le sinus, situé au niveau de la bifurcation carotidienne, à hauteur de C4. (figure 4.10)' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-10.png', alt: 'Sinus et glomus carotidiens', caption: 'Figure 4.10 — Sinus et glomus carotidiens', orientation: 'landscape' },
        { type: 'leadBullets', items: [
          { label: 'Sinus carotidien', text: 'c’est un barorécepteur qui mesure l’étirement de la paroi carotidienne sous l’action de la pression artérielle, afin de la réguler aux besoins de l’organisme. La stimulation du sinus carotidien entraîne une bradycardie et une hypotension artérielle, pouvant aller jusqu’à la syncope lors d’un choc à ce niveau.' },
          { label: 'Glomus carotidien', text: 'c’est un chémorécepteur qui mesure les taux d’O₂ et de CO₂ sanguins. Il régule l’équilibre acido-basique.' },
        ]},
        { type: 'rop', body: [
          'Contre-indications : plaques d’athérome.',
          'Indications : tachycardie, dysrythmie cardiaque, hypertension, syndrome vagal.',
          'Syndrome vagal : c’est une vagotonie par hyperstimulation vagale. Les symptômes sont : drop-attack, vertige, hypotension, petite absence, évanouissement. (Cf. Chapitre 6 Théorie polyvagale, Malaise vagal)',
        ]},
      ],
    },
  ],
}

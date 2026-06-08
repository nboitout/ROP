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

        // ——— Part 2 : trajet thoraco-diaphragmatico-abdominal du nerf vague ———
        { type: 'rop', body: [
          'Après un repas trop copieux, la congestion jugulo-carotidienne comprime le nerf vague et l’irrite dans la gaine carotidienne.',
          'Geste immédiat : desserrer le col de la chemise et pincer simultanément la face latérale de la phalange distale des 5ᵉ doigts (effet cardio-accélérateur). En cas de malaise, syncope, douleur thoracique, dyspnée ou symptôme inhabituel : interrompre le geste et orienter vers une évaluation médicale urgente.',
        ]},
        { type: 'lead', label: 'Zones réflexes podales', text: 'territoires crânien et cervical du nerf vague. (figure 4.11)' },
        { type: 'figure', src: '/chapter-4/figure-4-11.png', alt: 'Territoires crânien et cervical du nerf vague X (zone réflexe podale)', caption: 'Figure 4.11 — Territoires crânien et cervical du nerf vague X', orientation: 'landscape' },
        { type: 'leadBullets', items: [
          { label: 'Nerf laryngé supérieur', text: 'jonction diaphyse-tête plantaire latérale de la phalange proximale du gros orteil.' },
          { label: 'Sinus et glomus carotidiens (bifurcation carotidienne)', text: 'à hauteur de la vertèbre C4, face latérale de la diaphyse de la phalange proximale du gros orteil. (figure 4.12)' },
          { label: 'Plexus pré-viscéraux', text: 'pharynx, larynx, œsophage.' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-12.png', alt: 'Palpation des zones réflexes podales du nerf vague — territoires crânien et cervical', caption: 'Figure 4.12 — Zones réflexes podales du nerf vague (territoires crânien et cervical)', orientation: 'landscape' },

        { type: 'sub', text: 'Étage thoracique' },
        { type: 'para', text: 'Les deux nerfs vagues pénètrent dans le thorax par son orifice supérieur, en dedans du dôme pleural et en arrière des articulations sterno-claviculaires. Ils deviennent satellites de l’œsophage dans le médiastin. Ils sont destinés au cœur, aux poumons et à l’œsophage :' },
        { type: 'leadBullets', items: [
          { label: 'Nerf vague droit', text: 'il fait une anse autour de l’artère subclavière droite, entourée par les fibres sympathiques. Il devient le nerf laryngé récurrent droit, qui remonte dans le cou pour innerver le larynx (nerf de la voix). (figure 4.9)' },
          { label: 'Nerf vague gauche', text: 'il fait une anse autour de la crosse de l’aorte et devient le nerf laryngé récurrent gauche, qui remonte aussi dans le cou pour innerver le larynx (nerf de la voix).' },
        ]},
        { type: 'lead', label: 'Plexus pré-viscéraux thoraciques', text: 'ce sont les plexus cardiaques, broncho-pulmonaires et œsophagiens.' },
        { type: 'lead', label: 'Plexus cardiaque', text: 'dans le médiastin supérieur, les deux nerfs vagues et le récurrent gauche s’anastomosent avec les fibres sympathiques des trois nerfs cardiaques issus des trois ganglions cervicaux, et celles issues des ganglions thoraciques latéro-vertébraux de Th3 à Th5. Ils forment le plexus cardiaque. On distingue : (figure 4.13)' },
        { type: 'bullets', items: [
          'le plexus cardiaque supérieur ou superficiel de Wrisberg, autour de la crosse de l’aorte, à hauteur de l’angle sternal ;',
          'le plexus cardiaque inférieur, confondu avec le plexus broncho-pulmonaire ;',
          'les nerfs de Cyon : issus du nerf vague, situés dans l’endocarde, ils ralentissent la fréquence cardiaque en diminuant la vitesse de conduction électrique de l’innervation intrinsèque du cœur (tissu nodal : nœuds sinusal et atrio-ventriculaire).',
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-13.png', alt: 'Plexus cardiaques — innervation autonome du cœur', caption: 'Figure 4.13 — Plexus cardiaques', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Innervation parasympathique', text: 'les fibres parasympathiques sont davantage destinées aux atriums (anciennement oreillettes) et au tissu nodal, et pratiquement pas aux ventricules. Elles ralentissent le rythme cardiaque (bradycardie), diminuent la tension artérielle et la force de contraction du myocarde. Au total, le Parasympathique baisse le débit cardiaque ; une hyper-vagotonie crée le syndrome vagal.' },
          { label: 'Innervation sympathique', text: 'les fibres sympathiques innervent toutes les régions du cœur, particulièrement les ventricules. Le Sympathique a un effet opposé au Parasympathique. Son action se manifeste dans l’activité physique, le stress, les émotions, les hémorragies. Le café, l’alcool et le tabac augmentent le rythme cardiaque (tachycardie).' },
        ]},
        { type: 'lead', label: 'Plexus broncho-pulmonaire', text: 'il est situé au niveau de la bifurcation de l’artère pulmonaire et à la face postérieure des bronches souches, près du hile des poumons. (figure 4.13)' },
        { type: 'leadBullets', items: [
          { label: 'Innervation parasympathique', text: 'le corps cellulaire est situé dans le noyau dorsal du nerf vague et de sa branche, le nerf laryngé récurrent.' },
          { label: 'Innervation sympathique', text: 'elle vient principalement du ganglion cervical inférieur (GCI) et des ganglions latéro-vertébraux thoraciques de Th1 à Th5 ou Th6.' },
        ]},
        { type: 'para', text: 'Les fibres parasympathiques sont broncho-constrictives et augmentent les sécrétions bronchiques. Les fibres sympathiques sont antagonistes.' },
        { type: 'lead', label: 'Plexus œsophagien', text: 'il est formé de branches collatérales du nerf vague (péristaltisme) et de fibres sympathiques thoraciques supérieures (antagonistes).' },
        { type: 'lead', label: 'Zones réflexes podales', text: '(figures 4.14 et 4.15)' },
        { type: 'leadBullets', items: [
          { label: 'Atriums droit et gauche et plexus cardiaque', text: 'face plantaire de la tête du 1er métatarse sur les deux pieds.' },
          { label: 'Ventricules', text: 'face plantaire du pied gauche : zone entre la zone réflexe du diaphragme et la tête des deux premiers métatarses.' },
          { label: 'Plexus cardiaque superficiel', text: 'à hauteur de la 3ᵉ articulation chondro-sternale gauche : jonction malléole tibiale-tête du talus.' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-14.png', alt: 'Territoires cervical, thoracique et diaphragmatique gauches du nerf vague X', caption: 'Figure 4.14 — Territoires cervical, thoracique et diaphragmatique gauches du nerf vague X', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-4/figure-4-15.png', alt: 'Territoires cervical et thoracique droits du nerf vague X', caption: 'Figure 4.15 — Territoires cervical et thoracique droits du nerf vague X', orientation: 'landscape' },

        { type: 'sub', text: 'Étage diaphragmatique' },
        { type: 'para', text: 'Les deux nerfs vagues accompagnent l’œsophage dans le hiatus œsophagien du diaphragme. (figures 4.16 et 4.33)' },
        { type: 'lead', label: 'Hiatus œsophagien', text: 'il est situé à gauche de la vertèbre Th10, entre les deux folioles droite et gauche du centre phrénique. C’est un orifice formé de fibres musculaires issues du pilier médian droit du diaphragme et de l’œsophage. Sa structure musculaire contractile peut subir des tensions, comprimer l’œsophage et irriter les deux nerfs vagues, occasionnant un reflux gastrique. Le nerf vague gauche est en avant de l’œsophage, le droit en arrière.' },
        { type: 'figure', src: '/chapter-4/figure-4-16.png', alt: 'Hiatus œsophagien du diaphragme', caption: 'Figure 4.16 — Hiatus œsophagien', orientation: 'portrait' },
        { type: 'lead', label: 'Zones réflexes podales', text: '' },
        { type: 'figure', src: '/chapter-4/figure-4-17.png', alt: 'Territoire abdominal gauche du nerf vague X (zone réflexe podale)', caption: 'Figure 4.17 — Territoire abdominal gauche du nerf vague X', orientation: 'landscape' },
        { type: 'leadBullets', items: [
          { label: 'Hiatus œsophagien', text: 'face plantaire du pied gauche, latéral au centre phrénique et à l’aplomb d’une ligne partant entre le 1er et le 2ᵉ orteil et coupant la coupole diaphragmatique gauche. (figures 4.17 et 4.18)' },
        ]},
        { type: 'para', text: 'N.B. : tenir compte de la différence de hauteur des deux coupoles diaphragmatiques, la gauche étant plus basse que la droite. (Cf. Chapitre Diaphragme)' },
        { type: 'figure', src: '/chapter-4/figure-4-18.png', alt: 'Territoire diaphragmatique du nerf vague X (zone réflexe podale)', caption: 'Figure 4.18 — Territoire diaphragmatique du nerf vague X (zone réflexe podale)', orientation: 'portrait' },

        { type: 'sub', text: 'Étage abdominal' },
        { type: 'leadBullets', items: [
          { label: 'Nerf vague gauche (devenu antérieur)', text: 'il glisse sur le bord antérieur du cardia et innerve la petite courbure de l’estomac (figure 4.19), le pylore, le duodénum et les voies biliaires. Il se termine dans le plexus cœliaque (anciennement solaire).' },
          { label: 'Nerf vague droit (devenu postérieur)', text: 'il est en arrière de l’œsophage abdominal et de l’estomac, qu’il innerve. Il se termine dans le ganglion semi-lunaire du plexus cœliaque.' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-19.png', alt: 'Petite courbure de l’estomac — innervation vagale', caption: 'Figure 4.19 — Petite courbure de l’estomac', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Plexus pré-vertébraux (préaortiques)', text: 'ce sont les plexus des viscères abdominaux. Ils s’étalent le long de l’aorte abdominale et sont la convergence des fibres parasympathiques et sympathiques qui apportent la double innervation autonome aux viscères de l’abdomen. (figure 4.16)' },
          { label: 'Zone de Cannon-Böhm', text: 'elle est située à la jonction des 2/3 droits et du 1/3 gauche du colon transverse. Elle représente la frontière entre le territoire contrôlé par le nerf vague et le parasympathique pelvien. (figure 4.20) (Cf. Chapitre 15 Colon)' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-20.png', alt: 'Zone de Cannon-Böhm — frontière vago-pelvienne du colon transverse', caption: 'Figure 4.20 — Zone de Cannon-Böhm', orientation: 'portrait' },

        { type: 'sub', text: 'Fonction viscéro-motrice du nerf vague' },
        { type: 'leadBullets', items: [
          { label: 'Estomac', text: 'les nerfs vagues stimulent la sécrétion des glandes gastriques. Ils sont moteurs pour la musculature lisse de l’estomac et ouvrent les sphincters du cardia (remplissage gastrique) et du pylore (vidange gastrique).' },
          { label: 'Intestin', text: 'les nerfs vagues agissent sur le péristaltisme et la sécrétion des glandes du duodénum, de l’intestin grêle, du colon droit et des 2/3 droits du colon transverse, des voies biliaires et du pancréas.' },
          { label: 'Vésicule biliaire', text: 'les nerfs vagues stimulent la sécrétion de bile.' },
        ]},
        { type: 'lead', label: 'Zones réflexes podales', text: 'face plantaire du pied gauche. (figures 4.17 et 4.18)' },
        { type: 'leadBullets', items: [
          { label: 'Cardia', text: 'immédiatement au-dessous du hiatus œsophagien.' },
          { label: 'Petite courbure de l’estomac', text: 'une ligne entre le cardia et le pylore. (figure 4.19)' },
          { label: 'Zone de Cannon-Böhm', text: 'jonction 2/3 droit-1/3 gauche du colon transverse. (figure 4.21)' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-21.png', alt: 'Zone de Cannon-Böhm (zone réflexe podale)', caption: 'Figure 4.21 — Zone de Cannon-Böhm (zone réflexe podale)', orientation: 'portrait' },
        { type: 'lead', label: 'Plexus pré-vertébraux', text: '(figures 4.17 et 4.22)' },
        { type: 'figure', src: '/chapter-4/figure-4-22.png', alt: 'Territoire abdominal droit du nerf vague X', caption: 'Figure 4.22 — Territoire abdominal droit du nerf vague X', orientation: 'landscape' },

        // ——— Part 3a : Parasympathique pelvien ———
        { type: 'sub', text: 'Parasympathique pelvien (ou sacral)' },
        { type: 'para', text: 'Il est destiné aux organes pelviens, au tiers distal du colon transverse et au colon gauche. (figure 4.23)' },
        { type: 'leadBullets', items: [
          { label: 'Origine', text: 'moelle sacrale S2-S3-S4, à hauteur du bord inférieur de la vertèbre L1.' },
          { label: 'Trajet', text: 'les racines sacrales S2-S3-S4 accompagnent la queue de cheval dans le canal vertébral lombal et sacral. Elles débouchent dans la cavité pelvienne par les trous sacraux antérieurs S2-S3-S4 et forment le nerf érecteur d’Eckardt (ou nerf splanchnique pelvien), destiné aux organes pelviens. (figure 4.2)' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-23.png', alt: 'Nerfs splanchniques pelviens — nerf érecteur d’Eckardt', caption: 'Figure 4.23 — Nerfs splanchniques pelviens (nerf érecteur d’Eckardt)', orientation: 'portrait' },
        { type: 'lead', label: 'Terminaison', text: 'le nerf érecteur d’Eckardt forme, avec le système sympathique sacral, le plexus hypogastrique inférieur (figure 4.36), contenu dans la lame sacro-recto-génito-pubienne.' },
        { type: 'lead', label: 'Fonction', text: '' },
        { type: 'bullets', items: [
          'défécation par contraction du rectum et ouverture du sphincter interne de l’anus (le sphincter externe est sous la commande volontaire du nerf pudendal, appartenant au système nerveux somatique) ;',
          'miction par contraction du muscle détrusor de la vessie et ouverture du sphincter interne de l’urètre (le sphincter externe est sous la commande volontaire du nerf pudendal) ;',
          'érection du clitoris et du pénis.',
        ]},
        { type: 'lead', label: 'Zones réflexes podales', text: '(figure 4.24)' },
        { type: 'leadBullets', items: [
          { label: 'Moelle sacrale S2-S3-S4', text: 'étage vertébral L1-L2.' },
          { label: 'Queue de cheval', text: 'de L1 au sacrum.' },
          { label: 'Trous sacraux antérieurs', text: 'bord antérieur du sacrum.' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-24.png', alt: 'Origine médullaire du parasympathique sacré (vert) et du Sympathique (rouge)', caption: 'Figure 4.24 — Origine médullaire du parasympathique sacré (vert) et du Sympathique (rouge)', orientation: 'landscape' },
      ],
    },
    {
      id: 'nerf-vague-sensitif',
      title: 'Nerf vague viscéro-sensitif',
      blocks: [
        { type: 'lead', label: 'Rôle majeur du nerf vague', text: 'les fibres sensitives représentent 70 à 80 % des fibres du nerf vague. Elles informent en permanence le cerveau de l’état intérieur du corps. Le Dr Donatini, spécialiste du microbiote intestinal, est convaincu que des maladies neuro-dégénératives — maladie de Parkinson, sclérose en plaques, maladie d’Alzheimer — sont en relation avec le système nerveux entérique (Cf. Système nerveux entérique) par l’intermédiaire du nerf vague, qui envoie au cerveau des informations sur l’état du microbiote.' },
        { type: 'leadBullets', items: [
          { label: 'Intéroception', text: 'la sensibilité viscérale, appelée intéroception, est le plus souvent inconsciente. Elle donne le sentiment vague de l’existence viscérale, appelé cénesthésie.' },
          { label: 'Récepteurs viscéraux', text: 'appelés intérocepteurs, ils sont variés : mécanorécepteurs, thermorécepteurs, baro- et chémorécepteurs.' },
          { label: 'Intérocepteurs parasympathiques', text: 'ils sont localisés dans les couches musculaires et la muqueuse des viscères.' },
          { label: 'Intérocepteurs sympathiques', text: 'ils sont dans la séreuse viscérale. « Lorsque la sensibilité viscérale devient consciente, voire douloureuse, c’est qu’elle exprime une atteinte viscérale ou un trouble fonctionnel » (Dr Guy Lazorthes). Les douleurs viscérales, à la différence des douleurs somatiques, sont vagues, imprécises, diffuses, souvent angoissantes. Elles sont véhiculées par le Sympathique.' },
        ]},
        { type: 'lead', label: 'Voies du nerf vague viscéro-sensitif', text: 'les neurones qui transportent la sensibilité des viscères ont leurs corps cellulaires dans le ganglion inférieur du nerf vague, juste au-dessous du foramen jugulaire. Ils sont connectés à la formation réticulaire du tronc cérébral, à l’hypothalamus et au cerveau limbique, qui élaborent la réponse motrice destinée aux noyaux moteurs dorsal et ambigu.' },
        { type: 'para', text: 'Les fibres sensitives du nerf vague transitent depuis les viscères et le plexus cœliaque, en sens inverse des fibres motrices, jusqu’au ganglion inférieur à la sortie du foramen jugulaire.' },
        { type: 'lead', label: 'Fonctions', text: 'le nerf vague est impliqué dans de nombreuses fonctions.' },
        { type: 'lead', label: 'Physiologiques', text: '' },
        { type: 'bullets', items: [
          'les intérocepteurs sont impliqués dans de nombreux réflexes qui entretiennent le tonus des viscères et des vaisseaux ; ils règlent leurs fonctions et préservent leur intégrité ;',
          'contrôle de l’activité motrice du tube digestif et de ses sécrétions exocrines ;',
          'contrôle de l’équilibre parasympathique-sympathique, par ses liens avec l’hypothalamus ;',
          'contrôle des comportements émotionnels, par ses liens avec le système limbique.',
        ]},
        { type: 'leadBullets', items: [
          { label: 'Protection', text: 'le nerf vague informe les centres nerveux supérieurs pour préserver l’intégrité et les fonctions vitales de l’organisme. Exemple : la toux (protection des voies respiratoires) et les vomissements (protection des voies digestives).' },
          { label: 'Immunité', text: 'les neurones sensitifs sont en relation avec le riche réseau lymphatique de l’intestin grêle. Le nerf vague est l’intermédiaire entre le système lymphatique et les centres nerveux supérieurs.' },
          { label: 'Trophicité', text: 'au plus près des tissus des viscères, les neurones sensitifs assurent le maintien et le renouvellement de leurs cellules.' },
        ]},
      ],
    },
    {
      id: 'sympathique-visceromoteur',
      title: 'Sympathique viscéro-moteur',
      blocks: [
        { type: 'lead', label: 'Origine', text: 'les cellules d’origine sont situées dans la substance grise de la corne latérale de la moelle thoracique, entre la corne ventrale et la corne dorsale (figures 4.23 et 4.25). Les fibres sympathiques rejoignent la branche ventrale du nerf spinal par la racine ventrale.' },
        { type: 'figure', src: '/chapter-4/figure-4-25.png', alt: 'Origine médullaire sympathique', caption: 'Figure 4.25 — Origine médullaire sympathique', orientation: 'landscape' },
        { type: 'lead', label: 'Organisation métamérique', text: 'la moelle spinale a conservé une organisation embryonnaire segmentaire (ou métamérique) où chaque segment médullaire, appelé myélomère, correspond à un étage d’où émergent les nerfs spinaux droit et gauche.' },
        { type: 'para', text: 'La colonne sympathique médullaire s’étend du myélomère C8 (à hauteur de la vertèbre C7) au myélomère L2 (à hauteur de la vertèbre Th12). Ce décalage entre le niveau médullaire et le niveau vertébral est la conséquence de la croissance plus grande de la colonne vertébrale comparée à celle de la moelle épinière. (figure 4.26)' },
        { type: 'lead', label: 'Intérêt clinique', text: 'sur le plan clinique, il est important d’identifier les myélomères et leurs relations avec les viscères :' },
        { type: 'bullets', items: [
          'les myélomères C8 à Th2 ou Th3 apportent l’innervation sympathique à la sphère crânio-cervicale et la dilatation de la pupille par le centre cilio-spinal de Budge ;',
          'les myélomères Th3 à Th5 apportent l’innervation sympathique cardio-pulmonaire et carotidienne ;',
          'les myélomères Th5 ou Th6 à Th11 ou Th12 apportent l’innervation sympathique aux viscères abdominaux ;',
          'les myélomères Th12 à L2 apportent l’innervation sympathique aux viscères uro-génitaux, au colon descendant et au rectum.',
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-26.png', alt: 'Relations métamères-vertèbres', caption: 'Figure 4.26 — Relations métamères-vertèbres', orientation: 'landscape' },
        { type: 'lead', label: 'Zones réflexes podales', text: '' },
        { type: 'leadBullets', items: [
          { label: 'Canal vertébral', text: 'méninge spinale, moelle thoracique, racines des nerfs spinaux et sympathiques. Dans une vue sagittale médiale, l’arche médiale des deux pieds, depuis la jonction diaphyse-base de la 1ʳᵉ phalange du gros orteil (segment médullaire C8, vertèbre C7) jusqu’à l’articulation 1er métatarse-1er cunéiforme (segment médullaire L2, vertèbre Th12). (figure 4.24)' },
        ]},
        { type: 'lead', label: 'Trajet', text: 'la chaîne ganglionnaire latéro-vertébrale longe le flanc antéro-latéral de la colonne vertébrale, de la base du crâne au coccyx. (figure 4.23)' },
        { type: 'para', text: 'Elle compte environ 30 ganglions : 3 cervicaux, environ 10 thoraciques, 4 lombaires, 3 ou 4 sacrés et le ganglion coccygien.' },
        { type: 'para', text: 'Elle se réunit à son homologue controlatérale à ses deux extrémités : le premier ganglion (ou ganglion de Ribes) sous la base du crâne, et le dernier ganglion (ou ganglion impair) en avant du coccyx.' },
        { type: 'leadBullets', items: [
          { label: 'Chaîne ganglionnaire thoracique', text: 'elle compte une dizaine de ganglions situés en avant des articulations costo-vertébrales des vertèbres Th1 à Th12 (figures 4.23 et 4.25). Une fixation costo-vertébrale a quasiment toujours une répercussion sur le ganglion en regard de l’articulation, et sur les viscères qu’il innerve.' },
          { label: 'Rameaux communicants', text: 'dès la sortie des foramens intervertébraux, les neurones pré-ganglionnaires (ou rameaux communicants blancs, car myélinisés) (figure 4.25) rejoignent le nerf spinal, puis le quittent rapidement pour gagner un ganglion de la chaîne latéro-vertébrale. Les neurones pré-ganglionnaires se répartissent ensuite en deux groupes :' },
        ]},
        { type: 'bullets', items: [
          'neurones pré-ganglionnaires issus des myélomères de Th1 à L2, destinés au contingent somatique et aux viscères hors de la cavité abdominale : ils aboutissent dans les ganglions de la chaîne latéro-vertébrale où ils font synapse avec des neurones post-ganglionnaires (ou rameaux communicants gris, car non myélinisés) qui rejoignent à nouveau le nerf spinal. Leur corps cellulaire est donc dans un ganglion latéro-vertébral ;',
          'neurones pré-ganglionnaires issus des myélomères de Th5 ou Th6 à Th11 ou Th12, destinés aux viscères de la cavité abdominale : ils traversent un ganglion latéro-vertébral sans faire synapse pour rejoindre la chaîne pré-vertébrale (ou pré-aortique). Leur corps cellulaire est donc dans la corne latérale médullaire.',
        ]},
        { type: 'lead', label: 'À noter', text: 'la disparité entre le nombre de neurones pré-ganglionnaires (14) et le nombre de ganglions latéro-vertébraux (environ 30). Seuls les ganglions latéro-vertébraux de Th1 à L2 reçoivent un rameau communicant blanc ; en revanche, ils possèdent tous un rameau communicant gris.' },
        { type: 'lead', label: 'Rameaux méningés récurrents', text: 'ils naissent par deux racines, l’une du rameau communicant et l’autre de la branche ventrale du nerf spinal. Leur trajet récurrent les ramène dans la colonne vertébrale pour innerver la méninge spinale, les vertèbres et les disques intervertébraux. (figure 4.27)' },
        { type: 'figure', src: '/chapter-4/figure-4-27.png', alt: 'Rameaux méningés récurrents', caption: 'Figure 4.27 — Rameaux méningés récurrents', orientation: 'landscape' },
        { type: 'rop', body: [
          'Le système digestif est directement innervé par la corne latérale médullaire thoracique de Th5 ou Th6 à Th11 ou Th12, puisqu’il ne fait pas synapse au niveau du ganglion de la chaîne latéro-vertébrale.',
          'À chaque étage vertébral, la méninge spinale est innervée par un rameau méningé récurrent. Toute irritation du nerf spinal à sa sortie du foramen intervertébral entraîne une irritation de la méninge, d’où une répercussion sur la dynamique crânio-sacrée.',
        ]},
        { type: 'lead', label: 'Zones réflexes podales', text: '' },
        { type: 'figure', src: '/chapter-4/figure-4-28.png', alt: 'Articulations postérieures des vertèbres et articulations costo-vertébrales', caption: 'Figure 4.28 — Articulations postérieures des vertèbres et articulations costo-vertébrales', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Chaîne ganglionnaire latéro-vertébrale thoracique', text: 'elle n’est pas directement accessible : c’est par l’intermédiaire des articulations costo-vertébrales (figure 4.28) que l’on peut agir sur elle, le long du bord dorsal de la base de la 1ʳᵉ phalange du gros orteil et du 1er métatarse. (figure 4.29)' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-29.png', alt: 'Chaîne ganglionnaire latéro-vertébrale thoracique (zone réflexe podale)', caption: 'Figure 4.29 — Chaîne ganglionnaire latéro-vertébrale thoracique (zone réflexe podale)', orientation: 'landscape' },

        // ——— Part 3b : chaînes ganglionnaires cervicale et lombale ———
        { type: 'lead', label: 'Chaîne ganglionnaire cervicale', text: 'elle prolonge en direction céphalique la chaîne ganglionnaire thoracique. Elle compte trois ganglions (figure 4.30) situés en avant des processus transverses des vertèbres cervicales, de la 1ʳᵉ articulation costo-vertébrale à la base du crâne :' },
        { type: 'figure', src: '/chapter-4/figure-4-30.png', alt: 'Chaîne ganglionnaire cervicale', caption: 'Figure 4.30 — Chaîne ganglionnaire cervicale', orientation: 'portrait' },
        { type: 'lead', label: 'Ganglion cervical inférieur (GCI) ou stellaire', text: 'en forme de haricot, il est situé en avant du processus transverse de C7 et du col de la 1ʳᵉ côte, dans la fossette rétro-pleurale (ou fossette de Sédillot). Il présente de nombreuses branches :' },
        { type: 'bullets', items: [
          'nerf intertransversaire (ou nerf de François-Franck) : il innerve l’artère vertébrale — branche de l’artère subclavière — dans les foramens inter-transversaires de C6 à C1. Les deux artères vertébrales s’unissent dans le foramen magnum pour constituer le tronc basilaire le long du tronc cérébral ; il vascularise la partie postérieure du cerveau, le cervelet et l’oreille interne ;',
          'des rameaux pour le dôme pleural et la trachée ;',
          'le nerf cardiaque inférieur ;',
          'des rameaux communicants gris (RCG) pour le plexus brachial de C5 à T1.',
        ]},
        { type: 'para', text: 'Le GCI a des anastomoses avec les nerfs vague X, phrénique et laryngé récurrent.' },
        { type: 'rop', body: [
          'Le GCI est situé à un carrefour hautement stratégique, entre la colonne cervicale, le thorax et le membre supérieur.',
          'Pathologies — Traumatismes : les « coups du lapin », les traumatismes cervicaux, de la ceinture scapulaire et du membre supérieur peuvent affecter le GCI.',
          'La vascularisation de l’artère vertébrale est gravement compromise par la cervicarthrose et les traumatismes crânio-cervicaux : vertige et instabilité, acouphènes, hypoacousie.',
          'La compression du GCI peut affecter la vasomotricité de l’artère subclavière : paresthésie du membre supérieur, syndrome du canal carpien, capsulite de l’épaule, tendinites récidivantes (épicondylite).',
          'Spasmes coronariens et précordialgies fonctionnelles, associés à des fixations de la 1ʳᵉ côte gauche.',
        ]},
        { type: 'leadBullets', items: [
          { label: 'Ganglion cervical moyen (GCM)', text: 'il est inconstant et fusionne souvent avec le GCI. Quand il existe, il est situé en avant du processus transverse de C6. Ses branches collatérales sont le nerf cardiaque moyen et le nerf pour l’artère thyroïdienne inférieure.' },
          { label: 'Ganglion cervical supérieur (GCS)', text: 's’étendant des processus transverses de C1 à C3, il se prolonge dans le crâne par le plexus de la carotide interne, qui apporte l’innervation sympathique aux organes de la tête. Il présente de nombreuses branches :' },
        ]},
        { type: 'bullets', items: [
          'nerf du sinus carotidien et du glomus carotidien (anastomose avec les nerfs crâniens glossopharyngien IX et vague X) ; (figure 4.10)',
          'nerf des méninges de la fosse cérébrale postérieure, en association avec les nerfs vague X et hypoglosse XII ;',
          'nerf cardiaque supérieur ;',
          'nerf pour l’artère vertébrale ;',
          'nerfs viscéraux : pharynx, larynx, œsophage, trachée, thyroïde ;',
          'rameaux communicants gris pour le plexus cervical C1 à C4.',
        ]},
        { type: 'rop', body: [
          'Le GCS est un autre carrefour hautement stratégique. La colonne crânio-cervicale est soumise à de nombreux traumatismes.',
          'Pathologies — Traumatismes : les « coups du lapin » affectent les muscles suboccipitaux, les attaches dure-mériennes et les artères vertébrales entourées par la dure-mère. Conséquences : vertiges, syndrome post-traumatique, acouphènes, céphalées, etc.',
          'Là encore, les anastomoses avec les nerfs crâniens IX, X, XI et XII et le parasympathique rendent difficile la part à attribuer aux symptômes d’origine crânienne ou cervicale. Son riche territoire d’influence rend son traitement important pour la charnière crânio-cervicale.',
        ]},
        { type: 'lead', label: 'Zones réflexes podales', text: '' },
        { type: 'figure', src: '/chapter-4/figure-4-31.png', alt: 'Chaîne ganglionnaire latéro-vertébrale cervicale, lombale et sacro-coccygienne', caption: 'Figure 4.31 — Chaîne ganglionnaire latéro-vertébrale : cervicale (vert), lombale (jaune) et sacro-coccygienne (rouge)', orientation: 'landscape' },
        { type: 'leadBullets', items: [
          { label: 'Chaîne ganglionnaire cervicale', text: 'espace entre le bord médial plantaire de la 1ʳᵉ phalange du gros orteil et sa face plantaire. (figure 4.31)' },
          { label: 'Ganglion cervical inférieur', text: 'jonction diaphyse-base médiale plantaire de la 1ʳᵉ phalange du gros orteil, au niveau de C7-Th1-1ʳᵉ côte. (figure 4.32)' },
          { label: 'Ganglion cervical moyen', text: 'idem au GCI, juste au-dessus de C7.' },
          { label: 'Ganglion cervical supérieur', text: 'jonction diaphyse-tête médiale plantaire de la 1ʳᵉ phalange du gros orteil, au niveau de C1-C2-C3.' },
        ]},
        { type: 'figure', src: '/chapter-4/figure-4-32.png', alt: 'Ganglion cervical inférieur (zone réflexe podale)', caption: 'Figure 4.32 — Ganglion cervical inférieur (zone réflexe podale)', orientation: 'portrait' },
        { type: 'lead', label: 'Chaîne ganglionnaire lombale', text: 'elle prolonge caudalement la chaîne ganglionnaire thoracique (figure 4.33). Elle compte quatre ganglions.' },
        { type: 'figure', src: '/chapter-4/figure-4-33.png', alt: 'Chaîne ganglionnaire lombale', caption: 'Figure 4.33 — Chaîne ganglionnaire lombale', orientation: 'landscape' },
      ],
    },
  ],
}

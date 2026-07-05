import type { Chapter } from './types'

export const chapter6Fr: Chapter = {
  slug: 'chapter-6',
  number: '6',
  title: 'Théorie polyvagale',
  sections: [
    {
      id: 'presentation-generale',
      title: 'Présentation générale',
      blocks: [
        { type: 'para', text: 'Selon la conception classique du syndrome général d’adaptation (SGA), les êtrès humains répondent à une situation de stress en activant en premier le système sympathique. Le Dr Stephen Porges a dépassé cette conception classique en proposant la théorie polyvagale qui donne la prééminence au système parasympathique pour mettre en œuvre une stratégie d’adaptation dans les situations de stress engendrant des situations de peur et d’anxiété.' },
        { type: 'para', text: 'La théorie polyvagale reste une théorie qui mérite d’être vérifiée mais elle est néanmoins intéressante car elle apporte un éclairage supplémentaire sur la compréhension du mécanisme de stress et de comportement.' },
        { type: 'para', text: 'La théorie polyvagale explore le rôle du système nerveux autonome (SNA) dans les comportements sociaux et émotionnels. 80 % des messages transmis au cerveau sur l’état des organes lui proviennent par le nerf vague. Ce qui se passe dans le corps influence fortement notre état mental et émotionnel. C’est pourquoi notre rôle en ROP est de favoriser la régulation du nerf vague.' },
      ],
    },
    {
      id: 'theorie-polyvagale',
      title: 'Théorie polyvagale (TPV)',
      blocks: [
        { type: 'para', text: 'Les découvertes récentes effectuées par le Dr Stephen Porges sont que, chez les mammifères, particulièrement chez les êtrès humains, le SNA ne comporterait pas deux mais trois systèmes correspondant à l’évolution phylogénétique de la théorie des trois cerveaux décrite par le neurologue Paul D. Maclean :' },
        { type: 'bullets', items: [
          'le système sympathique',
          'deux branches parasympathiques : le nerf vague ancien et le nerf vague nouveau.',
        ]},

        { type: 'sub', text: 'Évolution phylogénétique' },
        { type: 'lead', label: 'Première phase', text: 'la branche ancienne du nerf vague est apparue avec les espèces animales n’ayant qu’un cerveau reptilien. Elle s’est développée en même temps que le tronc cérébral et le cervelet. Le mode de réponse à une menace est de se figer et de s’évanouir avec bradycardie, importante diminution du flux sanguin cérébral et de l’activité métabolique, quand échapper aux prédateurs par la fuite ou le combat n’est pas possible.' },
        { type: 'lead', label: 'Deuxième phase', text: 'le Sympathique s’est développé avec la période où les espèces animales ont dû se déplacer pour trouver leur nourriture et fuir ou combattre quand l’environnement était hostile. Il s’est développé en même temps que le système limbique et le diencéphale.' },
        { type: 'lead', label: 'Troisième phase', text: 'plus tardivement, la branche nouvelle du nerf vague est apparue avec les mammifères et, particulièrement, chez les êtrès humains. Elle s’est développée en même temps que le cerveau cognitif. Pour faire face au stress, les animaux ont commencé à vivre en troupeaux où une organisation sociale s’est mise en place pour leur survie. Plus haut dans la hiérarchie, les êtrès humains ont développé l’attachement affectif, l’engagement social, la relation à autrui pour vivre en sécurité et en équilibre émotionnel.' },

        { type: 'sub', text: 'Malaise vagal' },
        { type: 'para', text: 'Cette distinction du nerf vague en deux branches a permis de résoudre l’apparente contradiction entre, d’une part, les bienfaits du Parasympathique pour combattre les effets du stress liés à une hyperactivité du Sympathique et, d’autre part, les méfaits du Parasympathique quand le nerf vague ancien est suractivé, comme c’est le cas dans le malaise vagal. Celui-ci se caractérise par des nausées et vomissements, colites, fatigue, syncope pouvant aller jusqu’à l’arrêt cardiaque.' },
        { type: 'para', text: 'En énonçant la théorie polyvagale, Stephen Porges a pu répondre à ce paradoxe : la branche nouvelle du nerf vague est capable de réguler l’activité du système sympathique et celle de la branche ancienne du nerf vague.' },

        { type: 'sub', text: 'Anatomie des deux branches du nerf vague' },
        { type: 'bullets', items: [
          'Au-dessus de la bifurcation trachéale, le nerf vague X se comporte comme un nerf crânien somatique et viscéral, moteur et sensitif.',
          'Au-dessous de cette bifurcation, il devient le nerf majeur du système parasympathique viscéro-moteur et viscéro-sensitif.',
        ]},
        { type: 'lead', label: 'Branche ancienne (dorsale)', text: 'origine : noyau dorsal de la moelle allongée du tronc cérébral. Elle est non myélinisée, à conduction lente de l’influx nerveux. Destinée : essentiellement aux viscères infra-diaphragmatiques. Elle est impliquée pour assurer les biens vitaux (digestifs, génitaux et urinaires) et dans les réponses aux menaces de la vie quand la mobilisation du Sympathique n’est pas ou plus possible.' },
        { type: 'lead', label: 'Branche nouvelle (ventrale)', text: 'origine : noyau ambigu ou antérieur de la moelle allongée. Elle est myélinisée à conduction rapide de l’influx nerveux. Destinée : essentiellement aux organes sus-diaphragmatiques. Sa conduction plus rapide et plus modulée exerce un contrôle sur l’activité cardiaque : lors des interactions sociales dans des environnements sécurisants, le nerf vague nouveau régule non seulement le rythme cardiaque mais surtout la variabilité de rythme cardiaque (VRC). Une VRC accrue favorise une meilleure aptitude face aux situations socialement stressantes ; à contrario, une VRC réduite serait en relation avec une mauvaise adaptation et la dépression.' },
        { type: 'para', text: 'La branche ventrale du nerf vague est anatomiquement liée aux noyaux moteurs des autres nerfs crâniens situés dans le tronc cérébral. Elle fonctionne en corrélation avec eux pour favoriser les interactions sociales. Elle est, chez l’être humain, à la base de l’engagement social.' },
      ],
    },
    {
      id: 'engagement-social',
      title: 'Engagement social',
      blocks: [
        { type: 'para', text: 'À la naissance, l’être humain est moins achevé comparé aux animaux. Il ne doit sa survie et ses besoins alimentaires qu’à l’attachement affectif et protecteur, en premier lieu, de sa mère, en réagissant à :' },
        { type: 'bullets', items: [
          'Son odeur (nerf olfactif I)',
          'Sa voix (nerf vestibulaire-cochléaire VIII)',
          'Son contact visuel (nerf optique II et nerfs oculomoteurs III, IV et VI)',
          'Son regard en orientant la tête (nerf accessoire XI)',
          'Aux expressions faciales (nerf facial VII)',
          'Au toucher (nerf trijumeau V)',
          'La succion et la tétée puis la mastication et la déglutition (nerf glosso-pharyngien IX), lors de la tétée, puis plus tard, lors des repas partagés qui favorisent les interrelations sociales',
          'La vocalisation par le nerf hypoglosse XII.',
        ]},
        { type: 'para', text: 'Cette relation affective et protectrice s’élargit au niveau familial puis dans l’organisation et la planification de la vie sociale et inter-personnelle. Dans les conditions optimales, la branche ventrale du nerf vague exerce un contrôle hiérarchisé sur les deux autres systèmes, le sympathique et la branche dorsale du nerf vague.' },

        { type: 'sub', text: 'Neuroception' },
        { type: 'para', text: 'C’est l’état dans lequel nous sommes, notre capacité à sonder notre intérieur :' },
        { type: 'bullets', items: [
          'Nerf vague ancien : régulation harmonieuse des fonctions digestives, génitales et urinaires',
          'Sympathique : énergie, dynamisme, se battre ou fuir',
          'Nerf vague nouveau : régulation harmonieuse cardiaque et métabolique, équilibre émotionnel, relation interpersonnelle constructive.',
        ]},
        { type: 'para', text: 'Dès l’enfance, les traumatismes physiques, psychiques ou émotionnels déterminent le système dominant.' },

        { type: 'sub', text: 'Conséquences cliniques' },
        { type: 'para', text: 'Selon la conception classique du SNA en deux systèmes, nous pensions que le Sympathique était seul responsable dans la réponse au mécanisme de stress, surtout dans les phases d’alarme et d’adaptation du SGA.' },
        { type: 'para', text: 'La théorie polyvagale inverse ce processus par l’influence de la branche ventrale du nerf vague sur le Sympathique et la branche dorsale du nerf vague.' },
        { type: 'para', text: '« C’est essentiellement l’abaissement du tonus vagal qui libère l’activité du Sympathique et non pas une augmentation indépendante du tonus sympathique. » (Eric Marlien).' },
        { type: 'lead', label: 'Hiérarchisation', text: 'pour que les viscères infra-diaphragmatiques contrôlés par la branche ancienne du nerf vague fonctionnent bien, il faut que le Sympathique, situé au-dessus, ne soit pas submergé par des menaces ou des situations de conflits émotionnels, de stress aigu ou permanent. Enfin et surtout, il faut que la branche ventrale du nerf vague ait un fonctionnement optimal sur le plan des comportements interrelationnels et sur le plan psychologique — sentiment de sécurité, d’amour et de confiance, d’empathie et de compassion — pour contrôler le Sympathique et le nerf vague ancien.' },

        { type: 'rop', body: [
          'De ce qui découle du fonctionnement hiérarchisé du SNA en trois branches correspondant à l’évolution phylogénétique des trois cerveaux — reptilien, limbique et cognitif de Paul D. Maclean —,',
          'il faut organiser notre approche thérapeutique, non seulement par l’anamnèse et l’examen clinique, mais aussi selon cette hiérarchisation de haut en bas des trois cerveaux.',
          'Étage supérieur — branche nouvelle du nerf vague et ses connexions avec les centres supérieurs du système nerveux :',
          'Charnière crânio-cervicale Occiput-C1-C2 et foramen magnum ; tronc cérébral et nerfs crâniens, nerf trijumeau et ses trois branches ; foramen jugulaire (nerfs IX, X, XI) et nerf hypoglosse XII ; dure-mère crânienne, faux du cerveau et du cervelet, tente du cervelet ; rééquilibration symphyse sphéno-basilaire–S2 ; compression du 4ème ventricule et resynchronisation SSB/S2 ; viscères supra-diaphragmatiques : plexus cardiaque.',
          'Étage moyen — système sympathique : axe sympathico-adrénalo-surrénalien (SAM) et axe hypothalamo-hypophyso-surrénalien (HHS).',
          'Étage inférieur — branche ancienne du nerf vague : plexus cœliaque, viscères sous-diaphragmatiques, plexus hypogastrique.',
        ]},
      ],
    },
  ],
}

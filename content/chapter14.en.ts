// Chapter 14 content — English
// Source: public/Chapter-14/Chapitre 14 Intestin grêle - Parties 1a, 1b, 2, 3.docx (Guy Boitout)

import type { Chapter } from './types'

export const chapter14En: Chapter = {
  slug: 'chapter-14',
  number: '14',
  title: 'Small Intestine',
  sections: [
    {
      id: 'presentation',
      title: 'Presentation',
      blocks: [
        { type: 'para', text: 'The small intestine is the longest abdominal organ in the body: in a cadaver, its length is around 6 to 7 metres, whereas in the living person it is considerably shorter due to its muscular tone. It consists of two parts:' },
        { type: 'bullets', items: ['The duodenum', 'The jejunum-ileum.'] },
        { type: 'para', text: 'They extend from the pylorus to the ileocaecal valve and play a major role in digestion and absorption. Although part of the small intestine, the duodenum is covered in a separate chapter (Chapter 10) due to its anatomical and physiological specificity.' },
        { type: 'para', text: 'The jejunum-ileum differs from the duodenum in:' },
        { type: 'bullets', items: [
          'A thin, smooth, fully peritonealized and very mobile wall. Its lumen is only 2 to 3 cm in diameter;',
          'A major role in digestion, through the interaction of the mucosa, intestinal secretions and the microbiota (or intestinal flora);',
          'An important role in metabolism and immunity;',
          'Its highly developed intrinsic nervous system;',
          'Close interactions with the gut-brain axis, which may have effects on the emotional sphere.',
          'Functionally, the small intestine and the colon are interdependent.',
        ]},
      ],
    },
    {
      id: 'situation',
      title: 'Location',
      blocks: [
        { type: 'para', text: 'The jejunum-ileum occupies a large part of the abdominal cavity, preferably to the left rather than to the right, inside the colonic frame. The jejunum is preferentially located in the upper left quadrant of the abdomen. The ileum is preferentially located in the lower right quadrant of the abdomen.' },
        { type: 'figure', src: '/chapter-14/figure-14-1.png', caption: 'Figure 14.1 — Abdominal topography in four quadrants', alt: 'The four abdominal quadrants', orientation: 'portrait' },
      ],
    },
    {
      id: 'anatomie',
      title: 'Anatomy',
      blocks: [
        { type: 'lead', label: 'Jejunum-ileum', text: 'it consists of 15 to 16 U-shaped intestinal loops arranged in two groups. An upper group on the left, the jejunum, more developed than the ileum, whose loops and vascular system are rather horizontally oriented. A lower group on the right, the ileum, whose loops and vascular system are rather vertically oriented.' },
        { type: 'lead', label: 'Mesentery', text: 'it is a meso, i.e. a double-layered peritoneal reflection. It envelops the jejunum-ileum and connects it to the posterior abdominal wall through the root of the mesentery.' },
        { type: 'figure', src: '/chapter-14/figure-14-2.png', caption: 'Figure 14.2 — Mesos', alt: 'The peritoneal mesos', orientation: 'portrait' },
        { type: 'lead', label: 'Root of the mesentery', text: 'it constitutes the attachment line of the mesentery and contributes to the stability of the otherwise very mobile small intestine. It measures 16 to 18 cm. It extends from the duodenojejunal junction to the ileocaecal junction, crossing the midline of the abdomen at the level of the umbilicus (at the level of disc L3-L4). The duodenojejunal junction is maintained by the Treitz muscle whose smooth fibres attach to the right pillar of the diaphragm.' },
        { type: 'figure', src: '/chapter-14/figure-14-3.png', caption: 'Figure 14.3 — Root of the mesentery', alt: 'Root of the mesentery and its abdominal course', orientation: 'landscape' },
        { type: 'lead', label: 'Treitz muscle', text: 'it contributes to maintaining the duodenojejunal angle by its contraction, drawing the root of the mesentery upward and to the left. By promoting longitudinal tension, it participates in the emptying of the duodenal contents into the jejunum. The root of the mesentery provides the vascularization and innervation to the small intestine.' },
        { type: 'figure', src: '/chapter-14/figure-14-4.png', caption: 'Figure 14.4 — Treitz muscle', alt: 'Treitz muscle and the duodenojejunal angle', orientation: 'landscape' },
        { type: 'rop', body: [
          'The loss of longitudinal tension of the root of the mesentery is clinically related to the aortomesenteric clamp syndrome or nutcracker syndrome: a compression of the 4th part of the duodenum and the left renal vein between the aorta and the superior mesenteric artery. The emptying of duodenal contents into the jejunum may be delayed, with a risk of gastroduodenal reflux.',
          'The rich vascular, nervous and lymphatic network of the root of the mesentery is highly reflexogenic. Stimulating its reflex zone aims to facilitate a functional response of the jejunum-ileum.',
        ]},
      ],
    },
    {
      id: 'rapports',
      title: 'Relations',
      blocks: [
        { type: 'bullets', items: [
          'The small intestine is intraperitoneal.',
          'On the left, the jejunum overlies the descending colon.',
          'On the right, the ileum leaves the ascending colon free.',
          'Dorsally, the small intestine relates to the posterior abdominal wall and retroperitoneal organs, notably the supramesocolic part of the duodenum, the kidneys, the ureters and the ascending and descending colon.',
          'Anteriorly: the greater omentum (formerly greater epiploon).',
          'Caudally: the pelvic organs, especially the bladder.',
          'Cephalically: the transverse mesocolon.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: 'Vascularization',
      blocks: [
        { type: 'para', text: 'The small intestine requires an extensive vascular and lymphatic supply to fulfil its functions of digestion, absorption and immunity.' },
        { type: 'lead', label: 'Superior mesenteric artery', text: 'it constitutes the main arterial axis of the small intestine. It is a branch of the abdominal aorta. Its origin is located 1 cm below the coeliac trunk, at the level of the intervertebral disc Th12-L1. Initially retropancreatic then in front of the 3rd part of the duodenum, it travels between the two layers of the mesentery. It gives off numerous collateral branches. It supplies the entire small intestine, the ascending colon and the proximal two-thirds of the transverse colon.' },
        { type: 'figure', src: '/chapter-14/figure-14-5.png', caption: 'Figure 14.5 — Superior mesenteric artery', alt: 'Superior mesenteric artery and its branches', orientation: 'portrait' },
        { type: 'para', text: 'Its pulse, perceptible at the level of the 3rd part of the duodenum, to the right of the umbilicus, may constitute a clinical vascular landmark, without by itself being indicative of intestinal function.' },
        { type: 'figure', src: '/chapter-14/figure-14-6.png', caption: 'Figure 14.6 — Pulse of the arteries of the abdominal cavity', alt: 'Pulse of the arteries of the abdominal cavity', orientation: 'landscape' },
        { type: 'lead', label: 'Superior mesenteric vein', text: 'located to the right of the superior mesenteric artery, it is part of the portal system. It drains toward the liver the venous blood laden with nutrients absorbed in the small intestine.' },
        { type: 'figure', src: '/chapter-14/figure-14-7.png', caption: 'Figure 14.7 — Portal system', alt: 'Hepatic portal system', orientation: 'landscape' },
        { type: 'lead', label: 'Lymphatic network', text: 'the small intestine has a well-developed lymphatic network. It participates in the immune system. It takes charge of lipid molecules, long-chain proteins and fat-soluble vitamins A, D, E, K, conveyed toward the left jugulo-subclavian junction via the cisterna chyli and the thoracic duct.' },
        { type: 'figure', src: '/chapter-14/figure-14-8.png', caption: 'Figure 14.8 — Lymphatic system', alt: 'Abdominal lymphatic system', orientation: 'landscape' },
      ],
    },
    {
      id: 'innervation',
      title: 'Innervation',
      blocks: [
        { type: 'sub', text: 'Innervation of the peritoneum' },
        { type: 'para', text: 'The peritoneum receives dual innervation, somatic and autonomic.' },
        { type: 'lead', label: 'Parietal peritoneum', text: 'it receives somatic innervation shared with the abdominal wall via the phrenic nerves, the last six intercostal nerves and the nerves of the lumbar plexus. It has numerous endings sensitive to temperature, pressure and pain. This innervation shared with the abdominal wall explains the projection of cervical, scapular, abdominal and lumbar pains of peritoneal and visceral origin transmitted to the musculoskeletal system by the somatic fibres of the parietal layer.' },
        { type: 'figure', src: '/chapter-14/figure-14-9.png', caption: 'Figure 14.9 — Phrenic nerve', alt: 'Phrenic nerve and its course', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-10.png', caption: 'Figure 14.10 — Intercostal nerves', alt: 'Intercostal nerves', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-11.png', caption: 'Figure 14.11 — Lumbar plexus nerves', alt: 'Lumbar plexus nerves', orientation: 'landscape' },
        { type: 'lead', label: 'Visceral peritoneum', text: 'it receives extrinsic autonomic innervation shared with the viscera. Sympathetic: its roots arise from Th8 to Th11. They join the coeliac and superior mesenteric pre-vertebral plexuses via the greater and lesser splanchnic nerves.' },
        { type: 'figure', src: '/chapter-14/figure-14-12.jpg', caption: 'Figure 14.12 — Autonomic nervous system', alt: 'Autonomic nervous system', orientation: 'portrait' },

        { type: 'sub', text: 'Vagus nerve and sympathetic nervous system' },
        { type: 'leadBullets', items: [
          { label: 'Visceral sensitivity', text: 'the visceral peritoneum is poorly sensitive to touch, thermal variations and surgical section. Visceral sensitivity depends on the sympathetic system, stimulated by intestinal stretching and chemical substances.' },
          { label: 'Sympathetic motility', text: 'the Sympathetic decreases peristalsis and intestinal secretions, particularly in states of stress, anxiety, fear or exertion.' },
          { label: 'Vagus nerve — motility', text: 'it is broadly antagonistic to the Sympathetic. It promotes peristalsis and intestinal secretions as well as intestinal permeability to favour absorption.' },
          { label: 'Vagus nerve — sensitivity', text: 'the vagus nerve contains 70 to 80% of sensory fibres that constantly inform the brain of the state of the viscera. It is connected to the intrinsic nervous system.' },
        ]},

        { type: 'sub', text: 'Enteric nervous system (ENS)' },
        { type: 'para', text: 'The intrinsic or enteric nervous system (ENS) is often described as the second brain or abdominal brain. It consists of intramural plexuses located within the wall of the small intestine itself: the myenteric plexus of Auerbach and the submucosal plexus of Meissner.' },
        { type: 'figure', src: '/chapter-14/figure-14-13.png', caption: 'Figure 14.13 — Enteric intramural plexuses', alt: 'Auerbach myenteric plexus and Meissner submucosal plexus in the intestinal wall', orientation: 'landscape' },
        { type: 'bullets', items: [
          'The ENS is sensitive to neurohormonal signals and to the chemical composition of the intestinal contents.',
          'It can function largely autonomously with respect to the brain and spinal cord as long as physiological conditions permit.',
          'It participates significantly in the production of neurochemical mediators, including a large proportion of serotonin, acetylcholine, noradrenaline and GABA.',
          'Intestinal pacemaker: the wall of the small intestine also contains Cajal cells, located within the longitudinal and circular muscle layers. They generate slow waves and participate in the coordination of intestinal motility.',
        ]},
      ],
    },
    {
      id: 'physiologie',
      title: 'Physiology',
      blocks: [
        { type: 'sub', text: 'Motility' },
        { type: 'para', text: 'It is triggered by three main types of mechanisms:' },
        { type: 'bullets', items: [
          'Mechanical: by stretching of the intestinal wall during the passage of chyme.',
          'Neurological: by the action of the vagus nerve influenced by cephalic signals such as the sight, smell, taste and touch of food, as well as by intestinal mechanoreceptors.',
          'Hormono-chemical: by gastric, duodenal, hepatobiliary and pancreatic secretions.',
        ]},
        { type: 'para', text: 'The small intestine is animated by rhythmic contractions, back-and-forth movements and segmentation ensuring homogenisation of the chyme, and peristalsis allowing progression of the chyme.' },

        { type: 'sub', text: 'Intestinal ecosystem' },
        { type: 'para', text: 'The small intestine constitutes an ecosystem formed by the intestinal mucosa, the immune system and the intestinal microbiota.' },
        { type: 'lead', label: 'Intestinal mucosa', text: 'it constitutes the interface between the internal environment of the organism and the contents of the digestive lumen. It acts as a selective barrier to allow digestion and absorption.' },
        { type: 'lead', label: 'Digestion', text: 'it corresponds to the transformation of food into simple molecules that can then be absorbed. Goblet cells produce a protective mucus. Lieberkühn cells participate in the slightly alkaline intestinal secretion as well as in enzymatic and antimicrobial functions. Enterocytes or absorptive cells fulfil a selective barrier function through their intercellular arrangement (desmosomes), allowing absorption of micronutrients while limiting the passage of insufficiently degraded macromolecules.' },
        { type: 'lead', label: 'Absorption', text: 'the intestinal mucosa is covered with finger-like villous projections whose central axis contains smooth muscle cells as well as a vascular and lymphatic network. The villi are themselves covered with microvilli forming a brush border, which greatly multiplies the exchange surface. The spread-out small intestine would have a surface area equivalent to a tennis court.' },
        { type: 'figure', src: '/chapter-14/figure-14-14.png', caption: 'Figure 14.14 — Intestinal villus', alt: 'Histological organisation of an intestinal villus', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Blood pathway', text: 'the blood capillaries absorb water, mineral salts, simple sugars, amino acids, short-chain fatty acids and water-soluble vitamins. These nutrients are conveyed to the liver by the portal system.' },
          { label: 'Lymphatic pathway', text: 'the lymphatic capillaries (or lacteals) absorb mainly fats, long-chain proteins and fat-soluble vitamins A, D, E, K. They successively join the lymphatic network, the cisterna chyli, the thoracic duct, before opening into the venous network of the left jugulo-subclavian junction.' },
        ]},
        { type: 'rop', body: [
          'The reflex action on intestinal motility aims to support digestion and absorption.',
          'The reflex action on the liver and the lymphatic system aims to support the quality of absorption and immune functions.',
        ]},
        { type: 'lead', label: 'Immune system', text: 'receptors, located on the surface of the intestine, identify certain pathogens or potentially harmful substances and present them to intestinal immune cells: mast cells (involved in allergic and inflammatory responses), Paneth cells (release antimicrobial peptides) and gut-associated lymphoid tissue (GALT), composed of lymphocytes isolated or grouped in Peyer\'s patches.' },
        { type: 'lead', label: 'Intestinal microbiota', text: 'it is a collection of bacteria, fungi, yeasts, viruses and protozoa living in interaction with their host. Their number is estimated at approximately 38 billion bacteria in the human body. Each individual has their own microbiota signature. The microbiota constitutes an important determinant of good health: it participates in immunity, digestion and absorption, and interacts with brain and emotional functions via the gut-brain axis.' },
      ],
    },
    {
      id: 'pathologies',
      title: 'Common Pathologies',
      blocks: [
        { type: 'para', text: 'Intestinal hyperpermeability and dysbiosis are often described as associated, one causing the other and vice versa.' },

        { type: 'lead', label: 'Intestinal hyperpermeability', text: 'when the intercellular junctions between enterocytes are altered, intestinal permeability can increase. This may be accompanied by increased passage of insufficiently degraded luminal macromolecules, leading to immune or inflammatory activation.' },
        { type: 'sub', text: 'Causes' },
        { type: 'bullets', items: [
          'Infectious agents: staphylococci, streptococci, colibacilli, salmonella, candida albicans which release toxins.',
          'Chronic stress: the Sympathetic and stress hormones (adrenaline, cortisol) in excess cause vasoconstriction and mucosal fragility.',
          'Highly processed or refined foods, with a high glycaemic index, saturated fatty acids, excess cow\'s milk, gluten and meat.',
          'Long sporting activities (such as long-distance running): they can transiently reduce splanchnic perfusion.',
          'Medications: non-steroidal anti-inflammatory drugs, salicylates, corticosteroids, antibiotics and chemotherapy.',
        ]},
        { type: 'sub', text: 'Consequences' },
        { type: 'bullets', items: [
          'Food allergies: impairment of the intestinal barrier can promote increased exposure of the immune system to certain food antigens.',
          'Autoimmune diseases: insufficiently degraded proteins that cross the mucosa are considered \'non-self\'. Antibodies destroy the \'non-self\' as well as the tissue on which they have attached.',
          'Micronutrient deficiencies: poor absorption quality can lead to deficiency in vitamins, minerals and essential fatty acids.',
          'Hepatic overload: the increase in the portal system of substances from the intestinal lumen can increase the liver\'s detoxification workload.',
        ]},
        { type: 'rop', body: [
          'In the presence of musculoskeletal pain and fixations, especially when there is no obvious notion of trauma or overuse, the ROP approach invites practitioners to look for a possible link with visceral dysfunctions.',
        ]},

        { type: 'lead', label: 'Dysbiosis', text: 'it corresponds to the disruption of the microbiota. When the composition of the microbiota changes — with reduced diversity or imbalance between commensal and potentially pathogenic species — mucosal protection may be impaired.' },
        { type: 'lead', label: 'Causes of dysbiosis', text: 'stress, inflammation, infections, poor lifestyle or dietary imbalance (excess alcohol, sugar and protein, or absence of fibre), antibiotic therapy, certain environmental exposures as well as vertebral fixations and fibrosis of the intestine and its attachments.' },
        { type: 'para', text: 'Dysbiosis is considered an associated factor in many pathologies, including: haemorrhagic colitis, thyroiditis, asthma, sinusitis, allergies, joint pain (lumbar pain), fibromyalgia, cystitis, certain depressive forms. Some authors suggest that neurodegenerative diseases such as Parkinson\'s disease, multiple sclerosis or Alzheimer\'s disease may be linked to the enteric nervous system via the vagus nerve.' },

        { type: 'lead', label: 'Warning signs', text: 'bad breath, belching, aerocolia, emission of malodorous gas, constipation/diarrhoea, pyrosis, exaggerated craving for sugar and raw meat.' },

        { type: 'lead', label: 'Exclusion diagnosis', text: 'certain symptoms should direct patients to a doctor: fever, red or black blood in the stool, significant dehydration, significant unexplained weight loss, alternating constipation-diarrhoea, vomiting, colicky pain of the umbilical region, meteorism, obstruction (mechanical or paralytic ileus), strangulated inguinal hernia, Troisier\'s node (suspected cancer), sign of intra-abdominal effusion.' },

        { type: 'lead', label: 'Indications in ROP', text: 'dysbioses, post-gastroenteritis sequelae, enteroptosis (abnormal tension of the small intestine associated with vasoconstrictive effects, venous and lymphatic stasis, and spasms of perivascular nerve plexuses), paralytic ileus (inhibition of intestinal motility and secretions by peritoneal irritation with sympathetic dominance).' },

        { type: 'sub', text: 'Crohn\'s disease' },
        { type: 'para', text: 'This disease primarily affects the ileum and the colon. Several factors are associated with it: genetic, dysbiosis, environmental, and emotional as a modulating factor of lived experience and sometimes of flare-ups.' },
        { type: 'lead', label: 'Symptoms', text: 'diarrhoea linked to inflammation of the intestinal wall, abdomino-pelvic pain, weight loss, asthenia, mouth ulcers, low back pain, erythema nodosum of the limbs, pancreatic involvement, depressive syndrome.' },
        { type: 'lead', label: 'Evolution', text: 'chronicity, increased risk of colorectal cancer depending on the extent and duration of the disease. These patients are often forced to adopt a strict diet with little fibre.' },
        { type: 'rop', body: [
          'Our clinical experience has shown that the ROP approach can help relieve certain abdomino-pelvic pains in Crohn\'s disease and support better bowel transit.',
        ]},
      ],
    },
    {
      id: 'rop',
      title: 'ROP of the Small Intestine',
      blocks: [
        { type: 'sub', text: 'General adaptation syndrome' },
        { type: 'sub', text: '1. Vagus nerve' },
        { type: 'bullets', items: [
          'Cranial and cervical territory of the vagus nerve.',
          'Left abdominal territory of the vagus nerve and coeliac (solar) plexus.',
          'Oesophageal hiatus (right and left vagus nerves) and cardia.',
          'Lesser curvature of the stomach, rich in vagal fibres.',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-15.png', caption: 'Figure 14.15 — Cranial and cervical territory of the vagus nerve (in yellow)', alt: 'Cranial and cervical territory of the vagus nerve', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-16.png', caption: 'Figure 14.16 — Left abdominal territory of the vagus nerve and coeliac (solar) plexus', alt: 'Left abdominal territory of the vagus nerve and coeliac plexus', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-17.png', caption: 'Figure 14.17 — Oesophageal hiatus (right and left vagus nerves) and cardia', alt: 'Oesophageal hiatus and vagus nerves', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-18.png', caption: 'Figure 14.18 — Lesser curvature of the stomach, rich in vagal fibres', alt: 'Lesser curvature of the stomach and vagal fibres', orientation: 'landscape' },

        { type: 'sub', text: '2. Sympathetic system' },
        { type: 'bullets', items: [
          'Vertebral column, costotransverse joints (thoracic lateral vertebral ganglionic chain Th8-Th10).',
          'Coeliac (solar) plexus.',
          'Lumbar plexus (viscero-somatic link).',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-19.png', caption: 'Figure 14.19 — Sympathetic system (spinal origin)', alt: 'Sympathetic system and ganglionic chain', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-20.png', caption: 'Figure 14.20 — Lumbar ganglionic chain and diaphragmatic pillars', alt: 'Lumbar ganglionic chain and diaphragmatic pillars', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-21.png', caption: 'Figure 14.21 — Coeliac (solar) plexus', alt: 'Solar coeliac plexus', orientation: 'landscape' },

        { type: 'para', text: 'N.B. In our clinical experience, functional intestinal disorders are often observed in women in relation to hormonal and emotional factors.' },

        { type: 'sub', text: 'Locoregional syndrome' },
        { type: 'bullets', items: [
          'Diaphragm (attachment of the Treitz muscle on the right pillar).',
          'Stomach (gastro-enteric reflex).',
          'Root of the mesentery: a line from the duodenojejunal junction to the umbilicus, at the level of L3-L4 (plantar surface of the left foot).',
          'Root of the mesentery: a line from the ileocaecal valve to the umbilicus (plantar surface of the right foot).',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-22.jpg', caption: 'Figure 14.22 — Root of the mesentery (between the duodenojejunal junction and the umbilicus)', alt: 'Reflex zone of the root of the mesentery — jejunum side', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/figure-14-23.jpg', caption: 'Figure 14.23 — Root of the mesentery (between the ileocaecal valve and the umbilicus)', alt: 'Reflex zone of the root of the mesentery — ileum side', orientation: 'portrait' },

        { type: 'sub', text: 'Podal reflex zones — Jejunum (left foot)' },
        { type: 'bullets', items: [
          'Upper limit: a horizontal line at the level of the styloid processes of the 5th metatarsals.',
          'Lower limit: the anterior border of the heels (ilio-pubic branches).',
          'Lateral limit: to the lateral border of the left foot.',
          'Respect the orientation of the loops: horizontal for the jejunum.',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-24.png', caption: 'Figure 14.24 — Jejunum (upper and lower limits)', alt: 'Limits of the jejunum reflex zone on the left foot', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-25.png', caption: 'Figure 14.25 — Jejunum', alt: 'Jejunum reflex zone on the left foot', orientation: 'landscape' },

        { type: 'sub', text: 'Podal reflex zones — Ileum (right foot)' },
        { type: 'bullets', items: [
          'Upper limit: a horizontal line at the level of the styloid processes of the 5th metatarsals.',
          'Lower limit: the anterior border of the heels (ilio-pubic branches).',
          'Lateral limit: in line with the 4th toe of the right foot.',
          'Respect the orientation of the loops: vertical for the ileum.',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-26.png', caption: 'Figure 14.26 — Ileum (upper and lower limits)', alt: 'Limits of the ileum reflex zone on the right foot', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-27.png', caption: 'Figure 14.27 — Ileum and root of the mesentery', alt: 'Ileum reflex zone and root of the mesentery on the right foot', orientation: 'landscape' },

        { type: 'sub', text: '3. Limbic system' },
        { type: 'lead', label: 'Limbic brain — small intestine balance', text: 'induction-listening: one thumb on the small intestine, the other thumb on the limbic brain.' },
        { type: 'figure', src: '/chapter-14/figure-14-28.png', caption: 'Figure 14.28 — Viscero-emotional balance technique — small intestine', alt: 'Viscero-emotional balance — small intestine and limbic brain', orientation: 'landscape' },
      ],
    },
    {
      id: 'relations',
      title: 'Viscero-Somatic and Emotional Relationships',
      blocks: [
        { type: 'sub', text: 'Viscero-somatic relationships' },
        { type: 'bullets', items: [
          'Vertebral fixation from Th10 to Th12 and their ribs.',
          'L1 and L2.',
        ]},

        { type: 'sub', text: 'Viscero-emotional relationships' },
        { type: 'para', text: 'The abdomen, with its train of pains and digestive disorders, can constitute an important site of somatic expression of emotional tensions. These tensions would promote sympathetic hyperactivity at the expense of the vagus nerve.' },
        { type: 'para', text: 'On the emotional level, it is difficult to clearly differentiate the small intestine from the colon. In the clinical framework, the mucosa is envisaged as a receptor-transmitter of emotions. Highly hormone-dependent, the intestine is presented as an organ particularly involved in long-term somatization. Fibromyalgia and spasmophilia are more commonly encountered in women due to hormonal and intestinal interdependence.' },
        { type: 'para', text: 'The \'intestinal\' person is never comfortable in their own skin. They suffer from morning fatigue, lower back pain, knee and foot pain (hallux valgus) with striated and brittle nails. They are easily irritated, in a bad mood that dissipates throughout the day.' },
        { type: 'para', text: 'The \'intestinal\' person needs security. They may show themselves to be over-protective towards their loved ones. They are described as faithful to their habits and reference points. They may also display remarkable meticulousness in their environment. They sometimes display a false assurance to hide their anxiety. They are hypochondriacal, logorrheic, with a touch of theatricality to convince. They are obstinate when they have an idea in their head, generous, touchy and moody.' },

        { type: 'sub', text: 'Advice' },
        { type: 'para', text: 'The small intestine reflects emotional and psychological tensions. Intestinal spasms fix the lumbar spine. Favour a varied and balanced diet without excess carbohydrates and animal proteins. Do not engage in sporting activity during digestion.' },
      ],
    },
  ],
  slides: {
    url: '/chapter-14/synthese.pdf',
    label: 'Slides',
    description: 'Visual summary of the chapter — anatomy, physiology and R.O.P. reflex zones of the small intestine.',
  },
  revisionSheet: {
    src: '/chapter-14/Chapter14 Fiche de Revision EN.png',
    alt: 'Revision sheet — Chapter 14, Small Intestine',
    caption: 'Revision sheet — Chapter 14 · Small Intestine',
  },
  clinicalCase: {
    src: '/chapter-14/Chapter14 Cas Clinique EN.png',
    caption: 'Clinical case — Chapter 14',
    alt: 'Clinical case: small intestine in R.O.P.',
  },
}

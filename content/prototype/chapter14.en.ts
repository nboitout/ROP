// Chapter 14 content — English
// Source: public/chapter-14/Chapter14 Intestin grêle EN.docx (Guy Boitout)

import type { Chapter } from '../types'

export const chapter14En: Chapter = {
  slug: 'chapter-14-prototype',
  number: '14',
  title: 'Small Intestine',
  sections: [
    {
      id: 'presentation',
      title: 'Presentation',
      blocks: [
        { type: 'para', text: 'The small intestine is the longest abdominal viscus in the body. In the cadaver, it measures approximately 6 to 7 metres; in the living subject, it is considerably shorter because of its muscular tone. It consists of two parts:' },
        { type: 'bullets', items: ['The duodenum', 'The jejuno-ileum.'] },
        { type: 'para', text: 'Together, they extend from the pylorus to the ileocaecal valve and play a major role in digestion and absorption. Although the duodenum belongs to the small intestine, it is covered in a separate chapter (see Chapter 10, Duodenum) because of its specific anatomical and physiological characteristics.' },
        { type: 'para', text: 'The jejuno-ileum differs from the duodenum in several respects:' },
        { type: 'bullets', items: [
          'It has a thin, smooth, completely peritonealised, highly mobile wall. Its lumen measures only 2 to 3 cm in diameter;',
          'It plays a major digestive role through the interaction between the mucosa, intestinal secretions and the microbiota, also known as the intestinal flora;',
          'It contributes significantly to metabolism and immunity;',
          'It has a particularly well-developed intrinsic nervous system;',
          'It interacts closely with the gut-brain axis, with possible effects on the emotional sphere.',
          'Functionally, the small intestine and the colon are interdependent.',
        ]},
      ],
    },
    {
      id: 'situation',
      title: 'Location',
      blocks: [
        { type: 'para', text: 'The jejuno-ileum occupies a large part of the abdominal cavity, more often on the left than on the right, within the colonic frame. The jejunum is primarily located in the upper left quadrant of the abdomen. The ileum is mainly located in the lower right quadrant.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-1.png', caption: 'Figure 14.1 — Abdominal regions', alt: 'Topographic landmarks of the abdomen', orientation: 'portrait' },
      ],
    },
    {
      id: 'anatomie',
      title: 'Anatomy',
      blocks: [
        { type: 'figure', src: '/chapter-14/en/figure-14-2.png', caption: 'Figure 14.2 — Mesos', alt: 'The peritoneal mesos', orientation: 'portrait', syncHide: true },
        { type: 'lead', label: 'Jejuno-ileum', text: 'it comprises 15 to 16 U-shaped intestinal loops, arranged in two groups. An upper left group, corresponding to the jejunum, which is more developed than the ileum. Its loops and vascular network are generally oriented horizontally. A lower right group, corresponding to the ileum, whose loops and vascular network are generally oriented vertically.' },
        { type: 'lead', label: 'Mesentery', text: 'it is a meso, that is, a double-layered peritoneal fold. It envelops the jejuno-ileum and attaches it to the posterior abdominal wall through the root of the mesentery.' },
        { type: 'lead', label: 'Root of the mesentery', text: 'the root of the mesentery forms the attachment line of the mesentery and contributes to the stability of the small intestine, which is otherwise highly mobile. It measures 16 to 18 cm and extends from the duodenojejunal junction to the ileocaecal junction, crossing the abdominal midline at the level of the umbilicus, opposite the L3-L4 disc.' },
        { type: 'para', text: 'The duodenojejunal junction is supported by the suspensory muscle of the duodenum, or muscle of Treitz, whose smooth muscle fibres attach to the right crus of the diaphragm.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-3.png', caption: 'Figure 14.3 — Root of the mesentery', alt: 'Root of the mesentery and its abdominal course', orientation: 'landscape', syncHide: true },
        { type: 'lead', label: 'Suspensory muscle of the duodenum (muscle of Treitz)', text: 'it helps maintain the duodenojejunal angle by contracting and drawing the root of the mesentery upward and to the left.' },
        { type: 'para', text: 'By creating longitudinal tension, it contributes to duodenal emptying into the jejunum. The root of the mesentery also carries the vascular and nervous supply of the small intestine.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-4.png', caption: 'Figure 14.4 — Suspensory muscle of the duodenum (muscle of Treitz)', alt: 'Muscle of Treitz and the duodenojejunal angle', orientation: 'landscape', syncHide: true },
        { type: 'rop', body: [
          'Clinically, loss of longitudinal tension in the root of the mesentery should be considered in relation to superior mesenteric artery syndrome, or nutcracker syndrome: compression of the fourth part of the duodenum and of the left renal vein between the aorta and the superior mesenteric artery. Duodenal emptying into the jejunum may be delayed, increasing the risk of gastroduodenal reflux.',
          'The rich vascular, nervous and lymphatic network of the mesenteric root is highly reflexogenic. Stimulation of its reflex zone aims to facilitate a functional response of the jejuno-ileum.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: 'Vascularisation',
      blocks: [
        { type: 'figure', src: '/chapter-14/en/figure-14-5.png', caption: 'Figure 14.5 — Superior mesenteric artery', alt: 'Superior mesenteric artery and its branches', orientation: 'portrait', syncHide: true },
        { type: 'para', text: 'The small intestine requires a substantial vascular and lymphatic supply to perform its digestive, absorptive and immune functions.' },
        { type: 'lead', label: 'Superior mesenteric artery', text: 'it is the main arterial axis of the small intestine. It arises from the abdominal aorta, 1 cm below the coeliac trunk, opposite the Th12-L1 intervertebral disc. It first passes behind the pancreas and then anterior to the third part of the duodenum before running between the two layers of the mesentery. It gives off numerous collateral branches and supplies the entire small intestine, the ascending colon and the proximal two-thirds of the transverse colon.' },
        { type: 'para', text: 'Its pulse, which is palpable at the level of the third part of the duodenum, to the right of the umbilicus, may serve as a vascular clinical landmark, although it does not by itself indicate intestinal function.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-6.png', caption: 'Figure 14.6 — Pulses of the arteries of the abdominal cavity', alt: 'Pulses of the arteries of the abdominal cavity', orientation: 'landscape' },
        { type: 'lead', label: 'Superior mesenteric vein', text: 'located to the right of the superior mesenteric artery, it belongs to the portal system. It drains nutrient-rich venous blood from the small intestine toward the liver.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-7.png', caption: 'Figure 14.7 — Portal system', alt: 'Hepatic portal system', orientation: 'landscape' },
        { type: 'lead', label: 'Lymphatic network', text: 'the small intestine has a well-developed lymphatic network, which participates in immune function. It transports long-chain lipid and protein molecules, as well as the fat-soluble vitamins A, D, E and K, toward the left jugulo-subclavian junction via the cisterna chyli and the thoracic duct.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-8.png', caption: 'Figure 14.8 — Lymphatic system', alt: 'Abdominal lymphatic system', orientation: 'landscape' },
      ],
    },
    {
      id: 'innervation',
      title: 'Innervation',
      blocks: [
        { type: 'sub', text: 'Innervation of the peritoneum' },
        { type: 'para', text: 'The peritoneum has dual innervation, both somatic and autonomic.' },
        { type: 'lead', label: 'Parietal peritoneum', text: 'it receives somatic innervation shared with the abdominal wall via the phrenic nerves, the lower six intercostal nerves and the nerves of the lumbar plexus. It contains numerous nerve endings sensitive to temperature, pressure and pain. This shared innervation with the abdominal wall helps explain the referral of cervical, scapular, abdominal and lumbar pain of peritoneal or visceral origin to the osteo-musculo-articular system through the somatic fibres of the parietal layer.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-9.png', caption: 'Figure 14.9 — Phrenic nerve', alt: 'Phrenic nerve and its course', orientation: 'landscape' },
        { type: 'lead', label: 'Visceral peritoneum', text: 'it receives extrinsic autonomic innervation shared with the viscera. Sympathetic: roots arise from Th8 to Th11 and reach the prevertebral coeliac and superior mesenteric plexuses via the greater and lesser splanchnic nerves.' },

        { type: 'sub', text: 'Vagus nerve and sympathetic nervous system' },
        { type: 'leadBullets', items: [
          { label: 'Visceral sensitivity', text: 'the visceral peritoneum is relatively insensitive to touch, temperature changes and surgical incision. Visceral sensitivity depends on the sympathetic system, which is stimulated by intestinal distension and chemical substances.' },
          { label: 'Sympathetic motility', text: 'the sympathetic system reduces peristalsis and intestinal secretions, particularly during stress, anxiety, fear or physical exertion.' },
          { label: 'Vagus nerve — motility', text: 'the vagus nerve is broadly antagonistic to the sympathetic system. It promotes peristalsis, intestinal secretions and physiological intestinal permeability, thereby facilitating absorption.' },
          { label: 'Vagus nerve — sensitivity', text: 'the vagus nerve contains 70 to 80% sensory fibres, which continuously inform the brain about the state of the viscera. It is connected to the intrinsic nervous system.' },
        ]},

        { type: 'figure', src: '/chapter-14/en/figure-14-12.png', caption: 'Figure 14.12 — Autonomic nervous system', alt: 'Functional comparison of the parasympathetic and sympathetic pathways', orientation: 'portrait' },
        { type: 'sub', text: 'Enteric nervous system (ENS)' },
        { type: 'para', text: 'The intrinsic or enteric nervous system (ENS) is often referred to as the second brain or abdominal brain. It consists of intramural plexuses located within the wall of the small intestine itself: Auerbach\'s myenteric plexus and Meissner\'s submucosal plexus.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-13.png', caption: 'Figure 14.13 — Enteric intramural plexuses', alt: 'Auerbach\'s myenteric plexus and Meissner\'s submucosal plexus in the intestinal wall', orientation: 'landscape' },
        { type: 'bullets', items: [
          'The ENS is sensitive to neurohormonal signals and to the chemical composition of the intestinal contents.',
          'It can operate largely independently of the brain and spinal cord, provided physiological conditions allow.',
          'It plays a major role in producing neurochemical mediators, including a substantial proportion of the body\'s serotonin, as well as acetylcholine, noradrenaline and GABA.',
          'Intestinal pacemaker: the wall of the small intestine also contains interstitial cells of Cajal, located within the longitudinal and circular muscle layers. They generate slow waves and help coordinate intestinal motility.',
        ]},
      ],
    },
    {
      id: 'physiologie',
      title: 'Physiology',
      blocks: [
        { type: 'sub', text: 'Motility' },
        { type: 'para', text: 'Motility is triggered by three main types of mechanism:' },
        { type: 'bullets', items: [
          'Mechanical: distension of the intestinal wall during the passage of chyme;',
          'Neurological: activation of the vagus nerve, influenced by cephalic signals such as the sight, smell, taste and touch of food, and by intestinal mechanoreceptors;',
          'Hormono-chemical: gastric, duodenal, hepatobiliary and pancreatic secretions.',
        ]},
        { type: 'para', text: 'The small intestine is animated by rhythmic contractions, back-and-forth movements and segmentation, which homogenise the chyme, and by peristalsis, which propels it forward.' },

        { type: 'sub', text: 'Intestinal ecosystem' },
        { type: 'para', text: 'The small intestine forms an ecosystem composed of the intestinal mucosa, the immune system and the intestinal microbiota.' },
        { type: 'lead', label: 'Intestinal mucosa', text: 'it forms the interface between the body\'s internal milieu and the contents of the digestive lumen. It acts as a selective barrier between the external environment (the digestive lumen) and the internal milieu, allowing digestion and absorption to occur.' },
        { type: 'lead', label: 'Digestion', text: 'digestion transforms food into simple molecules that can then be absorbed. Goblet cells produce protective mucus that lines the mucosa. Lieberkühn cells contribute to the slightly alkaline intestinal secretion and to enzymatic and antimicrobial functions. Enterocytes, or absorptive cells, perform a selective barrier function through their intercellular arrangement (desmosomes), allowing micronutrient absorption while limiting the passage of insufficiently degraded macromolecules.' },
        { type: 'lead', label: 'Absorption', text: 'the intestinal mucosa is covered with villi, finger-like projections whose central axis contains smooth muscle cells as well as blood and lymphatic vessels. The villi are themselves covered with microvilli, which form a brush border and greatly increase the exchange surface. If spread out, the small intestine would have a surface area equivalent to a tennis court.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-14.png', caption: 'Figure 14.14 — Intestinal villus', alt: 'Histological organisation of an intestinal villus', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Blood pathway', text: 'blood capillaries absorb water, mineral salts, simple sugars, amino acids, short-chain fatty acids and water-soluble vitamins. These nutrients are then transported to the liver through the portal system.' },
          { label: 'Lymphatic pathway', text: 'lymphatic capillaries, or lacteals, mainly absorb fats, long-chain proteins and the fat-soluble vitamins A, D, E and K. They drain successively into the lymphatic network, the cisterna chyli and the thoracic duct before emptying into the venous network at the left jugulo-subclavian junction.' },
        ]},
        { type: 'rop', body: [
          'Reflex action on intestinal motility aims to support digestion and absorption.',
          'Reflex action on the liver and lymphatic system aims to support absorption quality and immune function.',
        ]},
        { type: 'lead', label: 'Immune system', text: 'receptors located on the intestinal surface identify certain pathogens or potentially harmful substances and present them to intestinal immune cells: mast cells (involved in allergic, immune and inflammatory responses); Paneth cells (release antimicrobial peptides into the intestinal lumen); gut-associated lymphoid tissue (GALT), consisting of lymphocytes either isolated or grouped into Peyer\'s patches.' },
        { type: 'lead', label: 'Intestinal microbiota', text: 'it is a community of bacteria, fungi, yeasts, viruses and protozoa that live in interaction with their host. The number of bacteria in the human body is estimated at approximately 38 billion. Each individual has a specific microbiota signature. The microbiota is an important determinant of health: it contributes to immunity, digestion and absorption, and it also interacts with cerebral and emotional functions via the gut-brain axis.' },
      ],
    },
    {
      id: 'pathologies',
      title: 'Common Pathologies',
      blocks: [
        { type: 'para', text: 'Intestinal hyperpermeability and dysbiosis are often described as associated conditions that may reinforce each other.' },

        { type: 'lead', label: 'Intestinal hyperpermeability', text: 'when the intercellular junctions between enterocytes are altered, intestinal permeability may increase. This may allow greater passage of insufficiently degraded luminal macromolecules, potentially leading to immune or inflammatory activation.' },
        { type: 'sub', text: 'Causes' },
        { type: 'bullets', items: [
          'Infectious agents: staphylococci, streptococci, colibacilli, salmonella and Candida albicans, which release toxins.',
          'Chronic stress: excess sympathetic activity and stress hormones (adrenaline, cortisol) cause vasoconstriction and reduce intestinal blood flow, thereby weakening the mucosa.',
          'Food: highly processed or refined foods, high-glycaemic-index foods, saturated fatty acids, excess cow\'s milk, gluten and meat may alter the intestinal ecosystem.',
          'Prolonged sports activities (such as long-distance running): they may transiently reduce splanchnic perfusion in favour of the locomotor system.',
          'Medication: non-steroidal anti-inflammatory drugs, salicylates, corticosteroids, antibiotics and chemotherapy may alter the mucosa or the microbiota.',
        ]},
        { type: 'sub', text: 'Consequences' },
        { type: 'bullets', items: [
          'Food allergies: alteration of the intestinal barrier may increase immune-system exposure to certain food antigens, sometimes accompanied by allergic phenomena involving mast cells and histamine.',
          'Autoimmune diseases: insufficiently degraded proteins crossing an excessively permeable mucosa may be recognised as "non-self". Antibodies may then target both the "non-self" component and the tissue to which it has attached.',
          'Micronutrient deficiencies: impaired absorption may lead to deficiencies in vitamins, minerals, essential fatty acids and other micronutrients.',
          'Hepatic overload: an increased portal-system load of substances originating from the intestinal lumen may increase the liver\'s detoxification workload.',
        ]},
        { type: 'rop', body: [
          'When osteo-musculo-articular pain and fixations are present, especially in the absence of obvious trauma or overuse, the ROP approach invites the practitioner to consider a possible link with visceral dysfunction.',
        ]},

        { type: 'lead', label: 'Dysbiosis', text: 'dysbiosis corresponds to disruption of the microbiota. When the composition of the microbiota changes — with reduced diversity or an imbalance between commensal and potentially pathogenic species — mucosal protection may be altered. Physiological food fermentation may then give way to abnormal fermentation or putrefaction.' },
        { type: 'lead', label: 'Causes of dysbiosis', text: 'stress, inflammation, infection, poor lifestyle habits or dietary imbalance (excess alcohol, sugar or protein, or insufficient fibre), antibiotic therapy, certain environmental exposures, as well as vertebral fixations and fibrosis of the intestine and its attachments.' },
        { type: 'para', text: 'Dysbiosis is considered an associated factor in many pathologies, including: ulcerative colitis, thyroiditis, asthma, sinusitis, allergies, arthralgia (especially low back pain), fibromyalgia, cystitis, certain depressive states. Some authors suggest that certain neurodegenerative diseases, such as Parkinson\'s disease, multiple sclerosis or Alzheimer\'s disease, could be linked to the enteric nervous system via the vagus nerve.' },

        { type: 'lead', label: 'Warning signs', text: 'bad breath, belching, aerocolia, foul-smelling gas, constipation/diarrhoea, heartburn, excessive craving for sugar and raw meat.' },

        { type: 'lead', label: 'Diagnosis of exclusion', text: 'certain symptoms should prompt patients to seek medical advice: fever, red or black blood in the stool, significant dehydration, significant unexplained weight loss, alternating constipation and diarrhoea, vomiting, colicky pain in the umbilical region, meteorism, bowel obstruction (mechanical or paralytic ileus), irreducible strangulated inguinal hernia, Troisier\'s node (suspected cancer), sign of intra-abdominal effusion.' },

        { type: 'lead', label: 'Indications in ROP', text: 'dysbioses, sequelae of gastroenteritis, enteroptosis (abnormal tension in the small intestine associated with vasoconstriction, venous and lymphatic stasis, and spasms caused by irritation of the perivascular nerve plexuses; may also have an unfavourable effect on the liver via portal pressure), paralytic ileus (inhibition of intestinal motility and secretions caused by irritation of the predominantly sympathetic peritoneum).' },

        { type: 'sub', text: 'Crohn\'s disease' },
        { type: 'para', text: 'Crohn\'s disease mainly affects the ileum and colon. Several factors are associated with it: genetic, dysbiosis, environmental, and emotional factors, which may modulate the lived experience of the disease and, in some cases, flare-ups.' },
        { type: 'lead', label: 'Symptoms', text: 'diarrhoea related to inflammation of the intestinal wall, abdominopelvic pain, weight loss, asthenia, oral aphthae, low back pain, erythema nodosum of the limbs, pancreatic involvement, depressive syndrome.' },
        { type: 'lead', label: 'Course', text: 'chronicity, increased risk of colorectal cancer depending on the extent and duration of the disease. These patients are often required to follow a strict low-fibre diet.' },
        { type: 'rop', body: [
          'In our clinical experience, the ROP approach may help relieve certain abdominopelvic pains associated with Crohn\'s disease and support improved intestinal transit.',
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
        { type: 'figure', src: '/chapter-14/en/figure-14-17.png', caption: 'Oesophageal hiatus (right and left vagus nerves) and cardia', alt: 'Oesophageal hiatus and vagus nerves', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/en/figure-14-18.png', caption: 'Lesser curvature of the stomach, rich in vagal fibres', alt: 'Lesser curvature of the stomach and vagal fibres', orientation: 'landscape' },

        { type: 'sub', text: '2. Sympathetic system' },
        { type: 'bullets', items: [
          'Vertebral column and costotransverse joints: thoracic laterovertebral ganglionic chain Th8-Th10.',
          'Coeliac (solar) plexus.',
          'Lumbar plexus (viscerosomatic link).',
        ]},
        { type: 'figure', src: '/chapter-14/en/figure-14-20.png', caption: 'Lumbar ganglionic chain and crura of the diaphragm', alt: 'Lumbar ganglionic chain and crura of the diaphragm', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/en/Chapter14 Fig21 EN.png', caption: 'Coeliac (solar) plexus', alt: 'Coeliac solar plexus', orientation: 'landscape' },

        { type: 'para', text: 'N.B. In our clinical experience, functional intestinal disorders are often observed in women in association with hormonal and emotional factors.' },

        { type: 'sub', text: 'Locoregional syndrome' },
        { type: 'bullets', items: [
          'Diaphragm: attachment of the suspensory muscle of the duodenum (muscle of Treitz) to the right crus.',
          'Stomach (gastroenteric reflex).',
          'Root of the mesentery: a line from the duodenojejunal junction to the umbilicus, at the level of L3-L4 (plantar surface of the left foot).',
          'Root of the mesentery: a line from the ileocaecal valve to the umbilicus (plantar surface of the right foot).',
        ]},
        { type: 'figure', src: '/chapter-14/en/figure-14-22.png', caption: 'Root of the mesentery (between the duodenojejunal junction and the umbilicus)', alt: 'Reflex zone of the root of the mesentery — jejunum side', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/en/figure-14-23.png', caption: 'Root of the mesentery (between the ileocaecal valve and the umbilicus)', alt: 'Reflex zone of the root of the mesentery — ileum side', orientation: 'portrait' },

        { type: 'reflexAtlas' },

        { type: 'sub', text: '3. Limbic system' },
        { type: 'lead', label: 'Limbic brain — small intestine balance', text: 'listening-induction: one thumb on the small intestine, the other thumb on the limbic brain.' },
        { type: 'figure', src: '/chapter-14/en/figure-14-28.png', caption: 'Viscero-emotional balance technique — small intestine', alt: 'Viscero-emotional balance — small intestine and limbic brain', orientation: 'landscape' },
      ],
    },
    {
      id: 'relations',
      title: 'Viscerosomatic and Emotional Relations',
      blocks: [
        { type: 'sub', text: 'Viscerosomatic relations' },
        { type: 'bullets', items: [
          'Vertebral fixations from Th10 to Th12 and their corresponding ribs.',
          'L1 and L2.',
        ]},

        { type: 'sub', text: 'Viscero-emotional relations' },
        { type: 'para', text: 'The abdomen, with its range of pain and digestive disorders, may constitute an important site for the somatic expression of emotional tension. Such tension may promote sympathetic hyperactivity at the expense of vagal activity.' },
        { type: 'para', text: 'Emotionally, it is difficult to draw a clear distinction between the small intestine and the colon. In the clinical setting, the mucosa is viewed as both a receiver and an emitter of emotions. Because the intestine is highly hormone-dependent, it is presented here as an organ particularly involved in long-term somatisation. Fibromyalgia and spasmophilia are encountered more often in women, because of hormonal and intestinal interdependence.' },
        { type: 'para', text: 'The "intestinal" personality profile may be associated with morning fatigue, low back pain, knee and foot pain including hallux valgus, as well as ridged and brittle nails. Such individuals may feel ill at ease in their body, easily upset or irritable, with a mood that tends to improve as the day progresses.' },
        { type: 'para', text: 'The "intestinal" profile is associated with a strong need for security. Such individuals may be overprotective toward loved ones and tend to remain attached to routines and stable habits. They may also show marked meticulousness in their environment. At times, apparent self-confidence may conceal underlying anxiety. They may be hypochondriacal and loquacious, sometimes with a degree of theatricality. Once an idea is fixed, they may be obstinate. They are often generous and sensitive, although their mood may be changeable.' },

        { type: 'sub', text: 'Advice' },
        { type: 'para', text: 'The small intestine may reflect emotional and psychological tension. Intestinal spasms may contribute to lumbar spinal fixations. A varied, balanced diet should be favoured, without excess carbohydrates or animal proteins. Sports activity should be avoided during digestion.' },
      ],
    },
  ],
  slides: {
    url: '/chapter-14/Chapter14  slides de synthese EN.pdf',
    label: 'Slides',
    description: 'Visual summary of the chapter — anatomy, physiology and R.O.P. reflex zones of the small intestine.',
  },
  clinicalCase: {
    src: '/chapter-14/Chapter14 Cas Clinique EN.png',
    caption: 'Clinical case — Chapter 14',
    alt: 'Clinical case: small intestine in R.O.P.',
  },
}

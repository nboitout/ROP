// Chapter 4 content — English (draft, part 1)
// Source: public/chapter-4/Chapitre 4  Système nerveux autonome - part1 EN.docx (Guy Boitout)
// Admin-only draft. Section IDs mirror content/chapter4.fr.ts.
// Internal illustrations use the -EN figure set (figures 4.5 and 4.6 reuse the
// French diagrams, which are absent from the English source document).

import type { Chapter } from './types'

export const chapter4En: Chapter = {
  slug: "chapter-4",
  number: "4",
  title: "Autonomic Nervous System",
  sections: [
    {
      id: "presentation",
      title: "Presentation",
      blocks: [
        { type: "sub", text: "Two systems: Parasympathetic and Sympathetic" },
        { type: "para", text: "In Chapter 1, General Principles, we emphasized the importance of visceral mobility. This mobility depends largely on the proper functioning of the two components of the autonomic nervous system (ANS): the parasympathetic and sympathetic systems." },
        { type: "figure", src: "/chapter-4/figure-4-1-EN.png", alt: "Parasympathetic and sympathetic systems", caption: "Figure 4.1 — Parasympathetic and sympathetic systems", orientation: "portrait" },
        { type: "para", text: "These two components of the ANS adjust the activity of the viscera and glands to the body's needs. Together with the hormonal and immune systems, they help maintain the balance of the internal environment, known as homeostasis." },
        { type: "para", text: "From both phylogenetic and ontogenetic perspectives, the ANS is the oldest part of the nervous system. (See Chapter 3, Central Nervous System)" },
        { type: "para", text: "Phylogeny studies the evolution of animal species, from the most primitive organisms to humans." },
        { type: "para", text: "Ontogeny studies human development, from fertilization to adulthood." },

        { type: "sub", text: "General physiology of the ANS" },
        { type: "leadBullets", items: [
          { label: "General function", text: "the ANS governs and harmonizes digestive, respiratory, cardiovascular, urinary, and glandular activity. It maintains tissue trophicity and contributes to cellular renewal." },
          { label: "Homeostasis", text: "the key concept underlying the role of the ANS is adaptation to stress, conflict, or emotional states, in order to preserve homeostasis: blood pH, blood glucose, biological constants, temperature, and so on. (See Chapter 5, Stress Mechanism)" },
        ]},

        { type: "sub", text: "Functional differences" },
        { type: "leadBullets", items: [
          { label: "Parasympathetic system", text: "this system manages everyday physiological regulation. It is described as endophylactic: it protects and restores the internal environment. It predominates at night and during sleep. It is anabolic and trophotropic, and it counterbalances the effects of the sympathetic system." },
          { label: "Sympathetic system", text: "this system is described as ergotropic: it prepares the body for action. It responds in particular to new and urgent situations, danger, stress, negative emotions, and pain. It predominates during the day and in states of wakefulness. It is considered catabolic and drives the well-known 'fight-or-flight' response." },
          { label: "Viscera", text: "they receive dual parasympathetic and sympathetic innervation." },
          { label: "Walls of the trunk, limbs, and skin", text: "these structures are modulated only by the sympathetic system." },
          { label: "Vascular system", text: "it is controlled almost exclusively by the sympathetic system. Its action is predominantly vasoconstrictive, although it also produces vasodilation in the arteries supplying the muscles of the somatic system, the coronary arteries of the myocardium, and the pulmonary arteries during intense physical or athletic activity." },
          { label: "Brain", text: "the brain has its own system for regulating blood circulation, because it cannot tolerate sudden changes in cerebral blood flow. This regulatory system is based on the carotid sinus and carotid body, located at the carotid bifurcation at the level of the C4 vertebra, and is jointly controlled by the superior cervical sympathetic ganglion, the glossopharyngeal nerve (IX), and the vagus nerve (X)." },
          { label: "Sexual erectile tissues (corpora cavernosa and corpus spongiosum)", text: "the blood supply required for erection of the erectile organs (penis and clitoris) is governed by the parasympathetic system. (See Chapter 21, Male and Female Erectile System)" },
          { label: "Anti-inflammatory action", text: "the sensory fibers of the vagus nerve, the main parasympathetic nerve, inform the hypothalamus about the state of internal functions. Depending on the level of stress, the hypothalamus activates the hypothalamic-pituitary-adrenal hormonal axis (Chapter 5, Stress Mechanism), leading to the release of anti-inflammatory corticosteroids." },
        ]},

        { type: "sub", text: "Parasympathetic-Sympathetic relationship" },
        { type: "para", text: "Although they perform different functions, the two systems have numerous anastomoses and connections at the level of the plexuses. These connections allow the parasympathetic and sympathetic systems to act in a complementary way, balancing and harmonizing visceroglandular functions." },
        { type: "para", text: "It is sometimes difficult to distinguish symptoms arising from one system from those arising from the other, because the two systems are so closely interwoven and interdependent." },
        { type: "rop", body: [
          "The ANS is one of the keys to our therapeutic action. In keeping with our principle of 'priority to the nerve', we target the ANS first in order to restore visceroglandular function. ANS imbalances most often occur upstream of visceroglandular dysfunctions. These dysfunctions are therefore consequences of a stress state in which the ANS has been unable to activate the adaptive-compensatory mechanisms required to restore equilibrium. (See Chapter 5, Stress Mechanism)",
        ]},
        { type: "leadBullets", items: [
          { label: "Relationship between the ANS and the hormonal system", text: "the ANS is closely connected to the hormonal system through the hypothalamus and pituitary gland, which are neuroendocrine glands combining neurological and hormonal functions." },
          { label: "Neurotransmitters", text: "the neurotransmitter of the parasympathetic system is acetylcholine. The neurotransmitters of the sympathetic system are acetylcholine for preganglionic neurons and norepinephrine for postganglionic neurons." },
        ]},

        { type: "sub", text: "Relationship between the autonomic nervous system (ANS) and the somatic nervous system (SNS)" },
        { type: "para", text: "Our book Réflexothérapie Occipito-Podale et système neuro-méningé, published by Elsevier Masson, was devoted to the nerves of the SNS — spinal and cranial nerves — and highlighted:" },
        { type: "bullets", items: [
          "the numerous anastomoses and connections between the nerves of the SNS and the ANS. Example: the vagus nerve and the first two cervical nerves.",
        ]},
        { type: "para", text: "The neurovegetative components of the cranial and spinal nerves:" },
        { type: "leadBullets", items: [
          { label: "Cranial nerves", text: "the oculomotor nerve (III), facial nerve (VII), and glossopharyngeal nerve (IX) provide parasympathetic innervation to the organs of the head. The trigeminal nerve (V) carries sympathetic fibers." },
          { label: "Spinal nerves", text: "sympathetic fibers form part of the spinal nerves. The median and sciatic nerves are rich in sympathetic fibers; their involvement explains vasomotor disorders (cyanosis) in the distal extremities of the hands and feet, decalcification (painful osteoporosis), and fibrosis of joint tissues (ankylosis)." },
        ]},

        { type: "sub", text: "Relationship between the ANS and sleep" },
        { type: "para", text: "Rumination and stress of all kinds tend to disturb sleep, reducing both its duration and, above all, its quality." },
        { type: "para", text: "Good sleep is important for neuroendocrine function and for maintaining proper ANS balance. Sleep deprivation predisposes the body to depression, premature aging, diabetes, obesity, and cardiovascular disease." },
        { type: "para", text: "Among neuroglial cells (see Chapter 3, Central Nervous System), astrocytes eliminate synapses between neurons when the brain is deprived of sleep." },
        { type: "para", text: "Therefore, there is little point in successfully rebalancing the ANS if the body and mind remain sleep deprived." },
      ],
    },
    {
      id: "organisation",
      title: "Organization of the ANS",
      blocks: [
        { type: "para", text: "The ANS has complex anatomy and highly nuanced physiology. A single book would not be sufficient to describe its anatomy in full." },
        { type: "para", text: "Like the somatic nervous system, the parasympathetic and sympathetic systems include motor, or efferent, functions (visceromotricity) and sensory, or afferent, functions (viscerosensitivity):" },
        { type: "leadBullets", items: [
          { label: "Visceromotricity", text: "the parasympathetic and sympathetic systems have long been presented primarily through the antagonistic effects of their motor actions on many organs. For example, the parasympathetic system slows the heart rate (bradycardia), whereas the sympathetic system accelerates it (tachycardia). The parasympathetic system stimulates contraction of the digestive tract walls (peristalsis) and secretion by mucous glands, whereas the sympathetic system inhibits them. In reality, these two systems are complementary." },
          { label: "Viscerosensitivity", text: "the function of the ANS is not limited to this motor duality; its sensory role is essential. The vagus nerve consists of 70% to 80% sensory fibers, continuously informing the brain about the activity of our viscera and glands. Before it is a visceromotor nerve, the vagus nerve is a viscerosensory nerve." },
          { label: "Enteric nervous system (ENS)", text: "in addition to the parasympathetic and sympathetic components of the ANS, a third component must be added: the enteric nervous system (ENS), which governs the intestine autonomously. It is our well-known 'second brain', operating on autopilot under physiological conditions without relying on the parasympathetic or sympathetic systems. These systems take control only when intestinal dysfunctions appear. (See Chapter 9, Enteric Nervous System)" },
        ]},
      ],
    },
    {
      id: "parasympathique-visceromoteur",
      title: "Visceromotor parasympathetic system",
      blocks: [
        { type: "para", text: "The cranial parasympathetic system is distinguished from the pelvic, or sacral, parasympathetic system." },
        { type: "figure", src: "/chapter-4/figure-4-2-EN.png", alt: "Cranial and pelvic parasympathetic systems", caption: "Figure 4.2 — Cranial and pelvic parasympathetic systems", orientation: "portrait" },

        { type: "sub", text: "Cranial parasympathetic system" },
        { type: "para", text: "It supplies two territories: the cephalic territory and the cervicothoracoabdominal territory." },
        { type: "leadBullets", items: [
          { label: "Cephalic territory", text: "also refer to the book Réflexothérapie et système neuro-méningé, Chapter 8, page 99, Elsevier Masson." },
          { label: "Origin", text: "brainstem. It provides parasympathetic innervation to the organs of the head." },
          { label: "Course", text: "the parasympathetic fibers follow the course of the following cranial nerves." },
          { label: "Oculomotor nerve (III)", text: "parasympathetic innervation of the pupillary sphincter muscle (miosis) and the ciliary muscles, which increase the curvature of the lens during accommodation for near vision." },
          { label: "Facial nerve (VII)", text: "parasympathetic innervation of the lacrimal glands (tears), the submandibular and sublingual salivary glands (continuous secretion), and the mucous glands of the nose, paranasal sinuses, palate, and soft palate." },
          { label: "Glossopharyngeal nerve (IX)", text: "its origin lies in the medulla oblongata, located at the foramen magnum. It provides parasympathetic innervation for salivary secretion by the parotid gland during mastication and, together with the vagus nerve (X), contributes to the regulation of arterial pressure (hypotension) and slowing of the heart rate (bradycardia) at the level of the carotid sinus." },
          { label: "Termination", text: "pre-visceral plexuses of the organs of the head. Cranial parasympathetic fibers, together with sympathetic fibers arising from the cervical ganglia and the laterovertebral thoracic ganglia from C8 to T2 or T3, form the pre-visceral plexuses of the organs of the head." },
          { label: "Ciliary ganglion", text: "located in the orbital cavity and associated with the oculomotor nerve (III), it controls the ciliary body (accommodation for near vision) and the pupillary constrictor muscle (accommodation to light)." },
          { label: "Pterygopalatine ganglion", text: "located in the pterygopalatine fossa, deep within the infratemporal fossa — a crossroads of the main cranial cavities — it is associated with the maxillary nerve (V2), just below the foramen rotundum, beneath the middle cranial fossa. It controls lacrimal, nasal mucosal, and oral secretions." },
          { label: "Submandibular and sublingual ganglia", text: "located in the floor of the mouth and associated with the mandibular nerve (V3), they control submandibular and sublingual salivary secretions." },
          { label: "Otic ganglion", text: "located in the infratemporal fossa and associated with the mandibular nerve (V3), just below the foramen ovale, it controls parotid salivary secretion." },
        ]},
        { type: "lead", label: "Plantar reflex zones", text: "plantar surface of the toes (base of the skull)." },
        { type: "figure", src: "/chapter-4/figure-4-3-EN.png", alt: "Cephalic territory of the parasympathetic system and perivisceral plexuses of the organs of the head", caption: "Figure 4.3 — Cephalic territory of the parasympathetic system and perivisceral plexuses of the organs of the head (yellow)", orientation: "landscape" },
        { type: "leadBullets", items: [
          { label: "Brainstem", text: "medial border of the distal phalanx of the hallux." },
          { label: "Nerves III, VII, and IX (foramina of the skull base)", text: "phalanges of the four lateral toes. (Cranial nerves and ganglia: see Réflexothérapie occipito-podale et système neuro-méningé, Chapter 8)" },
          { label: "Nerve III (superior orbital fissure)", text: "medial junction between the diaphysis and head of the middle phalanx of the 2nd toe." },
          { label: "Ciliary ganglion", text: "medial junction between the diaphysis and base of the distal phalanx of the 2nd toe." },
          { label: "Maxillary nerve (foramen rotundum)", text: "lateral diaphysis of the middle phalanx of the 2nd toe." },
          { label: "Pterygoid ganglion", text: "medial part of the diaphysis of the middle phalanx of the 2nd toe." },
          { label: "Mandibular nerve (foramen ovale)", text: "lateral diaphysis of the middle phalanx of the 3rd toe." },
          { label: "Submandibular and sublingual ganglia (floor of the mouth)", text: "retrocapital portion of the distal phalanx of the toes." },
          { label: "Otic ganglion", text: "medial part of the diaphysis of the middle phalanx of the 3rd toe." },
        ]},
        { type: "figure", src: "/chapter-4/figure-4-4-EN.png", alt: "Brainstem reflex zone — palpation between the two thumbs", caption: "Figure 4.4 — Brainstem (between the two thumbs)", orientation: "portrait" },

        { type: "sub", text: "Cervicothoracoabdominal territory" },
        { type: "lead", label: "Vagus nerve (X)", text: "it provides parasympathetic innervation to the cervicothoracoabdominal organs." },
        { type: "para", text: "Here we address only the neurovegetative function of the vagus nerve. Its somatic function is discussed in the book Réflexothérapie occipito-podale et système neuro-méningé, published by Elsevier Masson." },
        { type: "figure", src: "/chapter-4/figure-4-5-EN.png", alt: "Origin of the vagus nerve — dorsal and ambiguus nuclei", caption: "Figure 4.5 — Origin of the vagus nerve", orientation: "landscape" },
        { type: "leadBullets", items: [
          { label: "Origin", text: "the motor cells originate in the dorsal nucleus and the ambiguus, or ventral, nucleus, located in the medulla oblongata at the level of the foramen magnum. They are connected to the hypothalamus, the olfactory system, the limbic system, the glossopharyngeal nerve (IX), and the accessory nerve (XI)." },
          { label: "Dorsal nucleus", text: "neurons originating in the dorsal nucleus consist of unmyelinated fibers, with slow conduction of nerve impulses. They primarily innervate subdiaphragmatic organs." },
          { label: "Ambiguus or ventral nucleus", text: "neurons originating in the ventral nucleus consist of myelinated fibers, with rapid conduction of nerve impulses. They primarily innervate supradiaphragmatic organs:" },
        ]},
        { type: "bullets", items: [
          "the larynx and pharynx;",
          "the esophagus, where they propel the food bolus toward the stomach;",
          "the heart: the atria (formerly auricles), located at the base of the heart, are predominantly under vagal control. The nucleus ambiguus controls cardiac activity, not only heart rate (bradycardia) but above all heart-rate variability (HRV), enabling the heart to adapt to stress mechanisms (See Chapter 6, Polyvagal Theory);",
          "the lungs, where they produce bronchoconstriction and increase mucosal secretion.",
        ]},
        { type: "rop", body: [
          "Vagal hyperactivity of neurons originating in the dorsal nucleus is responsible for gastroduodenal ulcers, colitis, asthma attacks, apnea, and bradycardia.",
        ]},
        { type: "lead", label: "Cranial course — jugular foramen", text: "the vagus nerve exits the skull through the jugular foramen together with the glossopharyngeal nerve (IX), accessory nerve (XI), internal jugular vein, and posterior meningeal artery." },
        { type: "para", text: "At this level, it has two ganglia: the superior ganglion, located within the jugular foramen, and the inferior, or plexiform, ganglion, located immediately below it. The cell bodies of the sensory neurons of the vagus nerve originate in the inferior ganglion." },
        { type: "figure", src: "/chapter-4/figure-4-6-EN.png", alt: "Jugular foramen — exit of the vagus nerve", caption: "Figure 4.6 — Jugular foramen", orientation: "landscape" },
        { type: "lead", label: "Plantar reflex zones", text: "" },
        { type: "leadBullets", items: [
          { label: "Medulla oblongata", text: "medial surface of the interphalangeal joint of the hallux." },
          { label: "Jugular foramen, superior and inferior ganglia", text: "proximal interphalangeal joint of the 4th and 5th toes, on the lateral side of the 4th toe and the medial side of the 5th toe." },
        ]},
        { type: "figure", src: "/chapter-4/figure-4-7-EN.png", alt: "Medulla oblongata reflex zone — right thumb", caption: "Figure 4.7 — Medulla oblongata (right thumb)", orientation: "portrait" },
        { type: "figure", src: "/chapter-4/figure-4-8-EN.png", alt: "Jugular foramen reflex zone", caption: "Figure 4.8 — Jugular foramen", orientation: "portrait" },
        { type: "lead", label: "Cervical level", text: "in the neck, the vagus nerve descends within the carotid sheath, then anastomoses with the superior and inferior cervical sympathetic ganglia." },
        { type: "figure", src: "/chapter-4/figure-4-9-EN.png", alt: "Transverse section of the neck — fasciae and cervical spaces", caption: "Figure 4.9 — Cervical level", orientation: "landscape" },
        { type: "lead", label: "Collateral branches", text: "" },
        { type: "leadBullets", items: [
          { label: "Superior laryngeal nerve", text: "it arises from the inferior ganglion. Its internal branch is neurovegetative and innervates the mucosa of the larynx, the dorsum of the tongue, the epiglottis, and the vocal cords. Its external branch is somatic and innervates the laryngeal muscles: this is the nerve of the voice." },
          { label: "Carotid sinus nerves", text: "the vagus nerve and glossopharyngeal nerve innervate the sinus, located at the carotid bifurcation at the level of C4." },
        ]},
        { type: "figure", src: "/chapter-4/figure-4-10-EN.png", alt: "Carotid sinus and carotid body", caption: "Figure 4.10 — Carotid sinus and carotid body", orientation: "landscape" },
        { type: "leadBullets", items: [
          { label: "Carotid sinus", text: "it is a baroreceptor that detects stretch in the carotid wall under the effect of arterial pressure, allowing pressure to be regulated according to the body's needs. Stimulation of the carotid sinus causes bradycardia and arterial hypotension, which may progress to syncope following trauma at this level." },
          { label: "Carotid body", text: "it is a chemoreceptor that measures blood O2 and CO2 levels. It regulates acid-base balance." },
        ]},
        { type: "rop", body: [
          "Contraindications: atheromatous plaques.",
          "Indications: tachycardia, cardiac dysrhythmia, hypertension, vagal syndrome.",
          "Vagal syndrome: this is characterized by vagotonia due to vagal overstimulation. Symptoms include drop attacks, vertigo, hypotension, brief absence episodes, and fainting. (See Chapter 6, Polyvagal Theory, Vasovagal Malaise)",
        ]},
      ],
    },
  ],
}

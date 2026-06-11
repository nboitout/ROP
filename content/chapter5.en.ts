// Chapter 5 content — English
// Source: Stress_Mechanism_ROP_Medical_English_Translation_Polished (Guy Boitout)
// Section IDs mirror content/chapter5.fr.ts. Internal illustrations remain the
// French source images until translated artwork is available.

import type { Chapter } from './types'

export type { Block, Section, Chapter } from './types'

export const chapter5En: Chapter = {
  slug: "chapter-5",
  number: "5",
  title: "Stress Mechanism",
  sections: [
    {
      id: "presentation",
      title: "Introduction",
      blocks: [
        { type: "para", text: "Stress is a word used constantly in modern societies. Competition, rivalry, and the pursuit of performance drive us to move ever faster, with the risk that, if we are not careful, stress may overwhelm us to the point of exhaustion." },
        { type: "para", text: "The modern concept of stress was developed by Walter Cannon (1871-1945), who helped formalize the concept of homeostasis, building on the work of Claude Bernard." },
        { type: "para", text: "Hans Selye (1907-1982) described the General Adaptation Syndrome (GAS), understood as the set of physiological, neurological, endocrine, and immune mechanisms mobilized by the body in response to a stressor." },
        { type: "para", text: "The limbic, or emotional, system was later added to these three systems, given the affective charge associated with the stress mechanism." },
      ],
    },
    {
      id: "definitions",
      title: "Definitions",
      blocks: [
        { type: "leadBullets", items: [
          { label: "Stress", text: "More precisely, stress is the response to a situation perceived as threatening. It sets in motion a series of reactions intended to protect the body from excessive deviation from homeostatic norms." },
          { label: "Homeostasis", text: "The body's ability to maintain the equilibrium of its internal environment: body temperature, blood pH, biological parameters, blood glucose, and so on." },
          { label: "Allostasis", text: "The body's adaptive capacity in response to environmental stressors, allowing it to maintain homeostasis in a changing context." },
        ]},
        { type: "para", text: "In other words, the function of the stress mechanism is to maintain stability — homeostasis — through change — allostasis." },
        { type: "para", text: "The stress mechanism, homeostasis, and allostasis are closely linked. By regulating internal functions, the autonomic nervous system (ANS) plays a central role in responding to stress or conflict, with the aim of preserving homeostasis. This is why this chapter focuses on the role of the ANS in the stress mechanism and on its relationships with the limbic brain and the cortex." },
        { type: "para", text: "The stress mechanism is a fundamental protective phenomenon of life, one to which all human beings are exposed and for which we are biologically prepared. In the short term, it is protective and aims to restore homeostasis. When stress becomes intense, prolonged, and repetitive, however, it carries an energetic cost. It may affect vitality and reduce adaptive capacity. The body may then progressively move toward functional disorders and, depending on the individual terrain, toward chronic or degenerative disease." },
      ],
    },
    {
      id: "stresseurs",
      title: "Stressors",
      blocks: [
        { type: "para", text: "In everyday language, stress is often confused with the stressor. The stressor, or stressful agent, is what triggers the stress mechanism." },
        { type: "lead", label: "Definition", text: "Stressors are stimuli that raise an individual's usual functional baseline and initiate the stress mechanism." },
        { type: "lead", label: "Negative stress", text: "This is called distress. It may manifest as sadness, a sense of failure, doubt, insecurity, fear, anger, and so on. It is accompanied by a neuroendocrine response involving cortisol, which may influence the three major systems involved in homeostasis: the nervous, hormonal, and immune systems." },
        { type: "para", text: "All systems may subsequently be affected, depending on individual genetic predispositions and lifestyle: digestive disorders, asthma, musculoskeletal disorders, infections, cardiovascular disease, anxiety, depression, autoimmune diseases, neurodegenerative diseases, cancer, and so on." },
        { type: "lead", label: "Positive stress", text: "This is called eustress. It may manifest as love, joy, enthusiasm, freedom, confidence, security, and so on. It is accompanied by the activation of other neuromediators, including adrenaline, which may support a favorable adaptive response in the short term." },
        { type: "figure", src: "/chapter-5/figure-5-1.jpeg", alt: "Diagram of the three major stressors: physical, emotional, and biochemical", caption: "Figure 5.1 — The three major stressors", orientation: "landscape" },
        { type: "lead", label: "Types of stressors", text: "Some stressors are easy to identify, especially physical and emotional stressors. By contrast, biochemical stressors often act silently and are therefore overlooked." },
        { type: "leadBullets", items: [
          { label: "Physical stressors", text: "Accidents, whiplash-type injuries, excessive physical or sporting activity leading to exhaustion or, conversely, insufficient activity, birth conditions, a frantic pace of life, lack of sleep, sensory overload — noise, smell, light — intense or chronic pain, aversion or nausea in response to food, air pollution, extreme climates, and so on." },
          { label: "Emotional, psychological, and social stressors", text: "These are among the stressors that may have a major impact on health: emotional breakups, family conflicts, separation, social and professional rejection, isolation, harassment, academic or professional failure. Among the most destructive stressors, emotionally and psychologically, are sexual abuse and assault, incest, and rape." },
          { label: "Biochemical stressors", text: "Nutritional imbalances and intolerances, dysbiosis — imbalance of the intestinal microbiota — parasitic infections, viral load, environmental exposures, heavy metals, endocrine disruptors, and so on may insidiously alter general health and contribute to its deterioration." },
        ]},
        { type: "lead", label: "Interpretation", text: "It is not only the nature of the stressor that matters, but also how it is interpreted by the person experiencing stress: in other words, the idea they form of the real or presumed threat. What matters is how the brain interprets stressors and reverberates them through the major systems involved in maintaining homeostasis." },
        { type: "lead", label: "Allostatic load", text: "As long as the individual's vitality can withstand the stress load — or allostatic load — the adaptive mechanism holds." },
        { type: "para", text: "When the intensity, duration, frequency, urgency, and unexpected nature of stressors accumulate, they may, over time, weaken the individual and have deleterious effects on health. The person's vulnerability to stressors increases. The body may then progressively move toward decompensation of the stress mechanisms." },
        { type: "lead", label: "Cumulative effects of stressors", text: "The three types of stressors — physical, emotional, and biochemical — interact with one another: emotional stress may influence the gastrointestinal tract and generate vertebral, lumbar, or cervical pain, affecting daily, professional, or sporting life. Chronic painful musculoskeletal dysfunctions, as encountered in fibromyalgia, may be accompanied by psychological changes such as anxiety or depression and may influence the body's biology. This trilogy of stressors may contribute to the onset of chronic disease, whose management benefits from being considered from a global health perspective." },
        { type: "rop", body: [
          "The stress mechanism lies upstream of disease. Depending on the individual's vulnerabilities — heredity, pathological history, and lifestyle — disease may develop through failure of the adaptive mechanisms. From this perspective, we become ill because we lose health, not the other way around.",
          "ROP fully integrates this view of health and disease: a symptom must be placed back within its context — the General Adaptation Syndrome.",
        ]},
        { type: "figure", src: "/chapter-5/figure-5-2.jpeg", alt: "Diagram of the cumulative effect of physical, emotional, and biochemical stressors", caption: "Figure 5.2 — Cumulative effect of stressors", orientation: "portrait" },
      ],
    },
    {
      id: "sga",
      title: "General Adaptation Syndrome (GAS)",
      blocks: [
        { type: "para", text: "This model, proposed by Hans Selye, explains the impact of stress on the body and the way the body attempts to respond to it. It evolves through four phases: alarm, recovery, adaptation-resistance, and exhaustion." },
        { type: "figure", src: "/chapter-5/figure-5-3.jpeg", alt: "Curve of the four phases of the General Adaptation Syndrome", caption: "Figure 5.3 — The four phases of the stress syndrome", orientation: "portrait" },

        { type: "sub", text: "Alarm phase" },
        { type: "para", text: "Keywords: immediate reaction to stressors, urgency, mobilization of energy resources, activation of the sympathetic nervous system." },
        { type: "para", text: "The three brains — reptilian, limbic, and cortex — are described here within the framework of the model used in this book." },
        { type: "lead", label: "The amygdala", text: "Alerted by a threat, whether real or imaginary, the amygdala activates the hypothalamus, which initiates the stress mechanism through two axes: first the neurological axis, then the hormonal axis." },
        { type: "para", text: "At the same time, the hippocampus and cortical circuits help modulate the emotional response before the information reaches the prefrontal cortex, where it is analyzed and brought into consciousness." },
        { type: "figure", src: "/chapter-5/figure-5-4.jpeg", alt: "Diagram of the neurological SAM axis and hormonal HPA axis", caption: "Figure 5.4 — Neurological SAM and hormonal HPA axes", orientation: "landscape" },
        { type: "lead", label: "Neurological axis", text: "In an emergency, the sympathetic response predominates. It is immediate. It occurs through hypothalamic activation, which stimulates the locus coeruleus, located in the pons of the brainstem. The locus coeruleus releases noradrenaline, which in turn activates the adrenal medulla. The adrenal medulla then secretes the emergency hormone: adrenaline. This is the sympatho-adreno-medullary axis — SAM. The sympathetic system, present throughout the body, induces a global response to threat or danger." },
        { type: "para", text: "The SAM axis accelerates heart rate and respiratory rate, increases metabolism and blood pressure, and promotes blood flow to the striated muscles. This allows the immediate response best adapted to survival: flight, fight, or freeze." },
        { type: "para", text: "At the same time, the sympathetic system heightens sensory activity — visual, auditory, and olfactory — in the face of danger. Activation of the sympathetic system effectively places functions that are not immediately vital for survival in the background, notably reproductive and digestive functions. This emergency neurological phase is short-lived." },
        { type: "para", text: "If the stressor quickly ceases or if the response is sufficient, the sympathetic system returns, through a feedback mechanism, to equilibrium or normotonia. Otherwise, the hypothalamus subsequently activates the hormonal hypothalamic-pituitary-adrenal axis — HPA." },
        { type: "lead", label: "Hormonal axis", text: "Under the influence of the hypothalamic hormone CRH, the anterior pituitary releases ACTH, which in turn stimulates the adrenal cortex. This hormonal cascade leads to the release of several hormones: cortisol, aldosterone, and DHEA. This is the HPA, or corticotropic, axis." },
        { type: "leadBullets", items: [
          { label: "Cortisol", text: "It contributes to increasing the availability of glucose, triglycerides, and cholesterol, and modulates the immune response." },
          { label: "Aldosterone", text: "It is involved in the renal reabsorption of water and certain minerals." },
          { label: "DHEA", text: "It is a precursor of steroid hormones — testosterone and progesterone — whose precise effects are still poorly understood: it is thought to have anti-aging and anti-inflammatory effects and to promote libido and erection." },
          { label: "Feedback", text: "A feedback mechanism acts on the anterior pituitary, hypothalamus, and hippocampus to limit the stress response once hormonal levels have returned toward equilibrium." },
        ]},
        { type: "lead", label: "Functional disorders", text: "During this alarm phase, symptoms are in principle reversible. This is the stage of functional disorders, in which anatomical integrity remains preserved. Dysfunction is interpreted here as a persistent imbalance between the parasympathetic and sympathetic systems, in favor of the sympathetic system." },

        { type: "sub", text: "Recovery phase" },
        { type: "para", text: "Keywords: fatigue, recovery, transient vulnerability." },
        { type: "para", text: "After the general mobilization of resources, the body needs, in a sense, to catch its breath. The individual feels tired and needs to rest. Adrenaline and cortisol decrease, and the stress response temporarily becomes less efficient. This phase of transient vulnerability may manifest as a temporary recurrence of joint or vertebral pain, increased intestinal and urinary elimination without pathological significance, and a greater predisposition to infections." },
        { type: "para", text: "Emotionally, memories and dreams may resurface and trigger tears without any apparent reason. This recovery phase is physiological, but it should not last longer than 72 hours." },
        { type: "rop", body: [
          "This transient vulnerability is often encountered after a first ROP session. These reactions are interpreted as beneficial, even positive. It is important to inform the patient about them in advance so that they do not become worried.",
          "In this approach, these reactions are interpreted in light of Hering's law, which states that the symptoms of a disease evolve toward healing when they move:",
          "From above downward • From within outward • From chronic toward acute • By passing again through earlier phases of the disease.",
          "This implies that vitality must be sufficient for the body to react in accordance with Hering's law. This is why any treatment must be appropriately dosed: neither too long, nor too intense, nor too frequent, so that the body has the possibility of restoring its adaptive capacities. In most cases, treatments spaced three to four weeks apart represent an appropriate rhythm.",
          "Our massage technique in ROP may be broken down into three stages: 1. tissue diagnosis, 2. stimulation of the zone, and 3. a period of non-intervention, allowing the process to unfold. It is consistent with the rule already stated by the founder of osteopathy, Dr. A. T. Still: ‘Feel it, touch it, and let it go.’",
        ]},

        { type: "sub", text: "Adaptation-resistance phase" },
        { type: "para", text: "Keywords: organization of defenses." },
        { type: "para", text: "This phase is characterized by the need to manage persistent stressors over the medium or long term. The sympathetic system remains active, although less intensely than during the alarm phase. The hormonal HPA axis supports the neurological SAM axis." },
        { type: "lead", label: "Neurological axis", text: "In this model, both the parasympathetic and sympathetic systems show signs of progressive exhaustion." },
        { type: "lead", label: "Hormonal axis", text: "Under the influence of the amygdala, modulated by the hippocampus, the hypothalamic-pituitary-adrenal axis may first show hormonal hyperstimulation and then hypostimulation." },
        { type: "leadBullets", items: [
          { label: "Adrenal glands", text: "The HPA axis supports cortisol production in order to maintain the availability of glucose, triglycerides, and cholesterol required by the allostatic load, with a possible increase in blood pressure." },
          { label: "Pancreas", text: "It secretes insulin to compensate for the elevation of blood glucose levels in conjunction with hepatic glycogenolysis. Over time, hyperinsulinemia and then insulin resistance may develop." },
          { label: "Thyroid", text: "Under the influence of pituitary TSH, the thyroid releases T3 and T4 hormones to support metabolism and ATP production required for muscle contraction. Hyperthyroid-type disturbances may then be observed: muscle wasting, asthenia, tachycardia, nervousness, tremor, heat intolerance, and profuse sweating." },
          { label: "Gonadal deficiency", text: "This results in reduced fertility, decreased libido, dysmenorrhea, early premenopause, or early andropause." },
        ]},
        { type: "lead", label: "Acute stress and chronic stress", text: "Acute stress is both stimulating and necessary; chronic stress is harmful." },
        { type: "lead", label: "Cortisol and chronic stress", text: "In the long term, cortisol may have deleterious effects on physical and mental health:" },
        { type: "bullets", items: [
          "Increased glucose, triglyceride, and cholesterol levels, with increased risk of diabetes, atherosclerosis, and arterial hypertension, potentially leading to cardiovascular disease.",
          "Muscle atrophy through protein catabolism.",
          "Osteoporosis.",
          "Alteration of certain immune functions.",
          "Dysbiosis and alteration of the intestinal barrier, sometimes linked to autoimmune phenomena.",
          "Slowing of certain tissue-repair processes.",
          "Disruption of the circadian cycle with nocturnal sleep disorders.",
          "Possible consequences for mental health.",
        ]},
        { type: "lead", label: "Functional disorders", text: "Gradually, under chronic stress, still-reversible physiological dysregulations set in, according to individual vulnerability, heredity, physical or emotional traumatic history, lifestyle, and osteopathic dysfunctions. Joint pain may appear at a threshold at which it would not normally be perceived — allodynia." },
        { type: "lead", label: "Hormonal hypostimulation", text: "This may follow a phase of hormonal hyperstimulation." },
        { type: "leadBullets", items: [
          { label: "Hypothyroidism", text: "Symptoms may include cold intolerance, lack of energy due to reduced metabolism, weight gain, anxiety, and depression." },
          { label: "Hypoinsulinemia", text: "After a period of cellular resistance linked to hyperinsulinemia, hypoglycemia or prediabetes may occur, potentially progressing toward type 2 diabetes requiring insulin." },
          { label: "Hypocortisolism", text: "Cortisol deficiency may be accompanied by orthostatic hypotension and dizziness when moving from lying down to standing." },
        ]},
        { type: "lead", label: "Chronic pathologies", text: "Gradually, the allostatic load that the body can tolerate decreases. The body then shifts from functional imbalance toward pathologies that evolve toward chronicity. Anatomical integrity is no longer assured, and symptoms become progressively less reversible:" },
        { type: "leadBullets", items: [
          { label: "Immune system", text: "Allergies, asthma, food intolerances." },
          { label: "Digestive system", text: "Visceral hypersensitivity, digestive or bowel-transit disorders — constipation or diarrhea — gastroduodenal ulceration, gastroesophageal reflux, dysbiosis, functional bowel disorders, irritable bowel syndrome." },
          { label: "Emotional response", text: "Via the locus coeruleus, the hypothalamus overstimulates the limbic brain, particularly the amygdala, as well as the cognitive brain. This generates fear and anxiety reactions. Individuals become sensitive to ordinary events of everyday life, creating multiple false alarms that further increase fear and anxiety. Dyspnea, chest tightness, and the sensation that one's breath is cut off or that one is out of breath are respiratory alterations found in anxiety and depression." },
        ]},
        { type: "rop", body: [
          "During the adaptation-compensation stage, ROP, like other non-pharmacological therapies, has a legitimate place in addressing reversible functional disorders. However, as conditions evolve toward chronicity and partial or total irreversibility, functional therapies alone are no longer sufficient; pharmacological medicine then becomes necessary, while functional approaches may remain useful as supportive care.",
          "Functional therapies may nevertheless be integrated into medical treatment as supportive approaches, hence the current term integrative therapies. Within the framework of ROP, the aim is then to stimulate the emunctory organs — that is, the organs involved in elimination — in the context of long-term medication use, while also supporting vital capacities in order to preserve health as much as possible in the fight against disease.",
        ]},

        { type: "sub", text: "Exhaustion phase" },
        { type: "para", text: "Keywords: exhaustion, defeat, capitulation, renunciation." },
        { type: "para", text: "This phase is characterized by decompensation: depending on individual vulnerability, the systems shift toward exhaustion and, ultimately, toward end-of-life processes." },
        { type: "lead", label: "Neurological axis", text: "In this model, the SAM and HPA axes no longer function properly, and neurodegenerative diseases may appear: Parkinson's disease, multiple sclerosis, Charcot disease, Alzheimer's disease, and so on." },
        { type: "lead", label: "Hormonal axis", text: "Hypothyroidism, adrenal insufficiency, insulin-dependent diabetes." },
        { type: "lead", label: "Chronic pathologies", text: "" },
        { type: "leadBullets", items: [
          { label: "Immune system", text: "Infectious and autoimmune diseases, inflammation." },
          { label: "Musculoskeletal system", text: "Osteoarthritis, arthritis, polyarthritis, fibromyalgia." },
          { label: "Cardiovascular system", text: "Stroke, myocardial infarction, arteriopathy." },
          { label: "Limbic system", text: "Depression. Atrophy of the hippocampus may be accompanied by memory loss and disorientation, as in Alzheimer's disease. Astrocytes of the glial substance then participate in the pathological process. Dendritic connections between neurons may be altered. This corresponds to neuronal cell death in the hippocampus and progression toward Alzheimer's disease." },
          { label: "Cancers", text: "" },
        ]},
        { type: "rop", body: [
          "At this stage, functional therapies no longer have a curative aim of their own. They can only provide psychological and supportive care.",
        ]},
      ],
    },
    {
      id: "rop-stress",
      title: "ROP of the Stress Mechanism",
      blocks: [
        { type: "sub", text: "Occipital zones" },
        { type: "lead", label: "General Adaptation Syndrome — GAS", text: "" },
        { type: "bullets", items: [
          "Limbic system, diencephalon, brainstem, pituitary gland, adrenal glands (HPA axis).",
          "Cranial nerves: trigeminal nerve V, vagus nerve X, hypoglossal nerve XII, C2 and C3.",
          "Vagus nerve X: foramen magnum, jugular foramen, visceral compartment of the neck, cardiopulmonary plexus, esophageal hiatus, celiac plexus.",
          "Spinal column: sympathetic systems C8 to L2 and pelvic parasympathetic system S2 to S4.",
          "Phrenic nerve: C3-C4-C5 and Sédillot's triangle.",
        ]},
        { type: "lead", label: "Locoregional syndrome", text: "Local mechanical compression of the somatic or autonomic nervous system, with secondary general repercussions." },
        { type: "leadBullets", items: [
          { label: "1st phase — irritation", text: "Local irritation by entrapment of a nerve; for example, traumatic compression of the inferior cervical ganglion due to blockage of C7/T1/1st rib. Consequence: sympathetic facilitation of the territory influenced by the inferior cervical ganglion." },
          { label: "2nd phase — inhibition", text: "If the compression is not relieved, the compressed nerve is considered inhibited. The compensatory nervous system is then released, resulting, in the example given, in a parasympathetic syndrome due to inhibition of the sympathetic system." },
        ]},
        { type: "figure", src: "/chapter-5/figure-5-5.jpeg", alt: "Diagram of the ROP of the stress mechanism", caption: "Figure 5.5 — ROP of the stress mechanism", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-13.png", alt: "Cranial and cervical territories of the Vagus Nerve X (in yellow)", caption: "Figure 5.13 — Cranial and cervical territories of the Vagus Nerve X (yellow)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-14.png", alt: "Vagus Nerve X in the medulla oblongata — right thumb on the interphalangeal joint of the big toe", caption: "Figure 5.14 — Vagus Nerve X in the medulla oblongata (right thumb on the interphalangeal joint of the big toe)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-15.png", alt: "Vagus Nerve X in the jugular foramen — left thumb on the proximal interphalangeal joint of the 4th and 5th toes", caption: "Figure 5.15 — Vagus Nerve X in the jugular foramen (left thumb on the proximal interphalangeal joint of the 4th and 5th toes)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-16.png", alt: "Left abdominal territory of the Vagus Nerve X (in yellow)", caption: "Figure 5.16 — Left abdominal territory of the Vagus Nerve X (yellow)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-17.png", alt: "Oesophageal hiatus and cardia", caption: "Figure 5.17 — Oesophageal hiatus and cardia", orientation: "portrait" },
      ],
    },
  ],
  revisionSheet: {
    src: "/chapter-5/fiche-revision.png",
    alt: "Revision sheet — Chapter 5, Stress mechanism",
    caption: "Revision sheet — Chapter 5 · Stress mechanism",
  },
  clinicalCase: {
    src: "/chapter-5/cas-clinique.png",
    alt: "Clinical case — Fibromyalgia · Chapter 5",
    caption: "Clinical case · Fibromyalgia — Chapter 5",
  },
  slides: {
    url: "/chapter-5/Chapter5 Slides EN.pdf",
    label: "Slides",
    description: "Visual summary of the chapter — stress mechanism, GAS, and ROP interventions.",
  },
}

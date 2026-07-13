// Chapter 5 content — English
// Source: Chapter5 Stress_Mechanism_ROP_EN_fluency_revised.docx (Guy Boitout)
// Revised medical-English fluency pass. Section IDs and block structure mirror
// content/chapter5.fr.ts (the synchronized-reading slide anchors depend on it).
// Internal illustrations remain the French source images until translated
// artwork is available. Print-only cross-references (figure/chapter/page) are
// omitted: the web edition shows figures inline and has no page numbers.

import type { Chapter } from './types'

export type { Block, Section, Chapter } from './types'

export const chapter5En: Chapter = {
  slug: "chapter-5",
  number: "5",
  title: "Stress Mechanism",
  sections: [
    {
      id: "presentation",
      title: "Presentation",
      blocks: [
        { type: "para", text: "Stress is a term used constantly in modern society. Competition, rivalry and the pursuit of performance drive us to move ever faster, with the risk that, if we are not careful, stress may overwhelm us to the point of exhaustion." },
        { type: "para", text: "The modern concept of stress was developed by Walter Cannon (1871–1945), who helped formalise the concept of homeostasis in continuity with the work of Claude Bernard." },
        { type: "para", text: "Hans Selye (1907–1982) described the general adaptation syndrome (GAS), presented as the set of physiological, neurological, endocrine and immune mechanisms mobilised by the body in response to stressors." },
        { type: "para", text: "A fourth dimension was subsequently added to these three systems: the limbic, or emotional, system, because of the affective load associated with the stress response." },
      ],
    },
    {
      id: "definitions",
      title: "Definitions",
      blocks: [
        { type: "leadBullets", items: [
          { label: "Stress", text: "Stress, or more precisely the response to a situation perceived as threatening, triggers a cascade of reactions intended to protect the body from excessive deviation from homeostatic norms." },
          { label: "Homeostasis", text: "The body’s ability to maintain the equilibrium of its internal environment: body temperature, blood pH, blood biochemical constants, blood glucose and so on." },
          { label: "Allostasis", text: "The body’s adaptive capacity in response to different environmental stressors, allowing homeostasis to be maintained in a changing context." },
        ]},
        { type: "para", text: "In other words, the function of the stress response is to maintain stability (homeostasis) through change (allostasis)." },
        { type: "para", text: "The stress response, homeostasis and allostasis are closely linked. By regulating internal functions, the autonomic nervous system (ANS) is on the front line when responding to stress or conflict in order to preserve homeostasis. This chapter is therefore devoted to the role of the ANS in the stress response, and to its relationships with the limbic brain and the cortex." },
        { type: "para", text: "The stress response is a fundamental protective biological process to which we are all exposed and for which we are biologically prepared. In the short term, it is protective because it aims to restore homeostasis. When it becomes intense, prolonged and repetitive, it carries an energetic cost. It can affect vitality and reduce adaptive capacity. The body may then gradually move towards functional disorders and, depending on the individual’s constitutional vulnerabilities, towards chronic or degenerative disease." },
      ],
    },
    {
      id: "stresseurs",
      title: "Stressors",
      blocks: [
        { type: "para", text: "In everyday language, we tend to confuse stress with the stressor. The stressor, or stressful agent, is what triggers the stress response." },
        { type: "lead", label: "Definition", text: "Stressors are stimuli that push an individual beyond their usual baseline functioning and set the stress response in motion." },
        { type: "lead", label: "Negative stress", text: "This is called distress and can manifest as sadness, failure, doubt, insecurity, fear, anger and so on. It is accompanied by a neuroendocrine response involving cortisol, which can influence the three major systems involved in homeostasis: the nervous, endocrine and immune systems." },
        { type: "para", text: "All systems can subsequently be affected, depending on genetic predispositions and lifestyle: digestive disorders, asthma, musculoskeletal disorders, infections, cardiovascular disease, anxiety, depression, autoimmune disease, neurodegenerative disease, cancer and so on." },
        { type: "lead", label: "Positive stress", text: "This is called eustress and can manifest as love, joy, enthusiasm, freedom, confidence, security and so on. It is accompanied by the activation of other neuromediators, including adrenaline, which can support a favourable short-term adaptive response." },
        { type: "lead", label: "Types of stressors", text: "Some are easily identifiable, particularly physical and emotional stressors. Biochemical stressors, by contrast, very often act silently and are therefore not taken into account." },
        { type: "leadBullets", items: [
          { label: "Physical stressors", text: "Accidents, whiplash-type injuries, excessive physical or sporting activity leading to exhaustion or, conversely, insufficient activity, birth conditions, a frantic pace of life, lack of sleep, sensory aggressions — noise, odour, light — intense or chronic pain, nausea-related aversion to food, air pollution, extreme climates and so on." },
          { label: "Emotional, psychological and social stressors", text: "These are among the stressors that can have a major impact on health: affective break-ups, family conflicts, separations, social and professional rejection, isolation, harassment, and academic or professional failure. The most emotionally and psychologically destructive stressors are sexual abuse and assault, incest and rape." },
          { label: "Biochemical stressors", text: "Dietary imbalances and food intolerances, dysbiosis (imbalance of the intestinal microbiota), parasitic infections, viral load, environmental exposures, heavy metals, endocrine disruptors and so on can insidiously alter general health and contribute to health deterioration." },
        ]},
        { type: "lead", label: "Interpretation", text: "It is not only the nature of the stressor that matters, but also the way it is interpreted by the stressed subject — in other words, how the subject represents the real or presumed threat. What matters is how the brain interprets stressors and relays their effects to the major systems involved in maintaining homeostasis." },
        { type: "lead", label: "Allostatic load", text: "As long as the individual’s vitality can tolerate the stress load, or allostatic load, the adaptive mechanism holds." },
        { type: "para", text: "When the intensity, duration, frequency, urgency and unexpectedness of stressors accumulate, they eventually weaken the individual over time, with harmful effects on health. Vulnerability to stressors increases. The body may then gradually move towards decompensation of the stress-response mechanisms." },
        { type: "lead", label: "Cumulative effects of stressors", text: "The three types of stressors — physical, emotional and biochemical — interact with one another. Emotional stress can affect the gastrointestinal tract and cause spinal, lumbar or cervical pain, thereby affecting daily, professional or sporting life. Chronic painful musculoskeletal dysfunctions, as encountered in fibromyalgia, may be accompanied by psychological changes such as anxiety or depression and can influence the body’s biology. This trilogy of stressors may contribute to the development of chronic diseases, whose management benefits from being considered within a global-health perspective." },
        { type: "rop", body: [
          "The stress response lies upstream of disease. Depending on the individual’s vulnerabilities — linked to heredity, medical history and lifestyle — disease may develop through failure of adaptive mechanisms. From this perspective, illness arises from a loss of health, rather than the reverse.",
          "ROP fully integrates this view of health and disease: a symptom must be placed back within its broader context, namely the general adaptation syndrome.",
        ]},
      ],
    },
    {
      id: "sga",
      title: "General Adaptation Syndrome (GAS)",
      blocks: [
        { type: "para", text: "This model, proposed by Hans Selye, explains the impact of stress on the body and the way the body attempts to respond. It evolves through four phases: alarm, recovery, adaptation-resistance and exhaustion." },

        { type: "sub", text: "Alarm phase" },
        { type: "para", text: "Key words: immediate reaction to stressors, urgency, mobilisation of energy resources, activation of the sympathetic nervous system." },
        { type: "para", text: "The triune brain model — reptilian, limbic and cortical — is used here as a pedagogical framework within the model developed in this book." },
        { type: "lead", label: "The amygdala", text: "Alerted by a threat, whether real or imagined, the amygdala activates the hypothalamus, which initiates the stress response along two axes: first the neurological axis, then the hormonal axis." },
        { type: "para", text: "At the same time, the hippocampus and cortical circuits participate in modulating the emotional response before the information reaches the prefrontal cortex, where it is analysed and made conscious." },
        { type: "figure", src: "/chapter-5/figure-5-4.jpeg", alt: "Diagram of the neurological SAM axis and hormonal HPA axis", caption: "Figure 5.4 — Neurological SAM and hormonal HPA axes", orientation: "landscape" },
        { type: "lead", label: "Neurological axis", text: "In an emergency, the sympathetic response predominates. It is immediate. It occurs through hypothalamic activation, which activates the locus coeruleus located in the pons of the brainstem. The locus coeruleus releases noradrenaline, which in turn activates the adrenal medulla, leading to secretion of the emergency hormone: adrenaline. This is the sympatho-adreno-medullary (SAM) axis. The sympathetic system, present throughout the body, induces a global response so that the body can react to a threat or danger." },
        { type: "para", text: "The SAM axis accelerates heart and respiratory rates, increases metabolism and raises blood pressure in order to increase blood supply to the skeletal muscles, enabling the immediate survival response best suited to the situation: flight, fight or freeze." },
        { type: "para", text: "At the same time, the sympathetic system heightens sensory activity — visual, auditory and olfactory — in the face of danger. Activation of the sympathetic system temporarily downregulates non-essential functions, particularly those of the gonads and the digestive system. This emergency neurological phase is short-lived." },
        { type: "para", text: "If the stressful agent ceases rapidly, or if the response is sufficient, the sympathetic system returns, through a feedback mechanism, to equilibrium or normotonia. Otherwise, in a second step, the hypothalamus activates the hormonal hypothalamo-pituitary-adrenal (HPA) axis." },
        { type: "lead", label: "Hormonal axis", text: "Under the action of the hypothalamic hormone CRH, the anterior pituitary releases ACTH, which in turn stimulates the adrenal cortex. This hormonal cascade releases several hormones: cortisol, aldosterone and DHEA. This is the HPA, or corticotropic, axis." },
        { type: "leadBullets", items: [
          { label: "Cortisol", text: "It contributes to increasing the availability of glucose, triglycerides and cholesterol, and modulates the immune response." },
          { label: "Aldosterone", text: "It is involved in renal reabsorption of water and certain minerals." },
          { label: "DHEA", text: "It is a precursor of steroid hormones — testosterone and progesterone — whose precise effects remain incompletely understood. It is thought to have anti-ageing and anti-inflammatory actions and to support libido and erection." },
          { label: "Feedback", text: "A feedback mechanism acts on the anterior pituitary, hypothalamus and hippocampus to limit the stress response when hormone levels again become compatible with equilibrium." },
        ]},
        { type: "lead", label: "Functional disorders", text: "In this alarm phase, symptoms are in principle reversible. This is the stage of functional disorders, during which anatomical integrity remains preserved. Here, dysfunction is interpreted as a persistent imbalance between the parasympathetic and sympathetic systems, in favour of the sympathetic system." },

        { type: "sub", text: "Recovery phase" },
        { type: "para", text: "Key words: fatigue, recovery, transient vulnerability." },
        { type: "para", text: "Following this widespread mobilisation of resources, the body requires a recovery period. The individual feels tired and needs to rest. Adrenaline and cortisol levels fall, and the stress response temporarily becomes less efficient. This phase of transient vulnerability may manifest as a temporary flare-up of joint or spinal pain, increased bowel and urinary elimination without pathological significance, and increased susceptibility to infections." },
        { type: "para", text: "Emotionally, memories and dreams may resurface and trigger tears without any apparent reason. This recovery phase is physiological, but it should not exceed 72 hours." },
        { type: "rop", body: [
          "This transient vulnerability is often observed after a first ROP session. Within this approach, these reactions are interpreted as beneficial, or even positive. It is important to warn the patient about these possible reactions so that they do not become worried.",
          "In this model, these reactions are interpreted in the light of Hering’s law, which states that symptoms evolve towards healing when they move:",
          "• From top to bottom.",
          "• From the inside out.",
          "• From chronic towards acute.",
          "• By passing again through earlier phases of the disease.",
          "This presupposes that vitality is sufficient to react in accordance with Hering’s law. For this reason, any treatment must be appropriately dosed — neither too long, nor too intense, nor too frequent — so as to allow the body to restore its adaptive and health capacities and thereby better fight disease.",
          "Treatments spaced three to four weeks apart constitute, in most cases, an appropriate frequency.",
          "The ROP massage technique can be broken down into three stages:",
          "• Tissue diagnosis.",
          "• Stimulation of the zone.",
          "• A period of “doing nothing and allowing things to happen”.",
          "It is consistent with the rule already formulated by the founder of osteopathy, Dr A. T. Still: “Find it, fix it and leave it alone.”",
        ]},

        { type: "sub", text: "Adaptation-resistance phase" },
        { type: "para", text: "Key words: organisation of defences." },
        { type: "para", text: "This phase is characterised by the need to manage persistent stressors over the medium or long term. The sympathetic system remains involved, but is less active than in the alarm phase. The hormonal HPA axis supports the neurological SAM axis." },
        { type: "lead", label: "Neurological axis", text: "In this model, the parasympathetic and sympathetic systems show signs of progressive exhaustion." },
        { type: "lead", label: "Hormonal axis", text: "Under the influence of the amygdala, modulated by the hippocampus, the hypothalamo-pituitary-adrenal axis may show hormonal hyperstimulation and then hypostimulation." },
        { type: "leadBullets", items: [
          { label: "Adrenal glands", text: "The HPA axis supports cortisol production in order to maintain the availability of glucose, triglycerides and cholesterol required for the allostatic load, with a possible increase in blood pressure." },
          { label: "Pancreas", text: "It secretes insulin to compensate for the rise in blood glucose, together with hepatic glycogenolysis. Over time, hyperinsulinaemia and then insulin resistance may develop." },
          { label: "Thyroid", text: "Under the influence of pituitary TSH, the thyroid releases T3 and T4 hormones to support metabolism and ATP production required for muscle contraction. Hyperthyroid-type disturbances may then be observed: muscle wasting, asthenia, tachycardia, nervousness, tremor, heat intolerance and profuse sweating." },
          { label: "Gonadal deficiency", text: "This may manifest as reduced fertility, decreased libido, dysmenorrhoea, premature premenopause or early andropause." },
        ]},
        { type: "lead", label: "Acute stress and chronic stress", text: "Acute stress is both stimulating and necessary; chronic stress is harmful." },
        { type: "lead", label: "Cortisol and chronic stress", text: "In the long term, cortisol can have harmful effects on physical and mental health:" },
        { type: "bullets", items: [
          "Increased levels of glucose, triglycerides and cholesterol, with increased risk of diabetes, atherosclerosis and arterial hypertension, contributing to cardiovascular disease.",
          "Muscle atrophy through protein catabolism.",
          "Osteoporosis.",
          "Alteration of certain immune functions.",
          "Dysbiosis and alteration of the intestinal barrier, sometimes linked to autoimmune phenomena.",
          "Slowing of certain tissue-repair processes.",
          "Disruption of the circadian rhythm with nocturnal sleep disorders.",
          "Possible consequences for mental health.",
        ]},
        { type: "lead", label: "Functional disorders", text: "Gradually, under chronic stress, still-reversible physiological dysregulations develop according to individual vulnerability, heredity, physical or emotional traumatic history, lifestyle and osteopathic dysfunctions. Joint pain may appear at a threshold at which it would normally not be perceived (allodynia)." },
        { type: "lead", label: "Hormonal hypostimulation", text: "Hormonal hypostimulation may follow a phase of hormonal hyperstimulation." },
        { type: "leadBullets", items: [
          { label: "Hypothyroidism", text: "Symptoms may include cold intolerance, lack of energy due to reduced metabolism, weight gain, anxiety and depression." },
          { label: "Hypoinsulinaemia", text: "After a period of cellular resistance related to hyperinsulinaemia, hypoglycaemia or prediabetes may occur, potentially progressing towards insulin-dependent type 2 diabetes." },
          { label: "Hypocortisolism", text: "Cortisol deficiency may be accompanied by orthostatic hypotension and dizziness when moving from lying to standing." },
        ]},
        { type: "lead", label: "Chronic pathologies", text: "Progressively, the allostatic load that the body can tolerate becomes more fragile. The body then shifts from functional imbalance towards pathologies that evolve into chronicity. Anatomical integrity is no longer assured, and symptoms become increasingly less reversible through progressive disruption of neurological, hormonal, immune and emotional regulation:" },
        { type: "leadBullets", items: [
          { label: "Immune system", text: "Allergies, asthma, food intolerances." },
          { label: "Digestive system", text: "Visceral hypersensitivity, digestive or transit disorders (constipation or diarrhoea), gastroduodenal ulceration, gastro-oesophageal reflux, dysbiosis, functional colopathies, irritable bowel syndrome." },
          { label: "Emotional response", text: "Via the locus coeruleus, the hypothalamus overstimulates the limbic brain, particularly the amygdala, as well as the cognitive brain. This triggers fear and anxiety reactions. Individuals become hypersensitive to ordinary daily events, creating multiple false alarms that further compound fear and anxiety. Dyspnoea, chest tightness, a feeling of having one’s breath cut off or being short of breath are respiratory alterations found in anxiety and depression." },
        ]},
        { type: "rop", body: [
          "During the adaptation-compensation stage, ROP, like other non-pharmacological therapies, has a full role to play in addressing reversible functional disorders. However, as the condition progresses towards chronicity and partial or total irreversibility, functional therapies alone are no longer sufficient and medical/pharmacological treatment becomes necessary.",
          "Functional therapies may nevertheless be integrated into medical treatments as supportive care, hence the term now used: integrative therapies. In the context of ROP, the aim is then to stimulate the emunctory organs responsible for eliminating the long-term metabolic burden of necessary medications, while also supporting vital capacities in order to preserve health as much as possible in the fight against disease.",
        ]},

        { type: "sub", text: "Exhaustion phase" },
        { type: "para", text: "Key words: exhaustion, defeat, capitulation, renunciation." },
        { type: "para", text: "This phase is characterised by decompensation. Depending on individual vulnerability, systems shift towards exhaustion and, ultimately, end of life." },
        { type: "lead", label: "Neurological axis", text: "In this model, the SAM and HPA axes no longer function correctly, and neurodegenerative diseases may appear: Parkinson’s disease, multiple sclerosis, Charcot disease/amyotrophic lateral sclerosis, Alzheimer’s disease and so on." },
        { type: "lead", label: "Hormonal axis", text: "Hypothyroidism, adrenal insufficiency, insulin-dependent diabetes." },
        { type: "lead", label: "Chronic pathologies", text: "" },
        { type: "leadBullets", items: [
          { label: "Immune system", text: "Infectious and autoimmune diseases, inflammation." },
          { label: "Osteoarticular and musculoskeletal system", text: "Osteoarthritis, arthritis, polyarthritis, fibromyalgia." },
          { label: "Cardiovascular system", text: "Stroke, myocardial infarction, arterial disease." },
          { label: "Limbic system", text: "Depression. Hippocampal atrophy may be accompanied by memory loss and disorientation, as in Alzheimer’s disease. Astrocytes within glial tissue then participate in the pathological process. Dendritic connections between neurons may be altered. This corresponds to neuronal cell death in the hippocampus and progression towards Alzheimer’s disease." },
          { label: "Cancers", text: "" },
        ]},
        { type: "rop", body: [
          "At this stage, functional therapies no longer have a curative aim of their own. They can only serve as psychological support and supportive care.",
        ]},
      ],
    },
    {
      id: "rop-stress",
      title: "ROP of the Stress Mechanism",
      blocks: [
        { type: "sub", text: "Occipital zones" },
        { type: "lead", label: "General adaptation syndrome (GAS)", text: "" },
        { type: "bullets", items: [
          "Limbic system, diencephalon, brainstem, pituitary gland, adrenal glands (HPA axis).",
          "Cranial nerves: trigeminal nerve V, vagus nerve X, hypoglossal nerve XII, C2 and C3.",
          "Vagus nerve X: foramen magnum, jugular foramen, visceral compartment of the neck, cardiopulmonary plexus, oesophageal hiatus, coeliac plexus.",
          "Vertebral column: sympathetic system from C8 to L2 and pelvic parasympathetic system from S2 to S4.",
          "Phrenic nerve: C3–C4–C5 and Sédillot’s triangle.",
        ]},
        { type: "lead", label: "Locoregional syndrome", text: "Local mechanical compression of the somatic or autonomic nervous system, with secondary general repercussions." },
        { type: "leadBullets", items: [
          { label: "First phase — irritation", text: "Local irritation through nerve entrapment. Example: traumatic compression of the inferior cervical ganglion due to blockage at C7/T1/first rib. Consequence: sympathetic facilitation of the area influenced by the inferior cervical ganglion." },
          { label: "Second phase — inhibition", text: "If the compression is not released, the compressed nerve is considered inhibited. The compensatory nervous system is then released, resulting, in this example, in a parasympathetic syndrome through inhibition of the sympathetic system." },
        ]},
        { type: "figure", src: "/chapter-5/figure-5-14.png", alt: "Vagus Nerve X in the medulla oblongata — right thumb on the interphalangeal joint of the big toe", caption: "Figure 5.14 — Vagus Nerve X in the medulla oblongata (right thumb on the interphalangeal joint of the big toe)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-15.png", alt: "Vagus Nerve X in the jugular foramen — left thumb on the proximal interphalangeal joint of the 4th and 5th toes", caption: "Figure 5.15 — Vagus Nerve X in the jugular foramen (left thumb on the proximal interphalangeal joint of the 4th and 5th toes)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-17.png", alt: "Oesophageal hiatus and cardia", caption: "Figure 5.17 — Oesophageal hiatus and cardia", orientation: "portrait" },
      ],
    },
  ],
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

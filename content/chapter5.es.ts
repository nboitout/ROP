// Chapter 5 content — Spanish
// Source: Chapter5_Mecanismo_de_Estres_ROP_ES_fluency_revised_final.docx (Guy Boitout)
// Section IDs and block structure mirror content/chapter5.fr.ts. Internal
// illustrations remain the French source images until translated artwork is
// available; the revision sheet, clinical case and synthesis slides are omitted
// until Spanish versions exist. Print-only cross-references (figure/chapter/page)
// are dropped: the web edition shows figures inline and has no page numbers.

import type { Chapter } from './types'

export type { Block, Section, Chapter } from './types'

export const chapter5Es: Chapter = {
  slug: "chapter-5",
  number: "5",
  title: "Mecanismo del estrés",
  sections: [
    {
      id: "presentation",
      title: "Presentación",
      blocks: [
        { type: "para", text: "El estrés es un término utilizado constantemente en las sociedades modernas. La competición, la rivalidad y la búsqueda de rendimiento nos empujan a ir cada vez más deprisa, con el riesgo, si no prestamos atención, de que el estrés nos sobrepase hasta llevarnos al agotamiento." },
        { type: "para", text: "La noción moderna de estrés fue desarrollada por Walter Cannon (1871-1945), quien contribuyó a formalizar el concepto de homeostasis en continuidad con los trabajos de Claude Bernard." },
        { type: "para", text: "Hans Selye (1907-1982) describió el síndrome general de adaptación (SGA), entendido como el conjunto de mecanismos fisiológicos, neurológicos, endocrinos e inmunitarios que el cuerpo moviliza frente a los estresores." },
        { type: "para", text: "A estos tres sistemas se añadió posteriormente el sistema límbico, o sistema emocional, debido a la carga afectiva asociada a la respuesta de estrés." },
      ],
    },
    {
      id: "definitions",
      title: "Definiciones",
      blocks: [
        { type: "leadBullets", items: [
          { label: "Estrés", text: "El estrés —o, más precisamente, la respuesta ante una situación percibida como amenazante— desencadena una cascada de reacciones destinadas a proteger el cuerpo frente a una desviación excesiva de las normas homeostáticas." },
          { label: "Homeostasis", text: "Capacidad del cuerpo para mantener el equilibrio de su medio interno: temperatura corporal, pH sanguíneo, constantes biológicas sanguíneas, glucemia, etc." },
          { label: "Alostasis", text: "Capacidad de adaptación del cuerpo ante distintos estresores ambientales, con el fin de mantener la homeostasis en un contexto cambiante." },
        ]},
        { type: "para", text: "En otras palabras, la función de la respuesta de estrés es mantener la estabilidad (homeostasis) mediante el cambio (alostasis)." },
        { type: "para", text: "Respuesta de estrés, homeostasis y alostasis están estrechamente relacionadas. Al controlar las funciones internas, el sistema nervioso autónomo (SNA) desempeña un papel central en la respuesta a una situación de estrés o de conflicto, con el fin de preservar la homeostasis. Por ello, este capítulo se dedica al papel del SNA en la respuesta de estrés y a sus relaciones con el cerebro límbico y la corteza." },
        { type: "para", text: "La respuesta de estrés es un proceso biológico protector fundamental, al que todos estamos expuestos y para el que estamos biológicamente preparados. A corto plazo, resulta protectora porque favorece el retorno a la homeostasis. Cuando se vuelve intensa, duradera y repetitiva, conlleva un coste energético. Puede afectar a la vitalidad y acompañarse de una disminución de la capacidad adaptativa. El cuerpo puede entonces evolucionar progresivamente hacia trastornos funcionales y, según la constitución y las vulnerabilidades individuales, hacia enfermedades crónicas o degenerativas." },
      ],
    },
    {
      id: "stresseurs",
      title: "Estresores",
      blocks: [
        { type: "para", text: "En el lenguaje corriente tendemos a confundir el estrés con el estresor. El estresor, o agente estresante, es aquello que desencadena la respuesta de estrés." },
        { type: "lead", label: "Definición", text: "Los estresores son estímulos que sobrepasan el funcionamiento basal habitual de un individuo y ponen en marcha la respuesta de estrés." },
        { type: "lead", label: "Estrés negativo", text: "Se denomina distrés y puede manifestarse como tristeza, sensación de fracaso, duda, inseguridad, miedo, ira, etc. Se acompaña de una respuesta neuroendocrina en la que participa el cortisol, que puede influir en los tres grandes sistemas implicados en la homeostasis: el sistema nervioso, el sistema endocrino y el sistema inmunitario." },
        { type: "para", text: "Todos los sistemas pueden verse posteriormente afectados, según las predisposiciones genéticas individuales y el estilo de vida: trastornos digestivos, asma, afecciones del aparato locomotor, infecciones, enfermedades cardiovasculares, ansiedad, depresión, enfermedades autoinmunes, enfermedades neurodegenerativas, cáncer, etc." },
        { type: "lead", label: "Estrés positivo", text: "Se denomina eustrés y puede manifestarse como amor, alegría, entusiasmo, libertad, confianza, seguridad, etc. Se acompaña de la activación de otros neuromediadores, entre ellos la adrenalina, que pueden sostener una respuesta adaptativa favorable a corto plazo." },
        { type: "figure", src: "/chapter-5/figure-5-1.jpeg", alt: "Esquema de los tres grandes tipos de estresores: físicos, emocionales y bioquímicos", caption: "Figura 5.1 — Los tres grandes tipos de estresores", orientation: "landscape" },
        { type: "lead", label: "Tipos de estresores", text: "Algunos son fácilmente identificables, en particular los estresores físicos y emocionales. En cambio, los estresores bioquímicos actúan con frecuencia de forma silenciosa y, por tanto, no siempre se tienen en cuenta." },
        { type: "leadBullets", items: [
          { label: "Estresores físicos", text: "Accidentes, latigazos cervicales, exceso de actividad física o deportiva hasta el agotamiento o, por el contrario, la inactividad, condiciones del nacimiento, ritmo de vida frenético, falta de sueño, agresiones sensoriales —ruido, olor, luz, dolor intenso o crónico, repugnancia alimentaria asociada a náuseas—, contaminación atmosférica, climas extremos, etc." },
          { label: "Estresores emocionales, psicológicos y sociales", text: "Se encuentran entre los estresores que pueden tener un impacto importante sobre la salud: rupturas afectivas, conflictos familiares, separaciones, rechazo social o profesional, aislamiento, acoso, fracaso escolar o profesional. Los estresores emocional y psicológicamente más destructivos son los abusos y agresiones sexuales, el incesto y la violación." },
          { label: "Estresores bioquímicos", text: "Desequilibrios e intolerancias alimentarias, disbiosis (desequilibrio de la microbiota intestinal), parasitosis, carga viral, exposiciones ambientales, metales pesados, disruptores endocrinos, etc., pueden alterar de forma insidiosa el estado general y contribuir al deterioro de la salud." },
        ]},
        { type: "lead", label: "Interpretación", text: "No importa únicamente la naturaleza del estresor, sino también la forma en que lo interpreta la persona “estresada”, es decir, la representación que se hace de una amenaza real o supuesta. Lo decisivo es cómo el cerebro interpreta los estresores y transmite sus efectos a los grandes sistemas que participan en el mantenimiento de la homeostasis." },
        { type: "lead", label: "Carga alostática", text: "Mientras la vitalidad del individuo permite tolerar la carga de estrés, o carga alostática, el mecanismo de adaptación se mantiene." },
        { type: "para", text: "Cuando se acumulan la intensidad, la duración, la frecuencia, la urgencia y el carácter inesperado de los estresores, estos terminan, con el tiempo, por debilitar al individuo y producir efectos perjudiciales sobre la salud. La vulnerabilidad frente a los estresores aumenta. El cuerpo puede entonces evolucionar progresivamente hacia una descompensación de los mecanismos de estrés." },
        { type: "lead", label: "Efectos acumulativos de los estresores", text: "Los tres tipos de estresores —físicos, emocionales y bioquímicos— interactúan entre sí. El estrés emocional puede afectar al tracto gastrointestinal, provocar dolor espinal, lumbar o cervical y repercutir en la vida cotidiana, profesional o deportiva. Las disfunciones osteomusculoarticulares crónicas dolorosas, como las observadas en la fibromialgia, pueden acompañarse de cambios psicológicos como ansiedad o depresión e influir en los procesos biológicos de regulación. Esta tríada de estresores puede contribuir a la instauración de enfermedades crónicas, cuya atención resulta más pertinente cuando se aborda desde una perspectiva de salud global." },
        { type: "rop", body: [
          "La respuesta de estrés se sitúa aguas arriba de la enfermedad. Según las vulnerabilidades propias de cada individuo —relacionadas con la herencia, los antecedentes médicos y el estilo de vida—, la enfermedad puede desarrollarse por un fracaso de los mecanismos de adaptación. Desde esta perspectiva, la enfermedad surge de una pérdida de salud, y no a la inversa.",
          "La ROP integra plenamente esta visión de la salud y de la enfermedad: un síntoma debe reubicarse en su contexto, es decir, en el síndrome general de adaptación.",
        ]},
        { type: "figure", src: "/chapter-5/figure-5-2.jpeg", alt: "Esquema del efecto acumulativo de los estresores físicos, emocionales y bioquímicos", caption: "Figura 5.2 — Efecto acumulativo de los estresores", orientation: "portrait" },
      ],
    },
    {
      id: "sga",
      title: "Síndrome general de adaptación (SGA)",
      blocks: [
        { type: "para", text: "Este modelo, propuesto por Hans Selye, explica el impacto del estrés sobre el cuerpo y la manera en que este intenta responder. Evoluciona en cuatro fases: alarma, recuperación, adaptación-resistencia y agotamiento." },
        { type: "figure", src: "/chapter-5/figure-5-3.jpeg", alt: "Curva de las cuatro fases del síndrome general de adaptación", caption: "Figura 5.3 — Las cuatro fases del síndrome de estrés", orientation: "portrait" },

        { type: "sub", text: "Fase de alarma" },
        { type: "para", text: "Palabras clave: reacción inmediata ante los estresores, urgencia, movilización de recursos energéticos, activación del sistema simpático." },
        { type: "para", text: "Los tres cerebros —reptiliano, límbico y cortical— se presentan aquí en el marco del modelo pedagógico utilizado en esta obra." },
        { type: "lead", label: "La amígdala", text: "Alertada por una amenaza, ya sea un peligro real o imaginario, activa el hipotálamo, que inicia la respuesta de estrés a través de dos ejes: primero el eje neurológico y después el eje hormonal." },
        { type: "para", text: "Al mismo tiempo, el hipocampo y los circuitos corticales participan en la modulación de la respuesta emocional antes de que la información alcance la corteza prefrontal, donde se analiza y se hace consciente." },
        { type: "figure", src: "/chapter-5/figure-5-4.jpeg", alt: "Esquema del eje neurológico SAM y del eje hormonal HHS", caption: "Figura 5.4 — Eje neurológico SAM y eje hormonal HHS", orientation: "landscape" },
        { type: "lead", label: "Eje neurológico", text: "En una situación de urgencia predomina la respuesta simpática. Es inmediata. Se produce mediante la activación hipotalámica, que estimula el locus coeruleus, situado en el puente del tronco encefálico. Este libera noradrenalina, que a su vez activa la médula suprarrenal, la cual secreta la hormona de la urgencia: la adrenalina. Es el eje simpático-adreno-medular (SAM). El sistema simpático, presente en todo el cuerpo, induce una respuesta global para que el organismo pueda reaccionar ante una amenaza o un peligro." },
        { type: "para", text: "El eje SAM acelera la frecuencia cardíaca y respiratoria, aumenta el metabolismo y eleva la presión arterial para favorecer el aporte sanguíneo a los músculos esqueléticos, permitiendo la respuesta inmediata más adecuada para la supervivencia: huida, lucha o inmovilización." },
        { type: "para", text: "Al mismo tiempo, el sistema simpático estimula la actividad sensorial —visual, auditiva y olfativa— frente al peligro. La activación del sistema simpático relega temporalmente a un segundo plano las funciones no esenciales para la supervivencia inmediata, en particular las gónadas y el sistema digestivo. Esta fase neurológica de urgencia es de corta duración." },
        { type: "para", text: "Si el agente estresor cesa rápidamente o si la respuesta resulta suficiente, el sistema simpático vuelve, mediante un mecanismo de retrocontrol, a su equilibrio o normotonía. En caso contrario, en un segundo tiempo, el hipotálamo activa el eje hormonal hipotálamo-hipófiso-suprarrenal (HHS)." },
        { type: "lead", label: "Eje hormonal", text: "Bajo la acción de la hormona hipotalámica CRH, la adenohipófisis libera ACTH, que estimula a su vez la corteza suprarrenal. Esta cascada hormonal libera varias hormonas: cortisol, aldosterona y DHEA. Es el eje HHS, o eje corticotropo." },
        { type: "leadBullets", items: [
          { label: "Cortisol", text: "Contribuye a aumentar la disponibilidad de glucosa, triglicéridos y colesterol, y modula la respuesta inmunitaria." },
          { label: "Aldosterona", text: "Interviene en la reabsorción renal de agua y de determinados minerales." },
          { label: "DHEA", text: "Es un precursor de hormonas esteroideas —testosterona y progesterona— cuyos efectos precisos siguen siendo parcialmente desconocidos. Se le atribuyen posibles acciones antienvejecimiento y antiinflamatorias, así como un posible papel de apoyo a la libido y la erección." },
          { label: "Retroalimentación", text: "Un mecanismo de retrocontrol actúa sobre la adenohipófisis, el hipotálamo y el hipocampo para limitar la respuesta de estrés cuando los niveles hormonales vuelven a ser compatibles con el equilibrio." },
        ]},
        { type: "lead", label: "Trastornos funcionales", text: "En esta fase de alarma, los síntomas son en principio reversibles. Es el estadio de los trastornos funcionales, en el que se preserva la integridad anatómica. En este modelo, la disfunción se interpreta como un desequilibrio persistente entre los sistemas parasimpático y simpático, a favor del sistema simpático." },

        { type: "sub", text: "Fase de recuperación" },
        { type: "para", text: "Palabras clave: fatiga, recuperación, vulnerabilidad transitoria." },
        { type: "para", text: "Tras esta movilización general de recursos, el cuerpo necesita un período de recuperación. La persona se siente fatigada y experimenta la necesidad de descansar. Los niveles de adrenalina y cortisol disminuyen, y la respuesta de estrés se vuelve temporalmente menos eficaz. Esta fase de vulnerabilidad transitoria puede manifestarse por una recrudescencia pasajera de dolores articulares o espinales, un aumento de la eliminación intestinal y urinaria sin carácter patológico, así como una mayor predisposición a las infecciones." },
        { type: "para", text: "En el plano emocional, pueden reaparecer recuerdos y sueños y desencadenar lágrimas sin razón aparente. Esta fase de recuperación es fisiológica, pero no debería exceder las 72 horas." },
        { type: "rop", body: [
          "Esta vulnerabilidad transitoria se observa con frecuencia después de una primera sesión de ROP. En este enfoque, las reacciones se interpretan como saludables, incluso positivas. Es importante informar al paciente sobre estas reacciones para que no las viva como motivo de preocupación.",
          "En este enfoque, estas reacciones se interpretan a la luz de la ley de Hering, según la cual los síntomas evolucionan hacia la curación cuando progresan: de arriba abajo; de dentro hacia fuera; de lo crónico hacia lo agudo; pasando de nuevo por fases anteriores de la enfermedad.",
          "Esto presupone que la vitalidad sea suficiente para reaccionar en el sentido de la ley de Hering. Por ello, todo tratamiento debe dosificarse adecuadamente —ni demasiado largo, ni demasiado intenso, ni demasiado frecuente— para dejar al cuerpo la posibilidad de restaurar sus capacidades de adaptación y de salud, y así afrontar mejor la enfermedad.",
          "En la mayoría de los casos, un intervalo de tres a cuatro semanas entre tratamientos constituye una frecuencia adecuada.",
          "La técnica de masaje en ROP puede descomponerse en tres tiempos: 1. diagnóstico tisular, 2. estimulación de la zona, 3. tiempo de “no hacer nada y dejar actuar”. Se ajusta así a la regla formulada por el fundador de la osteopatía, el Dr. A. T. Still: “Find it, fix it and leave it alone”.",
        ]},

        { type: "sub", text: "Fase de adaptación-resistencia" },
        { type: "para", text: "Palabras clave: organización de las defensas." },
        { type: "para", text: "Esta fase se caracteriza por la necesidad de gestionar estresores persistentes a medio o largo plazo. El sistema simpático sigue implicado, pero es menos activo que en la fase de alarma. El eje hormonal HHS apoya al eje neurológico SAM." },
        { type: "lead", label: "Eje neurológico", text: "En este modelo, los sistemas parasimpático y simpático muestran signos de agotamiento progresivo." },
        { type: "lead", label: "Eje hormonal", text: "Bajo la influencia de la amígdala, modulada por el hipocampo, el eje hipotálamo-hipófiso-suprarrenal puede caracterizarse por una hiperestimulación hormonal y, posteriormente, una hipoestimulación." },
        { type: "leadBullets", items: [
          { label: "Suprarrenales", text: "El eje HHS sostiene la producción de cortisol para mantener la disponibilidad de glucosa, triglicéridos y colesterol necesaria para la carga alostática, con posible aumento de la presión arterial." },
          { label: "Páncreas", text: "Secreta insulina para compensar la elevación de la glucemia, junto con la glucogenólisis hepática. A largo plazo pueden instaurarse hiperinsulinemia y, posteriormente, resistencia a la insulina." },
          { label: "Tiroides", text: "Bajo la influencia de la TSH hipofisaria, la tiroides libera las hormonas T3 y T4 para sostener el metabolismo y la producción de ATP necesaria para la contracción muscular. Pueden observarse entonces alteraciones de tipo hipertiroideo: atrofia muscular, astenia, taquicardia, nerviosismo, temblor, intolerancia al calor y sudoración profusa." },
          { label: "Déficit gonadal", text: "Puede manifestarse por disminución de la fertilidad, descenso de la libido, dismenorrea, premenopausia precoz o andropausia precoz." },
        ]},
        { type: "lead", label: "Estrés agudo y estrés crónico", text: "El estrés agudo es a la vez estimulante y necesario; el estrés crónico es perjudicial." },
        { type: "lead", label: "Cortisol y estrés crónico", text: "A largo plazo, el cortisol puede tener efectos perjudiciales sobre la salud física y mental:" },
        { type: "bullets", items: [
          "Aumento de los niveles de glucosa, triglicéridos y colesterol, con incremento del riesgo de diabetes, aterosclerosis e hipertensión arterial, lo que contribuye a las enfermedades cardiovasculares.",
          "Atrofia muscular por catabolismo proteico.",
          "Osteoporosis.",
          "Alteración de determinadas funciones inmunitarias.",
          "Disbiosis y alteración de la barrera intestinal, a veces relacionadas con fenómenos autoinmunes.",
          "Enlentecimiento de determinados procesos de reparación tisular.",
          "Alteración del ritmo circadiano, con trastornos del sueño nocturno.",
          "Posibles consecuencias sobre la salud mental.",
        ]},
        { type: "lead", label: "Trastornos funcionales", text: "Bajo estrés crónico se instauran progresivamente desregulaciones fisiológicas todavía reversibles, según la vulnerabilidad individual, la herencia, los antecedentes traumáticos físicos o emocionales, el estilo de vida y las disfunciones osteopáticas. Pueden aparecer dolores articulares ante umbrales de estimulación que normalmente no deberían percibirse como dolorosos (alodinia)." },
        { type: "lead", label: "Hipoestimulación hormonal", text: "Puede suceder a una fase de hiperestimulación hormonal." },
        { type: "leadBullets", items: [
          { label: "Hipotiroidismo", text: "Los síntomas pueden incluir intolerancia al frío, falta de energía por disminución del metabolismo, aumento de peso, ansiedad y depresión." },
          { label: "Hipoinsulinemia", text: "Tras un período de resistencia celular asociado a la hiperinsulinemia, puede aparecer hipoglucemia o prediabetes, con posible evolución hacia una diabetes de tipo 2 insulinodependiente." },
          { label: "Hipocortisolismo", text: "El déficit de cortisol puede acompañarse de hipotensión ortostática y sensación de mareo al pasar de la posición acostada a la posición de pie." },
        ]},
        { type: "lead", label: "Patologías crónicas", text: "Progresivamente, disminuye la capacidad del cuerpo para tolerar la carga alostática. El organismo pasa entonces de un desequilibrio funcional a patologías que evolucionan hacia la cronicidad. La integridad anatómica deja de estar asegurada y los síntomas se vuelven cada vez menos reversibles por la alteración progresiva de las respuestas neurológica, hormonal, inmunitaria y emocional:" },
        { type: "leadBullets", items: [
          { label: "Sistema inmunitario", text: "Alergias, asma, intolerancias alimentarias." },
          { label: "Sistema digestivo", text: "Hipersensibilidad visceral, trastornos digestivos o del tránsito intestinal (estreñimiento o diarrea), ulceración gastroduodenal, reflujo gastroesofágico, disbiosis, colopatías funcionales, síndrome del intestino irritable." },
          { label: "Respuesta emocional", text: "A través del locus coeruleus, el hipotálamo sobreestimula el cerebro límbico, en particular la amígdala, así como el cerebro cognitivo. Esto desencadena reacciones de miedo y ansiedad. Las personas se vuelven hipersensibles a acontecimientos ordinarios de la vida cotidiana, lo que crea múltiples falsas alarmas que intensifican aún más el miedo y la ansiedad. Disnea, opresión torácica, sensación de falta de aire o de estar sin aliento son alteraciones respiratorias que se observan en la ansiedad y la depresión." },
        ]},
        { type: "rop", body: [
          "Durante el estadio de adaptación-compensación, la ROP, al igual que otras terapias no farmacológicas, tiene pleno sentido en el abordaje de los trastornos funcionales reversibles. Sin embargo, cuando el proceso evoluciona hacia la cronicidad y hacia una irreversibilidad parcial o total, las terapias funcionales por sí solas dejan de ser suficientes y la atención médica y farmacológica se vuelve necesaria.",
          "No obstante, las terapias funcionales pueden integrarse en los tratamientos médicos como apoyo; de ahí el término actualmente utilizado: terapias integrativas. En el marco de la ROP, el objetivo consiste entonces en estimular los órganos emuntorios responsables de eliminar la carga metabólica a largo plazo de los medicamentos necesarios, al tiempo que se sostienen las capacidades vitales, con el fin de preservar la salud en la mayor medida posible en la lucha contra la enfermedad.",
        ]},

        { type: "sub", text: "Fase de agotamiento" },
        { type: "para", text: "Palabras clave: agotamiento, derrota, capitulación, renuncia." },
        { type: "para", text: "Esta fase se caracteriza por la descompensación: según la vulnerabilidad individual, los sistemas basculan hacia el agotamiento y, finalmente, hacia el final de la vida." },
        { type: "lead", label: "Eje neurológico", text: "En este modelo, los ejes SAM y HHS dejan de funcionar correctamente y pueden aparecer enfermedades neurodegenerativas: enfermedad de Parkinson, esclerosis múltiple, enfermedad de Charcot / esclerosis lateral amiotrófica, enfermedad de Alzheimer, etc." },
        { type: "lead", label: "Eje hormonal", text: "Hipotiroidismo, insuficiencia suprarrenal, diabetes insulinodependiente." },
        { type: "lead", label: "Patologías crónicas", text: "" },
        { type: "leadBullets", items: [
          { label: "Sistema inmunitario", text: "Enfermedades infecciosas y autoinmunes, inflamación." },
          { label: "Sistema osteomusculoarticular", text: "Artrosis, artritis, poliartritis, fibromialgia." },
          { label: "Sistema cardiovascular", text: "Accidente cerebrovascular, infarto de miocardio, arteriopatía." },
          { label: "Sistema límbico", text: "Depresión. La atrofia del hipocampo puede acompañarse de pérdida de memoria y desorientación, como ocurre en la enfermedad de Alzheimer. Los astrocitos del tejido glial pueden participar entonces en el proceso patológico. Las conexiones dendríticas entre neuronas pueden verse alteradas. Este proceso corresponde a la muerte neuronal en el hipocampo y a la evolución hacia la enfermedad de Alzheimer." },
          { label: "Cánceres", text: "" },
        ]},
        { type: "rop", body: [
          "En este estadio, las terapias funcionales ya no tienen una finalidad curativa propia. Solo pueden desempeñar un papel de apoyo psicológico y acompañamiento.",
        ]},
      ],
    },
    {
      id: "rop-stress",
      title: "ROP del mecanismo del estrés",
      blocks: [
        { type: "sub", text: "Zonas occipitales" },
        { type: "lead", label: "Síndrome general de adaptación (SGA)", text: "" },
        { type: "bullets", items: [
          "Sistema límbico, diencéfalo, tronco encefálico, hipófisis, suprarrenales (eje HHS).",
          "Nervios craneales: nervio trigémino V, nervio vago X, nervio hipogloso XII, C2 y C3.",
          "Nervio vago X: foramen magno, foramen yugular, compartimento visceral del cuello, plexo cardiopulmonar, hiato esofágico, plexo celíaco.",
          "Columna vertebral: sistema simpático de C8 a L2 y sistema parasimpático pélvico de S2 a S4.",
          "Nervio frénico: C3-C4-C5 y triángulo de Sédillot.",
        ]},
        { type: "lead", label: "Síndrome locorregional", text: "Compresión mecánica local del sistema nervioso somático o autónomo, con repercusión secundaria general." },
        { type: "leadBullets", items: [
          { label: "Primera fase – irritación", text: "Irritación local por atrapamiento de un nervio; por ejemplo, compresión traumática del ganglio cervical inferior por bloqueo C7/T1/primera costilla. Consecuencia: facilitación simpática del territorio de influencia del ganglio cervical inferior." },
          { label: "Segunda fase – inhibición", text: "Si la compresión no se libera, el nervio comprimido se considera inhibido. El sistema nervioso compensador queda entonces liberado; en el ejemplo citado, ello da lugar a un síndrome parasimpático por inhibición del sistema simpático." },
        ]},
        { type: "figure", src: "/chapter-5/figure-5-14.png", alt: "Nervio vago X en el bulbo raquídeo — pulgar derecho sobre la articulación interfalángica del dedo gordo", caption: "Figura 5.14 — Nervio vago X en el bulbo raquídeo (pulgar derecho sobre la articulación interfalángica del dedo gordo)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-15.png", alt: "Nervio vago X en el foramen yugular — pulgar izquierdo sobre la articulación interfalángica proximal de los dedos 4.º y 5.º", caption: "Figura 5.15 — Nervio vago X en el foramen yugular (pulgar izquierdo sobre la articulación interfalángica proximal de los dedos 4.º y 5.º)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-17.png", alt: "Hiato esofágico y cardias", caption: "Figura 5.17 — Hiato esofágico y cardias", orientation: "portrait" },
      ],
    },
  ],
}

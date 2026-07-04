// Chapter 14 content — Spanish
// Source: public/Chapter-14/Chapitre 14 Intestin grêle - Parties 1a, 1b, 2, 3.docx (Guy Boitout)

import type { Chapter } from '../types'

export const chapter14Es: Chapter = {
  slug: 'chapter-14-prototype',
  number: '14',
  title: 'Intestino delgado',
  sections: [
    {
      id: 'presentation',
      title: 'Presentación',
      blocks: [
        { type: 'para', text: 'El intestino delgado es la víscera abdominal más larga del organismo: en el cadáver, su longitud es de unos 6 a 7 metros, mientras que en el ser vivo es notablemente menor debido a su tono muscular. Está formado por dos partes:' },
        { type: 'bullets', items: ['El duodeno', 'El yeyuno-íleon.'] },
        { type: 'para', text: 'Se extienden desde el píloro hasta la válvula ileocecal y desempeñan un papel fundamental en la digestión y la absorción. Aunque forma parte del intestino delgado, el duodeno ha sido objeto de un capítulo aparte (Capítulo 10) debido a su especificidad anatómica y fisiológica.' },
        { type: 'para', text: 'El yeyuno-íleon se distingue del duodeno por:' },
        { type: 'bullets', items: [
          'Una pared delgada, lisa, totalmente peritonizada y muy móvil. Su luz tiene solo entre 2 y 3 cm de diámetro;',
          'Un papel fundamental en la digestión, a través de la interacción de la mucosa, las secreciones intestinales y el microbiota (o flora intestinal);',
          'Un papel importante en el metabolismo y la inmunidad;',
          'Su sistema nervioso intrínseco, especialmente desarrollado;',
          'Interacciones estrechas con el eje intestino-cerebro, que pueden acompañarse de efectos sobre la esfera emocional.',
          'Funcionalmente, el intestino delgado y el colon son interdependientes.',
        ]},
      ],
    },
    {
      id: 'situation',
      title: 'Localización',
      blocks: [
        { type: 'para', text: 'El yeyuno-íleon ocupa una gran parte de la cavidad abdominal, preferentemente a la izquierda que a la derecha, en el interior del marco cólico. El yeyuno se localiza preferentemente en el cuadrante superior izquierdo del abdomen. El íleon se localiza preferentemente en el cuadrante inferior derecho del abdomen.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig1 ES.png', caption: 'Figura 14.1 — Regiones abdominales', alt: 'Referencias topográficas del abdomen', orientation: 'portrait' },
      ],
    },
    {
      id: 'anatomie',
      title: 'Anatomía',
      blocks: [
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig2 ES.png', caption: 'Figura 14.2 — Mesos', alt: 'Los mesos del peritoneo', orientation: 'portrait', syncHide: true },
        { type: 'lead', label: 'Yeyuno-íleon', text: 'comprende entre 15 y 16 asas intestinales en forma de U, distribuidas en dos grupos. Un grupo superior a la izquierda, el yeyuno, más desarrollado que el íleon, cuyas asas y sistema vascular están orientados más bien horizontalmente. Un grupo inferior a la derecha, el íleon, cuyas asas y sistema vascular están orientados más bien verticalmente.' },
        { type: 'lead', label: 'Mesenterio', text: 'es un meso, es decir, una reflexión peritoneal de doble hoja. Envuelve el yeyuno-íleon y lo une a la pared posterior del abdomen mediante la raíz del mesenterio.' },
        { type: 'lead', label: 'Raíz del mesenterio', text: 'constituye la línea de inserción del mesenterio y contribuye a la estabilidad del intestino delgado, de por sí muy móvil. Mide entre 16 y 18 cm. Se extiende desde la unión duodeno-yeyunal hasta la unión ileocecal, cruzando el eje mediano del abdomen a nivel del ombligo (a la altura del disco L3-L4).' },
        { type: 'para', text: 'La unión duodeno-yeyunal es mantenida por el músculo de Treitz, cuyas fibras lisas se insertan en el pilar derecho del diafragma.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig3 ES.png', caption: 'Figura 14.3 — Raíz del mesenterio', alt: 'Raíz del mesenterio y su trayecto abdominal', orientation: 'landscape', syncHide: true },
        { type: 'lead', label: 'Músculo de Treitz', text: 'participa en el mantenimiento del ángulo duodeno-yeyunal mediante su contracción, atrayendo la raíz del mesenterio hacia arriba y a la izquierda.' },
        { type: 'para', text: 'Al favorecer la tensión longitudinal, participa en el vaciado del contenido duodenal en el yeyuno. La raíz del mesenterio proporciona la vascularización y la inervación al intestino delgado.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig4 ES.png', caption: 'Figura 14.4 — Músculo de Treitz', alt: 'Músculo de Treitz y ángulo duodeno-yeyunal', orientation: 'landscape', syncHide: true },
        { type: 'rop', body: [
          'La pérdida de tensión longitudinal de la raíz del mesenterio se relaciona clínicamente con el síndrome del pinzamiento aortomesentérico o nutcracker syndrome: una compresión de la 4.ª porción del duodeno y de la vena renal izquierda entre la aorta y la arteria mesentérica superior. El vaciado del contenido duodenal en el yeyuno puede retrasarse, con riesgo de reflujo gastroduodenal.',
          'La rica red vasculo-nerviosa y linfática de la raíz del mesenterio es altamente reflexógena. La estimulación de su zona refleja tiene como objetivo facilitar una respuesta funcional del yeyuno-íleon.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: 'Vascularización',
      blocks: [
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig5 ES.png', caption: 'Figura 14.5 — Arteria mesentérica superior', alt: 'Arteria mesentérica superior y sus ramas', orientation: 'portrait', syncHide: true },
        { type: 'para', text: 'El intestino delgado necesita un importante aporte vascular y linfático para garantizar sus funciones de digestión, absorción e inmunidad.' },
        { type: 'lead', label: 'Arteria mesentérica superior', text: 'constituye el eje arterial principal del intestino delgado. Es una rama de la aorta abdominal. Su origen se sitúa 1 cm por debajo del tronco celíaco, a la altura del disco intervertebral Th12-L1. Inicialmente retropancreática y luego por delante de la 3.ª porción del duodeno, discurre entre las dos hojas del mesenterio. Emite numerosas ramas colaterales. Irriga todo el intestino delgado, el colon ascendente y los 2/3 proximales del colon transverso.' },
        { type: 'para', text: 'Su pulso, perceptible a nivel de la 3.ª porción del duodeno, a la derecha del ombligo, puede constituir un punto de referencia clínico vascular, sin que por sí solo permita evaluar el funcionamiento intestinal.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig6 ES.png', caption: 'Figura 14.6 — Pulso de las arterias de la cavidad abdominal', alt: 'Pulso de las arterias de la cavidad abdominal', orientation: 'landscape' },
        { type: 'lead', label: 'Vena mesentérica superior', text: 'situada a la derecha de la arteria mesentérica superior, forma parte del sistema porta. Drena hacia el hígado la sangre venosa cargada de nutrientes absorbidos en el intestino delgado.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig7 ES.png', caption: 'Figura 14.7 — Sistema porta', alt: 'Sistema porta hepático', orientation: 'landscape' },
        { type: 'lead', label: 'Red linfática', text: 'el intestino delgado posee una red linfática desarrollada. Participa en el sistema inmunitario. Se encarga de las moléculas lipídicas, las proteínas de cadena larga y las vitaminas liposolubles A, D, E, K, que se dirigen hacia la unión yugulo-subclavia izquierda a través de la cisterna de Pecquet y el conducto torácico.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig8 ES.png', caption: 'Figura 14.8 — Sistema linfático', alt: 'Sistema linfático abdominal', orientation: 'landscape' },
      ],
    },
    {
      id: 'innervation',
      title: 'Inervación',
      blocks: [
        { type: 'sub', text: 'Inervación del peritoneo' },
        { type: 'para', text: 'El peritoneo recibe una doble inervación, somática y autónoma.' },
        { type: 'lead', label: 'Peritoneo parietal', text: 'recibe una inervación somática compartida con la pared abdominal a través de los nervios frénicos, los seis últimos nervios intercostales y los nervios del plexo lumbar. Cuenta con numerosas terminaciones sensibles a la temperatura, la presión y el dolor. Esta inervación compartida con la pared abdominal explica la proyección de los dolores cervicales, escapulares, abdominales y lumbares de origen peritoneal y visceral, transmitidos al sistema musculoesquelético por las fibras somáticas de la hoja parietal.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig9 ES.png', caption: 'Figura 14.9 — Nervio frénico', alt: 'Nervio frénico y su trayecto', orientation: 'landscape' },
        { type: 'lead', label: 'Peritoneo visceral', text: 'recibe una inervación autónoma extrínseca compartida con las vísceras. Simpático: sus raíces provienen de Th8 a Th11. Se unen a los plexos prevertébrales celíaco y mesentérico superior a través de los nervios esplácnicos mayores y menores.' },

        { type: 'sub', text: 'Nervio vago y sistema nervioso simpático' },
        { type: 'leadBullets', items: [
          { label: 'Sensibilidad visceral', text: 'el peritoneo visceral es poco sensible al tacto, las variaciones térmicas y la sección quirúrgica. La sensibilidad visceral depende del sistema simpático, estimulado por los estiramientos intestinales y las sustancias químicas.' },
          { label: 'Motricidad simpática', text: 'el Simpático disminuye el peristaltismo y las secreciones intestinales, especialmente en estados de estrés, ansiedad, miedo o esfuerzo.' },
          { label: 'Nervio vago — motricidad', text: 'es globalmente antagonista del Simpático. Favorece el peristaltismo y las secreciones intestinales, así como la permeabilidad intestinal para favorecer la absorción.' },
          { label: 'Nervio vago — sensibilidad', text: 'el nervio vago contiene entre el 70 y el 80 % de fibras sensitivas que informan permanentemente al cerebro sobre el estado de las vísceras. Está conectado al sistema nervioso intrínseco.' },
        ]},

        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig12 ES.png', caption: 'Figura 14.12 — Sistema nervioso autónomo', alt: 'Comparación funcional de las vías parasimpáticas y simpáticas', orientation: 'portrait' },
        { type: 'sub', text: 'Sistema nervioso entérico (SNE)' },
        { type: 'para', text: 'El sistema nervioso intrínseco o entérico (SNE) es a menudo calificado como 2.º cerebro o cerebro abdominal. Está formado por plexos intramurales situados en la propia pared del intestino delgado: el plexo mioentérico de Auerbach y el plexo submucoso de Meissner.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig13  ES.png', caption: 'Figura 14.13 — Plexos intramurales entéricos', alt: 'Plexo mioentérico de Auerbach y plexo submucoso de Meissner en la pared intestinal', orientation: 'landscape' },
        { type: 'bullets', items: [
          'El SNE es sensible a las señales neurohormonales y a la composición química del contenido intestinal.',
          'Puede funcionar en gran medida de forma autónoma respecto al cerebro y la médula espinal, siempre que las condiciones fisiológicas lo permitan.',
          'Participa de forma importante en la producción de mediadores neuroquímicos, entre los que se incluye una gran parte de la serotonina, la acetilcolina, la noradrenalina y el GABA.',
          'Marcapasos intestinal: la pared del intestino delgado también posee células de Cajal, situadas en las capas musculares longitudinal y circular. Generan ondas lentas y participan en la coordinación de la motricidad intestinal.',
        ]},
      ],
    },
    {
      id: 'physiologie',
      title: 'Fisiología',
      blocks: [
        { type: 'sub', text: 'Motricidad' },
        { type: 'para', text: 'Se desencadena por tres grandes tipos de mecanismos:' },
        { type: 'bullets', items: [
          'Mecánico: por el estiramiento de la pared intestinal durante el paso del quimo.',
          'Neurológico: por la acción del nervio vago, influido por señales cefálicas como la vista, el olfato, el gusto y el tacto de los alimentos, así como por los mecanorreceptores intestinales.',
          'Hormono-químico: por las secreciones gástricas, duodenales, hepatobiliares y pancreáticas.',
        ]},
        { type: 'para', text: 'El intestino delgado presenta contracciones rítmicas, movimientos de vaivén y segmentación que aseguran la homogeneización del quimo, y peristaltismos que permiten su progresión.' },

        { type: 'sub', text: 'Ecosistema intestinal' },
        { type: 'para', text: 'El intestino delgado constituye un ecosistema formado por la mucosa intestinal, el sistema inmunitario y el microbiota intestinal.' },
        { type: 'lead', label: 'Mucosa intestinal', text: 'constituye la interfaz entre el medio interno del organismo y el contenido de la luz digestiva. Actúa como barrera selectiva para permitir la digestión y la absorción.' },
        { type: 'lead', label: 'Digestión', text: 'corresponde a la transformación de los alimentos en moléculas simples que luego pueden ser absorbidas. Las células caliciformes producen un moco protector. Las células de Lieberkühn participan en la secreción intestinal ligeramente alcalina, así como en funciones enzimáticas y antimicrobianas. Los enterocitos o células absorbentes ejercen una función de barrera selectiva gracias a su organización intercelular (desmosomas), que permite la absorción de micronutrientes al tiempo que limita el paso de macromoléculas insuficientemente degradadas.' },
        { type: 'lead', label: 'Absorción', text: 'la mucosa intestinal está recubierta de vellosidades en forma de expansiones digitiformes cuyo eje central contiene células musculares lisas y una red vascular y linfática. Las vellosidades están a su vez recubiertas de microvellosidades que forman un ribete en cepillo, lo que multiplica ampliamente la superficie de intercambio. El intestino delgado extendido tendría una superficie equivalente a una pista de tenis.' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig14 ES.png', caption: 'Figura 14.14 — Vellosidad intestinal', alt: 'Organización histológica de una vellosidad intestinal', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Vía sanguínea', text: 'los capilares sanguíneos absorben el agua, las sales minerales, los azúcares simples, los aminoácidos, los ácidos grasos de cadena corta y las vitaminas hidrosolubles. Estos nutrientes son transportados al hígado por el sistema porta.' },
          { label: 'Vía linfática', text: 'los capilares linfáticos (o quilíferos) absorben principalmente las grasas, las proteínas de cadena larga y las vitaminas liposolubles A, D, E, K. Se unen sucesivamente a la red linfática, la cisterna de Pecquet, el conducto torácico, antes de desembocar en la red venosa de la unión yugulo-subclavia izquierda.' },
        ]},
        { type: 'rop', body: [
          'La acción refleja sobre la motricidad intestinal tiene como objetivo sostener la digestión y la absorción.',
          'La acción refleja sobre el hígado y el sistema linfático tiene como objetivo sostener la calidad de la absorción y las funciones inmunitarias.',
        ]},
        { type: 'lead', label: 'Sistema inmunitario', text: 'receptores situados en la superficie del intestino identifican ciertos agentes patógenos o sustancias potencialmente nocivas y los presentan a las células inmunitarias intestinales: mastocitos (implicados en las respuestas alérgicas e inflamatorias), células de Paneth (que liberan péptidos antimicrobianos) y tejido linfoide asociado al tracto digestivo (GALT), compuesto por linfocitos aislados o agrupados en placas de Peyer.' },
        { type: 'lead', label: 'Microbiota intestinal', text: 'es un conjunto de bacterias, hongos, levaduras, virus y protozoos que viven en interacción con su huésped. Se estima su número en unos 38 000 millones de bacterias en el organismo humano. Cada individuo posee una firma propia del microbiota. El microbiota constituye un determinante importante de nuestra buena salud: participa en la inmunidad, la digestión y la absorción, e interactúa con las funciones cerebrales y emocionales a través del eje intestino-cerebro.' },
      ],
    },
    {
      id: 'pathologies',
      title: 'Patologías frecuentes',
      blocks: [
        { type: 'para', text: 'La hiperpermeabilidad intestinal y la disbiosis se describen a menudo como asociadas, una provocando a la otra y viceversa.' },

        { type: 'lead', label: 'Hiperpermeabilidad intestinal', text: 'cuando las uniones intercelulares entre enterocitos se alteran, la permeabilidad intestinal puede aumentar. Esto puede acompañarse de un aumento del paso de macromoléculas luminales insuficientemente degradadas, lo que provoca una activación inmunitaria o inflamatoria.' },
        { type: 'sub', text: 'Causas' },
        { type: 'bullets', items: [
          'Agentes infecciosos: estafilococos, estreptococos, colibacillos, salmonela, candida albicans que liberan toxinas.',
          'Estrés crónico: el Simpático y las hormonas del estrés (adrenalina, cortisol) en exceso provocan vasoconstricción y fragilidad de la mucosa.',
          'Alimentos muy procesados o refinados, con alto índice glucémico, ácidos grasos saturados, exceso de leche de vaca, gluten y carne.',
          'Actividades deportivas prolongadas (como las carreras de larga distancia): pueden reducir transitoriamente la perfusión esplácnica.',
          'Medicamentos: antiinflamatorios no esteroideos, salicilatos, corticoides, antibióticos y quimioterapia.',
        ]},
        { type: 'sub', text: 'Consecuencias' },
        { type: 'bullets', items: [
          'Alergias alimentarias: la alteración de la barrera intestinal puede favorecer una mayor exposición del sistema inmunitario a ciertos antígenos alimentarios.',
          'Enfermedades autoinmunes: las proteínas insuficientemente degradadas que atraviesan la mucosa son consideradas ajenas al organismo. Los anticuerpos destruyen lo ajeno, así como el tejido en el que se han fijado.',
          'Carencias de micronutrientes: la mala calidad de absorción puede provocar carencias de vitaminas, minerales y ácidos grasos esenciales.',
          'Sobrecarga hepática: el aumento en el sistema porta de sustancias procedentes de la luz intestinal puede incrementar el trabajo de detoxificación hepática.',
        ]},
        { type: 'rop', body: [
          'Ante la presencia de dolores y fijaciones osteomusculares, especialmente cuando no es evidente la noción de traumatismo o sobrecarga, el enfoque ROP invita a buscar un posible vínculo con disfunciones viscerales.',
        ]},

        { type: 'lead', label: 'Disbiosis', text: 'corresponde a la perturbación del microbiota. Cuando la composición del microbiota se modifica — con disminución de la diversidad o desequilibrio entre especies comensal y potencialmente patógenas — la protección de la mucosa puede verse alterada.' },
        { type: 'lead', label: 'Causas de disbiosis', text: 'el estrés, la inflamación, las infecciones, un mal estilo de vida o un desequilibrio alimentario (abuso de alcohol, azúcar y proteínas, o ausencia de fibra), una antibioterapia, ciertas exposiciones ambientales, así como fijaciones vertebrales y fibrosis del intestino y sus inserciones.' },
        { type: 'para', text: 'La disbiosis se considera un factor asociado en numerosas patologías, entre ellas: colitis hemorrágica, tiroiditis, asma, sinusitis, alergias, artralgias (lumbalgias), fibromialgia, cistitis, ciertas formas depresivas. Algunos autores señalan que enfermedades neurodegenerativas como el Parkinson, la esclerosis múltiple o el Alzheimer podrían estar relacionadas con el sistema nervioso entérico a través del nervio vago.' },

        { type: 'lead', label: 'Signos anunciadores', text: 'mal aliento, eructos, aerocoelia, emisión de gases malolientes, estreñimiento/diarrea, pirosis, atracción exagerada por el azúcar y la carne cruda.' },

        { type: 'lead', label: 'Diagnóstico de exclusión', text: 'ciertos síntomas deben orientar a los pacientes hacia un médico: fiebre, sangre roja o negra en las heces, deshidratación importante, pérdida de peso importante e inexplicada, alternancia estreñimiento-diarrea, vómitos, dolor cólico en la región umbilical, meteorismo, obstrucción (íleo mecánico o paralítico), hernia inguinal estrangulada, ganglio de Troisier (sospecha de cáncer), signo de derrame intraabdominal.' },

        { type: 'lead', label: 'Indicaciones en ROP', text: 'disbiosis, secuelas de gastroenteritis, enteroptosis (tensión anormal del intestino delgado asociada a vasoconstricción, estasis venosa y linfática, y espasmos de los plexos nerviosos perivasculares), íleo paralítico (inhibición de la motricidad y las secreciones intestinales por irritación del peritoneo con predominio simpático).' },

        { type: 'sub', text: 'Enfermedad de Crohn' },
        { type: 'para', text: 'Esta enfermedad afecta principalmente al íleon y al colon. Se asocian varios factores: genético, disbiosis, ambiental y emocional como factor de modulación de la vivencia y a veces de los brotes.' },
        { type: 'lead', label: 'Síntomas', text: 'diarrea relacionada con la inflamación de la pared intestinal, dolores abdominopélvicos, adelgazamiento, astenia, aftas bucales, lumbalgia, eritema nudoso en los miembros, afectación pancreática, síndrome depresivo.' },
        { type: 'lead', label: 'Evolución', text: 'cronicidad, mayor riesgo de cáncer colorrectal según la extensión y la antigüedad de la enfermedad. Estos pacientes se ven a menudo obligados a seguir una dieta estricta con pocas fibras.' },
        { type: 'rop', body: [
          'Nuestra experiencia clínica nos ha mostrado que el enfoque ROP puede contribuir a aliviar ciertos dolores abdominopélvicos de la enfermedad de Crohn y a favorecer un mejor tránsito intestinal.',
        ]},
      ],
    },
    {
      id: 'rop',
      title: 'ROP del intestino delgado',
      blocks: [
        { type: 'sub', text: 'Síndrome general de adaptación' },
        { type: 'sub', text: '1. Nervio vago' },
        { type: 'bullets', items: [
          'Territorio craneal y cervical del nervio vago.',
          'Territorio abdominal izquierdo del nervio vago y plexo celíaco (solar).',
          'Hiato esofágico (nervios vagos derecho e izquierdo) y cardias.',
          'Curvatura menor del estómago, rica en fibras vagales.',
        ]},
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig17 ES.png', caption: 'Figura 14.17 — Hiato esofágico (nervios vagos derecho e izquierdo) y cardias', alt: 'Hiato esofágico y nervios vagos', orientation: 'medium' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig18 ES.png', caption: 'Figura 14.18 — Curvatura menor del estómago, rica en fibras vagales', alt: 'Curvatura menor del estómago y fibras vagales', orientation: 'medium' },

        { type: 'sub', text: '2. Sistema simpático' },
        { type: 'bullets', items: [
          'Columna vertebral, articulaciones costotransversas (cadena ganglionar laterovertebral torácica Th8-Th10).',
          'Plexo celíaco (solar).',
          'Plexo lumbar (vínculo viscero-somático).',
        ]},
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig20 ES.png', caption: 'Figura 14.20 — Cadena ganglionar lumbar y pilares del diafragma', alt: 'Cadena ganglionar lumbar y pilares del diafragma', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig21 ES.png', caption: 'Figura 14.21 — Plexo celíaco (solar)', alt: 'Plexo celíaco solar', orientation: 'landscape' },

        { type: 'para', text: 'N.B. En nuestra experiencia clínica, los trastornos funcionales intestinales se observan con frecuencia en la mujer en relación con factores hormonales y emocionales.' },

        { type: 'sub', text: 'Síndrome locorregional' },
        { type: 'bullets', items: [
          'Diafragma (inserción del músculo de Treitz en el pilar derecho).',
          'Estómago (reflejo gastroentérico).',
          'Raíz del mesenterio: una línea desde la unión duodeno-yeyunal hasta el ombligo, a la altura de L3-L4 (cara plantar del pie izquierdo).',
          'Raíz del mesenterio: una línea desde la válvula ileocecal hasta el ombligo (cara plantar del pie derecho).',
        ]},
        { type: 'figure', src: '/chapter-14/es/Chapter14 Fig22 ES.png', caption: 'Figura 14.22 — Raíz del mesenterio (entre la unión duodeno-yeyunal y el ombligo)', alt: 'Zona refleja de la raíz del mesenterio — lado yeyuno', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/figure-14-23.jpg', caption: 'Figura 14.23 — Raíz del mesenterio (entre la válvula ileocecal y el ombligo)', alt: 'Zona refleja de la raíz del mesenterio — lado íleon', orientation: 'narrow' },

        { type: 'reflexAtlas' },

        { type: 'sub', text: '3. Sistema límbico' },
        { type: 'lead', label: 'Balance cerebro límbico — intestino delgado', text: 'escucha-inducción: un pulgar sobre el intestino delgado, el otro sobre el cerebro límbico.' },
        { type: 'figure', src: '/chapter-14/figure-14-28.png', caption: 'Figura 14.28 — Técnica de balance viscero-emocional — intestino delgado', alt: 'Balance viscero-emocional intestino delgado y cerebro límbico', orientation: 'portrait' },
      ],
    },
    {
      id: 'relations',
      title: 'Relaciones viscero-somáticas y emocionales',
      blocks: [
        { type: 'sub', text: 'Relaciones viscero-somáticas' },
        { type: 'bullets', items: [
          'Fijación vertebral de Th10 a Th12 y sus costillas.',
          'L1 y L2.',
        ]},

        { type: 'sub', text: 'Relaciones viscero-emocionales' },
        { type: 'para', text: 'El abdomen, con su cortejo de dolores y trastornos digestivos, puede constituir un lugar importante de expresión somática de las tensiones emocionales. Estas tensiones favorecerían una hiperactividad simpática en detrimento del nervio vago.' },
        { type: 'para', text: 'En el plano emocional, es difícil diferenciar claramente el intestino delgado del colon. En el contexto clínico, la mucosa es considerada como un receptor-emisor de emociones. Muy hormono-dependiente, el intestino se presenta como un órgano especialmente implicado en la somatización a largo plazo. La fibromialgia y la espasmofilia se observan con mayor frecuencia en las mujeres, debido a la interdependencia hormonal e intestinal.' },
        { type: 'para', text: 'La persona "intestinal" nunca está a gusto en su propia piel. Sufre de fatiga matutina, dolores lumbares, de rodillas y de pies (hallux valgus), con uñas estriadas y frágiles. Se irrita con facilidad y está de mal humor, que se disipa a lo largo del día.' },
        { type: 'para', text: 'La persona "intestinal" necesita seguridad. Puede mostrarse hiperactiva en la protección de sus seres queridos. Se describe como fiel a sus hábitos y a sus puntos de referencia. También puede manifestar una meticulosidad notable en su entorno. A veces muestra una falsa seguridad para ocultar su ansiedad. Es hipocondríaca, logorreica, con un poco de teatralidad para convencer. Es obstinada cuando tiene una idea en la cabeza, generosa, susceptible y de humor cambiante.' },

        { type: 'sub', text: 'Consejos' },
        { type: 'para', text: 'El intestino delgado refleja las tensiones emocionales y psíquicas. Los espasmos intestinales fijan la columna lumbar. Privilegiar una alimentación variada y equilibrada sin exceso de hidratos de carbono y proteínas animales. No realizar actividad deportiva durante la digestión.' },
      ],
    },
  ],
  slides: {
    url: '/chapter-14/Chapter14  slides de synthese ES.pdf',
    label: 'Diapositivas',
    description: 'Resumen visual del capítulo — anatomía, fisiología y zonas reflejas R.O.P. del intestino delgado.',
  },
  revisionSheet: {
    src: '/chapter-14/Chapter14 Fiche de Revision ES.png',
    alt: 'Ficha de revisión — Capítulo 14, Intestino delgado',
    caption: 'Ficha de revisión — Capítulo 14 · Intestino delgado',
  },
  clinicalCase: {
    src: '/chapter-14/Chapter14 Cas Clinique ES.png',
    caption: 'Caso clínico — Capítulo 14',
    alt: 'Caso clínico: intestino delgado en R.O.P.',
  },
}

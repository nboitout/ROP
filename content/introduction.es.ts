// Introduction - Spanish
// Source: public/chapter-0/Chapter0 Introduction ES.docx

import type { Chapter } from './types'

export const introductionEs: Chapter = {
  slug: 'introduction',
  title: "Introducción",
  sections: [
    {
      id: "avant-propos",
      title: "Presentación",
      blocks: [
        { type: 'para', text: "Este tercer volumen sobre Réflexothérapie Occipito-Podale (ROP) constituye la continuación natural de los dos volúmenes anteriores. Tras el sistema osteomusculoarticular en el Volumen 1 y el sistema neuromeníngeo en el Volumen 2, abordamos ahora el campo de las vísceras abdominopélvicas, del sistema nervioso autónomo y de los mecanismos del estrés." },
        { type: 'para', text: "El propósito sigue siendo el mismo: proponer una cartografía coherente, alineada con la anatomía y la fisiología, concebida de forma tridimensional, con el cuerpo representado como un lactante en posición fetal dentro del pie y articulada con las zonas reflejas occipitales. En conjunto, las zonas reflejas occipitales y plantares constituyen las zonas reflejas ROP." },
      ],
    },
    {
      id: "en-bref",
      title: "En síntesis: lo que ofrece este libro",
      blocks: [
        { type: 'bullets', items: [
          "Una interpretación clara de las relaciones viscerosomáticas: cómo una disfunción visceral puede afectar al sistema locomotor y cómo los trastornos locomotores pueden, a su vez, influir en la función visceral.",
          "Puntos de referencia clínicos y una lógica de palpación para localizar las zonas reflejas plantares de la ROP, pese a la escasez de reparos óseos disponibles en la superficie plantar.",
          "Cartografías ajustadas según puntos de referencia anatómicos clave, incluido el diafragma, e interpretadas en relación con la historia clínica del paciente, así como con los informes médicos y quirúrgicos.",
          "Un enfoque global destinado a interrumpir bucles reflejos patológicos —neurológicos, viscerales, somáticos y emocionales—, estimular las capacidades intrínsecas de regulación del organismo y favorecer la vitalidad.",
        ]},
      ],
    },
    {
      id: "visceral-incontournable",
      title: "Por qué el sistema visceral es esencial",
      blocks: [
        { type: 'para', text: "El sistema visceral es responsable de funciones logísticas fundamentales del organismo: nutrición, eliminación y homeostasis interna. En este contexto, numerosos síndromes dolorosos musculoesqueléticos pueden surgir como consecuencia de una disfunción visceral; y lo contrario también puede ocurrir. Tratar un sistema ignorando el otro conduce con frecuencia a resultados incompletos." },
      ],
    },
    {
      id: "parti-pris",
      title: "Nuestra posición: rigor anatómico y pragmatismo clínico",
      blocks: [
        { type: 'para', text: "Como ocurre en cualquier enfoque terapéutico manual, en ocasiones observamos resultados que no pueden objetivarse por completo. La observación clínica no posee el rigor metodológico de un protocolo de laboratorio, pero conserva su valor cuando se lleva a cabo de manera sistemática. Por ello, este libro prioriza:" },
        { type: 'bullets', items: [
          "la coherencia anatómica;",
          "la reproducibilidad de los puntos de referencia;",
          "la correlación con la realidad clínica, incluida la anamnesis del paciente, los hallazgos de imagen y las observaciones quirúrgicas.",
        ]},
        { type: 'para', text: "Dos puntos merecen una atención particular:" },
        { type: 'leadBullets', items: [
          { label: "El diafragma", text: "las dos cúpulas diafragmáticas no se sitúan a la misma altura. Ignorar esta asimetría resta precisión a cualquier cartografía, tanto para el propio diafragma como para las vísceras que se insertan en él o se relacionan con él." },
          { label: "El peritoneo", text: "constituye una interfaz clave entre las vísceras y las paredes corporales, con un importante potencial reflexógeno, capaz de transmitir tensiones y disfunciones en ambas direcciones." },
        ]},
      ],
    },
    {
      id: "terminologie",
      title: "Terminología",
      blocks: [
        { type: 'para', text: "Por razones de claridad, utilizaremos la siguiente terminología:" },
        { type: 'leadBullets', items: [
          { label: "dorsal", text: "en lugar de “posterior”." },
          { label: "ventral", text: "en lugar de “anterior”." },
          { label: "lateral", text: "en lugar de “externo”." },
          { label: "medial", text: "en lugar de “interno”." },
          { label: "cefálico", text: "en lugar de “hacia arriba”." },
          { label: "caudal", text: "en lugar de “hacia abajo”." },
          { label: "frontal", text: "en lugar de “transversal”." },
          { label: "sagital", text: "en lugar de “anteroposterior”." },
        ]},
      ],
    },
    {
      id: "plan-type",
      title: "Estructura estándar de los capítulos",
      blocks: [
        { type: 'para', text: "Cada capítulo dedicado a una víscera sigue una estructura común:" },
        { type: 'bullets', items: [
          "Presentación.",
          "Localización.",
          "Anatomía.",
          "Relaciones anatómicas.",
          "Vascularización.",
          "Inervación.",
          "Fisiología.",
          "Patologías frecuentes — diagnóstico diferencial y de exclusión; indicaciones en trastornos funcionales.",
          "Zonas reflejas ROP — cartografía plantar: síndrome general; síndrome locorregional.",
          "Relaciones viscerosomáticas.",
          "Relaciones visceroemocionales.",
          "Recomendaciones.",
        ]},
      ],
    },
  ],
}

import type { ReactNode } from 'react'
import type { Lang } from '@/app/i18n/translations'

export type TeamPageCopy = {
  metadata: { title: string; description: string }
  home: string
  eyebrow: string
  titleBefore: string
  titleEmphasis: string
  intro: string
  membersLabel: string
  portraitAlt: (name: string) => string
  portraitPending: string
  members: Array<{ name: string; role: string; body: ReactNode[] }>
  cta: string
  exploreBook: string
  discoverMethod: string
}

export const teamPageCopy: Partial<Record<Lang, TeamPageCopy>> & Record<'en', TeamPageCopy> = {
  fr: {
    metadata: { title: "L'équipe · R.O.P.", description: "Découvrez l'équipe qui porte la Réflexothérapie Occipito-Podale : clinique, formation, technologie, relation avec les lecteurs et marketing." },
    home: 'Retour à l’accueil', eyebrow: 'L’équipe R.O.P.', titleBefore: 'Trois expertises,', titleEmphasis: 'une même exigence.',
    intro: 'Faire vivre la R.O.P., c’est réunir la transmission d’une méthode construite sur plus de cinquante ans de pratique, une expérience numérique solide et un accompagnement attentif. Chacun intervient dans son domaine, au service d’un même projet : rendre la méthode claire, accessible et durable.',
    membersLabel: 'Membres de l’équipe', portraitAlt: (name) => `Portrait de ${name}`, portraitPending: 'Portrait à venir',
    members: [
      { name: 'Guy Boitout', role: 'Fondateur principal · Responsable clinique et pédagogique', body: ['Guy a développé la Réflexothérapie Occipito-Podale (R.O.P.) au cours de plus de cinquante années de pratique clinique. Il continue d’en guider l’approche clinique, d’en structurer les principes fondamentaux et d’en superviser la transmission. Il dirige les formations et veille à ce que leurs contenus restent solidement ancrés dans l’anatomie, l’observation clinique et l’expérience accumulée au fil de plusieurs décennies auprès des patients et des praticiens.'] },
      { name: 'Nicolas Boitout', role: 'Cofondateur · Responsable numérique, recherche et données', body: ['Nicolas pilote l’environnement numérique, scientifique et documentaire qui accompagne le développement de la R.O.P. Il conçoit les outils numériques de la méthode et réalise ses figures anatomiques et scientifiques au moyen d’un processus assisté par l’IA, associant génération, vérifications croisées à partir de sources anatomiques de référence et corrections successives.', 'Il contribue également à la revue de la littérature scientifique, afin de mettre les concepts et les observations issus de la R.O.P. en perspective avec les connaissances actuelles en neuroanatomie et en physiologie. À travers Patient-Care, il participe à la structuration du suivi des praticiens et à la constitution progressive d’une base de données issue de la pratique, destinée à de futures analyses.'] },
      { name: 'Matei Boitout', role: 'Relations avec les lecteurs et les praticiens · Marketing et ventes', body: ['Matei développe les relations avec les lecteurs, les praticiens et les différents publics intéressés par la R.O.P. Il accompagne la diffusion des ouvrages et des formations, participe à la communication de la méthode et contribue au développement de sa présence en France comme à l’international.', 'Il intervient également dans la préparation des supports de communication, le suivi des demandes et l’organisation des actions commerciales, afin de rendre les contenus et les ressources de la R.O.P. plus accessibles aux professionnels et aux personnes souhaitant découvrir ou approfondir la méthode.'] },
    ],
    cta: 'Découvrir le travail porté par l’équipe.', exploreBook: 'Explorer l’ouvrage', discoverMethod: 'Découvrir la méthode',
  },
  en: {
    metadata: { title: 'The team · R.O.P.', description: 'Meet the team behind Occipito-Podal Reflexotherapy: clinical direction, training, technology, reader relations and marketing.' },
    home: 'Back to home', eyebrow: 'The R.O.P. team', titleBefore: 'Three areas of expertise,', titleEmphasis: 'one shared standard.',
    intro: 'Bringing R.O.P. to life means combining the transmission of a method built on more than fifty years of practice, strong digital expertise and attentive support. Each person contributes in their own field to the same project: making the method clear, accessible and sustainable.',
    membersLabel: 'Team members', portraitAlt: (name) => `Portrait of ${name}`, portraitPending: 'Portrait coming soon',
    members: [
      { name: 'Guy Boitout', role: 'Lead Founder · Clinical & Educational Lead', body: ['Guy developed Occipito-Podal Reflexotherapy (R.O.P.) over more than fifty years of clinical practice. He continues to guide the method’s clinical approach, structure its core principles and oversee its transmission. He leads the training programmes and ensures that their content remains grounded in anatomy, clinical observation and the experience accumulated through decades of work with patients and practitioners.'] },
      { name: 'Nicolas Boitout', role: 'Co-Founder, Digital, Research & Data Lead', body: ['Nicolas leads the digital, research and data environment supporting R.O.P. He develops the method’s digital tools and produces its anatomical and scientific figures through an AI-assisted process combining generation, cross-checking against anatomical reference sources and successive corrections. He also contributes to the review of the scientific literature, placing R.O.P. concepts and observations in the context of current neuroanatomical and physiological knowledge. Through Patient-Care, he helps structure practitioner follow-up and build a practice-based dataset for future analysis.'] },
      { name: 'Matei Boitout', role: 'Reader & Practitioner Relations · Marketing & Sales', body: ['Matei manages relationships with readers, practitioners and prospective participants. He is often the first point of contact with the team and supports communication around the books, training programmes and other R.O.P. activities. He contributes to marketing campaigns, sales development and follow-up, while gathering feedback from the field and bringing it back to the team to help improve the way R.O.P. content, services and training are presented and delivered.'] },
    ],
    cta: 'Discover the work led by the team.', exploreBook: 'Explore the book', discoverMethod: 'Discover the method',
  },
  de: {
    metadata: { title: 'Das Team · R.O.P.', description: 'Lernen Sie das Team hinter der okzipito-podalen Reflextherapie kennen: klinische Leitung, Ausbildung, Technologie, Leserbetreuung und Marketing.' },
    home: 'Zurück zur Startseite', eyebrow: 'Das R.O.P.-Team', titleBefore: 'Drei Kompetenzbereiche,', titleEmphasis: 'ein gemeinsamer Anspruch.',
    intro: 'R.O.P. lebendig zu halten bedeutet, die Weitergabe einer in mehr als fünfzig Jahren Praxis entwickelten Methode mit fundierter digitaler Kompetenz und aufmerksamer Begleitung zu verbinden. Jeder wirkt in seinem Fachgebiet an demselben Ziel mit: die Methode klar, zugänglich und nachhaltig zu gestalten.',
    membersLabel: 'Teammitglieder', portraitAlt: (name) => `Porträt von ${name}`, portraitPending: 'Porträt folgt',
    members: [
      { name: 'Guy Boitout', role: 'Gründer · Klinische & pädagogische Leitung', body: ['Guy entwickelte die Okzipito-Podale Reflextherapie (R.O.P.) im Laufe von mehr als fünfzig Jahren klinischer Praxis. Bis heute prägt er den klinischen Ansatz der Methode, strukturiert ihre grundlegenden Prinzipien und begleitet ihre Weitergabe. Er leitet die Ausbildungsprogramme und stellt sicher, dass deren Inhalte auf anatomischen Grundlagen, klinischer Beobachtung und den Erfahrungen aus jahrzehntelanger Arbeit mit Patienten und Praktikern beruhen.'] },
      { name: 'Nicolas Boitout', role: 'Mitgründer · Digitales, Forschung & Daten', body: ['Nicolas verantwortet das digitale, wissenschaftliche und datenbezogene Umfeld der R.O.P. Er entwickelt die digitalen Werkzeuge der Methode und erstellt ihre anatomischen und wissenschaftlichen Abbildungen mithilfe eines KI-gestützten Prozesses, der Generierung, den Abgleich mit anatomischen Referenzquellen und schrittweise Korrekturen miteinander verbindet. Darüber hinaus wirkt er an der Auswertung der wissenschaftlichen Literatur mit und ordnet die Konzepte und Beobachtungen der R.O.P. in den Kontext des aktuellen neuroanatomischen und physiologischen Wissens ein. Über Patient-Care trägt er dazu bei, die Nachverfolgung durch Praktiker zu strukturieren und einen praxisbasierten Datensatz für zukünftige Analysen aufzubauen.'] },
      { name: 'Matei Boitout', role: 'Leser- & Praktikerbeziehungen · Marketing & Vertrieb', body: ['Matei betreut die Beziehungen zu Lesern, Praktikern und Interessenten. Er ist häufig der erste Ansprechpartner des Teams und unterstützt die Kommunikation rund um die Bücher, Ausbildungsprogramme und weiteren Aktivitäten der R.O.P. Er wirkt an Marketingkampagnen, Vertriebsentwicklung und Follow-up-Aktivitäten mit und sammelt zugleich Rückmeldungen aus der Praxis. Diese bringt er in das Team ein, um die Darstellung und Vermittlung der Inhalte, Angebote und Ausbildungsprogramme der R.O.P. kontinuierlich zu verbessern.'] },
    ],
    cta: 'Entdecken Sie die Arbeit des Teams.', exploreBook: 'Das Buch entdecken', discoverMethod: 'Die Methode entdecken',
  },
  es: {
    metadata: { title: 'El equipo · R.O.P.', description: 'Conozca al equipo que impulsa la Reflexoterapia Occípito-Podal: dirección clínica, formación, tecnología, relación con los lectores y marketing.' },
    home: 'Volver al inicio', eyebrow: 'El equipo R.O.P.', titleBefore: 'Tres ámbitos de experiencia,', titleEmphasis: 'una misma exigencia.',
    intro: 'Dar vida a la R.O.P. significa unir la transmisión de un método construido a lo largo de más de cincuenta años de práctica, una sólida experiencia digital y un acompañamiento atento. Cada miembro interviene desde su especialidad al servicio de un mismo proyecto: hacer que el método sea claro, accesible y duradero.',
    membersLabel: 'Miembros del equipo', portraitAlt: (name) => `Retrato de ${name}`, portraitPending: 'Retrato próximamente',
    members: [
      { name: 'Guy Boitout', role: 'Fundador principal · Responsable clínico y de formación', body: ['Guy desarrolló la Reflexoterapia Occípito-Podal (R.O.P.) a lo largo de más de cincuenta años de práctica clínica. Continúa orientando el enfoque clínico del método, estructurando sus principios fundamentales y supervisando su transmisión. Dirige los programas de formación y vela por que sus contenidos se mantengan fundamentados en la anatomía, la observación clínica y la experiencia acumulada durante décadas de trabajo con pacientes y profesionales.'] },
      { name: 'Nicolas Boitout', role: 'Cofundador · Responsable de Digital, Investigación y Datos', body: ['Nicolas dirige el entorno digital, de investigación y de datos que respalda la R.O.P. Desarrolla las herramientas digitales del método y produce sus ilustraciones anatómicas y científicas mediante un proceso asistido por inteligencia artificial que combina generación, verificación cruzada con fuentes anatómicas de referencia y correcciones sucesivas. También contribuye a la revisión de la literatura científica, situando los conceptos y observaciones de la R.O.P. en el contexto de los conocimientos actuales en neuroanatomía y fisiología. A través de Patient-Care, contribuye a estructurar el seguimiento realizado por los profesionales y a construir un conjunto de datos basado en la práctica para futuros análisis.'] },
      { name: 'Matei Boitout', role: 'Relaciones con lectores y profesionales · Marketing y Ventas', body: ['Matei gestiona las relaciones con lectores, profesionales y posibles participantes. A menudo es el primer punto de contacto con el equipo y apoya la comunicación en torno a los libros, los programas de formación y las demás actividades de la R.O.P. Contribuye a las campañas de marketing, al desarrollo de ventas y al seguimiento de contactos, al tiempo que recoge las opiniones y comentarios procedentes del terreno y los transmite al equipo para ayudar a mejorar la forma en que se presentan y ofrecen los contenidos, servicios y programas de formación de la R.O.P.'] },
    ],
    cta: 'Descubra el trabajo del equipo.', exploreBook: 'Explorar la obra', discoverMethod: 'Descubrir el método',
  },
  it: {
    metadata: { title: 'Il team · R.O.P.', description: 'Scoprite il team che porta avanti la Riflessoterapia Occipito-Podale: direzione clinica, formazione, tecnologia, relazioni con i lettori e marketing.' },
    home: 'Torna alla home', eyebrow: 'Il team R.O.P.', titleBefore: 'Tre competenze,', titleEmphasis: 'un’unica esigenza.',
    intro: 'Far vivere la R.O.P. significa unire la trasmissione di un metodo costruito in oltre cinquant’anni di pratica, una solida esperienza digitale e un accompagnamento attento. Ognuno interviene nel proprio ambito al servizio dello stesso progetto: rendere il metodo chiaro, accessibile e duraturo.',
    membersLabel: 'Membri del team', portraitAlt: (name) => `Ritratto di ${name}`, portraitPending: 'Ritratto in arrivo',
    members: [
      { name: 'Guy Boitout', role: 'Fondatore principale · Responsabile clinico e della formazione', body: ['Guy ha sviluppato la Riflessoterapia Occipito-Podale (R.O.P.) nel corso di oltre cinquant’anni di pratica clinica. Continua a guidare l’approccio clinico del metodo, a strutturarne i principi fondamentali e a supervisionarne la trasmissione. Dirige i programmi di formazione e si assicura che i loro contenuti rimangano fondati sull’anatomia, sull’osservazione clinica e sull’esperienza maturata in decenni di lavoro con pazienti e professionisti.'] },
      { name: 'Nicolas Boitout', role: 'Co-fondatore · Responsabile Digital, Ricerca e Dati', body: ['Nicolas coordina l’ambiente digitale, di ricerca e di gestione dei dati a supporto della R.O.P. Sviluppa gli strumenti digitali del metodo e realizza le sue illustrazioni anatomiche e scientifiche attraverso un processo assistito dall’intelligenza artificiale che combina generazione, verifica incrociata con fonti anatomiche di riferimento e successive correzioni. Contribuisce inoltre alla revisione della letteratura scientifica, collocando i concetti e le osservazioni della R.O.P. nel contesto delle attuali conoscenze neuroanatomiche e fisiologiche. Attraverso Patient-Care, contribuisce a strutturare il follow-up svolto dai professionisti e a costruire un insieme di dati basato sulla pratica per future analisi.'] },
      { name: 'Matei Boitout', role: 'Relazioni con lettori e professionisti · Marketing e Vendite', body: ['Matei gestisce le relazioni con lettori, professionisti e potenziali partecipanti. È spesso il primo punto di contatto con il team e supporta la comunicazione relativa ai libri, ai programmi di formazione e alle altre attività della R.O.P. Contribuisce alle campagne di marketing, allo sviluppo commerciale e al follow-up dei contatti, raccogliendo al tempo stesso feedback dal campo e condividendoli con il team per contribuire a migliorare il modo in cui i contenuti, i servizi e i programmi di formazione della R.O.P. vengono presentati e offerti.'] },
    ],
    cta: 'Scoprite il lavoro del team.', exploreBook: 'Esplora il libro', discoverMethod: 'Scopri il metodo',
  },
  th: {
    metadata: { title: 'ทีมงาน · R.O.P.', description: 'ทำความรู้จักทีมงานผู้อยู่เบื้องหลังการสะท้อนบำบัดท้ายทอยและฝ่าเท้า ทั้งด้านคลินิก การฝึกอบรม เทคโนโลยี การดูแลผู้อ่าน และการตลาด' },
    home: 'กลับสู่หน้าหลัก', eyebrow: 'ทีมงาน R.O.P.', titleBefore: 'สามความเชี่ยวชาญ', titleEmphasis: 'หนึ่งมาตรฐานร่วมกัน',
    intro: 'การขับเคลื่อน R.O.P. คือการผสานการถ่ายทอดวิธีการที่พัฒนาจากประสบการณ์ปฏิบัติกว่าห้าสิบปี ความเชี่ยวชาญด้านดิจิทัลที่แข็งแกร่ง และการดูแลอย่างใส่ใจ แต่ละคนทำงานในสาขาของตนเพื่อเป้าหมายเดียวกัน คือทำให้วิธีการนี้ชัดเจน เข้าถึงได้ และยั่งยืน',
    membersLabel: 'สมาชิกทีม', portraitAlt: (name) => `ภาพของ ${name}`, portraitPending: 'จะเพิ่มภาพในภายหลัง',
    members: [
      { name: 'Guy Boitout', role: 'ผู้ก่อตั้งหลัก · ผู้นำด้านคลินิกและการศึกษา', body: ['Guy พัฒนาการบำบัดสะท้อนประสาทแบบ Occipito-Podal Reflexotherapy (R.O.P.) จากประสบการณ์ทางคลินิกที่สั่งสมมากกว่าห้าสิบปี ปัจจุบันเขายังคงเป็นผู้กำหนดแนวทางทางคลินิกของวิธีการนี้ วางโครงสร้างหลักการสำคัญ และดูแลการถ่ายทอดองค์ความรู้ เขาเป็นผู้นำโปรแกรมการฝึกอบรม และดูแลให้เนื้อหายังคงยึดโยงกับกายวิภาคศาสตร์ การสังเกตทางคลินิก และประสบการณ์ที่สะสมจากการทำงานร่วมกับผู้ป่วยและผู้ปฏิบัติงานตลอดหลายทศวรรษ'] },
      { name: 'Nicolas Boitout', role: 'ผู้ร่วมก่อตั้ง · ผู้นำด้านดิจิทัล การวิจัย และข้อมูล', body: ['Nicolas ดูแลสภาพแวดล้อมด้านดิจิทัล การวิจัย และข้อมูลที่สนับสนุน R.O.P. เขาพัฒนาเครื่องมือดิจิทัลของวิธีการนี้ และจัดทำภาพประกอบด้านกายวิภาคและวิทยาศาสตร์ผ่านกระบวนการที่ได้รับความช่วยเหลือจากปัญญาประดิษฐ์ ซึ่งผสานการสร้างภาพ การตรวจสอบไขว้กับแหล่งอ้างอิงทางกายวิภาค และการแก้ไขอย่างต่อเนื่อง เขายังมีส่วนร่วมในการทบทวนวรรณกรรมทางวิทยาศาสตร์ โดยนำแนวคิดและข้อสังเกตของ R.O.P. ไปพิจารณาในบริบทขององค์ความรู้ปัจจุบันด้านประสาทกายวิภาคศาสตร์และสรีรวิทยา นอกจากนี้ ผ่านระบบ Patient-Care เขายังช่วยจัดโครงสร้างการติดตามของผู้ปฏิบัติงาน และพัฒนาชุดข้อมูลจากการปฏิบัติงานจริงเพื่อใช้ในการวิเคราะห์ในอนาคต'] },
      { name: 'Matei Boitout', role: 'ความสัมพันธ์กับผู้อ่านและผู้ปฏิบัติงาน · การตลาดและการขาย', body: ['Matei ดูแลความสัมพันธ์กับผู้อ่าน ผู้ปฏิบัติงาน และผู้ที่สนใจเข้าร่วมกิจกรรมต่าง ๆ เขามักเป็นจุดติดต่อแรกกับทีม และสนับสนุนการสื่อสารเกี่ยวกับหนังสือ โปรแกรมการฝึกอบรม และกิจกรรมอื่น ๆ ของ R.O.P. เขามีส่วนร่วมในแคมเปญการตลาด การพัฒนายอดขาย และการติดตามผู้ติดต่อ พร้อมทั้งรวบรวมความคิดเห็นจากภาคปฏิบัติและนำกลับมาแบ่งปันกับทีม เพื่อช่วยปรับปรุงวิธีการนำเสนอและการให้บริการด้านเนื้อหา บริการ และโปรแกรมการฝึกอบรมของ R.O.P.'] },
    ],
    cta: 'ค้นพบผลงานของทีม', exploreBook: 'สำรวจหนังสือ', discoverMethod: 'ทำความรู้จักวิธีการ',
  },
}

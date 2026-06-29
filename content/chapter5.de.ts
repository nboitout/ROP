// Chapter 5 content — German
// Source: Chapter5_Stressmechanismus_ROP_DE_fluency_revised.docx (Guy Boitout)
// Section IDs and block structure mirror content/chapter5.fr.ts. Internal
// illustrations remain the French source images until translated artwork is
// available; the revision sheet, clinical case and synthesis slides are omitted
// until German versions exist. Print-only cross-references (figure/chapter/page)
// are dropped: the web edition shows figures inline and has no page numbers.

import type { Chapter } from './types'

export type { Block, Section, Chapter } from './types'

export const chapter5De: Chapter = {
  slug: "chapter-5",
  number: "5",
  title: "Stressmechanismus",
  sections: [
    {
      id: "presentation",
      title: "Einführung",
      blocks: [
        { type: "para", text: "„Stress“ ist ein Begriff, der in modernen Gesellschaften ständig verwendet wird. Wettbewerb, Konkurrenz und Leistungsorientierung treiben uns dazu, immer schneller zu handeln. Wenn wir nicht aufmerksam bleiben, besteht die Gefahr, dass Stress uns überwältigt und bis zur Erschöpfung führt." },
        { type: "para", text: "Das moderne Stresskonzept wurde von Walter Cannon (1871–1945) entwickelt, der – in der Fortführung der Arbeiten von Claude Bernard – wesentlich zur Formalisierung des Homöostasebegriffs beitrug." },
        { type: "para", text: "Hans Selye (1907–1982) beschrieb das allgemeine Adaptationssyndrom als Gesamtheit der physiologischen, neurologischen, endokrinen und immunologischen Mechanismen, die der Körper als Antwort auf Stressoren mobilisiert." },
        { type: "para", text: "Zu diesen drei Systemen wurde später aufgrund der affektiven Dimension der Stressreaktion das limbische bzw. emotionale System hinzugenommen." },
      ],
    },
    {
      id: "definitions",
      title: "Definitionen",
      blocks: [
        { type: "leadBullets", items: [
          { label: "Stress", text: "Stress – genauer gesagt die Reaktion auf eine als bedrohlich wahrgenommene Situation – löst eine Kaskade von Reaktionen aus, die den Körper vor einer übermäßigen Abweichung von homöostatischen Normwerten schützen sollen." },
          { label: "Homöostase", text: "Die Fähigkeit des Körpers, das Gleichgewicht seines inneren Milieus aufrechtzuerhalten: Körpertemperatur, Blut-pH, biologische Blutparameter, Blutzucker usw." },
          { label: "Allostase", text: "Die Anpassungsfähigkeit des Körpers an verschiedene umweltbedingte Stressoren, um die Homöostase in einem sich verändernden Kontext zu bewahren." },
        ]},
        { type: "para", text: "Mit anderen Worten: Die Stressreaktion dient dazu, Stabilität (Homöostase) durch Veränderung (Allostase) zu gewährleisten." },
        { type: "para", text: "Stressreaktion, Homöostase und Allostase sind eng miteinander verbunden. Da das autonome bzw. vegetative Nervensystem (VNS) die inneren Funktionen steuert, spielt es bei der Reaktion auf Stress- oder Konfliktsituationen eine zentrale Rolle, um die Homöostase zu erhalten. Dieses Kapitel ist daher der Rolle des VNS in der Stressreaktion sowie seinen Beziehungen zum limbischen Gehirn und zum Kortex gewidmet." },
        { type: "para", text: "Die Stressreaktion ist ein grundlegender biologischer Schutzprozess, dem wir alle ausgesetzt sind und auf den wir biologisch vorbereitet sind. Kurzfristig wirkt sie schützend, da sie auf die Wiederherstellung der Homöostase abzielt. Wird sie jedoch intensiv, anhaltend und wiederholt aktiviert, ist dies mit einem erhöhten Energieaufwand verbunden. Die Vitalität kann beeinträchtigt werden, und die Anpassungsfähigkeit nimmt ab. Der Körper kann dann allmählich funktionelle Störungen entwickeln und – je nach individueller Konstitution – in chronische oder degenerative Erkrankungen übergehen." },
      ],
    },
    {
      id: "stresseurs",
      title: "Stressoren",
      blocks: [
        { type: "para", text: "Im allgemeinen Sprachgebrauch werden Stress und Stressor häufig verwechselt. Der Stressor bzw. das belastende Agens löst die Stressreaktion aus." },
        { type: "lead", label: "Definition", text: "Stressoren sind Reize, welche die übliche Basisregulation eines Individuums überfordern und die Stressreaktion in Gang setzen." },
        { type: "lead", label: "Negativer Stress", text: "Er wird als Distress bezeichnet und kann sich unter anderem durch Traurigkeit, Scheitern, Zweifel, Unsicherheit, Angst oder Wut äußern. Er geht mit einer neuroendokrinen Antwort unter Beteiligung von Cortisol einher, die die drei großen an der Homöostase beteiligten Systeme beeinflussen kann: Nervensystem, Hormonsystem und Immunsystem." },
        { type: "para", text: "Je nach genetischer Prädisposition und Lebensweise können anschließend sämtliche Systeme betroffen sein: Verdauungsstörungen, Asthma, Erkrankungen des Bewegungsapparats, Infektionen, kardiovaskuläre Erkrankungen, Angststörungen, Depression, Autoimmunerkrankungen, neurodegenerative Erkrankungen, Krebs usw." },
        { type: "lead", label: "Positiver Stress", text: "Er wird als Eustress bezeichnet und kann sich durch Liebe, Freude, Begeisterung, Freiheit, Vertrauen und Sicherheit äußern. Er geht mit der Aktivierung anderer Neuromediatoren, darunter Adrenalin, einher und kann kurzfristig eine günstige Anpassungsreaktion unterstützen." },
        { type: "lead", label: "Arten von Stressoren", text: "Einige sind leicht zu erkennen, insbesondere körperliche und emotionale Stressoren. Biochemische Stressoren wirken dagegen sehr häufig unterschwellig und werden daher oft nicht berücksichtigt." },
        { type: "leadBullets", items: [
          { label: "Körperliche Stressoren", text: "Unfälle, Schleudertraumata („Whiplash“), übermäßige körperliche oder sportliche Aktivität bis zur Erschöpfung oder umgekehrt Bewegungsmangel, Geburtsbedingungen, hektischer Lebensrhythmus, Schlafmangel, sensorische Belastungen – Lärm, Geruch, Licht, starke oder chronische Schmerzen, ekelbedingte Nahrungsaversion –, Luftverschmutzung, extreme Klimabedingungen usw." },
          { label: "Emotionale, psychologische und soziale Stressoren", text: "Sie gehören zu den Stressoren, die einen erheblichen Einfluss auf die Gesundheit haben können: Trennungen und Beziehungsabbrüche, familiäre Konflikte, soziale oder berufliche Zurückweisung, Isolation, Mobbing sowie schulische oder berufliche Misserfolge. Die emotional und psychologisch destruktivsten Stressoren sind sexueller Missbrauch und sexuelle Übergriffe, Inzest und Vergewaltigung." },
          { label: "Biochemische Stressoren", text: "Ernährungsbedingte Ungleichgewichte und Nahrungsmittelintoleranzen, Dysbiosen (Ungleichgewicht des intestinalen Mikrobioms), Parasitosen, virale Belastung, Umweltbelastungen, Schwermetalle, endokrine Disruptoren usw. können den Allgemeinzustand schleichend beeinträchtigen und zur Verschlechterung der Gesundheit beitragen." },
        ]},
        { type: "lead", label: "Interpretation", text: "Nicht nur die Art des Stressors ist entscheidend, sondern auch seine Interpretation durch die „gestresste“ Person, also die Vorstellung, die sie sich von der realen oder angenommenen Bedrohung macht. Entscheidend ist, wie das Gehirn Stressoren interpretiert und ihre Auswirkungen an die großen Systeme weitergibt, die an der Aufrechterhaltung der Homöostase beteiligt sind." },
        { type: "lead", label: "Allostatische Last", text: "Solange die Vitalität des Individuums die Stresslast bzw. allostatische Last tragen kann, bleibt der Anpassungsmechanismus stabil." },
        { type: "para", text: "Wenn Intensität, Dauer, Häufigkeit, Dringlichkeit und Unerwartetheit der Stressoren kumulieren, schwächen sie das Individuum im Laufe der Zeit und entfalten gesundheitsschädliche Wirkungen. Die Vulnerabilität gegenüber Stressoren nimmt zu. Der Körper kann sich dann allmählich in Richtung einer Dekompensation der Stressmechanismen entwickeln." },
        { type: "lead", label: "Kumulative Effekte der Stressoren", text: "Die drei Arten von Stressoren – körperlich, emotional und biochemisch – interagieren miteinander. Emotionaler Stress kann den Gastrointestinaltrakt beeinflussen, Wirbelsäulen-, Lenden- oder Zervikalschmerzen auslösen und den Alltag, das Berufsleben oder die sportliche Aktivität beeinträchtigen. Chronische schmerzhafte osteomuskuloartikuläre Dysfunktionen, wie sie bei Fibromyalgie vorkommen, können mit psychischen Veränderungen wie Angst oder Depression einhergehen und biologische Regulationsprozesse beeinflussen. Diese Trias von Stressoren kann zur Entstehung chronischer Erkrankungen beitragen, deren Betreuung sinnvollerweise im Sinne einer globalen Gesundheitsbetrachtung erfolgt." },
        { type: "rop", body: [
          "Die Stressreaktion liegt der Krankheit vorgelagert. Je nach individuellen Schwachstellen, die mit Vererbung, medizinischer Vorgeschichte und Lebensweise zusammenhängen, können Erkrankungen durch ein Versagen der Anpassungsmechanismen entstehen. Aus dieser Perspektive entsteht Krankheit aus einem Verlust von Gesundheit – und nicht umgekehrt.",
          "Die ROP integriert diese Sicht von Gesundheit und Krankheit vollständig: Ein Symptom muss in seinen Kontext eingeordnet werden, nämlich in das allgemeine Adaptationssyndrom.",
        ]},
      ],
    },
    {
      id: "sga",
      title: "Allgemeines Adaptationssyndrom",
      blocks: [
        { type: "para", text: "Dieses von Hans Selye vorgeschlagene Modell erklärt die Auswirkungen von Stress auf den Körper und die Art und Weise, wie dieser versucht, darauf zu reagieren. Es entwickelt sich in vier Phasen: Alarm, Erholung, Adaptation–Widerstand und Erschöpfung." },

        { type: "sub", text: "Alarmphase" },
        { type: "para", text: "Schlüsselbegriffe: unmittelbare Reaktion auf Stressoren, Dringlichkeit, Mobilisierung energetischer Ressourcen, Aktivierung des Sympathikus." },
        { type: "para", text: "Das Modell der drei funktionellen Ebenen – reptilisches Gehirn, limbisches System und Kortex – wird hier als pädagogischer Rahmen innerhalb des in diesem Werk verwendeten Modells genutzt." },
        { type: "lead", label: "Amygdala", text: "Wird sie durch eine reale oder imaginierte Bedrohung bzw. Gefahr alarmiert, aktiviert sie den Hypothalamus, der die Stressreaktion entlang zweier Achsen in Gang setzt: zunächst über die neurologische, anschließend über die hormonelle Achse." },
        { type: "para", text: "Gleichzeitig beteiligen sich der Hippocampus und kortikale Schaltkreise an der Modulation der emotionalen Reaktion, bevor die Information den präfrontalen Kortex erreicht, wo sie analysiert und bewusst wird." },
        { type: "figure", src: "/chapter-5/figure-5-4.jpeg", alt: "Schema der neurologischen SAM-Achse und der hormonellen HHN-/HPA-Achse", caption: "Abbildung 5.4 — Neurologische SAM-Achse und hormonelle HHN-/HPA-Achse", orientation: "landscape" },
        { type: "lead", label: "Neurologische Achse", text: "Im Notfall dominiert die sympathische Antwort. Sie ist unmittelbar. Sie verläuft über eine hypothalamische Aktivierung, die den im Pons des Hirnstamms gelegenen Locus coeruleus aktiviert. Dieser setzt Noradrenalin frei, das wiederum das Nebennierenmark aktiviert, welches das Notfallhormon Adrenalin sezerniert. Dies ist die sympathoadrenomedulläre Achse (SAM). Der im gesamten Körper präsente Sympathikus induziert eine globale Reaktion, damit der Körper auf Bedrohung oder Gefahr reagieren kann." },
        { type: "para", text: "Die SAM-Achse beschleunigt Herz- und Atemfrequenz, steigert Stoffwechsel und Blutdruck und fördert die Durchblutung der Skelettmuskulatur, um die für das Überleben am besten geeignete Sofortreaktion zu ermöglichen: Flucht, Kampf oder Erstarren." },
        { type: "para", text: "Der Sympathikus stimuliert zugleich die sensorischen Aktivitäten – visuell, auditiv und olfaktorisch – angesichts der Gefahr. Die Aktivierung des Sympathikus führt dazu, dass unmittelbar nicht überlebenswichtige Funktionen, insbesondere Gonaden und Verdauungssystem, vorübergehend in den Hintergrund treten. Diese neurologische Notfallphase ist von kurzer Dauer." },
        { type: "para", text: "Wenn der Stressor rasch endet oder die Antwort ausreicht, kehrt der Sympathikus durch Rückkopplungsmechanismen zu seinem Gleichgewicht bzw. zu seiner Normotonie zurück. Andernfalls aktiviert der Hypothalamus in einem zweiten Schritt die hormonelle Hypothalamus-Hypophysen-Nebennieren-Achse (HHN; international HPA)." },
        { type: "lead", label: "Hormonelle Achse", text: "Unter der Wirkung des hypothalamischen Hormons CRH setzt die Adenohypophyse ACTH frei, das seinerseits die Nebennierenrinde stimuliert. Diese hormonelle Kaskade setzt verschiedene Hormone frei: Cortisol, Aldosteron und DHEA. Es handelt sich um die HHN- bzw. corticotrope Achse." },
        { type: "leadBullets", items: [
          { label: "Cortisol", text: "Es trägt dazu bei, die Verfügbarkeit von Glukose, Triglyzeriden und Cholesterin zu erhöhen, und moduliert die Immunantwort." },
          { label: "Aldosteron", text: "Es ist an der renalen Rückresorption von Wasser und bestimmten Mineralstoffen beteiligt." },
          { label: "DHEA", text: "Es ist ein Vorläufer von Steroidhormonen – Testosteron und Progesteron. Seine genauen Wirkungen sind noch unvollständig geklärt; ihm werden unter anderem altersprotektive und entzündungsmodulierende Effekte sowie eine Förderung von Libido und Erektion zugeschrieben." },
          { label: "Feedback", text: "Ein Rückkopplungsmechanismus wirkt auf Adenohypophyse, Hypothalamus und Hippocampus, um die Stressantwort zu begrenzen, sobald die Hormonspiegel wieder mit einem Gleichgewicht vereinbar sind." },
        ]},
        { type: "lead", label: "Funktionelle Störungen", text: "In dieser Alarmphase sind die Symptome grundsätzlich reversibel. Es handelt sich um das Stadium funktioneller Störungen, in dem die anatomische Integrität erhalten bleibt. Die Dysfunktion wird hier als anhaltendes Ungleichgewicht zwischen Parasympathikus und Sympathikus zugunsten des Sympathikus interpretiert." },

        { type: "sub", text: "Erholungsphase" },
        { type: "para", text: "Schlüsselbegriffe: Müdigkeit, Regeneration, vorübergehende Vulnerabilität." },
        { type: "para", text: "Nach dieser umfassenden Mobilisierung der Ressourcen benötigt der Körper eine Erholungsphase. Die Person fühlt sich müde und verspürt das Bedürfnis, sich auszuruhen. Adrenalin und Cortisol sinken ab, und die Stressantwort ist vorübergehend weniger leistungsfähig. Diese Phase vorübergehender Vulnerabilität kann sich durch ein vorübergehendes Wiederaufflammen von Gelenk- oder Wirbelsäulenschmerzen, eine verstärkte Darm- und Harnentleerung ohne pathologischen Charakter sowie eine erhöhte Infektanfälligkeit äußern." },
        { type: "para", text: "Auf emotionaler Ebene können Erinnerungen und Träume wieder auftauchen und scheinbar grundlos Tränen auslösen. Diese Erholungsphase ist physiologisch, sollte jedoch 72 Stunden nicht überschreiten." },
        { type: "rop", body: [
          "Diese vorübergehende Vulnerabilität wird häufig nach einer ersten ROP-Sitzung beobachtet. Diese Reaktionen werden in diesem Ansatz als heilsam, teilweise sogar als positiv, interpretiert. Es ist wichtig, die Patientin oder den Patienten über diese Reaktionen zu informieren, damit sie nicht als beunruhigend erlebt werden.",
          "Diese Reaktionen werden in diesem Ansatz im Licht der Heringschen Regel interpretiert: Symptome einer Krankheit bewegen sich in Richtung Heilung, wenn sie von oben nach unten, von innen nach außen, vom Chronischen zum Akuten verlaufen und frühere Krankheitsphasen erneut durchlaufen.",
          "Dies setzt voraus, dass die Vitalität ausreicht, um im Sinne der Heringschen Regel zu reagieren. Deshalb muss jede Behandlung angemessen dosiert werden: weder zu lang noch zu intensiv noch zu häufig, damit der Körper die Möglichkeit behält, seine Anpassungs- und Gesundheitskapazitäten wiederherzustellen und seine Erkrankung besser zu bewältigen.",
          "In den meisten Fällen ist ein Behandlungsabstand von drei bis vier Wochen angemessen.",
          "Die ROP-Massagetechnik kann in drei Zeiten gegliedert werden: 1. Gewebediagnostik, 2. Stimulation der Zone, 3. Zeit des „Nichtstuns und Geschehenlassens“. Sie entspricht damit jener Regel, die bereits der Begründer der Osteopathie, Dr. A. T. Still, formulierte: „Find it, fix it and leave it alone.“",
        ]},

        { type: "sub", text: "Adaptations- und Widerstandsphase" },
        { type: "para", text: "Schlüsselbegriffe: Organisation der Abwehr." },
        { type: "para", text: "Diese Phase ist durch die Notwendigkeit gekennzeichnet, persistierende Stressoren mittel- oder langfristig zu bewältigen. Das sympathische System bleibt beteiligt, ist jedoch weniger aktiv als in der Alarmphase. Die hormonelle HHN-/HPA-Achse unterstützt die neurologische SAM-Achse." },
        { type: "lead", label: "Neurologische Achse", text: "In diesem Modell zeigen Parasympathikus und Sympathikus Zeichen einer fortschreitenden Erschöpfung." },
        { type: "lead", label: "Hormonelle Achse", text: "Unter dem Einfluss der durch den Hippocampus modulierten Amygdala kann die Hypothalamus-Hypophysen-Nebennieren-Achse durch eine hormonelle Hyperstimulation und anschließend eine Hypostimulation gekennzeichnet sein." },
        { type: "leadBullets", items: [
          { label: "Nebennieren", text: "Die HHN-/HPA-Achse unterstützt die Cortisolproduktion, um die für die allostatische Last notwendige Verfügbarkeit von Glukose, Triglyzeriden und Cholesterin aufrechtzuerhalten; dabei kann der Blutdruck ansteigen." },
          { label: "Pankreas", text: "Es sezerniert Insulin, um den Anstieg des Blutzuckerspiegels gemeinsam mit der hepatischen Glykogenolyse zu kompensieren. Langfristig können sich Hyperinsulinämie und anschließend Insulinresistenz entwickeln." },
          { label: "Schilddrüse", text: "Unter dem Einfluss des hypophysären TSH setzt die Schilddrüse die Hormone T3 und T4 frei, um den Stoffwechsel und die für die Muskelkontraktion notwendige ATP-Produktion zu unterstützen. Es können dann hyperthyreoseähnliche Störungen beobachtet werden: muskulärer Gewichtsverlust, Asthenie, Tachykardie, Nervosität, Tremor, Wärmeintoleranz und profuses Schwitzen." },
          { label: "Gonadales Defizit", text: "Es kann sich durch verminderte Fertilität, Libidoverlust, Dysmenorrhö, vorzeitige Prämenopause oder vorzeitige Andropause äußern." },
        ]},
        { type: "lead", label: "Akuter und chronischer Stress", text: "Akuter Stress ist zugleich stimulierend und notwendig; chronischer Stress ist schädlich." },
        { type: "lead", label: "Cortisol und chronischer Stress", text: "Langfristig kann Cortisol schädliche Wirkungen auf die körperliche und psychische Gesundheit haben:" },
        { type: "bullets", items: [
          "Erhöhung von Glukose, Triglyzeriden und Cholesterin mit gesteigertem Risiko für Diabetes, Atherosklerose und arterielle Hypertonie als Grundlage kardiovaskulärer Erkrankungen.",
          "Muskelatrophie durch Proteinkatabolismus.",
          "Osteoporose.",
          "Beeinträchtigung bestimmter Immunfunktionen.",
          "Dysbiose und Beeinträchtigung der Darmbarriere, die mitunter mit autoimmunen Phänomenen in Verbindung gebracht werden.",
          "Verlangsamung bestimmter Gewebereparaturprozesse.",
          "Störung des zirkadianen Rhythmus mit nächtlichen Schlafstörungen.",
          "Mögliche Folgen für die psychische Gesundheit.",
        ]},
        { type: "lead", label: "Funktionelle Störungen", text: "Unter chronischem Stress entwickeln sich nach und nach noch reversible physiologische Regulationsstörungen, abhängig von individueller Fragilität, Vererbung, körperlichen oder emotionalen Traumata in der Vorgeschichte, Lebensweise und osteopathischen Dysfunktionen. Gelenkschmerzen können bereits bei Reizschwellen auftreten, bei denen sie normalerweise nicht empfunden würden (Allodynie)." },
        { type: "lead", label: "Hormonelle Hypostimulation", text: "Sie kann auf eine Phase hormoneller Hyperstimulation folgen." },
        { type: "leadBullets", items: [
          { label: "Hypothyreose", text: "Die Symptome können Kälteempfindlichkeit, Energiemangel durch verminderten Stoffwechsel, Gewichtszunahme, Angst und Depression umfassen." },
          { label: "Hypoinsulinämie", text: "Nach einer Phase zellulärer Resistenz infolge Hyperinsulinämie können Hypoglykämie oder Prädiabetes auftreten, mit Entwicklung hin zu einem insulinabhängigen Typ-2-Diabetes." },
          { label: "Hypocortisolismus", text: "Ein Cortisolmangel kann mit orthostatischer Hypotonie und Schwindelgefühl beim Übergang vom Liegen zum Stehen einhergehen." },
        ]},
        { type: "lead", label: "Chronische Erkrankungen", text: "Die Fähigkeit des Körpers, die allostatische Last zu tolerieren, nimmt zunehmend ab. Der Körper kippt von einem funktionellen Ungleichgewicht in Erkrankungen, die zur Chronifizierung neigen. Die anatomische Integrität ist nicht mehr gesichert, und die Symptome werden durch fortschreitende Beeinträchtigung der neurologischen, hormonellen, immunologischen und emotionalen Antwort immer weniger reversibel:" },
        { type: "leadBullets", items: [
          { label: "Immunsystem", text: "Allergien, Asthma, Nahrungsmittelintoleranzen." },
          { label: "Verdauungssystem", text: "Viszerale Hypersensitivität, Verdauungs- oder Transitstörungen (Obstipation oder Diarrhö), gastroduodenale Ulzeration, gastroösophagealer Reflux, Dysbiose, funktionelle Kolopathien, Reizdarmsyndrom." },
          { label: "Emotionale Antwort", text: "Über den Locus coeruleus überstimuliert der Hypothalamus das limbische Gehirn, insbesondere die Amygdala, sowie das kognitive Gehirn. Dies löst Angst- und Furchtreaktionen aus. Betroffene werden hypersensibel gegenüber gewöhnlichen Alltagsereignissen; dadurch entstehen zahlreiche Fehlalarme, die Angst und Furcht weiter verstärken. Dyspnoe, thorakales Engegefühl sowie das Gefühl, keine Luft zu bekommen oder außer Atem zu sein, sind Veränderungen der Atmung, wie sie bei Angst und Depression vorkommen." },
        ]},
        { type: "rop", body: [
          "Während des Stadiums der Adaptation–Kompensation hat die ROP, wie andere nichtmedikamentöse Therapien, ihren Platz in der Behandlung reversibler funktioneller Störungen. Mit dem Übergang zur Chronizität und zu teilweiser oder vollständiger Irreversibilität reichen funktionelle Therapien allein jedoch nicht mehr aus; eine medikamentöse Behandlung wird dann notwendig.",
          "Funktionelle Therapien können dennoch als unterstützende Maßnahmen in ärztliche Behandlungen integriert werden; daher spricht man heute von integrativen Therapien. Ziel ist es im Rahmen der ROP, die Ausscheidungsorgane zu stimulieren, die für die Elimination der langfristigen metabolischen Belastung durch notwendige Medikamente zuständig sind, und zugleich die vitalen Kapazitäten zu unterstützen, um die Gesundheit bestmöglich zu erhalten und den Krankheitsprozess zu begleiten.",
        ]},

        { type: "sub", text: "Erschöpfungsphase" },
        { type: "para", text: "Schlüsselbegriffe: Erschöpfung, Niederlage, Kapitulation, Aufgeben." },
        { type: "para", text: "Diese Phase ist durch Dekompensation gekennzeichnet: Je nach individueller Fragilität kippen die Systeme in Richtung Erschöpfung und schließlich in Richtung Lebensende." },
        { type: "lead", label: "Neurologische Achse", text: "In diesem Modell funktionieren die SAM- und HHN-/HPA-Achsen nicht mehr korrekt; neurodegenerative Erkrankungen können auftreten: Morbus Parkinson, Multiple Sklerose, amyotrophe Lateralsklerose (ALS; historisch Morbus Charcot), Alzheimer-Krankheit usw." },
        { type: "lead", label: "Hormonelle Achse", text: "Hypothyreose, Nebenniereninsuffizienz, insulinabhängiger Diabetes." },
        { type: "lead", label: "Chronische Erkrankungen", text: "" },
        { type: "leadBullets", items: [
          { label: "Immunsystem", text: "Infektions- und Autoimmunerkrankungen, Entzündung." },
          { label: "Osteomuskuloartikuläres System", text: "Arthrose, Arthritis, Polyarthritis, Fibromyalgie." },
          { label: "Kardiovaskuläres System", text: "Schlaganfall, Myokardinfarkt, arterielle Verschlusskrankheit." },
          { label: "Limbisches System", text: "Depression. Eine Hippocampusatrophie kann mit Gedächtnisverlust und Desorientierung einhergehen, wie bei der Alzheimer-Krankheit. Auch Astrozyten können dann am pathologischen Prozess beteiligt sein. Dendritische Verbindungen zwischen Neuronen können beeinträchtigt werden. Es kommt zum neuronalen Zelltod im Hippocampus und zur Entwicklung hin zur Alzheimer-Krankheit." },
          { label: "Krebserkrankungen", text: "" },
        ]},
        { type: "rop", body: [
          "In diesem Stadium haben funktionelle Therapien keinen eigenen kurativen Anspruch mehr. Sie können nur noch als psychologische Begleitung und supportive Unterstützung dienen.",
        ]},
      ],
    },
    {
      id: "rop-stress",
      title: "ROP des Stressmechanismus",
      blocks: [
        { type: "sub", text: "Okzipitale Zonen" },
        { type: "lead", label: "Allgemeines Adaptationssyndrom", text: "" },
        { type: "bullets", items: [
          "Limbisches System, Diencephalon, Hirnstamm, Hypophyse, Nebennieren (HHN-/HPA-Achse).",
          "Hirnnerven: Nervus trigeminus V, Nervus vagus X, Nervus hypoglossus XII, C2 und C3.",
          "Nervus vagus X: Foramen magnum, Foramen jugulare, Spatium viscerale des Halses, kardio-pulmonaler Plexus, Hiatus oesophageus, Plexus coeliacus.",
          "Wirbelsäule: sympathisches System C8 bis L2 und pelvines parasympathisches System S2 bis S4.",
          "Nervus phrenicus: C3–C4–C5 und Sedillot-Dreieck.",
        ]},
        { type: "lead", label: "Lokoregionales Syndrom", text: "Lokale mechanische Kompression des somatischen oder autonomen Nervensystems mit sekundärer allgemeiner Auswirkung." },
        { type: "leadBullets", items: [
          { label: "Erste Phase – Irritation", text: "Lokale Irritation durch Einklemmung eines Nervs, z. B. traumatische Kompression des unteren Zervikalganglions durch Blockierung von C7/T1/erster Rippe. Folge: sympathische Fazilitation im Einflussgebiet des unteren Zervikalganglions." },
          { label: "Zweite Phase – Inhibition", text: "Wird die Kompression nicht gelöst, gilt der komprimierte Nerv als inhibiert. Das kompensatorische Nervensystem wird dann freigesetzt; im genannten Beispiel entsteht ein parasympathisches Syndrom durch Inhibition des sympathischen Systems." },
        ]},
        { type: "figure", src: "/chapter-5/figure-5-14.png", alt: "Nervus vagus X in der Medulla oblongata — rechter Daumen auf dem Interphalangealgelenk der Großzehe", caption: "Abbildung 5.14 — Nervus vagus X in der Medulla oblongata (rechter Daumen auf dem Interphalangealgelenk der Großzehe)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-15.png", alt: "Nervus vagus X im Foramen jugulare — linker Daumen auf dem proximalen Interphalangealgelenk der 4. und 5. Zehe", caption: "Abbildung 5.15 — Nervus vagus X im Foramen jugulare (linker Daumen auf dem proximalen Interphalangealgelenk der 4. und 5. Zehe)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-17.png", alt: "Hiatus oesophageus und Kardia", caption: "Abbildung 5.17 — Hiatus oesophageus und Kardia", orientation: "portrait" },
      ],
    },
  ],
  slides: {
    url: "/chapter-5/Chapter5 Slides GE.pdf",
    label: "Folien",
    description: "Visuelle Zusammenfassung des Kapitels — Stressmechanismus, AAS und ROP-Interventionen.",
  },
}

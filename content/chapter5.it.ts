// Chapter 5 content — Italian
// Source: Chapter5_Meccanismo_dello_Stress_ROP_IT_fluency_revised_final.docx (Guy Boitout)
// Section IDs and block structure mirror content/chapter5.fr.ts. Internal
// illustrations remain the French source images until translated artwork is
// available; the revision sheet, clinical case and synthesis slides are omitted
// until Italian versions exist. Print-only cross-references (figure/chapter/page)
// are dropped: the web edition shows figures inline and has no page numbers.

import type { Chapter } from './types'

export type { Block, Section, Chapter } from './types'

export const chapter5It: Chapter = {
  slug: "chapter-5",
  number: "5",
  title: "Meccanismo dello stress",
  sections: [
    {
      id: "presentation",
      title: "Presentazione",
      blocks: [
        { type: "para", text: "Lo stress è un termine utilizzato costantemente nelle società moderne. Competizione, concorrenza e ricerca della performance ci spingono ad andare sempre più in fretta, con il rischio, se non prestiamo attenzione, che lo stress ci sopraffaccia fino all’esaurimento." },
        { type: "para", text: "La concezione moderna dello stress è stata sviluppata da Walter Cannon (1871-1945), che contribuì a formalizzare il concetto di omeostasi nel solco dei lavori di Claude Bernard." },
        { type: "para", text: "Hans Selye (1907-1982) descrisse la sindrome generale di adattamento (SGA), intesa come l’insieme dei meccanismi fisiologici, neurologici, endocrini e immunitari mobilitati dall’organismo in risposta a stimoli stressogeni." },
        { type: "para", text: "A questi tre sistemi è stato successivamente affiancato il sistema limbico, o emozionale, per la componente affettiva associata alla risposta allo stress." },
      ],
    },
    {
      id: "definitions",
      title: "Definizioni",
      blocks: [
        { type: "leadBullets", items: [
          { label: "Stress", text: "Lo stress — o, più precisamente, la risposta a una situazione percepita come minacciosa — innesca una cascata di reazioni volte a proteggere il corpo da uno scostamento eccessivo rispetto ai valori omeostatici." },
          { label: "Omeostasi", text: "Capacità dell’organismo di mantenere l’equilibrio del proprio ambiente interno: temperatura corporea, pH ematico, parametri ematochimici, glicemia, ecc." },
          { label: "Allostasi", text: "Capacità adattativa dell’organismo in risposta a diversi stressori ambientali, al fine di mantenere l’omeostasi in un contesto mutevole." },
        ]},
        { type: "para", text: "In altri termini, la funzione della risposta allo stress è mantenere la stabilità (omeostasi) attraverso il cambiamento (allostasi)." },
        { type: "para", text: "Risposta allo stress, omeostasi e allostasi sono strettamente correlate. Poiché controlla le funzioni interne, il sistema nervoso autonomo (SNA) svolge un ruolo centrale nella risposta a una situazione di stress o di conflitto, con l’obiettivo di preservare l’omeostasi. Il presente capitolo è quindi dedicato al ruolo del SNA nella risposta allo stress e alle sue relazioni con il cervello limbico e la corteccia." },
        { type: "para", text: "La risposta allo stress è un processo biologico protettivo fondamentale, al quale siamo tutti esposti e per il quale siamo biologicamente preparati. A breve termine è protettiva, perché favorisce il ritorno all’omeostasi. Quando diventa intensa, protratta e ripetuta, comporta tuttavia un costo energetico. Può incidere sulla vitalità e accompagnarsi a una riduzione delle capacità adattative. Il corpo può allora sviluppare progressivamente disturbi funzionali e, a seconda della costituzione e delle vulnerabilità individuali, evolvere verso malattie croniche o degenerative." },
      ],
    },
    {
      id: "stresseurs",
      title: "Stressori",
      blocks: [
        { type: "para", text: "Nel linguaggio comune si tende spesso a confondere lo stress con lo stressore. Lo stressore, o agente stressogeno, è ciò che innesca la risposta allo stress." },
        { type: "lead", label: "Definizione", text: "Gli stressori sono stimoli che oltrepassano il funzionamento basale abituale di un individuo e attivano la risposta allo stress." },
        { type: "lead", label: "Stress negativo", text: "È definito distress e può manifestarsi con tristezza, senso di fallimento, dubbio, insicurezza, paura, collera, ecc. Si accompagna a una risposta neuroendocrina che coinvolge il cortisolo e può influenzare i tre grandi sistemi coinvolti nell’omeostasi: nervoso, endocrino e immunitario." },
        { type: "para", text: "Tutti i sistemi possono successivamente essere interessati, in funzione delle predisposizioni genetiche individuali e dello stile di vita: disturbi digestivi, asma, disturbi dell’apparato muscolo-scheletrico, infezioni, malattie cardiovascolari, ansia, depressione, malattie autoimmuni, malattie neurodegenerative, tumori, ecc." },
        { type: "lead", label: "Stress positivo", text: "È definito eustress e può manifestarsi con amore, gioia, entusiasmo, libertà, fiducia, sicurezza, ecc. Si accompagna all’attivazione di altri neuromediatori, tra cui l’adrenalina, che possono sostenere una risposta adattativa favorevole a breve termine." },
        { type: "figure", src: "/chapter-5/figure-5-1.jpeg", alt: "Schema dei tre grandi tipi di stressori: fisici, emozionali e biochimici", caption: "Figura 5.1 — I tre grandi tipi di stressori", orientation: "landscape" },
        { type: "lead", label: "Tipi di stressori", text: "Alcuni sono facilmente identificabili, in particolare quelli fisici ed emozionali. Gli stressori biochimici, invece, agiscono molto spesso in modo silente e per questo non vengono presi in considerazione." },
        { type: "leadBullets", items: [
          { label: "Stressori fisici", text: "Incidenti, colpi di frusta cervicali, eccesso di attività fisica o sportiva fino all’esaurimento o, al contrario, inattività, condizioni della nascita, ritmo di vita frenetico, mancanza di sonno, sovraccarichi sensoriali — rumore, odori, luce, dolore intenso o cronico, disgusto con nausea verso gli alimenti —, inquinamento atmosferico, climi estremi, ecc." },
          { label: "Stressori emozionali, psicologici e sociali", text: "Rientrano tra gli stressori che possono avere un impatto importante sulla salute: rotture affettive, conflitti familiari, separazioni, rifiuto sociale o professionale, isolamento, molestie, insuccessi scolastici o professionali. Gli stressori emotivamente e psicologicamente più distruttivi sono gli abusi e le aggressioni sessuali, l’incesto e lo stupro." },
          { label: "Stressori biochimici", text: "Squilibri alimentari e intolleranze, disbiosi (alterazione del microbiota intestinale), parassitosi, carica virale, esposizioni ambientali, metalli pesanti, interferenti endocrini, ecc. possono alterare in modo insidioso lo stato generale e contribuire al deterioramento della salute." },
        ]},
        { type: "lead", label: "Interpretazione", text: "Non conta soltanto la natura dello stressore, ma anche l’interpretazione che ne dà il soggetto “stressato”, cioè la rappresentazione che egli costruisce della minaccia reale o presunta. Ciò che conta è il modo in cui il cervello interpreta gli stressori e ne trasmette gli effetti ai grandi sistemi coinvolti nel mantenimento dell’omeostasi." },
        { type: "lead", label: "Carico allostatico", text: "Finché la vitalità dell’individuo riesce a tollerare il carico di stress, o carico allostatico, il meccanismo adattativo regge." },
        { type: "para", text: "Quando intensità, durata, frequenza, urgenza e imprevedibilità degli stressori si accumulano, finiscono nel tempo per indebolire l’individuo e produrre effetti dannosi sulla salute. La vulnerabilità agli stressori aumenta. L’organismo può allora evolvere progressivamente verso una scompensazione dei meccanismi di risposta allo stress." },
        { type: "lead", label: "Effetti cumulativi degli stressori", text: "I tre tipi di stressori — fisici, emozionali e biochimici — interagiscono tra loro. Lo stress emozionale può influenzare il tratto gastrointestinale, provocare dolore spinale, lombare o cervicale e incidere sulla vita quotidiana, professionale o sportiva. Le disfunzioni osteo-muscolo-articolari croniche dolorose, come quelle osservate nella fibromialgia, possono accompagnarsi a modificazioni psicologiche quali ansia o depressione e influenzare i processi di regolazione biologica. Questa triade di stressori può contribuire allo sviluppo di malattie croniche, la cui presa in carico trae beneficio da una prospettiva globale della salute." },
        { type: "rop", body: [
          "Il meccanismo dello stress si colloca a monte della malattia. In funzione delle vulnerabilità proprie dell’individuo — legate all’ereditarietà, agli antecedenti patologici e allo stile di vita — possono svilupparsi malattie per fallimento dei meccanismi di adattamento. In questa prospettiva, ci si ammala perché si perde salute, e non il contrario.",
          "La ROP integra pienamente questa visione della salute e della malattia: un sintomo deve essere ricollocato nel proprio contesto, cioè nella sindrome generale di adattamento.",
        ]},
        { type: "figure", src: "/chapter-5/figure-5-2.jpeg", alt: "Schema dell’effetto cumulativo degli stressori fisici, emozionali e biochimici", caption: "Figura 5.2 — Effetto cumulativo degli stressori", orientation: "portrait" },
      ],
    },
    {
      id: "sga",
      title: "Sindrome generale di adattamento (SGA)",
      blocks: [
        { type: "para", text: "Questo modello, proposto da Hans Selye, spiega l’impatto dello stress sull’organismo e il modo in cui quest’ultimo tenta di rispondervi. Si sviluppa in quattro fasi: allarme, recupero, adattamento-resistenza ed esaurimento." },
        { type: "figure", src: "/chapter-5/figure-5-3.jpeg", alt: "Curva delle quattro fasi della sindrome generale di adattamento", caption: "Figura 5.3 — Le quattro fasi della sindrome da stress", orientation: "portrait" },

        { type: "sub", text: "Fase di allarme" },
        { type: "para", text: "Parole chiave: reazione immediata agli stressori, urgenza, mobilizzazione delle risorse energetiche, attivazione del simpatico." },
        { type: "para", text: "Il modello dei tre livelli funzionali — rettiliano, limbico e corticale — è utilizzato qui come cornice pedagogica nell’ambito del modello presentato in quest’opera." },
        { type: "lead", label: "Amigdala", text: "Allertata da una minaccia, reale o immaginaria, attiva l’ipotalamo, che avvia la risposta allo stress lungo due assi: dapprima l’asse neurologico, poi l’asse ormonale." },
        { type: "para", text: "Contemporaneamente, l’ippocampo e i circuiti corticali partecipano alla modulazione della risposta emozionale prima che l’informazione raggiunga la corteccia prefrontale, dove viene analizzata e resa cosciente." },
        { type: "figure", src: "/chapter-5/figure-5-4.jpeg", alt: "Schema dell’asse neurologico SAM e dell’asse ormonale HHS", caption: "Figura 5.4 — Asse neurologico SAM e asse ormonale HHS", orientation: "landscape" },
        { type: "lead", label: "Asse neurologico", text: "In una situazione di emergenza prevale la risposta simpatica. È immediata. Si produce mediante l’attivazione ipotalamica, che stimola il locus coeruleus, situato nel ponte del tronco encefalico. Quest’ultimo libera noradrenalina che, a sua volta, attiva la midollare del surrene, la quale secerne l’ormone dell’emergenza: l’adrenalina. È l’asse simpatico-adreno-midollare (SAM). Il simpatico, presente in tutto il corpo, induce una risposta globale per reagire a una minaccia o a un pericolo." },
        { type: "para", text: "L’asse SAM accelera la frequenza cardiaca e respiratoria, aumenta il metabolismo e la pressione arteriosa per favorire l’apporto ematico ai muscoli scheletrici, consentendo la risposta immediata più adatta alla sopravvivenza: fuga, lotta o immobilizzazione." },
        { type: "para", text: "Il simpatico stimola contemporaneamente le attività sensoriali — visiva, uditiva e olfattiva — di fronte al pericolo. L’attivazione del simpatico comporta di fatto il passaggio in secondo piano delle funzioni non immediatamente essenziali alla sopravvivenza, in particolare quelle gonadiche e digestive. Questa fase neurologica di emergenza è di breve durata." },
        { type: "para", text: "Se l’agente stressogeno cessa rapidamente o se la risposta è sufficiente, il simpatico ritorna, mediante un meccanismo di retrocontrollo, al proprio equilibrio o alla normotonia. In caso contrario, l’ipotalamo attiva in un secondo tempo l’asse ormonale ipotalamo-ipofisi-surrene (HHS)." },
        { type: "lead", label: "Asse ormonale", text: "Sotto l’azione dell’ormone ipotalamico CRH, l’adenoipofisi libera ACTH, che a sua volta stimola la corteccia surrenale. Questa cascata ormonale libera diversi ormoni: cortisolo, aldosterone e DHEA. Si tratta dell’asse HHS, o asse corticotropo." },
        { type: "leadBullets", items: [
          { label: "Cortisolo", text: "Contribuisce ad aumentare la disponibilità di glucosio, trigliceridi e colesterolo e modula la risposta immunitaria." },
          { label: "Aldosterone", text: "Interviene nel riassorbimento renale di acqua e di alcuni minerali." },
          { label: "DHEA", text: "È un precursore degli ormoni steroidei — testosterone e progesterone — i cui effetti precisi restano incompletamente chiariti; gli vengono attribuite possibili azioni anti-invecchiamento e antinfiammatorie, nonché un possibile sostegno alla libido e all’erezione." },
          { label: "Feedback", text: "Un meccanismo di retrocontrollo agisce su adenoipofisi, ipotalamo e ippocampo per limitare la risposta allo stress quando i livelli ormonali tornano compatibili con l’equilibrio." },
        ]},
        { type: "lead", label: "Disturbi funzionali", text: "In questa fase di allarme, i sintomi sono in linea di principio reversibili. Si tratta dello stadio dei disturbi funzionali, in cui l’integrità anatomica rimane preservata. La disfunzione è interpretata qui come uno squilibrio persistente tra parasimpatico e simpatico a favore del simpatico." },

        { type: "sub", text: "Fase di recupero" },
        { type: "para", text: "Parole chiave: fatica, recupero, vulnerabilità transitoria." },
        { type: "para", text: "Dopo la mobilizzazione generale delle risorse, il corpo ha bisogno di un periodo di recupero. L’individuo si sente stanco e avverte il bisogno di riposare. I livelli di adrenalina e cortisolo diminuiscono e la risposta allo stress diventa temporaneamente meno efficace. Questa fase di vulnerabilità transitoria può manifestarsi con una riacutizzazione passeggera di dolori articolari o spinali, con un aumento dell’eliminazione intestinale e urinaria privo di significato patologico, nonché con una maggiore predisposizione alle infezioni." },
        { type: "para", text: "Sul piano emozionale, ricordi e sogni possono riaffiorare e provocare lacrime senza ragione apparente. Questa fase di recupero è fisiologica, ma non dovrebbe superare le 72 ore." },
        { type: "rop", body: [
          "Questa vulnerabilità transitoria si osserva spesso dopo una prima seduta di ROP. In questo approccio, le reazioni sono interpretate come benefiche, talvolta persino positive. È importante informare il paziente di queste possibili reazioni affinché non vengano vissute come motivo di preoccupazione.",
          "In questo modello, tali reazioni sono interpretate alla luce della legge di Hering, secondo la quale i sintomi evolvono verso la guarigione quando procedono: dall’alto verso il basso; dall’interno verso l’esterno; dal cronico verso l’acuto; ripercorrendo fasi precedenti della malattia.",
          "Ciò presuppone che la vitalità sia sufficiente per reagire secondo la legge di Hering. Per questo motivo ogni trattamento deve essere dosato in modo appropriato — né troppo lungo, né troppo intenso, né troppo frequente — così da lasciare al corpo la possibilità di restaurare le proprie capacità adattative e di salute, e quindi di sostenere meglio la lotta contro la malattia.",
          "Nella maggior parte dei casi, un intervallo di tre o quattro settimane tra i trattamenti costituisce una frequenza adeguata.",
          "La tecnica di massaggio in ROP può essere scomposta in tre tempi: 1. diagnosi tissutale; 2. stimolazione della zona; 3. tempo del “non fare nulla e lasciar accadere”. Essa è coerente con la regola già formulata dal fondatore dell’osteopatia, il Dr. A. T. Still: “trovalo, correggilo e lascialo stare” (“find it, fix it and leave it alone”).",
        ]},

        { type: "sub", text: "Fase di adattamento-resistenza" },
        { type: "para", text: "Parole chiave: organizzazione delle difese." },
        { type: "para", text: "Questa fase è caratterizzata dalla necessità di gestire stressori persistenti nel medio o lungo periodo. Il sistema simpatico resta coinvolto, ma è meno attivo rispetto alla fase di allarme. L’asse ormonale HHS sostiene l’asse neurologico SAM." },
        { type: "lead", label: "Asse neurologico", text: "In questo modello, i sistemi parasimpatico e simpatico mostrano segni di progressivo esaurimento." },
        { type: "lead", label: "Asse ormonale", text: "Sotto l’influenza dell’amigdala modulata dall’ippocampo, l’asse ipotalamo-ipofisi-surrene può essere caratterizzato da un’iperstimolazione ormonale e, successivamente, da un’ipostimolazione." },
        { type: "leadBullets", items: [
          { label: "Surreni", text: "L’asse HHS sostiene la produzione di cortisolo per mantenere la disponibilità di glucosio, trigliceridi e colesterolo necessaria al carico allostatico, con possibile aumento della pressione arteriosa." },
          { label: "Pancreas", text: "Secerne insulina per compensare l’aumento della glicemia, insieme alla glicogenolisi epatica. A lungo termine possono instaurarsi iperinsulinemia e successivamente insulino-resistenza." },
          { label: "Tiroide", text: "Sotto l’influenza del TSH ipofisario, la tiroide libera gli ormoni T3 e T4 per sostenere il metabolismo e la produzione di ATP necessaria alla contrazione muscolare. Possono quindi essere osservate alterazioni di tipo ipertiroideo: atrofia muscolare o perdita di massa muscolare, astenia, tachicardia, nervosismo, tremore, intolleranza al caldo e sudorazione profusa." },
          { label: "Deficit gonadico", text: "Può manifestarsi con riduzione della fertilità, calo della libido, dismenorrea, premenopausa precoce o andropausa precoce." },
        ]},
        { type: "lead", label: "Stress acuto e stress cronico", text: "Lo stress acuto è al tempo stesso stimolante e necessario; lo stress cronico è dannoso." },
        { type: "lead", label: "Cortisolo e stress cronico", text: "A lungo termine, il cortisolo può avere effetti dannosi sulla salute fisica e mentale:" },
        { type: "bullets", items: [
          "Aumento dei livelli di glucosio, trigliceridi e colesterolo, con incremento del rischio di diabete, aterosclerosi e ipertensione arteriosa, contribuendo alle malattie cardiovascolari.",
          "Atrofia muscolare da catabolismo proteico.",
          "Osteoporosi.",
          "Alterazione di alcune funzioni immunitarie.",
          "Disbiosi e alterazione della barriera intestinale, talvolta associate a fenomeni autoimmuni.",
          "Rallentamento di alcuni processi di riparazione tissutale.",
          "Alterazione del ritmo circadiano con disturbi del sonno notturno.",
          "Possibili conseguenze sulla salute mentale.",
        ]},
        { type: "lead", label: "Disturbi funzionali", text: "Progressivamente, sotto stress cronico, si instaurano disregolazioni fisiologiche ancora reversibili, in funzione della fragilità individuale, dell’ereditarietà, degli antecedenti traumatici fisici o emozionali, dello stile di vita e delle disfunzioni osteopatiche. Possono comparire dolori articolari a una soglia alla quale normalmente non verrebbero percepiti (allodinia)." },
        { type: "lead", label: "Ipostimolazione ormonale", text: "Può far seguito a una fase di iperstimolazione ormonale." },
        { type: "leadBullets", items: [
          { label: "Ipotiroidismo", text: "I sintomi possono comprendere intolleranza al freddo, mancanza di energia dovuta alla riduzione del metabolismo, aumento di peso, ansia e depressione." },
          { label: "Ipoinsulinemia", text: "Dopo un periodo di resistenza cellulare legato all’iperinsulinemia, può comparire ipoglicemia o prediabete, con possibile evoluzione verso un diabete di tipo 2 insulinodipendente." },
          { label: "Ipocortisolismo", text: "Il deficit di cortisolo può accompagnarsi a ipotensione ortostatica e a una sensazione di stordimento nel passaggio dalla posizione supina alla posizione eretta." },
        ]},
        { type: "lead", label: "Patologie croniche", text: "Progressivamente, la capacità del corpo di tollerare il carico allostatico diminuisce. L’organismo passa allora da uno squilibrio funzionale a patologie che tendono alla cronicizzazione. L’integrità anatomica non è più garantita e i sintomi diventano sempre meno reversibili per la progressiva alterazione delle risposte neurologica, ormonale, immunitaria ed emozionale:" },
        { type: "leadBullets", items: [
          { label: "Sistema immunitario", text: "Allergie, asma, intolleranze alimentari." },
          { label: "Sistema digestivo", text: "Ipersensibilità viscerale, disturbi digestivi o del transito intestinale (stipsi o diarrea), ulcerazione gastroduodenale, reflusso gastroesofageo, disbiosi, colopatie funzionali, sindrome dell’intestino irritabile." },
          { label: "Risposta emozionale", text: "Attraverso il locus coeruleus, l’ipotalamo sovrastimola il cervello limbico, in particolare l’amigdala, così come il cervello cognitivo. Ciò genera reazioni di paura e ansia. Gli individui diventano ipersensibili a eventi ordinari della vita quotidiana, creando molteplici falsi allarmi che aumentano ulteriormente paura e ansia. Dispnea, oppressione toracica, sensazione di fiato corto o di mancanza d’aria sono alterazioni respiratorie riscontrate nell’ansia e nella depressione." },
        ]},
        { type: "rop", body: [
          "Durante lo stadio di adattamento-compensazione, la ROP, come altre terapie non farmacologiche, ha pienamente un ruolo nell’approccio ai disturbi funzionali reversibili. Tuttavia, con l’evoluzione verso la cronicità e verso l’irreversibilità parziale o totale, le terapie funzionali da sole non sono più sufficienti e devono lasciare spazio al trattamento medico-farmacologico.",
          "Le terapie funzionali possono tuttavia integrarsi ai trattamenti medici come supporto; da qui il termine oggi utilizzato di terapie integrative. L’obiettivo, nell’ambito della ROP, è allora stimolare gli organi emuntori incaricati di eliminare il carico metabolico a lungo termine associato ai farmaci necessari, sostenendo al tempo stesso le capacità vitali, al fine di preservare il più possibile la salute nella lotta contro la malattia.",
        ]},

        { type: "sub", text: "Fase di esaurimento" },
        { type: "para", text: "Parole chiave: esaurimento, sconfitta, capitolazione, rinuncia." },
        { type: "para", text: "Questa fase è caratterizzata dalla scompensazione. In funzione della fragilità individuale, i sistemi evolvono verso l’esaurimento e, in ultima analisi, verso la fine della vita." },
        { type: "lead", label: "Asse neurologico", text: "In questo modello, gli assi SAM e HHS non funzionano più correttamente e possono comparire malattie neurodegenerative: malattia di Parkinson, sclerosi multipla, sclerosi laterale amiotrofica (SLA; storicamente malattia di Charcot), malattia di Alzheimer, ecc." },
        { type: "lead", label: "Asse ormonale", text: "Ipotiroidismo, insufficienza surrenalica, diabete insulinodipendente." },
        { type: "lead", label: "Patologie croniche", text: "" },
        { type: "leadBullets", items: [
          { label: "Sistema immunitario", text: "Malattie infettive e autoimmuni, infiammazione." },
          { label: "Sistema osteo-muscolo-articolare", text: "Artrosi, artrite, poliartrite, fibromialgia." },
          { label: "Sistema cardiovascolare", text: "Ictus, infarto miocardico, arteriopatia." },
          { label: "Sistema limbico", text: "Depressione. L’atrofia dell’ippocampo può accompagnarsi a perdita di memoria e disorientamento, come nella malattia di Alzheimer. Anche gli astrociti possono partecipare al processo patologico. Le connessioni dendritiche tra neuroni possono essere alterate. Questo corrisponde alla morte cellulare neuronale nell’ippocampo e alla progressione verso la malattia di Alzheimer." },
          { label: "Tumori", text: "" },
        ]},
        { type: "rop", body: [
          "In questo stadio, le terapie funzionali non hanno più una finalità curativa propria. Possono soltanto costituire un sostegno psicologico e un accompagnamento terapeutico.",
        ]},
      ],
    },
    {
      id: "rop-stress",
      title: "ROP del meccanismo dello stress",
      blocks: [
        { type: "sub", text: "Zone occipitali" },
        { type: "lead", label: "Sindrome generale di adattamento (SGA)", text: "" },
        { type: "bullets", items: [
          "Sistema limbico, diencefalo, tronco encefalico, ipofisi, surreni (asse HHS).",
          "Nervi cranici: trigemino V, vago X, ipoglosso XII, C2 e C3.",
          "Nervo vago X: forame magno, forame giugulare, compartimento viscerale del collo, plesso cardiopolmonare, iato esofageo, plesso celiaco.",
          "Colonna vertebrale: sistema simpatico da C8 a L2 e sistema parasimpatico pelvico da S2 a S4.",
          "Nervo frenico: C3-C4-C5 e triangolo di Sédillot.",
        ]},
        { type: "lead", label: "Sindrome locoregionale", text: "Compressione meccanica locale del sistema nervoso somatico o autonomo, con ripercussioni secondarie generali." },
        { type: "leadBullets", items: [
          { label: "Prima fase — irritazione", text: "Irritazione locale per intrappolamento di un nervo. Esempio: compressione traumatica del ganglio cervicale inferiore da blocco C7/T1/prima costa. Conseguenza: facilitazione simpatica del territorio di influenza del ganglio cervicale inferiore." },
          { label: "Seconda fase — inibizione", text: "Se la compressione non viene rimossa, il nervo compresso è considerato inibito. Il sistema nervoso compensatore viene allora liberato; nell’esempio, ciò determina una sindrome parasimpatica per inibizione del sistema simpatico." },
        ]},
        { type: "figure", src: "/chapter-5/figure-5-14.png", alt: "Nervo vago X nel midollo allungato — pollice destro sull’articolazione interfalangea dell’alluce", caption: "Figura 5.14 — Nervo vago X nel midollo allungato (pollice destro sull’articolazione interfalangea dell’alluce)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-15.png", alt: "Nervo vago X nel forame giugulare — pollice sinistro sull’articolazione interfalangea prossimale del 4º e 5º dito", caption: "Figura 5.15 — Nervo vago X nel forame giugulare (pollice sinistro sull’articolazione interfalangea prossimale del 4º e 5º dito)", orientation: "portrait" },
        { type: "figure", src: "/chapter-5/figure-5-17.png", alt: "Iato esofageo e cardias", caption: "Figura 5.17 — Iato esofageo e cardias", orientation: "portrait" },
      ],
    },
  ],
  slides: {
    url: "/chapter-5/Chapter5 Slides IT.pdf",
    label: "Diapositive",
    description: "Sintesi visiva del capitolo — meccanismo dello stress, SGA e interventi R.O.P.",
  },
}

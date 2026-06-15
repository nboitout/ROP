// Chapter 14 content — Italian
// Source: public/Chapter-14/Chapitre 14 Intestin grêle - Parties 1a, 1b, 2, 3.docx (Guy Boitout)

import type { Chapter } from './types'

export const chapter14It: Chapter = {
  slug: 'chapter-14',
  number: '14',
  title: 'Intestino tenue',
  sections: [
    {
      id: 'presentation',
      title: 'Presentazione',
      blocks: [
        { type: 'para', text: 'L\'intestino tenue è il viscere addominale più lungo del corpo: sul cadavere, la sua lunghezza è di circa 6-7 metri, mentre nel vivente è notevolmente inferiore a causa del suo tono muscolare. È costituito da due parti:' },
        { type: 'bullets', items: ['Il duodeno', 'Il digiuno-ileo.'] },
        { type: 'para', text: 'Si estendono dal piloro alla valvola ileocecale e svolgono un ruolo fondamentale nella digestione e nell\'assorbimento. Sebbene faccia parte dell\'intestino tenue, il duodeno è stato trattato in un capitolo separato (Capitolo 10) a causa delle sue peculiarità anatomiche e fisiologiche.' },
        { type: 'para', text: 'Il digiuno-ileo si distingue dal duodeno per:' },
        { type: 'bullets', items: [
          'Una parete sottile, liscia, completamente peritonizzata e molto mobile. Il suo lume è di soli 2-3 cm di diametro;',
          'Un ruolo fondamentale nella digestione, grazie all\'interazione della mucosa, delle secrezioni intestinali e del microbiota (o flora intestinale);',
          'Un ruolo importante nel metabolismo e nell\'immunità;',
          'Il suo sistema nervoso intrinseco, particolarmente sviluppato;',
          'Strette interazioni con l\'asse intestino-cervello, con possibili effetti sulla sfera emotiva.',
          'Dal punto di vista funzionale, l\'intestino tenue e il colon sono interdipendenti.',
        ]},
      ],
    },
    {
      id: 'situation',
      title: 'Situazione',
      blocks: [
        { type: 'para', text: 'Il digiuno-ileo occupa gran parte della cavità addominale, preferibilmente a sinistra rispetto a destra, all\'interno della cornice colica. Il digiuno è localizzato preferibilmente nel quadrante superiore sinistro dell\'addome. L\'ileo è localizzato preferibilmente nel quadrante inferiore destro dell\'addome.' },
      ],
    },
    {
      id: 'anatomie',
      title: 'Anatomia',
      blocks: [
        { type: 'lead', label: 'Digiuno-ileo', text: 'comprende 15-16 anse intestinali a forma di U, disposte in due gruppi. Un gruppo superiore a sinistra, il digiuno, più sviluppato dell\'ileo, le cui anse e sistema vascolare sono orientati prevalentemente in senso orizzontale. Un gruppo inferiore a destra, l\'ileo, le cui anse e sistema vascolare sono orientati prevalentemente in senso verticale.' },
        { type: 'lead', label: 'Mesentere', text: 'è un meso, ovvero una riflessione a doppio foglietto del peritoneo. Avvolge il digiuno-ileo e lo collega alla parete posteriore dell\'addome tramite la radice del mesentere.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig2 IT.png', caption: 'Figura 14.2 — Mesos', alt: 'I mesos del peritoneo', orientation: 'portrait' },
        { type: 'lead', label: 'Radice del mesentere', text: 'costituisce la linea di attacco del mesentere e contribuisce alla stabilità dell\'intestino tenue, altrimenti molto mobile. Misura 16-18 cm. Si estende dalla giunzione duodigiuno-digiunale alla valvola ileocecale, attraversando l\'asse mediano dell\'addome a livello dell\'ombelico (a livello del disco L3-L4). La giunzione duodigiuno-digiunale è mantenuta dal muscolo di Treitz, le cui fibre lisce si attaccano al pilastro destro del diaframma.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig3 IT.png', caption: 'Figura 14.3 — Radice del mesentere', alt: 'Radice del mesentere e il suo decorso addominale', orientation: 'landscape', syncHide: true },
        { type: 'lead', label: 'Muscolo di Treitz', text: 'partecipa al mantenimento dell\'angolo duodigiuno-digiunale mediante la sua contrazione, portando la radice del mesentere verso l\'alto e a sinistra. Favorendo una tensione longitudinale, partecipa allo svuotamento del contenuto duodenale nel digiuno. La radice del mesentere fornisce la vascolarizzazione e l\'innervazione all\'intestino tenue.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig4 IT.png', caption: 'Figura 14.4 — Muscolo di Treitz', alt: 'Muscolo di Treitz e angolo duodigiuno-digiunale', orientation: 'landscape' },
        { type: 'rop', body: [
          'La perdita di tensione longitudinale della radice del mesentere va correlata, sul piano clinico, alla sindrome della pinza aortomesenterica o nutcracker syndrome: una compressione della 4ª porzione del duodeno e della vena renale sinistra tra l\'aorta e l\'arteria mesenterica superiore. Lo svuotamento del contenuto duodenale nel digiuno può essere ritardato, con rischio di reflusso gastroduodenale.',
          'La ricca rete vascolare, nervosa e linfatica della radice del mesentere è altamente riflessogena. La stimolazione della sua zona riflessiva mira a facilitare una risposta funzionale del digiuno-ileo.',
        ]},
      ],
    },
    {
      id: 'rapports',
      title: 'Rapporti',
      blocks: [
        { type: 'bullets', items: [
          'L\'intestino tenue è intraperitoneale.',
          'A sinistra, il digiuno ricopre il colon discendente.',
          'A destra, l\'ileo lascia libero il colon ascendente.',
          'Dorsalmente, l\'intestino tenue è in rapporto con la parete addominale posteriore e gli organi retroperitoneali, in particolare la parte sopramesocolica del duodeno, i reni, gli ureteri e i colon ascendente e discendente.',
          'Ventralmente: il grande omento (già grande epiploon).',
          'Caudalmente: gli organi pelvici, soprattutto la vescica.',
          'Cranialmente: il mesocolon trasverso.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: 'Vascolarizzazione',
      blocks: [
        { type: 'para', text: 'L\'intestino tenue necessita di un\'ampia irrorazione vascolare e linfatica per svolgere le sue funzioni di digestione, assorbimento e immunità.' },
        { type: 'lead', label: 'Arteria mesenterica superiore', text: 'costituisce l\'asse arterioso principale dell\'intestino tenue. È un ramo dell\'aorta addominale. La sua origine si trova 1 cm al di sotto del tripode celiaco, in corrispondenza del disco intervertebrale Th12-L1. Inizialmente retropancreatica, poi anteriore alla 3ª porzione del duodeno, decorre tra i due foglietti del mesentere. Fornisce numerosi rami collaterali. Irrora tutto l\'intestino tenue, il colon ascendente e i 2/3 prossimali del colon trasverso.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig5 IT.png', caption: 'Figura 14.5 — Arteria mesenterica superiore', alt: 'Arteria mesenterica superiore e i suoi rami', orientation: 'portrait' },
        { type: 'para', text: 'Il suo polso, percepibile a livello della 3ª porzione del duodeno, a destra dell\'ombelico, può costituire un riferimento clinico vascolare, senza tuttavia consentire da solo conclusioni sul funzionamento intestinale.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig6 IT.png', caption: 'Figura 14.6 — Polso delle arterie della cavità addominale', alt: 'Polso delle arterie della cavità addominale', orientation: 'landscape' },
        { type: 'lead', label: 'Vena mesenterica superiore', text: 'situata a destra dell\'arteria mesenterica superiore, fa parte del sistema portale. Draina verso il fegato il sangue venoso carico dei nutrienti assorbiti nell\'intestino tenue.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig7 IT.png', caption: 'Figura 14.7 — Sistema portale', alt: 'Sistema portale epatico', orientation: 'landscape' },
        { type: 'lead', label: 'Rete linfatica', text: 'l\'intestino tenue possiede una rete linfatica sviluppata. Partecipa al sistema immunitario. Trasporta le molecole lipidiche e proteiche a catena lunga e le vitamine liposolubili A, D, E, K, convogliate verso il carrefour giugulo-succlavio sinistro tramite la cisterna del Pecquet e il dotto toracico.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig8 IT.png', caption: 'Figura 14.8 — Sistema linfatico', alt: 'Sistema linfatico addominale', orientation: 'landscape' },
      ],
    },
    {
      id: 'innervation',
      title: 'Innervazione',
      blocks: [
        { type: 'sub', text: 'Innervazione del peritoneo' },
        { type: 'para', text: 'Il peritoneo riceve una doppia innervazione, somatica e autonoma.' },
        { type: 'lead', label: 'Peritoneo parietale', text: 'riceve un\'innervazione somatica condivisa con la parete addominale tramite i nervi frenici, gli ultimi sei nervi intercostali e i nervi del plesso lombare. Possiede numerose terminazioni sensibili alla temperatura, alla pressione e al dolore. Questa innervazione condivisa con la parete addominale spiega la proiezione di dolori cervicali, scapolari, addominali e lombari di origine peritoneale e viscerale, trasmessi all\'apparato osteoartromuscolare dalle fibre somatiche del foglietto parietale.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig9 IT.png', caption: 'Figura 14.9 — Nervo frenico', alt: 'Nervo frenico e il suo decorso', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig10 IT.png', caption: 'Figura 14.10 — Nervi intercostali', alt: 'Nervi intercostali', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig11 IT.png', caption: 'Figura 14.11 — Nervi del plesso lombare', alt: 'Nervi del plesso lombare', orientation: 'landscape' },
        { type: 'lead', label: 'Peritoneo viscerale', text: 'riceve un\'innervazione autonoma estrinseca condivisa con i visceri. Simpatico: le sue radici provengono da Th8 a Th11. Raggiungono i plessi prevertebali celiaco e mesenterico superiore tramite i nervi splancnici maggiore e minore.' },

        { type: 'sub', text: 'Nervo vago e sistema nervoso simpatico' },
        { type: 'leadBullets', items: [
          { label: 'Sensibilità viscerale', text: 'il peritoneo viscerale è poco sensibile al tatto, alle variazioni termiche e alla sezione chirurgica. La sensibilità viscerale dipende dal sistema simpatico, stimolato dalle trazioni sull\'intestino e dalle sostanze chimiche.' },
          { label: 'Motricità simpatica', text: 'il Simpatico riduce il peristaltismo e le secrezioni intestinali, in particolare negli stati di stress, ansia, paura o sforzo fisico.' },
          { label: 'Nervo vago — motricità', text: 'è globalmente antagonista del Simpatico. Favorisce il peristaltismo e le secrezioni intestinali, nonché la permeabilità intestinale per favorire l\'assorbimento.' },
          { label: 'Nervo vago — sensibilità', text: 'il nervo vago contiene il 70-80% di fibre sensitive che informano costantemente il cervello sullo stato dei visceri. È connesso al sistema nervoso intrinseco.' },
        ]},

        { type: 'sub', text: 'Sistema nervoso enterico (SNE)' },
        { type: 'para', text: 'Il sistema nervoso intrinseco o enterico (SNE) è spesso definito come il secondo cervello o cervello addominale. È costituito da plessi intramurali situati nella stessa parete dell\'intestino tenue: il plesso mioenterico di Auerbach e il plesso sottomucoso di Meissner.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig13 IT.png', caption: 'Figura 14.13 — Plessi enterici intramurali', alt: 'Plesso di Auerbach e plesso di Meissner nella parete intestinale', orientation: 'landscape' },
        { type: 'bullets', items: [
          'Il SNE è sensibile ai segnali neuro-ormonali e alla composizione chimica del contenuto intestinale.',
          'Può funzionare in modo largamente autonomo rispetto al cervello e al midollo spinale finché le condizioni fisiologiche lo consentono.',
          'Partecipa in modo importante alla produzione di mediatori neurochimici, tra cui una grande quota di serotonina, acetilcolina, noradrenalina e GABA.',
          'Pacemaker intestinale: la parete dell\'intestino tenue possiede anche cellule di Cajal, situate negli strati muscolari longitudinali e circolari. Generano onde lente e partecipano al coordinamento della motricità intestinale.',
        ]},
      ],
    },
    {
      id: 'physiologie',
      title: 'Fisiologia',
      blocks: [
        { type: 'sub', text: 'Motricità' },
        { type: 'para', text: 'È innescata da tre grandi tipi di meccanismi:' },
        { type: 'bullets', items: [
          'Meccanico: per l\'allungamento della parete intestinale durante il passaggio del chimo.',
          'Neurologico: per l\'azione del nervo vago influenzato da segnali cefalici come la vista, l\'odore, il gusto e il tatto degli alimenti, nonché dai meccanorecettori intestinali.',
          'Ormono-chimico: dalle secrezioni gastriche, duodenali, epato-biliari e pancreatiche.',
        ]},
        { type: 'para', text: 'L\'intestino tenue è animato da contrazioni ritmiche, movimenti di andirivieni e segmentazione che assicurano l\'omogenizzazione del chimo, e da peristaltismi che consentono la progressione del chimo.' },

        { type: 'sub', text: 'Ecosistema intestinale' },
        { type: 'para', text: 'L\'intestino tenue costituisce un ecosistema formato dalla mucosa intestinale, dal sistema immunitario e dal microbiota intestinale.' },
        { type: 'lead', label: 'Mucosa intestinale', text: 'costituisce l\'interfaccia tra il mezzo interno dell\'organismo e il contenuto del lume digestivo. Agisce come una barriera selettiva per consentire la digestione e l\'assorbimento.' },
        { type: 'lead', label: 'Digestione', text: 'corrisponde alla trasformazione degli alimenti in molecole semplici che possono poi essere assorbite. Le cellule caliciformi producono un muco protettivo. Le cellule di Lieberkühn partecipano alla secrezione intestinale leggermente alcalina e a funzioni enzimatiche e antimicrobiche. Gli enterociti o cellule assorbenti svolgono una funzione di barriera selettiva grazie alla loro disposizione intercellulare (desmosomi), consentendo l\'assorbimento dei micronutrienti pur limitando il passaggio di macromolecole insufficientemente degradate.' },
        { type: 'lead', label: 'Assorbimento', text: 'la mucosa intestinale è ricoperta di villi a forma di espansioni digitiformi il cui asse centrale contiene cellule muscolari lisce e una rete sanguigna e linfatica. I villi sono a loro volta ricoperti di microvilli che formano un orletto a spazzola, il che moltiplica notevolmente la superficie di scambio. L\'intestino tenue disteso avrebbe una superficie equivalente a un campo da tennis.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig14 IT.png', caption: 'Figura 14.14 — Villo intestinale', alt: 'Organizzazione istologica di un villo intestinale', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Via ematica', text: 'i capillari sanguigni assorbono acqua, sali minerali, osi semplici, aminoacidi, acidi grassi a catena corta e vitamine idrosolubili. Questi nutrienti vengono trasportati al fegato tramite il sistema portale.' },
          { label: 'Via linfatica', text: 'i capillari linfatici (o chiliferi) assorbono principalmente grassi, proteine a catena lunga e vitamine liposolubili A, D, E, K. Si uniscono successivamente alla rete linfatica, alla cisterna del Pecquet, al dotto toracico, prima di sfociare nella rete venosa del carrefour giugulo-succlavio sinistro.' },
        ]},
        { type: 'rop', body: [
          'L\'azione riflessiva sulla motricità intestinale mira a sostenere la digestione e l\'assorbimento.',
          'L\'azione riflessiva sul fegato e sul sistema linfatico mira a sostenere la qualità dell\'assorbimento e le funzioni immunitarie.',
        ]},
        { type: 'lead', label: 'Sistema immunitario', text: 'recettori situati sulla superficie dell\'intestino identificano alcuni agenti patogeni o sostanze potenzialmente nocive e le presentano alle cellule immunitarie intestinali: mastociti (coinvolti nelle risposte allergiche e infiammatorie), cellule di Paneth (liberano peptidi antimicrobici) e tessuto linfoide associato al tubo digerente (GALT), composto da linfociti isolati o raggruppati in placche di Peyer.' },
        { type: 'lead', label: 'Microbiota intestinale', text: 'è un insieme di batteri, funghi, lieviti, virus e protozoi che vivono in interazione con il loro ospite. Si stima il loro numero a circa 38 miliardi di batteri nell\'organismo umano. Ognuno possiede una propria firma del microbiota. Il microbiota costituisce un determinante importante della nostra buona salute: partecipa all\'immunità, alla digestione e all\'assorbimento, e interagisce con le funzioni cerebrali ed emotive tramite l\'asse intestino-cervello.' },
      ],
    },
    {
      id: 'pathologies',
      title: 'Patologie comuni',
      blocks: [
        { type: 'para', text: 'L\'iperpermeabilità intestinale e la disbiosi sono spesso descritte come associate, l\'una che causa l\'altra e viceversa.' },

        { type: 'lead', label: 'Iperpermeabilità intestinale', text: 'quando le giunzioni intercellulari tra enterociti sono alterate, la permeabilità intestinale può aumentare. Ciò può essere accompagnato da un maggiore passaggio di macromolecole luminali insufficientemente degradate, causando un\'attivazione immunitaria o infiammatoria.' },
        { type: 'sub', text: 'Cause' },
        { type: 'bullets', items: [
          'Agenti infettivi: stafilococchi, streptococchi, colibacilli, salmonella, candida albicans che liberano tossine.',
          'Stress cronico: il Simpatico e gli ormoni dello stress (adrenalina, cortisolo) in eccesso provocano vasocostrizione e fragilità della mucosa.',
          'Alimenti altamente trasformati o raffinati, ad alto indice glicemico, acidi grassi saturi, eccesso di latte vaccino, glutine e carne.',
          'Attività sportive prolungate (come le corse di grande distanza): possono ridurre transitoriamente la perfusione splancnica.',
          'Farmaci: antinfiammatori non steroidei, salicilati, corticosteroidi, antibiotici e chemioterapia.',
        ]},
        { type: 'sub', text: 'Conseguenze' },
        { type: 'bullets', items: [
          'Allergie alimentari: un\'alterazione della barriera intestinale può favorire una maggiore esposizione del sistema immunitario ad alcuni antigeni alimentari.',
          'Malattie autoimmuni: le proteine insufficientemente degradate che attraversano la mucosa sono considerate "non self". Gli anticorpi distruggono il "non self" e il tessuto su cui si sono fissate.',
          'Carenze di micronutrienti: la scarsa qualità dell\'assorbimento può provocare carenze di vitamine, minerali e acidi grassi essenziali.',
          'Sovraccarico epatico: l\'aumento nel sistema portale di sostanze provenienti dal lume intestinale può aumentare il lavoro di detossificazione epatica.',
        ]},
        { type: 'rop', body: [
          'In presenza di dolori e fissazioni osteoarticolomuscolari, soprattutto quando la nozione di trauma o di sovrasollecitazione non è evidente, l\'approccio R.O.P. invita a ricercare un possibile legame con disfunzioni viscerali.',
        ]},

        { type: 'lead', label: 'Disbiosi', text: 'corrisponde alla perturbazione del microbiota. Quando la composizione del microbiota si modifica — con diminuzione della diversità o squilibrio tra specie commensali e specie potenzialmente patogene — la protezione della mucosa può essere alterata.' },
        { type: 'lead', label: 'Cause di disbiosi', text: 'lo stress, l\'infiammazione, le infezioni, un cattivo stile di vita o uno squilibrio alimentare (abuso di alcol, zucchero e proteine o assenza di fibre), una terapia antibiotica, alcune esposizioni ambientali nonché fissazioni vertebrali e fibrosi dell\'intestino e dei suoi attacchi.' },
        { type: 'para', text: 'La disbiosi è considerata un fattore associato in numerose patologie, in particolare: rettocolite emorragica, tiroidite, asma, sinusite, allergie, artralgíe (lombalgie), fibromialgia, cistite, alcune forme depressive. Alcuni autori sostengono che malattie neurodegenerative come il Parkinson, la sclerosi multipla o la malattia di Alzheimer potrebbero essere collegate al sistema nervoso enterico tramite il nervo vago.' },

        { type: 'lead', label: 'Segnali premonitori', text: 'alitosi, eruttazione, aerocolia, emissione di gas maleodoranti, costipazione/diarrea, pirosi, attrazione eccessiva per lo zucchero e la carne cruda.' },

        { type: 'lead', label: 'Diagnosi di esclusione', text: 'alcuni sintomi devono orientare i pazienti verso un medico: febbre, sangue rosso o nero nelle feci, disidratazione importante, perdita di peso importante e inspiegabile, alternanza costipazione-diarrea, vomito, dolore colico della regione ombelicale, meteorismo, occlusione (ileo meccanico o paralitico), ernia inguinale strozzata, linfonodo di Troisier (sospetto di cancro), segno del versamento intra-addominale.' },

        { type: 'lead', label: 'Indicazioni in R.O.P.', text: 'disbíosi, esiti di gastroenteriti, enteroptosi (tensione anomala dell\'intestino tenue associata a vasocostrizioni, stasi venose e linfatiche e spasmi dei plessi nervosi perivascolari), ileo paralitico (inibizione della motricità e delle secrezioni intestinali per irritazione del peritoneo a dominanza simpatica).' },

        { type: 'sub', text: 'Morbo di Crohn' },
        { type: 'para', text: 'Questa malattia colpisce essenzialmente l\'ileo e il colon. Diversi fattori vi sono associati: genetico, disbiosi, ambiente ed emotivo come fattore di modulazione del vissuto e talvolta delle riacutizzazioni.' },
        { type: 'lead', label: 'Sintomi', text: 'diarrea legata all\'infiammazione della parete intestinale, dolori addominopelvici, dimagrimento, astenia, afte buccali, lombalgia, eritema nodoso degli arti, interessamento pancreatico, sindrome depressiva.' },
        { type: 'lead', label: 'Evoluzione', text: 'cronicità, rischio aumentato di cancro colorettale in relazione all\'estensione e all\'anzianità della malattia. Questi pazienti sono spesso obbligati ad adottare un regime alimentare rigoroso con poche fibre.' },
        { type: 'rop', body: [
          'La nostra esperienza clinica ci ha mostrato che l\'approccio R.O.P. può contribuire ad alleviare alcuni dolori addominopelvici del morbo di Crohn e a sostenere un miglior transito intestinale.',
        ]},
      ],
    },
    {
      id: 'rop',
      title: 'R.O.P. dell\'intestino tenue',
      blocks: [
        { type: 'sub', text: 'Sindrome generale di adattamento' },
        { type: 'sub', text: '1. Nervo vago' },
        { type: 'bullets', items: [
          'Territorio cranico e cervicale del nervo vago.',
          'Territorio addominale sinistro del nervo vago e plesso celiaco (solare).',
          'Hiatus esofageo (nervi vaghi destro e sinistro) e cardias.',
          'Piccola curvatura dello stomaco, ricca di fibre vagali.',
        ]},
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig17 IT.png', caption: 'Figura 14.17 — Hiatus esofageo (nervi vaghi destro e sinistro) e cardias', alt: 'Hiatus esofageo e nervi vaghi', orientation: 'medium' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig18 IT.png', caption: 'Figura 14.18 — Piccola curvatura dello stomaco, ricca di fibre vagali', alt: 'Piccola curvatura dello stomaco e fibre vagali', orientation: 'medium' },

        { type: 'sub', text: '2. Sistema simpatico' },
        { type: 'bullets', items: [
          'Colonna vertebrale, articolazioni costotrasversarie (catena gangliare laterovertebrale toracica Th8-Th10).',
          'Plesso celiaco (solare).',
          'Plesso lombare (collegamento viscero-somatico).',
        ]},
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig20 IT.png', caption: 'Figura 14.20 — Catena gangliare lombare e pilastri del diaframma', alt: 'Catena gangliare lombare e pilastri del diaframma', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig21 IT.png', caption: 'Figura 14.21 — Plesso celiaco (solare)', alt: 'Plesso celiaco solare', orientation: 'landscape' },

        { type: 'para', text: 'N.B. Nella nostra esperienza clinica, i disturbi funzionali intestinali sono spesso osservati nelle donne in relazione a fattori ormonali ed emotivi.' },

        { type: 'sub', text: 'Sindrome locoregionale' },
        { type: 'bullets', items: [
          'Diaframma (attacco del muscolo di Treitz sul pilastro destro).',
          'Stomaco (riflesso gastrointestinale).',
          'Radice del mesentere: una linea dalla giunzione digiuno-digiunale all\'ombelico, a livello L3-L4 (faccia plantare del piede sinistro).',
          'Radice del mesentere: una linea dalla valvola ileocecale all\'ombelico (faccia plantare del piede destro).',
        ]},
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig22 IT.png', caption: 'Figura 14.22 — Radice del mesentere (tra la giunzione digiuno-digiunale e l\'ombelico)', alt: 'Zona riflessiva della radice del mesentere — lato digiuno', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig23 IT.png', caption: 'Figura 14.23 — Radice del mesentere (tra la valvola ileocecale e l\'ombelico)', alt: 'Zona riflessiva della radice del mesentere — lato ileo', orientation: 'narrow' },

        { type: 'sub', text: 'Zone riflesse podali — Digiuno (piede sinistro)' },
        { type: 'bullets', items: [
          'Limite superiore: una linea orizzontale a livello delle apofisi stiloidi dei 5° metatarsi.',
          'Limite inferiore: il bordo anteriore dei talloni (branche ileo-pubiche).',
          'Limite laterale: fino al bordo laterale del piede sinistro.',
          'Rispettare l\'orientamento delle anse: orizzontali per il digiuno.',
        ]},
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig24 IT.png', caption: 'Figura 14.24 — Digiuno (limiti superiore e inferiore)', alt: 'Limiti della zona riflessiva del digiuno sul piede sinistro', orientation: 'portrait' },

        { type: 'sub', text: 'Zone riflesse podali — Ileo (piede destro)' },
        { type: 'bullets', items: [
          'Limite superiore: una linea orizzontale a livello delle apofisi stiloidi dei 5° metatarsi.',
          'Limite inferiore: il bordo anteriore dei talloni (branche ileo-pubiche).',
          'Limite laterale: a piombo del 4° dito del piede destro.',
          'Rispettare l\'orientamento delle anse: verticali per l\'ileo.',
        ]},
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig26 IT.png', caption: 'Figura 14.26 — Ileo (limiti superiore e inferiore)', alt: 'Limiti della zona riflessiva dell\'ileo sul piede destro', orientation: 'portrait' },

        { type: 'sub', text: '3. Sistema limbico' },
        { type: 'lead', label: 'Bilancio cervello limbico — intestino tenue', text: 'ascolto-induzione: un pollice sull\'intestino tenue, l\'altro pollice sul cervello limbico.' },
        { type: 'figure', src: '/chapter-14/it/Chapter14 Fig28 IT.png', caption: 'Figura 14.28 — Tecnica di bilancio viscero-emotivo — intestino tenue', alt: 'Bilancio viscero-emotivo intestino tenue e cervello limbico', orientation: 'portrait' },
      ],
    },
    {
      id: 'relations',
      title: 'Relazioni viscero-somatiche ed emotive',
      blocks: [
        { type: 'sub', text: 'Relazioni viscero-somatiche' },
        { type: 'bullets', items: [
          'Fissazione vertebrale da Th10 a Th12 e le loro coste.',
          'L1 e L2.',
        ]},

        { type: 'sub', text: 'Relazioni viscero-emotive' },
        { type: 'para', text: 'Il ventre, con il suo corteo di dolori e disturbi digestivi, può costituire un luogo importante di espressione somatica delle tensioni emotive. Queste tensioni favorirebbero una iperattività simpatica a scapito del nervo vago.' },
        { type: 'para', text: 'Sul piano emotivo, è difficile differenziare chiaramente l\'intestino tenue dal colon. Nel contesto clinico, la mucosa è considerata come un ricettore-emettitore di emozioni. Molto ormono-dipendente, l\'intestino è presentato come un organo particolarmente coinvolto nella somatizzazione a lungo termine. La fibromialgia e la spasmofilia si incontrano più spesso nelle donne a causa dell\'interdipendenza ormonale e intestinale.' },
        { type: 'para', text: 'La persona "intestino" non è mai ben nel suo stato. Soffre di stanchezza mattutina, dolori lombari, alle ginocchia e ai piedi (alluce valgo) con unghie scanalate e fragili. Si irrita facilmente, è di cattivo umore che si dissipa nel corso della giornata.' },
        { type: 'para', text: 'La persona "intestino" ha bisogno di sicurezza. Può mostrarsi iper-protettiva verso i propri cari. Viene descritta come fedele alle proprie abitudini e ai propri riferimenti. Può anche manifestare una meticolosità notevole nel proprio ambiente. A volte mostra una falsa sicurezza per nascondere la propria ansia. È ipocondriaca, logorroica, con un po\' di teatralità per convincere. È ostinata quando ha un\'idea in testa, generosa, suscettibile e di umore mutevole.' },

        { type: 'sub', text: 'Consigli' },
        { type: 'para', text: 'L\'intestino tenue riflette le tensioni emotive e psichiche. Gli spasmi intestinali fissano la colonna lombare. Privilegiare un\'alimentazione varia ed equilibrata senza eccesso di carboidrati e di proteine animali. Non svolgere attività sportiva durante la digestione.' },
      ],
    },
  ],
  slides: {
    url: '/chapter-14/Chapter14  slides de synthese IT.pdf',
    label: 'Diapositive',
    description: 'Sintesi visiva del capitolo — anatomia, fisiologia e zone riflesse R.O.P. dell\'intestino tenue.',
  },
  revisionSheet: {
    src: '/chapter-14/Chapter14 Fiche de Revision IT.png',
    alt: 'Scheda di revisione — Capitolo 14, Intestino tenue',
    caption: 'Scheda di revisione — Capitolo 14 · Intestino tenue',
  },
  clinicalCase: {
    src: '/chapter-14/Chapter14 Cas Clinique IT.png',
    caption: 'Caso clinico — Capitolo 14',
    alt: 'Caso clinico intestino tenue in R.O.P.',
  },
}

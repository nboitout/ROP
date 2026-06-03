// Chapter 14 content — German
// Source: public/Chapter-14/Chapitre 14 Intestin grêle - Parties 1a, 1b, 2, 3.docx (Guy Boitout)

import type { Chapter } from './types'

export const chapter14De: Chapter = {
  slug: 'chapter-14',
  number: '14',
  title: 'Dünndarm',
  sections: [
    {
      id: 'presentation',
      title: 'Vorstellung',
      blocks: [
        { type: 'para', text: 'Der Dünndarm ist das längste Bauchviszus des Körpers: an der Leiche beträgt seine Länge etwa 6 bis 7 Meter, beim Lebenden ist er aufgrund seines Muskeltonus deutlich kürzer. Er besteht aus zwei Teilen:' },
        { type: 'bullets', items: ['Das Duodenum', 'Das Jejunum-Ileum.'] },
        { type: 'para', text: 'Sie erstrecken sich vom Pylorus bis zur Ileozökalklappe und spielen eine wichtige Rolle bei der Verdauung und Resorption. Obwohl das Duodenum Teil des Dünndarms ist, wurde es aufgrund seiner anatomischen und physiologischen Besonderheiten in einem eigenen Kapitel behandelt (Kapitel 10).' },
        { type: 'para', text: 'Das Jejunum-Ileum unterscheidet sich vom Duodenum durch:' },
        { type: 'bullets', items: [
          'Eine dünne, glatte, vollständig peritonisierte und sehr bewegliche Wand. Sein Lumen ist nur 2 bis 3 cm im Durchmesser;',
          'Eine wichtige Rolle bei der Verdauung durch das Zusammenspiel der Schleimhaut, der Darmsekrete und des Mikrobioms (oder der Darmflora);',
          'Eine bedeutende Rolle im Stoffwechsel und bei der Immunabwehr;',
          'Sein besonders entwickeltes intrinsisches Nervensystem;',
          'Enge Wechselwirkungen mit der Darm-Hirn-Achse, die Auswirkungen auf die emotionale Sphäre haben können.',
          'Funktionell sind der Dünndarm und der Dickdarm voneinander abhängig.',
        ]},
      ],
    },
    {
      id: 'situation',
      title: 'Lage',
      blocks: [
        { type: 'para', text: 'Das Jejunum-Ileum nimmt einen großen Teil der Bauchhöhle ein, bevorzugt links als rechts, innerhalb des Kolonrahmens. Das Jejunum befindet sich vorzugsweise im linken oberen Quadranten des Abdomens. Das Ileum befindet sich vorzugsweise im rechten unteren Quadranten des Abdomens.' },
        { type: 'figure', src: '/chapter-14/figure-14-1.png', caption: 'Abbildung 14.1 — Abdominale Topographie in vier Quadranten', alt: 'Die vier Bauchquadranten', orientation: 'portrait' },
      ],
    },
    {
      id: 'anatomie',
      title: 'Anatomie',
      blocks: [
        { type: 'lead', label: 'Jejunum-Ileum', text: 'es besteht aus 15 bis 16 U-förmigen Darmschlingen, die in zwei Gruppen angeordnet sind. Eine obere Gruppe links, das Jejunum, das stärker entwickelt ist als das Ileum und dessen Schlingen und Gefäßsystem eher horizontal ausgerichtet sind. Eine untere Gruppe rechts, das Ileum, dessen Schlingen und Gefäßsystem eher vertikal ausgerichtet sind.' },
        { type: 'lead', label: 'Mesenterium', text: 'es ist ein Meso, d. h. eine doppelblättrige Peritonealreflexion. Es umhüllt das Jejunum-Ileum und verbindet es über die Mesenterialwurzel mit der hinteren Bauchwand.' },
        { type: 'figure', src: '/chapter-14/figure-14-2.png', caption: 'Abbildung 14.2 — Mesos', alt: 'Die peritonealen Mesos', orientation: 'portrait' },
        { type: 'lead', label: 'Mesenterialwurzel', text: 'sie bildet die Anheftungslinie des Mesenteriums und trägt zur Stabilität des ansonsten sehr beweglichen Dünndarms bei. Sie misst 16 bis 18 cm. Sie erstreckt sich von der duodenojejunalen Verbindung bis zur Ileozökalklappe und kreuzt dabei die Medianachse des Abdomens auf Höhe des Nabels (auf Höhe der Bandscheibe L3-L4). Die duodenojejunale Verbindung wird durch den Treitz-Muskel gehalten, dessen glatte Fasern am rechten Zwerchfellpfeiler ansetzen.' },
        { type: 'figure', src: '/chapter-14/figure-14-3.png', caption: 'Abbildung 14.3 — Mesenterialwurzel', alt: 'Mesenterialwurzel und ihr abdominaler Verlauf', orientation: 'landscape' },
        { type: 'lead', label: 'Treitz-Muskel', text: 'er trägt durch seine Kontraktion zur Aufrechterhaltung des duodenojejunalen Winkels bei, indem er die Mesenterialwurzel nach oben und links zieht. Durch die Förderung der Längsspannung beteiligt er sich an der Entleerung des Duodenalinhalts in das Jejunum. Die Mesenterialwurzel versorgt den Dünndarm mit Gefäßen und Nerven.' },
        { type: 'figure', src: '/chapter-14/figure-14-4.png', caption: 'Abbildung 14.4 — Treitz-Muskel', alt: 'Treitz-Muskel und duodenojejunaler Winkel', orientation: 'landscape' },
        { type: 'rop', body: [
          'Der Verlust der Längsspannung der Mesenterialwurzel ist klinisch mit dem Aortomesenterial-Klemmsyndrom oder Nussknacker-Syndrom in Verbindung zu bringen: einer Kompression des 4. Duodenalteils und der linken Nierenvene zwischen der Aorta und der Arteria mesenterica superior. Die Entleerung des Duodenalinhalts in das Jejunum kann sich verzögern, mit dem Risiko eines gastroduodenalen Reflux.',
          'Das reiche vaskuläre, nervöse und lymphatische Netzwerk der Mesenterialwurzel ist hochgradig reflexogen. Die Stimulation seiner Reflexzone zielt darauf ab, eine funktionelle Reaktion des Jejunum-Ileum zu erleichtern.',
        ]},
      ],
    },
    {
      id: 'rapports',
      title: 'Lagebeziehungen',
      blocks: [
        { type: 'bullets', items: [
          'Der Dünndarm liegt intraperitoneal.',
          'Links überlagert das Jejunum das Colon descendens.',
          'Rechts lässt das Ileum das Colon ascendens frei.',
          'Dorsal grenzt der Dünndarm an die hintere Bauchwand und die retroperitonealen Organe, insbesondere den suprameso-kolischen Teil des Duodenums, die Nieren, die Ureteren sowie das Colon ascendens und descendens.',
          'Ventral: das große Netz (früher Omentum majus).',
          'Kaudal: die Beckenorgane, insbesondere die Blase.',
          'Kranial: das Mesocolon transversum.',
        ]},
      ],
    },
    {
      id: 'vascularisation',
      title: 'Vaskularisierung',
      blocks: [
        { type: 'para', text: 'Der Dünndarm benötigt eine umfangreiche vaskuläre und lymphatische Versorgung, um seine Funktionen der Verdauung, Resorption und Immunabwehr zu erfüllen.' },
        { type: 'lead', label: 'Arteria mesenterica superior', text: 'sie bildet die arterielle Hauptachse des Dünndarms. Sie ist ein Ast der Bauchaorta. Ihr Ursprung liegt 1 cm unterhalb des Truncus coeliacus, auf Höhe der Bandscheibe Th12-L1. Zunächst retropankreatisch und dann vor dem 3. Teil des Duodenums verläuft sie zwischen den beiden Blättern des Mesenteriums. Sie gibt zahlreiche Kollateraläste ab. Sie versorgt den gesamten Dünndarm, das Colon ascendens und die proximalen zwei Drittel des Colon transversum.' },
        { type: 'figure', src: '/chapter-14/figure-14-5.png', caption: 'Abbildung 14.5 — Arteria mesenterica superior', alt: 'Arteria mesenterica superior und ihre Äste', orientation: 'portrait' },
        { type: 'para', text: 'Ihr Puls, der auf Höhe des 3. Teils des Duodenums, rechts vom Nabel, spürbar ist, kann einen klinisch-vaskulären Orientierungspunkt darstellen, ohne allein Rückschlüsse auf die Darmfunktion zu erlauben.' },
        { type: 'figure', src: '/chapter-14/figure-14-6.png', caption: 'Abbildung 14.6 — Puls der Arterien der Bauchhöhle', alt: 'Puls der Arterien der Bauchhöhle', orientation: 'landscape' },
        { type: 'lead', label: 'Vena mesenterica superior', text: 'sie liegt rechts der Arteria mesenterica superior und gehört zum Pfortadersystem. Sie drainiert das venöse Blut, das mit den im Dünndarm absorbierten Nährstoffen beladen ist, zur Leber.' },
        { type: 'figure', src: '/chapter-14/figure-14-7.png', caption: 'Abbildung 14.7 — Pfortadersystem', alt: 'Hepatisches Pfortadersystem', orientation: 'landscape' },
        { type: 'lead', label: 'Lymphatisches Netzwerk', text: 'der Dünndarm besitzt ein ausgeprägtes lymphatisches Netzwerk. Es beteiligt sich am Immunsystem. Es übernimmt Lipidmoleküle und langkettige Proteine sowie die fettlöslichen Vitamine A, D, E, K, die über die Cisterna chyli und den Ductus thoracicus zur linken Vena jugulo-subclavia geleitet werden.' },
        { type: 'figure', src: '/chapter-14/figure-14-8.png', caption: 'Abbildung 14.8 — Lymphatisches System', alt: 'Abdominales lymphatisches System', orientation: 'landscape' },
      ],
    },
    {
      id: 'innervation',
      title: 'Innervation',
      blocks: [
        { type: 'sub', text: 'Innervation des Peritoneums' },
        { type: 'para', text: 'Das Peritoneum erhält eine doppelte Innervation, somatisch und autonom.' },
        { type: 'lead', label: 'Parietales Peritoneum', text: 'es erhält eine somatische Innervation, die es mit der Bauchwand über die Nn. phrenici, die letzten sechs Interkostalnerven und die Nerven des Plexus lumbalis teilt. Es besitzt zahlreiche Endigungen, die auf Temperatur, Druck und Schmerz reagieren. Diese gemeinsame Innervation mit der Bauchwand erklärt die Projektion von Schmerzen im Bereich des Halses, der Schulterblätter, des Abdomens und der Lendenwirbelsäule peritonealen und viszeralen Ursprungs, die über die somatischen Fasern des parietalen Blattes auf den Bewegungsapparat übertragen werden.' },
        { type: 'figure', src: '/chapter-14/figure-14-9.png', caption: 'Abbildung 14.9 — Nervus phrenicus', alt: 'Nervus phrenicus und sein Verlauf', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-10.png', caption: 'Abbildung 14.10 — Interkostalnerven', alt: 'Interkostalnerven', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-11.png', caption: 'Abbildung 14.11 — Nerven des Plexus lumbalis', alt: 'Nerven des Plexus lumbalis', orientation: 'landscape' },
        { type: 'lead', label: 'Viszerales Peritoneum', text: 'es erhält eine extrinsisch-autonome Innervation, die es mit den Eingeweiden teilt. Sympathikus: seine Wurzeln entstammen Th8 bis Th11. Sie gelangen über die Nn. splanchnici majores und minores zu den prävertebralen Plexus coeliacus und mesentericus superior.' },
        { type: 'figure', src: '/chapter-14/figure-14-12.jpg', caption: 'Abbildung 14.12 — Vegetatives Nervensystem', alt: 'Vegetatives Nervensystem', orientation: 'portrait' },

        { type: 'sub', text: 'Vagusnerv und Sympathikus' },
        { type: 'leadBullets', items: [
          { label: 'Viszerale Sensibilität', text: 'das viszerale Peritoneum ist wenig empfindlich gegenüber Berührung, Temperaturschwankungen und chirurgischer Durchtrennung. Die viszerale Sensibilität ist vom Sympathikus abhängig, der durch Dehnung des Darms und chemische Substanzen stimuliert wird.' },
          { label: 'Sympathische Motorik', text: 'der Sympathikus vermindert die Peristaltik und die Darmsekrete, insbesondere in Zuständen von Stress, Angst, Furcht oder körperlicher Anstrengung.' },
          { label: 'Vagusnerv — Motorik', text: 'er ist dem Sympathikus gegenüber grundsätzlich antagonistisch. Er fördert die Peristaltik und die Darmsekrete sowie die intestinale Permeabilität zur Förderung der Resorption.' },
          { label: 'Vagusnerv — Sensibilität', text: 'der Vagusnerv enthält 70 bis 80 % sensible Fasern, die das Gehirn permanent über den Zustand der Eingeweide informieren. Er ist mit dem intrinsischen Nervensystem verbunden.' },
        ]},

        { type: 'sub', text: 'Enterisches Nervensystem (ENS)' },
        { type: 'para', text: 'Das intrinsische oder enterische Nervensystem (ENS) wird oft als zweites Gehirn oder Bauchgehirn bezeichnet. Es besteht aus intramuralen Plexus in der Wand des Dünndarms selbst: dem myenterischen Plexus von Auerbach und dem submukösem Plexus von Meissner.' },
        { type: 'figure', src: '/chapter-14/figure-14-13.png', caption: 'Abbildung 14.13 — Enterische intramurale Plexus', alt: 'Auerbach-Plexus und Meissner-Plexus in der Darmwand', orientation: 'landscape' },
        { type: 'bullets', items: [
          'Das ENS ist empfindlich gegenüber neurohormonalen Signalen und der chemischen Zusammensetzung des Darminhalts.',
          'Es kann weitgehend autonom gegenüber Gehirn und Rückenmark funktionieren, solange die physiologischen Bedingungen dies zulassen.',
          'Es beteiligt sich maßgeblich an der Produktion neurochemischer Mediatoren, darunter ein großer Anteil von Serotonin, Acetylcholin, Noradrenalin und GABA.',
          'Intestinaler Schrittmacher: die Wand des Dünndarms besitzt auch Cajal-Zellen, die in den längs- und kreisförmigen Muskelschichten liegen. Sie erzeugen langsame Wellen und beteiligen sich an der Koordination der Darmmotorik.',
        ]},
      ],
    },
    {
      id: 'physiologie',
      title: 'Physiologie',
      blocks: [
        { type: 'sub', text: 'Motorik' },
        { type: 'para', text: 'Sie wird durch drei Hauptmechanismen ausgelöst:' },
        { type: 'bullets', items: [
          'Mechanisch: durch die Dehnung der Darmwand beim Durchgang des Chymus.',
          'Neurologisch: durch die Wirkung des Vagusnervs, der durch zephalische Signale wie Anblick, Geruch, Geschmack und Berührung von Speisen sowie durch intestinale Mechanorezeptoren beeinflusst wird.',
          'Hormono-chemisch: durch Magen-, Duodenal-, hepatobiliäre und Pankreassekrete.',
        ]},
        { type: 'para', text: 'Der Dünndarm ist durch rhythmische Kontraktionen, Hin- und Herbewegungen und Segmentation belebt, die die Homogenisierung des Chymus sicherstellen, sowie durch Peristaltik, die seine Fortbewegung ermöglicht.' },

        { type: 'sub', text: 'Intestinales Ökosystem' },
        { type: 'para', text: 'Der Dünndarm bildet ein Ökosystem aus Darmschleimhaut, Immunsystem und Darm-Mikrobiom.' },
        { type: 'lead', label: 'Darmschleimhaut', text: 'sie bildet die Schnittstelle zwischen dem Körperinnern und dem Inhalt des Verdauungslumens. Sie fungiert als selektive Barriere, um Verdauung und Resorption zu ermöglichen.' },
        { type: 'lead', label: 'Verdauung', text: 'sie entspricht der Umwandlung von Nahrung in einfache Moleküle, die dann resorbiert werden können. Becherzellen produzieren einen Schutzschleim. Lieberkühn-Zellen beteiligen sich an der leicht alkalischen Darmsekretion sowie an enzymatischen und antimikrobiellen Funktionen. Enterozyten oder Absorptionszellen erfüllen eine selektive Barrierefunktion durch ihre interzelluläre Anordnung (Desmosomen), die die Aufnahme von Mikronährstoffen ermöglicht und gleichzeitig den Durchtritt unzureichend abgebauter Makromoleküle begrenzt.' },
        { type: 'lead', label: 'Resorption', text: 'die Darmschleimhaut ist mit fingerförmigen Zottenfortsätzen überzogen, deren zentraler Achse glatte Muskelzellen sowie ein Blut- und Lymphnetzwerk enthält. Die Zotten sind ihrerseits von Mikrovilli bedeckt, die einen Bürstensaum bilden, wodurch die Austauschfläche stark vergrößert wird. Der ausgebreitete Dünndarm hätte eine Oberfläche, die einem Tennisplatz entspricht.' },
        { type: 'figure', src: '/chapter-14/figure-14-14.png', caption: 'Abbildung 14.14 — Darmzotte', alt: 'Histologische Organisation einer Darmzotte', orientation: 'portrait' },
        { type: 'leadBullets', items: [
          { label: 'Blutweg', text: 'die Blutkapillaren absorbieren Wasser, Mineralsalze, einfache Zucker, Aminosäuren, kurzkettige Fettsäuren und wasserlösliche Vitamine. Diese Nährstoffe werden über das Pfortadersystem zur Leber transportiert.' },
          { label: 'Lymphweg', text: 'die Lymphkapillaren (oder Chylusgefäße) absorbieren hauptsächlich Fette, langkettige Proteine und fettlösliche Vitamine A, D, E, K. Sie vereinigen sich sukzessive im Lymphnetz, der Cisterna chyli und dem Ductus thoracicus, bevor sie in das Venennetz der linken Vena jugulo-subclavia einmünden.' },
        ]},
        { type: 'rop', body: [
          'Die Reflexwirkung auf die Darmmotorik zielt darauf ab, Verdauung und Resorption zu unterstützen.',
          'Die Reflexwirkung auf Leber und lymphatisches System zielt darauf ab, die Qualität der Resorption und die Immunfunktionen zu unterstützen.',
        ]},
        { type: 'lead', label: 'Immunsystem', text: 'Rezeptoren auf der Oberfläche des Darms identifizieren bestimmte Krankheitserreger oder potenziell schädliche Substanzen und präsentieren sie den intestinalen Immunzellen: Mastzellen (beteiligt an allergischen und entzündlichen Reaktionen), Paneth-Zellen (setzen antimikrobielle Peptide frei) und das mit dem Verdauungstrakt assoziierte lymphatische Gewebe (GALT), bestehend aus isolierten oder in Peyer-Plaques gruppierten Lymphozyten.' },
        { type: 'lead', label: 'Intestinales Mikrobiom', text: 'es ist eine Gesamtheit von Bakterien, Pilzen, Hefen, Viren und Protozoen, die in Wechselwirkung mit ihrem Wirt leben. Ihre Anzahl wird auf etwa 38 Milliarden Bakterien im menschlichen Körper geschätzt. Jeder Mensch besitzt eine eigene Mikrobiom-Signatur. Das Mikrobiom ist ein wichtiger Faktor für unsere Gesundheit: es beteiligt sich an der Immunabwehr, der Verdauung und der Resorption und interagiert mit den Gehirn- und Emotionsfunktionen über die Darm-Hirn-Achse.' },
      ],
    },
    {
      id: 'pathologies',
      title: 'Häufige Erkrankungen',
      blocks: [
        { type: 'para', text: 'Intestinale Hyperpermeabilität und Dysbiose werden oft als miteinander assoziiert beschrieben, wobei eine die andere verursacht und umgekehrt.' },

        { type: 'lead', label: 'Intestinale Hyperpermeabilität', text: 'wenn die interzellulären Verbindungen zwischen Enterozyten beeinträchtigt sind, kann die intestinale Permeabilität zunehmen. Dies kann mit einem erhöhten Durchtritt unzureichend abgebauter luminaler Makromoleküle einhergehen, was zu einer immunologischen oder entzündlichen Aktivierung führt.' },
        { type: 'sub', text: 'Ursachen' },
        { type: 'bullets', items: [
          'Infektiöse Erreger: Staphylokokken, Streptokokken, Kolibazillen, Salmonellen, Candida albicans, die Toxine freisetzen.',
          'Chronischer Stress: der Sympathikus und Stresshormone (Adrenalin, Kortisol) in übermäßiger Menge verursachen Vasokonstriktion und Schleimhautfragilität.',
          'Stark verarbeitete oder raffinierte Lebensmittel mit hohem glykämischen Index, gesättigte Fettsäuren, übermäßiger Konsum von Kuhmilch, Gluten und Fleisch.',
          'Lange sportliche Aktivitäten (wie Langstreckenläufe): sie können vorübergehend die splanchnische Durchblutung reduzieren.',
          'Medikamente: nicht-steroidale Antirheumatika, Salicylate, Kortikosteroide, Antibiotika und Chemotherapie.',
        ]},
        { type: 'sub', text: 'Folgen' },
        { type: 'bullets', items: [
          'Nahrungsmittelallergien: eine Beeinträchtigung der intestinalen Barriere kann eine erhöhte Exposition des Immunsystems gegenüber bestimmten Nahrungsantigenen begünstigen.',
          'Autoimmunerkrankungen: unzureichend abgebaute Proteine, die die Schleimhaut passieren, werden als körperfremd betrachtet. Antikörper zerstören das Körperfremde sowie das Gewebe, an dem sie haften.',
          'Mikronährstoffmangel: schlechte Resorptionsqualität kann zu einem Mangel an Vitaminen, Mineralien und essenziellen Fettsäuren führen.',
          'Hepatische Überlastung: die Zunahme von Substanzen aus dem Darmlumen im Pfortadersystem kann die hepatische Entgiftungsarbeit erhöhen.',
        ]},
        { type: 'rop', body: [
          'Bei Schmerzen und muskuloskelettalen Fixierungen, insbesondere wenn keine offensichtliche Verletzung oder Überbelastung vorliegt, lädt der ROP-Ansatz dazu ein, einen möglichen Zusammenhang mit viszeralen Dysfunktionen zu untersuchen.',
        ]},

        { type: 'lead', label: 'Dysbiose', text: 'sie entspricht der Störung des Mikrobioms. Wenn sich die Zusammensetzung des Mikrobioms verändert — mit verminderter Vielfalt oder Ungleichgewicht zwischen kommensalen und potenziell pathogenen Arten — kann der Schutz der Schleimhaut beeinträchtigt werden.' },
        { type: 'lead', label: 'Ursachen der Dysbiose', text: 'Stress, Entzündungen, Infektionen, ein schlechter Lebensstil oder ein Ernährungsungleichgewicht (übermäßiger Alkohol-, Zucker- und Proteinkonsum oder fehlende Ballaststoffe), Antibiotikatherapie, bestimmte Umwelteinflüsse sowie Wirbelblockierungen und Fibrose des Darms und seiner Befestigungen.' },
        { type: 'para', text: 'Dysbiose wird als assoziierter Faktor bei vielen Erkrankungen angesehen, darunter: hämorrhagische Kolitis, Thyreoiditis, Asthma, Sinusitis, Allergien, Gelenkschmerzen (Kreuzschmerzen), Fibromyalgie, Zystitis, bestimmte depressive Formen. Einige Autoren legen nahe, dass neurodegenerative Erkrankungen wie Parkinson, Multiple Sklerose oder Alzheimer mit dem enterischen Nervensystem über den Vagusnerv in Verbindung stehen könnten.' },

        { type: 'lead', label: 'Vorzeichen', text: 'Mundgeruch, Aufstoßen, Aerokolie, Emission übelriechender Gase, Verstopfung/Durchfall, Sodbrennen, übermäßige Lust auf Zucker und rohes Fleisch.' },

        { type: 'lead', label: 'Ausschlussdiagnose', text: 'bestimmte Symptome sollten Patienten zum Arzt führen: Fieber, rotes oder schwarzes Blut im Stuhl, ausgeprägte Dehydratation, erheblicher und ungeklärter Gewichtsverlust, wechselnde Verstopfung und Durchfall, Erbrechen, kolikartige Schmerzen in der Nabelgegend, Meteorismus, Obstruktion (mechanischer oder paralytischer Ileus), eingeklemmte Leistenhernie, Troisier-Lymphknoten (Krebsverdacht), Zeichen eines intraabdominalen Ergusses.' },

        { type: 'lead', label: 'Indikationen in der ROP', text: 'Dysbiosen, Folgen von Gastroenteritiden, Enteroptose (abnorme Spannung des Dünndarms verbunden mit Vasokonstriktion, venöser und lymphatischer Stase und Spasmen der perivaskulären Nervengeflechte), paralytischer Ileus (Hemmung der Darmmotorik und -sekrete durch Peritonealreizung mit sympathischer Dominanz).' },

        { type: 'sub', text: 'Morbus Crohn' },
        { type: 'para', text: 'Diese Erkrankung betrifft hauptsächlich das Ileum und den Dickdarm. Mehrere Faktoren sind damit assoziiert: genetische, Dysbiose, Umwelt- und emotionale Faktoren als Modulatoren des Erlebens und manchmal der Schübe.' },
        { type: 'lead', label: 'Symptome', text: 'Durchfall infolge einer Entzündung der Darmwand, abdominopelvine Schmerzen, Gewichtsverlust, Asthenie, Mundaphthen, Kreuzschmerzen, Erythema nodosum der Gliedmaßen, Pankreasbefall, depressives Syndrom.' },
        { type: 'lead', label: 'Verlauf', text: 'Chronizität, erhöhtes kolorektales Krebsrisiko je nach Ausdehnung und Dauer der Erkrankung. Diese Patienten sind oft gezwungen, eine strenge Diät mit wenig Ballaststoffen einzuhalten.' },
        { type: 'rop', body: [
          'Unsere klinische Erfahrung hat gezeigt, dass der ROP-Ansatz dazu beitragen kann, bestimmte abdominopelvine Schmerzen bei Morbus Crohn zu lindern und einen besseren Darmtransit zu unterstützen.',
        ]},
      ],
    },
    {
      id: 'rop',
      title: 'ROP des Dünndarms',
      blocks: [
        { type: 'sub', text: 'Allgemeines Adaptationssyndrom' },
        { type: 'sub', text: '1. Vagusnerv' },
        { type: 'bullets', items: [
          'Kranialer und zervikaler Bereich des Vagusnervs.',
          'Linker abdominaler Bereich des Vagusnervs und Plexus coeliacus (Solarplexus).',
          'Ösophagushiatus (rechter und linker Vagusnerv) und Kardia.',
          'Kleine Kurvatur des Magens, reich an Vagusfasern.',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-15.png', caption: 'Abbildung 14.15 — Kranialer und zervikaler Bereich des Vagusnervs (in Gelb)', alt: 'Kranialer und zervikaler Bereich des Vagusnervs', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-16.png', caption: 'Abbildung 14.16 — Linker abdominaler Bereich des Vagusnervs und Plexus coeliacus (Solarplexus)', alt: 'Linker abdominaler Bereich des Vagusnervs und Plexus coeliacus', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-17.png', caption: 'Abbildung 14.17 — Ösophagushiatus (rechter und linker Vagusnerv) und Kardia', alt: 'Ösophagushiatus und Vagusnerven', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-18.png', caption: 'Abbildung 14.18 — Kleine Kurvatur des Magens, reich an Vagusfasern', alt: 'Kleine Kurvatur des Magens und Vagusfasern', orientation: 'landscape' },

        { type: 'sub', text: '2. Sympathisches System' },
        { type: 'bullets', items: [
          'Wirbelsäule, Kostovertebralgelenke (thorakale laterale Ganglionkette Th8-Th10).',
          'Plexus coeliacus (Solarplexus).',
          'Plexus lumbalis (viszero-somatische Verbindung).',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-19.png', caption: 'Abbildung 14.19 — Sympathisches System (spinaler Ursprung)', alt: 'Sympathisches System und Ganglionkette', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-20.png', caption: 'Abbildung 14.20 — Lumbale Ganglionkette und Zwerchfellpfeiler', alt: 'Lumbale Ganglionkette und Zwerchfellpfeiler', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-21.png', caption: 'Abbildung 14.21 — Plexus coeliacus (Solarplexus)', alt: 'Solarplexus coeliacus', orientation: 'landscape' },

        { type: 'para', text: 'N.B. In unserer klinischen Erfahrung werden funktionelle Darmstörungen häufig bei Frauen in Zusammenhang mit hormonellen und emotionalen Faktoren beobachtet.' },

        { type: 'sub', text: 'Lokoregionales Syndrom' },
        { type: 'bullets', items: [
          'Zwerchfell (Ansatz des Treitz-Muskels am rechten Pfeiler).',
          'Magen (gastroenteraler Reflex).',
          'Mesenterialwurzel: eine Linie von der duodenojejunalen Verbindung zum Nabel, auf Höhe L3-L4 (Plantarfläche des linken Fußes).',
          'Mesenterialwurzel: eine Linie von der Ileozökalklappe zum Nabel (Plantarfläche des rechten Fußes).',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-22.jpg', caption: 'Abbildung 14.22 — Mesenterialwurzel (zwischen der duodenojejunalen Verbindung und dem Nabel)', alt: 'Reflexzone der Mesenterialwurzel — Jejunumseite', orientation: 'portrait' },
        { type: 'figure', src: '/chapter-14/figure-14-23.jpg', caption: 'Abbildung 14.23 — Mesenterialwurzel (zwischen der Ileozökalklappe und dem Nabel)', alt: 'Reflexzone der Mesenterialwurzel — Ileumseite', orientation: 'portrait' },

        { type: 'sub', text: 'Podale Reflexzonen — Jejunum (linker Fuß)' },
        { type: 'bullets', items: [
          'Obere Grenze: eine horizontale Linie auf Höhe der Styloidfortsätze der 5. Metatarsalknochen.',
          'Untere Grenze: der vordere Rand der Fersen (Äste des Iliopubikalbogens).',
          'Laterale Grenze: bis zum lateralen Rand des linken Fußes.',
          'Die Ausrichtung der Schlingen beachten: horizontal für das Jejunum.',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-24.png', caption: 'Abbildung 14.24 — Jejunum (obere und untere Grenze)', alt: 'Grenzen der Jejunum-Reflexzone am linken Fuß', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-25.png', caption: 'Abbildung 14.25 — Jejunum', alt: 'Jejunum-Reflexzone am linken Fuß', orientation: 'landscape' },

        { type: 'sub', text: 'Podale Reflexzonen — Ileum (rechter Fuß)' },
        { type: 'bullets', items: [
          'Obere Grenze: eine horizontale Linie auf Höhe der Styloidfortsätze der 5. Metatarsalknochen.',
          'Untere Grenze: der vordere Rand der Fersen (Äste des Iliopubikalbogens).',
          'Laterale Grenze: in der Verlängerung der 4. Zehe des rechten Fußes.',
          'Die Ausrichtung der Schlingen beachten: vertikal für das Ileum.',
        ]},
        { type: 'figure', src: '/chapter-14/figure-14-26.png', caption: 'Abbildung 14.26 — Ileum (obere und untere Grenze)', alt: 'Grenzen der Ileum-Reflexzone am rechten Fuß', orientation: 'landscape' },
        { type: 'figure', src: '/chapter-14/figure-14-27.png', caption: 'Abbildung 14.27 — Ileum und Mesenterialwurzel', alt: 'Ileum-Reflexzone und Mesenterialwurzel am rechten Fuß', orientation: 'landscape' },

        { type: 'sub', text: '3. Limbisches System' },
        { type: 'lead', label: 'Limbisches Gehirn — Dünndarm-Balance', text: 'Induktion-Zuhören: ein Daumen auf dem Dünndarm, der andere auf dem limbischen Gehirn.' },
        { type: 'figure', src: '/chapter-14/figure-14-28.png', caption: 'Abbildung 14.28 — Viszero-emotionale Balance-Technik — Dünndarm', alt: 'Viszero-emotionale Balance Dünndarm und limbisches Gehirn', orientation: 'landscape' },
      ],
    },
    {
      id: 'relations',
      title: 'Viszero-somatische und emotionale Beziehungen',
      blocks: [
        { type: 'sub', text: 'Viszero-somatische Beziehungen' },
        { type: 'bullets', items: [
          'Wirbelblockierung von Th10 bis Th12 und ihre Rippen.',
          'L1 und L2.',
        ]},

        { type: 'sub', text: 'Viszero-emotionale Beziehungen' },
        { type: 'para', text: 'Der Bauch mit seinem Gefolge von Schmerzen und Verdauungsstörungen kann ein wichtiger Ort für die somatische Expression emotionaler Spannungen sein. Diese Spannungen würden eine sympathische Hyperaktivität auf Kosten des Vagusnervs begünstigen.' },
        { type: 'para', text: 'Auf der emotionalen Ebene ist es schwierig, den Dünndarm klar vom Dickdarm zu unterscheiden. Im klinischen Kontext wird die Schleimhaut als Empfänger-Sender von Emotionen betrachtet. Als stark hormonal abhängiges Organ gilt der Darm als besonders in die langfristige Somatisierung involviert. Fibromyalgie und Spasmophilie treten bei Frauen häufiger auf, bedingt durch die hormonelle und intestinale Wechselwirkung.' },
        { type: 'para', text: 'Die Darmperson fühlt sich nie wohl in ihrer Haut. Sie leidet unter morgendlicher Müdigkeit, Kreuzschmerzen, Knie- und Fußschmerzen (Hallux valgus) sowie gerippten und brüchigen Nägeln. Sie ist leicht reizbar, in schlechter Stimmung, die sich im Laufe des Tages verflüchtigt.' },
        { type: 'para', text: 'Die Darmperson braucht Sicherheit. Sie kann sich ihren Lieben gegenüber übermäßig schützend verhalten. Sie wird als treu zu ihren Gewohnheiten und Orientierungspunkten beschrieben. Auch kann sie eine bemerkenswerte Pedanterie in ihrer Umgebung zeigen. Manchmal gibt sie sich eine falsche Sicherheit, um ihre Angst zu verbergen. Sie ist hypochondrisch, logorrhöisch, mit etwas Theatralik, um zu überzeugen. Sie ist hartnäckig, wenn sie eine Idee im Kopf hat, großzügig, empfindlich und launisch.' },

        { type: 'sub', text: 'Ratschläge' },
        { type: 'para', text: 'Der Dünndarm spiegelt emotionale und psychische Spannungen wider. Intestinale Spasmen fixieren die Lendenwirbelsäule. Eine abwechslungsreiche und ausgewogene Ernährung ohne übermäßige Kohlenhydrate und tierische Proteine bevorzugen. Während der Verdauung keine sportlichen Aktivitäten ausüben.' },
      ],
    },
  ],
  slides: {
    url: '/chapter-14/synthese.pdf',
    label: 'Folien',
    description: 'Visuelle Zusammenfassung des Kapitels — Anatomie, Physiologie und R.O.P.-Reflexzonen des Dünndarms.',
  },
  revisionSheet: {
    src: '/chapter-14/Chapter14 Fiche de Revision GE.png',
    alt: 'Lernblatt — Kapitel 14, Dünndarm',
    caption: 'Lernblatt — Kapitel 14 · Dünndarm',
  },
  clinicalCase: {
    src: '/chapter-14/Chapter14 Cas Clinique GE.png',
    caption: 'Fallstudie — Kapitel 14',
    alt: 'Fallstudie: Dünndarm in der R.O.P.',
  },
}

// Introduction — German
// Source: public/chapter-0/Chapter_0_Introduction_ROP_German.docx

import type { Chapter } from './types'

export const introductionDe: Chapter = {
  slug: 'introduction',
  title: 'Einleitung',
  sections: [
    {
      id: 'avant-propos',
      title: 'Vorwort',
      blocks: [
        { type: 'para', text: 'Dieser dritte Band zur Réflexothérapie Occipito-Podale – ROP stellt die natürliche Fortsetzung der beiden vorangegangenen Bände dar. Nach dem osteo-muskulo-artikulären System in Band 1 und dem neuromeningealen System in Band 2 wenden wir uns nun dem Bereich der abdomino-pelvinen Viszera, des autonomen Nervensystems und der Stressmechanismen zu.' },
        { type: 'para', text: 'Der Anspruch bleibt derselbe: eine kohärente Kartographie bereitzustellen, die mit Anatomie und Physiologie übereinstimmt, dreidimensional gedacht ist, den Körper als Säugling in Fötalstellung im Fuß abbildet und mit den okzipitalen Reflexzonen in Beziehung setzt.' },
      ],
    },
    {
      id: 'en-bref',
      title: 'Kurz gesagt: Was dieses Buch bietet',
      blocks: [
        { type: 'bullets', items: [
          'Eine klare Interpretation der viszero-somatischen Beziehungen: wie viszerale Dysfunktionen den Bewegungsapparat beeinflussen können und wie Störungen des Bewegungsapparates ihrerseits die viszerale Funktion beeinträchtigen können.',
          'Klinische Orientierungspunkte und eine palpationsbasierte Rationale zur Lokalisierung der Reflexzonen, trotz der wenigen knöchernen Landmarken an der Plantarfläche.',
          'Kartographien, die anhand zentraler anatomischer Referenzpunkte – einschließlich des Zwerchfells – angepasst und im Zusammenhang mit der Anamnese des Patienten sowie mit medizinischen und chirurgischen Befunden interpretiert werden.',
          'Ein globaler Ansatz, der darauf abzielt, pathologische Reflexschleifen – neurologischer, viszeraler, somatischer und emotionaler Art – zu unterbrechen, die körpereigenen Regulationsfähigkeiten zu stimulieren und die Vitalität zu unterstützen.',
        ]},
      ],
    },
    {
      id: 'visceral-incontournable',
      title: 'Warum das viszerale System wesentlich ist',
      blocks: [
        { type: 'para', text: 'Das viszerale System ist für die zentralen logistischen Funktionen des Körpers verantwortlich: Ernährung, Ausscheidung und innere Homöostase. In diesem Zusammenhang können zahlreiche muskuloskelettale Schmerzsyndrome als Folge viszeraler Dysfunktionen entstehen – und umgekehrt gilt dies ebenfalls. Ein System zu behandeln und das andere zu ignorieren, führt häufig zu unvollständigen Ergebnissen.' },
      ],
    },
    {
      id: 'parti-pris',
      title: 'Unsere Position: anatomische Präzision und klinischer Pragmatismus',
      blocks: [
        { type: 'para', text: 'Wie bei jedem manualtherapeutischen Ansatz beobachten wir mitunter Ergebnisse, die sich nicht vollständig objektivieren lassen. Die klinische Beobachtung besitzt nicht die methodische Strenge eines Laborprotokolls, behält jedoch ihren Wert, wenn sie systematisch durchgeführt wird. Deshalb legt dieses Buch den Schwerpunkt auf: (1) anatomische Kohärenz; (2) Reproduzierbarkeit der Orientierungspunkte; (3) Korrelation mit der klinischen Realität, einschließlich Anamnese, bildgebender Befunde und chirurgischer Beobachtungen.' },
        { type: 'para', text: 'Zwei Punkte verdienen besondere Hervorhebung:' },
        { type: 'leadBullets', items: [
          { label: 'Das Zwerchfell', text: 'Die beiden Zwerchfellkuppeln befinden sich nicht auf derselben Höhe. Wird diese Asymmetrie ignoriert, verliert jede Kartographie an Präzision – sowohl für das Zwerchfell selbst als auch für die mit ihm verbundenen Viszera.' },
          { label: 'Das Peritoneum', text: 'Es stellt eine zentrale Schnittstelle zwischen den Viszera und den Körperwänden dar, verfügt über ein erhebliches reflexogenes Potenzial und kann Spannungen sowie Dysfunktionen in beide Richtungen übertragen.' },
        ]},
      ],
    },
    {
      id: 'terminologie',
      title: 'Terminologie',
      blocks: [
        { type: 'para', text: 'Aus Gründen der Klarheit verwenden wir die folgende Terminologie:' },
        { type: 'leadBullets', items: [
          { label: 'dorsal', text: 'statt „posterior".' },
          { label: 'ventral', text: 'statt „anterior".' },
          { label: 'lateral', text: 'statt „extern".' },
          { label: 'medial', text: 'statt „intern".' },
          { label: 'kranial', text: 'statt „nach oben".' },
          { label: 'kaudal', text: 'statt „nach unten".' },
          { label: 'frontal', text: 'statt „transversal".' },
          { label: 'sagittal', text: 'statt „anteroposterior".' },
        ]},
      ],
    },
    {
      id: 'plan-type',
      title: 'Standardstruktur der Kapitel',
      blocks: [
        { type: 'para', text: 'Jedes den einzelnen Organen gewidmete Kapitel folgt einer einheitlichen Struktur:' },
        { type: 'bullets', items: [
          'Einführung.',
          'Lokalisation.',
          'Anatomie.',
          'Anatomische Beziehungen.',
          'Vaskularisation.',
          'Innervation.',
          'Physiologie.',
          'Häufige Pathologien – Differenzial- und Ausschlussdiagnostik; Indikationen bei funktionellen Störungen.',
          'Podale Reflexzonen – allgemeines Syndrom; lokoregionales Syndrom.',
          'Viszero-somatische Beziehungen.',
          'Viszero-emotionale Beziehungen.',
          'Empfehlungen.',
        ]},
      ],
    },
  ],
}

import type { Metadata } from 'next'
import Link from 'next/link'
import NapFigure from '@/components/NapFigure'
import { SITE_URL } from '@/lib/site'

// Public, indexable, French only. The homepage carries a short version of this
// argument; everything technical lives here so the marketing page stays light.
//
// Source: "Fondements neuro-anatomiques de la ROP — version révisée" (2026),
// which reorganises the model around four somatic gates, five bridges and a
// two-axis gradient. Plates come from the revised deck exported to
// /public/assets/anatomie.
export const metadata: Metadata = {
  title: 'Fondements neuro-anatomiques de la R.O.P. · Guy Boitout',
  description:
    "Du point réflexe à la porte d’entrée somatique : quatre portes du pied, cinq ponts neuro-anatomiques et un gradient de ciblage à deux axes — proximité segmentaire et niveau de preuve expérimentale.",
  alternates: { canonical: `${SITE_URL}/fondements-neuro-anatomiques` },
  openGraph: {
    title: 'Fondements neuro-anatomiques de la R.O.P.',
    description:
      "Quatre portes somatiques, cinq ponts neuro-anatomiques et un gradient de ciblage à deux axes entre le pied et les réseaux viscéraux.",
    url: `${SITE_URL}/fondements-neuro-anatomiques`,
    type: 'article',
  },
}

const PLATE = '/assets/anatomie'

/** Section anchors, in reading order — also drives the table of contents. */
const TOC = [
  { id: 'portes', n: '1', t: 'Le pied : une interface et quatre portes' },
  { id: 'versant-visceral', n: '2', t: 'Le versant viscéral' },
  { id: 'ponts', n: '3–7', t: 'Les cinq ponts neuro-anatomiques' },
  { id: 'gradient', n: '8', t: 'Un gradient à deux axes' },
  { id: 'hypotheses', n: '9', t: 'De la cartographie à l’hypothèse expérimentale' },
  { id: 'limites', n: '10', t: 'Portée et limites' },
  { id: 'synthese', n: '11', t: 'Synthèse' },
  { id: 'terminologie', n: '', t: 'Terminologie retenue' },
  { id: 'references', n: '', t: 'Bibliographie' },
]

/** The four somatic gates of §1.2, compared side by side. */
const GATES = [
  {
    k: 'plantaire',
    t: 'Plantaire / tibiale',
    zone: 'Plante, arche, avant-pied et grande partie du talon.',
    nerve: 'Nerfs plantaires médial et latéral, rameaux calcanéens, puis nerf tibial.',
    roots: 'L4–S3',
    note: 'Recouvrement sacré le plus large : S2–S3 possibles.',
  },
  {
    k: 'surale',
    t: 'Latérale / surale',
    zone: 'Bord latéral du pied, région postéro-latérale de la cheville et du talon.',
    nerve: 'Nerf sural.',
    roots: 'S1–S2',
    note: 'Porte sacrée partielle, principalement par S2.',
  },
  {
    k: 'fibulaire',
    t: 'Dorsale / fibulaire',
    zone: 'Dos du pied.',
    nerve: 'Nerfs fibulaires superficiel et profond, puis fibulaire commun.',
    roots: 'L4–S2',
    note: 'S2 possible, sans composante S3.',
  },
  {
    k: 'saphene',
    t: 'Médiale / saphène',
    zone: 'Bord médial de la cheville et portion médiale proximale du pied.',
    nerve: 'Nerf saphène.',
    roots: 'L3–L4',
    note: 'Pas de recouvrement sacré direct évident avec S2–S4.',
  },
]

/** §1.3 — the functional chain, from local pressure to supraspinal networks. */
const CHAIN = [
  'Pression locale',
  'Mécanorécepteurs et afférences somatiques',
  'Branche périphérique',
  'Nerf principal',
  'Racines spinales',
  'Moelle',
  'Voies ascendantes',
  'Réseaux supraspinaux',
]

/** Gradient scale carried by the plausibility matrix plate. */
const LEVELS = [
  {
    n: '3',
    t: 'Ciblage régional renforcé',
    d: "Porte périphérique identifiable, proximité radiculaire, convergence spinale documentée et fonction régionale intégrée. Les territoires tibiaux en relation avec les réseaux lombo-sacrés et pelviens en sont les principaux candidats.",
  },
  {
    n: '2',
    t: 'Ciblage régional plausible',
    d: "Proximité segmentaire partielle ou hétérogène, mais organisation afférente et réseaux spinaux communs permettant une modulation de la région — le côlon distal et le rectum en sont l’exemple type.",
  },
  {
    n: '1',
    t: 'Modulation fonctionnelle générale',
    d: "Le lien repose surtout sur les relais intersegmentaires et supraspinaux, la régulation autonome ou la modulation de la douleur. Une influence reste physiologiquement concevable, mais elle est peu spécifique d’une région.",
  },
  {
    n: '0',
    t: 'Correspondance point-organe non étayée',
    d: "La position du point repose essentiellement sur une tradition cartographique ou une analogie de forme, sans pont neuro-anatomique identifiable.",
  },
]

/** §8.3 — provisional application of the gradient to the main targets. */
const TARGETS = [
  {
    t: 'Vessie et fonctions urinaires basses',
    d: "Meilleur modèle actuel. Recouvrement S2–S3 avec l’organisation sacrée S2–S4, convergence spinale et littérature spécifique de neuromodulation tibiale. Ciblage régional plausible ; spécificité point-organe non démontrée [7-12,16].",
    lvl: '3',
  },
  {
    t: 'Rectum et côlon distal',
    d: "Cible régionale importante. Les afférences spinales du côlon et du rectum sont distribuées, et les interactions vessie-intestin montrent des convergences pelviennes et des phénomènes de sensibilisation croisée [15,19-21].",
    lvl: '2',
  },
  {
    t: 'Autres organes pelviens',
    d: "L’organisation S2–S4 et les réseaux pelviens rendent un accès régional plausible, mais la bibliographie ne fournit pas pour chaque organe le niveau de preuve expérimentale disponible pour la vessie. Cibles candidates à documenter.",
    lvl: '2',
  },
  {
    t: 'Viscères abdominaux hauts — estomac, rein, rate, glandes surrénales',
    d: "Voies afférentes principales plus éloignées des entrées somatiques distales du pied. Une influence somato-autonome reste concevable par les relais intersegmentaires et supraspinaux [17,18], sans qu’une modulation spécifique de chacun de ces viscères par une pression podale puisse être affirmée.",
    lvl: '1',
  },
  {
    t: 'Intestin grêle',
    d: "Même prudence. Son organisation afférente ne fournit pas de recouvrement sacré direct comparable à celui du petit bassin : toute hypothèse de ciblage podal repose davantage sur les relais intersegmentaires ou supraspinaux que sur la proximité radiculaire [17,18].",
    lvl: '1',
  },
  {
    t: 'Diaphragme',
    d: "À traiter séparément. Il s’agit principalement d’un muscle strié sous contrôle phrénique cervical, et non d’un viscère au sens de ce gradient. Une influence depuis le pied relèverait d’une modulation centrale, respiratoire ou somatique, pas d’un pont viscéral segmentaire sacré [1].",
    lvl: '1',
  },
]

/** §9.5 — what every ROP observation should record. */
const VARIABLES = [
  'Localisation anatomique exacte de la zone, côté stimulé et territoire nerveux probable.',
  'Caractéristiques du geste : surface de contact, direction, profondeur, intensité, durée et répétition.',
  'État fonctionnel du système au moment du test, particulièrement important pour les circuits viscéraux dépendants de l’état du réseau.',
  'Comparateur : autre zone du même nerf, autre nerf du pied, stimulation sham ou absence de stimulation selon le protocole.',
  'Mesure de sortie : marqueur sensoriel, autonome, neurophysiologique, d’imagerie ou fonctionnel adapté à la question étudiée.',
  'Distinction explicite entre effet général, effet régional et effet attribué à un organe particulier.',
]

const TERMS = [
  {
    t: 'Pont neuro-anatomique',
    d: "Possibilité de convergence ou de relais entre une entrée somatique et un réseau susceptible de participer à une fonction viscérale.",
  },
  {
    t: 'Porte d’entrée somatique',
    d: "Territoire périphérique dont la stimulation génère une activité afférente par un nerf identifiable.",
  },
  {
    t: 'Afférences viscérales cheminant avec les voies splanchniques thoracolombaires / avec les nerfs pelviens',
    d: "Formulations préférées à « afférences sympathiques » ou « parasympathiques » lorsque l’on décrit un message sensitif.",
  },
  {
    t: 'Ciblage régional',
    d: "Plausibilité anatomique qu’une porte somatique accède préférentiellement à un réseau régional ; ne signifie ni efficacité clinique ni spécificité point-organe.",
  },
  {
    t: 'Modulation viscérale',
    d: "Modification mesurable d’une fonction ou d’un circuit viscéral ; terme préféré à « action directe sur l’organe ».",
  },
  {
    t: 'Voie supraspinale',
    d: "Participation de centres situés au-dessus de la moelle à l’intégration de l’entrée somatique et aux commandes descendantes.",
  },
]

const REFERENCES = [
  'Standring S, ed. Gray’s Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. Elsevier; 2020.',
  'Kennedy PM, Inglis JT. Distribution and behaviour of glabrous cutaneous receptors in the human foot sole. J Physiol. 2002;538(Pt 3):995–1002. doi:10.1113/jphysiol.2001.013087.',
  'Strzalkowski NDJ, Peters RM, Inglis JT, Bent LR. Cutaneous afferent innervation of the human foot sole: what can we learn from single-unit recordings? J Neurophysiol. 2018;120(3):1233–1246. doi:10.1152/jn.00848.2017.',
  'de Souza Faleiros AT, de Lima Resende LA, Zanini MA, de Lima Castro HA, Colichio Gabarra R. L4-L5-S1 human dermatomes: a clinical, electromyographical, imaging and surgical findings. Arq Neuropsiquiatr. 2009;67(2A):265–267. doi:10.1590/S0004-282X2009000200017.',
  'Deniel C, Guenoun D, Guillin R, Moraux A, Champsaur P, Le Corroller T. Anatomical study of the medial calcaneal nerve using high-resolution ultrasound. Eur Radiol. 2023;33(10):7330–7337. doi:10.1007/s00330-023-09699-6.',
  'Andreasen Struijk LNS, Birn H, Teglbjærg PS, Haase J, Struijk JJ. Size and separability of the calcaneal and the medial and lateral plantar nerves in the distal tibial nerve. Anat Sci Int. 2010;85(1):13–22. doi:10.1007/s12565-009-0045-y.',
  'Fowler CJ, Griffiths D, de Groat WC. The neural control of micturition. Nat Rev Neurosci. 2008;9(6):453–466. doi:10.1038/nrn2401.',
  'Shefchyk SJ. Spinal cord neural organization controlling the urinary bladder and striated sphincter. Prog Brain Res. 2002;137:71–82. doi:10.1016/S0079-6123(02)37008-0.',
  'de Groat WC, Vizzard MA, Araki I, Roppolo J. Spinal interneurons and preganglionic neurons in sacral autonomic reflex pathways. Prog Brain Res. 1996;107:97–111. doi:10.1016/S0079-6123(08)61860-9.',
  'Yecies T, Li S, Zhang Y, Cai H, Shen B, Wang J, et al. Spinal interneuronal mechanisms underlying pudendal and tibial neuromodulation of bladder function in cats. Exp Neurol. 2018;308:100–110. doi:10.1016/j.expneurol.2018.06.015.',
  'Griffiths D. Neural control of micturition in humans: a working model. Nat Rev Urol. 2015;12(12):695–705. doi:10.1038/nrurol.2015.266.',
  'de Rijk MM, Fernández Chadily S, Knops A, Schoutens Y, Verstegen AMJ. The periaqueductal gray and its role in the neural control of lower urinary tract function. Auton Neurosci. 2026;265:103413. doi:10.1016/j.autneu.2026.103413.',
  'Krhut J, Tintěra J, Rejchrt M, Skugarevská B, Zachoval R, Zvara P, et al. Differences between brain responses to peroneal electrical transcutaneous neuromodulation and transcutaneous tibial nerve stimulation, two treatments for overactive bladder. Neurourol Urodyn. 2023;42(6):1352–1361. doi:10.1002/nau.25197.',
  'Strzalkowski NDJ, Incognito AV, Bent LR, Millar PJ. Cutaneous mechanoreceptor feedback from the hand and foot can modulate muscle sympathetic nerve activity. Front Neurosci. 2016;10:568. doi:10.3389/fnins.2016.00568.',
  'Brierley SM, Hibberd TJ, Spencer NJ. Spinal afferent innervation of the colon and rectum. Front Cell Neurosci. 2018;12:467. doi:10.3389/fncel.2018.00467.',
  'Li X, Li X, Liao L. Mechanism of action of tibial nerve stimulation in the treatment of lower urinary tract dysfunction. Neuromodulation. 2024;27(2):256–266. doi:10.1016/j.neurom.2023.03.017.',
  'Sato A, Sato Y, Schmidt RF. The impact of somatosensory input on autonomic functions. Rev Physiol Biochem Pharmacol. 1997;130:1–328. doi:10.1007/BFb0046598.',
  'Jänig W. Neurobiology of visceral afferent neurons: neuroanatomy, functions, organ regulations and sensations. Biol Psychol. 1996;42(1–2):29–51. doi:10.1016/0301-0511(95)05145-7.',
  'Panicker JN, Marcelissen T, von Gontard A, Vrijens D, Abrams P, Wyndaele M. Bladder-bowel interactions: do we understand pelvic organ cross-sensitization? International Consultation on Incontinence Research Society (ICI-RS) 2018. Neurourol Urodyn. 2019;38(Suppl 5):S25–S34. doi:10.1002/nau.24111.',
  'Malykhina AP. Neural mechanisms of pelvic organ cross-sensitization. Neuroscience. 2007;149(3):660–672. doi:10.1016/j.neuroscience.2007.07.053.',
  'Christianson JA, Liang R, Ustinova EE, Davis BM, Fraser MO, Pezzone MA. Convergence of bladder and colon sensory innervation occurs at the primary afferent level. Pain. 2007;128(3):235–243. doi:10.1016/j.pain.2006.09.023.',
]

/** Renders a reference, turning its trailing "doi:10.…" into a resolver link. */
function Reference({ text }: { text: string }) {
  const match = text.match(/^(.*?)\s*doi:(10\.\S+?)\.?$/)
  if (!match) return <>{text}</>
  const [, citation, doi] = match
  return (
    <>
      {citation}{' '}
      <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">doi:{doi}</a>.
    </>
  )
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="nap-callout">
      <p className="nap-callout-t">{title}</p>
      <p className="nap-callout-d">{children}</p>
    </aside>
  )
}

export default function FondementsNeuroAnatomiquesPage() {
  return (
    <main className="nap-root">
      <div className="nap-top">
        <Link href="/" className="nap-home">← Retour à l’accueil</Link>
      </div>

      <article className="nap-article">
        <div className="nap-hero">
          <p className="nap-eyebrow">Réflexothérapie occipito-podale</p>
          <h1>Fondements neuro-anatomiques de la R.O.P.</h1>
          <p className="nap-standfirst">
            Du point réflexe à la porte d’entrée somatique : une architecture fondée sur les
            afférences périphériques, les convergences spinales et les voies supraspinales.
          </p>
          <p className="nap-meta">Guy Boitout · Institut R.O.P. · ~25 min de lecture</p>
        </div>

        <section className="nap-sec">
          <p>
            La R.O.P. ne suppose pas qu’un organe soit matériellement « représenté » dans un point du
            pied. La proposition de travail est différente : une zone podale constitue d’abord une
            <strong> porte d’entrée sensorielle</strong>. La pression déforme la peau et les tissus
            sous-cutanés, recrute des mécanorécepteurs et d’autres afférences somatiques, puis transmet
            un message par un nerf périphérique vers la moelle épinière et les centres supérieurs
            [1-3].
          </p>
          <p>
            À chacun de ces étages, cette activité peut rencontrer des circuits somatiques, autonomes
            et viscéraux. Nous conservons le terme pédagogique de <strong>pont
            neuro-anatomique</strong> pour désigner chacune de ces possibilités de convergence. Un pont
            n’est ni une liaison anatomique directe entre un point du pied et un organe, ni la preuve
            d’une efficacité thérapeutique : c’est un mécanisme plausible par lequel une entrée
            somatique peut accéder à un réseau susceptible de moduler une fonction viscérale.
          </p>
          <p>
            La discussion conduit à distinguer deux questions qui ne doivent plus être confondues. La
            première est celle de l’<strong>existence</strong> d’une modulation somato-viscérale : une
            stimulation du pied peut-elle modifier une fonction autonome ou viscérale ? La seconde est
            celle du <strong>ciblage</strong> : certaines zones ou certains nerfs offrent-ils un accès
            plus régional ou plus reproductible que d’autres ? Cette distinction est centrale pour
            interpréter les données de neuromodulation et pour construire une recherche spécifique à la
            pression manuelle R.O.P. [13,14,16,17].
          </p>
          <Callout title="Précision méthodologique">
            Dans cette page, les verbes « atteindre » ou « agir sur » sont à comprendre comme des
            raccourcis pédagogiques. La formulation scientifique privilégiée est : générer une entrée
            somatique, recruter un réseau, moduler l’excitabilité d’un circuit ou influencer une
            fonction. Une activation cérébrale, une réponse autonome ou une convergence médullaire ne
            démontrent pas à elles seules une correspondance point-organe.
          </Callout>

          {/* role, not <nav>: the site's global `nav` rules turn it into a flex
              row of uppercase links and hide it below 760px. */}
          <div className="nap-toc" role="navigation" aria-label="Sommaire">
            <p className="nap-toc-t">Sommaire</p>
            <ol>
              {TOC.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    {s.n && <span className="nap-toc-n">{s.n}</span>}
                    {s.t}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="nap-sec" id="lecture-rapide">
          <h2>Lecture rapide : les conclusions essentielles</h2>
          <ul className="nap-key">
            <li>
              Le pied est une interface sensorielle riche. La peau glabre plantaire contient plusieurs
              classes de mécanorécepteurs à bas seuil, avec des champs récepteurs et des seuils qui
              varient selon les régions [2,3].
            </li>
            <li>
              <strong>Quatre grandes portes somatiques</strong> peuvent être distinguées au niveau du
              pied et de la cheville : plantaire/tibiale, latérale/surale, dorsale/fibulaire et
              médiale/saphène. Elles ne sont équivalentes ni sur le plan périphérique ni sur le plan
              radiculaire [1].
            </li>
            <li>
              La porte plantaire/tibiale est la mieux documentée pour une stimulation mécanique du
              pied : branches plantaires médiale et latérale et rameaux calcanéens convergent vers le
              nerf tibial [2,3,5,6].
            </li>
            <li>
              Le nerf tibial est pluriradiculaire, classiquement L4–S3. Son recouvrement possible avec
              l’organisation sacrée pelvienne S2–S4 concerne surtout <strong>S2–S3</strong>. Ce
              recouvrement renforce une hypothèse de ciblage régional pelvien, mais ne crée pas un
              trajet direct vers un viscère [1,7-10,16].
            </li>
            <li>
              Les nerfs sural, fibulaire et saphène ne sont pas seulement des contrôles : ce sont
              d’autres portes somatiques à comparer. Des stimulations tibiales et fibulaires produisent
              des réponses cérébrales partiellement communes mais non identiques [13].
            </li>
            <li>
              Le deuxième pont est <strong>intranerveux</strong> : talon, arche et avant-pied ne
              recrutent pas nécessairement les mêmes branches, les mêmes tissus ni les mêmes
              populations afférentes, même lorsqu’ils rejoignent le même nerf tibial [2,3,5,6].
            </li>
            <li>
              La moelle lombo-sacrée est un carrefour d’intégration. Des afférences somatiques,
              périnéales et viscérales peuvent converger sur des interneurones et des circuits sacrés ;
              l’effet dépend de l’état du réseau et n’est pas une commande directe du viscère [8-10].
            </li>
            <li>
              Les voies supraspinales ajoutent un second niveau d’intégration. Plus un mécanisme dépend
              de ces relais généraux, moins il permet à lui seul d’affirmer une spécificité régionale
              [7,11-14,17].
            </li>
            <li>
              L’absence de recouvrement radiculaire direct n’exclut pas une modulation viscérale ; elle
              diminue surtout la force de l’argument en faveur d’un ciblage segmentaire. Le gradient se
              lit sur deux axes : proximité segmentaire et niveau de preuve expérimentale.
            </li>
            <li>
              Le <strong>pelvis</strong> reste le meilleur candidat à un ciblage régional depuis le
              pied, et la vessie le modèle viscéral le mieux documenté. Le côlon distal et le rectum en
              constituent une extension importante [15,19-21].
            </li>
          </ul>
        </section>

        <section className="nap-sec" id="portes">
          <h2>1. Le pied : une interface sensorielle et quatre portes somatiques</h2>

          <h3>1.1. De la pression à l’afférence</h3>
          <p>
            La peau glabre de la plante n’est pas une surface passive. Les enregistrements
            microneurographiques humains décrivent quatre grandes classes d’afférences tactiles à bas
            seuil : unités à adaptation rapide de type I et II, unités à adaptation lente de type I et
            II. Leurs champs récepteurs se distribuent sur les orteils, les têtes métatarsiennes, les
            arches et le talon ; leur densité, leur taille et leur seuil ne sont pas uniformes [2,3].
          </p>
          <p>
            Une pression manuelle R.O.P. est donc susceptible de recruter des populations afférentes
            différentes selon la zone, la surface de contact, la direction, la vitesse, la durée et la
            profondeur du geste. Ce point est essentiel : deux zones voisines ne doivent pas être
            supposées équivalentes, mais leur différence doit être recherchée dans l’innervation
            réelle, les tissus sollicités et les propriétés des récepteurs, non dans une ressemblance
            topographique avec un organe.
          </p>

          <h3>1.2. Quatre portes d’entrée à comparer</h3>
          <p>
            La discussion conduit à organiser le pied en quatre grandes portes somatiques. Ces
            territoires se chevauchent et varient selon les individus ; ils doivent être compris comme
            des régions fonctionnelles, non comme des frontières millimétriques [1].
          </p>
          <div className="nap-gates">
            {GATES.map((g) => (
              <div key={g.k} className={`nap-gate nap-gate-${g.k}`}>
                <div className="nap-gate-h">
                  <span className="nap-gate-t">{g.t}</span>
                  <span className="nap-gate-r">{g.roots}</span>
                </div>
                <p className="nap-gate-zone">{g.zone}</p>
                <p className="nap-gate-nerve">{g.nerve}</p>
                <p className="nap-gate-note">{g.note}</p>
              </div>
            ))}
          </div>
          <p>
            Ces quatre portes peuvent toutes générer une entrée somatique ascendante. La question
            scientifique n’est donc pas de savoir si une seule zone « communique avec le cerveau », mais
            si le nerf d’entrée, la branche périphérique et la population afférente recrutée modifient
            la nature, l’intensité ou la spécificité de la réponse centrale et viscérale.
          </p>

          <h3>1.3. Du pied vers le système nerveux central</h3>
          <p>
            Dans une représentation simplifiée, la chaîne fonctionnelle peut être décrite ainsi :
          </p>
          <ol className="nap-chain">
            {CHAIN.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p>
            Cette chaîne n’est pas un faisceau unique : selon la modalité sensorielle, les messages
            somatiques empruntent plusieurs systèmes ascendants et plusieurs relais. L’idée importante
            pour la R.O.P. est qu’une pression locale peut être convertie en une activité nerveuse
            mesurable qui n’est pas confinée au pied [1-3].
          </p>
          <p>
            Des données humaines montrent par ailleurs que le feedback mécanorécepteur cutané provenant
            de la main ou du pied peut modifier l’activité nerveuse sympathique musculaire. Cette
            observation ne démontre pas une action sur un organe déterminé, mais elle établit un
            couplage possible entre entrée somatosensorielle et régulation autonome [14].
          </p>
          <NapFigure
            src={`${PLATE}/pont-schema.webp`}
            caption="Du stimulus podal à la modulation du réseau : les quatre étapes d’un pont neuro-anatomique."
            alt="Schéma en quatre étapes : porte d’entrée sensorielle dans la peau du pied, transmission par les nerfs plantaires et le nerf tibial, intégration spinale des entrées podales, périnéales et viscérales, puis intégration corticale et modulation descendante."
          />
        </section>

        <section className="nap-sec" id="versant-visceral">
          <h2>2. Le versant viscéral : comment l’information interne rejoint les mêmes systèmes</h2>
          <p>
            Un pont neuro-anatomique ne peut pas être décrit uniquement depuis le pied. Il faut
            également préciser comment les informations issues des viscères atteignent le système
            nerveux central. Les récepteurs viscéraux renseignent notamment sur la distension, la
            tension, les contractions, l’état chimique du milieu et, dans certaines conditions,
            l’inflammation ou la lésion. Les corps cellulaires des neurones sensitifs se trouvent dans
            les ganglions vagaux ou les ganglions rachidiens [18].
          </p>
          <p>
            Les afférences vagales, particulièrement importantes pour de nombreux viscères thoraciques
            et abdominaux, projettent vers le noyau du tractus solitaire dans le tronc cérébral. Les
            afférences viscérales spinales pénètrent dans la corne dorsale après avoir cheminé avec des
            voies splanchniques thoraciques ou lombaires, hypogastriques ou pelviennes. Certains
            viscères, notamment le côlon distal, le rectum et plusieurs organes du petit bassin,
            possèdent ainsi une organisation afférente distribuée sur plusieurs voies [15,18].
          </p>
          <p className="nap-note">
            Il convient de distinguer le trajet emprunté de la nature du message. Une fibre sensitive
            qui accompagne un nerf splanchnique ou un nerf pelvien reste une afférence sensitive ; elle
            ne doit pas être confondue avec les fibres autonomes efférentes qui quittent le système
            nerveux central pour contrôler les muscles lisses, les glandes ou les vaisseaux. Nous
            privilégions donc les formulations « afférences viscérales cheminant avec les voies
            splanchniques thoracolombaires » et « afférences viscérales cheminant avec les nerfs
            pelviens » [18].
          </p>
          <p>
            Cette double lecture — somatique depuis le pied, viscérale depuis l’organe — permet de
            rechercher les lieux où les deux systèmes peuvent se rencontrer : même segment spinal,
            interneurones intersegmentaires, réseaux lombo-sacrés, tronc cérébral ou centres
            supraspinaux.
          </p>
          <NapFigure
            src={`${PLATE}/versant-visceral.webp`}
            caption="Le versant viscéral : comment les organes informent le système nerveux central."
            alt="Trois schémas comparant les afférences vagales vers le noyau du tractus solitaire, les afférences spinales thoraco-lombaires et les afférences pelviennes sacrées S2-S4."
          />
        </section>

        <section className="nap-sec" id="ponts">
          <h2>Les cinq ponts neuro-anatomiques</h2>
          <p>
            Un pont n’est pas un câble direct entre un point du pied et un organe : c’est un maillon
            identifiable d’un réseau fonctionnel. Le modèle révisé en distingue cinq, du recouvrement
            radiculaire jusqu’aux réseaux cérébraux.
          </p>

          <div className="nap-bridge">
            <h3>
              <span className="nap-bridge-n">Pont 1</span>
              Le recouvrement segmentaire : S2–S3 à travers le nerf tibial
            </h3>
            <p>
              Le nerf tibial reçoit classiquement des fibres issues de L4 à S3. Les circuits sacrés
              impliqués dans les fonctions pelviennes sont principalement organisés autour de S2–S4, et
              le contrôle somatique des sphincters et du plancher pelvien implique notamment le nerf
              pudendal, lui aussi rattaché à S2–S4 [1,7-10]. Si l’on raisonne par recouvrement
              radiculaire, S2 et S3 constituent donc les niveaux communs possibles entre le nerf tibial
              et une partie de l’organisation pelvienne.
            </p>
            <p>
              Ce raisonnement ne signifie pas qu’une zone cutanée plantaire soit un « dermatome S2 » ou
              « S3 ». Les cartes dermatomériques humaines placent surtout L4, L5 et S1 au niveau du
              membre inférieur distal et du pied [4]. Un dermatome décrit l’origine radiculaire
              dominante d’un territoire cutané ; un nerf périphérique mixte contient au contraire des
              axones provenant de plusieurs racines et destinés à la peau, aux muscles, aux
              articulations et aux tissus profonds.
            </p>
            <p>
              Le Pont 1 doit donc être formulé avec précision : une stimulation d’un territoire tibial
              peut introduire une activité afférente dans un ensemble lombo-sacré contenant S2–S3 et
              communiquant avec les circuits pelviens. Elle ne sélectionne pas automatiquement S2 ou
              S3, ne rejoint pas directement un organe et ne garantit pas une réponse viscérale. Elle
              apporte cependant un argument de proximité segmentaire plus dense que celui de certaines
              portes somatiques plus lombaires.
            </p>
            <NapFigure
              src={`${PLATE}/pont-1-tibial.webp`}
              caption="Pont 1 — Le nerf tibial : une porte d’entrée lombo-sacrée."
              alt="Schéma du nerf tibial issu des racines L4 à S3, comparé aux circuits sacrés pelviens S2 à S4 ; le chevauchement segmentaire possible correspond aux niveaux S2 et S3."
            />
            <Callout title="Conséquence pour le gradient">
              Le recouvrement segmentaire doit être interprété comme un facteur de ciblage régional,
              non comme une condition nécessaire à tout effet viscéral. Une porte sans recouvrement
              S2–S4 peut encore agir par des relais intersegmentaires ou supraspinaux ; elle apporte
              simplement moins d’arguments en faveur d’une spécificité pelvienne.
            </Callout>
          </div>

          <div className="nap-bridge">
            <h3>
              <span className="nap-bridge-n">Pont 2</span>
              De la zone podale au nerf tibial : quelles afférences sont réellement recrutées ?
            </h3>
            <p>
              Le territoire tibial n’est pas homogène. Le nerf plantaire médial, le nerf plantaire
              latéral et les rameaux calcanéens transportent des informations provenant de régions et
              de tissus différents. Leurs trajectoires, leur séparabilité fasciculaire et leurs
              territoires présentent des variations anatomiques [5,6]. Les propriétés des
              mécanorécepteurs varient également selon les régions plantaires [2,3].
            </p>
            <p>
              Cette organisation donne au Pont 2 une fonction précise : faire le lien entre la pression
              manuelle R.O.P. et les données de neuromodulation du nerf tibial. Une stimulation
              électrique appliquée à proximité d’un tronc nerveux et une pression locale sur le pied ne
              recrutent pas nécessairement les mêmes fibres. Pour transposer prudemment les
              connaissances issues de la neuromodulation, il faut donc demander quelle branche
              périphérique et quelle population afférente sont réellement sollicitées par le geste
              manuel [16].
            </p>
            <dl className="nap-deflist">
              <dt>Talon</dt>
              <dd>
                Recrutement préférentiel possible des rameaux calcanéens et des afférences des tissus
                superficiels et profonds du coussinet adipeux.
              </dd>
              <dt>Arche</dt>
              <dd>
                Recrutement plus important des branches plantaires, avec des différences possibles
                entre versants médial et latéral.
              </dd>
              <dt>Avant-pied</dt>
              <dd>
                Densité sensorielle élevée dans plusieurs zones et recrutement de branches digitales
                issues des nerfs plantaires.
              </dd>
            </dl>
            <p>
              La question expérimentale devient alors : deux zones appartenant au même nerf tibial
              produisent-elles la même modulation ? Si talon, arche et avant-pied produisent des
              réponses comparables sous stimulation contrôlée, l’effet pourrait dépendre principalement
              de l’accès général au système tibial. Si les réponses diffèrent de façon reproductible,
              il faudra rechercher la contribution de la branche, du tissu, de la profondeur, du profil
              mécanorécepteur et de l’organisation fasciculaire.
            </p>
            <NapFigure
              src={`${PLATE}/pont-2-plantaires.webp`}
              caption="Pont 2 — De la zone podale au nerf tibial : talon, arche et avant-pied comme portes sensorielles à comparer au sein d’un même tronc nerveux."
              alt="Vue plantaire du pied gauche colorée en trois territoires cutanés — nerf plantaire médial, nerf plantaire latéral et territoire calcanéen principalement tibial — suivie de la chaîne pression locale, branche périphérique, population afférente, nerf tibial, racines L4 à S3."
            />
          </div>

          <div className="nap-bridge">
            <h3>
              <span className="nap-bridge-n">Pont 3</span>
              Les autres portes somatiques : sural, fibulaire et saphène
            </h3>
            <p>
              Le nerf tibial n’est pas la seule porte d’entrée possible. Le bord latéral du pied dépend
              largement du nerf sural ; le dos du pied dépend principalement des nerfs fibulaires
              superficiel et profond ; le versant médial de la cheville et une partie du pied proximal
              peuvent recevoir le nerf saphène [1]. Ces voies rejoignent la moelle par des combinaisons
              radiculaires différentes et peuvent ensuite accéder à des réseaux spinaux ou supraspinaux
              communs.
            </p>
            <p>
              La comparaison devient particulièrement informative lorsque l’on met en regard leurs
              racines principales. Le tibial L4–S3 offre le recouvrement sacré S2–S3 le plus large ; le
              sural S1–S2 et le système fibulaire L4–S2 disposent d’une composante S2 possible ; le
              saphène, surtout L3–L4, ne possède pas de recouvrement sacré direct évident avec S2–S4
              [1]. Ces distributions sont des plages anatomiques et non des codes exclusifs : une
              pression locale ne sélectionne pas une racine isolée.
            </p>
            <p>
              Des données d’imagerie et de neuromodulation montrent que des stimulations tibiales et
              fibulaires peuvent recruter des réponses cérébrales partiellement communes mais non
              identiques [13]. Cette observation soutient l’idée que le choix de la porte somatique
              peut modifier le profil central de la stimulation. Elle ne démontre toutefois pas que les
              mêmes différences existent sous pression manuelle, ni qu’elles correspondent à des effets
              viscéraux spécifiques.
            </p>
            <p>
              Le Pont 3 ne doit donc plus être conçu comme une simple opposition « tibial actif versus
              nerfs contrôles ». Le sural, le fibulaire et le saphène sont eux-mêmes des portes
              somatiques candidates. Leur comparaison permet de tester plusieurs modèles : un gradient
              tibial &gt; sural/fibulaire &gt; saphène serait compatible avec une contribution
              segmentaire sacrée ; des réponses comparables entre toutes les portes orienteraient
              davantage vers une modulation somato-autonome générale ; des profils différents sans
              relation simple avec les racines suggéreraient une organisation plus complexe,
              intersegmentaire ou supraspinale.
            </p>
            <NapFigure
              src={`${PLATE}/pont-3-autres-nerfs.webp`}
              caption="Pont 3 — Autres portes somatiques du pied : comparaison des nerfs sural, fibulaire commun et saphène avec la porte tibiale."
              alt="Trois schémas du pied montrant les territoires des nerfs sural (S1-S2), fibulaire commun (L4-S2) et saphène (L3-L4), avec pour chacun la chaîne pression, branche périphérique, population afférente, nerf et racines."
            />
          </div>

          <div className="nap-bridge">
            <h3>
              <span className="nap-bridge-n">Pont 4</span>
              Les réseaux lombo-sacrés : un carrefour d’intégration spinale
            </h3>
            <p>
              Le maillon central du modèle pelvien est la moelle lombo-sacrée. Les afférences qui y
              pénètrent ne restent pas enfermées dans un segment isolé. Elles se distribuent à des
              interneurones excitateurs et inhibiteurs, à des neurones de projection et à des circuits
              reliant plusieurs niveaux. Dans les circuits pelviens, ces réseaux reçoivent des
              informations viscérales, périnéales et somatiques et sont simultanément soumis aux
              commandes descendantes du cerveau [8-10].
            </p>
            <p>
              Des travaux expérimentaux sur la fonction vésicale montrent que des afférences tibiales
              et pudendales peuvent agir à travers des mécanismes interneuronaux spinaux et modifier
              les réflexes de la vessie [10]. Ce résultat fournit un exemple particulièrement important
              pour la R.O.P. : une entrée somatique n’a pas besoin d’un trajet direct vers le viscère
              pour influencer un circuit autonome. Elle peut modifier l’excitabilité du réseau dans
              lequel l’information viscérale est traitée.
            </p>
            <p>
              La réponse dépend de l’état du système. Fréquence, intensité, durée de stimulation,
              fibres recrutées et état fonctionnel du viscère peuvent modifier le sens de la réponse.
              Dans les modèles vésicaux, le degré de remplissage constitue par exemple une variable
              importante [7-10,16]. Une même porte périphérique peut donc être facilitatrice,
              inhibitrice ou sans effet selon les conditions.
            </p>
            <NapFigure
              src={`${PLATE}/pont-4-lombosacre.webp`}
              caption="Pont 4 — Convergence somatique, périnéale et viscérale dans les réseaux lombo-sacrés, puis modulation des circuits autonomes et sphinctériens pelviens."
              alt="Coupe de moelle épinière montrant la convergence des afférences somatiques tibiales, non tibiales, saphènes, périnéales et viscérales pelviennes sur des réseaux d’interneurones spinaux."
            />
            <p>
              Le petit bassin lui-même forme un réseau intégré plutôt qu’une juxtaposition d’organes
              indépendants. Les interactions entre vessie, côlon distal et rectum sont documentées à
              plusieurs niveaux, depuis certaines afférences primaires jusqu’aux réseaux spinaux et aux
              phénomènes de sensibilisation croisée [19-21]. Ces données justifient de parler d’abord de
              ciblage régional pelvien avant d’affirmer un ciblage d’organe isolé.
            </p>
            <NapFigure
              src={`${PLATE}/reseaux-pelviens.webp`}
              caption="Réseaux pelviens intégrés : convergence et sensibilisation croisée."
              alt="Schéma reliant vessie, côlon distal et rectum, périnée et plancher pelvien à trois niveaux de convergence : ganglions rachidiens, réseaux spinaux lombo-sacrés et centres supraspinaux."
            />
            <Callout title="Pourquoi le Pont 4 est central">
              Il explique pourquoi plusieurs portes somatiques peuvent influencer un même réseau
              pelvien. Il renforce l’idée d’un ciblage régional sans valider un point-organe exclusif.
              Il constitue aussi le relais naturel entre les ponts périphériques et les voies
              supraspinales.
            </Callout>
          </div>

          <div className="nap-bridge">
            <h3>
              <span className="nap-bridge-n">Pont 5</span>
              Les voies supraspinales : une voie d’accès aux fonctions viscérales à distance
            </h3>
            <p>
              Le cinquième pont élargit le modèle au-delà des recouvrements segmentaires. Une entrée
              somatique issue du pied peut remonter vers les centres supérieurs, participer à
              l’activité de réseaux cérébraux, puis modifier des commandes descendantes vers la moelle
              et les circuits autonomes. La littérature expérimentale sur les réflexes somato-autonomes
              montre de façon générale que l’entrée somatosensorielle peut influencer des fonctions
              autonomes par des mécanismes spinaux et supraspinaux [17].
            </p>
            <NapFigure
              src={`${PLATE}/pont-5-schema.webp`}
              caption="Pont 5 — Schéma simple des voies supraspinales : pied, moelle, tronc cérébral, réseaux corticaux, puis commandes descendantes."
              alt="Chaîne en cinq étapes : pied, moelle, tronc cérébral, réseaux limbiques et corticaux (insula, cingulaire, préfrontal), puis commandes descendantes vers les circuits spinaux et autonomes."
            />
            <p>
              Pour la vessie, ce contrôle central est particulièrement bien décrit. Les informations
              viscérales et somatiques sont intégrées à plusieurs niveaux impliquant la substance grise
              périaqueducale, des centres pontiques, l’insula, le cortex cingulaire et les régions
              préfrontales ; ces réseaux participent à la perception de l’état viscéral, à l’attention,
              au contexte, à la décision et à la coordination des réponses autonomes et sphinctériennes
              [7,11,12].
            </p>
            <p>
              Il est donc raisonnable de considérer le tronc cérébral et les réseaux insulo-cingulaires
              et préfrontaux comme des niveaux susceptibles d’être influencés indirectement par une
              entrée somatique du pied. Le terme « cerveau limbique » doit toutefois être utilisé avec
              prudence : il est préférable de nommer les structures ou les réseaux concernés plutôt que
              de suggérer l’existence d’un centre limbique unique de la R.O.P.
            </p>
            <p>
              Les réponses cérébrales observées lors de stimulations transcutanées tibiales et
              fibulaires ne sont pas identiques [13]. Cela indique que plusieurs portes périphériques
              peuvent atteindre des réseaux centraux partiellement communs tout en conservant des
              profils différents. Encore une fois, ces données portent sur la neuromodulation
              électrique et ne suffisent pas à établir l’équivalence avec une pression manuelle R.O.P.
            </p>
            <NapFigure
              src={`${PLATE}/pont-5-supraspinal.webp`}
              caption="Pont 5 — Entrée somatique ascendante, intégration centrale et modulation autonome descendante."
              alt="Coupe sagittale de la tête montrant le cortex cingulaire, le réseau insulo-cortical, le cortex préfrontal, l’hypothalamus, la substance grise périaqueducale, le tronc cérébral et le centre pontique de la miction, avec des exemples de cibles viscérales."
            />
            <p>
              Le schéma fonctionnel peut être résumé ainsi : pied, moelle, tronc cérébral et réseaux
              centraux, réseaux insulo-cingulaires et préfrontaux, commandes descendantes, circuits
              spinaux et autonomes, puis modification possible d’une fonction viscérale. Il s’agit
              d’une architecture fonctionnelle simplifiée, et non d’une voie anatomique unique où
              chaque étape serait nécessairement un relais séquentiel obligatoire.
            </p>
            <p>
              Le principal enseignement du Pont 5 est méthodologique : l’absence de recouvrement
              radiculaire direct ne suffit pas à exclure un effet viscéral. En revanche, plus
              l’hypothèse dépend exclusivement de relais supraspinaux généraux, moins elle permet
              d’affirmer une spécificité régionale ou une correspondance point-organe.
            </p>
          </div>
        </section>

        <section className="nap-sec" id="gradient">
          <h2>8. Un gradient de ciblage neuro-anatomique à deux axes</h2>
          <p>
            La première version du gradient classait principalement les zones selon la densité des
            arguments anatomiques reliant le pied à une région viscérale. La discussion conduit à le
            faire évoluer vers une lecture à deux axes, afin de ne pas confondre proximité anatomique
            et preuve expérimentale.
          </p>

          <h3>8.1. Axe horizontal : proximité segmentaire et densité des ponts régionaux</h3>
          <p>
            Cet axe répond à la question : combien d’arguments anatomiques convergent vers une même
            région ? Il prend en compte le nerf périphérique, les racines probables, la présence ou non
            d’un recouvrement avec les voies viscérales, la convergence spinale régionale et
            l’intégration fonctionnelle locale. Sur cet axe, les territoires tibiaux associés aux
            réseaux pelviens sont les candidats les plus forts, car ils combinent une porte périphérique
            identifiable, des composantes S2–S3 et une convergence lombo-sacrée documentée [7-10,16].
          </p>

          <h3>8.2. Axe vertical : niveau de preuve de modulation somato-viscérale</h3>
          <p>
            Cet axe répond à une autre question : existe-t-il des données expérimentales ou cliniques
            montrant qu’une stimulation somatique de cette voie modifie effectivement une fonction
            viscérale ? La vessie se situe actuellement haut sur cet axe, en raison de la littérature
            consacrée à la neuromodulation tibiale et aux mécanismes spinaux et supraspinaux du contrôle
            urinaire [7-12,16]. Pour d’autres viscères, la preuve peut être beaucoup plus faible ou
            indirecte dans la bibliographie retenue.
          </p>
          <p>
            L’intérêt de cette séparation est majeur : une cible peut être anatomiquement éloignée du
            pied et rester modulable par des mécanismes intersegmentaires ou supraspinaux [17].
            Inversement, un recouvrement segmentaire favorable n’est pas une preuve d’efficacité
            thérapeutique. Le gradient ne doit donc jamais être lu comme une échelle de puissance
            clinique.
          </p>
          <NapFigure
            src={`${PLATE}/gradient-deux-axes.webp`}
            caption="Gradient de ciblage neuro-anatomique — deux axes de lecture : proximité segmentaire et preuve expérimentale de modulation somato-viscérale."
            alt="Graphique à deux axes plaçant vessie, rectum, sigmoïde distal et organes pelviens en haut à droite ; côlon descendant au centre ; estomac, rein et médullosurrénale en haut à gauche ; intestin grêle, rate et diaphragme en bas à gauche."
          />

          <h3>8.3. Application provisoire aux principales cibles</h3>
          <div className="nap-targets">
            {TARGETS.map((target) => (
              <div key={target.t} className={`nap-target nap-level-${target.lvl}`}>
                <div className="nap-target-h">
                  <span className="nap-target-t">{target.t}</span>
                  <span className="nap-target-lvl">Degré {target.lvl}</span>
                </div>
                <p>{target.d}</p>
              </div>
            ))}
          </div>
          <NapFigure
            src={`${PLATE}/pelvis.webp`}
            caption="Le pelvis : le candidat viscéral le mieux étayé — une accumulation de ponts lombo-sacrés, sans connexion directe point-organe."
            alt="Coupe sagittale simplifiée d’un pelvis féminin avec les innervations parasympathique sacrée, sympathique thoracolombaire et somatique pudendale, et le chevauchement radiculaire S2-S3 entre nerf tibial et circuits sacrés pelviens."
          />

          <p>
            Le degré proposé se lit sur une échelle en quatre niveaux, qui résume la densité des
            arguments neuro-anatomiques disponibles pour une région donnée.
          </p>
          <div className="nap-levels">
            {LEVELS.map((level) => (
              <div key={level.n} className={`nap-level nap-level-${level.n}`}>
                <div className="nap-level-n">{level.n}</div>
                <div>
                  <div className="nap-level-t">{level.t}</div>
                  <p className="nap-level-d">{level.d}</p>
                </div>
              </div>
            ))}
          </div>
          <NapFigure
            src={`${PLATE}/matrice-gradient.webp`}
            caption="Matrice de plausibilité du ciblage neuro-anatomique viscéral : une hiérarchisation proposée, qui ne mesure pas l’efficacité clinique de la R.O.P."
            alt="Tableau classant le bas appareil urinaire et l’interface périnéo-sphinctérienne au degré 3, le côlon distal et le rectum au degré 2, les viscères abdominaux supérieurs ainsi que le cœur et les poumons au degré 1."
          />
          <Callout title="Message clé du gradient">
            L’absence de recouvrement radiculaire n’exclut pas un effet viscéral ; elle rend surtout le
            ciblage régional moins spécifique. À l’inverse, un recouvrement segmentaire dense augmente
            la plausibilité anatomique d’un ciblage régional sans démontrer l’efficacité d’un point
            R.O.P.
          </Callout>
        </section>

        <section className="nap-sec" id="hypotheses">
          <h2>9. Transformer la cartographie R.O.P. en hypothèse expérimentale</h2>
          <p>
            L’intérêt principal de cette architecture n’est pas de fournir une justification
            rétrospective à chaque point de la cartographie. Il est de transformer cette cartographie en
            une série d’hypothèses vérifiables. Chaque zone peut être décrite par une chaîne explicite :
            tissu stimulé, population réceptrice, branche nerveuse, nerf principal, racines probables,
            réseau spinal, relais supraspinaux, fonction mesurée.
          </p>

          <h3>9.1. Comparaison intratibiale : tester le Pont 2</h3>
          <p>
            Comparer, avec un geste aussi standardisé que possible, plusieurs zones appartenant toutes
            au système tibial — par exemple talon, arche médiale, arche latérale et avant-pied. Si les
            réponses sont identiques, la branche périphérique pourrait jouer un rôle limité. Si elles
            diffèrent, la distribution des afférences, la profondeur, les tissus stimulés et
            l’organisation fasciculaire deviennent des variables explicatives prioritaires [2,3,5,6].
          </p>

          <h3>9.2. Comparaison entre nerfs : tester le Pont 3</h3>
          <p>
            Comparer les quatre portes somatiques : tibiale, surale, fibulaire et saphène. Cette
            comparaison permet de tester si le degré de recouvrement sacré prédit la réponse. Une
            gradation tibial &gt; sural/fibulaire &gt; saphène serait compatible avec une contribution
            segmentaire ; une réponse similaire des quatre portes orienterait vers une modulation plus
            générale ; des profils différents pourraient révéler une organisation centrale dépendant du
            nerf d’entrée [1,13].
          </p>

          <h3>9.3. Comparaison entre cibles viscérales : tester le gradient</h3>
          <p>
            Le pelvis doit constituer le premier terrain de validation, car il possède la densité de
            ponts la plus forte et parce que la vessie fournit un modèle fonctionnel déjà largement
            étudié [7-12,16]. Le côlon distal et le rectum représentent une seconde cible logique en
            raison de leurs afférences distribuées et des interactions pelviennes croisées [15,19-21].
            Les viscères abdominaux plus hauts permettent ensuite de tester la part des mécanismes
            intersegmentaires et supraspinaux.
          </p>

          <h3>9.4. Distinguer neuromodulation électrique et pression manuelle</h3>
          <p>
            Une grande partie des données mécanistiques disponibles concerne la stimulation électrique
            transcutanée ou percutanée. Elle démontre qu’un nerf périphérique peut être utilisé comme
            porte de neuromodulation, mais elle ne prouve pas qu’une pression manuelle recrute les mêmes
            fibres, avec la même synchronisation ni la même intensité [13,16]. Le programme de recherche
            R.O.P. doit donc intégrer cette différence au lieu de la masquer.
          </p>
          <p className="nap-note">
            La question spécifique à la R.O.P. devient : une pression manuelle reproductible sur un
            territoire anatomiquement défini produit-elle une activité afférente suffisante pour
            modifier un marqueur neurophysiologique, autonome ou viscéral ? Ce n’est qu’après cette
            étape qu’il devient pertinent de tester la spécificité de la zone.
          </p>

          <h3>9.5. Variables à documenter</h3>
          <ul className="nap-bullets">
            {VARIABLES.map((variable) => <li key={variable}>{variable}</li>)}
          </ul>
        </section>

        <section className="nap-sec" id="limites">
          <h2>10. Portée et limites de la proposition</h2>
          <p>
            Cette lecture ne cherche pas à démontrer ici l’efficacité de la réflexothérapie. Elle
            propose une architecture de travail. Une zone R.O.P. est considérée comme anatomiquement
            mieux fondée lorsqu’elle réunit plusieurs éléments concordants : porte périphérique
            identifiable, profil afférent plausible, compatibilité radiculaire, convergence spinale
            régionale et, idéalement, données expérimentales de modulation. Une zone est moins ciblée
            lorsque le lien repose principalement sur des relais centraux généraux ou sur une
            correspondance cartographique traditionnelle.
          </p>
          <p>
            La présence d’une réponse autonome ne doit pas être confondue avec une preuve de ciblage
            viscéral. L’étude montrant que le feedback mécanorécepteur du pied peut moduler l’activité
            sympathique musculaire soutient l’existence d’un couplage somato-autonome [14], mais ne
            permet pas d’attribuer cette réponse à un organe. De même, l’activation de réseaux cérébraux
            après stimulation tibiale ou fibulaire [13] établit une entrée centrale, pas une
            correspondance point-organe.
          </p>
          <p>
            La bibliographie utilisée ici soutient particulièrement la plante du pied, l’anatomie du
            nerf tibial et de ses branches, la neuromodulation vésicale, les réseaux sacrés, les
            interactions vessie-intestin et les mécanismes généraux somato-autonomes. Elle ne fournit
            pas le même niveau de preuve pour chaque viscère évoqué. Les propositions concernant
            l’estomac, le rein, la rate, les glandes surrénales ou l’intestin grêle doivent donc rester
            formulées comme des hypothèses de modulation à distance à documenter, non comme des effets
            spécifiques déjà établis.
          </p>
        </section>

        <section className="nap-sec" id="synthese">
          <h2>11. Synthèse : des portes, des ponts et un gradient</h2>
          <p>
            Le pied ne contient pas les organes ; il contient des portes d’entrée somatiques. Ces portes
            n’ont probablement ni la même densité sensorielle, ni la même organisation périphérique, ni
            la même proximité avec les réseaux spinaux. La porte plantaire/tibiale possède une base
            anatomique particulièrement riche pour le pelvis, mais elle n’est ni unique ni exclusive.
          </p>
          <p>
            Le modèle révisé s’organise autour de cinq ponts complémentaires. Le Pont 1 examine la
            proximité segmentaire du tibial avec les réseaux sacrés. Le Pont 2 descend au niveau des
            branches plantaires et calcanéennes pour comprendre ce que la pression manuelle recrute
            réellement. Le Pont 3 compare les autres portes somatiques — surale, fibulaire et saphène.
            Le Pont 4 situe leur convergence dans les réseaux lombo-sacrés. Le Pont 5 explique comment
            une entrée du pied peut accéder à des réseaux supraspinaux et, par des commandes
            descendantes, moduler des fonctions plus éloignées.
          </p>
          <p>
            Cette architecture conduit à une règle simple : plus une hypothèse associe une branche
            périphérique identifiable, une proximité radiculaire et une convergence spinale régionale,
            plus le ciblage anatomique est plausible. Plus elle dépend de relais intersegmentaires et
            supraspinaux généraux, plus une modulation reste possible mais moins l’anatomie permet de
            soutenir une spécificité régionale. La preuve expérimentale constitue un axe distinct et
            doit être évaluée séparément.
          </p>
          <p className="nap-closing">
            La R.O.P. peut ainsi être reformulée comme un programme de recherche neuro-anatomique :
            identifier les portes, caractériser les afférences recrutées, comparer les nerfs, mesurer la
            réponse des réseaux et déterminer jusqu’où cette organisation explique les effets cliniques
            observés. La cartographie n’est plus une représentation figée du corps sur le pied ; elle
            devient une hypothèse anatomique et neurofonctionnelle à tester.
          </p>
        </section>

        <section className="nap-sec" id="terminologie">
          <h2>Terminologie retenue</h2>
          <dl className="nap-deflist">
            {TERMS.map((term) => (
              <div key={term.t}>
                <dt>{term.t}</dt>
                <dd>{term.d}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="nap-sec nap-refs" id="references">
          <h2>Bibliographie</h2>
          <p className="nap-refs-note">
            Cette bibliographie soutient l’architecture neuro-anatomique présentée ici. Elle n’a pas
            pour objet de constituer une revue systématique de l’efficacité clinique de la
            réflexothérapie ni de documenter avec le même niveau de détail chaque viscère évoqué.
          </p>
          <ol>
            {REFERENCES.map((reference, i) => <li key={i}><Reference text={reference} /></li>)}
          </ol>
        </section>

        <aside className="nap-cta">
          <p className="nap-cta-eyebrow">Aller plus loin</p>
          <p className="nap-cta-body">
            Ces fondements sont développés, chapitre par chapitre, dans le troisième ouvrage de Guy
            Boitout consacré au système nerveux autonome et aux viscères des cavités abdominale et
            pelvienne.
          </p>
          <div className="nap-cta-row">
            <Link href="/chapitres-gratuits" className="btn b-gold">Lire des chapitres gratuits</Link>
            <Link href="/#acheter" className="btn b-out">Découvrir l’ouvrage</Link>
          </div>
        </aside>
      </article>
    </main>
  )
}

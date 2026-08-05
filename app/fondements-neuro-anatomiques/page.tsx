import type { Metadata } from 'next'
import Link from 'next/link'
import NapFigure from '@/components/NapFigure'
import { SITE_URL } from '@/lib/site'

// Public, indexable, French only. The homepage carries a short version of this
// argument; everything technical lives here so the marketing page stays light.
export const metadata: Metadata = {
  title: 'Fondements neuro-anatomiques de la R.O.P. · Guy Boitout',
  description:
    "Pourquoi une pression sur le pied peut-elle influencer une région du corps ? Les cinq ponts neuro-anatomiques entre le pied et les réseaux nerveux, et un gradient de plausibilité du ciblage viscéral.",
  alternates: { canonical: `${SITE_URL}/fondements-neuro-anatomiques` },
  openGraph: {
    title: 'Fondements neuro-anatomiques de la R.O.P.',
    description:
      "Les cinq ponts neuro-anatomiques entre le pied et les réseaux nerveux, et un gradient de plausibilité du ciblage viscéral.",
    url: `${SITE_URL}/fondements-neuro-anatomiques`,
    type: 'article',
  },
}

const PLATE = '/assets/anatomie'

type Bridge = { n: string; title: string; body: string[]; src: string; caption: string; alt: string }

const BRIDGES: Bridge[] = [
  {
    n: '1',
    title: 'Le nerf tibial : une porte d’entrée lombo-sacrée',
    body: [
      "Le nerf tibial reçoit classiquement des fibres issues de L4 à S3. Les circuits parasympathiques pelviens sont principalement organisés dans les segments sacrés S2 à S4, tandis que le contrôle somatique des sphincters et du plancher pelvien implique le nerf pudendal, lui aussi rattaché à S2-S4. Si l’on raisonne par recouvrement radiculaire, les niveaux communs possibles sont donc S2 et S3.",
      "Cette constatation ne signifie pas qu’une zone cutanée du pied soit un « dermatome S2 ». Les études cliniques situent surtout L4 sur la face médiale de la jambe, L5 sur la face latérale et le dos du pied, S1 sur la face postérieure et la plante. Le dermatome décrit l’origine radiculaire dominante d’une peau ; le nerf tibial est un câble périphérique composite contenant des axones de plusieurs racines, destinés à la peau, aux muscles, aux articulations et aux tissus profonds.",
      "Le pont doit donc être formulé ainsi : une stimulation d’un territoire tibial peut introduire une activité afférente dans un ensemble lombo-sacré qui communique avec les circuits pelviens. Elle ne sélectionne pas automatiquement S2 ou S3, et elle ne rejoint pas directement un organe — elle modifie l’activité d’un réseau intermédiaire.",
    ],
    src: `${PLATE}/pont-1-tibial.webp`,
    caption: 'Pont 1 — Le nerf tibial : une porte d’entrée lombo-sacrée.',
    alt: "Schéma du nerf tibial issu des racines L4 à S3, comparé aux circuits sacrés pelviens S2 à S4 ; l’intersection correspond aux niveaux S2 et S3.",
  },
  {
    n: '2',
    title: 'Les branches plantaires et calcanéennes',
    body: [
      "Le territoire tibial n’est pas homogène. Le nerf plantaire médial, le nerf plantaire latéral et les rameaux calcanéens transportent des informations provenant de régions et de tissus différents. La zone médiale de l’avant-pied, le bord latéral, les arches et le talon n’ont ni les mêmes champs récepteurs, ni la même densité d’afférences, ni exactement la même organisation fasciculaire.",
      "Pour la R.O.P., cette division fournit une première base de hiérarchisation. Une zone du talon peut recruter les rameaux calcanéens et les afférences des tissus profonds du coussinet plantaire ; une zone de l’arche recrute davantage les branches plantaires ; une zone proche du tunnel tarsien se situe plus près du tronc tibial avant sa division.",
      "La conséquence pratique est importante : la localisation ne devrait pas seulement demander « quel organe se trouve ici ? », mais aussi « quel nerf, quelle branche, quelle profondeur et quel type de récepteur sont sollicités ici ? ». Cette seconde question transforme la cartographie en hypothèse neuro-anatomique vérifiable.",
    ],
    src: `${PLATE}/pont-2-plantaires.webp`,
    caption: 'Pont 2 — Les branches plantaires : plusieurs portes d’entrée sensorielles.',
    alt: 'Plante du pied colorée en trois territoires nerveux : plantaire médial, plantaire latéral et calcanéen.',
  },
  {
    n: '3',
    title: 'Les autres nerfs somatiques du membre inférieur',
    body: [
      "Le nerf tibial n’est probablement pas la seule porte d’entrée possible. Le dos du pied dépend principalement des nerfs fibulaires superficiel et profond ; le bord latéral dépend largement du nerf sural ; le bord médial reçoit le nerf saphène. Ces nerfs rejoignent la moelle par des racines et des voies différentes, mais peuvent influencer les réseaux lombo-sacrés par les connexions intersegmentaires et par les centres supraspinaux.",
      "Le nerf sural mérite une attention particulière. Principalement rattaché à S1-S2, il innerve le bord latéral du pied et une partie du talon postéro-latéral : il pourrait constituer soit une porte sacrée partielle, soit une zone contrôle utile face aux territoires plantaires tibiaux. Le nerf saphène, principalement lombaire, offre au contraire un comparateur plus éloigné des réseaux sacrés.",
      "Cette pluralité conduit à trois possibilités : certaines zones tibiales pourraient présenter un meilleur ciblage pelvien ; plusieurs nerfs pourraient produire une modulation régionale comparable ; ou toute stimulation tactile suffisamment structurée pourrait surtout produire une modulation générale. La cartographie doit permettre de départager ces niveaux, non présupposer leur équivalence.",
    ],
    src: `${PLATE}/pont-3-autres-nerfs.webp`,
    caption: 'Pont 3 — Les autres voies somatiques : tester la spécificité tibiale.',
    alt: 'Trois schémas du pied montrant les trajets des nerfs sural, fibulaire commun et saphène.',
  },
  {
    n: '4',
    title: 'Les interneurones lombo-sacrés',
    body: [
      "Le maillon central est la moelle lombo-sacrée. Les afférences qui y pénètrent ne restent pas enfermées dans un segment isolé : elles se distribuent à des interneurones excitateurs et inhibiteurs, à des neurones de projection et à des circuits propriospinaux reliant plusieurs niveaux. Dans les circuits pelviens, ces interneurones reçoivent des informations de la vessie, du rectum, du périnée, des sphincters, du plancher pelvien et des territoires somatiques.",
      "Ce niveau explique qu’une stimulation somatique puisse modifier une activité autonome sans trajet direct vers le viscère. Des travaux expérimentaux montrent, au niveau de neurones spinaux sacrés, une convergence entre afférences tibiales, pudendales et vésicales. Selon la fréquence, l’intensité, la durée, l’état de remplissage d’un viscère et l’état du système nerveux, la réponse peut être facilitatrice, inhibitrice ou absente.",
      "Cette organisation renforce la plausibilité d’un ciblage régional, mais elle affaiblit l’idée d’un point exclusif : plus le relais interneuronal est distribué, plus plusieurs zones peuvent accéder à la même fonction.",
    ],
    src: `${PLATE}/pont-4-lombosacre.webp`,
    caption: 'Pont 4 — Les réseaux lombo-sacrés : un carrefour d’intégration.',
    alt: "Coupe de moelle épinière montrant la convergence des afférences somatiques podales, périnéales et viscérales pelviennes sur des réseaux d’interneurones.",
  },
  {
    n: '5',
    title: 'Les voies supraspinales',
    body: [
      "Les fonctions pelviennes sont contrôlées à plusieurs étages. Les informations viscérales et somatiques remontent vers le tronc cérébral, le thalamus, l’insula et les réseaux corticaux. Pour la vessie, la substance grise périaqueducale intègre le remplissage, le contexte et les commandes corticales ; les centres pontiques coordonnent ensuite les réponses autonomes et sphinctériennes.",
      "La stimulation du pied peut ainsi modifier l’état d’un réseau par une voie ascendante, puis par des commandes descendantes vers la moelle. Ce pont est particulièrement pertinent pour la douleur, le stress, l’urgence viscérale et l’ajustement autonome général. Il est cependant moins topographique : il peut expliquer qu’une zone éloignée influence une fonction, mais il différencie moins nettement deux points voisins du pied.",
      "La neuro-anatomie dessine donc une règle simple : plus l’hypothèse dépend exclusivement des centres supraspinaux, plus l’effet attendu est diffus ; plus elle associe une branche périphérique identifiable, un ensemble radiculaire compatible et une convergence spinale régionale, plus le ciblage anatomique devient plausible.",
    ],
    src: `${PLATE}/pont-5-supraspinal.webp`,
    caption: 'Pont 5 — Les voies supraspinales : modulation contextuelle et descendante.',
    alt: 'Coupe sagittale du cerveau montrant l’insula, le cortex cingulaire, le cortex préfrontal, la substance grise périaqueducale et le centre pontique de la miction.',
  },
]

const LEVELS = [
  {
    n: '3',
    t: 'Ciblage régional renforcé',
    d: "Branche ou tronc nerveux identifiable, proximité radiculaire, convergence spinale connue et fonction régionale intégrée. Les territoires tibiaux, plantaires et calcanéens en relation avec les réseaux lombo-sacrés et pelviens en sont les principaux candidats.",
  },
  {
    n: '2',
    t: 'Ciblage régional plausible',
    d: "Absence de recouvrement direct évident, mais connexions intersegmentaires et réseaux spinaux communs permettant une modulation de la région. Certaines zones dorsales ou latérales du pied peuvent relever de ce niveau.",
  },
  {
    n: '1',
    t: 'Modulation générale',
    d: "Le lien repose surtout sur les voies ascendantes, les contrôles descendants, la régulation autonome ou la modulation de la douleur. Une influence reste neurophysiologiquement possible, mais elle est peu spécifique d’un organe ou d’une région.",
  },
  {
    n: '0',
    t: 'Correspondance non étayée',
    d: "La position du point repose essentiellement sur une tradition cartographique ou une analogie de forme, sans continuité nerveuse, segmentaire ou fonctionnelle identifiable.",
  },
]

const REFERENCES = [
  'Standring S. Gray’s Anatomy: The Anatomical Basis of Clinical Practice. 42ᵉ éd. Elsevier, 2020.',
  'Kennedy PM, Inglis JT. Distribution and behaviour of glabrous cutaneous receptors in the human foot sole. J Physiol. 2002;538(3):995-1002.',
  'Strzalkowski NDJ, Peters RM, Inglis JT, Bent LR. Cutaneous afferent innervation of the human foot sole: what can we learn from single-unit recordings? J Neurophysiol. 2018;120(3):1233-1246.',
  'Faleiros ATS, Resende LAL, Zanini MA, Castro HAL, Gabarra RC. L4-L5-S1 human dermatomes: clinical, electromyographical, imaging and surgical findings. Arq Neuropsiquiatr. 2009;67(2A):265-267.',
  'Deniel C, et al. Anatomical study of the medial calcaneal nerve using high-resolution ultrasound. Eur Radiol. 2023;33:7640-7648.',
  'Andreasen Struijk LNS, Birn H, Teglbjaerg PS, Haase J, Struijk JJ. Size and separability of the calcaneal and the medial and lateral plantar nerves in the distal tibial nerve. Anat Sci Int. 2010;85(1):13-22.',
  'Fowler CJ, Griffiths D, de Groat WC. The neural control of micturition. Nat Rev Neurosci. 2008;9(6):453-466.',
  'Shefchyk SJ. Spinal cord neural organization controlling the urinary bladder and striated sphincter. Prog Brain Res. 2002;137:71-82.',
  'de Groat WC, Vizzard MA, Araki I, Roppolo JR. Spinal interneurons and preganglionic neurons in sacral autonomic reflex pathways. Prog Brain Res. 1996;107:97-111.',
  'Yecies T, Li S, Zhang Y, et al. Spinal interneuronal mechanisms underlying pudendal and tibial neuromodulation of bladder function in cats. Exp Neurol. 2018;308:100-110.',
  'Griffiths D. Neural control of micturition in humans: a working model. Nat Rev Urol. 2015;12(12):695-705.',
  'de Rijk MM, et al. The periaqueductal gray and its role in the neural control of lower urinary tract function. Auton Neurosci. 2026;265:103413.',
  'Krhut J, Tintěra J, Rejchrt M, et al. Differences between brain responses to peroneal electrical transcutaneous neuromodulation and transcutaneous tibial nerve stimulation. Neurourol Urodyn. 2023;42(6):1352-1361.',
  'Strzalkowski NDJ, Incognito AV, Bent LR, Millar PJ. Cutaneous mechanoreceptor feedback from the hand and foot can modulate muscle sympathetic nerve activity. Front Neurosci. 2016;10:568.',
  'Brierley SM, Hibberd TJ, Spencer NJ. Spinal afferent innervation of the colon and rectum. Front Cell Neurosci. 2018;12:467.',
  'Li X, Li X, Liao L. Mechanism of action of tibial nerve stimulation in the treatment of lower urinary tract dysfunction. Neuromodulation. 2024;27(2):256-266.',
  'Sato A, Sato Y, Schmidt RF. The impact of somatosensory input on autonomic functions. Rev Physiol Biochem Pharmacol. 1997;130:1-328.',
  'Jänig W. Neurobiology of visceral afferent neurons: neuroanatomy, functions, organ regulations and sensations. Biol Psychol. 1996;42(1-2):29-51.',
  'Panicker JN, Marcelissen T, von Gontard A, Vrijens D, Abrams P, Wyndaele M. Bladder-bowel interactions: do we understand pelvic organ cross-sensitization? Neurourol Urodyn. 2019;38 Suppl 5:S25-S34.',
  'Malykhina AP. Neural mechanisms of pelvic organ cross-sensitization. Neuroscience. 2007;149(3):660-672.',
  'Christianson JA, Liang R, Ustinova EE, Davis BM, Fraser MO, Pezzone MA. Convergence of bladder and colon sensory innervation occurs at the primary afferent level. Pain. 2007;128(3):235-243.',
]

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
            Pourquoi une pression appliquée sur le pied peut-elle influencer une région éloignée du
            corps ? Cette page expose l’architecture anatomique sur laquelle repose cette hypothèse,
            et la manière dont nous proposons de la hiérarchiser.
          </p>
          <p className="nap-meta">Guy Boitout · Institut R.O.P. · ~15 min de lecture</p>
        </div>

        <section className="nap-sec">
          <h2>Le pied n’est pas une miniature du corps</h2>
          <p>
            La R.O.P. ne suppose pas qu’un organe soit matériellement « représenté » dans un point du
            pied. Elle part d’une proposition plus anatomique : une zone podale est une porte d’entrée
            sensorielle. La pression déforme la peau et les tissus sous-cutanés, recrute des
            mécanorécepteurs, puis transmet un message par un nerf périphérique vers la moelle
            épinière et les centres supérieurs.
          </p>
          <p>
            À chacun de ces étages, ce message peut rencontrer des circuits somatiques, autonomes et
            viscéraux. Nous appelons <strong>pont neuro-anatomique</strong> chacune de ces
            possibilités de convergence.
          </p>
          <p>
            Cette notion permet de sortir d’une opposition trop simple : d’un côté une correspondance
            directe point-organe, qui ne correspond pas à l’organisation réelle du système nerveux ;
            de l’autre une action entièrement diffuse, qui nierait toute différence entre les zones du
            pied. L’anatomie conduit plutôt à un modèle gradué — certaines zones disposent de
            plusieurs arguments de proximité avec une région du corps, d’autres n’y accèdent que par
            des relais plus larges et moins spécifiques.
          </p>
          <NapFigure
            src={`${PLATE}/pont-schema.webp`}
            caption="Du stimulus podal à la modulation du réseau : les quatre étapes d’un pont neuro-anatomique."
            alt="Schéma en quatre étapes : porte d’entrée sensorielle dans la peau du pied, transmission par les nerfs plantaires et le nerf tibial, intégration dans la moelle épinière, puis intégration cérébrale et modulation descendante."
          />
        </section>

        <section className="nap-sec">
          <h2>Le pied, une interface sensorielle riche</h2>
          <p>
            La peau glabre de la plante n’est pas une surface passive. Les enregistrements
            microneurographiques effectués dans le nerf tibial humain montrent quatre grandes classes
            d’afférences tactiles à bas seuil, correspondant fonctionnellement aux récepteurs de
            Meissner, de Pacini, de Merkel et aux afférences sensibles à l’étirement cutané. Leurs
            champs récepteurs se distribuent sur les orteils, les têtes métatarsiennes, les arches et
            le talon ; leur densité et leur seuil varient selon les régions.
          </p>
          <p>
            La pression fine utilisée en R.O.P. sollicite en priorité ces afférences à bas seuil. La
            qualité du geste — direction, vitesse, durée, surface de contact et profondeur — détermine
            donc la population d’axones activée. Deux points voisins ne sont pas nécessairement
            identiques, mais leur différence doit être recherchée dans l’innervation réelle et dans
            les tissus sollicités, non dans une ressemblance graphique avec un organe.
          </p>
        </section>

        <section className="nap-sec">
          <h2>Comment l’information viscérale rejoint le système nerveux</h2>
          <p>
            Un pont ne peut être décrit uniquement depuis le pied. Les récepteurs viscéraux renseignent
            sur la distension, la tension, les contractions, l’état chimique du milieu et, dans
            certaines conditions, l’inflammation. Ces informations sont transmises par des neurones
            sensitifs dont les corps cellulaires se situent soit dans les ganglions vagaux, soit dans
            les ganglions rachidiens.
          </p>
          <p>
            Les afférences vagales projettent vers le noyau du tractus solitaire dans le tronc
            cérébral. Les afférences viscérales spinales pénètrent dans la corne dorsale de la moelle :
            certaines cheminent avec les nerfs splanchniques thoraciques ou lombaires et les voies
            hypogastriques vers les étages thoracolombaires ; d’autres empruntent les nerfs pelviens
            vers les segments lombo-sacrés.
          </p>
          <p className="nap-note">
            Cette distinction porte sur le trajet emprunté, non sur la nature du message. Une fibre
            sensitive qui accompagne un nerf splanchnique ou pelvien reste une afférence : elle ne doit
            pas être confondue avec les fibres autonomes efférentes qui quittent le système nerveux
            central pour commander muscles lisses, glandes et vaisseaux.
          </p>
          <NapFigure
            src={`${PLATE}/versant-visceral.webp`}
            caption="Le versant viscéral : comment les organes informent le système nerveux central."
            alt="Trois schémas comparant les afférences vagales vers le tronc cérébral, les afférences spinales thoraco-lombaires et les afférences pelviennes sacrées S2-S4."
          />
        </section>

        <section className="nap-sec">
          <h2>Les cinq ponts</h2>
          <p>
            Un pont n’est pas un câble direct entre un point du pied et un organe : c’est un maillon
            identifiable d’un réseau fonctionnel. L’anatomie en distingue cinq, du nerf périphérique
            jusqu’au cerveau.
          </p>
          {BRIDGES.map((bridge) => (
            <div key={bridge.n} className="nap-bridge">
              <h3>
                <span className="nap-bridge-n">Pont {bridge.n}</span>
                {bridge.title}
              </h3>
              {bridge.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              <NapFigure src={bridge.src} caption={bridge.caption} alt={bridge.alt} />
            </div>
          ))}
        </section>

        <section className="nap-sec">
          <h2>Un gradient de ciblage neuro-anatomique</h2>
          <p>
            Pour organiser les zones, nous proposons le terme de <strong>gradient de ciblage
            neuro-anatomique</strong>. Il ne mesure ni la puissance d’un traitement ni la certitude
            d’un résultat : il classe la densité des arguments anatomiques permettant à une zone podale
            d’influencer préférentiellement une région.
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
          <p>
            Ce gradient est destiné à évoluer. Il peut intégrer, pour chaque zone : le nerf cutané ou
            profond, les racines probables, le type de récepteur sollicité, la proximité d’un tronc
            nerveux, la convergence spinale, le niveau de contrôle supraspinal et la reproductibilité
            des repères anatomiques.
          </p>
          <NapFigure
            src={`${PLATE}/matrice-gradient.webp`}
            caption="Application du gradient aux grandes régions viscérales : une hiérarchisation proposée, qui ne mesure pas l’efficacité clinique de la R.O.P."
            alt="Tableau classant le bas appareil urinaire et l’interface périnéo-sphinctérienne au degré 3, le côlon distal et le rectum au degré 2, les viscères abdominaux supérieurs ainsi que le cœur et les poumons au degré 1."
          />
        </section>

        <section className="nap-sec">
          <h2>Pourquoi le pelvis est le territoire le mieux étayé</h2>
          <p>
            Notre hypothèse de travail est que le pelvis constitue le territoire viscéral le mieux
            relié au pied par une accumulation de ponts. Le nerf tibial contient des composantes
            sacrées S2 et S3 ; les circuits autonomes pelviens sont organisés autour de S2-S4 ; les
            sphincters et le plancher pelvien ajoutent une composante somatique pudendale dans les
            mêmes étages ; les interneurones sacrés assurent une coordination étroite entre vessie,
            rectum, périnée et muscles striés.
          </p>
          <p>
            Il est utile d’y distinguer plusieurs ensembles fonctionnels plutôt que de parler d’un
            pelvis homogène : appareil urinaire inférieur, côlon distal et rectum, sphincters et
            plancher pelvien, voies génitales basses et sensibilité périnéale. Ces ensembles partagent
            certains étages et certains interneurones, mais ne possèdent ni exactement les mêmes
            afférences, ni les mêmes commandes autonomes et somatiques.
          </p>
          <p>
            À l’inverse, les viscères thoraciques et abdominaux hauts dépendent surtout d’afférences
            vagales et d’afférences spinales cheminant par les voies splanchniques thoracolombaires.
            Ces trajets ne partagent pas de continuité radiculaire directe avec la peau du pied. Une
            influence par la R.O.P. y reste concevable par les relais intersegmentaires et
            supraspinaux, mais son ciblage anatomique est plus faible.
          </p>
          <div className="nap-fig-pair">
            <NapFigure
              src={`${PLATE}/pelvis.webp`}
              caption="Le pelvis : le candidat viscéral le mieux étayé — une accumulation de ponts lombo-sacrés, sans connexion directe point-organe."
              alt="Vue sagittale de l’anatomie pelvienne avec les innervations parasympathique sacrée, sympathique thoracolombaire et somatique pudendale, et le chevauchement radiculaire S2-S3."
            />
            <NapFigure
              src={`${PLATE}/reseaux-pelviens.webp`}
              caption="Réseaux pelviens intégrés : convergence et sensibilisation croisée."
              alt="Schéma reliant vessie, côlon distal et rectum, périnée et plancher pelvien à trois niveaux de convergence : ganglions rachidiens, réseaux spinaux lombo-sacrés et centres supraspinaux."
            />
          </div>
          <p>
            Le petit bassin n’est pas pour autant une juxtaposition de circuits indépendants. Les
            afférences de la vessie, du côlon distal, du rectum, de l’urètre, des organes génitaux et
            du périnée peuvent converger dans les ganglions rachidiens, la corne dorsale et les réseaux
            supraspinaux. Une entrée somatique y rencontre donc un système régional déjà fortement
            intégré, et la réponse éventuelle concerne une fonction — stockage, continence, perception
            de la distension, coordination sphinctérienne ou douleur — plutôt qu’un organe isolé.
          </p>
        </section>

        <section className="nap-sec">
          <h2>Portée de cette proposition</h2>
          <p>
            Cette lecture ne cherche pas à démontrer l’efficacité de la réflexothérapie. Elle établit
            une architecture de travail : une zone R.O.P. est considérée comme anatomiquement mieux
            fondée lorsqu’elle réunit plusieurs ponts concordants, et comme moins ciblée lorsque le
            lien repose uniquement sur une modulation centrale générale. Dire où l’anatomie est solide
            suppose de dire aussi où elle l’est moins.
          </p>
          <p>
            L’apport attendu est double. Pour le praticien, le gradient aide à hiérarchiser la
            palpation et à choisir des repères plus cohérents. Pour la recherche, il permet de comparer
            des zones appartenant au même nerf, à des nerfs différents ou à des niveaux différents du
            gradient. La cartographie cesse alors d’être figée : elle devient une hypothèse anatomique
            que l’expérience clinique et les mesures neurophysiologiques peuvent préciser.
          </p>
          <p className="nap-closing">
            En résumé, le pied ne contient pas les organes ; il contient des portes d’entrée. Ces
            portes n’ont probablement ni la même densité sensorielle, ni la même proximité avec les
            réseaux spinaux, ni le même potentiel de ciblage régional. La R.O.P. trouve son fondement
            neuro-anatomique dans l’étude et la hiérarchisation de ces ponts.
          </p>
        </section>

        <section className="nap-sec nap-refs">
          <h2>Références</h2>
          <p className="nap-refs-note">
            Cette bibliographie soutient l’architecture neuro-anatomique présentée ici. Elle n’a pas
            pour objet de constituer une revue de l’efficacité clinique de la réflexothérapie.
          </p>
          <ol>
            {REFERENCES.map((reference, i) => <li key={i}>{reference}</li>)}
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

'use client'

// Interactive reflex-zone atlas for Chapter 14 (small intestine).
//
// This replaces the two static "sub + bullets + photo" blocks that used to
// describe the jejunum (left foot) and ileum (right foot) podal reflex zones
// in the linear reading. Readers come back to this section to re-learn the
// technique, so it is built as a small, revisitable tool rather than more
// scroll text:
//   - a foot toggle that makes the laterality unmistakable (jejunum = left
//     foot / horizontal loops, ileum = right foot / vertical loops);
//   - the author's own cartography shown *vis-à-vis* the treatment photo (the
//     "map" next to the "gesture"), each openable full-size;
//   - a schematic foot whose limits highlight in sync with a structured list
//     of the boundaries, so the reader can locate each landmark;
//   - a "test me" mode that hides the landmarks to self-check placement.
//
// The schematic foot is an orientation diagram (indicative landmarks); the
// authoritative cartography stays one tap away via "voir en grand".

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'

type Foot = 'jejunum' | 'ileum'
type LandmarkKey = 'upper' | 'lower' | 'lateral' | 'loops'

type Bound = { label: string; detail: string }
type Strings = {
  eyebrow: string
  title: string
  intro: string
  tab: Record<Foot, { name: string; side: string; loops: string }>
  carto: string
  gesture: string
  landmarksTitle: string
  testOn: string
  testOff: string
  testHint: string
  expand: string
  close: string
  enlargeCarto: string
  enlargePhoto: string
  schematicNote: string
  bounds: Record<Foot, Record<LandmarkKey, Bound>>
}

const ASSETS: Record<Lang, Record<Foot, { carto: string; photo: string }>> = {
  fr: {
    jejunum: { carto: '/chapter-14/figure-14-25.png', photo: '/chapter-14/figure-14-24.png' },
    ileum: { carto: '/chapter-14/figure-14-27.png', photo: '/chapter-14/figure-14-26.png' },
  },
  en: {
    jejunum: { carto: '/chapter-14/en/figure-14-25.png', photo: '/chapter-14/en/figure-14-24.png' },
    ileum: { carto: '/chapter-14/en/figure-14-27.png', photo: '/chapter-14/en/figure-14-26.png' },
  },
  de: {
    jejunum: { carto: '/chapter-14/ge/Chapter14 Fig25 GE.png', photo: '/chapter-14/ge/Chapter14 Fig24 GE.png' },
    ileum: { carto: '/chapter-14/ge/Chapter14 Fig27 GE.png', photo: '/chapter-14/ge/Chapter14 Fig26 GE.png' },
  },
  es: {
    jejunum: { carto: '/chapter-14/figure-14-25.png', photo: '/chapter-14/figure-14-24.png' },
    ileum: { carto: '/chapter-14/figure-14-27.png', photo: '/chapter-14/figure-14-26.png' },
  },
  it: {
    jejunum: { carto: '/chapter-14/it/Chapter14 Fig25 IT.png', photo: '/chapter-14/it/Chapter14 Fig24 IT.png' },
    ileum: { carto: '/chapter-14/it/Chapter14 Fig27 IT.png', photo: '/chapter-14/it/Chapter14 Fig26 IT.png' },
  },
}

const LANDMARK_ORDER: LandmarkKey[] = ['upper', 'lower', 'lateral', 'loops']

const STRINGS: Record<Lang, Strings> = {
  fr: {
    eyebrow: 'Atlas interactif',
    title: 'Zones réflexes podales',
    intro: 'La cartographie sur le pied, en vis-à-vis du geste. Choisissez le pied, explorez les repères, puis testez-vous.',
    tab: {
      jejunum: { name: 'Jéjunum', side: 'Pied gauche', loops: 'anses horizontales' },
      ileum: { name: 'Iléum', side: 'Pied droit', loops: 'anses verticales' },
    },
    carto: 'Cartographie',
    gesture: 'Le geste',
    landmarksTitle: 'Repères de la zone',
    testOn: 'Me tester — masquer les repères',
    testOff: 'Afficher les repères',
    testHint: 'Placez la zone et ses limites de mémoire, puis affichez les repères pour vérifier.',
    expand: 'Agrandir l’atlas',
    close: 'Fermer',
    enlargeCarto: 'Voir la cartographie en grand',
    enlargePhoto: 'Voir le geste en grand',
    schematicNote: 'Schéma d’orientation — repères indicatifs.',
    bounds: {
      jejunum: {
        upper: { label: 'Limite supérieure', detail: 'Une ligne horizontale à hauteur des styloïdes des 5èmes métatarses.' },
        lower: { label: 'Limite inférieure', detail: 'Le bord antérieur des talons (branches ilio-pubiennes).' },
        lateral: { label: 'Limite latérale', detail: 'Jusqu’au bord latéral du pied gauche.' },
        loops: { label: 'Orientation des anses', detail: 'Anses horizontales pour le jéjunum.' },
      },
      ileum: {
        upper: { label: 'Limite supérieure', detail: 'Une ligne horizontale à hauteur des styloïdes des 5èmes métatarses.' },
        lower: { label: 'Limite inférieure', detail: 'Le bord antérieur des talons (branches ilio-pubiennes).' },
        lateral: { label: 'Limite latérale', detail: 'À l’aplomb du 4ème orteil du pied droit.' },
        loops: { label: 'Orientation des anses', detail: 'Anses verticales pour l’iléum.' },
      },
    },
  },
  en: {
    eyebrow: 'Interactive atlas',
    title: 'Podal reflex zones',
    intro: 'The cartography on the foot, side by side with the gesture. Pick the foot, explore the landmarks, then test yourself.',
    tab: {
      jejunum: { name: 'Jejunum', side: 'Left foot', loops: 'horizontal loops' },
      ileum: { name: 'Ileum', side: 'Right foot', loops: 'vertical loops' },
    },
    carto: 'Cartography',
    gesture: 'The gesture',
    landmarksTitle: 'Zone landmarks',
    testOn: 'Test me — hide landmarks',
    testOff: 'Show landmarks',
    testHint: 'Place the zone and its limits from memory, then show the landmarks to check.',
    expand: 'Enlarge the atlas',
    close: 'Close',
    enlargeCarto: 'View the cartography large',
    enlargePhoto: 'View the gesture large',
    schematicNote: 'Orientation diagram — indicative landmarks.',
    bounds: {
      jejunum: {
        upper: { label: 'Upper limit', detail: 'A horizontal line at the level of the styloid processes of the 5th metatarsals.' },
        lower: { label: 'Lower limit', detail: 'The anterior border of the heels (iliopubic rami).' },
        lateral: { label: 'Lateral limit', detail: 'Extending to the lateral border of the left foot.' },
        loops: { label: 'Loop orientation', detail: 'Horizontal loops for the jejunum.' },
      },
      ileum: {
        upper: { label: 'Upper limit', detail: 'A horizontal line at the level of the styloid processes of the 5th metatarsals.' },
        lower: { label: 'Lower limit', detail: 'The anterior border of the heels (iliopubic rami).' },
        lateral: { label: 'Lateral limit', detail: 'Aligned with the fourth toe of the right foot.' },
        loops: { label: 'Loop orientation', detail: 'Vertical loops for the ileum.' },
      },
    },
  },
  de: {
    eyebrow: 'Interaktiver Atlas',
    title: 'Podale Reflexzonen',
    intro: 'Die Kartografie am Fuß, im Gegenüber zur Handbewegung. Fuß wählen, Orientierungspunkte erkunden, dann testen.',
    tab: {
      jejunum: { name: 'Jejunum', side: 'Linker Fuß', loops: 'horizontale Schlingen' },
      ileum: { name: 'Ileum', side: 'Rechter Fuß', loops: 'vertikale Schlingen' },
    },
    carto: 'Kartografie',
    gesture: 'Die Handbewegung',
    landmarksTitle: 'Orientierungspunkte der Zone',
    testOn: 'Selbsttest — Punkte ausblenden',
    testOff: 'Punkte anzeigen',
    testHint: 'Zone und Grenzen aus dem Gedächtnis platzieren, dann Punkte einblenden zum Prüfen.',
    expand: 'Atlas vergrößern',
    close: 'Schließen',
    enlargeCarto: 'Kartografie groß ansehen',
    enlargePhoto: 'Handbewegung groß ansehen',
    schematicNote: 'Orientierungsschema — Richtwerte.',
    bounds: {
      jejunum: {
        upper: { label: 'Obere Grenze', detail: 'Eine horizontale Linie auf Höhe der Styloidfortsätze der 5. Metatarsalknochen.' },
        lower: { label: 'Untere Grenze', detail: 'Der vordere Rand der Fersen (Äste des Iliopubikalbogens).' },
        lateral: { label: 'Laterale Grenze', detail: 'Bis zum lateralen Rand des linken Fußes.' },
        loops: { label: 'Ausrichtung der Schlingen', detail: 'Horizontale Schlingen für das Jejunum.' },
      },
      ileum: {
        upper: { label: 'Obere Grenze', detail: 'Eine horizontale Linie auf Höhe der Styloidfortsätze der 5. Metatarsalknochen.' },
        lower: { label: 'Untere Grenze', detail: 'Der vordere Rand der Fersen (Äste des Iliopubikalbogens).' },
        lateral: { label: 'Laterale Grenze', detail: 'In der Verlängerung der 4. Zehe des rechten Fußes.' },
        loops: { label: 'Ausrichtung der Schlingen', detail: 'Vertikale Schlingen für das Ileum.' },
      },
    },
  },
  es: {
    eyebrow: 'Atlas interactivo',
    title: 'Zonas reflejas podales',
    intro: 'La cartografía en el pie, frente al gesto. Elija el pie, explore las referencias y luego autoevalúese.',
    tab: {
      jejunum: { name: 'Yeyuno', side: 'Pie izquierdo', loops: 'asas horizontales' },
      ileum: { name: 'Íleon', side: 'Pie derecho', loops: 'asas verticales' },
    },
    carto: 'Cartografía',
    gesture: 'El gesto',
    landmarksTitle: 'Referencias de la zona',
    testOn: 'Ponerme a prueba — ocultar referencias',
    testOff: 'Mostrar referencias',
    testHint: 'Coloque la zona y sus límites de memoria y luego muestre las referencias para verificar.',
    expand: 'Ampliar el atlas',
    close: 'Cerrar',
    enlargeCarto: 'Ver la cartografía en grande',
    enlargePhoto: 'Ver el gesto en grande',
    schematicNote: 'Esquema de orientación — referencias indicativas.',
    bounds: {
      jejunum: {
        upper: { label: 'Límite superior', detail: 'Una línea horizontal a la altura de las apófisis estiloides de los 5.os metatarsianos.' },
        lower: { label: 'Límite inferior', detail: 'El borde anterior de los talones (ramas iliopubianas).' },
        lateral: { label: 'Límite lateral', detail: 'Hasta el borde lateral del pie izquierdo.' },
        loops: { label: 'Orientación de las asas', detail: 'Asas horizontales para el yeyuno.' },
      },
      ileum: {
        upper: { label: 'Límite superior', detail: 'Una línea horizontal a la altura de las apófisis estiloides de los 5.os metatarsianos.' },
        lower: { label: 'Límite inferior', detail: 'El borde anterior de los talones (ramas iliopubianas).' },
        lateral: { label: 'Límite lateral', detail: 'A la vertical del 4.° dedo del pie derecho.' },
        loops: { label: 'Orientación de las asas', detail: 'Asas verticales para el íleon.' },
      },
    },
  },
  it: {
    eyebrow: 'Atlante interattivo',
    title: 'Zone riflesse podali',
    intro: 'La cartografia sul piede, di fronte al gesto. Scegli il piede, esplora i riferimenti, poi mettiti alla prova.',
    tab: {
      jejunum: { name: 'Digiuno', side: 'Piede sinistro', loops: 'anse orizzontali' },
      ileum: { name: 'Ileo', side: 'Piede destro', loops: 'anse verticali' },
    },
    carto: 'Cartografia',
    gesture: 'Il gesto',
    landmarksTitle: 'Riferimenti della zona',
    testOn: 'Mettimi alla prova — nascondi i riferimenti',
    testOff: 'Mostra i riferimenti',
    testHint: 'Posiziona la zona e i suoi limiti a memoria, poi mostra i riferimenti per verificare.',
    expand: 'Ingrandisci l’atlante',
    close: 'Chiudi',
    enlargeCarto: 'Vedi la cartografia in grande',
    enlargePhoto: 'Vedi il gesto in grande',
    schematicNote: 'Schema di orientamento — riferimenti indicativi.',
    bounds: {
      jejunum: {
        upper: { label: 'Limite superiore', detail: 'Una linea orizzontale a livello delle apofisi stiloidi dei 5° metatarsi.' },
        lower: { label: 'Limite inferiore', detail: 'Il bordo anteriore dei talloni (branche ileo-pubiche).' },
        lateral: { label: 'Limite laterale', detail: 'Fino al bordo laterale del piede sinistro.' },
        loops: { label: 'Orientamento delle anse', detail: 'Anse orizzontali per il digiuno.' },
      },
      ileum: {
        upper: { label: 'Limite superiore', detail: 'Una linea orizzontale a livello delle apofisi stiloidi dei 5° metatarsi.' },
        lower: { label: 'Limite inferiore', detail: 'Il bordo anteriore dei talloni (branche ileo-pubiche).' },
        lateral: { label: 'Limite laterale', detail: 'A piombo del 4° dito del piede destro.' },
        loops: { label: 'Orientamento delle anse', detail: 'Anse verticali per l’ileo.' },
      },
    },
  },
}

// ── Schematic foot ─────────────────────────────────────────────────────────
// A plantar-view orientation diagram. Drawn for the left foot in the base
// coordinate space and mirrored for the right foot, so laterality reads
// correctly (jejunum = left, ileum = right). The reflex zone sits between the
// upper limit (5th-metatarsal styloid line) and the lower limit (anterior
// heel); loop orientation is shown by the hatching direction.
const FOOT_OUTLINE =
  'M 96,300 C 74,300 60,286 58,262 C 55,232 40,206 36,176 C 32,150 34,120 42,100 ' +
  'C 46,86 58,80 74,80 C 96,78 120,76 140,82 C 152,86 158,100 156,124 ' +
  'C 154,150 150,170 138,196 C 130,214 126,240 124,262 C 122,282 116,300 96,300 Z'

const TOES = [
  { cx: 62, cy: 60, r: 8 },   // 5th (lateral)
  { cx: 78, cy: 54, r: 9 },   // 4th
  { cx: 96, cy: 52, r: 10 },  // 3rd
  { cx: 116, cy: 54, r: 11 }, // 2nd
  { cx: 140, cy: 60, r: 15 }, // 1st (big, medial)
]

const UPPER_Y = 118
const LOWER_Y = 244

function SchematicFoot({
  foot, active, reveal, onPick,
}: {
  foot: Foot
  active: LandmarkKey | null
  reveal: boolean
  onPick: (k: LandmarkKey | null) => void
}) {
  const mirror = foot === 'ileum'
  const mx = (x: number) => (mirror ? 200 - x : x)
  const on = (k: LandmarkKey) => active === k
  const zoneFill = active ? 'rgba(160,124,58,.14)' : 'rgba(74,107,90,.13)'
  const zoneStroke = 'rgba(74,107,90,.5)'

  // Loop hatching inside the zone (clipped to the foot).
  const hatch: React.ReactNode[] = []
  if (foot === 'jejunum') {
    for (let y = UPPER_Y + 14; y < LOWER_Y; y += 18) {
      hatch.push(<line key={`h${y}`} x1={30} y1={y} x2={170} y2={y} />)
    }
  } else {
    for (let bx = 60; bx <= 132; bx += 18) {
      hatch.push(<line key={`v${bx}`} x1={mx(bx)} y1={UPPER_Y} x2={mx(bx)} y2={LOWER_Y} />)
    }
  }

  const pins: { k: LandmarkKey; x: number; y: number; n: number }[] = [
    { k: 'upper', x: mx(146), y: UPPER_Y, n: 1 },
    { k: 'lower', x: mx(138), y: LOWER_Y, n: 2 },
    { k: 'lateral', x: mx(foot === 'jejunum' ? 40 : 78), y: 198, n: 3 },
    { k: 'loops', x: mx(96), y: 182, n: 4 },
  ]

  return (
    <svg className="rza-foot" viewBox="0 0 200 320" role="img"
      aria-label={foot === 'jejunum' ? 'Left foot schematic' : 'Right foot schematic'}>
      <defs>
        <clipPath id={`rza-clip-${foot}`}>
          <path d={FOOT_OUTLINE} transform={mirror ? 'translate(200,0) scale(-1,1)' : undefined} />
        </clipPath>
      </defs>

      {/* Sole + toes */}
      <g transform={mirror ? 'translate(200,0) scale(-1,1)' : undefined}>
        <path d={FOOT_OUTLINE} className="rza-sole" />
        {TOES.map((t, i) => <circle key={i} cx={t.cx} cy={t.cy} r={t.r} className="rza-toe" />)}
      </g>

      {!reveal && (
        <g clipPath={`url(#rza-clip-${foot})`}>
          {/* Zone band */}
          <rect x={0} y={UPPER_Y} width={200} height={LOWER_Y - UPPER_Y}
            fill={zoneFill} stroke="none" />
          {/* Loop hatching */}
          <g className={`rza-hatch${on('loops') ? ' is-on' : ''}`}>{hatch}</g>
          {/* Upper + lower limit lines */}
          <line x1={0} y1={UPPER_Y} x2={200} y2={UPPER_Y}
            className={`rza-limit${on('upper') ? ' is-on' : ''}`} />
          <line x1={0} y1={LOWER_Y} x2={200} y2={LOWER_Y}
            className={`rza-limit${on('lower') ? ' is-on' : ''}`} />
          {/* Zone outline */}
          <rect x={0} y={UPPER_Y} width={200} height={LOWER_Y - UPPER_Y}
            fill="none" stroke={zoneStroke} strokeWidth={1} strokeDasharray="2 3" />
          {/* Lateral limit */}
          {foot === 'jejunum' ? (
            <line x1={mx(38)} y1={UPPER_Y} x2={mx(46)} y2={LOWER_Y}
              className={`rza-lateral${on('lateral') ? ' is-on' : ''}`} />
          ) : (
            <line x1={mx(78)} y1={UPPER_Y} x2={mx(78)} y2={LOWER_Y}
              className={`rza-lateral rza-lateral--dashed${on('lateral') ? ' is-on' : ''}`} />
          )}
        </g>
      )}

      {/* Numbered landmark pins */}
      {!reveal && pins.map((p) => (
        <g key={p.k} className={`rza-pin${on(p.k) ? ' is-on' : ''}`}
          onMouseEnter={() => onPick(p.k)} onMouseLeave={() => onPick(null)}
          onClick={() => onPick(on(p.k) ? null : p.k)}>
          <circle cx={p.x} cy={p.y} r={on(p.k) ? 13 : 11} />
          <text x={p.x} y={p.y + 4}>{p.n}</text>
        </g>
      ))}

      {/* Toe orientation ticks (universal digits) */}
      <text x={mx(140)} y={90} className="rza-toenum">1</text>
      <text x={mx(62)} y={90} className="rza-toenum">5</text>
    </svg>
  )
}

// ── Stage (shared by inline + fullscreen) ──────────────────────────────────
function AtlasStage({
  s, lang, foot, setFoot, active, setActive, reveal, setReveal, onEnlarge,
}: {
  s: Strings
  lang: Lang
  foot: Foot
  setFoot: (f: Foot) => void
  active: LandmarkKey | null
  setActive: (k: LandmarkKey | null) => void
  reveal: boolean
  setReveal: (b: boolean) => void
  onEnlarge: (kind: 'carto' | 'photo') => void
}) {
  const assets = ASSETS[lang][foot]
  const tab = s.tab[foot]
  return (
    <div className="rza-stage">
      <div className="rza-tabs" role="tablist" aria-label={s.title}>
        {(['jejunum', 'ileum'] as Foot[]).map((f) => (
          <button key={f} type="button" role="tab" aria-selected={foot === f}
            className={`rza-tab${foot === f ? ' is-active' : ''}`}
            onClick={() => { setFoot(f); setActive(null) }}>
            <span className="rza-tab-name">{s.tab[f].name}</span>
            <span className="rza-tab-side">{s.tab[f].side} · {s.tab[f].loops}</span>
          </button>
        ))}
      </div>

      <div className="rza-grid">
        {/* Schematic + landmark list */}
        <div className="rza-panel rza-panel--map">
          <div className="rza-schematic">
            <SchematicFoot foot={foot} active={active} reveal={reveal} onPick={setActive} />
            <p className="rza-note">{s.schematicNote}</p>
          </div>
          <div className="rza-landmarks">
            <p className="rza-landmarks-title">{s.landmarksTitle}</p>
            <ul className="rza-list">
              {LANDMARK_ORDER.map((k, i) => {
                const b = s.bounds[foot][k]
                return (
                  <li key={k}>
                    <button type="button"
                      className={`rza-item${active === k ? ' is-active' : ''}`}
                      onMouseEnter={() => setActive(k)} onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(k)} onBlur={() => setActive(null)}
                      onClick={() => setActive(active === k ? null : k)}>
                      <span className="rza-item-num">{i + 1}</span>
                      <span className="rza-item-body">
                        <span className="rza-item-label">{b.label}</span>
                        <span className="rza-item-detail">{b.detail}</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
            <button type="button" className={`rza-test${reveal ? ' is-testing' : ''}`}
              onClick={() => setReveal(!reveal)} aria-pressed={reveal}>
              {reveal ? s.testOff : s.testOn}
            </button>
            {reveal && <p className="rza-test-hint">{s.testHint}</p>}
          </div>
        </div>

        {/* Cartography vis-à-vis the gesture */}
        <div className="rza-panel rza-panel--media">
          <figure className="rza-media">
            <button type="button" className="rza-media-btn" onClick={() => onEnlarge('carto')}
              aria-label={s.enlargeCarto} title={s.enlargeCarto}>
              <span className="rza-media-tag">{s.carto}</span>
              <img src={assets.carto} alt={`${tab.name} — ${s.carto}`} loading="lazy" />
              <span className="rza-media-zoom" aria-hidden>⌕</span>
            </button>
          </figure>
          <figure className="rza-media">
            <button type="button" className="rza-media-btn" onClick={() => onEnlarge('photo')}
              aria-label={s.enlargePhoto} title={s.enlargePhoto}>
              <span className="rza-media-tag">{s.gesture}</span>
              <img src={assets.photo} alt={`${tab.name} — ${s.gesture}`} loading="lazy" />
              <span className="rza-media-zoom" aria-hidden>⌕</span>
            </button>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default function ReflexZoneAtlas() {
  const { lang } = useLanguage()
  const s = STRINGS[lang] ?? STRINGS.fr
  const [foot, setFoot] = useState<Foot>('jejunum')
  const [active, setActive] = useState<LandmarkKey | null>(null)
  const [reveal, setReveal] = useState(false)
  const [full, setFull] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  function enlarge(kind: 'carto' | 'photo') {
    const assets = ASSETS[lang][foot]
    setLightbox({
      src: kind === 'carto' ? assets.carto : assets.photo,
      caption: `${s.tab[foot].name} — ${kind === 'carto' ? s.carto : s.gesture}`,
    })
  }

  const stageProps = {
    s, lang, foot, setFoot, active, setActive, reveal, setReveal, onEnlarge: enlarge,
  }

  return (
    <section className="rza" aria-label={s.title}>
      <header className="rza-head">
        <div className="rza-head-text">
          <p className="rza-eyebrow">{s.eyebrow}</p>
          <h3 className="rza-title">{s.title}</h3>
          <p className="rza-intro">{s.intro}</p>
        </div>
        <button type="button" className="rza-expand" onClick={() => setFull(true)}>
          <span aria-hidden>⤢</span> {s.expand}
        </button>
      </header>

      <AtlasStage {...stageProps} />

      {full && (
        <div className="rza-modal" role="dialog" aria-modal="true" aria-label={s.title}
          onClick={() => setFull(false)}>
          <div className="rza-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="rza-modal-close" onClick={() => setFull(false)}
              aria-label={s.close}>×</button>
            <AtlasStage {...stageProps} />
          </div>
        </div>
      )}

      {lightbox && (
        <div className="rza-lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <div className="rza-lightbox-bar" onClick={(e) => e.stopPropagation()}>
            <span className="rza-lightbox-caption">{lightbox.caption}</span>
            <button type="button" className="rza-lightbox-close" onClick={() => setLightbox(null)}
              aria-label={s.close}>×</button>
          </div>
          <div className="rza-lightbox-scroll" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
          </div>
        </div>
      )}
    </section>
  )
}

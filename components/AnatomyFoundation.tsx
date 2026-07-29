'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'
import { getSessionId } from '@/lib/session'

// The figures carry their labels inside the image and are, for now, French
// only. Same convention as the homepage showcase: drop a localized export in
// /assets/anatomie/<lang>/ and add the entry here to switch that locale over.
const figureFolders: Partial<Record<Lang, string>> = {}

const FIGURES = {
  chain: 'pont-schema',
  bridges: ['pont-1-tibial', 'pont-2-plantaires', 'pont-3-autres-nerfs', 'pont-4-lombosacre', 'pont-5-supraspinal'],
  visceral: 'versant-visceral',
  matrix: 'matrice-gradient',
  pelvis: 'pelvis',
  cross: 'reseaux-pelviens',
} as const

// Every figure is exported from the same 1672×941 deck.
const FIG_W = 1672
const FIG_H = 941

type Plate = { src: string; alt: string; caption: string }

// A figure is a button so the full-resolution plate can be opened on a phone,
// where the labels baked into the image are otherwise unreadable.
function Figure({ plate, zoomLabel, onOpen, priority = false }: {
  plate: Plate
  zoomLabel: string
  onOpen: (plate: Plate) => void
  priority?: boolean
}) {
  return (
    <figure className="anat-fig">
      <button
        type="button"
        className="anat-fig-btn"
        onClick={() => onOpen(plate)}
        aria-label={`${plate.caption} — ${zoomLabel}`}
      >
        <Image
          src={plate.src}
          alt={plate.alt}
          width={FIG_W}
          height={FIG_H}
          sizes="(max-width:960px) 92vw, 1040px"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
        <span className="anat-fig-zoom" aria-hidden>⌕</span>
      </button>
      <figcaption>{plate.caption}</figcaption>
    </figure>
  )
}

// One card for every plate in the gallery — the opening principle and each of
// the five bridges. `lead` only changes the accent, never the layout.
function PlateCard({ plate, eyebrow, title, body, zoomLabel, onOpen, lead = false }: {
  plate: Plate
  eyebrow: string
  title: string
  body: string
  zoomLabel: string
  onOpen: (plate: Plate) => void
  lead?: boolean
}) {
  return (
    <article className={`anat-plate${lead ? ' anat-plate--lead' : ''}`}>
      <button
        type="button"
        className="anat-plate-thumb"
        onClick={() => onOpen(plate)}
        aria-label={`${plate.caption} — ${zoomLabel}`}
      >
        <Image
          src={plate.src}
          alt={plate.alt}
          width={FIG_W}
          height={FIG_H}
          sizes="(max-width:960px) 92vw, (max-width:1280px) 44vw, 420px"
          loading="lazy"
        />
        <span className="anat-fig-zoom" aria-hidden>⌕</span>
      </button>
      <div className="anat-plate-n">{eyebrow}</div>
      <h4 className="anat-plate-t">{title}</h4>
      <p className="anat-plate-d">{body}</p>
    </article>
  )
}

export default function AnatomyFoundation() {
  const { t, lang } = useLanguage()
  const a = t.anatomie
  const [open, setOpen] = useState(false)
  const [lightbox, setLightbox] = useState<Plate | null>(null)

  const folder = figureFolders[lang] ?? '/assets/anatomie'
  const plate = (name: string, caption: string, alt: string): Plate => ({ src: `${folder}/${name}.webp`, caption, alt })

  useEffect(() => {
    if (!lightbox) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setLightbox(null) }
    document.addEventListener('keydown', onKey)
    // Freeze the page behind the overlay: without this the wheel keeps
    // scrolling the homepage under an open plate.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox])

  function track(event: string) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: 'home', event: 'cta_click', data: { cta: event }, lang, sessionId: getSessionId() }),
      keepalive: true,
    }).catch(() => {})
  }

  function toggleDeep() {
    setOpen((wasOpen) => {
      if (!wasOpen) track('anatomy_deep_dive')
      return !wasOpen
    })
  }

  return (
    <section id="anatomie" aria-labelledby="anatomie-title">
      {/* Copy on the left, the four-step chain as a compact rail on the right:
          the steps are short enough that a full-width band wasted a row. */}
      <div className="anat-top">
        <div className="anat-head">
          <div className="lbl c">{a.lbl}</div>
          <h2 id="anatomie-title" className="on-dk">{a.h2.before}<em>{a.h2.em}</em>{a.h2.after}</h2>
          <p className="anat-intro">{a.p1}</p>
          <p className="anat-intro">{a.p2}</p>
        </div>

        <div className="anat-chain">
          <div className="anat-chain-t">{a.chainTitle}</div>
          {a.chain.map((step, i) => (
            <div key={step.t} className="anat-step">
              <div className="anat-step-n">{i + 1}</div>
              <div className="anat-step-t">{step.t}</div>
              <p className="anat-step-d">{step.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="anat-bridges">
        <h3 className="anat-h3">{a.bridges.title}</h3>
        <p className="anat-bridges-intro">{a.bridges.intro}</p>
        {/* The principle plate opens the same grid as the five bridges: one
            card grammar for all six, rather than a full-width slab that
            repeats the four steps stated just above it. */}
        <div className="anat-plate-grid">
          <PlateCard
            plate={plate(FIGURES.chain, a.figure1.caption, a.figure1.alt)}
            eyebrow={a.bridges.principleLabel}
            title={a.figure1.t}
            body={a.figure1.d}
            zoomLabel={a.zoom}
            onOpen={setLightbox}
            lead
          />
          {a.bridges.items.map((item, i) => (
            <PlateCard
              key={item.t}
              plate={plate(FIGURES.bridges[i], item.caption, item.alt)}
              eyebrow={`${a.bridges.label} ${i + 1}`}
              title={item.t}
              body={item.d}
              zoomLabel={a.zoom}
              onOpen={setLightbox}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="anat-toggle"
        aria-expanded={open}
        aria-controls="anatomie-deep"
        onClick={toggleDeep}
      >
        <span>{open ? a.deep.toggleClose : a.deep.toggleOpen}</span>
        <span className="anat-toggle-ico" aria-hidden>{open ? '−' : '+'}</span>
      </button>

      {/* Kept mounted and hidden so in-page search and the browser's find
          still reach the deep layer when it is collapsed. */}
      <div id="anatomie-deep" className="anat-deep" hidden={!open}>
        <h3 className="anat-h3">{a.deep.title}</h3>
        <p className="anat-deep-intro">{a.deep.intro}</p>

        <div className="anat-levels">
          {a.deep.levels.map((level) => (
            <div key={level.n} className={`anat-level anat-level-${level.n}`}>
              <div className="anat-level-n">{level.n}</div>
              <div>
                <div className="anat-level-t">{level.t}</div>
                <p className="anat-level-d">{level.d}</p>
              </div>
            </div>
          ))}
        </div>

        <Figure plate={plate(FIGURES.matrix, a.deep.matrix.caption, a.deep.matrix.alt)} zoomLabel={a.zoom} onOpen={setLightbox} />

        <h3 className="anat-h3">{a.deep.pelvis.title}</h3>
        {a.deep.pelvis.body.map((p, i) => <p key={i} className="anat-deep-p">{p}</p>)}

        <div className="anat-fig-pair">
          <Figure plate={plate(FIGURES.pelvis, a.deep.pelvis.caption, a.deep.pelvis.alt)} zoomLabel={a.zoom} onOpen={setLightbox} />
          <Figure plate={plate(FIGURES.cross, a.deep.cross.caption, a.deep.cross.alt)} zoomLabel={a.zoom} onOpen={setLightbox} />
        </div>

        <Figure plate={plate(FIGURES.visceral, a.deep.visceral.caption, a.deep.visceral.alt)} zoomLabel={a.zoom} onOpen={setLightbox} />

        <div className="anat-note">
          <p className="anat-note-body">{a.deep.disclaimer}</p>
          <p className="anat-note-refs">{a.deep.refs}</p>
        </div>
      </div>

      {lightbox && (
        <div className="anat-lb" role="dialog" aria-modal="true" aria-label={lightbox.caption} onClick={() => setLightbox(null)}>
          <button type="button" className="anat-lb-close" onClick={() => setLightbox(null)} aria-label={a.close}>×</button>
          <figure className="anat-lb-fig" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.alt} width={FIG_W} height={FIG_H} sizes="96vw" />
            <figcaption>{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

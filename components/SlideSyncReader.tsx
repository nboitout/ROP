'use client'

// Prototype "lecture synchronisée" : the synthesis slides stay pinned next to
// the chapter text, and the visible slide follows the reading position.
// Navigating the slides (arrows / dots) scrolls the text to the matching
// passage, so the two media stay in step in both directions.

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import type { Chapter, Block } from '@/content/types'
import type { SyncSlide, SyncAnchor } from '@/content/chapter5.slidesync'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'
import ReaderModeToggle from '@/components/ReaderModeToggle'

type Props = {
  chapter: Chapter
  bookTitle: string
  slides: SyncSlide[]
  anchors: SyncAnchor[]
  // "Tous les chapitres" link target (the free-chapters list).
  backHref?: string
  // Classic version of this chapter — the mode switch's other side.
  classicHref: string
}

export default function SlideSyncReader({ chapter, bookTitle, slides, anchors, backHref = '/chapitres-gratuits', classicHref }: Props) {
  const { lang, t } = useLanguage()
  const [sessionId] = useState<string>(() =>
    typeof window !== 'undefined' ? getSessionId() : ''
  )
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(1)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null)
  const [lightboxZoom, setLightboxZoom] = useState(1)
  const articleRef = useRef<HTMLElement>(null)
  // While a slide-driven smooth scroll is in flight, the scroll handler must
  // not fight the manually selected slide.
  const suppressSyncUntil = useRef(0)

  function track(event: string, data?: Record<string, unknown>) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: chapter.slug, event, lang, sessionId, ...(data ? { data } : {}) }),
      keepalive: true,
    }).catch(() => {})
  }

  const anchorBySlide = useMemo(() => {
    const m = new Map<string, number>()
    for (const a of anchors) m.set(`${a.sectionId}:${a.blockIndex}`, a.slide)
    return m
  }, [anchors])

  useEffect(() => {
    track('sync_reader_open')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter.slug])

  useEffect(() => {
    function onScroll() {
      const el = articleRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top
      const total = el.scrollHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-top, 0), total)
      setProgress(total > 0 ? scrolled / total : 0)

      if (Date.now() < suppressSyncUntil.current) return
      // Active slide = last anchor whose top has crossed 45% of the viewport.
      const threshold = window.innerHeight * 0.45
      let current = 1
      el.querySelectorAll<HTMLElement>('[data-slide-anchor]').forEach((a) => {
        if (a.getBoundingClientRect().top <= threshold) {
          current = Number(a.dataset.slideAnchor) || current
        }
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!lightbox) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox])

  function closeLightbox() {
    setLightbox(null)
    setLightboxZoom(1)
  }

  function goToSlide(n: number) {
    const slide = Math.min(slides.length, Math.max(1, n))
    setActive(slide)
    suppressSyncUntil.current = Date.now() + 1100
    const el = articleRef.current?.querySelector<HTMLElement>(`[data-slide-anchor="${slide}"]`)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    track('sync_slide_nav', { slide })
  }

  function openSlideLightbox(n: number) {
    const s = slides[n - 1]
    if (!s) return
    setLightbox({ src: s.src, alt: s.title, caption: `Diapositive ${n} — ${s.title}` })
  }

  return (
    <div className="cr-root">
      <div className="cr-progress" aria-hidden><div className="cr-progress-bar" style={{ transform: `scaleX(${progress})` }} /></div>

      <div className="cr-topbar">
        <Link href={backHref} className="cr-home">{t.reader.back}</Link>
        <div className="cr-topbar-title">
          <span className="cr-chap">{t.reader.chapterPrefix} {chapter.number}</span>
          <span className="cr-sep">·</span>
          <span className="cr-bookname">{bookTitle}</span>
        </div>
        <ReaderModeToggle mode="sync" otherHref={classicHref} />
      </div>

      <div className="ss-layout">
        <div className="ss-stagecol">
          <div className="ss-stage">
            <p className="ss-stage-eyebrow">Synthèse visuelle — suit votre lecture</p>
            <button
              type="button"
              className="ss-frame"
              onClick={() => openSlideLightbox(active)}
              aria-label={`Agrandir la diapositive ${active} : ${slides[active - 1]?.title ?? ''}`}
            >
              {slides.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.title}
                  className={`ss-slide${i + 1 === active ? ' is-active' : ''}`}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  aria-hidden={i + 1 !== active}
                />
              ))}
              <span className="cr-fig-zoom ss-frame-zoom" aria-hidden>⌕</span>
            </button>
            <div className="ss-stage-bar">
              <button
                className="cr-viewer-nav-btn"
                onClick={() => goToSlide(active - 1)}
                disabled={active <= 1}
                aria-label="Diapositive précédente"
              >‹</button>
              <div className="ss-stage-meta">
                <span className="ss-stage-count">{active} / {slides.length}</span>
                <span className="ss-stage-title">{slides[active - 1]?.title}</span>
              </div>
              <button
                className="cr-viewer-nav-btn"
                onClick={() => goToSlide(active + 1)}
                disabled={active >= slides.length}
                aria-label="Diapositive suivante"
              >›</button>
            </div>
            <div className="ss-dots" role="tablist" aria-label="Diapositives">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  className={`ss-dot${i + 1 === active ? ' is-active' : ''}`}
                  onClick={() => goToSlide(i + 1)}
                  title={`${i + 1}. ${s.title}`}
                  aria-label={`Aller à la diapositive ${i + 1} : ${s.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        <article ref={articleRef} className="ss-article">
          <div className="cr-hero">
            <p className="cr-hero-eyebrow">{t.reader.chapterPrefix} {chapter.number} · {t.reader.chapterComplete}</p>
            <h1 className="cr-hero-title">{chapter.title}</h1>
            <p className="cr-hero-book"><em>{bookTitle}</em></p>
            <p className="cr-hero-author">Guy Boitout</p>
          </div>

          {chapter.sections.map((section) => {
            const headingSlide = anchorBySlide.get(`${section.id}:-1`)
            return (
            <section key={section.id} id={`sec-${section.id}`} className="cr-section">
              {headingSlide && (
                <div data-slide-anchor={headingSlide} className="ss-anchor ss-anchor-heading">
                  <button
                    type="button"
                    className="ss-marker"
                    onClick={() => openSlideLightbox(headingSlide)}
                    title="Agrandir la diapositive"
                  >
                    <span className="ss-marker-dot" aria-hidden />
                    Diapositive {headingSlide} · {slides[headingSlide - 1]?.title}
                  </button>
                </div>
              )}
              <h2 className="cr-h2">{section.title}</h2>
              {section.blocks.map((b, i) => {
                const slide = anchorBySlide.get(`${section.id}:${i}`)
                const posId = `p-${section.id}-${i}`
                const view = <BlockView block={b} onOpenImage={setLightbox} />
                if (!slide) return <div key={i} id={posId} data-pos-anchor="">{view}</div>
                return (
                  <div key={i} id={posId} data-pos-anchor="" data-slide-anchor={slide} className="ss-anchor">
                    <button
                      type="button"
                      className="ss-marker"
                      onClick={() => openSlideLightbox(slide)}
                      title="Agrandir la diapositive"
                    >
                      <span className="ss-marker-dot" aria-hidden />
                      Diapositive {slide} · {slides[slide - 1]?.title}
                    </button>
                    {view}
                  </div>
                )
              })}
            </section>
            )
          })}

          <div className="ss-end">
            <p className="ss-end-note">
              Fin du chapitre — prototype de lecture synchronisée : les diapositives de synthèse
              accompagnent le texte tout au long de la lecture. Le sélecteur en haut de page
              permet de basculer vers la version classique.
            </p>
          </div>
        </article>
      </div>

      {lightbox && (
        <div className="cr-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="cr-lightbox-bar" onClick={(e) => e.stopPropagation()}>
            <span className="cr-lightbox-caption">{lightbox.caption}</span>
            <div className="cr-lightbox-controls">
              <button className="cr-viewer-nav-btn" onClick={() => setLightboxZoom(z => Math.max(0.5, +(z - 0.25).toFixed(2)))} disabled={lightboxZoom <= 0.5} aria-label="Dézoomer">−</button>
              <button className="cr-viewer-zoom-reset" onClick={() => setLightboxZoom(1)} title="Réinitialiser">{Math.round(lightboxZoom * 100)}%</button>
              <button className="cr-viewer-nav-btn" onClick={() => setLightboxZoom(z => Math.min(4, +(z + 0.25).toFixed(2)))} disabled={lightboxZoom >= 4} aria-label="Zoomer">+</button>
              <button className="cr-lightbox-close" onClick={closeLightbox} aria-label="Fermer">×</button>
            </div>
          </div>
          <div className="cr-lightbox-scroll" onClick={(e) => e.stopPropagation()}>
            <figure className="cr-lightbox-fig">
              <img src={lightbox.src} alt={lightbox.alt} style={{ transform: `scale(${lightboxZoom})`, transformOrigin: 'top center' }} />
              <figcaption>{lightbox.caption}</figcaption>
            </figure>
          </div>
        </div>
      )}
    </div>
  )
}

function BlockView({ block, onOpenImage }: { block: Block; onOpenImage: (b: { src: string; alt: string; caption: string }) => void }) {
  const { t } = useLanguage()
  switch (block.type) {
    case 'para':
      return <p className="cr-p">{block.text}</p>
    case 'lead':
      return (
        <p className="cr-p cr-lead">
          <strong className="cr-lead-label">{block.label}{block.text ? ' —' : ''}</strong>
          {block.text ? ' ' + block.text : ''}
        </p>
      )
    case 'sub':
      return <h3 className="cr-h3">{block.text}</h3>
    case 'bullets':
      return (
        <ul className="cr-ul">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )
    case 'leadBullets':
      return (
        <ul className="cr-ul cr-ul-lead">
          {block.items.map((it, i) => (
            <li key={i}>
              <strong className="cr-lead-label">{it.label}{it.text ? ' —' : ''}</strong>
              {it.text ? ' ' + it.text : ''}
            </li>
          ))}
        </ul>
      )
    case 'figure':
      return (
        <figure className={`cr-fig cr-fig-${block.orientation} ss-fig`}>
          <button
            type="button"
            className="cr-fig-btn"
            onClick={() => onOpenImage({ src: block.src, alt: block.alt, caption: block.caption })}
            aria-label={`Agrandir : ${block.caption}`}
          >
            <img src={block.src} alt={block.alt} loading="lazy" />
            <span className="cr-fig-zoom" aria-hidden>⌕</span>
          </button>
          <figcaption>{block.caption}</figcaption>
        </figure>
      )
    case 'rop':
      return (
        <aside className="cr-rop">
          <p className="cr-rop-title">{t.reader.ropTitle}</p>
          {block.body.map((p, i) => <p key={i} className="cr-rop-p">{p}</p>)}
        </aside>
      )
  }
}

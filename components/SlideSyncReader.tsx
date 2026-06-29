'use client'

// Prototype "lecture synchronisée" : the synthesis slides stay pinned next to
// the chapter text, and the visible slide follows the reading position.
// Navigating the slides (arrows / dots) scrolls the text to the matching
// passage, so the two media stay in step in both directions.

import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { Chapter, Block, Section } from '@/content/types'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'
import { currentTopAnchorId, saveReadingPosition, loadReadingPosition, restoreToAnchor } from '@/lib/readingPosition'

type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
type SyncAnchor = { sectionId: string; blockIndex: number; slide: number | number[]; gapBefore?: 'half' }

type Props = {
  chapter: Chapter
  bookTitle: string
  slides: SyncSlide[]
  anchors: SyncAnchor[]
  // "Tous les chapitres" link target (the free-chapters list).
  backHref?: string
}

type XrefReturn = { href: string; label: string } | null

function isRopInterestSection(section: Section) {
  return /^int[ée]r[êe]t en r\.?o\.?p\.?$/i.test(section.title.trim()) &&
    section.blocks.length === 1 &&
    section.blocks[0].type === 'rop'
}

function getSafeXrefReturn(params: { get(name: string): string | null } | null): XrefReturn {
  if (!params) return null
  const href = params.get('xrefBack')
  if (!href || !href.startsWith('/') || href.startsWith('//')) return null
  return {
    href,
    label: params.get('xrefBackLabel') || 'Retour a la reference',
  }
}

// The synchronized reader is shown in the languages with a synthesis deck, so
// its chrome is localized here.
const SS_UI: Record<string, {
  eyebrow: string; slides: string; prev: string; next: string
  enlarge: (n: number, t: string) => string; goTo: (n: number, t: string) => string
  enlargeShort: string; marker: (n: number, t: string) => string
  caption: (n: number, t: string) => string; jumpLabel: string
  jumpTitle: (s: string) => string; enlargeFigure: (c: string) => string
  rotateHint: string
}> = {
  fr: {
    eyebrow: 'Synthèse visuelle — suit votre lecture',
    slides: 'Diapositives',
    prev: 'Diapositive précédente',
    next: 'Diapositive suivante',
    enlarge: (n: number, title: string) => `Agrandir la diapositive ${n} : ${title}`,
    goTo: (n: number, title: string) => `Aller à la diapositive ${n} : ${title}`,
    enlargeShort: 'Agrandir la diapositive',
    marker: (n: number, title: string) => `Diapositive ${n} · ${title}`,
    caption: (n: number, title: string) => `Diapositive ${n} — ${title}`,
    jumpLabel: 'Accès direct — zones réflexes',
    jumpTitle: (s: string) => `Aller directement à : ${s}`,
    enlargeFigure: (caption: string) => `Agrandir : ${caption}`,
    rotateHint: 'Tournez votre téléphone pour afficher cette diapositive en plein format.',
  },
  en: {
    eyebrow: 'Visual synthesis — follows your reading',
    slides: 'Slides',
    prev: 'Previous slide',
    next: 'Next slide',
    enlarge: (n: number, title: string) => `Enlarge slide ${n}: ${title}`,
    goTo: (n: number, title: string) => `Go to slide ${n}: ${title}`,
    enlargeShort: 'Enlarge slide',
    marker: (n: number, title: string) => `Slide ${n} · ${title}`,
    caption: (n: number, title: string) => `Slide ${n} — ${title}`,
    jumpLabel: 'Direct access — reflex zones',
    jumpTitle: (s: string) => `Go directly to: ${s}`,
    enlargeFigure: (caption: string) => `Enlarge: ${caption}`,
    rotateHint: 'Rotate your phone to view this slide at full size.',
  },
  de: {
    eyebrow: 'Visuelle Synthese — folgt Ihrer Lektüre',
    slides: 'Folien',
    prev: 'Vorherige Folie',
    next: 'Nächste Folie',
    enlarge: (n: number, title: string) => `Folie ${n} vergrößern: ${title}`,
    goTo: (n: number, title: string) => `Zu Folie ${n} springen: ${title}`,
    enlargeShort: 'Folie vergrößern',
    marker: (n: number, title: string) => `Folie ${n} · ${title}`,
    caption: (n: number, title: string) => `Folie ${n} — ${title}`,
    jumpLabel: 'Direktzugang — Reflexzonen',
    jumpTitle: (s: string) => `Direkt springen zu: ${s}`,
    enlargeFigure: (caption: string) => `Vergrößern: ${caption}`,
    rotateHint: 'Drehen Sie Ihr Telefon, um diese Folie in voller Größe anzuzeigen.',
  },
  es: {
    eyebrow: 'Síntesis visual — sigue su lectura',
    slides: 'Diapositivas',
    prev: 'Diapositiva anterior',
    next: 'Diapositiva siguiente',
    enlarge: (n: number, title: string) => `Ampliar la diapositiva ${n}: ${title}`,
    goTo: (n: number, title: string) => `Ir a la diapositiva ${n}: ${title}`,
    enlargeShort: 'Ampliar la diapositiva',
    marker: (n: number, title: string) => `Diapositiva ${n} · ${title}`,
    caption: (n: number, title: string) => `Diapositiva ${n} — ${title}`,
    jumpLabel: 'Acceso directo — zonas reflejas',
    jumpTitle: (s: string) => `Ir directamente a: ${s}`,
    enlargeFigure: (caption: string) => `Ampliar: ${caption}`,
    rotateHint: 'Gire el teléfono para ver esta diapositiva a tamaño completo.',
  },
  it: {
    eyebrow: 'Sintesi visiva — segue la lettura',
    slides: 'Diapositive',
    prev: 'Diapositiva precedente',
    next: 'Diapositiva successiva',
    enlarge: (n: number, title: string) => `Ingrandisci la diapositiva ${n}: ${title}`,
    goTo: (n: number, title: string) => `Vai alla diapositiva ${n}: ${title}`,
    enlargeShort: 'Ingrandisci la diapositiva',
    marker: (n: number, title: string) => `Diapositiva ${n} · ${title}`,
    caption: (n: number, title: string) => `Diapositiva ${n} — ${title}`,
    jumpLabel: 'Accesso diretto — zone riflesse',
    jumpTitle: (s: string) => `Vai direttamente a: ${s}`,
    enlargeFigure: (caption: string) => `Ingrandisci: ${caption}`,
    rotateHint: 'Ruota il telefono per visualizzare questa diapositiva a pieno formato.',
  },
}

// Section ids that get a "page break" — a tall blank gap the reader scrolls
// through before the section heading, à la Word page break.
const PAGE_BREAK_BEFORE = new Set<string>(['anatomie'])

function normalizeSectionLabel(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function asSlideList(slide: number | number[] | undefined) {
  if (typeof slide === 'number') return [slide]
  return slide ?? []
}

export default function SlideSyncReader({ chapter, bookTitle, slides, anchors, backHref = '/chapitres-gratuits' }: Props) {
  const { lang, t } = useLanguage()
  const searchParams = useSearchParams()
  const ui = SS_UI[lang] ?? SS_UI.fr
  const closeToReadingLabel = {
    fr: 'Retour a la lecture',
    en: 'Back to reading',
    de: 'Zuruck zur Lekture',
    es: 'Volver a la lectura',
    it: 'Torna alla lettura',
  }[lang] ?? 'Back to reading'
  const [sessionId] = useState<string>(() =>
    typeof window !== 'undefined' ? getSessionId() : ''
  )
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(1)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string; orientation?: 'portrait' | 'landscape' } | null>(null)
  const [lightboxZoom, setLightboxZoom] = useState(1)
  const [isPhonePortrait, setIsPhonePortrait] = useState(false)
  const xrefReturn = getSafeXrefReturn(searchParams)
  const articleRef = useRef<HTMLElement>(null)
  // While a slide-driven scroll is in flight, the scroll handler must not
  // fight the manually selected slide.
  const suppressSyncUntil = useRef(0)
  // Handle for the in-flight slide-navigation animation, so it can be
  // cancelled (manual scroll, a newer click, or unmount).
  const navAnim = useRef<{ raf: number; cleanup: () => void } | null>(null)
  // Throttle for persisting the reading position.
  const lastPosSave = useRef(0)

  function track(event: string, data?: Record<string, unknown>) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: chapter.slug, event, lang, sessionId, ...(data ? { data } : {}) }),
      keepalive: true,
    }).catch(() => {})
  }

  const anchorBySlide = useMemo(() => {
    const m = new Map<string, SyncAnchor>()
    for (const a of anchors) m.set(`${a.sectionId}:${a.blockIndex}`, a)
    return m
  }, [anchors])

  // The chapter's ROP section (reflex-zone maps in the feet) — readers spend a
  // lot of time here, so the pinned stage offers a one-tap jump to it.
  const ropSection = useMemo(
    () => chapter.sections.find((section) => {
      const sectionId = normalizeSectionLabel(section.id)
      if (sectionId === 'rop' || sectionId.startsWith('rop-')) return true
      if (sectionId.includes('zone') && sectionId.includes('reflex')) return true
      const title = normalizeSectionLabel(section.title)
      return title.includes('zone') && title.includes('reflex')
    }),
    [chapter.sections]
  )

  // Slide the jump lands on: the first reflex-zone slide of the ROP section —
  // its earliest *content-block* anchor (blockIndex >= 0), skipping the
  // heading anchor (e.g. the closing-quote slide that sits above the title).
  // Falls back to the section's earliest anchor of any kind.
  const ropJumpSlide = useMemo(() => {
    if (!ropSection) return null
    const inSection = anchors.filter((a) => a.sectionId === ropSection.id)
    if (inSection.length === 0) return null
    const blocks = inSection.filter((a) => a.blockIndex >= 0)
    const pick = (blocks.length ? blocks : inSection).reduce((lo, a) =>
      a.blockIndex < lo.blockIndex ? a : lo
    )
    return asSlideList(pick.slide)[0] ?? null
  }, [anchors, ropSection])

  useEffect(() => {
    track('sync_reader_open')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter.slug])

  useEffect(() => {
    const prioritySlides = new Set<number>([0, 1, active - 2, active - 1, active])
    prioritySlides.forEach((index) => {
      const slide = slides[index]
      if (!slide || typeof window === 'undefined') return
      const img = new Image()
      img.src = slide.src
    })
  }, [active, slides])

  // Restore reading position on return.
  useEffect(() => {
    if (window.location.hash) return
    const id = loadReadingPosition(chapter.slug)
    if (id) restoreToAnchor(id)
  }, [chapter.slug])

  useEffect(() => {
    function onScroll() {
      const el = articleRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top
      const total = el.scrollHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-top, 0), total)
      setProgress(total > 0 ? scrolled / total : 0)

      // Remember reading position (throttled), even while slide-sync is
      // suppressed, so leaving and returning resumes where the reader was.
      const now = Date.now()
      if (now - lastPosSave.current > 250) {
        lastPosSave.current = now
        const anchorId = currentTopAnchorId()
        if (anchorId) saveReadingPosition(chapter.slug, anchorId)
      }

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
      cancelNav()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px) and (orientation: portrait)')
    const update = () => setIsPhonePortrait(query.matches)
    update()
    query.addEventListener('change', update)
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)
    window.visualViewport?.addEventListener('resize', update)
    return () => {
      query.removeEventListener('change', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
      window.visualViewport?.removeEventListener('resize', update)
    }
  }, [])

  function closeLightbox() {
    setLightbox(null)
    setLightboxZoom(1)
  }

  function cancelNav() {
    if (navAnim.current) {
      cancelAnimationFrame(navAnim.current.raf)
      navAnim.current.cleanup()
      navAnim.current = null
    }
  }

  // Animate the page to a target element. The position is re-read every frame
  // from the live element, so lazy-loaded figures growing mid-scroll can't
  // strand the animation short of the destination. Sync stays suppressed until
  // arrival (however long a far jump takes); a manual scroll cancels it.
  function animateTo(getEl: () => HTMLElement | null) {
    cancelNav()
    const MARGIN = 96
    suppressSyncUntil.current = Infinity

    // The site sets html{scroll-behavior:smooth}; force instant positioning so
    // our per-frame easing isn't fought by the browser's own animation.
    const root = document.documentElement
    const prevBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    // A wheel/touch/key gesture means the reader took over: stop animating.
    const onUserScroll = () => cancelNav()
    window.addEventListener('wheel', onUserScroll, { passive: true })
    window.addEventListener('touchmove', onUserScroll, { passive: true })
    window.addEventListener('keydown', onUserScroll)
    const cleanup = () => {
      window.removeEventListener('wheel', onUserScroll)
      window.removeEventListener('touchmove', onUserScroll)
      window.removeEventListener('keydown', onUserScroll)
      root.style.scrollBehavior = prevBehavior
      // Brief tail so momentum settles before the scroll handler resumes.
      suppressSyncUntil.current = Date.now() + 200
    }

    const start = performance.now()
    let settled = 0
    const step = (now: number) => {
      const el = getEl()
      if (!el) { cleanup(); navAnim.current = null; return }
      const desired = el.getBoundingClientRect().top + window.scrollY - MARGIN
      const dist = desired - window.scrollY
      settled = Math.abs(dist) < 2 ? settled + 1 : 0
      // Ease toward the live target; recomputed each frame.
      window.scrollTo(0, window.scrollY + dist * 0.2)
      if (settled >= 3 || now - start > 5000) {
        window.scrollTo(0, desired)
        cleanup(); navAnim.current = null; return
      }
      navAnim.current = { raf: requestAnimationFrame(step), cleanup }
    }
    navAnim.current = { raf: requestAnimationFrame(step), cleanup }
  }

  function goToSlide(n: number) {
    const slide = Math.min(slides.length, Math.max(1, n))
    setActive(slide)
    track('sync_slide_nav', { slide })
    animateTo(() => articleRef.current?.querySelector<HTMLElement>(`[data-slide-anchor="${slide}"]`) ?? null)
  }

  // Jump to the reflex-zone (ROP) section by landing on its first reflex-zone
  // slide's pointer in the text, with the deck synced to that slide.
  function goToReflexZones() {
    if (!ropJumpSlide) return
    track('sync_jump_section', { section: ropSection?.id, slide: ropJumpSlide })
    goToSlide(ropJumpSlide)
  }

  function openSlideLightbox(n: number) {
    const s = slides[n - 1]
    if (!s) return
    setLightbox({
      src: s.src,
      alt: s.title,
      caption: ui.caption(n, s.title),
      orientation: s.orientation === 'portrait' ? 'portrait' : 'landscape',
    })
  }

  const rotateLandscapeLightbox = lightbox?.orientation === 'landscape' && isPhonePortrait
  const activeSlide = slides[active - 1]
  const activeSlideIsPortrait = activeSlide?.orientation === 'portrait'
  const renderedSlideIndexes = useMemo(() => {
    const indexes = new Set([active - 2, active - 1, active])
    return Array.from(indexes)
      .filter((index) => index >= 0 && index < slides.length)
      .sort((a, b) => a - b)
  }, [active, slides.length])

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
      </div>

      {xrefReturn && (
        <Link href={xrefReturn.href} className="cr-xref-return">
          <span aria-hidden>←</span>
          {xrefReturn.label}
        </Link>
      )}

      <div className="ss-layout">
        <div className="ss-stagecol">
          <div className={`ss-stage${activeSlideIsPortrait ? ' ss-stage--portrait' : ''}`}>
            <div className="ss-stage-row">
              <div className="ss-dots" role="tablist" aria-label={ui.slides}>
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    className={`ss-dot${i + 1 === active ? ' is-active' : ''}`}
                    onClick={() => goToSlide(i + 1)}
                    title={`${i + 1}. ${s.title}`}
                    aria-label={ui.goTo(i + 1, s.title)}
                  />
                ))}
              </div>
              <div className="ss-stage-main">
            <button
              type="button"
              className={`ss-frame${activeSlideIsPortrait ? ' ss-frame--portrait' : ''}`}
              onClick={() => openSlideLightbox(active)}
              aria-label={ui.enlarge(active, activeSlide?.title ?? '')}
            >
              {renderedSlideIndexes.map((i) => {
                const s = slides[i]
                return (
                  <img
                    key={s.src}
                    src={s.src}
                    alt={s.title}
                    className={`ss-slide${i + 1 === active ? ' is-active' : ''}`}
                    loading={i + 1 === active ? 'eager' : 'lazy'}
                    fetchPriority={i + 1 === active ? 'high' : 'auto'}
                    decoding="async"
                    aria-hidden={i + 1 !== active}
                  />
                )
              })}
              <span className="cr-fig-zoom ss-frame-zoom" aria-hidden>⌕</span>
            </button>
            <div className="ss-stage-bar">
              <button
                className="cr-viewer-nav-btn"
                onClick={() => goToSlide(active - 1)}
                disabled={active <= 1}
                aria-label={ui.prev}
              >‹</button>
              <div className="ss-stage-meta">
                <span className="ss-stage-count">{active} / {slides.length}</span>
                <span className="ss-stage-title">{slides[active - 1]?.title}</span>
              </div>
              <button
                className="cr-viewer-nav-btn"
                onClick={() => goToSlide(active + 1)}
                disabled={active >= slides.length}
                aria-label={ui.next}
              >›</button>
            </div>
              </div>
            </div>
            {ropSection && ropJumpSlide && (
              <button
                type="button"
                className="ss-jump"
                onClick={goToReflexZones}
                title={ui.jumpTitle(ropSection.title)}
              >
                <span className="ss-jump-icon" aria-hidden>⌖</span>
                <span className="ss-jump-text">
                  <span className="ss-jump-label">{ui.jumpLabel}</span>
                  <span className="ss-jump-section">{ropSection.title}</span>
                </span>
                <span className="ss-jump-arrow" aria-hidden>↓</span>
              </button>
            )}
          </div>
        </div>

        <article ref={articleRef} className="ss-article">
          <div className="cr-hero">
            <p className="cr-hero-eyebrow">{t.reader.chapterPrefix} {chapter.number}</p>
            <h1 className="cr-hero-title">{chapter.title}</h1>
            <p className="cr-hero-book"><em>{bookTitle}</em></p>
            <p className="cr-hero-author">Guy Boitout</p>
          </div>

          {chapter.sections.map((section) => {
            const headingAnchor = anchorBySlide.get(`${section.id}:-1`)
            const headingSlides = asSlideList(headingAnchor?.slide)
            return (
            <Fragment key={section.id}>
            {PAGE_BREAK_BEFORE.has(section.id) && <div className="ss-pagebreak" aria-hidden />}
            <section id={`sec-${section.id}`} className="cr-section">
              {headingSlides.length > 0 && (
                <div className="ss-anchor ss-anchor-heading">
                  {headingSlides.map((slide) => (
                    <div key={slide} data-slide-anchor={slide}>
                      <button
                        type="button"
                        className="ss-marker"
                        onClick={() => openSlideLightbox(slide)}
                        title={ui.enlargeShort}
                      >
                        <span className="ss-marker-dot" aria-hidden />
                        {ui.marker(slide, slides[slide - 1]?.title ?? '')}
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {!isRopInterestSection(section) && <h2 className="cr-h2">{section.title}</h2>}
              {section.blocks.map((b, i) => {
                const anchor = anchorBySlide.get(`${section.id}:${i}`)
                const slideList = asSlideList(anchor?.slide)
                const posId = `p-${section.id}-${i}`
                const view = <BlockView block={b} onOpenImage={setLightbox} ui={ui} />
                if (view === null && slideList.length === 0) return null
                if (slideList.length === 0) {
                  return (
                    <div
                      key={i}
                      id={posId}
                      data-pos-anchor=""
                    >
                      {view}
                    </div>
                  )
                }
                return (
                  <div
                    key={i}
                    id={posId}
                    data-pos-anchor=""
                    className={`ss-anchor${anchor?.gapBefore === 'half' ? ' ss-anchor-halfbreak' : ''}`}
                  >
                    {slideList.map((slide) => (
                      <div key={slide} data-slide-anchor={slide}>
                        <button
                          type="button"
                          className="ss-marker"
                          onClick={() => openSlideLightbox(slide)}
                          title={ui.enlargeShort}
                        >
                          <span className="ss-marker-dot" aria-hidden />
                          {ui.marker(slide, slides[slide - 1]?.title ?? '')}
                        </button>
                      </div>
                    ))}
                    {view}
                  </div>
                )
              })}
            </section>
            </Fragment>
            )
          })}
        </article>
      </div>

      {lightbox && (
        <div
          className={`cr-lightbox${lightbox.orientation ? ` cr-lightbox--${lightbox.orientation}` : ''}${rotateLandscapeLightbox ? ' cr-lightbox--auto-rotated' : ''}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
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
              {lightbox.orientation === 'landscape' && (
                <p className="cr-lightbox-rotate-hint">{ui.rotateHint}</p>
              )}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                style={{
                  transform: `${rotateLandscapeLightbox ? 'rotate(90deg) ' : ''}scale(${lightboxZoom})`,
                  transformOrigin: rotateLandscapeLightbox ? 'center center' : 'top center',
                }}
              />
              <figcaption>{lightbox.caption}</figcaption>
            </figure>
          </div>
          <button type="button" className="cr-lightbox-return" onClick={closeLightbox}>
            {closeToReadingLabel}
          </button>
        </div>
      )}
    </div>
  )
}

function BlockView({ block, onOpenImage, ui }: { block: Block; onOpenImage: (b: { src: string; alt: string; caption: string }) => void; ui: typeof SS_UI.fr }) {
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
      if (block.syncHide) return null
      return (
        <figure className={`cr-fig cr-fig-${block.orientation} ss-fig`}>
          <button
            type="button"
            className="cr-fig-btn"
            onClick={() => onOpenImage({ src: block.src, alt: block.alt, caption: block.caption })}
            aria-label={ui.enlargeFigure(block.caption)}
          >
            <img src={block.src} alt={block.alt} loading="lazy" />
            <span className="cr-fig-zoom" aria-hidden>⌕</span>
          </button>
          <figcaption>{block.caption}</figcaption>
        </figure>
      )
    case 'xref':
      return (
        <p className="cr-xref">
          <Link href={block.href} className="cr-xref-link">
            <span className="cr-xref-kicker">{block.label}</span>
            {block.text && <span className="cr-xref-title">{block.text}</span>}
            <span className="cr-xref-arrow" aria-hidden>→</span>
          </Link>
        </p>
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

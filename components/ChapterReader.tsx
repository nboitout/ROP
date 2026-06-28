'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { Chapter, Block, Section } from '@/content/types'
import type { Lang } from '@/app/i18n/translations'

const PdfSlideViewer = dynamic(() => import('@/components/PdfSlideViewer'), { ssr: false })
import BookNotifyForm from '@/components/BookNotifyForm'
import { currentTopAnchorId, saveReadingPosition, loadReadingPosition, restoreToAnchor } from '@/lib/readingPosition'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

type Props = {
  chapter: Chapter
  bookTitle: string
  backHref?: string
  contentLang?: Lang
}

type XrefReturn = { href: string; label: string } | null

function isRopInterestSection(section: Section) {
  return /^int[ée]r[êe]t en r\.?o\.?p\.?$/i.test(section.title.trim()) &&
    section.blocks.length === 1 &&
    section.blocks[0].type === 'rop'
}

function getSafeXrefReturn(): XrefReturn {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const href = params.get('xrefBack')
  if (!href || !href.startsWith('/') || href.startsWith('//')) return null
  return {
    href,
    label: params.get('xrefBackLabel') || 'Retour a la reference',
  }
}

export default function ChapterReader({ chapter, bookTitle, backHref = '/chapitres-gratuits', contentLang = 'fr' }: Props) {
  const { lang, t } = useLanguage()
  const showFallbackNotice = lang !== contentLang
  const showEndCard = new Set(['introduction', 'chapter-3', 'chapter-14']).has(chapter.slug)
  const [sessionId] = useState<string>(() =>
    typeof window !== 'undefined' ? getSessionId() : ''
  )

  function track(event: string, data?: Record<string, unknown>) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: chapter.slug, event, lang, sessionId, ...(data ? { data } : {}) }),
      keepalive: true,
    }).catch(() => {})
  }
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<string>(chapter.sections[0]?.id ?? '')
  const [tocOpen, setTocOpen] = useState(false)
  const [slidesOpen, setSlidesOpen] = useState(false)
  const [slidesViewer, setSlidesViewer] = useState(false)
  const [slideCount, setSlideCount] = useState<number>(0)
  const [slidePage, setSlidePage] = useState(1)
  const [slideWidth, setSlideWidth] = useState(800)
  const [slideZoom, setSlideZoom] = useState(0.75)
  const [xrefReturn] = useState<XrefReturn>(() =>
    typeof window !== 'undefined' ? getSafeXrefReturn() : null
  )
  const viewerBodyRef = useRef<HTMLDivElement | null>(null)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null)
  const [lightboxZoom, setLightboxZoom] = useState(1)
  const slidesOpenedAt = useRef<number | null>(null)
  const resourceOpenedAt = useRef<number | null>(null)
  const resourceNameRef = useRef<string | null>(null)

  // Resources (revision sheet / clinical case): track both the open and how
  // long the lightbox stayed open, so the admin can see engagement with them.
  function openResource(name: string, img: { src: string; alt: string; caption: string }) {
    resourceOpenedAt.current = Date.now()
    resourceNameRef.current = name
    setLightbox(img)
    track('resource_open', { resource: name })
  }

  function closeLightbox() {
    if (resourceNameRef.current && resourceOpenedAt.current) {
      const seconds = Math.round((Date.now() - resourceOpenedAt.current) / 1000)
      track('resource_close', { resource: resourceNameRef.current, duration_seconds: seconds })
    }
    resourceNameRef.current = null
    resourceOpenedAt.current = null
    setLightbox(null)
    setLightboxZoom(1)
  }

  // Slides viewer: track the open and the time spent before closing.
  function openSlidesViewer() {
    slidesOpenedAt.current = Date.now()
    setSlidesOpen(false)
    setSlidesViewer(true)
    track('slides_viewer_open')
  }

  function closeSlidesViewer() {
    if (slidesOpenedAt.current) {
      const seconds = Math.round((Date.now() - slidesOpenedAt.current) / 1000)
      track('slides_viewer_close', { duration_seconds: seconds })
      slidesOpenedAt.current = null
    }
    setSlidesViewer(false)
    setSlidePage(1)
    setSlideZoom(0.75)
  }
  const articleRef = useRef<HTMLElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const peekCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const firedMilestonesRef = useRef<Set<number>>(new Set())
  const lastPosSave = useRef(0)

  // Restore the reading position on return.
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
      const pct = total > 0 ? scrolled / total : 0
      setProgress(pct)
      for (const m of [25, 50, 75, 100]) {
        if (pct * 100 >= m && !firedMilestonesRef.current.has(m)) {
          firedMilestonesRef.current.add(m)
          track('scroll_depth', { percent: m })
        }
      }

      // Remember reading position (throttled) so "Tous les chapitres" + return
      // resumes where the reader was.
      const now = Date.now()
      if (now - lastPosSave.current > 250) {
        lastPosSave.current = now
        const anchorId = currentTopAnchorId()
        if (anchorId) saveReadingPosition(chapter.slug, anchorId)
      }

      // active section: nearest section whose top is above 30% viewport
      const sections = el.querySelectorAll<HTMLElement>('section[data-section-id]')
      const threshold = window.innerHeight * 0.3
      let current = chapter.sections[0]?.id ?? ''
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top <= threshold) current = s.dataset.sectionId ?? current
      })
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [chapter.sections])

  useEffect(() => {
    // Fire a single "read_start" event after 10 s of dwell time.
    // visibilitychange resets the timer so background tabs don't count.
    let elapsed = 0
    let last = Date.now()
    let fired = false
    const tick = () => {
      if (fired) return
      if (document.visibilityState !== 'visible') { last = Date.now(); return }
      elapsed += Date.now() - last
      last = Date.now()
      if (elapsed >= 10000) {
        fired = true
        track('read_start')
      }
    }
    const onVis = () => { last = Date.now() }
    const interval = setInterval(tick, 1000)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [chapter.slug])

  useEffect(() => {
    const el = endRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect()
          track('chapter_end_reached')
        }
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [chapter.slug])

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

  // Peek: briefly open the slides panel on first load to hint at its existence
  useEffect(() => {
    if (!chapter.slides) return
    const openTimer = setTimeout(() => {
      setSlidesOpen(true)
      peekCloseRef.current = setTimeout(() => setSlidesOpen(false), 3200)
    }, 1800)
    return () => {
      clearTimeout(openTimer)
      if (peekCloseRef.current) clearTimeout(peekCloseRef.current)
    }
  }, [chapter.slides])

  // Close slides viewer on Escape; navigate with arrow keys
  useEffect(() => {
    if (!slidesViewer) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { closeSlidesViewer() }
      if (e.key === 'ArrowRight') setSlidePage(p => Math.min(slideCount, p + 1))
      if (e.key === 'ArrowLeft')  setSlidePage(p => Math.max(1, p - 1))
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [slidesViewer, slideCount])

  // Measure viewer width once when it opens; update on window resize only
  useEffect(() => {
    if (!slidesViewer) return
    function measure() {
      if (viewerBodyRef.current) setSlideWidth(viewerBodyRef.current.clientWidth)
    }
    // Defer by one frame so the DOM has rendered
    const raf = requestAnimationFrame(measure)
    window.addEventListener('resize', measure)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
    }
  }, [slidesViewer])

  function handleSlidesTabClick() {
    // Cancel the peek auto-close if the user clicks manually
    if (peekCloseRef.current) { clearTimeout(peekCloseRef.current); peekCloseRef.current = null }
    setSlidesOpen(v => !v)
  }

  function scrollTo(id: string) {
    const el = document.getElementById(`sec-${id}`)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: y, behavior: 'smooth' })
    setTocOpen(false)
  }

  return (
    <div className="cr-root">
      <div className="cr-progress" aria-hidden><div className="cr-progress-bar" style={{ transform: `scaleX(${progress})` }} /></div>

      <div className="cr-topbar">
        <Link href={backHref} className="cr-home">{t.reader.back}</Link>
        <div className="cr-topbar-title">
          <span className="cr-chap">{chapter.number ? `${t.reader.chapterPrefix} ${chapter.number}` : chapter.title}</span>
          <span className="cr-sep">·</span>
          <span className="cr-bookname">{bookTitle}</span>
        </div>
        <button className="cr-toc-toggle" onClick={() => setTocOpen((v) => !v)} aria-label={t.reader.toc}>
          <span /><span /><span />
        </button>
      </div>

      {xrefReturn && (
        <Link href={xrefReturn.href} className="cr-xref-return">
          <span aria-hidden>←</span>
          {xrefReturn.label}
        </Link>
      )}

      <div className="cr-layout">
        <aside className={`cr-toc${tocOpen ? ' is-open' : ''}`}>
          <div className="cr-toc-inner">
            <p className="cr-toc-label">{t.reader.toc}</p>
            <nav>
              {chapter.sections.map((s, i) => (
                <button
                  key={s.id}
                  className={`cr-toc-item${activeSection === s.id ? ' is-active' : ''}`}
                  onClick={() => scrollTo(s.id)}
                >
                  <span className="cr-toc-num">{i + 1}</span>
                  <span className="cr-toc-text">{s.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {tocOpen && <div className="cr-toc-overlay" onClick={() => setTocOpen(false)} />}

        <article ref={articleRef} className="cr-article">
          {showFallbackNotice && (
            <p className="cr-fallback-notice" role="status">{t.chapterFallbackNotice}</p>
          )}
          <div className="cr-hero">
            <p className="cr-hero-eyebrow">
              {chapter.number ? `${t.reader.chapterPrefix} ${chapter.number} · ` : ''}{t.reader.chapterComplete}
            </p>
            <h1 className="cr-hero-title">{chapter.title}</h1>
            <p className="cr-hero-book"><em>{bookTitle}</em></p>
            <p className="cr-hero-author">Guy Boitout</p>
          </div>

          {chapter.sections.map((section) => (
            <section key={section.id} id={`sec-${section.id}`} data-section-id={section.id} className="cr-section">
              {!isRopInterestSection(section) && <h2 className="cr-h2">{section.title}</h2>}
              {section.blocks.map((b, i) => (
                <BlockView key={i} block={b} onOpenImage={setLightbox} anchorId={`p-${section.id}-${i}`} />
              ))}
            </section>
          ))}

          {showEndCard ? (
            <div className="cr-end" ref={endRef}>
              <div className="cr-end-card">
                <p className="cr-end-eyebrow">
                  {chapter.number ? t.reader.endChapter(chapter.number) : t.reader.endIntro(chapter.title)}
                </p>
                <h3 className="cr-end-title">{t.reader.endCardTitle}</h3>
                <p className="cr-end-book"><em>{bookTitle}</em></p>
                <p className="cr-end-body">
                  {chapter.number ? t.reader.endCardBodyChapter : t.reader.endCardBodyIntro}
                </p>
                <BookNotifyForm labels={t.pricing.notify.form} />
              </div>
            </div>
          ) : (
            <div ref={endRef} />
          )}
        </article>
      </div>

      {chapter.slides && (
        <>
          <div className={`cr-slides${slidesOpen ? ' is-open' : ''}`}>
            <button
              className="cr-slides-tab"
              onClick={handleSlidesTabClick}
              aria-expanded={slidesOpen}
              aria-label={slidesOpen ? 'Fermer les diapositives' : 'Voir les diapositives'}
            >
              <span className="cr-slides-tab-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                </svg>
              </span>
              <span className="cr-slides-tab-label">{chapter.slides.label}</span>
              <span className="cr-slides-pulse" aria-hidden />
            </button>
            <div className="cr-slides-panel" aria-hidden={!slidesOpen}>
              <button className="cr-slides-close" onClick={() => setSlidesOpen(false)} aria-label="Fermer">×</button>
              <p className="cr-slides-eyebrow">{t.reader.chapterPrefix} {chapter.number}</p>
              <p className="cr-slides-title">{chapter.slides.label}</p>
              <p className="cr-slides-desc">{chapter.slides.description}</p>
              <button
                className="cr-slides-cta"
                onClick={openSlidesViewer}
              >
                {t.reader.slidesOpen}
              </button>
            </div>
          </div>

          {slidesViewer && (
            <div className="cr-viewer" role="dialog" aria-modal="true" aria-label="Diapositives">
              <div className="cr-viewer-bar">
                <span className="cr-viewer-title">
                  {chapter.slides.label}
                  {chapter.number ? ` — ${t.reader.chapterPrefix} ${chapter.number}` : ''}
                </span>
                <div className="cr-viewer-nav">
                  <button
                    className="cr-viewer-nav-btn"
                    onClick={() => setSlidePage(p => Math.max(1, p - 1))}
                    disabled={slidePage <= 1}
                    aria-label="Diapositive précédente"
                  >‹</button>
                  <span className="cr-viewer-nav-count">{slidePage} / {slideCount || '…'}</span>
                  <button
                    className="cr-viewer-nav-btn"
                    onClick={() => setSlidePage(p => Math.min(slideCount, p + 1))}
                    disabled={slidePage >= slideCount}
                    aria-label="Diapositive suivante"
                  >›</button>
                </div>
                <div className="cr-viewer-zoom">
                  <button
                    className="cr-viewer-nav-btn"
                    onClick={() => setSlideZoom(z => Math.max(0.5, +(z - 0.25).toFixed(2)))}
                    disabled={slideZoom <= 0.5}
                    aria-label="Dézoomer"
                  >−</button>
                  <button className="cr-viewer-zoom-reset" onClick={() => setSlideZoom(0.75)} title="Réinitialiser le zoom">
                    {Math.round(slideZoom * 100)}%
                  </button>
                  <button
                    className="cr-viewer-nav-btn"
                    onClick={() => setSlideZoom(z => Math.min(3, +(z + 0.25).toFixed(2)))}
                    disabled={slideZoom >= 3}
                    aria-label="Zoomer"
                  >+</button>
                </div>
                <button className="cr-viewer-close" onClick={closeSlidesViewer} aria-label="Fermer">×</button>
              </div>
              <div className="cr-viewer-body" ref={viewerBodyRef}>
                <PdfSlideViewer
                  file={chapter.slides.url}
                  pageNumber={slidePage}
                  width={(slideWidth || 800) * slideZoom}
                  onLoadSuccess={setSlideCount}
                />
              </div>
            </div>
          )}
        </>
      )}

      {(chapter.revisionSheet || chapter.clinicalCase) && (
        <div className="cr-resources">
          <p className="cr-resources-label">{t.reader.resources}</p>
          <div className="cr-resources-row">
            {chapter.revisionSheet && (
              <button
                type="button"
                className="cr-resource-card"
                onClick={() => openResource('revision_sheet', chapter.revisionSheet!)}
                aria-label={t.reader.revisionSheet}
              >
                <img src={chapter.revisionSheet.src} alt="" aria-hidden />
                <span className="cr-resource-name">{t.reader.revisionSheet}</span>
              </button>
            )}
            {chapter.clinicalCase && (
              <button
                type="button"
                className="cr-resource-card cr-resource-card--case"
                onClick={() => openResource('clinical_case', chapter.clinicalCase!)}
                aria-label={t.reader.clinicalCase}
              >
                <img src={chapter.clinicalCase.src} alt="" aria-hidden />
                <span className="cr-resource-name">{t.reader.clinicalCase}</span>
              </button>
            )}
          </div>
        </div>
      )}

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

function BlockView({ block, onOpenImage, anchorId }: { block: Block; onOpenImage: (b: { src: string; alt: string; caption: string }) => void; anchorId?: string }) {
  const { t } = useLanguage()
  // Shared position anchor (same id in the synchronized reader) so the
  // sync/classic switch can reopen the other version at the same passage.
  // Set directly on each block's root element — a wrapper div would break
  // margin collapsing and shift the public page's spacing.
  const anchor = anchorId ? { id: anchorId, 'data-pos-anchor': '' } : {}
  switch (block.type) {
    case 'para':
      return <p {...anchor} className="cr-p">{block.text}</p>
    case 'lead':
      return (
        <p {...anchor} className="cr-p cr-lead">
          <strong className="cr-lead-label">{block.label}{block.text ? ' —' : ''}</strong>
          {block.text ? ' ' + block.text : ''}
        </p>
      )
    case 'sub':
      return <h3 {...anchor} className="cr-h3">{block.text}</h3>
    case 'bullets':
      return (
        <ul {...anchor} className="cr-ul">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )
    case 'leadBullets':
      return (
        <ul {...anchor} className="cr-ul cr-ul-lead">
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
        <figure {...anchor} className={`cr-fig cr-fig-${block.orientation}`}>
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
    case 'xref':
      return (
        <p {...anchor} className="cr-xref">
          <Link href={block.href} className="cr-xref-link">
            <span className="cr-xref-kicker">{block.label}</span>
            {block.text && <span className="cr-xref-title">{block.text}</span>}
            <span className="cr-xref-arrow" aria-hidden>→</span>
          </Link>
        </p>
      )
    case 'rop':
      return (
        <aside {...anchor} className="cr-rop">
          <p className="cr-rop-title">{t.reader.ropTitle}</p>
          {block.body.map((p, i) => <p key={i} className="cr-rop-p">{p}</p>)}
        </aside>
      )
  }
}

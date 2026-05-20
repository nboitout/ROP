'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import type { Chapter, Block } from '@/content/types'
import BookNotifyForm from '@/components/BookNotifyForm'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

type Props = {
  chapter: Chapter
  bookTitle: string
}

export default function ChapterReader({ chapter, bookTitle }: Props) {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<string>(chapter.sections[0]?.id ?? '')
  const [tocOpen, setTocOpen] = useState(false)
  const [slidesOpen, setSlidesOpen] = useState(false)
  const [slidesViewer, setSlidesViewer] = useState(false)
  const [slideCount, setSlideCount] = useState<number>(0)
  const [slidePage, setSlidePage] = useState(1)
  const [slideWidth, setSlideWidth] = useState(800)
  const [slideZoom, setSlideZoom] = useState(1)
  const viewerBodyRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null)
  const articleRef = useRef<HTMLElement>(null)
  const peekCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onScroll() {
      const el = articleRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top
      const total = el.scrollHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-top, 0), total)
      setProgress(total > 0 ? scrolled / total : 0)

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
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chapter: chapter.slug, event: 'read_start' }),
          keepalive: true,
        }).catch(() => {})
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
    if (!lightbox) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setLightbox(null) }
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

  // Close slides viewer on Escape
  useEffect(() => {
    if (!slidesViewer) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setSlidesViewer(false) }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [slidesViewer])

  // Track viewer body width so the PDF page fills it exactly
  const onViewerBodyRef = useCallback((node: HTMLDivElement | null) => {
    (viewerBodyRef as React.MutableRefObject<HTMLDivElement | null>).current = node
    if (!node) return
    setSlideWidth(node.clientWidth)
    const ro = new ResizeObserver(() => setSlideWidth(node.clientWidth))
    ro.observe(node)
  }, [])

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
        <Link href="/chapitres-gratuits" className="cr-home">← Tous les chapitres</Link>
        <div className="cr-topbar-title">
          <span className="cr-chap">{chapter.number ? `Chapitre ${chapter.number}` : chapter.title}</span>
          <span className="cr-sep">·</span>
          <span className="cr-bookname">{bookTitle}</span>
        </div>
        <button className="cr-toc-toggle" onClick={() => setTocOpen((v) => !v)} aria-label="Sommaire">
          <span /><span /><span />
        </button>
      </div>

      <div className="cr-layout">
        <aside className={`cr-toc${tocOpen ? ' is-open' : ''}`}>
          <div className="cr-toc-inner">
            <p className="cr-toc-label">Sommaire</p>
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
          <div className="cr-hero">
            <p className="cr-hero-eyebrow">
              {chapter.number ? `Chapitre ${chapter.number} · ` : ''}Chapitre complet
            </p>
            <h1 className="cr-hero-title">{chapter.title}</h1>
            <p className="cr-hero-book"><em>{bookTitle}</em></p>
            <p className="cr-hero-author">Guy Boitout</p>
          </div>

          {chapter.sections.map((section) => (
            <section key={section.id} id={`sec-${section.id}`} data-section-id={section.id} className="cr-section">
              <h2 className="cr-h2">{section.title}</h2>
              {section.blocks.map((b, i) => (
                <BlockView key={i} block={b} onOpenImage={setLightbox} />
              ))}
            </section>
          ))}

          <div className="cr-end">
            <div className="cr-end-card">
              <p className="cr-end-eyebrow">
                {chapter.number ? `Fin du chapitre ${chapter.number}` : `Fin de l’${chapter.title.toLowerCase()}`}
              </p>
              <h3 className="cr-end-title">La méthode complète se poursuit dans le livre</h3>
              <p className="cr-end-book"><em>{bookTitle}</em></p>
              <p className="cr-end-body">
                {chapter.number
                  ? 'Ce chapitre est un extrait du troisième ouvrage de Guy Boitout sur la Réflexothérapie Occipito-Podale. Le livre complet est en préparation — laissez votre adresse pour être informé·e de sa parution.'
                  : 'Cette introduction ouvre le troisième ouvrage de Guy Boitout sur la Réflexothérapie Occipito-Podale. Le livre complet est en préparation — laissez votre adresse pour être informé·e de sa parution.'}
              </p>
              <BookNotifyForm />
            </div>
          </div>
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
              <p className="cr-slides-eyebrow">Chapitre {chapter.number}</p>
              <p className="cr-slides-title">{chapter.slides.label}</p>
              <p className="cr-slides-desc">{chapter.slides.description}</p>
              <button
                className="cr-slides-cta"
                onClick={() => { setSlidesOpen(false); setSlidesViewer(true) }}
              >
                Voir les diapositives →
              </button>
            </div>
          </div>

          {slidesViewer && (
            <div className="cr-viewer" role="dialog" aria-modal="true" aria-label="Diapositives">
              <div className="cr-viewer-bar">
                <span className="cr-viewer-title">
                  {chapter.slides.label}
                  {chapter.number ? ` — Chapitre ${chapter.number}` : ''}
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
                  <button className="cr-viewer-zoom-reset" onClick={() => setSlideZoom(1)} title="Réinitialiser le zoom">
                    {Math.round(slideZoom * 100)}%
                  </button>
                  <button
                    className="cr-viewer-nav-btn"
                    onClick={() => setSlideZoom(z => Math.min(3, +(z + 0.25).toFixed(2)))}
                    disabled={slideZoom >= 3}
                    aria-label="Zoomer"
                  >+</button>
                </div>
                <button className="cr-viewer-close" onClick={() => { setSlidesViewer(false); setSlidePage(1); setSlideZoom(1) }} aria-label="Fermer">×</button>
              </div>
              <div className="cr-viewer-body" ref={onViewerBodyRef}>
                <Document
                  file={chapter.slides.url}
                  onLoadSuccess={({ numPages }) => setSlideCount(numPages)}
                  loading={<div className="cr-viewer-loading">Chargement…</div>}
                  error={<div className="cr-viewer-loading">Impossible de charger les diapositives.</div>}
                >
                  <Page
                    pageNumber={slidePage}
                    width={(slideWidth || 800) * slideZoom}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
            </div>
          )}
        </>
      )}

      {chapter.revisionSheet && (
        <button
          type="button"
          className="cr-fiche"
          onClick={() => setLightbox(chapter.revisionSheet!)}
          aria-label="Ouvrir la fiche de révision"
        >
          <img src={chapter.revisionSheet.src} alt="" aria-hidden />
          <span className="cr-fiche-label">Fiche de révision</span>
        </button>
      )}

      {lightbox && (
        <div className="cr-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="cr-lightbox-close" aria-label="Fermer">×</button>
          <figure className="cr-lightbox-fig" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <figcaption>{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}

function BlockView({ block, onOpenImage }: { block: Block; onOpenImage: (b: { src: string; alt: string; caption: string }) => void }) {
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
        <figure className={`cr-fig cr-fig-${block.orientation}`}>
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
          <p className="cr-rop-title">Intérêt en ROP</p>
          {block.body.map((p, i) => <p key={i} className="cr-rop-p">{p}</p>)}
        </aside>
      )
  }
}

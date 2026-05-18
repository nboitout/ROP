'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { Chapter, Block } from '@/content/types'
import BookNotifyForm from '@/components/BookNotifyForm'

type Props = {
  chapter: Chapter
  bookTitle: string
}

export default function ChapterReader({ chapter, bookTitle }: Props) {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<string>(chapter.sections[0]?.id ?? '')
  const [tocOpen, setTocOpen] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null)
  const articleRef = useRef<HTMLElement>(null)

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
              {chapter.number ? `Chapitre ${chapter.number} · ` : ''}Extrait gratuit
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

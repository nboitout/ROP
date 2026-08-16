'use client'

import { useEffect, useState } from 'react'
import { getImageProps } from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'
import { getSessionId } from '@/lib/session'

// The gradient plate carries its labels inside the image and is French only for
// now. Same convention as the homepage showcase: drop a localized export in
// /assets/anatomie/<lang>/ and add the entry here to switch that locale over.
const figureFolders: Partial<Record<Lang, string>> = {}

const DESKTOP_FIGURE = {
  src: '/assets/Gradient -- version desktop.png',
  width: 1672,
  height: 941,
}
const MOBILE_FIGURE = {
  src: '/assets/Gradient -- version mobile.png',
  width: 1122,
  height: 1402,
}
const MOBILE_FIGURE_MEDIA = '(max-width: 640px)'

type ResponsiveFigureProps = {
  alt: string
  desktopSrc: string
  mobileSrc: string
  sizes: string
}

function ResponsiveFigure({ alt, desktopSrc, mobileSrc, sizes }: ResponsiveFigureProps) {
  const { props: desktop } = getImageProps({
    src: desktopSrc,
    alt,
    width: DESKTOP_FIGURE.width,
    height: DESKTOP_FIGURE.height,
    sizes,
    loading: 'lazy',
  })
  const { props: mobile } = getImageProps({
    src: mobileSrc,
    alt,
    width: MOBILE_FIGURE.width,
    height: MOBILE_FIGURE.height,
    sizes,
    loading: 'lazy',
  })

  return (
    <picture>
      <source media={MOBILE_FIGURE_MEDIA} srcSet={mobile.srcSet} sizes={mobile.sizes} />
      <img {...desktop} alt={alt} />
    </picture>
  )
}

/** Full argument, every bridge, the references — French only. */
export const FOUNDATIONS_HREF = '/fondements-neuro-anatomiques'

export default function AnatomyFoundation() {
  const { t, lang } = useLanguage()
  const a = t.anatomie
  const [zoomed, setZoomed] = useState(false)

  const figureFolder = figureFolders[lang]
  const desktopSrc = figureFolder
    ? `${figureFolder}/gradient-impact-visceral.webp`
    : DESKTOP_FIGURE.src
  const mobileSrc = figureFolder
    ? `${figureFolder}/gradient-impact-visceral.webp`
    : MOBILE_FIGURE.src

  useEffect(() => {
    if (!zoomed) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setZoomed(false) }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [zoomed])

  function track(cta: string) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: 'home', event: 'cta_click', data: { cta }, lang, sessionId: getSessionId() }),
      keepalive: true,
    }).catch(() => {})
  }

  return (
    <section id="anatomie" aria-labelledby="anatomie-title">
      <div className="anat-top">
        <div className="anat-head">
          <div className="lbl c">{a.lbl}</div>
          <h2 id="anatomie-title" className="on-dk">{a.h2.before}<em>{a.h2.em}</em>{a.h2.after}</h2>
          <p className="anat-intro">{a.p1}</p>
          <p className="anat-intro">{a.p2}</p>
          <Link
            href={FOUNDATIONS_HREF}
            className="btn b-gold anat-cta"
            onClick={() => track('anatomy_foundations_page')}
          >
            {a.cta}
          </Link>
        </div>

        <figure className="anat-fig">
          <button
            type="button"
            className="anat-fig-btn"
            onClick={() => setZoomed(true)}
            aria-label={`${a.figure.caption} — ${a.zoom}`}
          >
            <ResponsiveFigure
              alt={a.figure.alt}
              desktopSrc={desktopSrc}
              mobileSrc={mobileSrc}
              sizes="(max-width:640px) 92vw, (max-width:960px) 92vw, 620px"
            />
            <span className="anat-fig-zoom" aria-hidden>⌕</span>
          </button>
          <figcaption>{a.figure.caption}</figcaption>
        </figure>
      </div>

      {zoomed && (
        <div className="anat-lb" role="dialog" aria-modal="true" aria-label={a.figure.caption} onClick={() => setZoomed(false)}>
          <button type="button" className="anat-lb-close" onClick={() => setZoomed(false)} aria-label={a.close}>×</button>
          <figure className="anat-lb-fig" onClick={(e) => e.stopPropagation()}>
            <ResponsiveFigure
              alt={a.figure.alt}
              desktopSrc={desktopSrc}
              mobileSrc={mobileSrc}
              sizes="96vw"
            />
            <figcaption>{a.figure.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

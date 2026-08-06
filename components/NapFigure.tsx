'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Plates on /fondements-neuro-anatomiques carry their labels inside the image,
// so they have to open full screen — the page itself is a server component,
// hence this small client wrapper per figure.
//
// The overlay reuses the chapter reader's .cr-lightbox markup and CSS, zoom
// controls included: at 390px wide the plate only grows from 310px to 366px,
// which is not enough to read a dense figure, so panning and zooming is what
// actually makes the feature useful on a phone.

// Dimensions of the revised deck export.
const FIG_W = 1707
const FIG_H = 960
const MIN_ZOOM = 0.5
const MAX_ZOOM = 4
const STEP = 0.25

export default function NapFigure({ src, caption, alt }: { src: string; caption: string; alt: string }) {
  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  function close() {
    setOpen(false)
    setZoom(1)
  }

  return (
    <>
      <figure className="nap-fig">
        <button
          type="button"
          className="nap-fig-btn"
          onClick={() => setOpen(true)}
          aria-label={`${caption} — Cliquer pour agrandir`}
        >
          <Image src={src} alt={alt} width={FIG_W} height={FIG_H} sizes="(max-width:900px) 92vw, 860px" />
          <span className="nap-fig-zoom" aria-hidden>⌕</span>
        </button>
        <figcaption>{caption}</figcaption>
      </figure>

      {open && (
        <div className="cr-lightbox nap-lb" role="dialog" aria-modal="true" aria-label={caption} onClick={close}>
          <div className="cr-lightbox-bar" onClick={(e) => e.stopPropagation()}>
            <span className="cr-lightbox-caption">{caption}</span>
            <div className="cr-lightbox-controls">
              <div className="cr-lightbox-zoom-controls">
                <button
                  className="cr-viewer-nav-btn"
                  onClick={() => setZoom((z) => Math.max(MIN_ZOOM, +(z - STEP).toFixed(2)))}
                  disabled={zoom <= MIN_ZOOM}
                  aria-label="Dézoomer"
                >−</button>
                <button className="cr-viewer-zoom-reset" onClick={() => setZoom(1)} title="Réinitialiser le zoom">
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  className="cr-viewer-nav-btn"
                  onClick={() => setZoom((z) => Math.min(MAX_ZOOM, +(z + STEP).toFixed(2)))}
                  disabled={zoom >= MAX_ZOOM}
                  aria-label="Zoomer"
                >+</button>
              </div>
              <button className="cr-lightbox-close" onClick={close} aria-label="Fermer">×</button>
            </div>
          </div>
          <div className="cr-lightbox-scroll" onClick={close}>
            <figure className="cr-lightbox-fig" onClick={(e) => e.stopPropagation()}>
              <Image
                className="nap-lb-img"
                src={src}
                alt={alt}
                width={FIG_W}
                height={FIG_H}
                sizes="(max-width:900px) 92vw, 1200px"
                style={{ transform: `scale(${zoom})` }}
              />
              <figcaption>{caption}</figcaption>
            </figure>
          </div>
        </div>
      )}
    </>
  )
}

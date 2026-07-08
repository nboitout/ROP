'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const PdfSlideViewer = dynamic(() => import('@/components/PdfSlideViewer'), { ssr: false })

type Props = {
  title: string
  pdfUrl: string
  description?: string
  titleId?: string
}

const DEFAULT_DESCRIPTION =
  'Un support de lecture dédié pour parcourir les diapositives dans le même esprit que les decks de synthèse des chapitres.'

export default function ResearchDeckReader({
  title,
  pdfUrl,
  description = DEFAULT_DESCRIPTION,
  titleId = 'research-deck-title',
}: Props) {
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [zoom, setZoom] = useState(0.9)
  const [fitWidth, setFitWidth] = useState(820)
  const viewerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function measure() {
      if (!viewerRef.current) return
      const available = Math.max(280, viewerRef.current.clientWidth - 32)
      setFitWidth(Math.min(available, 980))
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  function handleLoadSuccess(numPages: number) {
    setPageCount(numPages)
    setPage((current) => Math.min(current, numPages))
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') setPage((current) => Math.min(pageCount || current, current + 1))
      if (event.key === 'ArrowLeft') setPage((current) => Math.max(1, current - 1))
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pageCount])

  return (
    <main className="md-root">
      <header className="md-topbar">
        <Link href="/admin/chapitres" className="md-back">Retour</Link>
        <div className="md-topbar-title">R.O.P. · Recherche</div>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="md-pdf-link">
          PDF
        </a>
      </header>

      <section className="md-hero" aria-labelledby={titleId}>
        <div className="md-hero-copy">
          <p className="md-eyebrow">Slide deck de recherche</p>
          <h1 id={titleId}>{title}</h1>
          <p className="md-subtitle">{description}</p>
        </div>
        <div className="md-meta" aria-label="Informations du support">
          <span>Guy Boitout</span>
          <span>{pageCount ? `${pageCount} diapositives` : 'Chargement'}</span>
        </div>
      </section>

      <section className="md-stage" aria-label="Lecteur de diapositives">
        <div className="md-stage-bar">
          <div className="md-stage-title">
            <span>Diapositive</span>
            <strong>{page} / {pageCount || '...'}</strong>
          </div>

          <div className="md-controls" aria-label="Navigation des diapositives">
            <button
              className="cr-viewer-nav-btn"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page <= 1}
              aria-label="Diapositive precedente"
            >
              ‹
            </button>
            <button
              className="cr-viewer-nav-btn"
              onClick={() => setPage((current) => Math.min(pageCount || current, current + 1))}
              disabled={!pageCount || page >= pageCount}
              aria-label="Diapositive suivante"
            >
              ›
            </button>
          </div>

          <div className="md-controls" aria-label="Zoom">
            <button
              className="cr-viewer-nav-btn"
              onClick={() => setZoom((current) => Math.max(0.55, +(current - 0.1).toFixed(2)))}
              disabled={zoom <= 0.55}
              aria-label="Dezoomer"
            >
              −
            </button>
            <button className="cr-viewer-zoom-reset" onClick={() => setZoom(0.9)} title="Reinitialiser le zoom">
              {Math.round(zoom * 100)}%
            </button>
            <button
              className="cr-viewer-nav-btn"
              onClick={() => setZoom((current) => Math.min(2.25, +(current + 0.1).toFixed(2)))}
              disabled={zoom >= 2.25}
              aria-label="Zoomer"
            >
              +
            </button>
          </div>
        </div>

        <div className="md-viewer-body" ref={viewerRef}>
          <PdfSlideViewer
            file={pdfUrl}
            pageNumber={page}
            width={fitWidth * zoom}
            onLoadSuccess={handleLoadSuccess}
          />
        </div>
      </section>
    </main>
  )
}

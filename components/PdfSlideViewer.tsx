'use client'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

type Props = {
  file: string
  pageNumber: number
  width: number
  onLoadSuccess: (numPages: number) => void
}

export default function PdfSlideViewer({ file, pageNumber, width, onLoadSuccess }: Props) {
  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => onLoadSuccess(numPages)}
      loading={<div className="cr-viewer-loading">Chargement…</div>}
      error={<div className="cr-viewer-loading">Impossible de charger les diapositives.</div>}
    >
      <Page
        pageNumber={pageNumber}
        width={width}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  )
}

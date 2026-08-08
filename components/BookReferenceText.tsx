import type { ReactNode } from 'react'

export const BOOK_REFERENCE_TITLE = 'Réflexothérapie occipito-podale et système neuro-méningé'
export const BOOK_REFERENCE_URL = 'https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-syst%C3%A8me-neuro-m%C3%A9ning%C3%A9-Boitout/dp/2294775791'

export function renderBookReferenceText(text: string): ReactNode {
  if (!text.includes(BOOK_REFERENCE_TITLE)) return text
  return text.split(BOOK_REFERENCE_TITLE).flatMap((part, index, parts) => [
    part,
    index < parts.length - 1 ? (
      <a key={`book-reference-${index}`} className="cr-book-reference" href={BOOK_REFERENCE_URL} target="_blank" rel="noopener noreferrer">
        {BOOK_REFERENCE_TITLE}
      </a>
    ) : null,
  ])
}

'use client'

import Link from 'next/link'
import type { CrossReference } from '@/content/types'
import type { Lang } from '@/app/i18n/translations'
import { readerXrefHref } from '@/lib/access'
import { applyLocalizedTypography } from '@/lib/frenchTypography'

type Props = {
  references?: CrossReference[]
  sourceChapterKey: string
  sourceAnchorId: string
  restrictPaidXrefs: boolean
  lang: Lang
}

export default function CrossReferenceLinks({
  references,
  sourceChapterKey,
  sourceAnchorId,
  restrictPaidXrefs,
  lang,
}: Props) {
  if (!references?.length) return null

  return references.map((reference, index) => (
    <p key={`${reference.href}-${index}`} className="cr-xref">
      <Link
        href={readerXrefHref(reference.href, sourceChapterKey, restrictPaidXrefs, sourceAnchorId, lang)}
        className="cr-xref-link"
      >
        <span className="cr-xref-kicker">{applyLocalizedTypography(reference.label, lang)}</span>
        {reference.text && <span className="cr-xref-title">{applyLocalizedTypography(reference.text, lang)}</span>}
        <span className="cr-xref-arrow" aria-hidden>→</span>
      </Link>
    </p>
  ))
}

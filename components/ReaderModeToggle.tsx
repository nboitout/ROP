'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'

// Segmented switch between the two reading experiences of a chapter:
// "Synchronisée" (text + pinned synthesis slides) and "Classique".
// Rendered in the reader top bar; the active side is the current page,
// so only the other side is a link.
//
// Both readers tag every content block with a shared stable id
// (data-pos-anchor). On switch, the block currently at the top of the
// reading area is encoded in the URL hash so the other version opens at
// the same passage instead of restarting from the beginning.
type Props = {
  mode: 'sync' | 'classic'
  // href of the *other* version, the one the switch navigates to
  otherHref: string
}

// The synchronized reader exists only in French and English.
const LABELS = {
  fr: { group: 'Mode de lecture', sync: 'Synchronisée', classic: 'Classique' },
  en: { group: 'Reading mode', sync: 'Synchronized', classic: 'Classic' },
}

function currentPositionHash(): string {
  // Last block whose top has passed the reading line (just under the top
  // bar) = the passage currently being read.
  const line = Math.min(140, window.innerHeight * 0.25)
  let id = ''
  document.querySelectorAll<HTMLElement>('[data-pos-anchor]').forEach((el) => {
    if (el.id && el.getBoundingClientRect().top <= line) id = el.id
  })
  return id ? `#${id}` : ''
}

export default function ReaderModeToggle({ mode, otherHref }: Props) {
  const { lang } = useLanguage()
  const l = lang === 'en' ? LABELS.en : LABELS.fr

  // Restore position on arrival: html{scroll-behavior:smooth} makes native
  // hash positioning animate from the top on load, so jump instantly instead.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])

  const opt = (m: 'sync' | 'classic', label: string) =>
    m === mode ? (
      <span className="ss-switch-opt is-active" aria-current="page">{label}</span>
    ) : (
      <a
        href={otherHref}
        className="ss-switch-opt"
        onClick={(e) => {
          e.preventDefault()
          window.location.assign(otherHref + currentPositionHash())
        }}
      >
        {label}
      </a>
    )

  return (
    <div className="ss-switch" role="group" aria-label={l.group}>
      {opt('sync', l.sync)}
      {opt('classic', l.classic)}
    </div>
  )
}


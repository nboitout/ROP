'use client'

// "Research" dropdown in the admin nav — groups the experimental / prototype
// links (3D foot prototype, chapter-14 reflex-zone atlas) that are not part of
// the production book.

import { useState, useRef, useEffect } from 'react'

type Item = { href: string; label: string }

const ITEMS: Item[] = [
  { href: '/prototype-pied', label: '3D Prototype →' },
  { href: '/prototype-chapitre-14', label: 'Interactive reflex zones →' },
  {
    href: '/assets/mitochondries-vitalite-energie.pdf',
    label: 'Mitochondries, vitalité et énergie →',
  },
]

export default function AdminResearchMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="adm-research" ref={ref}>
      <button
        type="button"
        className={`adm-nav-link adm-research-btn${open ? ' active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Research <span className="adm-research-caret" aria-hidden>▾</span>
      </button>
      {open && (
        <div className="adm-research-menu" role="menu">
          {ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="adm-research-item"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

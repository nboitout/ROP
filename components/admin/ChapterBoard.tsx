'use client'

import { useState } from 'react'

export type LangStatus = 'live' | 'fallback' | 'none'

export type BoardRow = {
  num: string
  title: string
  partId: string
  partTitle: string
  href: string | null
  free: boolean
  gated: boolean
  draft: boolean
  fr: LangStatus
  en: LangStatus
  de: LangStatus
  es: LangStatus
  it: LangStatus
}

type Part = { id: string; title: string }

const STATUS_LABEL: Record<LangStatus, string> = {
  live: 'Ouvrir',
  fallback: 'À traduire',
  none: '—',
}

function LangCell({ href, status }: { href: string | null; status: LangStatus }) {
  // `live` and `fallback` both open the chapter (fallback shows the FR text with
  // the reader's own fallback banner); `none` has no route yet.
  if (status === 'none' || !href) {
    return <span className="adm-chip none">{STATUS_LABEL.none}</span>
  }
  return (
    <a className={`adm-chip ${status}`} href={href} target="_blank" rel="noopener noreferrer">
      {STATUS_LABEL[status]} ↗
    </a>
  )
}

export default function ChapterBoard({ parts, rows }: { parts: Part[]; rows: BoardRow[] }) {
  const [active, setActive] = useState<string>('all')
  const visible = active === 'all' ? rows : rows.filter((r) => r.partId === active)

  return (
    <>
      <div className="adm-filter-row">
        <span className="adm-filter-label">Partie</span>
        <button
          className={`adm-filter-btn${active === 'all' ? ' active' : ''}`}
          onClick={() => setActive('all')}
        >
          Toutes
        </button>
        {parts.map((p) => (
          <button
            key={p.id}
            className={`adm-filter-btn${active === p.id ? ' active' : ''}`}
            onClick={() => setActive(p.id)}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="adm-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th style={{ width: 44 }}>#</th>
              <th>Chapitre</th>
              <th>Partie</th>
              <th style={{ width: 110 }}>FR</th>
              <th style={{ width: 110 }}>EN</th>
              <th style={{ width: 110 }}>DE</th>
              <th style={{ width: 110 }}>ES</th>
              <th style={{ width: 110 }}>IT</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.num}>
                <td className="adm-board-num">{r.num}</td>
                <td>
                  {r.title}
                  {r.free && <span className="adm-row-badge free">Accès libre</span>}
                  {r.gated && <span className="adm-row-badge paid">Payant</span>}
                  {r.draft && <span className="adm-row-badge draft">Brouillon</span>}
                </td>
                <td className="muted">{r.partTitle}</td>
                <td><LangCell href={r.href ? `${r.href}?lang=fr` : null} status={r.fr} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=en` : null} status={r.en} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=de` : null} status={r.de} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=es` : null} status={r.es} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=it` : null} status={r.it} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

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
  live: 'Open',
  fallback: 'Needs translation',
  none: '-',
}

function LangCell({ href, status }: { href: string | null; status: LangStatus }) {
  if (status === 'none' || !href) {
    return <span className="adm-chip none">{STATUS_LABEL.none}</span>
  }
  return (
    <a className={`adm-chip ${status}`} href={href} target="_blank" rel="noopener noreferrer">
      {STATUS_LABEL[status]} -&gt;
    </a>
  )
}

export default function ChapterBoard({ parts, rows }: { parts: Part[]; rows: BoardRow[] }) {
  const [active, setActive] = useState<string>('all')
  const visible = active === 'all' ? rows : rows.filter((r) => r.partId === active)

  return (
    <>
      <div className="adm-filter-row">
        <span className="adm-filter-label">Part</span>
        <button
          className={`adm-filter-btn${active === 'all' ? ' active' : ''}`}
          onClick={() => setActive('all')}
        >
          All
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
              <th>Chapter</th>
              <th>Part</th>
              <th style={{ width: 130 }}>FR</th>
              <th style={{ width: 130 }}>EN</th>
              <th style={{ width: 130 }}>DE</th>
              <th style={{ width: 130 }}>ES</th>
              <th style={{ width: 130 }}>IT</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.num}>
                <td className="adm-board-num">{r.num}</td>
                <td>
                  {r.title}
                  {r.free && <span className="adm-row-badge free">Free access</span>}
                  {r.gated && <span className="adm-row-badge paid">Paid</span>}
                  {r.draft && <span className="adm-row-badge draft">Draft</span>}
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

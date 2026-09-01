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
  frSourceModifiedAt: string | null
  enSourceModifiedAt: string | null
  deSourceModifiedAt: string | null
  esSourceModifiedAt: string | null
  itSourceModifiedAt: string | null
}

type Part = { id: string; title: string }

const STATUS_LABEL: Record<LangStatus, string> = {
  live: 'Open',
  fallback: 'Needs translation',
  none: '-',
}

function formatSourceModifiedAt(value: string): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  }).formatToParts(new Date(value))
  const byType = Object.fromEntries(parts.map(({ type, value: part }) => [type, part]))

  return `${byType.year}-${byType.month}-${byType.day} ${byType.hour}:${byType.minute}:${byType.second}`
}

function LangCell({ href, status, sourceModifiedAt }: { href: string | null; status: LangStatus; sourceModifiedAt: string | null }) {
  if (status === 'none' || !href) {
    return <span className="adm-chip none">{STATUS_LABEL.none}</span>
  }
  if (status === 'fallback') {
    return <span className="adm-chip fallback">{STATUS_LABEL.fallback}</span>
  }
  return (
    <div className="adm-version-cell">
      <a className={`adm-chip ${status}`} href={href} target="_blank" rel="noopener noreferrer">
        {STATUS_LABEL[status]} -&gt;
      </a>
      {sourceModifiedAt
        ? <span className="adm-version-date">{formatSourceModifiedAt(sourceModifiedAt)}</span>
        : <span className="adm-version-date adm-version-date-missing">No Word source</span>}
    </div>
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
                </td>
                <td className="muted">{r.partTitle}</td>
                <td><LangCell href={r.href ? `${r.href}?lang=fr` : null} status={r.fr} sourceModifiedAt={r.frSourceModifiedAt} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=en` : null} status={r.en} sourceModifiedAt={r.enSourceModifiedAt} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=de` : null} status={r.de} sourceModifiedAt={r.deSourceModifiedAt} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=es` : null} status={r.es} sourceModifiedAt={r.esSourceModifiedAt} /></td>
                <td><LangCell href={r.href ? `${r.href}?lang=it` : null} status={r.it} sourceModifiedAt={r.itSourceModifiedAt} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

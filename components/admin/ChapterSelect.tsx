'use client'

import { useRouter } from 'next/navigation'

interface Option {
  value: string
  label: string
}

export default function ChapterSelect({ options, selected }: { options: Option[]; selected: string }) {
  const router = useRouter()
  return (
    <select
      value={selected}
      onChange={(e) =>
        router.push(`/admin/parcours${e.target.value !== 'all' ? `?chapter=${e.target.value}` : ''}`)
      }
      style={{
        background: 'white',
        border: '1px solid var(--adm-i08)',
        borderRadius: 3,
        color: 'var(--adm-ink)',
        fontSize: '.8rem',
        fontFamily: 'DM Sans, sans-serif',
        padding: '5px 10px',
        cursor: 'pointer',
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

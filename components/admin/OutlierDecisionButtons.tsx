'use client'

import type { CSSProperties } from 'react'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

type Decision = 'auto' | 'keep' | 'exclude'

export function OutlierDecisionButtons(props: {
  visitDayKey: string
  readerId: string
  day: string
  decision: Decision
}) {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  async function applyDecision(decision: Decision) {
    setError('')
    const res = await fetch('/api/admin/visit-outlier', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: props.visitDayKey,
        readerId: props.readerId,
        day: props.day,
        decision,
      }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => null)
      setError(body?.error || 'Save failed')
      return
    }
    startTransition(() => {
      router.refresh()
    })
  }

  function buttonStyle(active: boolean) {
    return {
      border: '1px solid var(--adm-i08)',
      borderRadius: 3,
      padding: '2px 6px',
      background: active ? 'var(--adm-accent-soft)' : 'transparent',
      color: active ? 'var(--adm-ink)' : 'var(--adm-i05)',
      cursor: isPending ? 'wait' : 'pointer',
      fontSize: '.72rem',
      fontWeight: 600,
      opacity: isPending ? 0.7 : 1,
    } satisfies CSSProperties
  }

  return (
    <div style={{ display: 'grid', gap: 6 }}>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <button type="button" disabled={isPending} onClick={() => applyDecision('auto')} style={buttonStyle(props.decision === 'auto')}>
          Auto
        </button>
        <button type="button" disabled={isPending} onClick={() => applyDecision('keep')} style={buttonStyle(props.decision === 'keep')}>
          Keep
        </button>
        <button type="button" disabled={isPending} onClick={() => applyDecision('exclude')} style={buttonStyle(props.decision === 'exclude')}>
          Exclude
        </button>
      </div>
      {error ? (
        <span className="muted" style={{ color: '#9b3d20', fontSize: '.7rem' }}>
          {error}
        </span>
      ) : null}
    </div>
  )
}

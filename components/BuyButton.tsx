'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

type Props = {
  label: string
  className?: string
  style?: React.CSSProperties
  /** Optional analytics label forwarded to /api/track via the parent. */
  onStart?: () => void
}

// Kicks off Stripe Checkout: asks the server for a session URL, then sends the
// browser to Stripe's hosted page.
export default function BuyButton({ label, className, style, onStart }: Props) {
  const { lang } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleClick() {
    setError('')
    setLoading(true)
    onStart?.()
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, sessionId: getSessionId() }),
      })
      const data = (await res.json().catch(() => ({}))) as { url?: string }
      if (!res.ok || !data.url) throw new Error('checkout')
      window.location.href = data.url
    } catch {
      setError('Le paiement est momentanément indisponible. Réessayez dans un instant.')
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? '…' : label}
      </button>
      {error && (
        <p style={{ color: '#c0492f', fontSize: '.78rem', marginTop: 8 }}>{error}</p>
      )}
    </>
  )
}

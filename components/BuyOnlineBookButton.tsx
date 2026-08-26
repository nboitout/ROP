'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

/**
 * Buy button for the enriched online book.
 *
 * While NEXT_PUBLIC_PAYMENTS_ENABLED is not "true" the section keeps its
 * launch-waitlist link, so the whole checkout can ship dark and be switched on
 * the day the book is published.
 */
export default function BuyOnlineBookButton({
  className,
  label,
  source = 'home',
}: {
  className?: string
  label?: string
  source?: string
}) {
  const { t, lang } = useLanguage()
  const [pending, setPending] = useState(false)
  const [failed, setFailed] = useState(false)

  const enabled = process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === 'true'

  function track(cta: string) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: source, event: 'cta_click', data: { cta }, lang, sessionId: getSessionId() }),
      keepalive: true,
    }).catch(() => {})
  }

  if (!enabled) {
    return (
      <a href="#notify" className={className} onClick={() => track('pricing_notify')}>
        {t.pricing.plan1.cta}
      </a>
    )
  }

  async function startCheckout() {
    if (pending) return
    setPending(true)
    setFailed(false)

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chapter: source,
        event: 'checkout_start',
        data: { product: 'online_book' },
        lang,
        sessionId: getSessionId(),
      }),
      keepalive: true,
    }).catch(() => {})

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'online_book', lang }),
      })
      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.url) throw new Error('checkout unavailable')
      window.location.assign(data.url)
    } catch {
      setPending(false)
      setFailed(true)
    }
  }

  return (
    <>
      <button type="button" className={className} onClick={startCheckout} disabled={pending}>
        {pending ? t.checkout.starting : (label ?? t.checkout.buyCta)}
      </button>
      {failed && <p className="checkout-error">{t.checkout.error}</p>}
    </>
  )
}

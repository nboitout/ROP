'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

/**
 * Fires the purchase event the admin funnel (/admin/parcours) is already
 * waiting for. Guarded so a re-render or a page refresh does not double count.
 */
export default function CheckoutSuccessTracker({ sessionId }: { sessionId: string }) {
  const { lang } = useLanguage()
  const sent = useRef(false)

  useEffect(() => {
    if (sent.current) return
    sent.current = true

    const storageKey = `rop_purchase_tracked_${sessionId}`
    try {
      if (sessionStorage.getItem(storageKey)) return
      sessionStorage.setItem(storageKey, '1')
    } catch {
      // Private mode without storage: tracking once per page load is fine.
    }

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chapter: 'home',
        event: 'purchase_complete',
        data: { product: 'online_book' },
        lang,
        sessionId: getSessionId(),
      }),
      keepalive: true,
    }).catch(() => {})
  }, [lang, sessionId])

  return null
}

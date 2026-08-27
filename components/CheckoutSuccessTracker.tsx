'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { useCart } from '@/components/CartProvider'
import { getSessionId } from '@/lib/session'

/**
 * Closes the purchase: empties the cart, and — once the payment has actually
 * cleared — fires the event the admin funnel (/admin/parcours) is already
 * waiting for. Guarded so a re-render or a page refresh does not double count.
 *
 * The cart is emptied for a payment still being confirmed too: the order has
 * been placed either way. It is not emptied when leaving for Stripe, so a buyer
 * who abandons the payment page still finds their order waiting for them.
 */
export default function CheckoutSuccessTracker({ sessionId, paid }: { sessionId: string; paid: boolean }) {
  const { lang } = useLanguage()
  const { clear } = useCart()
  const sent = useRef(false)

  useEffect(() => {
    if (sent.current) return
    sent.current = true

    clear()
    if (!paid) return

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
  }, [clear, lang, paid, sessionId])

  return null
}

'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { localizedHref } from '@/app/i18n/locale'
import { useCart } from '@/components/CartProvider'
import { ONLINE_BOOK_PRODUCT } from '@/lib/access'
import { getSessionId } from '@/lib/session'

/**
 * Entry point of the purchase pipeline.
 *
 * Before launch (NEXT_PUBLIC_PAYMENTS_ENABLED ≠ "true") it stays the
 * "notify me on release" link it has always been, so the whole cart,
 * validation and checkout chain can ship dark and be switched on the day the
 * book is published. After launch the same button puts the online book in the
 * cart and takes the reader to /panier.
 */
export default function AddToCartButton({
  className,
  source = 'home',
  notifyHref = '#notify',
}: {
  className?: string
  source?: string
  /**
   * Where the pre-launch waitlist link points. The homepage keeps the in-page
   * anchor; every other page must send the reader to the homepage block, which
   * is the only place the notify form is rendered.
   */
  notifyHref?: string
}) {
  const { t, lang } = useLanguage()
  const { lines, add } = useCart()
  const router = useRouter()

  const enabled = process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === 'true'
  const inCart = lines.some((line) => line.product === ONLINE_BOOK_PRODUCT)

  function track(cta: string, event = 'cta_click') {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chapter: source,
        event,
        data: { cta, product: ONLINE_BOOK_PRODUCT },
        lang,
        sessionId: getSessionId(),
      }),
      keepalive: true,
    }).catch(() => {})
  }

  if (!enabled) {
    const href = notifyHref.startsWith('/') ? localizedHref(notifyHref, lang) : notifyHref
    return (
      <a href={href} className={className} onClick={() => track('pricing_notify')}>
        {t.pricing.plan1.cta}
      </a>
    )
  }

  function goToCart() {
    if (!inCart) {
      add(ONLINE_BOOK_PRODUCT)
      track('add_to_cart', 'add_to_cart')
    } else {
      track('view_cart')
    }
    router.push(localizedHref('/panier', lang))
  }

  return (
    <button type="button" className={className} onClick={goToCart}>
      {inCart ? t.cart.viewCta : t.cart.addCta}
    </button>
  )
}

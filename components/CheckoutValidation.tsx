'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { localizedHref } from '@/app/i18n/locale'
import { useCart } from '@/components/CartProvider'
import { formatAmount, priceCart } from '@/lib/cart'
import { getSessionId } from '@/lib/session'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Step 2 of the pipeline: the last screen on this site.
 *
 * It collects the two things Stripe's hosted page cannot decide for us — the
 * address the access link must reach, and the express consent to immediate
 * delivery — then hands the cart to /api/checkout, which rebuilds it from the
 * catalogue and returns the Stripe URL.
 */
export default function CheckoutValidation() {
  const { t, lang } = useLanguage()
  const { lines, ready } = useCart()
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const cart = priceCart(lines)
  const c = t.cart
  const v = c.validation

  if (!ready) return <p className="cart-loading">{c.loading}</p>

  if (cart.lines.length === 0) {
    return (
      <div className="cart-empty">
        <p className="cart-empty-title">{v.emptyTitle}</p>
        <p className="cart-empty-body">{v.emptyBody}</p>
        <div className="buy-actions">
          <Link href={localizedHref('/#acheter', lang)} className="btn b-gold">{c.empty.cta}</Link>
        </div>
      </div>
    )
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (pending) return

    const address = email.trim()
    if (!EMAIL_PATTERN.test(address)) {
      setError(v.emailInvalid)
      return
    }
    if (!terms) {
      setError(v.termsRequired)
      return
    }

    setError(null)
    setPending(true)

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chapter: 'panier',
        event: 'checkout_start',
        data: { product: cart.lines.map((line) => line.product).join(',') },
        lang,
        sessionId: getSessionId(),
      }),
      keepalive: true,
    }).catch(() => {})

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: lines,
          email: address,
          acceptTerms: true,
          lang,
        }),
      })
      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.url) throw new Error('checkout unavailable')
      // The cart is cleared on /merci, not here: a buyer who abandons Stripe
      // and comes back must still find their order waiting.
      window.location.assign(data.url)
    } catch {
      setPending(false)
      setError(v.error)
    }
  }

  return (
    <form className="cart-validation" onSubmit={submit} noValidate>
      <section className="cart-recap">
        <h2 className="cart-recap-title">{v.recap}</h2>
        <ul className="cart-lines">
          {cart.lines.map((line) => {
            const product = c.products[line.product as keyof typeof c.products]
            return (
              <li className="cart-line" key={line.product}>
                <div className="cart-line-main">
                  <p className="cart-line-name">{product.name}</p>
                  <p className="cart-line-desc">{product.desc}</p>
                </div>
                <div className="cart-line-side">
                  <p className="cart-line-price">{formatAmount(line.lineTotal, line.currency, lang)}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <dl className="cart-totals">
          <div className="cart-total-row cart-total-row-grand">
            <dt>{v.total}</dt>
            <dd>{formatAmount(cart.subtotal, cart.currency, lang)}</dd>
          </div>
          <p className="cart-vat">{c.vat}</p>
        </dl>
      </section>

      <section className="cart-fields">
        <label className="cart-field-label" htmlFor="checkout-email">{v.emailLabel}</label>
        <input
          id="checkout-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          placeholder={v.emailPlaceholder}
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(null) }}
          aria-invalid={error === v.emailInvalid}
          required
        />
        <p className="cart-field-help">{v.emailHelp}</p>

        <label className="cart-terms">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => { setTerms(e.target.checked); setError(null) }}
            aria-invalid={error === v.termsRequired}
          />
          <span>{v.terms}</span>
        </label>
      </section>

      {error && <p className="cart-error" role="alert">{error}</p>}

      <div className="buy-actions">
        <button type="submit" className="btn b-gold" disabled={pending}>
          {pending ? v.paying : v.pay}
        </button>
        <Link href={localizedHref('/panier', lang)} className="btn b-out">{v.back}</Link>
      </div>

      <p className="cart-secure">{c.secure}</p>
    </form>
  )
}

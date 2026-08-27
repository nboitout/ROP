'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { localizedHref } from '@/app/i18n/locale'
import { useCart } from '@/components/CartProvider'
import { formatAmount, priceCart } from '@/lib/cart'

/**
 * Step 1 of the pipeline: what the reader is about to buy, with a way out of
 * every line, before any personal detail is asked for.
 */
export default function CartView() {
  const { t, lang } = useLanguage()
  const { lines, ready, remove } = useCart()
  const cart = priceCart(lines)
  const c = t.cart

  // The stored cart is only known after mount; showing "empty" before that
  // would flash the wrong page at every buyer who has something in it.
  if (!ready) return <p className="cart-loading">{c.loading}</p>

  if (cart.lines.length === 0) {
    return (
      <div className="cart-empty">
        <p className="cart-empty-title">{c.empty.title}</p>
        <p className="cart-empty-body">{c.empty.body}</p>
        <div className="buy-actions">
          <Link href={localizedHref('/#acheter', lang)} className="btn b-gold">{c.empty.cta}</Link>
          <Link href={localizedHref('/chapitres-gratuits', lang)} className="btn b-out">{c.empty.free}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-body">
      <ul className="cart-lines">
        {cart.lines.map((line) => {
          const product = c.products[line.product as keyof typeof c.products]
          return (
            <li className="cart-line" key={line.product}>
              <div className="cart-line-main">
                <p className="cart-line-name">{product.name}</p>
                <p className="cart-line-desc">{product.desc}</p>
                <p className="cart-line-note">{c.licenceNote}</p>
              </div>
              <div className="cart-line-side">
                <p className="cart-line-price">{formatAmount(line.lineTotal, line.currency, lang)}</p>
                <button
                  type="button"
                  className="cart-line-remove"
                  onClick={() => remove(line.product)}
                  aria-label={c.removeLabel(product.name)}
                >
                  {c.remove}
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <dl className="cart-totals">
        <div className="cart-total-row">
          <dt>{c.subtotal}</dt>
          <dd>{formatAmount(cart.subtotal, cart.currency, lang)}</dd>
        </div>
        <div className="cart-total-row cart-total-row-grand">
          <dt>{c.total}</dt>
          <dd>{formatAmount(cart.subtotal, cart.currency, lang)}</dd>
        </div>
        <p className="cart-vat">{c.vat}</p>
      </dl>

      <div className="buy-actions">
        <Link href={localizedHref('/panier/validation', lang)} className="btn b-gold">{c.checkoutCta}</Link>
        <Link href={localizedHref('/#acheter', lang)} className="btn b-out">{c.continue}</Link>
      </div>

      <p className="cart-secure">{c.secure}</p>
    </div>
  )
}

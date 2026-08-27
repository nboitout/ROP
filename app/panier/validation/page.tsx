import type { Metadata } from 'next'
import Link from 'next/link'
import CartSteps from '@/components/CartSteps'
import CheckoutValidation from '@/components/CheckoutValidation'
import { getServerLang } from '@/app/i18n/serverLang'
import { localizedHref } from '@/app/i18n/locale'
import { translations } from '@/app/i18n/translations'
import { cookies } from 'next/headers'
import { paymentsOpenFor } from '@/lib/payments'

export const metadata: Metadata = {
  title: 'Validation de la commande · R.O.P. · Guy Boitout',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function ValidationPage() {
  const lang = await getServerLang()
  const t = translations[lang]
  const c = t.cart
  const v = c.validation
  const onSale = await paymentsOpenFor(await cookies())

  return (
    <div className="cg-root buy-root">
      <div className="cg-topbar">
        <Link href={localizedHref('/panier', lang)} className="cg-home">← {c.title}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">{v.eyebrow}</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="buy-main">
        <section className="buy-panel cart-panel">
          <p className="buy-eyebrow">{v.eyebrow}</p>
          <h1>{v.title}</h1>
          <p className="buy-lead">{v.lead}</p>

          {onSale ? (
            <>
              <CartSteps lang={lang} active="validation" />
              <CheckoutValidation />
            </>
          ) : (
            <div className="cart-empty">
              <p className="cart-empty-title">{c.notYetOnSale.title}</p>
              <p className="cart-empty-body">{c.notYetOnSale.body}</p>
              <div className="buy-actions">
                <Link href={localizedHref('/#acheter', lang)} className="btn b-gold">{c.empty.cta}</Link>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

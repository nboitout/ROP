import type { Metadata } from 'next'
import Link from 'next/link'
import BookNotifyForm from '@/components/BookNotifyForm'
import CartSteps from '@/components/CartSteps'
import CartView from '@/components/CartView'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { paymentsEnabled } from '@/lib/payments'

export const metadata: Metadata = {
  title: 'Panier · R.O.P. · Guy Boitout',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function PanierPage() {
  const lang = await getServerLang()
  const t = translations[lang]
  const c = t.cart
  const onSale = paymentsEnabled()

  return (
    <div className="cg-root buy-root">
      <div className="cg-topbar">
        <Link href="/" className="cg-home">← {t.checkout.success.home}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">{c.eyebrow}</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="buy-main">
        <section className="buy-panel cart-panel">
          <p className="buy-eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>

          {onSale ? (
            <>
              <CartSteps lang={lang} active="cart" />
              <CartView />
            </>
          ) : (
            <div className="cart-empty">
              <p className="cart-empty-title">{c.notYetOnSale.title}</p>
              <p className="cart-empty-body">{c.notYetOnSale.body}</p>
              <BookNotifyForm labels={t.pricing.notify.form} source="book-notify-panier" />
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

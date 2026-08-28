import type { Metadata } from 'next'
import Link from 'next/link'
import AccessLinkForm from '@/components/AccessLinkForm'
import CheckoutSuccessTracker from '@/components/CheckoutSuccessTracker'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { cookies } from 'next/headers'
import { paymentsOpenFor } from '@/lib/payments'
import { getStripe } from '@/lib/stripe'

export const metadata: Metadata = {
  title: 'Merci · R.O.P. · Guy Boitout',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

type PageState = 'paid' | 'pending' | 'invalid-link' | 'no-access' | 'error'

/**
 * Landing page after Stripe Checkout, and the place every failed access link
 * lands too — so a reader always sees an explanation plus a way to recover.
 */
export default async function MerciPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; state?: string }>
}) {
  const { session_id: sessionId, state: stateParam } = await searchParams
  const lang = await getServerLang()
  const t = translations[lang]

  let state: PageState = 'pending'
  // Stripe emails the invoice PDF on its own, but only in live mode and only
  // once the invoice has finalised. Surfacing the hosted invoice here gives the
  // buyer a copy immediately, and gives a preview reviewer something to check
  // at all — no customer email is ever sent from a sandbox.
  let invoiceUrl: string | null = null
  if (stateParam === 'invalid-link' || stateParam === 'no-access' || stateParam === 'error') {
    state = stateParam
  } else if (sessionId && (await paymentsOpenFor(await cookies()))) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId, { expand: ['invoice'] })
      state = session.payment_status === 'paid' ? 'paid' : 'pending'
      const invoice = session.invoice
      // A string means Stripe returned the id alone; null means the invoice is
      // not finalised yet. Either way there is nothing to link to.
      if (invoice && typeof invoice !== 'string') invoiceUrl = invoice.hosted_invoice_url ?? null
    } catch (error) {
      console.error('[merci] could not read the checkout session:', error)
      state = 'error'
    }
  }

  const copy = t.checkout.success
  const message: Record<PageState, string> = {
    paid: copy.body,
    pending: copy.pending,
    'invalid-link': copy.invalidLink,
    'no-access': copy.noAccess,
    error: copy.unknown,
  }

  return (
    <div className="cg-root buy-root">
      {sessionId && (state === 'paid' || state === 'pending') && (
        <CheckoutSuccessTracker sessionId={sessionId} paid={state === 'paid'} />
      )}

      <div className="cg-topbar">
        <Link href="/" className="cg-home">← {copy.home}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">{copy.eyebrow}</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="buy-main">
        <section className="buy-panel">
          <p className="buy-eyebrow">{copy.eyebrow}</p>
          <h1>{state === 'paid' ? copy.title : copy.titleFallback}</h1>
          <p className="buy-lead">{message[state]}</p>

          <div className="buy-actions">
            {state === 'paid' && sessionId && (
              <a href={`/api/auth/from-checkout?session_id=${encodeURIComponent(sessionId)}`} className="btn b-gold">
                {copy.open}
              </a>
            )}
            {invoiceUrl && (
              <a href={invoiceUrl} className="btn b-out" target="_blank" rel="noopener noreferrer">
                {copy.invoice}
              </a>
            )}
            <Link href="/chapitres-gratuits" className="btn b-out">{copy.freeChapters}</Link>
          </div>

          <AccessLinkForm />
        </section>
      </main>
    </div>
  )
}

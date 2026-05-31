import { NextRequest, NextResponse, after } from 'next/server'
import { verifyWebhookSignature } from '@/lib/stripe'
import { recordPurchase } from '@/lib/purchases'
import { signToken, MAGIC_LINK_TTL } from '@/lib/auth'
import { sendMagicLinkEmail, sendPurchaseReceiptEmail } from '@/lib/email'

export const maxDuration = 30
// Stripe needs the raw, unparsed body to verify the signature.
export const dynamic = 'force-dynamic'

interface CheckoutSessionCompleted {
  id: string
  customer_email: string | null
  customer_details: { email: string | null } | null
  amount_total: number | null
  currency: string | null
  metadata: { readerId?: string; sessionId?: string } | null
}

function baseUrl(req: NextRequest): string {
  return process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || req.nextUrl.origin
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!verifyWebhookSignature(rawBody, signature)) {
    console.warn('[stripe-webhook] invalid signature')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  let event: { type: string; data: { object: CheckoutSessionCompleted } }
  try {
    event = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Bad JSON' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const s = event.data.object
    const email = (s.customer_details?.email || s.customer_email || '').trim().toLowerCase()

    if (!email) {
      console.error('[stripe-webhook] completed session has no email:', s.id)
      // Acknowledge anyway so Stripe doesn't retry indefinitely.
      return NextResponse.json({ received: true })
    }

    const readerId = s.metadata?.readerId ?? ''
    const sessionId = s.metadata?.sessionId ?? ''
    const currency = (s.currency ?? 'eur').toUpperCase()
    const amount = (s.amount_total ?? 0) / 100
    const amountLabel = `${amount.toFixed(2)} ${currency}`
    const link = `${baseUrl(req)}/api/access/verify?token=${encodeURIComponent(
      signToken({ email, readerId, purpose: 'magic-link' }, MAGIC_LINK_TTL),
    )}`

    // Persist + email after responding, so Stripe gets a fast 200.
    after(async () => {
      await recordPurchase({
        email,
        readerId,
        sessionId,
        amount,
        currency,
        stripeSessionId: s.id,
      })
      try {
        await sendMagicLinkEmail(email, link)
        await sendPurchaseReceiptEmail(email, amountLabel)
      } catch (err) {
        console.error('[stripe-webhook] email send failed:', err)
      }
    })
  }

  return NextResponse.json({ received: true })
}

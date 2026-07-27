# Payment module — the online book

Sells one product: the enriched **online book** (€70). The printed edition is
published by Elsevier-Masson, so its pricing card keeps its "notify me at
launch" link and no shipping or fulfilment logic exists here.

Checkout is **Stripe-hosted**: the buyer leaves for `checkout.stripe.com` and
comes back to `/merci`. No card data and no Stripe.js touch this site, which is
why the CSP in `next.config.ts` needs no stripe.com origins.

## Flow

```
pricing card                 → POST /api/checkout          → Stripe Checkout
Stripe redirect back         → /merci?session_id=…         → "open the book"
                                                              ↓
Stripe webhook (truth)       → POST /api/stripe/webhook    → GET /api/auth/from-checkout
  · records customer + order                                  · same fulfilment
  · grants the entitlement                                    · sets the session cookie
  · emails a magic link                                       · opens /lecture/chapitre-1
                                    ↓
magic link (any device)      → GET /api/auth/verify?token= → session cookie → book
lost the link                → POST /api/auth/request-link → new magic link
```

Both fulfilment paths run the same idempotent `lib/fulfillment.ts`, so paying
and clicking "open the book" before the webhook lands cannot double-grant or
double-charge anything.

## Access control

`paid_access` is a signed token (`v1.<payload>.<HMAC-SHA256>`, `lib/authSession.ts`),
not a flag. `canReadPaidChapter()` verifies the signature, the expiry and that
the session actually names `online_book` — it is async because verification
uses Web Crypto, which is what lets the same code run in `proxy.ts` middleware
(Edge) and in server components (Node).

`tests/access.test.mts` locks this down: forged values, tampered payloads,
foreign signatures, expired tokens, wrong product, and a missing `AUTH_SECRET`
must all fail closed. Run with `npm test`.

Refunds: `charge.refunded` marks the order refunded and revokes the
entitlement. The reader's existing cookie stays valid until it expires — revoke
is enforced the next time a magic link is issued. Cutting live sessions off
immediately would mean a database read on every chapter view; say the word if
that trade is worth it.

## Configuration

| Variable | Purpose |
|---|---|
| `STRIPE_SECRET_KEY` | Server-side Stripe key (`sk_test_…` / `sk_live_…`) |
| `STRIPE_WEBHOOK_SECRET` | Signing secret of the webhook endpoint (`whsec_…`) |
| `STRIPE_PRICE_ONLINE_BOOK` | Price id of the online book (`price_…`) — the amount lives in Stripe, never in the request |
| `NEXT_PUBLIC_PAYMENTS_ENABLED` | Master switch. Anything but `"true"` keeps the waitlist link and makes `/api/checkout` answer 503 |
| `AUTH_SECRET` | HMAC secret for reader sessions and magic links |
| `DATABASE_URL` | Neon Postgres — customers, orders, entitlements, tokens |
| `RESEND_API_KEY`, `EMAIL_FROM` | Delivery of the access email. Without the key the link is logged to the server console instead |
| `NEXT_PUBLIC_SITE_URL` | Base URL for `success_url`, `cancel_url` and the magic links |

`NEXT_PUBLIC_PAYMENTS_ENABLED` is inlined at build time — flipping it on Vercel
requires a redeploy.

## Setting it up

1. **Database** — `npm run db:init-payments` (idempotent, applies `db/payments.sql`).
2. **Stripe product** — create a product "Livre en ligne" with a €70 recurring-free
   one-off price. Prices are **tax-inclusive**: the French display price is TTC.
   Copy the price id into `STRIPE_PRICE_ONLINE_BOOK`.
3. **Stripe Tax** — enable it in the dashboard (Settings → Tax) and register the
   EU VAT obligations that apply; `automatic_tax` is already switched on for the
   session, and digital goods are taxed in the buyer's country.
4. **Webhook** — add an endpoint at `https://<site>/api/stripe/webhook` subscribed to
   `checkout.session.completed`, `checkout.session.async_payment_succeeded` and
   `charge.refunded`. Copy its signing secret into `STRIPE_WEBHOOK_SECRET`.
5. **Email** — verify the sending domain in Resend and set `EMAIL_FROM`.
6. **Go live** — set `NEXT_PUBLIC_PAYMENTS_ENABLED=true` and redeploy.

## Testing before launch

With test-mode keys:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook   # prints whsec_…
npm run dev
```

Buy with card `4242 4242 4242 4242`, any future expiry and CVC. Check that:

- the order and the entitlement land in Postgres,
- the access email arrives (or the link appears in the console without a Resend key),
- the link opens chapter 1 and survives a browser restart,
- a second click on the same link is refused (single use),
- `stripe trigger charge.refunded` revokes the entitlement.

## Analytics

`checkout_start` fires from the buy button and `purchase_complete` from `/merci`,
which are the events `/admin/parcours` already charts in its funnel.

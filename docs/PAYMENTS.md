# Payment module — the online book

Sells one product: the enriched **online book** (€70). The printed edition is
published by Elsevier-Masson, so its pricing card keeps its "notify me at
launch" link and no shipping or fulfilment logic exists here.

Checkout is **Stripe-hosted**: the buyer leaves for `checkout.stripe.com` and
comes back to `/merci`. No card data and no Stripe.js touch this site, which is
why the CSP in `next.config.ts` needs no stripe.com origins.

## Flow

```
"add to cart"                → /panier                     → the cart
  (pricing card, hero,          · line, price, VAT note       (localStorage,
   chapter end, /acheter-livre) · remove                       survives reloads
                                                               and other tabs)
                                    ↓
validation                   → /panier/validation          → POST /api/checkout
  · order recap                                              · rebuilds the cart
  · email the link is sent to                                  from the catalogue
  · express consent to immediate delivery                    · refuses without consent
                                    ↓
Stripe Checkout              → checkout.stripe.com         → card payment
Stripe redirect back         → /merci?session_id=…         → "open the book"
                                                              (and the cart is emptied)
                                                              ↓
Stripe webhook (truth)       → POST /api/stripe/webhook    → GET /api/auth/from-checkout
  · records customer + order                                  · same fulfilment
  · grants the entitlement                                    · sets the session cookie
  · emails a magic link                                       · opens /lecture/chapitre-1
                                    ↓
magic link (any device)      → GET /api/auth/verify?token= → session cookie → book
lost the link                → POST /api/auth/request-link → new magic link
```

Before launch every "add to cart" button is instead the "notify me on release"
link it has always been, and `/panier` shows the waitlist form: the whole chain
ships dark behind `NEXT_PUBLIC_PAYMENTS_ENABLED` and comes alive on the day the
book is published.

## The cart

`lib/cart.ts` holds the whole model and both sides use it — the browser to build
the cart, `/api/checkout` to rebuild it from the request. Nothing the client
says about prices is read: lines are matched against the catalogue in
`lib/payments.ts` and Stripe charges the Price id, so a hand-crafted request can
only ever buy the catalogue at the catalogue's price. Unknown products are
dropped, and a line caps at one unit because a reading licence is per person.

The cart lives in `localStorage` under `rop_cart_v1` — no server round-trip, no
cart table, and it survives a reload, a language switch and a trip to Stripe
that the buyer abandons. It is emptied on `/merci`, once the payment is
confirmed, and never before.

`/panier/validation` collects the two things Stripe's hosted page cannot decide
for us: the address the access link must reach (prefilled into Checkout as
`customer_email`), and the express consent to immediate delivery of digital
content that waives the 14-day withdrawal period. `/api/checkout` refuses to
create a session without that consent and stamps `termsAcceptedAt` into the
session metadata as the record that it was given.

`tests/cart.test.mts` locks the rules down: forged quantities, unknown products,
tampered amounts and junk payloads must all fail closed. Run with `npm test`.

> **Still to write:** the terms of sale the validation checkbox refers to. The
> waiver wording is on the checkbox itself, which is what the law requires, but
> there is no `/cgv` page yet for it to link to.

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
| `NEXT_PUBLIC_PAYMENTS_ENABLED` | Master switch. Anything but `"true"` keeps the waitlist link, shows the waitlist form on `/panier`, and makes `/api/checkout` answer 503 |
| `STRIPE_AUTOMATIC_TAX` | `"true"` turns on Stripe Tax. Leave it off until the dashboard has an origin address and your VAT registrations, otherwise Stripe refuses the session |
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
3. **Stripe Tax** (can wait) — first tests work with `STRIPE_AUTOMATIC_TAX=false`.
   To turn VAT on, set the origin address and the registrations in the dashboard
   (Settings → Tax), then set `STRIPE_AUTOMATIC_TAX=true`. France applies a
   reduced VAT rate to books including digital ones — confirm the rate and
   whether the association is liable at all with your accountant before
   switching it on.
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

Add the book to the cart, check that it is still there after a reload, then
validate the order and buy with card `4242 4242 4242 4242`, any future expiry
and CVC. Check that:

- the validation step refuses an invalid address and an unticked consent box,
- the cart is still there after cancelling on Stripe, and empty after paying,
- the order and the entitlement land in Postgres,
- the access email arrives (or the link appears in the console without a Resend key),
- the link opens chapter 1 and survives a browser restart,
- a second click on the same link is refused (single use),
- `stripe trigger charge.refunded` revokes the entitlement.

## Analytics

`add_to_cart` fires from every add-to-cart button, `checkout_start` from the
pay button on the validation step, and `purchase_complete` from `/merci` —
`checkout_start` and `purchase_complete` are the events `/admin/parcours`
already charts in its funnel.

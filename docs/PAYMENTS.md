# Payment module — the online book

Sells one product: the enriched **online book** (€70). The printed edition is
published by Elsevier-Masson, so its pricing card keeps its "notify me at
launch" link and no shipping or fulfilment logic exists here.

Checkout is **Stripe-hosted**: the buyer leaves for `checkout.stripe.com` and
comes back to `/merci`. No card data and no Stripe.js touch this site, which is
why the CSP in `next.config.ts` needs no stripe.com origins.

**Stripe is the source of truth.** There is no customers/orders/entitlements
database: Stripe already records every payment and every refund, so ownership is
asked of it. A Google Sheet mirrors the sales for the author to read, and
nothing reads that sheet back.

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
Stripe webhook               → POST /api/stripe/webhook    → GET /api/auth/from-checkout
  · mirrors the sale to Sheets                                 · same fulfilment
  · emails the access link                                     · sets the session cookie
                                                               · opens /lecture/chapitre-1
                                    ↓
access link (any device)     → GET /api/auth/verify?token= → session cookie → book
                                 · re-asks Stripe what this address owns
lost the link                → POST /api/auth/request-link → a new one, 30 min
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

## Previewing the sales path before launch

`/apercu-ventes` opens the whole purchase path — cart, validation, Stripe, the
access email, the book — for one browser, while every other visitor still sees
the waitlist form. It is how the team reviews the shop on the deployed site
instead of on someone's laptop.

The grant is a signed token (`lib/salesPreview.ts`) issued by
`POST /api/sales-preview` against `SALES_PREVIEW_PASSWORD`, stored in the
`sales_preview` cookie for 30 days. It reuses the reader-session machinery, so
forging one needs `AUTH_SECRET` — a hand-set `sales_preview=1` opens nothing.
It names `sales_preview` rather than a product, so it can never be turned into
book access. An admin session opens the preview too.

`paymentsEnabled()` is now three functions:

| Function | Question it answers |
|---|---|
| `paymentsConfigured()` | Are the Stripe keys, price id and `AUTH_SECRET` all present? |
| `paymentsEnabled()` | Has the shop launched for everyone? (the `NEXT_PUBLIC_` flag) |
| `paymentsOpenFor(cookies)` | Is the shop open to *this visitor*? — what every page and route in the purchase path asks |

Because the decision is now per-visitor, the buy button can no longer read
`NEXT_PUBLIC_PAYMENTS_ENABLED` (inlined at build time, identical for everyone):
the root layout resolves it from the request and passes it down through
`SalesModeProvider`.

While the preview is on, a bar is pinned to the foot of every page naming the
test card, so a test payment is never mistaken for a real one.

The preview refuses to open the shop until everything a purchase needs is
present — not just the Stripe keys, but `DATABASE_URL` and `RESEND_API_KEY`
too. Fulfilment writes the customer, the order and the entitlement, then emails
the access link; without those two a payment succeeds and the reader never gets
the book. The banner names whatever is missing, and checks the shape as well as
the presence: a bare amount where a `price_…` id belongs, or the publishable key
in place of the secret one, are caught here rather than at Stripe.

**Set test-mode Stripe keys while previewing.** The preview uses whatever keys
the deployment has; with live keys a reviewer's card is really charged. And a
test purchase is a real purchase everywhere else: it writes a customer, an
order and an entitlement, and sends a real email. Clear those rows before
opening the shop.

Preview clicks are marked as internal traffic, so they stay out of the
`/admin/parcours` funnel.

## Where the truth lives

`lib/entitlements.ts` answers "what does this address own?" by asking Stripe:
every customer with that email, every paid Checkout Session of theirs, minus
anything refunded. `metadata.product` — stamped on the session at checkout — is
matched against our own catalogue, so a session for something we no longer sell
unlocks nothing.

Because `customer_creation: 'always'` makes one Stripe customer per *purchase*
rather than per person, a repeat buyer has several; all of them are searched.

This runs at three moments only: issuing an access link, verifying one, and
completing a purchase. **Reading a chapter never gets here** — that is decided
by the signed cookie alone, so the book stays readable even if Stripe is
unreachable.

Refunds need no revocation. `lib/entitlements.ts` drops refunded sessions, so
the refund itself ends the entitlement. The reader's existing cookie stays valid
until it expires; the next link they ask for will not open the book.

## Access links

`paid_access` is a signed token (`v1.<payload>.<HMAC-SHA256>`, `lib/authSession.ts`),
not a flag. `canReadPaidChapter()` verifies the signature, the expiry and that
the session actually names `online_book` — it is async because verification uses
Web Crypto, which is what lets the same code run in `proxy.ts` middleware (Edge)
and in server components (Node).

The emailed link is a second signed token (`lib/accessLink.ts`) carrying only the
address. **It is short-lived rather than single-use**: the old `auth_tokens` row
was consumed with an atomic `update … where used_at is null`, and without a
database that atomicity is not available. Rather than pretend, the link lives
**7 days** and is replayable inside that window — `ACCESS_LINK_TTL_SECONDS` is
the one constant, and the email's wording is derived from it so the two cannot
drift apart. Losing a link costs nothing; the reader asks for another.

A link that never expired would be a permanent, shareable key to the paid book,
revocable only by rotating `AUTH_SECRET` — which signs out every reader at once.
That is a product decision, not a default; the tests refuse a lifetime beyond a
month so it cannot become one by drift.

Clicking the link is not what has to happen within 7 days — it is what starts
the **year-long** reader session on that device. The window is only for the
link itself.

Entitlement is re-derived from Stripe when a link is used, so a link minted
before a refund stops working the moment the refund lands.

`tests/access.test.mts` and `tests/entitlements.test.mts` lock this down: forged
values, tampered payloads, foreign signatures, expired tokens, wrong product, a
missing `AUTH_SECRET`, refunded and partially-refunded payments, and an access
link pasted into the `paid_access` cookie must all fail closed. Run with
`npm test`.

## The sales mirror

`lib/salesLog.ts` appends one row per order to the same Apps Script endpoint
that already receives leads and events (`APPS_SCRIPT_URL`), as `type: "order"`:

| Field | Example |
|---|---|
| `type` | `order` |
| `timestamp` | `2026-08-28T09:12:44.031Z` |
| `sessionId` | `cs_test_b1RKnL…` |
| `email` | `reader@example.com` |
| `product` | `online_book` |
| `amount` | `70.00` (euros, not cents — people read this) |
| `currency` | `EUR` |
| `status` | `paid` / `refunded` |
| `lang`, `readerId`, `termsAcceptedAt` | context for reconciliation |

The Apps Script needs a branch for `type === 'order'` writing to an "Orders"
sheet; without one the rows are simply dropped and the payment still succeeds.

Appending never throws and never blocks: a mirror that fails must not turn a
completed payment into an error page. If a row goes missing, reconcile from the
Stripe dashboard — it, not the sheet, is the record.

Webhook retries need no idempotency table. Fulfilment grants nothing that can be
granted twice, so a retry costs at most a duplicate row and a second copy of the
same email.

## Configuration

| Variable | Purpose |
|---|---|
| `STRIPE_SECRET_KEY` | Server-side Stripe key (`sk_test_…` / `sk_live_…`) |
| `STRIPE_WEBHOOK_SECRET` | Signing secret of the webhook endpoint (`whsec_…`) |
| `STRIPE_PRICE_ONLINE_BOOK` | Price id of the online book (`price_…`) — the amount lives in Stripe, never in the request |
| `NEXT_PUBLIC_PAYMENTS_ENABLED` | Master switch. Anything but `"true"` keeps the waitlist link, shows the waitlist form on `/panier`, and makes `/api/checkout` answer 503 — except for a browser holding a sales-preview grant |
| `SALES_PREVIEW_PASSWORD` | Password for `/apercu-ventes`. Falls back to `ADMIN_PASSWORD`; set it to share the walkthrough without the admin dashboard |
| `NEXT_PUBLIC_SITE_URL` | Base URL for `success_url`, `cancel_url` and magic links. On Vercel it is derived from the deployment when unset, so it never falls back to localhost there |
| `STRIPE_AUTOMATIC_TAX` | `"true"` turns on Stripe Tax. Leave it off until the dashboard has an origin address and your VAT registrations, otherwise Stripe refuses the session |
| `AUTH_SECRET` | HMAC secret for reader sessions and magic links |
| `APPS_SCRIPT_URL` | Google Apps Script endpoint for the sales mirror. Optional: without it sales are not logged, but purchases still work |
| `RESEND_API_KEY` | Resend key. Without it the access link is logged to the server console instead of sent |
| `EMAIL_FROM` | Sending identity, e.g. `Institut R.O.P. <contact@guy-boitout.com>`. Its domain must be verified in Resend; defaults to `contact@guy-boitout.com`. `onboarding@resend.dev` needs no verification but only ever delivers to the Resend account owner |
| `EMAIL_REPLY_TO` | Optional. A mailbox someone actually reads, for buyers who hit reply — the `EMAIL_FROM` domain can be verified for sending without any mailbox existing behind it |

`NEXT_PUBLIC_PAYMENTS_ENABLED` is inlined at build time — flipping it on Vercel
requires a redeploy.

## Setting it up

1. **Sheets** — add a `type === 'order'` branch to the Apps Script (row shape
   above). Nothing else to provision: there is no database to create.
2. **Stripe product** — create a product "Livre en ligne" with a €70 recurring-free
   one-off price. Prices are **tax-inclusive**: the French display price is TTC.
   Copy the price id into `STRIPE_PRICE_ONLINE_BOOK`.
3. **Stripe Tax** (can wait) — the association is not VAT-liable today, so the
   €70 carries no VAT and `STRIPE_AUTOMATIC_TAX=false` is the correct setting,
   not merely a temporary one. Two things would change that: the association
   becoming liable in France, or cross-border EU sales of the digital book
   growing past the €10,000 distance-selling threshold, at which point VAT is
   due in the buyer's country. Revisit with the accountant if either happens.
   First tests work with `STRIPE_AUTOMATIC_TAX=false`.
   To turn VAT on, set the origin address and the registrations in the dashboard
   (Settings → Tax), then set `STRIPE_AUTOMATIC_TAX=true`. France applies a
   reduced VAT rate to books including digital ones — confirm the rate and
   whether the association is liable at all with your accountant before
   switching it on.
4. **Webhook** — add an endpoint at `https://<site>/api/stripe/webhook` subscribed to
   `checkout.session.completed`, `checkout.session.async_payment_succeeded` and
   `charge.refunded`. Copy its signing secret into `STRIPE_WEBHOOK_SECRET`.
5. **Email** — verify the sending domain in Resend and set `EMAIL_FROM`, plus
   `EMAIL_REPLY_TO` if the from-address is not a mailbox anyone reads.
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
- the order row lands in the Orders sheet,
- the access email arrives (or the link appears in the console without a Resend key),
- the link opens chapter 1 and survives a browser restart,
- the link still works on a second click within 30 minutes, and not after,
- `stripe trigger charge.refunded` makes the next requested link refuse access.

## Analytics

`add_to_cart` fires from every add-to-cart button, `checkout_start` from the
pay button on the validation step, and `purchase_complete` from `/merci` —
`checkout_start` and `purchase_complete` are the events `/admin/parcours`
already charts in its funnel.

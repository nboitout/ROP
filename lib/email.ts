// ---------------------------------------------------------------------------
// Transactional email via Resend (HTTP API, no SDK — matches the codebase's
// hand-rolled fetch style). RESEND_API_KEY and RESEND_FROM come from env.
// ---------------------------------------------------------------------------

const BOOK_TITLE =
  'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

async function sendEmail(opts: {
  to: string
  subject: string
  html: string
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM
  if (!apiKey || !from) {
    console.warn('[email] RESEND_API_KEY / RESEND_FROM not set — skipping send')
    return
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to: [opts.to], subject: opts.subject, html: opts.html }),
  })

  if (!res.ok) {
    const err = await res.text().catch(() => '')
    throw new Error(`Resend send failed (${res.status}): ${err.slice(0, 300)}`)
  }
}

function layout(inner: string): string {
  return `<div style="font-family:Georgia,'Times New Roman',serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#2a2622;line-height:1.6">
    ${inner}
    <hr style="border:none;border-top:1px solid #e6ddd0;margin:28px 0" />
    <p style="font-size:12px;color:#8a8178;margin:0">
      ${BOOK_TITLE}<br/>Guy Boitout · Institut R.O.P.
    </p>
  </div>`
}

/** Email sent right after purchase, and on every returning-buyer access request. */
export async function sendMagicLinkEmail(to: string, link: string): Promise<void> {
  await sendEmail({
    to,
    subject: 'Votre accès au livre en ligne — R.O.P.',
    html: layout(`
      <h1 style="font-size:22px;font-weight:normal;margin:0 0 16px">Votre accès au livre en ligne</h1>
      <p>Bonjour,</p>
      <p>Cliquez sur le bouton ci-dessous pour ouvrir votre accès au livre en ligne. Aucun mot de passe n'est nécessaire.</p>
      <p style="margin:28px 0">
        <a href="${link}" style="background:#b8924a;color:#fff;text-decoration:none;padding:13px 26px;border-radius:4px;display:inline-block">Accéder au livre</a>
      </p>
      <p style="font-size:13px;color:#8a8178">Ce lien est valable 30 minutes. S'il a expiré, vous pouvez en redemander un depuis la page d'accès du site.</p>
    `),
  })
}

/** Optional purchase confirmation / receipt. */
export async function sendPurchaseReceiptEmail(
  to: string,
  amountLabel: string,
): Promise<void> {
  await sendEmail({
    to,
    subject: 'Confirmation de votre commande — R.O.P.',
    html: layout(`
      <h1 style="font-size:22px;font-weight:normal;margin:0 0 16px">Merci pour votre commande</h1>
      <p>Nous confirmons votre achat du livre en ligne pour <strong>${amountLabel}</strong>.</p>
      <p>Vous recevez par ailleurs un e-mail séparé contenant votre lien d'accès. Votre achat inclut tous les chapitres déjà publiés et ceux à venir.</p>
    `),
  })
}

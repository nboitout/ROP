// Transactional email through the Resend REST API (no SDK — one fetch call).
//
// With no RESEND_API_KEY the message is logged instead of sent, which keeps
// local development and preview deployments usable: the magic link shows up in
// the server console.

import { ACCESS_LINK_TTL_DAYS } from '@/lib/accessLink'

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

export type SendEmailInput = {
  to: string
  subject: string
  html: string
  text: string
}

export async function sendEmail({ to, subject, html, text }: SendEmailInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.EMAIL_FROM?.trim() || 'Guy Boitout <contact@guy-boitout.com>'

  if (!apiKey) {
    console.warn(`[email] RESEND_API_KEY is not set — would have sent "${subject}" to ${to}:\n${text}`)
    return false
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: [to], subject, html, text }),
    })

    if (!response.ok) {
      console.error('[email] send failed:', response.status, (await response.text()).slice(0, 300))
      return false
    }
    return true
  } catch (error) {
    console.error('[email] send threw:', error)
    return false
  }
}

// The validity stated here is derived from the token's own lifetime rather
// than written out, because the two drifted apart once already: the copy still
// promised seven days after the link had been cut to thirty minutes.
const ACCESS_EMAIL_COPY = {
  fr: {
    subject: 'Votre accès au livre en ligne — R.O.P.',
    heading: 'Votre accès au livre en ligne',
    body: (days: number) =>
      `Merci pour votre achat. Ce lien ouvre le livre complet et reste valable ${days} jours ; il fonctionne sur l’appareil de votre choix.`,
    cta: 'Ouvrir le livre',
    footer: 'Vous pourrez redemander un lien à tout moment depuis le site, avec cette même adresse e-mail.',
  },
  en: {
    subject: 'Your online book access — R.O.P.',
    heading: 'Your online book access',
    body: (days: number) =>
      `Thank you for your purchase. This link opens the complete book and stays valid for ${days} days; it works on any device.`,
    cta: 'Open the book',
    footer: 'You can request a new link at any time from the site, using this same email address.',
  },
} as const

/** Exported so the copy can be checked against the real token lifetime in tests. */
export function accessLinkEmailContent(url: string, lang = 'fr') {
  const copy = lang === 'fr' ? ACCESS_EMAIL_COPY.fr : ACCESS_EMAIL_COPY.en
  const body = copy.body(ACCESS_LINK_TTL_DAYS)
  return { subject: copy.subject, heading: copy.heading, body, cta: copy.cta, footer: copy.footer }
}

export async function sendAccessLinkEmail(to: string, url: string, lang = 'fr'): Promise<boolean> {
  const copy = accessLinkEmailContent(url, lang)

  const text = `${copy.heading}\n\n${copy.body}\n\n${url}\n\n${copy.footer}`
  const html = `
    <div style="font-family:Georgia,'Times New Roman',serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#1a1a18">
      <h1 style="font-size:22px;font-weight:400;color:#4a6b5a;margin:0 0 18px">${copy.heading}</h1>
      <p style="font-size:15px;line-height:1.6;color:#54524c;margin:0 0 24px">${copy.body}</p>
      <p style="margin:0 0 28px">
        <a href="${url}" style="display:inline-block;background:#4a6b5a;color:#f5f0e8;text-decoration:none;padding:13px 26px;border-radius:3px;font-family:Arial,sans-serif;font-size:14px;letter-spacing:.04em">${copy.cta}</a>
      </p>
      <p style="font-size:13px;line-height:1.6;color:#8a877f;margin:0">${copy.footer}</p>
    </div>
  `.trim()

  return sendEmail({ to, subject: copy.subject, html, text })
}

// Who is selling, in the words that have to appear on an invoice.
//
// French invoicing rules ask for the seller's legal name, form, address and
// registration numbers, plus a statement about VAT. Stripe renders all of that
// from the invoice footer, so this module is what the footer is built from —
// and it is deliberately the same identity the terms of sale state in Article 2
// (app/cgv/page.tsx). If one changes, change both.

/**
 * The mention that stands in for a VAT line when there is no VAT to charge.
 *
 * The association is not VAT-liable today. Which statute grants that — the
 * franchise en base of art. 293 B du CGI, or the exemption for an association's
 * non-lucrative activities under art. 261, 7-1° — decides the exact wording an
 * invoice must carry, and that is the accountant's call. The neutral statement
 * below is true under either, and citing the wrong article would be worse than
 * citing none. Replace it with the cited form once the regime is confirmed.
 */
export const VAT_MENTION = 'TVA non applicable — le vendeur n’est pas assujetti à la taxe sur la valeur ajoutée.'

const IDENTITY = [
  'Association Française de Réflexologie — association déclarée régie par la loi du 1er juillet 1901',
  '17 rue du Coq, 45600 Sully-sur-Loire, France',
  'SIREN 428 736 342 — SIRET 428 736 342 00026 — RNA W452017552 — APE 85.59A',
]

/**
 * The block Stripe prints at the foot of every invoice PDF and hosted invoice
 * page. Stripe accepts newlines here and renders them as written.
 */
export function invoiceFooter(siteUrl: string): string {
  return [...IDENTITY, VAT_MENTION, `Conditions générales de vente : ${siteUrl}/cgv`].join('\n')
}

/** The memo above the line items: what the buyer actually bought. */
export const INVOICE_MEMO =
  'Accès personnel et non transmissible au livre en ligne « Réflexothérapie occipito-podale ' +
  'et viscères des cavités abdominale et pelvienne ».'

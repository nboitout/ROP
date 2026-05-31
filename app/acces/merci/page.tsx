import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Merci pour votre achat · R.O.P. · Guy Boitout',
  description: 'Votre commande est confirmée. Votre lien d’accès au livre en ligne vous est envoyé par e-mail.',
  robots: { index: false, follow: false },
}

// Stripe redirects here after a successful payment. Access itself is granted by
// the magic link emailed from the webhook, so this page just sets expectations.
export default function MerciPage() {
  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href="/" className="cg-home">← Accueil</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">Commande confirmée</span>
        </div>
      </div>

      <main className="cg-main">
        <div className="cg-hero">
          <h1 className="cg-hero-title">Merci pour votre achat</h1>
          <p className="cg-hero-body">
            Votre paiement a bien été reçu. Nous venons de vous envoyer un e-mail contenant
            votre <strong>lien d&rsquo;accès</strong> au livre en ligne — il vous suffit de cliquer dessus,
            aucun mot de passe n&rsquo;est nécessaire.
          </p>
        </div>

        <div className="cg-foot">
          <p>
            L&rsquo;e-mail n&rsquo;arrive pas&nbsp;? Vérifiez vos spams, ou{' '}
            <Link href="/acces">redemandez votre lien</Link>.
          </p>
        </div>
      </main>
    </div>
  )
}

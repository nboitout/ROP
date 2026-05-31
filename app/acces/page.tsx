import type { Metadata } from 'next'
import Link from 'next/link'
import AccessRequestForm from '@/components/AccessRequestForm'

export const metadata: Metadata = {
  title: 'Accès au livre en ligne · R.O.P. · Guy Boitout',
  description: 'Retrouvez votre accès au livre en ligne à partir de votre adresse e-mail d’achat.',
  robots: { index: false, follow: false },
}

export default async function AccesPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>
}) {
  const { error, from } = await searchParams

  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href="/" className="cg-home">← Accueil</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">Accès au livre en ligne</span>
        </div>
      </div>

      <main className="cg-main">
        <div className="cg-hero">
          <h1 className="cg-hero-title">Accéder au livre en ligne</h1>
          {from === 'gate' ? (
            <p className="cg-hero-body">
              Ce chapitre fait partie du livre en ligne. Si vous l&rsquo;avez déjà acheté,
              entrez votre adresse ci-dessous pour recevoir votre lien d&rsquo;accès.
            </p>
          ) : (
            <p className="cg-hero-body">
              Vous avez déjà acheté le livre en ligne&nbsp;? Entrez l&rsquo;adresse e-mail utilisée
              lors de l&rsquo;achat pour recevoir un lien d&rsquo;accès — aucun mot de passe.
            </p>
          )}
        </div>

        {error === 'expired' && (
          <p className="ferror-banner on" style={{ maxWidth: 460, margin: '0 auto 18px' }}>
            Votre lien a expiré ou n&rsquo;est plus valide. Demandez-en un nouveau ci-dessous.
          </p>
        )}

        <div className="cr-end" style={{ marginTop: 8, paddingTop: 0, borderTop: 'none' }}>
          <div className="cr-end-card">
            <AccessRequestForm />
          </div>
        </div>

        <div className="cg-foot">
          <p>
            Pas encore le livre&nbsp;? <Link href="/#acheter">Découvrir l&rsquo;offre</Link>.
          </p>
        </div>
      </main>
    </div>
  )
}

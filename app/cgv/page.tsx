import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerLang } from '@/app/i18n/serverLang'
import { localizedHref } from '@/app/i18n/locale'
import { translations } from '@/app/i18n/translations'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Conditions générales de vente · R.O.P. · Guy Boitout',
  description:
    'Conditions générales de vente du livre en ligne « Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne ».',
  alternates: { canonical: `${SITE_URL}/cgv` },
}

/** Last substantive revision. Shown to the reader and archived with each order. */
const VERSION_DATE = '27 août 2026'

/**
 * A field only the seller can fill in — company identity, mediator, contact.
 * Rendered loud on purpose: these must not reach production unnoticed, and a
 * CGV naming the wrong legal entity is worse than no CGV at all.
 */
function Todo({ children }: { children: React.ReactNode }) {
  return <mark className="legal-todo">{children}</mark>
}

export default async function CgvPage() {
  const lang = await getServerLang()
  const t = translations[lang]

  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href={localizedHref('/', lang)} className="cg-home">← {t.checkout.success.home}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">Conditions générales de vente</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="legal-main">
        {/* A <div>, not a <header>: globals.css styles the `header` element as
            the site's fixed navigation bar. */}
        <div className="legal-header">
          <p className="legal-eyebrow">Document contractuel</p>
          <h1>Conditions générales de vente</h1>
          <p className="legal-updated">Version en vigueur au {VERSION_DATE}</p>
        </div>

        {lang !== 'fr' && (
          <p className="legal-lang-note">
            These terms of sale are published in French. The French text is the only
            contractually binding version.
          </p>
        )}

        <article className="legal-article">
          <section>
            <h2>Article 1 — Objet et champ d’application</h2>
            <p>
              Les présentes conditions générales de vente (les « CGV ») régissent la vente du
              livre en ligne « Réflexothérapie occipito-podale et viscères des cavités abdominale
              et pelvienne » (le « Livre en ligne ») proposé sur le site {SITE_URL} (le « Site »)
              par le Vendeur identifié à l’article 2, à tout acheteur agissant en qualité de
              consommateur au sens du code de la consommation (le « Client »).
            </p>
            <p>
              Toute commande passée sur le Site suppose l’acceptation préalable et expresse des
              présentes CGV, recueillie par une case à cocher lors de la validation de la
              commande. Les CGV applicables sont celles en vigueur à la date de la commande ;
              leur version est archivée avec celle-ci.
            </p>
            <p>
              Le Livre en ligne est le seul produit vendu sur le Site. L’édition imprimée de
              l’ouvrage n’est pas commercialisée ici.
            </p>
          </section>

          <section>
            <h2>Article 2 — Identité du Vendeur</h2>
            <ul className="legal-identity">
              <li>Dénomination sociale : <Todo>à compléter — dénomination exacte de l’entité qui encaisse</Todo></li>
              <li>Forme juridique : <Todo>à compléter — association loi 1901, EI, SASU…</Todo></li>
              <li>Siège social : <Todo>à compléter — adresse postale complète</Todo></li>
              <li>Numéro SIRET : <Todo>à compléter</Todo></li>
              <li>Numéro de TVA intracommunautaire : <Todo>à compléter, ou mention « non assujetti à la TVA »</Todo></li>
              <li>Numéro d’inscription au RCS ou au RNA : <Todo>à compléter</Todo></li>
              <li>Directeur de la publication : <Todo>à compléter</Todo></li>
              <li>Adresse électronique de contact : <Todo>à compléter</Todo></li>
              <li>Téléphone : <Todo>à compléter</Todo></li>
              <li>Hébergeur du Site : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
            </ul>
          </section>

          <section>
            <h2>Article 3 — Nature du produit vendu</h2>
            <p>
              Le Livre en ligne est un <strong>contenu numérique fourni sans support matériel</strong>,
              consultable en ligne depuis le Site. Aucun fichier n’est téléchargé, envoyé ni remis
              au Client.
            </p>
            <p>
              La commande confère au Client un <strong>droit d’accès personnel, non exclusif et non
              transmissible</strong> au Livre en ligne, à des fins strictement personnelles. Ce droit
              n’emporte aucune cession de droit de propriété intellectuelle et ne constitue pas
              la vente d’un exemplaire.
            </p>
            <p>
              L’accès est ouvert pour une durée indéterminée à compter du paiement, sous réserve
              de l’article 11. Le Vendeur s’engage à maintenir le Livre en ligne accessible
              pendant une durée minimale de <Todo>à compléter — durée d’engagement, par exemple 3 ans</Todo>
              {' '}à compter de la commande.
            </p>
          </section>

          <section>
            <h2>Article 4 — Prix</h2>
            <p>
              Le prix du Livre en ligne est de <strong>70 € toutes taxes comprises</strong>. Il est
              indiqué en euros et affiché toutes taxes comprises sur la page de commande, dans le
              panier et sur la page de validation de la commande.
            </p>
            <p>
              Conformément à la loi n° 2011-590 du 26 mai 2011 relative au prix du livre numérique,
              ce prix est le prix de vente au public fixé par l’éditeur et s’impose à toute
              personne proposant le Livre en ligne à un acheteur situé en France.
            </p>
            <p>
              Le taux de taxe sur la valeur ajoutée applicable est de <Todo>à compléter après
              confirmation par l’expert-comptable — taux applicable au livre numérique</Todo>. Pour
              les Clients établis dans un autre État membre de l’Union européenne, la taxe
              applicable est celle de leur pays de résidence, déterminée lors du paiement.
            </p>
            <p>
              Aucun frais de livraison n’est applicable, le Livre en ligne étant consulté en ligne.
            </p>
          </section>

          <section>
            <h2>Article 5 — Commande</h2>
            <p>La commande est passée selon les étapes suivantes :</p>
            <ol>
              <li>ajout du Livre en ligne au panier ;</li>
              <li>
                accès au panier, permettant au Client de vérifier le détail de sa commande, son
                prix total et, le cas échéant, d’en corriger le contenu ;
              </li>
              <li>
                validation de la commande : le Client saisit son adresse électronique, prend
                connaissance des présentes CGV et les accepte, et exprime son consentement à
                l’exécution immédiate du contrat dans les conditions de l’article 8 ;
              </li>
              <li>redirection vers la page de paiement sécurisé et règlement du prix ;</li>
              <li>
                confirmation de la commande, adressée au Client par courrier électronique à
                l’adresse qu’il a indiquée.
              </li>
            </ol>
            <p>
              Le Client est invité à vérifier l’exactitude de son adresse électronique : c’est à
              cette adresse que lui est envoyé son lien d’accès au Livre en ligne.
            </p>
            <p>
              La vente n’est définitive qu’après encaissement effectif du prix. Le Vendeur se
              réserve le droit de refuser toute commande présentant un caractère anormal, formée
              de mauvaise foi ou pour tout autre motif légitime.
            </p>
          </section>

          <section>
            <h2>Article 6 — Paiement</h2>
            <p>
              Le paiement s’effectue par carte bancaire, en une seule fois, au moment de la
              commande, sur une page de paiement hébergée par le prestataire Stripe Payments
              Europe, Ltd. Les données de carte bancaire sont saisies directement auprès de
              Stripe : elles ne transitent pas par le Site et ne sont ni collectées ni conservées
              par le Vendeur.
            </p>
            <p>
              Les moyens de paiement acceptés sont ceux proposés par Stripe sur la page de
              paiement au moment de la commande.
            </p>
          </section>

          <section>
            <h2>Article 7 — Mise à disposition de l’accès</h2>
            <p>
              L’accès au Livre en ligne est ouvert immédiatement après confirmation du paiement.
            </p>
            <p>
              Un courrier électronique contenant un lien d’accès personnel est envoyé à l’adresse
              indiquée par le Client. Ce lien est à usage unique et valable sept (7) jours ; il
              ouvre une session de lecture sur l’appareil depuis lequel il est utilisé. Le Client
              peut demander à tout moment un nouveau lien depuis le Site, à la même adresse
              électronique, notamment pour lire depuis un autre appareil.
            </p>
            <p>
              Le lien d’accès et la session de lecture sont strictement personnels. Le Client
              s’interdit de les communiquer, de les partager ou d’en permettre l’usage par un
              tiers.
            </p>
            <p>
              La lecture nécessite une connexion internet et un navigateur récent. Le Vendeur ne
              garantit pas le fonctionnement du Site sur des configurations obsolètes ou
              inhabituelles.
            </p>
          </section>

          <section className="legal-highlight">
            <h2>Article 8 — Droit de rétractation et renonciation expresse</h2>
            <p>
              Le Client dispose en principe d’un délai de quatorze (14) jours pour exercer son
              droit de rétractation, conformément à l’article L. 221-18 du code de la consommation.
            </p>
            <p>
              Toutefois, en application du <strong>13° de l’article L. 221-28</strong> du même code,
              ce droit ne peut être exercé pour les contrats de fourniture d’un contenu numérique
              non fourni sur un support matériel dont l’exécution a commencé après accord préalable
              exprès du Client et renoncement exprès de sa part à son droit de rétractation.
            </p>
            <p>
              En cochant la case prévue à cet effet lors de la validation de sa commande, le Client :
            </p>
            <ul>
              <li>
                <strong>demande expressément</strong> que l’exécution du contrat commence
                immédiatement, avant l’expiration du délai de rétractation ; et
              </li>
              <li>
                <strong>reconnaît expressément</strong> qu’il perdra son droit de rétractation dès
                que le contrat aura été pleinement exécuté, c’est-à-dire dès l’ouverture de son
                accès au Livre en ligne.
              </li>
            </ul>
            <p>
              La date et l’heure de ce consentement sont enregistrées et conservées par le Vendeur
              à titre de preuve.
            </p>
            <p>
              Le Client qui ne souhaite pas renoncer à son droit de rétractation ne peut pas
              bénéficier de l’accès immédiat ; il peut renoncer à sa commande avant paiement.
            </p>
          </section>

          <section className="legal-box">
            <h2>Article 9 — Garanties légales</h2>
            <p>
              Le Vendeur fournit le Livre en ligne conformément au contrat et répond des défauts de
              conformité existant lors de la fourniture du contenu numérique et qui apparaissent
              dans un délai de deux ans à compter de celle-ci, dans les conditions prévues aux
              <strong> articles L. 224-25-12 et suivants du code de la consommation</strong>.
            </p>
            <p>
              En cas de défaut de conformité, le Client peut exiger la mise en conformité du
              contenu numérique sans frais, dans un délai raisonnable et sans inconvénient majeur
              pour lui. À défaut, il peut obtenir une réduction du prix ou la résolution du
              contrat dans les conditions prévues aux articles L. 224-25-17 et suivants du même
              code.
            </p>
            <p>
              Le Client bénéficie également de la garantie légale contre les vices cachés prévue
              aux <strong>articles 1641 à 1649 du code civil</strong>, lui permettant, en cas de
              vice caché, d’obtenir la résolution de la vente ou une réduction du prix, dans un
              délai de deux ans à compter de la découverte du vice.
            </p>
            <p>
              Ces garanties s’exercent sans frais auprès du Vendeur, à l’adresse électronique
              indiquée à l’article 2.
            </p>
          </section>

          <section>
            <h2>Article 10 — Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus du Livre en ligne et du Site — textes, illustrations,
              schémas, photographies, planches anatomiques, supports de synthèse, quiz et
              cartographies réflexes — est protégé par le droit de la propriété intellectuelle et
              demeure la propriété exclusive de leurs auteurs et ayants droit.
            </p>
            <p>
              Le Client s’interdit notamment de reproduire, représenter, adapter, traduire,
              diffuser, mettre à disposition du public, revendre, céder ou exploiter à des fins
              commerciales ou pédagogiques tout ou partie du Livre en ligne, ainsi que d’en
              extraire ou réutiliser une partie substantielle, sans autorisation écrite préalable.
            </p>
            <p>
              La reproduction d’extraits à usage strictement privé, dans les limites des exceptions
              prévues par l’article L. 122-5 du code de la propriété intellectuelle, demeure
              autorisée.
            </p>
          </section>

          <section>
            <h2>Article 11 — Remboursement et fin de l’accès</h2>
            <p>
              En cas de remboursement de la commande, quelle qu’en soit la cause, l’accès au Livre
              en ligne prend fin : l’autorisation associée au compte du Client est révoquée et
              aucun nouveau lien d’accès ne lui est délivré.
            </p>
            <p>
              Le Vendeur peut suspendre ou révoquer l’accès d’un Client en cas de manquement grave
              aux présentes CGV, en particulier de partage du lien d’accès ou de reproduction non
              autorisée du Livre en ligne. Cette mesure est notifiée au Client et, sauf fraude
              caractérisée, précédée d’une mise en demeure restée sans effet.
            </p>
          </section>

          <section>
            <h2>Article 12 — Disponibilité du service et responsabilité</h2>
            <p>
              Le Vendeur s’efforce d’assurer l’accessibilité du Site en continu. Il peut toutefois
              en suspendre l’accès pour maintenance ou en cas de force majeure, en s’efforçant de
              limiter la durée de l’interruption et d’en informer les Clients.
            </p>
            <p>
              Le Livre en ligne est un ouvrage de référence destiné à des professionnels de santé
              et à des praticiens formés. Il ne se substitue ni à une formation, ni à un diagnostic,
              ni à un avis médical, et n’engage pas la responsabilité du Vendeur ou de l’auteur
              quant aux actes pratiqués par le Client dans le cadre de son activité.
            </p>
            <p>
              La responsabilité du Vendeur ne saurait être engagée en cas de dommage résultant
              d’une faute du Client, notamment du partage de son lien d’accès, ni pour les dommages
              indirects. Aucune stipulation des présentes ne limite la responsabilité du Vendeur
              dans les cas où la loi l’interdit.
            </p>
          </section>

          <section>
            <h2>Article 13 — Données personnelles</h2>
            <p>
              Les données collectées lors de la commande — adresse électronique, données de
              commande, langue de lecture — sont nécessaires au traitement de celle-ci, à la
              délivrance de l’accès et au respect des obligations comptables du Vendeur. Elles ne
              sont pas cédées à des tiers à des fins commerciales.
            </p>
            <p>
              Le Client dispose d’un droit d’accès, de rectification, d’effacement, de limitation,
              d’opposition et de portabilité, qu’il peut exercer à l’adresse électronique indiquée
              à l’article 2. Les modalités complètes sont décrites dans la{' '}
              <Todo>à compléter — publier la politique de confidentialité et lier cette page</Todo>.
            </p>
          </section>

          <section>
            <h2>Article 14 — Réclamation et médiation de la consommation</h2>
            <p>
              Toute réclamation doit être adressée au Vendeur à l’adresse électronique indiquée à
              l’article 2. Le Vendeur s’engage à y répondre dans un délai raisonnable.
            </p>
            <p>
              Conformément à l’article L. 612-1 du code de la consommation, le Client peut recourir
              gratuitement à un médiateur de la consommation en vue de la résolution amiable du
              litige, après avoir tenté de le résoudre directement auprès du Vendeur par une
              réclamation écrite.
            </p>
            <p>
              Le médiateur dont relève le Vendeur est : <Todo>à compléter — nom, adresse postale et
              site du médiateur auprès duquel le Vendeur doit adhérer avant l’ouverture des ventes</Todo>.
            </p>
          </section>

          <section>
            <h2>Article 15 — Droit applicable et juridiction</h2>
            <p>
              Les présentes CGV sont soumises au droit français. Les dispositions impératives plus
              protectrices du pays de résidence habituelle du Client consommateur résidant dans un
              autre État membre de l’Union européenne demeurent applicables.
            </p>
            <p>
              À défaut de résolution amiable, tout litige relève de la compétence des juridictions
              françaises, dans les conditions prévues par le code de procédure civile.
            </p>
          </section>
        </article>

        <p className="legal-foot">
          <Link href={localizedHref('/', lang)}>← {t.checkout.success.home}</Link>
        </p>
      </main>
    </div>
  )
}

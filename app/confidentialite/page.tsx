import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerLang } from '@/app/i18n/serverLang'
import { localizedHref } from '@/app/i18n/locale'
import { translations } from '@/app/i18n/translations'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité · R.O.P. · Guy Boitout',
  description:
    'Politique de confidentialité du site : données collectées, finalités, destinataires, durées de conservation et droits des personnes.',
  alternates: { canonical: `${SITE_URL}/confidentialite` },
}

/** Last substantive revision. Article 13 of the terms of sale points here. */
const VERSION_DATE = '28 août 2026'

/**
 * This page describes what the site actually does, not what a template says a
 * site usually does. Each section below was written against the code:
 *
 *   - the cookies are the ones set in lib/readerId.ts, lib/access.ts,
 *     lib/salesPreview.ts and lib/internalTraffic.ts;
 *   - the analytics fields are the payload of app/api/visit/route.ts;
 *   - the lead fields are the payload of app/api/free-chapter/route.ts;
 *   - the order fields are lib/salesLog.ts;
 *   - the recipients are the services those modules actually call.
 *
 * If any of those change, this page is part of the change.
 */
export default async function ConfidentialitePage() {
  const lang = await getServerLang()
  const t = translations[lang]

  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href={localizedHref('/', lang)} className="cg-home">← {t.checkout.success.home}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">Politique de confidentialité</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="legal-main">
        {/* A <div>, not a <header>: globals.css styles the `header` element as
            the site's fixed navigation bar. */}
        <div className="legal-header">
          <p className="legal-eyebrow">Information légale</p>
          <h1>Politique de confidentialité</h1>
          <p className="legal-updated">Version en vigueur au {VERSION_DATE}</p>
        </div>

        {lang !== 'fr' && (
          <p className="legal-lang-note">
            This privacy policy is published in French. The French text is the only
            authoritative version.
          </p>
        )}

        <article className="legal-article">
          <section>
            <h2>Article 1 — Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur le présent site est :
            </p>
            <ul className="legal-identity">
              <li>Association Française de Réflexologie</li>
              <li>Association déclarée régie par la loi du 1<sup>er</sup> juillet 1901</li>
              <li>17 rue du Coq, 45600 Sully-sur-Loire, France</li>
              <li>SIREN 428 736 342 — SIRET (siège) 428 736 342 00026 — RNA W452017552</li>
              <li>Adresse électronique : contact@institut-rop.com</li>
              <li>Directeur de la publication : Guy Boitout, président de l’association</li>
            </ul>
            <p>
              L’association n’est pas tenue de désigner un délégué à la protection des données au
              sens de l’article 37 du RGPD : elle n’est pas un organisme public, son activité de
              base ne consiste pas en un suivi régulier et systématique à grande échelle, et elle
              ne traite pas de données sensibles à grande échelle. Toute question relative aux
              données peut être adressée à l’adresse électronique ci-dessus.
            </p>
          </section>

          <section>
            <h2>Article 2 — Principe</h2>
            <p>
              Le Site ne comporte aucun outil publicitaire, aucun traceur d’un réseau social et
              aucun service de mesure d’audience tiers de type Google Analytics. Aucune donnée
              n’est vendue, louée ou cédée à des tiers à des fins commerciales.
            </p>
            <p>
              Les données décrites ci-dessous sont celles qui sont réellement collectées par le
              Site. Elles se répartissent en quatre traitements distincts : la mesure d’audience,
              l’inscription aux chapitres gratuits et à l’annonce de parution, la commande du
              livre en ligne, et l’accès au livre après achat.
            </p>
          </section>

          <section>
            <h2>Article 3 — Mesure d’audience</h2>
            <p>
              Afin de comprendre comment le Site est consulté, chaque page vue donne lieu à
              l’enregistrement des informations suivantes : un identifiant de lecteur anonyme
              (voir l’article 7), un identifiant de session, la page consultée, la langue
              d’affichage, la durée de consultation, le pays déduit de l’adresse IP, le type de
              navigateur (<em>user agent</em>), la page de provenance (<em>referer</em>) et, le cas
              échéant, les paramètres de campagne présents dans l’adresse (<em>utm_source</em>,
              <em>utm_medium</em>, <em>utm_campaign</em>, <em>utm_content</em>).
            </p>
            <p>
              <strong>L’adresse IP n’est jamais enregistrée.</strong> Elle est utilisée par
              l’hébergeur pour en déduire un pays, et seul ce pays est conservé.
            </p>
            <p>
              La base légale de ce traitement est l’intérêt légitime du responsable de traitement
              (article 6.1.f du RGPD) à connaître la fréquentation de son site. Ce traitement est
              strictement limité à la mesure d’audience du seul présent site, à l’exclusion de
              tout recoupement avec d’autres sites et de tout profilage publicitaire.
            </p>
          </section>

          <section>
            <h2>Article 4 — Inscription aux chapitres gratuits et à l’annonce de parution</h2>
            <p>
              Les formulaires d’accès aux chapitres gratuits et d’information sur la parution
              collectent : le prénom, le nom, l’adresse électronique et, facultativement, la
              profession. S’y ajoutent la langue, l’origine de l’inscription et l’identifiant de
              lecteur anonyme.
            </p>
            <p>
              Ces données servent exclusivement à donner accès aux chapitres gratuits et à
              informer la personne de la parution de l’ouvrage. La base légale est le consentement
              (article 6.1.a du RGPD), recueilli par la case à cocher du formulaire. Ce
              consentement peut être retiré à tout moment, sans effet sur la licéité du traitement
              antérieur.
            </p>
          </section>

          <section>
            <h2>Article 5 — Commande et paiement</h2>
            <p>
              Lors d’une commande sont traités : l’adresse électronique de l’acheteur, l’adresse
              de facturation, le cas échéant le numéro d’identification professionnel qu’il choisit
              de renseigner, le produit commandé, le montant, la devise, la langue et la date à
              laquelle les conditions générales de vente ont été acceptées.
            </p>
            <p>
              <strong>Aucune donnée bancaire ne transite par le Site ni n’y est conservée.</strong>{' '}
              Le paiement est intégralement réalisé sur les pages sécurisées de Stripe, qui est
              seul destinataire du numéro de carte. Le Site ne reçoit de Stripe que le résultat du
              paiement.
            </p>
            <p>
              La base légale est l’exécution du contrat (article 6.1.b du RGPD) pour la commande
              elle-même, et le respect d’obligations légales (article 6.1.c) pour la conservation
              des pièces comptables.
            </p>
          </section>

          <section>
            <h2>Article 6 — Accès au livre après achat</h2>
            <p>
              L’accès au livre en ligne est rattaché à l’adresse électronique utilisée lors de
              l’achat. Le Site ne tient pas de base de données de clients : le droit d’accès est
              vérifié auprès de Stripe à chaque demande, à partir de cette seule adresse.
            </p>
            <p>
              Le lien d’accès envoyé par courriel est un jeton signé cryptographiquement,
              contenant l’adresse électronique et une date d’expiration. Il ne contient aucune
              autre donnée et n’est stocké nulle part.
            </p>
          </section>

          <section>
            <h2>Article 7 — Cookies</h2>
            <p>
              Le Site n’utilise aucun cookie publicitaire et aucun cookie de réseau social. Il
              n’affiche donc pas de bandeau de consentement aux cookies. Les cookies déposés sont
              les suivants :
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
              <thead>
                <tr><th>Cookie</th><th>Finalité</th><th>Durée</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>reader_id</code></td>
                  <td>Identifiant aléatoire, sans lien avec l’identité, permettant de distinguer
                    un nouveau visiteur d’un visiteur qui revient (mesure d’audience)</td>
                  <td>12 mois</td>
                </tr>
                <tr>
                  <td><code>free_chapters_access</code></td>
                  <td>Ouvre les chapitres gratuits après inscription</td>
                  <td>12 mois</td>
                </tr>
                <tr>
                  <td><code>paid_access</code></td>
                  <td>Maintient la session de lecture du livre acheté</td>
                  <td>12 mois</td>
                </tr>
                <tr>
                  <td><code>lang</code></td>
                  <td>Mémorise la langue d’affichage choisie</td>
                  <td>12 mois</td>
                </tr>
                <tr>
                  <td><code>internal_traffic</code></td>
                  <td>Exclut de la mesure d’audience les visites de l’équipe du Site</td>
                  <td>12 mois</td>
                </tr>
                <tr>
                  <td><code>admin_session</code>, <code>sales_preview</code></td>
                  <td>Réservés à l’administration du Site ; jamais déposés chez un visiteur</td>
                  <td>30 jours</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p>
              À l’exception de <code>reader_id</code>, tous ces cookies sont strictement
              nécessaires au fonctionnement demandé par l’utilisateur. Ils peuvent être supprimés
              à tout moment depuis les réglages du navigateur ; la suppression de{' '}
              <code>paid_access</code> ou de <code>free_chapters_access</code> oblige simplement à
              redemander un lien d’accès.
            </p>
          </section>

          <section>
            <h2>Article 8 — Destinataires et sous-traitants</h2>
            <p>
              Les données ne sont accessibles qu’aux personnes chargées de la gestion du Site au
              sein de l’association, et aux prestataires techniques suivants, agissant en qualité
              de sous-traitants au sens de l’article 28 du RGPD :
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
              <thead>
                <tr><th>Prestataire</th><th>Rôle</th><th>Données concernées</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vercel Inc. (États-Unis)</td>
                  <td>Hébergement du Site</td>
                  <td>Ensemble des données transitant par le Site</td>
                </tr>
                <tr>
                  <td>Stripe Payments Europe, Ltd. (Irlande)</td>
                  <td>Paiement et facturation</td>
                  <td>Adresse électronique, adresse de facturation, données de paiement</td>
                </tr>
                <tr>
                  <td>Google Ireland Ltd. / Google LLC</td>
                  <td>Feuille de calcul recevant les inscriptions, les visites et les commandes</td>
                  <td>Données des articles 3, 4 et 5</td>
                </tr>
                <tr>
                  <td>Resend, Inc. (États-Unis)</td>
                  <td>Envoi des courriels transactionnels</td>
                  <td>Adresse électronique du destinataire</td>
                </tr>
                <tr>
                  <td>Neon Inc. (États-Unis)</td>
                  <td>Base technique de l’outil interne d’analyse d’audience</td>
                  <td>Identifiant de lecteur anonyme et date de visite</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p>
              Certains de ces prestataires sont établis aux États-Unis ou peuvent y transférer des
              données. Ces transferts sont encadrés par les clauses contractuelles types de la
              Commission européenne ou par le <em>EU-U.S. Data Privacy Framework</em>, selon les
              engagements pris par chacun d’eux.
            </p>
          </section>

          <section>
            <h2>Article 9 — Durées de conservation</h2>
            <div className="legal-table-wrap">
              <table className="legal-table">
              <thead>
                <tr><th>Donnée</th><th>Durée</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Données de mesure d’audience</td>
                  <td>25 mois</td>
                </tr>
                <tr>
                  <td>Inscriptions aux chapitres gratuits et à l’annonce de parution</td>
                  <td>3 ans à compter du dernier contact, ou jusqu’au retrait du consentement</td>
                </tr>
                <tr>
                  <td>Commandes, factures et pièces comptables</td>
                  <td>10 ans, conformément à l’article L. 123-22 du code de commerce</td>
                </tr>
                <tr>
                  <td>Droit d’accès au livre en ligne</td>
                  <td>Aussi longtemps que Stripe conserve la trace du paiement correspondant</td>
                </tr>
              </tbody>
            </table>
            </div>
          </section>

          <section>
            <h2>Article 10 — Droits des personnes</h2>
            <p>
              Conformément aux articles 15 à 22 du RGPD, toute personne dispose d’un droit
              d’accès, de rectification, d’effacement, de limitation du traitement, d’opposition
              et de portabilité de ses données, ainsi que du droit de définir des directives
              relatives au sort de ses données après son décès.
            </p>
            <p>
              Ces droits s’exercent à l’adresse contact@institut-rop.com ou par courrier à
              Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire. Une
              réponse est apportée dans un délai d’un mois. Une preuve d’identité peut être
              demandée en cas de doute raisonnable sur l’identité du demandeur.
            </p>
            <p>
              Toute personne peut également introduire une réclamation auprès de la Commission
              nationale de l’informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715,
              75334 Paris Cedex 07 —{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
            </p>
          </section>

          <section>
            <h2>Article 11 — Sécurité</h2>
            <p>
              Le Site est servi exclusivement en HTTPS. Les sessions de lecture reposent sur des
              jetons signés cryptographiquement et non sur des identifiants devinables. Les
              cookies d’accès ne sont pas lisibles par les scripts de la page. Le Site ne conserve
              aucune donnée bancaire.
            </p>
          </section>

          <section>
            <h2>Article 12 — Modification</h2>
            <p>
              La présente politique peut être modifiée pour tenir compte d’évolutions du Site ou
              de la réglementation. La version applicable est celle publiée sur cette page, dont
              la date figure en tête.
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

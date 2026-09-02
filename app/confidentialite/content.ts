// The privacy policy, in the six languages the site is offered in.
//
// Why this is translated when the terms of sale are not: the terms are a
// contract, and two texts stating obligations can disagree, so one authoritative
// version is safer. A privacy notice states nothing the reader owes — its whole
// purpose under article 12.1 of the GDPR is to be *understood*, and a French-only
// notice served to a German or Spanish visitor of a site that markets to them in
// their own language does not meet that.
//
// Every locale is typed as `typeof fr`, so a new cookie row or sub-processor
// cannot be added to the French text without the compiler demanding the other
// five. That is the only thing standing between this file and a stale German
// version describing cookies the site no longer sets.

import type { Lang } from '@/app/i18n/translations'

type Row3 = { a: string; b: string; c: string }
type Row2 = { a: string; b: string }

const fr = {
  metaTitle: 'Politique de confidentialité · R.O.P. · Guy Boitout',
  metaDescription:
    'Politique de confidentialité du site : données collectées, finalités, destinataires, durées de conservation et droits des personnes.',
  topbar: 'Politique de confidentialité',
  eyebrow: 'Information légale',
  h1: 'Politique de confidentialité',
  updated: 'Version en vigueur au',
  /** Shown on every locale but French. */
  translationNote:
    'Cette traduction est fournie à titre d’information. En cas de divergence, la version française fait foi.',

  a1h: 'Article 1 — Responsable du traitement',
  a1lead: 'Le responsable du traitement des données collectées sur le présent site est :',
  a1identity: [
    'Association Française de Réflexologie',
    'Association déclarée régie par la loi du 1ᵉʳ juillet 1901',
    '17 rue du Coq, 45600 Sully-sur-Loire, France',
    'SIREN 428 736 342 — SIRET (siège) 428 736 342 00026 — RNA W452017552',
    'Adresse électronique : contact@institut-rop.com',
    'Directeur de la publication : Guy Boitout, président de l’association',
  ],
  a1dpo:
    'L’association n’est pas tenue de désigner un délégué à la protection des données au sens de l’article 37 du RGPD : elle n’est pas un organisme public, son activité de base ne consiste pas en un suivi régulier et systématique à grande échelle, et elle ne traite pas de données sensibles à grande échelle. Toute question relative aux données peut être adressée à l’adresse électronique ci-dessus.',

  a2h: 'Article 2 — Principe',
  a2p1:
    'Le Site ne comporte aucun outil publicitaire, aucun traceur d’un réseau social et aucun service de mesure d’audience tiers de type Google Analytics. Aucune donnée n’est vendue, louée ou cédée à des tiers à des fins commerciales.',
  a2p2:
    'Les données décrites ci-dessous sont celles qui sont réellement collectées par le Site. Elles se répartissent en quatre traitements distincts : la mesure d’audience, l’inscription aux chapitres gratuits et à l’annonce de parution, la commande du livre en ligne, et l’accès au livre après achat.',

  a3h: 'Article 3 — Mesure d’audience',
  a3p1:
    'Afin de comprendre comment le Site est consulté, chaque page vue donne lieu à l’enregistrement des informations suivantes : un identifiant de lecteur anonyme (voir l’article 7), un identifiant de session, la page consultée, la langue d’affichage, la durée de consultation, le pays déduit de l’adresse IP, le type de navigateur, la page de provenance et, le cas échéant, les paramètres de campagne présents dans l’adresse (utm_source, utm_medium, utm_campaign, utm_content).',
  a3ip:
    'L’adresse IP n’est jamais enregistrée. Elle est utilisée par l’hébergeur pour en déduire un pays, et seul ce pays est conservé.',
  a3basis:
    'La base légale de ce traitement est l’intérêt légitime du responsable de traitement (article 6.1.f du RGPD) à connaître la fréquentation de son site. Ce traitement est strictement limité à la mesure d’audience du seul présent site, à l’exclusion de tout recoupement avec d’autres sites et de tout profilage publicitaire.',

  a4h: 'Article 4 — Inscription aux chapitres gratuits et à l’annonce de parution',
  a4p1:
    'Les formulaires d’accès aux chapitres gratuits et d’information sur la parution collectent : le prénom, le nom, l’adresse électronique et, facultativement, la profession. S’y ajoutent la langue, l’origine de l’inscription et l’identifiant de lecteur anonyme.',
  a4p2:
    'Ces données servent exclusivement à donner accès aux chapitres gratuits et à informer la personne de la parution de l’ouvrage. La base légale est le consentement (article 6.1.a du RGPD), recueilli par la case à cocher du formulaire. Ce consentement peut être retiré à tout moment, sans effet sur la licéité du traitement antérieur.',

  a5h: 'Article 5 — Commande et paiement',
  a5p1:
    'Lors d’une commande sont traités : l’adresse électronique de l’acheteur, l’adresse de facturation, le cas échéant le numéro d’identification professionnel qu’il choisit de renseigner, le produit commandé, le montant, la devise, la langue et la date à laquelle les conditions générales de vente ont été acceptées.',
  a5cards:
    'Aucune donnée bancaire ne transite par le Site ni n’y est conservée. Le paiement est intégralement réalisé sur les pages sécurisées de Stripe, qui est seul destinataire du numéro de carte. Le Site ne reçoit de Stripe que le résultat du paiement.',
  a5basis:
    'La base légale est l’exécution du contrat (article 6.1.b du RGPD) pour la commande elle-même, et le respect d’obligations légales (article 6.1.c) pour la conservation des pièces comptables.',

  a6h: 'Article 6 — Accès au livre après achat',
  a6p1:
    'L’accès au livre en ligne est rattaché à l’adresse électronique utilisée lors de l’achat. Le Site ne tient pas de base de données de clients : le droit d’accès est vérifié auprès de Stripe à chaque demande, à partir de cette seule adresse.',
  a6p2:
    'Le lien d’accès envoyé par courriel est un jeton signé cryptographiquement, contenant l’adresse électronique et une date d’expiration. Il ne contient aucune autre donnée et n’est stocké nulle part.',

  a7h: 'Article 7 — Cookies',
  a7lead:
    'Le Site n’utilise aucun cookie publicitaire et aucun cookie de réseau social. Il n’affiche donc pas de bandeau de consentement aux cookies. Les cookies déposés sont les suivants :',
  a7head: { a: 'Cookie', b: 'Finalité', c: 'Durée' } as Row3,
  a7rows: [
    {
      a: 'reader_id',
      b: 'Identifiant aléatoire, sans lien avec l’identité, permettant de distinguer un nouveau visiteur d’un visiteur qui revient (mesure d’audience)',
      c: '12 mois',
    },
    { a: 'free_chapters_access', b: 'Ouvre les chapitres gratuits après inscription', c: '12 mois' },
    { a: 'paid_access', b: 'Maintient la session de lecture du livre acheté', c: '12 mois' },
    { a: 'lang', b: 'Mémorise la langue d’affichage choisie', c: '12 mois' },
    { a: 'internal_traffic', b: 'Exclut de la mesure d’audience les visites de l’équipe du Site', c: '12 mois' },
    {
      a: 'admin_session, sales_preview',
      b: 'Réservés à l’administration du Site ; jamais déposés chez un visiteur',
      c: '30 jours',
    },
  ] as Row3[],
  a7note:
    'À l’exception de reader_id, tous ces cookies sont strictement nécessaires au fonctionnement demandé par l’utilisateur. Ils peuvent être supprimés à tout moment depuis les réglages du navigateur ; la suppression de paid_access ou de free_chapters_access oblige simplement à redemander un lien d’accès.',

  a8h: 'Article 8 — Destinataires et sous-traitants',
  a8lead:
    'Les données ne sont accessibles qu’aux personnes chargées de la gestion du Site au sein de l’association, et aux prestataires techniques suivants, agissant en qualité de sous-traitants au sens de l’article 28 du RGPD :',
  a8head: { a: 'Prestataire', b: 'Rôle', c: 'Données concernées' } as Row3,
  a8rows: [
    { a: 'Vercel Inc. (États-Unis)', b: 'Hébergement du Site', c: 'Ensemble des données transitant par le Site' },
    {
      a: 'Stripe Payments Europe, Ltd. (Irlande)',
      b: 'Paiement et facturation',
      c: 'Adresse électronique, adresse de facturation, données de paiement',
    },
    {
      a: 'Google Ireland Ltd. / Google LLC',
      b: 'Feuille de calcul recevant les inscriptions, les visites et les commandes',
      c: 'Données des articles 3, 4 et 5',
    },
    { a: 'Resend, Inc. (États-Unis)', b: 'Envoi des courriels transactionnels', c: 'Adresse électronique du destinataire' },
    {
      a: 'Neon Inc. (États-Unis)',
      b: 'Base technique de l’outil interne d’analyse d’audience',
      c: 'Identifiant de lecteur anonyme et date de visite',
    },
  ] as Row3[],
  a8transfers:
    'Certains de ces prestataires sont établis aux États-Unis ou peuvent y transférer des données. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne ou par le EU-U.S. Data Privacy Framework, selon les engagements pris par chacun d’eux.',

  a9h: 'Article 9 — Durées de conservation',
  a9head: { a: 'Donnée', b: 'Durée' } as Row2,
  a9rows: [
    { a: 'Données de mesure d’audience', b: '25 mois' },
    {
      a: 'Inscriptions aux chapitres gratuits et à l’annonce de parution',
      b: '3 ans à compter du dernier contact, ou jusqu’au retrait du consentement',
    },
    { a: 'Commandes, factures et pièces comptables', b: '10 ans, conformément à l’article L. 123-22 du code de commerce' },
    { a: 'Droit d’accès au livre en ligne', b: 'Aussi longtemps que Stripe conserve la trace du paiement correspondant' },
  ] as Row2[],

  a10h: 'Article 10 — Droits des personnes',
  a10p1:
    'Conformément aux articles 15 à 22 du RGPD, toute personne dispose d’un droit d’accès, de rectification, d’effacement, de limitation du traitement, d’opposition et de portabilité de ses données, ainsi que du droit de définir des directives relatives au sort de ses données après son décès.',
  a10p2:
    'Ces droits s’exercent à l’adresse contact@institut-rop.com ou par courrier à Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire, France. Une réponse est apportée dans un délai d’un mois. Une preuve d’identité peut être demandée en cas de doute raisonnable sur l’identité du demandeur.',
  a10cnil:
    'Toute personne peut également introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou auprès de l’autorité de contrôle de son pays de résidence.',

  a11h: 'Article 11 — Sécurité',
  a11p1:
    'Le Site est servi exclusivement en HTTPS. Les sessions de lecture reposent sur des jetons signés cryptographiquement et non sur des identifiants devinables. Les cookies d’accès ne sont pas lisibles par les scripts de la page. Le Site ne conserve aucune donnée bancaire.',

  a12h: 'Article 12 — Modification',
  a12p1:
    'La présente politique peut être modifiée pour tenir compte d’évolutions du Site ou de la réglementation. La version applicable est celle publiée sur cette page, dont la date figure en tête.',
}

type Content = typeof fr

const en: Content = {
  metaTitle: 'Privacy policy · R.O.P. · Guy Boitout',
  metaDescription:
    'Privacy policy of the site: data collected, purposes, recipients, retention periods and individual rights.',
  topbar: 'Privacy policy',
  eyebrow: 'Legal information',
  h1: 'Privacy policy',
  updated: 'Version in force as of',
  translationNote:
    'This translation is provided for information. In the event of any discrepancy, the French version prevails.',

  a1h: 'Article 1 — Data controller',
  a1lead: 'The controller of the data collected on this site is:',
  a1identity: [
    'Association Française de Réflexologie',
    'Registered association governed by the French law of 1 July 1901',
    '17 rue du Coq, 45600 Sully-sur-Loire, France',
    'SIREN 428 736 342 — SIRET (registered office) 428 736 342 00026 — RNA W452017552',
    'Email address: contact@institut-rop.com',
    'Publication director: Guy Boitout, president of the association',
  ],
  a1dpo:
    'The association is not required to appoint a data protection officer under article 37 of the GDPR: it is not a public body, its core activity does not consist of regular and systematic monitoring on a large scale, and it does not process sensitive data on a large scale. Any question about data may be sent to the email address above.',

  a2h: 'Article 2 — Principle',
  a2p1:
    'The site carries no advertising tool, no social-network tracker and no third-party audience-measurement service such as Google Analytics. No data is sold, rented or transferred to third parties for commercial purposes.',
  a2p2:
    'The data described below is the data the site actually collects. It falls under four distinct processing activities: audience measurement, sign-up for the free chapters and the publication announcement, ordering the online book, and access to the book after purchase.',

  a3h: 'Article 3 — Audience measurement',
  a3p1:
    'To understand how the site is read, each page view is recorded with: an anonymous reader identifier (see article 7), a session identifier, the page viewed, the display language, the time spent, the country inferred from the IP address, the browser type, the referring page and, where present, the campaign parameters in the address (utm_source, utm_medium, utm_campaign, utm_content).',
  a3ip:
    'The IP address is never stored. It is used by the host to infer a country, and only that country is kept.',
  a3basis:
    'The legal basis is the controller’s legitimate interest (article 6.1.f of the GDPR) in knowing how its site is visited. This processing is strictly limited to measuring the audience of this site alone, with no cross-referencing against other sites and no advertising profiling.',

  a4h: 'Article 4 — Free chapters and publication announcement sign-up',
  a4p1:
    'The free-chapter and publication-announcement forms collect: first name, last name, email address and, optionally, occupation. To these are added the language, the origin of the sign-up and the anonymous reader identifier.',
  a4p2:
    'This data is used solely to give access to the free chapters and to inform the person of the book’s publication. The legal basis is consent (article 6.1.a of the GDPR), collected through the form’s checkbox. Consent may be withdrawn at any time, without affecting the lawfulness of processing carried out beforehand.',

  a5h: 'Article 5 — Order and payment',
  a5p1:
    'An order involves: the buyer’s email address, the billing address, where applicable the business identification number they choose to provide, the product ordered, the amount, the currency, the language and the date on which the terms of sale were accepted.',
  a5cards:
    'No bank details pass through the site or are stored on it. Payment is carried out entirely on Stripe’s secure pages, and Stripe is the sole recipient of the card number. The site receives only the outcome of the payment from Stripe.',
  a5basis:
    'The legal basis is performance of the contract (article 6.1.b of the GDPR) for the order itself, and compliance with legal obligations (article 6.1.c) for retaining accounting records.',

  a6h: 'Article 6 — Access to the book after purchase',
  a6p1:
    'Access to the online book is attached to the email address used at purchase. The site keeps no customer database: the right of access is verified with Stripe on each request, from that address alone.',
  a6p2:
    'The access link sent by email is a cryptographically signed token containing the email address and an expiry date. It contains no other data and is stored nowhere.',

  a7h: 'Article 7 — Cookies',
  a7lead:
    'The site uses no advertising cookie and no social-network cookie. It therefore displays no cookie consent banner. The cookies set are the following:',
  a7head: { a: 'Cookie', b: 'Purpose', c: 'Lifetime' },
  a7rows: [
    {
      a: 'reader_id',
      b: 'Random identifier, unconnected to identity, distinguishing a new visitor from a returning one (audience measurement)',
      c: '12 months',
    },
    { a: 'free_chapters_access', b: 'Opens the free chapters after sign-up', c: '12 months' },
    { a: 'paid_access', b: 'Keeps the reading session for the purchased book', c: '12 months' },
    { a: 'lang', b: 'Remembers the chosen display language', c: '12 months' },
    { a: 'internal_traffic', b: 'Excludes the site team’s own visits from audience measurement', c: '12 months' },
    {
      a: 'admin_session, sales_preview',
      b: 'Reserved for site administration; never set on a visitor',
      c: '30 days',
    },
  ],
  a7note:
    'With the exception of reader_id, all of these cookies are strictly necessary to the function the user asked for. They can be deleted at any time from the browser settings; deleting paid_access or free_chapters_access simply means requesting a new access link.',

  a8h: 'Article 8 — Recipients and processors',
  a8lead:
    'The data is accessible only to those responsible for running the site within the association, and to the following technical providers, acting as processors within the meaning of article 28 of the GDPR:',
  a8head: { a: 'Provider', b: 'Role', c: 'Data concerned' },
  a8rows: [
    { a: 'Vercel Inc. (United States)', b: 'Hosting of the site', c: 'All data passing through the site' },
    {
      a: 'Stripe Payments Europe, Ltd. (Ireland)',
      b: 'Payment and invoicing',
      c: 'Email address, billing address, payment data',
    },
    {
      a: 'Google Ireland Ltd. / Google LLC',
      b: 'Spreadsheet receiving sign-ups, visits and orders',
      c: 'Data described in articles 3, 4 and 5',
    },
    { a: 'Resend, Inc. (United States)', b: 'Sending of transactional email', c: 'Recipient’s email address' },
    {
      a: 'Neon Inc. (United States)',
      b: 'Technical database of the internal audience-analysis tool',
      c: 'Anonymous reader identifier and visit date',
    },
  ],
  a8transfers:
    'Some of these providers are established in the United States or may transfer data there. Such transfers are governed by the European Commission’s standard contractual clauses or by the EU-U.S. Data Privacy Framework, according to the commitments each of them has made.',

  a9h: 'Article 9 — Retention periods',
  a9head: { a: 'Data', b: 'Period' },
  a9rows: [
    { a: 'Audience-measurement data', b: '25 months' },
    {
      a: 'Free-chapter and publication-announcement sign-ups',
      b: '3 years from the last contact, or until consent is withdrawn',
    },
    { a: 'Orders, invoices and accounting records', b: '10 years, under article L. 123-22 of the French commercial code' },
    { a: 'Right of access to the online book', b: 'As long as Stripe retains the record of the corresponding payment' },
  ],

  a10h: 'Article 10 — Your rights',
  a10p1:
    'Under articles 15 to 22 of the GDPR, every person has a right of access, rectification, erasure, restriction of processing, objection and portability of their data, as well as the right to give directions on what becomes of their data after their death.',
  a10p2:
    'These rights may be exercised at contact@institut-rop.com or by post to Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire, France. A reply is given within one month. Proof of identity may be requested where there is reasonable doubt as to the identity of the person making the request.',
  a10cnil:
    'Any person may also lodge a complaint with the French data protection authority (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, or with the supervisory authority of their country of residence.',

  a11h: 'Article 11 — Security',
  a11p1:
    'The site is served over HTTPS only. Reading sessions rely on cryptographically signed tokens rather than guessable identifiers. Access cookies cannot be read by scripts on the page. The site stores no bank details.',

  a12h: 'Article 12 — Changes',
  a12p1:
    'This policy may be amended to reflect changes to the site or to the applicable regulations. The version that applies is the one published on this page, dated at the top.',
}

const de: Content = {
  metaTitle: 'Datenschutzerklärung · R.O.P. · Guy Boitout',
  metaDescription:
    'Datenschutzerklärung der Website: erhobene Daten, Zwecke, Empfänger, Speicherfristen und Rechte der betroffenen Personen.',
  topbar: 'Datenschutzerklärung',
  eyebrow: 'Rechtliche Information',
  h1: 'Datenschutzerklärung',
  updated: 'Fassung gültig ab dem',
  translationNote:
    'Diese Übersetzung dient der Information. Bei Abweichungen ist die französische Fassung maßgeblich.',

  a1h: 'Artikel 1 — Verantwortlicher',
  a1lead: 'Verantwortlicher für die auf dieser Website erhobenen Daten ist:',
  a1identity: [
    'Association Française de Réflexologie',
    'Eingetragener Verein nach dem französischen Gesetz vom 1. Juli 1901',
    '17 rue du Coq, 45600 Sully-sur-Loire, Frankreich',
    'SIREN 428 736 342 — SIRET (Sitz) 428 736 342 00026 — RNA W452017552',
    'E-Mail-Adresse: contact@institut-rop.com',
    'Verantwortlich für die Veröffentlichung: Guy Boitout, Präsident des Vereins',
  ],
  a1dpo:
    'Der Verein ist nicht verpflichtet, einen Datenschutzbeauftragten nach Artikel 37 DSGVO zu benennen: Er ist keine öffentliche Stelle, seine Kerntätigkeit besteht nicht in einer umfangreichen regelmäßigen und systematischen Überwachung, und er verarbeitet keine sensiblen Daten in großem Umfang. Fragen zum Datenschutz richten Sie bitte an die oben genannte E-Mail-Adresse.',

  a2h: 'Artikel 2 — Grundsatz',
  a2p1:
    'Die Website enthält kein Werbewerkzeug, keinen Social-Media-Tracker und keinen Reichweitenmessdienst Dritter wie Google Analytics. Es werden keine Daten zu kommerziellen Zwecken an Dritte verkauft, vermietet oder weitergegeben.',
  a2p2:
    'Die nachstehend beschriebenen Daten sind diejenigen, die die Website tatsächlich erhebt. Sie verteilen sich auf vier getrennte Verarbeitungen: die Reichweitenmessung, die Anmeldung für die kostenlosen Kapitel und die Erscheinungsankündigung, die Bestellung des Online-Buchs und den Zugang zum Buch nach dem Kauf.',

  a3h: 'Artikel 3 — Reichweitenmessung',
  a3p1:
    'Um nachvollziehen zu können, wie die Website genutzt wird, wird zu jedem Seitenaufruf Folgendes gespeichert: eine anonyme Leserkennung (siehe Artikel 7), eine Sitzungskennung, die aufgerufene Seite, die Anzeigesprache, die Verweildauer, das aus der IP-Adresse abgeleitete Land, der Browsertyp, die verweisende Seite sowie gegebenenfalls die in der Adresse enthaltenen Kampagnenparameter (utm_source, utm_medium, utm_campaign, utm_content).',
  a3ip:
    'Die IP-Adresse wird niemals gespeichert. Sie wird vom Hoster nur genutzt, um daraus ein Land abzuleiten; allein dieses Land wird aufbewahrt.',
  a3basis:
    'Rechtsgrundlage ist das berechtigte Interesse des Verantwortlichen (Artikel 6 Abs. 1 lit. f DSGVO), die Nutzung seiner Website zu kennen. Diese Verarbeitung beschränkt sich streng auf die Reichweitenmessung dieser einen Website, ohne Abgleich mit anderen Websites und ohne Werbeprofilbildung.',

  a4h: 'Artikel 4 — Anmeldung für die kostenlosen Kapitel und die Erscheinungsankündigung',
  a4p1:
    'Die Formulare für die kostenlosen Kapitel und für die Erscheinungsankündigung erheben: Vorname, Nachname, E-Mail-Adresse und wahlweise den Beruf. Hinzu kommen die Sprache, die Herkunft der Anmeldung und die anonyme Leserkennung.',
  a4p2:
    'Diese Daten dienen ausschließlich dazu, Zugang zu den kostenlosen Kapiteln zu gewähren und über das Erscheinen des Werks zu informieren. Rechtsgrundlage ist die Einwilligung (Artikel 6 Abs. 1 lit. a DSGVO), die über das Kontrollkästchen des Formulars eingeholt wird. Sie kann jederzeit widerrufen werden, ohne dass die Rechtmäßigkeit der zuvor erfolgten Verarbeitung berührt wird.',

  a5h: 'Artikel 5 — Bestellung und Zahlung',
  a5p1:
    'Bei einer Bestellung werden verarbeitet: die E-Mail-Adresse des Käufers, die Rechnungsanschrift, gegebenenfalls die von ihm angegebene Unternehmenskennung, das bestellte Produkt, der Betrag, die Währung, die Sprache und das Datum der Annahme der Allgemeinen Geschäftsbedingungen.',
  a5cards:
    'Es werden keine Bankdaten über die Website übermittelt oder auf ihr gespeichert. Die Zahlung erfolgt vollständig auf den gesicherten Seiten von Stripe, das allein die Kartennummer erhält. Die Website erhält von Stripe lediglich das Ergebnis der Zahlung.',
  a5basis:
    'Rechtsgrundlage ist die Erfüllung des Vertrags (Artikel 6 Abs. 1 lit. b DSGVO) für die Bestellung selbst und die Erfüllung rechtlicher Verpflichtungen (Artikel 6 Abs. 1 lit. c) für die Aufbewahrung der Buchhaltungsunterlagen.',

  a6h: 'Artikel 6 — Zugang zum Buch nach dem Kauf',
  a6p1:
    'Der Zugang zum Online-Buch ist an die beim Kauf verwendete E-Mail-Adresse gebunden. Die Website führt keine Kundendatenbank: Das Zugangsrecht wird bei jeder Anfrage allein anhand dieser Adresse bei Stripe überprüft.',
  a6p2:
    'Der per E-Mail versandte Zugangslink ist ein kryptografisch signiertes Token, das die E-Mail-Adresse und ein Ablaufdatum enthält. Er enthält keine weiteren Daten und wird nirgends gespeichert.',

  a7h: 'Artikel 7 — Cookies',
  a7lead:
    'Die Website verwendet keine Werbe-Cookies und keine Social-Media-Cookies. Sie zeigt daher kein Cookie-Banner an. Gesetzt werden die folgenden Cookies:',
  a7head: { a: 'Cookie', b: 'Zweck', c: 'Dauer' },
  a7rows: [
    {
      a: 'reader_id',
      b: 'Zufällige Kennung ohne Bezug zur Identität, die einen neuen von einem wiederkehrenden Besucher unterscheidet (Reichweitenmessung)',
      c: '12 Monate',
    },
    { a: 'free_chapters_access', b: 'Gibt die kostenlosen Kapitel nach der Anmeldung frei', c: '12 Monate' },
    { a: 'paid_access', b: 'Hält die Lesesitzung des gekauften Buches aufrecht', c: '12 Monate' },
    { a: 'lang', b: 'Merkt sich die gewählte Anzeigesprache', c: '12 Monate' },
    { a: 'internal_traffic', b: 'Nimmt Besuche des Website-Teams von der Reichweitenmessung aus', c: '12 Monate' },
    {
      a: 'admin_session, sales_preview',
      b: 'Der Verwaltung der Website vorbehalten; werden nie bei Besuchern gesetzt',
      c: '30 Tage',
    },
  ],
  a7note:
    'Mit Ausnahme von reader_id sind alle diese Cookies für die vom Nutzer gewünschte Funktion unbedingt erforderlich. Sie können jederzeit über die Browsereinstellungen gelöscht werden; wird paid_access oder free_chapters_access gelöscht, muss lediglich ein neuer Zugangslink angefordert werden.',

  a8h: 'Artikel 8 — Empfänger und Auftragsverarbeiter',
  a8lead:
    'Zugriff auf die Daten haben nur die innerhalb des Vereins mit dem Betrieb der Website betrauten Personen sowie die folgenden technischen Dienstleister, die als Auftragsverarbeiter im Sinne des Artikels 28 DSGVO handeln:',
  a8head: { a: 'Dienstleister', b: 'Rolle', c: 'Betroffene Daten' },
  a8rows: [
    { a: 'Vercel Inc. (Vereinigte Staaten)', b: 'Hosting der Website', c: 'Sämtliche über die Website laufenden Daten' },
    {
      a: 'Stripe Payments Europe, Ltd. (Irland)',
      b: 'Zahlung und Rechnungsstellung',
      c: 'E-Mail-Adresse, Rechnungsanschrift, Zahlungsdaten',
    },
    {
      a: 'Google Ireland Ltd. / Google LLC',
      b: 'Tabelle, die Anmeldungen, Besuche und Bestellungen aufnimmt',
      c: 'Daten der Artikel 3, 4 und 5',
    },
    { a: 'Resend, Inc. (Vereinigte Staaten)', b: 'Versand der Transaktions-E-Mails', c: 'E-Mail-Adresse des Empfängers' },
    {
      a: 'Neon Inc. (Vereinigte Staaten)',
      b: 'Technische Datenbank des internen Auswertungswerkzeugs',
      c: 'Anonyme Leserkennung und Besuchsdatum',
    },
  ],
  a8transfers:
    'Einige dieser Dienstleister haben ihren Sitz in den Vereinigten Staaten oder können Daten dorthin übermitteln. Diese Übermittlungen stützen sich je nach den Zusagen des jeweiligen Anbieters auf die Standardvertragsklauseln der Europäischen Kommission oder auf das EU-U.S. Data Privacy Framework.',

  a9h: 'Artikel 9 — Speicherfristen',
  a9head: { a: 'Daten', b: 'Dauer' },
  a9rows: [
    { a: 'Daten der Reichweitenmessung', b: '25 Monate' },
    {
      a: 'Anmeldungen für die kostenlosen Kapitel und die Erscheinungsankündigung',
      b: '3 Jahre ab dem letzten Kontakt oder bis zum Widerruf der Einwilligung',
    },
    {
      a: 'Bestellungen, Rechnungen und Buchhaltungsunterlagen',
      b: '10 Jahre gemäß Artikel L. 123-22 des französischen Handelsgesetzbuchs',
    },
    { a: 'Zugangsrecht zum Online-Buch', b: 'Solange Stripe den Nachweis der entsprechenden Zahlung aufbewahrt' },
  ],

  a10h: 'Artikel 10 — Rechte der betroffenen Personen',
  a10p1:
    'Nach den Artikeln 15 bis 22 DSGVO hat jede Person das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit sowie das Recht, Anweisungen zum Umgang mit ihren Daten nach ihrem Tod zu erteilen.',
  a10p2:
    'Diese Rechte können unter contact@institut-rop.com oder per Post an Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire, Frankreich, geltend gemacht werden. Eine Antwort erfolgt innerhalb eines Monats. Bei begründeten Zweifeln an der Identität der antragstellenden Person kann ein Identitätsnachweis verlangt werden.',
  a10cnil:
    'Jede Person kann außerdem Beschwerde bei der französischen Datenschutzbehörde (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, oder bei der Aufsichtsbehörde ihres Wohnsitzlandes einlegen.',

  a11h: 'Artikel 11 — Sicherheit',
  a11p1:
    'Die Website wird ausschließlich über HTTPS ausgeliefert. Die Lesesitzungen beruhen auf kryptografisch signierten Token und nicht auf erratbaren Kennungen. Die Zugangs-Cookies können von Skripten der Seite nicht ausgelesen werden. Die Website speichert keine Bankdaten.',

  a12h: 'Artikel 12 — Änderungen',
  a12p1:
    'Diese Erklärung kann geändert werden, um Entwicklungen der Website oder der Rechtslage Rechnung zu tragen. Maßgeblich ist die auf dieser Seite veröffentlichte Fassung, deren Datum oben angegeben ist.',
}

const es: Content = {
  metaTitle: 'Política de privacidad · R.O.P. · Guy Boitout',
  metaDescription:
    'Política de privacidad del sitio: datos recogidos, finalidades, destinatarios, plazos de conservación y derechos de las personas.',
  topbar: 'Política de privacidad',
  eyebrow: 'Información legal',
  h1: 'Política de privacidad',
  updated: 'Versión en vigor a',
  translationNote:
    'Esta traducción se facilita a título informativo. En caso de discrepancia, prevalece la versión francesa.',

  a1h: 'Artículo 1 — Responsable del tratamiento',
  a1lead: 'El responsable del tratamiento de los datos recogidos en este sitio es:',
  a1identity: [
    'Association Française de Réflexologie',
    'Asociación declarada, regida por la ley francesa de 1 de julio de 1901',
    '17 rue du Coq, 45600 Sully-sur-Loire, Francia',
    'SIREN 428 736 342 — SIRET (domicilio social) 428 736 342 00026 — RNA W452017552',
    'Dirección electrónica: contact@institut-rop.com',
    'Director de la publicación: Guy Boitout, presidente de la asociación',
  ],
  a1dpo:
    'La asociación no está obligada a designar un delegado de protección de datos conforme al artículo 37 del RGPD: no es un organismo público, su actividad principal no consiste en una observación habitual y sistemática a gran escala, y no trata datos sensibles a gran escala. Cualquier consulta relativa a los datos puede dirigirse a la dirección electrónica indicada.',

  a2h: 'Artículo 2 — Principio',
  a2p1:
    'El sitio no incorpora ninguna herramienta publicitaria, ningún rastreador de red social ni ningún servicio externo de medición de audiencia como Google Analytics. Ningún dato se vende, alquila ni cede a terceros con fines comerciales.',
  a2p2:
    'Los datos descritos a continuación son los que el sitio recoge realmente. Se reparten en cuatro tratamientos distintos: la medición de audiencia, la inscripción a los capítulos gratuitos y al aviso de publicación, el pedido del libro en línea y el acceso al libro tras la compra.',

  a3h: 'Artículo 3 — Medición de audiencia',
  a3p1:
    'Para comprender cómo se consulta el sitio, cada página vista se registra con: un identificador de lector anónimo (véase el artículo 7), un identificador de sesión, la página consultada, el idioma de visualización, la duración de la consulta, el país deducido de la dirección IP, el tipo de navegador, la página de procedencia y, en su caso, los parámetros de campaña presentes en la dirección (utm_source, utm_medium, utm_campaign, utm_content).',
  a3ip:
    'La dirección IP no se registra nunca. El alojador la utiliza únicamente para deducir un país, y solo ese país se conserva.',
  a3basis:
    'La base jurídica es el interés legítimo del responsable del tratamiento (artículo 6.1.f del RGPD) en conocer la frecuentación de su sitio. Este tratamiento se limita estrictamente a la medición de audiencia de este único sitio, sin cruce con otros sitios ni elaboración de perfiles publicitarios.',

  a4h: 'Artículo 4 — Inscripción a los capítulos gratuitos y al aviso de publicación',
  a4p1:
    'Los formularios de acceso a los capítulos gratuitos y de información sobre la publicación recogen: nombre, apellidos, dirección electrónica y, con carácter facultativo, la profesión. A ello se añaden el idioma, el origen de la inscripción y el identificador de lector anónimo.',
  a4p2:
    'Estos datos sirven exclusivamente para dar acceso a los capítulos gratuitos e informar a la persona de la publicación de la obra. La base jurídica es el consentimiento (artículo 6.1.a del RGPD), recogido mediante la casilla del formulario. Dicho consentimiento puede retirarse en cualquier momento, sin que ello afecte a la licitud del tratamiento anterior.',

  a5h: 'Artículo 5 — Pedido y pago',
  a5p1:
    'Al realizar un pedido se tratan: la dirección electrónica del comprador, la dirección de facturación, en su caso el número de identificación profesional que decida facilitar, el producto pedido, el importe, la divisa, el idioma y la fecha de aceptación de las condiciones generales de venta.',
  a5cards:
    'Ningún dato bancario transita por el sitio ni se conserva en él. El pago se realiza íntegramente en las páginas seguras de Stripe, único destinatario del número de tarjeta. El sitio solo recibe de Stripe el resultado del pago.',
  a5basis:
    'La base jurídica es la ejecución del contrato (artículo 6.1.b del RGPD) para el pedido, y el cumplimiento de obligaciones legales (artículo 6.1.c) para la conservación de los documentos contables.',

  a6h: 'Artículo 6 — Acceso al libro tras la compra',
  a6p1:
    'El acceso al libro en línea está vinculado a la dirección electrónica utilizada en la compra. El sitio no mantiene ninguna base de datos de clientes: el derecho de acceso se verifica en Stripe en cada solicitud, a partir únicamente de esa dirección.',
  a6p2:
    'El enlace de acceso enviado por correo electrónico es un testigo firmado criptográficamente que contiene la dirección electrónica y una fecha de caducidad. No contiene ningún otro dato y no se almacena en ningún sitio.',

  a7h: 'Artículo 7 — Cookies',
  a7lead:
    'El sitio no utiliza ninguna cookie publicitaria ni ninguna cookie de red social. Por ello no muestra ningún aviso de consentimiento de cookies. Las cookies depositadas son las siguientes:',
  a7head: { a: 'Cookie', b: 'Finalidad', c: 'Duración' },
  a7rows: [
    {
      a: 'reader_id',
      b: 'Identificador aleatorio, sin relación con la identidad, que permite distinguir un visitante nuevo de uno recurrente (medición de audiencia)',
      c: '12 meses',
    },
    { a: 'free_chapters_access', b: 'Abre los capítulos gratuitos tras la inscripción', c: '12 meses' },
    { a: 'paid_access', b: 'Mantiene la sesión de lectura del libro comprado', c: '12 meses' },
    { a: 'lang', b: 'Recuerda el idioma de visualización elegido', c: '12 meses' },
    { a: 'internal_traffic', b: 'Excluye de la medición de audiencia las visitas del equipo del sitio', c: '12 meses' },
    {
      a: 'admin_session, sales_preview',
      b: 'Reservadas a la administración del sitio; nunca se depositan en un visitante',
      c: '30 días',
    },
  ],
  a7note:
    'Salvo reader_id, todas estas cookies son estrictamente necesarias para el funcionamiento solicitado por el usuario. Pueden suprimirse en cualquier momento desde los ajustes del navegador; suprimir paid_access o free_chapters_access obliga simplemente a solicitar un nuevo enlace de acceso.',

  a8h: 'Artículo 8 — Destinatarios y encargados del tratamiento',
  a8lead:
    'Los datos solo son accesibles para las personas encargadas de la gestión del sitio dentro de la asociación y para los siguientes proveedores técnicos, que actúan como encargados del tratamiento en el sentido del artículo 28 del RGPD:',
  a8head: { a: 'Proveedor', b: 'Función', c: 'Datos afectados' },
  a8rows: [
    { a: 'Vercel Inc. (Estados Unidos)', b: 'Alojamiento del sitio', c: 'Conjunto de los datos que transitan por el sitio' },
    {
      a: 'Stripe Payments Europe, Ltd. (Irlanda)',
      b: 'Pago y facturación',
      c: 'Dirección electrónica, dirección de facturación, datos de pago',
    },
    {
      a: 'Google Ireland Ltd. / Google LLC',
      b: 'Hoja de cálculo que recibe las inscripciones, las visitas y los pedidos',
      c: 'Datos de los artículos 3, 4 y 5',
    },
    { a: 'Resend, Inc. (Estados Unidos)', b: 'Envío de los correos transaccionales', c: 'Dirección electrónica del destinatario' },
    {
      a: 'Neon Inc. (Estados Unidos)',
      b: 'Base técnica de la herramienta interna de análisis de audiencia',
      c: 'Identificador de lector anónimo y fecha de visita',
    },
  ],
  a8transfers:
    'Algunos de estos proveedores están establecidos en los Estados Unidos o pueden transferir datos a dicho país. Estas transferencias se rigen por las cláusulas contractuales tipo de la Comisión Europea o por el EU-U.S. Data Privacy Framework, según los compromisos asumidos por cada uno de ellos.',

  a9h: 'Artículo 9 — Plazos de conservación',
  a9head: { a: 'Dato', b: 'Plazo' },
  a9rows: [
    { a: 'Datos de medición de audiencia', b: '25 meses' },
    {
      a: 'Inscripciones a los capítulos gratuitos y al aviso de publicación',
      b: '3 años desde el último contacto, o hasta la retirada del consentimiento',
    },
    {
      a: 'Pedidos, facturas y documentos contables',
      b: '10 años, conforme al artículo L. 123-22 del código de comercio francés',
    },
    { a: 'Derecho de acceso al libro en línea', b: 'Mientras Stripe conserve el registro del pago correspondiente' },
  ],

  a10h: 'Artículo 10 — Derechos de las personas',
  a10p1:
    'Conforme a los artículos 15 a 22 del RGPD, toda persona dispone de los derechos de acceso, rectificación, supresión, limitación del tratamiento, oposición y portabilidad de sus datos, así como del derecho a dar instrucciones sobre el destino de sus datos tras su fallecimiento.',
  a10p2:
    'Estos derechos se ejercen en contact@institut-rop.com o por correo postal a Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire, Francia. Se responde en el plazo de un mes. Podrá solicitarse una prueba de identidad en caso de duda razonable sobre la identidad del solicitante.',
  a10cnil:
    'Toda persona puede asimismo presentar una reclamación ante la autoridad francesa de protección de datos (CNIL), 3 place de Fontenoy, TSA 80715, 75334 París Cedex 07, o ante la autoridad de control de su país de residencia.',

  a11h: 'Artículo 11 — Seguridad',
  a11p1:
    'El sitio se sirve exclusivamente mediante HTTPS. Las sesiones de lectura se basan en testigos firmados criptográficamente y no en identificadores adivinables. Las cookies de acceso no son legibles por los scripts de la página. El sitio no conserva ningún dato bancario.',

  a12h: 'Artículo 12 — Modificación',
  a12p1:
    'La presente política puede modificarse para tener en cuenta la evolución del sitio o de la normativa. La versión aplicable es la publicada en esta página, cuya fecha figura en el encabezado.',
}

const it: Content = {
  metaTitle: 'Informativa sulla privacy · R.O.P. · Guy Boitout',
  metaDescription:
    'Informativa sulla privacy del sito: dati raccolti, finalità, destinatari, tempi di conservazione e diritti degli interessati.',
  topbar: 'Informativa sulla privacy',
  eyebrow: 'Informazione legale',
  h1: 'Informativa sulla privacy',
  updated: 'Versione in vigore dal',
  translationNote:
    'La presente traduzione è fornita a titolo informativo. In caso di discordanza prevale la versione francese.',

  a1h: 'Articolo 1 — Titolare del trattamento',
  a1lead: 'Il titolare del trattamento dei dati raccolti sul presente sito è:',
  a1identity: [
    'Association Française de Réflexologie',
    'Associazione dichiarata, disciplinata dalla legge francese del 1º luglio 1901',
    '17 rue du Coq, 45600 Sully-sur-Loire, Francia',
    'SIREN 428 736 342 — SIRET (sede) 428 736 342 00026 — RNA W452017552',
    'Indirizzo di posta elettronica: contact@institut-rop.com',
    'Direttore della pubblicazione: Guy Boitout, presidente dell’associazione',
  ],
  a1dpo:
    'L’associazione non è tenuta a nominare un responsabile della protezione dei dati ai sensi dell’articolo 37 del GDPR: non è un organismo pubblico, la sua attività principale non consiste in un monitoraggio regolare e sistematico su larga scala e non tratta dati sensibili su larga scala. Ogni domanda relativa ai dati può essere inviata all’indirizzo indicato sopra.',

  a2h: 'Articolo 2 — Principio',
  a2p1:
    'Il sito non contiene alcuno strumento pubblicitario, alcun tracciante di social network né alcun servizio di misurazione del pubblico di terze parti come Google Analytics. Nessun dato è venduto, ceduto in locazione o trasferito a terzi per finalità commerciali.',
  a2p2:
    'I dati descritti di seguito sono quelli effettivamente raccolti dal sito. Si suddividono in quattro trattamenti distinti: la misurazione del pubblico, l’iscrizione ai capitoli gratuiti e all’annuncio di pubblicazione, l’ordine del libro online e l’accesso al libro dopo l’acquisto.',

  a3h: 'Articolo 3 — Misurazione del pubblico',
  a3p1:
    'Per comprendere come il sito viene consultato, ogni pagina visualizzata comporta la registrazione di: un identificativo di lettore anonimo (v. articolo 7), un identificativo di sessione, la pagina consultata, la lingua di visualizzazione, la durata della consultazione, il paese dedotto dall’indirizzo IP, il tipo di browser, la pagina di provenienza e, se presenti, i parametri di campagna contenuti nell’indirizzo (utm_source, utm_medium, utm_campaign, utm_content).',
  a3ip:
    'L’indirizzo IP non viene mai registrato. È utilizzato dal fornitore di hosting per dedurne un paese, e solo tale paese viene conservato.',
  a3basis:
    'La base giuridica è il legittimo interesse del titolare (articolo 6.1.f del GDPR) a conoscere la frequentazione del proprio sito. Il trattamento è strettamente limitato alla misurazione del pubblico del solo presente sito, senza incroci con altri siti e senza profilazione pubblicitaria.',

  a4h: 'Articolo 4 — Iscrizione ai capitoli gratuiti e all’annuncio di pubblicazione',
  a4p1:
    'I moduli di accesso ai capitoli gratuiti e di informazione sulla pubblicazione raccolgono: nome, cognome, indirizzo di posta elettronica e, facoltativamente, la professione. Vi si aggiungono la lingua, l’origine dell’iscrizione e l’identificativo di lettore anonimo.',
  a4p2:
    'Tali dati servono esclusivamente a dare accesso ai capitoli gratuiti e a informare l’interessato della pubblicazione dell’opera. La base giuridica è il consenso (articolo 6.1.a del GDPR), raccolto mediante la casella del modulo. Il consenso può essere revocato in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente.',

  a5h: 'Articolo 5 — Ordine e pagamento',
  a5p1:
    'In occasione di un ordine sono trattati: l’indirizzo di posta elettronica dell’acquirente, l’indirizzo di fatturazione, se del caso il numero di identificazione professionale che decide di indicare, il prodotto ordinato, l’importo, la valuta, la lingua e la data di accettazione delle condizioni generali di vendita.',
  a5cards:
    'Nessun dato bancario transita dal sito né vi è conservato. Il pagamento avviene interamente sulle pagine sicure di Stripe, unico destinatario del numero di carta. Il sito riceve da Stripe soltanto l’esito del pagamento.',
  a5basis:
    'La base giuridica è l’esecuzione del contratto (articolo 6.1.b del GDPR) per l’ordine stesso e l’adempimento di obblighi legali (articolo 6.1.c) per la conservazione dei documenti contabili.',

  a6h: 'Articolo 6 — Accesso al libro dopo l’acquisto',
  a6p1:
    'L’accesso al libro online è collegato all’indirizzo di posta elettronica utilizzato al momento dell’acquisto. Il sito non tiene alcuna banca dati di clienti: il diritto di accesso è verificato presso Stripe a ogni richiesta, sulla base di quel solo indirizzo.',
  a6p2:
    'Il link di accesso inviato per posta elettronica è un token firmato crittograficamente, contenente l’indirizzo di posta elettronica e una data di scadenza. Non contiene altri dati e non è memorizzato in alcun luogo.',

  a7h: 'Articolo 7 — Cookie',
  a7lead:
    'Il sito non utilizza alcun cookie pubblicitario né alcun cookie di social network. Non mostra pertanto alcun banner di consenso ai cookie. I cookie installati sono i seguenti:',
  a7head: { a: 'Cookie', b: 'Finalità', c: 'Durata' },
  a7rows: [
    {
      a: 'reader_id',
      b: 'Identificativo casuale, senza collegamento con l’identità, che distingue un nuovo visitatore da uno di ritorno (misurazione del pubblico)',
      c: '12 mesi',
    },
    { a: 'free_chapters_access', b: 'Apre i capitoli gratuiti dopo l’iscrizione', c: '12 mesi' },
    { a: 'paid_access', b: 'Mantiene la sessione di lettura del libro acquistato', c: '12 mesi' },
    { a: 'lang', b: 'Memorizza la lingua di visualizzazione scelta', c: '12 mesi' },
    { a: 'internal_traffic', b: 'Esclude dalla misurazione del pubblico le visite del team del sito', c: '12 mesi' },
    {
      a: 'admin_session, sales_preview',
      b: 'Riservati all’amministrazione del sito; mai installati presso un visitatore',
      c: '30 giorni',
    },
  ],
  a7note:
    'Ad eccezione di reader_id, tutti questi cookie sono strettamente necessari al funzionamento richiesto dall’utente. Possono essere cancellati in qualsiasi momento dalle impostazioni del browser; la cancellazione di paid_access o di free_chapters_access comporta semplicemente la necessità di richiedere un nuovo link di accesso.',

  a8h: 'Articolo 8 — Destinatari e responsabili del trattamento',
  a8lead:
    'I dati sono accessibili unicamente alle persone incaricate della gestione del sito all’interno dell’associazione e ai seguenti fornitori tecnici, che agiscono in qualità di responsabili del trattamento ai sensi dell’articolo 28 del GDPR:',
  a8head: { a: 'Fornitore', b: 'Ruolo', c: 'Dati interessati' },
  a8rows: [
    { a: 'Vercel Inc. (Stati Uniti)', b: 'Hosting del sito', c: 'Insieme dei dati che transitano dal sito' },
    {
      a: 'Stripe Payments Europe, Ltd. (Irlanda)',
      b: 'Pagamento e fatturazione',
      c: 'Indirizzo di posta elettronica, indirizzo di fatturazione, dati di pagamento',
    },
    {
      a: 'Google Ireland Ltd. / Google LLC',
      b: 'Foglio di calcolo che riceve iscrizioni, visite e ordini',
      c: 'Dati degli articoli 3, 4 e 5',
    },
    { a: 'Resend, Inc. (Stati Uniti)', b: 'Invio delle e-mail transazionali', c: 'Indirizzo di posta elettronica del destinatario' },
    {
      a: 'Neon Inc. (Stati Uniti)',
      b: 'Base tecnica dello strumento interno di analisi del pubblico',
      c: 'Identificativo di lettore anonimo e data della visita',
    },
  ],
  a8transfers:
    'Alcuni di questi fornitori sono stabiliti negli Stati Uniti o possono trasferirvi dati. Tali trasferimenti sono disciplinati dalle clausole contrattuali tipo della Commissione europea o dall’EU-U.S. Data Privacy Framework, secondo gli impegni assunti da ciascuno di essi.',

  a9h: 'Articolo 9 — Tempi di conservazione',
  a9head: { a: 'Dato', b: 'Durata' },
  a9rows: [
    { a: 'Dati di misurazione del pubblico', b: '25 mesi' },
    {
      a: 'Iscrizioni ai capitoli gratuiti e all’annuncio di pubblicazione',
      b: '3 anni dall’ultimo contatto, o fino alla revoca del consenso',
    },
    {
      a: 'Ordini, fatture e documenti contabili',
      b: '10 anni, ai sensi dell’articolo L. 123-22 del codice di commercio francese',
    },
    { a: 'Diritto di accesso al libro online', b: 'Per tutto il tempo in cui Stripe conserva la traccia del relativo pagamento' },
  ],

  a10h: 'Articolo 10 — Diritti degli interessati',
  a10p1:
    'Ai sensi degli articoli da 15 a 22 del GDPR, ogni persona dispone del diritto di accesso, rettifica, cancellazione, limitazione del trattamento, opposizione e portabilità dei propri dati, nonché del diritto di impartire disposizioni sulla sorte dei propri dati dopo il decesso.',
  a10p2:
    'Tali diritti si esercitano all’indirizzo contact@institut-rop.com o per posta presso Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire, Francia. La risposta è fornita entro un mese. In caso di ragionevole dubbio sull’identità del richiedente può essere richiesta una prova di identità.',
  a10cnil:
    'Ogni persona può inoltre proporre reclamo all’autorità francese per la protezione dei dati (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, o all’autorità di controllo del proprio paese di residenza.',

  a11h: 'Articolo 11 — Sicurezza',
  a11p1:
    'Il sito è servito esclusivamente in HTTPS. Le sessioni di lettura si basano su token firmati crittograficamente e non su identificativi indovinabili. I cookie di accesso non sono leggibili dagli script della pagina. Il sito non conserva alcun dato bancario.',

  a12h: 'Articolo 12 — Modifiche',
  a12p1:
    'La presente informativa può essere modificata per tenere conto dell’evoluzione del sito o della normativa. La versione applicabile è quella pubblicata su questa pagina, la cui data figura in testa.',
}

const th: Content = {
  metaTitle: 'นโยบายความเป็นส่วนตัว · R.O.P. · Guy Boitout',
  metaDescription:
    'นโยบายความเป็นส่วนตัวของเว็บไซต์ : ข้อมูลที่เก็บรวบรวม วัตถุประสงค์ ผู้รับข้อมูล ระยะเวลาเก็บรักษา และสิทธิของเจ้าของข้อมูล',
  topbar: 'นโยบายความเป็นส่วนตัว',
  eyebrow: 'ข้อมูลทางกฎหมาย',
  h1: 'นโยบายความเป็นส่วนตัว',
  updated: 'ฉบับที่มีผลบังคับใช้ ณ วันที่',
  translationNote:
    'คำแปลนี้จัดทำขึ้นเพื่อเป็นข้อมูลเท่านั้น หากมีข้อความใดขัดแย้งกัน ให้ยึดฉบับภาษาฝรั่งเศสเป็นสำคัญ',

  a1h: 'ข้อ 1 — ผู้ควบคุมข้อมูล',
  a1lead: 'ผู้ควบคุมข้อมูลที่เก็บรวบรวมบนเว็บไซต์นี้ คือ',
  a1identity: [
    'Association Française de Réflexologie',
    'สมาคมจดแจ้งภายใต้กฎหมายฝรั่งเศส ลงวันที่ 1 กรกฎาคม ค.ศ. 1901',
    '17 rue du Coq, 45600 Sully-sur-Loire ประเทศฝรั่งเศส',
    'SIREN 428 736 342 — SIRET (สำนักงานใหญ่) 428 736 342 00026 — RNA W452017552',
    'อีเมล : contact@institut-rop.com',
    'ผู้อำนวยการฝ่ายเผยแพร่ : Guy Boitout ประธานสมาคม',
  ],
  a1dpo:
    'สมาคมไม่มีหน้าที่ต้องแต่งตั้งเจ้าหน้าที่คุ้มครองข้อมูลตามข้อ 37 ของ GDPR เนื่องจากมิใช่หน่วยงานของรัฐ กิจกรรมหลักมิได้เป็นการติดตามพฤติกรรมอย่างสม่ำเสมอและเป็นระบบในขนาดใหญ่ และมิได้ประมวลผลข้อมูลอ่อนไหวในขนาดใหญ่ คำถามใด ๆ เกี่ยวกับข้อมูลสามารถส่งไปยังอีเมลข้างต้น',

  a2h: 'ข้อ 2 — หลักการ',
  a2p1:
    'เว็บไซต์นี้ไม่มีเครื่องมือโฆษณา ไม่มีตัวติดตามของเครือข่ายสังคมออนไลน์ และไม่มีบริการวัดผู้เข้าชมของบุคคลที่สามอย่าง Google Analytics ไม่มีการขาย ให้เช่า หรือส่งต่อข้อมูลให้บุคคลที่สามเพื่อวัตถุประสงค์ทางการค้า',
  a2p2:
    'ข้อมูลที่อธิบายไว้ด้านล่างคือข้อมูลที่เว็บไซต์เก็บรวบรวมจริง แบ่งออกเป็นการประมวลผลสี่ประเภท ได้แก่ การวัดผู้เข้าชม การลงทะเบียนรับบทอ่านฟรีและการแจ้งการตีพิมพ์ การสั่งซื้อหนังสือออนไลน์ และการเข้าถึงหนังสือหลังการซื้อ',

  a3h: 'ข้อ 3 — การวัดผู้เข้าชม',
  a3p1:
    'เพื่อให้เข้าใจว่าเว็บไซต์ถูกอ่านอย่างไร การเปิดหน้าแต่ละครั้งจะถูกบันทึกพร้อมข้อมูลต่อไปนี้ : รหัสผู้อ่านแบบนิรนาม (ดูข้อ 7) รหัสเซสชัน หน้าที่เปิด ภาษาที่แสดง ระยะเวลาที่อ่าน ประเทศที่อนุมานจากหมายเลข IP ประเภทเบราว์เซอร์ หน้าที่มา และพารามิเตอร์แคมเปญที่ปรากฏในที่อยู่ (utm_source, utm_medium, utm_campaign, utm_content) หากมี',
  a3ip:
    'หมายเลข IP ไม่เคยถูกบันทึกไว้ ผู้ให้บริการโฮสติ้งใช้เพื่ออนุมานประเทศเท่านั้น และเก็บไว้เพียงชื่อประเทศนั้น',
  a3basis:
    'ฐานทางกฎหมายคือประโยชน์อันชอบธรรมของผู้ควบคุมข้อมูล (ข้อ 6.1.f ของ GDPR) ในการทราบจำนวนผู้เข้าชมเว็บไซต์ของตน การประมวลผลนี้จำกัดอยู่เฉพาะการวัดผู้เข้าชมของเว็บไซต์นี้เท่านั้น โดยไม่มีการเชื่อมโยงกับเว็บไซต์อื่นและไม่มีการทำโปรไฟล์เพื่อการโฆษณา',

  a4h: 'ข้อ 4 — การลงทะเบียนรับบทอ่านฟรีและการแจ้งการตีพิมพ์',
  a4p1:
    'แบบฟอร์มขอรับบทอ่านฟรีและแบบฟอร์มแจ้งการตีพิมพ์เก็บข้อมูล : ชื่อ นามสกุล อีเมล และวิชาชีพ (ไม่บังคับ) พร้อมด้วยภาษา แหล่งที่มาของการลงทะเบียน และรหัสผู้อ่านแบบนิรนาม',
  a4p2:
    'ข้อมูลนี้ใช้เพื่อให้สิทธิ์เข้าอ่านบทอ่านฟรีและแจ้งการตีพิมพ์ของหนังสือเท่านั้น ฐานทางกฎหมายคือความยินยอม (ข้อ 6.1.a ของ GDPR) ซึ่งเก็บผ่านช่องทำเครื่องหมายในแบบฟอร์ม ความยินยอมนี้ถอนได้ทุกเมื่อ โดยไม่กระทบต่อความชอบด้วยกฎหมายของการประมวลผลก่อนหน้า',

  a5h: 'ข้อ 5 — การสั่งซื้อและการชำระเงิน',
  a5p1:
    'เมื่อมีการสั่งซื้อ จะมีการประมวลผล : อีเมลของผู้ซื้อ ที่อยู่สำหรับออกใบแจ้งหนี้ เลขประจำตัวผู้ประกอบการที่ผู้ซื้อเลือกกรอก (ถ้ามี) สินค้าที่สั่ง จำนวนเงิน สกุลเงิน ภาษา และวันที่ยอมรับเงื่อนไขการขาย',
  a5cards:
    'ไม่มีข้อมูลบัตรธนาคารใดผ่านหรือถูกเก็บไว้บนเว็บไซต์นี้ การชำระเงินดำเนินการทั้งหมดบนหน้าที่ปลอดภัยของ Stripe ซึ่งเป็นผู้รับหมายเลขบัตรแต่เพียงผู้เดียว เว็บไซต์ได้รับจาก Stripe เพียงผลของการชำระเงินเท่านั้น',
  a5basis:
    'ฐานทางกฎหมายคือการปฏิบัติตามสัญญา (ข้อ 6.1.b ของ GDPR) สำหรับคำสั่งซื้อ และการปฏิบัติตามหน้าที่ตามกฎหมาย (ข้อ 6.1.c) สำหรับการเก็บรักษาเอกสารทางบัญชี',

  a6h: 'ข้อ 6 — การเข้าถึงหนังสือหลังการซื้อ',
  a6p1:
    'สิทธิ์เข้าอ่านหนังสือออนไลน์ผูกกับอีเมลที่ใช้ในการซื้อ เว็บไซต์ไม่มีฐานข้อมูลลูกค้า สิทธิ์เข้าถึงจะถูกตรวจสอบกับ Stripe ทุกครั้งที่มีการร้องขอ โดยอาศัยอีเมลนั้นเพียงอย่างเดียว',
  a6p2:
    'ลิงก์เข้าอ่านที่ส่งทางอีเมลเป็นโทเคนที่ลงลายมือชื่อทางรหัสวิทยา ประกอบด้วยอีเมลและวันหมดอายุ ไม่มีข้อมูลอื่นใดและไม่ถูกจัดเก็บไว้ที่ใด',

  a7h: 'ข้อ 7 — คุกกี้',
  a7lead:
    'เว็บไซต์ไม่ใช้คุกกี้เพื่อการโฆษณาและไม่ใช้คุกกี้ของเครือข่ายสังคมออนไลน์ จึงไม่แสดงแถบขอความยินยอมเรื่องคุกกี้ คุกกี้ที่ใช้มีดังนี้',
  a7head: { a: 'คุกกี้', b: 'วัตถุประสงค์', c: 'ระยะเวลา' },
  a7rows: [
    {
      a: 'reader_id',
      b: 'รหัสสุ่มที่ไม่เชื่อมโยงกับตัวตน ใช้แยกผู้เข้าชมใหม่จากผู้ที่กลับมาอีกครั้ง (การวัดผู้เข้าชม)',
      c: '12 เดือน',
    },
    { a: 'free_chapters_access', b: 'เปิดบทอ่านฟรีหลังการลงทะเบียน', c: '12 เดือน' },
    { a: 'paid_access', b: 'รักษาเซสชันการอ่านหนังสือที่ซื้อไว้', c: '12 เดือน' },
    { a: 'lang', b: 'จดจำภาษาที่เลือกแสดงผล', c: '12 เดือน' },
    { a: 'internal_traffic', b: 'ยกเว้นการเข้าชมของทีมงานเว็บไซต์ออกจากการวัดผู้เข้าชม', c: '12 เดือน' },
    {
      a: 'admin_session, sales_preview',
      b: 'สงวนไว้สำหรับการดูแลระบบ ไม่เคยติดตั้งบนเครื่องของผู้เข้าชม',
      c: '30 วัน',
    },
  ],
  a7note:
    'ยกเว้น reader_id คุกกี้ทั้งหมดนี้จำเป็นอย่างยิ่งต่อการทำงานที่ผู้ใช้ร้องขอ สามารถลบได้ทุกเมื่อจากการตั้งค่าเบราว์เซอร์ การลบ paid_access หรือ free_chapters_access เพียงทำให้ต้องขอลิงก์เข้าอ่านใหม่เท่านั้น',

  a8h: 'ข้อ 8 — ผู้รับข้อมูลและผู้ประมวลผลข้อมูล',
  a8lead:
    'ข้อมูลเข้าถึงได้เฉพาะผู้ที่รับผิดชอบการดูแลเว็บไซต์ภายในสมาคม และผู้ให้บริการทางเทคนิคต่อไปนี้ ซึ่งทำหน้าที่เป็นผู้ประมวลผลข้อมูลตามข้อ 28 ของ GDPR',
  a8head: { a: 'ผู้ให้บริการ', b: 'บทบาท', c: 'ข้อมูลที่เกี่ยวข้อง' },
  a8rows: [
    { a: 'Vercel Inc. (สหรัฐอเมริกา)', b: 'ให้บริการโฮสติ้งของเว็บไซต์', c: 'ข้อมูลทั้งหมดที่ผ่านเว็บไซต์' },
    {
      a: 'Stripe Payments Europe, Ltd. (ไอร์แลนด์)',
      b: 'การชำระเงินและการออกใบแจ้งหนี้',
      c: 'อีเมล ที่อยู่สำหรับออกใบแจ้งหนี้ ข้อมูลการชำระเงิน',
    },
    {
      a: 'Google Ireland Ltd. / Google LLC',
      b: 'ตารางคำนวณที่รับข้อมูลการลงทะเบียน การเข้าชม และคำสั่งซื้อ',
      c: 'ข้อมูลตามข้อ 3, 4 และ 5',
    },
    { a: 'Resend, Inc. (สหรัฐอเมริกา)', b: 'การส่งอีเมลเชิงธุรกรรม', c: 'อีเมลของผู้รับ' },
    {
      a: 'Neon Inc. (สหรัฐอเมริกา)',
      b: 'ฐานข้อมูลทางเทคนิคของเครื่องมือวิเคราะห์ผู้เข้าชมภายใน',
      c: 'รหัสผู้อ่านแบบนิรนามและวันที่เข้าชม',
    },
  ],
  a8transfers:
    'ผู้ให้บริการบางรายตั้งอยู่ในสหรัฐอเมริกาหรืออาจโอนข้อมูลไปยังประเทศดังกล่าว การโอนเหล่านี้อยู่ภายใต้ข้อสัญญามาตรฐานของคณะกรรมาธิการยุโรป หรือภายใต้ EU-U.S. Data Privacy Framework ตามข้อผูกพันของผู้ให้บริการแต่ละราย',

  a9h: 'ข้อ 9 — ระยะเวลาเก็บรักษา',
  a9head: { a: 'ข้อมูล', b: 'ระยะเวลา' },
  a9rows: [
    { a: 'ข้อมูลการวัดผู้เข้าชม', b: '25 เดือน' },
    {
      a: 'การลงทะเบียนรับบทอ่านฟรีและการแจ้งการตีพิมพ์',
      b: '3 ปีนับจากการติดต่อครั้งล่าสุด หรือจนกว่าจะถอนความยินยอม',
    },
    {
      a: 'คำสั่งซื้อ ใบแจ้งหนี้ และเอกสารทางบัญชี',
      b: '10 ปี ตามข้อ L. 123-22 แห่งประมวลกฎหมายพาณิชย์ฝรั่งเศส',
    },
    { a: 'สิทธิ์เข้าอ่านหนังสือออนไลน์', b: 'ตราบเท่าที่ Stripe ยังเก็บหลักฐานการชำระเงินที่เกี่ยวข้อง' },
  ],

  a10h: 'ข้อ 10 — สิทธิของเจ้าของข้อมูล',
  a10p1:
    'ตามข้อ 15 ถึง 22 ของ GDPR ทุกคนมีสิทธิเข้าถึง แก้ไข ลบ จำกัดการประมวลผล คัดค้าน และขอโอนย้ายข้อมูลของตน รวมทั้งมีสิทธิกำหนดแนวทางเกี่ยวกับข้อมูลของตนภายหลังการเสียชีวิต',
  a10p2:
    'สิทธิเหล่านี้ใช้ได้ที่ contact@institut-rop.com หรือทางไปรษณีย์ที่ Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire ประเทศฝรั่งเศส จะมีการตอบกลับภายในหนึ่งเดือน และอาจมีการขอหลักฐานยืนยันตัวตนหากมีข้อสงสัยอันสมควรเกี่ยวกับตัวตนของผู้ร้องขอ',
  a10cnil:
    'ทุกคนสามารถยื่นเรื่องร้องเรียนต่อหน่วยงานคุ้มครองข้อมูลของฝรั่งเศส (CNIL) ที่ 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 หรือต่อหน่วยงานกำกับดูแลในประเทศที่ตนพำนักอยู่',

  a11h: 'ข้อ 11 — ความปลอดภัย',
  a11p1:
    'เว็บไซต์ให้บริการผ่าน HTTPS เท่านั้น เซสชันการอ่านอาศัยโทเคนที่ลงลายมือชื่อทางรหัสวิทยา มิใช่รหัสที่คาดเดาได้ คุกกี้สำหรับการเข้าถึงไม่สามารถอ่านได้โดยสคริปต์บนหน้าเว็บ เว็บไซต์ไม่เก็บข้อมูลบัตรธนาคารใด ๆ',

  a12h: 'ข้อ 12 — การแก้ไข',
  a12p1:
    'นโยบายนี้อาจได้รับการแก้ไขเพื่อให้สอดคล้องกับการเปลี่ยนแปลงของเว็บไซต์หรือของกฎระเบียบ ฉบับที่ใช้บังคับคือฉบับที่เผยแพร่บนหน้านี้ ซึ่งระบุวันที่ไว้ด้านบน',
}

export const privacy: Record<Lang, Content> = { fr, en, de, es, it, pt: en, th }

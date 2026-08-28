// The terms of sale, in the six languages the site is offered in.
//
// The French text remains the binding one, and every other version says so.
// Translating a contract is not free of risk — two texts stating obligations
// can drift apart — so the same discipline as the privacy policy applies here:
// every locale is typed as `typeof fr`, and the compiler refuses a French-only
// edit. An article added to the French terms fails the build until the other
// five carry it.
//
// Two small conventions keep the prose translatable without structural
// gymnastics: **double asterisks** mark an emphasised run, and `{site}` and
// `{link}` are substituted by the page. Word order differs enough between
// French and Thai that a token beats splitting a sentence in two.

import type { Lang } from '@/app/i18n/translations'

const fr = {
  metaTitle: 'Conditions générales de vente · R.O.P. · Guy Boitout',
  metaDescription:
    'Conditions générales de vente du livre en ligne « Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne ».',
  topbar: 'Conditions générales de vente',
  eyebrow: 'Document contractuel',
  h1: 'Conditions générales de vente',
  updated: 'Version en vigueur au',
  translationNote:
    'Cette traduction est fournie à titre d’information. En cas de divergence, la version française fait foi.',

  a1h: 'Article 1 — Objet et champ d’application',
  a1: [
    'Les présentes conditions générales de vente (les « CGV ») régissent la vente du livre en ligne « Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne » (le « Livre en ligne ») proposé sur le site {site} (le « Site ») par l’Association Française de Réflexologie (le « Vendeur »), identifiée à l’article 2, à tout acheteur agissant en qualité de consommateur au sens du code de la consommation (le « Client »).',
    'Toute commande passée sur le Site suppose l’acceptation préalable et expresse des présentes CGV, recueillie par une case à cocher lors de la validation de la commande. Les CGV applicables sont celles en vigueur à la date de la commande ; leur version est archivée avec celle-ci.',
    'Le Livre en ligne est le seul produit vendu sur le Site. L’édition imprimée de l’ouvrage n’est pas commercialisée ici.',
  ],

  a2h: 'Article 2 — Identité du Vendeur',
  a2: [
    'Dénomination sociale : Association Française de Réflexologie',
    'Forme juridique : association déclarée régie par la loi du 1ᵉʳ juillet 1901',
    'Siège social : 17 rue du Coq, 45600 Sully-sur-Loire, France',
    'Numéro SIREN : 428 736 342',
    'Numéro SIRET (siège) : 428 736 342 00026',
    'Code APE : 85.59A — Formation continue d’adultes',
    'Numéro de TVA intracommunautaire : sans objet — l’association n’est pas assujettie à la taxe sur la valeur ajoutée',
    'Numéro RNA (registre national des associations) : W452017552',
    'Directeur de la publication : Guy Boitout, président de l’association',
    'Adresse électronique de contact : contact@institut-rop.com',
    'Téléphone : +33 6 07 84 26 14 (contact par WhatsApp de préférence)',
    'Hébergeur du Site : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  ],

  a3h: 'Article 3 — Nature du produit vendu',
  a3: [
    'Le Livre en ligne est un **contenu numérique fourni sans support matériel**, consultable en ligne depuis le Site. Aucun fichier n’est téléchargé, envoyé ni remis au Client.',
    'La commande confère au Client un **droit d’accès personnel, non exclusif et non transmissible** au Livre en ligne, à des fins strictement personnelles. Ce droit n’emporte aucune cession de droit de propriété intellectuelle et ne constitue pas la vente d’un exemplaire.',
    'L’accès est ouvert pour une durée indéterminée à compter du paiement, sous réserve de l’article 11. Le Vendeur s’engage à maintenir le Livre en ligne accessible pendant une durée minimale de **trois (3) ans** à compter de la commande.',
  ],

  a4h: 'Article 4 — Prix',
  a4: [
    'Le prix du Livre en ligne est de **70 € toutes taxes comprises**. Il est indiqué en euros et affiché toutes taxes comprises sur la page de commande, dans le panier et sur la page de validation de la commande.',
    'Conformément à la loi n° 2011-590 du 26 mai 2011 relative au prix du livre numérique, ce prix est le prix de vente au public fixé par l’éditeur et s’impose à toute personne proposant le Livre en ligne à un acheteur situé en France.',
    'Le Vendeur n’est pas assujetti à la taxe sur la valeur ajoutée. Le prix indiqué ne comporte donc aucune TVA et aucune TVA n’est facturée au Client, quel que soit son pays de résidence. Si la situation fiscale du Vendeur venait à évoluer, le prix affiché resterait le prix toutes taxes comprises.',
    'Aucun frais de livraison n’est applicable, le Livre en ligne étant consulté en ligne.',
  ],

  a5h: 'Article 5 — Commande',
  a5lead: 'La commande est passée selon les étapes suivantes :',
  a5steps: [
    'ajout du Livre en ligne au panier ;',
    'accès au panier, permettant au Client de vérifier le détail de sa commande, son prix total et, le cas échéant, d’en corriger le contenu ;',
    'validation de la commande : le Client saisit son adresse électronique, prend connaissance des présentes CGV et les accepte, et exprime son consentement à l’exécution immédiate du contrat dans les conditions de l’article 8 ;',
    'redirection vers la page de paiement sécurisé et règlement du prix ;',
    'confirmation de la commande, adressée au Client par courrier électronique à l’adresse qu’il a indiquée.',
  ],
  a5tail: [
    'Le Client est invité à vérifier l’exactitude de son adresse électronique : c’est à cette adresse que lui est envoyé son lien d’accès au Livre en ligne.',
    'La vente n’est définitive qu’après encaissement effectif du prix. Le Vendeur se réserve le droit de refuser toute commande présentant un caractère anormal, formée de mauvaise foi ou pour tout autre motif légitime.',
  ],

  a6h: 'Article 6 — Paiement',
  a6: [
    'Le paiement s’effectue par carte bancaire, en une seule fois, au moment de la commande, sur une page de paiement hébergée par le prestataire Stripe Payments Europe, Ltd. Les données de carte bancaire sont saisies directement auprès de Stripe : elles ne transitent pas par le Site et ne sont ni collectées ni conservées par le Vendeur.',
    'Les moyens de paiement acceptés sont ceux proposés par Stripe sur la page de paiement au moment de la commande.',
  ],

  a7h: 'Article 7 — Mise à disposition de l’accès',
  a7: [
    'L’accès au Livre en ligne est ouvert immédiatement après confirmation du paiement.',
    'Un courrier électronique contenant un lien d’accès personnel est envoyé à l’adresse indiquée par le Client. Ce lien est valable sept (7) jours ; il ouvre une session de lecture sur l’appareil depuis lequel il est utilisé. Le Client peut demander à tout moment un nouveau lien depuis le Site, à la même adresse électronique, notamment pour lire depuis un autre appareil.',
    'Le lien d’accès et la session de lecture sont strictement personnels. Le Client s’interdit de les communiquer, de les partager ou d’en permettre l’usage par un tiers.',
    'La lecture nécessite une connexion internet et un navigateur récent. Le Vendeur ne garantit pas le fonctionnement du Site sur des configurations obsolètes ou inhabituelles.',
  ],

  a8h: 'Article 8 — Droit de rétractation et renonciation expresse',
  a8pre: [
    'Le Client dispose en principe d’un délai de quatorze (14) jours pour exercer son droit de rétractation, conformément à l’article L. 221-18 du code de la consommation.',
    'Toutefois, en application du **13° de l’article L. 221-28** du même code, ce droit ne peut être exercé pour les contrats de fourniture d’un contenu numérique non fourni sur un support matériel dont l’exécution a commencé après accord préalable exprès du Client et renoncement exprès de sa part à son droit de rétractation.',
    'En cochant la case prévue à cet effet lors de la validation de sa commande, le Client :',
  ],
  a8items: [
    '**demande expressément** que l’exécution du contrat commence immédiatement, avant l’expiration du délai de rétractation ; et',
    '**reconnaît expressément** qu’il perdra son droit de rétractation dès que le contrat aura été pleinement exécuté, c’est-à-dire dès l’ouverture de son accès au Livre en ligne.',
  ],
  a8post: [
    'La date et l’heure de ce consentement sont enregistrées et conservées par le Vendeur à titre de preuve.',
    'Le Client qui ne souhaite pas renoncer à son droit de rétractation ne peut pas bénéficier de l’accès immédiat ; il peut renoncer à sa commande avant paiement.',
  ],

  a9h: 'Article 9 — Garanties légales',
  a9: [
    'Le Vendeur fournit le Livre en ligne conformément au contrat et répond des défauts de conformité existant lors de la fourniture du contenu numérique et qui apparaissent dans un délai de deux ans à compter de celle-ci, dans les conditions prévues aux **articles L. 224-25-12 et suivants du code de la consommation**.',
    'En cas de défaut de conformité, le Client peut exiger la mise en conformité du contenu numérique sans frais, dans un délai raisonnable et sans inconvénient majeur pour lui. À défaut, il peut obtenir une réduction du prix ou la résolution du contrat dans les conditions prévues aux articles L. 224-25-17 et suivants du même code.',
    'Le Client bénéficie également de la garantie légale contre les vices cachés prévue aux **articles 1641 à 1649 du code civil**, lui permettant, en cas de vice caché, d’obtenir la résolution de la vente ou une réduction du prix, dans un délai de deux ans à compter de la découverte du vice.',
    'Ces garanties s’exercent sans frais auprès du Vendeur, à l’adresse électronique indiquée à l’article 2.',
  ],

  a10h: 'Article 10 — Propriété intellectuelle',
  a10: [
    'L’ensemble des contenus du Livre en ligne et du Site — textes, illustrations, schémas, photographies, planches anatomiques, supports de synthèse, quiz et cartographies réflexes — est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de leurs auteurs et ayants droit.',
    'Le Client s’interdit notamment de reproduire, représenter, adapter, traduire, diffuser, mettre à disposition du public, revendre, céder ou exploiter à des fins commerciales ou pédagogiques tout ou partie du Livre en ligne, ainsi que d’en extraire ou réutiliser une partie substantielle, sans autorisation écrite préalable.',
    'La reproduction d’extraits à usage strictement privé, dans les limites des exceptions prévues par l’article L. 122-5 du code de la propriété intellectuelle, demeure autorisée.',
  ],

  a11h: 'Article 11 — Remboursement et fin de l’accès',
  a11: [
    'En cas de remboursement de la commande, quelle qu’en soit la cause, l’accès au Livre en ligne prend fin : l’autorisation associée au compte du Client est révoquée et aucun nouveau lien d’accès ne lui est délivré.',
    'Le Vendeur peut suspendre ou révoquer l’accès d’un Client en cas de manquement grave aux présentes CGV, en particulier de partage du lien d’accès ou de reproduction non autorisée du Livre en ligne. Cette mesure est notifiée au Client et, sauf fraude caractérisée, précédée d’une mise en demeure restée sans effet.',
  ],

  a12h: 'Article 12 — Disponibilité du service et responsabilité',
  a12: [
    'Le Vendeur s’efforce d’assurer l’accessibilité du Site en continu. Il peut toutefois en suspendre l’accès pour maintenance ou en cas de force majeure, en s’efforçant de limiter la durée de l’interruption et d’en informer les Clients.',
    'Le Livre en ligne est un ouvrage de référence destiné à des professionnels de santé et à des praticiens formés. Il ne se substitue ni à une formation, ni à un diagnostic, ni à un avis médical, et n’engage pas la responsabilité du Vendeur ou de l’auteur quant aux actes pratiqués par le Client dans le cadre de son activité.',
    'La responsabilité du Vendeur ne saurait être engagée en cas de dommage résultant d’une faute du Client, notamment du partage de son lien d’accès, ni pour les dommages indirects. Aucune stipulation des présentes ne limite la responsabilité du Vendeur dans les cas où la loi l’interdit.',
  ],

  a13h: 'Article 13 — Données personnelles',
  a13p1:
    'Les données collectées lors de la commande — adresse électronique, données de commande, langue de lecture — sont nécessaires au traitement de celle-ci, à la délivrance de l’accès et au respect des obligations comptables du Vendeur. Elles ne sont pas cédées à des tiers à des fins commerciales.',
  a13p2:
    'Le Client dispose d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité, qu’il peut exercer à l’adresse électronique indiquée à l’article 2. Les modalités complètes — données collectées, destinataires, durées de conservation et cookies — sont décrites dans la {link}.',
  a13linkText: 'politique de confidentialité',

  a14h: 'Article 14 — Réclamation et médiation de la consommation',
  a14pre: [
    'Toute réclamation doit être adressée au Vendeur — Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire — à l’adresse électronique indiquée à l’article 2. Le Vendeur s’engage à y répondre dans un délai raisonnable.',
    'Conformément à l’article L. 612-1 du code de la consommation, le Client peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige, après avoir tenté de le résoudre directement auprès du Vendeur par une réclamation écrite.',
    'Le Vendeur a désigné, par convention, l’entité de médiation de la consommation suivante :',
  ],
  a14address: '197 boulevard Saint-Germain, 75007 Paris, France',
  a14post: [
    'Le Client peut saisir Avenir Conso soit en ligne, au moyen du formulaire disponible sur son site, soit par courrier postal à l’adresse ci-dessus, en joignant les documents étayant sa demande. La médiation est gratuite pour le Client, sa charge financière incombant au Vendeur.',
    'Conformément à l’article L. 612-2 du code de la consommation, la demande n’est recevable que si le Client justifie avoir tenté au préalable de résoudre le litige directement auprès du Vendeur par une réclamation écrite, et si elle est introduite dans un délai d’un an à compter de cette réclamation.',
  ],

  a15h: 'Article 15 — Droit applicable et juridiction',
  a15: [
    'Les présentes CGV sont soumises au droit français. Les dispositions impératives plus protectrices du pays de résidence habituelle du Client consommateur résidant dans un autre État membre de l’Union européenne demeurent applicables.',
    'À défaut de résolution amiable, tout litige relève de la compétence des juridictions françaises, dans les conditions prévues par le code de procédure civile.',
  ],
}

type Content = typeof fr

const en: Content = {
  metaTitle: 'Terms of sale · R.O.P. · Guy Boitout',
  metaDescription:
    'Terms of sale for the online book “Occipito-Podal Reflexotherapy and the Viscera of the Abdominal and Pelvic Cavities”.',
  topbar: 'Terms of sale',
  eyebrow: 'Contractual document',
  h1: 'Terms of sale',
  updated: 'Version in force as of',
  translationNote:
    'This translation is provided for information. In the event of any discrepancy, the French version prevails.',

  a1h: 'Article 1 — Purpose and scope',
  a1: [
    'These terms of sale (the “Terms”) govern the sale of the online book “Occipito-Podal Reflexotherapy and the Viscera of the Abdominal and Pelvic Cavities” (the “Online Book”) offered on the site {site} (the “Site”) by the Association Française de Réflexologie (the “Seller”), identified in article 2, to any buyer acting as a consumer within the meaning of the French consumer code (the “Customer”).',
    'Every order placed on the Site requires the prior and express acceptance of these Terms, collected through a checkbox when the order is confirmed. The applicable Terms are those in force on the date of the order; that version is archived with it.',
    'The Online Book is the only product sold on the Site. The printed edition of the work is not sold here.',
  ],

  a2h: 'Article 2 — Identity of the Seller',
  a2: [
    'Legal name: Association Française de Réflexologie',
    'Legal form: registered association governed by the French law of 1 July 1901',
    'Registered office: 17 rue du Coq, 45600 Sully-sur-Loire, France',
    'SIREN number: 428 736 342',
    'SIRET number (registered office): 428 736 342 00026',
    'APE code: 85.59A — Continuing adult education',
    'Intra-Community VAT number: not applicable — the association is not liable for value added tax',
    'RNA number (national register of associations): W452017552',
    'Publication director: Guy Boitout, president of the association',
    'Contact email address: contact@institut-rop.com',
    'Telephone: +33 6 07 84 26 14 (WhatsApp preferred)',
    'Site host: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States',
  ],

  a3h: 'Article 3 — Nature of the product sold',
  a3: [
    'The Online Book is **digital content supplied without a tangible medium**, read online from the Site. No file is downloaded, sent or handed over to the Customer.',
    'The order grants the Customer a **personal, non-exclusive and non-transferable right of access** to the Online Book, for strictly personal purposes. This right transfers no intellectual property right and does not constitute the sale of a copy.',
    'Access is open for an indefinite period from payment, subject to article 11. The Seller undertakes to keep the Online Book accessible for a minimum of **three (3) years** from the order.',
  ],

  a4h: 'Article 4 — Price',
  a4: [
    'The price of the Online Book is **€70 inclusive of all taxes**. It is stated in euros and displayed inclusive of all taxes on the order page, in the cart and on the order confirmation page.',
    'Under French law no. 2011-590 of 26 May 2011 on the price of digital books, this price is the retail price set by the publisher and is binding on anyone offering the Online Book to a buyer located in France.',
    'The Seller is not liable for value added tax. The stated price therefore includes no VAT and no VAT is charged to the Customer, whatever their country of residence. Should the Seller’s tax position change, the displayed price would remain the price inclusive of all taxes.',
    'No delivery charge applies, as the Online Book is read online.',
  ],

  a5h: 'Article 5 — Ordering',
  a5lead: 'An order is placed through the following steps:',
  a5steps: [
    'adding the Online Book to the cart;',
    'opening the cart, where the Customer can check the details of the order and its total price and, if needed, amend its contents;',
    'confirming the order: the Customer enters their email address, reads and accepts these Terms, and expresses consent to immediate performance of the contract under the conditions of article 8;',
    'redirection to the secure payment page and payment of the price;',
    'order confirmation, sent to the Customer by email to the address they provided.',
  ],
  a5tail: [
    'The Customer is invited to check that their email address is correct: it is to that address that the access link to the Online Book is sent.',
    'The sale is final only once the price has actually been collected. The Seller reserves the right to refuse any order that is abnormal, placed in bad faith, or for any other legitimate reason.',
  ],

  a6h: 'Article 6 — Payment',
  a6: [
    'Payment is made by bank card, in a single instalment, at the time of the order, on a payment page hosted by the provider Stripe Payments Europe, Ltd. Card details are entered directly with Stripe: they do not pass through the Site and are neither collected nor stored by the Seller.',
    'The accepted means of payment are those offered by Stripe on the payment page at the time of the order.',
  ],

  a7h: 'Article 7 — Provision of access',
  a7: [
    'Access to the Online Book is opened immediately after payment is confirmed.',
    'An email containing a personal access link is sent to the address given by the Customer. This link is valid for seven (7) days; it opens a reading session on the device from which it is used. The Customer may request a new link at any time from the Site, at the same email address, in particular in order to read on another device.',
    'The access link and the reading session are strictly personal. The Customer undertakes not to communicate or share them, nor to allow a third party to use them.',
    'Reading requires an internet connection and a recent browser. The Seller does not guarantee that the Site will work on obsolete or unusual configurations.',
  ],

  a8h: 'Article 8 — Right of withdrawal and express waiver',
  a8pre: [
    'The Customer has, in principle, a period of fourteen (14) days in which to exercise their right of withdrawal, under article L. 221-18 of the French consumer code.',
    'However, under **article L. 221-28, 13°** of the same code, this right cannot be exercised for contracts supplying digital content not provided on a tangible medium where performance began after the Customer’s prior express agreement and their express waiver of the right of withdrawal.',
    'By ticking the box provided for that purpose when confirming the order, the Customer:',
  ],
  a8items: [
    '**expressly requests** that performance of the contract begin immediately, before the withdrawal period expires; and',
    '**expressly acknowledges** that they will lose their right of withdrawal once the contract has been fully performed, that is, as soon as access to the Online Book is opened.',
  ],
  a8post: [
    'The date and time of that consent are recorded and kept by the Seller as evidence.',
    'A Customer who does not wish to waive their right of withdrawal cannot receive immediate access; they may abandon the order before payment.',
  ],

  a9h: 'Article 9 — Legal guarantees',
  a9: [
    'The Seller supplies the Online Book in conformity with the contract and is liable for lack of conformity existing at the time of supply of the digital content and appearing within two years of that supply, under the conditions of **articles L. 224-25-12 et seq. of the French consumer code**.',
    'In the event of lack of conformity, the Customer may require the digital content to be brought into conformity free of charge, within a reasonable time and without major inconvenience to them. Failing that, they may obtain a price reduction or termination of the contract under the conditions of articles L. 224-25-17 et seq. of the same code.',
    'The Customer also benefits from the legal guarantee against hidden defects provided for in **articles 1641 to 1649 of the French civil code**, allowing them, where a hidden defect exists, to obtain rescission of the sale or a price reduction, within two years of discovering the defect.',
    'These guarantees are exercised free of charge with the Seller, at the email address given in article 2.',
  ],

  a10h: 'Article 10 — Intellectual property',
  a10: [
    'All content of the Online Book and of the Site — texts, illustrations, diagrams, photographs, anatomical plates, summary materials, quizzes and reflex maps — is protected by intellectual property law and remains the exclusive property of its authors and rights holders.',
    'The Customer undertakes in particular not to reproduce, represent, adapt, translate, distribute, make available to the public, resell, assign or exploit for commercial or teaching purposes all or part of the Online Book, nor to extract or reuse a substantial part of it, without prior written authorisation.',
    'Reproduction of extracts for strictly private use, within the limits of the exceptions provided for in article L. 122-5 of the French intellectual property code, remains permitted.',
  ],

  a11h: 'Article 11 — Refund and end of access',
  a11: [
    'Where an order is refunded, for whatever reason, access to the Online Book ends: the authorisation attached to the Customer’s account is revoked and no new access link is issued to them.',
    'The Seller may suspend or revoke a Customer’s access in the event of a serious breach of these Terms, in particular sharing of the access link or unauthorised reproduction of the Online Book. Such a measure is notified to the Customer and, except in cases of established fraud, preceded by a formal notice that has gone unheeded.',
  ],

  a12h: 'Article 12 — Service availability and liability',
  a12: [
    'The Seller endeavours to keep the Site continuously accessible. It may nonetheless suspend access for maintenance or in the event of force majeure, endeavouring to limit the length of the interruption and to inform Customers of it.',
    'The Online Book is a reference work intended for health professionals and trained practitioners. It replaces neither training, nor a diagnosis, nor medical advice, and does not engage the liability of the Seller or of the author for acts performed by the Customer in the course of their practice.',
    'The Seller cannot be held liable for damage resulting from the Customer’s own fault, in particular the sharing of their access link, nor for indirect damage. Nothing in these Terms limits the Seller’s liability where the law forbids it.',
  ],

  a13h: 'Article 13 — Personal data',
  a13p1:
    'The data collected when ordering — email address, order data, reading language — is necessary to process the order, to deliver access and to meet the Seller’s accounting obligations. It is not transferred to third parties for commercial purposes.',
  a13p2:
    'The Customer has a right of access, rectification, erasure, restriction, objection and portability, which may be exercised at the email address given in article 2. The full details — data collected, recipients, retention periods and cookies — are described in the {link}.',
  a13linkText: 'privacy policy',

  a14h: 'Article 14 — Complaints and consumer mediation',
  a14pre: [
    'Any complaint must be addressed to the Seller — Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire — at the email address given in article 2. The Seller undertakes to reply within a reasonable time.',
    'Under article L. 612-1 of the French consumer code, the Customer may have free recourse to a consumer mediator with a view to settling the dispute amicably, after having attempted to resolve it directly with the Seller by a written complaint.',
    'The Seller has appointed, by agreement, the following consumer mediation body:',
  ],
  a14address: '197 boulevard Saint-Germain, 75007 Paris, France',
  a14post: [
    'The Customer may refer a dispute to Avenir Conso either online, using the form available on its site, or by post to the address above, enclosing the documents supporting the request. Mediation is free for the Customer, its cost being borne by the Seller.',
    'Under article L. 612-2 of the French consumer code, the request is admissible only if the Customer can show that they first attempted to resolve the dispute directly with the Seller by a written complaint, and if it is submitted within one year of that complaint.',
  ],

  a15h: 'Article 15 — Governing law and jurisdiction',
  a15: [
    'These Terms are governed by French law. The more protective mandatory provisions of the country of habitual residence of a consumer Customer residing in another Member State of the European Union remain applicable.',
    'Failing an amicable settlement, any dispute falls within the jurisdiction of the French courts, under the conditions laid down by the French code of civil procedure.',
  ],
}

const de: Content = {
  metaTitle: 'Allgemeine Geschäftsbedingungen · R.O.P. · Guy Boitout',
  metaDescription:
    'Allgemeine Geschäftsbedingungen für das Online-Buch „Okzipito-Podale Reflextherapie und die Viszera der Bauch- und Beckenhöhle“.',
  topbar: 'Allgemeine Geschäftsbedingungen',
  eyebrow: 'Vertragsdokument',
  h1: 'Allgemeine Geschäftsbedingungen',
  updated: 'Fassung gültig ab dem',
  translationNote:
    'Diese Übersetzung dient der Information. Bei Abweichungen ist die französische Fassung maßgeblich.',

  a1h: 'Artikel 1 — Gegenstand und Geltungsbereich',
  a1: [
    'Diese Allgemeinen Geschäftsbedingungen (die „AGB“) regeln den Verkauf des Online-Buchs „Okzipito-Podale Reflextherapie und die Viszera der Bauch- und Beckenhöhle“ (das „Online-Buch“), das auf der Website {site} (die „Website“) von der Association Française de Réflexologie (der „Verkäufer“), näher bezeichnet in Artikel 2, angeboten wird, an jeden Käufer, der als Verbraucher im Sinne des französischen Verbrauchergesetzbuchs handelt (der „Kunde“).',
    'Jede auf der Website aufgegebene Bestellung setzt die vorherige ausdrückliche Annahme dieser AGB voraus, die bei der Bestätigung der Bestellung über ein Kontrollkästchen eingeholt wird. Maßgeblich sind die am Tag der Bestellung geltenden AGB; ihre Fassung wird zusammen mit der Bestellung archiviert.',
    'Das Online-Buch ist das einzige auf der Website verkaufte Produkt. Die gedruckte Ausgabe des Werks wird hier nicht vertrieben.',
  ],

  a2h: 'Artikel 2 — Identität des Verkäufers',
  a2: [
    'Firmenname: Association Française de Réflexologie',
    'Rechtsform: eingetragener Verein nach dem französischen Gesetz vom 1. Juli 1901',
    'Sitz: 17 rue du Coq, 45600 Sully-sur-Loire, Frankreich',
    'SIREN-Nummer: 428 736 342',
    'SIRET-Nummer (Sitz): 428 736 342 00026',
    'APE-Code: 85.59A — Erwachsenenweiterbildung',
    'Innergemeinschaftliche USt-IdNr.: entfällt — der Verein ist nicht umsatzsteuerpflichtig',
    'RNA-Nummer (nationales Vereinsregister): W452017552',
    'Verantwortlich für die Veröffentlichung: Guy Boitout, Präsident des Vereins',
    'Kontakt-E-Mail-Adresse: contact@institut-rop.com',
    'Telefon: +33 6 07 84 26 14 (Kontakt bevorzugt über WhatsApp)',
    'Hoster der Website: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Vereinigte Staaten',
  ],

  a3h: 'Artikel 3 — Art des verkauften Produkts',
  a3: [
    'Das Online-Buch ist ein **ohne körperlichen Datenträger bereitgestellter digitaler Inhalt**, der online über die Website gelesen wird. Es wird keine Datei heruntergeladen, versandt oder an den Kunden übergeben.',
    'Die Bestellung verschafft dem Kunden ein **persönliches, nicht ausschließliches und nicht übertragbares Zugangsrecht** zum Online-Buch zu ausschließlich persönlichen Zwecken. Dieses Recht überträgt kein Recht des geistigen Eigentums und stellt keinen Verkauf eines Exemplars dar.',
    'Der Zugang wird ab der Zahlung auf unbestimmte Zeit eröffnet, vorbehaltlich des Artikels 11. Der Verkäufer verpflichtet sich, das Online-Buch ab der Bestellung mindestens **drei (3) Jahre** lang zugänglich zu halten.',
  ],

  a4h: 'Artikel 4 — Preis',
  a4: [
    'Der Preis des Online-Buchs beträgt **70 € einschließlich aller Steuern**. Er wird in Euro angegeben und auf der Bestellseite, im Warenkorb und auf der Bestätigungsseite einschließlich aller Steuern ausgewiesen.',
    'Nach dem französischen Gesetz Nr. 2011-590 vom 26. Mai 2011 über den Preis des digitalen Buchs ist dieser Preis der vom Verlag festgesetzte Endverkaufspreis und für jeden verbindlich, der das Online-Buch einem in Frankreich befindlichen Käufer anbietet.',
    'Der Verkäufer ist nicht umsatzsteuerpflichtig. Der angegebene Preis enthält daher keine Umsatzsteuer, und dem Kunden wird unabhängig von seinem Wohnsitzland keine Umsatzsteuer berechnet. Sollte sich die steuerliche Lage des Verkäufers ändern, bliebe der angezeigte Preis der Preis einschließlich aller Steuern.',
    'Es fallen keine Versandkosten an, da das Online-Buch online gelesen wird.',
  ],

  a5h: 'Artikel 5 — Bestellung',
  a5lead: 'Die Bestellung erfolgt in folgenden Schritten:',
  a5steps: [
    'Hinzufügen des Online-Buchs zum Warenkorb;',
    'Aufrufen des Warenkorbs, in dem der Kunde die Einzelheiten seiner Bestellung und deren Gesamtpreis prüfen und den Inhalt gegebenenfalls berichtigen kann;',
    'Bestätigung der Bestellung: Der Kunde gibt seine E-Mail-Adresse ein, nimmt diese AGB zur Kenntnis und akzeptiert sie und erklärt seine Zustimmung zur sofortigen Vertragserfüllung nach Maßgabe des Artikels 8;',
    'Weiterleitung zur gesicherten Zahlungsseite und Zahlung des Preises;',
    'Bestellbestätigung, die dem Kunden per E-Mail an die von ihm angegebene Adresse übersandt wird.',
  ],
  a5tail: [
    'Der Kunde wird gebeten, die Richtigkeit seiner E-Mail-Adresse zu prüfen: An diese Adresse wird ihm der Zugangslink zum Online-Buch gesandt.',
    'Der Verkauf wird erst mit dem tatsächlichen Eingang des Preises endgültig. Der Verkäufer behält sich das Recht vor, jede Bestellung abzulehnen, die ungewöhnlich ist, bösgläubig aufgegeben wurde oder aus einem anderen berechtigten Grund.',
  ],

  a6h: 'Artikel 6 — Zahlung',
  a6: [
    'Die Zahlung erfolgt per Bankkarte in einer Summe zum Zeitpunkt der Bestellung auf einer Zahlungsseite, die von dem Dienstleister Stripe Payments Europe, Ltd. betrieben wird. Die Kartendaten werden unmittelbar bei Stripe eingegeben: Sie laufen nicht über die Website und werden vom Verkäufer weder erhoben noch gespeichert.',
    'Die akzeptierten Zahlungsmittel sind diejenigen, die Stripe zum Zeitpunkt der Bestellung auf der Zahlungsseite anbietet.',
  ],

  a7h: 'Artikel 7 — Bereitstellung des Zugangs',
  a7: [
    'Der Zugang zum Online-Buch wird unmittelbar nach Bestätigung der Zahlung eröffnet.',
    'Eine E-Mail mit einem persönlichen Zugangslink wird an die vom Kunden angegebene Adresse gesandt. Dieser Link ist sieben (7) Tage gültig; er eröffnet eine Lesesitzung auf dem Gerät, von dem aus er verwendet wird. Der Kunde kann jederzeit über die Website einen neuen Link an dieselbe E-Mail-Adresse anfordern, insbesondere um auf einem anderen Gerät zu lesen.',
    'Der Zugangslink und die Lesesitzung sind streng persönlich. Der Kunde verpflichtet sich, sie nicht weiterzugeben, nicht zu teilen und Dritten keine Nutzung zu ermöglichen.',
    'Das Lesen erfordert eine Internetverbindung und einen aktuellen Browser. Der Verkäufer gewährleistet nicht, dass die Website auf veralteten oder ungewöhnlichen Konfigurationen funktioniert.',
  ],

  a8h: 'Artikel 8 — Widerrufsrecht und ausdrücklicher Verzicht',
  a8pre: [
    'Dem Kunden steht grundsätzlich eine Frist von vierzehn (14) Tagen zu, um sein Widerrufsrecht nach Artikel L. 221-18 des französischen Verbrauchergesetzbuchs auszuüben.',
    'Nach **Artikel L. 221-28 Nr. 13** desselben Gesetzbuchs kann dieses Recht jedoch nicht ausgeübt werden bei Verträgen über die Lieferung digitaler Inhalte, die nicht auf einem körperlichen Datenträger geliefert werden, wenn die Ausführung nach vorheriger ausdrücklicher Zustimmung des Kunden und seinem ausdrücklichen Verzicht auf das Widerrufsrecht begonnen hat.',
    'Mit dem Ankreuzen des dafür vorgesehenen Kästchens bei der Bestätigung seiner Bestellung:',
  ],
  a8items: [
    '**verlangt der Kunde ausdrücklich**, dass die Vertragserfüllung sofort und vor Ablauf der Widerrufsfrist beginnt; und',
    '**erkennt er ausdrücklich an**, dass er sein Widerrufsrecht verliert, sobald der Vertrag vollständig erfüllt ist, das heißt mit der Eröffnung seines Zugangs zum Online-Buch.',
  ],
  a8post: [
    'Datum und Uhrzeit dieser Zustimmung werden vom Verkäufer als Nachweis aufgezeichnet und aufbewahrt.',
    'Ein Kunde, der nicht auf sein Widerrufsrecht verzichten möchte, kann den sofortigen Zugang nicht erhalten; er kann vor der Zahlung von seiner Bestellung Abstand nehmen.',
  ],

  a9h: 'Artikel 9 — Gesetzliche Gewährleistung',
  a9: [
    'Der Verkäufer liefert das Online-Buch vertragsgemäß und haftet für Vertragswidrigkeiten, die bei der Bereitstellung des digitalen Inhalts bestehen und innerhalb von zwei Jahren danach auftreten, nach Maßgabe der **Artikel L. 224-25-12 ff. des französischen Verbrauchergesetzbuchs**.',
    'Bei Vertragswidrigkeit kann der Kunde die unentgeltliche Herstellung des vertragsgemäßen Zustands des digitalen Inhalts innerhalb einer angemessenen Frist und ohne erhebliche Unannehmlichkeiten verlangen. Andernfalls kann er eine Minderung des Preises oder die Vertragsauflösung nach Maßgabe der Artikel L. 224-25-17 ff. desselben Gesetzbuchs erlangen.',
    'Der Kunde genießt außerdem die gesetzliche Gewährleistung für verborgene Mängel nach den **Artikeln 1641 bis 1649 des französischen Zivilgesetzbuchs**, die es ihm erlaubt, bei einem verborgenen Mangel innerhalb von zwei Jahren ab dessen Entdeckung die Rückabwicklung des Kaufs oder eine Preisminderung zu erlangen.',
    'Diese Gewährleistungsrechte werden unentgeltlich gegenüber dem Verkäufer unter der in Artikel 2 angegebenen E-Mail-Adresse geltend gemacht.',
  ],

  a10h: 'Artikel 10 — Geistiges Eigentum',
  a10: [
    'Sämtliche Inhalte des Online-Buchs und der Website — Texte, Illustrationen, Schemata, Fotografien, anatomische Tafeln, Zusammenfassungen, Quiz und Reflexkarten — sind durch das Recht des geistigen Eigentums geschützt und bleiben ausschließliches Eigentum ihrer Urheber und Rechteinhaber.',
    'Der Kunde verpflichtet sich insbesondere, das Online-Buch weder ganz noch teilweise zu vervielfältigen, wiederzugeben, zu bearbeiten, zu übersetzen, zu verbreiten, öffentlich zugänglich zu machen, weiterzuverkaufen, abzutreten oder zu gewerblichen oder Unterrichtszwecken zu verwerten sowie keinen wesentlichen Teil daraus zu entnehmen oder weiterzuverwenden, ohne vorherige schriftliche Genehmigung.',
    'Die Vervielfältigung von Auszügen zum ausschließlich privaten Gebrauch bleibt im Rahmen der Ausnahmen des Artikels L. 122-5 des französischen Gesetzbuchs über das geistige Eigentum zulässig.',
  ],

  a11h: 'Artikel 11 — Erstattung und Ende des Zugangs',
  a11: [
    'Wird die Bestellung aus welchem Grund auch immer erstattet, endet der Zugang zum Online-Buch: Die dem Konto des Kunden zugeordnete Berechtigung wird widerrufen und es wird ihm kein neuer Zugangslink ausgestellt.',
    'Der Verkäufer kann den Zugang eines Kunden bei einem schwerwiegenden Verstoß gegen diese AGB aussetzen oder widerrufen, insbesondere bei Weitergabe des Zugangslinks oder unerlaubter Vervielfältigung des Online-Buchs. Diese Maßnahme wird dem Kunden mitgeteilt und geht, außer bei erwiesenem Betrug, eine erfolglos gebliebene Mahnung voraus.',
  ],

  a12h: 'Artikel 12 — Verfügbarkeit des Dienstes und Haftung',
  a12: [
    'Der Verkäufer bemüht sich, die Website durchgehend zugänglich zu halten. Er kann den Zugang jedoch wegen Wartungsarbeiten oder bei höherer Gewalt aussetzen und bemüht sich dabei, die Dauer der Unterbrechung zu begrenzen und die Kunden darüber zu informieren.',
    'Das Online-Buch ist ein Nachschlagewerk für Angehörige der Gesundheitsberufe und ausgebildete Praktiker. Es ersetzt weder eine Ausbildung noch eine Diagnose noch einen ärztlichen Rat und begründet keine Haftung des Verkäufers oder des Autors für Handlungen, die der Kunde im Rahmen seiner Tätigkeit vornimmt.',
    'Der Verkäufer haftet nicht für Schäden, die auf ein Verschulden des Kunden zurückgehen, insbesondere auf die Weitergabe seines Zugangslinks, und nicht für mittelbare Schäden. Keine Bestimmung dieser AGB beschränkt die Haftung des Verkäufers in den Fällen, in denen das Gesetz dies untersagt.',
  ],

  a13h: 'Artikel 13 — Personenbezogene Daten',
  a13p1:
    'Die bei der Bestellung erhobenen Daten — E-Mail-Adresse, Bestelldaten, Lesesprache — sind für die Bearbeitung der Bestellung, die Gewährung des Zugangs und die Erfüllung der buchhalterischen Pflichten des Verkäufers erforderlich. Sie werden nicht zu kommerziellen Zwecken an Dritte weitergegeben.',
  a13p2:
    'Der Kunde hat ein Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit, das er unter der in Artikel 2 angegebenen E-Mail-Adresse ausüben kann. Die vollständigen Einzelheiten — erhobene Daten, Empfänger, Speicherfristen und Cookies — sind in der {link} beschrieben.',
  a13linkText: 'Datenschutzerklärung',

  a14h: 'Artikel 14 — Beschwerde und Verbraucherschlichtung',
  a14pre: [
    'Jede Beschwerde ist an den Verkäufer — Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire — unter der in Artikel 2 angegebenen E-Mail-Adresse zu richten. Der Verkäufer verpflichtet sich, innerhalb einer angemessenen Frist zu antworten.',
    'Nach Artikel L. 612-1 des französischen Verbrauchergesetzbuchs kann der Kunde unentgeltlich einen Verbraucherschlichter zur gütlichen Beilegung der Streitigkeit anrufen, nachdem er versucht hat, sie durch eine schriftliche Beschwerde unmittelbar mit dem Verkäufer zu lösen.',
    'Der Verkäufer hat vertraglich die folgende Verbraucherschlichtungsstelle benannt:',
  ],
  a14address: '197 boulevard Saint-Germain, 75007 Paris, Frankreich',
  a14post: [
    'Der Kunde kann Avenir Conso entweder online über das auf deren Website bereitgestellte Formular oder per Post an die oben genannte Anschrift anrufen und die seinen Antrag stützenden Unterlagen beifügen. Die Schlichtung ist für den Kunden kostenlos; die Kosten trägt der Verkäufer.',
    'Nach Artikel L. 612-2 des französischen Verbrauchergesetzbuchs ist der Antrag nur zulässig, wenn der Kunde nachweist, dass er zuvor versucht hat, die Streitigkeit durch eine schriftliche Beschwerde unmittelbar mit dem Verkäufer zu lösen, und wenn er innerhalb eines Jahres nach dieser Beschwerde gestellt wird.',
  ],

  a15h: 'Artikel 15 — Anwendbares Recht und Gerichtsstand',
  a15: [
    'Diese AGB unterliegen französischem Recht. Die zwingenden, weitergehend schützenden Bestimmungen des Landes des gewöhnlichen Aufenthalts eines Verbraucherkunden mit Wohnsitz in einem anderen Mitgliedstaat der Europäischen Union bleiben anwendbar.',
    'Kommt keine gütliche Einigung zustande, sind für jede Streitigkeit die französischen Gerichte nach Maßgabe der französischen Zivilprozessordnung zuständig.',
  ],
}

const es: Content = {
  metaTitle: 'Condiciones generales de venta · R.O.P. · Guy Boitout',
  metaDescription:
    'Condiciones generales de venta del libro en línea «Reflexoterapia occípito-podal y vísceras de las cavidades abdominal y pélvica».',
  topbar: 'Condiciones generales de venta',
  eyebrow: 'Documento contractual',
  h1: 'Condiciones generales de venta',
  updated: 'Versión en vigor a',
  translationNote:
    'Esta traducción se facilita a título informativo. En caso de discrepancia, prevalece la versión francesa.',

  a1h: 'Artículo 1 — Objeto y ámbito de aplicación',
  a1: [
    'Las presentes condiciones generales de venta (las «CGV») rigen la venta del libro en línea «Reflexoterapia occípito-podal y vísceras de las cavidades abdominal y pélvica» (el «Libro en línea»), ofrecido en el sitio {site} (el «Sitio») por la Association Française de Réflexologie (el «Vendedor»), identificada en el artículo 2, a todo comprador que actúe en calidad de consumidor en el sentido del código de consumo francés (el «Cliente»).',
    'Todo pedido realizado en el Sitio supone la aceptación previa y expresa de las presentes CGV, recogida mediante una casilla de verificación al confirmar el pedido. Las CGV aplicables son las vigentes en la fecha del pedido; su versión se archiva junto con este.',
    'El Libro en línea es el único producto que se vende en el Sitio. La edición impresa de la obra no se comercializa aquí.',
  ],

  a2h: 'Artículo 2 — Identidad del Vendedor',
  a2: [
    'Denominación social: Association Française de Réflexologie',
    'Forma jurídica: asociación declarada, regida por la ley francesa de 1 de julio de 1901',
    'Domicilio social: 17 rue du Coq, 45600 Sully-sur-Loire, Francia',
    'Número SIREN: 428 736 342',
    'Número SIRET (domicilio social): 428 736 342 00026',
    'Código APE: 85.59A — Formación continua de adultos',
    'Número de IVA intracomunitario: no procede — la asociación no está sujeta al impuesto sobre el valor añadido',
    'Número RNA (registro nacional de asociaciones): W452017552',
    'Director de la publicación: Guy Boitout, presidente de la asociación',
    'Dirección electrónica de contacto: contact@institut-rop.com',
    'Teléfono: +33 6 07 84 26 14 (contacto preferentemente por WhatsApp)',
    'Alojador del Sitio: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos',
  ],

  a3h: 'Artículo 3 — Naturaleza del producto vendido',
  a3: [
    'El Libro en línea es un **contenido digital suministrado sin soporte material**, consultable en línea desde el Sitio. No se descarga, envía ni entrega ningún archivo al Cliente.',
    'El pedido confiere al Cliente un **derecho de acceso personal, no exclusivo e intransferible** al Libro en línea, con fines estrictamente personales. Este derecho no implica cesión alguna de derechos de propiedad intelectual y no constituye la venta de un ejemplar.',
    'El acceso queda abierto por tiempo indefinido desde el pago, sin perjuicio del artículo 11. El Vendedor se compromete a mantener el Libro en línea accesible durante un plazo mínimo de **tres (3) años** desde el pedido.',
  ],

  a4h: 'Artículo 4 — Precio',
  a4: [
    'El precio del Libro en línea es de **70 € impuestos incluidos**. Se indica en euros y se muestra con todos los impuestos incluidos en la página de pedido, en el carrito y en la página de confirmación del pedido.',
    'Conforme a la ley francesa n.º 2011-590, de 26 de mayo de 2011, relativa al precio del libro digital, este precio es el precio de venta al público fijado por el editor y se impone a toda persona que ofrezca el Libro en línea a un comprador situado en Francia.',
    'El Vendedor no está sujeto al impuesto sobre el valor añadido. El precio indicado no incluye por tanto ningún IVA y no se factura IVA alguno al Cliente, cualquiera que sea su país de residencia. Si la situación fiscal del Vendedor cambiara, el precio mostrado seguiría siendo el precio con todos los impuestos incluidos.',
    'No se aplica ningún gasto de envío, ya que el Libro en línea se consulta en línea.',
  ],

  a5h: 'Artículo 5 — Pedido',
  a5lead: 'El pedido se realiza siguiendo las siguientes etapas:',
  a5steps: [
    'adición del Libro en línea al carrito;',
    'acceso al carrito, que permite al Cliente comprobar el detalle de su pedido y su precio total y, en su caso, corregir su contenido;',
    'confirmación del pedido: el Cliente introduce su dirección electrónica, toma conocimiento de las presentes CGV y las acepta, y expresa su consentimiento a la ejecución inmediata del contrato en las condiciones del artículo 8;',
    'redirección a la página de pago seguro y abono del precio;',
    'confirmación del pedido, remitida al Cliente por correo electrónico a la dirección que haya indicado.',
  ],
  a5tail: [
    'Se invita al Cliente a comprobar la exactitud de su dirección electrónica: es a esa dirección adonde se le envía el enlace de acceso al Libro en línea.',
    'La venta solo es definitiva tras el cobro efectivo del precio. El Vendedor se reserva el derecho de rechazar cualquier pedido que presente un carácter anómalo, se haya realizado de mala fe o por cualquier otro motivo legítimo.',
  ],

  a6h: 'Artículo 6 — Pago',
  a6: [
    'El pago se efectúa mediante tarjeta bancaria, en un solo plazo, en el momento del pedido, en una página de pago alojada por el proveedor Stripe Payments Europe, Ltd. Los datos de la tarjeta se introducen directamente ante Stripe: no transitan por el Sitio y no son recogidos ni conservados por el Vendedor.',
    'Los medios de pago aceptados son los que Stripe ofrezca en la página de pago en el momento del pedido.',
  ],

  a7h: 'Artículo 7 — Puesta a disposición del acceso',
  a7: [
    'El acceso al Libro en línea se abre inmediatamente después de la confirmación del pago.',
    'Se envía un correo electrónico con un enlace de acceso personal a la dirección indicada por el Cliente. Este enlace es válido siete (7) días; abre una sesión de lectura en el dispositivo desde el que se utiliza. El Cliente puede solicitar en cualquier momento un nuevo enlace desde el Sitio, a la misma dirección electrónica, en particular para leer desde otro dispositivo.',
    'El enlace de acceso y la sesión de lectura son estrictamente personales. El Cliente se compromete a no comunicarlos, no compartirlos ni permitir su uso por terceros.',
    'La lectura requiere una conexión a internet y un navegador reciente. El Vendedor no garantiza el funcionamiento del Sitio en configuraciones obsoletas o inhabituales.',
  ],

  a8h: 'Artículo 8 — Derecho de desistimiento y renuncia expresa',
  a8pre: [
    'El Cliente dispone en principio de un plazo de catorce (14) días para ejercer su derecho de desistimiento, conforme al artículo L. 221-18 del código de consumo francés.',
    'No obstante, en aplicación del **apartado 13.º del artículo L. 221-28** del mismo código, este derecho no puede ejercerse en los contratos de suministro de contenido digital no prestado en un soporte material cuya ejecución haya comenzado tras el acuerdo previo expreso del Cliente y su renuncia expresa a su derecho de desistimiento.',
    'Al marcar la casilla prevista al efecto durante la confirmación de su pedido, el Cliente:',
  ],
  a8items: [
    '**solicita expresamente** que la ejecución del contrato comience de inmediato, antes de que expire el plazo de desistimiento; y',
    '**reconoce expresamente** que perderá su derecho de desistimiento en cuanto el contrato haya sido plenamente ejecutado, es decir, desde la apertura de su acceso al Libro en línea.',
  ],
  a8post: [
    'La fecha y la hora de dicho consentimiento se registran y conservan por el Vendedor como prueba.',
    'El Cliente que no desee renunciar a su derecho de desistimiento no puede beneficiarse del acceso inmediato; puede renunciar a su pedido antes del pago.',
  ],

  a9h: 'Artículo 9 — Garantías legales',
  a9: [
    'El Vendedor suministra el Libro en línea conforme al contrato y responde de las faltas de conformidad existentes en el momento del suministro del contenido digital y que aparezcan en un plazo de dos años desde este, en las condiciones previstas en los **artículos L. 224-25-12 y siguientes del código de consumo francés**.',
    'En caso de falta de conformidad, el Cliente puede exigir la puesta en conformidad del contenido digital sin gastos, en un plazo razonable y sin mayor inconveniente para él. En su defecto, puede obtener una reducción del precio o la resolución del contrato en las condiciones previstas en los artículos L. 224-25-17 y siguientes del mismo código.',
    'El Cliente se beneficia asimismo de la garantía legal contra los vicios ocultos prevista en los **artículos 1641 a 1649 del código civil francés**, que le permite, en caso de vicio oculto, obtener la resolución de la venta o una reducción del precio, en un plazo de dos años desde el descubrimiento del vicio.',
    'Estas garantías se ejercen sin gastos ante el Vendedor, en la dirección electrónica indicada en el artículo 2.',
  ],

  a10h: 'Artículo 10 — Propiedad intelectual',
  a10: [
    'El conjunto de los contenidos del Libro en línea y del Sitio — textos, ilustraciones, esquemas, fotografías, láminas anatómicas, materiales de síntesis, cuestionarios y cartografías reflejas — está protegido por el derecho de la propiedad intelectual y sigue siendo propiedad exclusiva de sus autores y derechohabientes.',
    'El Cliente se compromete en particular a no reproducir, representar, adaptar, traducir, difundir, poner a disposición del público, revender, ceder ni explotar con fines comerciales o pedagógicos la totalidad o parte del Libro en línea, así como a no extraer ni reutilizar una parte sustancial del mismo, sin autorización escrita previa.',
    'La reproducción de extractos para uso estrictamente privado, dentro de los límites de las excepciones previstas en el artículo L. 122-5 del código de la propiedad intelectual francés, sigue estando permitida.',
  ],

  a11h: 'Artículo 11 — Reembolso y fin del acceso',
  a11: [
    'En caso de reembolso del pedido, cualquiera que sea su causa, el acceso al Libro en línea finaliza: la autorización asociada a la cuenta del Cliente queda revocada y no se le expide ningún nuevo enlace de acceso.',
    'El Vendedor puede suspender o revocar el acceso de un Cliente en caso de incumplimiento grave de las presentes CGV, en particular por compartir el enlace de acceso o por reproducción no autorizada del Libro en línea. Esta medida se notifica al Cliente y, salvo fraude caracterizado, va precedida de un requerimiento que haya quedado sin efecto.',
  ],

  a12h: 'Artículo 12 — Disponibilidad del servicio y responsabilidad',
  a12: [
    'El Vendedor procura garantizar la accesibilidad continua del Sitio. No obstante, puede suspender el acceso por mantenimiento o en caso de fuerza mayor, procurando limitar la duración de la interrupción e informar de ella a los Clientes.',
    'El Libro en línea es una obra de referencia destinada a profesionales de la salud y a practicantes formados. No sustituye ni a una formación, ni a un diagnóstico, ni a un consejo médico, y no compromete la responsabilidad del Vendedor ni del autor por los actos realizados por el Cliente en el marco de su actividad.',
    'No podrá exigirse responsabilidad al Vendedor por daños derivados de una falta del Cliente, en particular por compartir su enlace de acceso, ni por daños indirectos. Ninguna estipulación de las presentes limita la responsabilidad del Vendedor en los casos en que la ley lo prohíbe.',
  ],

  a13h: 'Artículo 13 — Datos personales',
  a13p1:
    'Los datos recogidos al realizar el pedido — dirección electrónica, datos del pedido, idioma de lectura — son necesarios para tramitarlo, para dar el acceso y para cumplir las obligaciones contables del Vendedor. No se ceden a terceros con fines comerciales.',
  a13p2:
    'El Cliente dispone de un derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad, que puede ejercer en la dirección electrónica indicada en el artículo 2. Las modalidades completas — datos recogidos, destinatarios, plazos de conservación y cookies — se describen en la {link}.',
  a13linkText: 'política de privacidad',

  a14h: 'Artículo 14 — Reclamación y mediación de consumo',
  a14pre: [
    'Toda reclamación debe dirigirse al Vendedor — Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire — a la dirección electrónica indicada en el artículo 2. El Vendedor se compromete a responder en un plazo razonable.',
    'Conforme al artículo L. 612-1 del código de consumo francés, el Cliente puede recurrir gratuitamente a un mediador de consumo con vistas a la resolución amistosa del litigio, tras haber intentado resolverlo directamente con el Vendedor mediante una reclamación escrita.',
    'El Vendedor ha designado, por convenio, la siguiente entidad de mediación de consumo:',
  ],
  a14address: '197 boulevard Saint-Germain, 75007 París, Francia',
  a14post: [
    'El Cliente puede dirigirse a Avenir Conso bien en línea, mediante el formulario disponible en su sitio, bien por correo postal a la dirección indicada, adjuntando los documentos que respalden su solicitud. La mediación es gratuita para el Cliente, corriendo su carga financiera a cargo del Vendedor.',
    'Conforme al artículo L. 612-2 del código de consumo francés, la solicitud solo es admisible si el Cliente acredita haber intentado previamente resolver el litigio directamente con el Vendedor mediante una reclamación escrita, y si se presenta en el plazo de un año desde dicha reclamación.',
  ],

  a15h: 'Artículo 15 — Derecho aplicable y jurisdicción',
  a15: [
    'Las presentes CGV se someten al derecho francés. Siguen siendo aplicables las disposiciones imperativas más protectoras del país de residencia habitual del Cliente consumidor que resida en otro Estado miembro de la Unión Europea.',
    'A falta de resolución amistosa, todo litigio será competencia de los tribunales franceses, en las condiciones previstas por el código de procedimiento civil francés.',
  ],
}

const it: Content = {
  metaTitle: 'Condizioni generali di vendita · R.O.P. · Guy Boitout',
  metaDescription:
    'Condizioni generali di vendita del libro online «Riflessoterapia occipito-podalica e visceri delle cavità addominale e pelvica».',
  topbar: 'Condizioni generali di vendita',
  eyebrow: 'Documento contrattuale',
  h1: 'Condizioni generali di vendita',
  updated: 'Versione in vigore dal',
  translationNote:
    'La presente traduzione è fornita a titolo informativo. In caso di discordanza prevale la versione francese.',

  a1h: 'Articolo 1 — Oggetto e ambito di applicazione',
  a1: [
    'Le presenti condizioni generali di vendita (le «CGV») disciplinano la vendita del libro online «Riflessoterapia occipito-podalica e visceri delle cavità addominale e pelvica» (il «Libro online»), proposto sul sito {site} (il «Sito») dall’Association Française de Réflexologie (il «Venditore»), identificata all’articolo 2, a ogni acquirente che agisca in qualità di consumatore ai sensi del codice del consumo francese (il «Cliente»).',
    'Ogni ordine effettuato sul Sito presuppone l’accettazione preventiva ed espressa delle presenti CGV, raccolta mediante una casella di spunta al momento della conferma dell’ordine. Le CGV applicabili sono quelle in vigore alla data dell’ordine; la relativa versione è archiviata insieme ad esso.',
    'Il Libro online è l’unico prodotto venduto sul Sito. L’edizione a stampa dell’opera non è qui commercializzata.',
  ],

  a2h: 'Articolo 2 — Identità del Venditore',
  a2: [
    'Denominazione sociale: Association Française de Réflexologie',
    'Forma giuridica: associazione dichiarata, disciplinata dalla legge francese del 1º luglio 1901',
    'Sede sociale: 17 rue du Coq, 45600 Sully-sur-Loire, Francia',
    'Numero SIREN: 428 736 342',
    'Numero SIRET (sede): 428 736 342 00026',
    'Codice APE: 85.59A — Formazione continua degli adulti',
    'Numero di partita IVA intracomunitaria: non applicabile — l’associazione non è soggetta all’imposta sul valore aggiunto',
    'Numero RNA (registro nazionale delle associazioni): W452017552',
    'Direttore della pubblicazione: Guy Boitout, presidente dell’associazione',
    'Indirizzo di posta elettronica di contatto: contact@institut-rop.com',
    'Telefono: +33 6 07 84 26 14 (contatto preferibilmente via WhatsApp)',
    'Fornitore di hosting del Sito: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Stati Uniti',
  ],

  a3h: 'Articolo 3 — Natura del prodotto venduto',
  a3: [
    'Il Libro online è un **contenuto digitale fornito senza supporto materiale**, consultabile online dal Sito. Nessun file viene scaricato, inviato o consegnato al Cliente.',
    'L’ordine conferisce al Cliente un **diritto di accesso personale, non esclusivo e non trasferibile** al Libro online, per finalità strettamente personali. Tale diritto non comporta alcuna cessione di diritti di proprietà intellettuale e non costituisce la vendita di un esemplare.',
    'L’accesso è aperto a tempo indeterminato dal pagamento, fatto salvo l’articolo 11. Il Venditore si impegna a mantenere il Libro online accessibile per una durata minima di **tre (3) anni** dall’ordine.',
  ],

  a4h: 'Articolo 4 — Prezzo',
  a4: [
    'Il prezzo del Libro online è di **70 € tasse comprese**. È indicato in euro e visualizzato tasse comprese sulla pagina dell’ordine, nel carrello e sulla pagina di conferma dell’ordine.',
    'Ai sensi della legge francese n. 2011-590 del 26 maggio 2011 sul prezzo del libro digitale, tale prezzo è il prezzo di vendita al pubblico fissato dall’editore e si impone a chiunque proponga il Libro online a un acquirente situato in Francia.',
    'Il Venditore non è soggetto all’imposta sul valore aggiunto. Il prezzo indicato non comprende quindi alcuna IVA e nessuna IVA è addebitata al Cliente, qualunque sia il suo paese di residenza. Qualora la situazione fiscale del Venditore dovesse mutare, il prezzo esposto resterebbe il prezzo comprensivo di tutte le imposte.',
    'Non sono applicabili spese di consegna, poiché il Libro online è consultato online.',
  ],

  a5h: 'Articolo 5 — Ordine',
  a5lead: 'L’ordine è effettuato secondo le fasi seguenti:',
  a5steps: [
    'aggiunta del Libro online al carrello;',
    'accesso al carrello, che consente al Cliente di verificare il dettaglio del proprio ordine e il prezzo totale e, se del caso, di correggerne il contenuto;',
    'conferma dell’ordine: il Cliente inserisce il proprio indirizzo di posta elettronica, prende visione delle presenti CGV e le accetta, ed esprime il proprio consenso all’esecuzione immediata del contratto alle condizioni dell’articolo 8;',
    'reindirizzamento alla pagina di pagamento sicuro e pagamento del prezzo;',
    'conferma dell’ordine, inviata al Cliente per posta elettronica all’indirizzo da lui indicato.',
  ],
  a5tail: [
    'Il Cliente è invitato a verificare l’esattezza del proprio indirizzo di posta elettronica: è a tale indirizzo che gli viene inviato il link di accesso al Libro online.',
    'La vendita è definitiva solo dopo l’effettivo incasso del prezzo. Il Venditore si riserva il diritto di rifiutare qualsiasi ordine che presenti carattere anomalo, formulato in mala fede o per qualsiasi altro motivo legittimo.',
  ],

  a6h: 'Articolo 6 — Pagamento',
  a6: [
    'Il pagamento avviene con carta bancaria, in un’unica soluzione, al momento dell’ordine, su una pagina di pagamento ospitata dal fornitore Stripe Payments Europe, Ltd. I dati della carta sono inseriti direttamente presso Stripe: non transitano dal Sito e non sono né raccolti né conservati dal Venditore.',
    'I mezzi di pagamento accettati sono quelli proposti da Stripe sulla pagina di pagamento al momento dell’ordine.',
  ],

  a7h: 'Articolo 7 — Messa a disposizione dell’accesso',
  a7: [
    'L’accesso al Libro online è aperto immediatamente dopo la conferma del pagamento.',
    'Una e-mail contenente un link di accesso personale è inviata all’indirizzo indicato dal Cliente. Tale link è valido sette (7) giorni; apre una sessione di lettura sul dispositivo dal quale viene utilizzato. Il Cliente può richiedere in qualsiasi momento un nuovo link dal Sito, allo stesso indirizzo di posta elettronica, in particolare per leggere da un altro dispositivo.',
    'Il link di accesso e la sessione di lettura sono strettamente personali. Il Cliente si impegna a non comunicarli, a non condividerli e a non consentirne l’uso a terzi.',
    'La lettura richiede una connessione a internet e un browser recente. Il Venditore non garantisce il funzionamento del Sito su configurazioni obsolete o inusuali.',
  ],

  a8h: 'Articolo 8 — Diritto di recesso e rinuncia espressa',
  a8pre: [
    'Il Cliente dispone in linea di principio di un termine di quattordici (14) giorni per esercitare il proprio diritto di recesso, ai sensi dell’articolo L. 221-18 del codice del consumo francese.',
    'Tuttavia, in applicazione del **n. 13 dell’articolo L. 221-28** del medesimo codice, tale diritto non può essere esercitato per i contratti di fornitura di contenuto digitale non fornito su supporto materiale la cui esecuzione sia iniziata previo accordo espresso del Cliente e con sua espressa rinuncia al diritto di recesso.',
    'Spuntando la casella all’uopo prevista al momento della conferma del proprio ordine, il Cliente:',
  ],
  a8items: [
    '**chiede espressamente** che l’esecuzione del contratto abbia inizio immediatamente, prima della scadenza del termine di recesso; e',
    '**riconosce espressamente** che perderà il proprio diritto di recesso non appena il contratto sarà stato integralmente eseguito, ossia dall’apertura del suo accesso al Libro online.',
  ],
  a8post: [
    'La data e l’ora di tale consenso sono registrate e conservate dal Venditore a titolo di prova.',
    'Il Cliente che non desideri rinunciare al proprio diritto di recesso non può beneficiare dell’accesso immediato; può rinunciare al proprio ordine prima del pagamento.',
  ],

  a9h: 'Articolo 9 — Garanzie legali',
  a9: [
    'Il Venditore fornisce il Libro online conformemente al contratto e risponde dei difetti di conformità esistenti al momento della fornitura del contenuto digitale e che si manifestino entro due anni da questa, alle condizioni previste dagli **articoli L. 224-25-12 e seguenti del codice del consumo francese**.',
    'In caso di difetto di conformità, il Cliente può esigere la messa a conformità del contenuto digitale senza spese, entro un termine ragionevole e senza notevoli inconvenienti per lui. In mancanza, può ottenere una riduzione del prezzo o la risoluzione del contratto alle condizioni previste dagli articoli L. 224-25-17 e seguenti del medesimo codice.',
    'Il Cliente beneficia inoltre della garanzia legale per vizi occulti prevista dagli **articoli da 1641 a 1649 del codice civile francese**, che gli consente, in caso di vizio occulto, di ottenere la risoluzione della vendita o una riduzione del prezzo, entro due anni dalla scoperta del vizio.',
    'Tali garanzie si esercitano senza spese presso il Venditore, all’indirizzo di posta elettronica indicato all’articolo 2.',
  ],

  a10h: 'Articolo 10 — Proprietà intellettuale',
  a10: [
    'L’insieme dei contenuti del Libro online e del Sito — testi, illustrazioni, schemi, fotografie, tavole anatomiche, materiali di sintesi, quiz e mappe riflesse — è protetto dal diritto della proprietà intellettuale e resta di proprietà esclusiva dei rispettivi autori e aventi diritto.',
    'Il Cliente si impegna in particolare a non riprodurre, rappresentare, adattare, tradurre, diffondere, mettere a disposizione del pubblico, rivendere, cedere o sfruttare a fini commerciali o didattici il Libro online in tutto o in parte, né a estrarne o riutilizzarne una parte sostanziale, senza previa autorizzazione scritta.',
    'La riproduzione di estratti per uso strettamente privato resta consentita nei limiti delle eccezioni previste dall’articolo L. 122-5 del codice della proprietà intellettuale francese.',
  ],

  a11h: 'Articolo 11 — Rimborso e cessazione dell’accesso',
  a11: [
    'In caso di rimborso dell’ordine, quale che ne sia la causa, l’accesso al Libro online cessa: l’autorizzazione associata all’account del Cliente è revocata e non gli viene rilasciato alcun nuovo link di accesso.',
    'Il Venditore può sospendere o revocare l’accesso di un Cliente in caso di grave inadempimento delle presenti CGV, in particolare in caso di condivisione del link di accesso o di riproduzione non autorizzata del Libro online. Tale misura è notificata al Cliente e, salvo frode conclamata, preceduta da una diffida rimasta senza esito.',
  ],

  a12h: 'Articolo 12 — Disponibilità del servizio e responsabilità',
  a12: [
    'Il Venditore si adopera per assicurare l’accessibilità continua del Sito. Può tuttavia sospenderne l’accesso per manutenzione o in caso di forza maggiore, adoperandosi per limitare la durata dell’interruzione e per informarne i Clienti.',
    'Il Libro online è un’opera di riferimento destinata a professionisti della salute e a operatori formati. Non sostituisce né una formazione, né una diagnosi, né un parere medico, e non comporta responsabilità del Venditore o dell’autore per gli atti compiuti dal Cliente nell’ambito della propria attività.',
    'Il Venditore non può essere ritenuto responsabile per danni derivanti da una colpa del Cliente, in particolare dalla condivisione del suo link di accesso, né per danni indiretti. Nessuna clausola delle presenti limita la responsabilità del Venditore nei casi in cui la legge lo vieti.',
  ],

  a13h: 'Articolo 13 — Dati personali',
  a13p1:
    'I dati raccolti al momento dell’ordine — indirizzo di posta elettronica, dati dell’ordine, lingua di lettura — sono necessari al trattamento dell’ordine, alla concessione dell’accesso e all’adempimento degli obblighi contabili del Venditore. Non sono ceduti a terzi per finalità commerciali.',
  a13p2:
    'Il Cliente dispone di un diritto di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, che può esercitare all’indirizzo di posta elettronica indicato all’articolo 2. Le modalità complete — dati raccolti, destinatari, tempi di conservazione e cookie — sono descritte nell’{link}.',
  a13linkText: 'informativa sulla privacy',

  a14h: 'Articolo 14 — Reclamo e mediazione del consumo',
  a14pre: [
    'Ogni reclamo deve essere indirizzato al Venditore — Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire — all’indirizzo di posta elettronica indicato all’articolo 2. Il Venditore si impegna a rispondere entro un termine ragionevole.',
    'Ai sensi dell’articolo L. 612-1 del codice del consumo francese, il Cliente può ricorrere gratuitamente a un mediatore del consumo ai fini della risoluzione amichevole della controversia, dopo aver tentato di risolverla direttamente con il Venditore mediante un reclamo scritto.',
    'Il Venditore ha designato, per convenzione, il seguente organismo di mediazione del consumo:',
  ],
  a14address: '197 boulevard Saint-Germain, 75007 Parigi, Francia',
  a14post: [
    'Il Cliente può adire Avenir Conso online, mediante il modulo disponibile sul suo sito, oppure per posta all’indirizzo sopra indicato, allegando i documenti a sostegno della propria domanda. La mediazione è gratuita per il Cliente, essendone l’onere finanziario a carico del Venditore.',
    'Ai sensi dell’articolo L. 612-2 del codice del consumo francese, la domanda è ricevibile solo se il Cliente dimostra di aver previamente tentato di risolvere la controversia direttamente con il Venditore mediante un reclamo scritto e se è presentata entro un anno da tale reclamo.',
  ],

  a15h: 'Articolo 15 — Legge applicabile e foro competente',
  a15: [
    'Le presenti CGV sono soggette al diritto francese. Restano applicabili le disposizioni imperative più protettive del paese di residenza abituale del Cliente consumatore residente in un altro Stato membro dell’Unione europea.',
    'In mancanza di risoluzione amichevole, ogni controversia è di competenza dei giudici francesi, alle condizioni previste dal codice di procedura civile francese.',
  ],
}

const th: Content = {
  metaTitle: 'เงื่อนไขการขาย · R.O.P. · Guy Boitout',
  metaDescription:
    'เงื่อนไขการขายหนังสือออนไลน์ «การบำบัดด้วยรีเฟล็กซ์แบบท้ายทอย-ฝ่าเท้า และอวัยวะภายในช่องท้องและช่องเชิงกราน»',
  topbar: 'เงื่อนไขการขาย',
  eyebrow: 'เอกสารสัญญา',
  h1: 'เงื่อนไขการขาย',
  updated: 'ฉบับที่มีผลบังคับใช้ ณ วันที่',
  translationNote:
    'คำแปลนี้จัดทำขึ้นเพื่อเป็นข้อมูลเท่านั้น หากมีข้อความใดขัดแย้งกัน ให้ยึดฉบับภาษาฝรั่งเศสเป็นสำคัญ',

  a1h: 'ข้อ 1 — วัตถุประสงค์และขอบเขตการบังคับใช้',
  a1: [
    'เงื่อนไขการขายฉบับนี้ («เงื่อนไข») ใช้บังคับกับการขายหนังสือออนไลน์ «การบำบัดด้วยรีเฟล็กซ์แบบท้ายทอย-ฝ่าเท้า และอวัยวะภายในช่องท้องและช่องเชิงกราน» («หนังสือออนไลน์») ซึ่งเสนอขายบนเว็บไซต์ {site} («เว็บไซต์») โดย Association Française de Réflexologie («ผู้ขาย») ตามที่ระบุไว้ในข้อ 2 แก่ผู้ซื้อทุกรายที่กระทำการในฐานะผู้บริโภคตามความหมายของประมวลกฎหมายผู้บริโภคฝรั่งเศส («ลูกค้า»)',
    'การสั่งซื้อทุกครั้งบนเว็บไซต์ถือเป็นการยอมรับเงื่อนไขฉบับนี้ล่วงหน้าโดยชัดแจ้ง ซึ่งเก็บผ่านช่องทำเครื่องหมายในขั้นตอนยืนยันคำสั่งซื้อ เงื่อนไขที่ใช้บังคับคือฉบับที่มีผลในวันที่สั่งซื้อ และจะถูกจัดเก็บไว้พร้อมคำสั่งซื้อนั้น',
    'หนังสือออนไลน์เป็นสินค้าเพียงรายการเดียวที่จำหน่ายบนเว็บไซต์ ฉบับพิมพ์ของผลงานนี้มิได้จำหน่าย ณ ที่นี้',
  ],

  a2h: 'ข้อ 2 — ข้อมูลของผู้ขาย',
  a2: [
    'ชื่อนิติบุคคล : Association Française de Réflexologie',
    'รูปแบบทางกฎหมาย : สมาคมจดแจ้งภายใต้กฎหมายฝรั่งเศส ลงวันที่ 1 กรกฎาคม ค.ศ. 1901',
    'สำนักงานใหญ่ : 17 rue du Coq, 45600 Sully-sur-Loire ประเทศฝรั่งเศส',
    'เลขทะเบียน SIREN : 428 736 342',
    'เลขทะเบียน SIRET (สำนักงานใหญ่) : 428 736 342 00026',
    'รหัส APE : 85.59A — การศึกษาต่อเนื่องสำหรับผู้ใหญ่',
    'เลขประจำตัวผู้เสียภาษีมูลค่าเพิ่มภายในสหภาพยุโรป : ไม่มี — สมาคมไม่อยู่ในบังคับต้องเสียภาษีมูลค่าเพิ่ม',
    'เลขทะเบียน RNA (ทะเบียนสมาคมแห่งชาติ) : W452017552',
    'ผู้อำนวยการฝ่ายเผยแพร่ : Guy Boitout ประธานสมาคม',
    'อีเมลติดต่อ : contact@institut-rop.com',
    'โทรศัพท์ : +33 6 07 84 26 14 (ติดต่อทาง WhatsApp จะสะดวกที่สุด)',
    'ผู้ให้บริการโฮสติ้งของเว็บไซต์ : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723 สหรัฐอเมริกา',
  ],

  a3h: 'ข้อ 3 — ลักษณะของสินค้าที่จำหน่าย',
  a3: [
    'หนังสือออนไลน์เป็น**เนื้อหาดิจิทัลที่ส่งมอบโดยไม่มีสื่อบันทึกที่จับต้องได้** อ่านทางออนไลน์จากเว็บไซต์ ไม่มีการดาวน์โหลด ส่ง หรือมอบไฟล์ใดให้แก่ลูกค้า',
    'คำสั่งซื้อให้สิทธิแก่ลูกค้าเป็น**สิทธิ์เข้าถึงเฉพาะบุคคล ไม่ผูกขาด และโอนให้ผู้อื่นไม่ได้** ในหนังสือออนไลน์ เพื่อวัตถุประสงค์ส่วนตัวโดยเคร่งครัด สิทธิ์นี้มิได้เป็นการโอนสิทธิในทรัพย์สินทางปัญญาใด ๆ และมิใช่การขายฉบับหนึ่งฉบับใด',
    'สิทธิ์เข้าถึงเปิดให้โดยไม่มีกำหนดเวลานับแต่การชำระเงิน ทั้งนี้ภายใต้ข้อ 11 ผู้ขายรับที่จะคงหนังสือออนไลน์ให้เข้าถึงได้เป็นระยะเวลาอย่างน้อย **สาม (3) ปี** นับแต่วันสั่งซื้อ',
  ],

  a4h: 'ข้อ 4 — ราคา',
  a4: [
    'ราคาของหนังสือออนไลน์คือ **70 ยูโร รวมภาษีทั้งหมด** ระบุเป็นสกุลยูโรและแสดงแบบรวมภาษีทั้งหมดบนหน้าสั่งซื้อ ในตะกร้าสินค้า และบนหน้ายืนยันคำสั่งซื้อ',
    'ตามกฎหมายฝรั่งเศสเลขที่ 2011-590 ลงวันที่ 26 พฤษภาคม ค.ศ. 2011 ว่าด้วยราคาหนังสือดิจิทัล ราคานี้เป็นราคาขายปลีกที่สำนักพิมพ์กำหนด และมีผลผูกพันผู้ที่เสนอขายหนังสือออนไลน์แก่ผู้ซื้อที่อยู่ในประเทศฝรั่งเศสทุกราย',
    'ผู้ขายไม่อยู่ในบังคับต้องเสียภาษีมูลค่าเพิ่ม ราคาที่ระบุจึงไม่รวมภาษีมูลค่าเพิ่มใด ๆ และไม่มีการเรียกเก็บภาษีมูลค่าเพิ่มจากลูกค้า ไม่ว่าลูกค้าจะพำนักอยู่ในประเทศใด หากสถานะทางภาษีของผู้ขายเปลี่ยนแปลงไป ราคาที่แสดงจะยังคงเป็นราคารวมภาษีทั้งหมด',
    'ไม่มีค่าจัดส่ง เนื่องจากหนังสือออนไลน์อ่านผ่านระบบออนไลน์',
  ],

  a5h: 'ข้อ 5 — การสั่งซื้อ',
  a5lead: 'การสั่งซื้อดำเนินการตามขั้นตอนดังนี้',
  a5steps: [
    'เพิ่มหนังสือออนไลน์ลงในตะกร้าสินค้า',
    'เปิดตะกร้าสินค้า ซึ่งลูกค้าสามารถตรวจสอบรายละเอียดคำสั่งซื้อและราคารวม และแก้ไขเนื้อหาได้หากจำเป็น',
    'ยืนยันคำสั่งซื้อ : ลูกค้ากรอกอีเมล อ่านและยอมรับเงื่อนไขฉบับนี้ และแสดงความยินยอมให้เริ่มปฏิบัติตามสัญญาทันทีตามเงื่อนไขในข้อ 8',
    'เปลี่ยนเส้นทางไปยังหน้าชำระเงินที่ปลอดภัยและชำระราคา',
    'การยืนยันคำสั่งซื้อ ซึ่งส่งถึงลูกค้าทางอีเมลตามที่อยู่ที่ลูกค้าระบุไว้',
  ],
  a5tail: [
    'ขอให้ลูกค้าตรวจสอบความถูกต้องของอีเมล เนื่องจากลิงก์เข้าอ่านหนังสือออนไลน์จะถูกส่งไปยังที่อยู่ดังกล่าว',
    'การขายจะสมบูรณ์ก็ต่อเมื่อได้รับชำระราคาแล้วจริง ผู้ขายสงวนสิทธิ์ที่จะปฏิเสธคำสั่งซื้อที่มีลักษณะผิดปกติ ที่ทำโดยไม่สุจริต หรือด้วยเหตุอันชอบธรรมประการอื่น',
  ],

  a6h: 'ข้อ 6 — การชำระเงิน',
  a6: [
    'การชำระเงินกระทำด้วยบัตรธนาคาร ชำระครั้งเดียวในขณะสั่งซื้อ บนหน้าชำระเงินที่ให้บริการโดย Stripe Payments Europe, Ltd. ข้อมูลบัตรถูกกรอกโดยตรงกับ Stripe ไม่ผ่านเว็บไซต์ และผู้ขายไม่ได้เก็บรวบรวมหรือจัดเก็บข้อมูลดังกล่าว',
    'วิธีการชำระเงินที่รับได้คือวิธีที่ Stripe เสนอบนหน้าชำระเงินในขณะสั่งซื้อ',
  ],

  a7h: 'ข้อ 7 — การให้สิทธิ์เข้าถึง',
  a7: [
    'สิทธิ์เข้าถึงหนังสือออนไลน์เปิดให้ทันทีหลังการยืนยันการชำระเงิน',
    'อีเมลที่มีลิงก์เข้าอ่านส่วนบุคคลจะถูกส่งไปยังที่อยู่ที่ลูกค้าระบุ ลิงก์นี้มีอายุ เจ็ด (7) วัน และจะเปิดเซสชันการอ่านบนอุปกรณ์ที่ใช้เปิดลิงก์นั้น ลูกค้าสามารถขอลิงก์ใหม่ได้ทุกเมื่อจากเว็บไซต์ด้วยอีเมลเดิม โดยเฉพาะเพื่ออ่านจากอุปกรณ์อื่น',
    'ลิงก์เข้าอ่านและเซสชันการอ่านเป็นสิทธิเฉพาะบุคคลโดยเคร่งครัด ลูกค้าตกลงจะไม่เปิดเผย ไม่แบ่งปัน และไม่ยอมให้บุคคลภายนอกใช้',
    'การอ่านต้องใช้การเชื่อมต่ออินเทอร์เน็ตและเบราว์เซอร์รุ่นใหม่ ผู้ขายไม่รับประกันการทำงานของเว็บไซต์บนอุปกรณ์หรือการตั้งค่าที่ล้าสมัยหรือผิดปกติ',
  ],

  a8h: 'ข้อ 8 — สิทธิบอกเลิกสัญญาและการสละสิทธิโดยชัดแจ้ง',
  a8pre: [
    'โดยหลักแล้วลูกค้ามีสิทธิบอกเลิกสัญญาภายในกำหนด สิบสี่ (14) วัน ตามข้อ L. 221-18 แห่งประมวลกฎหมายผู้บริโภคฝรั่งเศส',
    'อย่างไรก็ดี ตาม **ข้อ L. 221-28 (13)** แห่งประมวลกฎหมายเดียวกัน สิทธิดังกล่าวใช้ไม่ได้กับสัญญาจัดหาเนื้อหาดิจิทัลที่มิได้ส่งมอบบนสื่อบันทึกที่จับต้องได้ ซึ่งเริ่มปฏิบัติตามสัญญาแล้วภายหลังจากที่ลูกค้าให้ความยินยอมล่วงหน้าโดยชัดแจ้งและสละสิทธิบอกเลิกสัญญาโดยชัดแจ้ง',
    'เมื่อทำเครื่องหมายในช่องที่จัดไว้ในขั้นตอนยืนยันคำสั่งซื้อ ลูกค้า :',
  ],
  a8items: [
    '**ร้องขอโดยชัดแจ้ง** ให้เริ่มปฏิบัติตามสัญญาทันที ก่อนสิ้นกำหนดระยะเวลาบอกเลิกสัญญา และ',
    '**รับทราบโดยชัดแจ้ง** ว่าตนจะเสียสิทธิบอกเลิกสัญญาทันทีที่สัญญาได้รับการปฏิบัติครบถ้วนแล้ว กล่าวคือ นับแต่เมื่อสิทธิ์เข้าถึงหนังสือออนไลน์เปิดให้แล้ว',
  ],
  a8post: [
    'วันและเวลาของการให้ความยินยอมดังกล่าวจะถูกบันทึกและเก็บรักษาไว้โดยผู้ขายเพื่อเป็นหลักฐาน',
    'ลูกค้าที่ไม่ประสงค์จะสละสิทธิบอกเลิกสัญญาย่อมไม่อาจได้รับสิทธิ์เข้าถึงทันที และอาจยกเลิกคำสั่งซื้อก่อนการชำระเงินได้',
  ],

  a9h: 'ข้อ 9 — การรับประกันตามกฎหมาย',
  a9: [
    'ผู้ขายจัดหาหนังสือออนไลน์ให้เป็นไปตามสัญญา และรับผิดในความไม่เป็นไปตามสัญญาที่มีอยู่ในขณะส่งมอบเนื้อหาดิจิทัลและปรากฏขึ้นภายในสองปีนับแต่การส่งมอบนั้น ตามเงื่อนไขที่กำหนดใน **ข้อ L. 224-25-12 และข้อถัดไปแห่งประมวลกฎหมายผู้บริโภคฝรั่งเศส**',
    'ในกรณีที่ไม่เป็นไปตามสัญญา ลูกค้าอาจเรียกให้แก้ไขเนื้อหาดิจิทัลให้ถูกต้องโดยไม่เสียค่าใช้จ่าย ภายในระยะเวลาอันสมควรและโดยไม่ก่อความไม่สะดวกอย่างมากแก่ตน หากไม่เป็นเช่นนั้น ลูกค้าอาจได้รับการลดราคาหรือการเลิกสัญญาตามเงื่อนไขในข้อ L. 224-25-17 และข้อถัดไปแห่งประมวลกฎหมายเดียวกัน',
    'ลูกค้ายังได้รับความคุ้มครองตามการรับประกันความชำรุดบกพร่องที่ซ่อนเร้นตาม **ข้อ 1641 ถึง 1649 แห่งประมวลกฎหมายแพ่งฝรั่งเศส** ซึ่งให้สิทธิเรียกเลิกการซื้อขายหรือลดราคาได้ภายในสองปีนับแต่พบความชำรุดบกพร่องนั้น',
    'การใช้สิทธิตามการรับประกันเหล่านี้ไม่มีค่าใช้จ่าย โดยติดต่อผู้ขายทางอีเมลที่ระบุไว้ในข้อ 2',
  ],

  a10h: 'ข้อ 10 — ทรัพย์สินทางปัญญา',
  a10: [
    'เนื้อหาทั้งหมดของหนังสือออนไลน์และของเว็บไซต์ — ข้อความ ภาพประกอบ แผนภาพ ภาพถ่าย แผ่นภาพกายวิภาค เอกสารสรุป แบบทดสอบ และแผนที่จุดสะท้อน — ได้รับความคุ้มครองตามกฎหมายทรัพย์สินทางปัญญา และยังคงเป็นกรรมสิทธิ์เฉพาะของผู้สร้างสรรค์และผู้ทรงสิทธิ',
    'ลูกค้าตกลงโดยเฉพาะอย่างยิ่งว่าจะไม่ทำซ้ำ เผยแพร่ต่อสาธารณะ ดัดแปลง แปล กระจาย ทำให้สาธารณชนเข้าถึงได้ ขายต่อ โอน หรือแสวงหาประโยชน์เชิงพาณิชย์หรือเพื่อการสอน ซึ่งหนังสือออนไลน์ไม่ว่าทั้งหมดหรือบางส่วน รวมทั้งจะไม่ดึงหรือนำส่วนอันเป็นสาระสำคัญไปใช้ซ้ำ โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรล่วงหน้า',
    'การทำซ้ำข้อความบางส่วนเพื่อการใช้ส่วนตัวโดยเคร่งครัดยังคงกระทำได้ ภายในขอบเขตข้อยกเว้นตามข้อ L. 122-5 แห่งประมวลกฎหมายทรัพย์สินทางปัญญาฝรั่งเศส',
  ],

  a11h: 'ข้อ 11 — การคืนเงินและการสิ้นสุดสิทธิ์เข้าถึง',
  a11: [
    'ในกรณีที่มีการคืนเงินค่าสั่งซื้อไม่ว่าด้วยเหตุใด สิทธิ์เข้าถึงหนังสือออนไลน์เป็นอันสิ้นสุดลง สิทธิที่ผูกกับบัญชีของลูกค้าจะถูกเพิกถอน และจะไม่มีการออกลิงก์เข้าอ่านใหม่ให้',
    'ผู้ขายอาจระงับหรือเพิกถอนสิทธิ์เข้าถึงของลูกค้าได้ในกรณีที่มีการฝ่าฝืนเงื่อนไขฉบับนี้อย่างร้ายแรง โดยเฉพาะการแบ่งปันลิงก์เข้าอ่านหรือการทำซ้ำหนังสือออนไลน์โดยไม่ได้รับอนุญาต มาตรการดังกล่าวจะแจ้งให้ลูกค้าทราบ และเว้นแต่กรณีฉ้อฉลอย่างชัดแจ้ง จะมีหนังสือเตือนที่ไม่ได้รับการปฏิบัติตามมาก่อน',
  ],

  a12h: 'ข้อ 12 — ความพร้อมใช้งานของบริการและความรับผิด',
  a12: [
    'ผู้ขายพยายามให้เว็บไซต์เข้าถึงได้อย่างต่อเนื่อง อย่างไรก็ดี ผู้ขายอาจระงับการเข้าถึงเพื่อการบำรุงรักษาหรือในกรณีเหตุสุดวิสัย โดยพยายามจำกัดระยะเวลาการหยุดชะงักและแจ้งให้ลูกค้าทราบ',
    'หนังสือออนไลน์เป็นตำราอ้างอิงสำหรับบุคลากรทางการแพทย์และผู้ประกอบวิชาชีพที่ผ่านการอบรม มิได้ใช้แทนการอบรม การวินิจฉัย หรือคำแนะนำทางการแพทย์ และมิได้ก่อความรับผิดแก่ผู้ขายหรือผู้เขียนสำหรับการกระทำใด ๆ ที่ลูกค้าปฏิบัติในการประกอบวิชาชีพของตน',
    'ผู้ขายไม่ต้องรับผิดต่อความเสียหายอันเกิดจากความผิดของลูกค้าเอง โดยเฉพาะการแบ่งปันลิงก์เข้าอ่าน และไม่ต้องรับผิดต่อความเสียหายทางอ้อม ไม่มีข้อความใดในเงื่อนไขฉบับนี้ที่จำกัดความรับผิดของผู้ขายในกรณีที่กฎหมายห้ามมิให้จำกัด',
  ],

  a13h: 'ข้อ 13 — ข้อมูลส่วนบุคคล',
  a13p1:
    'ข้อมูลที่เก็บรวบรวมเมื่อสั่งซื้อ — อีเมล ข้อมูลคำสั่งซื้อ ภาษาที่ใช้อ่าน — จำเป็นต่อการดำเนินการตามคำสั่งซื้อ การให้สิทธิ์เข้าถึง และการปฏิบัติตามหน้าที่ทางบัญชีของผู้ขาย ข้อมูลดังกล่าวไม่ถูกส่งต่อให้บุคคลภายนอกเพื่อวัตถุประสงค์ทางการค้า',
  a13p2:
    'ลูกค้ามีสิทธิเข้าถึง แก้ไข ลบ จำกัดการประมวลผล คัดค้าน และขอโอนย้ายข้อมูล ซึ่งใช้สิทธิได้ทางอีเมลที่ระบุไว้ในข้อ 2 รายละเอียดทั้งหมด — ข้อมูลที่เก็บรวบรวม ผู้รับข้อมูล ระยะเวลาเก็บรักษา และคุกกี้ — อธิบายไว้ใน{link}',
  a13linkText: 'นโยบายความเป็นส่วนตัว',

  a14h: 'ข้อ 14 — ข้อร้องเรียนและการไกล่เกลี่ยข้อพิพาทผู้บริโภค',
  a14pre: [
    'ข้อร้องเรียนทุกกรณีต้องส่งถึงผู้ขาย — Association Française de Réflexologie, 17 rue du Coq, 45600 Sully-sur-Loire — ทางอีเมลที่ระบุไว้ในข้อ 2 ผู้ขายรับที่จะตอบกลับภายในระยะเวลาอันสมควร',
    'ตามข้อ L. 612-1 แห่งประมวลกฎหมายผู้บริโภคฝรั่งเศส ลูกค้าอาจใช้บริการผู้ไกล่เกลี่ยข้อพิพาทผู้บริโภคโดยไม่เสียค่าใช้จ่าย เพื่อระงับข้อพิพาทโดยสันติ หลังจากได้พยายามแก้ไขข้อพิพาทโดยตรงกับผู้ขายด้วยข้อร้องเรียนเป็นลายลักษณ์อักษรแล้ว',
    'ผู้ขายได้แต่งตั้งองค์กรไกล่เกลี่ยข้อพิพาทผู้บริโภคต่อไปนี้ไว้โดยสัญญา',
  ],
  a14address: '197 boulevard Saint-Germain, 75007 ปารีส ประเทศฝรั่งเศส',
  a14post: [
    'ลูกค้าสามารถยื่นเรื่องต่อ Avenir Conso ได้ทั้งทางออนไลน์ผ่านแบบฟอร์มบนเว็บไซต์ขององค์กรดังกล่าว หรือทางไปรษณีย์ตามที่อยู่ข้างต้น พร้อมแนบเอกสารประกอบคำร้อง การไกล่เกลี่ยไม่มีค่าใช้จ่ายสำหรับลูกค้า โดยผู้ขายเป็นผู้รับภาระค่าใช้จ่าย',
    'ตามข้อ L. 612-2 แห่งประมวลกฎหมายผู้บริโภคฝรั่งเศส คำร้องจะรับพิจารณาได้ก็ต่อเมื่อลูกค้าแสดงได้ว่าตนได้พยายามแก้ไขข้อพิพาทโดยตรงกับผู้ขายด้วยข้อร้องเรียนเป็นลายลักษณ์อักษรมาก่อน และยื่นคำร้องภายในหนึ่งปีนับแต่ข้อร้องเรียนนั้น',
  ],

  a15h: 'ข้อ 15 — กฎหมายที่ใช้บังคับและเขตอำนาจศาล',
  a15: [
    'เงื่อนไขฉบับนี้อยู่ภายใต้บังคับของกฎหมายฝรั่งเศส บทบัญญัติเด็ดขาดที่ให้ความคุ้มครองมากกว่าของประเทศที่ลูกค้าผู้บริโภคซึ่งพำนักอยู่ในรัฐสมาชิกอื่นของสหภาพยุโรปมีถิ่นที่อยู่ตามปกติ ยังคงใช้บังคับได้',
    'หากไม่อาจระงับข้อพิพาทโดยสันติ ข้อพิพาททุกกรณีอยู่ในเขตอำนาจของศาลฝรั่งเศส ตามเงื่อนไขที่กำหนดในประมวลกฎหมายวิธีพิจารณาความแพ่งฝรั่งเศส',
  ],
}

export const cgv: Record<Lang, Content> = { fr, en, de, es, it, th }

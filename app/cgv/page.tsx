import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerLang } from '@/app/i18n/serverLang'
import { localizedHref } from '@/app/i18n/locale'
import { translations, type Lang } from '@/app/i18n/translations'
import { SITE_URL } from '@/lib/site'
import { cgv } from './content'

/** Last substantive revision. Shown to the reader and archived with each order. */
const VERSION_DATE = '2026-08-28'

/** A French date in the German terms would undo half the point of translating. */
const DATE_LOCALE: Record<Lang, string> = {
  fr: 'fr-FR', en: 'en-GB', de: 'de-DE', es: 'es-ES', it: 'it-IT', pt: 'pt-PT', th: 'th-TH',
}

function formatVersionDate(lang: Lang): string {
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${VERSION_DATE}T00:00:00Z`))
}

export async function generateMetadata(): Promise<Metadata> {
  const c = cgv[await getServerLang()]
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `${SITE_URL}/cgv` },
  }
}

/**
 * Renders the one piece of markup the legal prose needs: **emphasis**.
 *
 * Statutory references and the two waiver undertakings of article 8 are
 * emphasised in the French original, and dropping that in translation would
 * cost the reader the parts that matter most. A marker inside the string keeps
 * the sentence whole for the translator, whose word order will not match
 * French — `{site}` is substituted the same way.
 */
function Rich({ text }: { text: string }) {
  const parts = text.replace('{site}', SITE_URL).split('**')
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
    </>
  )
}

const MEDIATOR_NAME = 'Avenir Conso'
const MEDIATOR_SITE = 'www.avenir-conso.com'

export default async function CgvPage() {
  const lang = await getServerLang()
  const t = translations[lang]
  const c = cgv[lang]

  // Article 13 points at the privacy policy mid-sentence, and the position of
  // that phrase differs by language, hence the token rather than a split.
  const [a13Before, a13After] = c.a13p2.split('{link}')

  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href={localizedHref('/', lang)} className="cg-home">← {t.checkout.success.home}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">{c.topbar}</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="legal-main">
        {/* A <div>, not a <header>: globals.css styles the `header` element as
            the site's fixed navigation bar. */}
        <div className="legal-header">
          <p className="legal-eyebrow">{c.eyebrow}</p>
          <h1>{c.h1}</h1>
          <p className="legal-updated">{c.updated} {formatVersionDate(lang)}</p>
        </div>

        {lang !== 'fr' && <p className="legal-lang-note">{c.translationNote}</p>}

        <article className="legal-article">
          <section>
            <h2>{c.a1h}</h2>
            {c.a1.map((p) => <p key={p}><Rich text={p} /></p>)}
          </section>

          <section>
            <h2>{c.a2h}</h2>
            {/* Identity taken from the association's INSEE situation notice and
                its DIRECCTE training-provider declaration, which agree on the
                name, address and SIRET, plus the RNA number supplied by the
                association. */}
            <ul className="legal-identity">
              {c.a2.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </section>

          <section>
            <h2>{c.a3h}</h2>
            {c.a3.map((p) => <p key={p}><Rich text={p} /></p>)}
          </section>

          <section>
            <h2>{c.a4h}</h2>
            {/* The association is not VAT-liable today. The exact statutory
                mention to print on invoices (franchise en base, art. 293 B du
                CGI, versus the non-lucrative exemption of art. 261, 7-1°)
                depends on which regime applies and is the accountant's call; it
                belongs on the invoice rather than here. Cross-border EU sales
                are the point to revisit if volume grows — see docs/PAYMENTS.md. */}
            {c.a4.map((p) => <p key={p}><Rich text={p} /></p>)}
          </section>

          <section>
            <h2>{c.a5h}</h2>
            <p>{c.a5lead}</p>
            <ol>
              {c.a5steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
            {c.a5tail.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section>
            <h2>{c.a6h}</h2>
            {c.a6.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section>
            <h2>{c.a7h}</h2>
            {c.a7.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section className="legal-highlight">
            <h2>{c.a8h}</h2>
            {c.a8pre.map((p) => <p key={p}><Rich text={p} /></p>)}
            <ul>
              {c.a8items.map((i) => <li key={i}><Rich text={i} /></li>)}
            </ul>
            {c.a8post.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section className="legal-box">
            <h2>{c.a9h}</h2>
            {c.a9.map((p) => <p key={p}><Rich text={p} /></p>)}
          </section>

          <section>
            <h2>{c.a10h}</h2>
            {c.a10.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section>
            <h2>{c.a11h}</h2>
            {c.a11.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section>
            <h2>{c.a12h}</h2>
            {c.a12.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section>
            <h2>{c.a13h}</h2>
            <p>{c.a13p1}</p>
            <p>
              {a13Before}
              <Link href={localizedHref('/confidentialite', lang)}>{c.a13linkText}</Link>
              {a13After}
            </p>
          </section>

          <section>
            <h2>{c.a14h}</h2>
            {/* Avenir Conso, referenced by the CECMC on 27 July 2016. Details
                taken from the signed convention individuelle and its annexed
                charte — seat, website and the two ways a consumer may refer a
                dispute. */}
            {c.a14pre.map((p) => <p key={p}>{p}</p>)}
            <ul className="legal-identity">
              <li><strong>{MEDIATOR_NAME}</strong></li>
              <li>{c.a14address}</li>
              <li>
                <a href={`https://${MEDIATOR_SITE}`} target="_blank" rel="noopener noreferrer">
                  {MEDIATOR_SITE}
                </a>
              </li>
            </ul>
            {c.a14post.map((p) => <p key={p}>{p}</p>)}
          </section>

          <section>
            <h2>{c.a15h}</h2>
            {c.a15.map((p) => <p key={p}>{p}</p>)}
          </section>
        </article>

        <p className="legal-foot">
          <Link href={localizedHref('/', lang)}>← {t.checkout.success.home}</Link>
        </p>
      </main>
    </div>
  )
}

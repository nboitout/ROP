import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerLang } from '@/app/i18n/serverLang'
import { localizedHref } from '@/app/i18n/locale'
import { translations, type Lang } from '@/app/i18n/translations'
import { SITE_URL } from '@/lib/site'
import { privacy } from './content'

/** Last substantive revision. Article 13 of the terms of sale points here. */
const VERSION_DATE = '2026-08-28'

/** A French date in the German version would undo half the point of translating. */
const DATE_LOCALE: Record<Lang, string> = {
  fr: 'fr-FR', en: 'en-GB', de: 'de-DE', es: 'es-ES', it: 'it-IT', pt: 'pt-PT', th: 'th-TH',
}

function formatVersionDate(lang: Lang): string {
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${VERSION_DATE}T00:00:00Z`))
}

export async function generateMetadata(): Promise<Metadata> {
  const p = privacy[await getServerLang()]
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `${SITE_URL}/confidentialite` },
  }
}

type Row3 = { a: string; b: string; c: string }
type Row2 = { a: string; b: string }

/** Wide content scrolls in its own frame; the page itself never scrolls sideways. */
function Table3({ head, rows, mono }: { head: Row3; rows: Row3[]; mono?: boolean }) {
  return (
    <div className="legal-table-wrap">
      <table className={`legal-table${mono ? '' : ' legal-table-prose'}`}>
        <thead>
          <tr><th>{head.a}</th><th>{head.b}</th><th>{head.c}</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.a}>
              <td>{mono ? <code>{r.a}</code> : r.a}</td>
              <td>{r.b}</td>
              <td>{r.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Table2({ head, rows }: { head: Row2; rows: Row2[] }) {
  return (
    <div className="legal-table-wrap">
      <table className="legal-table legal-table-prose">
        <thead>
          <tr><th>{head.a}</th><th>{head.b}</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.a}><td>{r.a}</td><td>{r.b}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * The policy describes what the site actually does, not what a template says a
 * site usually does. Each section was written against the code:
 *
 *   - the cookies are the ones set in lib/readerId.ts, lib/access.ts,
 *     lib/salesPreview.ts and lib/internalTraffic.ts;
 *   - the analytics fields are the payload of app/api/visit/route.ts;
 *   - the lead fields are the payload of app/api/free-chapter/route.ts;
 *   - the order fields are lib/salesLog.ts;
 *   - the recipients are the services those modules actually call.
 *
 * If any of those change, ./content.ts is part of the change — in all six
 * languages, which the shared `typeof fr` type enforces.
 */
export default async function ConfidentialitePage() {
  const lang = await getServerLang()
  const t = translations[lang]
  const p = privacy[lang]

  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href={localizedHref('/', lang)} className="cg-home">← {t.checkout.success.home}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">{p.topbar}</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="legal-main">
        {/* A <div>, not a <header>: globals.css styles the `header` element as
            the site's fixed navigation bar. */}
        <div className="legal-header">
          <p className="legal-eyebrow">{p.eyebrow}</p>
          <h1>{p.h1}</h1>
          <p className="legal-updated">{p.updated} {formatVersionDate(lang)}</p>
        </div>

        {lang !== 'fr' && <p className="legal-lang-note">{p.translationNote}</p>}

        <article className="legal-article">
          <section>
            <h2>{p.a1h}</h2>
            <p>{p.a1lead}</p>
            <ul className="legal-identity">
              {p.a1identity.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <p>{p.a1dpo}</p>
          </section>

          <section>
            <h2>{p.a2h}</h2>
            <p>{p.a2p1}</p>
            <p>{p.a2p2}</p>
          </section>

          <section>
            <h2>{p.a3h}</h2>
            <p>{p.a3p1}</p>
            <p><strong>{p.a3ip}</strong></p>
            <p>{p.a3basis}</p>
          </section>

          <section>
            <h2>{p.a4h}</h2>
            <p>{p.a4p1}</p>
            <p>{p.a4p2}</p>
          </section>

          <section>
            <h2>{p.a5h}</h2>
            <p>{p.a5p1}</p>
            <p><strong>{p.a5cards}</strong></p>
            <p>{p.a5basis}</p>
          </section>

          <section>
            <h2>{p.a6h}</h2>
            <p>{p.a6p1}</p>
            <p>{p.a6p2}</p>
          </section>

          <section>
            <h2>{p.a7h}</h2>
            <p>{p.a7lead}</p>
            <Table3 head={p.a7head} rows={p.a7rows} mono />
            <p>{p.a7note}</p>
          </section>

          <section>
            <h2>{p.a8h}</h2>
            <p>{p.a8lead}</p>
            <Table3 head={p.a8head} rows={p.a8rows} />
            <p>{p.a8transfers}</p>
          </section>

          <section>
            <h2>{p.a9h}</h2>
            <Table2 head={p.a9head} rows={p.a9rows} />
          </section>

          <section>
            <h2>{p.a10h}</h2>
            <p>{p.a10p1}</p>
            <p>{p.a10p2}</p>
            <p>
              {p.a10cnil}{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2>{p.a11h}</h2>
            <p>{p.a11p1}</p>
          </section>

          <section>
            <h2>{p.a12h}</h2>
            <p>{p.a12p1}</p>
          </section>
        </article>

        <p className="legal-foot">
          <Link href={localizedHref('/', lang)}>← {t.checkout.success.home}</Link>
        </p>
      </main>
    </div>
  )
}

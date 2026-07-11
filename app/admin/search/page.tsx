import type { Metadata } from 'next'
import type { Lang } from '@/app/i18n/translations'
import {
  getBookTextSearchStats,
  searchBookText,
  type BookSearchLangFilter,
  type BookSearchResult,
} from '@/lib/searchIndex'

export const metadata: Metadata = { title: 'Book Search - Admin R.O.P.' }
export const dynamic = 'force-dynamic'

const LANG_OPTIONS: Array<{ value: BookSearchLangFilter; label: string }> = [
  { value: 'fr', label: 'French' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'es', label: 'Spanish' },
  { value: 'it', label: 'Italian' },
  { value: 'th', label: 'Thai' },
  { value: 'all', label: 'All languages' },
]

const LANG_VALUES = new Set<BookSearchLangFilter>(LANG_OPTIONS.map((option) => option.value))

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value
}

function parseLang(value: string | undefined): BookSearchLangFilter {
  return value && LANG_VALUES.has(value as BookSearchLangFilter)
    ? value as BookSearchLangFilter
    : 'fr'
}

function resultChapterLabel(result: BookSearchResult): string {
  if (result.chapterNumber) return `Chapter ${result.chapterNumber}`
  return result.chapterTitle
}

function resultHeading(result: BookSearchResult): string {
  if (!result.chapterNumber) return result.chapterTitle
  return `${resultChapterLabel(result)} - ${result.chapterTitle}`
}

function resultTypeLabel(result: BookSearchResult): string {
  if (result.blockType === 'section') return 'Section'
  if (result.blockType === 'rop') return 'R.O.P. block'
  if (result.blockType === 'leadBullets') return 'Lead bullets'
  return result.blockType
}

export default async function AdminBookSearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const query = (firstParam(params.q) ?? '').trim()
  const lang = parseLang(firstParam(params.lang))
  const results = query ? searchBookText({ query, lang }) : []
  const stats = getBookTextSearchStats(lang)
  const hasQuery = query.length > 0

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Book index</p>
          <h1 className="adm-page-title">Search the book text</h1>
          <p className="adm-page-sub">
            Server-side search across structured chapter text. Current index: {stats.records.toLocaleString()} text records across {stats.chapters.toLocaleString()} chapter/language versions.
          </p>
        </div>
      </div>

      <section className="adm-search-card">
        <form className="adm-search-form" action="/admin/search">
          <label className="adm-search-field">
            <span>Search terms</span>
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="nerf vague, peritoine, stress..."
              autoFocus
            />
          </label>
          <label className="adm-search-select-field">
            <span>Language</span>
            <select name="lang" defaultValue={lang}>
              {LANG_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="adm-search-submit">Search</button>
        </form>
      </section>

      <div className="adm-search-summary">
        {hasQuery ? (
          <p>
            <strong>{results.length.toLocaleString()}</strong> result{results.length === 1 ? '' : 's'} for <em>{query}</em>
          </p>
        ) : (
          <p>Enter a term to search paragraph, section, table, protocol, and cross-reference text.</p>
        )}
      </div>

      {hasQuery && results.length === 0 && (
        <div className="adm-search-empty">
          <p>No text match found in the selected language scope.</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="adm-search-results">
          {results.map((result) => (
            <article key={result.id} className="adm-search-result">
              <div className="adm-search-result-head">
                <div>
                  <p className="adm-search-result-kicker">
                    <span>{result.lang.toUpperCase() as Uppercase<Lang>}</span>
                    <span className={`adm-row-badge ${result.access}`}>{result.access}</span>
                    <span>{resultTypeLabel(result)}</span>
                  </p>
                  <h2>
                    <a href={result.href} target="_blank" rel="noopener noreferrer">
                      {resultHeading(result)}
                    </a>
                  </h2>
                  <p className="adm-search-result-section">{result.sectionTitle}</p>
                </div>
                <span className="adm-search-score">{Math.round(result.score)}</span>
              </div>
              <p className="adm-search-snippet">{result.snippet}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

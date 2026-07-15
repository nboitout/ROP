import type { Metadata } from 'next'
import AdminRagPanel from '@/components/admin/AdminRagPanel'
import type { Lang } from '@/app/i18n/translations'
import {
  getBookTextSearchStats,
  searchBookText,
  type BookSearchLangFilter,
  type BookSearchResult,
} from '@/lib/searchIndex'

export const metadata: Metadata = { title: 'Book Search - Admin R.O.P.' }
export const dynamic = 'force-dynamic'

type SearchView = 'balanced' | 'exhaustive'

const LANG_OPTIONS: Array<{ value: BookSearchLangFilter; label: string }> = [
  { value: 'fr', label: 'French' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'es', label: 'Spanish' },
  { value: 'it', label: 'Italian' },
  { value: 'th', label: 'Thai' },
  { value: 'all', label: 'All languages' },
]

const VIEW_OPTIONS: Array<{ value: SearchView; label: string }> = [
  { value: 'balanced', label: 'Balanced' },
  { value: 'exhaustive', label: 'Exhaustive' },
]

const LANG_VALUES = new Set<BookSearchLangFilter>(LANG_OPTIONS.map((option) => option.value))
const VIEW_VALUES = new Set<SearchView>(VIEW_OPTIONS.map((option) => option.value))
const VISIBLE_RESULTS_PER_CHAPTER = 3

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value
}

function parseLang(value: string | undefined): BookSearchLangFilter {
  return value && LANG_VALUES.has(value as BookSearchLangFilter)
    ? value as BookSearchLangFilter
    : 'fr'
}

function parseView(value: string | undefined): SearchView {
  return value && VIEW_VALUES.has(value as SearchView)
    ? value as SearchView
    : 'balanced'
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
  switch (result.blockType) {
    case 'section':
      return 'Section heading'
    case 'para':
      return 'Book paragraph'
    case 'lead':
      return 'Lead paragraph'
    case 'sub':
      return 'Subheading'
    case 'bullets':
      return 'Bullet list'
    case 'numbered':
      return 'Numbered list'
    case 'leadBullets':
      return 'Lead bullet list'
    case 'table':
      return 'Table text'
    case 'xref':
      return 'Cross-reference'
    case 'rop':
      return 'R.O.P. protocol'
    case 'figure':
      return 'Figure caption'
    case 'reflexAtlas':
      return 'Reflex atlas'
    default:
      return result.blockType
  }
}

type SearchResultGroup = {
  key: string
  domId: string
  lang: Lang
  access: BookSearchResult['access']
  heading: string
  chapterTitle: string
  matchCount: number
  score: number
  topResult: BookSearchResult
  results: BookSearchResult[]
}

function groupDomId(result: BookSearchResult): string {
  return `search-${result.lang}-${result.chapterKey.replace(/[^a-z0-9]+/gi, '-')}`
}

function groupScore(results: BookSearchResult[]): number {
  const bestScore = results[0]?.score ?? 0
  const matchLift = Math.min(results.length, 25) * 2 + Math.log2(results.length + 1) * 6
  return bestScore + matchLift
}

function groupSearchResults(results: BookSearchResult[]): SearchResultGroup[] {
  const byChapter = new Map<string, BookSearchResult[]>()

  for (const result of results) {
    const key = `${result.lang}:${result.chapterKey}`
    byChapter.set(key, [...(byChapter.get(key) ?? []), result])
  }

  return Array.from(byChapter.entries())
    .map(([key, groupResults]) => {
      const topResult = groupResults[0]
      return {
        key,
        domId: groupDomId(topResult),
        lang: topResult.lang,
        access: topResult.access,
        heading: resultHeading(topResult),
        chapterTitle: topResult.chapterTitle,
        matchCount: groupResults.length,
        score: groupScore(groupResults),
        topResult,
        results: groupResults,
      }
    })
    .sort((a, b) =>
      b.score - a.score ||
      a.heading.localeCompare(b.heading, undefined, { numeric: true }) ||
      a.lang.localeCompare(b.lang)
    )
}

function SearchResultItem({
  result,
  compact = false,
}: {
  result: BookSearchResult
  compact?: boolean
}) {
  return (
    <article className={`adm-search-result${compact ? ' compact' : ''}`}>
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
  )
}

export default async function AdminBookSearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const query = (firstParam(params.q) ?? '').trim()
  const lang = parseLang(firstParam(params.lang))
  const view = parseView(firstParam(params.view))
  const stats = getBookTextSearchStats(lang)
  const results = query ? searchBookText({ query, lang, limit: stats.records }) : []
  const groups = groupSearchResults(results)
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
          <label className="adm-search-select-field">
            <span>View</span>
            <select name="view" defaultValue={view}>
              {VIEW_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="adm-search-submit">Search</button>
        </form>
      </section>

      <AdminRagPanel
        key={`${query}:${lang}`}
        initialQuestion={query}
        initialLang={lang}
        langOptions={LANG_OPTIONS}
      />

      <div className="adm-search-summary">
        {hasQuery ? (
          <p>
            <strong>{results.length.toLocaleString()}</strong> passage match{results.length === 1 ? '' : 'es'} in <strong>{groups.length.toLocaleString()}</strong> chapter{groups.length === 1 ? '' : 's'} for <em>{query}</em>
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

      {groups.length > 0 && view === 'balanced' && (
        <>
          <div className="adm-search-chapter-strip" aria-label="Matched chapters">
            {groups.map((group) => (
              <a key={group.key} href={`#${group.domId}`} className="adm-search-chapter-link">
                <span>{group.lang.toUpperCase()}</span>
                <strong>{group.heading}</strong>
                <em>{group.matchCount.toLocaleString()} match{group.matchCount === 1 ? '' : 'es'}</em>
              </a>
            ))}
          </div>

          <div className="adm-search-groups">
            {groups.map((group) => {
              const visibleResults = group.results.slice(0, VISIBLE_RESULTS_PER_CHAPTER)
              const hiddenResults = group.results.slice(VISIBLE_RESULTS_PER_CHAPTER)

              return (
                <section key={group.key} id={group.domId} className="adm-search-group">
                  <div className="adm-search-group-head">
                    <div>
                      <p className="adm-search-result-kicker">
                        <span>{group.lang.toUpperCase()}</span>
                        <span className={`adm-row-badge ${group.access}`}>{group.access}</span>
                        <span>{group.matchCount.toLocaleString()} match{group.matchCount === 1 ? '' : 'es'}</span>
                      </p>
                      <h2>{group.heading}</h2>
                      <p>{group.chapterTitle}</p>
                    </div>
                    <a href={group.topResult.href} target="_blank" rel="noopener noreferrer" className="adm-search-open-best">
                      Open best match
                    </a>
                  </div>

                  <div className="adm-search-group-results">
                    {visibleResults.map((result) => (
                      <SearchResultItem key={result.id} result={result} compact />
                    ))}
                  </div>

                  {hiddenResults.length > 0 && (
                    <details className="adm-search-more">
                      <summary>
                        Show {hiddenResults.length.toLocaleString()} more match{hiddenResults.length === 1 ? '' : 'es'} in this chapter
                      </summary>
                      <div className="adm-search-group-results">
                        {hiddenResults.map((result) => (
                          <SearchResultItem key={result.id} result={result} compact />
                        ))}
                      </div>
                    </details>
                  )}
                </section>
              )
            })}
          </div>
        </>
      )}

      {results.length > 0 && view === 'exhaustive' && (
        <div className="adm-search-results">
          {results.map((result) => (
            <SearchResultItem key={result.id} result={result} />
          ))}
        </div>
      )}
    </main>
  )
}

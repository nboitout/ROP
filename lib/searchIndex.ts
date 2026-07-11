import type { Lang } from '@/app/i18n/translations'
import { getChapterKeys, getChapterTranslations } from '@/content/registry'
import type { Block, Chapter } from '@/content/types'
import { FREE_CHAPTER_KEYS } from '@/lib/access'

export type BookSearchAccess = 'free' | 'paid'
export type BookSearchKind = 'text'
export type BookSearchLangFilter = Lang | 'all'

export type BookSearchRecord = {
  id: string
  kind: BookSearchKind
  lang: Lang
  chapterKey: string
  chapterNumber: string | null
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  blockIndex: number
  blockType: Block['type'] | 'section'
  anchor: string
  href: string
  text: string
  access: BookSearchAccess
}

export type BookSearchResult = BookSearchRecord & {
  score: number
  snippet: string
}

const LANGS: Lang[] = ['fr', 'en', 'de', 'es', 'it', 'th']
const DEFAULT_LIMIT = 80

let cachedTextIndex: BookSearchRecord[] | null = null

function normalizeForSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u00df/g, 'ss')
    .replace(/\u0153/g, 'oe')
    .replace(/\u00e6/g, 'ae')
    .replace(/\u2019/g, "'")
    .toLowerCase()
}

function normalizedWithMap(value: string): { normalized: string; map: number[] } {
  const normalizedChars: string[] = []
  const map: number[] = []

  for (let index = 0; index < value.length;) {
    const codePoint = value.codePointAt(index)
    if (codePoint === undefined) break

    const raw = String.fromCodePoint(codePoint)
    const normalized = normalizeForSearch(raw)
    for (const char of normalized) {
      normalizedChars.push(char)
      map.push(index)
    }
    index += raw.length
  }

  return { normalized: normalizedChars.join(''), map }
}

function tokenize(value: string): string[] {
  return normalizeForSearch(value).match(/[\p{L}\p{N}]+(?:['-][\p{L}\p{N}]+)?/gu) ?? []
}

function uniqueTerms(value: string): string[] {
  const seen = new Set<string>()
  return tokenize(value)
    .filter((term) => term.length >= 2)
    .filter((term) => {
      if (seen.has(term)) return false
      seen.add(term)
      return true
    })
}

function compactText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function blockText(block: Block): string {
  switch (block.type) {
    case 'para':
    case 'sub':
      return block.text
    case 'lead':
      return `${block.label} ${block.text}`.trim()
    case 'bullets':
    case 'numbered':
      return block.items.join(' ')
    case 'leadBullets':
      return block.items.map((item) => `${item.label} ${item.text}`.trim()).join(' ')
    case 'table':
      return [
        ...block.headers,
        ...block.rows.flat(),
        block.caption ?? '',
      ].join(' ')
    case 'xref':
      return `${block.label} ${block.text ?? ''}`.trim()
    case 'rop':
      return block.body.join(' ')
    case 'figure':
    case 'reflexAtlas':
      return ''
  }
}

function chapterBaseHref(chapterKey: string): string {
  if (chapterKey === 'introduction') return '/introduction'
  if (chapterKey === 'chapter-2') return '/lecture/traitement-rop'

  const match = chapterKey.match(/^chapter-(\d+)$/)
  if (match) return `/lecture/chapitre-${Number(match[1])}`

  return `/${chapterKey}`
}

function hrefForRecord(chapterKey: string, lang: Lang, anchor: string): string {
  return `${chapterBaseHref(chapterKey)}?lang=${encodeURIComponent(lang)}#${anchor}`
}

function accessForChapter(chapterKey: string): BookSearchAccess {
  return FREE_CHAPTER_KEYS.has(chapterKey) ? 'free' : 'paid'
}

function pushSectionRecord(records: BookSearchRecord[], chapterKey: string, lang: Lang, chapter: Chapter, sectionIndex: number) {
  const section = chapter.sections[sectionIndex]
  if (!section) return

  const text = compactText(section.title)
  if (!text) return

  const anchor = `sec-${section.id}`
  records.push({
    id: `${chapterKey}:${lang}:${section.id}:section`,
    kind: 'text',
    lang,
    chapterKey,
    chapterNumber: chapter.number ?? null,
    chapterTitle: chapter.title,
    sectionId: section.id,
    sectionTitle: section.title,
    blockIndex: -1,
    blockType: 'section',
    anchor,
    href: hrefForRecord(chapterKey, lang, anchor),
    text,
    access: accessForChapter(chapterKey),
  })
}

function pushBlockRecord(
  records: BookSearchRecord[],
  chapterKey: string,
  lang: Lang,
  chapter: Chapter,
  sectionIndex: number,
  blockIndex: number,
) {
  const section = chapter.sections[sectionIndex]
  const block = section?.blocks[blockIndex]
  if (!section || !block) return

  const text = compactText(blockText(block))
  if (!text) return

  const anchor = `p-${section.id}-${blockIndex}`
  records.push({
    id: `${chapterKey}:${lang}:${section.id}:${blockIndex}`,
    kind: 'text',
    lang,
    chapterKey,
    chapterNumber: chapter.number ?? null,
    chapterTitle: chapter.title,
    sectionId: section.id,
    sectionTitle: section.title,
    blockIndex,
    blockType: block.type,
    anchor,
    href: hrefForRecord(chapterKey, lang, anchor),
    text,
    access: accessForChapter(chapterKey),
  })
}

function buildChapterRecords(chapterKey: string, lang: Lang, chapter: Chapter): BookSearchRecord[] {
  const records: BookSearchRecord[] = []

  chapter.sections.forEach((section, sectionIndex) => {
    pushSectionRecord(records, chapterKey, lang, chapter, sectionIndex)
    section.blocks.forEach((_, blockIndex) => {
      pushBlockRecord(records, chapterKey, lang, chapter, sectionIndex, blockIndex)
    })
  })

  return records
}

export function getBookTextSearchIndex(): BookSearchRecord[] {
  if (cachedTextIndex) return cachedTextIndex

  cachedTextIndex = getChapterKeys().flatMap((chapterKey) => {
    const translations = getChapterTranslations(chapterKey)
    return LANGS.flatMap((lang) => {
      const chapter = translations[lang]
      return chapter ? buildChapterRecords(chapterKey, lang, chapter) : []
    })
  })

  return cachedTextIndex
}

function containsTerm(text: string, tokens: string[], term: string): boolean {
  return text.includes(term) || tokens.some((token) => token.startsWith(term))
}

function countOccurrences(text: string, term: string): number {
  if (!term) return 0
  let count = 0
  let index = text.indexOf(term)
  while (index >= 0) {
    count += 1
    index = text.indexOf(term, index + term.length)
  }
  return count
}

function scoreRecord(record: BookSearchRecord, terms: string[], phrase: string): number {
  const text = normalizeForSearch(record.text)
  const sectionTitle = normalizeForSearch(record.sectionTitle)
  const chapterTitle = normalizeForSearch(record.chapterTitle)
  const tokens = tokenize(`${record.chapterTitle} ${record.sectionTitle} ${record.text}`)
  const searchable = `${chapterTitle} ${sectionTitle} ${text}`

  if (!terms.every((term) => containsTerm(searchable, tokens, term))) return 0

  let score = 0
  if (phrase.length >= 3) {
    if (text.includes(phrase)) score += 70
    if (sectionTitle.includes(phrase)) score += 42
    if (chapterTitle.includes(phrase)) score += 34
  }

  for (const term of terms) {
    score += countOccurrences(text, term) * 5
    score += countOccurrences(sectionTitle, term) * 12
    score += countOccurrences(chapterTitle, term) * 10
    score += tokens.filter((token) => token.startsWith(term) && token !== term).length * 1.5
  }

  if (record.blockType === 'section') score += 8
  if (record.blockType === 'sub') score += 4
  if (record.blockType === 'rop') score += 2

  return score
}

function buildSnippet(text: string, terms: string[], phrase: string): string {
  const compact = compactText(text)
  if (!compact) return ''

  const { normalized, map } = normalizedWithMap(compact)
  let matchIndex = phrase.length >= 3 ? normalized.indexOf(phrase) : -1

  if (matchIndex < 0) {
    for (const term of terms) {
      matchIndex = normalized.indexOf(term)
      if (matchIndex >= 0) break
    }
  }

  const rawIndex = matchIndex >= 0 ? map[matchIndex] ?? 0 : 0
  const start = Math.max(0, rawIndex - 100)
  const end = Math.min(compact.length, rawIndex + 240)
  const prefix = start > 0 ? '...' : ''
  const suffix = end < compact.length ? '...' : ''

  return `${prefix}${compact.slice(start, end)}${suffix}`
}

export function searchBookText({
  query,
  lang = 'fr',
  limit = DEFAULT_LIMIT,
}: {
  query: string
  lang?: BookSearchLangFilter
  limit?: number
}): BookSearchResult[] {
  const terms = uniqueTerms(query)
  if (terms.length === 0) return []

  const phrase = terms.join(' ')
  const records = getBookTextSearchIndex()
  const filteredRecords = lang === 'all' ? records : records.filter((record) => record.lang === lang)

  return filteredRecords
    .map((record): BookSearchResult | null => {
      const score = scoreRecord(record, terms, phrase)
      if (score <= 0) return null
      return {
        ...record,
        score,
        snippet: buildSnippet(record.text, terms, phrase),
      }
    })
    .filter((result): result is BookSearchResult => !!result)
    .sort((a, b) =>
      b.score - a.score ||
      (a.chapterNumber ?? '').localeCompare(b.chapterNumber ?? '', undefined, { numeric: true }) ||
      a.lang.localeCompare(b.lang) ||
      a.sectionTitle.localeCompare(b.sectionTitle) ||
      a.blockIndex - b.blockIndex
    )
    .slice(0, limit)
}

export function getBookTextSearchStats(lang: BookSearchLangFilter = 'fr') {
  const records = getBookTextSearchIndex()
  const filteredRecords = lang === 'all' ? records : records.filter((record) => record.lang === lang)
  return {
    records: filteredRecords.length,
    chapters: new Set(filteredRecords.map((record) => `${record.chapterKey}:${record.lang}`)).size,
  }
}

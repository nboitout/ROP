import { existsSync } from 'node:fs'
import { loadEnvConfig } from '@next/env'
import {
  createAzureEmbeddings,
  encodeAzureSearchKey,
  getAzureRagConfig,
  uploadAzureSearchDocuments,
  type AzureSearchUploadDocument,
} from '../lib/azureRag'
import {
  getBookSlideSearchIndex,
  type BookSlideSearchRecord,
} from '../content/slidesyncRegistry'
import type { BookSearchLangFilter } from '../lib/searchIndex'
import {
  compactOcrText,
  fileSha256,
  readSlideOcrCache,
  resolveSlideImagePath,
  type SlideOcrCacheEntry,
} from './slide-ocr-cache'

loadEnvConfig(process.cwd())

type SyncOptions = {
  lang: BookSearchLangFilter
  chapter: string | null
  limit: number | null
  dryRun: boolean
  strictCache: boolean
  embeddingBatchSize: number
}

type SlideAzureSearchDocument = AzureSearchUploadDocument & {
  kind: 'slide'
  lang: string
  chapterKey: string
  chapterNumber?: number
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  blockIndex: number
  blockType: string
  slideNumber: number
  title: string
  content: string
  href: string
  imageSrc: string
  sourcePath: string
  access: string
  contentVector: number[]
}

type PreparedSlideRecord = {
  record: BookSlideSearchRecord
  cache: SlideOcrCacheEntry
  content: string
}

const DEFAULT_EMBEDDING_BATCH_SIZE = 48
const EXPECTED_EMBEDDING_DIMENSIONS = 1536
const LANGS = new Set<BookSearchLangFilter>(['all', 'fr', 'en', 'de', 'es', 'it', 'th'])

function usage(): string {
  return [
    'Usage: npm run azure:sync-slides -- [options]',
    '',
    'Options:',
    '  --lang=<all|fr|en|de|es|it|th>  Language to sync. Default: all',
    '  --chapter=<chapter-key>          Restrict to one chapter, e.g. chapter-14',
    '  --limit=<number>                 Sync only the first N records after filters.',
    '  --dry-run                        Print the planned sync without Azure calls.',
    '  --strict-cache                   Fail when OCR cache is missing or stale.',
    '  --embedding-batch-size=<number>  Number of chunks embedded per request. Default: 48',
  ].join('\n')
}

function parsePositiveInt(value: string, label: string): number {
  const parsed = Number.parseInt(value, 10)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${label} must be a positive integer`)
  }
  return parsed
}

function parseArgs(args: string[]): SyncOptions {
  const options: SyncOptions = {
    lang: 'all',
    chapter: null,
    limit: null,
    dryRun: false,
    strictCache: false,
    embeddingBatchSize: DEFAULT_EMBEDDING_BATCH_SIZE,
  }

  for (const arg of args) {
    if (arg === '--help' || arg === '-h') {
      console.log(usage())
      process.exit(0)
    }
    if (arg === '--dry-run') {
      options.dryRun = true
      continue
    }
    if (arg === '--strict-cache') {
      options.strictCache = true
      continue
    }
    if (arg.startsWith('--lang=')) {
      const lang = arg.slice('--lang='.length) as BookSearchLangFilter
      if (!LANGS.has(lang)) throw new Error(`Unsupported language: ${lang}`)
      options.lang = lang
      continue
    }
    if (arg.startsWith('--chapter=')) {
      options.chapter = arg.slice('--chapter='.length).trim() || null
      continue
    }
    if (arg.startsWith('--limit=')) {
      options.limit = parsePositiveInt(arg.slice('--limit='.length), '--limit')
      continue
    }
    if (arg.startsWith('--embedding-batch-size=')) {
      const value = parsePositiveInt(arg.slice('--embedding-batch-size='.length), '--embedding-batch-size')
      if (value > 100) throw new Error('--embedding-batch-size should stay at or below 100')
      options.embeddingBatchSize = value
      continue
    }

    throw new Error(`Unknown argument: ${arg}\n\n${usage()}`)
  }

  return options
}

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size))
  }
  return chunks
}

function collectRecords(options: SyncOptions): BookSlideSearchRecord[] {
  let records = getBookSlideSearchIndex(options.lang)

  if (options.chapter) {
    records = records.filter((record) => record.chapterKey === options.chapter)
  }

  if (options.limit !== null) {
    records = records.slice(0, options.limit)
  }

  return records
}

function contentForRecord(record: BookSlideSearchRecord, cache: SlideOcrCacheEntry): string {
  return [
    record.title,
    compactOcrText(cache.ocrText),
  ].filter(Boolean).join('\n\n')
}

function prepareRecords(records: BookSlideSearchRecord[], options: SyncOptions): PreparedSlideRecord[] {
  const prepared: PreparedSlideRecord[] = []
  const skipped: string[] = []

  for (const record of records) {
    const filePath = resolveSlideImagePath(record)
    const cache = readSlideOcrCache(record)
    if (!existsSync(filePath)) {
      if (options.strictCache) throw new Error(`Missing slide image for ${record.id}: ${record.sourcePath}`)
      skipped.push(`${record.id} (missing slide image)`)
      continue
    }

    const currentHash = fileSha256(filePath)
    const cacheIsCurrent = !!cache && cache.contentHash === currentHash

    if (!cacheIsCurrent || !cache) {
      const reason = !cache ? 'missing OCR cache' : 'stale OCR cache'
      if (options.strictCache) throw new Error(`${reason} for ${record.id}. Run npm run azure:ocr-slides first.`)
      skipped.push(`${record.id} (${reason})`)
      continue
    }

    const content = contentForRecord(record, cache)
    if (!content.trim()) {
      if (options.strictCache) throw new Error(`Empty OCR content for ${record.id}`)
      skipped.push(`${record.id} (empty OCR content)`)
      continue
    }

    prepared.push({ record, cache, content })
  }

  if (skipped.length > 0) {
    console.log(`Skipped ${skipped.length} slide record${skipped.length === 1 ? '' : 's'} without current OCR cache.`)
    skipped.slice(0, 8).forEach((item) => console.log(`- ${item}`))
    if (skipped.length > 8) console.log(`- ...and ${skipped.length - 8} more`)
  }

  return prepared
}

function embeddingTextForRecord(item: PreparedSlideRecord): string {
  const { record, content } = item
  return [
    'Source type: slide',
    `Chapter: ${record.chapterTitle}`,
    `Section: ${record.sectionTitle}`,
    `Slide: ${record.slideNumber}`,
    `Language: ${record.lang}`,
    '',
    content,
  ].join('\n')
}

function toAzureDocument(item: PreparedSlideRecord, contentVector: number[]): SlideAzureSearchDocument {
  const { record, content } = item
  if (contentVector.length !== EXPECTED_EMBEDDING_DIMENSIONS) {
    throw new Error(
      `Embedding for ${record.id} has ${contentVector.length} dimensions; expected ${EXPECTED_EMBEDDING_DIMENSIONS}`,
    )
  }

  const document: SlideAzureSearchDocument = {
    '@search.action': 'upload',
    id: encodeAzureSearchKey(`slide:${record.id}`),
    kind: 'slide',
    lang: record.lang,
    chapterKey: record.chapterKey,
    chapterTitle: record.chapterTitle,
    sectionId: record.sectionId,
    sectionTitle: record.sectionTitle,
    blockIndex: record.blockIndex,
    blockType: record.blockType,
    slideNumber: record.slideNumber,
    title: record.title,
    content,
    href: record.href,
    imageSrc: record.imageSrc,
    sourcePath: record.sourcePath,
    access: record.access,
    contentVector,
  }

  if (record.chapterNumber !== undefined) document.chapterNumber = record.chapterNumber

  return document
}

function printPlan(records: BookSlideSearchRecord[], prepared: PreparedSlideRecord[], options: SyncOptions): void {
  const byLang = new Map<string, number>()
  const byChapter = new Map<string, number>()

  for (const item of prepared) {
    byLang.set(item.record.lang, (byLang.get(item.record.lang) ?? 0) + 1)
    byChapter.set(item.record.chapterKey, (byChapter.get(item.record.chapterKey) ?? 0) + 1)
  }

  console.log(`Candidate slide records: ${records.length}`)
  console.log(`Ready to sync: ${prepared.length}`)
  console.log(`Language filter: ${options.lang}`)
  console.log(`Chapter filter: ${options.chapter ?? 'all'}`)
  console.log(`Strict cache: ${options.strictCache ? 'yes' : 'no'}`)
  console.log(`Embedding batch size: ${options.embeddingBatchSize}`)
  console.log(`By language: ${JSON.stringify(Object.fromEntries([...byLang.entries()].sort()))}`)
  console.log(`By chapter: ${JSON.stringify(Object.fromEntries([...byChapter.entries()].sort()))}`)

  const sample = prepared.slice(0, 5)
  if (sample.length > 0) {
    console.log('\nSample:')
    for (const item of sample) {
      console.log(`- ${item.record.id} (${item.content.length} chars) -> ${item.record.href}`)
    }
  }
}

async function syncRecords(records: PreparedSlideRecord[], options: SyncOptions): Promise<void> {
  const config = getAzureRagConfig({ requireSearchAdminKey: true })
  const batches = chunk(records, options.embeddingBatchSize)

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
    const batch = batches[batchIndex]
    const vectors = await createAzureEmbeddings(batch.map(embeddingTextForRecord), config)
    const documents = batch.map((record, index) => toAzureDocument(record, vectors[index]))

    await uploadAzureSearchDocuments(documents, config)

    const synced = Math.min((batchIndex + 1) * options.embeddingBatchSize, records.length)
    console.log(`Synced ${synced}/${records.length}`)
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const records = collectRecords(options)
  const prepared = prepareRecords(records, options)

  printPlan(records, prepared, options)

  if (prepared.length === 0) {
    console.log('No OCR-cached slide records to sync.')
    return
  }

  if (options.dryRun) {
    console.log('\nDry run complete. No Azure calls were made.')
    return
  }

  await syncRecords(prepared, options)
  console.log(`Done. Uploaded ${prepared.length} slide records to Azure AI Search.`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})

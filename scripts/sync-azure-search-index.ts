import { loadEnvConfig } from '@next/env'
import {
  createAzureEmbeddings,
  encodeAzureSearchKey,
  getAzureRagConfig,
  uploadAzureSearchDocuments,
  type AzureSearchUploadDocument,
} from '../lib/azureRag'
import { getBookTextSearchIndex, type BookSearchLangFilter, type BookSearchRecord } from '../lib/searchIndex'

loadEnvConfig(process.cwd())

type SyncOptions = {
  lang: BookSearchLangFilter
  limit: number | null
  dryRun: boolean
  embeddingBatchSize: number
  includeSections: boolean
}

type BookAzureSearchDocument = AzureSearchUploadDocument & {
  kind: 'text'
  lang: string
  chapterKey: string
  chapterNumber?: number
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  blockIndex: number
  blockType: string
  title: string
  content: string
  href: string
  sourcePath: string
  access: string
  contentVector: number[]
}

const DEFAULT_EMBEDDING_BATCH_SIZE = 48
const EXPECTED_EMBEDDING_DIMENSIONS = 1536
const LANGS = new Set<BookSearchLangFilter>(['all', 'fr', 'en', 'de', 'es', 'it', 'th'])

function usage(): string {
  return [
    'Usage: npm run azure:sync-book -- [options]',
    '',
    'Options:',
    '  --lang=<all|fr|en|de|es|it|th>  Language to sync. Default: all',
    '  --limit=<number>                 Sync only the first N records.',
    '  --dry-run                        Print the planned sync without Azure calls.',
    '  --embedding-batch-size=<number>  Number of chunks embedded per request. Default: 48',
    '  --exclude-sections               Skip section-heading-only records.',
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
    limit: null,
    dryRun: false,
    embeddingBatchSize: DEFAULT_EMBEDDING_BATCH_SIZE,
    includeSections: true,
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
    if (arg === '--exclude-sections') {
      options.includeSections = false
      continue
    }
    if (arg.startsWith('--lang=')) {
      const lang = arg.slice('--lang='.length) as BookSearchLangFilter
      if (!LANGS.has(lang)) throw new Error(`Unsupported language: ${lang}`)
      options.lang = lang
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

function chapterNumberForRecord(record: BookSearchRecord): number | undefined {
  const fromKey = record.chapterKey.match(/^chapter-(\d+)$/)?.[1]
  if (fromKey) return Number.parseInt(fromKey, 10)

  if (!record.chapterNumber) return undefined
  const fromNumber = record.chapterNumber.match(/\d+/)?.[0]
  return fromNumber ? Number.parseInt(fromNumber, 10) : undefined
}

function titleForRecord(record: BookSearchRecord): string {
  if (record.blockType === 'section') return record.sectionTitle
  return `${record.chapterTitle} - ${record.sectionTitle}`
}

function sourcePathForRecord(record: BookSearchRecord): string {
  return `content/${record.chapterKey}.${record.lang}.ts#${record.anchor}`
}

function embeddingTextForRecord(record: BookSearchRecord): string {
  return [
    `Chapter: ${record.chapterTitle}`,
    `Section: ${record.sectionTitle}`,
    `Language: ${record.lang}`,
    '',
    record.text,
  ].join('\n')
}

function toAzureDocument(record: BookSearchRecord, contentVector: number[]): BookAzureSearchDocument {
  if (contentVector.length !== EXPECTED_EMBEDDING_DIMENSIONS) {
    throw new Error(
      `Embedding for ${record.id} has ${contentVector.length} dimensions; expected ${EXPECTED_EMBEDDING_DIMENSIONS}`,
    )
  }

  const chapterNumber = chapterNumberForRecord(record)
  const document: BookAzureSearchDocument = {
    '@search.action': 'upload',
    id: encodeAzureSearchKey(`text:${record.id}`),
    kind: 'text',
    lang: record.lang,
    chapterKey: record.chapterKey,
    chapterTitle: record.chapterTitle,
    sectionId: record.sectionId,
    sectionTitle: record.sectionTitle,
    blockIndex: record.blockIndex,
    blockType: record.blockType,
    title: titleForRecord(record),
    content: record.text,
    href: record.href,
    sourcePath: sourcePathForRecord(record),
    access: record.access,
    contentVector,
  }

  if (chapterNumber !== undefined) document.chapterNumber = chapterNumber

  return document
}

function collectRecords(options: SyncOptions): BookSearchRecord[] {
  let records = getBookTextSearchIndex()

  if (options.lang !== 'all') {
    records = records.filter((record) => record.lang === options.lang)
  }

  if (!options.includeSections) {
    records = records.filter((record) => record.blockType !== 'section')
  }

  if (options.limit !== null) {
    records = records.slice(0, options.limit)
  }

  return records
}

function printPlan(records: BookSearchRecord[], options: SyncOptions): void {
  const byLang = new Map<string, number>()
  const byKind = new Map<string, number>()

  for (const record of records) {
    byLang.set(record.lang, (byLang.get(record.lang) ?? 0) + 1)
    byKind.set(record.blockType, (byKind.get(record.blockType) ?? 0) + 1)
  }

  console.log(`Records: ${records.length}`)
  console.log(`Language filter: ${options.lang}`)
  console.log(`Section headings: ${options.includeSections ? 'included' : 'excluded'}`)
  console.log(`Embedding batch size: ${options.embeddingBatchSize}`)
  console.log(`By language: ${JSON.stringify(Object.fromEntries([...byLang.entries()].sort()))}`)
  console.log(`By block type: ${JSON.stringify(Object.fromEntries([...byKind.entries()].sort()))}`)

  const sample = records.slice(0, 3)
  if (sample.length > 0) {
    console.log('\nSample:')
    for (const record of sample) {
      console.log(`- ${record.id} -> ${record.href}`)
    }
  }
}

async function syncRecords(records: BookSearchRecord[], options: SyncOptions): Promise<void> {
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

  printPlan(records, options)

  if (records.length === 0) {
    console.log('No records to sync.')
    return
  }

  if (options.dryRun) {
    console.log('\nDry run complete. No Azure calls were made.')
    return
  }

  await syncRecords(records, options)
  console.log(`Done. Uploaded ${records.length} records to Azure AI Search.`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})

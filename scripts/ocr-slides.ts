import { existsSync, readFileSync } from 'node:fs'
import { loadEnvConfig } from '@next/env'
import {
  analyzeImageWithAzureRead,
  getAzureDocumentIntelligenceConfig,
} from '../lib/azureDocumentIntelligence'
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
  writeSlideOcrCache,
} from './slide-ocr-cache'

loadEnvConfig(process.cwd())

type OcrOptions = {
  lang: BookSearchLangFilter
  chapter: string | null
  limit: number | null
  dryRun: boolean
  force: boolean
  highResolution: boolean
}

const LANGS = new Set<BookSearchLangFilter>(['all', 'fr', 'en', 'de', 'es', 'it', 'th'])

function usage(): string {
  return [
    'Usage: npm run azure:ocr-slides -- [options]',
    '',
    'Options:',
    '  --lang=<all|fr|en|de|es|it|th>  Language to OCR. Default: all',
    '  --chapter=<chapter-key>          Restrict to one chapter, e.g. chapter-14',
    '  --limit=<number>                 OCR only the first N records after filters.',
    '  --dry-run                        Print the planned OCR without Azure calls.',
    '  --force                          Re-run OCR even when a cache entry matches the image hash.',
    '  --high-resolution                Enable Azure ocrHighResolution for small/dense text.',
  ].join('\n')
}

function parsePositiveInt(value: string, label: string): number {
  const parsed = Number.parseInt(value, 10)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${label} must be a positive integer`)
  }
  return parsed
}

function parseArgs(args: string[]): OcrOptions {
  const options: OcrOptions = {
    lang: 'all',
    chapter: null,
    limit: null,
    dryRun: false,
    force: false,
    highResolution: false,
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
    if (arg === '--force') {
      options.force = true
      continue
    }
    if (arg === '--high-resolution') {
      options.highResolution = true
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

    throw new Error(`Unknown argument: ${arg}\n\n${usage()}`)
  }

  return options
}

function collectRecords(options: OcrOptions): BookSlideSearchRecord[] {
  let records = getBookSlideSearchIndex(options.lang)

  if (options.chapter) {
    records = records.filter((record) => record.chapterKey === options.chapter)
  }

  if (options.limit !== null) {
    records = records.slice(0, options.limit)
  }

  return records
}

function localeForLang(lang: string): string | undefined {
  return ['fr', 'en', 'de', 'es', 'it'].includes(lang) ? lang : undefined
}

function printPlan(records: BookSlideSearchRecord[], options: OcrOptions): void {
  const byLang = new Map<string, number>()
  const byChapter = new Map<string, number>()
  let cached = 0
  let stale = 0
  let missingFiles = 0

  for (const record of records) {
    byLang.set(record.lang, (byLang.get(record.lang) ?? 0) + 1)
    byChapter.set(record.chapterKey, (byChapter.get(record.chapterKey) ?? 0) + 1)

    const filePath = resolveSlideImagePath(record)
    if (!existsSync(filePath)) {
      missingFiles += 1
      continue
    }

    const hash = fileSha256(filePath)
    const cache = readSlideOcrCache(record)
    if (cache?.contentHash === hash) cached += 1
    else stale += 1
  }

  console.log(`Slide records: ${records.length}`)
  console.log(`Language filter: ${options.lang}`)
  console.log(`Chapter filter: ${options.chapter ?? 'all'}`)
  console.log(`Force OCR: ${options.force ? 'yes' : 'no'}`)
  console.log(`High resolution: ${options.highResolution ? 'yes' : 'no'}`)
  console.log(`Cached/current: ${cached}`)
  console.log(`Needs OCR: ${options.force ? records.length - missingFiles : stale}`)
  console.log(`Missing image files: ${missingFiles}`)
  console.log(`By language: ${JSON.stringify(Object.fromEntries([...byLang.entries()].sort()))}`)
  console.log(`By chapter: ${JSON.stringify(Object.fromEntries([...byChapter.entries()].sort()))}`)

  const sample = records.slice(0, 5)
  if (sample.length > 0) {
    console.log('\nSample:')
    for (const record of sample) {
      console.log(`- ${record.id} -> ${record.sourcePath}`)
    }
  }
}

async function ocrRecords(records: BookSlideSearchRecord[], options: OcrOptions): Promise<void> {
  const config = getAzureDocumentIntelligenceConfig({ requireKey: true })
  let processed = 0
  let skipped = 0

  for (const record of records) {
    const filePath = resolveSlideImagePath(record)
    if (!existsSync(filePath)) {
      throw new Error(`Missing slide image for ${record.id}: ${record.sourcePath}`)
    }

    const contentHash = fileSha256(filePath)
    const cache = readSlideOcrCache(record)
    if (!options.force && cache?.contentHash === contentHash) {
      skipped += 1
      continue
    }

    const base64Source = readFileSync(filePath).toString('base64')
    const ocrText = compactOcrText(await analyzeImageWithAzureRead(config, {
      base64Source,
      locale: localeForLang(record.lang),
      highResolution: options.highResolution,
    }))

    writeSlideOcrCache({
      id: record.id,
      chapterKey: record.chapterKey,
      lang: record.lang,
      slideNumber: record.slideNumber,
      title: record.title,
      imageSrc: record.imageSrc,
      href: record.href,
      sourcePath: record.sourcePath,
      contentHash,
      ocrText,
      ocrEngine: 'azure-document-intelligence:prebuilt-read',
      apiVersion: config.apiVersion,
      updatedAt: new Date().toISOString(),
    })

    processed += 1
    console.log(`OCR ${processed + skipped}/${records.length}: ${record.id} (${ocrText.length} chars)`)
  }

  console.log(`Done. OCR updated ${processed} slide cache entr${processed === 1 ? 'y' : 'ies'}; skipped ${skipped} current cache entr${skipped === 1 ? 'y' : 'ies'}.`)
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const records = collectRecords(options)

  printPlan(records, options)

  if (records.length === 0) {
    console.log('No slide records to OCR.')
    return
  }

  if (options.dryRun) {
    console.log('\nDry run complete. No Azure calls were made.')
    return
  }

  await ocrRecords(records, options)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})

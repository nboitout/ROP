import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import type { BookSlideSearchRecord } from '../content/slidesyncRegistry'
import { encodeAzureSearchKey } from '../lib/azureRag'

export type SlideOcrCacheEntry = {
  id: string
  chapterKey: string
  lang: string
  slideNumber: number
  title: string
  imageSrc: string
  href: string
  sourcePath: string
  contentHash: string
  ocrText: string
  ocrEngine: 'azure-document-intelligence:prebuilt-read'
  apiVersion: string
  updatedAt: string
}

export const SLIDE_OCR_CACHE_DIR = path.join(process.cwd(), 'data', 'search', 'slide-ocr')

export function ensureSlideOcrCacheDir(): void {
  mkdirSync(SLIDE_OCR_CACHE_DIR, { recursive: true })
}

export function slideOcrCachePath(record: Pick<BookSlideSearchRecord, 'id'>): string {
  return path.join(SLIDE_OCR_CACHE_DIR, `${encodeAzureSearchKey(record.id)}.json`)
}

export function resolveSlideImagePath(record: Pick<BookSlideSearchRecord, 'sourcePath'>): string {
  return path.join(process.cwd(), ...record.sourcePath.split('/'))
}

export function fileSha256(filePath: string): string {
  return createHash('sha256').update(readFileSync(filePath)).digest('hex')
}

export function readSlideOcrCache(record: Pick<BookSlideSearchRecord, 'id'>): SlideOcrCacheEntry | null {
  const cachePath = slideOcrCachePath(record)
  if (!existsSync(cachePath)) return null

  try {
    return JSON.parse(readFileSync(cachePath, 'utf8')) as SlideOcrCacheEntry
  } catch {
    return null
  }
}

export function writeSlideOcrCache(entry: SlideOcrCacheEntry): void {
  ensureSlideOcrCacheDir()
  writeFileSync(slideOcrCachePath(entry), `${JSON.stringify(entry, null, 2)}\n`, 'utf8')
}

export function compactOcrText(value: string): string {
  return value
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { getChapter, getChapterKeys } from '../content/registry'
import {
  englishReaderDescription,
  englishReaderTitle,
} from '../lib/readerDocumentMetadata'

const englishChapters = getChapterKeys().map((key) => getChapter(key, 'en').chapter)

test('every English chapter has localized classic and synchronized reader metadata', () => {
  assert.equal(englishChapters.length, 22)

  for (const chapter of englishChapters) {
    for (const mode of ['classic', 'synchronized'] as const) {
      const title = englishReaderTitle(chapter, mode)
      const description = englishReaderDescription(chapter, mode)

      assert.match(title, new RegExp(chapter.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
      assert.doesNotMatch(title, /\bChapitre\b|Lecture synchronis[ée]e|Traitement par|C[ôo]lon et rectum|Vessie|Reins|Cavit[ée] pelvienne|Organes g[ée]nitaux|Syst[èe]me [ée]rectile/i)
      assert.match(description, /Occipito-Podal Reflexotherapy/)
      assert.ok(description.length > 60)

      if (chapter.number) assert.match(title, new RegExp(`^Chapter ${chapter.number} — `))
      else assert.match(title, /^Introduction(?: — Synchronized reading)? ·/)

      if (mode === 'synchronized') assert.match(title, /Synchronized reading/)
      else assert.doesNotMatch(title, /Synchronized reading/)
    }
  }
})

test('every classic and synchronized reader route generates localized metadata', () => {
  const root = process.cwd()
  const routes = [
    ['introduction', 'app/introduction/page.tsx', 'app/lecture/introduction/page.tsx'],
    ...Array.from({ length: 21 }, (_, index) => {
      const number = index + 1
      return [
        `chapter-${number}`,
        `app/chapitre-${number}/page.tsx`,
        number === 2
          ? 'app/lecture/traitement-rop/page.tsx'
          : `app/lecture/chapitre-${number}/page.tsx`,
      ]
    }),
  ]

  for (const [chapterKey, classicPath, synchronizedPath] of routes) {
    for (const path of [classicPath, synchronizedPath]) {
      const source = readFileSync(join(root, path), 'utf8')
      assert.match(source, /export async function generateMetadata/)
      assert.match(source, /englishReaderMetadata/)
      assert.match(source, new RegExp(`getChapter\\('${chapterKey}'`))
    }
  }
})

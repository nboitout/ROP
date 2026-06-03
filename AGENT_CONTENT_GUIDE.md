# Agent Guide — Adding Translated Chapters & Documents

**Repo:** `nboitout/ROP` · **Stack:** Next.js 16 App Router, TypeScript, Vercel

---

## 1. Content Model

All chapter content lives in `content/`. The canonical types are in `content/types.ts`:

```ts
type Block =
  | { type: 'para';        text: string }
  | { type: 'lead';        label: string; text: string }       // bold label — body
  | { type: 'sub';         text: string }                      // <h3> subheading
  | { type: 'bullets';     items: string[] }                   // bullet list
  | { type: 'leadBullets'; items: { label: string; text: string }[] }  // bold-label bullet list
  | { type: 'figure';      src: string; caption: string; alt: string; orientation: 'landscape' | 'portrait' }
  | { type: 'rop';         body: string[] }                    // "Intérêt en R.O.P." sidebar

type Section = { id: string; title: string; blocks: Block[] }

type Chapter = {
  slug: string        // used for URL routing and analytics (e.g. 'introduction', 'chapter-5')
  number?: string     // display number; omit for introduction
  title: string       // <h1> in the hero
  sections: Section[]
  revisionSheet?: { src: string; caption: string; alt: string }
  clinicalCase?:   { src: string; caption: string; alt: string }
  slides?:         { url: string; label: string; description: string }
}
```

---

## 2. File Naming & Registry

### Content file naming

```
content/<chapter-key>.<lang>.ts
```

Examples: `content/introduction.fr.ts`, `content/chapter2.de.ts`

The chapter key is the same string used as the registry key (see below).

### Registry (`content/registry.ts`)

Every new content file must be imported and registered here:

```ts
// 1. Add import at top
import { introductionIt } from './introduction.it'

// 2. Add locale entry in the registry object
const registry = {
  introduction: { fr: introductionFr, en: introductionEn, de: introductionDe, es: introductionEs, it: introductionIt },
  'chapter-2':  { fr: chapter2Fr, en: chapter2En, de: chapter2De, es: chapter2Es, it: chapter2It },
  'chapter-5':  { fr: chapter5Fr },
  'chapter-14': { fr: chapter14Fr },
}
```

French (`fr`) is always the canonical fallback. A missing locale falls back to French automatically.

### Languages

`type Lang = 'fr' | 'en' | 'de' | 'es' | 'it'`

All five are supported end-to-end (cookie, server component, client context, translations).

---

## 3. Extracting Text from a `.docx` Source File

Source files are `.docx` and live in `public/chapter-<N>/` on GitHub.

Use this Python snippet to extract paragraphs with their Word style names:

```python
import zipfile, xml.etree.ElementTree as ET

def extract_docx(path):
    ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    with zipfile.ZipFile(path) as z:
        tree = ET.parse(z.open('word/document.xml'))
    body = tree.getroot().find('.//' + ns + 'body')
    for para in body.findall('.//' + ns + 'p'):
        ppr = para.find(ns + 'pPr')
        style = ''
        if ppr is not None:
            ps = ppr.find(ns + 'pStyle')
            if ps is not None:
                style = ps.attrib.get(ns + 'val', '')
        texts = []
        for r in para.findall('.//' + ns + 'r'):
            t = r.find(ns + 't')
            if t is not None and t.text:
                texts.append(t.text)
        text = ''.join(texts).strip()
        if text:
            print(f'[{style}] {text}')
```

**Watch out for `<w:tab/>` elements** — they split runs in some styles (hanging-indent numbered lists). If a paragraph appears with only "1." or "2." and no content, inspect the raw XML around it: the text after the tab is in the same `<w:r>` run but after a `<w:tab/>` child, which the simple extractor silently drops. Read the raw XML with `z.read('word/document.xml').decode('utf-8')` and search for the surrounding text to recover the full content.

### Word style → Block type mapping

| Word style      | Block type to use              |
|-----------------|-------------------------------|
| (none / Normal) | `para`                        |
| `Heading2`      | new `Section` (use as title)  |
| `Heading3`      | `sub`                         |
| `ListBullet`    | item inside `bullets`         |
| `ListNumber`    | usually fold into a `para`; or use `leadBullets` if the items have a bold label |
| Custom hanging-indent (1. Tab text) | `leadBullets` — split on `:` or first em dash to get label / text |

---

## 4. Writing the TypeScript Content File

### Template

```ts
// Introduction — Italian
// Source: public/chapter-0/Chapter_0_Introduction_ROP_Italian.docx

import type { Chapter } from './types'

export const introductionIt: Chapter = {
  slug: 'introduction',
  title: 'Introduzione',
  sections: [
    {
      id: 'avant-propos',        // IDs MUST match the French file — they are anchors / analytics keys
      title: 'Presentazione',
      blocks: [
        { type: 'para', text: 'Questo terzo volume...' },
      ],
    },
    // … more sections
  ],
}
```

### Section IDs

**Always reuse the French section IDs.** They are used for scroll tracking and table-of-contents navigation. Current IDs for the introduction:

| id                       | French title                                       |
|--------------------------|----------------------------------------------------|
| `avant-propos`           | Avant-propos                                       |
| `en-bref`                | En bref : ce que ce livre propose                  |
| `visceral-incontournable`| Pourquoi le système viscéral est incontournable    |
| `parti-pris`             | Notre parti-pris : rigueur anatomique et pragmatisme clinique |
| `terminologie`           | Terminologie                                       |
| `plan-type`              | Plan-type des chapitres                            |

Chapter 2 section IDs: `technique`, `modalites`, `hierarchisation`, `exemple-clinique`, `contre-indications`, `indications`, `actions`, `reactions`, `conseils`.

### String quoting — critical

All content strings will contain language-specific punctuation. Follow these rules to avoid TypeScript syntax errors that **break the entire registry** and make every page fall back to French:

- **Prefer single-quoted TS strings.** Escape apostrophes inside with `\'`.
  ```ts
  { type: 'para', text: 'L\'obiettivo rimane lo stesso.' }
  ```
- **If the text contains double quotes** (e.g. `"posteriore"`) and you use single-quoted TS strings, no escaping is needed:
  ```ts
  { label: 'dorsale', text: 'anziché "posteriore".' }
  ```
- **If you use double-quoted TS strings**, escape every inner `"` as `\"`:
  ```ts
  { type: "para", text: "die sogenannte \"Trommel\"-Spannung" }
  ```
- **Never mix** opening and closing quotation marks of the target language (e.g. `„…"` in German) with the TS string delimiter without escaping. The German closing quote `"` (U+0022) is identical to the ASCII double quote and will terminate the string.

Run `npx tsc --noEmit` after writing the file. Any errors in a content file **will prevent the whole registry from loading**, causing all chapter pages to render in French.

---

## 5. Adding a Brand-New Chapter (new slug)

If the chapter has no existing page (e.g., a new Chapter 9):

### a) Create the content file

`content/chapter9.fr.ts` (plus locale variants as they arrive).

```ts
export const chapter9Fr: Chapter = {
  slug: 'chapter-9',
  number: '9',
  title: 'Estomac',
  sections: [ /* … */ ],
}
```

### b) Register in `content/registry.ts`

```ts
import { chapter9Fr } from './chapter9.fr'
// …
'chapter-9': { fr: chapter9Fr },
```

### c) Create the Next.js page

Copy the pattern from `app/chapitre-5/page.tsx`. The minimum shape is:

```ts
// app/chapitre-9/page.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export default async function Chapitre9Page() {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access')) redirect('/?gate=free#acces-libre')

  const lang = await getServerLang()
  const { chapter, contentLang } = getChapter('chapter-9', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return <ChapterReader chapter={chapter} bookTitle={bookTitle} contentLang={contentLang} />
}
```

Use `paid_access` / `admin_session` cookies instead of `free_chapters_access` for paid chapters (see `app/lecture/traitement-rop/page.tsx`).

### d) Add to the chapters listing page

If the chapter should appear in the free-chapters grid, add an entry to `chaptersPage.chapters` for **all five languages** in `app/i18n/translations.ts`:

```ts
// inside each language's chaptersPage.chapters array:
{
  href: '/chapitre-9',
  eyebrow: 'Chapitre 9',
  title: 'Estomac',
  description: '…',
  meta: '~20 min · 4 illustrations',
},
```

---

## 6. Language System — How It Works

```
User selects language
  → LanguageContext.setLang(l)      (client)
  → document.cookie = 'lang=<l>'
  → router.refresh()                (busts Next.js router cache)

Next navigation to /introduction
  → Server component reads cookie via getServerLang()
  → getChapter('introduction', lang) → returns correct locale or falls back to 'fr'
  → ChapterReader receives chapter prop (content) + contentLang
  → ChapterReader uses useLanguage() for UI strings (t.reader.*)
  → If lang ≠ contentLang → shows fallback notice banner
```

The `lang` cookie is: `path=/; max-age=31536000; samesite=lax`.
`getServerLang()` is in `app/i18n/serverLang.ts` — it validates the cookie value against the `LANGS` array before returning; invalid values fall back to `'fr'`.

---

## 7. Checklist for Every Content Addition

```
[ ] Download .docx from public/chapter-<N>/ on GitHub
[ ] Extract text with Python script; inspect raw XML for any tab-delimited content
[ ] Write content/<key>.<lang>.ts — export name: <camelCase><Key><Lang> (e.g. introductionIt, chapter9Fr)
[ ] Section IDs match the French file exactly
[ ] No unescaped quotes inside TS string literals
[ ] Import and register in content/registry.ts
[ ] Run: npx tsc --noEmit  — zero NEW errors in content files
[ ] If new chapter slug: create app/<route>/page.tsx
[ ] If new chapter shown in listing: update chaptersPage.chapters in translations.ts for all 5 langs
[ ] Commit with descriptive message; push to main
[ ] Verify Vercel deployment succeeds (no type errors block the build)
```

---

## 8. Known Pitfalls

| Pitfall | Symptom | Fix |
|---|---|---|
| Unescaped `"` inside double-quoted TS string | **All chapters revert to French** (registry fails to load) | Use single-quoted strings or escape as `\"` |
| Wrong path for notification form labels | Build fails: `Property 'notify' does not exist` | Correct path is `t.pricing.notify.form` |
| `<w:tab/>` in hanging-indent list items | Paragraph extracted as "1." with no content | Read raw XML around the paragraph to recover text after the tab |
| Translator note in docx | Stray paragraph at top of file | Skip lines clearly marked as translation metadata |
| New section IDs that differ from French | Analytics / scroll tracking breaks across locales | Always copy section IDs from the French source file |
| Skipping `translations[lang].reader.bookTitle` in new pages | Book title always in French | Pass `translations[lang].reader.bookTitle` as `bookTitle` prop — never hardcode the French string |

import type { Metadata } from 'next'
import { translations } from '@/app/i18n/translations'
import { getChapterLangs } from '@/content/registry'
import ChapterBoard, { type BoardRow, type LangStatus } from '@/components/admin/ChapterBoard'

export const metadata: Metadata = { title: 'Chapters · Admin R.O.P.' }

const ROUTES: Record<string, { href: string; key: string; gated?: boolean; draft?: boolean }> = {
  '00': { href: '/introduction', key: 'introduction' },
  '01': { href: '/chapitre-1', key: 'chapter-1' },
  '02': { href: '/lecture/traitement-rop', key: 'chapter-2' },
  '03': { href: '/lecture/chapitre-3', key: 'chapter-3' },
  '04': { href: '/chapitre-4', key: 'chapter-4', draft: true },
  '06': { href: '/lecture/chapitre-6', key: 'chapter-6' },
  '07': { href: '/chapitre-7', key: 'chapter-7' },
  '08': { href: '/lecture/chapitre-8', key: 'chapter-8' },
  '09': { href: '/chapitre-9', key: 'chapter-9' },
  '10': { href: '/chapitre-10', key: 'chapter-10' },
  '11': { href: '/lecture/chapitre-11', key: 'chapter-11' },
  '12': { href: '/lecture/chapitre-12', key: 'chapter-12' },
  '13': { href: '/lecture/chapitre-13', key: 'chapter-13' },
  '05': { href: '/lecture/chapitre-5', key: 'chapter-5', gated: true },
  '14': { href: '/lecture/chapitre-14', key: 'chapter-14' },
  '15': { href: '/lecture/chapitre-15', key: 'chapter-15' },
  '16': { href: '/lecture/chapitre-16', key: 'chapter-16' },
  '17': { href: '/lecture/chapitre-17', key: 'chapter-17' },
  '18': { href: '/lecture/chapitre-18', key: 'chapter-18' },
}

export default async function AdminChapitresPage() {
  const t = translations.en.chapters
  const partTitle = new Map(t.parts.map((p) => [p.id, p.title]))

  const rows: BoardRow[] = t.cards.map((card) => {
    const route = ROUTES[card.num]
    const langs = route ? getChapterLangs(route.key) : []
    const fr: LangStatus = route ? (langs.includes('fr') ? 'live' : 'none') : 'none'
    const en: LangStatus = route ? (langs.includes('en') ? 'live' : 'fallback') : 'none'
    const de: LangStatus = route ? (langs.includes('de') ? 'live' : 'fallback') : 'none'
    const es: LangStatus = route ? (langs.includes('es') ? 'live' : 'fallback') : 'none'
    const it: LangStatus = route ? (langs.includes('it') ? 'live' : 'fallback') : 'none'
    return {
      num: card.num,
      title: card.title,
      partId: card.part,
      partTitle: partTitle.get(card.part) ?? card.part,
      href: route?.href ?? null,
      free: 'variant' in card && card.variant === 'free',
      gated: !!route?.gated,
      draft: !!route?.draft,
      fr,
      en,
      de,
      es,
      it,
    }
  })

  const total = rows.length
  const builtTotal = rows.filter((r) => r.href).length
  const frLive = rows.filter((r) => r.fr === 'live').length
  const enLive = rows.filter((r) => r.en === 'live').length
  const deLive = rows.filter((r) => r.de === 'live').length
  const esLive = rows.filter((r) => r.es === 'live').length
  const itLive = rows.filter((r) => r.it === 'live').length

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Preparation</p>
          <h1 className="adm-page-title">Chapters — FR / EN / DE / ES / IT</h1>
          <p className="adm-page-sub">
            Each link opens the chapter in the selected language without changing the site language.
            Useful for reviewing versions side by side, with one tab per language.
          </p>
        </div>
      </div>

      <div className="adm-scorecards">
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">Built chapters</p>
          <p className="adm-scorecard-value">{builtTotal}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">pages live</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">FR</p>
          <p className="adm-scorecard-value">{frLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">EN</p>
          <p className="adm-scorecard-value">{enLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">DE</p>
          <p className="adm-scorecard-value">{deLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">ES</p>
          <p className="adm-scorecard-value">{esLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">IT</p>
          <p className="adm-scorecard-value">{itLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters translated</p>
        </div>
      </div>

      <ChapterBoard parts={t.parts} rows={rows} />
    </main>
  )
}

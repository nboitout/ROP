import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { getChapterLangs } from '@/content/registry'
import ChapterBoard, { type BoardRow, type LangStatus } from '@/components/admin/ChapterBoard'

export const metadata: Metadata = { title: 'Chapitres · Admin R.O.P.' }

/**
 * Maps a chapter number (from the book manifest) to its built route and the
 * registry key used to look up translated content. Only chapters with a page
 * appear here; the rest render as "not started" rows on the board.
 */
const ROUTES: Record<string, { href: string; key: string; gated?: boolean; draft?: boolean }> = {
  '00': { href: '/introduction', key: 'introduction' },
  '01': { href: '/chapitre-1', key: 'chapter-1' },
  '02': { href: '/lecture/traitement-rop', key: 'chapter-2', gated: true },
  '03': { href: '/chapitre-3', key: 'chapter-3' },
  '04': { href: '/chapitre-4', key: 'chapter-4', draft: true },
  '05': { href: '/chapitre-5', key: 'chapter-5' },
  '14': { href: '/chapitre-14', key: 'chapter-14' },
}

export default async function AdminChapitresPage() {
  const lang = await getServerLang()
  const t = translations[lang].chapters
  const partTitle = new Map(t.parts.map((p) => [p.id, p.title]))

  const rows: BoardRow[] = t.cards.map((card) => {
    const route = ROUTES[card.num]
    const langs = route ? getChapterLangs(route.key) : []
    const fr: LangStatus = route ? (langs.includes('fr') ? 'live' : 'none') : 'none'
    const en: LangStatus = route ? (langs.includes('en') ? 'live' : 'fallback') : 'none'
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
    }
  })

  const total = rows.length
  const frLive = rows.filter((r) => r.fr === 'live').length
  const enLive = rows.filter((r) => r.en === 'live').length
  const builtTotal = rows.filter((r) => r.href).length

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Préparation</p>
          <h1 className="adm-page-title">Chapitres — FR / EN</h1>
          <p className="adm-page-sub">
            Chaque lien ouvre le chapitre dans la langue choisie, sans changer la langue du site.
            Idéal pour relire FR et EN en parallèle (un onglet par langue).
          </p>
        </div>
      </div>

      <div className="adm-scorecards">
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">Chapitres construits</p>
          <p className="adm-scorecard-value">{builtTotal}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">pages en ligne</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">Français prêts</p>
          <p className="adm-scorecard-value">{frLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">contenu FR traduit</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">Anglais prêts</p>
          <p className="adm-scorecard-value">{enLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">contenu EN traduit</p>
        </div>
      </div>

      <ChapterBoard parts={t.parts} rows={rows} />
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = { title: 'Chapitres · Admin R.O.P.' }

export default async function AdminChapitresPage() {
  const lang = await getServerLang()
  const t = translations[lang].adminChapitres

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">{t.eyebrow}</p>
          <h1 className="adm-page-title">{t.h1}</h1>
          <p className="adm-page-sub">{t.sub}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
        {t.chapters.map((ch) => (
          <Link key={ch.href} href={ch.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: 'rgba(245,240,232,.04)', border: '1px solid rgba(245,240,232,.1)', borderRadius: 4, padding: '18px 20px', textDecoration: 'none', transition: 'border-color .15s' }}>
            <p style={{ color: 'rgba(200,160,255,1)', fontSize: '.75rem', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{ch.label}</p>
            <p style={{ color: 'var(--adm-cream)', fontWeight: 600, fontSize: '.95rem' }}>{ch.sub}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

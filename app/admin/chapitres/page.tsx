import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Chapitres · Admin R.O.P.' }

const FREE_CHAPTERS = [
  { label: 'Introduction', sub: 'Genèse de la méthode R.O.P.', href: '/introduction' },
  { label: 'Chapitre 5', sub: 'Mécanisme de stress', href: '/chapitre-5' },
  { label: 'Chapitre 14', sub: 'Intestin grêle', href: '/chapitre-14' },
]

const PAID_CHAPTERS = [
  { label: 'Chapitre 2', sub: 'Traitement par la R.O.P.', href: '/lecture/traitement-rop' },
]

export default function AdminChapitresPage() {
  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Bibliothèque</p>
          <h1 className="adm-page-title">Chapitres</h1>
          <p className="adm-page-sub">Accès direct à tous les chapitres disponibles</p>
        </div>
      </div>

      <p className="adm-section-title">Chapitres gratuits</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12, marginBottom: 32 }}>
        {FREE_CHAPTERS.map((ch) => (
          <Link key={ch.href} href={ch.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: 'rgba(245,240,232,.04)', border: '1px solid rgba(245,240,232,.1)', borderRadius: 4, padding: '18px 20px', textDecoration: 'none', transition: 'border-color .15s' }}>
            <p style={{ color: 'rgba(201,163,94,.9)', fontSize: '.67rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 6 }}>Accès libre</p>
            <p style={{ color: 'var(--adm-cream)', fontWeight: 600, fontSize: '.95rem', marginBottom: 4 }}>{ch.label}</p>
            <p style={{ color: 'rgba(245,240,232,.55)', fontSize: '.82rem' }}>{ch.sub}</p>
          </Link>
        ))}
      </div>

      <p className="adm-section-title">Chapitres payants</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
        {PAID_CHAPTERS.map((ch) => (
          <Link key={ch.href} href={ch.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: 'rgba(245,240,232,.04)', border: '1px solid rgba(245,240,232,.1)', borderRadius: 4, padding: '18px 20px', textDecoration: 'none', transition: 'border-color .15s' }}>
            <p style={{ color: 'rgba(180,140,220,.8)', fontSize: '.67rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 6 }}>Accès payant</p>
            <p style={{ color: 'var(--adm-cream)', fontWeight: 600, fontSize: '.95rem', marginBottom: 4 }}>{ch.label}</p>
            <p style={{ color: 'rgba(245,240,232,.55)', fontSize: '.82rem' }}>{ch.sub}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Nouvelle édition privée · Chapters · Admin R.O.P.' }

export default function NewEditionChaptersPage() {
  return (
    <main className="adm-page">
      <div className="adm-page-header"><div><p className="adm-page-eyebrow">Private preparation</p><h1 className="adm-page-title">Nouvelle édition privée</h1><p className="adm-page-sub">Private chapter rebuilds using revised texts. The published chapters remain unchanged.</p></div></div>
      <nav className="adm-edition-tabs" aria-label="Book edition"><Link href="/admin/chapitres" className="adm-edition-tab">Current edition</Link><Link href="/admin/chapitres/nouvelle-edition" className="adm-edition-tab active">Private edition</Link></nav>
      <section className="adm-edition-grid" aria-label="Private-edition chapter status">
        <article className="adm-edition-card test"><p className="adm-edition-status">Rebuilt</p><h2>Chapter 3 · Central nervous system</h2><p>Revised private text, updated synthesis selection, and dedicated reflex cartography/photo sequence.</p><div className="adm-edition-actions"><Link href="/lecture/chapitre-3-rework" target="_blank">Synchronized reading →</Link><Link href="/chapitre-3-rework" target="_blank">Classic reading →</Link></div></article>
        <article className="adm-edition-card test"><p className="adm-edition-status">Rebuilt</p><h2>Chapter 4 · Autonomic nervous system</h2><p>Lighter private text with its dedicated reflex cartographies, photos, and synchronized anchors.</p><div className="adm-edition-actions"><Link href="/lecture/chapitre-4-rework" target="_blank">Synchronized reading →</Link><Link href="/chapitre-4-rework" target="_blank">Classic reading →</Link></div></article>
      </section>
    </main>
  )
}

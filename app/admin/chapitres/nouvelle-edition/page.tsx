import type { Metadata } from 'next'
import Link from 'next/link'
import { chapter14ReworkSlidesSetAside } from '@/content/chapter14-rework.slidesync'
import { chapter18ReworkSlidesSetAside } from '@/content/chapter18-rework.slidesync'

export const metadata: Metadata = { title: 'Nouvelle édition · Chapters · Admin R.O.P.' }

const PENDING = ['01', '03', '04', '07', '08', '09', '10', '11', '12', '13', '15', '16', '17', '19', '20', '21']

export default function NewEditionChaptersPage() {
  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Private preparation</p>
          <h1 className="adm-page-title">Nouvelle édition</h1>
          <p className="adm-page-sub">
            Parallel rebuild using the revised French texts and the existing slide library. The current published edition remains unchanged.
          </p>
        </div>
      </div>

      <nav className="adm-edition-tabs" aria-label="Book edition">
        <Link href="/admin/chapitres" className="adm-edition-tab">Current edition</Link>
        <Link href="/admin/chapitres/nouvelle-edition" className="adm-edition-tab active">Nouvelle édition</Link>
      </nav>

      <section className="adm-edition-grid" aria-label="New-edition chapter status">
        <article className="adm-edition-card ready">
          <p className="adm-edition-status">Foundation ready</p>
          <h2>Chapter 0 · Introduction</h2>
          <p>Already aligned with the new scientific and four-level structure.</p>
          <Link href="/introduction" target="_blank">Open current aligned chapter →</Link>
        </article>

        <article className="adm-edition-card ready">
          <p className="adm-edition-status">Foundation ready</p>
          <h2>Chapter 2 · Treatment by ROP</h2>
          <p>Already aligned with Chapter 0 and retained as the treatment framework.</p>
          <Link href="/lecture/traitement-rop" target="_blank">Open current aligned chapter →</Link>
        </article>

        <article className="adm-edition-card test">
          <p className="adm-edition-status">Rebuilt</p>
          <h2>Chapter 5 · Stress mechanisms</h2>
          <p>The existing Chapter 5 rework now belongs to the private new edition.</p>
          <div className="adm-edition-actions">
            <Link href="/lecture/chapitre-5-rework" target="_blank">Synchronized reading →</Link>
            <Link href="/chapitre-5-rework" target="_blank">Classic reading →</Link>
          </div>
        </article>

        <article className="adm-edition-card ready">
          <p className="adm-edition-status">Retained as-is</p>
          <h2>Chapter 6 · Polyvagal theory</h2>
          <p>The current text, slides and anchors are reused through private edition routes.</p>
          <div className="adm-edition-actions">
            <Link href="/lecture/chapitre-6-rework" target="_blank">Synchronized reading →</Link>
            <Link href="/chapitre-6-rework" target="_blank">Classic reading →</Link>
          </div>
        </article>

        <article className="adm-edition-card test">
          <p className="adm-edition-status">First rebuild · test</p>
          <h2>Chapter 14 · Small intestine</h2>
          <p>New private text, existing slides reordered and independently anchored.</p>
          <div className="adm-edition-actions">
            <Link href="/lecture/chapitre-14-rework" target="_blank">Synchronized reading →</Link>
            <Link href="/chapitre-14-rework" target="_blank">Classic reading →</Link>
          </div>
        </article>

        <article className="adm-edition-card test">
          <p className="adm-edition-status">Rebuilt</p>
          <h2>Chapter 18 · Bladder</h2>
          <p>New private text, with the compatible existing slides reordered and independently anchored.</p>
          <div className="adm-edition-actions">
            <Link href="/lecture/chapitre-18-rework" target="_blank">Synchronized reading →</Link>
            <Link href="/chapitre-18-rework" target="_blank">Classic reading →</Link>
          </div>
        </article>
      </section>

      <section className="adm-edition-review">
        <div>
          <p className="adm-section-title">Slides set aside for Chapter 14</p>
          <p className="adm-page-sub">The source images remain in place; they are simply excluded from this edition’s synchronized deck.</p>
        </div>
        <ul className="adm-edition-aside-list">
          {chapter14ReworkSlidesSetAside.map((slide) => (
            <li key={slide.src}>
              <strong>{slide.src.split('/').at(-1)}</strong>
              <span>{slide.reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="adm-edition-review">
        <div>
          <p className="adm-section-title">Slides set aside for Chapter 18</p>
          <p className="adm-page-sub">The source images remain available in the current edition but are excluded from this scientifically reframed version.</p>
        </div>
        <ul className="adm-edition-aside-list">
          {chapter18ReworkSlidesSetAside.map((slide) => (
            <li key={slide.src}>
              <strong>{slide.src.split('/').at(-1)}</strong>
              <span>{slide.reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="adm-edition-pending">
        <p className="adm-section-title">Awaiting revised text</p>
        <div className="adm-edition-pending-list">
          {PENDING.map((chapter) => <span key={chapter}>Chapter {Number(chapter)}</span>)}
        </div>
      </section>
    </main>
  )
}

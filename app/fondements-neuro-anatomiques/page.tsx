import type { Metadata } from 'next'
import Link from 'next/link'
import NapFigure from '@/components/NapFigure'
import content from '@/content/fondements-neuro-anatomiques.json'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Fondements neuro-anatomiques de la R.O.P. · Guy Boitout',
  description: "Du point réflexe à la porte d'entrée somatique : quatre portes, six ponts et un gradient de ciblage à deux axes.",
  alternates: { canonical: `${SITE_URL}/fondements-neuro-anatomiques` },
  openGraph: {
    title: 'Fondements neuro-anatomiques de la R.O.P.',
    description: 'Quatre portes somatiques, six ponts neuro-anatomiques et un gradient de ciblage à deux axes.',
    url: `${SITE_URL}/fondements-neuro-anatomiques`,
    type: 'article',
  },
}

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; id: string; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'figure'; images: string[]; caption: string }

const blocks = content.blocks as ContentBlock[]
const firstHeadingIndex = blocks.findIndex((block) => block.type === 'heading')
const introduction = blocks.slice(0, firstHeadingIndex)
const body = blocks.slice(firstHeadingIndex)
const toc = blocks.filter(
  (block): block is Extract<ContentBlock, { type: 'heading' }> => block.type === 'heading' && block.level === 2,
)

function safeInternalReturn(value: string | undefined) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return null
  return value
}

function FigureBlock({ block }: { block: Extract<ContentBlock, { type: 'figure' }> }) {
  const figures = block.images.map((image, index) => {
    const dimensions = image === 'pont-2-plantaires.png'
      ? { width: 1536, height: 1024 }
      : image === 'pont-3-autres-nerfs.png'
        ? { width: 1448, height: 1086 }
      : image.endsWith('.png')
        ? { width: 1672, height: 941 }
        : {}
    return (
      <NapFigure
        key={image}
        src={`/assets/anatomie/${image}`}
        caption={block.images.length > 1 ? `${block.caption} (${index + 1}/${block.images.length})` : block.caption}
        alt={block.caption}
        {...dimensions}
      />
    )
  })
  return block.images.length > 1 ? <div className="nap-fig-pair">{figures}</div> : figures[0]
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.text}</p>
    case 'heading':
      return block.level === 2 ? <h2 id={block.id}>{block.text}</h2> : <h3 id={block.id}>{block.text}</h3>
    case 'list':
      return <ul className="nap-bullets">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
    case 'callout':
      return (
        <aside className="nap-callout">
          <p className="nap-callout-t">{block.title}</p>
          {block.text.split('\n').map((text) => <p className="nap-callout-d" key={text}>{text}</p>)}
        </aside>
      )
    case 'table':
      return (
        <div className="nap-table-wrap">
          <table className="nap-table">
            <thead><tr>{block.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
            ))}</tbody>
          </table>
        </div>
      )
    case 'figure':
      return <FigureBlock block={block} />
  }
}

export default async function FondementsNeuroAnatomiquesPage({
  searchParams,
}: {
  searchParams: Promise<{ xrefBack?: string; xrefBackLabel?: string }>
}) {
  const params = await searchParams
  const xrefBack = safeInternalReturn(params.xrefBack)
  const xrefBackLabel = params.xrefBackLabel || 'Retour à la référence'

  return (
    <main className="nap-root">
      <div className="nap-top">
        <Link href="/" className="nap-home">← Retour à l’accueil</Link>
        {xrefBack && <Link href={xrefBack} className="btn b-out nap-xref-back">← {xrefBackLabel}</Link>}
      </div>
      <article className="nap-article">
        <header className="nap-hero">
          <p className="nap-eyebrow">Réflexothérapie occipito-podale</p>
          <h1>{content.title}</h1>
          <p className="nap-standfirst">{content.subtitle}</p>
          <p className="nap-meta">Guy Boitout · Institut R.O.P. · Texte de référence</p>
        </header>

        <section className="nap-sec nap-document">
          {introduction.map((block, index) => <Block block={block} key={`introduction-${block.type}-${index}`} />)}
        </section>

        <div className="nap-toc" role="navigation" aria-label="Sommaire">
          <p className="nap-toc-t">Sommaire</p>
          <ol>{toc.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol>
        </div>

        <section className="nap-sec nap-document">
          {body.map((block, index) => <Block block={block} key={`${block.type}-${index}`} />)}
        </section>

        <aside className="nap-cta">
          <p className="nap-cta-eyebrow">Poursuivre la lecture</p>
          <p className="nap-cta-body">Retrouvez l’ensemble des chapitres et des cartographies de la méthode R.O.P.</p>
          <div className="nap-cta-row"><Link href="/chapitres-gratuits" className="btn btn-primary">Découvrir les chapitres</Link></div>
        </aside>
      </article>
    </main>
  )
}

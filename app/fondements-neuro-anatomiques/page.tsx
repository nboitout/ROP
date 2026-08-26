import type { Metadata } from 'next'
import Link from 'next/link'
import NapFigure from '@/components/NapFigure'
import frenchContent from '@/content/fondements-neuro-anatomiques.json'
import englishContent from '@/content/fondements-neuro-anatomiques.en.json'
import { getServerLang } from '@/app/i18n/serverLang'
import { languageAlternates, localizedHref, OPEN_GRAPH_LOCALES } from '@/app/i18n/locale'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const { lang: requestedLang } = await searchParams
  const lang = await getServerLang(requestedLang)
  const content = lang === 'en' ? englishContent : frenchContent
  const url = `${SITE_URL}${localizedHref('/fondements-neuro-anatomiques', lang)}`
  return {
    title: `${content.title} · Guy Boitout`,
    description: content.subtitle,
    alternates: { canonical: url, languages: languageAlternates('/fondements-neuro-anatomiques') },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url,
      locale: OPEN_GRAPH_LOCALES[lang],
      type: 'article',
    },
  }
}

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; id: string; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'figure'; images: string[]; caption: string }

function safeInternalReturn(value: string | undefined) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return null
  return value
}

function FigureBlock({ block, assetBase, isEnglish }: { block: Extract<ContentBlock, { type: 'figure' }>; assetBase: string; isEnglish: boolean }) {
  const figures = block.images.map((image, index) => {
    const dimensions = image === 'pont-2-plantaires.png' || image === 'bridge-2-plantar-afferents.png'
      ? { width: 1536, height: 1024 }
      : image === 'pont-3-autres-nerfs.png'
        ? { width: 1448, height: 1086 }
      : image.endsWith('.png')
        ? { width: 1672, height: 941 }
        : {}
    return (
      <NapFigure
        key={image}
        src={`${assetBase}/${image}`}
        caption={block.images.length > 1 ? `${block.caption} (${index + 1}/${block.images.length})` : block.caption}
        alt={block.caption}
        uiLang={isEnglish ? 'en' : 'fr'}
        {...dimensions}
      />
    )
  })
  return block.images.length > 1 ? <div className="nap-fig-pair">{figures}</div> : figures[0]
}

function Block({ block, assetBase, isEnglish }: { block: ContentBlock; assetBase: string; isEnglish: boolean }) {
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
      return <FigureBlock block={block} assetBase={assetBase} isEnglish={isEnglish} />
  }
}

export default async function FondementsNeuroAnatomiquesPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; xrefBack?: string; xrefBackLabel?: string }>
}) {
  const params = await searchParams
  const lang = await getServerLang(params.lang)
  const isEnglish = lang === 'en'
  const content = isEnglish ? englishContent : frenchContent
  const assetBase = isEnglish ? '/assets/Fondements Neuro-Anatomiques/EN' : '/assets/anatomie'
  const blocks = content.blocks as ContentBlock[]
  const firstHeadingIndex = blocks.findIndex((block) => block.type === 'heading')
  const introduction = blocks.slice(0, firstHeadingIndex)
  const body = blocks.slice(firstHeadingIndex)
  const toc = blocks.filter(
    (block): block is Extract<ContentBlock, { type: 'heading' }> => block.type === 'heading' && block.level === 2,
  )
  const xrefBack = safeInternalReturn(params.xrefBack)
  const xrefBackLabel = params.xrefBackLabel || (isEnglish ? 'Back to the reference' : 'Retour à la référence')

  return (
    <main className="nap-root">
      <div className="nap-top">
        <Link href={localizedHref('/', lang)} className="nap-home">← {isEnglish ? 'Back to home' : 'Retour à l’accueil'}</Link>
        {xrefBack && <Link href={xrefBack} className="btn b-out nap-xref-back">← {xrefBackLabel}</Link>}
      </div>
      <article className="nap-article">
        <header className="nap-hero">
          <p className="nap-eyebrow">{isEnglish ? 'Occipito-podal reflexotherapy' : 'Réflexothérapie occipito-podale'}</p>
          <h1>{content.title}</h1>
          <p className="nap-standfirst">{content.subtitle}</p>
        </header>

        <section className="nap-sec nap-document">
          {introduction.map((block, index) => <Block block={block} assetBase={assetBase} isEnglish={isEnglish} key={`introduction-${block.type}-${index}`} />)}
        </section>

        <div className="nap-toc" role="navigation" aria-label={isEnglish ? 'Contents' : 'Sommaire'}>
          <p className="nap-toc-t">{isEnglish ? 'Contents' : 'Sommaire'}</p>
          <ol>{toc.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol>
        </div>

        <section className="nap-sec nap-document">
          {body.map((block, index) => <Block block={block} assetBase={assetBase} isEnglish={isEnglish} key={`${block.type}-${index}`} />)}
        </section>

        <aside className="nap-cta">
          <p className="nap-cta-eyebrow">{isEnglish ? 'Continue reading' : 'Poursuivre la lecture'}</p>
          <p className="nap-cta-body">{isEnglish ? 'Explore the chapters and mappings of the R.O.P. method.' : 'Retrouvez l’ensemble des chapitres et des cartographies de la méthode R.O.P.'}</p>
          <div className="nap-cta-row"><Link href={localizedHref('/chapitres-gratuits', lang)} className="btn btn-primary">{isEnglish ? 'Explore the chapters' : 'Découvrir les chapitres'}</Link></div>
        </aside>
      </article>
    </main>
  )
}

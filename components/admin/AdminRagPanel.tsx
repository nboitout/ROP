'use client'

import Image from 'next/image'
import { Fragment, type FormEvent, type ReactNode, useState } from 'react'
import type { BookSearchLangFilter } from '@/lib/searchIndex'

type LangOption = {
  value: BookSearchLangFilter
  label: string
}

type RagCitation = {
  citationId: number
  score: number
  kind: string
  lang: string
  chapterTitle: string
  sectionTitle: string
  title: string
  snippet: string
  href: string
  slideNumber?: number
  imageSrc?: string
  access?: string
}

type RagAnswer = {
  answer: string
  citations: RagCitation[]
  retrievalCount: number
  model: string
}

type AdminRagPanelProps = {
  initialQuestion: string
  initialLang: BookSearchLangFilter
  langOptions: LangOption[]
}

function renderInlineAnswer(text: string, citationIds: Set<number>): ReactNode[] {
  const nodes: ReactNode[] = []
  const pattern = /(\*\*[^*]+?\*\*|\[\d+\])/g
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index))
    }

    const token = match[0]
    const citation = token.match(/^\[(\d+)\]$/)

    if (citation) {
      const citationId = Number.parseInt(citation[1], 10)
      nodes.push(
        citationIds.has(citationId) ? (
          <a
            key={`cite-${match.index}-${citationId}`}
            href={`#adm-rag-citation-${citationId}`}
            className="adm-rag-inline-cite"
            aria-label={`Jump to citation ${citationId}`}
          >
            [{citationId}]
          </a>
        ) : (
          token
        )
      )
    } else {
      nodes.push(
        <strong key={`strong-${match.index}`}>
          {token.slice(2, -2)}
        </strong>
      )
    }

    cursor = match.index + token.length
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }

  return nodes
}

function renderAnswerBlock(block: string, blockIndex: number, citationIds: Set<number>) {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
  const isBulletList = lines.length > 0 && lines.every((line) => /^[-*]\s+/.test(line))

  if (isBulletList) {
    return (
      <ul key={`block-${blockIndex}`} className="adm-rag-answer-list">
        {lines.map((line, lineIndex) => (
          <li key={`block-${blockIndex}-line-${lineIndex}`}>
            {renderInlineAnswer(line.replace(/^[-*]\s+/, ''), citationIds)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <p key={`block-${blockIndex}`}>
      {lines.map((line, lineIndex) => (
        <Fragment key={`block-${blockIndex}-line-${lineIndex}`}>
          {lineIndex > 0 && <br />}
          {renderInlineAnswer(line, citationIds)}
        </Fragment>
      ))}
    </p>
  )
}

function RagAnswerText({ answer, citations }: { answer: string; citations: RagCitation[] }) {
  const citationIds = new Set(citations.map((citation) => citation.citationId))
  const blocks = answer
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="adm-rag-answer-text">
      {blocks.map((block, blockIndex) => renderAnswerBlock(block, blockIndex, citationIds))}
    </div>
  )
}

function sourceLabel(citation: RagCitation): string {
  if (citation.kind === 'slide') {
    return citation.slideNumber ? `Slide ${citation.slideNumber}` : 'Slide'
  }
  return citation.kind
}

export default function AdminRagPanel({
  initialQuestion,
  initialLang,
  langOptions,
}: AdminRagPanelProps) {
  const [question, setQuestion] = useState(initialQuestion)
  const [lang, setLang] = useState<BookSearchLangFilter>(initialLang)
  const [answer, setAnswer] = useState<RagAnswer | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedQuestion = question.trim()
    if (!trimmedQuestion) return

    setIsLoading(true)
    setError(null)
    setAnswer(null)

    try {
      const response = await fetch('/api/admin/search/rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmedQuestion, lang }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error ?? 'RAG request failed')
      }

      setAnswer(data as RagAnswer)
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'RAG request failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="adm-rag-panel" aria-labelledby="adm-rag-title">
      <div className="adm-rag-head">
        <div>
          <p className="adm-page-eyebrow">Azure RAG</p>
          <h2 id="adm-rag-title">RAG answer</h2>
          <p>Generated separately from the classic search results, with citations into the indexed chapter text.</p>
        </div>
        {answer && (
          <span className="adm-rag-model">{answer.model}</span>
        )}
      </div>

      <form className="adm-rag-form" onSubmit={handleSubmit}>
        <label className="adm-rag-question">
          <span>Question</span>
          <textarea
            name="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask a question about the book corpus..."
            rows={3}
          />
        </label>
        <label className="adm-search-select-field">
          <span>Language</span>
          <select
            name="rag-lang"
            value={lang}
            onChange={(event) => setLang(event.target.value as BookSearchLangFilter)}
          >
            {langOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="adm-rag-submit" disabled={isLoading || question.trim().length < 2}>
          {isLoading ? 'Asking...' : 'Ask RAG'}
        </button>
      </form>

      {error && (
        <div className="adm-rag-error" role="alert">
          {error}
        </div>
      )}

      {answer && (
        <div className="adm-rag-output">
          <article className="adm-rag-answer">
            <div className="adm-rag-answer-meta">
              <span>{answer.retrievalCount.toLocaleString()} retrieved source{answer.retrievalCount === 1 ? '' : 's'}</span>
            </div>
            <RagAnswerText answer={answer.answer} citations={answer.citations} />
          </article>

          {answer.citations.length > 0 && (
            <div className="adm-rag-citation-wrap">
              <h3>Citations</h3>
              <ol className="adm-rag-citations">
                {answer.citations.map((citation) => (
                  <li id={`adm-rag-citation-${citation.citationId}`} key={`${citation.citationId}:${citation.href}`}>
                    <div className="adm-rag-citation-head">
                      <span>[{citation.citationId}]</span>
                      <a href={citation.href} target="_blank" rel="noopener noreferrer">
                        {citation.title}
                      </a>
                    </div>
                    <p className="adm-search-result-kicker">
                      <span>{citation.lang.toUpperCase()}</span>
                      {citation.access && <span className={`adm-row-badge ${citation.access}`}>{citation.access}</span>}
                      <span>{sourceLabel(citation)}</span>
                      <span>{Math.round(citation.score * 100) / 100}</span>
                    </p>
                    <div className="adm-rag-citation-body">
                      {citation.kind === 'slide' && citation.imageSrc && (
                        <a
                          className="adm-rag-citation-thumb"
                          href={citation.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open slide citation ${citation.citationId}`}
                        >
                          <Image src={citation.imageSrc} alt="" width={104} height={59} sizes="104px" />
                        </a>
                      )}
                      <div>
                        <p className="adm-rag-citation-section">{citation.sectionTitle || citation.chapterTitle}</p>
                        <p className="adm-rag-citation-snippet">{citation.snippet}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

'use client'

import { FormEvent, useState } from 'react'
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
              <span>{answer.retrievalCount.toLocaleString()} retrieved passage{answer.retrievalCount === 1 ? '' : 's'}</span>
            </div>
            <p>{answer.answer}</p>
          </article>

          {answer.citations.length > 0 && (
            <div className="adm-rag-citation-wrap">
              <h3>Citations</h3>
              <ol className="adm-rag-citations">
                {answer.citations.map((citation) => (
                  <li key={`${citation.citationId}:${citation.href}`}>
                    <div className="adm-rag-citation-head">
                      <span>[{citation.citationId}]</span>
                      <a href={citation.href} target="_blank" rel="noopener noreferrer">
                        {citation.title}
                      </a>
                    </div>
                    <p className="adm-search-result-kicker">
                      <span>{citation.lang.toUpperCase()}</span>
                      {citation.access && <span className={`adm-row-badge ${citation.access}`}>{citation.access}</span>}
                      <span>{citation.kind}</span>
                      <span>{Math.round(citation.score * 100) / 100}</span>
                    </p>
                    <p className="adm-rag-citation-section">{citation.sectionTitle || citation.chapterTitle}</p>
                    <p className="adm-rag-citation-snippet">{citation.snippet}</p>
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

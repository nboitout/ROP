'use client'

import Image from 'next/image'
import {
  Fragment,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { BookSearchLangFilter } from '@/lib/searchIndex'

type LangOption = {
  value: BookSearchLangFilter
  label: string
}

type GuyChatCitation = {
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

type GuyChatApiAnswer = {
  answer: string
  citations: GuyChatCitation[]
  retrievalCount: number
  model: string
}

type ChatRole = 'user' | 'assistant'

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  citations?: GuyChatCitation[]
  retrievalCount?: number
  model?: string
}

type AdminGuyChatProps = {
  initialLang: BookSearchLangFilter
  langOptions: LangOption[]
}

const MAX_API_MESSAGES = 14

function createId(prefix: string): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function renderInlineAnswer(text: string, citationIds: Set<number>, citationAnchorPrefix: string): ReactNode[] {
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
            href={`#${citationAnchorPrefix}-${citationId}`}
            className="adm-rag-inline-cite"
            aria-label={`Jump to citation ${citationId}`}
          >
            [{citationId}]
          </a>
        ) : (
          token
        ),
      )
    } else {
      nodes.push(
        <strong key={`strong-${match.index}`}>
          {token.slice(2, -2)}
        </strong>,
      )
    }

    cursor = match.index + token.length
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }

  return nodes
}

function renderAnswerBlock(
  block: string,
  blockIndex: number,
  citationIds: Set<number>,
  citationAnchorPrefix: string,
) {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
  const heading = lines.length === 1 ? lines[0].match(/^(#{2,4})\s+(.+)$/) : null
  const isBulletList = lines.length > 0 && lines.every((line) => /^[-*]\s+/.test(line))

  if (heading) {
    return (
      <h3 key={`block-${blockIndex}`} className="adm-guy-chat-answer-heading">
        {renderInlineAnswer(heading[2], citationIds, citationAnchorPrefix)}
      </h3>
    )
  }

  if (isBulletList) {
    return (
      <ul key={`block-${blockIndex}`} className="adm-rag-answer-list">
        {lines.map((line, lineIndex) => (
          <li key={`block-${blockIndex}-line-${lineIndex}`}>
            {renderInlineAnswer(line.replace(/^[-*]\s+/, ''), citationIds, citationAnchorPrefix)}
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
          {renderInlineAnswer(line, citationIds, citationAnchorPrefix)}
        </Fragment>
      ))}
    </p>
  )
}

function ChatAnswerText({
  answer,
  messageId,
  citations = [],
}: {
  answer: string
  messageId: string
  citations?: GuyChatCitation[]
}) {
  const citationIds = new Set(citations.map((citation) => citation.citationId))
  const citationAnchorPrefix = `adm-guy-citation-${messageId}`
  const blocks = answer
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="adm-rag-answer-text">
      {blocks.map((block, blockIndex) => renderAnswerBlock(block, blockIndex, citationIds, citationAnchorPrefix))}
    </div>
  )
}

function sourceLabel(citation: GuyChatCitation): string {
  if (citation.kind === 'slide') {
    return citation.slideNumber ? `Slide ${citation.slideNumber}` : 'Slide'
  }
  return citation.kind === 'text' ? 'Book passage' : citation.kind
}

function CitationCard({
  citation,
  messageId,
}: {
  citation: GuyChatCitation
  messageId: string
}) {
  const domId = `adm-guy-citation-${messageId}-${citation.citationId}`

  return (
    <li id={domId} className={`adm-guy-chat-source-card ${citation.kind === 'slide' ? 'slide' : 'text'}`}>
      <div className="adm-guy-source-meta">
        <span className="adm-guy-source-number">[{citation.citationId}]</span>
        <span>{citation.lang.toUpperCase()}</span>
        {citation.access && <span className={`adm-row-badge ${citation.access}`}>{citation.access}</span>}
        <span>{sourceLabel(citation)}</span>
      </div>

      {citation.kind === 'slide' && citation.imageSrc && (
        <a
          className="adm-guy-source-thumb"
          href={citation.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open slide citation ${citation.citationId}`}
        >
          <Image src={citation.imageSrc} alt="" width={320} height={180} sizes="(max-width: 900px) 100vw, 320px" />
        </a>
      )}

      <a className="adm-guy-source-title" href={citation.href} target="_blank" rel="noopener noreferrer">
        {citation.title}
      </a>
      <p className="adm-guy-source-section">{citation.sectionTitle || citation.chapterTitle}</p>
      <p className="adm-guy-source-snippet">{citation.snippet}</p>
      <a className="adm-guy-source-open" href={citation.href} target="_blank" rel="noopener noreferrer">
        Open source
      </a>
    </li>
  )
}

function CitationPanel({
  messages,
  activeMessageId,
  onActiveMessageChange,
}: {
  messages: ChatMessage[]
  activeMessageId: string | null
  onActiveMessageChange: (messageId: string) => void
}) {
  const citedMessages = messages.filter(
    (message) => message.role === 'assistant' && message.citations && message.citations.length > 0,
  )
  const activeMessage = citedMessages.find((message) => message.id === activeMessageId) ?? citedMessages.at(-1)
  const activeMessageIndex = activeMessage ? citedMessages.findIndex((message) => message.id === activeMessage.id) : -1

  return (
    <aside className="adm-guy-chat-evidence" aria-label="RAG citations">
      <div className="adm-guy-chat-evidence-head">
        <p className="adm-page-eyebrow">RAG citations</p>
        <h2>Sources</h2>
        <p>Book and slide passages retrieved for the selected answer.</p>
      </div>

      {citedMessages.length === 0 ? (
        <div className="adm-guy-chat-evidence-empty">
          <span>No citations yet</span>
          <p>Ask a question to populate the evidence panel.</p>
        </div>
      ) : (
        <>
          <div className="adm-guy-answer-switcher" role="tablist" aria-label="Answers with citations">
            {citedMessages.map((message, messageIndex) => (
              <button
                key={message.id}
                type="button"
                className={message.id === activeMessage?.id ? 'active' : ''}
                onClick={() => onActiveMessageChange(message.id)}
                aria-selected={message.id === activeMessage?.id}
                role="tab"
              >
                <span>Answer {messageIndex + 1}</span>
                <em>{message.citations?.length ?? 0}</em>
              </button>
            ))}
          </div>

          {activeMessage && (
            <section className="adm-guy-chat-evidence-group">
              <div className="adm-guy-chat-evidence-group-head">
                <strong>Answer {activeMessageIndex + 1}</strong>
                <span>{activeMessage.citations?.length ?? 0} source{activeMessage.citations?.length === 1 ? '' : 's'}</span>
              </div>
              <ol className="adm-rag-citations adm-guy-chat-citations">
                {activeMessage.citations?.map((citation) => (
                  <CitationCard
                    key={`${activeMessage.id}:${citation.citationId}:${citation.href}`}
                    citation={citation}
                    messageId={activeMessage.id}
                  />
                ))}
              </ol>
            </section>
          )}
        </>
      )}
    </aside>
  )
}

export default function AdminGuyChat({
  initialLang,
  langOptions,
}: AdminGuyChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const [lang, setLang] = useState<BookSearchLangFilter>(initialLang)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeCitationMessageId, setActiveCitationMessageId] = useState<string | null>(null)
  const threadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    threadRef.current?.scrollTo({
      top: threadRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isLoading])

  async function submitQuestion() {
    const trimmedDraft = draft.trim()
    if (!trimmedDraft || isLoading) return

    const userMessage: ChatMessage = {
      id: createId('user'),
      role: 'user',
      content: trimmedDraft,
    }
    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setDraft('')
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/admin/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang,
          messages: nextMessages
            .slice(-MAX_API_MESSAGES)
            .map(({ role, content }) => ({ role, content })),
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error ?? 'Chat request failed')
      }

      const answer = data as GuyChatApiAnswer
      const assistantMessageId = createId('assistant')
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: assistantMessageId,
          role: 'assistant',
          content: answer.answer,
          citations: answer.citations,
          retrievalCount: answer.retrievalCount,
          model: answer.model,
        },
      ])
      setActiveCitationMessageId(assistantMessageId)
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Chat request failed')
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void submitQuestion()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      event.preventDefault()
      void submitQuestion()
    }
  }

  return (
    <section className="adm-guy-chat-shell" aria-labelledby="adm-guy-chat-title">
      <div className="adm-guy-chat-main">
        <CitationPanel
          messages={messages}
          activeMessageId={activeCitationMessageId}
          onActiveMessageChange={setActiveCitationMessageId}
        />

        <div className="adm-guy-chat-conversation">
          <div className="adm-guy-chat-thread" ref={threadRef}>
            {messages.length === 0 && (
              <div className="adm-guy-chat-empty">
                <p className="adm-page-eyebrow">Guy chatbot</p>
                <h2 id="adm-guy-chat-title">Ask about the R.O.P. book</h2>
                <p>Anatomy and physiology can be answered as background; R.O.P. reasoning is grounded in the indexed book and slides.</p>
              </div>
            )}

            {messages.map((message) => (
              <article key={message.id} className={`adm-guy-chat-message ${message.role}`}>
                <div className="adm-guy-chat-message-head">
                  <span>{message.role === 'user' ? 'You' : 'Guy bot'}</span>
                  {message.role === 'assistant' && message.retrievalCount !== undefined && (
                    <em>{message.retrievalCount} source{message.retrievalCount === 1 ? '' : 's'}</em>
                  )}
                </div>
                <ChatAnswerText answer={message.content} messageId={message.id} citations={message.citations} />
                {message.role === 'assistant' && message.model && (
                  <p className="adm-guy-chat-model">{message.model}</p>
                )}
              </article>
            ))}

            {isLoading && (
              <div className="adm-guy-chat-loading" aria-live="polite">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          {error && (
            <div className="adm-rag-error adm-guy-chat-error" role="alert">
              {error}
            </div>
          )}

          <form className="adm-guy-chat-composer" onSubmit={handleSubmit}>
            <label className="adm-rag-question">
              <span>Message</span>
              <textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Question for Guy..."
                rows={4}
              />
            </label>
            <div className="adm-guy-chat-controls">
              <label className="adm-search-select-field">
                <span>Language</span>
                <select
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
              <button type="submit" className="adm-rag-submit" disabled={isLoading || draft.trim().length === 0}>
                {isLoading ? 'Asking...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

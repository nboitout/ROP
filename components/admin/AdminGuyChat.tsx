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
  pairId?: string
  cartographyImageSrc?: string
  photoImageSrc?: string
  access?: string
}

type GuyChatApiAnswer = {
  answer: string
  citations: GuyChatCitation[]
  retrievalCount: number
  model: string
}

type ChatRole = 'user' | 'assistant'
type CitationTab = 'sources' | 'visuals'

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

function renderInlineAnswer(
  text: string,
  citationIds: Set<number>,
  citationAnchorPrefix: string,
  onCitationActivate?: (citationId: number) => void,
): ReactNode[] {
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
            onClick={(event) => {
              if (!onCitationActivate) return
              event.preventDefault()
              onCitationActivate(citationId)
            }}
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
  onCitationActivate?: (citationId: number) => void,
) {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
  const heading = lines.length === 1 ? lines[0].match(/^(#{2,4})\s+(.+)$/) : null
  const isBulletList = lines.length > 0 && lines.every((line) => /^[-*]\s+/.test(line))

  if (heading) {
    return (
      <h3 key={`block-${blockIndex}`} className="adm-guy-chat-answer-heading">
        {renderInlineAnswer(heading[2], citationIds, citationAnchorPrefix, onCitationActivate)}
      </h3>
    )
  }

  if (isBulletList) {
    return (
      <ul key={`block-${blockIndex}`} className="adm-rag-answer-list">
        {lines.map((line, lineIndex) => (
          <li key={`block-${blockIndex}-line-${lineIndex}`}>
            {renderInlineAnswer(line.replace(/^[-*]\s+/, ''), citationIds, citationAnchorPrefix, onCitationActivate)}
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
          {renderInlineAnswer(line, citationIds, citationAnchorPrefix, onCitationActivate)}
        </Fragment>
      ))}
    </p>
  )
}

function ChatAnswerText({
  answer,
  messageId,
  citations = [],
  onCitationActivate,
}: {
  answer: string
  messageId: string
  citations?: GuyChatCitation[]
  onCitationActivate?: (citationId: number) => void
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
      {blocks.map((block, blockIndex) => (
        renderAnswerBlock(block, blockIndex, citationIds, citationAnchorPrefix, onCitationActivate)
      ))}
    </div>
  )
}

function sourceLabel(citation: GuyChatCitation): string {
  if (citation.kind === 'slide') {
    return citation.slideNumber ? `Diapositive ${citation.slideNumber}` : 'Diapositive'
  }
  return citation.kind === 'text' ? 'Passage du livre' : citation.kind
}

function CitationCard({
  citation,
  messageId,
}: {
  citation: GuyChatCitation
  messageId: string
}) {
  const domId = `adm-guy-citation-${messageId}-${citation.citationId}`
  const thumbnailSrc = citation.kind === 'slide' ? citation.imageSrc : undefined
  const hasThumbnail = !!thumbnailSrc

  return (
    <li id={domId} className={`adm-guy-chat-source-card ${hasThumbnail ? 'slide' : 'text'}`}>
      {hasThumbnail && (
        <a
          className="adm-guy-source-thumb"
          href={citation.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open slide citation ${citation.citationId}`}
        >
          <Image src={thumbnailSrc} alt="" width={320} height={180} sizes="84px" />
        </a>
      )}

      <div className="adm-guy-source-body">
        <div className="adm-guy-source-top">
          <div className="adm-guy-source-meta">
            <span className="adm-guy-source-number">[{citation.citationId}]</span>
            <span>{citation.lang.toUpperCase()}</span>
            {citation.access && <span className={`adm-row-badge ${citation.access}`}>{citation.access}</span>}
            <span>{sourceLabel(citation)}</span>
          </div>
          <a className="adm-guy-source-open" href={citation.href} target="_blank" rel="noopener noreferrer">
            Ouvrir
          </a>
        </div>
        <a className="adm-guy-source-title" href={citation.href} target="_blank" rel="noopener noreferrer">
          {citation.title}
        </a>
        <p className="adm-guy-source-section">{citation.sectionTitle || citation.chapterTitle}</p>
        <p className="adm-guy-source-snippet">{citation.snippet}</p>
      </div>
    </li>
  )
}

function VisualPairCard({
  citation,
  messageId,
}: {
  citation: GuyChatCitation
  messageId: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const domId = `adm-guy-citation-${messageId}-${citation.citationId}`
  const hasPhoto = !!citation.photoImageSrc

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <li id={domId} className="adm-guy-visual-card">
      <div className="adm-guy-source-top">
        <div className="adm-guy-source-meta">
          <span className="adm-guy-source-number">[{citation.citationId}]</span>
          <span>{citation.lang.toUpperCase()}</span>
          {citation.access && <span className={`adm-row-badge ${citation.access}`}>{citation.access}</span>}
          <span>{hasPhoto ? 'Cartographie + photo' : 'Cartographie'}</span>
        </div>
        <a className="adm-guy-source-open" href={citation.href} target="_blank" rel="noopener noreferrer">
          Ouvrir
        </a>
      </div>

      <button type="button" className="adm-guy-visual-title" onClick={() => setIsOpen(true)}>
        {citation.title}
      </button>
      <p className="adm-guy-source-section">{citation.sectionTitle || citation.chapterTitle}</p>

      <div className={`adm-guy-visual-media${hasPhoto ? '' : ' single'}`}>
        {citation.cartographyImageSrc && (
          <button type="button" className="adm-guy-visual-thumb" onClick={() => setIsOpen(true)}>
            <span>Cartographie</span>
            <Image src={citation.cartographyImageSrc} alt="" width={640} height={480} sizes="190px" unoptimized />
          </button>
        )}
        {citation.photoImageSrc && (
          <button type="button" className="adm-guy-visual-thumb" onClick={() => setIsOpen(true)}>
            <span>Photo du geste</span>
            <Image src={citation.photoImageSrc} alt="" width={640} height={480} sizes="190px" unoptimized />
          </button>
        )}
      </div>

      <p className="adm-guy-source-snippet">{citation.snippet}</p>

      {isOpen && (
        <div className="adm-guy-visual-modal" role="dialog" aria-modal="true" aria-label={citation.title}>
          <button
            type="button"
            className="adm-guy-visual-modal-backdrop"
            aria-label="Fermer"
            onClick={() => setIsOpen(false)}
          />
          <div className="adm-guy-visual-modal-content">
            <div className="adm-guy-visual-modal-head">
              <div>
                <span>Cartographie et geste</span>
                <strong>{citation.title}</strong>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Fermer" title="Fermer">
                ×
              </button>
            </div>
            <div className={`adm-guy-visual-modal-grid${hasPhoto ? '' : ' single'}`}>
              {citation.cartographyImageSrc && (
                <figure>
                  <Image src={citation.cartographyImageSrc} alt="Cartographie" width={1200} height={900} sizes="45vw" unoptimized />
                  <figcaption>Cartographie</figcaption>
                </figure>
              )}
              {citation.photoImageSrc && (
                <figure>
                  <Image src={citation.photoImageSrc} alt="Photo du geste" width={1200} height={900} sizes="45vw" unoptimized />
                  <figcaption>Photo du geste</figcaption>
                </figure>
              )}
            </div>
            <a href={citation.href} target="_blank" rel="noopener noreferrer">
              Ouvrir dans le chapitre
            </a>
          </div>
        </div>
      )}
    </li>
  )
}

function CitationPanel({
  messages,
  activeMessageId,
  onActiveMessageChange,
  activeTab,
  onActiveTabChange,
}: {
  messages: ChatMessage[]
  activeMessageId: string | null
  onActiveMessageChange: (messageId: string) => void
  activeTab: CitationTab
  onActiveTabChange: (tab: CitationTab) => void
}) {
  const citedMessages = messages.filter(
    (message) => message.role === 'assistant' && message.citations && message.citations.length > 0,
  )
  const activeMessage = citedMessages.find((message) => message.id === activeMessageId) ?? citedMessages.at(-1)
  const activeMessageIndex = activeMessage ? citedMessages.findIndex((message) => message.id === activeMessage.id) : -1
  const citations = activeMessage?.citations ?? []
  const visualCitations = citations.filter((citation) => citation.kind === 'reflex_pair')
  const sourceCitations = citations.filter((citation) => citation.kind !== 'reflex_pair')
  const selectedTab = activeTab === 'visuals' && visualCitations.length === 0
    ? 'sources'
    : activeTab === 'sources' && sourceCitations.length === 0 && visualCitations.length > 0
      ? 'visuals'
      : activeTab

  function selectAnswer(index: number) {
    const message = citedMessages[index]
    if (!message) return
    onActiveMessageChange(message.id)

    const nextCitations = message.citations ?? []
    const nextHasVisuals = nextCitations.some((citation) => citation.kind === 'reflex_pair')
    const nextHasSources = nextCitations.some((citation) => citation.kind !== 'reflex_pair')
    if (activeTab === 'visuals' && !nextHasVisuals && nextHasSources) onActiveTabChange('sources')
    if (activeTab === 'sources' && !nextHasSources && nextHasVisuals) onActiveTabChange('visuals')
  }

  return (
    <aside className="adm-guy-chat-evidence" aria-label="RAG citations">
      <div className="adm-guy-chat-evidence-head">
        <p className="adm-page-eyebrow">Références RAG</p>
        <h2>Sources de la réponse</h2>
        <p>Passages, diapositives et repères visuels utilisés par l&apos;assistant.</p>
      </div>

      {citedMessages.length === 0 ? (
        <div className="adm-guy-chat-evidence-empty">
          <span>Aucune source</span>
          <p>Posez une question pour afficher les références de la réponse.</p>
        </div>
      ) : (
        <>
          {citedMessages.length > 1 && activeMessage && (
            <div className="adm-guy-answer-stepper" aria-label="Réponse affichée">
              <button
                type="button"
                onClick={() => selectAnswer(activeMessageIndex - 1)}
                disabled={activeMessageIndex <= 0}
                aria-label="Réponse précédente"
                title="Réponse précédente"
              >
                ‹
              </button>
              <div>
                <strong>Réponse {activeMessageIndex + 1} sur {citedMessages.length}</strong>
                <span>{citations.length} source{citations.length === 1 ? '' : 's'}</span>
              </div>
              <button
                type="button"
                onClick={() => selectAnswer(activeMessageIndex + 1)}
                disabled={activeMessageIndex >= citedMessages.length - 1}
                aria-label="Réponse suivante"
                title="Réponse suivante"
              >
                ›
              </button>
            </div>
          )}

          {activeMessage && (
            <div className="adm-guy-chat-evidence-group">
              <div className="adm-guy-source-tabs" role="tablist" aria-label="Types de sources">
                <button
                  type="button"
                  className={selectedTab === 'sources' ? 'active' : ''}
                  onClick={() => onActiveTabChange('sources')}
                  role="tab"
                  aria-selected={selectedTab === 'sources'}
                  disabled={sourceCitations.length === 0}
                >
                  <span>Livre &amp; diapositives</span>
                  <em>{sourceCitations.length}</em>
                </button>
                <button
                  type="button"
                  className={selectedTab === 'visuals' ? 'active' : ''}
                  onClick={() => onActiveTabChange('visuals')}
                  role="tab"
                  aria-selected={selectedTab === 'visuals'}
                  disabled={visualCitations.length === 0}
                >
                  <span>Cartographies &amp; photos</span>
                  <em>{visualCitations.length}</em>
                </button>
              </div>

              {selectedTab === 'sources' ? (
                <ol className="adm-guy-chat-citations">
                  {sourceCitations.map((citation) => (
                    <CitationCard
                      key={`${activeMessage.id}:${citation.citationId}:${citation.href}`}
                      citation={citation}
                      messageId={activeMessage.id}
                    />
                  ))}
                </ol>
              ) : (
                <ol className="adm-guy-visual-citations">
                  {visualCitations.map((citation) => (
                    <VisualPairCard
                      key={`${activeMessage.id}:${citation.citationId}:${citation.pairId ?? citation.href}`}
                      citation={citation}
                      messageId={activeMessage.id}
                    />
                  ))}
                </ol>
              )}
            </div>
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
  const [activeCitationTab, setActiveCitationTab] = useState<CitationTab>('sources')
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
      setActiveCitationTab(answer.citations.some((citation) => citation.kind !== 'reflex_pair') ? 'sources' : 'visuals')
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Chat request failed')
    } finally {
      setIsLoading(false)
    }
  }

  function activateCitation(messageId: string, citationId: number) {
    const message = messages.find((candidate) => candidate.id === messageId)
    const citation = message?.citations?.find((candidate) => candidate.citationId === citationId)
    if (!citation) return

    setActiveCitationMessageId(messageId)
    setActiveCitationTab(citation.kind === 'reflex_pair' ? 'visuals' : 'sources')
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const citationElementId = `adm-guy-citation-${messageId}-${citationId}`
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${citationElementId}`)
        document.getElementById(citationElementId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      })
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void submitQuestion()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    const nativeEvent = event.nativeEvent as globalThis.KeyboardEvent

    if (nativeEvent.isComposing) {
      return
    }

    if (event.key === 'Enter' && !event.shiftKey) {
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
          activeTab={activeCitationTab}
          onActiveTabChange={setActiveCitationTab}
        />

        <div className="adm-guy-chat-conversation">
          <div className="adm-guy-chat-thread" ref={threadRef}>
            {messages.length === 0 && (
              <div className="adm-guy-chat-empty">
                <p className="adm-page-eyebrow">Assistant de Guy</p>
                <h2 id="adm-guy-chat-title">Bonjour !</h2>
                <p>
                  Je peux vous aider à explorer le contenu du livre de R.O.P. : anatomie, physiologie,
                  relations viscéro-somatiques ou chapitres spécifiques, comme l&apos;estomac, le duodénum,
                  la rate ou la vessie. Que souhaitez-vous aborder ?
                </p>
              </div>
            )}

            {messages.map((message) => (
              <article key={message.id} className={`adm-guy-chat-message ${message.role}`}>
                <div className="adm-guy-chat-message-head">
                  <span>{message.role === 'user' ? 'Vous' : 'Assistant de Guy'}</span>
                  {message.role === 'assistant' && message.retrievalCount !== undefined && (
                    <em>{message.retrievalCount} source{message.retrievalCount === 1 ? '' : 's'}</em>
                  )}
                </div>
                <ChatAnswerText
                  answer={message.content}
                  messageId={message.id}
                  citations={message.citations}
                  onCitationActivate={(citationId) => activateCitation(message.id, citationId)}
                />
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
                placeholder="Votre question..."
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
                {isLoading ? 'Recherche...' : 'Envoyer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

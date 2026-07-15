import {
  searchAzureBook,
  getAzureRagConfig,
  type AzureRagCitation,
  type AzureSearchLangFilter,
} from '@/lib/azureRag'

const AZURE_OPENAI_RESPONSES_API_PATH = '/openai/v1/responses'
const DEFAULT_CHAT_TOP = 10
const MAX_VISUAL_PAIRS = 3
const MAX_CONTEXT_CHARS = 1150
const MAX_HISTORY_MESSAGES = 8

export type GuyChatRole = 'user' | 'assistant'

export type GuyChatMessageInput = {
  role: GuyChatRole
  content: string
}

export type GuyChatAnswer = {
  answer: string
  citations: AzureRagCitation[]
  retrievalCount: number
  model: string
}

type AzureOpenAiResponsesResult = {
  output_text?: string
  output?: Array<{
    type?: string
    content?: Array<{
      type?: string
      text?: string
    }>
  }>
  error?: {
    message?: string
  }
}

function compactText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function truncateText(value: string, maxLength: number): string {
  const compact = compactText(value)
  if (compact.length <= maxLength) return compact
  return `${compact.slice(0, Math.max(0, maxLength - 3)).trim()}...`
}

function latestUserMessage(messages: GuyChatMessageInput[]): string {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index]
    if (message.role === 'user') return message.content
  }

  throw new Error('At least one user message is required')
}

function buildRetrievalQuery(messages: GuyChatMessageInput[]): string {
  return messages
    .slice(-MAX_HISTORY_MESSAGES)
    .map((message) => {
      const role = message.role === 'user' ? 'User' : 'Assistant'
      return `${role}: ${truncateText(message.content, message.role === 'user' ? 650 : 360)}`
    })
    .join('\n')
}

function buildConversation(messages: GuyChatMessageInput[]): string {
  return messages
    .slice(-MAX_HISTORY_MESSAGES)
    .map((message) => {
      const role = message.role === 'user' ? 'User' : 'Assistant'
      return `${role}: ${truncateText(message.content, message.role === 'user' ? 900 : 520)}`
    })
    .join('\n\n')
}

function mergeUniqueSources<T extends { id: string }>(...sourceGroups: T[][]): T[] {
  const seen = new Set<string>()
  return sourceGroups.flatMap((sources) => sources.filter((source) => {
    if (seen.has(source.id)) return false
    seen.add(source.id)
    return true
  }))
}

function buildChatContext(citations: AzureRagCitation[]): string {
  if (citations.length === 0) return 'No book or slide source was retrieved.'

  return citations.map((citation) => {
    const lines = [
      `[${citation.citationId}] ${citation.title}`,
      `Source type: ${citation.kind}`,
      `Chapter: ${citation.chapterTitle}`,
      `Section: ${citation.sectionTitle}`,
      citation.kind === 'slide' && citation.slideNumber ? `Slide: ${citation.slideNumber}` : '',
      citation.kind === 'reflex_pair' ? 'Visual evidence: paired reflex cartography and treatment photo' : '',
      `Language: ${citation.lang}`,
      `URL: ${citation.href}`,
      citation.kind === 'slide' && citation.imageSrc ? `Image: ${citation.imageSrc}` : '',
      citation.cartographyImageSrc ? `Cartography: ${citation.cartographyImageSrc}` : '',
      citation.photoImageSrc ? `Treatment photo: ${citation.photoImageSrc}` : '',
      `Content: ${truncateText(citation.content, MAX_CONTEXT_CHARS)}`,
    ].filter(Boolean)

    return lines.join('\n')
  }).join('\n\n')
}

function buildChatInput(messages: GuyChatMessageInput[], citations: AzureRagCitation[]): string {
  return [
    'Conversation:',
    buildConversation(messages),
    '',
    `Latest user message: ${latestUserMessage(messages)}`,
    '',
    'Retrieved R.O.P. book and slide context:',
    buildChatContext(citations),
  ].join('\n')
}

function extractResponseText(response: AzureOpenAiResponsesResult): string {
  if (response.output_text) return response.output_text.trim()

  const text = response.output
    ?.flatMap((item) => item.content ?? [])
    .map((content) => content.text ?? '')
    .join('')
    .trim()

  return text || ''
}

async function requestChatCompletion(input: string, deployment: string): Promise<string> {
  const config = getAzureRagConfig({ requireChatDeployment: true })
  const url = `${config.openAiEndpoint}${AZURE_OPENAI_RESPONSES_API_PATH}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': config.openAiApiKey,
    },
    body: JSON.stringify({
      model: deployment,
      instructions: [
        'You are the Guy Boitout R.O.P. book chatbot.',
        'You discuss only topics connected to the indexed R.O.P. book corpus.',
        'Use dual knowledge modes: for well-established anatomy and physiology facts, you may use concise internal biomedical knowledge as background.',
        'For R.O.P. analysis, therapeutic reasoning, treatment suggestions, practice advice, or interpretation of symptoms, use only the retrieved book and slide context.',
        'Every R.O.P. analysis, therapy, treatment, or advice claim must cite retrieved sources with bracketed citation numbers like [1] or [2].',
        'If the retrieved context is insufficient for a R.O.P. answer, say that the retrieved corpus does not provide enough support and cite the closest relevant sources if any.',
        'If the user describes urgent or red-flag symptoms, redirect them to qualified medical care before discussing any book context.',
        'Do not answer unrelated questions outside the book topics.',
        'Keep answers conversational, structured, and concise.',
      ].join(' '),
      input,
      max_output_tokens: 1000,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Azure OpenAI Responses request failed with ${response.status}: ${body.slice(0, 1200)}`)
  }

  const data = await response.json() as AzureOpenAiResponsesResult
  const answer = extractResponseText(data)
  if (!answer) {
    throw new Error(data.error?.message ?? 'Azure OpenAI response did not include answer text')
  }

  return answer
}

export async function answerGuyChat({
  messages,
  lang = 'fr',
  top = DEFAULT_CHAT_TOP,
}: {
  messages: GuyChatMessageInput[]
  lang?: AzureSearchLangFilter
  top?: number
}): Promise<GuyChatAnswer> {
  if (messages.length === 0) {
    throw new Error('At least one message is required')
  }

  const config = getAzureRagConfig({ requireSearchQueryKey: true, requireChatDeployment: true })
  const latestQuery = latestUserMessage(messages)
  const retrievalQuery = buildRetrievalQuery(messages)
  const candidateTop = Math.max(top * 3, 30)

  // Preserve the newest topic even when earlier assistant answers make the contextual query much longer.
  const [latestSources, contextualSources] = await Promise.all([
    searchAzureBook({ query: latestQuery, lang, top: candidateTop }),
    messages.length > 1
      ? searchAzureBook({ query: retrievalQuery, lang, top: candidateTop })
      : Promise.resolve([]),
  ])
  const candidateSources = mergeUniqueSources(latestSources, contextualSources)
  const visualSources = candidateSources
    .filter((source) => source.kind === 'reflex_pair')
    .slice(0, Math.min(MAX_VISUAL_PAIRS, top))
  const standardSources = candidateSources
    .filter((source) => source.kind !== 'reflex_pair')
    .slice(0, Math.max(0, top - visualSources.length))
  const sources = [...standardSources, ...visualSources]
  const citations = sources.map((source, index) => ({
    ...source,
    citationId: index + 1,
  }))

  const answer = await requestChatCompletion(
    buildChatInput(messages, citations),
    config.openAiChatDeployment ?? '',
  )

  return {
    answer,
    citations,
    retrievalCount: citations.length,
    model: config.openAiChatDeployment ?? '',
  }
}

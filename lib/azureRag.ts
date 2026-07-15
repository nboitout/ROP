import { resolveReflexMediaPair } from '@/lib/reflexMediaPairs'

export const AZURE_SEARCH_API_VERSION = '2026-04-01'
export const AZURE_OPENAI_EMBEDDINGS_API_VERSION = '2023-05-15'

const AZURE_OPENAI_RESPONSES_API_PATH = '/openai/v1/responses'
const DEFAULT_RAG_TOP = 8
const DEFAULT_SEARCH_TOP = 12
const SEARCH_SELECT_FIELDS = [
  'id',
  'kind',
  'lang',
  'chapterKey',
  'chapterNumber',
  'chapterTitle',
  'sectionId',
  'sectionTitle',
  'blockIndex',
  'blockType',
  'slideNumber',
  'title',
  'content',
  'href',
  'imageSrc',
  'sourcePath',
  'access',
].join(',')

export type AzureRagConfig = {
  searchEndpoint: string
  searchAdminKey?: string
  searchQueryKey?: string
  searchIndex: string
  openAiEndpoint: string
  openAiApiKey: string
  openAiEmbeddingDeployment: string
  openAiChatDeployment?: string
}

export type AzureSearchAction = 'upload' | 'merge' | 'mergeOrUpload' | 'delete'
export type AzureSearchLangFilter = 'all' | 'fr' | 'en' | 'de' | 'es' | 'it' | 'th'

export type AzureSearchUploadDocument = {
  '@search.action': AzureSearchAction
  id: string
  [key: string]: unknown
}

export type AzureBookSearchResult = {
  id: string
  score: number
  kind: string
  lang: string
  chapterKey: string
  chapterNumber?: number
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  blockIndex?: number
  blockType?: string
  slideNumber?: number
  title: string
  content: string
  snippet: string
  href: string
  imageSrc?: string
  pairId?: string
  cartographyImageSrc?: string
  photoImageSrc?: string
  sourcePath?: string
  access?: string
}

export type AzureRagCitation = AzureBookSearchResult & {
  citationId: number
}

export type AzureRagAnswer = {
  answer: string
  citations: AzureRagCitation[]
  retrievalCount: number
  model: string
}

type ConfigOptions = {
  requireSearchAdminKey?: boolean
  requireSearchQueryKey?: boolean
  requireChatDeployment?: boolean
}

type AzureEmbeddingResponse = {
  data?: Array<{
    index: number
    embedding: number[]
  }>
  error?: {
    message?: string
  }
}

type AzureSearchIndexResponse = {
  value?: Array<{
    key: string
    status: boolean
    errorMessage?: string
  }>
  error?: {
    message?: string
  }
}

type AzureSearchResponse = {
  value?: AzureSearchHit[]
  error?: {
    message?: string
  }
}

type AzureSearchHit = {
  '@search.score'?: number
  id?: string
  kind?: string
  lang?: string
  chapterKey?: string
  chapterNumber?: number
  chapterTitle?: string
  sectionId?: string
  sectionTitle?: string
  blockIndex?: number
  blockType?: string
  slideNumber?: number
  title?: string
  content?: string
  href?: string
  imageSrc?: string
  sourcePath?: string
  access?: string
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

class NonRetryableFetchError extends Error {}

function requireEnv(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function optionalEnv(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value || undefined
}

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '')
}

function apiVersion(defaultVersion: string, envName: string): string {
  return optionalEnv(envName) ?? defaultVersion
}

function retryDelayMs(attempt: number, retryAfter: string | null): number {
  if (retryAfter) {
    const seconds = Number.parseFloat(retryAfter)
    if (Number.isFinite(seconds) && seconds > 0) return Math.ceil(seconds * 1000)
  }

  return Math.min(30_000, 750 * 2 ** attempt)
}

function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 409 || status === 429 || status >= 500
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function readResponseText(response: Response): Promise<string> {
  const text = await response.text()
  return text.length > 1200 ? `${text.slice(0, 1200)}...` : text
}

async function fetchJsonWithRetry<T>(
  url: string,
  init: RequestInit,
  context: string,
  maxRetries = 5,
): Promise<T> {
  let lastError: Error | null = null

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      const response = await fetch(url, init)
      if (response.ok) return (await response.json()) as T

      const body = await readResponseText(response)
      const errorMessage = `${context} failed with ${response.status}: ${body}`

      if (!isRetryableStatus(response.status) || attempt === maxRetries) {
        throw new NonRetryableFetchError(errorMessage)
      }

      lastError = new Error(errorMessage)
      await sleep(retryDelayMs(attempt, response.headers.get('retry-after')))
    } catch (error) {
      const fetchError = error instanceof Error ? error : new Error(String(error))
      if (fetchError instanceof NonRetryableFetchError) throw fetchError
      if (attempt === maxRetries) throw fetchError
      lastError = fetchError
      await sleep(retryDelayMs(attempt, null))
    }
  }

  throw lastError ?? new Error(`${context} failed`)
}

export function getAzureRagConfig(options: ConfigOptions = {}): AzureRagConfig {
  const searchAdminKey = optionalEnv('AZURE_SEARCH_ADMIN_KEY')
  const searchQueryKey = optionalEnv('AZURE_SEARCH_QUERY_KEY')
  const openAiChatDeployment = optionalEnv('AZURE_OPENAI_CHAT_DEPLOYMENT')

  if (options.requireSearchAdminKey && !searchAdminKey) {
    throw new Error('Missing required environment variable: AZURE_SEARCH_ADMIN_KEY')
  }
  if (options.requireSearchQueryKey && !searchQueryKey) {
    throw new Error('Missing required environment variable: AZURE_SEARCH_QUERY_KEY')
  }
  if (options.requireChatDeployment && !openAiChatDeployment) {
    throw new Error('Missing required environment variable: AZURE_OPENAI_CHAT_DEPLOYMENT')
  }

  return {
    searchEndpoint: trimTrailingSlash(requireEnv('AZURE_SEARCH_ENDPOINT')),
    searchAdminKey,
    searchQueryKey,
    searchIndex: requireEnv('AZURE_SEARCH_INDEX'),
    openAiEndpoint: trimTrailingSlash(requireEnv('AZURE_OPENAI_ENDPOINT')),
    openAiApiKey: requireEnv('AZURE_OPENAI_API_KEY'),
    openAiEmbeddingDeployment: requireEnv('AZURE_OPENAI_EMBEDDING_DEPLOYMENT'),
    openAiChatDeployment,
  }
}

export function encodeAzureSearchKey(value: string): string {
  return Buffer.from(value, 'utf8').toString('base64url')
}

export async function createAzureEmbeddings(
  input: string[],
  config: AzureRagConfig,
): Promise<number[][]> {
  if (input.length === 0) return []

  const api = apiVersion(AZURE_OPENAI_EMBEDDINGS_API_VERSION, 'AZURE_OPENAI_EMBEDDINGS_API_VERSION')
  const deployment = encodeURIComponent(config.openAiEmbeddingDeployment)
  const url = `${config.openAiEndpoint}/openai/deployments/${deployment}/embeddings?api-version=${api}`

  const response = await fetchJsonWithRetry<AzureEmbeddingResponse>(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.openAiApiKey,
      },
      body: JSON.stringify({ input }),
    },
    'Azure OpenAI embeddings request',
  )

  if (!response.data) {
    throw new Error(response.error?.message ?? 'Azure OpenAI embeddings response did not include data')
  }

  const ordered = [...response.data].sort((a, b) => a.index - b.index)
  if (ordered.length !== input.length) {
    throw new Error(`Azure OpenAI returned ${ordered.length} embeddings for ${input.length} inputs`)
  }

  return ordered.map((item) => item.embedding)
}

export async function uploadAzureSearchDocuments(
  documents: AzureSearchUploadDocument[],
  config: AzureRagConfig,
): Promise<void> {
  if (documents.length === 0) return
  if (!config.searchAdminKey) {
    throw new Error('AZURE_SEARCH_ADMIN_KEY is required to upload Azure AI Search documents')
  }
  if (documents.length > 1000) {
    throw new Error('Azure AI Search upload batches must contain 1000 documents or fewer')
  }

  const api = apiVersion(AZURE_SEARCH_API_VERSION, 'AZURE_SEARCH_API_VERSION')
  const index = encodeURIComponent(config.searchIndex)
  const url = `${config.searchEndpoint}/indexes/${index}/docs/index?api-version=${api}`

  const response = await fetchJsonWithRetry<AzureSearchIndexResponse>(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.searchAdminKey,
      },
      body: JSON.stringify({ value: documents }),
    },
    'Azure AI Search upload',
  )

  if (!response.value) {
    throw new Error(response.error?.message ?? 'Azure AI Search upload response did not include indexing results')
  }

  const failures = response.value.filter((item) => !item.status)
  if (failures.length > 0) {
    const sample = failures.slice(0, 5).map((item) => `${item.key}: ${item.errorMessage ?? 'unknown error'}`).join('; ')
    throw new Error(`Azure AI Search rejected ${failures.length} documents. ${sample}`)
  }
}

function filterForLang(lang: AzureSearchLangFilter): string {
  const kindFilter = "(kind eq 'text' or kind eq 'slide')"
  return lang === 'all' ? kindFilter : `${kindFilter} and lang eq '${lang}'`
}

function compactText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function truncateText(value: string, maxLength: number): string {
  const compact = compactText(value)
  if (compact.length <= maxLength) return compact
  return `${compact.slice(0, Math.max(0, maxLength - 3)).trim()}...`
}

function toBookSearchResult(hit: AzureSearchHit): AzureBookSearchResult | null {
  if (!hit.id || !hit.content || !hit.href) return null

  const result: AzureBookSearchResult = {
    id: hit.id,
    score: hit['@search.score'] ?? 0,
    kind: hit.kind ?? 'text',
    lang: hit.lang ?? '',
    chapterKey: hit.chapterKey ?? '',
    chapterNumber: hit.chapterNumber,
    chapterTitle: hit.chapterTitle ?? '',
    sectionId: hit.sectionId ?? '',
    sectionTitle: hit.sectionTitle ?? '',
    blockIndex: hit.blockIndex,
    blockType: hit.blockType,
    slideNumber: hit.slideNumber,
    title: hit.title ?? hit.sectionTitle ?? hit.chapterTitle ?? 'Untitled source',
    content: hit.content,
    snippet: truncateText(hit.content, 320),
    href: hit.href,
    imageSrc: hit.imageSrc,
    sourcePath: hit.sourcePath,
    access: hit.access,
  }

  const reflexPair = resolveReflexMediaPair(result)
  if (!reflexPair) return result

  return {
    ...result,
    ...reflexPair,
    kind: 'reflex_pair',
  }
}

function buildRagContext(citations: AzureRagCitation[]): string {
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
      `Content: ${truncateText(citation.content, 1100)}`,
    ].filter(Boolean)

    return lines.join('\n')
  }).join('\n\n')
}

function buildRagInput(question: string, citations: AzureRagCitation[]): string {
  return [
    `Question: ${question}`,
    '',
    'Retrieved context:',
    buildRagContext(citations),
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

export async function searchAzureBook({
  query,
  lang = 'all',
  top = DEFAULT_SEARCH_TOP,
}: {
  query: string
  lang?: AzureSearchLangFilter
  top?: number
}): Promise<AzureBookSearchResult[]> {
  const trimmedQuery = query.trim()
  if (!trimmedQuery) return []

  const config = getAzureRagConfig({ requireSearchQueryKey: true })
  const [queryVector] = await createAzureEmbeddings([trimmedQuery], config)
  const api = apiVersion(AZURE_SEARCH_API_VERSION, 'AZURE_SEARCH_API_VERSION')
  const index = encodeURIComponent(config.searchIndex)
  const url = `${config.searchEndpoint}/indexes/${index}/docs/search?api-version=${api}`
  const vectorK = Math.max(top * 4, 40)

  const response = await fetchJsonWithRetry<AzureSearchResponse>(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.searchQueryKey ?? '',
      },
      body: JSON.stringify({
        search: trimmedQuery,
        top,
        count: true,
        select: SEARCH_SELECT_FIELDS,
        filter: filterForLang(lang),
        vectorQueries: [
          {
            kind: 'vector',
            vector: queryVector,
            fields: 'contentVector',
            k: vectorK,
          },
        ],
      }),
    },
    'Azure AI Search query',
  )

  if (!response.value) {
    throw new Error(response.error?.message ?? 'Azure AI Search query response did not include results')
  }

  return response.value
    .map(toBookSearchResult)
    .filter((result): result is AzureBookSearchResult => !!result)
}

export async function answerAzureBookQuestion({
  question,
  lang = 'all',
  top = DEFAULT_RAG_TOP,
}: {
  question: string
  lang?: AzureSearchLangFilter
  top?: number
}): Promise<AzureRagAnswer> {
  const trimmedQuestion = question.trim()
  if (!trimmedQuestion) {
    throw new Error('Question is required')
  }

  const config = getAzureRagConfig({ requireSearchQueryKey: true, requireChatDeployment: true })
  const sources = await searchAzureBook({ query: trimmedQuestion, lang, top })
  const citations = sources.map((source, index) => ({
    ...source,
    citationId: index + 1,
  }))

  if (citations.length === 0) {
    return {
      answer: 'No indexed passage was retrieved for this question.',
      citations,
      retrievalCount: 0,
      model: config.openAiChatDeployment ?? '',
    }
  }

  const url = `${config.openAiEndpoint}${AZURE_OPENAI_RESPONSES_API_PATH}`
  const response = await fetchJsonWithRetry<AzureOpenAiResponsesResult>(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.openAiApiKey,
      },
      body: JSON.stringify({
        model: config.openAiChatDeployment,
        instructions: [
          'You answer questions about the indexed book corpus.',
          'Retrieved context can contain chapter text passages, OCR-extracted slide text, and paired reflex cartographies with treatment photos.',
          'Use only the retrieved context.',
          'Cite the sources you use with bracketed citation numbers like [1] or [2].',
          'If the context is insufficient, say so plainly and list the closest cited passages.',
          'Keep the answer concise and practical.',
        ].join(' '),
        input: buildRagInput(trimmedQuestion, citations),
        max_output_tokens: 900,
      }),
    },
    'Azure OpenAI Responses request',
  )

  const answer = extractResponseText(response)
  if (!answer) {
    throw new Error(response.error?.message ?? 'Azure OpenAI response did not include answer text')
  }

  return {
    answer,
    citations,
    retrievalCount: citations.length,
    model: config.openAiChatDeployment ?? '',
  }
}

export const AZURE_DOCUMENT_INTELLIGENCE_API_VERSION = '2024-11-30'

type AzureDocumentIntelligenceConfig = {
  endpoint: string
  key: string
  apiVersion: string
}

type ConfigOptions = {
  requireKey?: boolean
}

type AnalyzeDocumentResponse = {
  status?: 'notStarted' | 'running' | 'succeeded' | 'failed' | 'canceled'
  analyzeResult?: {
    content?: string
    paragraphs?: Array<{ content?: string }>
    pages?: Array<{
      lines?: Array<{ content?: string }>
    }>
  }
  error?: {
    code?: string
    message?: string
  }
}

type AnalyzeImageOptions = {
  base64Source: string
  locale?: string
  highResolution?: boolean
  pollIntervalMs?: number
  timeoutMs?: number
}

function optionalEnv(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value || undefined
}

function requireEnv(name: string): string {
  const value = optionalEnv(name)
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '')
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function retryAfterMs(value: string | null): number | null {
  if (!value) return null
  const seconds = Number.parseFloat(value)
  return Number.isFinite(seconds) && seconds > 0 ? Math.ceil(seconds * 1000) : null
}

async function readResponseText(response: Response): Promise<string> {
  const text = await response.text()
  return text.length > 1200 ? `${text.slice(0, 1200)}...` : text
}

async function readJsonResponse<T>(response: Response, context: string): Promise<T> {
  if (!response.ok) {
    throw new Error(`${context} failed with ${response.status}: ${await readResponseText(response)}`)
  }

  return await response.json() as T
}

function extractText(result: AnalyzeDocumentResponse): string {
  const content = result.analyzeResult?.content?.trim()
  if (content) return content

  const paragraphText = result.analyzeResult?.paragraphs
    ?.map((paragraph) => paragraph.content?.trim() ?? '')
    .filter(Boolean)
    .join('\n\n')
    .trim()
  if (paragraphText) return paragraphText

  return result.analyzeResult?.pages
    ?.flatMap((page) => page.lines ?? [])
    .map((line) => line.content?.trim() ?? '')
    .filter(Boolean)
    .join('\n')
    .trim() ?? ''
}

export function getAzureDocumentIntelligenceConfig(
  options: ConfigOptions = { requireKey: true },
): AzureDocumentIntelligenceConfig {
  const requireKey = options.requireKey ?? true
  const endpoint = requireKey
    ? requireEnv('AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT')
    : optionalEnv('AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT') ?? ''
  const key = requireKey
    ? requireEnv('AZURE_DOCUMENT_INTELLIGENCE_KEY')
    : optionalEnv('AZURE_DOCUMENT_INTELLIGENCE_KEY') ?? ''

  return {
    endpoint: trimTrailingSlash(endpoint),
    key,
    apiVersion: optionalEnv('AZURE_DOCUMENT_INTELLIGENCE_API_VERSION') ?? AZURE_DOCUMENT_INTELLIGENCE_API_VERSION,
  }
}

export async function analyzeImageWithAzureRead(
  config: AzureDocumentIntelligenceConfig,
  options: AnalyzeImageOptions,
): Promise<string> {
  const params = new URLSearchParams({
    _overload: 'analyzeDocument',
    'api-version': config.apiVersion,
  })

  if (options.locale) params.set('locale', options.locale)
  if (options.highResolution) params.set('features', 'ocrHighResolution')

  const submitUrl = `${config.endpoint}/documentintelligence/documentModels/prebuilt-read:analyze?${params.toString()}`
  const submitResponse = await fetch(submitUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': config.key,
    },
    body: JSON.stringify({ base64Source: options.base64Source }),
  })

  if (submitResponse.status !== 202) {
    throw new Error(`Azure Document Intelligence analyze request failed with ${submitResponse.status}: ${await readResponseText(submitResponse)}`)
  }

  const operationLocation = submitResponse.headers.get('operation-location')
  if (!operationLocation) {
    throw new Error('Azure Document Intelligence response did not include Operation-Location')
  }

  const startedAt = Date.now()
  const timeoutMs = options.timeoutMs ?? 120_000
  const pollIntervalMs = retryAfterMs(submitResponse.headers.get('retry-after')) ?? options.pollIntervalMs ?? 1500

  for (;;) {
    if (Date.now() - startedAt > timeoutMs) {
      throw new Error(`Azure Document Intelligence OCR timed out after ${timeoutMs}ms`)
    }

    await sleep(pollIntervalMs)
    const pollResponse = await fetch(operationLocation, {
      headers: {
        'Ocp-Apim-Subscription-Key': config.key,
      },
    })
    const result = await readJsonResponse<AnalyzeDocumentResponse>(pollResponse, 'Azure Document Intelligence poll')

    if (result.status === 'succeeded') {
      return extractText(result)
    }

    if (result.status === 'failed' || result.status === 'canceled') {
      throw new Error(result.error?.message ?? `Azure Document Intelligence OCR ${result.status}`)
    }
  }
}

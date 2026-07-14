import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE } from '@/lib/access'
import { answerAzureBookQuestion, type AzureSearchLangFilter } from '@/lib/azureRag'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LANGS = new Set<AzureSearchLangFilter>(['all', 'fr', 'en', 'de', 'es', 'it', 'th'])
const MAX_QUESTION_LENGTH = 900

type RagRequestBody = {
  question?: unknown
  lang?: unknown
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

async function isAuthenticatedAdmin(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === 'authenticated'
}

function parseQuestion(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const question = value.trim()
  if (question.length < 2 || question.length > MAX_QUESTION_LENGTH) return null
  return question
}

function parseLang(value: unknown): AzureSearchLangFilter {
  return typeof value === 'string' && LANGS.has(value as AzureSearchLangFilter)
    ? value as AzureSearchLangFilter
    : 'fr'
}

export async function POST(request: Request) {
  if (!(await isAuthenticatedAdmin())) {
    return jsonError('Unauthorized', 401)
  }

  let body: RagRequestBody
  try {
    body = await request.json() as RagRequestBody
  } catch {
    return jsonError('Invalid JSON body', 400)
  }

  const question = parseQuestion(body.question)
  if (!question) {
    return jsonError(`Question must be between 2 and ${MAX_QUESTION_LENGTH} characters`, 400)
  }

  try {
    const answer = await answerAzureBookQuestion({
      question,
      lang: parseLang(body.lang),
      top: 8,
    })

    return NextResponse.json(answer)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'RAG request failed'
    const status = message.startsWith('Missing required environment variable') ? 503 : 500
    return jsonError(message, status)
  }
}

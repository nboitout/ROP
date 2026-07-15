import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE } from '@/lib/access'
import {
  answerGuyChat,
  type GuyChatMessageInput,
  type GuyChatRole,
} from '@/lib/azureGuyChat'
import type { AzureSearchLangFilter } from '@/lib/azureRag'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LANGS = new Set<AzureSearchLangFilter>(['all', 'fr', 'en', 'de', 'es', 'it', 'th'])
const ROLES = new Set<GuyChatRole>(['user', 'assistant'])
const MAX_MESSAGE_LENGTH = 6000
const MAX_MESSAGES = 14

type ChatRequestBody = {
  messages?: unknown
  lang?: unknown
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

async function isAuthenticatedAdmin(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === 'authenticated'
}

function parseLang(value: unknown): AzureSearchLangFilter {
  return typeof value === 'string' && LANGS.has(value as AzureSearchLangFilter)
    ? value as AzureSearchLangFilter
    : 'fr'
}

function parseMessages(value: unknown): GuyChatMessageInput[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) return null

  const messages: GuyChatMessageInput[] = []

  for (const item of value) {
    if (!item || typeof item !== 'object') return null

    const role = (item as { role?: unknown }).role
    const content = (item as { content?: unknown }).content
    if (typeof role !== 'string' || !ROLES.has(role as GuyChatRole)) return null
    if (typeof content !== 'string') return null

    const trimmedContent = content.trim()
    if (trimmedContent.length < 1 || trimmedContent.length > MAX_MESSAGE_LENGTH) return null

    messages.push({
      role: role as GuyChatRole,
      content: trimmedContent,
    })
  }

  return messages.some((message) => message.role === 'user') ? messages : null
}

export async function POST(request: Request) {
  if (!(await isAuthenticatedAdmin())) {
    return jsonError('Unauthorized', 401)
  }

  let body: ChatRequestBody
  try {
    body = await request.json() as ChatRequestBody
  } catch {
    return jsonError('Invalid JSON body', 400)
  }

  const messages = parseMessages(body.messages)
  if (!messages) {
    return jsonError(
      `Messages must include 1-${MAX_MESSAGES} user/assistant messages, each under ${MAX_MESSAGE_LENGTH} characters`,
      400,
    )
  }

  try {
    const answer = await answerGuyChat({
      messages,
      lang: parseLang(body.lang),
      top: 10,
    })

    return NextResponse.json(answer)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Chat request failed'
    const status = message.startsWith('Missing required environment variable') ? 503 : 500
    return jsonError(message, status)
  }
}

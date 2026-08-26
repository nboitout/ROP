import { NextRequest, NextResponse } from 'next/server'
import { canReadDraft, canReadDraftChapter, canReadFreeChapter, canReadPaidChapter } from '@/lib/access'
import { LOCALE_REQUEST_HEADER, resolveLang } from '@/app/i18n/locale'

const COOKIE_NAME = 'admin_session'
const FREE_PUBLIC_CHAPTER_ASSETS = new Set(['0', '2', '14'])
const DRAFT_PUBLIC_CHAPTER_ASSETS = new Set(['4'])

// Draft asset folders whose name is not /chapter-<n>/, keyed by grant key.
// Without this entry /chapter-5-rework/... fell outside chapterAssetNumber()
// and was served to anyone who knew the path.
const DRAFT_ASSET_PREFIXES: Record<string, string> = {
  '/chapter-5-rework': 'chapter-5-rework',
}

function chapterAssetNumber(pathname: string): string | null {
  const match = pathname.match(/^\/chapter-(\d+)(?:\/|$)/)
  return match?.[1] ?? null
}

function isSourceDocument(pathname: string): boolean {
  return /^\/assets\/.+\.(docx|pdf)$/i.test(pathname)
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set(
    LOCALE_REQUEST_HEADER,
    resolveLang(req.nextUrl.searchParams.get('lang'), req.cookies.get('lang')?.value),
  )
  const nextWithLocale = () => NextResponse.next({ request: { headers: requestHeaders } })

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') return nextWithLocale()

    const session = req.cookies.get(COOKIE_NAME)
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    return nextWithLocale()
  }

  const draftAssetEntry = Object.entries(DRAFT_ASSET_PREFIXES)
    .find(([prefix]) => pathname === prefix || pathname.startsWith(`${prefix}/`))
  if (draftAssetEntry) {
    return (await canReadDraft(req.cookies, draftAssetEntry[1]))
      ? nextWithLocale()
      : NextResponse.redirect(new URL('/admin/login', req.url))
  }

  const chapterNumber = chapterAssetNumber(pathname)
  if (chapterNumber) {
    if (DRAFT_PUBLIC_CHAPTER_ASSETS.has(chapterNumber)) {
      return canReadDraftChapter(req.cookies)
        ? nextWithLocale()
        : NextResponse.redirect(new URL('/admin/login', req.url))
    }

    if (FREE_PUBLIC_CHAPTER_ASSETS.has(chapterNumber)) {
      return canReadFreeChapter(req.cookies)
        ? nextWithLocale()
        : NextResponse.redirect(new URL('/?gate=free#acces-libre', req.url))
    }

    return (await canReadPaidChapter(req.cookies))
      ? nextWithLocale()
      : NextResponse.redirect(new URL('/#acheter', req.url))
  }

  if (isSourceDocument(pathname)) {
    return (await canReadPaidChapter(req.cookies))
      ? nextWithLocale()
      : NextResponse.redirect(new URL('/#acheter', req.url))
  }

  return nextWithLocale()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\..*).*)',
    '/admin/:path*',
    '/chapter-0/:path*',
    '/chapter-1/:path*',
    '/chapter-2/:path*',
    '/chapter-3/:path*',
    '/chapter-4/:path*',
    '/chapter-5/:path*',
    '/chapter-5-rework/:path*',
    '/chapter-6/:path*',
    '/chapter-7/:path*',
    '/chapter-8/:path*',
    '/chapter-9/:path*',
    '/chapter-10/:path*',
    '/chapter-11/:path*',
    '/chapter-12/:path*',
    '/chapter-13/:path*',
    '/chapter-14/:path*',
    '/chapter-15/:path*',
    '/chapter-16/:path*',
    '/chapter-17/:path*',
    '/chapter-18/:path*',
    '/chapter-19/:path*',
    '/chapter-20/:path*',
    '/chapter-21/:path*',
    '/assets/:path*',
  ],
}

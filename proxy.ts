import { NextRequest, NextResponse } from 'next/server'
import { canReadDraftChapter, canReadFreeChapter, canReadPaidChapter } from '@/lib/access'

const COOKIE_NAME = 'admin_session'
const FREE_PUBLIC_CHAPTER_ASSETS = new Set(['0', '2', '14'])
const DRAFT_PUBLIC_CHAPTER_ASSETS = new Set(['4'])

function chapterAssetNumber(pathname: string): string | null {
  const match = pathname.match(/^\/chapter-(\d+)(?:\/|$)/)
  return match?.[1] ?? null
}

function isSourceDocument(pathname: string): boolean {
  return /^\/assets\/.+\.(docx|pdf)$/i.test(pathname)
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') return NextResponse.next()

    const session = req.cookies.get(COOKIE_NAME)
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    return NextResponse.next()
  }

  const chapterNumber = chapterAssetNumber(pathname)
  if (chapterNumber) {
    if (DRAFT_PUBLIC_CHAPTER_ASSETS.has(chapterNumber)) {
      return canReadDraftChapter(req.cookies)
        ? NextResponse.next()
        : NextResponse.redirect(new URL('/admin/login', req.url))
    }

    if (FREE_PUBLIC_CHAPTER_ASSETS.has(chapterNumber)) {
      return canReadFreeChapter(req.cookies)
        ? NextResponse.next()
        : NextResponse.redirect(new URL('/?gate=free#acces-libre', req.url))
    }

    return canReadPaidChapter(req.cookies)
      ? NextResponse.next()
      : NextResponse.redirect(new URL('/#acheter', req.url))
  }

  if (isSourceDocument(pathname)) {
    return canReadPaidChapter(req.cookies)
      ? NextResponse.next()
      : NextResponse.redirect(new URL('/#acheter', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/chapter-0/:path*',
    '/chapter-1/:path*',
    '/chapter-2/:path*',
    '/chapter-3/:path*',
    '/chapter-4/:path*',
    '/chapter-5/:path*',
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

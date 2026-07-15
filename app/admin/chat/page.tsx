import type { Metadata } from 'next'
import AdminGuyChat from '@/components/admin/AdminGuyChat'
import type { BookSearchLangFilter } from '@/lib/searchIndex'

export const metadata: Metadata = { title: 'Assistant de Guy - Admin R.O.P.' }
export const dynamic = 'force-dynamic'

const LANG_OPTIONS: Array<{ value: BookSearchLangFilter; label: string }> = [
  { value: 'fr', label: 'French' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'es', label: 'Spanish' },
  { value: 'it', label: 'Italian' },
  { value: 'th', label: 'Thai' },
  { value: 'all', label: 'All languages' },
]

export default function AdminGuyChatPage() {
  return (
    <main className="adm-page adm-guy-chat-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Assistant R.O.P.</p>
          <h1 className="adm-page-title">Assistant de Guy</h1>
          <p className="adm-page-sub">
            Vous pouvez me poser des questions sur la pratique R.O.P. telle qu&apos;elle est définie dans le 3e livre.
          </p>
        </div>
      </div>

      <AdminGuyChat initialLang="fr" langOptions={LANG_OPTIONS} />
    </main>
  )
}

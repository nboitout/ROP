import type { Metadata } from 'next'
import AdminGuyChat from '@/components/admin/AdminGuyChat'
import type { BookSearchLangFilter } from '@/lib/searchIndex'

export const metadata: Metadata = { title: 'Guy Chatbot - Admin R.O.P.' }
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
          <p className="adm-page-eyebrow">RAG chatbot</p>
          <h1 className="adm-page-title">Guy chatbot</h1>
          <p className="adm-page-sub">
            Dual-mode answers for anatomy/physiology background and corpus-cited R.O.P. reasoning.
          </p>
        </div>
      </div>

      <AdminGuyChat initialLang="fr" langOptions={LANG_OPTIONS} />
    </main>
  )
}

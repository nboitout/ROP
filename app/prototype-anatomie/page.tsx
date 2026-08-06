import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter } from '@/lib/access'
import type { Metadata } from 'next'
import Link from 'next/link'
import AnatomyFoundation from '@/components/AnatomyFoundation'

export const metadata: Metadata = {
  title: 'Aperçu — Fondements neuro-anatomiques · R.O.P.',
  description: 'Aperçu de la section neuro-anatomique destinée à la page d’accueil.',
  robots: { index: false, follow: false },
}

// Research preview: the homepage section on its own, so it can be reviewed and
// shared before it goes live on the public homepage. Only the section and its
// "Lire les fondements neuro-anatomiques" link are reproduced — the rest of the
// homepage (hero, carousels, forms, pricing) is deliberately absent.
export default async function AnatomiePreviewPage() {
  const cookieStore = await cookies()
  if (!canReadDraftChapter(cookieStore)) {
    redirect('/admin/login')
  }

  return (
    <main className="anat-preview">
      <div className="anat-preview-bar">
        <Link href="/admin/chapitres" className="anat-preview-back">← Admin</Link>
        <span className="anat-preview-note">
          Aperçu de la section « Fondements neuro-anatomiques » telle qu’elle apparaîtra sur la page
          d’accueil. Le bouton ci-dessous ouvre la page complète.
        </span>
      </div>
      <AnatomyFoundation />
    </main>
  )
}

import { permanentRedirect } from 'next/navigation'

export default function RetiredPrivateEditionPage() {
  permanentRedirect('/admin/chapitres')
}

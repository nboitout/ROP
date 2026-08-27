import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import SalesPreviewGate from '@/components/SalesPreviewGate'
import { paymentsConfigured, paymentsEnabled } from '@/lib/payments'
import { hasSalesPreview } from '@/lib/salesPreview'

export const metadata: Metadata = {
  title: 'Aperçu du parcours d’achat · R.O.P.',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

/**
 * Private door to the sales pipeline before launch.
 *
 * Gated like /admin, but with its own password so the walkthrough can be
 * shared without handing over the dashboard and its readers' addresses.
 */
export default async function ApercuVentesPage() {
  const unlocked = await hasSalesPreview(await cookies())

  return (
    <SalesPreviewGate
      unlocked={unlocked}
      configured={paymentsConfigured()}
      live={paymentsEnabled()}
    />
  )
}

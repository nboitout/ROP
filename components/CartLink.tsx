'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { localizedHref } from '@/app/i18n/locale'
import { useCart } from '@/components/CartProvider'
import { useSalesMode } from '@/components/SalesModeProvider'

/**
 * Header shortcut back to the cart. Hidden while the cart is empty so the
 * pre-launch site — where nothing can be added — looks exactly as it does now.
 */
export default function CartLink({ className }: { className?: string }) {
  const { t, lang } = useLanguage()
  const { itemCount, ready } = useCart()
  const { open } = useSalesMode()

  if (!open || !ready || itemCount === 0) return null

  return (
    <Link href={localizedHref('/panier', lang)} className={className}>
      {t.cart.navLabel}
      <span className="cart-count" aria-hidden="true">{itemCount}</span>
      <span className="sr-only">{t.cart.navCount(itemCount)}</span>
    </Link>
  )
}

'use client'

import { createContext, useContext } from 'react'

export type SalesMode = {
  /** The purchase path is available to this visitor. */
  open: boolean
  /** …because they hold a preview grant, not because the shop has launched. */
  preview: boolean
}

const SalesModeContext = createContext<SalesMode>({ open: false, preview: false })

/**
 * Whether to show the cart is a per-visitor decision once the sales preview
 * exists, so it cannot come from NEXT_PUBLIC_PAYMENTS_ENABLED: that is inlined
 * at build time and is the same for everyone. The root layout resolves it from
 * the request's cookies and hands it down through this provider.
 */
export function SalesModeProvider({ mode, children }: { mode: SalesMode; children: React.ReactNode }) {
  return <SalesModeContext.Provider value={mode}>{children}</SalesModeContext.Provider>
}

export function useSalesMode(): SalesMode {
  return useContext(SalesModeContext)
}

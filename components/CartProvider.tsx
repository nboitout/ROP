'use client'

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from 'react'
import {
  CART_CHANGED_EVENT,
  CART_STORAGE_KEY,
  MAX_QUANTITY_PER_LINE,
  parseCart,
  readStoredCart,
  writeStoredCart,
  type CartLine,
} from '@/lib/cart'

type CartContextValue = {
  lines: CartLine[]
  itemCount: number
  /**
   * False during server rendering and hydration, when the stored cart is not
   * readable yet. Pages must wait for it before deciding to show "your cart is
   * empty" — otherwise a full cart flashes as empty on every load.
   */
  ready: boolean
  add: (product: string) => void
  remove: (product: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue>({
  lines: [],
  itemCount: 0,
  ready: false,
  add: () => {},
  remove: () => {},
  clear: () => {},
})

const EMPTY_CART: CartLine[] = []

// getSnapshot() must return a referentially stable value or React re-renders
// forever, so the parsed cart is cached and only rebuilt when the raw string
// stored by writeStoredCart() actually changes.
let cachedRaw: string | null = null
let cachedLines: CartLine[] = EMPTY_CART

function storedCartSnapshot(): CartLine[] {
  let raw: string | null = null
  try {
    raw = window.localStorage.getItem(CART_STORAGE_KEY)
  } catch {
    raw = null
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw
    cachedLines = raw === null ? EMPTY_CART : parseCart(raw)
  }
  return cachedLines
}

function serverCartSnapshot(): CartLine[] {
  return EMPTY_CART
}

/** The CustomEvent covers this tab, the `storage` event the buyer's other tabs. */
function subscribeToCart(onStoreChange: () => void): () => void {
  window.addEventListener(CART_CHANGED_EVENT, onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    window.removeEventListener(CART_CHANGED_EVENT, onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}

const neverChanges = () => () => {}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(subscribeToCart, storedCartSnapshot, serverCartSnapshot)
  const ready = useSyncExternalStore(neverChanges, () => true, () => false)

  // Every mutation starts from storage rather than from the rendered lines, so
  // a change made in another tab is never overwritten by this tab's copy.
  const add = useCallback((product: string) => {
    const current = readStoredCart()
    // A reading licence is per person: adding what is already there is a no-op,
    // not a second unit.
    if (current.some((line) => line.product === product)) return
    writeStoredCart([...current, { product, quantity: MAX_QUANTITY_PER_LINE }])
  }, [])

  const remove = useCallback((product: string) => {
    writeStoredCart(readStoredCart().filter((line) => line.product !== product))
  }, [])

  const clear = useCallback(() => writeStoredCart([]), [])

  const value = useMemo<CartContextValue>(() => ({
    lines,
    itemCount: lines.reduce((total, line) => total + line.quantity, 0),
    ready,
    add,
    remove,
    clear,
  }), [lines, ready, add, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  return useContext(CartContext)
}

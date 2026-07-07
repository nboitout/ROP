'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

type Props = {
  action: () => Promise<void>
}

export default function RecalculateStatsButton({ action }: Props) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  return (
    <button
      type="button"
      className="adm-refresh-btn"
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          await action()
          router.refresh()
        })
      }}
    >
      {pending ? 'Recalculating...' : 'Recalculate stats'}
    </button>
  )
}

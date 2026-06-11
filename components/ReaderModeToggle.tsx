import Link from 'next/link'

// Segmented switch between the two reading experiences of a chapter:
// "Synchronisée" (text + pinned synthesis slides) and "Classique".
// Rendered in the reader top bar; the active side is the current page,
// so only the other side is a link.
type Props = {
  mode: 'sync' | 'classic'
  // href of the *other* version, the one the switch navigates to
  otherHref: string
}

export default function ReaderModeToggle({ mode, otherHref }: Props) {
  const opt = (m: 'sync' | 'classic', label: string) =>
    m === mode ? (
      <span className="ss-switch-opt is-active" aria-current="page">{label}</span>
    ) : (
      <Link href={otherHref} className="ss-switch-opt">{label}</Link>
    )
  return (
    <div className="ss-switch" role="group" aria-label="Mode de lecture">
      {opt('sync', 'Synchronisée')}
      {opt('classic', 'Classique')}
    </div>
  )
}

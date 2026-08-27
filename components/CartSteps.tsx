import type { Lang } from '@/app/i18n/translations'
import { translations } from '@/app/i18n/translations'

/**
 * Cart → validation → payment. Rendered on both cart pages so the reader can
 * see how far the purchase still has to go before any card is asked for.
 */
export default function CartSteps({ lang, active }: { lang: Lang; active: 'cart' | 'validation' | 'payment' }) {
  const steps = translations[lang].cart.steps
  const order: Array<keyof typeof steps> = ['cart', 'validation', 'payment']
  const activeIndex = order.indexOf(active)

  return (
    <ol className="cart-steps">
      {order.map((step, index) => (
        <li
          key={step}
          className="cart-step"
          data-state={index === activeIndex ? 'current' : index < activeIndex ? 'done' : 'todo'}
          aria-current={index === activeIndex ? 'step' : undefined}
        >
          <span className="cart-step-index">{index + 1}</span>
          <span className="cart-step-label">{steps[step]}</span>
        </li>
      ))}
    </ol>
  )
}

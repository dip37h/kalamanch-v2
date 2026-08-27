import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaArrowProps = {
  /** 'right' for primary flow actions, 'up-right' for cards that open a route/detail. */
  direction?: 'right' | 'up-right'
  className?: string
}

/**
 * Shared directional icon for CTAs. Expects to sit inside an element with the
 * `group` class so the hover shift is driven by the parent's hover state.
 */
export function CtaArrow({ direction = 'right', className }: CtaArrowProps) {
  const Icon = direction === 'up-right' ? ArrowUpRight : ArrowRight

  return (
    <Icon
      aria-hidden="true"
      className={cn(
        'size-[1em] shrink-0 transition-transform duration-300 ease-editorial',
        direction === 'up-right'
          ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          : 'group-hover:translate-x-1',
        className,
      )}
    />
  )
}

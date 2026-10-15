import { cn } from '@/lib/utils'

/** Eight-point star taken from the Kalamanch mark: two squares, one turned 45°. */
export function StarMotif({
  className,
  filled = false,
  strokeWidth = 1,
}: {
  className?: string
  filled?: boolean
  strokeWidth?: number
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
    >
      <rect x="20" y="20" width="60" height="60" />
      <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
      {filled ? null : <circle cx="50" cy="50" r="14" />}
    </svg>
  )
}

const stripColours = ['bg-blue', 'bg-yellow', 'bg-orange', 'bg-purple', 'bg-green']

/** The five MSF colours as a thin band — used as a brand signature on header and footer. */
export function ColourStrip({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('flex h-1', className)}>
      {stripColours.map((colour) => (
        <span key={colour} className={cn('flex-1', colour)} />
      ))}
    </div>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('eyebrow flex items-center gap-3', className)}>
      <StarMotif filled className="size-3 shrink-0" />
      {children}
    </p>
  )
}

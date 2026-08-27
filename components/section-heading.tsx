import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
  align?: 'split' | 'stack'
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'light',
  className,
  align = 'split',
}: SectionHeadingProps) {
  const dark = tone === 'dark'

  return (
    <Reveal
      className={cn(
        'flex flex-col gap-8',
        align === 'split' && 'md:flex-row md:items-end md:justify-between md:gap-16',
        className,
      )}
    >
      <div className="max-w-[42rem] flex-1">
        <p
          className={cn(
            'eyebrow flex items-center gap-3',
            dark ? 'text-ochre/90' : 'text-ochre',
          )}
        >
          <span aria-hidden="true" className="h-px w-7 bg-current" />
          {eyebrow}
        </p>
        <h2
          className={cn(
            'km-display mt-6 text-balance text-[clamp(2rem,5vw,3.6rem)]',
            dark ? 'text-bone' : 'text-ink',
          )}
        >
          {title}
        </h2>
      </div>
      {intro ? (
        <p
          className={cn(
            'max-w-[40ch] text-[0.95rem] leading-relaxed md:pb-2',
            dark ? 'text-bone/65' : 'text-muted-foreground',
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}

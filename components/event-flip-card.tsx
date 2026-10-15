'use client'

import { useState } from 'react'
import { ArrowUpRight, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

type EventFlipCardProps = {
  id: string
  index: string
  tag: string
  titleTop: string
  titleBottom: string
  body: string
  meta: string[]
  tone: 'yellow' | 'sage'
  backTitle: string
  back: React.ReactNode
  backFooter: string
}

const toneClass = {
  yellow: 'bg-yellow',
  sage: 'bg-sage',
} as const

export function EventFlipCard({
  id,
  index,
  tag,
  titleTop,
  titleBottom,
  body,
  meta,
  tone,
  backTitle,
  back,
  backFooter,
}: EventFlipCardProps) {
  const [flipped, setFlipped] = useState(false)
  const toggle = () => setFlipped((value) => !value)

  return (
    <article id={id} className="flip-scene h-full scroll-mt-28">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={flipped}
        aria-label={`${titleTop} ${titleBottom}: ${flipped ? 'show overview' : `show ${backTitle.toLowerCase()}`}`}
        className="group block h-full w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
      >
        <div className="flip-inner h-full" data-flipped={flipped}>
          <div
            aria-hidden={flipped}
            className={cn(
              'flip-face relative flex min-h-[30rem] flex-col overflow-hidden p-6 text-navy sm:p-7',
              toneClass[tone],
            )}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[28%] -right-24 size-72 rounded-full border border-navy/15"
            />
            <div className="relative flex items-start justify-between font-mono text-[0.62rem] tracking-[0.14em] uppercase">
              <span>{tag}</span>
              <span className="text-[0.9rem] tracking-normal">{index}</span>
            </div>

            <h3 className="relative mt-auto pt-16 text-[clamp(3rem,6vw,4.25rem)] leading-[0.92] tracking-[-0.03em]">
              <span className="block font-sans font-normal">{titleTop}</span>
              <span className="block font-serif italic">{titleBottom}</span>
            </h3>

            <p className="relative mt-6 max-w-[32ch] text-[0.86rem] leading-relaxed text-navy/85">
              {body}
            </p>

            <div className="relative mt-10 flex items-end justify-between">
              <ul className="flex flex-col gap-1 font-mono text-[0.62rem] tracking-[0.12em] uppercase">
                {meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="flex size-11 items-center justify-center rounded-full border border-navy/70 transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </div>
          </div>

          <div
            aria-hidden={!flipped}
            className="flip-face flip-back relative flex min-h-[30rem] flex-col overflow-hidden bg-navy p-6 text-white sm:p-7"
          >
            <div className="flex items-start justify-between font-mono text-[0.62rem] tracking-[0.14em] text-white/70 uppercase">
              <span>
                {titleTop} {titleBottom}
              </span>
              <span className="text-[0.9rem] tracking-normal">{index}</span>
            </div>

            <h4 className="mt-6 font-serif text-[1.9rem] leading-tight italic text-yellow">
              {backTitle}
            </h4>

            <div
              className={cn(
                'mt-6 rounded-sm p-5',
                toneClass[tone],
              )}
            >
              {back}
            </div>

            <div className="mt-auto flex items-end justify-between pt-6">
              <p className="font-mono text-[0.62rem] tracking-[0.12em] text-white/70 uppercase">
                {backFooter}
              </p>
              <span className="flex size-11 items-center justify-center rounded-full border border-white/60">
                <RotateCcw aria-hidden="true" className="size-4" />
              </span>
            </div>
          </div>
        </div>
      </button>
    </article>
  )
}

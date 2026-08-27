'use client'

import { useState } from 'react'
import { programmes } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function ProgrammesSection() {
  const [open, setOpen] = useState<string | null>(programmes[0]?.number ?? null)

  return (
    <section id="programmes" className="bg-ink py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <SectionHeading
          tone="dark"
          eyebrow="Programmes"
          title="What happens at Kalamanch?"
          intro="The areas of activity the platform is being built around. Specific programmes, dates and participating artists will be published here as they are confirmed."
        />

        <Reveal className="mt-14 border-t border-bone/15">
          {programmes.map((programme) => {
            const isOpen = open === programme.number
            const panelId = `programme-panel-${programme.number}`
            return (
              <div key={programme.number} className="border-b border-bone/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : programme.number)}
                    className="flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span className="km-display w-8 shrink-0 text-[0.8rem] text-ochre/90">
                      {programme.number}
                    </span>
                    <span
                      className={cn(
                        'km-display flex-1 text-[clamp(1.25rem,2.6vw,1.9rem)] transition-colors duration-300',
                        isOpen ? 'text-bone' : 'text-bone/75',
                      )}
                    >
                      {programme.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'relative size-5 shrink-0 text-ochre transition-transform duration-400 ease-editorial',
                        isOpen && 'rotate-45',
                      )}
                    >
                      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="grid overflow-hidden pl-13 transition-all"
                >
                  <p className="max-w-[62ch] pb-8 text-[0.95rem] leading-relaxed text-bone/65">
                    {programme.body}
                  </p>
                </div>
              </div>
            )
          })}
        </Reveal>

        <Reveal className="mt-12 max-w-[58ch] text-[0.82rem] leading-relaxed text-bone/45">
          These represent the broader Kalamanch ecosystem rather than a confirmed calendar. The
          section is built so that live programmes and events can be added as they are announced.
        </Reveal>
      </div>
    </section>
  )
}

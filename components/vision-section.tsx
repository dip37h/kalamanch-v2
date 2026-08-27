import Image from 'next/image'
import { UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function VisionSection() {
  return (
    <section id="vision" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-ochre">
              <span aria-hidden="true" className="h-px w-7 bg-current" />
              The Vision
            </p>

            <blockquote className="km-display mt-8 max-w-[22ch] text-balance text-[clamp(1.9rem,4.4vw,3.2rem)] text-ink">
              &ldquo;[FOUNDER QUOTE]&rdquo;
            </blockquote>

            <div className="mt-9 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-ochre" />
              <div>
                <p className="km-display text-[1.05rem] text-ink">[FOUNDER NAME]</p>
                <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Founder, Monica Sarin Foundation
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative row-span-2 aspect-3/4 overflow-hidden grain bg-linear-to-br from-indigo/12 via-secondary to-ink/8">
                <div className="flex h-full w-full items-center justify-center">
                  <UserRound aria-hidden="true" className="size-10 text-ink/20" strokeWidth={1.25} />
                </div>
                <p className="absolute top-0 left-0 bg-ink/75 px-3 py-2 text-[0.55rem] font-medium tracking-[0.18em] text-bone/85 uppercase backdrop-blur-xs">
                  Portrait placeholder
                </p>
              </div>

              <div className="relative aspect-4/3 overflow-hidden grain">
                <Image
                  src="/kalamanch-v2/images/expr-visual-art.png"
                  alt="Impasto brushstrokes of ochre and indigo pigment on raw canvas"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-4/3 overflow-hidden grain">
                <Image
                  src="/kalamanch-v2/images/expr-performing-art.png"
                  alt="A classical Indian dancer mid-turn, skirt and ankle bells in motion"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mt-5 text-[0.68rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Visual Art · Performing Art · Heritage &amp; Craft · Global Exchange
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

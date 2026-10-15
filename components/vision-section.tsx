import Image from 'next/image'
import { UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Eyebrow, StarMotif } from '@/components/motifs'
import { asset } from '@/lib/asset'

export function VisionSection() {
  return (
    <section id="vision" className="relative overflow-hidden bg-canvas pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div aria-hidden="true" className="star-lattice absolute inset-y-0 right-0 w-1/2 text-blue/[0.06]" />

      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow className="text-marigold-deep">The Vision</Eyebrow>

            <blockquote className="km-display mt-8 max-w-[22ch] text-balance text-[clamp(1.9rem,4.4vw,3.2rem)] text-navy">
              <span aria-hidden="true" className="mr-1 text-orange">
                &ldquo;
              </span>
              [FOUNDER QUOTE]
              <span aria-hidden="true" className="ml-1 text-orange">
                &rdquo;
              </span>
            </blockquote>

            <div className="mt-9 flex items-center gap-4">
              <span aria-hidden="true" className="h-0.5 w-10 bg-orange" />
              <div>
                <p className="km-display text-[1.1rem] text-ink">[FOUNDER NAME]</p>
                <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Founder, Monica Sarin Foundation
                </p>
              </div>
            </div>

            <p className="mt-12 max-w-[52ch] border-l-2 border-blue pl-5 leading-relaxed text-muted-foreground">
              Kala Manch is a space for art to be seen, shared and experienced. It brings artists, ideas and audiences together through thoughtful programmes, conversations and opportunities for creative expression.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div aria-hidden="true" className="absolute -top-4 -left-4 size-28 bg-yellow sm:size-36" />
              <div aria-hidden="true" className="absolute -right-4 -bottom-4 size-24 bg-purple sm:size-32" />

              <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative row-span-2 overflow-hidden bg-blue grain">
                  <StarMotif
                    strokeWidth={0.8}
                    className="absolute -bottom-10 -left-10 size-56 text-white/15"
                  />
                  <div className="flex h-full min-h-64 w-full items-center justify-center">
                    <UserRound aria-hidden="true" className="size-12 text-white/50" strokeWidth={1.25} />
                  </div>
                  <p className="absolute top-0 left-0 bg-navy/80 px-3 py-2 text-[0.55rem] font-medium tracking-[0.18em] text-white/85 uppercase backdrop-blur-xs">
                    Portrait placeholder
                  </p>
                </div>

                <div className="relative aspect-4/3 overflow-hidden grain">
                  <Image
                    src={asset('/images/expr-visual-art.png')}
                    alt="Impasto brushstrokes of ochre and indigo pigment on raw canvas"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative aspect-4/3 overflow-hidden bg-orange grain">
                  <Image
                    src={asset('/images/expr-heritage.png')}
                    alt="Handmade craft materials arranged in a warm studio"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <ul className="mt-9 flex flex-wrap gap-2">
              {[
                ['Visual Art', 'bg-blue/10 text-blue'],
                ['Heritage & Craft', 'bg-orange/15 text-marigold-deep'],
                ['Global Exchange', 'bg-green/20 text-green-deep'],
              ].map(([label, style]) => (
                <li
                  key={label}
                  className={`rounded-sm px-3 py-1.5 text-[0.66rem] font-semibold tracking-[0.14em] uppercase ${style}`}
                >
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

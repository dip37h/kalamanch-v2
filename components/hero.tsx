import Image from 'next/image'
import { CtaArrow } from '@/components/cta-arrow'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-indigo"
    >
      <div className="absolute inset-0">
        <Image
          src="/kalamanch-v2/images/hero-stage.png"
          alt="An empty stage lit by a single shaft of warm light, with a tabla and a folded handwoven textile at the edge of the light"
          fill
          priority
          sizes="100vw"
          className="animate-drift object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-indigo/25 via-indigo/55 to-indigo/95"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1340px] px-5 pt-32 pb-16 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
        <p className="eyebrow flex items-center gap-3 text-ochre/90">
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          Kalamanch — Kala · Manch
        </p>

        <h1 className="km-display mt-7 max-w-[15ch] text-balance text-[clamp(2.6rem,8vw,6.4rem)] text-bone">
          Where art finds a stage.
        </h1>

        <p className="mt-7 max-w-[40ch] text-[clamp(0.95rem,1.6vw,1.1rem)] leading-relaxed text-bone/75">
          A platform for art, culture and artists to be seen, experienced and shared.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#programmes"
            className="group inline-flex items-center gap-2 bg-ochre px-7 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-bone"
          >
            Explore Kalamanch
            <CtaArrow />
          </a>
          <a
            href="#join"
            className="group inline-flex items-center gap-2 border border-bone/35 px-7 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-bone uppercase transition-colors hover:bg-bone hover:text-ink"
          >
            For Artists
            <CtaArrow />
          </a>
        </div>
      </div>
    </section>
  )
}

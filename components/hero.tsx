import Image from 'next/image'
import { CtaArrow } from '@/components/cta-arrow'
import { StarMotif } from '@/components/motifs'
import { asset } from '@/lib/asset'
import { artForms } from '@/lib/content'

export function Hero() {
  return (
    <section id="top" className="relative bg-navy">
      <div className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={asset('/images/hero-stage.png')}
            alt="A warmly lit stage with Pichwai paintings, brass lamps, paint brushes and handwoven textiles"
            fill
            priority
            sizes="100vw"
            className="animate-drift object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/45 to-navy/5"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-navy/70 via-navy/20 to-transparent"
          />
        </div>

        <StarMotif
          strokeWidth={0.5}
          className="animate-spin-slow pointer-events-none absolute top-[12%] -right-28 hidden size-[30rem] text-yellow/35 md:block"
        />

        <div className="relative mx-auto w-full max-w-[1340px] px-5 pt-36 pb-16 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
          <p className="eyebrow inline-flex items-center gap-3 rounded-sm bg-white/10 px-3 py-2 text-yellow backdrop-blur-sm">
            <StarMotif filled className="size-3" />
            Kala <span className="text-white/50">·</span> Manch
          </p>

          <h1 className="km-display mt-7 max-w-[15ch] text-balance text-[clamp(2.6rem,8vw,6.4rem)] text-white">
            Where art finds a <span className="text-yellow italic">stage.</span>
          </h1>

          <p className="mt-7 max-w-[42ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-relaxed text-white/85">
            An approach to building India&rsquo;s platform for discovering, nurturing and celebrating artists
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#vision"
              className="group inline-flex items-center gap-2 rounded-sm bg-yellow px-7 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:bg-white"
            >
              Explore Kala Manch
              <CtaArrow />
            </a>
            <a
              href="#events"
              className="group inline-flex items-center gap-2 rounded-sm border border-white/50 px-7 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-white hover:bg-white hover:text-navy"
            >
              Initiatives
              <CtaArrow />
            </a>
          </div>
        </div>
      </div>

      <ArtFormRibbon />
    </section>
  )
}

function ArtFormRibbon() {
  const items = [...artForms, ...artForms]
  return (
    <div className="relative z-10 bg-yellow text-navy">
      <div className="scallop-up absolute inset-x-0 -top-[13px] text-yellow" aria-hidden="true" />
      <p className="sr-only">Art forms celebrated at Kala Manch: {artForms.join(', ')}.</p>
      <div aria-hidden="true" className="overflow-hidden py-3.5">
        <ul className="animate-marquee flex w-max items-center">
          {items.map((form, index) => (
            <li
              key={`${form}-${index}`}
              className="flex items-center gap-6 pr-6 text-[0.72rem] font-semibold tracking-[0.2em] uppercase"
            >
              {form}
              <StarMotif filled className="size-2.5 text-orange" />
            </li>
          ))}
        </ul>
      </div>
      <div className="scallop-down absolute inset-x-0 -bottom-[13px] text-yellow" aria-hidden="true" />
    </div>
  )
}

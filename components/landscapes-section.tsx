import { Reveal } from '@/components/reveal'
import { CtaArrow } from '@/components/cta-arrow'
import { khojUncovers, landscapes } from '@/lib/content'
import { cn } from '@/lib/utils'
import { asset } from '@/lib/asset'

const tilts = [
  '-rotate-1',
  'rotate-[0.6deg]',
  '-rotate-[0.4deg]',
  'rotate-[0.8deg]',
  '-rotate-[0.7deg]',
  'rotate-[0.3deg]',
]

export function LandscapesSection() {
  return (
    <section id="landscapes" className="relative overflow-hidden bg-mist py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1340px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-14">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] text-navy/70 uppercase">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-green" />
            Year One — 2026
          </p>

          <h2 className="mt-6 text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95] tracking-[-0.035em] text-navy">
            <span className="block font-sans font-bold sm:whitespace-nowrap">12 landscapes.</span>
            <span className="mt-1 block font-serif font-normal italic">One constellation.</span>
          </h2>

          <p className="mt-8 max-w-[44ch] text-[0.98rem] leading-relaxed text-ink/70">
            In year one, Kala Khoj uses the regions surrounding India&apos;s 12 Jyotirlingas as
            geographic anchors — selecting one artist from each landscape to form a diverse
            12-artist cohort. Across these landscapes, the search will uncover:
          </p>

          <ul className="mt-6 flex max-w-[44ch] flex-col gap-2.5">
            {khojUncovers.map((item) => (
              <li key={item} className="flex gap-3 text-[0.92rem] leading-snug text-navy/85">
                <span aria-hidden="true" className="mt-[0.45em] size-1.5 shrink-0 rotate-45 bg-orange" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#join"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-[0.78rem] font-semibold text-white transition-colors hover:bg-navy"
          >
            Follow the search
            <CtaArrow direction="up-right" />
          </a>
        </Reveal>

        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
          {landscapes.map((place, index) => (
            <Reveal
              as="li"
              key={place.name}
              delay={(index % 6) * 60}
              className={cn(
                'group flex flex-col border border-navy/10 bg-white/80 p-2 shadow-[0_8px_24px_-16px_rgba(24,37,103,0.35)] transition-all duration-500 ease-editorial hover:rotate-0 hover:-translate-y-1 hover:bg-white',
                tilts[index % tilts.length],
              )}
            >
              <div className="relative aspect-square overflow-hidden bg-navy/5">
                <img
                  src={asset(place.image)}
                  alt={place.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-white/90 px-1.5 py-0.5 font-mono text-[0.6rem] text-orange backdrop-blur-xs">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <span className="px-1.5 pt-2.5 pb-1">
                <span className="block text-[0.88rem] leading-tight font-semibold text-navy">{place.name}</span>
                <span className="mt-0.5 block text-[0.7rem] text-ink/55">{place.state}</span>
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

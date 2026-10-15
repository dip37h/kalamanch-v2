import Image from 'next/image'
import { joinPaths } from '@/lib/content'
import { asset } from '@/lib/asset'
import { toneBar } from '@/lib/tones'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { CtaArrow } from '@/components/cta-arrow'
import { Eyebrow, StarMotif } from '@/components/motifs'

export function JoinSection() {
  return (
    <section id="join" className="relative overflow-hidden bg-yellow py-14 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="star-lattice absolute inset-0 text-navy/[0.06]" />

      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow className="text-navy">Join the Manch</Eyebrow>

            <h2 className="km-display mt-6 text-balance text-[clamp(2.2rem,6vw,4.4rem)] text-navy">
              Bring your{' '}
              <span lang="hi" className="font-kala inline-block text-[1.12em] leading-none text-navy">
                कला
              </span>{' '}
              to the Manch.
            </h2>

            <p className="mt-8 max-w-[52ch] text-[1.02rem] leading-relaxed text-navy/85">
              Painters, sculptors, craftspeople, cultural practitioners, creators, institutions and
              collaborators can connect with Kala Manch.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 bg-blue" />
              <div className="group relative aspect-4/3 overflow-hidden">
                <Image
                  src={asset('/images/expr-performing-art.png')}
                  alt="Indian performing artist on stage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] text-white uppercase">
                  <StarMotif filled className="size-3 text-yellow" />
                  Artists · Performers · Creators
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-3">
          {joinPaths.map((path, index) => (
            <Reveal as="li" key={path.title} delay={index * 100} className="h-full">
              <a
                href="#join"
                className="group flex h-full min-h-56 flex-col justify-between bg-canvas transition-colors duration-500 hover:bg-navy"
              >
                <span aria-hidden="true" className={cn('h-1.5 w-full', toneBar[path.tone])} />
                <div className="flex flex-1 flex-col justify-between p-7 lg:p-9">
                  <div>
                    <h3 className="km-display text-[1.5rem] text-navy transition-colors duration-500 group-hover:text-white">
                      {path.title}
                    </h3>
                    <p className="mt-4 max-w-[30ch] text-[0.92rem] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/80">
                      {path.body}
                    </p>
                  </div>
                  <CtaArrow
                    direction="up-right"
                    className="mt-8 size-5 text-blue transition-colors group-hover:text-yellow"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#join"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-8 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-blue"
          >
            Join the Manch
            <CtaArrow />
          </a>
          <a
            href="#join"
            className="group inline-flex items-center justify-center gap-2 rounded-sm border-2 border-navy px-8 py-[14px] text-[0.72rem] font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:bg-navy hover:text-white"
          >
            Collaborate With Us
            <CtaArrow />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

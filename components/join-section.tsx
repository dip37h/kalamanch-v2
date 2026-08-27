import { joinPaths } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { CtaArrow } from '@/components/cta-arrow'

export function JoinSection() {
  return (
    <section id="join" className="bg-secondary py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <Reveal className="max-w-[24ch]">
          <p className="eyebrow flex items-center gap-3 text-ochre">
            <span aria-hidden="true" className="h-px w-7 bg-current" />
            Join the Manch
          </p>
          <h2 className="km-display mt-6 text-balance text-[clamp(2.2rem,6vw,4.4rem)] text-ink">
            Bring your art to the Manch.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8 max-w-[52ch] leading-relaxed text-muted-foreground">
          Artists, performers, cultural practitioners, creators, institutions and collaborators can
          connect with Kalamanch.
        </Reveal>

        <div className="mt-14 grid gap-px bg-ink/12 md:grid-cols-3">
          {joinPaths.map((path, index) => (
            <Reveal key={path.title} delay={index * 100}>
              <a
                href="#join"
                className="group flex h-full min-h-56 flex-col justify-between bg-secondary p-7 transition-colors duration-500 hover:bg-ink lg:p-9"
              >
                <div>
                  <h3 className="km-display text-[1.5rem] text-ink transition-colors duration-500 group-hover:text-bone">
                    {path.title}
                  </h3>
                  <p className="mt-4 max-w-[30ch] text-[0.92rem] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-bone/70">
                    {path.body}
                  </p>
                </div>
                <CtaArrow direction="up-right" className="mt-8 size-5 text-ochre" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#join"
            className="group inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-bone uppercase transition-colors hover:bg-indigo"
          >
            Join the Manch
            <CtaArrow />
          </a>
          <a
            href="#join"
            className="group inline-flex items-center justify-center gap-2 border border-input px-8 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:bg-ink hover:text-bone"
          >
            Collaborate With Us
            <CtaArrow />
          </a>
        </Reveal>

        {/* Temporary note until the artist and collaborator onboarding forms are connected. 
        <Reveal className="mt-8 max-w-[54ch] text-[0.8rem] leading-relaxed text-muted-foreground">
          Onboarding forms for artists and collaborators will be connected here. Until then, these
          entry points describe the routes into the platform.
        </Reveal>
        */}
      </div>
    </section>
  )
}

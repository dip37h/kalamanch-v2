import { Reveal } from '@/components/reveal'
import { EventFlipCard } from '@/components/event-flip-card'
import { artToStartCities, kalaKhojSteps } from '@/lib/content'

export function EventsSection() {
  return (
    <section id="events" className="scroll-mt-20 bg-canvas py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1340px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.6fr] lg:items-center lg:gap-16 lg:px-14">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] text-navy/70 uppercase">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-blue" />
            The Events
          </p>
          <h2 className="mt-6 font-sans text-[clamp(2.5rem,4.4vw,4rem)] leading-[0.95] font-bold tracking-[-0.035em] text-navy">
            <span className="block whitespace-nowrap">Two ways to</span>
            <span className="mt-1 block font-serif font-normal tracking-[-0.02em] italic">
              take the manch.
            </span>
          </h2>
          <p className="mt-8 max-w-[34ch] text-[0.98rem] leading-relaxed text-ink/70">
            Designed to meet artists where they are — and take them where they want to go.
          </p>
          <p className="mt-6 font-mono text-[0.68rem] tracking-[0.14em] text-navy/50 uppercase">
            Tap a card to turn it over
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal delay={80} className="h-full">
            <EventFlipCard
              id="kala-khoj"
              index="01"
              tag="Discovery + Development"
              titleTop="Kala"
              titleBottom="Khoj"
              body="A nationwide artist discovery programme travelling through 12 cultural landscapes, rooted in the 12 Jyotirlingas."
              meta={['12 Artists', '12 Landscapes', '1 National Search']}
              tone="yellow"
              backTitle="The next steps"
              back={
                <ol className="flex flex-col gap-4">
                  {kalaKhojSteps.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="pt-0.5 font-mono text-[0.68rem] text-navy/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-[0.92rem] font-semibold text-navy">{step.title}</p>
                        <p className="mt-1 text-[0.8rem] leading-relaxed text-navy/75">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              }
              backFooter="12-artist cohort · Year one"
            />
          </Reveal>

          <Reveal delay={160} className="h-full">
            <EventFlipCard
              id="art-to-start"
              index="02"
              tag="Launch + Momentum"
              titleTop="Art to"
              titleBottom="Start"
              body="Our first-stage launch — taking Kala Manch beyond the metros into the cultural heartlands of India."
              meta={['Stage One', '4 States', '8 Cities']}
              tone="sage"
              backTitle="Where we begin"
              back={
                <ul className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {artToStartCities.map((group) => (
                    <li key={group.state}>
                      <p className="font-mono text-[0.62rem] tracking-[0.14em] text-navy/60 uppercase">
                        {group.state}
                      </p>
                      <ul className="mt-2 flex flex-col gap-1">
                        {group.cities.map((city) => (
                          <li key={city} className="font-serif text-[1.3rem] leading-tight text-navy italic">
                            {city}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              }
              backFooter="Tier 2 cities · First stage"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

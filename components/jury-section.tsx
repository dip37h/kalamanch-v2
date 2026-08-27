import { jury } from '@/lib/content'
import { JuryCard } from '@/components/jury-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function JurySection() {
  return (
    <section id="jury" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="The Jury"
          title="The jury"
          intro="A panel of people with expertise across art, culture and artistic practice, helping guide the Kalamanch ecosystem."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {jury.map((member, index) => (
            <Reveal key={`${member.expertise}-${index}`} delay={index * 90}>
              <JuryCard member={member} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 border-t border-border pt-8">
          <p className="max-w-[62ch] text-[0.85rem] leading-relaxed text-muted-foreground">
            Additional members of the jury will be published here as they are confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

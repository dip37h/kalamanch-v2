import { jury } from '@/lib/content'
import { JuryCard } from '@/components/jury-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function JurySection() {
  return (
    <section id="jury" className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="Advisory Committee"
          title="The People Who Shape Us"
          intro="A group of people with expertise across art, culture and artistic practice, helping guide the Kala Manch ecosystem."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {jury.map((member, index) => (
            <Reveal key={`${member.expertise}-${index}`} delay={index * 90} className="h-full">
              <JuryCard member={member} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 border-t border-ink/15 pt-8">
          <p className="max-w-[62ch] text-[0.88rem] leading-relaxed text-muted-foreground">
            Additional members of the advisory committee will be published here as they are confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

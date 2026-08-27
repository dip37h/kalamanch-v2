import Image from 'next/image'
import type { JuryMember } from '@/lib/content'

export function JuryCard({ member }: { member: JuryMember }) {
  return (
    <article className="group flex flex-col bg-background">
      <div className="relative aspect-3/4 overflow-hidden grain">
        <Image
          src={member.image || '/placeholder.svg'}
          alt={member.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        {member.isPlaceholder ? (
          <p className="absolute top-0 left-0 bg-ink/75 px-3 py-2 text-[0.55rem] font-medium tracking-[0.18em] text-bone/85 uppercase backdrop-blur-xs">
            Portrait placeholder
          </p>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5 pb-6">
        <h3 className="km-display text-[1.3rem] text-ink">{member.name}</h3>
        <p className="mt-2 text-[0.65rem] font-semibold tracking-[0.16em] text-ochre uppercase">
          {member.expertise}
        </p>
        <p className="mt-3 text-[0.85rem] text-muted-foreground">{member.designation}</p>
        <p className="mt-3 max-w-[32ch] text-[0.85rem] leading-relaxed text-muted-foreground md:mt-0 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-[max-height,opacity,margin] md:duration-500 md:ease-editorial md:group-hover:mt-3 md:group-hover:max-h-32 md:group-hover:opacity-100 md:group-focus-within:mt-3 md:group-focus-within:max-h-32 md:group-focus-within:opacity-100">
          {member.bio}
        </p>
      </div>
    </article>
  )
}

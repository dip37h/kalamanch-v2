import Image from 'next/image'
import type { JuryMember } from '@/lib/content'
import { asset } from '@/lib/asset'
import { toneBar, toneSurface } from '@/lib/tones'
import { cn } from '@/lib/utils'

export function JuryCard({ member }: { member: JuryMember }) {
  return (
    <article className="group flex h-full flex-col bg-card shadow-[0_1px_0_rgba(45,41,41,0.06)] transition-shadow duration-500 hover:shadow-[0_18px_40px_-20px_rgba(24,37,103,0.35)]">
      <div className="relative aspect-3/4 overflow-hidden grain">
        <Image
          src={member.image ? asset(member.image) : asset('/placeholder.svg')}
          alt={member.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        {member.isPlaceholder ? (
          <p className="absolute top-0 left-0 bg-navy/80 px-3 py-2 text-[0.55rem] font-medium tracking-[0.18em] text-white/85 uppercase backdrop-blur-xs">
            Portrait placeholder
          </p>
        ) : null}
        <p
          className={cn(
            'absolute bottom-0 left-0 px-3 py-2 text-[0.6rem] font-semibold tracking-[0.16em] uppercase',
            toneSurface[member.tone],
          )}
        >
          {member.expertise}
        </p>
      </div>
      <span aria-hidden="true" className={cn('h-1 w-full', toneBar[member.tone])} />

      <div className="flex flex-1 flex-col px-5 pt-5 pb-6">
        <h3 className="km-display text-[1.3rem] text-navy">{member.name}</h3>
        <p className="mt-1.5 text-[0.85rem] text-muted-foreground">{member.designation}</p>
        <p className="mt-3 max-w-[32ch] text-[0.85rem] leading-relaxed text-muted-foreground md:mt-0 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-[max-height,opacity,margin] md:duration-500 md:ease-editorial md:group-hover:mt-3 md:group-hover:max-h-32 md:group-hover:opacity-100 md:group-focus-within:mt-3 md:group-focus-within:max-h-32 md:group-focus-within:opacity-100">
          {member.bio}
        </p>
      </div>
    </article>
  )
}

import Image from 'next/image'
import { asset } from '@/lib/asset'
import { navItems } from '@/lib/content'
import { ColourStrip, StarMotif } from '@/components/motifs'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <ColourStrip className="h-1.5" />
      <StarMotif
        strokeWidth={0.5}
        className="pointer-events-none absolute -right-32 -bottom-32 size-[28rem] text-white/[0.07]"
      />

      <div className="relative mx-auto max-w-[1340px] px-5 pt-16 pb-10 sm:px-8 sm:pt-20 lg:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Kala Manch, back to top">
              <span className="relative size-14 shrink-0 rounded-sm bg-canvas p-1">
                <Image
                  src={asset('/kalamanch-logo.png')}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain object-top p-1"
                />
              </span>
              <span className="km-display text-[1.2rem] tracking-[0.16em] uppercase">Kala Manch</span>
            </a>
            <p className="mt-6 max-w-[34ch] text-[0.92rem] leading-relaxed text-white/75">
              A flagship cultural platform of the{' '}
              <span className="text-yellow">Monica Sarin Foundation</span>, giving art a stage and
              artists an opportunity.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-yellow">Explore</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[0.92rem] text-white/80 transition-colors hover:text-yellow"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-yellow">Connect</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.92rem] text-white/60">
              <li>Instagram: to be added</li>
              <li>LinkedIn: to be added</li>
              <li>YouTube: to be added</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-yellow">Contact</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.92rem] text-white/60">
              <li>Email: to be added</li>
              <li>Address: to be added</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-7 text-[0.78rem] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kala Manch, an initiative of the Monica Sarin Foundation.</p>
          <p className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-sm bg-white text-[0.6rem] font-bold tracking-[0.08em] text-blue">
              MSF
            </span>
            <span className="tracking-[0.14em] uppercase">Monica Sarin Foundation</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

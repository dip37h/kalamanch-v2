import Image from 'next/image'

const explore = [
  { label: 'Vision', href: '#vision' },
  { label: 'Jury', href: '#jury' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Collaborate', href: '#join' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-16 pb-10 text-bone sm:pt-20">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Kalamanch, back to top">
              <span className="relative size-10 shrink-0">
                <Image
                  src="/kalamanch-logo.png"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </span>
              <span className="km-display text-[1.15rem] tracking-[0.16em] uppercase">
                Kalamanch
              </span>
            </a>
            <p className="mt-6 max-w-[34ch] text-[0.9rem] leading-relaxed text-bone/60">
              A flagship cultural platform of the{' '}
              <span className="text-bone">Monica Sarin Foundation</span>, giving art a stage and
              artists an opportunity.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-bone/45">Explore</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[0.9rem] text-bone/70 transition-colors hover:text-ochre"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-bone/45">Connect</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.9rem] text-bone/45">
              <li>Instagram: to be added</li>
              <li>LinkedIn: to be added</li>
              <li>YouTube: to be added</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-bone/45">Contact</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[0.9rem] text-bone/45">
              <li>Email: to be added</li>
              <li>Address: to be added</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-bone/15 pt-7 text-[0.75rem] text-bone/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kalamanch, an initiative of the Monica Sarin Foundation.</p>
          <p className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center border border-bone/25 text-[0.6rem] font-semibold tracking-[0.1em] text-bone/70">
              MSF
            </span>
            <span className="tracking-[0.14em] uppercase">Monica Sarin Foundation</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

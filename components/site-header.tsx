'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { navItems } from '@/lib/content'
import { cn } from '@/lib/utils'
import { CtaArrow } from '@/components/cta-arrow'

export function SiteHeader() {
  const [compact, setCompact] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-200 focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-bone"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-100 border-b transition-[padding,background,border-color] duration-500 ease-editorial',
          compact
            ? 'border-ink/12 bg-bone/92 backdrop-blur-md'
            : 'border-transparent bg-transparent',
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-[1340px] items-center justify-between px-5 transition-all duration-500 ease-editorial sm:px-8 lg:px-14',
            compact ? 'py-3' : 'py-5',
          )}
        >
          <a href="#top" className="group flex items-center gap-3" aria-label="Kalamanch, home">
            <span
              className={cn(
                'relative shrink-0 transition-all duration-500 ease-editorial',
                compact ? 'size-8' : 'size-10',
              )}
            >
              <Image
                src="/kalamanch-logo.png"
                alt=""
                fill
                sizes="48px"
                priority
                className="object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  'km-display text-[1.05rem] tracking-[0.16em] uppercase transition-colors duration-500',
                  compact ? 'text-ink' : 'text-bone',
                )}
              >
                Kalamanch
              </span>
              <span
                className={cn(
                  'mt-1 text-[0.55rem] font-medium tracking-[0.2em] uppercase transition-colors duration-500',
                  compact ? 'text-muted-foreground' : 'text-bone/60',
                )}
              >
                Monica Sarin Foundation
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'relative py-1 text-[0.83rem] font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-ochre after:transition-transform after:duration-300 hover:after:scale-x-100',
                  compact
                    ? 'text-muted-foreground hover:text-ink focus-visible:text-ink'
                    : 'text-bone/70 hover:text-bone focus-visible:text-bone',
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className={cn(
                'group inline-flex items-center gap-2 px-5 py-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-colors',
                compact
                  ? 'bg-ink text-bone hover:bg-indigo'
                  : 'border border-bone/35 text-bone hover:bg-bone hover:text-ink',
              )}
            >
              Join the Manch
              <CtaArrow />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex size-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <span aria-hidden="true" className="flex flex-col gap-[6px]">
              <span className={cn('block h-px w-6', compact ? 'bg-ink' : 'bg-bone')} />
              <span className={cn('block h-px w-6', compact ? 'bg-ink' : 'bg-bone')} />
              <span className={cn('block h-px w-4', compact ? 'bg-ink' : 'bg-bone')} />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className={cn(
          'fixed inset-0 z-200 flex flex-col bg-ink px-6 pt-6 pb-10 text-bone lg:hidden',
        )}
      >
        <div className="flex items-center justify-between">
          <span className="km-display text-[0.95rem] tracking-[0.18em] uppercase">Kalamanch</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex size-11 items-center justify-center text-2xl"
          >
            <span className="sr-only">Close menu</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-auto mb-auto flex flex-col gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="km-display flex items-baseline gap-4 border-b border-bone/10 py-4 text-[clamp(1.9rem,9vw,2.8rem)] text-bone"
            >
              <span className="font-sans text-[0.6rem] tracking-[0.2em] text-ochre">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#join"
          onClick={() => setMenuOpen(false)}
          className="group inline-flex items-center justify-center gap-2 bg-ochre px-6 py-4 text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase"
        >
          Join the Manch <CtaArrow />
        </a>
      </div>
    </>
  )
}

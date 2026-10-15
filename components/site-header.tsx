'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { navItems, type NavItem } from '@/lib/content'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'
import { CtaArrow } from '@/components/cta-arrow'
import { ColourStrip, StarMotif } from '@/components/motifs'

export function SiteHeader() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48)
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
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-200 focus-visible:bg-navy focus-visible:px-4 focus-visible:py-2 focus-visible:text-white"
      >
        Skip to content
      </a>

      <header
        data-solid={solid}
        className={cn(
          'group/header fixed inset-x-0 top-0 z-100 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-editorial',
          solid
            ? 'bg-canvas/95 shadow-[0_1px_0_rgba(45,41,41,0.08),0_8px_24px_-12px_rgba(24,37,103,0.18)] backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <div
          className={cn(
            'transition-opacity duration-500',
            solid ? 'opacity-100' : 'opacity-0',
          )}
        >
          <ColourStrip />
        </div>
        <div
          className={cn(
            'mx-auto flex max-w-[1340px] items-center justify-between px-5 transition-[padding] duration-500 ease-editorial sm:px-8 lg:px-14',
            solid ? 'py-2' : 'py-4',
          )}
        >
          <a href="#top" className="flex items-center gap-3" aria-label="Kala Manch, home">
            <span
              className={cn(
                'relative shrink-0 transition-all duration-500 ease-editorial',
                solid ? 'size-11' : 'size-14',
              )}
            >
              <Image
                src={asset('/kalamanch-mark.png')}
                alt=""
                fill
                sizes="56px"
                priority
                className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  'km-display text-[1.35rem] tracking-[0.14em] uppercase transition-colors duration-500',
                  solid ? 'text-navy' : 'text-white',
                )}
              >
                Kala Manch
              </span>
              <span
                className={cn(
                  'mt-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-500',
                  solid ? 'text-muted-foreground' : 'text-white/70',
                )}
              >
                Monica Sarin Foundation
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} solid={solid} />
              ) : (
                <a key={item.label} href={item.href} className={navLinkClass(solid)}>
                  {item.label}
                </a>
              ),
            )}
            <a
              href="#join"
              className={cn(
                'group inline-flex items-center gap-2 rounded-sm px-5 py-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-colors',
                solid
                  ? 'bg-blue text-white hover:bg-navy'
                  : 'bg-yellow text-navy hover:bg-white',
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
            <span aria-hidden="true" className="flex flex-col items-end gap-[6px]">
              <span className={cn('block h-0.5 w-6', solid ? 'bg-navy' : 'bg-white')} />
              <span className={cn('block h-0.5 w-6', solid ? 'bg-navy' : 'bg-white')} />
              <span className="block h-0.5 w-4 bg-orange" />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

function navLinkClass(solid: boolean) {
  return cn(
    'relative py-1 text-[0.83rem] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-orange after:transition-transform after:duration-300 hover:after:scale-x-100',
    solid ? 'text-ink/75 hover:text-blue focus-visible:text-blue' : 'text-white/90 hover:text-white',
  )
}

function NavDropdown({ item, solid }: { item: NavItem; solid: boolean }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={cn(navLinkClass(solid), 'inline-flex items-center gap-1')}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn('size-3.5 transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      <div
        className={cn(
          'absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-editorial',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
        )}
      >
        <ul className="min-w-52 overflow-hidden rounded-sm bg-canvas p-2 shadow-[0_18px_40px_-16px_rgba(24,37,103,0.35)] ring-1 ring-navy/10">
          {item.children?.map((child, index) => (
            <li key={child.label}>
              <a
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-sm px-4 py-3 text-[0.85rem] font-medium text-ink/80 transition-colors hover:bg-navy/5 hover:text-blue"
              >
                <span className="font-mono text-[0.65rem] text-orange">
                  {`4.${index + 1}`}
                </span>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className="fixed inset-0 z-200 flex flex-col overflow-y-auto bg-blue px-6 pt-6 pb-10 text-white lg:hidden"
    >
      <StarMotif
        strokeWidth={0.6}
        className="pointer-events-none absolute -right-24 -bottom-24 size-96 text-white/10"
      />
      <div className="relative flex items-center justify-between">
        <span className="km-display text-[1rem] tracking-[0.18em] uppercase">Kala Manch</span>
        <button type="button" onClick={onClose} className="flex size-11 items-center justify-center">
          <span className="sr-only">Close menu</span>
          <X aria-hidden="true" className="size-6" />
        </button>
      </div>

      <nav aria-label="Mobile" className="relative my-auto flex flex-col gap-1 py-8">
        {navItems.map((item, index) => (
          <div key={item.label} className="border-b border-white/15 py-4">
            <a
              href={item.href}
              onClick={onClose}
              className="km-display flex items-baseline gap-4 text-[clamp(1.8rem,8vw,2.6rem)]"
            >
              <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-yellow">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
            {item.children && (
              <ul className="mt-3 flex flex-col gap-2 pl-9">
                {item.children.map((child, childIndex) => (
                  <li key={child.label}>
                    <a
                      href={child.href}
                      onClick={onClose}
                      className="flex items-baseline gap-3 text-[1.05rem] text-white/85"
                    >
                      <span className="font-mono text-[0.65rem] text-yellow/80">
                        {`${index + 1}.${childIndex + 1}`}
                      </span>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <a
        href="#join"
        onClick={onClose}
        className="group relative inline-flex items-center justify-center gap-2 rounded-sm bg-yellow px-6 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-navy uppercase"
      >
        Join the Manch <CtaArrow />
      </a>
    </div>
  )
}

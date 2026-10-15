import Image from 'next/image'
import { asset } from '@/lib/asset'
import { whatsappMessage, whatsappNumber } from '@/lib/content'

export function WhatsAppCta() {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kala Manch on WhatsApp (opens in a new tab)"
      className="group fixed right-4 bottom-4 z-90 flex items-center gap-3 rounded-full bg-navy py-2 pr-2 pl-2 text-white shadow-[0_18px_40px_-14px_rgba(24,37,103,0.6)] ring-1 ring-white/10 transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:pr-5 sm:right-6 sm:bottom-6"
    >
      <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-canvas ring-2 ring-yellow">
        <Image
          src={asset('/kalamanch-mark.png')}
          alt=""
          width={36}
          height={36}
          className="size-8 object-contain"
        />
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -bottom-0.5 flex size-5 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-navy"
        >
          <WhatsAppGlyph />
        </span>
      </span>

      <span className="hidden flex-col pr-3 leading-tight sm:flex">
        <span className="font-serif text-[0.98rem] italic">Talk to the Manch</span>
        <span className="mt-0.5 flex items-center gap-1.5 font-mono text-[0.58rem] tracking-[0.14em] text-white/65 uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-[#25D366]" />
          On WhatsApp
        </span>
      </span>
    </a>
  )
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-3 fill-white" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.43-9.43a9.37 9.37 0 0 1 9.42 9.44c0 5.2-4.23 9.42-9.43 9.42zm8.02-17.45A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.6l6-1.57a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8.01z" />
    </svg>
  )
}

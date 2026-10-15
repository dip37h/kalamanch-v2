import type { Tone } from '@/lib/content'

/** Static class maps so Tailwind can see every class. Text colours are contrast-checked per surface. */
export const toneSurface: Record<Tone, string> = {
  blue: 'bg-blue text-white',
  orange: 'bg-orange text-ink',
  purple: 'bg-purple text-white',
  green: 'bg-green text-ink',
  yellow: 'bg-yellow text-navy',
  peach: 'bg-peach text-ink',
}

export const toneBar: Record<Tone, string> = {
  blue: 'bg-blue',
  orange: 'bg-orange',
  purple: 'bg-purple',
  green: 'bg-green',
  yellow: 'bg-yellow',
  peach: 'bg-peach',
}

/** Readable text colour on light backgrounds. */
export const toneText: Record<Tone, string> = {
  blue: 'text-blue',
  orange: 'text-marigold-deep',
  purple: 'text-purple',
  green: 'text-green-deep',
  yellow: 'text-marigold-deep',
  peach: 'text-marigold-deep',
}

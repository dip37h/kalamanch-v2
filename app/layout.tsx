import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, Jaini, JetBrains_Mono, Yatra_One } from 'next/font/google'
import { asset } from '@/lib/asset'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['SOFT', 'WONK'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

const yatra = Yatra_One({
  subsets: ['devanagari'],
  weight: '400',
  display: 'swap',
  variable: '--font-yatra',
})

const jaini = Jaini({
  subsets: ['devanagari'],
  weight: '400',
  display: 'swap',
  variable: '--font-jaini',
})

const siteUrl = 'https://kalamanch.example'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kala Manch — Where Art Finds a Stage',
    template: '%s | Kala Manch',
  },
  description:
    'Kala Manch is a flagship cultural platform of the Monica Sarin Foundation, giving artists a stage through curated programmes and guidance from an advisory committee of cultural practitioners.',
  applicationName: 'Kala Manch',
  keywords: [
    'Kala Manch',
    'Monica Sarin Foundation',
    'Indian art platform',
    'visual art',
    'performing arts',
    'artist opportunities',
    'advisory committee',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Kala Manch',
    title: 'Kala Manch — Where Art Finds a Stage',
    description:
      'A cultural platform for visual art, performing arts, heritage and global cultural exchange. A flagship initiative of the Monica Sarin Foundation.',
    images: [{ url: '/images/hero-stage.png', width: 1200, height: 630, alt: 'Kala Manch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kala Manch — Where Art Finds a Stage',
    description:
      'A cultural platform for visual art, performing arts, heritage and global cultural exchange.',
    images: ['/images/hero-stage.png'],
  },
  generator: 'Dipesh Mishra',
  icons: {
    icon: asset('/kalamanch-logo.png'),
    apple: asset('/kalamanch-logo.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf8f2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable} ${yatra.variable} ${jaini.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

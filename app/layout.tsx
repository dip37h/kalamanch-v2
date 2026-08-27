import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
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

const siteUrl = 'https://kalamanch.example'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kalamanch — Where Art Finds a Stage',
    template: '%s | Kalamanch',
  },
  description:
    'Kalamanch is a flagship cultural platform of the Monica Sarin Foundation, giving artists a stage through curated programmes and a jury of cultural practitioners.',
  applicationName: 'Kalamanch',
  keywords: [
    'Kalamanch',
    'Monica Sarin Foundation',
    'Indian art platform',
    'visual art',
    'performing arts',
    'artist opportunities',
    'cultural jury',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Kalamanch',
    title: 'Kalamanch — Where Art Finds a Stage',
    description:
      'A cultural platform for visual art, performing arts, heritage and global cultural exchange. A flagship initiative of the Monica Sarin Foundation.',
    images: [{ url: '/images/hero-stage.png', width: 1200, height: 630, alt: 'Kalamanch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalamanch — Where Art Finds a Stage',
    description:
      'A cultural platform for visual art, performing arts, heritage and global cultural exchange.',
    images: ['/images/hero-stage.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#efe8d9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

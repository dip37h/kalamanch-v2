import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { VisionSection } from '@/components/vision-section'
import { JurySection } from '@/components/jury-section'
import { ProgrammesSection } from '@/components/programmes-section'
import { JoinSection } from '@/components/join-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <VisionSection />
        <JurySection />
        <ProgrammesSection />
        <JoinSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Kalamanch',
            description:
              'A flagship cultural platform of the Monica Sarin Foundation for visual art, performing arts, heritage and global cultural exchange.',
            parentOrganization: {
              '@type': 'Organization',
              name: 'Monica Sarin Foundation',
            },
          }),
        }}
      />
    </>
  )
}

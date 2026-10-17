import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { VisionSection } from '@/components/vision-section'
import { JurySection } from '@/components/jury-section'
import { EventsSection } from '@/components/events-section'
import { LandscapesSection } from '@/components/landscapes-section'
import { JoinSection } from '@/components/join-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppCta } from '@/components/whatsapp-cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <VisionSection />
        {/* Temporarily hidden; retain for future use.
<JurySection />
*/}
        <EventsSection />
        <LandscapesSection />
        <JoinSection />
      </main>
      <SiteFooter />
      <WhatsAppCta />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Kala Manch',
            description:
              'An approach to building India’s platform for discovering, nurturing and celebrating artists. A flagship initiative of the Monica Sarin Foundation.',
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

import { CtaSection } from '@/components/cta-section'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Results } from '@/components/results'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Results />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

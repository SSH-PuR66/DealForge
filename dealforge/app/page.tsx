import { CtaSection } from '@/components/cta-section'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Results } from '@/components/results'

export default function Page() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Results />
      <CtaSection />
    </main>
  )
}

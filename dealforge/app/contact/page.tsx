import { LeadForm } from '@/components/lead-form'
import { SITE } from '@/lib/site-config'

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Book your Dealforge launch
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us your lead flow and sales process. We will map your AI
            follow-up funnel and send a rollout plan.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Lead-response automation in under 60 seconds.</li>
            <li>• Qualification logic based on your ICP and deal size.</li>
            <li>• Calendar booking handoff for sales reps.</li>
          </ul>
        </section>
        <LeadForm actionUrl={SITE.formActionUrl} contactEmail={SITE.contactEmail} />
      </div>
    </main>
  )
}


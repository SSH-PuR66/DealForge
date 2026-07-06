import { Bot, CalendarCheck, MessagesSquare, Target } from 'lucide-react'

const steps = [
  {
    icon: Target,
    title: 'Qualify every lead',
    description:
      'Agents engage inbound leads instantly, score intent, and route hot prospects to your team in real time.',
  },
  {
    icon: MessagesSquare,
    title: 'Follow up relentlessly',
    description:
      'Personalized follow-ups across email and chat within 60 seconds — no lead ever goes cold again.',
  },
  {
    icon: CalendarCheck,
    title: 'Book meetings 24/7',
    description:
      'Agents handle objections, answer product questions, and put qualified buyers straight on your calendar.',
  },
  {
    icon: Bot,
    title: 'Learn and improve',
    description:
      'Every conversation trains your agents on what converts, compounding your close rate over time.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
            Your pipeline, on autopilot.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/15">
                <step.icon className="size-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

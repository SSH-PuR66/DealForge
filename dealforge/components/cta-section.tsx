import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center md:px-6 md:py-32">
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground text-balance md:text-6xl">
          Stop losing deals to slow follow-up.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Deploy your first AI sales agent in minutes. No credit card required
          — just more meetings on your calendar.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            render={<Link href="#" />}
            nativeButton={false}
            size="lg"
            className="h-12 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
          >
            Start closing free
          </Button>
          <Button
            render={<Link href="#" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="h-12 border-border bg-transparent px-8 text-base text-foreground hover:bg-secondary"
          >
            Talk to sales
          </Button>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Free 14-day trial &middot; Setup in under 10 minutes
        </p>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustedBy = ['Northwind', 'Acmeline', 'Vantage', 'Brightpath', 'Kelora']

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden">
      {/* Glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[140px]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pt-20 pb-16 md:px-6 md:pt-28 md:pb-24">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-7xl">
            AI agents that close deals while you sleep.
          </h1>
          <p className="max-w-sm text-lg leading-relaxed text-muted-foreground text-pretty lg:text-right">
            Dealforge deploys AI sales agents that qualify leads, follow up in
            seconds, and book meetings 24/7.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            render={<Link href="#cta" />}
            nativeButton={false}
            size="lg"
            className="h-12 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
          >
            Start closing free
          </Button>
          <Button
            render={<Link href="#how-it-works" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="h-12 border-border bg-transparent px-8 text-base text-foreground hover:bg-secondary"
          >
            See it in action
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by revenue teams at
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <li
                key={name}
                className="text-lg font-semibold tracking-tight text-muted-foreground"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

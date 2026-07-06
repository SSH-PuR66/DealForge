const stats = [
  { value: '3.2x', label: 'More qualified meetings booked' },
  { value: '<60s', label: 'Average lead response time' },
  { value: '41%', label: 'Higher lead-to-close conversion' },
]

export function Results() {
  return (
    <section id="results" className="border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 md:px-6 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 border-l-2 border-primary pl-6"
            >
              <span className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                {stat.value}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <figure className="flex max-w-3xl flex-col gap-4">
          <blockquote className="text-xl leading-relaxed text-foreground text-pretty md:text-2xl">
            &ldquo;Dealforge&apos;s agents replied to leads we used to lose
            overnight. Within a month, our booked demos tripled and our reps
            only talk to buyers who are ready.&rdquo;
          </blockquote>
          <figcaption className="text-sm text-muted-foreground">
            Maya Chen — VP of Sales, Brightpath
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

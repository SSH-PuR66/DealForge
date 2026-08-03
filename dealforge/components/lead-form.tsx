'use client'

import { track } from '@vercel/analytics'

type LeadFormProps = {
  actionUrl: string
  contactEmail: string
}

export function LeadForm({ actionUrl, contactEmail }: LeadFormProps) {
  return (
    <form
      action={actionUrl}
      method="POST"
      className="grid gap-4 rounded-2xl border border-border bg-card p-6"
      onSubmit={() => track('lead_form_submit', { actionUrl })}
    >
      <input type="hidden" name="_subject" value="New Dealforge lead" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm text-muted-foreground">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          className="h-11 rounded-lg border border-input bg-background px-3"
          placeholder="Jane Smith"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-muted-foreground">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 rounded-lg border border-input bg-background px-3"
          placeholder="jane@company.com"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="company" className="text-sm text-muted-foreground">
          Company
        </label>
        <input
          id="company"
          name="company"
          className="h-11 rounded-lg border border-input bg-background px-3"
          placeholder="Acme Inc."
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="volume" className="text-sm text-muted-foreground">
          Monthly inbound leads
        </label>
        <input
          id="volume"
          name="lead_volume"
          className="h-11 rounded-lg border border-input bg-background px-3"
          placeholder="100"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm text-muted-foreground">
          What do you need automated?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="rounded-lg border border-input bg-background px-3 py-2"
          placeholder="Lead qualification, first response, and appointment booking."
        />
      </div>

      <button
        type="submit"
        className="h-11 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Request a demo
      </button>

      <p className="text-xs text-muted-foreground">
        Submissions are sent to {contactEmail}. Replace the form endpoint later
        with your CRM or Formspree URL.
      </p>
    </form>
  )
}


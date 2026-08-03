import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TrackedLink } from '@/components/tracked-link'
import { SITE } from '@/lib/site-config'

const navLinks = [
  { label: 'Product', href: '/#product' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Results', href: '/#results' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          dealforge
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={SITE.calendlyUrl}
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
            target={SITE.calendlyUrl.startsWith('http') ? '_blank' : undefined}
            rel={
              SITE.calendlyUrl.startsWith('http')
                ? 'noopener noreferrer'
                : undefined
            }
          >
            Book demo
          </Link>
          <Button
            render={
              <TrackedLink href={SITE.checkoutUrl} eventName="header_start_free" />
            }
            nativeButton={false}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start free
          </Button>
        </div>
      </div>
    </header>
  )
}

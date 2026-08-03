import Link from 'next/link'
import { SITE } from '@/lib/site-config'

const footerLinks = [
  { label: 'Product', href: '/#product' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Results', href: '/#results' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <span className="text-lg font-bold tracking-tight text-foreground">
          dealforge
        </span>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-right text-sm text-muted-foreground">
          <p>&copy; 2026 Dealforge Inc.</p>
          <p>
            <Link
              href={`mailto:${SITE.contactEmail}`}
              className="transition-colors hover:text-foreground"
            >
              {SITE.contactEmail}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'
import type { ReactNode } from 'react'

type TrackedLinkProps = {
  href: string
  children: ReactNode
  eventName: string
  className?: string
  target?: '_blank' | '_self'
  rel?: string
}

export function TrackedLink({
  href,
  children,
  eventName,
  className,
  target,
  rel,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => track(eventName, { href })}
    >
      {children}
    </Link>
  )
}

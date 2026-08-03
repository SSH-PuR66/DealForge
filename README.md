# DealForge

DealForge is a web project for creating and presenting offers with a modern UI.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:
   - `npm install` or `pnpm install`
2. Start development server:
   - `npm run dev` or `pnpm dev`
3. Open `http://localhost:3000`

## Production setup (lead generation)

1. Copy env template in `dealforge/.env.example` to `dealforge/.env.local`
2. Fill in:
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_CHECKOUT_URL`
   - `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree or CRM endpoint)

## Static export

From `dealforge/dealforge`:

1. `npm run build`
2. Deploy the generated `out` folder to Cloudflare Pages:
   - `npx wrangler pages deploy out --project-name dealforge`

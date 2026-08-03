const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'hello@dealforge.ai'
const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || '/contact'
const checkoutUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || '/contact'
const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim()
const formActionUrl =
  formEndpoint && formEndpoint.length > 0
    ? formEndpoint
    : `https://formsubmit.co/${encodeURIComponent(contactEmail)}`

export const SITE = {
  contactEmail,
  calendlyUrl,
  checkoutUrl,
  formActionUrl,
}


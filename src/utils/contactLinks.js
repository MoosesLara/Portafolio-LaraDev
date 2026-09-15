import { profile } from '../data/config'

export function getWhatsAppLink(message) {
  const base = `https://wa.me/${profile.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function getMailtoLink(subject, body) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  return `mailto:${profile.email}${query ? `?${query}` : ''}`
}

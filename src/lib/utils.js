// Format currency to Rupiah
export function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

// Format date to Indonesian locale
export function formatDate(date) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

// Truncate text
export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

// Generate slug from string
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

// Get WhatsApp link
export function getWhatsAppLink(message = '') {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || '6281234567890'
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ''}`
}

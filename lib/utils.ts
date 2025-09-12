import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format phone number - handles variable digit counts
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters except + at the start
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // Handle different phone number lengths
  if (cleaned.startsWith('+')) {
    // International format: +XX XXX XXX XXX
    const countryCode = cleaned.slice(0, 3)
    const number = cleaned.slice(3)
    if (number.length >= 6) {
      return `${countryCode} ${number.slice(0, 3)} ${number.slice(3, 6)}${number.length > 6 ? ' ' + number.slice(6) : ''}`
    }
    return cleaned
  } else if (cleaned.length === 9) {
    // Portuguese format: XXX XXX XXX
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
  } else if (cleaned.length >= 7) {
    // Generic format: XXX XXX XXXX
    return cleaned.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')
  }
  
  return cleaned
}

// Format currency
export function formatCurrency(amount: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency
  }).format(amount)
}

// Format date
export function formatDate(date: string | Date, locale = 'pt-PT'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Format time
export function formatTime(time: string, locale = 'pt-PT'): string {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(`2000-01-01T${time}`))
}

// Generate slug
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Check if element is in viewport
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Get random item from array
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// Shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone - supports international formats
export function isValidPhone(phone: string): boolean {
  // Remove all non-digit characters except + at the start
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // Basic validation: starts with + (optional), followed by 7-15 digits
  // More comprehensive regex for international phone numbers (allows 0 after country code)
  const phoneRegex = /^(\+?\d{7,15})$/
  
  return phoneRegex.test(cleaned)
}

// Get initials
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

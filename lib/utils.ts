import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Phone number formatting
export function formatPhoneNumber(phone: string, countryCode = '+351'): string {
  // Remove all non-digit characters except + at the start
  const cleaned = phone.replace(/[^\d+]/g, '')

  // Handle different phone number lengths
  if (cleaned.startsWith('+')) {
    // International format: +XX XXX XXX XXX
    const countryCodeMatch = cleaned.match(/^\+(\d{1,3})/)
    if (countryCodeMatch) {
      const code = countryCodeMatch[1]
      const number = cleaned.slice(countryCodeMatch[0].length)
      if (number.length >= 6) {
        return `+${code} ${number.slice(0, 3)} ${number.slice(3, 6)}${number.length > 6 ? ' ' + number.slice(6) : ''}`
      }
    }
    return cleaned
  } else if (cleaned.length === 9 && countryCode === '+351') {
    // Portuguese format: XXX XXX XXX
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/)
    if (match) {
      return `${countryCode} ${match[1]} ${match[2]} ${match[3]}`
    }
  } else if (cleaned.length >= 7) {
    // Generic format: XXX XXX XXXX
    const match = cleaned.match(/^(\d{3})(\d{3})(\d+)$/)
    if (match) {
      return `${countryCode} ${match[1]} ${match[2]} ${match[3]}`
    }
  }
  
  return phone
}

// Currency formatting
export function formatCurrency(amount: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency,
  }).format(amount)
}

// Date formatting
export function formatDate(date: Date | string, locale = 'pt-PT'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

// Time formatting
export function formatTime(date: Date | string, locale = 'pt-PT'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj)
}

// Generate slug from text
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Check if element is in viewport
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get random item from array
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number
export function isValidPhone(phone: string, countryCode = 'PT'): boolean {
  // Remove all non-digit characters except + at the start
  const cleaned = phone.replace(/[^\d+]/g, '')

  // International format: +[country code][local number]
  // - Country code: 1-3 digits after '+' (no leading zero)
  // - Local number: 6-12 digits (varies by country, but 6+ is typical)
  // - Leading zeros are allowed in the local number (intentional), but NOT in the country code
  // Domestic format: 7-15 digits
  const intlRegex = /^\+([1-9]\d{0,2})(\d{6,12})$/ // +[1-3 digits][6-12 digits], local number may start with zero, country code cannot
  const domesticRegex = /^\d{7,15}$/

  if (cleaned.startsWith('+')) {
    return intlRegex.test(cleaned)
  } else {
    return domesticRegex.test(cleaned)
  }
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Format file size
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Generate random ID
export function generateId(length = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// Sleep function
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Check if device is mobile
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Check if device is tablet
export function isTablet(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

// Check if device is desktop
export function isDesktop(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}
// ==========================================================================
// TypeScript Types
// ==========================================================================

// Navigation
export interface NavItem {
  href: string
  label: string
  noWrap?: boolean
  external?: boolean
  icon?: string
}

// Brand
export interface Brand {
  name: string
  logo: string
  alt: string
  tagline: string
  description: string
}

// Contact
export interface Contact {
  phone: string
  email: string
  address: string
  hours: string
}

// Social Links
export interface SocialLinks {
  facebook?: string
  instagram?: string
  twitter?: string
  linkedin?: string
  youtube?: string
  tiktok?: string
}

// Service
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
  duration?: string
}

// Testimonial
export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image: string
  date?: string
}

// FAQ Item
export interface FAQItem {
  id: number
  question: string
  answer: string
  category?: string
}

// Language
export interface Language {
  code: string
  label: string
  flag: string
}

// Theme
export type Theme = 'light' | 'dark' | 'system'

// Animation
export interface AnimationConfig {
  scrollThreshold: number
  staggerDelay: number
  duration: number
}

// API Response
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form
export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  service?: string
}

// Blog Post
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  tags: string[]
  slug: string
}

// Gallery Item
export interface GalleryItem {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  category?: string
}

// Pricing Plan
export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonHref: string
}

// Team Member
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social?: SocialLinks
}

// Event
export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image?: string
  price?: number
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>

// Component Props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ClickableProps extends BaseComponentProps {
  onClick?: () => void
  disabled?: boolean
}

export interface LinkProps extends BaseComponentProps {
  href: string
  external?: boolean
  target?: string
  rel?: string
}

// API Types
export interface PaginationParams {
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: any
}

// Localization
export interface Locale {
  code: string
  name: string
  flag: string
  dir?: 'ltr' | 'rtl'
}

// Configuration
export interface AppConfig {
  theme: Theme
  language: string
  animations: boolean
  notifications: boolean
}

// Analytics
export interface AnalyticsEvent {
  name: string
  category: string
  action: string
  label?: string
  value?: number
}

// SEO
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  image?: string
  url?: string
  type?: string
}

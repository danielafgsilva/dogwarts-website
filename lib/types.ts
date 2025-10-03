// Base types
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

// Navigation types
export interface NavigationItem {
  href: string
  label: string
  noWrap?: boolean
}

// Service types
export interface Service {
  id: string
  icon: string
  title: string
  description: string
  detail: string
  price: string
  color: 'primary' | 'accent' | 'secondary' | 'chart-4'
}

// Testimonial types
export interface Testimonial {
  id: string
  text: string
  author: string
  role: string
  initials: string
  color: 'primary' | 'accent' | 'secondary'
  stars?: number
}

// Footer link types
export interface FooterLink {
  href: string
  label: string
}

export interface FooterSection {
  services: FooterLink[]
  company: FooterLink[]
}

// Contact types
export interface ContactInfo {
  phone: string
  email: string
  location: string
}

// App configuration types
export interface AppConfig {
  name: string
  tagline: string
  description: string
  url: string
  email: string
  phone: string
  location: string
  founded: string
  rating: number
  happyDogs: number
}

// Component props types
export interface NavbarProps {
  currentPage?: string
}

export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

export interface CardProps {
  className?: string
  children: React.ReactNode
  role?: string
  'aria-labelledby'?: string
}

export interface SectionProps {
  className?: string
  children: React.ReactNode
  'aria-labelledby'?: string
  role?: string
}

// Animation types
export interface AnimationConfig {
  duration: number
  delay: number
  easing: string
}

// Responsive types
export interface ResponsiveConfig {
  mobile: string
  tablet: string
  desktop: string
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  message: string
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

// API types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Breakpoint types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// Color types
export type ColorVariant = 'primary' | 'accent' | 'secondary' | 'chart-4'

// Animation delay types
export type AnimationDelay = '100' | '200' | '300' | '400' | '500'

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Event types
export interface CustomEvent<T = any> extends Event {
  detail: T
}

// Hook return types
export interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>
  isVisible: boolean
}

export interface UseNavbarReturn {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  toggleMenu: () => void
  closeMenu: () => void
}

export interface UseThemeReturn {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}
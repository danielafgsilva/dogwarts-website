// ==========================================================================
// Constants
// ==========================================================================

// TODO: Extract hard-coded strings to i18n system for internationalization
// Currently supports Portuguese (pt) and English (en) as shown in LANGUAGES constant
// Planned i18n implementation: Q2 2024. Update all user-facing strings to use i18n system.
// Priority: Navigation items, service descriptions, testimonials, FAQ content, and brand messaging.

// Navigation
export const NAV_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre Nós', noWrap: true },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contactos', label: 'Contactos' },
  { href: '/testemunhos', label: 'Testemunhos' },
] as const

// Brand
export const BRAND = {
  name: 'Dogwarts',
  logo: '/dogwarts-logo-transparent.png',
  alt: 'Dogwarts Logo',
  tagline: 'Cuidado Profissional para o Seu Melhor Amigo',
  description: 'Oferecemos serviços de qualidade para o bem-estar dos seus cães e a sua tranquilidade.'
} as const

// Contact Information
export const CONTACT = {
  phone: '+351 123 456 789',
  email: 'contacto@dogwarts.com',
  address: 'Lisboa, Portugal',
  hours: 'Segunda a Sexta: 8h00 - 18h00'
} as const

// Social Media
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/dogwarts',
  instagram: 'https://instagram.com/dogwarts',
  twitter: 'https://twitter.com/dogwarts',
  linkedin: 'https://linkedin.com/company/dogwarts'
} as const

// Services
export const SERVICES = [
  {
    id: 'passeios',
    title: 'Passeios',
    description: 'Passeios regulares e personalizados para o seu cão',
    icon: 'walking',
    features: ['Passeios individuais', 'Passeios em grupo', 'Horários flexíveis']
  },
  {
    id: 'daycare',
    title: 'Daycare',
    description: 'Cuidado diurno com atividades e socialização',
    icon: 'home',
    features: ['Atividades recreativas', 'Socialização', 'Monitorização 24/7']
  },
  {
    id: 'hospedagem',
    title: 'Hospedagem',
    description: 'Hospedagem confortável para quando estiver fora',
    icon: 'bed',
    features: ['Quartos individuais', 'Cuidado personalizado', 'Relatórios diários']
  },
  {
    id: 'treino',
    title: 'Treino',
    description: 'Sessões de treino com profissionais qualificados',
    icon: 'graduation-cap',
    features: ['Treino básico', 'Comportamento', 'Obediência']
  }
] as const

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'Lisboa',
    rating: 5,
    text: 'O Dogwarts transformou a vida do meu Max. O cuidado é excepcional e ele adora ir lá!',
    image: '/placeholder-user.jpg'
  },
  {
    id: 2,
    name: 'João Santos',
    location: 'Porto',
    rating: 5,
    text: 'Profissionais dedicados e um ambiente perfeito para os nossos amigos de quatro patas.',
    image: '/placeholder-user.jpg'
  },
  {
    id: 3,
    name: 'Ana Costa',
    location: 'Braga',
    rating: 5,
    text: 'Recomendo vivamente! O meu cão está sempre feliz e bem cuidado.',
    image: '/placeholder-user.jpg'
  }
] as const

// FAQ
export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Que serviços oferecem?',
    answer: 'Oferecemos passeios, daycare, hospedagem e treino para cães de todas as idades e raças.'
  },
  {
    id: 2,
    question: 'Como posso agendar um serviço?',
    answer: 'Pode contactar-nos por telefone, email ou através do nosso formulário online.'
  },
  {
    id: 3,
    question: 'Os cães precisam de vacinas atualizadas?',
    answer: 'Sim, todos os cães devem ter as vacinas em dia e apresentar o boletim de vacinas.'
  },
  {
    id: 4,
    question: 'Têm seguro?',
    answer: 'Sim, temos seguro de responsabilidade civil para todos os nossos serviços.'
  }
] as const

// Languages
export const LANGUAGES = [
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'en', label: 'English', flag: '🇬🇧' }
] as const

// Theme
export const THEME_CONFIG = {
  defaultTheme: 'system' as const,
  storageKey: 'dogwarts-theme',
  enableSystem: true
} as const

// Animation
export const ANIMATION_CONFIG = {
  scrollThreshold: 0.1,
  staggerDelay: 100,
  duration: 300
} as const

// API
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000
} as const

// SEO
export const SEO_CONFIG = {
  title: 'Dogwarts - Cuidado Profissional para Cães',
  description: 'Oferecemos serviços de qualidade para o bem-estar dos seus cães: passeios, daycare, hospedagem e treino.',
  keywords: ['cuidado de cães', 'passeios', 'daycare', 'hospedagem', 'treino', 'Lisboa', 'Portugal'],
  author: 'Dogwarts',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://dogwarts.vercel.app'
} as const

// Application constants
export const APP_CONFIG = {
  name: 'Dogwarts',
  tagline: 'Cães Felizes & Donos Tranquilos',
  description: 'Serviços de cuidados para cães com amor e confiança. Petsitting, dogwalking, creche e estadia familiar.',
  url: 'https://dogwarts.pt',
  email: 'info@dogwarts.pt',
  phone: '+351 XXX XXX XXX',
  location: 'Lisboa, Portugal',
  founded: 'Setembro 2023',
  rating: 5.0,
  happyDogs: 100,
} as const

export const STATISTICS = {
  happyDogs: {
    value: '100+',
    label: 'Cães Felizes',
  },
  yearsExperience: {
    value: '5+',
    label: 'Anos de Experiência',
  },
  satisfiedClients: {
    value: '200+',
    label: 'Clientes Satisfeitos',
  },
  servicesProvided: {
    value: '1000+',
    label: 'Serviços Prestados',
  },
} as const

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre Nós', noWrap: true },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contactos', label: 'Contactos' },
  { href: '/testemunhos', label: 'Testemunhos' },
] as const

export const SERVICES = [
  {
    id: 'petsitting',
    icon: 'Home',
    title: 'Petsitting',
    description: 'Cuidados ao domicílio',
    detail: 'Sessões de 1h30 no conforto da sua casa, mantendo a rotina do seu cão.',
    price: 'A partir de 15€',
    color: 'primary',
  },
  {
    id: 'dogwalking',
    icon: 'MapPin',
    title: 'Dogwalking',
    description: 'Passeios diários',
    detail: 'Passeios energizantes e socializantes adaptados às necessidades do seu cão.',
    price: 'A partir de 12€',
    color: 'accent',
  },
  {
    id: 'daycare',
    icon: 'Clock',
    title: 'Creche/Daycare',
    description: 'Cuidados diurnos',
    detail: 'Ambiente seguro e divertido para o seu cão durante o dia de trabalho.',
    price: 'A partir de 25€',
    color: 'secondary',
  },
  {
    id: 'boarding',
    icon: 'Heart',
    title: 'Estadia Familiar',
    description: 'Hospedagem completa',
    detail: 'O seu cão fica na nossa família durante as suas férias ou viagens.',
    price: 'A partir de 30€/dia',
    color: 'chart-4',
  },
] as const

export const TESTIMONIALS = [
  {
    id: 'maria-costa',
    text: 'A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos.',
    author: 'Maria Costa',
    role: 'Tutora do Max',
    initials: 'MC',
    color: 'primary',
  },
  {
    id: 'joao-silva',
    text: 'Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!',
    author: 'João Silva',
    role: 'Tutor da Luna',
    initials: 'JS',
    color: 'accent',
  },
  {
    id: 'ana-ferreira',
    text: 'Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.',
    author: 'Ana Ferreira',
    role: 'Tutora do Bobby',
    initials: 'AF',
    color: 'secondary',
  },
] as const

export const FOOTER_LINKS = {
  services: [
    { href: '/servicos', label: 'Petsitting' },
    { href: '/servicos', label: 'Dogwalking' },
    { href: '/servicos', label: 'Creche/Daycare' },
    { href: '/servicos', label: 'Estadia Familiar' },
  ],
  company: [
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/testemunhos', label: 'Testemunhos' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
  ],
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const ANIMATION_DELAYS = {
  '100': 'delay-100',
  '200': 'delay-200',
  '300': 'delay-300',
  '400': 'delay-400',
  '500': 'delay-500',
} as const
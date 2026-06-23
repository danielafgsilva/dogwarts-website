// Application constants

export const APP_CONFIG = {
  name: 'Dogwarts',
  tagline: 'Cães Felizes & Donos Tranquilos',
  description:
    'Serviços de cuidados para cães com amor e confiança. Petsitting, dogwalking, creche canina e estadia familiar em Vila Nova de Gaia.',
  url: 'https://dogwarts.pt',
  founded: 'Setembro 2023',
} as const

export const CONTACT_INFO = {
  phone: '918018726',
  phoneDisplay: '+351 918 018 726',
  phoneHours: 'Disponível das 10h às 19h',
  whatsapp: '351918018726',
  email: 'dogwarts.pt@gmail.com',
  location: 'Vila Nova de Gaia',
  googleReviewsUrl:
    'https://www.google.com/search?sa=X&sca_esv=5ded1eb12a838e6b&hl=pt-PT&sxsrf=APpeQnt8NQKY3rDvxsu9WHOnAIhu_c7JFQ:1782223073327&q=Dogwarts+%7C+Estadia+familiar+%26+Creche+canina+Cr%C3%ADticas&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDEzMjE3NrA0NjY0tjA1NTAyMtrAyPiK0dQlP708saikWKFGwbW4JDElM1EhLTE3MyczsUhBTcG5KDU5I1UhOTEvMy8RyDu8tiQzObF4ESt5-gBpGbmFiwAAAA&rldimm=14624730933138550222&tbm=lcl&ved=2ahUKEwifv8ipwp2VAxV4UqQEHYdzHBgQ9fQKegQIQRAG&biw=1259&bih=903&dpr=2#lkt=LocalPoiReviews',
} as const

export const BUSINESS_HOURS = [
  { day: 'Segunda a Sábado', time: '8h – 19h' },
  { day: 'Domingo', time: 'Encerrado' },
] as const

export const STATISTICS = {
  happyDogs: { value: '100+', label: 'Cães Felizes' },
  yearsExperience: { value: '2+', label: 'Anos de Experiência' },
  satisfaction: { value: '5.0', label: 'Avaliação Google' },
} as const

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre Nós', noWrap: true },
  { href: '/servicos', label: 'Serviços' },
  { href: '/testemunhos', label: 'Testemunhos' },
  { href: '/contactos', label: 'Contactos' },
] as const

export const SERVICES = [
  {
    id: 'petsitting',
    icon: 'Home',
    title: 'Petsitting ao Domicílio',
    desc: 'Cuidados no conforto de casa',
    detail:
      'Visitas de 1 hora à sua casa para cuidar do seu cão, manter a rotina e dar todo o carinho que merece.',
    price: '10€',
    priceNote: '+ deslocação · visita de 1h',
  },
  {
    id: 'dogwalking',
    icon: 'MapPin',
    title: 'Dogwalking',
    desc: 'Passeios energizantes',
    detail:
      'Passeios de 1 hora adaptados às necessidades do seu cão, com exercício e socialização.',
    price: '10€',
    priceNote: '+ deslocação · passeio de 1h',
  },
  {
    id: 'daycare',
    icon: 'Clock',
    title: 'Creche Canina',
    desc: 'Cuidados diurnos',
    detail:
      'Um dia completo de diversão e socialização num espaço seguro e familiar.',
    price: 'desde 15€',
    priceNote: 'por dia',
  },
  {
    id: 'boarding',
    icon: 'Heart',
    title: 'Estadia Familiar',
    desc: 'Hospedagem completa',
    detail:
      'O seu cão fica integrado na nossa família durante as suas férias ou ausências.',
    price: '20€',
    priceNote: 'por diária',
  },
] as const

export const FOOTER_LINKS = {
  services: [
    { href: '/servicos#petsitting', label: 'Petsitting' },
    { href: '/servicos#dogwalking', label: 'Dogwalking' },
    { href: '/servicos#daycare', label: 'Creche Canina' },
    { href: '/servicos#boarding', label: 'Estadia Familiar' },
  ],
  company: [
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/testemunhos', label: 'Testemunhos' },
    { href: '/contactos', label: 'Contactos' },
  ],
} as const

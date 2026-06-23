/**
 * Seeds the Sanity dataset with the canonical Dogwarts content.
 *
 * Usage:
 *   1. Set SANITY_API_TOKEN (write token) in .env
 *   2. node scripts/seed-sanity.js
 *
 * Idempotent: singleton documents use createOrReplace, so re-running simply
 * refreshes the content without creating duplicates.
 */

require('dotenv').config({ path: '.env' })
const { createClient } = require('@sanity/client')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_TOKEN

if (!projectId || !dataset) {
  console.error('❌ Faltam NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET no .env')
  process.exit(1)
}
if (!token) {
  console.error('❌ Falta SANITY_API_TOKEN (token de escrita) no .env')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-01-01',
})

// ---------------------------------------------------------------------------
// Canonical content (single source of truth for the seed)
// ---------------------------------------------------------------------------

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Dogwarts+Estadia+familiar+%26+Creche+canina+Vila+Nova+de+Gaia#lkt=LocalPoiReviews'

const SERVICES = [
  {
    _key: 'petsitting',
    title: 'Petsitting ao Domicílio',
    description: 'Cuidados no conforto de casa',
    detail:
      'Visitas de 1 hora à sua casa para cuidar do seu cão, manter a rotina e dar todo o carinho que merece.',
    price: '10€',
    priceNote: '+ deslocação · visita de 1h',
    icon: 'Home',
    features: [
      'Alimentação e hidratação',
      'Brincadeiras e exercício',
      'Carinho e atenção personalizada',
      'Relatório com fotos',
      'Cuidados básicos de higiene',
    ],
  },
  {
    _key: 'dogwalking',
    title: 'Dogwalking',
    description: 'Passeios energizantes',
    detail:
      'Passeios de 1 hora adaptados às necessidades do seu cão, com exercício e socialização.',
    price: '10€',
    priceNote: '+ deslocação · passeio de 1h',
    icon: 'MapPin',
    features: ['Passeio de 1 hora', 'Adaptado ao ritmo do cão', 'Recolha e entrega à porta'],
  },
  {
    _key: 'daycare',
    title: 'Creche Canina',
    description: 'Cuidados diurnos',
    detail:
      'Um dia completo de diversão e socialização num espaço seguro e familiar.',
    price: 'desde 15€',
    priceNote: 'por dia',
    icon: 'Clock',
    features: [
      'Socialização com outros cães',
      'Espaço seguro e supervisionado',
      'Atualizações ao longo do dia',
    ],
  },
  {
    _key: 'boarding',
    title: 'Estadia Familiar',
    description: 'Hospedagem completa',
    detail:
      'O seu cão fica integrado na nossa família durante as suas férias ou ausências.',
    price: '20€',
    priceNote: 'por diária',
    icon: 'Heart',
    features: [
      'Integração na rotina familiar',
      'Alimentação personalizada',
      'Atualizações diárias com fotos',
    ],
  },
]

const FOUNDER_STORY = [
  'O projeto da Dogwarts nasceu em setembro de 2023.',
  'Com 4 cães em casa, sabia perfeitamente quais eram as necessidades deles quando estávamos fora, quer para trabalhar, quer para nos ausentarmos em tempo de férias.',
  'E foi precisamente a pensar neles e na qualidade de vida que lhes proporciono, que decidi disponibilizar o mesmo aos vossos melhores amigos.',
  'O intuito foi criar um espaço seguro para todos os patudos e recriar o espaço e ambiente familiar que têm nas próprias casas.',
  'Com vários serviços personalizados, a Dogwarts propõe-se fazer dos vossos cães, cães ainda mais felizes e, de todos vós, donos tranquilos.',
]

const PETSITTING_INTRO =
  'Vais de férias ou simplesmente não vais estar por casa e precisas que alguém cuide do teu animal de estimação por ti? Nós temos a solução para ti — conhece os nossos serviços de Petsitting ao domicílio.'

async function seed() {
  console.log('🌱 A semear o Sanity...')

  await client.createOrReplace({
    _type: 'siteSettings',
    _id: 'siteSettings',
    siteName: 'Dogwarts',
    siteDescription:
      'Cuidados caninos personalizados em Vila Nova de Gaia. Petsitting, dogwalking, creche canina e estadia familiar.',
    contact: {
      phone: '918018726',
      phoneHours: 'Disponível das 10h às 19h',
      whatsapp: '351918018726',
      email: 'dogwarts.pt@gmail.com',
      location: 'Vila Nova de Gaia',
      googlePlaceId: '',
      googleReviewsUrl: GOOGLE_REVIEWS_URL,
    },
    businessHours: [
      { _key: 'seg-sab', day: 'Segunda a Sábado', time: '8h – 19h' },
      { _key: 'domingo', day: 'Domingo', time: 'Encerrado' },
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/dogwarts.pt/',
      facebook: 'https://www.facebook.com/dogwarts.pt',
    },
    footer: {
      description: 'Cães Felizes & Donos Tranquilos desde 2023.',
      copyright: '© 2026 Dogwarts. Todos os direitos reservados.',
      developer: 'Desenvolvido por Daniela Silva & Tiago Santos',
    },
    business: {
      founded: 2023,
      tagline: 'Cães Felizes & Donos Tranquilos',
      mission:
        'Criar um espaço seguro para todos os patudos e recriar o ambiente familiar que têm em casa.',
    },
  })
  console.log('✅ Configurações do site')

  await client.createOrReplace({
    _type: 'homePage',
    _id: 'homePage',
    hero: {
      badge: 'Bem-vindo à Dogwarts',
      title: 'Cães Felizes & Donos Tranquilos',
      description:
        'O projeto da Dogwarts nasceu em setembro de 2023. Com 4 cães em casa, sabia perfeitamente quais eram as necessidades deles quando estávamos fora.',
      intro: [
        'E foi precisamente a pensar neles e na qualidade de vida que lhes proporciono, que decidi disponibilizar o mesmo aos vossos melhores amigos.',
        'Com vários serviços personalizados, a Dogwarts propõe-se fazer dos vossos cães, cães ainda mais felizes e, de todos vós, donos tranquilos.',
      ],
      ctaPrimary: 'Conheça os nossos serviços',
      ctaSecondary: 'Contacte-nos',
    },
    services: {
      title: 'Os Nossos Serviços',
      subtitle: 'Cuidados Personalizados para Cada Patudo',
      description:
        'Vários serviços, sempre pensados no bem-estar do seu cão e na sua tranquilidade.',
      services: SERVICES.map(({ features, ...rest }) => rest),
    },
    testimonials: {
      title: 'O Que Dizem os Nossos Clientes',
      description:
        'Avaliações reais publicadas no Google por famílias que confiam nos nossos cuidados.',
    },
    cta: {
      title: 'Pronto para dar ao seu cão o melhor cuidado?',
      description:
        'Fale connosco e descubra como podemos manter o seu patudo feliz e si, mais tranquilo.',
      primaryButton: 'Ligar agora',
      secondaryButton: 'Enviar mensagem',
    },
  })
  console.log('✅ Página inicial')

  await client.createOrReplace({
    _type: 'servicesPage',
    _id: 'servicesPage',
    hero: {
      badge: 'Os Nossos Serviços',
      title: 'Cuidados personalizados para cada patudo',
      description:
        'Oferecemos uma gama completa de serviços pensados para o bem-estar do seu cão e a sua total tranquilidade.',
      petsittingIntro: PETSITTING_INTRO,
    },
    mainServices: SERVICES,
    cta: {
      title: 'Pronto para começar?',
      description:
        'Fale connosco para discutir as necessidades do seu patudo e encontrar o serviço ideal.',
      primaryButton: 'Ligar agora',
      secondaryButton: 'Conhecer-nos',
    },
  })
  console.log('✅ Página de serviços')

  await client.createOrReplace({
    _type: 'aboutPage',
    _id: 'aboutPage',
    hero: {
      badge: 'A Nossa História',
      title: 'Uma história de amor e confiança',
      description:
        'Nascemos do coração de uma tutora que compreendeu, na prática, o que significa cuidar verdadeiramente dos nossos companheiros de quatro patas.',
      familyDogsCount: 4,
    },
    founderStory: {
      badge: 'Desde Setembro de 2023',
      title: 'Como tudo começou',
      content: FOUNDER_STORY,
      quote:
        '"Cada cão tem a sua personalidade única. O nosso trabalho é conhecê-los e cuidar deles como se fossem nossos."',
      quoteAuthor: 'Fundadora da Dogwarts',
    },
    values: {
      badge: 'Os Nossos Valores',
      title: 'O que nos move todos os dias',
      description:
        'Três pilares fundamentais guiam cada cuidado que oferecemos aos nossos patudos.',
      values: [
        {
          _key: 'confianca',
          title: 'Confiança',
          description: 'A base de tudo o que fazemos',
          fullDescription:
            'Comunicação transparente e cumprimento rigoroso dos compromissos. A sua tranquilidade é a nossa prioridade.',
          icon: 'Shield',
          features: ['Atualizações regulares', 'Comunicação transparente', 'Disponibilidade no horário combinado'],
        },
        {
          _key: 'amor',
          title: 'Amor',
          description: 'Cada cão é único',
          fullDescription:
            'Cuidamos de cada patudo com a mesma atenção que damos aos nossos próprios cães.',
          icon: 'Heart',
          features: ['Cuidados individuais', 'Carinho genuíno', 'Brincadeira diária'],
        },
        {
          _key: 'familiaridade',
          title: 'Familiaridade',
          description: 'Como se estivessem em casa',
          fullDescription:
            'Recriamos a rotina e o ambiente familiar para minimizar o stress dos cães.',
          icon: 'Home',
          features: ['Ambiente seguro', 'Rotinas mantidas', 'Integração na família'],
        },
      ],
    },
    cta: {
      title: 'Quer conhecer melhor a nossa família?',
      description:
        'Fale connosco e descubra como podemos cuidar do seu patudo com todo o amor que ele merece.',
      primaryButton: 'Contactar-nos',
      secondaryButton: 'Ver serviços',
    },
  })
  console.log('✅ Página sobre nós')

  await client.createOrReplace({
    _type: 'contactPage',
    _id: 'contactPage',
    hero: {
      badge: 'Entre em Contacto',
      title: 'Vamos conversar sobre o seu patudo',
      description:
        'Estamos aqui para responder às suas questões e ajudar a encontrar o melhor cuidado para o seu cão.',
    },
    contactCards: {
      phoneCard: {
        title: 'Telefone e WhatsApp',
        description: 'Atendimento personalizado',
        phoneButton: 'Ligar agora',
        whatsappButton: 'Abrir WhatsApp',
      },
      emailCard: {
        title: 'Email',
        description: 'Envie-nos os detalhes',
        button: 'Enviar email',
        replyTime: 'Resposta em 24h úteis',
      },
    },
    contactForm: {
      title: 'Envie-nos uma mensagem',
      description:
        'Preencha o formulário e entraremos em contacto consigo o mais breve possível.',
      submitButton: 'Enviar mensagem',
      successMessage: 'Obrigado pelo seu contacto — respondemos em breve.',
    },
    locationCard: {
      title: 'Localização',
      note: 'A morada exata é partilhada apenas após o primeiro contacto.',
    },
    hoursCard: {
      title: 'Horário',
      note: 'Não disponibilizamos serviço de emergência.',
    },
    socialCard: {
      title: 'Siga-nos nas redes sociais',
    },
    cta: {
      title: 'Vamos cuidar do seu patudo?',
      description: 'Estamos a um telefonema ou mensagem de distância.',
      primaryButton: 'Ligar agora',
      secondaryButton: 'WhatsApp direto',
    },
  })
  console.log('✅ Página de contactos')

  await client.createOrReplace({
    _type: 'testimonialsPage',
    _id: 'testimonialsPage',
    hero: {
      badge: 'Avaliações Google',
      title: 'Histórias de Amor e Confiança',
      description:
        'Todas as avaliações chegam até nós através do Google. São histórias reais de famílias que partilham o seu dia-a-dia com a Dogwarts.',
    },
    cta: {
      title: 'Pronto para fazer parte da nossa família?',
      description:
        'Junte-se aos nossos clientes e dê ao seu cão o cuidado que ele merece.',
      primaryButton: 'Contactar agora',
      secondaryButton: 'Ver serviços',
    },
  })
  console.log('✅ Página de testemunhos')

  console.log('🎉 Seed concluído com sucesso!')
}

seed().catch((error) => {
  console.error('❌ Erro durante o seed:', error)
  process.exit(1)
})

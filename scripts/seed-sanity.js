// Script para popular o Sanity com dados iniciais
// Execute com: node scripts/seed-sanity.js

require('dotenv').config({ path: '.env' })
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN, // Precisa de um token com permissões de escrita
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function seedData() {
  try {
    console.log('🌱 Iniciando seed do Sanity...')

    // 0. Criar imagens de exemplo (você pode substituir por imagens reais)
    console.log('📸 Criando imagens de exemplo...')
    
    // Nota: Para usar imagens reais, você precisa fazer upload delas primeiro
    // Aqui estamos criando referências que você pode substituir depois
    const imageAssets = [
      { _id: 'image-1', _type: 'sanity.imageAsset', url: '/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg' },
      { _id: 'image-2', _type: 'sanity.imageAsset', url: '/hero-background.jpg' },
      { _id: 'image-3', _type: 'sanity.imageAsset', url: '/daycare-service.jpg' },
      { _id: 'image-4', _type: 'sanity.imageAsset', url: '/dogwalking-service.jpg' },
      { _id: 'image-5', _type: 'sanity.imageAsset', url: '/boarding-service.jpg' },
      { _id: 'image-6', _type: 'sanity.imageAsset', url: '/petsitting-service.jpg' },
      { _id: 'image-7', _type: 'sanity.imageAsset', url: '/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg' },
      { _id: 'image-8', _type: 'sanity.imageAsset', url: '/dogwalking-service.jpg' },
      { _id: 'image-9', _type: 'sanity.imageAsset', url: '/daycare-service.jpg' },
      { _id: 'image-10', _type: 'sanity.imageAsset', url: '/boarding-service.jpg' },
    ]

    // Criar assets de imagem (comentado porque requer upload real)
    // for (const asset of imageAssets) {
    //   await client.create(asset)
    // }
    console.log('✅ Referências de imagem preparadas')

    // 1. Criar configurações do site
    const siteSettings = await client.createOrReplace({
      _type: 'siteSettings',
      _id: 'siteSettings',
      siteName: 'Dogwarts',
      siteDescription: 'Cuidados caninos personalizados com amor e profissionalismo. O seu cão merece o melhor.',
      contact: {
        phone: '+351 XXX XXX XXX',
        email: 'info@dogwarts.pt',
        address: 'Lisboa, Portugal',
        city: 'Lisboa, Portugal',
      },
      socialMedia: {
        facebook: '',
        instagram: '',
        whatsapp: '+351XXXXXXXXX',
      },
      seo: {
        metaTitle: 'Dogwarts - Cuidados Caninos Personalizados',
        metaDescription: 'Cuidados caninos personalizados com amor e profissionalismo. Petsitting, dogwalking, creche e estadia familiar em Lisboa.',
        keywords: ['cuidados caninos', 'petsitting', 'dogwalking', 'creche cães', 'estadia familiar', 'Lisboa'],
      },
      footer: {
        copyright: '© 2024 Dogwarts. Todos os direitos reservados.',
        developer: 'Desenvolvido por Daniela Silva & Tiago Santos',
      },
      business: {
        founded: 2023,
        tagline: 'Cães Felizes & Donos Tranquilos',
        mission: 'Cuidados caninos personalizados com amor e profissionalismo. O seu cão merece o melhor.',
        values: ['Confiança', 'Amor', 'Familiaridade'],
      },
    })
    console.log('✅ Configurações do site criadas')

    // 2. Criar página inicial
    const homePage = await client.createOrReplace({
      _type: 'homePage',
      _id: 'homePage',
      hero: {
        badge: 'Bem-vindo',
        title: 'Cuidados Caninos com Amor e Profissionalismo',
        description: 'Oferecemos uma gama completa de serviços pensados para o bem-estar dos seus cães e a sua total tranquilidade. Cada patudo é tratado como família.',
        ctaPrimary: 'Conheça nossos serviços',
        ctaSecondary: 'Contacte-nos',
        // heroImage: {
        //   _type: 'image',
        //   asset: {
        //     _type: 'reference',
        //     _ref: 'image-1' // Referência para imagem do hero
        //   }
        // },
        // backgroundImage: {
        //   _type: 'image',
        //   asset: {
        //     _type: 'reference',
        //     _ref: 'image-2' // Referência para imagem de fundo
        //   }
        // }
      },
      services: {
        title: 'Os Nossos Serviços',
        subtitle: 'Cuidados Personalizados para Cada Patudo',
        description: 'Oferecemos uma gama completa de serviços pensados para o bem-estar dos seus cães e a sua tranquilidade.',
        services: [
          {
            _key: 'creche-daycare',
            title: 'Creche/Daycare',
            description: 'Cuidados diurnos',
            detail: 'Um dia completo de diversão, socialização e cuidados num ambiente controlado e seguro.',
            price: '25€/dia',
            icon: 'Clock',
            color: 'chart-4',
            // image: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-3' // Imagem da creche
            //   }
            // }
          },
          {
            _key: 'dogwalking',
            title: 'Dogwalking',
            description: 'Passeios energizantes',
            detail: 'Passeios adaptados às necessidades e energia do seu cão. Exploramos parques e zonas verdes.',
            price: '12€/passeio',
            icon: 'MapPin',
            color: 'accent',
            // image: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-4' // Imagem do dogwalking
            //   }
            // }
          },
          {
            _key: 'estadia-familiar',
            title: 'Estadia Familiar',
            description: 'Hospedagem completa',
            detail: 'O seu cão fica integrado na nossa família durante as suas férias ou viagens.',
            price: '30€/dia',
            icon: 'Heart',
            color: 'chart-5',
            // image: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-5' // Imagem da estadia
            //   }
            // }
          },
          {
            _key: 'petsitting',
            title: 'Petsitting',
            description: 'Cuidados ao domicílio',
            detail: 'Sessões de 1h30 onde cuidamos do seu cão no ambiente familiar que ele conhece.',
            price: '15€/sessão',
            icon: 'Home',
            color: 'primary',
            // image: {
            //   _type: 'image',
            //   asset: {
            //     _type: 'reference',
            //     _ref: 'image-6' // Imagem do petsitting
            //   }
            // }
          },
        ],
      },
      testimonials: {
        title: 'O Que Dizem os Nossos Clientes',
        description: 'Histórias reais de famílias que confiam nos nossos cuidados',
      },
      cta: {
        title: 'Pronto para Dar ao Seu Cão o Melhor Cuidado?',
        description: 'Entre em contacto connosco hoje e descubra como podemos ajudar a manter o seu patudo feliz e você tranquilo.',
        primaryButton: 'Ligar Agora',
        secondaryButton: 'Enviar Mensagem',
      },
    })
    console.log('✅ Página inicial criada')

    // 3. Criar testemunhos
    const testimonials = [
      {
        _type: 'testimonial',
        name: 'Maria Costa',
        role: 'Tutora do Max',
        text: 'A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos.',
        rating: 5,
        initials: 'MC',
        color: 'primary',
        featured: true,
        order: 1,
      },
      {
        _type: 'testimonial',
        name: 'João Silva',
        role: 'Tutor da Luna',
        text: 'Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!',
        rating: 5,
        initials: 'JS',
        color: 'accent',
        featured: true,
        order: 2,
      },
      {
        _type: 'testimonial',
        name: 'Ana Ferreira',
        role: 'Tutora do Bobby',
        text: 'Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.',
        rating: 5,
        initials: 'AF',
        color: 'chart-4',
        featured: true,
        order: 3,
      },
    ]

    for (const testimonial of testimonials) {
      await client.create(testimonial)
    }
    console.log('✅ Testemunhos criados')

    // 4. Criar FAQs
    const faqs = [
      {
        _type: 'faq',
        question: 'Como funciona o agendamento?',
        answer: [
          {
            _key: 'agendamento-block',
            _type: 'block',
            children: [
              {
                _key: 'agendamento-span',
                _type: 'span',
                text: 'O agendamento pode ser feito através do nosso formulário de contacto, telefone ou WhatsApp. Recomendamos agendar com pelo menos 24h de antecedência.',
              },
            ],
          },
        ],
        category: 'booking',
        order: 1,
        featured: true,
      },
      {
        _type: 'faq',
        question: 'Quais são os horários de funcionamento?',
        answer: [
          {
            _key: 'horarios-block',
            _type: 'block',
            children: [
              {
                _key: 'horarios-span',
                _type: 'span',
                text: 'Funcionamos de segunda a sexta das 8h às 18h para creche e passeios. Para petsitting e estadia familiar, estamos disponíveis 24h por dia, incluindo fins de semana.',
              },
            ],
          },
        ],
        category: 'general',
        order: 2,
        featured: true,
      },
      {
        _type: 'faq',
        question: 'Os cães são vacinados?',
        answer: [
          {
            _key: 'vacinacao-block',
            _type: 'block',
            children: [
              {
                _key: 'vacinacao-span',
                _type: 'span',
                text: 'Sim, exigimos que todos os cães tenham as vacinas em dia, incluindo a vacina da raiva. Pedimos o boletim de vacinas no primeiro contacto.',
              },
            ],
          },
        ],
        category: 'care',
        order: 3,
        featured: true,
      },
    ]

    for (const faq of faqs) {
      await client.create(faq)
    }
    console.log('✅ FAQs criadas')

    // 5. Criar página de serviços
    const servicesPage = await client.createOrReplace({
      _type: 'servicesPage',
      _id: 'servicesPage',
      hero: {
        badge: 'Os Nossos Serviços',
        title: 'Cuidados Personalizados para Cada Patudo',
        description: 'Oferecemos uma gama completa de serviços pensados para o bem-estar dos seus cães e a sua total tranquilidade.'
      },
      mainServices: [
        {
          _key: 'petsitting',
          title: 'Petsitting ao Domicílio',
          description: 'Cuidados personalizados no conforto da sua casa',
          detail: 'Sessões de 1h30 onde cuidamos do seu cão no ambiente familiar que ele conhece e ama. Mantemos a rotina, proporcionamos carinho e garantimos que se sente seguro e feliz.',
          price: '15€',
          icon: 'Home',
          color: 'primary',
          badge: 'Mais Popular',
          // image: {
          //   _type: 'image',
          //   asset: {
          //     _type: 'reference',
          //     _ref: 'image-7' // Imagem do petsitting
          //   }
          // },
          features: [
            'Alimentação e hidratação',
            'Brincadeiras e exercício',
            'Carinho e atenção personalizada',
            'Relatório com fotos',
            'Cuidados básicos de higiene'
          ]
        },
        {
          _key: 'dogwalking',
          title: 'Dogwalking',
          description: 'Passeios energizantes e socializantes',
          detail: 'Passeios adaptados às necessidades e energia do seu cão. Exploramos parques, praias e zonas verdes para garantir exercício físico e estímulo mental adequados.',
          price: '12€',
          icon: 'MapPin',
          color: 'accent',
          // image: {
          //   _type: 'image',
          //   asset: {
          //     _type: 'reference',
          //     _ref: 'image-8' // Imagem do dogwalking
          //   }
          // },
          features: [
            'Passeio de 45-60 minutos',
            'Socialização com outros cães',
            'Exercício físico adequado',
            'Fotos durante o passeio',
            'Limpeza das patas'
          ]
        },
        {
          _key: 'daycare',
          title: 'Creche/Daycare',
          description: 'Cuidados diurnos num ambiente seguro',
          detail: 'Um dia completo de diversão, socialização e cuidados num ambiente controlado e seguro. Perfeito para cães que precisam de companhia durante o seu dia de trabalho.',
          price: '25€',
          icon: 'Clock',
          color: 'secondary',
          // image: {
          //   _type: 'image',
          //   asset: {
          //     _type: 'reference',
          //     _ref: 'image-9' // Imagem da creche
          //   }
          // },
          features: [
            'Cuidados das 8h às 18h',
            'Refeições e snacks',
            'Atividades e brincadeiras',
            'Socialização supervisionada',
            'Relatório diário completo'
          ]
        },
        {
          _key: 'estadia',
          title: 'Estadia Familiar',
          description: 'Hospedagem completa na nossa família',
          detail: 'O seu cão fica integrado na nossa família durante as suas férias ou viagens. Cuidados 24h, muito amor e um ambiente verdadeiramente familiar.',
          price: '30€',
          icon: 'Heart',
          color: 'chart-5',
          badge: 'Premium',
          // image: {
          //   _type: 'image',
          //   asset: {
          //     _type: 'reference',
          //     _ref: 'image-10' // Imagem da estadia
          //   }
          // },
          features: [
            'Cuidados 24h por dia',
            'Todas as refeições incluídas',
            'Passeios diários',
            'Updates diários com fotos',
            'Ambiente familiar acolhedor'
          ]
        }
      ],
      additionalServices: {
        title: 'Serviços Adicionais',
        subtitle: 'Extras para o Máximo Conforto',
        services: [
          {
            _key: 'relatorios',
            title: 'Relatórios Fotográficos',
            description: 'Updates regulares com fotos',
            icon: 'Camera',
            color: '#8B5CF6',
            included: true
          },
          {
            _key: 'comunicacao',
            title: 'Comunicação 24/7',
            description: 'Sempre disponível para si',
            icon: 'MessageCircle',
            color: '#10B981',
            included: true
          },
          {
            _key: 'seguro',
            title: 'Seguro de Responsabilidade',
            description: 'Proteção total garantida',
            icon: 'Shield',
            color: '#F59E0B',
            included: true
          }
        ]
      },
      pricingPlans: {
        title: 'Planos e Descontos',
        subtitle: 'Escolha o Plano Ideal para o Seu Patudo',
        plans: [
          {
            _key: 'ocasional',
            name: 'Ocasional',
            description: 'Para necessidades pontuais',
            price: 'Preço',
            priceDescription: 'por serviço',
            features: [
              'Preços normais',
              'Todos os serviços disponíveis',
              'Relatórios incluídos'
            ],
            popular: false,
            color: 'primary'
          },
          {
            _key: 'regular',
            name: 'Regular',
            description: 'Para cuidados semanais',
            price: '-10%',
            priceDescription: 'desconto em todos os serviços',
            features: [
              '10% desconto',
              'Prioridade no agendamento',
              'Relatórios detalhados',
              'Flexibilidade de horários'
            ],
            popular: true,
            color: 'primary'
          },
          {
            _key: 'premium',
            name: 'Premium',
            description: 'Para cuidados diários',
            price: '-20%',
            priceDescription: 'desconto em todos os serviços',
            features: [
              '20% desconto',
              'Cuidador dedicado',
              'Serviços personalizados',
              'Suporte 24/7 prioritário'
            ],
            popular: false,
            color: '#8B5CF6'
          }
        ]
      },
      cta: {
        title: 'Pronto para Começar?',
        description: 'Entre em contacto connosco para discutir as necessidades do seu patudo e encontrar o serviço perfeito.',
        primaryButton: 'Contactar-nos',
        secondaryButton: 'Conhecer-nos'
      }
    })
    console.log('✅ Página de serviços criada')

    // 6. Criar página FAQ
    const faqPage = await client.createOrReplace({
      _type: 'faqPage',
      _id: 'faqPage',
      hero: {
        badge: 'Perguntas Frequentes',
        title: 'Tudo o Que Precisa de Saber Sobre a Dogwarts',
        description: 'Encontre respostas às perguntas mais comuns sobre os nossos serviços, políticas e cuidados com o seu patudo.'
      },
      faqCategories: [
        {
          _key: 'servicos-precos',
          title: 'Serviços e Preços',
          faqs: [
            {
              _key: 'horarios',
              question: 'Quais são os horários disponíveis para os serviços?',
              answer: [
                {
                  _key: 'horarios-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'horarios-span',
                      _type: 'span',
                      text: 'Os nossos serviços estão disponíveis de segunda a domingo, das 7h às 20h. Para estadia familiar, oferecemos cuidados 24h. Serviços de emergência podem ser disponibilizados mediante consulta prévia.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'precos',
              question: 'Como são calculados os preços dos serviços?',
              answer: [
                {
                  _key: 'precos-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'precos-span',
                      _type: 'span',
                      text: 'Os preços variam conforme o tipo de serviço, duração e frequência. Oferecemos descontos para clientes regulares: 10% para serviços semanais e 20% para contratos mensais. Contacte-nos para um orçamento personalizado.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'cuidados-especiais',
              question: 'Que cuidados especiais podem ser providenciados?',
              answer: [
                {
                  _key: 'cuidados-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'cuidados-span',
                      _type: 'span',
                      text: 'Providenciamos administração de medicamentos, cuidados para cães idosos ou com necessidades especiais, dietas específicas e acompanhamento veterinário quando necessário. Todos os cuidados especiais são discutidos previamente.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'cancelamento',
              question: 'Posso cancelar ou reagendar um serviço?',
              answer: [
                {
                  _key: 'cancelamento-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'cancelamento-span',
                      _type: 'span',
                      text: 'Sim, aceitamos cancelamentos até 24h antes do serviço agendado sem custos adicionais. Para reagendamentos, tentamos sempre acomodar as suas necessidades conforme a nossa disponibilidade.'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _key: 'seguranca-cuidados',
          title: 'Segurança e Cuidados',
          faqs: [
            {
              _key: 'seguranca',
              question: 'Como garantem a segurança dos cães?',
              answer: [
                {
                  _key: 'seguranca-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'seguranca-span',
                      _type: 'span',
                      text: 'Todos os nossos cuidadores são experientes e treinados em primeiros socorros para animais. Mantemos contacto regular com os tutores através de fotos e updates. Temos protocolos de emergência e contacto direto com veterinários de confiança.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'informacoes',
              question: 'Que informações precisam sobre o meu cão?',
              answer: [
                {
                  _key: 'informacoes-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'informacoes-span',
                      _type: 'span',
                      text: 'Precisamos de informações sobre rotina, alimentação, medicamentos, comportamento, contactos veterinários e de emergência. Também pedimos o cartão de vacinação atualizado e informações sobre socialização com outros cães.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'sozinhos',
              question: 'Os cães ficam sozinhos durante os serviços?',
              answer: [
                {
                  _key: 'sozinhos-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'sozinhos-span',
                      _type: 'span',
                      text: 'Nunca deixamos os cães sozinhos durante os nossos cuidados. No petsitting, o cuidador permanece com o cão durante toda a sessão. Na estadia familiar, o cão integra-se na nossa rotina familiar com supervisão constante.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'seguro',
              question: 'Têm seguro de responsabilidade civil?',
              answer: [
                {
                  _key: 'seguro-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'seguro-span',
                      _type: 'span',
                      text: 'Sim, temos seguro de responsabilidade civil que cobre todos os nossos serviços. Todos os cães sob os nossos cuidados estão protegidos durante o período de serviço.'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _key: 'agendamento-contacto',
          title: 'Agendamento e Contacto',
          faqs: [
            {
              _key: 'agendamento',
              question: 'Como posso agendar um serviço?',
              answer: [
                {
                  _key: 'agendamento-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'agendamento-span',
                      _type: 'span',
                      text: 'Pode agendar através do nosso formulário online, WhatsApp, telefone ou email. Recomendamos agendar com pelo menos 48h de antecedência, especialmente para fins de semana e feriados.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'visita-previa',
              question: 'Fazem uma visita prévia antes do primeiro serviço?',
              answer: [
                {
                  _key: 'visita-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'visita-span',
                      _type: 'span',
                      text: 'Sim, sempre fazemos uma consulta prévia gratuita para conhecer o cão, discutir necessidades específicas, esclarecer dúvidas e estabelecer confiança. Esta visita é essencial para garantir o melhor cuidado.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'area-cobertura',
              question: 'Qual é a área de cobertura dos serviços?',
              answer: [
                {
                  _key: 'area-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'area-span',
                      _type: 'span',
                      text: 'Cobrimos principalmente a área da Grande Lisboa. Para localizações mais distantes, pode haver um custo adicional de deslocação. Contacte-nos para confirmar se servimos a sua área.'
                    }
                  ]
                }
              ]
            },
            {
              _key: 'pagamento',
              question: 'Que formas de pagamento aceitam?',
              answer: [
                {
                  _key: 'pagamento-block',
                  _type: 'block',
                  children: [
                    {
                      _key: 'pagamento-span',
                      _type: 'span',
                      text: 'Aceitamos pagamento em dinheiro, transferência bancária e MB Way. Para clientes regulares, oferecemos a opção de pagamento mensal. O pagamento é efetuado após a prestação do serviço.'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      contactCard: {
        title: 'Ainda tem dúvidas?',
        description: 'Estamos aqui para ajudar! Entre em contacto connosco.',
        phoneButton: 'Ligar Agora',
        emailButton: 'Enviar Email'
      },
      businessHours: {
        title: 'Horários de Atendimento',
        hours: [
          { _key: 'seg-sex', day: 'Segunda - Sexta:', time: '7h - 20h' },
          { _key: 'sab-dom', day: 'Sábado - Domingo:', time: '8h - 18h' },
          { _key: 'emergencias', day: 'Emergências:', time: '24h' }
        ]
      },
      guarantees: {
        title: 'Garantias',
        items: [
          'Cuidadores experientes e treinados',
          'Seguro de responsabilidade civil',
          'Updates regulares com fotos',
          'Suporte de emergência 24h'
        ]
      },
      cta: {
        title: 'Pronto para Conhecer os Nossos Serviços?',
        description: 'Agende uma consulta gratuita e descubra como podemos cuidar do seu patudo com todo o amor e dedicação.',
        primaryButton: 'Agendar Consulta',
        secondaryButton: 'Ver Testemunhos'
      }
    })
    console.log('✅ Página FAQ criada')

    // 7. Criar página de contactos
    const contactPage = await client.createOrReplace({
      _type: 'contactPage',
      _id: 'contactPage',
      hero: {
        badge: 'Entre em Contacto',
        title: 'Vamos Conversar sobre o Seu Patudo',
        description: 'Estamos aqui para responder às suas questões e ajudar a encontrar o melhor cuidado para o seu cão. Entre em contacto connosco!'
      },
      contactMethods: [
        {
          _key: 'telefone',
          type: 'phone',
          title: 'Telefone',
          description: 'Ligue-nos diretamente',
          value: '+351 XXX XXX XXX',
          availability: 'Disponível das 8h às 20h',
          buttonText: 'Ligar Agora',
          color: '#FDCF4D'
        },
        {
          _key: 'whatsapp',
          type: 'whatsapp',
          title: 'WhatsApp',
          description: 'Mensagem rápida e fácil',
          value: '+351 XXX XXX XXX',
          availability: 'Resposta rápida garantida',
          buttonText: 'Enviar Mensagem',
          color: '#8B5CF6'
        },
        {
          _key: 'email',
          type: 'email',
          title: 'Email',
          description: 'Para questões detalhadas',
          value: 'info@dogwarts.pt',
          availability: 'Resposta em 24h',
          buttonText: 'Enviar Email',
          color: '#10B981'
        }
      ],
      contactForm: {
        title: 'Envie-nos uma Mensagem',
        description: 'Preencha o formulário e entraremos em contacto consigo o mais breve possível.',
        submitButton: 'Enviar Mensagem',
        serviceOptions: [
          { _key: 'petsitting', value: 'petsitting', label: 'Petsitting ao Domicílio' },
          { _key: 'dogwalking', value: 'dogwalking', label: 'Dogwalking' },
          { _key: 'daycare', value: 'daycare', label: 'Creche/Daycare' },
          { _key: 'estadia', value: 'estadia', label: 'Estadia Familiar' },
          { _key: 'consulta', value: 'consulta', label: 'Consulta Gratuita' },
          { _key: 'outro', value: 'outro', label: 'Outro' }
        ]
      },
      businessInfo: {
        location: {
          title: 'Localização',
          businessName: 'Dogwarts - Cuidados Caninos',
          address: 'Rua dos Patudos, 123\n1200-000 Lisboa\nPortugal',
          mapButton: 'Ver no Google Maps'
        },
        businessHours: {
          title: 'Horários de Funcionamento',
          hours: [
            { _key: 'seg-sex', day: 'Segunda a Sexta', time: '8:00 - 20:00' },
            { _key: 'sabado', day: 'Sábado', time: '9:00 - 18:00' },
            { _key: 'domingo', day: 'Domingo', time: '10:00 - 16:00' },
            { _key: 'emergencias', day: 'Emergências', time: '24/7' }
          ]
        },
        socialMedia: {
          title: 'Siga-nos nas Redes Sociais',
          description: 'Veja os nossos patudos felizes todos os dias!',
          platforms: [
            {
              _key: 'instagram',
              name: 'instagram',
              url: 'https://instagram.com/dogwarts',
              color: 'pink-500'
            },
            {
              _key: 'facebook',
              name: 'facebook',
              url: 'https://facebook.com/dogwarts',
              color: 'blue-600'
            }
          ]
        }
      },
      faqQuickLinks: {
        title: 'Perguntas Frequentes',
        subtitle: 'Tem Dúvidas? Temos Respostas!',
        links: [
          {
            _key: 'primeiro-encontro',
            title: 'Como funciona o primeiro encontro?',
            description: 'Fazemos sempre uma consulta gratuita para conhecer o seu cão e as suas necessidades.',
            linkText: 'Saber mais →'
          },
          {
            _key: 'cuidados-especiais',
            title: 'Que cuidados especiais oferecem?',
            description: 'Adaptamos os nossos serviços às necessidades específicas de cada cão, incluindo medicação.',
            linkText: 'Saber mais →'
          },
          {
            _key: 'contacto',
            title: 'Como posso contactar-vos?',
            description: 'Pode contactar por telefone, WhatsApp, email ou através do nosso formulário online.',
            linkText: 'Saber mais →'
          }
        ],
        viewAllButton: 'Ver Todas as FAQ'
      },
      cta: {
        title: 'Pronto para Conhecer a Dogwarts?',
        description: 'Entre em contacto connosco e venha conhecer como podemos cuidar do seu patudo com todo o amor que ele merece.',
        primaryButton: 'Ligar Agora',
        secondaryButton: 'WhatsApp Direto'
      }
    })
    console.log('✅ Página de contactos criada')

    // 8. Criar página de testemunhos
    const testimonialsPage = await client.createOrReplace({
      _type: 'testimonialsPage',
      _id: 'testimonialsPage',
      hero: {
        badge: 'Testemunhos',
        title: 'O Que Dizem os Nossos Clientes',
        description: 'Histórias reais de famílias que confiam nos nossos cuidados e veem os seus patudos mais felizes e saudáveis.'
      },
      featuredTestimonial: {
        name: 'Maria Costa',
        role: 'Tutora do Max (Golden Retriever)',
        text: 'A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos. O serviço é excecional e o carinho genuíno é evidente em cada interação.',
        rating: 5,
        initials: 'MC',
        color: 'primary',
        service: 'Creche/Daycare',
        date: 'Janeiro 2024'
      },
      testimonialsGrid: {
        title: 'O Que Dizem os Nossos Clientes',
        description: 'Cada testemunho é uma história de confiança, amor e cuidado especializado.',
        testimonials: [
          {
            _key: 'joao-silva',
            name: 'João Silva',
            role: 'Tutor da Luna',
            text: 'Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!',
            rating: 5,
            initials: 'JS',
            color: 'accent',
            service: 'Dogwalking',
            date: 'Janeiro 2024'
          },
          {
            _key: 'ana-ferreira',
            name: 'Ana Ferreira',
            role: 'Tutora do Bobby',
            text: 'Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.',
            rating: 5,
            initials: 'AF',
            color: 'chart-4',
            service: 'Estadia Familiar',
            date: 'Dezembro 2023'
          },
          {
            _key: 'pedro-santos',
            name: 'Pedro Santos',
            role: 'Tutor da Mia',
            text: 'O petsitting é perfeito para a nossa Mia. Ela fica no conforto de casa e recebe todo o carinho que precisa. Excelente serviço!',
            rating: 5,
            initials: 'PS',
            color: 'chart-5',
            service: 'Petsitting',
            date: 'Fevereiro 2024'
          },
          {
            _key: 'carla-rodrigues',
            name: 'Carla Rodrigues',
            role: 'Tutora do Rex',
            text: 'A equipa da Dogwarts é fantástica! O Rex adora ir para a creche e volta sempre feliz e cansado. Recomendo a todos!',
            rating: 5,
            initials: 'CR',
            color: 'secondary',
            service: 'Creche/Daycare',
            date: 'Março 2024'
          },
          {
            _key: 'miguel-costa',
            name: 'Miguel Costa',
            role: 'Tutor da Lola',
            text: 'Serviço impecável! A Lola ficou connosco durante uma semana e foi tratada como família. Voltaremos certamente.',
            rating: 5,
            initials: 'MC',
            color: 'primary',
            service: 'Estadia Familiar',
            date: 'Abril 2024'
          },
          {
            _key: 'sofia-martins',
            name: 'Sofia Martins',
            role: 'Tutora do Toby',
            text: 'Os passeios com a Dogwarts são o highlight do dia do Toby. Ele fica sempre ansioso para sair e volta radiante!',
            rating: 5,
            initials: 'SM',
            color: 'accent',
            service: 'Dogwalking',
            date: 'Maio 2024'
          }
        ]
      },
      cta: {
        title: 'Pronto para Fazer Parte da Família Dogwarts?',
        description: 'Junte-se aos nossos clientes satisfeitos e dê ao seu patudo o cuidado que ele merece.',
        primaryButton: 'Contactar-nos',
        secondaryButton: 'Ver Serviços'
      }
    })
    console.log('✅ Página de testemunhos criada')

    // 9. Criar página do blog
    const blogPage = await client.createOrReplace({
      _type: 'blogPage',
      _id: 'blogPage',
      hero: {
        badge: 'Blog',
        title: 'Dicas e Conselhos para o Bem-estar do Seu Patudo',
        description: 'Descubra artigos úteis sobre cuidados caninos, dicas de treino, saúde e muito mais para manter o seu cão feliz e saudável.'
      },
      featuredPost: {
        title: '10 Sinais de que o Seu Cão Está Feliz e Saudável',
        excerpt: 'Aprenda a reconhecer os indicadores de bem-estar no seu patudo e como manter a sua felicidade no dia a dia.',
        category: 'Saúde & Bem-estar',
        date: '15 Jan 2024',
        readTime: '5 min',
        author: 'Equipa Dogwarts',
        slug: { current: '10-sinais-cao-feliz-saudavel' }
      },
      blogPosts: [
        {
          _key: 'preparar-estadia',
          title: 'Como Preparar o Seu Cão para a Primeira Estadia Fora de Casa',
          excerpt: 'Dicas essenciais para tornar a experiência de deixar o seu cão aos cuidados de outros mais tranquila para ambos.',
          category: 'Cuidados',
          date: '12 Jan 2024',
          readTime: '4 min',
          author: 'Equipa Dogwarts',
          slug: { current: 'preparar-cao-primeira-estadia' },
          featured: false
        },
        {
          _key: 'socializacao-caes',
          title: 'A Importância da Socialização nos Cães',
          excerpt: 'Entenda como a socialização adequada pode melhorar o comportamento e bem-estar do seu cão.',
          category: 'Comportamento',
          date: '10 Jan 2024',
          readTime: '6 min',
          author: 'Equipa Dogwarts',
          slug: { current: 'importancia-socializacao-caes' },
          featured: false
        },
        {
          _key: 'exercicio-caes',
          title: 'Exercício Físico: Fundamental para Cães de Todas as Idades',
          excerpt: 'Descubra como adaptar o exercício físico às necessidades específicas do seu cão.',
          category: 'Saúde & Bem-estar',
          date: '8 Jan 2024',
          readTime: '5 min',
          author: 'Equipa Dogwarts',
          slug: { current: 'exercicio-fisico-caes-todas-idades' },
          featured: false
        },
        {
          _key: 'alimentacao-saudavel',
          title: 'Alimentação Saudável: Guia Completo para Cães',
          excerpt: 'Tudo o que precisa de saber sobre nutrição canina para manter o seu patudo saudável.',
          category: 'Nutrição',
          date: '5 Jan 2024',
          readTime: '7 min',
          author: 'Equipa Dogwarts',
          slug: { current: 'alimentacao-saudavel-guia-completo-caes' },
          featured: false
        },
        {
          _key: 'primeiros-socorros',
          title: 'Primeiros Socorros para Cães: O Que Precisa de Saber',
          excerpt: 'Aprenda as técnicas básicas de primeiros socorros que podem salvar a vida do seu cão.',
          category: 'Saúde & Bem-estar',
          date: '3 Jan 2024',
          readTime: '8 min',
          author: 'Equipa Dogwarts',
          slug: { current: 'primeiros-socorros-caes-guia' },
          featured: false
        }
      ],
      categories: [
        {
          _key: 'saude-bem-estar',
          name: 'Saúde & Bem-estar',
          description: 'Artigos sobre saúde, cuidados médicos e bem-estar geral dos cães',
          color: 'primary'
        },
        {
          _key: 'comportamento',
          name: 'Comportamento',
          description: 'Dicas de treino, socialização e gestão comportamental',
          color: 'accent'
        },
        {
          _key: 'cuidados',
          name: 'Cuidados',
          description: 'Guias práticos para cuidados diários e especiais',
          color: 'secondary'
        },
        {
          _key: 'nutricao',
          name: 'Nutrição',
          description: 'Informações sobre alimentação e nutrição canina',
          color: 'chart-4'
        }
      ],
      cta: {
        title: 'Quer Saber Mais Sobre Cuidados Caninos?',
        description: 'Subscreva a nossa newsletter e receba dicas exclusivas para manter o seu patudo feliz e saudável.',
        primaryButton: 'Subscrever Newsletter',
        secondaryButton: 'Ver Todos os Artigos'
      }
    })
    console.log('✅ Página do blog criada')

    console.log('🎉 Seed concluído com sucesso!')
    console.log('📝 Próximos passos:')
    console.log('1. Configure as variáveis de ambiente no .env.local')
    console.log('2. Execute: pnpm dev')
    console.log('3. Acesse: http://localhost:3000/studio para editar o conteúdo')

  } catch (error) {
    console.error('❌ Erro durante o seed:', error)
  }
}

seedData()

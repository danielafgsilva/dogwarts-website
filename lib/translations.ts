export type Language = 'pt' | 'en'

export interface Translations {
  navigation: {
    home: string
    services: string
    about: string
    testimonials: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  services: {
    title: string
    subtitle: string
    items: {
      daycare: {
        title: string
        description: string
        detail: string
        price: string
      }
      walking: {
        title: string
        description: string
        detail: string
        price: string
      }
      boarding: {
        title: string
        description: string
        detail: string
        price: string
      }
      training: {
        title: string
        description: string
        detail: string
        price: string
      }
    }
  }
  testimonials: {
    title: string
    subtitle: string
    items: {
      maria: {
        text: string
        author: string
        role: string
      }
      joao: {
        text: string
        author: string
        role: string
      }
      ana: {
        text: string
        author: string
        role: string
      }
    }
  }
  cta: {
    title: string
    description: string
    button: string
  }
  footer: {
    description: string
    sections: {
      services: {
        title: string
        links: {
          daycare: string
          walking: string
          boarding: string
          training: string
        }
      }
      company: {
        title: string
        links: {
          about: string
          testimonials: string
          contact: string
        }
      }
    }
    contact: {
      title: string
      phone: string
      email: string
      location: string
    }
    copyright: string
  }
}

export const translations: Record<Language, Translations> = {
  pt: {
    navigation: {
      home: 'Início',
      services: 'Serviços',
      about: 'Sobre',
      testimonials: 'Testemunhos',
      contact: 'Contactos',
    },
    hero: {
      badge: 'Desde Setembro 2023',
      title: 'Cães Felizes & Donos Tranquilos',
      description: 'Um espaço seguro e familiar onde os seus cães se sentem em casa, criado por uma tutora que compreende as necessidades dos animais quando os donos estão ausentes.',
      ctaPrimary: 'Reservar Agora',
      ctaSecondary: 'Ver Serviços',
    },
    services: {
      title: 'Os Nossos Serviços',
      subtitle: 'Cuidados personalizados para o seu melhor amigo',
      items: {
        daycare: {
          title: 'Creche Canina',
          description: 'Dia inteiro de diversão e socialização',
          detail: 'O seu cão passa o dia em segurança, brincando e socializando com outros cães, enquanto você trabalha tranquilo.',
          price: 'A partir de 25€/dia',
        },
        walking: {
          title: 'Passeios',
          description: 'Exercício e ar livre para o seu cão',
          detail: 'Passeios regulares e personalizados, adaptados às necessidades e energia do seu cão.',
          price: 'A partir de 15€/passeio',
        },
        boarding: {
          title: 'Alojamento',
          description: 'Casa longe de casa para o seu cão',
          detail: 'Quando viaja, o seu cão fica num ambiente familiar e seguro, com todos os cuidados necessários.',
          price: 'A partir de 30€/noite',
        },
        training: {
          title: 'Treino',
          description: 'Educação e comportamento canino',
          detail: 'Sessões de treino personalizadas para melhorar o comportamento e fortalecer a ligação com o seu cão.',
          price: 'A partir de 40€/sessão',
        },
      },
    },
    testimonials: {
      title: 'O Que Dizem os Nossos Clientes',
      subtitle: 'Histórias reais de famílias felizes',
      items: {
        maria: {
          text: 'A Dogwarts transformou completamente a vida do meu cão. Ele adora ir para lá e eu fico tranquila sabendo que está em boas mãos.',
          author: 'Maria Silva',
          role: 'Tutora do Max',
        },
        joao: {
          text: 'Serviço excecional! O meu cão voltou mais calmo e sociável. Recomendo vivamente a todos os donos de cães.',
          author: 'João Santos',
          role: 'Tutor da Luna',
        },
        ana: {
          text: 'Profissionalismo e carinho em cada detalhe. É evidente que amam os animais tanto quanto nós.',
          author: 'Ana Costa',
          role: 'Tutora do Rex',
        },
      },
    },
    cta: {
      title: 'Pronto para dar ao seu cão o melhor cuidado?',
      description: 'Junte-se à família Dogwarts e veja o seu cão mais feliz e saudável.',
      button: 'Começar Agora',
    },
    footer: {
      description: 'Cuidados caninos personalizados com amor e profissionalismo. O seu cão merece o melhor.',
      sections: {
        services: {
          title: 'Serviços',
          links: {
            daycare: 'Creche Canina',
            walking: 'Passeios',
            boarding: 'Alojamento',
            training: 'Treino',
          },
        },
        company: {
          title: 'Empresa',
          links: {
            about: 'Sobre Nós',
            testimonials: 'Testemunhos',
            contact: 'Contactos',
          },
        },
      },
      contact: {
        title: 'Contactos',
        phone: '+351 912 345 678',
        email: 'info@dogwarts.pt',
        location: 'Lisboa, Portugal',
      },
      copyright: '© 2024 Dogwarts. Todos os direitos reservados.',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      badge: 'Since September 2023',
      title: 'Happy Dogs & Peaceful Owners',
      description: 'A safe and familiar space where your dogs feel at home, created by a pet owner who understands the needs of animals when owners are away.',
      ctaPrimary: 'Book Now',
      ctaSecondary: 'View Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Personalized care for your best friend',
      items: {
        daycare: {
          title: 'Dog Daycare',
          description: 'Full day of fun and socialization',
          detail: 'Your dog spends the day safely, playing and socializing with other dogs, while you work peacefully.',
          price: 'From €25/day',
        },
        walking: {
          title: 'Dog Walking',
          description: 'Exercise and fresh air for your dog',
          detail: 'Regular and personalized walks, adapted to your dog\'s needs and energy level.',
          price: 'From €15/walk',
        },
        boarding: {
          title: 'Boarding',
          description: 'Home away from home for your dog',
          detail: 'When you travel, your dog stays in a familiar and safe environment, with all necessary care.',
          price: 'From €30/night',
        },
        training: {
          title: 'Training',
          description: 'Dog education and behavior',
          detail: 'Personalized training sessions to improve behavior and strengthen the bond with your dog.',
          price: 'From €40/session',
        },
      },
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real stories from happy families',
      items: {
        maria: {
          text: 'Dogwarts completely transformed my dog\'s life. He loves going there and I feel at ease knowing he\'s in good hands.',
          author: 'Maria Silva',
          role: 'Max\'s Owner',
        },
        joao: {
          text: 'Exceptional service! My dog came back calmer and more sociable. I highly recommend it to all dog owners.',
          author: 'João Santos',
          role: 'Luna\'s Owner',
        },
        ana: {
          text: 'Professionalism and care in every detail. It\'s evident that they love animals as much as we do.',
          author: 'Ana Costa',
          role: 'Rex\'s Owner',
        },
      },
    },
    cta: {
      title: 'Ready to give your dog the best care?',
      description: 'Join the Dogwarts family and see your dog happier and healthier.',
      button: 'Get Started',
    },
    footer: {
      description: 'Personalized canine care with love and professionalism. Your dog deserves the best.',
      sections: {
        services: {
          title: 'Services',
          links: {
            daycare: 'Dog Daycare',
            walking: 'Dog Walking',
            boarding: 'Boarding',
            training: 'Training',
          },
        },
        company: {
          title: 'Company',
          links: {
            about: 'About Us',
            testimonials: 'Testimonials',
            contact: 'Contact',
          },
        },
      },
      contact: {
        title: 'Contact',
        phone: '+351 912 345 678',
        email: 'info@dogwarts.pt',
        location: 'Lisbon, Portugal',
      },
      copyright: '© 2024 Dogwarts. All rights reserved.',
    },
  },
}

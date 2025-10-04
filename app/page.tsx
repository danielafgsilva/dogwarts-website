import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Home, MapPin, Clock, Star, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { responsive, brand } from "@/lib/responsive-utils"
import { getHomePage, getFeaturedTestimonials, getSiteSettings, urlFor } from "@/lib/sanity"
// import { PortableText } from '@portabletext/react'

export default async function HomePage() {
  const { homeData, testimonials, siteSettings } = await getPageData()
  const t = homeData || {
    hero: {
      badge: "Bem-vindo",
      title: "Título padrão",
      description: "Descrição padrão do herói.",
      ctaPrimary: "Conheça nossos serviços",
      ctaSecondary: "Contacte-nos",
    },
    services: {
      title: "Os Nossos Serviços",
      subtitle: "Cuidados Personalizados para Cada Patudo",
      items: {
        daycare: { title: "Creche/Daycare", description: "Cuidados diurnos", detail: "Um dia completo de diversão", price: "25€/dia" },
        walking: { title: "Dogwalking", description: "Passeios energizantes", detail: "Passeios adaptados às necessidades", price: "12€/passeio" },
        boarding: { title: "Estadia Familiar", description: "Hospedagem completa", detail: "Cuidados 24h na nossa família", price: "30€/dia" },
        training: { title: "Petsitting", description: "Cuidados ao domicílio", detail: "Sessões de 1h30 no conforto de casa", price: "15€/sessão" }
      }
    }
  };
  
  return (
    <div className="min-h-screen font-sans">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar currentPage="/" />

      {/* Hero Section */}
      <section 
        className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        
        <div className={`${responsive.container} relative z-10`}>
          <div className={`${responsive.grid2} gap-8 lg:gap-16 items-center`}>
            <div className={`${responsive.spaceY.lg} ${responsive.textCenterLg}`}>
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30 transition-colors"
                >
                  {t.hero.badge}
                </Badge>
                <h1 
                  id="hero-heading"
                  className={`${responsive.heading1} font-serif`}
                >
                  {t.hero.title}
                </h1>
                <p className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth['2xl']} mx-auto lg:mx-0`}>
                  {t.hero.description}
                </p>
              </div>
              <div className={`${responsive.buttonGroupCenter} lg:justify-start`} role="group" aria-label="Ações principais">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Conhecer os nossos serviços de cuidados para cães"
                >
                  <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                  {t.hero.ctaPrimary}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  aria-label="Contactar-nos agora para mais informações"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 shadow-2xl">
                {t.hero?.heroImage ? (
                  <img
                    src={urlFor(t.hero.heroImage).width(400).height(400).url()}
                    alt="Logo da Dogwarts com o slogan 'Cães Felizes & Donos Tranquilos'"
                    className="w-full h-full object-contain max-w-sm md:max-w-md transition-transform hover:scale-105 duration-300"
                    loading="eager"
                    width="400"
                    height="400"
                  />
                ) : (
                  <img
                    src="/dogwarts-logo-with-tagline.png"
                    alt="Logo da Dogwarts com o slogan 'Cães Felizes & Donos Tranquilos'"
                    className="w-full h-full object-contain max-w-sm md:max-w-md transition-transform hover:scale-105 duration-300"
                    loading="eager"
                    width="400"
                    height="400"
                  />
                )}
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-background shadow-sm" />
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-background shadow-sm" />
                    <div className="w-8 h-8 bg-chart-4 rounded-full border-2 border-background shadow-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">100+ Cães Felizes</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      <span className="text-sm text-muted-foreground ml-1">5.0 avaliação</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="servicos" 
        className={`${responsive.sectionPadding} bg-background`}
        aria-labelledby="services-heading"
        role="region"
      >
        <div className={responsive.container}>
          <div className={`${responsive.spaceY.md} ${responsive.textCenter} mb-12 lg:mb-16`}>
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30 transition-colors"
            >
              {t.services.title}
            </Badge>
            <h2 
              id="services-heading"
              className={`${responsive.heading1} font-serif`}
            >
              {t.services.subtitle}
            </h2>
            <p className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth['3xl']} mx-auto`}>
              Oferecemos uma gama completa de serviços pensados para o bem-estar dos seus cães e a sua tranquilidade.
            </p>
          </div>

          <div className={responsive.grid4} role="list" aria-label="Lista de serviços oferecidos">
            {(t.services?.services || [
              {
                icon: 'Heart',
                title: t.services?.items?.daycare?.title || 'Creche/Daycare',
                desc: t.services?.items?.daycare?.description || 'Cuidados diurnos',
                detail: t.services?.items?.daycare?.detail || 'Um dia completo de diversão',
                price: t.services?.items?.daycare?.price || '25€/dia',
                color: 'primary',
              },
              {
                icon: 'MapPin',
                title: t.services?.items?.walking?.title || 'Dogwalking',
                desc: t.services?.items?.walking?.description || 'Passeios energizantes',
                detail: t.services?.items?.walking?.detail || 'Passeios adaptados às necessidades',
                price: t.services?.items?.walking?.price || '12€/passeio',
                color: 'accent',
              },
              {
                icon: 'Clock',
                title: t.services?.items?.boarding?.title || 'Estadia Familiar',
                desc: t.services?.items?.boarding?.description || 'Hospedagem completa',
                detail: t.services?.items?.boarding?.detail || 'Cuidados 24h na nossa família',
                price: t.services?.items?.boarding?.price || '30€/dia',
                color: 'chart-4',
              },
              {
                icon: 'Heart',
                title: t.services?.items?.training?.title || 'Petsitting',
                desc: t.services?.items?.training?.description || 'Cuidados ao domicílio',
                detail: t.services?.items?.training?.detail || 'Sessões de 1h30 no conforto de casa',
                price: t.services?.items?.training?.price || '15€/sessão',
                color: 'chart-5',
              },
            ]).map((service: any, index: number) => {
              const iconMap: { [key: string]: any } = {
                Heart,
                MapPin,
                Clock,
                Home,
              }
              const IconComponent = iconMap[service.icon] || Heart
              const colorMap: { [key: string]: string } = {
                primary: 'bg-primary/10 text-primary',
                accent: 'bg-accent/10 text-accent',
                'chart-4': 'bg-chart-4/10 text-chart-4',
                'chart-5': 'bg-chart-5/10 text-chart-5',
              }
              const colorClass = colorMap[service.color] || 'bg-primary/10 text-primary'
              const [bgColor, iconColor] = colorClass.split(' ')
              
              return (
              <Card
                key={index}
                className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                role="listitem"
                aria-labelledby={`service-title-${index}`}
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <IconComponent 
                      className={`w-10 h-10 ${iconColor}`}
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle 
                    id={`service-title-${index}`}
                    className="text-xl font-semibold text-foreground"
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.detail}</p>
                  <Badge 
                    variant="outline" 
                    className={`${iconColor} border-current hover:bg-current hover:text-white transition-colors`}
                  >
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              asChild
            >
              <Link href="/servicos">
                Ver Todos os Serviços
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className={`${responsive.sectionPadding} ${brand.gradients.card}`}
        aria-labelledby="testimonials-heading"
        role="region"
      >
        <div className={responsive.container}>
          <div className={`${responsive.spaceY.md} ${responsive.textCenter} mb-12 lg:mb-16`}>
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30 transition-colors"
            >
              Testemunhos
            </Badge>
            <h2 
              id="testimonials-heading"
              className={responsive.heading1}
            >
              O Que Dizem os Nossos Clientes
            </h2>
            <p className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth['2xl']} mx-auto`}>
              Histórias reais de famílias que confiam nos nossos cuidados
            </p>
          </div>

          <div className={responsive.grid3} role="list" aria-label="Testemunhos dos clientes">
            {(testimonials || [
              {
                stars: 5,
                text: "A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos.",
                initials: "MC",
                name: "Maria Costa",
                role: "Tutora do Max",
                color: "primary",
              },
              {
                stars: 5,
                text: "Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!",
                initials: "JS",
                name: "João Silva",
                role: "Tutor da Luna",
                color: "accent",
              },
              {
                stars: 5,
                text: "Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.",
                initials: "AF",
                name: "Ana Ferreira",
                role: "Tutora do Bobby",
                color: "chart-4",
              },
            ]).map((testimonial: any, index: number) => {
              const colorMap: { [key: string]: string } = {
                primary: 'bg-primary/20 text-primary',
                accent: 'bg-accent/20 text-accent',
                'chart-4': 'bg-chart-4/20 text-chart-4',
                'chart-5': 'bg-chart-5/20 text-chart-5',
              }
              const colorClass = colorMap[testimonial.color] || 'bg-primary/20 text-primary'
              const [bgColor, textColor] = colorClass.split(' ')
              
              return (
              <Card
                key={index}
                className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                role="listitem"
                aria-labelledby={`testimonial-author-${index}`}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-center mb-6">
                    <div className="flex" role="img" aria-label={`${testimonial.rating || testimonial.stars} estrelas de avaliação`}>
                      {[...Array(testimonial.rating || testimonial.stars)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-primary fill-current" 
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    <p className="text-pretty">"{testimonial.text}"</p>
                  </blockquote>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mr-4`}
                      aria-hidden="true"
                    >
                      <span className={`text-sm font-semibold ${textColor}`}>{testimonial.initials}</span>
                    </div>
                    <div>
                      <p 
                        id={`testimonial-author-${index}`}
                        className="font-semibold text-foreground"
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className={`${responsive.sectionPadding} bg-[#1F3B75] text-white relative overflow-hidden`}
        aria-labelledby="cta-heading"
        role="region"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3B75]/90 via-[#1F3B75]/80 to-[#1F3B75]/90" />
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        
        <div className={`${responsive.container} ${responsive.textCenter} relative z-10`}>
          <div className={`${responsive.maxWidth['4xl']} mx-auto ${responsive.spaceY.lg}`}>
            <h2 
              id="cta-heading"
              className={`${responsive.heading1} font-serif text-white`}
            >
              {t.cta?.title || 'Pronto para Dar ao Seu Cão o Melhor Cuidado?'}
            </h2>
            <p className={`${responsive.bodyLarge} text-white ${responsive.maxWidth['2xl']} mx-auto`}>
              {t.cta?.description || 'Entre em contacto connosco hoje e descubra como podemos ajudar a manter o seu patudo feliz e você tranquilo.'}
            </p>
            <div className={`${responsive.buttonGroupCenter}`} role="group" aria-label="Ações de contacto">
              <Button 
                size="lg" 
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90 focus:outline-none focus:ring-2 focus:ring-[#FDCF4D] focus:ring-offset-2 focus:ring-offset-[#1F3B75] transition-colors duration-200"
                aria-label="Ligar para a Dogwarts agora"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                {t.cta?.primaryButton || 'Ligar Agora'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F3B75] transition-colors duration-200"
                aria-label="Enviar mensagem para a Dogwarts"
              >
                <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                {t.cta?.secondaryButton || 'Enviar Mensagem'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className={`bg-background border-t border-border ${responsive.sectionPadding}`}
        role="contentinfo"
        aria-label="Rodapé do site"
      >
        <div className={responsive.container}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-6 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3">
                <img 
                  src="/dogwarts-logo-transparent.png" 
                  alt="Logo da Dogwarts" 
                  className="w-12 h-12 object-contain"
                  width="48"
                  height="48"
                />
                <span className="text-2xl font-bold text-foreground">Dogwarts</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {siteSettings?.business?.mission || 'Cuidados caninos personalizados com amor e profissionalismo. O seu cão merece o melhor.'}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-foreground">Serviços</h3>
              <ul className="space-y-3 text-muted-foreground" role="list" aria-label="Lista de serviços">
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Petsitting
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Dogwalking
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Creche/Daycare
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Estadia Familiar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-foreground">Empresa</h3>
              <ul className="space-y-3 text-muted-foreground" role="list" aria-label="Links da empresa">
                <li>
                  <Link href="/sobre" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/testemunhos" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Testemunhos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-foreground">Contacto</h3>
              <ul className="space-y-3 text-muted-foreground" role="list" aria-label="Informações de contacto">
                <li>
                  <a href={`tel:${siteSettings?.contact?.phone || '+351XXXXXXXXX'}`} className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    {siteSettings?.contact?.phone || '+351 XXX XXX XXX'}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteSettings?.contact?.email || 'info@dogwarts.pt'}`} className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    {siteSettings?.contact?.email || 'info@dogwarts.pt'}
                  </a>
                </li>
                <li>{siteSettings?.contact?.city || 'Lisboa, Portugal'}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                {siteSettings?.footer?.copyright || '© 2024 Dogwarts. Todos os direitos reservados.'}
              </p>
              <p className="text-xs text-muted-foreground">
                {siteSettings?.footer?.developer || 'Desenvolvido por Daniela Silva & Tiago Santos'}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// This function gets called at build time
export async function generateStaticParams() {
  return []
}

// Fetch data at build time
async function getPageData() {
  try {
    const [homeData, testimonials, siteSettings] = await Promise.all([
      getHomePage(),
      getFeaturedTestimonials(),
      getSiteSettings(),
    ])

    return {
      homeData,
      testimonials,
      siteSettings,
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      homeData: null,
      testimonials: [],
      siteSettings: null,
    }
  }
}

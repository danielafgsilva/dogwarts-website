"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Home, MapPin, Clock, Star, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { APP_CONFIG } from "@/lib/constants"
import type { Service, Testimonial } from "@/lib/types"
import { useLanguage } from "@/hooks/use-language"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar currentPage="/" />

      {/* Hero Section */}
      <section 
        className="relative py-12 md:py-20 lg:py-32 bg-gradient-to-br from-card to-background"
        aria-labelledby="hero-heading"
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-primary/20 text-gray-800 border-primary/30 dark:bg-primary/30 dark:text-gray-100"
                >
                  {t.hero.badge}
                </Badge>
                <h1 
                  id="hero-heading"
                  className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance leading-tight"
                >
                  {t.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                  {t.hero.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" role="group" aria-label="Ações principais">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  aria-label="Conhecer os nossos serviços de cuidados para cães"
                >
                  <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                  {t.hero.ctaPrimary}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  aria-label="Contactar-nos agora para mais informações"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4 md:p-8">
                <img
                  src="/dogwarts-logo-with-tagline.png"
                  alt="Logo da Dogwarts com o slogan 'Cães Felizes & Donos Tranquilos'"
                  className="w-full h-full object-contain max-w-sm md:max-w-md"
                  loading="eager"
                  width="400"
                  height="400"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-border rounded-2xl p-3 md:p-4 shadow-lg">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="flex -space-x-1 md:-space-x-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full border-2 border-background"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-full border-2 border-background"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">100+ Cães Felizes</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-primary fill-current" />
                      <span className="text-xs md:text-sm text-muted-foreground ml-1">5.0 avaliação</span>
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
        className="py-12 md:py-20 bg-background"
        aria-labelledby="services-heading"
        role="region"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-gray-800 border-primary/30 dark:bg-primary/30 dark:text-gray-100"
            >
              {t.services.title}
            </Badge>
            <h2 
              id="services-heading"
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance"
            >
              {t.services.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Oferecemos uma gama completa de serviços pensados para o bem-estar dos seus cães e a sua tranquilidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" role="list" aria-label="Lista de serviços oferecidos">
            {[
              {
                icon: Heart,
                title: t.services.items.daycare.title,
                desc: t.services.items.daycare.description,
                detail: t.services.items.daycare.detail,
                price: t.services.items.daycare.price,
                color: "primary",
                delay: "delay-100",
              },
              {
                icon: MapPin,
                title: t.services.items.walking.title,
                desc: t.services.items.walking.description,
                detail: t.services.items.walking.detail,
                price: t.services.items.walking.price,
                color: "accent",
                delay: "delay-200",
              },
              {
                icon: Clock,
                title: t.services.items.boarding.title,
                desc: t.services.items.boarding.description,
                detail: t.services.items.boarding.detail,
                price: t.services.items.boarding.price,
                color: "secondary",
                delay: "delay-300",
              },
              {
                icon: Heart,
                title: t.services.items.training.title,
                desc: t.services.items.training.description,
                detail: t.services.items.training.detail,
                price: t.services.items.training.price,
                color: "chart-4",
                delay: "delay-400",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
                role="listitem"
                aria-labelledby={`service-title-${index}`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${service.color}/20 transition-colors`}
                    aria-hidden="true"
                  >
                    {React.createElement(service.icon, { 
                      className: `w-8 h-8 text-${service.color}`,
                      "aria-hidden": "true"
                    })}
                  </div>
                  <CardTitle 
                    id={`service-title-${index}`}
                    className="text-xl font-serif"
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{service.detail}</p>
                  <Badge variant="outline" className={`text-${service.color} border-${service.color}/30`}>
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Testimonials */}
      <section 
        className="py-12 md:py-20 bg-card"
        aria-labelledby="testimonials-heading"
        role="region"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-gray-800 border-primary/30 dark:bg-primary/30 dark:text-gray-100"
            >
              Testemunhos
            </Badge>
            <h2 
              id="testimonials-heading"
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance"
            >
              O Que Dizem os Nossos Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Testemunhos dos clientes">
            {[
              {
                stars: 5,
                text: "A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos.",
                initials: "MC",
                name: "Maria Costa",
                role: "Tutora do Max",
                color: "primary",
                delay: "delay-100",
              },
              {
                stars: 5,
                text: "Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!",
                initials: "JS",
                name: "João Silva",
                role: "Tutor da Luna",
                color: "accent",
                delay: "delay-200",
              },
              {
                stars: 5,
                text: "Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.",
                initials: "AF",
                name: "Ana Ferreira",
                role: "Tutora do Bobby",
                color: "secondary",
                delay: "delay-300",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-border transition-all duration-700"
                role="listitem"
                aria-labelledby={`testimonial-author-${index}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex" role="img" aria-label={`${testimonial.stars} estrelas de avaliação`}>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-primary fill-current" 
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 bg-${testimonial.color}/20 rounded-full flex items-center justify-center mr-3`}
                      aria-hidden="true"
                    >
                      <span className={`text-sm font-medium text-${testimonial.color}`}>{testimonial.initials}</span>
                    </div>
                    <div>
                      <p 
                        id={`testimonial-author-${index}`}
                        className="font-medium"
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-12 md:py-20 bg-secondary text-secondary-foreground"
        aria-labelledby="cta-heading"
        role="region"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 
              id="cta-heading"
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance"
            >
              Pronto para Dar ao Seu Cão o Melhor Cuidado?
            </h2>
            <p className="text-lg md:text-xl text-secondary-foreground/80 text-pretty">
              Entre em contacto connosco hoje e descubra como podemos ajudar a manter o seu patudo feliz e você
              tranquilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Ações de contacto">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label="Ligar para a Dogwarts agora"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Ligar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
                aria-label="Enviar mensagem para a Dogwarts"
              >
                <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                Enviar Mensagem
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="bg-background border-t border-border py-8 md:py-12"
        role="contentinfo"
        aria-label="Rodapé do site"
      >
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <img 
                src="/dogwarts-logo-transparent.png" 
                alt="Logo da Dogwarts" 
                className="w-10 h-10 object-contain"
                width="40"
                height="40"
              />
              <span className="text-xl font-bold">Dogwarts</span>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground text-sm" role="list" aria-label="Lista de serviços">
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Petsitting
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Dogwalking
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Creche/Daycare
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Estadia Familiar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground text-sm" role="list" aria-label="Links da empresa">
                <li>
                  <Link href="/sobre" className="hover:text-primary transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/testemunhos" className="hover:text-primary transition-colors">
                    Testemunhos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-muted-foreground text-sm" role="list" aria-label="Informações de contacto">
                <li>
                  <a href="tel:+351XXXXXXXXX" className="hover:text-primary transition-colors">
                    +351 XXX XXX XXX
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dogwarts.pt" className="hover:text-primary transition-colors">
                    info@dogwarts.pt
                  </a>
                </li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-sm">&copy; 2024 Dogwarts. Todos os direitos reservados.</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Desenvolvido por Daniela Silva & Tiago Santos</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

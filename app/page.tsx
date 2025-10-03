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
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar currentPage="/" />

      {/* Hero Section */}
      <section 
        className="relative section-padding bg-gradient-to-br from-background via-card to-muted/30 overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-accent/5" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left animate-fade-in">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-brand-primary/20 text-brand-secondary border-brand-primary/30 hover:bg-brand-primary/30 transition-colors"
                >
                  {t.hero.badge}
                </Badge>
                <h1 
                  id="hero-heading"
                  className="heading-responsive font-bold text-foreground leading-tight tracking-tight"
                >
                  {t.hero.title}
                </h1>
                <p className="text-responsive text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t.hero.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" role="group" aria-label="Ações principais">
                <Button 
                  size="lg" 
                  className="btn-primary focus-brand"
                  aria-label="Conhecer os nossos serviços de cuidados para cães"
                >
                  <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                  {t.hero.ctaPrimary}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white focus-brand"
                  aria-label="Contactar-nos agora para mais informações"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last animate-slide-up">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 flex items-center justify-center p-8 shadow-2xl">
                <img
                  src="/dogwarts-logo-with-tagline.png"
                  alt="Logo da Dogwarts com o slogan 'Cães Felizes & Donos Tranquilos'"
                  className="w-full h-full object-contain max-w-sm md:max-w-md transition-transform hover:scale-105 duration-300"
                  loading="eager"
                  width="400"
                  height="400"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-brand-primary rounded-full border-2 border-background shadow-sm" />
                    <div className="w-8 h-8 bg-brand-accent rounded-full border-2 border-background shadow-sm" />
                    <div className="w-8 h-8 bg-brand-success rounded-full border-2 border-background shadow-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">100+ Cães Felizes</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-brand-primary fill-current" />
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
        className="section-padding bg-background"
        aria-labelledby="services-heading"
        role="region"
      >
        <div className="container mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="secondary"
              className="bg-brand-primary/20 text-brand-secondary border-brand-primary/30 hover:bg-brand-primary/30 transition-colors"
            >
              {t.services.title}
            </Badge>
            <h2 
              id="services-heading"
              className="heading-responsive font-bold text-foreground"
            >
              {t.services.subtitle}
            </h2>
            <p className="text-responsive text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços pensados para o bem-estar dos seus cães e a sua tranquilidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list" aria-label="Lista de serviços oferecidos">
            {[
              {
                icon: Heart,
                title: t.services.items.daycare.title,
                desc: t.services.items.daycare.description,
                detail: t.services.items.daycare.detail,
                price: t.services.items.daycare.price,
                color: "brand-primary",
                bgColor: "bg-brand-primary/10",
                iconColor: "text-brand-primary",
                delay: "delay-100",
              },
              {
                icon: MapPin,
                title: t.services.items.walking.title,
                desc: t.services.items.walking.description,
                detail: t.services.items.walking.detail,
                price: t.services.items.walking.price,
                color: "brand-accent",
                bgColor: "bg-brand-accent/10",
                iconColor: "text-brand-accent",
                delay: "delay-200",
              },
              {
                icon: Clock,
                title: t.services.items.boarding.title,
                desc: t.services.items.boarding.description,
                detail: t.services.items.boarding.detail,
                price: t.services.items.boarding.price,
                color: "brand-success",
                bgColor: "bg-brand-success/10",
                iconColor: "text-brand-success",
                delay: "delay-300",
              },
              {
                icon: Heart,
                title: t.services.items.training.title,
                desc: t.services.items.training.description,
                detail: t.services.items.training.detail,
                price: t.services.items.training.price,
                color: "brand-warning",
                bgColor: "bg-brand-warning/10",
                iconColor: "text-brand-warning",
                delay: "delay-400",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="card-brand group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                role="listitem"
                aria-labelledby={`service-title-${index}`}
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {React.createElement(service.icon, { 
                      className: `w-10 h-10 ${service.iconColor}`,
                      "aria-hidden": "true"
                    })}
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
                    className={`${service.iconColor} border-current hover:bg-current hover:text-white transition-colors`}
                  >
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="btn-primary focus-brand"
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
        className="section-padding bg-gradient-to-br from-card to-muted/30"
        aria-labelledby="testimonials-heading"
        role="region"
      >
        <div className="container mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="secondary"
              className="bg-brand-primary/20 text-brand-secondary border-brand-primary/30 hover:bg-brand-primary/30 transition-colors"
            >
              Testemunhos
            </Badge>
            <h2 
              id="testimonials-heading"
              className="heading-responsive font-bold text-foreground"
            >
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-responsive text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de famílias que confiam nos nossos cuidados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Testemunhos dos clientes">
            {[
              {
                stars: 5,
                text: "A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos.",
                initials: "MC",
                name: "Maria Costa",
                role: "Tutora do Max",
                color: "brand-primary",
                bgColor: "bg-brand-primary/20",
                textColor: "text-brand-primary",
                delay: "delay-100",
              },
              {
                stars: 5,
                text: "Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!",
                initials: "JS",
                name: "João Silva",
                role: "Tutor da Luna",
                color: "brand-accent",
                bgColor: "bg-brand-accent/20",
                textColor: "text-brand-accent",
                delay: "delay-200",
              },
              {
                stars: 5,
                text: "Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.",
                initials: "AF",
                name: "Ana Ferreira",
                role: "Tutora do Bobby",
                color: "brand-success",
                bgColor: "bg-brand-success/20",
                textColor: "text-brand-success",
                delay: "delay-300",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="card-brand group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                role="listitem"
                aria-labelledby={`testimonial-author-${index}`}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-center mb-6">
                    <div className="flex" role="img" aria-label={`${testimonial.stars} estrelas de avaliação`}>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-brand-primary fill-current" 
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
                      className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}
                      aria-hidden="true"
                    >
                      <span className={`text-sm font-semibold ${testimonial.textColor}`}>{testimonial.initials}</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding bg-gradient-to-br from-brand-secondary to-brand-primary text-white relative overflow-hidden"
        aria-labelledby="cta-heading"
        role="region"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/90 via-brand-primary/80 to-brand-secondary/90" />
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        
        <div className="container mx-auto container-padding text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 
              id="cta-heading"
              className="heading-responsive font-bold text-white leading-tight"
            >
              Pronto para Dar ao Seu Cão o Melhor Cuidado?
            </h2>
            <p className="text-responsive text-white/90 leading-relaxed max-w-2xl mx-auto">
              Entre em contacto connosco hoje e descubra como podemos ajudar a manter o seu patudo feliz e você
              tranquilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center" role="group" aria-label="Ações de contacto">
              <Button 
                size="lg" 
                className="bg-white text-brand-secondary hover:bg-white/90 focus-brand"
                aria-label="Ligar para a Dogwarts agora"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Ligar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent focus-brand"
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
        className="bg-background border-t border-border section-padding"
        role="contentinfo"
        aria-label="Rodapé do site"
      >
        <div className="container mx-auto container-padding">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
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
                Cuidados caninos personalizados com amor e profissionalismo. O seu cão merece o melhor.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-foreground">Serviços</h3>
              <ul className="space-y-3 text-muted-foreground" role="list" aria-label="Lista de serviços">
                <li>
                  <Link href="/servicos" className="hover:text-brand-primary transition-colors focus-brand">
                    Petsitting
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-brand-primary transition-colors focus-brand">
                    Dogwalking
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-brand-primary transition-colors focus-brand">
                    Creche/Daycare
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-brand-primary transition-colors focus-brand">
                    Estadia Familiar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-foreground">Empresa</h3>
              <ul className="space-y-3 text-muted-foreground" role="list" aria-label="Links da empresa">
                <li>
                  <Link href="/sobre" className="hover:text-brand-primary transition-colors focus-brand">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/testemunhos" className="hover:text-brand-primary transition-colors focus-brand">
                    Testemunhos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-brand-primary transition-colors focus-brand">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-brand-primary transition-colors focus-brand">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-foreground">Contacto</h3>
              <ul className="space-y-3 text-muted-foreground" role="list" aria-label="Informações de contacto">
                <li>
                  <a href="tel:+351XXXXXXXXX" className="hover:text-brand-primary transition-colors focus-brand">
                    +351 XXX XXX XXX
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dogwarts.pt" className="hover:text-brand-primary transition-colors focus-brand">
                    info@dogwarts.pt
                  </a>
                </li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Dogwarts. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground">
                Desenvolvido por Daniela Silva & Tiago Santos
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

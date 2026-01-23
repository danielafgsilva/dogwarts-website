import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Home,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  Shield,
  Camera,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { responsive, brand } from "@/lib/responsive-utils";
import { getServicesPage, getSiteSettings, urlFor } from "@/lib/sanity";

export default async function ServicesPage() {
  const [servicesData, siteSettings] = await Promise.all([
    getServicesPage(),
    getSiteSettings()
  ]);
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
             <Navbar currentPage="/servicos" siteName={siteSettings?.siteName} />

      {/* Breadcrumb */}
      <div className="bg-card py-3 lg:py-4">
        <div className={responsive.container}>
          <div className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Serviços</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
        aria-labelledby="services-hero-heading"
        role="banner"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        
        <div className={`${responsive.container} ${responsive.textCenter} relative z-10`}>
          <div className={`${responsive.maxWidth['4xl']} mx-auto ${responsive.spaceY.lg}`}>
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30 transition-colors"
            >
              {servicesData?.hero?.badge || 'Os Nossos Serviços'}
            </Badge>
            <h1 
              id="services-hero-heading"
              className={`${responsive.heading1} font-serif text-balance`}
            >
              {servicesData?.hero?.title || 'Cuidados Personalizados para Cada Patudo'}
            </h1>
            <p className={`${responsive.bodyLarge} text-muted-foreground text-pretty ${responsive.maxWidth['2xl']} mx-auto`}>
              {servicesData?.hero?.description || 'Oferecemos uma gama completa de serviços pensados para o bem-estar dos seus cães e a sua total tranquilidade.'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`${responsive.sectionPadding} ${brand.gradients.accent}`}>
        <div className={responsive.container}>
          <div className={responsive.grid2}>
            {servicesData?.mainServices?.map((service: any) => (
            <Card key={service._key} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30">
              <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                {service.image ? (
                  <Image
                    src={urlFor(service.image).width(600).height(400).url()}
                    alt={`${service.title} - ${service.description}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Image
                    src="/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg"
                    alt={`${service.title} - ${service.description}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <CardHeader className="pb-4 lg:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#FDCF4D]/10 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-[#FDCF4D]/20 transition-colors">
                    <Home className="w-6 h-6 lg:w-8 lg:h-8 text-[#FDCF4D]" />
                  </div>
                  {service.badge && (
                    <Badge
                      variant="outline"
                      className="text-[#FDCF4D] border-[#FDCF4D] bg-[#FDCF4D]/10"
                    >
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div className="space-y-4">
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {service.detail}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm lg:text-base text-foreground">
                        O que está incluído:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                            <span className="text-xs lg:text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xl lg:text-2xl font-bold text-primary">
                      {service.price}
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      por serviço
                    </p>
                  </div>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contactos">Contactar-nos</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            )) || (
              // Fallback content
              <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30">
                <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src="/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg"
                    alt="Petsitting ao domicílio - cão confortável em casa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4 lg:pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#FDCF4D]/10 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-[#FDCF4D]/20 transition-colors">
                      <Home className="w-6 h-6 lg:w-8 lg:h-8 text-[#FDCF4D]" />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[#FDCF4D] border-[#FDCF4D] bg-[#FDCF4D]/10"
                    >
                      Mais Popular
                    </Badge>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold">
                    Petsitting ao Domicílio
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base">
                    Cuidados personalizados no conforto da sua casa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      Sessões de 1h30 onde cuidamos do seu cão no ambiente
                      familiar que ele conhece e ama. Mantemos a rotina,
                      proporcionamos carinho e garantimos que se sente seguro e
                      feliz.
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm lg:text-base text-foreground">
                        O que está incluído:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs lg:text-sm text-muted-foreground">
                            Alimentação e hidratação
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs lg:text-sm text-muted-foreground">
                            Brincadeiras e exercício
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs lg:text-sm text-muted-foreground">
                            Carinho e atenção personalizada
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs lg:text-sm text-muted-foreground">
                            Relatório com fotos
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs lg:text-sm text-muted-foreground">
                            Cuidados básicos de higiene
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xl lg:text-2xl font-bold text-primary">
                        15€
                      </p>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        por sessão de 1h30
                      </p>
                    </div>
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                      asChild
                    >
                      <Link href="/contactos">Contactar-nos</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 lg:py-20 bg-[#8B5CF6]/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge
              variant="secondary"
              className="bg-[#8B5CF6] text-white border-[#8B5CF6]"
            >
              {servicesData?.additionalServices?.title || 'Serviços Adicionais'}
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
              {servicesData?.additionalServices?.subtitle || 'Extras para o Máximo Conforto'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {servicesData?.additionalServices?.services?.map((service: any) => (
            <Card key={service._key} className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#8B5CF6]/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-[#8B5CF6]" />
                </div>
                <CardTitle className="text-lg lg:text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge
                  variant="outline"
                  className="text-[#8B5CF6] border-[#8B5CF6] bg-[#8B5CF6]/10"
                >
                  {service.included ? 'Incluído' : 'Disponível'}
                </Badge>
              </CardContent>
            </Card>
            )) || (
              // Fallback content
              <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#8B5CF6]/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-[#8B5CF6]" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl">
                    Relatórios Fotográficos
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base">
                    Updates regulares com fotos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm lg:text-base text-muted-foreground mb-4">
                    Receba fotos e vídeos do seu patudo durante os cuidados para
                    ficar sempre tranquilo.
                  </p>
                  <Badge
                    variant="outline"
                    className="text-[#8B5CF6] border-[#8B5CF6] bg-[#8B5CF6]/10"
                  >
                    Incluído
                  </Badge>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 lg:py-20 bg-[#10B981]/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge
              variant="secondary"
              className="bg-[#10B981] text-white border-[#10B981]"
            >
              {servicesData?.pricingPlans?.title || 'Planos e Descontos'}
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
              {servicesData?.pricingPlans?.subtitle || 'Escolha o Plano Ideal para o Seu Patudo'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {servicesData?.pricingPlans?.plans?.map((plan: any) => (
            <Card key={plan._key} className={`border-border hover:shadow-lg transition-all duration-300 ${plan.popular ? 'border-primary/30 relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl lg:text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    {plan.priceDescription}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs lg:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-transparent'}`}
                  asChild
                >
                  <Link href="/contactos">Contactar-nos</Link>
                </Button>
              </CardContent>
            </Card>
            )) || (
              // Fallback content
              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4 lg:pb-6">
                  <CardTitle className="text-lg lg:text-xl font-bold">
                    Ocasional
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base">
                    Para necessidades pontuais
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-2xl lg:text-3xl font-bold text-foreground">
                      Preço
                    </span>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      por serviço
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs lg:text-sm">Preços normais</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs lg:text-sm">
                        Todos os serviços disponíveis
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs lg:text-sm">
                        Relatórios incluídos
                      </span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    asChild
                  >
                    <Link href="/contactos">Contactar-nos</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${responsive.sectionPadding} bg-[#1F3B75] text-white`}>
        <div className={`${responsive.container} ${responsive.textCenter}`}>
          <div className={`${responsive.maxWidth['3xl']} mx-auto ${responsive.spaceY.lg}`}>
            <h2 className={`${responsive.heading1} font-serif text-balance text-white`}>
              {servicesData?.cta?.title || 'Pronto para Começar?'}
            </h2>
            <p className={`${responsive.bodyLarge} text-white text-pretty`}>
              {servicesData?.cta?.description || 'Entre em contacto connosco para discutir as necessidades do seu patudo e encontrar o serviço perfeito.'}
            </p>
            <div className={`${responsive.buttonGroupCenter}`}>
              <Button
                size="lg"
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
                asChild
              >
                <Link href="/contactos">
                  <Phone className="w-5 h-5 mr-2" />
                  {servicesData?.cta?.primaryButton || 'Contactar-nos'}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
                asChild
              >
                <Link href="/sobre">
                  <Heart className="w-5 h-5 mr-2" />
                  {servicesData?.cta?.secondaryButton || 'Conhecer-nos'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/dogwarts-logo-transparent.png"
                  alt="Dogwarts Logo"
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <span className="text-lg lg:text-xl font-bold">Dogwarts</span>
              </Link>
              <p className="text-sm lg:text-base text-muted-foreground text-pretty">
                Cães felizes & donos tranquilos desde 2023.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/servicos#petsitting"
                    className="hover:text-primary transition-colors"
                  >
                    Petsitting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos#dogwalking"
                    className="hover:text-primary transition-colors"
                  >
                    Dogwalking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos#daycare"
                    className="hover:text-primary transition-colors"
                  >
                    Creche/Daycare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos#estadia"
                    className="hover:text-primary transition-colors"
                  >
                    Estadia Familiar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/sobre"
                    className="hover:text-primary transition-colors"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testemunhos"
                    className="hover:text-primary transition-colors"
                  >
                    Testemunhos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>+351 XXX XXX XXX</li>
                <li>info@dogwarts.pt</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-6 lg:mt-8 pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs lg:text-sm text-muted-foreground">
            <p>&copy; 2024 Dogwarts. Todos os direitos reservados.</p>
            <p className="text-muted-foreground/60">
              Desenvolvido por Daniela Silva & Tiago Santos
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

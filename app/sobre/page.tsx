import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Home,
  Shield,
  Users,
  Star,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { responsive, brand } from "@/lib/responsive-utils";
import { getAboutPage, getSiteSettings } from "@/lib/sanity";

export default async function AboutPage() {
  const [aboutPageData, siteSettings] = await Promise.all([
    getAboutPage(),
    getSiteSettings()
  ]);
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <Navbar currentPage="/sobre" siteName={siteSettings?.siteName} />

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
            <span className="text-foreground font-medium">Sobre Nós</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
        aria-labelledby="about-hero-heading"
        role="banner"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        
        <div className={responsive.container}>
          <div className={`${responsive.grid2} items-center relative z-10`}>
            <div className={responsive.spaceY.lg}>
              <div className={responsive.spaceY.sm}>
                <Badge
                  variant="secondary"
                  className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30 transition-colors"
                >
                  {aboutPageData?.hero?.badge || 'A Nossa História'}
                </Badge>
                <h1 
                  id="about-hero-heading"
                  className={`${responsive.heading1} font-serif text-balance`}
                >
                  {aboutPageData?.hero?.title || 'Uma História de Amor e Confiança'}
                </h1>
                <p className={`${responsive.bodyLarge} text-muted-foreground text-pretty`}>
                  {aboutPageData?.hero?.description || 'Nascemos do coração de uma tutora que compreendeu, na prática, o que significa cuidar verdadeiramente dos nossos companheiros de quatro patas.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="carousel-container relative w-full h-full">
                  <div className="carousel-track flex transition-transform duration-500 ease-in-out w-full h-full">
                    <img
                      src="/founder-with-four-dogs-in-cozy-living-room-portra.jpg"
                      alt="Fundadora da Dogwarts com os seus quatro cães"
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                    <img
                      src="/happy-dogs-playing-together-in-sunny-garden-dogwa.jpg"
                      alt="Cães felizes a brincar no jardim"
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                    <img
                      src="/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg"
                      alt="Hora da sesta confortável"
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                    <img
                      src="/dog-walker-with-multiple-happy-dogs-in-lisbon-pa.jpg"
                      alt="Passeio com cães em Lisboa"
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  </div>
                  {/* Carousel controls */}
                  <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all">
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all">
                    <ChevronRight className="w-5 h-5 text-gray-800" />
                  </button>
                  {/* Carousel indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 bg-card border border-border rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg">
                <div className="text-center">
                  <p className="text-xl lg:text-2xl font-bold text-primary">
                    4
                  </p>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    Cães da Família
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 lg:py-20 bg-[#FDCF4D]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 lg:mb-16">
              <Badge
                variant="secondary"
                className="bg-[#8B5CF6] text-white border-[#8B5CF6]"
              >
                {aboutPageData?.founderStory?.badge || 'Setembro 2023'}
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
                {aboutPageData?.founderStory?.title || 'Como Tudo Começou'}
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="prose prose-lg max-w-none">
                  {aboutPageData?.founderStory?.content?.map((paragraph: string, index: number) => (
                    <p key={index} className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )) || (
                    // Fallback content
                    <>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        A Dogwarts nasceu em setembro de 2023, criada por uma tutora
                        apaixonada de quatro cães que viveu na pele os desafios de
                        deixar os seus companheiros quando precisava de trabalhar ou
                        viajar.
                      </p>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        Depois de anos a procurar soluções que realmente
                        compreendessem as necessidades emocionais dos cães, percebeu
                        que faltava algo no mercado: um serviço que tratasse cada
                        animal como família, não apenas como um "trabalho".
                      </p>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        Foi assim que nasceu a missão da Dogwarts: criar um espaço
                        onde os cães se sentem verdadeiramente em casa, rodeados de
                        amor, atenção e cuidados personalizados, para que os tutores
                        possam ter a tranquilidade que merecem.
                      </p>
                    </>
                  )}
                </div>

                <div className="bg-card rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-border">
                  <blockquote className="text-base lg:text-lg italic text-foreground">
                    {aboutPageData?.founderStory?.quote || '"Cada cão tem a sua personalidade única, os seus medos e as suas alegrias. O nosso trabalho é conhecê-los profundamente e cuidar deles como se fossem nossos."'}
                  </blockquote>
                  <cite className="text-sm text-muted-foreground mt-4 block">
                    — {aboutPageData?.founderStory?.quoteAuthor || 'Fundadora da Dogwarts'}
                  </cite>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <Card className="border-border">
                  <CardContent className="pt-4 lg:pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm lg:text-base">
                          Experiência
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          Tutora há mais de 8 anos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-4 lg:pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm lg:text-base">
                          Paixão
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          Amor genuíno pelos animais
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-4 lg:pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm lg:text-base">
                          Dedicação
                        </h3>
                        <p className="text-xs lg:text-sm text-muted-foreground">
                          Disponível 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-20 bg-[#8B5CF6]/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge
              variant="secondary"
              className="bg-[#10B981] text-white border-[#10B981]"
            >
              {aboutPageData?.values?.badge || 'Os Nossos Valores'}
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
              {aboutPageData?.values?.title || 'O Que Nos Move Todos os Dias'}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {aboutPageData?.values?.description || 'Três pilares fundamentais guiam cada decisão e cada cuidado que oferecemos aos nossos patudos.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aboutPageData?.values?.items?.map((value: any) => {
              const iconMap: { [key: string]: any } = {
                'Confiança': Shield,
                'Amor': Heart,
                'Familiaridade': Home,
              };
              const IconComponent = iconMap[value.title] || Shield;
              const colorMap: { [key: string]: string } = {
                'Confiança': '#FDCF4D',
                'Amor': '#8B5CF6',
                'Familiaridade': '#1F3B75',
              };
              const color = colorMap[value.title] || '#FDCF4D';
              
              return (
                <Card key={value._key} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-[#FDCF4D]/20 text-center">
                  <CardHeader className="pb-4">
                    <div 
                      className="w-16 h-16 lg:w-20 lg:h-20 value-icon-bg rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6"
                      style={{ '--value-color': color } as React.CSSProperties}
                    >
                      <IconComponent 
                        className="w-8 h-8 lg:w-10 lg:h-10 value-text" 
                        style={{ '--value-color': color } as React.CSSProperties}
                      />
                    </div>
                    <CardTitle 
                      className="text-xl lg:text-2xl font-bold value-text"
                      style={{ '--value-color': color } as React.CSSProperties}
                    >
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-sm lg:text-base">
                      {value.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 lg:mb-6">
                      {value.description}
                    </p>
                    <div className="space-y-2">
                      {value.features?.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center justify-center space-x-2 text-xs lg:text-sm text-muted-foreground">
                          <Star className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            }) || (
              // Fallback content
              <>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-[#FDCF4D]/20 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#FDCF4D]/10 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-[#FDCF4D]/20 transition-colors">
                      <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-[#FDCF4D]" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-bold text-[#FDCF4D]">
                      Confiança
                    </CardTitle>
                    <CardDescription className="text-sm lg:text-base">
                      A base de tudo o que fazemos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 lg:mb-6">
                      Construímos relações sólidas baseadas na transparência,
                      comunicação constante e no cumprimento rigoroso dos nossos
                      compromissos. A sua tranquilidade é a nossa prioridade.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-xs lg:text-sm text-muted-foreground">
                        <Star className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                        <span>Comunicação transparente</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-xs lg:text-sm text-muted-foreground">
                        <Star className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                        <span>Relatórios regulares</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-xs lg:text-sm text-muted-foreground">
                        <Star className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                        <span>Disponibilidade total</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-20 bg-[#10B981]/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-[#F59E0B] text-white border-[#F59E0B]"
            >
              A Nossa Família
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-balance">
              Momentos Especiais com os Nossos Patudos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src="/happy-dogs-playing-together-in-sunny-garden-dogwa.jpg"
                alt="Cães felizes a brincar no jardim da Dogwarts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20">
              <img
                src="/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg"
                alt="Hora da sesta confortável na sala da Dogwarts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20">
              <img
                src="/dog-walker-with-multiple-happy-dogs-in-lisbon-pa.jpg"
                alt="Passeio com vários cães felizes no parque de Lisboa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${responsive.sectionPadding} bg-[#1F3B75] text-white`}>
        <div className={`${responsive.container} ${responsive.textCenter}`}>
          <div className={`${responsive.maxWidth['3xl']} mx-auto ${responsive.spaceY.lg}`}>
            <h2 className={`${responsive.heading1} font-serif text-balance text-white`}>
              {aboutPageData?.cta?.title || 'Quer Conhecer Melhor a Nossa Família?'}
            </h2>
            <p className={`${responsive.bodyLarge} text-white text-pretty`}>
              {aboutPageData?.cta?.description || 'Venha conhecer-nos pessoalmente e descubra como podemos cuidar do seu patudo com todo o amor e dedicação que ele merece.'}
            </p>
            <div className={`${responsive.buttonGroupCenter}`}>
              <Button
                size="lg"
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
                asChild
              >
                <Link href="/contactos">
                  <Users className="w-5 h-5 mr-2" />
                  {aboutPageData?.cta?.primaryButton || 'Contactar-nos'}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
                asChild
              >
                <Link href="/servicos">
                  <Heart className="w-5 h-5 mr-2" />
                  {aboutPageData?.cta?.secondaryButton || 'Ver Serviços'}
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
                    href="/servicos"
                    className="hover:text-primary transition-colors"
                  >
                    Petsitting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="hover:text-primary transition-colors"
                  >
                    Dogwalking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="hover:text-primary transition-colors"
                  >
                    Creche/Daycare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
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

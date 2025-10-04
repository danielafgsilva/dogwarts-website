import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Camera, Calendar, MapPin, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { STATISTICS } from "@/lib/constants"
import { responsive, brand } from "@/lib/responsive-utils"
import { getTestimonialsPage, getTestimonials, getSiteSettings } from "@/lib/sanity"

export default async function TestimonialsPage() {
  const [testimonialsPageData, testimonials, siteSettings] = await Promise.all([
    getTestimonialsPage(),
    getTestimonials(),
    getSiteSettings()
  ]);
  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage="/testemunhos" siteName={siteSettings?.siteName} />

      {/* Breadcrumb */}
      <div className="bg-card py-4">
        <div className={responsive.container}>
          <div className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Testemunhos</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
        aria-labelledby="testimonials-hero-heading"
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
              {testimonialsPageData?.hero?.badge || 'Testemunhos dos Nossos Clientes'}
            </Badge>
            <h1 
              id="testimonials-hero-heading"
              className={`${responsive.heading1} font-serif text-balance`}
            >
              {testimonialsPageData?.hero?.title || 'Histórias de Amor e Confiança'}
            </h1>
            <p className={`${responsive.bodyLarge} text-muted-foreground text-pretty ${responsive.maxWidth['2xl']} mx-auto`}>
              {testimonialsPageData?.hero?.description || 'Descubra o que os nossos clientes e os seus patudos pensam sobre os cuidados da Dogwarts através das suas próprias palavras.'}
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">{STATISTICS.happyDogs.value}</div>
                <div className="text-sm text-muted-foreground">{STATISTICS.happyDogs.label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">{STATISTICS.satisfaction.value}</div>
                <div className="text-sm text-muted-foreground">{STATISTICS.satisfaction.label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{STATISTICS.yearsExperience.value}</div>
                <div className="text-sm text-muted-foreground">{STATISTICS.yearsExperience.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12 text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  "{testimonialsPageData?.featuredTestimonial?.text || 'A Dogwarts transformou completamente a nossa vida! O Max fica sempre feliz quando vai para lá e eu trabalho tranquila sabendo que está em boas mãos. O cuidado é excepcional e o carinho genuíno.'}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder-user.jpg" alt={testimonialsPageData?.featuredTestimonial?.name || 'Maria Costa'} />
                    <AvatarFallback className="bg-primary/20 text-primary text-lg font-semibold">
                      {testimonialsPageData?.featuredTestimonial?.initials || 'MC'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">{testimonialsPageData?.featuredTestimonial?.name || 'Maria Costa'}</div>
                    <div className="text-muted-foreground">{testimonialsPageData?.featuredTestimonial?.role || 'Tutora do Max (Golden Retriever)'}</div>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonialsPageData?.featuredTestimonial?.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">{testimonialsPageData?.featuredTestimonial?.rating || 5}.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{testimonialsPageData?.testimonialsGrid?.title || 'O Que Dizem os Nossos Clientes'}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {testimonialsPageData?.testimonialsGrid?.description || 'Cada testemunho é uma história de confiança, amor e cuidado especializado.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsPageData?.testimonialsGrid?.testimonials?.map((testimonial: any) => (
              <Card key={testimonial._key} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{testimonial.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )) || (
              // Fallback content
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">Janeiro 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">"Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                          JS
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">João Silva</div>
                        <div className="text-sm text-muted-foreground">Tutor da Luna</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Dogwalking
                    </Badge>
                  </div>
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
              {testimonialsPageData?.cta?.title || 'Pronto para Fazer Parte da Nossa Família?'}
            </h2>
            <p className={`${responsive.bodyLarge} text-white text-pretty`}>
              {testimonialsPageData?.cta?.description || 'Junte-se aos nossos clientes satisfeitos e dê ao seu cão o cuidado que ele merece.'}
            </p>
            <div className={`${responsive.buttonGroupCenter}`}>
              <Button
                size="lg"
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
                asChild
              >
                <Link href="/contactos">
                  <Phone className="w-5 h-5 mr-2" />
                  {testimonialsPageData?.cta?.primaryButton || 'Contactar Agora'}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
                asChild
              >
                <Link href="/servicos">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {testimonialsPageData?.cta?.secondaryButton || 'Ver Serviços'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <img src="/dogwarts-logo-transparent.png" alt="Dogwarts Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">Dogwarts</span>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
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
              <ul className="space-y-2 text-muted-foreground text-sm">
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
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>+351 XXX XXX XXX</li>
                <li>info@dogwarts.pt</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-sm">
                &copy; 2024 Dogwarts. Todos os direitos reservados.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Desenvolvido por Daniela Silva & Tiago Santos
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

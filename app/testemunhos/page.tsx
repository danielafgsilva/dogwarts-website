import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Camera, Calendar, MapPin, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { STATISTICS } from "@/lib/constants"
import { responsive, brand } from "@/lib/responsive-utils"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar currentPage="/testemunhos" />

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
      <section className={`${responsive.sectionPadding} bg-[#1F3B75] text-white`}>
        <div className={`${responsive.container} ${responsive.textCenter}`}>
          <div className={`${responsive.maxWidth['4xl']} mx-auto ${responsive.spaceY.lg}`}>
            <Badge
              variant="secondary"
              className="bg-[#FDCF4D] text-[#1F3B75] border-[#FDCF4D]"
            >
              Testemunhos dos Nossos Clientes
            </Badge>
            <h1 className={`${responsive.heading1} font-serif text-balance text-white`}>
              Histórias de <span className="text-[#FDCF4D]">Amor</span> e{" "}
              <span className="text-white">Confiança</span>
            </h1>
            <p className={`${responsive.bodyLarge} text-white/90 text-pretty ${responsive.maxWidth['2xl']} mx-auto`}>
              Descubra o que os nossos clientes e os seus patudos pensam sobre
              os cuidados da Dogwarts através das suas próprias palavras.
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#FDCF4D]">{STATISTICS.happyDogs.value}</div>
                <div className="text-sm text-white/80">{STATISTICS.happyDogs.label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{STATISTICS.satisfaction.value}</div>
                <div className="text-sm text-white/80">{STATISTICS.satisfaction.label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FDCF4D]">{STATISTICS.yearsExperience.value}</div>
                <div className="text-sm text-white/80">{STATISTICS.yearsExperience.label}</div>
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
                  "A Dogwarts transformou completamente a nossa vida! O Max fica sempre feliz quando vai para lá e eu
                  trabalho tranquila sabendo que está em boas mãos. O cuidado é excepcional e o carinho genuíno."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder-user.jpg" alt="Maria Costa" />
                    <AvatarFallback className="bg-primary/20 text-primary text-lg font-semibold">MC</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">Maria Costa</div>
                    <div className="text-muted-foreground">Tutora do Max (Golden Retriever)</div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">5.0</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">O Que Dizem os Nossos Clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada testemunho é uma história de confiança, amor e cuidado especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "João Silva",
                role: "Tutor da Luna",
                avatar: "JS",
                rating: 5,
                text: "Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!",
                service: "Dogwalking",
                date: "Janeiro 2024"
              },
              {
                name: "Ana Ferreira",
                role: "Tutora do Bobby",
                avatar: "AF",
                rating: 5,
                text: "Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.",
                service: "Estadia Familiar",
                date: "Dezembro 2023"
              },
              {
                name: "Carlos Santos",
                role: "Tutor da Mia",
                avatar: "CS",
                rating: 5,
                text: "A Mia é muito tímida, mas na Dogwarts ela se sente em casa. O cuidado personalizado faz toda a diferença.",
                service: "Petsitting",
                date: "Fevereiro 2024"
              },
              {
                name: "Sofia Rodrigues",
                role: "Tutora do Rex",
                avatar: "SR",
                rating: 5,
                text: "O Rex adora ir à creche! Volta sempre com energia gasta e muito feliz. Equipe fantástica!",
                service: "Creche/Daycare",
                date: "Março 2024"
              },
              {
                name: "Miguel Costa",
                role: "Tutor da Bella",
                avatar: "MC",
                rating: 5,
                text: "Serviço excepcional! A Bella fica sempre feliz e bem cuidada. Recomendo sem hesitação.",
                service: "Petsitting",
                date: "Abril 2024"
              },
              {
                name: "Rita Alves",
                role: "Tutora do Thor",
                avatar: "RA",
                rating: 5,
                text: "O Thor é muito energético, mas na Dogwarts ele se diverte e socializa. Excelente trabalho!",
                service: "Dogwalking",
                date: "Maio 2024"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
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
                          {testimonial.avatar}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${responsive.sectionPadding} bg-[#1F3B75] text-white`}>
        <div className={`${responsive.container} ${responsive.textCenter}`}>
          <div className={`${responsive.maxWidth['3xl']} mx-auto ${responsive.spaceY.lg}`}>
            <h2 className={`${responsive.heading1} text-balance text-white`}>
              Pronto para Fazer Parte da Nossa Família?
            </h2>
            <p className={`${responsive.bodyLarge} text-white/90 text-pretty`}>
              Junte-se aos nossos clientes satisfeitos e dê ao seu cão o cuidado que ele merece.
            </p>
            <div className={`${responsive.buttonGroupCenter}`}>
              <Button
                size="lg"
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ver Serviços
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

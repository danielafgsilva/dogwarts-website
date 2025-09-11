import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Camera, Calendar, MapPin, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function TestimonialsPage() {
  const heroAnimation = useScrollAnimation()
  const featuredAnimation = useScrollAnimation()
  const gridAnimation = useScrollAnimation()
  const galleryAnimation = useScrollAnimation()
  const statsAnimation = useScrollAnimation()
  const ctaAnimation = useScrollAnimation()

  return (
    <div className="min-h-screen">
      <Navbar currentPage="/testemunhos" />

      {/* Breadcrumb */}
      <div className="bg-card py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Testemunhos</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref}
        className={`py-20 lg:py-32 bg-gradient-to-br from-card to-background transition-all duration-1000 ${
          heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-gray-800 border-primary/30 dark:bg-primary/30 dark:text-gray-100"
            >
              Testemunhos dos Nossos Clientes
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Histórias de <span className="text-primary">Amor</span> e <span className="text-accent">Confiança</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Descubra o que os nossos clientes e os seus patudos pensam sobre os cuidados da Dogwarts através das suas
              próprias palavras.
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Cães Felizes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">5.0</p>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section
        ref={featuredAnimation.ref}
        className={`py-20 bg-background transition-all duration-1000 delay-200 ${
          featuredAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-accent/20 text-gray-800 border-accent/30 dark:bg-accent/30 dark:text-gray-100"
            >
              Depoimentos em Destaque
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-balance">O Que Dizem os Nossos Clientes</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Testimonial 1 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">MC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Maria Costa</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <span>Tutora do Max (Golden Retriever)</span>
                    </CardDescription>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">há 2 meses</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "A Dogwarts transformou completamente a nossa rotina! O Max sempre foi um cão ansioso quando eu saía
                  para trabalhar, mas desde que começámos com os serviços da Dogwarts, ele fica sempre feliz e
                  tranquilo. A atenção personalizada e o carinho genuíno fazem toda a diferença. Recomendo vivamente!"
                </blockquote>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Cliente desde 2023</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Benfica, Lisboa</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Testimonial 2 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-accent/10 text-accent text-lg font-semibold">JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl">João Silva</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <span>Tutor da Luna (Border Collie)</span>
                    </CardDescription>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">há 1 mês</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "Profissionalismo e carinho genuíno - é assim que defino a Dogwarts. A Luna adora os passeios e volta
                  sempre cansada e feliz. As fotos que recebo durante o dia dão-me uma tranquilidade total. É como ter
                  uma família alargada a cuidar da minha patuda. Cinco estrelas sem hesitação!"
                </blockquote>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Cliente desde 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Príncipe Real, Lisboa</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* More Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3">
                    <AvatarFallback className="bg-secondary/10 text-secondary">AF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ana Ferreira</p>
                    <p className="text-sm text-muted-foreground">Tutora do Bobby</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty">
                  "Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de
                  confiança total."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3">
                    <AvatarFallback className="bg-primary/10 text-primary">RP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ricardo Pereira</p>
                    <p className="text-sm text-muted-foreground">Tutor do Zeus</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty">
                  "O Zeus tem necessidades especiais e a equipa da Dogwarts adaptou-se perfeitamente. Cuidado
                  excecional!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3">
                    <AvatarFallback className="bg-accent/10 text-accent">CS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Carla Santos</p>
                    <p className="text-sm text-muted-foreground">Tutora da Bella</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty">
                  "A Bella adora a creche! Socializa com outros cães e volta sempre feliz. Melhor decisão que tomei."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3">
                    <AvatarFallback className="bg-chart-4/10 text-chart-4">PM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Paulo Martins</p>
                    <p className="text-sm text-muted-foreground">Tutor do Rex</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty">
                  "Comunicação excelente! Recebo sempre fotos e updates. Sinto-me tranquilo durante o trabalho."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3">
                    <AvatarFallback className="bg-secondary/10 text-secondary">IL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Inês Lima</p>
                    <p className="text-sm text-muted-foreground">Tutora da Mia</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty">
                  "A Mia era muito tímida, mas com a paciência da equipa, agora é uma cãozinha sociável e feliz!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3">
                    <AvatarFallback className="bg-primary/10 text-primary">TG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Tiago Gomes</p>
                    <p className="text-sm text-muted-foreground">Tutor do Simba</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty">
                  "Flexibilidade de horários fantástica! Adaptam-se sempre às minhas necessidades profissionais."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        ref={galleryAnimation.ref}
        className={`py-20 bg-card transition-all duration-1000 delay-300 ${
          galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`text-center space-y-4 mb-16 transition-all duration-700 ${
              galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Badge
              variant="secondary"
              className="bg-primary/20 text-gray-800 border-primary/30 dark:bg-primary/30 dark:text-gray-100"
            >
              Galeria de Momentos Felizes
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-balance">Os Nossos Patudos em Ação</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Veja alguns dos momentos mais especiais que partilhamos com os nossos amigos de quatro patas.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                src: "/happy-golden-retriever-playing-in-garden.jpg",
                alt: "Max, o Golden Retriever, a brincar feliz no jardim da Dogwarts",
                delay: "delay-100",
              },
              {
                src: "/border-collie-enjoying-walk-in-park.jpg",
                alt: "Luna, a Border Collie, a desfrutar de um passeio no parque de Lisboa",
                delay: "delay-200",
              },
              {
                src: "/french-bulldog-napping-comfortably.jpg",
                alt: "Bobby, o Bulldog Francês, a descansar confortavelmente na Dogwarts",
                delay: "delay-300",
              },
              {
                src: "/german-shepherd-receiving-special-care.jpg",
                alt: "Zeus, o Pastor Alemão, a receber cuidados especiais na Dogwarts",
                delay: "delay-400",
              },
              {
                src: "/labrador-socializing-at-daycare.jpg",
                alt: "Bella, a Labrador, a socializar na creche da Dogwarts em Lisboa",
                delay: "delay-500",
              },
              {
                src: "/beagle-enjoying-outdoor-activities.jpg",
                alt: "Rex, o Beagle, a desfrutar de atividades ao ar livre na Dogwarts",
                delay: "delay-600",
              },
              {
                src: "/cocker-spaniel-transformation-shy-to-social.jpg",
                alt: "Mia, a Cocker Spaniel, na sua transformação de tímida para sociável",
                delay: "delay-700",
              },
              {
                src: "/mixed-breed-dog-flexible-schedule-care.jpg",
                alt: "Simba, cão de raça mista, a beneficiar dos horários flexíveis da Dogwarts",
                delay: "delay-800",
              },
            ].map((image, index) => (
              <div
                key={index}
                className={`aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-700 ${image.delay} ${
                  galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div
            className={`text-center transition-all duration-700 delay-900 ${
              galleryAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" variant="outline" className="bg-transparent">
              <Camera className="w-5 h-5 mr-2" />
              Ver Mais Fotos no Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsAnimation.ref}
        className={`py-20 bg-background transition-all duration-1000 delay-400 ${
          statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">150+</p>
              <p className="text-muted-foreground">Cães Cuidados</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-accent">98%</p>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-secondary">500+</p>
              <p className="text-muted-foreground">Horas de Cuidados</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-chart-4">24/7</p>
              <p className="text-muted-foreground">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref}
        className={`py-20 bg-secondary text-secondary-foreground transition-all duration-1000 delay-500 ${
          ctaAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-balance">
              Quer Juntar-se às Nossas Histórias de Sucesso?
            </h2>
            <p className="text-xl text-secondary-foreground/80 text-pretty">
              Descubra como podemos fazer do seu patudo mais um dos nossos casos de sucesso. Entre em contacto connosco
              hoje!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Contactar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/dogwarts-logo-transparent.png" alt="Dogwarts Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-serif font-bold">Dogwarts</span>
              </Link>
              <p className="text-muted-foreground text-pretty">Cães felizes & donos tranquilos desde 2023.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground">
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
              <ul className="space-y-2 text-muted-foreground">
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
              <ul className="space-y-2 text-muted-foreground">
                <li>+351 XXX XXX XXX</li>
                <li>info@dogwarts.pt</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-sm">&copy; 2024 Dogwarts. Todos os direitos reservados.</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Desenvolvido por Daniela Silva & Tiago Santos</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  return (
    <div className="min-h-screen font-inter">
      {/* Navigation */}
      <Navbar currentPage="/contactos" />

      {/* Breadcrumb */}
      <div className="bg-card py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Contactos</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Entre em Contacto
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-inter font-bold text-balance leading-tight">
              Vamos <span className="text-primary">Conversar</span> sobre o Seu Patudo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Estamos aqui para responder às suas questões e ajudar a encontrar o melhor cuidado para o seu cão. Entre
              em contacto connosco!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Phone */}
            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl font-inter font-semibold">Telefone</CardTitle>
                <CardDescription>Ligue-nos diretamente</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl md:text-2xl font-bold text-primary mb-2">+351 XXX XXX XXX</p>
                <p className="text-sm text-muted-foreground mb-4">Disponível das 8h às 20h</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:border-accent/20">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                </div>
                <CardTitle className="text-lg md:text-xl font-inter font-semibold">WhatsApp</CardTitle>
                <CardDescription>Mensagem rápida e fácil</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl md:text-2xl font-bold text-accent mb-2">+351 XXX XXX XXX</p>
                <p className="text-sm text-muted-foreground mb-4">Resposta rápida garantida</p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:border-secondary/20">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                </div>
                <CardTitle className="text-lg md:text-xl font-inter font-semibold">Email</CardTitle>
                <CardDescription>Para questões detalhadas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg font-semibold text-secondary mb-2">info@dogwarts.pt</p>
                <p className="text-sm text-muted-foreground mb-4">Resposta em 24h</p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-inter font-semibold">Envie-nos uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e entraremos em contacto consigo o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" placeholder="O seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apelido</Label>
                      <Input id="lastName" placeholder="O seu apelido" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="o.seu.email@exemplo.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" placeholder="+351 XXX XXX XXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dogName">Nome do Cão</Label>
                    <Input id="dogName" placeholder="Nome do seu patudo" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petsitting">Petsitting ao Domicílio</SelectItem>
                        <SelectItem value="dogwalking">Dogwalking</SelectItem>
                        <SelectItem value="daycare">Creche/Daycare</SelectItem>
                        <SelectItem value="estadia">Estadia Familiar</SelectItem>
                        <SelectItem value="consulta">Consulta Gratuita</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos mais sobre o seu cão e as suas necessidades..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-6 md:space-y-8">
              {/* Location */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-inter font-semibold flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Dogwarts - Cuidados Caninos</p>
                    <p className="text-muted-foreground">Rua dos Patudos, 123</p>
                    <p className="text-muted-foreground">1200-000 Lisboa</p>
                    <p className="text-muted-foreground">Portugal</p>
                  </div>

                  {/* Map Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center space-y-2">
                      <MapPin className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto" />
                      <p className="text-sm text-muted-foreground">Mapa Interativo</p>
                      <p className="text-xs text-muted-foreground">Lisboa, Portugal</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-inter font-semibold flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-accent" />
                    Horários de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Segunda a Sexta</span>
                      <span className="font-medium">8:00 - 20:00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sábado</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Domingo</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Emergências</span>
                      <span className="font-medium text-accent">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-inter font-semibold">
                    Siga-nos nas Redes Sociais
                  </CardTitle>
                  <CardDescription>Veja os nossos patudos felizes todos os dias!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white bg-transparent"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Instagram
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                    >
                      <Facebook className="w-5 h-5 mr-2" />
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Perguntas Frequentes
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-inter font-bold text-balance">
              Tem Dúvidas? Temos Respostas!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Como funciona o primeiro encontro?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fazemos sempre uma consulta gratuita para conhecer o seu cão e as suas necessidades.
                </p>
                <Link href="/faq" className="text-primary hover:underline text-sm">
                  Saber mais →
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Que cuidados especiais oferecem?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Adaptamos os nossos serviços às necessidades específicas de cada cão, incluindo medicação.
                </p>
                <Link href="/faq" className="text-primary hover:underline text-sm">
                  Saber mais →
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Como posso contactar-vos?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pode contactar por telefone, WhatsApp, email ou através do nosso formulário online.
                </p>
                <Link href="/faq" className="text-primary hover:underline text-sm">
                  Saber mais →
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/faq">Ver Todas as FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-inter font-bold text-balance">
              Pronto para Conhecer a Dogwarts?
            </h2>
            <p className="text-lg md:text-xl text-secondary-foreground/80 text-pretty">
              Entre em contacto connosco e venha conhecer como podemos cuidar do seu patudo com todo o amor que ele
              merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
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
      <footer className="bg-background border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-8 h-8">
                  <Image src="/dogwarts-logo-transparent.png" alt="Dogwarts Logo" fill={true} className="object-contain" />
                </div>
                <span className="text-lg md:text-xl font-inter font-bold">Dogwarts</span>
              </Link>
              <p className="text-muted-foreground text-pretty text-sm">Cães felizes & donos tranquilos desde 2023.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-inter">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
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
              <h3 className="font-semibold mb-4 font-inter">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
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
              <h3 className="font-semibold mb-4 font-inter">Contacto</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>+351 XXX XXX XXX</li>
                <li>info@dogwarts.pt</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>&copy; 2024 Dogwarts. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido por Daniela Silva & Tiago Santos</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

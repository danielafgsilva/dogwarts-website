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

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <Navbar currentPage="/servicos" />

      {/* Breadcrumb */}
      <div className="bg-card py-3 lg:py-4">
        <div className="container mx-auto px-4">
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
      <section className="py-12 lg:py-20 xl:py-32 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Os Nossos Serviços
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
              Cuidados <span className="text-primary">Personalizados</span> para
              Cada Patudo
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços pensados para o bem-estar
              dos seus cães e a sua total tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Petsitting */}
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
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Home className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-primary border-primary/30 bg-primary/5"
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

            {/* Dogwalking */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/30">
              <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20">
                <img
                  src="/dog-walker-with-multiple-happy-dogs-in-lisbon-pa.jpg"
                  alt="Dogwalking - passeio com cães felizes no parque"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4 lg:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold">
                  Dogwalking
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Passeios energizantes e socializantes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div className="space-y-4">
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Passeios adaptados às necessidades e energia do seu cão.
                    Exploramos parques, praias e zonas verdes para garantir
                    exercício físico e estímulo mental adequados.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm lg:text-base text-foreground">
                      O que está incluído:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Passeio de 45-60 minutos
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Socialização com outros cães
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Exercício físico adequado
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Fotos durante o passeio
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Limpeza das patas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xl lg:text-2xl font-bold text-accent">
                      12€
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      por passeio
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contactos">Contactar-nos</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Creche/Daycare */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/30">
              <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20">
                <img
                  src="/happy-dogs-playing-together-in-sunny-garden-dogwa.jpg"
                  alt="Creche/Daycare - cães brincando juntos no jardim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4 lg:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary/10 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold">
                  Creche/Daycare
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Cuidados diurnos num ambiente seguro
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div className="space-y-4">
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Um dia completo de diversão, socialização e cuidados num
                    ambiente controlado e seguro. Perfeito para cães que
                    precisam de companhia durante o seu dia de trabalho.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm lg:text-base text-foreground">
                      O que está incluído:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-secondary flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Cuidados das 8h às 18h
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-secondary flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Refeições e snacks
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-secondary flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Atividades e brincadeiras
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-secondary flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Socialização supervisionada
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-secondary flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Relatório diário completo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xl lg:text-2xl font-bold text-secondary">
                      25€
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      por dia completo
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contactos">Contactar-nos</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Estadia Familiar */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-chart-4/30">
              <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-chart-4/20 to-primary/20">
                <img
                  src="/founder-with-four-dogs-in-cozy-living-room-portra.jpg"
                  alt="Estadia Familiar - ambiente familiar acolhedor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4 lg:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-chart-4/10 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-chart-4/20 transition-colors">
                    <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-chart-4" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-chart-4 border-chart-4/30 bg-chart-4/5"
                  >
                    Premium
                  </Badge>
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold">
                  Estadia Familiar
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Hospedagem completa na nossa família
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div className="space-y-4">
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    O seu cão fica integrado na nossa família durante as suas
                    férias ou viagens. Cuidados 24h, muito amor e um ambiente
                    verdadeiramente familiar.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm lg:text-base text-foreground">
                      O que está incluído:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-chart-4 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Cuidados 24h por dia
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-chart-4 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Todas as refeições incluídas
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-chart-4 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Passeios diários
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-chart-4 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Updates diários com fotos
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-chart-4 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-muted-foreground">
                          Ambiente familiar acolhedor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xl lg:text-2xl font-bold text-chart-4">
                      30€
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      por dia
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-chart-4 text-chart-4 hover:bg-chart-4 hover:text-white bg-transparent w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contactos">Contactar-nos</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Serviços Adicionais
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
              Extras para o Máximo Conforto
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
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
                  className="text-primary border-primary/30"
                >
                  Incluído
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />
                </div>
                <CardTitle className="text-lg lg:text-xl">
                  Comunicação 24/7
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Sempre disponível para si
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm lg:text-base text-muted-foreground mb-4">
                  Contacto direto via WhatsApp ou telefone para qualquer questão
                  ou emergência.
                </p>
                <Badge
                  variant="outline"
                  className="text-accent border-accent/30"
                >
                  Incluído
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-secondary/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-secondary" />
                </div>
                <CardTitle className="text-lg lg:text-xl">
                  Seguro de Responsabilidade
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Proteção total garantida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm lg:text-base text-muted-foreground mb-4">
                  Todos os nossos serviços estão cobertos por seguro de
                  responsabilidade civil.
                </p>
                <Badge
                  variant="outline"
                  className="text-secondary border-secondary/30"
                >
                  Incluído
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Planos e Descontos
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
              Escolha o Plano Ideal para o Seu Patudo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Ocasional */}
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

            {/* Regular */}
            <Card className="border-primary/30 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl font-bold">
                  Regular
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Para cuidados semanais
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl lg:text-3xl font-bold text-primary">
                    -10%
                  </span>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    desconto em todos os serviços
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs lg:text-sm">10% desconto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs lg:text-sm">
                      Prioridade no agendamento
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs lg:text-sm">
                      Relatórios detalhados
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs lg:text-sm">
                      Flexibilidade de horários
                    </span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="/contactos">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4 lg:pb-6">
                <CardTitle className="text-lg lg:text-xl font-bold">
                  Premium
                </CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Para cuidados diários
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl lg:text-3xl font-bold text-accent">
                    -20%
                  </span>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    desconto em todos os serviços
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                    <span className="text-xs lg:text-sm">20% desconto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                    <span className="text-xs lg:text-sm">
                      Cuidador dedicado
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                    <span className="text-xs lg:text-sm">
                      Serviços personalizados
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-accent flex-shrink-0" />
                    <span className="text-xs lg:text-sm">
                      Suporte 24/7 prioritário
                    </span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  asChild
                >
                  <Link href="/contactos">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
              Pronto para Começar?
            </h2>
            <p className="text-lg lg:text-xl text-secondary-foreground/80 text-pretty">
              Entre em contacto connosco para discutir as necessidades do seu
              patudo e encontrar o serviço perfeito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contactos">
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar-nos
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/sobre">
                  <Heart className="w-5 h-5 mr-2" />
                  Conhecer-nos
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

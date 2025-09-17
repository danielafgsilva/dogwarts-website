"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Home, MapPin, Clock, Star, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar currentPage="/" />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-card to-background flex items-center overflow-hidden">
        <div className="container mx-auto px-4 w-full h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full h-full">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-[#FDCF4D] text-[#1F3B75] border-[#FDCF4D] hover:bg-[#FDCF4D]/90"
              >
                Desde Setembro 2023
              </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Cães Felizes &{" "}
                  <span className="text-[#1F3B75] dark:text-[#FDCF4D]">
                    Donos Tranquilos
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                  Um espaço seguro e familiar onde os seus cães se sentem em
                  casa, criado por uma tutora que compreende as necessidades dos
                  animais quando os donos estão ausentes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90 border-[#FDCF4D]"
                >
                  <Heart className="w-5 h-5 mr-2 text-[#1F3B75]" />
                  Conhecer Serviços
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D] hover:text-[#1F3B75] bg-transparent hover:border-[#FDCF4D]"
                >
                  <Phone className="w-5 h-5 mr-2 text-[#1F3B75]" />
                  Contactar Agora
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last flex items-center justify-center">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4 md:p-8">
                <img
                  src="/dogwarts-logo-with-tagline.png"
                  alt="Dogwarts - Cães Felizes & Donos Tranquilos"
                  className="w-full h-full object-contain max-w-sm md:max-w-md"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-border rounded-2xl p-3 md:p-4 shadow-lg">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="flex -space-x-1 md:-space-x-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#FDCF4D] rounded-full border-2 border-background"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#8B5CF6] rounded-full border-2 border-background"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#10B981] rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">
                      100+ Cães Felizes
                    </p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-[#FDCF4D] fill-current" />
                      <span className="text-xs md:text-sm text-muted-foreground ml-1">
                        5.0 avaliação
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-12 md:py-20 bg-[#FDCF4D]/5">
        <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <Badge
            variant="secondary"
            className="bg-[#FDCF4D] text-[#1F3B75] border-[#FDCF4D]"
          >
            Os Nossos Serviços
          </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance">
              Cuidados Personalizados para Cada Patudo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Oferecemos uma gama completa de serviços pensados para o bem-estar
              dos seus cães e a sua tranquilidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Home,
                title: "Petsitting",
                desc: "Cuidados ao domicílio",
                detail:
                  "Sessões de 1h30 no conforto da sua casa, mantendo a rotina do seu cão.",
                price: "A partir de 15€",
                color: "primary",
                delay: "delay-100",
                bgColor: "bg-[#FDCF4D]/10",
                iconColor: "text-[#FDCF4D]",
                priceColor: "bg-[#FDCF4D] text-[#1F3B75]",
              },
              {
                icon: MapPin,
                title: "Dogwalking",
                desc: "Passeios diários",
                detail:
                  "Passeios energizantes e socializantes adaptados às necessidades do seu cão.",
                price: "A partir de 12€",
                color: "accent",
                delay: "delay-200",
                bgColor: "bg-[#8B5CF6]/10",
                iconColor: "text-[#8B5CF6]",
                priceColor: "bg-[#8B5CF6] text-white",
              },
              {
                icon: Clock,
                title: "Creche/Daycare",
                desc: "Cuidados diurnos",
                detail:
                  "Ambiente seguro e divertido para o seu cão durante o dia de trabalho.",
                price: "A partir de 25€",
                color: "secondary",
                delay: "delay-300",
                bgColor: "bg-[#10B981]/10",
                iconColor: "text-[#10B981]",
                priceColor: "bg-[#10B981] text-white",
              },
              {
                icon: Heart,
                title: "Estadia Familiar",
                desc: "Hospedagem completa",
                detail:
                  "O seu cão fica na nossa família durante as suas férias ou viagens.",
                price: "A partir de 30€/dia",
                color: "chart-4",
                delay: "delay-400",
                bgColor: "bg-[#F59E0B]/10",
                iconColor: "text-[#F59E0B]",
                priceColor: "bg-[#F59E0B] text-white",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:${service.bgColor.replace('/10', '/20')} transition-colors`}
                  >
                    {React.createElement(service.icon, {
                      className: `w-8 h-8 ${service.iconColor}`,
                    })}
                  </div>
                  <CardTitle className="text-xl font-serif">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.detail}
                  </p>
                  <Badge
                    variant="outline"
                    className={`${service.priceColor} border-transparent`}
                  >
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            size="lg"
            className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
          >
            Ver Todos os Serviços
          </Button>
        </div>
        </div>
      </section>

      {/* Quick Testimonials */}
      <section className="py-12 md:py-20 bg-[#1F3B75]/5">
        <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <Badge
            variant="secondary"
            className="bg-[#FDCF4D] text-[#1F3B75] border-[#FDCF4D]"
          >
            Testemunhos
          </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance">
              O Que Dizem os Nossos Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                stars: 5,
                text: "A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos.",
                initials: "MC",
                name: "Maria Costa",
                role: "Tutora do Max",
                color: "primary",
                delay: "delay-100",
                bgColor: "bg-[#FDCF4D]/20",
                textColor: "text-[#1F3B75]",
              },
              {
                stars: 5,
                text: "Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!",
                initials: "JS",
                name: "João Silva",
                role: "Tutor da Luna",
                color: "accent",
                delay: "delay-200",
                bgColor: "bg-[#8B5CF6]/20",
                textColor: "text-[#8B5CF6]",
              },
              {
                stars: 5,
                text: "Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.",
                initials: "AF",
                name: "Ana Ferreira",
                role: "Tutora do Bobby",
                color: "secondary",
                delay: "delay-300",
                bgColor: "bg-[#10B981]/20",
                textColor: "text-[#10B981]",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-border transition-all duration-700"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${testimonial.textColor} fill-current`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-3`}
                    >
                      <span
                        className={`text-sm font-medium ${testimonial.textColor}`}
                      >
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[#1F3B75] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance">
              Pronto para Dar ao Seu Cão o Melhor Cuidado?
            </h2>
            <p className="text-lg md:text-xl text-white/80 text-pretty">
              Entre em contacto connosco hoje e descubra como podemos ajudar a
              manter o seu patudo feliz e você tranquilo.
            </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
          >
            <Phone className="w-5 h-5 mr-2" />
            Ligar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
          >
            <Mail className="w-5 h-5 mr-2" />
            Enviar Mensagem
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
              <img
                src="/dogwarts-logo-transparent.png"
                alt="Dogwarts Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-black">Dogwarts</span>
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
  );
}

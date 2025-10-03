"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, MapPin, Clock, Heart } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Home,
  MapPin,
  Clock,
  Heart,
} as const;

export function ServicesSection() {
  return (
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
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:${service.bgColor.replace('/10', '/20')} transition-colors`}
                  >
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
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
            );
          })}
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
  );
}

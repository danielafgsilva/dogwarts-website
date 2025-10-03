"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Phone, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh bg-gradient-to-br from-card to-background flex items-center overflow-hidden">
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
              <Image
                src="/dogwarts-logo-with-tagline.png"
                alt="Dogwarts - Cães Felizes & Donos Tranquilos"
                width={400}
                height={400}
                className="w-full h-full object-contain max-w-sm md:max-w-md"
                priority
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
  );
}

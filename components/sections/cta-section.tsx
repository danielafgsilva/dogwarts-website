"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
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
  );
}

"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
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
          {TESTIMONIALS.map((testimonial) => (
            <Card
              key={testimonial.name}
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
  );
}

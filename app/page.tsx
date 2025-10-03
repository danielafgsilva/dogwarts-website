"use client";

import Navbar from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

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
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

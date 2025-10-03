"use client";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { responsive } from "@/lib/responsive-utils"
// import { LanguageSelector } from "@/components/language-selector"
// import { useLanguage } from "@/hooks/use-language"

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const { t } = useLanguage()

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Nós", noWrap: true },
    { href: "/servicos", label: "Serviços" },
    { href: "/contactos", label: "Contactos" },
    { href: "/testemunhos", label: "Testemunhos" },
  ];

  return (
    <nav 
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className={`${responsive.container} py-4`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 transition-transform hover:scale-105 duration-200"
            aria-label="Dogwarts - Página inicial"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image 
                src="/dogwarts-logo-transparent.png" 
                alt="Logo da Dogwarts" 
                fill={true}
                className="object-contain"
                priority={true}
                sizes="(max-width: 768px) 40px, (max-width: 1200px) 48px, 48px"
              />
            </div>
            <span className="text-xl md:text-2xl font-inter font-bold text-foreground">
              Dogwarts
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6" role="menubar" aria-label="Menu de navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm lg:text-base font-inter transition-all duration-300 hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  item.noWrap ? "whitespace-nowrap" : ""
                } ${currentPage === item.href ? "text-primary font-medium" : "text-foreground"}`}
                role="menuitem"
                aria-current={currentPage === item.href ? "page" : undefined}
              >
                {item.label}
                {currentPage === item.href && (
                  <span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-in slide-in-from-left-full duration-300"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
            {/* <LanguageSelector /> */}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-transform hover:scale-110 duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-300"
            role="menu"
            aria-label="Menu de navegação móvel"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-inter py-2 transition-all duration-300 hover:text-primary hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    item.noWrap ? "whitespace-nowrap" : ""
                  } ${currentPage === item.href ? "text-primary font-medium" : "text-foreground"}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-current={currentPage === item.href ? "page" : undefined}
                >
                  {item.label}
                  {currentPage === item.href && (
                    <span 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                {/* <LanguageSelector /> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

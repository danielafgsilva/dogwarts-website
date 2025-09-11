"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Nós", noWrap: true },
    { href: "/servicos", label: "Serviços" },
    { href: "/contactos", label: "Contactos" },
    { href: "/testemunhos", label: "Testemunhos" },
  ]

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 transition-transform hover:scale-105 duration-200">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image src="/dogwarts-logo-transparent.png" alt="Dogwarts Logo" fill className="object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-inter font-bold text-gray-900 dark:text-gray-100">Dogwarts</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm lg:text-base font-inter transition-all duration-300 hover:text-[#B8860B] hover:scale-105 ${
                  item.noWrap ? "whitespace-nowrap" : ""
                } ${currentPage === item.href ? "text-[#B8860B] font-medium" : "text-gray-700 dark:text-gray-200"}`}
              >
                {item.label}
                {currentPage === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B8860B] rounded-full animate-in slide-in-from-left-full duration-300" />
                )}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-transform hover:scale-110 duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-inter py-2 transition-all duration-300 hover:text-[#B8860B] hover:translate-x-2 ${
                    item.noWrap ? "whitespace-nowrap" : ""
                  } ${currentPage === item.href ? "text-[#B8860B] font-medium" : "text-gray-700 dark:text-gray-200"}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {currentPage === item.href && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#B8860B] rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

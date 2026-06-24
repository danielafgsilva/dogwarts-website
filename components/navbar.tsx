"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { APP_CONFIG, NAVIGATION_ITEMS } from "@/lib/constants";
import { responsive } from "@/lib/responsive-utils";

interface NavbarProps {
  currentPage?: string;
  siteName?: string;
}

export default function Navbar({
  currentPage,
  siteName = APP_CONFIG.name,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className={`${responsive.container} py-4`}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 transition-transform hover:scale-105 duration-200"
            aria-label={`${siteName} - Página inicial`}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/dogwarts-logo-transparent.png"
                alt={`Logo da ${siteName}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold text-foreground">
              {siteName}
            </span>
          </Link>

          <div
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            role="menubar"
            aria-label="Menu de navegação principal"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={currentPage === item.href}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-11 w-11"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={
              isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-4 pb-2 border-t border-border pt-2 animate-in slide-in-from-top-2 duration-300"
            role="menu"
            aria-label="Menu de navegação móvel"
          >
            <div className="flex flex-col space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={currentPage === item.href}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative text-sm xl:text-base whitespace-nowrap transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm ${
        active ? "text-primary font-medium" : "text-foreground"
      }`}
      role="menuitem"
      aria-current={active ? "page" : undefined}
    >
      {label}
      {active && (
        <span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`relative flex items-center min-h-[44px] text-base pl-3 transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md ${
        active ? "text-primary font-medium" : "text-foreground"
      }`}
      onClick={onClick}
      role="menuitem"
      aria-current={active ? "page" : undefined}
    >
      {label}
      {active && (
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

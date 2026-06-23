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
            <span className="text-xl md:text-2xl font-inter font-bold text-foreground">
              {siteName}
            </span>
          </Link>

          <div
            className="hidden md:flex items-center space-x-4 lg:space-x-6"
            role="menubar"
            aria-label="Menu de navegação principal"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                noWrap={"noWrap" in item ? item.noWrap : false}
                active={currentPage === item.href}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-transform hover:scale-110 duration-200"
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
            className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-300"
            role="menu"
            aria-label="Menu de navegação móvel"
          >
            <div className="flex flex-col space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  noWrap={"noWrap" in item ? item.noWrap : false}
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
  noWrap,
  active,
}: {
  href: string;
  label: string;
  noWrap?: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative text-sm lg:text-base font-inter transition-all duration-300 hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        noWrap ? "whitespace-nowrap" : ""
      } ${active ? "text-primary font-medium" : "text-foreground"}`}
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
  noWrap,
  active,
  onClick,
}: {
  href: string;
  label: string;
  noWrap?: boolean;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`relative text-sm font-inter py-2 transition-all duration-300 hover:text-primary hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        noWrap ? "whitespace-nowrap" : ""
      } ${active ? "text-primary font-medium" : "text-foreground"}`}
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

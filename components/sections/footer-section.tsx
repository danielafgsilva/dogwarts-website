"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <Image
              src="/dogwarts-logo-transparent.png"
              alt="Dogwarts Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground">Dogwarts</span>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.location}</li>
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
  );
}

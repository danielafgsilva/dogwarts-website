import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PawDivider } from "@/components/magic/paw-divider";
import { PawPattern } from "@/components/magic/paw-pattern";
import { FOOTER_LINKS } from "@/lib/constants";
import { phoneDisplay, telHref } from "@/lib/contact";
import { responsive } from "@/lib/responsive-utils";
import { urlFor } from "@/lib/sanity";
import type { SiteSettings } from "@/lib/types/content";

interface SiteFooterProps {
  siteName?: string;
  siteSettings?: SiteSettings | null;
}

export default function SiteFooter({ siteName, siteSettings }: SiteFooterProps) {
  const name = siteName ?? siteSettings?.siteName ?? "Dogwarts";
  const contact = siteSettings?.contact;
  const footer = siteSettings?.footer;
  const logo = siteSettings?.logo;
  const tagline = siteSettings?.business?.tagline;

  return (
    <footer
      className="relative overflow-hidden bg-muted/40 border-t border-border"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <PawPattern opacity={0.025} />

      <div className={`${responsive.container} relative z-10 py-14`}>
        {/* Warm pet-lover band */}
        <div className="text-center mb-12">
          <PawDivider className="mb-4" />
          {tagline && (
            <p className="font-serif text-lg md:text-xl text-foreground">
              {tagline}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center space-x-3"
              aria-label={`${name} - Página inicial`}
            >
              <Image
                src={
                  logo
                    ? urlFor(logo).width(48).height(48).url()
                    : "/dogwarts-logo-transparent.png"
                }
                alt={`Logo da ${name}`}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-serif font-bold text-foreground">
                {name}
              </span>
            </Link>
            {footer?.description && (
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {footer.description}
              </p>
            )}
          </div>

          <FooterColumn title="Serviços" ariaLabel="Lista de serviços">
            {FOOTER_LINKS.services.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Empresa" ariaLabel="Links da empresa">
            {FOOTER_LINKS.company.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contacto" ariaLabel="Informações de contacto">
            {contact?.phone && (
              <li>
                <a
                  href={telHref(contact.phone)}
                  className="hover:text-primary transition-colors"
                >
                  {phoneDisplay(contact.phone)}
                </a>
              </li>
            )}
            {contact?.email && (
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </li>
            )}
            {contact?.location && <li>{contact.location}</li>}
          </FooterColumn>
        </div>

        <div className="border-t border-border/70 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3 text-center">
            {footer?.copyright && (
              <p className="text-sm text-muted-foreground">{footer.copyright}</p>
            )}
            <p className="text-xs text-muted-foreground/80 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                Feito com
                <Heart
                  className="w-3.5 h-3.5 text-primary fill-current"
                  aria-hidden="true"
                />
                para os patudos
              </span>
              {footer?.developer && (
                <span className="whitespace-nowrap">
                  · {renderDeveloperCredit(footer.developer)}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  ariaLabel,
  children,
}: {
  title: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-serif font-semibold mb-5 text-foreground">{title}</h3>
      <ul className="space-y-3 text-muted-foreground" aria-label={ariaLabel}>
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
      >
        {children}
      </Link>
    </li>
  );
}

const DEVELOPER_PORTFOLIO_URL = "https://daniela-silva.vercel.app/";

function renderDeveloperCredit(text: string) {
  const match = text.match(/^(.*?)(Daniela(?: Silva)?)([\s\S]*)$/);
  if (!match) return text;

  const [, before, name, after] = match;

  return (
    <>
      {before}
      <a
        href={DEVELOPER_PORTFOLIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors underline-offset-2 hover:underline"
      >
        {name}
      </a>
      {after}
    </>
  );
}

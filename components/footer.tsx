import Image from "next/image";
import Link from "next/link";

import { FOOTER_LINKS } from "@/lib/constants";
import { phoneDisplay, telHref } from "@/lib/contact";
import { responsive } from "@/lib/responsive-utils";
import { urlFor } from "@/lib/sanity";
import type { SiteSettings } from "@/lib/types/content";

interface SiteFooterProps {
  siteName?: string;
  siteSettings?: SiteSettings | null;
}

export default function SiteFooter({
  siteName,
  siteSettings,
}: SiteFooterProps) {
  const name = siteName ?? siteSettings?.siteName ?? "Dogwarts";
  const contact = siteSettings?.contact;
  const footer = siteSettings?.footer;
  const logo = siteSettings?.logo;

  return (
    <footer
      className="bg-background border-t border-border py-12"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className={responsive.container}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
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
              <span className="text-2xl font-bold text-foreground">{name}</span>
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

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {footer?.copyright && (
              <p className="text-sm text-muted-foreground">{footer.copyright}</p>
            )}
            {footer?.developer && (
              <p className="text-xs text-muted-foreground/70">
                {footer.developer}
              </p>
            )}
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
      <h3 className="font-semibold mb-6 text-foreground">{title}</h3>
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

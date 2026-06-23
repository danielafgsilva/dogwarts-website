import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { phoneDisplay, telHref, whatsappHref } from "@/lib/contact";
import { brand, responsive } from "@/lib/responsive-utils";
import { getContactPage, getSiteSettings } from "@/lib/sanity";
import type { ContactPageContent, SiteSettings } from "@/lib/types/content";

export default async function ContactPage() {
  const [page, siteSettings] = await Promise.all([
    getContactPage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  const contact = siteSettings?.contact;

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage="/contactos" siteName={siteSettings?.siteName} />

      <Breadcrumb />

      <main>
        {page?.hero && <HeroSection hero={page.hero} />}

        <section className={`${responsive.sectionPadding} bg-card`}>
          <div className={responsive.container}>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
              <PhoneWhatsappCard
                card={page?.contactCards?.phoneCard}
                contact={contact}
              />
              <EmailCard card={page?.contactCards?.emailCard} email={contact?.email} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                {page?.contactForm?.title && (
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {page.contactForm.title}
                    </h2>
                    {page.contactForm.description && (
                      <p className="text-muted-foreground mt-2">
                        {page.contactForm.description}
                      </p>
                    )}
                  </div>
                )}
                {contact?.email && (
                  <ContactForm
                    recipientEmail={contact.email}
                    submitLabel={page?.contactForm?.submitButton}
                  />
                )}
              </div>

              <div className="space-y-6 md:space-y-8">
                {(page?.locationCard || contact?.location) && (
                  <InfoCard
                    Icon={MapPin}
                    title={page?.locationCard?.title ?? "Localização"}
                  >
                    {contact?.location && (
                      <p className="text-muted-foreground">{contact.location}</p>
                    )}
                    {page?.locationCard?.note && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {page.locationCard.note}
                      </p>
                    )}
                  </InfoCard>
                )}

                {siteSettings?.businessHours &&
                  siteSettings.businessHours.length > 0 && (
                    <InfoCard
                      Icon={Clock}
                      title={page?.hoursCard?.title ?? "Horário"}
                    >
                      <ul className="space-y-3 text-sm">
                        {siteSettings.businessHours.map((entry, index) => (
                          <li key={entry._key ?? index}>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">
                                {entry.day}
                              </span>
                              <span className="font-medium">{entry.time}</span>
                            </div>
                            {index <
                              (siteSettings.businessHours?.length ?? 0) - 1 && (
                              <Separator className="mt-3" />
                            )}
                          </li>
                        ))}
                      </ul>
                      {page?.hoursCard?.note && (
                        <p className="text-xs text-muted-foreground mt-4">
                          {page.hoursCard.note}
                        </p>
                      )}
                    </InfoCard>
                  )}

                <SocialCard
                  title={page?.socialCard?.title}
                  social={siteSettings?.socialMedia}
                />
              </div>
            </div>
          </div>
        </section>

        {page?.cta && <CtaSection cta={page.cta} contact={contact} />}
      </main>

      <SiteFooter siteName={siteSettings?.siteName} siteSettings={siteSettings} />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="bg-card py-4">
      <div className={responsive.container}>
        <div className="flex items-center space-x-2 text-sm">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Início
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Contactos</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({
  hero,
}: {
  hero: NonNullable<ContactPageContent["hero"]>;
}) {
  return (
    <section
      className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
      aria-labelledby="contact-hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className={`${responsive.container} ${responsive.textCenter} relative z-10`}>
        <div
          className={`${responsive.maxWidth["4xl"]} mx-auto ${responsive.spaceY.lg}`}
        >
          {hero.badge && (
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary-foreground border-primary/30"
            >
              {hero.badge}
            </Badge>
          )}
          {hero.title && (
            <h1
              id="contact-hero-heading"
              className={`${responsive.heading1} font-serif`}
            >
              {hero.title}
            </h1>
          )}
          {hero.description && (
            <p
              className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth["2xl"]} mx-auto`}
            >
              {hero.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function PhoneWhatsappCard({
  card,
  contact,
}: {
  card?: NonNullable<ContactPageContent["contactCards"]>["phoneCard"];
  contact?: SiteSettings["contact"];
}) {
  if (!contact?.phone && !contact?.whatsapp) return null;
  const display = phoneDisplay(contact?.phone) ?? "";

  return (
    <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div
          className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
          aria-hidden="true"
        >
          <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </div>
        <CardTitle className="text-lg md:text-xl font-semibold text-foreground">
          {card?.title ?? "Telefone e WhatsApp"}
        </CardTitle>
        {card?.description && (
          <CardDescription>{card.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {display && (
          <p className="text-xl md:text-2xl font-bold text-primary mb-1">
            {display}
          </p>
        )}
        {contact?.phoneHours && (
          <p className="text-sm text-muted-foreground mb-4">
            {contact.phoneHours}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          {contact?.phone && (
            <Button
              asChild
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={telHref(contact.phone)}>
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                {card?.phoneButton ?? "Ligar agora"}
              </a>
            </Button>
          )}
          {contact?.whatsapp && (
            <Button asChild variant="outline" className="flex-1">
              <a
                href={whatsappHref(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                {card?.whatsappButton ?? "WhatsApp"}
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function EmailCard({
  card,
  email,
}: {
  card?: NonNullable<ContactPageContent["contactCards"]>["emailCard"];
  email?: string;
}) {
  if (!email) return null;
  return (
    <Card className="text-center border-border hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div
          className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
          aria-hidden="true"
        >
          <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </div>
        <CardTitle className="text-lg md:text-xl font-semibold text-foreground">
          {card?.title ?? "Email"}
        </CardTitle>
        {card?.description && (
          <CardDescription>{card.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-lg md:text-xl font-bold text-primary mb-1 break-all">
          {email}
        </p>
        {card?.replyTime && (
          <p className="text-sm text-muted-foreground mb-4">{card.replyTime}</p>
        )}
        <Button
          asChild
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a href={`mailto:${email}`}>
            <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
            {card?.button ?? "Enviar email"}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

function InfoCard({
  Icon,
  title,
  children,
}: {
  Icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl font-semibold flex items-center">
          <Icon className="w-5 h-5 mr-2 text-primary" aria-hidden="true" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function SocialCard({
  title,
  social,
}: {
  title?: string;
  social?: SiteSettings["socialMedia"];
}) {
  if (!social?.instagram && !social?.facebook) return null;
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl font-semibold">
          {title ?? "Siga-nos nas redes sociais"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-3">
          {social?.instagram && (
            <Button asChild variant="outline" size="lg" className="flex-1">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" aria-hidden="true" />
                Instagram
              </a>
            </Button>
          )}
          {social?.facebook && (
            <Button asChild variant="outline" size="lg" className="flex-1">
              <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 mr-2" aria-hidden="true" />
                Facebook
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function CtaSection({
  cta,
  contact,
}: {
  cta: NonNullable<ContactPageContent["cta"]>;
  contact?: SiteSettings["contact"];
}) {
  return (
    <section
      className={`${responsive.sectionPadding} bg-secondary text-secondary-foreground`}
    >
      <div className={`${responsive.container} ${responsive.textCenter}`}>
        <div
          className={`${responsive.maxWidth["3xl"]} mx-auto ${responsive.spaceY.lg}`}
        >
          {cta.title && (
            <h2 className={`${responsive.heading1} font-serif text-secondary-foreground`}>
              {cta.title}
            </h2>
          )}
          {cta.description && (
            <p className={`${responsive.bodyLarge} text-secondary-foreground/90`}>
              {cta.description}
            </p>
          )}
          <div className={responsive.buttonGroupCenter}>
            {contact?.phone && (
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={telHref(contact.phone)}>
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {cta.primaryButton ?? "Ligar agora"}
                </a>
              </Button>
            )}
            {contact?.whatsapp && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
              >
                <a
                  href={whatsappHref(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                  {cta.secondaryButton ?? "WhatsApp direto"}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

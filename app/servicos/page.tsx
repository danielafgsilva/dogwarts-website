import { CheckCircle, Clock, Heart, Home, MapPin, Phone } from "lucide-react";
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
import { brand, responsive } from "@/lib/responsive-utils";
import { getServicesPage, getSiteSettings } from "@/lib/sanity";
import type { ServiceItem, ServicesPageContent } from "@/lib/types/content";

const SERVICE_ICONS: Record<string, typeof Heart> = {
  Heart,
  Home,
  MapPin,
  Clock,
};

export default async function ServicesPage() {
  const [services, siteSettings] = await Promise.all([
    getServicesPage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  const contact = siteSettings?.contact;
  const mainServices = services?.mainServices ?? [];

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage="/servicos" siteName={siteSettings?.siteName} />

      <Breadcrumb />

      <main>
        {services?.hero && <HeroSection hero={services.hero} />}

        {mainServices.length > 0 && (
          <section className={`${responsive.sectionPadding} ${brand.gradients.accent}`}>
            <div className={responsive.container}>
              <div className={responsive.grid2}>
                {mainServices.map((service, index) => (
                  <ServiceCard
                    key={service._key ?? index}
                    service={service}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-8">
                * Para serviços ao domicílio e dogwalking acresce o valor de
                deslocação, calculado de acordo com a morada.
              </p>
            </div>
          </section>
        )}

        {services?.cta && <CtaSection cta={services.cta} phone={contact?.phone} />}
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
          <span className="text-foreground font-medium">Serviços</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({
  hero,
}: {
  hero: NonNullable<ServicesPageContent["hero"]>;
}) {
  return (
    <section
      className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
      aria-labelledby="services-hero-heading"
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
              id="services-hero-heading"
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
          {hero.petsittingIntro && (
            <p
              className={`${responsive.bodyMedium} text-muted-foreground/90 italic ${responsive.maxWidth["2xl"]} mx-auto`}
            >
              {hero.petsittingIntro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = SERVICE_ICONS[service.icon ?? "Heart"] ?? Heart;
  const features = service.features ?? [];
  const slug = service._key ?? service.title?.toLowerCase().replace(/\s+/g, "-");

  return (
    <Card
      id={slug}
      className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 scroll-mt-24"
    >
      <CardHeader className="pb-4 lg:pb-6">
        <div
          className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 text-primary rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
          aria-hidden="true"
        >
          <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" />
        </div>
        {service.title && (
          <CardTitle className="text-xl lg:text-2xl font-bold">
            {service.title}
          </CardTitle>
        )}
        {service.description && (
          <CardDescription className="text-sm lg:text-base">
            {service.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4 lg:space-y-6">
        {service.detail && (
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
            {service.detail}
          </p>
        )}

        {features.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-sm lg:text-base text-foreground">
              O que está incluído:
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <CheckCircle
                    className="w-4 h-4 text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.price && (
          <>
            <Separator />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xl lg:text-2xl font-bold text-primary">
                  {service.price}
                </p>
                {service.priceNote && (
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    {service.priceNote}
                  </p>
                )}
              </div>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              >
                <Link href="/contactos">Contactar-nos</Link>
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

function CtaSection({
  cta,
  phone,
}: {
  cta: NonNullable<ServicesPageContent["cta"]>;
  phone?: string;
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
            {phone && (
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={`tel:+351${phone}`}>
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {cta.primaryButton ?? "Ligar agora"}
                </a>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              <Link href="/sobre">
                <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                {cta.secondaryButton ?? "Conhecer-nos"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

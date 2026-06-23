import { Clock, Heart, Home, Mail, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
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
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { getGoogleReviews } from "@/lib/google-reviews";
import { brand, responsive } from "@/lib/responsive-utils";
import { getHomePage, getSiteSettings, urlFor } from "@/lib/sanity";
import type { HomePageContent, ServiceItem, SiteSettings } from "@/lib/types/content";

const SERVICE_ICONS: Record<string, typeof Heart> = {
  Heart,
  Home,
  MapPin,
  Clock,
};

export default async function HomePage() {
  const [home, siteSettings] = await Promise.all([
    getHomePage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  const reviews = await getGoogleReviews(
    siteSettings?.contact?.googlePlaceId
  ).catch(() => null);

  return (
    <div className="min-h-screen font-sans">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navbar currentPage="/" siteName={siteSettings?.siteName} />

      <main id="main-content">
        {home?.hero && (
          <HeroSection
            hero={home.hero}
            reviewRating={reviews?.averageRating}
            reviewCount={reviews?.totalReviews}
          />
        )}
        {home?.services && <ServicesSection services={home.services} />}
        <GoogleReviewsSection
          data={reviews}
          reviewsUrl={siteSettings?.contact?.googleReviewsUrl}
          heading={home?.reviews?.title}
          description={home?.reviews?.description}
        />
        {home?.cta && (
          <CtaSection cta={home.cta} contact={siteSettings?.contact} />
        )}
      </main>

      <SiteFooter
        siteName={siteSettings?.siteName}
        siteSettings={siteSettings}
      />
    </div>
  );
}

function HeroSection({
  hero,
  reviewRating,
  reviewCount,
}: {
  hero: NonNullable<HomePageContent["hero"]>;
  reviewRating?: number;
  reviewCount?: number;
}) {
  return (
    <section
      className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className={`${responsive.container} relative z-10`}>
        <div className={`${responsive.grid2} gap-8 lg:gap-16 items-center`}>
          <div className={`${responsive.spaceY.lg} ${responsive.textCenterLg}`}>
            <div className="space-y-6">
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
                  id="hero-heading"
                  className={`${responsive.heading1} font-serif`}
                >
                  {hero.title}
                </h1>
              )}
              {hero.description && (
                <p
                  className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth["2xl"]} mx-auto lg:mx-0`}
                >
                  {hero.description}
                </p>
              )}
              {hero.intro?.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth["2xl"]} mx-auto lg:mx-0`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div
              className={`${responsive.buttonGroupCenter} lg:justify-start`}
              role="group"
              aria-label="Ações principais"
            >
              {hero.ctaPrimary && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/servicos">
                    <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                    {hero.ctaPrimary}
                  </Link>
                </Button>
              )}
              {hero.ctaSecondary && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Link href="/contactos">
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    {hero.ctaSecondary}
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 shadow-2xl">
              <Image
                src={
                  hero.heroImage
                    ? urlFor(hero.heroImage).width(400).height(400).url()
                    : "/dogwarts-logo-with-tagline.png"
                }
                alt="Dogwarts"
                className="w-full h-full object-contain max-w-sm md:max-w-md transition-transform hover:scale-105 duration-300"
                width={400}
                height={400}
                priority
              />
            </div>
            {reviewRating && reviewRating > 0 && (
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Star
                    className="w-8 h-8 text-primary fill-current"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {reviewRating.toFixed(1)} no Google
                    </p>
                    {reviewCount ? (
                      <p className="text-sm text-muted-foreground">
                        {reviewCount} avaliações
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({
  services,
}: {
  services: NonNullable<HomePageContent["services"]>;
}) {
  const items = services.services ?? [];
  if (items.length === 0) return null;

  return (
    <section
      id="servicos"
      className={`${responsive.sectionPadding} bg-background`}
      aria-labelledby="services-heading"
    >
      <div className={responsive.container}>
        <div
          className={`${responsive.spaceY.md} ${responsive.textCenter} mb-12 lg:mb-16`}
        >
          {services.title && (
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary-foreground border-primary/30"
            >
              {services.title}
            </Badge>
          )}
          {services.subtitle && (
            <h2
              id="services-heading"
              className={`${responsive.heading1} font-serif`}
            >
              {services.subtitle}
            </h2>
          )}
          {services.description && (
            <p
              className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth["3xl"]} mx-auto`}
            >
              {services.description}
            </p>
          )}
        </div>

        <div
          className={responsive.grid4}
          role="list"
          aria-label="Lista de serviços oferecidos"
        >
          {items.map((service, index) => (
            <ServiceCard
              key={service._key ?? index}
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/servicos">Ver todos os serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const IconComponent = SERVICE_ICONS[service.icon ?? "Heart"] ?? Heart;
  return (
    <Card
      className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      role="listitem"
      aria-labelledby={`service-title-${index}`}
    >
      <CardHeader className="text-center pb-6">
        {service.image ? (
          <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-6">
            <Image
              src={urlFor(service.image).width(80).height(80).url()}
              alt={service.title ?? "Serviço"}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            <IconComponent className="w-10 h-10" aria-hidden="true" />
          </div>
        )}
        {service.title && (
          <CardTitle
            id={`service-title-${index}`}
            className="text-xl font-semibold text-foreground"
          >
            {service.title}
          </CardTitle>
        )}
        {service.description && (
          <CardDescription className="text-muted-foreground">
            {service.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {service.detail && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.detail}
          </p>
        )}
        {service.price && (
          <div>
            <p className="text-2xl font-bold text-primary">{service.price}</p>
            {service.priceNote && (
              <p className="text-xs text-muted-foreground">
                {service.priceNote}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function CtaSection({
  cta,
  contact,
}: {
  cta: NonNullable<HomePageContent["cta"]>;
  contact?: SiteSettings["contact"];
}) {
  return (
    <section
      className={`${responsive.sectionPadding} bg-secondary text-secondary-foreground relative overflow-hidden`}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />

      <div
        className={`${responsive.container} ${responsive.textCenter} relative z-10`}
      >
        <div
          className={`${responsive.maxWidth["4xl"]} mx-auto ${responsive.spaceY.lg}`}
        >
          {cta.title && (
            <h2
              id="cta-heading"
              className={`${responsive.heading1} font-serif text-secondary-foreground`}
            >
              {cta.title}
            </h2>
          )}
          {cta.description && (
            <p
              className={`${responsive.bodyLarge} text-secondary-foreground/90 ${responsive.maxWidth["2xl"]} mx-auto`}
            >
              {cta.description}
            </p>
          )}
          <div
            className={responsive.buttonGroupCenter}
            role="group"
            aria-label="Ações de contacto"
          >
            {contact?.phone && (
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={`tel:+351${contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {cta.primaryButton ?? "Ligar agora"}
                </a>
              </Button>
            )}
            {contact?.email && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
              >
                <a href={`mailto:${contact.email}`}>
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                  {cta.secondaryButton ?? "Enviar mensagem"}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

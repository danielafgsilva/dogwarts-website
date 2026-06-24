import { Clock, Heart, Home, Mail, MapPin, PawPrint, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { Reveal } from "@/components/magic/reveal";
import { PawPattern } from "@/components/magic/paw-pattern";
import { SectionIntro } from "@/components/magic/section-intro";
import { PawDivider } from "@/components/magic/paw-divider";
import { telHref } from "@/lib/contact";
import { getGoogleReviews } from "@/lib/google-reviews";
import { responsive } from "@/lib/responsive-utils";
import { getHomePage, getSiteSettings, urlFor } from "@/lib/sanity";
import type { HomePageContent, ServiceItem, SiteSettings } from "@/lib/types/content";

const SERVICE_ICONS: Record<string, typeof Heart> = { Heart, Home, MapPin, Clock };

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

      <SiteFooter siteName={siteSettings?.siteName} siteSettings={siteSettings} />
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
  // Split the title so the last word can carry the gold-foil "magic" accent.
  const words = (hero.title ?? "").trim().split(" ");
  const lastWord = words.length > 1 ? words.pop() : null;
  const leadWords = words.join(" ");

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-secondary/8 via-background to-background"
      aria-labelledby="hero-heading"
    >
      <PawPattern />
      <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 -left-24 w-[24rem] h-[24rem] bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className={`${responsive.container} ${responsive.sectionPadding} relative z-10`}>
        <div className={`${responsive.grid2} gap-10 lg:gap-16 items-center`}>
          <div className={`${responsive.spaceY.lg} ${responsive.textCenterLg}`}>
            <div className="space-y-6">
              {hero.badge && (
                <Reveal>
                  <Badge
                    variant="secondary"
                    className="bg-primary/15 text-foreground border-primary/30 font-mono text-xs uppercase tracking-[0.18em] inline-flex items-center gap-1.5"
                  >
                    <PawPrint className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {hero.badge}
                  </Badge>
                </Reveal>
              )}
              {hero.title && (
                <Reveal delay={80}>
                  <h1
                    id="hero-heading"
                    className={`${responsive.heading1} font-serif text-balance leading-[1.05]`}
                  >
                    {leadWords}{" "}
                    {lastWord && <span className="text-gold-foil">{lastWord}</span>}
                  </h1>
                </Reveal>
              )}
              {hero.description && (
                <Reveal delay={160}>
                  <p
                    className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth["2xl"]} mx-auto lg:mx-0`}
                  >
                    {hero.description}
                  </p>
                </Reveal>
              )}
              {hero.intro?.[0] && (
                <Reveal delay={240}>
                  <p
                    className={`text-muted-foreground ${responsive.maxWidth["2xl"]} mx-auto lg:mx-0`}
                  >
                    {hero.intro[0]}
                  </p>
                </Reveal>
              )}
            </div>

            <Reveal delay={320}>
              <div
                className={`${responsive.buttonGroupCenter} lg:justify-start`}
                role="group"
                aria-label="Ações principais"
              >
                {hero.ctaPrimary && (
                  <Button
                    asChild
                    size="lg"
                    className="shimmer bg-primary text-primary-foreground hover:bg-primary/90"
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
            </Reveal>
          </div>

          {/* Logo framed in a warm nude medallion */}
          <Reveal delay={200} className="relative order-first lg:order-last">
            <div className="relative mx-auto aspect-square max-w-md">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-nude to-nude-deep shadow-xl float-slow"
                aria-hidden="true"
              />
              <div
                className="absolute inset-2 rounded-full ring-1 ring-primary/30"
                aria-hidden="true"
              />
              <PawPattern className="rounded-full overflow-hidden" opacity={0.06} />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image
                  src={
                    hero.heroImage
                      ? urlFor(hero.heroImage).width(420).height(420).url()
                      : "/dogwarts-logo-with-tagline.png"
                  }
                  alt="Dogwarts"
                  width={420}
                  height={420}
                  className="w-full h-full object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>

            {reviewRating && reviewRating > 0 ? (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                <Star className="w-7 h-7 text-primary fill-current" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {reviewRating.toFixed(1)} no Google
                  </p>
                  {reviewCount ? (
                    <p className="text-xs text-muted-foreground">
                      {reviewCount} avaliações
                    </p>
                  ) : null}
                </div>
              </div>
            ) : null}
          </Reveal>
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
        <SectionIntro
          id="services-heading"
          eyebrow={services.title}
          title={services.subtitle}
          description={services.description}
          className="mb-6"
        />
        <PawDivider className="mb-12 lg:mb-16" />

        <div className={`${responsive.grid4} list-none`} role="list" aria-label="Serviços oferecidos">
          {items.map((service, index) => (
            <Reveal
              as="li"
              key={service._key ?? index}
              delay={index * 60}
              className="h-full list-none"
            >
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/servicos">Ver todos os serviços</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const IconComponent = SERVICE_ICONS[service.icon ?? "Heart"] ?? Heart;
  return (
    <Card
      className="lift group h-full flex flex-col bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/30"
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
            className="relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            aria-hidden="true"
          >
            <IconComponent className="w-10 h-10" aria-hidden="true" />
          </div>
        )}
        {service.title && (
          <CardTitle
            id={`service-title-${index}`}
            className="text-xl font-serif font-semibold text-foreground"
          >
            {service.title}
          </CardTitle>
        )}
        {service.description && (
          <p className="text-muted-foreground text-sm">{service.description}</p>
        )}
      </CardHeader>
      <CardContent className="text-center flex flex-1 flex-col">
        {service.detail && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.detail}
          </p>
        )}
        {service.price && (
          <div className="mt-auto pt-4 border-t border-border/60">
            <p className="text-2xl font-bold text-primary font-serif">
              {service.price}
            </p>
            {service.priceNote && (
              <p className="text-xs text-muted-foreground">{service.priceNote}</p>
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
      className={`${responsive.sectionPadding} relative overflow-hidden bg-secondary text-secondary-foreground`}
      aria-labelledby="cta-heading"
    >
      <PawPattern opacity={0.045} />
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" aria-hidden="true" />

      <div className={`${responsive.container} ${responsive.textCenter} relative z-10`}>
        <Reveal className={`${responsive.maxWidth["4xl"]} mx-auto ${responsive.spaceY.lg}`}>
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
                className="shimmer bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={telHref(contact.phone)}>
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
                className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
              >
                <a href={`mailto:${contact.email}`}>
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                  {cta.secondaryButton ?? "Enviar mensagem"}
                </a>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

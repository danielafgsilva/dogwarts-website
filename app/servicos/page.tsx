import { CheckCircle, Clock, Heart, Home, MapPin, PawPrint, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import { Reveal } from "@/components/magic/reveal";
import { PawPattern } from "@/components/magic/paw-pattern";
import { telHref } from "@/lib/contact";
import { responsive } from "@/lib/responsive-utils";
import { getServicesPage, getSiteSettings, urlFor } from "@/lib/sanity";
import type { ServiceItem, ServicesPageContent } from "@/lib/types/content";

const SERVICE_ICONS: Record<string, typeof Heart> = { Heart, Home, MapPin, Clock };

// Shown when a service has no image uploaded in Sanity (cycled by position).
const FALLBACK_SERVICE_IMAGES = [
  "/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg",
  "/dog-walker-with-multiple-happy-dogs-in-lisbon-pa.jpg",
  "/happy-dogs-playing-together-in-sunny-garden-dogwa.jpg",
  "/founder-with-four-dogs-in-cozy-living-room-portra.jpg",
];

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
          <section className={`${responsive.sectionPadding} bg-background`}>
            <div className={responsive.container}>
              <div className={`${responsive.grid2} max-w-5xl mx-auto`}>
                {mainServices.map((service, index) => (
                  <Reveal key={service._key ?? index} delay={(index % 2) * 80}>
                    <ServiceCard service={service} index={index} />
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <p className="text-xs text-muted-foreground text-center mt-10 max-w-xl mx-auto">
                  * Para serviços ao domicílio e dogwalking acresce o valor de
                  deslocação, calculado de acordo com a morada.
                </p>
              </Reveal>
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
    <div className="bg-card/60 py-4 border-b border-border/60">
      <div className={responsive.container}>
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Serviços</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ hero }: { hero: NonNullable<ServicesPageContent["hero"]> }) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-secondary/8 via-background to-background"
      aria-labelledby="services-hero-heading"
    >
      <PawPattern />
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className={`${responsive.container} ${responsive.sectionPadding} ${responsive.textCenter} relative z-10`}>
        <Reveal className={`${responsive.maxWidth["4xl"]} mx-auto ${responsive.spaceY.lg}`}>
          {hero.badge && (
            <Badge
              variant="secondary"
              className="bg-primary/15 text-foreground border-primary/30 font-mono text-xs uppercase tracking-[0.18em] inline-flex items-center gap-1.5"
            >
              <PawPrint className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              {hero.badge}
            </Badge>
          )}
          {hero.title && (
            <h1
              id="services-hero-heading"
              className={`${responsive.heading1} font-serif text-balance leading-[1.05]`}
            >
              {hero.title}
            </h1>
          )}
          {hero.description && (
            <p className={`${responsive.bodyLarge} text-muted-foreground text-pretty ${responsive.maxWidth["2xl"]} mx-auto`}>
              {hero.description}
            </p>
          )}
          {hero.petsittingIntro && (
            <p className={`text-muted-foreground/90 italic ${responsive.maxWidth["2xl"]} mx-auto`}>
              {hero.petsittingIntro}
            </p>
          )}
        </Reveal>
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
  const features = service.features ?? [];
  const slug = service._key ?? service.title?.toLowerCase().replace(/\s+/g, "-");
  const imageSrc = service.image
    ? urlFor(service.image).width(640).height(360).url()
    : FALLBACK_SERVICE_IMAGES[index % FALLBACK_SERVICE_IMAGES.length];

  return (
    <Card
      id={slug}
      className="lift group h-full flex flex-col overflow-hidden border-border rounded-2xl hover:border-primary/30 hover:shadow-xl scroll-mt-24"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <Image
          src={imageSrc}
          alt={service.title ?? "Serviço Dogwarts"}
          width={640}
          height={360}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-2">
          <div
            className="relative w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shrink-0"
            aria-hidden="true"
          >
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            {service.title && (
              <CardTitle className="text-xl lg:text-2xl font-serif font-bold">
                {service.title}
              </CardTitle>
            )}
            {service.description && (
              <CardDescription className="text-sm">{service.description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {service.detail && (
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
            {service.detail}
          </p>
        )}

        {features.length > 0 && (
          <ul className="grid grid-cols-1 gap-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {service.price && (
          <>
            <Separator />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-primary font-serif">{service.price}</p>
                {service.priceNote && (
                  <p className="text-xs lg:text-sm text-muted-foreground">{service.priceNote}</p>
                )}
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
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
      className={`${responsive.sectionPadding} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <PawPattern opacity={0.045} />
      <div className={`${responsive.container} ${responsive.textCenter} relative z-10`}>
        <Reveal className={`${responsive.maxWidth["3xl"]} mx-auto ${responsive.spaceY.lg}`}>
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
                className="shimmer bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={telHref(phone)}>
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {cta.primaryButton ?? "Ligar agora"}
                </a>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              <Link href="/sobre">
                <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                {cta.secondaryButton ?? "Conhecer-nos"}
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

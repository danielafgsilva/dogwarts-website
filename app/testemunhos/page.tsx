import { MessageCircle, PawPrint, Phone } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { Reveal } from "@/components/magic/reveal";
import { PawPattern } from "@/components/magic/paw-pattern";
import { telHref } from "@/lib/contact";
import { getGoogleReviews } from "@/lib/google-reviews";
import { responsive } from "@/lib/responsive-utils";
import { getSiteSettings, getTestimonialsPage } from "@/lib/sanity";
import type { TestimonialsPageContent } from "@/lib/types/content";

export default async function TestimonialsPage() {
  const [page, siteSettings] = await Promise.all([
    getTestimonialsPage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  const reviews = await getGoogleReviews(
    siteSettings?.contact?.googlePlaceId
  ).catch(() => null);

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage="/testemunhos" siteName={siteSettings?.siteName} />
      <Breadcrumb />

      <main>
        {page?.hero && <HeroSection hero={page.hero} />}

        <GoogleReviewsSection
          data={reviews}
          reviewsUrl={siteSettings?.contact?.googleReviewsUrl}
        />

        {page?.cta && <CtaSection cta={page.cta} phone={siteSettings?.contact?.phone} />}
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
          <span className="text-foreground font-medium">Testemunhos</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ hero }: { hero: NonNullable<TestimonialsPageContent["hero"]> }) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-secondary/8 via-background to-background"
      aria-labelledby="testimonials-hero-heading"
    >
      <PawPattern />
      <div className="absolute -top-16 right-1/4 w-[26rem] h-[26rem] bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

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
              id="testimonials-hero-heading"
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
        </Reveal>
      </div>
    </section>
  );
}

function CtaSection({
  cta,
  phone,
}: {
  cta: NonNullable<TestimonialsPageContent["cta"]>;
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
                  {cta.primaryButton ?? "Contactar agora"}
                </a>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              <Link href="/servicos">
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                {cta.secondaryButton ?? "Ver serviços"}
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

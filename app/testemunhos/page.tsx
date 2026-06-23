import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { getGoogleReviews } from "@/lib/google-reviews";
import { brand, responsive } from "@/lib/responsive-utils";
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
          <span className="text-foreground font-medium">Testemunhos</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({
  hero,
}: {
  hero: NonNullable<TestimonialsPageContent["hero"]>;
}) {
  return (
    <section
      className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
      aria-labelledby="testimonials-hero-heading"
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
              id="testimonials-hero-heading"
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

function CtaSection({
  cta,
  phone,
}: {
  cta: NonNullable<TestimonialsPageContent["cta"]>;
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
                  {cta.primaryButton ?? "Contactar agora"}
                </a>
              </Button>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              <Link href="/servicos">
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                {cta.secondaryButton ?? "Ver serviços"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Heart, Home, PawPrint, Quote, Shield, Star, Users } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import { AboutCarousel, type CarouselImage } from "@/components/magic/about-carousel";
import { Reveal } from "@/components/magic/reveal";
import { PawPattern } from "@/components/magic/paw-pattern";
import { SectionIntro } from "@/components/magic/section-intro";
import { PawDivider } from "@/components/magic/paw-divider";
import { responsive } from "@/lib/responsive-utils";
import { getAboutPage, getSiteSettings, urlFor } from "@/lib/sanity";
import type { AboutPageContent, AboutValue } from "@/lib/types/content";

const VALUE_ICONS: Record<string, typeof Shield> = { Shield, Heart, Home };

// Used when the Sanity hero gallery is empty.
const FALLBACK_CAROUSEL: CarouselImage[] = [
  {
    src: "/founder-with-four-dogs-in-cozy-living-room-portra.jpg",
    alt: "Fundadora da Dogwarts com os seus quatro cães",
  },
  {
    src: "/happy-dogs-playing-together-in-sunny-garden-dogwa.jpg",
    alt: "Cães felizes a brincar no jardim",
  },
  {
    src: "/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg",
    alt: "Hora da sesta confortável na sala",
  },
  {
    src: "/dog-walker-with-multiple-happy-dogs-in-lisbon-pa.jpg",
    alt: "Passeio com vários cães felizes",
  },
];

export default async function AboutPage() {
  const [about, siteSettings] = await Promise.all([
    getAboutPage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage="/sobre" siteName={siteSettings?.siteName} />
      <Breadcrumb />

      <main>
        {about?.hero && <HeroSection hero={about.hero} />}
        {about?.founderStory && <FounderStory story={about.founderStory} />}
        {about?.values && <ValuesSection values={about.values} />}
        {about?.cta && <CtaSection cta={about.cta} />}
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
          <span className="text-foreground font-medium">Sobre Nós</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ hero }: { hero: NonNullable<AboutPageContent["hero"]> }) {
  const sanityImages: CarouselImage[] = (hero.images ?? []).map((img, i) => ({
    src: urlFor(img).width(720).height(720).url(),
    alt: `Dogwarts — momento ${i + 1}`,
  }));
  const carouselImages =
    sanityImages.length > 0 ? sanityImages : FALLBACK_CAROUSEL;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-secondary/8 via-background to-background"
      aria-labelledby="about-hero-heading"
    >
      <PawPattern />
      <div className="absolute -top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className={`${responsive.container} ${responsive.sectionPadding} relative z-10`}>
        <div className={`${responsive.grid2} items-center gap-10 lg:gap-16`}>
          <div className={responsive.spaceY.lg}>
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
                  id="about-hero-heading"
                  className={`${responsive.heading1} font-serif text-balance leading-[1.05]`}
                >
                  {hero.title}
                </h1>
              </Reveal>
            )}
            {hero.description && (
              <Reveal delay={160}>
                <p className={`${responsive.bodyLarge} text-muted-foreground text-pretty`}>
                  {hero.description}
                </p>
              </Reveal>
            )}
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-accent/20 rotate-3" aria-hidden="true" />
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden ring-1 ring-border shadow-2xl -rotate-2">
                <AboutCarousel images={carouselImages} />
              </div>
              {hero.familyDogsCount ? (
                <div className="absolute -bottom-4 right-2 sm:-right-3 bg-card border border-border rounded-full pl-3 pr-4 py-2.5 shadow-xl flex gap-2 whitespace-nowrap">
                  <PawPrint className="w-6 h-6 text-primary shrink-0 self-center" aria-hidden="true" />
                  <span className="font-serif font-bold text-primary text-xl leading-none items-center">
                    {hero.familyDogsCount}
                  </span>
                  <span className="text-sm text-muted-foreground self-center">
                    Cães da família
                  </span>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Distinct layout for this page: the founder story as a vertical "chapter" timeline. */
function FounderStory({ story }: { story: NonNullable<AboutPageContent["founderStory"]> }) {
  const paragraphs = story.content ?? [];
  if (paragraphs.length === 0 && !story.title) return null;

  return (
    <section className={`${responsive.sectionPadding} bg-card/40`} aria-labelledby="story-heading">
      <div className={responsive.container}>
        <SectionIntro
          id="story-heading"
          eyebrow={story.badge}
          title={story.title}
          className="mb-6"
        />
        <PawDivider className="mb-12 lg:mb-16" />

        <div className={`${responsive.maxWidth["3xl"]} mx-auto`}>
          <ol className="relative border-l-2 border-primary/25 ml-3 space-y-10 list-none">
            {paragraphs.map((paragraph, index) => (
              <Reveal as="li" key={index} delay={index * 80} className="relative pl-8">
                <span
                  className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary/15 ring-4 ring-background flex items-center justify-center"
                  aria-hidden="true"
                >
                  <PawPrint className="w-3 h-3 text-primary" />
                </span>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </ol>

          {story.quote && (
            <Reveal delay={120}>
              <blockquote className="relative mt-12 rounded-3xl bg-secondary text-secondary-foreground p-8 lg:p-10 overflow-hidden">
                <PawPattern opacity={0.045} />
                <Quote className="w-10 h-10 text-primary/70 mb-4" aria-hidden="true" />
                <p className="relative z-10 text-lg lg:text-xl font-serif italic leading-relaxed">
                  {story.quote}
                </p>
                {story.quoteAuthor && (
                  <cite className="relative z-10 mt-4 block text-sm text-secondary-foreground/70 not-italic">
                    — {story.quoteAuthor}
                  </cite>
                )}
              </blockquote>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function ValuesSection({ values }: { values: NonNullable<AboutPageContent["values"]> }) {
  const items = values.values ?? [];
  if (items.length === 0) return null;

  return (
    <section className={`${responsive.sectionPadding} bg-background`} aria-labelledby="values-heading">
      <div className={responsive.container}>
        <SectionIntro
          id="values-heading"
          eyebrow={values.badge}
          title={values.title}
          description={values.description}
          className="mb-6"
        />
        <PawDivider className="mb-12 lg:mb-16" />

        <div className={responsive.grid3}>
          {items.map((value, index) => (
            <Reveal key={value._key ?? index} delay={index * 80}>
              <ValueCard value={value} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }: { value: AboutValue }) {
  const Icon = VALUE_ICONS[value.icon ?? "Shield"] ?? Shield;
  return (
    <Card className="lift group h-full border-border rounded-2xl text-center hover:border-primary/30 hover:shadow-xl">
      <CardHeader className="pb-4">
        <div
          className="relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
          aria-hidden="true"
        >
          <Icon className="w-8 h-8" />
        </div>
        {value.title && (
          <CardTitle className="text-xl font-serif font-bold">{value.title}</CardTitle>
        )}
        {value.description && <CardDescription>{value.description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {value.fullDescription && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {value.fullDescription}
          </p>
        )}
        {value.features && value.features.length > 0 && (
          <ul className="space-y-2 text-left inline-block mx-auto">
            {value.features.map((feature, i) => (
              <li
                key={`${value._key ?? value.title ?? "v"}-${i}`}
                className="flex items-start justify-start gap-2 text-sm text-muted-foreground"
              >
                <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function CtaSection({ cta }: { cta: NonNullable<AboutPageContent["cta"]> }) {
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
            <Button
              asChild
              size="lg"
              className="shimmer bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contactos">
                <Users className="w-5 h-5 mr-2" aria-hidden="true" />
                {cta.primaryButton ?? "Contactar-nos"}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              <Link href="/servicos">
                <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                {cta.secondaryButton ?? "Ver serviços"}
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

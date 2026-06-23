import { Award, Clock, Heart, Home, Shield, Star, Users } from "lucide-react";
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
import { brand, responsive } from "@/lib/responsive-utils";
import { getAboutPage, getSiteSettings, urlFor } from "@/lib/sanity";
import type { AboutPageContent, AboutValue } from "@/lib/types/content";

const VALUE_ICONS: Record<string, typeof Shield> = {
  Shield,
  Heart,
  Home,
};

const STORY_ICONS = [Award, Heart, Clock];

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
          <span className="text-foreground font-medium">Sobre Nós</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({
  hero,
}: {
  hero: NonNullable<AboutPageContent["hero"]>;
}) {
  const heroImage = hero.images?.[0];
  return (
    <section
      className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
      aria-labelledby="about-hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className={responsive.container}>
        <div className={`${responsive.grid2} items-center relative z-10`}>
          <div className={responsive.spaceY.lg}>
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
                id="about-hero-heading"
                className={`${responsive.heading1} font-serif`}
              >
                {hero.title}
              </h1>
            )}
            {hero.description && (
              <p className={`${responsive.bodyLarge} text-muted-foreground`}>
                {hero.description}
              </p>
            )}
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                src={
                  heroImage
                    ? urlFor(heroImage).width(600).height(600).url()
                    : "/founder-with-four-dogs-in-cozy-living-room-portra.jpg"
                }
                alt="Fundadora da Dogwarts com os seus cães"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {hero.familyDogsCount ? (
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-primary text-center">
                  {hero.familyDogsCount}
                </p>
                <p className="text-sm text-muted-foreground">Cães da família</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderStory({
  story,
}: {
  story: NonNullable<AboutPageContent["founderStory"]>;
}) {
  const paragraphs = story.content ?? [];
  if (paragraphs.length === 0 && !story.title) return null;

  return (
    <section className={`${responsive.sectionPadding} bg-card/30`}>
      <div className={responsive.container}>
        <div className={`${responsive.maxWidth["4xl"]} mx-auto`}>
          <div
            className={`${responsive.spaceY.md} ${responsive.textCenter} mb-12 lg:mb-16`}
          >
            {story.badge && (
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                {story.badge}
              </Badge>
            )}
            {story.title && (
              <h2 className={`${responsive.heading2} font-serif`}>
                {story.title}
              </h2>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {story.quote && (
                <blockquote className="bg-card rounded-2xl p-6 border border-border italic text-foreground">
                  {story.quote}
                  {story.quoteAuthor && (
                    <cite className="text-sm text-muted-foreground mt-4 block not-italic">
                      — {story.quoteAuthor}
                    </cite>
                  )}
                </blockquote>
              )}
            </div>

            {story.stats && story.stats.length > 0 && (
              <div className="space-y-4">
                {story.stats.map((stat, index) => {
                  const Icon = STORY_ICONS[index % STORY_ICONS.length];
                  return (
                    <Card key={stat._key ?? index} className="border-border">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            {stat.title && (
                              <h3 className="font-semibold">{stat.title}</h3>
                            )}
                            {stat.description && (
                              <p className="text-sm text-muted-foreground">
                                {stat.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection({
  values,
}: {
  values: NonNullable<AboutPageContent["values"]>;
}) {
  const items = values.values ?? [];
  if (items.length === 0) return null;

  return (
    <section
      className={`${responsive.sectionPadding} bg-background`}
      aria-labelledby="values-heading"
    >
      <div className={responsive.container}>
        <div
          className={`${responsive.spaceY.md} ${responsive.textCenter} mb-12 lg:mb-16`}
        >
          {values.badge && (
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {values.badge}
            </Badge>
          )}
          {values.title && (
            <h2 id="values-heading" className={`${responsive.heading2} font-serif`}>
              {values.title}
            </h2>
          )}
          {values.description && (
            <p
              className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth["2xl"]} mx-auto`}
            >
              {values.description}
            </p>
          )}
        </div>

        <div className={responsive.grid3}>
          {items.map((value, index) => (
            <ValueCard key={value._key ?? index} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }: { value: AboutValue }) {
  const Icon = VALUE_ICONS[value.icon ?? "Shield"] ?? Shield;
  return (
    <Card className="border-border hover:shadow-lg transition-all duration-300 text-center">
      <CardHeader className="pb-4">
        <div
          className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
          aria-hidden="true"
        >
          <Icon className="w-8 h-8" />
        </div>
        {value.title && (
          <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
        )}
        {value.description && (
          <CardDescription>{value.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {value.fullDescription && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {value.fullDescription}
          </p>
        )}
        {value.features && value.features.length > 0 && (
          <ul className="space-y-2">
            {value.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"
              >
                <Star className="w-4 h-4 text-primary" aria-hidden="true" />
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
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              <Link href="/servicos">
                <Heart className="w-5 h-5 mr-2" aria-hidden="true" />
                {cta.secondaryButton ?? "Ver serviços"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { GoogleReview, GoogleReviewsData } from "@/lib/google-reviews";
import { brand, responsive } from "@/lib/responsive-utils";

interface GoogleReviewsSectionProps {
  data: GoogleReviewsData | null;
  reviewsUrl?: string;
  heading?: string;
  description?: string;
}

/**
 * Presentational section for live Google reviews. Renders nothing when the
 * integration is not configured and no fallback URL is available, so the page
 * never shows an empty shell.
 */
export function GoogleReviewsSection({
  data,
  reviewsUrl,
  heading,
  description,
}: GoogleReviewsSectionProps) {
  const reviews = data?.reviews ?? [];
  const url = data?.googleMapsUri ?? reviewsUrl;

  // No data and nowhere to send people → don't render the section at all.
  if (reviews.length === 0 && !url) return null;

  return (
    <section
      className={`${responsive.sectionPadding} ${brand.gradients.card}`}
      aria-labelledby="testimonials-heading"
    >
      <div className={responsive.container}>
        <div
          className={`${responsive.spaceY.md} ${responsive.textCenter} mb-12 lg:mb-16`}
        >
          <Badge
            variant="secondary"
            className="bg-primary/20 text-primary-foreground border-primary/30"
          >
            Avaliações Google
          </Badge>
          {heading && (
            <h2 id="testimonials-heading" className={responsive.heading1}>
              {heading}
            </h2>
          )}
          {description && (
            <p
              className={`${responsive.bodyLarge} text-muted-foreground ${responsive.maxWidth["2xl"]} mx-auto`}
            >
              {description}
            </p>
          )}
          {data && data.averageRating > 0 && (
            <RatingSummary
              averageRating={data.averageRating}
              totalReviews={data.totalReviews}
            />
          )}
        </div>

        {reviews.length > 0 && (
          <div
            className={responsive.grid3}
            aria-label="Avaliações Google dos clientes"
          >
            {reviews.map((review, index) => (
              <ReviewCard key={`${review.author}-${index}`} review={review} />
            ))}
          </div>
        )}

        {url && (
          <div className={`${responsive.textCenter} mt-12`}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir avaliações Google da Dogwarts numa nova janela"
              >
                Ver todas as avaliações no Google
                <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function RatingSummary({
  averageRating,
  totalReviews,
}: {
  averageRating: number;
  totalReviews: number;
}) {
  const rounded = Math.round(averageRating);
  return (
    <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
      <div
        className="flex"
        role="img"
        aria-label={`${averageRating.toFixed(1)} estrelas de média no Google`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rounded ? "text-primary fill-current" : "text-muted"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="font-medium text-foreground">
        {averageRating.toFixed(1)}
        {totalReviews ? ` · ${totalReviews} avaliações` : ""}
      </span>
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const rating = Math.min(Math.max(Math.round(review.rating), 0), 5);
  return (
    <Card className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <CardContent className="pt-8 pb-6">
        <div
          className="flex mb-4"
          role="img"
          aria-label={`${rating} estrelas no Google`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-primary fill-current" : "text-muted"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-6 leading-relaxed">
          <p className="text-pretty line-clamp-6">“{review.text}”</p>
        </blockquote>
        <div className="flex items-center">
          {review.profilePhotoUrl ? (
            <Image
              src={review.profilePhotoUrl}
              alt={`Foto de ${review.author}`}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4 object-cover"
              unoptimized
            />
          ) : (
            <div
              className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4"
              aria-hidden="true"
            >
              <span className="text-sm font-semibold text-primary">
                {review.initials}
              </span>
            </div>
          )}
          <div>
            <p className="font-semibold text-foreground">{review.author}</p>
            <p className="text-sm text-muted-foreground">
              {review.relativeDate ? `${review.relativeDate} · ` : ""}via Google
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

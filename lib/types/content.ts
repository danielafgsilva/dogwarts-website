import type { SanityImageSource } from "@/lib/sanity";

/** Shapes of the Sanity documents the pages render. All fields optional so the
 *  UI can degrade gracefully when content has not been authored yet. */

export interface CtaContent {
  title?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

export interface ServiceItem {
  _key?: string;
  title?: string;
  description?: string;
  detail?: string;
  price?: string;
  priceNote?: string;
  icon?: string;
  features?: string[];
  image?: SanityImageSource;
}

export interface HomePageContent {
  hero?: {
    badge?: string;
    title?: string;
    description?: string;
    intro?: string[];
    ctaPrimary?: string;
    ctaSecondary?: string;
    heroImage?: SanityImageSource;
  };
  services?: {
    title?: string;
    subtitle?: string;
    description?: string;
    services?: ServiceItem[];
  };
  reviews?: {
    title?: string;
    description?: string;
  };
  cta?: CtaContent;
}

export interface ServicesPageContent {
  hero?: {
    badge?: string;
    title?: string;
    description?: string;
    petsittingIntro?: string;
  };
  mainServices?: ServiceItem[];
  cta?: CtaContent;
}

export interface AboutValue {
  _key?: string;
  title?: string;
  description?: string;
  fullDescription?: string;
  icon?: string;
  features?: string[];
}

export interface AboutPageContent {
  hero?: {
    badge?: string;
    title?: string;
    description?: string;
    images?: SanityImageSource[];
    familyDogsCount?: number;
  };
  founderStory?: {
    badge?: string;
    title?: string;
    content?: string[];
    quote?: string;
    quoteAuthor?: string;
    stats?: Array<{
      _key?: string;
      title?: string;
      description?: string;
      icon?: string;
    }>;
  };
  values?: {
    badge?: string;
    title?: string;
    description?: string;
    values?: AboutValue[];
  };
  gallery?: {
    badge?: string;
    title?: string;
    images?: SanityImageSource[];
  };
  cta?: CtaContent;
}

export interface TestimonialsPageContent {
  hero?: {
    badge?: string;
    title?: string;
    description?: string;
  };
  cta?: CtaContent;
}

export interface ContactPageContent {
  hero?: {
    badge?: string;
    title?: string;
    description?: string;
  };
  contactCards?: {
    phoneCard?: {
      title?: string;
      description?: string;
      phoneButton?: string;
      whatsappButton?: string;
    };
    emailCard?: {
      title?: string;
      description?: string;
      button?: string;
      replyTime?: string;
    };
  };
  contactForm?: {
    title?: string;
    description?: string;
    submitButton?: string;
    successMessage?: string;
  };
  locationCard?: { title?: string; note?: string };
  hoursCard?: { title?: string; note?: string };
  socialCard?: { title?: string };
  cta?: CtaContent;
}

export interface SiteSettings {
  siteName?: string;
  siteDescription?: string;
  logo?: SanityImageSource;
  contact?: {
    phone?: string;
    phoneHours?: string;
    whatsapp?: string;
    email?: string;
    location?: string;
    googlePlaceId?: string;
    googleReviewsUrl?: string;
  };
  businessHours?: Array<{ _key?: string; day?: string; time?: string }>;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
  };
  footer?: {
    description?: string;
    copyright?: string;
    developer?: string;
  };
  business?: {
    founded?: number;
    tagline?: string;
    mission?: string;
  };
}

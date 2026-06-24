import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type {
  AboutPageContent,
  ContactPageContent,
  HomePageContent,
  ServicesPageContent,
  SiteSettings,
  TestimonialsPageContent,
} from '@/lib/types/content'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bsfnftzl',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export interface SanityImageSource {
  _type: 'image'
  asset: {
    _ref?: string
    _id?: string
    _type?: 'reference' | 'sanity.imageAsset'
  }
  alt?: string
  caption?: string
  hotspot?: { x: number; y: number; height: number; width: number }
  crop?: { top: number; bottom: number; left: number; right: number }
  [key: string]: unknown
}

export function urlFor(source: SanityImageSource | null | undefined) {
  return builder.image(source as SanityImageSource)
}

export const queries = {
  homePage: `*[_type == "homePage"][0]{
    hero,
    services,
    "reviews": testimonials{ title, description },
    cta
  }`,

  servicesPage: `*[_type == "servicesPage"][0]{
    hero,
    mainServices,
    cta
  }`,

  aboutPage: `*[_type == "aboutPage"][0]{
    hero,
    founderStory,
    values,
    gallery,
    cta
  }`,

  siteSettings: `*[_id == "siteSettings"][0] {
    siteName, siteDescription, logo, favicon, contact, businessHours, socialMedia, seo, footer, business
  }`,

  contactPage: `*[_type == "contactPage"][0]{
    hero, contactCards, contactForm, locationCard, hoursCard, socialCard, cta
  }`,

  testimonialsPage: `*[_type == "testimonialsPage"][0]{
    hero, cta
  }`,
}

export async function getHomePage(): Promise<HomePageContent | null> {
  return client.fetch(queries.homePage)
}

export async function getServicesPage(): Promise<ServicesPageContent | null> {
  return client.fetch(queries.servicesPage)
}

export async function getAboutPage(): Promise<AboutPageContent | null> {
  return client.fetch(queries.aboutPage)
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(queries.siteSettings)
}

export async function getContactPage(): Promise<ContactPageContent | null> {
  return client.fetch(queries.contactPage)
}

export async function getTestimonialsPage(): Promise<TestimonialsPageContent | null> {
  return client.fetch(queries.testimonialsPage)
}

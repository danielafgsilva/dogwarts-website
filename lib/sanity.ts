import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bsfnftzl',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  // Home Page
  homePage: `*[_type == "homePage"][0]{
    hero,
    services,
    testimonials,
    cta
  }`,

  // Services Page
  servicesPage: `*[_type == "servicesPage"][0]{
    hero,
    mainServices,
    additionalServices,
    pricingPlans,
    cta
  }`,

  // About Page
  aboutPage: `*[_type == "aboutPage"][0]{
    hero,
    founderStory,
    values,
    gallery,
    cta
  }`,

  // Testimonials
  testimonials: `*[_type == "testimonial"] | order(order asc, _createdAt desc) {
    _id,
    name,
    role,
    text,
    rating,
    initials,
    color,
    featured,
    order
  }`,

  featuredTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc, _createdAt desc) [0...3] {
    _id,
    name,
    role,
    text,
    rating,
    initials,
    color,
    featured,
    order
  }`,

  // FAQ
  faqs: `*[_type == "faq"] | order(order asc, _createdAt desc) {
    _id,
    question,
    answer,
    category,
    order,
    featured
  }`,

  faqsByCategory: `*[_type == "faq"] | order(order asc, _createdAt desc) {
    _id,
    question,
    answer,
    category,
    order,
    featured
  }`,

  // Blog Posts
  blogPosts: `*[_type == "blogPost" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    publishedAt,
    category,
    tags,
    featured
  }`,

  featuredBlogPosts: `*[_type == "blogPost" && published == true && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    publishedAt,
    category,
    tags
  }`,

  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    author,
    publishedAt,
    category,
    tags
  }`,

  // Site Settings
  siteSettings: `*[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    logo,
    favicon,
    contact,
    socialMedia,
    seo,
    footer,
    business
  }`,

  // FAQ Page
  faqPage: `*[_type == "faqPage"][0]{
    hero,
    faqCategories,
    contactCard,
    businessHours,
    guarantees,
    cta
  }`,

  // Contact Page
  contactPage: `*[_type == "contactPage"][0]{
    hero,
    contactMethods,
    contactForm,
    businessInfo,
    faqQuickLinks,
    cta
  }`,

  // Testimonials Page
  testimonialsPage: `*[_type == "testimonialsPage"][0]{
    hero,
    featuredTestimonial,
    testimonialsGrid,
    cta
  }`,

  // Blog Page
  blogPage: `*[_type == "blogPage"][0]{
    hero,
    featuredPost,
    blogPosts,
    categories,
    cta
  }`,
}

// Helper functions
export async function getHomePage() {
  return await client.fetch(queries.homePage)
}

export async function getServicesPage() {
  return await client.fetch(queries.servicesPage)
}

export async function getAboutPage() {
  return await client.fetch(queries.aboutPage)
}

export async function getTestimonials() {
  return await client.fetch(queries.testimonials)
}

export async function getFeaturedTestimonials() {
  return await client.fetch(queries.featuredTestimonials)
}

export async function getFAQs() {
  return await client.fetch(queries.faqs)
}

export async function getBlogPosts() {
  return await client.fetch(queries.blogPosts)
}

export async function getFeaturedBlogPosts() {
  return await client.fetch(queries.featuredBlogPosts)
}

export async function getBlogPostBySlug(slug: string) {
  return await client.fetch(queries.blogPostBySlug, { slug })
}

export async function getSiteSettings() {
  return await client.fetch(queries.siteSettings)
}

export async function getFAQPage() {
  return await client.fetch(queries.faqPage)
}

export async function getContactPage() {
  return await client.fetch(queries.contactPage)
}

export async function getTestimonialsPage() {
  return await client.fetch(queries.testimonialsPage)
}

export async function getBlogPage() {
  return await client.fetch(queries.blogPage)
}

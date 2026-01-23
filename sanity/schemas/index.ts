import { homePage } from './homePage'
import servicesPage from './servicesPage'
import { aboutPage } from './aboutPage'
import { testimonial } from './testimonial'
import { faq } from './faq'
import { blogPost } from './blogPost'
import { siteSettings } from './siteSettings'
import faqPage from './faqPage'
import contactPage from './contactPage'
import testimonialsPage from './testimonialsPage'
import blogPage from './blogPage'

// Page Schemas - Main page configurations
export const schemaTypes = [
  homePage,
  servicesPage,
  aboutPage,
  faqPage,
  contactPage,
  testimonialsPage,
  blogPage,
  // Content Types - Reusable content schemas
  testimonial,
  faq,
  blogPost,
  // Settings - Site-wide configuration
  siteSettings,
]

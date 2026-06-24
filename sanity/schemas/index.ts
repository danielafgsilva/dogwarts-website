import { homePage } from './homePage'
import servicesPage from './servicesPage'
import { aboutPage } from './aboutPage'
import { testimonial } from './testimonial'
import { siteSettings } from './siteSettings'
import contactPage from './contactPage'
import testimonialsPage from './testimonialsPage'

// Page Schemas - Main page configurations
export const schemaTypes = [
  homePage,
  servicesPage,
  aboutPage,
  contactPage,
  testimonialsPage,
  // Content Types - Reusable content schemas
  testimonial,
  // Settings - Site-wide configuration
  siteSettings,
]

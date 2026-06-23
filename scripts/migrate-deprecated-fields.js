/**
 * One-off migration to reconcile existing Sanity documents with the current
 * schema after the content refactor.
 *
 *   node scripts/migrate-deprecated-fields.js
 *
 * SAFE / non-destructive:
 *   - unset() only removes fields the schema no longer defines (dead data that
 *     surfaces as "unknown field" warnings in the Studio).
 *   - setIfMissing() only fills NEW fields that are currently empty; it never
 *     overwrites values you have edited in the Studio (e.g. homepage prices).
 *
 * Requires SANITY_API_TOKEN (write access) in .env.
 */

require('dotenv').config({ path: '.env' })
const { createClient } = require('@sanity/client')

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('❌ Falta SANITY_API_TOKEN (token de escrita) no .env')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token,
  useCdn: false,
  apiVersion: '2024-01-01',
})

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?sa=X&sca_esv=5ded1eb12a838e6b&hl=pt-PT&sxsrf=APpeQnt8NQKY3rDvxsu9WHOnAIhu_c7JFQ:1782223073327&q=Dogwarts+%7C+Estadia+familiar+%26+Creche+canina+Cr%C3%ADticas&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDEzMjE3NrA0NjY0tjA1NTAyMtrAyPiK0dQlP708saikWKFGwbW4JDElM1EhLTE3MyczsUhBTcG5KDU5I1UhOTEvMy8RyDu8tiQzObF4ESt5-gBpGbmFiwAAAA&rldimm=14624730933138550222&tbm=lcl&ved=2ahUKEwifv8ipwp2VAxV4UqQEHYdzHBgQ9fQKegQIQRAG&biw=1259&bih=903&dpr=2#lkt=LocalPoiReviews'

async function migrate() {
  console.log('🔧 A reconciliar documentos com o schema atual...')

  // --- contactPage: drop deprecated fields ---
  await client
    .patch('contactPage')
    .unset([
      'contactMethods',
      'businessInfo',
      'faqQuickLinks',
      'contactForm.serviceOptions',
    ])
    .commit()
  console.log('✅ contactPage: campos obsoletos removidos')

  // --- siteSettings: drop deprecated contact fields, fill empty new ones ---
  await client
    .patch('siteSettings')
    .unset(['contact.city', 'contact.address', 'socialMedia.whatsapp'])
    .setIfMissing({
      'contact.phone': '918018726',
      'contact.phoneHours': 'Disponível das 10h às 19h',
      'contact.whatsapp': '351918018726',
      'contact.email': 'dogwarts.pt@gmail.com',
      'contact.location': 'Vila Nova de Gaia',
      'contact.googleReviewsUrl': GOOGLE_REVIEWS_URL,
      businessHours: [
        { _key: 'seg-sab', day: 'Segunda a Sábado', time: '8h – 19h' },
        { _key: 'domingo', day: 'Domingo', time: 'Encerrado' },
      ],
      socialMedia: {
        instagram: 'https://www.instagram.com/dogwarts.pt/',
        facebook: 'https://www.facebook.com/dogwarts.pt',
      },
    })
    .commit()
  console.log('✅ siteSettings: campos obsoletos removidos e contactos preenchidos (se em falta)')

  console.log('🎉 Migração concluída. As avaliações "campo desconhecido" devem desaparecer.')
}

migrate().catch((error) => {
  console.error('❌ Erro durante a migração:', error)
  process.exit(1)
})

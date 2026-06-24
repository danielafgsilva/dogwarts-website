/**
 * Consolidates a duplicate siteSettings document.
 *
 *   node scripts/consolidate-sitesettings.js
 *
 * A stray siteSettings doc (random id, created before the singleton pattern)
 * was shadowing the canonical `siteSettings` singleton in `[0]` queries, which
 * left the live site with no contact info. This:
 *   1. copies the orphan's still-useful fields (logo/footer/business/siteName)
 *      onto the singleton via setIfMissing (never overwrites curated values),
 *   2. corrects the stale email, and
 *   3. deletes the orphan.
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

const ORPHAN_ID = 'dbfd2b7a-3737-4d44-93b6-08fe30de6fe6'
const CORRECT_EMAIL = 'dogwarts.pt@gmail.com'

async function run() {
  const orphan = await client.getDocument(ORPHAN_ID)
  const singleton = await client.getDocument('siteSettings')

  if (!singleton) {
    console.error('❌ Documento singleton "siteSettings" não encontrado — aborta.')
    process.exit(1)
  }

  if (orphan) {
    // Carry over the orphan's unique, still-valid fields without clobbering
    // anything already set on the singleton.
    const carry = {}
    if (orphan.logo) carry.logo = orphan.logo
    if (orphan.footer) carry.footer = orphan.footer
    if (orphan.business) carry.business = orphan.business
    if (orphan.siteName) carry.siteName = orphan.siteName

    await client
      .patch('siteSettings')
      .setIfMissing(carry)
      .set({ 'contact.email': CORRECT_EMAIL })
      .commit()
    console.log('✅ siteSettings: campos úteis migrados + email corrigido')

    await client.delete(ORPHAN_ID)
    console.log(`🗑️  Documento duplicado ${ORPHAN_ID} eliminado`)
  } else {
    await client
      .patch('siteSettings')
      .set({ 'contact.email': CORRECT_EMAIL })
      .commit()
    console.log('✅ Sem duplicado. Email corrigido no singleton.')
  }

  console.log('🎉 Consolidação concluída.')
}

run().catch((error) => {
  console.error('❌ Erro:', error)
  process.exit(1)
})

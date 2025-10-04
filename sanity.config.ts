import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'dogwarts-cms',
  title: 'Dogwarts CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Conteúdo')
          .items([
            S.listItem()
              .title('Página Inicial')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.listItem()
              .title('Serviços')
              .child(
                S.document()
                  .schemaType('servicesPage')
                  .documentId('servicesPage')
              ),
            S.listItem()
              .title('Sobre Nós')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
              ),
            S.divider(),
            S.listItem()
              .title('Testemunhos')
              .child(
                S.documentTypeList('testimonial')
                  .title('Testemunhos')
              ),
                   S.listItem()
                     .title('FAQ')
                     .child(
                       S.documentTypeList('faq')
                         .title('Perguntas Frequentes')
                     ),
                   S.listItem()
                     .title('Posts do Blog')
                     .child(
                       S.documentTypeList('blogPost')
                         .title('Posts do Blog')
                     ),
                   S.divider(),
                   S.listItem()
                     .title('Página de Serviços')
                     .child(
                       S.document()
                         .schemaType('servicesPage')
                         .documentId('servicesPage')
                     ),
                   S.listItem()
                     .title('Página FAQ')
                     .child(
                       S.document()
                         .schemaType('faqPage')
                         .documentId('faqPage')
                     ),
                   S.listItem()
                     .title('Página de Contactos')
                     .child(
                       S.document()
                         .schemaType('contactPage')
                         .documentId('contactPage')
                     ),
                   S.listItem()
                     .title('Página de Testemunhos')
                     .child(
                       S.document()
                         .schemaType('testimonialsPage')
                         .documentId('testimonialsPage')
                     ),
                   S.listItem()
                     .title('Página do Blog')
                     .child(
                       S.document()
                         .schemaType('blogPage')
                         .documentId('blogPage')
                     ),
            S.divider(),
            S.listItem()
              .title('Configurações Gerais')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ])
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})

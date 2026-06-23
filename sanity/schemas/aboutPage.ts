import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Página Sobre Nós',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Seção Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'A Nossa História',
        }),
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'images',
          title: 'Imagens do Carousel',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
        defineField({
          name: 'familyDogsCount',
          title: 'Número de Cães da Família',
          type: 'number',
          initialValue: 4,
        }),
      ],
    }),
    defineField({
      name: 'founderStory',
      title: 'História da Fundadora',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'Setembro 2023',
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
        }),
        defineField({
          name: 'content',
          title: 'Conteúdo (parágrafos)',
          description: 'Cada item é um parágrafo da história.',
          type: 'array',
          of: [{ type: 'text', rows: 3 }],
        }),
        defineField({
          name: 'quote',
          title: 'Citação',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'quoteAuthor',
          title: 'Autor da Citação',
          type: 'string',
        }),
        defineField({
          name: 'stats',
          title: 'Estatísticas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'string',
                }),
                defineField({
                  name: 'icon',
                  title: 'Ícone',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Award', value: 'Award' },
                      { title: 'Heart', value: 'Heart' },
                      { title: 'Clock', value: 'Clock' },
                    ],
                  },
                }),
                defineField({
                  name: 'color',
                  title: 'Cor',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Primary', value: 'primary' },
                      { title: 'Accent', value: 'accent' },
                      { title: 'Secondary', value: 'secondary' },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Valores',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'Os Nossos Valores',
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'values',
          title: 'Valores',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'fullDescription',
                  title: 'Descrição Completa',
                  type: 'text',
                  rows: 4,
                }),
                defineField({
                  name: 'icon',
                  title: 'Ícone',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Shield', value: 'Shield' },
                      { title: 'Heart', value: 'Heart' },
                      { title: 'Home', value: 'Home' },
                    ],
                  },
                }),
                defineField({
                  name: 'color',
                  title: 'Cor',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Amarelo', value: '#FDCF4D' },
                      { title: 'Roxo', value: '#8B5CF6' },
                      { title: 'Azul', value: '#1F3B75' },
                    ],
                  },
                }),
                defineField({
                  name: 'features',
                  title: 'Características',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'A Nossa Família',
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
        }),
        defineField({
          name: 'images',
          title: 'Imagens',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Seção CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'primaryButton',
          title: 'Botão Principal',
          type: 'string',
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Botão Secundário',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Página Sobre Nós',
      }
    },
  },
})

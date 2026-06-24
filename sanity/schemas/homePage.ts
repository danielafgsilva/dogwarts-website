import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Página Inicial',
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
          initialValue: 'Bem-vindo',
        }),
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descrição (parágrafo principal)',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Parágrafos de introdução',
          description:
            'Parágrafos exibidos abaixo do título e da descrição (ex.: história da fundadora).',
          type: 'array',
          of: [{ type: 'text', rows: 3 }],
        }),
        defineField({
          name: 'ctaPrimary',
          title: 'Botão Principal',
          type: 'string',
          initialValue: 'Conheça nossos serviços',
        }),
        defineField({
          name: 'ctaSecondary',
          title: 'Botão Secundário',
          type: 'string',
          initialValue: 'Contacte-nos',
        }),
        defineField({
          name: 'heroImage',
          title: 'Imagem do Hero',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagem de Fundo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Seção de Serviços',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título da Seção',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'services',
          title: 'Serviços em Destaque',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'detail',
                  title: 'Detalhe',
                  type: 'text',
                  rows: 3,
                }),
                defineField({
                  name: 'price',
                  title: 'Preço',
                  type: 'string',
                }),
                defineField({
                  name: 'priceNote',
                  title: 'Detalhe do preço',
                  description:
                    'Ex.: "+ deslocação · visita de 1h", "por diária".',
                  type: 'string',
                }),
                defineField({
                  name: 'icon',
                  title: 'Ícone',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Heart', value: 'Heart' },
                      { title: 'MapPin', value: 'MapPin' },
                      { title: 'Clock', value: 'Clock' },
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
                      { title: 'Primary', value: 'primary' },
                      { title: 'Accent', value: 'accent' },
                      { title: 'Chart 4', value: 'chart-4' },
                      { title: 'Chart 5', value: 'chart-5' },
                    ],
                  },
                }),
                defineField({
                  name: 'image',
                  title: 'Imagem do Serviço',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Seção de Testemunhos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título da Seção',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'testimonials',
          title: 'Testemunhos em Destaque',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'testimonial' }],
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
        title: 'Página Inicial',
      }
    },
  },
})

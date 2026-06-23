import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nome do Site',
      type: 'string',
      initialValue: 'Dogwarts',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descrição do Site',
      type: 'text',
      rows: 3,
      description: 'Descrição para SEO e redes sociais',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Ícone pequeno para o browser',
    }),
    defineField({
      name: 'contact',
      title: 'Informações de Contacto',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Telefone',
          type: 'string',
          description: 'Apenas os 9 dígitos (ex.: 918018726)',
        }),
        defineField({
          name: 'phoneHours',
          title: 'Horário do telefone',
          type: 'string',
          initialValue: 'Disponível das 10h às 19h',
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'string',
          description: 'Número com indicativo, sem espaços (ex.: 351918018726)',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'location',
          title: 'Localização',
          type: 'string',
          description: 'Cidade ou região mostrada publicamente (sem morada exata)',
          initialValue: 'Vila Nova de Gaia',
        }),
        defineField({
          name: 'googlePlaceId',
          title: 'Google Place ID',
          type: 'string',
          description:
            'Identificador do estabelecimento no Google Maps usado para puxar as avaliações.',
        }),
        defineField({
          name: 'googleReviewsUrl',
          title: 'URL público das avaliações Google',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Horário de Funcionamento',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'day', title: 'Dia(s)', type: 'string' }),
            defineField({ name: 'time', title: 'Horário', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Título',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Descrição',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'keywords',
          title: 'Palavras-chave',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
        }),
        defineField({
          name: 'ogImage',
          title: 'Imagem para redes sociais',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Rodapé',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Texto descritivo',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'copyright',
          title: 'Texto de Copyright',
          type: 'string',
        }),
        defineField({
          name: 'developer',
          title: 'Créditos do desenvolvedor',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'business',
      title: 'Informações do Negócio',
      type: 'object',
      fields: [
        defineField({
          name: 'founded',
          title: 'Ano de Fundação',
          type: 'number',
          initialValue: 2023,
        }),
        defineField({
          name: 'tagline',
          title: 'Slogan',
          type: 'string',
        }),
        defineField({
          name: 'mission',
          title: 'Missão',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Configurações do Site' }
    },
  },
})

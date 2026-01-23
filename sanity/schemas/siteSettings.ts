import { defineType, defineField } from 'sanity'

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
      options: {
        hotspot: true,
      },
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
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Endereço',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'Cidade',
          type: 'string',
          initialValue: 'Lisboa, Portugal',
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'string',
          description: 'Número do WhatsApp (apenas números)',
        }),
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
          description: 'Título para motores de busca',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Descrição',
          type: 'text',
          rows: 3,
          description: 'Descrição para motores de busca',
        }),
        defineField({
          name: 'keywords',
          title: 'Palavras-chave',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        }),
        defineField({
          name: 'ogImage',
          title: 'Imagem para Redes Sociais',
          type: 'image',
          description: 'Imagem que aparece quando o site é partilhado',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Rodapé',
      type: 'object',
      fields: [
        defineField({
          name: 'copyright',
          title: 'Texto de Copyright',
          type: 'string',
          initialValue: '© 2024 Dogwarts. Todos os direitos reservados.',
        }),
        defineField({
          name: 'developer',
          title: 'Créditos do Desenvolvedor',
          type: 'string',
          initialValue: 'Desenvolvido por Daniela Silva & Tiago Santos',
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
          initialValue: 'Cães Felizes & Donos Tranquilos',
        }),
        defineField({
          name: 'mission',
          title: 'Missão',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'values',
          title: 'Valores Principais',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Configurações do Site',
      }
    },
  },
})

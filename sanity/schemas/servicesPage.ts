import { defineType } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Página de Serviços',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Secção Hero',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'Os Nossos Serviços'
        },
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 3
        },
        {
          name: 'petsittingIntro',
          title: 'Texto intro Petsitting',
          description:
            'Bloco curto exibido por baixo da descrição, focado no Petsitting ao domicílio.',
          type: 'text',
          rows: 3
        },
        {
          name: 'backgroundImage',
          title: 'Imagem de Fundo',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'mainServices',
      title: 'Serviços Principais',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'text',
              rows: 2
            },
            {
              name: 'detail',
              title: 'Detalhe',
              type: 'text',
              rows: 4
            },
            {
              name: 'price',
              title: 'Preço',
              type: 'string'
            },
            {
              name: 'priceNote',
              title: 'Detalhe do preço',
              description: 'Ex.: "+ deslocação · 1h", "por diária".',
              type: 'string'
            },
            {
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              options: {
                list: [
                  { title: 'Home', value: 'Home' },
                  { title: 'MapPin', value: 'MapPin' },
                  { title: 'Clock', value: 'Clock' },
                  { title: 'Heart', value: 'Heart' }
                ]
              }
            },
            {
              name: 'color',
              title: 'Cor',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Accent', value: 'accent' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Chart 4', value: 'chart-4' },
                  { title: 'Chart 5', value: 'chart-5' }
                ]
              }
            },
            {
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'badge',
              title: 'Badge (opcional)',
              type: 'string'
            },
            {
              name: 'features',
              title: 'Características Incluídas',
              type: 'array',
              of: [{ type: 'string' }]
            }
          ]
        }
      ]
    },
    {
      name: 'additionalServices',
      title: 'Serviços Adicionais',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Serviços Adicionais'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Extras para o Máximo Conforto'
        },
        {
          name: 'services',
          title: 'Serviços',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Título',
                  type: 'string'
                },
                {
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  rows: 2
                },
                {
                  name: 'icon',
                  title: 'Ícone',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Camera', value: 'Camera' },
                      { title: 'MessageCircle', value: 'MessageCircle' },
                      { title: 'Shield', value: 'Shield' }
                    ]
                  }
                },
                {
                  name: 'color',
                  title: 'Cor',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Purple', value: '#8B5CF6' },
                      { title: 'Green', value: '#10B981' },
                      { title: 'Orange', value: '#F59E0B' }
                    ]
                  }
                },
                {
                  name: 'included',
                  title: 'Incluído',
                  type: 'boolean',
                  initialValue: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'pricingPlans',
      title: 'Planos de Preços',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Planos e Descontos'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Escolha o Plano Ideal para o Seu Patudo'
        },
        {
          name: 'plans',
          title: 'Planos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nome do Plano',
                  type: 'string'
                },
                {
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  rows: 2
                },
                {
                  name: 'price',
                  title: 'Preço/Desconto',
                  type: 'string'
                },
                {
                  name: 'priceDescription',
                  title: 'Descrição do Preço',
                  type: 'string'
                },
                {
                  name: 'features',
                  title: 'Características',
                  type: 'array',
                  of: [{ type: 'string' }]
                },
                {
                  name: 'popular',
                  title: 'Mais Popular',
                  type: 'boolean',
                  initialValue: false
                },
                {
                  name: 'color',
                  title: 'Cor',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Primary', value: 'primary' },
                      { title: 'Purple', value: '#8B5CF6' }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 3
        },
        {
          name: 'primaryButton',
          title: 'Botão Primário',
          type: 'string'
        },
        {
          name: 'secondaryButton',
          title: 'Botão Secundário',
          type: 'string'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'hero.title'
    },
    prepare(selection) {
      return {
        title: selection.title || 'Página de Serviços'
      }
    }
  }
})
import { defineType } from 'sanity'

export default defineType({
  name: 'testimonialsPage',
  title: 'Página de Testemunhos',
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
          initialValue: 'Testemunhos'
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
        }
      ]
    },
    {
      name: 'featuredTestimonial',
      title: 'Testemunho em Destaque',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Nome',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'role',
          title: 'Função/Relacionamento',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'text',
          title: 'Testemunho',
          type: 'text',
          rows: 4,
          validation: Rule => Rule.required()
        },
        {
          name: 'rating',
          title: 'Avaliação',
          type: 'number',
          validation: Rule => Rule.required().min(1).max(5)
        },
        {
          name: 'initials',
          title: 'Iniciais',
          type: 'string',
          validation: Rule => Rule.required().max(3)
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
          name: 'service',
          title: 'Serviço Utilizado',
          type: 'string'
        },
        {
          name: 'date',
          title: 'Data',
          type: 'string'
        }
      ]
    },
    {
      name: 'testimonialsGrid',
      title: 'Grelha de Testemunhos',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'O Que Dizem os Nossos Clientes'
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 2
        },
        {
          name: 'testimonials',
          title: 'Testemunhos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nome',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'role',
                  title: 'Função/Relacionamento',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'text',
                  title: 'Testemunho',
                  type: 'text',
                  rows: 4,
                  validation: Rule => Rule.required()
                },
                {
                  name: 'rating',
                  title: 'Avaliação',
                  type: 'number',
                  validation: Rule => Rule.required().min(1).max(5)
                },
                {
                  name: 'initials',
                  title: 'Iniciais',
                  type: 'string',
                  validation: Rule => Rule.required().max(3)
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
                  name: 'service',
                  title: 'Serviço Utilizado',
                  type: 'string'
                },
                {
                  name: 'date',
                  title: 'Data',
                  type: 'string'
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
        title: selection.title || 'Página de Testemunhos'
      }
    }
  }
})

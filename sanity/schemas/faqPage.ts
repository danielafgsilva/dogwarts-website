import { defineType } from 'sanity'

export default defineType({
  name: 'faqPage',
  title: 'Página FAQ',
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
          initialValue: 'Perguntas Frequentes'
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
      name: 'faqCategories',
      title: 'Categorias de FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título da Categoria',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'faqs',
              title: 'Perguntas Frequentes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'question',
                      title: 'Pergunta',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'answer',
                      title: 'Resposta',
                      type: 'array',
                      of: [
                        {
                          type: 'block',
                          styles: [
                            { title: 'Normal', value: 'normal' }
                          ],
                          lists: [],
                          marks: {
                            decorators: [],
                            annotations: []
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'contactCard',
      title: 'Cartão de Contacto',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Ainda tem dúvidas?'
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 2
        },
        {
          name: 'phoneButton',
          title: 'Texto do Botão Telefone',
          type: 'string',
          initialValue: 'Ligar Agora'
        },
        {
          name: 'emailButton',
          title: 'Texto do Botão Email',
          type: 'string',
          initialValue: 'Enviar Email'
        }
      ]
    },
    {
      name: 'businessHours',
      title: 'Horários de Funcionamento',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Horários de Atendimento'
        },
        {
          name: 'hours',
          title: 'Horários',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'day',
                  title: 'Dia',
                  type: 'string'
                },
                {
                  name: 'time',
                  title: 'Horário',
                  type: 'string'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'guarantees',
      title: 'Garantias',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Garantias'
        },
        {
          name: 'items',
          title: 'Itens de Garantia',
          type: 'array',
          of: [{ type: 'string' }]
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
        title: selection.title || 'Página FAQ'
      }
    }
  }
})

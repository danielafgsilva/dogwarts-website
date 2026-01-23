import { defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Página de Contactos',
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
          initialValue: 'Entre em Contacto'
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
      name: 'contactMethods',
      title: 'Métodos de Contacto',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Tipo',
              type: 'string',
              options: {
                list: [
                  { title: 'Telefone', value: 'phone' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'Email', value: 'email' }
                ]
              }
            },
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
              name: 'value',
              title: 'Valor (telefone/email)',
              type: 'string'
            },
            {
              name: 'availability',
              title: 'Disponibilidade',
              type: 'string'
            },
            {
              name: 'buttonText',
              title: 'Texto do Botão',
              type: 'string'
            },
            {
              name: 'color',
              title: 'Cor',
              type: 'string',
              options: {
                list: [
                  { title: 'Amarelo', value: '#FDCF4D' },
                  { title: 'Roxo', value: '#8B5CF6' },
                  { title: 'Verde', value: '#10B981' }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: 'contactForm',
      title: 'Formulário de Contacto',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Envie-nos uma Mensagem'
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 2
        },
        {
          name: 'submitButton',
          title: 'Texto do Botão de Envio',
          type: 'string',
          initialValue: 'Enviar Mensagem'
        },
        {
          name: 'serviceOptions',
          title: 'Opções de Serviço',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Valor',
                  type: 'string'
                },
                {
                  name: 'label',
                  title: 'Etiqueta',
                  type: 'string'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'businessInfo',
      title: 'Informações do Negócio',
      type: 'object',
      fields: [
        {
          name: 'location',
          title: 'Localização',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Localização'
            },
            {
              name: 'businessName',
              title: 'Nome do Negócio',
              type: 'string'
            },
            {
              name: 'address',
              title: 'Endereço',
              type: 'text',
              rows: 3
            },
            {
              name: 'mapButton',
              title: 'Texto do Botão do Mapa',
              type: 'string',
              initialValue: 'Ver no Google Maps'
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
              initialValue: 'Horários de Funcionamento'
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
          name: 'socialMedia',
          title: 'Redes Sociais',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Siga-nos nas Redes Sociais'
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'text',
              rows: 2
            },
            {
              name: 'platforms',
              title: 'Plataformas',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Nome',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Instagram', value: 'instagram' },
                          { title: 'Facebook', value: 'facebook' }
                        ]
                      }
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'url'
                    },
                    {
                      name: 'color',
                      title: 'Cor',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Rosa', value: 'pink-500' },
                          { title: 'Azul', value: 'blue-600' }
                        ]
                      }
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
      name: 'faqQuickLinks',
      title: 'Links Rápidos FAQ',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Perguntas Frequentes'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Tem Dúvidas? Temos Respostas!'
        },
        {
          name: 'links',
          title: 'Links',
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
                  name: 'linkText',
                  title: 'Texto do Link',
                  type: 'string',
                  initialValue: 'Saber mais →'
                }
              ]
            }
          ]
        },
        {
          name: 'viewAllButton',
          title: 'Texto do Botão Ver Todas',
          type: 'string',
          initialValue: 'Ver Todas as FAQ'
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
        title: selection.title || 'Página de Contactos'
      }
    }
  }
})

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
          initialValue: 'Entre em Contacto',
        },
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 3,
        },
      ],
    },
    {
      name: 'contactCards',
      title: 'Cartões de Contacto',
      type: 'object',
      description:
        'Dois cartões: telefone + WhatsApp combinados, e email. Os valores são puxados das Configurações do Site.',
      fields: [
        {
          name: 'phoneCard',
          title: 'Cartão de Telefone e WhatsApp',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Telefone e WhatsApp',
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'string',
              initialValue: 'Atendimento personalizado',
            },
            {
              name: 'phoneButton',
              title: 'Botão de telefone',
              type: 'string',
              initialValue: 'Ligar agora',
            },
            {
              name: 'whatsappButton',
              title: 'Botão de WhatsApp',
              type: 'string',
              initialValue: 'Abrir WhatsApp',
            },
          ],
        },
        {
          name: 'emailCard',
          title: 'Cartão de Email',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Email',
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'string',
              initialValue: 'Envie-nos os detalhes',
            },
            {
              name: 'button',
              title: 'Texto do botão',
              type: 'string',
              initialValue: 'Enviar email',
            },
            {
              name: 'replyTime',
              title: 'Tempo de resposta',
              type: 'string',
              initialValue: 'Resposta em 24h úteis',
            },
          ],
        },
      ],
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
          initialValue: 'Envie-nos uma mensagem',
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'text',
          rows: 2,
        },
        {
          name: 'submitButton',
          title: 'Texto do botão de envio',
          type: 'string',
          initialValue: 'Enviar mensagem',
        },
        {
          name: 'successMessage',
          title: 'Mensagem de sucesso',
          type: 'text',
          rows: 2,
          initialValue:
            'Obrigado pelo seu contacto — respondemos em breve.',
        },
      ],
    },
    {
      name: 'locationCard',
      title: 'Cartão de Localização',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título', type: 'string', initialValue: 'Localização' },
        {
          name: 'note',
          title: 'Nota',
          type: 'text',
          rows: 2,
          initialValue: 'A morada exata é partilhada apenas após o primeiro contacto.',
        },
      ],
    },
    {
      name: 'hoursCard',
      title: 'Cartão de Horário',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título', type: 'string', initialValue: 'Horário' },
        {
          name: 'note',
          title: 'Nota',
          type: 'string',
          initialValue: 'Não disponibilizamos serviço de emergência.',
        },
      ],
    },
    {
      name: 'socialCard',
      title: 'Cartão de Redes Sociais',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Siga-nos nas redes sociais',
        },
      ],
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título', type: 'string' },
        { name: 'description', title: 'Descrição', type: 'text', rows: 3 },
        { name: 'primaryButton', title: 'Botão Primário', type: 'string' },
        { name: 'secondaryButton', title: 'Botão Secundário', type: 'string' },
      ],
    },
  ],
  preview: {
    select: { title: 'hero.title' },
    prepare(selection) {
      return { title: selection.title || 'Página de Contactos' }
    },
  },
})

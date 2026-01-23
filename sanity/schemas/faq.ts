import { defineType, defineField } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'Pergunta Frequente',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Pergunta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Resposta',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Serviços', value: 'services' },
          { title: 'Preços', value: 'pricing' },
          { title: 'Agendamento', value: 'booking' },
          { title: 'Cuidados', value: 'care' },
          { title: 'Emergências', value: 'emergency' },
          { title: 'Geral', value: 'general' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Ordem para exibição (menor número = aparece primeiro)',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Destaque',
      type: 'boolean',
      description: 'Se deve aparecer em destaque',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
    },
    prepare(selection) {
      const { title, category } = selection
      return {
        title: title,
        subtitle: `Categoria: ${category}`,
      }
    },
  },
  orderings: [
    {
      title: 'Ordem de Exibição',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'question', direction: 'asc' },
      ],
    },
    {
      title: 'Categoria',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Pergunta A-Z',
      name: 'questionAsc',
      by: [{ field: 'question', direction: 'asc' }],
    },
  ],
})

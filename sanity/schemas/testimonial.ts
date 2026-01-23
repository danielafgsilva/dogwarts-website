import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testemunho',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Cliente',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Função/Relacionamento',
      type: 'string',
      description: 'Ex: "Tutora do Max", "Tutor da Luna"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto do Testemunho',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Avaliação (Estrelas)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'initials',
      title: 'Iniciais',
      type: 'string',
      description: 'Iniciais para mostrar no avatar',
      validation: (Rule) => Rule.required().max(3),
    }),
    defineField({
      name: 'color',
      title: 'Cor do Avatar',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Accent', value: 'accent' },
          { title: 'Chart 4', value: 'chart-4' },
          { title: 'Chart 5', value: 'chart-5' },
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'featured',
      title: 'Destaque na Página Inicial',
      type: 'boolean',
      description: 'Se deve aparecer na página inicial',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Ordem para exibição (menor número = aparece primeiro)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      rating: 'rating',
    },
    prepare(selection) {
      const { title, subtitle, rating } = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${rating} estrelas`,
      }
    },
  },
  orderings: [
    {
      title: 'Ordem de Exibição',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
    {
      title: 'Nome A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Avaliação (Maior)',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }],
    },
  ],
})

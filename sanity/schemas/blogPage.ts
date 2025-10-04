import { defineType } from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Página do Blog',
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
          initialValue: 'Blog'
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
      name: 'featuredPost',
      title: 'Post em Destaque',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'excerpt',
          title: 'Excerto',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        },
        {
          name: 'category',
          title: 'Categoria',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'date',
          title: 'Data',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'readTime',
          title: 'Tempo de Leitura',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'author',
          title: 'Autor',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'image',
          title: 'Imagem',
          type: 'image',
          options: {
            hotspot: true
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96
          },
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'blogPosts',
      title: 'Posts do Blog',
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
              name: 'excerpt',
              title: 'Excerto',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            },
            {
              name: 'category',
              title: 'Categoria',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'date',
              title: 'Data',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'readTime',
              title: 'Tempo de Leitura',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'author',
              title: 'Autor',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'featured',
              title: 'Em Destaque',
              type: 'boolean',
              initialValue: false
            }
          ]
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categorias do Blog',
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
              name: 'description',
              title: 'Descrição',
              type: 'text',
              rows: 2
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
        title: selection.title || 'Página do Blog'
      }
    }
  }
})

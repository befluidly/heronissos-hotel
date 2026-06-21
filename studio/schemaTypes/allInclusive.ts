import { defineType, defineField } from 'sanity'

export const allInclusive = defineType({
  name: 'allInclusive',
  title: 'All-Inclusive',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'breakfast',
      title: 'Breakfast',
      type: 'object',
      fields: [
        { name: 'time', title: 'Time', type: 'string', description: 'e.g. 07:30' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'lunch',
      title: 'Lunch',
      type: 'object',
      fields: [
        { name: 'time', title: 'Time', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'snacks',
      title: 'Afternoon snacks',
      type: 'object',
      fields: [
        { name: 'time', title: 'Time', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'dinner',
      title: 'Dinner',
      type: 'object',
      fields: [
        { name: 'time', title: 'Time', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'drinks',
      title: 'Drinks list',
      type: 'array',
      description: 'List of included drinks. Drag to reorder.',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'All-Inclusive' }
    },
  },
})

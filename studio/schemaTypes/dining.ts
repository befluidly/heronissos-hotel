import { defineType, defineField } from 'sanity'

export const dining = defineType({
  name: 'dining',
  title: 'Dining',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'labyrinthPhoto',
      title: 'Labyrinth Restaurant — photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'labyrinthType',
      title: 'Labyrinth Restaurant — type / subtitle',
      type: 'string',
      description: 'e.g. Main Restaurant · Buffet',
    }),
    defineField({
      name: 'labyrinthDesc',
      title: 'Labyrinth Restaurant — description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'nissosPhoto',
      title: 'Nissos Pool Bar — photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'nissosType',
      title: 'Nissos Pool Bar — type / subtitle',
      type: 'string',
      description: 'e.g. Pool Bar · Cocktails',
    }),
    defineField({
      name: 'nissosDesc',
      title: 'Nissos Pool Bar — description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Dining' }
    },
  },
})

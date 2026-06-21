import { defineType, defineField } from 'sanity'

export const hotelIntro = defineType({
  name: 'hotelIntro',
  title: 'Hotel Introduction',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
      rows: 4,
      description: 'First paragraph shown in the intro section (English only)',
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
      rows: 3,
      description: 'Second paragraph in the intro section (English only)',
    }),
    defineField({
      name: 'photo',
      title: 'Intro photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Photo shown next to the intro text',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hotel Introduction' }
    },
  },
})

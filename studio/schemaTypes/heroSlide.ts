import { defineType, defineField } from 'sanity'

export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Short description of the image for accessibility',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (1 = first)',
    }),
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Slide', media }
    },
  },
})

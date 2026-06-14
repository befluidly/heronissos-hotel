import { defineType, defineField } from 'sanity'

export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Room type',
      type: 'string',
      options: {
        list: [
          { title: 'Superior Room', value: 'superior' },
          { title: 'Standard Room', value: 'standard' },
          { title: 'Promo Room', value: 'promo' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
      description: 'The image shown on the room card',
    }),
    defineField({
      name: 'gallery',
      title: 'Room photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
      ],
      description: 'All photos shown in the lightbox',
    }),
  ],
  preview: {
    select: { title: 'type', media: 'mainImage' },
    prepare({ title, media }) {
      const labels: Record<string, string> = {
        superior: 'Superior Room',
        standard: 'Standard Room',
        promo: 'Promo Room',
      }
      return { title: labels[title] || title, media }
    },
  },
})

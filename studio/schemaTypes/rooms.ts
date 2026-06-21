import { defineType, defineField } from 'sanity'

const roomType = (name: string, title: string) => defineType({
  name,
  title,
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'mainPhoto',
      title: 'Main photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Photo shown on the room card on the homepage',
    }),
    defineField({
      name: 'gallery',
      title: 'Room photos',
      type: 'array',
      description: 'All photos shown when guests click "View photos". Drag to reorder.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
        },
      ],
    }),
  ],
  preview: {
    select: { media: 'mainPhoto' },
    prepare({ media }) {
      return { title, media }
    },
  },
})

export const superiorRoom = roomType('superiorRoom', 'Superior Room')
export const standardRoom = roomType('standardRoom', 'Standard Room')
export const economyRoom = roomType('economyRoom', 'Economy Room')

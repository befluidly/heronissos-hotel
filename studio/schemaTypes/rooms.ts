import { defineType, defineField } from 'sanity'

const roomFields = (includeFrenchBalcony: boolean) => [
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
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
    rows: 3,
    description: 'Short description shown under the room name',
  }),
  defineField({
    name: 'size',
    title: 'Room size',
    type: 'string',
    description: 'e.g. 22–25 m²',
  }),
  defineField({
    name: 'location',
    title: 'Location',
    type: 'string',
    description: 'e.g. Main building or Annex block — not in the main building',
  }),
  defineField({
    name: 'views',
    title: 'Available views',
    type: 'string',
    description: 'e.g. Pool view · Inland view · Street view',
  }),
  defineField({
    name: 'bedType',
    title: 'Bed type',
    type: 'string',
    description: 'e.g. Double bed, twin beds or double bed with extra single bed',
  }),
  defineField({
    name: 'facilities',
    title: 'Room facilities',
    type: 'array',
    description: 'List of facilities shown when guest clicks "+ Room facilities". Drag to reorder.',
    of: [{ type: 'string' }],
  }),
  ...(includeFrenchBalcony ? [defineField({
    name: 'frenchBalconyNote',
    title: 'French balcony explanation',
    type: 'string',
    description: 'Shown as a footnote after the facilities list',
  })] : []),
]

export const superiorRoom = defineType({
  name: 'superiorRoom',
  title: 'Superior Room',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: roomFields(true),
  preview: {
    select: { media: 'mainPhoto' },
    prepare({ media }: { media: unknown }) {
      return { title: 'Superior Room', media }
    },
  },
})

export const standardRoom = defineType({
  name: 'standardRoom',
  title: 'Standard Room',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: roomFields(false),
  preview: {
    select: { media: 'mainPhoto' },
    prepare({ media }: { media: unknown }) {
      return { title: 'Standard Room', media }
    },
  },
})

export const economyRoom = defineType({
  name: 'economyRoom',
  title: 'Economy Room',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: roomFields(false),
  preview: {
    select: { media: 'mainPhoto' },
    prepare({ media }: { media: unknown }) {
      return { title: 'Economy Room', media }
    },
  },
})

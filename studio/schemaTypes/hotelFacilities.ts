import { defineType, defineField } from 'sanity'

export const hotelFacilities = defineType({
  name: 'hotelFacilities',
  title: 'Hotel Facilities',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'facilities',
      title: 'Hotel facilities list',
      type: 'array',
      description: 'List of hotel facilities. Drag to reorder.',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare() { return { title: 'Hotel Facilities' } },
  },
})

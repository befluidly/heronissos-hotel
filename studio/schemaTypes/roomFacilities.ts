import { defineType, defineField } from 'sanity'

export const roomFacilities = defineType({
  name: 'roomFacilities',
  title: 'Room Facilities & Amenities',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'facilities',
      title: 'Facilities list',
      type: 'array',
      description: 'List of room facilities shown on the website. Drag to reorder.',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'extraCostNote',
      title: 'Extra cost note',
      type: 'string',
      description: 'e.g. * Services marked with an asterisk require an extra charge, payable locally.',
    }),
  ],
  preview: {
    prepare() { return { title: 'Room Facilities & Amenities' } },
  },
})

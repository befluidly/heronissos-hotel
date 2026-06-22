import { defineType, defineField } from 'sanity'

export const guestServices = defineType({
  name: 'guestServices',
  title: 'Guest Services',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'services',
      title: 'Guest services list',
      type: 'array',
      description: 'List of guest services. Drag to reorder.',
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
    prepare() { return { title: 'Guest Services' } },
  },
})

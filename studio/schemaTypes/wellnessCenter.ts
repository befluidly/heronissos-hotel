import { defineType, defineField } from 'sanity'

export const wellnessCenter = defineType({
  name: 'wellnessCenter',
  title: 'Wellness Center',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'e.g. Currently unavailable. We look forward to welcoming you...',
    }),
  ],
  preview: {
    prepare() { return { title: 'Wellness Center' } },
  },
})

import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'photos',
      title: 'Gallery photos',
      type: 'array',
      description: 'All photos shown in the gallery section. Drag to reorder.',
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
    prepare() {
      return { title: 'Gallery' }
    },
  },
})

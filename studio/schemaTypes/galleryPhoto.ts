import { defineType, defineField } from 'sanity'

export const galleryPhoto = defineType({
  name: 'galleryPhoto',
  title: 'Gallery Photo',
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
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order in gallery',
    }),
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Photo', media }
    },
  },
})

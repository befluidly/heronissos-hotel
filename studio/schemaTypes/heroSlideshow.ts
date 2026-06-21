import { defineType, defineField } from 'sanity'

export const heroSlideshow = defineType({
  name: 'heroSlideshow',
  title: 'Hero Slideshow',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      description: 'Photos shown one by one in the homepage hero. Drag to reorder.',
      of: [
        {
          type: 'object',
          title: 'Slide',
          fields: [
            {
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description: 'Short description for accessibility (optional)',
            },
          ],
          preview: {
            select: { media: 'image', title: 'alt' },
            prepare({ media, title }) {
              return { title: title || 'Slide', media }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero Slideshow' }
    },
  },
})

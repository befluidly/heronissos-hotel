import { defineType, defineField } from 'sanity'

export const extrasItem = defineType({
  name: 'extrasItem',
  title: 'Extras & Services',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Excursion', value: 'excursion' },
          { title: 'Transfer', value: 'transfer' },
          { title: 'Special Occasion', value: 'occasion' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Max 30 characters',
      validation: Rule => Rule.required().max(30).warning('Keep it under 30 characters'),
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short description',
      type: 'text',
      rows: 2,
      description: 'Shown on the card — max 120 characters',
      validation: Rule => Rule.required().max(120).warning('Keep it under 120 characters'),
    }),
    defineField({
      name: 'longDesc',
      title: 'Full description',
      type: 'text',
      rows: 5,
      description: 'Shown in the popup — no limit',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "Half day", "Full day", "2–3 hours"',
    }),
    defineField({
      name: 'includes',
      title: 'What is included',
      type: 'string',
      description: 'e.g. "Transfers included", "Guide included"',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order within category',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
    prepare({ title, subtitle, media }) {
      const labels: Record<string, string> = {
        excursion: 'Excursion',
        transfer: 'Transfer',
        occasion: 'Special Occasion',
      }
      return { title, subtitle: labels[subtitle] || subtitle, media }
    },
  },
})

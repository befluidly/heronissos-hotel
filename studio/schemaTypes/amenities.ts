import { defineType, defineField } from 'sanity'

export const amenities = defineType({
  name: 'amenities',
  title: 'Amenities & Services',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'items',
      title: 'Amenity items',
      type: 'array',
      description: 'Max 8 items. Drag to reorder.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Wi-Fi', value: 'wifi' },
                  { title: 'Pool', value: 'pool' },
                  { title: 'Parking', value: 'parking' },
                  { title: 'Excursions / Map', value: 'map' },
                  { title: 'Transfer / Airport', value: 'plane' },
                  { title: 'Reception / Clock', value: 'clock' },
                  { title: 'Market / Shop', value: 'shop' },
                  { title: 'Doctor / Medical', value: 'doctor' },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Short label shown under the icon',
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
              rows: 2,
              description: 'One or two sentences max',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'icon' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Amenities & Services' }
    },
  },
})

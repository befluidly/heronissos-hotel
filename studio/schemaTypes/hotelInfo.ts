import { defineType, defineField } from 'sanity'

export const hotelInfo = defineType({
  name: 'hotelInfo',
  title: 'Hotel Info',
  type: 'document',
  fields: [
    defineField({
      name: 'introText1',
      title: 'Intro paragraph 1',
      type: 'text',
      rows: 4,
      description: 'First paragraph in the intro section',
    }),
    defineField({
      name: 'introText2',
      title: 'Intro paragraph 2',
      type: 'text',
      rows: 3,
      description: 'Second paragraph in the intro section',
    }),
    defineField({
      name: 'introImage',
      title: 'Intro image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'phone1',
      title: 'Phone number 1',
      type: 'string',
    }),
    defineField({
      name: 'phone2',
      title: 'Phone number 2',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'bookingScore',
      title: 'Booking.com score',
      type: 'number',
      description: 'e.g. 9.4',
    }),
    defineField({
      name: 'tripadvisorScore',
      title: 'TripAdvisor score',
      type: 'number',
      description: 'e.g. 4.1',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hotel Info' }
    },
  },
})

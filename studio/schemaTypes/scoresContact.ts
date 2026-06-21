import { defineType, defineField } from 'sanity'

export const scoresContact = defineType({
  name: 'scoresContact',
  title: 'Scores & Contact',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'bookingScore',
      title: 'Booking.com score',
      type: 'number',
      description: 'Score out of 10 — e.g. 9.4. Shown in the trust bar below the hero.',
    }),
    defineField({
      name: 'tripadvisorScore',
      title: 'TripAdvisor score',
      type: 'number',
      description: 'Score out of 5 — e.g. 4.1. Shown in the trust bar below the hero.',
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
      title: 'Email address',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Scores & Contact' }
    },
  },
})

import { defineType, defineField } from 'sanity'

export const reviewScores = defineType({
  name: 'reviewScores',
  title: 'Review Scores',
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
  ],
  preview: {
    prepare() {
      return { title: 'Review Scores' }
    },
  },
})

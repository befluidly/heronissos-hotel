import { defineType, defineField } from 'sanity'

export const contactDetails = defineType({
  name: 'contactDetails',
  title: 'Contact Details',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
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
      return { title: 'Contact Details' }
    },
  },
})

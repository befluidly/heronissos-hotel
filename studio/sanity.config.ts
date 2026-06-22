import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonTypes = new Set([
  'heroSlideshow',
  'reviewScores',
  'hotelIntro',
  'superiorRoom',
  'standardRoom',
  'economyRoom',
  'allInclusive',
  'dining',
  'gallery',
  'contactDetails',
])

export default defineConfig({
  name: 'default',
  title: 'Heronissos Hotel',

  projectId: 'djjar001',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website sections')
          .items([
            S.listItem()
              .title('① Hero Slideshow')
              .child(S.document().schemaType('heroSlideshow').documentId('heroSlideshow')),

            S.listItem()
              .title('② Review Scores')
              .child(S.document().schemaType('reviewScores').documentId('reviewScores')),

            S.listItem()
              .title('③ Hotel Introduction')
              .child(S.document().schemaType('hotelIntro').documentId('hotelIntro')),

            S.listItem()
              .title('④ Rooms')
              .child(
                S.list()
                  .title('Rooms')
                  .items([
                    S.listItem()
                      .title('Superior Room')
                      .child(S.document().schemaType('superiorRoom').documentId('superiorRoom')),
                    S.listItem()
                      .title('Standard Room')
                      .child(S.document().schemaType('standardRoom').documentId('standardRoom')),
                    S.listItem()
                      .title('Economy Room')
                      .child(S.document().schemaType('economyRoom').documentId('economyRoom')),
                  ])
              ),

            S.listItem()
              .title('⑤ All-Inclusive')
              .child(S.document().schemaType('allInclusive').documentId('allInclusive')),

            S.listItem()
              .title('⑥ Dining')
              .child(S.document().schemaType('dining').documentId('dining')),

            S.listItem()
              .title('⑦ Gallery')
              .child(S.document().schemaType('gallery').documentId('gallery')),

            S.divider(),

            S.listItem()
              .title('Extras & Services')
              .child(
                S.documentTypeList('extrasItem')
                  .title('Extras & Services')
              ),

            S.divider(),

            S.listItem()
              .title('Contact Details')
              .child(S.document().schemaType('contactDetails').documentId('contactDetails')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
  },
})

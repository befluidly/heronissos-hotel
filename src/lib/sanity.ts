import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: 'djjar001',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

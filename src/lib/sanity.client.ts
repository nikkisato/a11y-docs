import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '~/lib/sanity.api'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })

  // Move imageUrlBuilder instantiation here
  const builder = imageUrlBuilder(client)

  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

// Remove this line as client is not defined here
// const builder = imageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  // You can also move this inside getClient if preferred
  const client = getClient()
  const builder = imageUrlBuilder(client)
  return builder.image(source)
}

export { SanityClient }

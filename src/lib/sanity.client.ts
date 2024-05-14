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

export function urlForImage(source: SanityImageSource) {
  console.log('Before Client')
  const client = getClient()
  console.log('Before Builder')
  const builder = imageUrlBuilder(client)
  console.log('Before Return')
  return builder.image(source)
}

export { SanityClient }

import type { PortableTextBlock } from '@portabletext/types'
import type { Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const codeQuery = groq`*[_type == "codeBlock" && defined(slug.current)] | order(_createdAt desc)`
export async function getCodes(client: SanityClient): Promise<Code[]> {
  return await client.fetch(codeQuery)
}
export const codeBySlugQuery = groq`*[_type == "codeBlock" && slug.current == $slug][0]`

export async function getCode(
  client: SanityClient,
  slug: string,
): Promise<Code> {
  return await client.fetch(codeBySlugQuery, {
    slug,
  })
}

export const codeSlugsQuery = groq`
*[_type == "codeBlock" && defined(slug.current)][].slug.current
`

export interface Code {
  _type: 'codeBlock'
  _id: string
  _createdAt: string
  title: string
  slug: Slug
  content: PortableTextBlock[]
  html: string
  css: string
  javascript: string
  typescript: string
  liquid: string
}

export async function fetchAboutPageData(client: SanityClient) {
  const query = `*[_type == "page" && title == "About Dev"][0]{
    title,
    heroSection,
    content,
    blockContent
  }`
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

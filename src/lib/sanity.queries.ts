import type { PortableTextBlock } from '@portabletext/types'
import type { Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const codeQuery = groq`*[_type == "codeBlock" && defined(slug.current)] | order(_createdAt desc)`
export async function getCodes(client: SanityClient): Promise<Code[]> {
  return await client.fetch(codeQuery)
}

export async function getCode(
  client: SanityClient,
  slug: string,
): Promise<Code> {
  return await client.fetch(codeQuery, {
    slug,
  })
}

export interface CodeInput {
  html: string
  css: string
  javascript: string
  typescript: string
  liquid: string
}

export interface Code {
  _type: 'codeBlock'
  _id: string
  _createdAt: string
  title: string
  slug: Slug
  content: PortableTextBlock[]
  code: CodeInput[]
}

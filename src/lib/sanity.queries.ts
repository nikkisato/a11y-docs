import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const codeQuery = groq`*[_type == "codeBlock" && defined(slug.current)] | order(_createdAt desc)`
export async function getCodes(client: SanityClient): Promise<Code[]> {
  return await client.fetch(codeQuery)
}
// export const codeBySlugQuery = groq`*[_type == "codeBlock" && slug.current == $slug[0]]`

export async function getCode(
  client: SanityClient,
  slug: string,
): Promise<Code> {
  return await client.fetch(codeQuery, {
    slug,
  })
}

export const postCodeQuery = groq`
*[_type == "codeBlock" && defined(slug.current)][].slug.current
`
export interface Code {
  _type: 'codeBlock'
  _id: string
  _createdAt: string
  title: string
  slug: Slug
  content: string
}

// export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

// export async function getPosts(client: SanityClient): Promise<Post[]> {
//   return await client.fetch(postsQuery)
// }

// export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

// export async function getPost(
//   client: SanityClient,
//   slug: string,
// ): Promise<Post> {
//   return await client.fetch(postBySlugQuery, {
//     slug,
//   })
// }

// export const postSlugsQuery = groq`
// *[_type == "post" && defined(slug.current)][].slug.current
// `

// export interface Post {
//   _type: 'post'
//   _id: string
//   _createdAt: string
//   title?: string
//   slug: Slug
//   excerpt?: string
//   mainImage?: ImageAsset
//   body: PortableTextBlock[]
// }

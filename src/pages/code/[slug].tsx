import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import { type Code, codeQuery, getCode } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    code: Code
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const code = await getCode(client, params.slug)

  if (!code) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      code,
    },
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  // console.log('props', props)
  const [code] = useLiveQuery(props.code, codeQuery, {
    slug: props.code.slug.current,
  })

  return (
    <Container>
      <div>{code.title}</div>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()

  const slugs = await client.fetch(codeQuery)

  return {
    paths: slugs?.map(({ slug }) => `/code/${slug}`) || [],
    fallback: 'blocking',
  }
}

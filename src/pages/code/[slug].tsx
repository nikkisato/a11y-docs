/* eslint-disable react-hooks/rules-of-hooks */

import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import CodeContainer from '~/components/CodeContainer/CodeContainer'
import Container from '~/components/Container/Container'
import { useCodes } from '~/context/ContextMenu'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  type Code,
  codeBySlugQuery,
  codeQuery,
  getCode,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & { codes: Code[] }
> = async ({ draftMode = false }: { draftMode?: boolean }) => {
  const codes = await useCodes(draftMode)
  const children = ''
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      codes,
      children,
    },
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [code] = useLiveQuery(props.codes, codeBySlugQuery, {
    slug: props.codes.slug,
  })
  console.log('codeSingle', code)
  return (
    <Container>
      <CodeContainer code={code} />
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

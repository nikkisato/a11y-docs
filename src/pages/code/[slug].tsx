import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import CodeContainer from '~/components/CodeContainer/CodeContainer'
import Container from '~/components/Container/Container'
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
  const [code] = useLiveQuery(props.code, codeBySlugQuery, {
    slug: props.code.slug,
  })

  return (
    <Container>
      {/* <div>{code.title}</div> */}
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

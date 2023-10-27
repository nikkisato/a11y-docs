import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import CodeContainer from '~/components/CodeContainer/CodeContainer'
import Container from '~/components/Container/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  type Code,
  codeQuery,
  getCodes,
  getPosts,
  type Post,
  postsQuery,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

import CodeCard from '../components/CodeCard'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    codes: Code[]
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const codes = await getCodes(client)
  const posts = await getPosts(client)

  console.log('codes', codes)
  console.log('codequery', codeQuery)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      codes,
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  console.log(codeQuery)
  const [codes] = useLiveQuery<Code[]>(props.codes, codeQuery)
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)

  console.log('CODES', codes)
  return (
    <Container>
      <section>
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
        {codes.map((code) => (
          <CodeCard key={code._id} code={code} />
        ))}
      </section>
    </Container>
  )
}

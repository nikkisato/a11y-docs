import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { type Code, codeQuery, getCodes } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

import CodeCard from '../components/CodeCard'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    codes: Code[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const codes = await getCodes(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      codes,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [codes] = useLiveQuery<Code[]>(props.codes, codeQuery)
  // console.log('CODES', codes)

  return (
    <Container>
      <section>
        {codes.map((code) => (
          <CodeCard key={code._id} code={code} />
        ))}
      </section>
    </Container>
  )
}

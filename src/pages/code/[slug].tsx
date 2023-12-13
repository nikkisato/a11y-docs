/* eslint-disable react-hooks/rules-of-hooks */

import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { useEffect, useState } from 'react'
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
import { useRouter } from 'next/router'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & { codes: Code[] }
> = async ({ draftMode = false }: { draftMode?: boolean }) => {
  const codes = await useCodes(draftMode)
  const children = []
  console.log('GetStaticProps')
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      codes,
      children,
    },
  }
}

interface ProjectSlugRouteProps extends SharedPageProps {
  codes: Code[]
}

const useCodeBySlug = (slug: string, codes: Code[]) => {
  const query = `*[_type == "codeBlock" && slug.current == $slug][0]`
  const fetchedCode = useLiveQuery((props) => query, { slug })

  console.log('fetchedCode', fetchedCode)

  // Find the matching code in the props.codes array
  const matchingCode = codes.find((code) => code.slug === fetchedCode[0]?.slug)

  // Return the matching code or null if not found
  return matchingCode || null
}

const ProjectSlugRoute: React.FC<ProjectSlugRouteProps> = (props) => {
  const [code, setCode] = useState(null)
  const router = useRouter()
  const { slug } = router.query

  const matchingCode = useCodeBySlug(slug as string, props.codes)

  useEffect(() => {
    // Set the matching code in the state
    setCode(matchingCode)
  }, [matchingCode])

  return (
    <Container>
      {code ? <CodeContainer code={code} /> : <div>Loading...</div>}
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

export const getPageDataBySlug = async (slug: string) => {
  const client = getClient()
  const code = await client.fetch(codeBySlugQuery, { slug })
  return code
}

export default ProjectSlugRoute

import type { InferGetStaticPropsType } from 'next'

import Container from '~/components/Container/Container'

import { getStaticProps, MenuProvider } from '../context/ContextMenu'

const IndexPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { codes, children } = props
  return <Container>{children}</Container>
}

export default IndexPage

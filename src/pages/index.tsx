import type { InferGetStaticPropsType } from 'next'
import { Helmet } from 'react-helmet'

import Container from '~/layouts/Container/Container'

import { getStaticProps } from '../context/ContextMenu'

const IndexPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { codes, children } = props

  return (
    <Container>
      <Helmet>
        <title>{`A11y Docs`}</title>
      </Helmet>
      {children}
    </Container>
  )
}

export default IndexPage

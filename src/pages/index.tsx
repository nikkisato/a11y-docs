import type { InferGetStaticPropsType } from 'next'
import { Helmet } from 'react-helmet'

import { HeroSection } from '~/components/HeroSection'
import Container from '~/layouts/Container/Container'

import { getStaticProps } from '../context/ContextMenu'

const IndexPage = (
  data,
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { codes, children } = props

  return (
    <Container>
      <Helmet>
        <title>{`A11y Docs`}</title>
      </Helmet>
      {/* <HeroSection /> */}
      {children}
    </Container>
  )
}

export default IndexPage

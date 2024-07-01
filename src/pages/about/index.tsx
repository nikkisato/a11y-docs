import { Helmet } from 'react-helmet'

import BlockContent from '~/components/BlockContent/BlockContent'
import HeroSection from '~/components/HeroSection/HeroSection'
import Container from '~/layouts/Container/Container'
import { getClient } from '~/lib/sanity.client'

import { fetchAboutPageData } from '../../lib/sanity.queries'
import styles from './about.module.css'

export async function getServerSideProps() {
  const client = getClient()
  const data = await fetchAboutPageData(client)
  return {
    props: {
      data,
    },
  }
}

export default function AboutPage({ data }) {
  return (
    <>
      <Container>
        <Helmet>
          <title>{`About`}</title>
        </Helmet>
        <div className={styles.container}>
          <h1>{data.title}</h1>
          <HeroSection data={data} />
          <BlockContent blocks={data} />
        </div>
      </Container>
    </>
  )
}

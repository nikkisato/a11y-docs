import { Helmet } from 'react-helmet'

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

          {data.blockContent.map((block) => {
            const { _key, _type, style, listItem } = block
            switch (style) {
              case 'h1':
                return <h1 key={_key}>{block.children[0].text}</h1>
              case 'h2':
                return <h2 key={_key}>{block.children[0].text}</h2>
              case 'h3':
                return <h3 key={_key}>{block.children[0].text}</h3>
              case 'h4':
                return <h4 key={_key}>{block.children[0].text}</h4>
              case 'h5':
                return <h5 key={_key}>{block.children[0].text}</h5>
              case 'h6':
                return <h6 key={_key}>{block.children[0].text}</h6>

              case 'span':
                return <span key={_key}>{block.children[0].text}</span>
              case 'p':
                return <p key={_key}>{block.children[0].text}</p>
            }

            switch (listItem) {
              case 'bullet':
                return (
                  <ul>
                    <li key={_key}>{block.children[0].text}</li>
                  </ul>
                )
            }

            switch (_type) {
              case 'block':
                return <div key={_key}>{block.children[0].text}</div>
            }
          })}
        </div>
      </Container>
    </>
  )
}

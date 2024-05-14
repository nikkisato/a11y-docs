import { useNextSanityImage } from 'next-sanity-image'

import { getClient } from '../../lib/sanity.client'
import CodeCard from '../CodeCard/CodeCard'
import CustomComponentRenderer from '../CustomComponentRender/CustomComponentRender'
import Heading from '../Heading/Heading'
import SanityImage from '../SanityImage/SanityImage' // Import the SanityImage component
import styles from './CodeContainer.module.css'

export default function CodeContainer({ code }) {
  const singleCode = code[0]

  return (
    <div className={styles.codeContainer}>
      <Heading headingType="h3" text={singleCode?.title} />
      {/* <CustomComponentRenderer component={singleCode} /> */}
      {singleCode?.content && (
        <div className={styles.content}>
          {singleCode.content.map((item, index) => (
            <div key={index}>{item.children[0]?.text}</div>
          ))}
        </div>
      )}
      <SanityImage
        src={singleCode?.title}
        alt={singleCode?.title}
        width={500}
        height={500}
      />
      <CodeCard code={singleCode} />
    </div>
  )
}

// Fetch data from Sanity within getServerSideProps
export const getServerSideProps = async function (context) {
  const { slug = '' } = context.query
  const configuredSanityClient = getClient()

  console.log('slug', slug)
  console.log('configuredSanityClient', configuredSanityClient)

  const data = await configuredSanityClient.fetch(
    `{
			"mySanityData": *[_type == "codeBlock" && slug.current == $slug][0] {
        title,
        "imageUrl": image.asset->url
			}
		}`,
    { slug },
  )
  console.log('data', data)
  return { props: data }
}

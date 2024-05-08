import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import { getClient } from '../../lib/sanity.client'
import CodeCard from '../CodeCard/CodeCard'
import CustomComponentRenderer from '../CustomComponentRender/CustomComponentRender'
import Heading from '../Heading/Heading'
import SanityImage from '../SanityImage/SanityImage' // Import the SanityImage component
import styles from './CodeContainer.module.css'

export default function CodeContainer({ code, mySanityData }) {
  const singleCode = code[0]

  console.log('singleCode', singleCode)

  console.log('mySanityData', mySanityData)

  // Ensure mySanityData and imageData exist and are not null or undefined
  // const imageData = mySanityData?.image ?? null

  // console.log('imageData', imageData)

  // Get image props using next-sanity-image hook
  // const imageProps = imageData
  //   ? useNextSanityImage(getClient(), imageData)
  //   : null

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

      {/* {imageProps && (
        <SanityImage
          src={imageProps.src}
          alt="Alternative text"
          width={imageProps.width}
          height={imageProps.height}
          // You can pass additional props if needed
        />
      )} */}
      <CodeCard code={singleCode} />
    </div>
  )
}

// Fetch data from Sanity within getServerSideProps
export const getServerSideProps = async function (context) {
  const { slug = '' } = context.query

  try {
    const configuredSanityClient = getClient()

    console.log('configuredSanityCLient', configuredSanityClient)

    const data = await configuredSanityClient.fetch(
      `{
        "mySanityData": *[_type == "mySanityType" && slug.current == $slug][0] {
          image {
            asset->{
              _id,
              url,
              metadata {
                ...
              }
            }
          }
        }
      }`,
      { slug },
    )

    console.log('Fetched data:', data)

    if (!data.mySanityData) {
      throw new Error('Data not found')
    }

    return { props: { mySanityData: data } }
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    return { props: { mySanityData: null } }
  }
}

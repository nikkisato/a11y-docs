import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import { getClient } from '../../lib/sanity.client'
import CodeCard from '../CodeCard/CodeCard'
import CustomComponentRenderer from '../CustomComponentRender/CustomComponentRender'
import Heading from '../Heading/Heading'
import SanityImage from '../SanityImage/SanityImage'
import styles from './CodeContainer.module.css'

export default function CodeContainer({ code, mySanityData }) {
  const singleCode = code[0]

  // Ensure mySanityData and imageData exist and are not null or undefined
  const imageData = mySanityData?.mySanityData?.image ?? null

  console.log('imageData', imageData)

  // Get image props using next-sanity-image hook
  const imageProps = imageData
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useNextSanityImage(getClient(), imageData)
    : null

  return (
    <div className={styles.codeContainer}>
      <Heading headingType="h3" text={singleCode?.title} />
      {/* <CustomComponentRenderer component={singleCode} /> */}
      {singleCode?.content[0]?.children[0]?.text && (
        <div className={styles.content}>
          {singleCode?.content[0]?.children[0]?.text}
        </div>
      )}
      {/* {imageProps && (
        <SanityImage
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
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
    const configuredSanityClient = getClient() // Initialize Sanity client
    console.log('configuredSanity', configuredSanityClient)

    const data = await configuredSanityClient.fetch(
      `{
        "mySanityData": *[_type == "mySanityType" && slug.current == $slug][0] {
          image {
            asset->{
              ...,
              metadata
            }
          }
        }
      }`,
      { slug },
    )

    console.log('data', data)

    return { props: { mySanityData: data } } // Pass fetched data as props
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    return { props: { mySanityData: null } } // Return null data in case of error
  }
}

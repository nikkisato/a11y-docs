'use client'
import Image from 'next/image'

import CodeCard from '../CodeCard/CodeCard'
import Heading from '../Heading/Heading'
import styles from './CodeContainer.module.css'

export default function CodeContainer({ code }) {
  const singleCode = code[0]
  console.log('singleCode', singleCode)

  return (
    <div className={styles.codeContainer}>
      <Heading headingType="h3" text={singleCode?.title} />
      {singleCode?.content[0].children[0].text && (
        <div className={styles.content}>
          {singleCode?.content[0].children[0].text}
        </div>
      )}
      {singleCode?.image && (
        <Image src={singleCode?.image?.asset?.url} alt={singleCode?.title} />
      )}
      <CodeCard code={singleCode} />
    </div>
  )
}

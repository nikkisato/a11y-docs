'use client'
import CodeCard from '../CodeCard/CodeCard'
import Heading from '../Heading/Heading'
import styles from './CodeContainer.module.css'

export default function CodeContainer({ code }) {
  console.log('code', code)
  const singleCode = code[0]
  console.log('singleCode', singleCode)
  return (
    <div className={styles.codeContainer}>
      <Heading headingType="h3" text={singleCode?.title} />
      <CodeCard code={singleCode} />
    </div>
  )
}

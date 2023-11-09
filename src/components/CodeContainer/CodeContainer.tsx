'use client'
import { type Code } from '~/lib/sanity.queries'

import CodeCard from '../CodeCard/CodeCard'
import Heading from '../Heading/Heading'
import styles from './CodeContainer.module.css'

export default function CodeContainer({ code }: { code: Code }) {
  console.log('CODE CONTAINER', code)
  return (
    <div className={styles.codeContainer}>
      <Heading headingType="h3" text={code.title} />
      <CodeCard code={code} />
    </div>
  )
}

'use client'
import { useMenu } from '../../context/ContextMenu'
import CodeCard from '../CodeCard/CodeCard'
import Heading from '../Heading/Heading'
import styles from './CodeContainer.module.css'

export default function CodeContainer({ code }) {
  console.log('codeContainer', code)
  return (
    <div className={styles.codeContainer}>
      <Heading headingType="h3" text={code.title} />
      <CodeCard code={code} />
    </div>
  )
}

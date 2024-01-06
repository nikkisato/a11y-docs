import { type Code } from '~/lib/sanity.queries'

import CodeOutput from '../CodeOutput/CodeOutput'
import styles from './CodeCard.module.css'

export default function CodeCard({ code }: { code: Code }) {
  return (
    <div className={styles.cardContainer}>
      <CodeOutput code={code} />
    </div>
  )
}

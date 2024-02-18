import { useMenu } from '~/context/ContextMenu'

import Bar from '../Bar/Bar'
import Item from '../Item/Item'
import styles from './Menu.module.css'

export default function Menu() {
  const { codes } = useMenu()

  return (
    <nav aria-label="Primary Navigation" className={styles.nav}>
      <Bar aria-label="Primary Navigation">
        {codes?.map((code) => {
          return (
            <Item key={code._id}>
              <a href={`/code/${code.slug.current}`}>{code.title}</a>
            </Item>
          )
        })}
      </Bar>
    </nav>
  )
}

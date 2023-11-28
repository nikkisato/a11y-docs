import { useMenu } from '~/context/ContextMenu'

import { MenuBar } from '../MenuBar'
import { MenuItem } from '../MenuItem'
import styles from './Menu.module.css'

export default function Menu() {
  const { codes } = useMenu()

  return (
    <nav aria-label="Primary Navigation" className={styles.nav}>
      <MenuBar aria-label="Primary Navigation">
        {codes?.map((code) => {
          return (
            <MenuItem key={code._id}>
              <a href={`/code/${code.slug.current}`}>{code.title}</a>
            </MenuItem>
          )
        })}
      </MenuBar>
    </nav>
  )
}

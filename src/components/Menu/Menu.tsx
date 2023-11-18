/* eslint-disable @next/next/no-html-link-for-pages */
import { useContext } from 'react'

import { MenuContext } from '../../pages/index'
import { MenuBar } from '../MenuBar'
import { MenuItem } from '../MenuItem'
import styles from './Menu.module.css'

export default function Menu() {
  // const codes = useContext(MenuContext)

  // console.log('codes', codes)
  return (
    <nav aria-label="Primary Navigation" className={styles.nav}>
      <MenuBar aria-label="Primary Navigation">
        {/* {codes.map((code) => {
          return (
            <MenuItem key={code._id}>
              <a href={`/${code.slug.current}`}>{code.title}</a>
            </MenuItem>
          )
        })} */}
      </MenuBar>
    </nav>
  )
}

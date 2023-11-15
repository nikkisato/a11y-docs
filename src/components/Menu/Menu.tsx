/* eslint-disable @next/next/no-html-link-for-pages */
import { useContext } from 'react'

import { MenuContext } from '../Container/Container'
import { MenuBar } from '../MenuBar'
import { MenuItem } from '../MenuItem'
import styles from './Menu.module.css'

export default function Menu({ children }: { children: React.ReactNode }) {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(MenuContext)
  console.log('SAM', children)
  return (
    <nav aria-label="Primary Navigation" className={styles.nav}>
      <MenuBar aria-label="Primary Navigation">
        <MenuItem>
          <a href="/#about">About</a>
        </MenuItem>

        <MenuItem>
          <a href="/#admissions">Admissions</a>
        </MenuItem>

        <MenuItem>
          <a href="/#academics">Academics</a>
        </MenuItem>
      </MenuBar>
    </nav>
  )
}

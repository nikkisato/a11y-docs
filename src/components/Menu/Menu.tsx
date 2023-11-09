/* eslint-disable @next/next/no-html-link-for-pages */
import { MenuBar } from '../MenuBar'
import { MenuItem } from '../MenuItem'

export default function Menu() {
  return (
    <nav aria-label="Primary Navigation">
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

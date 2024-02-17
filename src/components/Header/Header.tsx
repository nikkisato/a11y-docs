// Header.jsx
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import classNames from 'classnames'
import React, { ReactNode, useState } from 'react'

import MenuDrawer from '../MenuDrawer/MenuDrawer'
import SearchInput from '../SearchInput/SearchInput'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuDrawerOpen(true)
  }

  const handleMenuClose = () => {
    setIsMenuDrawerOpen(false)
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <button onClick={handleMenuOpen} aria-label="Open Menu">
            <MenuIcon
              className={classNames('icon', styles.hamburgerMenu)}
              id="hamburgerMenu"
            />
          </button>
        </div>
        <div className={styles.headerMiddle}>
          <SearchInput icon={<SearchIcon />} />
        </div>
        <div className={styles.headerRight}>
          {/* Conditionally render the SettingsIcon and pass the handleMenuClose callback */}
          {isMenuDrawerOpen ? (
            <SettingsIcon onClick={handleMenuClose} className="icon" />
          ) : null}
        </div>
      </header>

      {/* Conditionally render the MenuDrawer and pass the necessary props */}
      <MenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={handleMenuClose}
        id="menuDrawer"
      />
    </>
  )
}

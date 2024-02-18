// Header.jsx
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import classNames from 'classnames'
import React, { useState } from 'react'

import Drawer from '../Drawer/Drawer'
import SearchInput from '../SearchInput/SearchInput'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false)
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuDrawerOpen(true)
  }

  const handleMenuClose = () => {
    setIsMenuDrawerOpen(false)
  }

  const handleSettingsOpen = () => {
    setIsSettingsDrawerOpen(true)
  }

  const handleSettingsClose = () => {
    setIsSettingsDrawerOpen(false)
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
          <button onClick={handleSettingsOpen} aria-label="Open Settings Menu">
            <SettingsIcon className={classNames('icon')} id="settingsMenu" />
          </button>
        </div>
      </header>

      <Drawer
        isOpen={isSettingsDrawerOpen}
        id="menuSettings"
        onClose={handleSettingsClose}
        type="settings"
        closeButtonPosition="right"
      />

      <Drawer
        isOpen={isMenuDrawerOpen}
        onClose={handleMenuClose}
        id="menuDrawer"
        type="menu"
        closeButtonPosition="left"
      />
    </>
  )
}

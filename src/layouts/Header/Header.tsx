import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import classNames from 'classnames'
import React, { useContext, useState } from 'react'

import Drawer from '~/components/Drawer/Drawer'
import SearchInput from '~/components/SearchInput/SearchInput'
import { useScreenSize } from '~/context/ContextScreenSize'

import styles from './Header.module.css'

export default function Header({ isSticky, isTransparent, isStatic }) {
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

  const { isMobile } = useScreenSize()

  const headerClass = classNames(styles.headerContainer, {
    [styles.stickyHeader]: isSticky,
    [styles.transparentHeader]: isTransparent,
    [styles.staticHeader]: isStatic,
  })

  return (
    <>
      <header className={headerClass}>
        <div className={styles.headerLeft}>
          <button onClick={handleMenuOpen} aria-label="Open Menu">
            <MenuIcon
              className={classNames('icon', styles.hamburgerMenu)}
              id="hamburgerMenu"
            />
          </button>
        </div>
        <div className={styles.headerMiddle}>
          {isMobile == false && <SearchInput icon={<SearchIcon />} />}
        </div>
        <div className={styles.headerRight}>
          {/* <button onClick={handleSettingsOpen} aria-label="Open Settings Menu">
            <SettingsIcon className={classNames('icon')} id="settingsMenu" />
          </button> */}
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

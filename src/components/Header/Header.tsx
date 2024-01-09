import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import classNames from 'classnames'

import { useMenuDrawer, useSettingDrawer } from '../../context/ContextMenu'
import Input from '../Input/Input'
import drawerStyles from '../MenuDrawer/MenuDrawer.module.css'
import styles from './Header.module.css'

export default function Header() {
  const { isMenuDrawerOpen, setIsMenuDrawerOpen } = useMenuDrawer()
  const { isSettingDrawerOpen, setIsSettingDrawerOpen } = useSettingDrawer()
  console.log('isMenuDrawerOpen', isMenuDrawerOpen)

  const handleMenuOpen = () => {
    setIsMenuDrawerOpen(!isMenuDrawerOpen)
  }

  const handleMenuClose = () => {
    setIsMenuDrawerOpen(!isMenuDrawerOpen)
  }
  // const handleSettingClick = () => {
  //   const drawer = document.getElementById('menuSettings')
  //   setIsSettingDrawerOpen((isSettingDrawerOpen) => !isSettingDrawerOpen)
  //   if (drawer) {
  //     if (!isSettingDrawerOpen) {
  //       drawer.classList.add(drawerStyles.open)
  //       drawer.classList.add(drawerStyles.right)
  //     } else {
  //       drawer.classList.remove(drawerStyles.open)
  //       drawer.classList.remove(drawerStyles.right)
  //     }
  //   }
  // }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          {isMenuDrawerOpen ? (
            <button onClick={handleMenuClose} aria-label="Close Menu">
              <CloseIcon className="icon" />
            </button>
          ) : (
            <button onClick={handleMenuOpen} aria-label="Open Menu">
              <MenuIcon
                className={classNames('icon', drawerStyles.hamburgerMenu)}
                id="hamburgerMenu"
              />
            </button>
          )}
        </div>
        <div className={styles.headerMiddle}>
          <Input
            placeholder="Search"
            id="search"
            name="search"
            type="text"
            label="Search"
            icon={<SearchIcon />}
          />
        </div>
        <div className={styles.headerRight}>
          {/* <button onClick={handleSettingClick}> */}
          <SettingsIcon className="icon" />
          {/* </button> */}
        </div>
      </header>
    </>
  )
}

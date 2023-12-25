import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'

import { useMenuDrawer, useSettingDrawer } from '../../context/ContextMenu'
import drawerStyles from '../Drawer/Drawer.module.css'
import Input from '../Input/Input'
import styles from './Header.module.css'

export default function Header() {
  const { isMenuDrawerOpen, setIsMenuDrawerOpen } = useMenuDrawer()
  const { isSettingDrawerOpen, setIsSettingDrawerOpen } = useSettingDrawer()

  const handleMenuClick = () => {
    const drawer = document.getElementById('drawer')
    setIsMenuDrawerOpen((isMenuDrawerOpen) => !isMenuDrawerOpen)
    if (drawer) {
      if (!isMenuDrawerOpen) {
        drawer.classList.add(drawerStyles.open)
      } else {
        drawer.classList.remove(drawerStyles.open)
      }
    }
  }
  const handleSettingClick = () => {
    const drawer = document.getElementById('settings')
    setIsSettingDrawerOpen((isSettingDrawerOpen) => !isSettingDrawerOpen)
    if (drawer) {
      if (!isSettingDrawerOpen) {
        drawer.classList.add(drawerStyles.open)
      } else {
        drawer.classList.remove(drawerStyles.open)
      }
    }
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <button onClick={handleMenuClick}>
            <MenuIcon className="icon" id="hamburgerMenu" />
          </button>
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
          <button onClick={handleSettingClick}>
            <SettingsIcon className="icon" />
          </button>
        </div>
      </header>
    </>
  )
}

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'

import { useMenu } from '../../context/ContextMenu'
import drawerStyles from '../Drawer/Drawer.module.css'
import Input from '../Input/Input'
import styles from './Header.module.css'

export default function Header() {
  const { isDrawerOpen, setIsDrawerOpen } = useMenu()

  const handleMenuClick = () => {
    const drawer = document.getElementById('drawer')
    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen)
    if (drawer) {
      if (!isDrawerOpen) {
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
          <SettingsIcon className="icon" />
        </div>
      </header>
    </>
  )
}

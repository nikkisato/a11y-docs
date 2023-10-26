import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'

import Input from '../Input/Input'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <MenuIcon className="icon" />
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

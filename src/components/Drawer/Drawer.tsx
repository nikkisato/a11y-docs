import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import { useContext } from 'react'

import { MenuContext } from '../../pages/index'
import Menu from '../Menu/Menu'
import styles from './Drawer.module.css'

interface DrawerProps {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
  closeButton?: boolean
}

export default function Drawer({
  top,
  bottom,
  left,
  right,
  closeButton,
}: DrawerProps) {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(MenuContext)

  const handleMenuClose = () => {
    const drawer = document.getElementById('drawer')

    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen)
    if (drawer.classList.contains(styles.open)) {
      drawer.classList.remove(styles.open)
    }
  }

  const drawerClass = top
    ? styles.top
    : bottom
    ? styles.bottom
    : left
    ? styles.left
    : right
    ? styles.right
    : styles.left

  const closeDrawerClass = top
    ? styles.closeTop
    : bottom
    ? styles.closeBottom
    : left
    ? styles.closeLeft
    : right
    ? styles.closeRight
    : styles.closeLeft

  return (
    <div id="drawer" className={classNames(styles.drawer, drawerClass)}>
      {closeButton && (
        <CloseIcon
          id="closeDrawerButton"
          className={classNames(
            'icon',
            isDrawerOpen ? styles.open : '',
            closeDrawerClass,
          )}
          onClick={handleMenuClose}
        />
      )}
      <Menu />
    </div>
  )
}

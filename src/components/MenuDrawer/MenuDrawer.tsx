import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'

import { useMenuDrawer } from '../../context/ContextMenu'
import Menu from '../Menu/Menu'
import styles from './MenuDrawer.module.css'

interface DrawerProps {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
  closeButton?: boolean
  id: string
}

export default function MenuDrawer({
  top,
  bottom,
  left,
  right,
  closeButton,
  id,
}: DrawerProps) {
  const { isMenuDrawerOpen, setIsMenuDrawerOpen } = useMenuDrawer()

  // const handleMenuClose = () => {
  //   const drawer = document.getElementById('menuDrawer')

  //   console.log('Menudrawer', drawer.classList)
  //   setIsMenuDrawerOpen((isMenuDrawerOpen) => !isMenuDrawerOpen)

  //   console.log('isMenuDrawerOpen', isMenuDrawerOpen)
  //   if (drawer.classList.contains(styles.open)) {

  //     drawer.classList.remove(styles.open)
  //   }
  // }

  const handleMenuClose = () => {
    setIsMenuDrawerOpen((isMenuDrawerOpen) => !isMenuDrawerOpen)
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
    <FocusTrap active={isMenuDrawerOpen}>
      <div id={id} className={classNames(styles.drawer, drawerClass)}>
        {closeButton && (
          <button
            aria-label="Close Drawer"
            id="closeDrawerButton"
            className={classNames(
              'icon',
              isMenuDrawerOpen ? styles.open : '',
              closeDrawerClass,
            )}
            onClick={handleMenuClose}
          >
            <CloseIcon />
          </button>
        )}
        <Menu />
      </div>
    </FocusTrap>
  )
}

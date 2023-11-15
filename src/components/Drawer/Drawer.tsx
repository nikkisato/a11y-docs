import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'

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
  const handleMenuClose = () => {
    const drawer = document.getElementById('drawer')

    if (drawer) {
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

  console.log('HELO', drawerClass)

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
          className={classNames('icon', closeDrawerClass)}
          onClick={handleMenuClose}
        />
      )}
      <Menu />
    </div>
  )
}

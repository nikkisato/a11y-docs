import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'

import { useSettingDrawer } from '../../context/ContextMenu'
import Menu from '../Menu/Menu'
import styles from './SettingsDrawer.module.css'

interface DrawerProps {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
  closeButton?: boolean
  id: string
}

export default function SettingsDrawer({
  top,
  bottom,
  left,
  right,
  closeButton,
  id,
}: DrawerProps) {
  const { isSettingDrawerOpen, setIsSettingDrawerOpen } = useSettingDrawer()

  const handleSettingClose = () => {
    const drawer = document.getElementById('settings')

    console.log('handleSettingClose')

    setIsSettingDrawerOpen((isSettingDrawerOpen) => !isSettingDrawerOpen)
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
    <FocusTrap active={isSettingDrawerOpen}>
      <div id={id} className={classNames(styles.drawer, drawerClass)}>
        {closeButton && (
          <button
            aria-label="Close Drawer"
            id="closeDrawerButton"
            className={classNames(
              'icon',
              isSettingDrawerOpen ? styles.open : '',
              closeDrawerClass,
            )}
            onClick={handleSettingClose}
          >
            <CloseIcon />
          </button>
        )}
        <Menu />
      </div>
    </FocusTrap>
  )
}

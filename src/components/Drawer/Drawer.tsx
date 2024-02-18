// GenericDrawer.jsx
import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'
import React from 'react'

import Menu from '../Menu/Menu'
import SettingsMenu from '../SettingsMenu/SettingsMenu'
import styles from './Drawer.module.css'

interface DrawerProps {
  id: string
  isOpen: boolean
  onClose: () => void
  type: 'menu' | 'settings'
  closeButtonPosition: 'left' | 'right'
}

export default function Drawer({
  id,
  isOpen,
  onClose,
  type,
  closeButtonPosition,
}: DrawerProps) {
  const drawerClass = classNames({
    [styles.open]: isOpen,
    [styles.drawer]: true,
    [styles[type]]: true,
    [styles[`closeButton-${closeButtonPosition}`]]: true,
    [styles.menuDrawer]: type === 'menu',
    [styles.settingsDrawer]: type === 'settings',
  })

  let drawerContent
  if (type === 'menu') {
    drawerContent = <Menu />
  } else if (type === 'settings') {
    drawerContent = <SettingsMenu />
  }

  let closeButtonStyle
  if (closeButtonPosition === 'left') {
    closeButtonStyle = styles.closeButtonLeft
  } else if (closeButtonPosition === 'right') {
    closeButtonStyle = styles.closeButtonRight
  }

  return (
    <FocusTrap active={isOpen}>
      <div id={id} className={drawerClass}>
        {isOpen && (
          <button
            onClick={onClose}
            aria-label="Close Drawer"
            className={classNames(styles.closeButton, closeButtonStyle)}
          >
            <CloseIcon className="icon" />
          </button>
        )}

        {isOpen && <div className={styles.drawerContent}>{drawerContent}</div>}
      </div>
    </FocusTrap>
  )
}

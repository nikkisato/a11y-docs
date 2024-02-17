// MenuDrawer.jsx
import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'
import React from 'react'

import Menu from '../Menu/Menu'
import styles from './MenuDrawer.module.css'

interface DrawerProps {
  id: string
  isOpen: boolean
  onClose: () => void
}

export default function MenuDrawer({ id, isOpen, onClose }: DrawerProps) {
  const drawerClass = classNames({
    [styles.open]: isOpen,
    [styles.menuDrawer]: true,
  })

  return (
    <FocusTrap active={isOpen}>
      <div id={id} className={classNames(styles.menuDrawer, drawerClass)}>
        {isOpen && (
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className={styles.closeButton}
          >
            <CloseIcon className="icon" />
          </button>
        )}

        {isOpen && (
          <div className={styles.drawerContent}>{isOpen && <Menu />}</div>
        )}
      </div>
    </FocusTrap>
  )
}

import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'

import { useSettingDrawer } from '../../context/ContextMenu'
import SettingsMenu from '../SettingsMenu/SettingsMenu'
import styles from './SettingsDrawer.module.css'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  id: string
}

export default function SettingsDrawer({ id, isOpen, onClose }: DrawerProps) {
  // const { isSettingDrawerOpen, setIsSettingDrawerOpen } = useSettingDrawer()

  const drawerClass = classNames({
    [styles.open]: isOpen,
    [styles.menuDrawer]: true,
  })

  return (
    <FocusTrap active={isOpen}>
      <div id={id} className={classNames(styles.settingsDrawer, drawerClass)}>
        {isOpen && (
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className={styles.closeRight}
          >
            <CloseIcon className={classNames('icon')} />
          </button>
        )}

        {isOpen && (
          <div className={styles.drawerContent}>
            {/* {isOpen && <SettingsMenu />} */}
            {isOpen && <p>HELLO</p>}
          </div>
        )}
      </div>
    </FocusTrap>
  )
}

import classNames from 'classnames'
import FocusTrap from 'focus-trap-react'

import { useMenuDrawer } from '../../context/ContextMenu'
import Menu from '../Menu/Menu'
import styles from './MenuDrawer.module.css'

interface DrawerProps {
  id: string
}

export default function MenuDrawer({ id }: DrawerProps) {
  const { isMenuDrawerOpen, setIsMenuDrawerOpen } = useMenuDrawer()

  console.log('isMenuDrawerOpenBOB', isMenuDrawerOpen)

  const drawerClass = classNames({
    [styles.open]: isMenuDrawerOpen ? styles.open : '',

    [styles.menuDrawer]: true,
  })

  return (
    <FocusTrap active={isMenuDrawerOpen}>
      <div id={id} className={classNames(styles.menuDrawer, drawerClass)}>
        {isMenuDrawerOpen && <Menu />}
        <Menu />
      </div>
    </FocusTrap>
  )
}

import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

import { useMenu } from '~/context/ContextMenu'
import { useScreenSize } from '~/context/ContextScreenSize'

import SearchInput from '../SearchInput/SearchInput'
import styles from './Menu.module.css'

export function Item({ children, ...props }) {
  const listItemProps = {
    ...props,
    'data-menubar-listitem': '',
    role: 'none',
  }

  const childProps = {
    'data-menubar-menuitem': '',
    role: 'menuitem',
  }

  return <li {...listItemProps}>{React.cloneElement(children, childProps)}</li>
}
export function Bar({ children, ...props }) {
  const listProps = {
    ...props,
    // 'aria-orientation': 'horizontal',
    'data-menubar-list': '',
    role: 'menubar',
  }

  return <ul {...listProps}>{children}</ul>
}

export default function Menu() {
  const { codes } = useMenu()

  console.log('codes', codes)

  const { isMobile } = useScreenSize()

  return (
    <nav aria-label="Primary Navigation" className={styles.nav}>
      {isMobile == true && <SearchInput icon={<SearchIcon />} />}

      <Bar aria-label="Primary Navigation">
        {codes?.map((code) => {
          return (
            <Item key={code._id}>
              <a href={`/${code.slug.current}`}>{code.title}</a>
            </Item>
          )
        })}
      </Bar>
    </nav>
  )
}

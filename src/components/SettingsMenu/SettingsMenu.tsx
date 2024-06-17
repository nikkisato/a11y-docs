import React from 'react'

import styles from './SettingsMenu.module.css'
const options = [
  { title: 'Settings', url: '/settings' },
  { title: 'Profile', url: '/profile' },
  { title: 'Logout', url: '/logout' },
]

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

export default function SettingsMenu() {
  return (
    <nav aria-label="Settings Navigation" className={styles.container}>
      {/* <Bar aria-label="Primary Navigation">
        {options?.map((code) => {
          return (
            <Item key={code._id}>
              <a href={`/code/${code.slug.current}`}>{code.title}</a>
            </Item>
          )
        })}
      </Bar> */}
    </nav>
  )
}

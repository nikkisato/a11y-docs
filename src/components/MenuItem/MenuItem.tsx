import React from 'react'
export default function MenuItem({ ...props }) {
  const listItemProps = {
    ...props,
    'data-menubar-listitem': '',
    role: 'none',
  }

  const childProps = {
    'data-menubar-menuitem': '',
    role: 'menuitem',
  }

  return <li {...listItemProps}></li>
}

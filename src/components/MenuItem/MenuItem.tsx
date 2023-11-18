import React from 'react'
export default function MenuItem({ children, ...props }) {
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

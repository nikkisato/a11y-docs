export default function Bar({ children, ...props }) {
  const listProps = {
    ...props,
    // 'aria-orientation': 'horizontal',
    'data-menubar-list': '',
    role: 'menubar',
  }

  return <ul {...listProps}>{children}</ul>
}

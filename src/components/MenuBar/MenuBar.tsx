export default function MenuBar({ ...props }) {
  const listProps = {
    ...props,
    // 'aria-orientation': 'horizontal',
    'data-menubar-list': '',
    role: 'menubar',
  }

  return <ul {...listProps}></ul>
}

import Bar from '../Bar/Bar'
import Item from '../Item/Item'
import styles from './SettingsMenu.module.css'

const options = [
  { title: 'Settings', url: '/settings' },
  { title: 'Profile', url: '/profile' },
  { title: 'Logout', url: '/logout' },
]

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

import SettingsBar from '../SettingsBar/SettingsBar'
import SettingsItem from '../SettingsItem/SettingsItem'
import styles from './SettingsMenu.module.css'

const options = [
  { title: 'Settings', url: '/settings' },
  { title: 'Profile', url: '/profile' },
  { title: 'Logout', url: '/logout' },
]

export default function SettingsMenu() {
  return (
    <nav aria-label="Settings Navigation" className={styles.container}>
      {/* <SettingsBar aria-label="Primary Navigation">
        {options?.map((code) => {
          return (
            <SettingsItem key={code._id}>
              <a href={`/code/${code.slug.current}`}>{code.title}</a>
            </SettingsItem>
          )
        })}
      </SettingsBar> */}
    </nav>
  )
}

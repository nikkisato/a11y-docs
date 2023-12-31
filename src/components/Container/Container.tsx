import { useMenu } from '../../context/ContextMenu'
import Drawer from '../Drawer/Drawer'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SkipLink from '../SkipLink/SkipLink'
import styles from './Container.module.css'

export default function Container({ children }) {
  useMenu()

  // TODO add a focus trap here for accessibility
  return (
    <div className={styles.container}>
      <SkipLink />
      <Header />
      <Drawer closeButton={true} left={true} />
      <main id="main" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

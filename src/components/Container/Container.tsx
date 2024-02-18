import { useMenu } from '../../context/ContextMenu'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SkipLink from '../SkipLink/SkipLink'
import styles from './Container.module.css'

export default function Container({ children }) {
  useMenu()

  return (
    <div className={styles.container}>
      <SkipLink />
      <Header />
      <main id="main" className={styles.main}>
        {/* {children} */}
      </main>
      <Footer />
    </div>
  )
}

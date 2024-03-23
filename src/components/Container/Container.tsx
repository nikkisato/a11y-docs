import { useMenu } from '../../context/ContextMenu'
import { useScreenSize } from '../../context/ContextScreenSize' // Import the useScreenSize hook
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SkipLink from '../SkipLink/SkipLink'
import styles from './Container.module.css'

export default function Container({ children }) {
  useMenu()
  const { isMobile } = useScreenSize()

  console.log('isMobile', isMobile)
  return (
    <div className={styles.container}>
      <SkipLink />
      <Header isSticky={true} isTransparent={false} isStatic={false} />
      <main id="main" className={styles.main}>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

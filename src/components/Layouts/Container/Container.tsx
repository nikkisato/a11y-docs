// import { useMenu } from '../../context/ContextMenu'
import { useScreenSize } from '../../../context/ContextScreenSize' // Import the useScreenSize hook
import SkipLink from '../../SkipLink/SkipLink'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Container.module.css'

export default function Container({ children }) {
  // useMenu()

  return (
    <div className={styles.container}>
      <SkipLink />
      <Header isSticky={true} isTransparent={false} isStatic={false} />
      <main data-testid="main" id="main" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

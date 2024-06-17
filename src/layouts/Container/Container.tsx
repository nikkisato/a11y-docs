// import { useMenu } from '../../context/ContextMenu'
import Modal from '~/components/Modal/Modal'
import SkipLink from '~/components/SkipLink/SkipLink'
import { useScreenSize } from '~/context/ContextScreenSize' // Import the useScreenSize hook
import Footer from '~/layouts/Footer/Footer'
import Header from '~/layouts/Header/Header'

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

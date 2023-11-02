import Link from 'next/link'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Container.module.css'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

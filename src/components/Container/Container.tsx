import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SkipLink from '../SkipLink/SkipLink'
import styles from './Container.module.css'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <SkipLink />
      <Header />
      <main id="main">
        <Content>{children}</Content>
      </main>
      <Footer />
    </div>
  )
}

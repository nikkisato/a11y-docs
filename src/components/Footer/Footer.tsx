import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.footerCopyright}>© Nikki Sato</div>
        <div className={styles.footerSocial}>
          <Link href="https://github.com/nikkisato">
            <GitHubIcon className="icon" />
          </Link>
          <Link href="https://twitter.com/nikkisatodev">
            <TwitterIcon className="icon" />
          </Link>
        </div>

        <div className={styles.footerDev}>
          <a href="#">About the Dev</a>
        </div>
        <div className={styles.footerStatement}>
          <a href="#">Accessibility Statement </a>
        </div>
      </footer>
    </>
  )
}

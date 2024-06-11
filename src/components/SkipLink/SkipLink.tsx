import styles from './SkipLink.module.css'

export default function SkipLink() {
  return (
    <a data-testid="skip-link" href="#main" className={styles.skipLink}>
      Skip to Main Content
    </a>
  )
}

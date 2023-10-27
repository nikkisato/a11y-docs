import styles from './Content.module.css'

interface Props {
  children: React.ReactNode
}

export default function Content({ children }: Props) {
  return <section className={styles.content}>{children}</section>
}

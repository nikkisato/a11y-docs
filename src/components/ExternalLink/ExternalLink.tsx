'use client'

import classNames from 'classnames'
import styles from './ExternalLink.module.css'

interface Props {
  text: string
  className?: string
  style?: 'default' | 'primary' | 'secondary' | 'disabled'
  url?: string
}

export default function ExternalLink({
  text = '',
  className,
  style,
  url,
}: Props) {
  const externalLinkClass = classNames(styles.externalLink, className, [
    styles[style],
  ])

  return (
    <div className={externalLinkClass}>
      <a href={url} className={styles.externalLink}>
        {text}
      </a>
    </div>
  )
}

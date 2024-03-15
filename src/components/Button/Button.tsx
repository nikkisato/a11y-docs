'use client'

import classNames from 'classnames'
import styles from './Button.module.css'

interface Props {
  text: string
  type: 'button' | 'submit'
  className?: string
  style?: 'default' | 'primary' | 'secondary' | 'disabled'
  // onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined // optional, only used for buttons
}

export default function Button({ text = '', type, className, style }: Props) {
  const buttonClass = classNames(styles.button, className, [styles[style]])

  return (
    <button className={buttonClass} type={type}>
      {text}
    </button>
  )
}

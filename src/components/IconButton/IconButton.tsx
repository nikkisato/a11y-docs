'use client'

import classNames from 'classnames'

import styles from './IconButton.module.css'

interface Props {
  text?: string
  icon: React.ReactNode
  iconLeft?: boolean
  iconRight?: boolean
  type: 'button' | 'submit'
  className?: string
  style?: 'default' | 'primary' | 'secondary' | 'disabled'
}

export default function IconButton({
  text = '',
  icon = '',
  iconRight = false,
  iconLeft = false,
  type,
  className = '',
  style,
}: Props) {
  const iconButtonClass = classNames(styles.iconButton, className, [
    styles[style],
  ])

  return (
    <>
      <button type={type} className={iconButtonClass}>
        {iconLeft && icon}
        {text}
        {iconRight && icon}
      </button>
    </>
  )
}

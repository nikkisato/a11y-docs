'use client'

import classNames from 'classnames'

import styles from './Input.module.css'
interface Props {
  label: string
  type: string
  placeholder: string
  id: string
  name: string
  className?: string
}

export default function Input({
  label = ' ',
  type = '',
  placeholder = '',
  id = '',
  name = '',
  className = '',
}: Props) {
  return (
    <div className={classNames(className, styles.inputContainer)}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className={styles.input}
      />
    </div>
  )
}

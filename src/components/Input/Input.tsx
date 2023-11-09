'use client'

// import React from 'react';
import IconButton from '../IconButton/IconButton'
import styles from './Input.module.css'

interface Props {
  label: string
  type: string
  placeholder: string
  id: string
  name: string
  icon?: React.ReactNode
}

export default function Input({
  label = ' ',
  type = '',
  placeholder = '',
  id = '',
  name = '',
  icon = false,
}: Props) {
  return (
    <div className={styles.inputContainer}>
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
      <IconButton type="button" icon={icon} iconRight={true} />
    </div>
  )
}

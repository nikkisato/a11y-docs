'use client'

// import React from 'react';

interface Props {
  link: string
  text?: string
  icon: React.ReactNode
  iconLeft?: boolean
  iconRight?: boolean
  type: string
}

export default function Button({
  link = '',
  text = '',
  icon = '',
  iconRight = false,
  iconLeft = false,
  type = '',
}: Props) {
  return (
    <>
      <button>
        {iconLeft && icon}
        {text}
        {iconRight && icon}
      </button>
    </>
  )
}

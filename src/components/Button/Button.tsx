'use client'

interface Props {
  text: string
  type: 'button' | 'submit'
  className?: string
}

export default function Button({ text = '', type, className }: Props) {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  )
}

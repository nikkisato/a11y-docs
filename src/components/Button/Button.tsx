

'use client'

interface Props {
  text: string
  type: 'button' | 'submit'
}

export default function Button({ text = '', type }: Props) {
  return <button type={type}>{text}</button>
}

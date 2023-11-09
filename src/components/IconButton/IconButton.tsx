'use client'

interface Props {
  text?: string
  icon: React.ReactNode
  iconLeft?: boolean
  iconRight?: boolean
  type: 'button' | 'submit'
}

export default function IconButton({
  text = '',
  icon = '',
  iconRight = false,
  iconLeft = false,
  type,
}: Props) {
  return (
    <>
      <button type={type}>
        {iconLeft && icon}
        {text}
        {iconRight && icon}
      </button>
    </>
  )
}

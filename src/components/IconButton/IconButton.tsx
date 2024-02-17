'use client'

interface Props {
  text?: string
  icon: React.ReactNode
  iconLeft?: boolean
  iconRight?: boolean
  type: 'button' | 'submit'
  className?: string
}

export default function IconButton({
  text = '',
  icon = '',
  iconRight = false,
  iconLeft = false,
  type,
  className = '',
}: Props) {
  return (
    <>
      <button type={type} className={className}>
        {iconLeft && icon}
        {text}
        {iconRight && icon}
      </button>
    </>
  )
}

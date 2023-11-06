import React from 'react'
interface HeadingProps {
  text: string
  headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Heading({ headingType, text }: HeadingProps) {
  return <>{text && React.createElement(headingType, null, text)}</>
}

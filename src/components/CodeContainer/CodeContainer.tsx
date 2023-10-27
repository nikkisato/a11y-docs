'use client'
import { type Code } from '~/lib/sanity.queries'

import styles from './CodeContainer.module.css'

interface Props {
  title: string
  content?: string
  css?: React.ReactNode
  html?: React.ReactNode
  javascript?: React.ReactNode
  typescript?: React.ReactNode
  liquid?: React.ReactNode
  slug
}

export default function CodeContainer({
  title = '',
  content = '',
  css = '',
  html = '',
  javascript = '',
  typescript = '',
  liquid = '',
  slug = '',
}: Props) {
  console.log('PROPS', title)
  return <div>{title}</div>
}

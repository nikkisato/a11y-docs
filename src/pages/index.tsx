import type { InferGetStaticPropsType } from 'next'

import Container from '~/components/Container/Container'

import { getStaticProps, MenuProvider } from '../context/ContextMenu'

const IndexPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { codes } = props
  return (
    <MenuProvider codes={codes}>
      <Container />
    </MenuProvider>
  )
}

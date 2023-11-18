/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
// import { useLiveQuery } from 'next-sanity/preview'
import { createContext, useContext, useState } from 'react'

import Container from '~/components/Container/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { type Code, codeQuery, getCodes } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const MenuContext = createContext()

const useDrawerState = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return { isDrawerOpen, setIsDrawerOpen }
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & { codes: Code[] }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const codes = await getCodes(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      codes,
    },
  }
}

export default async function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerState()
  // const codes = props.codes

  // let titleArray = []

  // codes.forEach((code) => {
  //   titleArray.push(code.title)
  // })

  return (
    <MenuContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        // codes,
        // titleArray,
      }}
    >
      <Container>{children}</Container>
    </MenuContext.Provider>
  )
}

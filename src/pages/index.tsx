import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { createContext, useContext, useState } from 'react'

import Container from '~/components/Container/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { type Code, codeQuery, getCodes } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const MenuContext = createContext()

const useDrawerState = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  console.log('SAM1', isDrawerOpen)
  console.log('SAM2', setIsDrawerOpen)
  return { isDrawerOpen, setIsDrawerOpen }
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & { codes: Code[] }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const codes = await getCodes(client)

  // Use the custom hook to get initial state and update function
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerState()

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      codes,
      isDrawerOpen,
      setIsDrawerOpen,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [codes] = useLiveQuery<Code[]>(props.codes, codeQuery)
  return (
    <MenuContext.Provider
      value={{
        isDrawerOpen: props.isDrawerOpen,
        setIsDrawerOpen: props.setIsDrawerOpen,
      }}
    >
      <Container></Container>
    </MenuContext.Provider>
  )
}

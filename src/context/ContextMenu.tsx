/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps } from 'next'
import { createContext, useContext, useEffect, useState } from 'react'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { type Code, getCodes } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

interface MenuContextType {
  isMenuDrawerOpen: boolean
  setIsMenuDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
  codes: Code[]
  isSettingDrawerOpen: boolean
  setIsSettingDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuContextProvider')
  }
  return context
}

export const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return { isDrawerOpen, setIsDrawerOpen }
}

export const useMenuDrawer = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false)

  return { isMenuDrawerOpen, setIsMenuDrawerOpen }
}

export const useSettingDrawer = () => {
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false)

  return { isSettingDrawerOpen, setIsSettingDrawerOpen }
}

export const useCodes = async (draftMode: boolean): Promise<Code[]> => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const codes = await getCodes(client)

  return codes
}

export const useCode = () => {
  const [codes, setCodes] = useState<Code[]>([])

  useEffect(() => {
    const fetchCodes = async () => {
      const codesData = await useCodes(false) // Assuming draftMode is false
      setCodes(codesData)
    }

    fetchCodes()
  }, [])

  return { codes, setCodes }
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & { codes: Code[] }
> = async ({ draftMode = false }: { draftMode?: boolean }) => {
  const codes = await useCodes(draftMode)
  const children = []

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      codes,
      children,
    },
  }
}

export const MenuProvider: React.FC<SharedPageProps> = ({ children }) => {
  const { isMenuDrawerOpen, setIsMenuDrawerOpen } = useMenuDrawer()
  const { isSettingDrawerOpen, setIsSettingDrawerOpen } = useSettingDrawer()
  const { codes, setCodes } = useCode()

  const contextValue = {
    isMenuDrawerOpen,
    setIsMenuDrawerOpen,
    codes,
    isSettingDrawerOpen,
    setIsSettingDrawerOpen,
  }

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}

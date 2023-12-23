import '~/styles/global.css'
import '~/styles/reset.css'
import '~/styles/icon.css'
import '~/styles/accessibility.css'

import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import { lazy } from 'react'

import { MenuProvider } from '~/context/ContextMenu'
import { type Code } from '~/lib/sanity.queries'
import Middleware from '~/middlewear/middlewear'

export interface SharedPageProps {
  draftMode: boolean
  token: string
  codes: Code[]
  children: React.ReactNode
}

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token, children, codes } = pageProps
  return (
    <>
      {draftMode ? (
        <Middleware draftMode token={token} codes={codes}>
          <Component {...pageProps} />
          {children}
        </Middleware>
      ) : (
        <MenuProvider draftMode token={token} codes={codes}>
          <Component {...pageProps} />
          {children}
        </MenuProvider>
      )}
    </>
  )
}

// pages/_app.js or pages/_app.tsx
import '~/styles/global.css'
import '~/styles/reset.css'
import '~/styles/icon.css'
import '~/styles/accessibility.css'

import type { AppProps } from 'next/app'
import { lazy } from 'react'

import { MenuProvider } from '~/context/ContextMenu'
import ScreenSizeProvider from '~/context/ContextScreenSize' // Correct import path
import { Code } from '~/lib/sanity.queries'
import Middleware from '~/middleware/middleware'

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
        <Middleware draftMode={draftMode} token={token} codes={codes}>
          <Component {...pageProps} />
          {children}
        </Middleware>
      ) : (
        <ScreenSizeProvider>
          <MenuProvider draftMode={draftMode} token={token} codes={codes}>
            <Component {...pageProps} />
            {children}
          </MenuProvider>
        </ScreenSizeProvider>
      )}
    </>
  )
}

import React from 'react'

import PreviewProvider from '../components/PreviewProvider'
import { MenuProvider } from '../context/ContextMenu'
import ScreenSizeProvider from '../context/ContextScreenSize'

const Middleware = ({ children, draftMode, token, codes }) => {
  return (
    <MenuProvider draftMode={draftMode} token={token} codes={codes}>
      <ScreenSizeProvider>
        <PreviewProvider token={token}>{children}</PreviewProvider>
      </ScreenSizeProvider>
    </MenuProvider>
  )
}

export default Middleware

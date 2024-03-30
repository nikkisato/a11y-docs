import React from 'react'

import PreviewProvider from '../components/PreviewProvider'
import { MenuProvider } from '../context/ContextMenu'
import ScreenSizeProvider from '../context/ContextScreenSize'

const Middleware = ({ children, draftMode, token, codes }) => {
  return (
    <ScreenSizeProvider>
      <MenuProvider draftMode={draftMode} token={token} codes={codes}>
        <PreviewProvider token={token}>{children}</PreviewProvider>
      </MenuProvider>
    </ScreenSizeProvider>
  )
}

export default Middleware

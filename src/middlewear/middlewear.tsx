import React from 'react'

import PreviewProvider from '../components/PreviewProvider'
import { MenuProvider } from '../context/ContextMenu'

const Middleware = ({ children, draftMode, token, codes }) => {
  return (
    <MenuProvider draftMode={draftMode} token={token} codes={codes}>
      <PreviewProvider token={token}>{children}</PreviewProvider>
    </MenuProvider>
  )
}

export default Middleware

// ScreenSizeProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react'

const ScreenSizeContext = createContext<any>(null)

export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext)
  if (!context) {
    throw new Error(
      'useScreenSize must be used within a ScreenSizeProvider component',
    )
  }
  return context
}

const ScreenSizeProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Example threshold for mobile width
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  )
}

export default ScreenSizeProvider

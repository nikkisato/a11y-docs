import React, { useEffect, useState } from 'react'
import { ComponentType } from 'react'
interface CustomComponentRendererProps {
  component: ComponentType<any>
}

const CustomComponentRenderer: React.FC<CustomComponentRendererProps> = ({
  component: Component,
}) => {
  return (
    <div>
      <Component />
    </div>
  )
}

export default CustomComponentRenderer

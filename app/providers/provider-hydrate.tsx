'use client'

import { ReactNode, useEffect, useState } from 'react'

export default function LayoutHydrated({ children }:  { children?: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState<boolean>(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? children : ''}</>
}

import React, { ReactNode } from 'react'
import Header from '../Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout

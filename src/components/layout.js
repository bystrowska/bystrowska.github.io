import * as React from 'react'
import { body } from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout

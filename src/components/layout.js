import * as React from 'react'
import "@fontsource/source-code-pro"
import "@fontsource/source-code-pro/600.css"
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

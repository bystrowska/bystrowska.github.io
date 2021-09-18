import * as React from 'react'
import "@fontsource/source-code-pro"
import "@fontsource/source-code-pro/600.css"
import { StaticImage } from "gatsby-plugin-image"
import './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main>
        {children}
      </main>
      <footer>
        <a href="https://github.com/bystrowska"><StaticImage src="../static/images/smlgh.svg" alt="white GitHub mark" width={32} height={32} /></a>
        <a href="https://www.linkedin.com/in/bystrowska"><StaticImage src="../static/images/smlln.svg" alt="white LinkedIn bug" width={32} height={32} /></a>
      </footer>
    </div>
  )
}

export default Layout

import * as React from "react"
import Layout from '../components/layout'
import { h1, subtitle } from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout pageTitle="Paulina's Page">
      <h1>Hi, I'm Paulina</h1>
      <p className={subtitle}>A final year BSc Computer Science student at the University of Leeds.</p>
    </Layout>
  )
}

export default IndexPage

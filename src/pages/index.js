import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio";
import Main from "../components/Main";
import Technologies from "../components/Technologies"

const IndexPage = () => (
  <Layout>
    <SEO title='Progressive Apps'/>
    <Main/>
    <Portfolio title='Works'/>
    <Technologies/>
  </Layout>
)

export default IndexPage

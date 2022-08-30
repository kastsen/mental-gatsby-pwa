import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio";
import HeadSection from "../components/HeadSection";
import Technologies from "../components/Technologies"

const IndexPage = () => (
  <Layout>
    <SEO title='Progressive Apps for business'/>
    <HeadSection/>
    <Portfolio title='Portfolio'/>
    <Technologies/>
  </Layout>
)

export default IndexPage

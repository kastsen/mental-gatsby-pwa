import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/Features";
import TopSection from "../components/TopSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopSection/>
    <Features/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

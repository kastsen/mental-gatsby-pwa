import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/Features";
import TopSection from "../components/TopSection";
// import SectionLayout from "../components/sectionLayout";
import Technologies from "../components/Technologies"
import PwaReliable from "../components/PwaReliable"

const IndexPage = () => (
  <Layout>
    <SEO title="Progressive Web Apps for business" />
    <TopSection/>
    <Features/>
    <PwaReliable/>
    <Technologies/>
    {/*<SectionLayout name="test">*/}
    {/*    <Link to="/page-2/">Go to page 2</Link>*/}
    {/*</SectionLayout>*/}
  </Layout>
)

export default IndexPage

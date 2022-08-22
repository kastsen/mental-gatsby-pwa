import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/Features";
import HeadSection from "../components/HeadSection";
import Technologies from "../components/Technologies"
import PwaReliable from "../components/PwaReliable"
import { data } from "../data/data"

const IndexPage = () => (
  <Layout>
    <SEO title='Progressive Web Apps for business'/>
    <HeadSection/>
    <Technologies/>
    <Features title='Why build a Progressive App?' data={data.features}/>
  </Layout>
)

export default IndexPage

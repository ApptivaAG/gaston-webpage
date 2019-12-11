import React from 'react'
import queryString from "querystring"

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Plans from '../components/Plans'
import TabletCount from "../components/TabletCount"
import Rent from "../components/Rent"
import CustomDesign from "../components/CustomDesign"
import Enrol from "../components/Enrol"

const steps = {
  "count": TabletCount,
  "rent": Rent,
  "design": CustomDesign,
  "enrol": Enrol
}

const PricingPage = ({location}) => {
  const {step} = queryString.parse(location.search.slice(1))
  const StepComponent = steps[step]||Plans
  return(
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <StepComponent location={location} />
      </Container>
    </Layout>
  )
}

export default PricingPage

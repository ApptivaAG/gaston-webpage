import React from 'react'
import queryString from 'querystring'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Plans from '../components/Plans'
import TabletCount from '../components/TabletCount'
import Rent from '../components/Rent'
import Enrol from '../components/Enrol'
import Thanks from '../components/Thanks'

const steps = {
  count: TabletCount,
  rent: Rent,
  enrol: Enrol,
  thanks: Thanks,
}

const PricingPage = ({ location }) => {
  const { step } = queryString.parse(location.search.slice(1))
  const StepComponent = steps[step] || Plans
  return (
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <StepComponent location={location} />
      </Container>
    </Layout>
  )
}

export default PricingPage

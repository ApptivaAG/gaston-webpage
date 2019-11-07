import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Pricing from '../components/Pricing'

const PricingPage = () => (
  <Layout>
    <SEO title="Pricing" />
    <Container>
      <Pricing />
    </Container>
  </Layout>
)

export default PricingPage

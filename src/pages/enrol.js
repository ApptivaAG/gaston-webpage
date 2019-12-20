import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import Enrol from '../components/Enrol'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

// this is needed for netlify to parse the form

const EnrolWrapper = ({ location }) => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <Enrol location={location} />
      </Container>
    </Layout>
  )
}

export default injectIntl(EnrolWrapper)

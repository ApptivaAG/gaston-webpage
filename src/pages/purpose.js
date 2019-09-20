import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

const PurposePage = ({ intl }) => (
  <Layout>
    <SEO title="Purpose" />
    <Container>
      <h2>{intl.formatMessage({ id: 'purpose.title' })}</h2>
      <p>{intl.formatMessage({ id: 'purpose.paragraph1' })}</p>
      <p>{intl.formatMessage({ id: 'purpose.paragraph2' })}</p>
    </Container>
  </Layout>
)

export default injectIntl(PurposePage)

import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

const ContactPage = ({ intl }) => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <h2>{intl.formatMessage({ id: 'contact.contact' })}</h2>
      <h3>{intl.formatMessage({ id: 'contact.email' })}</h3>
      <p>info@apptiva.ch</p>
      <h3>{intl.formatMessage({ id: 'contact.phone' })}</h3>
      <p>+41 41 322 26 26</p>
      <h3>{intl.formatMessage({ id: 'contact.address' })}</h3>
      <address>
        Neuenkirchstrasse 19 <br />
        6203 Sempach Station <br />
        {intl.formatMessage({ id: 'contact.switzerland' })}
      </address>
    </Container>
  </Layout>
)

export default injectIntl(ContactPage)

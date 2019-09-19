import React from 'react'
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      <FormattedMessage id="notfound.header" />
    </h1>
    <p>
      <FormattedMessage id="notfound.description" />
    </p>
  </Layout>
)

export default injectIntl(NotFoundPage)

/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  FormattedHTMLMessage,
  FormattedMessage,
  injectIntl,
} from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Container
      css={`
        padding-bottom: 6em;
      `}
    >
      <h2>
        <FormattedMessage id="blog.title" />
      </h2>
      <p
        css={`
          font-weight: bold;
        `}
      >
        <FormattedMessage id="blog.lead" />
      </p>
      <FormattedHTMLMessage id="blog.content" />
    </Container>
  </Layout>
)

export default injectIntl(BlogPage)

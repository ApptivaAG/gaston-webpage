import React from 'react'
import { FormattedHTMLMessage, injectIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Button from '../styles/Button'
import ordering from '../images/ordering.svg'
import service from '../images/service.svg'
import payment from '../images/payment.svg'

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <Container
      css={`
        padding-top: 8vh;
        padding-bottom: 12vh;
      `}
    >
      <div
        css={`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          max-height: 800px;
        `}
      >
        <div
          css={`
            text-align: center;
            h2 {
              font-size: 3em;
              margin: 0;
            }
            p {
              font-size: 1.5em;
              font-weight: 300;
              margin: 0;
            }
            @media (min-width: 600px) {
              h2 {
                font-size: 5em;
              }
              p {
                font-size: 2em;
              }
            }
            @media (max-width: 600px) {
              br {
                display: none;
              }
            }
          `}
        >
          <h2>Gaston</h2>
          <p>
            <FormattedHTMLMessage id="tagline" />
          </p>
        </div>
        <ul
          css={`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            list-style: none;
            padding: 2em 0 1em;
            li {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-end;
              padding: 0 1em;
            }
          `}
        >
          <li>
            <img
              css={`
                width: 4.5em;
              `}
              src={ordering}
              alt=""
            />
            <h3>{intl.formatMessage({ id: 'index.ordering' })}</h3>
          </li>
          <li>
            <img
              css={`
                width: 6em;
                height: 5em;
              `}
              src={service}
              alt=""
            />
            <h3>{intl.formatMessage({ id: 'index.service' })}</h3>
          </li>
          <li>
            <img
              css={`
                width: 4em;
                height: 5em;
              `}
              src={payment}
              alt=""
            />
            <h3>{intl.formatMessage({ id: 'index.payment' })}</h3>
          </li>
        </ul>
        <Button
          css={`
            font-size: 1.4em;
          `}
          as={Link}
          to="/contact"
        >
          {intl.formatMessage({ id: 'index.calltoaction' })}
        </Button>
      </div>
    </Container>
  </Layout>
)

export default injectIntl(IndexPage)

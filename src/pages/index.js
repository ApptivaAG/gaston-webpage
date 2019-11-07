import React from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage, injectIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Button from '../styles/Button'
import ordering from '../images/ordering.svg'
import service from '../images/service.svg'
import payment from '../images/payment.svg'
import spain from '../images/spain.jpg'
import spainMenu from '../images/spain-menu.png'
import ipad from '../images/ipad.png'

const Hero = styled.section`
  margin-top: -5rem;
  height: 70%;
  position: relative;
  color: white;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    top: 0;
    bottom: 0;

    display: block;
    background: url('${spain}') center/cover no-repeat;

    filter: brightness(50%);
  }

`

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Container>
        <div
          css={`
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 6em 0;
          `}
        >
          <div>
            <h2
              css={`
                margin: 0;
              `}
            >
              Gaston Menu
            </h2>
            <h3>{intl.formatMessage({ id: 'index.menutag' })}</h3>
            <ul>
              <li>Your design</li>
              <li>Easy menu customization</li>
              <li>With or without tablet devices</li>
              <li>Included Webpage</li>
            </ul>
          </div>
          <div>
            <img src={spainMenu} alt="" />
          </div>
        </div>
      </Container>
    </Hero>
    <section>
      <Container>
        <h2>Section 2</h2>
      </Container>
    </section>
  </Layout>
)

export default injectIntl(IndexPage)

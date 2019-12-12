import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
import CookieConsent from 'react-cookie-consent'
import Cookies from 'universal-cookie'
import reactGA from 'react-ga'
import theme from '../styles/theme'

const FooterStyle = styled.footer`
  grid-area: Footer;
  padding: 0 1rem;
  color: ${p => p.theme.primary};

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
  }
  .active {
    font-weight: bold;
  }
`
const startGoogleAnalytics = () => {
  const cookies = new Cookies()
  reactGA.initialize('UA-66015649-9', {
    anonymize: true,
  })
  cookies.set('gatsby-gdpr-google-analytics', true)
}

const Footer = ({ intl }) => (
  <FooterStyle>
    <p>
      © 2019 • Gaston • {`${intl.formatMessage({ id: 'footer.by' })} `}
      <a href="https://apptiva.ch">Apptiva</a> •{' '}
      {intl.formatMessage({ id: 'footer.switzerland' })}
    </p>
    <p
      css={`
        a {
          padding: 0.6em;
        }
      `}
    >
      <Link to="en" activeClassName="active" partiallyActive>
        en
      </Link>
      &nbsp;
      <Link to="de" activeClassName="active" partiallyActive>
        de
      </Link>
    </p>
    <CookieConsent
      location="bottom"
      style={{ backgroundColor: theme.primary }}
      buttonStyle={{ color: theme.primary, backgroundColor: 'white' }}
      buttonText={intl.formatMessage({ id: 'cookies.accept' })}
      onAccept={startGoogleAnalytics}
    >
      {intl.formatMessage({ id: 'cookies.disclaimer' })}
    </CookieConsent>
  </FooterStyle>
)

export default injectIntl(Footer)

import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

const FooterStyle = styled.footer`
  grid-area: Footer;
  padding: 0 1rem;
  color: ${p => p.theme.primary};

  @media (min-width: 600px) {
    padding: 0 2rem;
  }
`

const Footer = ({ intl }) => (
  <FooterStyle>
    <p>
      © 2019 • Gaston • {`${intl.formatMessage({ id: 'footer.by' })} `}
      <a href="https://apptiva.ch">Apptiva</a> •{' '}
      {intl.formatMessage({ id: 'footer.switzerland' })}
    </p>
  </FooterStyle>
)

export default injectIntl(Footer)

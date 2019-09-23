import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

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

const Footer = ({ intl }) => (
  <FooterStyle>
    <p>
      © 2019 • Gaston • {`${intl.formatMessage({ id: 'footer.by' })} `}
      <a href="https://apptiva.ch">Apptiva</a> •{' '}
      {intl.formatMessage({ id: 'footer.switzerland' })}
    </p>
    <p>
      <Link to="en" activeClassName="active" partiallyActive>
        en
      </Link>
      &nbsp;
      <Link to="de" activeClassName="active" partiallyActive>
        de
      </Link>
    </p>
  </FooterStyle>
)

export default injectIntl(Footer)

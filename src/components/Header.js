import { injectIntl, Link } from 'gatsby-plugin-intl'

import styled from 'styled-components'
import React from 'react'

const HeaderStyle = styled.header`
  grid-area: Header;
  display: flex;
  justify-content: space-between;

  font-weight: bold;
  height: 3.6em;

  font-size: 1rem;
  @media (min-width: 600px) {
    font-size: 1.2rem;
    padding: 0 0.8rem;
  }

  nav {
    display: flex;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1em;
    padding-right: 1em;
    color: ${p => p.theme.text};
    text-decoration: none;
    @media (min-width: 600px) {
      padding-left: 1.2em;
      padding-right: 1.2em;
    }
  }
  .active {
    color: ${p => p.theme.primary};
  }
`
const H1 = styled.h1`
  font-size: 1rem;
  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
`

const Header = ({ intl }) => (
  <HeaderStyle>
    <H1>
      <Link to="/" activeClassName="active">
        Gaston
      </Link>
    </H1>
    <nav>
      <Link to="/purpose" activeClassName="active">
        {intl.formatMessage({ id: 'header.purpose' })}
      </Link>
      <Link to="/blog" activeClassName="active">
        {intl.formatMessage({ id: 'header.blog' })}
      </Link>
      <Link to="/contact" activeClassName="active">
        {intl.formatMessage({ id: 'header.contact' })}
      </Link>
    </nav>
  </HeaderStyle>
)

export default injectIntl(Header)

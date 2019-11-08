import { injectIntl, Link } from 'gatsby-plugin-intl'

import styled from 'styled-components'
import React from 'react'

const HeaderStyle = styled.header`
  position: sticky;
  grid-area: Header;
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index: 99;

  font-weight: bold;
  height: 3.6em;

  font-size: 1rem;
  @media (min-width: 600px) {
    font-size: 1.2rem;
    padding: 0 0.8rem;
  }
  ${p => p.dark && 'mix-blend-mode: difference;'}

  nav {
    display: flex;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1em;
    padding-right: 1em;
    color: ${p => (p.dark ? 'rgb(0, 255, 100)' : p.theme.text)};
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

const Header = ({ intl, dark }) => (
  <HeaderStyle dark={dark}>
    <H1>
      <Link to="/" activeClassName="active">
        Gaston
      </Link>
    </H1>
    <nav>
      <Link to="/pricing" activeClassName="active">
        {intl.formatMessage({ id: 'header.pricing' })}
      </Link>
      <Link to="/about" activeClassName="active">
        {intl.formatMessage({ id: 'header.about' })}
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

import { injectIntl, Link } from 'gatsby-plugin-intl'
import { useScrollYPosition } from 'react-use-scroll-position'

import styled, { css } from 'styled-components'
import React from 'react'

const HeaderStyle = styled.header`
  position: sticky;
  grid-area: Header;
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid transparent;

  font-weight: bold;
  height: 3.6em;

  overflow-x: auto;

  color: ${p => (p.dark ? 'white' : p.theme.text)};

  transition: background-color 0.3s ease-in, color 0.3s ease-in;
  transition: border 200ms;

  ${p =>
    p.scroll &&
    css`
      background-color: white;
      color: ${props => props.theme.text};
      border-bottom: 1px solid ${props => props.theme.primary};
    `}

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
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: inherit;
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

const Header = ({ intl, dark }) => {
  const scrollY = useScrollYPosition()

  return (
    <HeaderStyle dark={dark} scroll={scrollY}>
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
}

export default injectIntl(Header)

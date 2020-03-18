/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import { theme, GlobalStyle } from '../styles'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'Header'
    'Content'
    'Footer';
  min-height: 100vh;
`

const Layout = ({ children, dark }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Header dark={dark} />
        <main>{children}</main>
        <Footer />
        <GlobalStyle />
      </Grid>
    </ThemeProvider>
  )
}

export default Layout

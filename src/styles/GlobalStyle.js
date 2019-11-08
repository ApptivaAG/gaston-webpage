import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import 'typeface-merriweather-sans'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  *,
  *:before,
  *:after {
    box-sizing: border-box; 
  }

  html,
  body {
    font-size: 100%; 
  }

  body {
    background: #fff;
    color: ${p => p.theme.text};
    font-family: "Merriweather Sans", Helvetica, Roboto, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    position: relative; 
  }
  a {
    color: ${p => p.theme.primary};
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;

    @media (min-width: 600px) {
      line-height: 1.3;
    }
  }

  h2 {
    font-size: 2em;
    color: ${p => p.theme.primary};

    @media (min-width: 600px) {
      font-size: 3em;
    }
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

`
export default GlobalStyle

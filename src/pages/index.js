import React from 'react'
import styled, { keyframes } from 'styled-components'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Button from '../styles/Button'
import spain from '../images/spain.jpg'
import sushi from '../images/sushi.jpg'
import white from '../images/white.jpg'
import menus from '../images/menus.png'
import ipad from '../images/ipad.png'
import brush from '../images/paint-board-and-brush.svg'
import menu from '../images/menu.svg'
import tablet from '../images/tablet.svg'

const Hero = ({ children }) => {
  const Wrapper = styled.section`
    margin-top: -5rem;
    padding-top: 4rem;
    position: relative;
    color: white;
  `
  const fadeIn = keyframes`
    0% {
      opacity:1;
    }
    28% {
      opacity:1;
    }
    34% {
      opacity:0;
    }
    94% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  `
  const BgImg = styled.div`
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${p => p.img}) center/cover no-repeat;
    filter: brightness(40%);

    animation: ${fadeIn} ease 15s infinite;
    animation-delay: ${p => p.delay}s;
  `
  return (
    <Wrapper>
      <BgImg img={white} delay="10" />
      <BgImg img={sushi} delay="5" />
      <BgImg img={spain} delay="0" />

      {children}
    </Wrapper>
  )
}

const IndexPage = ({ intl }) => {
  return (
    <Layout dark>
      <SEO title="Home" />
      <Hero>
        <Container>
          <div
            css={`
              display: grid;
              gap: 5em 1em;
              height: 100%;
              justify-content: center;
              @media (min-width: 768px) {
                grid-template-columns: 1fr 1fr;
              }
            `}
          >
            <div>
              <h1
                css={`
                  font-size: 4em;
                  margin: 0.5em 0;
                  line-height: 0.6em;
                `}
              >
                <b
                  css={`
                    color: ${p => p.theme.primary};
                  `}
                >
                  Gaston
                </b>
                <br />
                <small
                  css={`
                    font-size: 40%;
                  `}
                >
                  {intl.formatMessage({ id: 'index.menutag' })}
                </small>
              </h1>
              <ul>
                <li>{intl.formatMessage({ id: 'index.USP.1' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.2' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.3' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.4' })}</li>
              </ul>
              <br />
              <Button
                css={`
                  font-size: 1.2em;
                  background-color: white;
                `}
                as={Link}
                to="/enrol?plan=trial"
              >
                {intl.formatMessage({ id: 'index.calltoaction' })}
              </Button>
            </div>
            <div>
              <div
                css={`
                  position: relative;
                  overflow: hidden;

                  @media (max-width: 768px) {
                    max-width: 28em;
                  }
                `}
              >
                <img
                  css={`
                    position: absolute;
                    top: 0;
                    width: 300%;
                    max-width: 300%;
                    animation: roll 15s infinite;
                    transform: translateX(0%);
                    @keyframes roll {
                      0% {
                        transform: translateX(0%);
                      }
                      28% {
                        transform: translateX(0%);
                      }
                      32% {
                        transform: translateX(-33.3333%);
                      }
                      60% {
                        transform: translateX(-33.3333%);
                      }
                      64% {
                        transform: translateX(-66.6666%);
                      }
                      92% {
                        transform: translateX(-66.6666%);
                      }
                    }
                  `}
                  src={menus}
                  alt=""
                />
                <img
                  css={`
                    position: relative;
                  `}
                  src={ipad}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </Hero>
      <section>
        <Container>
          <div
            css={`
              display: flex;
              align-items: stretch;
            `}
          >
            <div
              css={`
                flex: 1;
                background-image: url(${brush});
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
              `}
            />
            <div
              css={`
                flex: 3;
                padding-left: 50px;
              `}
            >
              <h2>{intl.formatMessage({ id: 'index.design.title' })}</h2>
              <p>{intl.formatMessage({ id: 'index.design.content' })}</p>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div
            css={`
              display: flex;
              align-items: stretch;
            `}
          >
            <div
              css={`
                flex: 1;
                background-image: url(${menu});
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
              `}
            />
            <div
              css={`
                flex: 3;
                padding-left: 50px;
              `}
            >
              <h2>
                {intl.formatMessage({ id: 'index.administration.title' })}
              </h2>
              <p>
                {intl.formatMessage({ id: 'index.administration.content' })}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div
            css={`
              display: flex;
              align-items: stretch;
            `}
          >
            <div
              css={`
                flex: 1;
                background-image: url(${tablet});
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
              `}
            />
            <div
              css={`
                flex: 3;
                padding-left: 50px;
              `}
            >
              <h2>{intl.formatMessage({ id: 'index.rental.title' })}</h2>
              <p>{intl.formatMessage({ id: 'index.rental.content' })}</p>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container
          css={`
            text-align: center;
          `}
        >
          <Button
            css={`
              font-size: 1.4em;
            `}
            as={Link}
            to="/enrol?plan=trial"
          >
            {intl.formatMessage({ id: 'index.calltoaction' })}
          </Button>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(IndexPage)

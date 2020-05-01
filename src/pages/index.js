import React from 'react'
import styled, { keyframes } from 'styled-components'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container, Button } from '../styles'
import spain from '../images/spain.jpg'
import sushi from '../images/sushi.jpg'
import white from '../images/white.jpg'
import menus from '../images/menus.png'
import ipad from '../images/ipad.png'
import brush from '../images/paint-board-and-brush.svg'
import menu from '../images/menu.svg'
import tablet from '../images/tablet.svg'
import desktopAndMobile from '../images/desktop-and-mobile.svg'
import takeAway from '../images/take-away.svg'

const pulse = keyframes`
  0% {
		transform: rotate(-20deg) translate(1rem, -0.5rem) scale(1);
	}

	80% {
		transform: rotate(-20deg) translate(1rem, -0.5rem)  scale(2);
	}

	100% {
		transform: rotate(-20deg) translate(1rem, -0.5rem) scale(1);
	}
`

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
  background: url(${p => p.img}) hsl(326.21, 84.43%, 38%) center/cover no-repeat;
  filter: brightness(40%);

  animation: ${fadeIn} ease 15s infinite;
  animation-delay: ${p => p.delay}s;
`
const Hero = ({ children }) => {
  return (
    <Wrapper>
      <BgImg img={white} delay="10" />
      <BgImg img={sushi} delay="5" />
      <BgImg img={spain} delay="0" />

      {children}
    </Wrapper>
  )
}

const ImageTextSection = ({ image, title, children }) => (
  <div
    css={`
      display: flex;
      align-items: stretch;
    `}
  >
    <div
      css={`
        flex: 0 3 8em;
        background-image: url(${image});
        background-position: center 2em;
        background-repeat: no-repeat;
        background-size: contain;

        @media (max-widht: 1024px) {
          background-position: center 5vw;
        }
      `}
    />
    <div
      css={`
        flex: 1 9 auto;
        margin-left: 5%;
      `}
    >
      <h2
        css={`
          font-size: 2em;
          @media (max-width: 768px) {
            font-size: 1.5em;
          }
        `}
      >
        {title}
      </h2>
      <p>{children}</p>
    </div>
  </div>
)

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
                <b>Gaston</b>
                <br />
                <small
                  css={`
                    font-size: 40%;
                    color: white;
                  `}
                >
                  {intl.formatMessage({ id: 'index.menutag' })}
                </small>
              </h1>
              <div
                css={`
                  color: ${p => p.theme.primary};
                  padding-right: 0.2em;
                  font-weight: bold;
                  position: relative;
                  display: inline-block;
                  animation: ${pulse} 2s infinite;
                `}
              >
                {intl.formatMessage({ id: 'index.newText' })}
              </div>
              <ul css="margin-top: -1rem">
                <li>{intl.formatMessage({ id: 'index.USP.1' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.2' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.3' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.4' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.5' })}</li>
              </ul>
              <br />
              <Button
                css={`
                  font-size: 1.2em;
                  background-color: white;
                `}
                as={Link}
                to="/offers"
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
      <section
        css={`
          margin-top: 6em;
        `}
      >
        <Container>
          <ImageTextSection
            image={takeAway}
            title={intl.formatMessage({ id: 'index.take-away.title' })}
          >
            {intl.formatMessage({ id: 'index.take-away.content' })}
            <br />
            <Link to="/blog/take-away">
              {intl.formatMessage({ id: 'index.take-away.link' })}
            </Link>
          </ImageTextSection>
        </Container>
        <Container>
          <ImageTextSection
            image={brush}
            title={intl.formatMessage({ id: 'index.design.title' })}
          >
            {intl.formatMessage({ id: 'index.design.content' })}
          </ImageTextSection>
        </Container>
        <Container>
          <ImageTextSection
            image={menu}
            title={intl.formatMessage({ id: 'index.administration.title' })}
          >
            {intl.formatMessage({ id: 'index.administration.content' })}
          </ImageTextSection>
        </Container>
        <Container>
          <ImageTextSection
            image={tablet}
            title={intl.formatMessage({ id: 'index.rental.title' })}
          >
            {intl.formatMessage({ id: 'index.rental.content' })}
          </ImageTextSection>
        </Container>
        <Container>
          <ImageTextSection
            image={desktopAndMobile}
            title={intl.formatMessage({ id: 'index.desktop-mobile.title' })}
          >
            {intl.formatMessage({ id: 'index.desktop-mobile.content' })}
          </ImageTextSection>
        </Container>
        <Container
          css={`
            text-align: center;
            margin-bottom: 6em;
          `}
        >
          <Button
            css={`
              font-size: 1.4em;
            `}
            as={Link}
            to="/offers"
          >
            {intl.formatMessage({ id: 'index.calltoaction' })}
          </Button>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(IndexPage)

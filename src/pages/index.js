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
import takeAway from '../images/take-away.svg'
import everywhere from '../images/everywhere.svg'
import order from '../images/mobile-shopping.svg'
import languages from '../images/communications.svg'

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
const SubTitle = styled.h3`
  margin-bottom: 0.5rem;
`

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const VideoTextColumn = styled.div`
  flex: 1 1 15em;
  padding-right: 2em;
`

const VideoColumn = styled.div`
  flex: 1 1 20em;
`

const Video = styled.video`
  width: 100%;
  border: 1px solid ${p => p.theme.primary};
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
              <ul css="margin-top: -1rem">
                <li>{intl.formatMessage({ id: 'index.USP.1' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.2' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.3' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.4' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.5' })}</li>
                <li>{intl.formatMessage({ id: 'index.USP.6' })}</li>
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
            image={everywhere}
            title={intl.formatMessage({ id: 'index.everywhere.title' })}
          >
            <VideoContainer>
              <VideoTextColumn>
                <p>{intl.formatMessage({ id: 'index.everywhere.content' })}</p>
                <SubTitle>
                  {intl.formatMessage({ id: 'index.everywhere.subtitle1' })}
                </SubTitle>
                {intl.formatMessage({ id: 'index.everywhere.subcontent1' })}
                <SubTitle>
                  {intl.formatMessage({ id: 'index.everywhere.subtitle2' })}
                </SubTitle>
                {intl.formatMessage({ id: 'index.everywhere.subcontent2' })}
                <SubTitle
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {intl.formatMessage({ id: 'index.everywhere.subtitle3' })}
                </SubTitle>
                {intl.formatMessage({ id: 'index.everywhere.subcontent3' })}
                <SubTitle>
                  {intl.formatMessage({ id: 'index.everywhere.subtitle4' })}
                </SubTitle>
                {intl.formatMessage({ id: 'index.everywhere.subcontent4' })}
              </VideoTextColumn>
              <VideoColumn>
                <p>
                  <Video muted autoPlay loop controls>
                    <source
                      src="https://res.cloudinary.com/apptiva/video/upload/v1593171844/gaston/gaston-menu.mp4"
                      type="video/mp4"
                    />
                    <track
                      src="/gaston-menu-en.vtt"
                      kind="captions"
                      srcLang="en"
                      default={intl.locale === 'en'}
                    />
                    <track
                      src="/gaston-menu-de.vtt"
                      kind="captions"
                      srcLang="de"
                      default={intl.locale === 'de'}
                    />
                  </Video>
                </p>
              </VideoColumn>
            </VideoContainer>
          </ImageTextSection>
        </Container>
        <Container>
          <ImageTextSection
            image={order}
            title={intl.formatMessage({ id: 'index.order.title' })}
          >
            <VideoContainer>
              <VideoTextColumn>
                <p>{intl.formatMessage({ id: 'index.order.content' })}</p>
              </VideoTextColumn>
              <VideoColumn>
                <p>
                  <Video muted autoPlay loop controls>
                    <source
                      src="https://res.cloudinary.com/apptiva/video/upload/v1593175414/gaston/gaston-order.mp4"
                      type="video/mp4"
                    />
                    <track
                      src="/gaston-order-en.vtt"
                      kind="captions"
                      srcLang="en"
                      default={intl.locale === 'en'}
                    />
                    <track
                      src="/gaston-order-de.vtt"
                      kind="captions"
                      srcLang="de"
                      default={intl.locale === 'de'}
                    />
                  </Video>
                </p>
              </VideoColumn>
            </VideoContainer>
          </ImageTextSection>
        </Container>
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
            <p>{intl.formatMessage({ id: 'index.administration.content' })}</p>
            <p>
              <Video muted autoPlay loop controls>
                <source
                  src="https://res.cloudinary.com/apptiva/video/upload/v1593170458/gaston/gaston-cms.mp4"
                  type="video/mp4"
                />
                <track
                  src="/gaston-cms-en.vtt"
                  kind="captions"
                  srcLang="en"
                  default={intl.locale === 'en'}
                />
                <track
                  src="/gaston-cms-de.vtt"
                  kind="captions"
                  srcLang="de"
                  default={intl.locale === 'de'}
                />
              </Video>
            </p>
          </ImageTextSection>
        </Container>
        <Container>
          <ImageTextSection
            image={languages}
            title={intl.formatMessage({ id: 'index.multilingual.title' })}
          >
            {intl.formatMessage({ id: 'index.multilingual.content' })}
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

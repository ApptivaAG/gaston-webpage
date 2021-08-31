import React from 'react'
import styled, { keyframes } from 'styled-components'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import useWindowWidth from '../lib/useWindowWith'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container, Button } from '../styles'
import brush from '../images/paint-board-and-brush.svg'
import menu from '../images/menu.svg'
import takeAway from '../images/take-away.svg'
import everywhere from '../images/everywhere.svg'
import order from '../images/mobile-shopping.svg'
import languages from '../images/communications.svg'
import roadmap from '../images/roadmap.svg'

import ani1 from '../images/illustration/Ani_1.svg'
import ani2 from '../images/illustration/Ani_2.svg'
import ani3 from '../images/illustration/Ani_3.svg'
import ani4 from '../images/illustration/Ani_4.svg'
import ani5 from '../images/illustration/Ani_5.svg'
import ani6 from '../images/illustration/Ani_6.svg'
import ani7 from '../images/illustration/Ani_7.svg'

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
  border: 1px solid ${(p) => p.theme.primary};
`

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
      <div>{children}</div>
    </div>
  </div>
)
const IndexPage = ({ intl }) => {
  const windowWidth = useWindowWidth()
  return (
    <Layout dark>
      <SEO title="Home" />
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
            </ul>
            <br />
            <Button
              css={`
                background-color: white;
                margin: 0.2em;
              `}
              as={Link}
              to="/offers"
            >
              {intl.formatMessage({ id: 'index.calltoaction' })}
            </Button>

            <Button
              css={`
                background-color: white;
                margin: 0.2em;
              `}
              as={Link}
              to="/qr-code-demo"
              state={{
                modal: windowWidth > 448,
              }}
            >
              {intl.formatMessage({ id: 'index.demo-calltoaction' })}
            </Button>
          </div>
          <div
            css={`
              position: relative;
              img {
                position: absolute;
                top: 0;
                opacity: 0;
                animation-name: fade;
                animation-iteration-count: infinite;
                animation-duration: 10.5s;
              }
              @keyframes fade {
                0% {
                  opacity: 0;
                }
                2% {
                  opacity: 1;
                }
                6% {
                  opacity: 1;
                }
                8% {
                  opacity: 0;
                }
                100% {
                  opacity: 0;
                }
              }

              #f1 {
                position: relative;
              }
              #f2 {
                animation-delay: 0.5s;
              }
              #f3 {
                animation-delay: 1s;
              }
              #f4 {
                animation-delay: 1.5s;
              }
              #f5 {
                animation-delay: 2s;
              }
              #f6 {
                animation-delay: 2.5s;
              }
              #f7 {
                animation-delay: 4s;
              }
              #f8 {
                animation-delay: 4.5s;
              }
              #f9 {
                animation-delay: 5s;
              }
              #f10 {
                animation-delay: 5.5s;
              }
              #f11 {
                animation-delay: 6s;
              }
              #f12 {
                animation-delay: 6.5s;
              }
              #f13 {
                animation-delay: 7s;
              }
              #f14 {
                animation-delay: 7.5s;
              }
              #f15 {
                animation-delay: 8s;
              }
              #f16 {
                animation-delay: 8.5s;
              }
              #f17 {
                animation-delay: 9s;
              }
            `}
          >
            <img id="f1" src={ani1} alt="" />
            <img id="f2" src={ani2} alt="" />
            <img id="f3" src={ani1} alt="" />
            <img id="f4" src={ani2} alt="" />
            <img id="f5" src={ani1} alt="" />
            <img id="f6" src={ani2} alt="" />
            <img id="f7" src={ani3} alt="" />
            <img id="f8" src={ani4} alt="" />
            <img id="f9" src={ani3} alt="" />
            <img id="f10" src={ani4} alt="" />
            <img id="f11" src={ani3} alt="" />
            <img id="f12" src={ani5} alt="" />
            <img id="f13" src={ani6} alt="" />
            <img id="f14" src={ani7} alt="" />
            <img id="f15" src={ani7} alt="" />
            <img id="f16" src={ani7} alt="" />
            <img id="f17" src={ani7} alt="" />
          </div>
        </div>
      </Container>
      <section
        id="features"
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
            image={roadmap}
            title={intl.formatMessage({ id: 'index.roadmap.title' })}
          >
            <p>{intl.formatMessage({ id: 'index.roadmap.content' })}</p>

            <Button
              as="a"
              href="https://www.notion.so/gastonsolution/Roadmap-von-Gaston-6644875d1fba4fe58cacfbf15e1ace7e"
            >
              Roadmap
            </Button>
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
              margin: 0.2em;
            `}
            as={Link}
            to="/offers"
          >
            {intl.formatMessage({ id: 'index.calltoaction' })}
          </Button>

          <Button
            css={`
              font-size: 1.4em;
              margin: 0.2em;
            `}
            as={Link}
            to="/qr-code-demo"
            state={{
              modal: windowWidth > 448,
            }}
          >
            {intl.formatMessage({ id: 'index.demo-calltoaction' })}
          </Button>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(IndexPage)

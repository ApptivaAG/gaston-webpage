import React from 'react'
import styled from 'styled-components'
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

import ani0 from '../images/illustration/Ani_0.svg'
import ani1 from '../images/illustration/Ani_1.svg'
import ani2 from '../images/illustration/Ani_2.svg'
import ani3 from '../images/illustration/Ani_3.svg'
import ani4 from '../images/illustration/Ani_4.svg'
import ani5 from '../images/illustration/Ani_5.svg'
import ani6 from '../images/illustration/Ani_6.svg'
import ani7 from '../images/illustration/Ani_7.svg'

const motion = [
  { src: ani1 },
  { src: ani2 },
  { src: ani1 },
  { src: ani2 },
  { src: ani1 },
  { src: ani2 },
  { src: ani0 },
  { src: ani0 },
  { src: ani0 },
  { src: ani3 },
  { src: ani4 },
  { src: ani3 },
  { src: ani4 },
  { src: ani3 },
  { src: ani5 },
  { src: ani6 },
  { src: ani7 },
  { src: ani7 },
  { src: ani7 },
  { src: ani7 },
  { src: ani0 },
  { src: ani0 },
  { src: ani0 },
]
const IndexPage = ({ intl }) => {
  const windowWidth = useWindowWidth()
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h1
          css={`
            text-align: center;
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
              color: ${(p) => p.theme.text};
            `}
          >
            {intl.formatMessage({ id: 'index.menutag' })}
          </small>
        </h1>
        <p
          css={`
            font-style: italic;
            text-align: center;
            margin-bottom: 2em;
          `}
        >
          {intl.formatMessage({ id: 'index.claim' })}
        </p>
        <div
          css={`
            position: relative;
            margin: 0 max(-4em, -4vw) 4em;
            z-index: -1;
            div {
              position: absolute;
              inset: 0;
              animation-name: fade;
              animation-iteration-count: infinite;
              animation-duration: ${motion.length / 2}s;
              opacity: 0;
              img {
                height: 100%;
                width: 100%;
              }
            }
            p {
              position: absolute;
              font-size: 2.2em;
              font-weight: bold;
              line-height: 1em;
              inset: 65% 0% 0%;
              margin: 0;
              padding-top: 0.4em;
              color: #333;
              text-shadow: 0 0 18px white;
              text-align: center;
              z-index: 2;
              opacity: 0;
              animation-name: showit;
              animation-iteration-count: infinite;
              animation-duration: ${motion.length / 2}s;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.5) 30%,
                rgba(255, 255, 255, 0.5) 50%,
                rgba(255, 255, 255, 0.5) 70%,
                rgba(255, 255, 255, 0) 100%
              );
              @media (min-width: 700px) {
                font-size: 4em;
                background: linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(255, 255, 255, 0.4) 30%,
                  rgba(255, 255, 255, 0.4) 30%,
                  rgba(255, 255, 255, 0.4) 70%,
                  rgba(255, 255, 255, 0) 100%
                );
              }
            }
            @keyframes fade {
              0% {
                opacity: 0;
              }
              2% {
                opacity: 1;
              }
              5.5% {
                opacity: 1;
              }
              7.5% {
                opacity: 0;
              }
              100% {
                opacity: 0;
              }
            }
            @keyframes showit {
              0% {
                opacity: 0;
              }
              2% {
                opacity: 1;
              }
              5% {
                opacity: 1;
              }
              28% {
                opacity: 1;
              }
              30% {
                opacity: 0;
              }
              100% {
                opacity: 0;
              }
            }

            #s2 {
              animation-delay: 4.5s;
            }

            ${motion.map(
              (_, i) => `.f${i} {
                animation-delay: ${i / 2}s;
              }`
            )}
          `}
        >
          {motion.map(({ src }, i) => (
            <>
              <div
                className={`f${i}`}
                css={i === 0 && 'position: relative !important;'}
              >
                <img src={src} alt="" height="223" width="373" />
              </div>
            </>
          ))}
          <p id="s1">{intl.formatMessage({ id: 'index.problem' })} 😡</p>
          <p id="s2">Gaston App 😊</p>
        </div>
        <USPs>
          <li>{intl.formatMessage({ id: 'index.USP.1' })}</li>
          <li>{intl.formatMessage({ id: 'index.USP.2' })}</li>
          <li>{intl.formatMessage({ id: 'index.USP.3' })}</li>
          <li>{intl.formatMessage({ id: 'index.USP.4' })}</li>
          <li>{intl.formatMessage({ id: 'index.USP.5' })}</li>
        </USPs>

        <div css="font-size: 1.3em; text-align: center; margin-top: 4em; margin-bottom: 1em;">
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

const USPs = styled.ul`
  font-size: 1em;
  margin-left: auto;
  margin-right: auto;
  max-width: fit-content;
  list-style: none;
  padding-left: 1em;
  li {
    padding-left: 1em;
    padding-bottom: 0.8em;
    &::before {
      content: '# ';
      position: absolute;
      font-size: 1.6em;
      transform: translate(-1em, -0.3em);
      color: ${(p) => p.theme.primary};
    }
  }
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
  border: 1px solid ${(p) => p.theme.primary};
`

export default injectIntl(IndexPage)

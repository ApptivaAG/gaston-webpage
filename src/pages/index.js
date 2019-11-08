import React from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage, injectIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Button from '../styles/Button'
import ordering from '../images/ordering.svg'
import service from '../images/service.svg'
import payment from '../images/payment.svg'
import spain from '../images/spain.jpg'
import menus from '../images/menus.png'
import ipad from '../images/ipad.png'
import brush from '../images/paint-board-and-brush.svg'
import menu from '../images/menu.svg'
import tablet from '../images/tablet.svg'

const Hero = styled.section`
  margin-top: -5rem;
  padding-top: 4rem;
  position: relative;
  color: white;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    top: 0;
    bottom: 0;

    display: block;
    background: url('${spain}') center/cover no-repeat;

    filter: brightness(50%);
  }

`

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
                <li>Your design</li>
                <li>Easy menu customization</li>
                <li>With or without tablet devices</li>
                <li>Included Webpage</li>
              </ul>
              <br />
              <Button
                css={`
                  font-size: 1.2em;
                  background-color: white;
                `}
                as={Link}
                to="/pricing"
              >
                Jetzt kostenlos testen
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
                    z-index: 5;
                    animation: roll 14s infinite;
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
                    z-index: 10;
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
              <h2>In Ihrem Design</h2>
              <p>
                Ihre Speisekarte sollte in ihrem Restaurant auf keinen Fall wie
                ein Fremdkörper wirken. Deshalb können Sie bei Gaston komplett
                massgeschneiderte Designs entwerfen lassen, falls ihnen keines
                der Standard-Designs gefällt. Dies geht weit über das simple
                verändern von Farben und Bildern hinaus.
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
              <h2>Einfache Menüverwaltung</h2>
              <p>
                Das Verwalten der Speisen & Getränke auf ihrer Menükarte war
                noch nie so bequem! Über unsere intuitive Web-Oberfläche
                geschieht jede Änderung im Handumdrehen.
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
              <h2>Inklusive Tablets</h2>
              <p>
                Die Beschaffung von geeigneten Tablets kann zu Beginn ganz schön
                ins Geld gehen. Noch dazu ist es schwierig zu erahnen wie lange
                die Tablets halten werden bevor sie kaputt gehen. Wir kennen uns
                mit Speisekarten-Tablets aus und bieten ihnen deshalb die
                Möglichkeit diese einfach & ohne Risiko von uns zu Mieten.
                Kaputte Tablets werden kostenlos ausgetauscht. Bei einer
                Kündigung geben sie die Tablets einfach zurück.
              </p>
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
            to="/pricing"
          >
            Jetzt kostenlos testen
          </Button>
        </Container>
      </section>
    </Layout>
  )
}

export default injectIntl(IndexPage)

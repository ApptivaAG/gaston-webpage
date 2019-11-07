import React, { useState } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled from 'styled-components'
import Button from '../styles/Button'
import brush from '../images/paint-board-and-brush.svg'
import Container from '../styles/Container'

const PlanWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 2em 0 1em;
`

const Plan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  padding: 0 1em;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${p => p.theme.primary};
  background-color: ${p => (p.active ? p.theme.highlight : 'white')};
  width: 30%;
`

const PlanText = styled.p`
  height: 7em;
`

const PlanFeature = styled.p`
  height: 3em;
`

const Price = styled.div`
  color: ${p => p.theme.primary};
  font-size: 1.8em;
  font-weight: bold;
  padding: 1em 0em;
`

const ContactPage = ({ intl }) => {
  const [tabletCount, setTabletCount] = useState(10)
  const [plan, setPlan] = useState('pro')

  const licensePrice = 3
  const maxTablets = 50
  const iPadRentPrice = 29
  const androidRentPrice = 19
  const totalProPrice = tc => Math.max(0, tc - 10) * licensePrice + 39

  return (
    <>
      <h1>{intl.formatMessage({ id: 'pricing.heading' })}</h1>
      <h2>Gaston Menu</h2>
      <p>
        Unsere Preise richten sich nach der Anzahl Tablets, die Sie in Ihrem
        Betrieb verwenden.
      </p>
      <PlanWrapper>
        <Plan active={plan === 'trial'} onClick={() => setPlan('trial')}>
          <h3>Trial</h3>
          <PlanText>
            Unser Trial-Plan beinhaltet die Lizenz für ein Tablet. Ideal um
            Gaston Menu unverbindlich zu testen.
          </PlanText>
          <PlanFeature>Lizenzen inbegriffen: 1</PlanFeature>
          <Price>CHF 0.- / Mt.</Price>
        </Plan>
        <Plan active={plan === 'pro'} onClick={() => setPlan('pro')}>
          <h3>Pro</h3>
          <PlanText>
            Abonnieren Sie den Pro-Plan wenn Sie bis zu 50 Tablets in Ihrem
            Betrieb einsetzen möchten.
          </PlanText>
          <PlanFeature>
            Lizenzen inbegriffen: 10
            <br />
            Jede weitere Lizenz: CHF {licensePrice}.-
          </PlanFeature>
          <Price>CHF 39.- / Mt.</Price>
        </Plan>
        <Plan
          active={plan === 'enterprise'}
          onClick={() => setPlan('enterprise')}
        >
          <h3>Enterprise</h3>
          <PlanText>
            Benötigen Sie mehr als 50 Tablets? Wir machen Ihnen gerne ein auf
            Sie zugeschnittenes Angebot.
          </PlanText>
          <PlanFeature>Lizenzen inbetriffen: unbegrenzt</PlanFeature>
          <Button>Kontaktieren Sie uns</Button>
        </Plan>
      </PlanWrapper>
      {plan === 'pro' && (
        <>
          <h3>Wieviele Tablets benötigen Sie?</h3>
          <Slider
            min={2}
            max={maxTablets}
            defaultValue={10}
            marks={{
              2: <div>2</div>,
              10: <div>10</div>,
              20: <div>20</div>,
              30: <div>30</div>,
              40: <div>40</div>,
              50: <div>50</div>,
            }}
            onChange={setTabletCount}
          />
          <div>
            <Price>
              Total inklusive {tabletCount} Tablet-Lizenzen: CHF{' '}
              {totalProPrice(tabletCount)}.- / Mt.
            </Price>
          </div>
          <h2>Tablet Vermietung</h2>
          <p>
            Wir lassen Sie bei der Wahl Ihrer Tablets nicht alleine. Sie können
            die optimalen Modelle für Gaston Menu auch bei uns mieten.
          </p>

          <h3>Android-Tablets</h3>
          <p>
            Unsere Android-Tablets bieten Ihnen das beste
            Preis-Leistungs-Verhältnis. Sie Mieten die Tablets von uns.
            <br />
            Mindestmietdauer: 1 Jahr
          </p>
          <Price>{androidRentPrice}.- / Mt. / Tablet</Price>
          <h3>iPads mieten</h3>
          <p>
            Beste Qualität liegt Ihnen am Herzen? Dann mieten Sie Apple iPads
            von uns.
            <br />
            Mindestmietdauer: 1 Jahr
          </p>
          <Price>{iPadRentPrice}.- / Mt. / iPad</Price>

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
                    Ihre Speisekarte sollte in ihrem Restaurant auf keinen Fall
                    wie ein Fremdkörper wirken. Deshalb können Sie bei Gaston
                    komplett massgeschneiderte Designs entwerfen lassen, falls
                    ihnen keines der Standard-Designs gefällt. Dies geht weit
                    über das simple verändern von Farben und Bildern hinaus.
                  </p>
                  <Price>Ab CHF 1&apos;000.-</Price>
                </div>
              </div>
            </Container>
          </section>
        </>
      )}
    </>
  )
}

export default injectIntl(ContactPage)

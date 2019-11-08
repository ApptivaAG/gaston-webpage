import React, { useState } from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled from 'styled-components'
import Button from '../styles/Button'
import brush from '../images/paint-board-and-brush.svg'
import Container from '../styles/Container'
import tablet from '../images/tablet.svg'

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

const PricingPage = ({ intl }) => {
  const [tabletCount, setTabletCount] = useState(10)
  const [plan, setPlan] = useState('pro')

  const proPlanPrice = 39
  const licensePrice = 3
  const maxTablets = 50
  const iPadRentPrice = 29
  const androidRentPrice = 19
  const totalProPrice = tc => Math.max(0, tc - 10) * licensePrice + 39

  return (
    <>
      <h1>{intl.formatMessage({ id: 'pricing.heading' })}</h1>
      <h2>Gaston Menu</h2>
      <p>{intl.formatMessage({ id: 'pricing.subtitle' })}</p>
      <PlanWrapper>
        <Plan active={plan === 'trial'} onClick={() => setPlan('trial')}>
          <h3>Trial</h3>
          <PlanText>
            {intl.formatMessage({ id: 'pricing.plans.trial.text' })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage({ id: 'pricing.plans.trial.features' })}
          </PlanFeature>
          <Price>
            {intl.formatMessage({ id: 'pricing.plans.trial.price' })}
          </Price>
        </Plan>
        <Plan active={plan === 'pro'} onClick={() => setPlan('pro')}>
          <h3>Pro</h3>
          <PlanText>
            {intl.formatMessage({ id: 'pricing.plans.pro.text' })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage({ id: 'pricing.plans.pro.feature1' })}
            <br />
            {intl.formatMessage(
              {
                id: 'pricing.plans.pro.feature2',
              },
              { licensePrice }
            )}
          </PlanFeature>
          <Price>
            {intl.formatMessage(
              { id: 'pricing.plans.pro.price' },
              { proPlanPrice }
            )}
          </Price>
        </Plan>
        <Plan
          active={plan === 'enterprise'}
          onClick={() => setPlan('enterprise')}
        >
          <h3>Enterprise</h3>
          <PlanText>
            {intl.formatMessage({ id: 'pricing.plans.enterprise.text' })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage({ id: 'pricing.plans.enterprise.features' })}
          </PlanFeature>
          <Link to="/contact" activeClassName="active">
            <Button>
              {intl.formatMessage({ id: 'pricing.plans.enterprise.contact' })}
            </Button>
          </Link>
        </Plan>
      </PlanWrapper>
      {plan === 'pro' && (
        <>
          <h3>
            {intl.formatMessage({ id: 'pricing.plans.pro.howManyTablets' })}
          </h3>
          <Slider
            min={2}
            max={maxTablets}
            defaultValue={tabletCount}
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
              {intl.formatMessage(
                {
                  id: 'pricing.plans.pro.totalPrice',
                },
                {
                  tabletCount,
                  totalProPrice: totalProPrice(tabletCount),
                }
              )}
            </Price>
          </div>
          <div>
            <Link to={`/enrol?plan=pro&tablets=${tabletCount}`}>
              <Button>Pro-Plan jetzt bestellen</Button>
            </Link>
          </div>
        </>
      )}

      <section>
        <Container>
          <div
            css={`
              margin-top: 4em;
              display: flex;
              align-items: flex-start;
            `}
          >
            <div
              css={`
                flex: 1;
                background-image: url(${tablet});
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                height: 10em;
                margin-top: 2em;
              `}
            />
            <div
              css={`
                flex: 3;
                padding-left: 50px;
              `}
            >
              <h2>Tablet Vermietung</h2>
              <p>
                Wir lassen Sie bei der Wahl Ihrer Tablets nicht alleine. Sie
                können die optimalen Modelle für Gaston Menu auch bei uns
                mieten.
              </p>
              <h3>Android-Tablets</h3>
              <p>
                Unsere Android-Tablets bieten Ihnen das beste
                Preis-Leistungs-Verhältnis. Sie Mieten die Tablets von uns.
                <br />
                Mindestmietdauer: 1 Jahr
              </p>
              <Price>{androidRentPrice}.- / Mt. / Tablet</Price>
              <Link to="/contact" activeClassName="active">
                <Button>
                  {intl.formatMessage({
                    id: 'pricing.plans.enterprise.contact',
                  })}
                </Button>
              </Link>
              <h3>iPads mieten</h3>
              <p>
                Beste Qualität liegt Ihnen am Herzen? Dann mieten Sie Apple
                iPads von uns.
                <br />
                Mindestmietdauer: 1 Jahr
              </p>
              <Price>{iPadRentPrice}.- / Mt. / iPad</Price>

              <Link to="/contact" activeClassName="active">
                <Button>
                  {intl.formatMessage({
                    id: 'pricing.plans.enterprise.contact',
                  })}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div
            css={`
              display: flex;
              align-items: flex-start;
            `}
          >
            <div
              css={`
                flex: 1;
                background-image: url(${brush});
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                height: 10em;
                margin-top: 2em;
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
              <Price>Einmalig ab CHF 1&apos;000.-</Price>
              <Link to="/contact" activeClassName="active">
                <Button>
                  {intl.formatMessage({
                    id: 'pricing.plans.enterprise.contact',
                  })}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default injectIntl(PricingPage)

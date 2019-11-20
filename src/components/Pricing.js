import React, { useState } from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled, { css } from 'styled-components'
import DefaultButton from '../styles/Button'
import brush from '../images/paint-board-and-brush.svg'
import Container from '../styles/Container'
import tablet from '../images/tablet.svg'

const PlanWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Plan = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${p => p.theme.primary};
  background-color: ${p => (p.active ? p.theme.highlight : 'white')};

  h3 {
    font-size: 2em;
  }
`

const PlanText = styled.p`
  @media (min-width: 800px) {
    height: 7em;
  }
`

const PlanFeature = styled.p`
  flex: 1;
  @media (min-width: 800px) {
    height: 3em;
  }
`

const PriceTag = ({ price, unit }) => (
  <Price>
    {price}
    <PriceUnit>{unit}</PriceUnit>
  </Price>
)
const Price = styled.div`
  color: ${p => p.theme.primary};
  font-size: 1.8em;
  font-weight: bold;
  padding: 1em 0em;
`
const PriceUnit = styled.span`
  font-size: 50%;
`

const Button = styled(DefaultButton)`
  margin-bottom: 2em;
  ${p =>
    p.active &&
    css`
      background-color: ${p.theme.primary};
      color: white;
    `}
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
          <Button active={plan === 'trial'}>
            {plan === 'trial' ? 'Selected' : 'Select'}
          </Button>
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
          <PriceTag
            price={intl.formatMessage(
              { id: 'pricing.plans.pro.price' },
              { proPlanPrice }
            )}
            unit={intl.formatMessage({ id: 'pricing.plans.pro.priceUnit' })}
          />
          <Button active={plan === 'pro'}>
            {plan === 'pro' ? 'Selected' : 'Select'}
          </Button>
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
        <div
          css={`
            margin-top: 8em;
          `}
        >
          <h3
            css={`
              font-size: 1.4em;
            `}
          >
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
          <div
            css={`
              margin-top: 3em;
            `}
          >
            <h3 css="margin: 4em 0 0;">
              {intl.formatMessage(
                {
                  id: 'pricing.plans.pro.totalPrice',
                },
                { tabletCount }
              )}
            </h3>
            <PriceTag
              css="padding: 0 0 3em;"
              price={intl.formatMessage(
                { id: 'pricing.plans.pro.price' },
                { proPlanPrice: totalProPrice(tabletCount) }
              )}
              unit={intl.formatMessage({ id: 'pricing.plans.pro.priceUnit' })}
            />
          </div>
          <div>
            <Link to={`/enrol?plan=pro&tablets=${tabletCount}`}>
              <Button
                css={`
                  font-size: 1.6em;
                `}
              >
                {intl.formatMessage({ id: 'pricing.orderNow' })}
              </Button>
            </Link>
          </div>
        </div>
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
              <h2>{intl.formatMessage({ id: 'pricing.rent.title' })}</h2>
              <p>{intl.formatMessage({ id: 'pricing.rent.description' })}</p>
              <h3>
                {intl.formatMessage({ id: 'pricing.rent.android.title' })}
              </h3>
              <p>
                {intl.formatMessage({ id: 'pricing.rent.android.description' })}
                <br />
                {intl.formatMessage({
                  id: 'pricing.rent.android.minimalRental',
                })}
              </p>
              <PriceTag
                price={intl.formatMessage(
                  { id: 'pricing.rent.price' },
                  { rentPrice: androidRentPrice }
                )}
                unit={intl.formatMessage({ id: 'pricing.rent.priceUnit' })}
              />
              <Link to="/contact" activeClassName="active">
                <Button>
                  {intl.formatMessage({
                    id: 'pricing.plans.enterprise.contact',
                  })}
                </Button>
              </Link>
              <h3>{intl.formatMessage({ id: 'pricing.rent.iPad.title' })}</h3>
              <p>
                {intl.formatMessage({ id: 'pricing.rent.iPad.description' })}
                <br />
                {intl.formatMessage({
                  id: 'pricing.rent.iPad.minimalRental',
                })}
              </p>
              <PriceTag
                price={intl.formatMessage(
                  { id: 'pricing.rent.price' },
                  { rentPrice: iPadRentPrice }
                )}
                unit={intl.formatMessage({ id: 'pricing.rent.priceUnit' })}
              />

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
              <h2>{intl.formatMessage({ id: 'pricing.design.title' })}</h2>
              <p>{intl.formatMessage({ id: 'pricing.design.description' })}</p>
              <Price>
                {intl.formatMessage({ id: 'pricing.design.price' })}
              </Price>
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

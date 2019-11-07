import React, { useState } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled from 'styled-components'
import Button from '../styles/Button'

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

const Price = styled.div`
  color: ${p => p.theme.primary};
  font-size: 2em;
  font-weight: bold;
  padding: 1em 0em;
`

const ContactPage = ({ intl }) => {
  const [tabletCount, setTabletCount] = useState(10)
  const [plan, setPlan] = useState('pro')

  const licensePrice = 2
  const maxTablets = 50
  const iPadRentPrice = 80
  const androidRentPrice = 20
  const totalProPrice = tc => Math.max(0, tc - 10) * licensePrice + 39

  return (
    <div>
      <h2>{intl.formatMessage({ id: 'pricing.heading' })}</h2>
      <h3>Gaston Menu</h3>
      <p>
        Unsere Preise richten sich nach der Anzahl Tablets, die Sie in Ihrem
        Betrieb verwenden.
      </p>
      <PlanWrapper>
        <Plan active={plan === 'trial'} onClick={() => setPlan('trial')}>
          <h3>Trial</h3>
          <p>
            Unser Trial-Plan beinhaltet die Lizenz für ein Tablet. Ideal um
            Gaston Menu unverbindlich zu testen.
          </p>
          <p>Lizenzen inbegriffen: 1</p>
          <Price>CHF 0.- / Mt.</Price>
        </Plan>
        <Plan active={plan === 'pro'} onClick={() => setPlan('pro')}>
          <h3>Pro</h3>
          <p>
            Im Pro-Plan sind 10 Tablet-Lizenzen inbegriffen. Jedes weitere
            Tablet kostet Sie {licensePrice} Franken.
          </p>
          <p>Lizenzen inbegriffen: 10</p>
          <Price>CHF 39.- / Mt.</Price>
        </Plan>
        <Plan
          active={plan === 'enterprise'}
          onClick={() => setPlan('enterprise')}
        >
          <h3>Enterprise</h3>
          <p>
            Benötigen Sie mehr als 50 Tablets? Wir machen Ihnen gerne ein auf
            Sie zugeschnittenes Angebot.
          </p>
          <p>Lizenzen inbetriffen: unbegrenzt</p>
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
          <h3
            css={`
              margin-top: 3em;
            `}
          >
            Tablet Vermietung
          </h3>
          <p>
            Wir lassen Sie bei der Wahl Ihrer Tablets nicht alleine. Sie können
            die optimalen Modelle für Gaston Menu auch bei uns mieten.
          </p>

          <h3>Android-Tablets</h3>
          <p>
            Unsere Android-Tablets bieten Ihnen das beste
            Preis-Leistungs-Verhältnis. Sie Mieten die Tablets von uns. Defekte
            Geräte ersetzen wir für Sie.
          </p>
          <Price>{androidRentPrice}.- / Mt. / Tablet</Price>
          <h3>iPads mieten</h3>
          <p>
            Beste Qualität liegt Ihnen am Herzen? Dann mieten Sie Apple iPads
            von uns. Defekte Geräte ersetzen wir für Sie.
          </p>
          <Price>{iPadRentPrice}.- / Mt. / iPad</Price>
        </>
      )}
    </div>
  )
}

export default injectIntl(ContactPage)

import React, { useState } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Button from '../styles/Button'

const ContactPage = ({ intl }) => {
  const [tabletCount, setTabletCount] = useState(5)
  const licensePrice = tc => {
    if (tc <= 1) {
      return 0
    }
    if (tc < 20) {
      return 5
    }
    if (tc < 40) {
      return 4
    }
    return 3
  }
  const maxTablets = 51
  const iPadRentPrice = 20
  const androidRentPrice = 15
  const totalPrice = (tc, hardwareRentPrice) =>
    tc * (licensePrice(tc) + hardwareRentPrice)

  return (
    <div>
      <h2>{intl.formatMessage({ id: 'pricing.heading' })}</h2>
      <h3>Gaston Menu</h3>
      <p>
        Unsere Preise richten sich nach der Anzahl Tablets, die Sie in Ihrem
        Restaurant verwenden.
      </p>
      <h2>
        {tabletCount === maxTablets && '< '}
        {licensePrice(tabletCount)}.- / Tablet p. M.
      </h2>
      <h3>
        {tabletCount === 1 && 'Die erste Lizenz schenken wir Ihnen.'}
        {tabletCount !== 1 &&
          'Je mehr Tablets Sie einsetzen desto günstiger wird die einzelne Lizenz.'}
      </h3>
      <div>
        Anzahl Tablets für Ihren Betrieb:{' '}
        {tabletCount < maxTablets ? tabletCount : `>${tabletCount}`}
      </div>
      <Slider
        min={1}
        max={maxTablets}
        defaultValue={5}
        marks={{
          1: <div>1</div>,
          10: <div>10</div>,
          20: <div>20</div>,
          30: <div>30</div>,
          40: <div>40</div>,
          50: <div>50</div>,
        }}
        onChange={setTabletCount}
      />
      <h3>Tablet Vermietung</h3>
      <p>
        Wir lassen Sie bei der Wahl Ihrer Tablets nicht alleine. Sie können die
        optimalen Modell für Gaston Menu bei uns mieten oder die Tablets selber
        erwerben.
      </p>
      <ul
        css={`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          list-style: none;
          padding: 2em 0 1em;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            padding: 0 1em;
            border-width: 1px;
            border-style: solid;
            border-radius: 5px;
            border-color: ${p => p.theme.primary};
          }
        `}
      >
        <li>
          <h3>iPads mieten</h3>
          {tabletCount < maxTablets && (
            <h2>{totalPrice(tabletCount, iPadRentPrice)}.- / Mt.</h2>
          )}
          {tabletCount === maxTablets && <Button>Kontaktieren Sie uns</Button>}
        </li>
        <li>
          <h3>Android-Tablets mieten</h3>
          {tabletCount < maxTablets && (
            <h2>{totalPrice(tabletCount, androidRentPrice)}.- / Mt.</h2>
          )}
          {tabletCount === maxTablets && <Button>Kontaktieren Sie uns</Button>}
        </li>
        <li>
          <h3>Eigene Hardware</h3>
          {tabletCount < maxTablets && (
            <h2>{totalPrice(tabletCount, 0)}.- / Mt.</h2>
          )}
          {tabletCount === maxTablets && <Button>Kontaktieren Sie uns</Button>}
        </li>
      </ul>
    </div>
  )
}

export default injectIntl(ContactPage)

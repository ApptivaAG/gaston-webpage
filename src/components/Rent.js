import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import queryString from 'querystring'

import '../styles/rc-slider.css'
import tablet from '../images/tablet.svg'
import PriceTag from './PriceTag'
import Button from '../styles/Button'
import { androidRentPrice, iPadRentPrice } from './prices'
import Right from '../styles/Right'
import BackNext from '../styles/BackNext'
import Left from '../styles/Left'
import gtagEvent from '../lib/gtagEvent'

const trackEvent = tabletType => () =>
  gtagEvent('tablet_chosen', {
    event_category: 'order',
    event_label: tabletType,
  })

export default injectIntl(({ intl, location }) => {
  const params = queryString.parse(location.search.slice(1))
  const makeLink = rent =>
    `/pricing?${queryString.stringify({ ...params, step: 'enrol', rent })}`
  return (
    <>
      <div
        css={`
          display: flex;
          align-items: flex-start;
        `}
      >
        <div
          css={`
            @media (min-width: 600px) {
              flex: 1;
              background-image: url(${tablet});
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              height: 10em;
              margin-top: 2em;
              padding-right: 50px;
            }
          `}
        />
        <div
          css={`
            flex: 3;
          `}
        >
          <h2>{intl.formatMessage({ id: 'pricing.rent.title' })}</h2>
          <p>{intl.formatMessage({ id: 'pricing.rent.description' })}</p>
          <h3>{intl.formatMessage({ id: 'pricing.rent.android.title' })}</h3>
          <p>
            {intl.formatMessage({ id: 'pricing.rent.android.description' })}
            <br />
            {intl.formatMessage({
              id: 'pricing.rent.android.minimalRental',
            })}
          </p>
          <PriceTag price={androidRentPrice} />
          <Right>
            <Link
              to={makeLink('android')}
              activeClassName="active"
              onClick={trackEvent('android')}
            >
              <Button>
                {intl.formatMessage({
                  id: 'pricing.rent.android.continue',
                })}
              </Button>
            </Link>
          </Right>
          <h3>{intl.formatMessage({ id: 'pricing.rent.iPad.title' })}</h3>
          <p>
            {intl.formatMessage({ id: 'pricing.rent.iPad.description' })}
            <br />
            {intl.formatMessage({
              id: 'pricing.rent.iPad.minimalRental',
            })}
          </p>
          <PriceTag price={iPadRentPrice} />

          <Right>
            <Link
              to={makeLink('ipad')}
              activeClassName="active"
              onClick={trackEvent('ipad')}
            >
              <Button>
                {intl.formatMessage({
                  id: 'pricing.rent.iPad.continue',
                })}
              </Button>
            </Link>
          </Right>
        </div>
      </div>
      <BackNext>
        <Right>
          <Link to={makeLink('none')} onClick={trackEvent('none')}>
            <Button>
              {intl.formatMessage({ id: 'pricing.rent.noTablets' })}
            </Button>
          </Link>
        </Right>
        <Left>
          <Button onClick={() => window.history.back()}>
            {intl.formatMessage({ id: 'pricing.back' })}
          </Button>
        </Left>
      </BackNext>
    </>
  )
})

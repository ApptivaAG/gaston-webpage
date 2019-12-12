import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import queryString from 'querystring'
import '../styles/rc-slider.css'
import styled, { css } from 'styled-components'
import tablet from '../images/tablet.svg'
import PriceTag from './PriceTag'
import DefaultButton from '../styles/Button'
import { androidRentPrice, iPadRentPrice } from './prices'

const Button = styled(DefaultButton)`
  margin-bottom: 2em;
  ${p =>
    p.active &&
    css`
      background-color: ${p.theme.primary};
      color: white;
    `}
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  a,
  button {
    width: 100%;
  }
  @media (min-width: 600px) {
    a {
      flex: 0 1 50%;
    }
  }
`

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
          <PriceTag
            price={intl.formatMessage(
              { id: 'pricing.rent.price' },
              { rentPrice: androidRentPrice }
            )}
            unit={intl.formatMessage({ id: 'pricing.rent.priceUnit' })}
          />
          <Right>
            <Link to={makeLink('android')} activeClassName="active">
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
          <PriceTag
            price={intl.formatMessage(
              { id: 'pricing.rent.price' },
              { rentPrice: iPadRentPrice }
            )}
            unit={intl.formatMessage({ id: 'pricing.rent.priceUnit' })}
          />

          <Right>
            <Link to={makeLink('ipad')} activeClassName="active">
              <Button>
                {intl.formatMessage({
                  id: 'pricing.rent.iPad.continue',
                })}
              </Button>
            </Link>
          </Right>
        </div>
      </div>
      <div
        css={`
          margin-top: 2em;
          @media (min-width: 600px) {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
          }
        `}
      >
        <Right
          css={`
            flex: 3;
          `}
        >
          <Link to={makeLink('none')}>
            <Button>
              {intl.formatMessage({ id: 'pricing.rent.noTablets' })}
            </Button>
          </Link>
        </Right>
        <div
          css={`
            display: block;
            flex: 1;
            margin-right: 50px;
          `}
        >
          <Button onClick={() => window.history.back()}>
            {intl.formatMessage({ id: 'pricing.back' })}
          </Button>
        </div>
      </div>
    </>
  )
})

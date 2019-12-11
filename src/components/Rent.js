import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import queryString from "querystring"
import '../styles/rc-slider.css'
import styled,{css} from 'styled-components'
import tablet from '../images/tablet.svg'
import PriceTag from "./PriceTag"
import DefaultButton from "../styles/Button"

const iPadRentPrice = 29
const androidRentPrice = 19

const Button = styled(DefaultButton)`
  margin-bottom: 2em;
  ${p =>
    p.active &&
    css`
      background-color: ${p.theme.primary};
      color: white;
    `}
`

export default injectIntl(({intl,location})=>{
  const params = queryString.parse(location.search.slice(1))
  const makeLink = rent=>`/pricing?${queryString.stringify({...params,step:"design",rent})}`
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
          <Link to={makeLink("android")} activeClassName="active">
            <Button>
              {intl.formatMessage({
                id: 'pricing.rent.select',
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

          <Link to={makeLink("ipad")} activeClassName="active">
            <Button>
              {intl.formatMessage({
                id: 'pricing.rent.select',
              })}
            </Button>
          </Link>
        </div>
      </div>
      <div
        css={`
          display:flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <Button onClick={()=>window.history.back()}>{intl.formatMessage({id: 'pricing.back'})}</Button>
        <Link to={makeLink("none")}>
          <Button>{intl.formatMessage({id: 'pricing.rent.noTablets'})}</Button>
        </Link>
      </div>
    </>
  )
})


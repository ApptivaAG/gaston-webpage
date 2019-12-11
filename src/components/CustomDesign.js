import React from "react"
import styled,{css} from "styled-components"
import queryString from "querystring"
import { injectIntl, Link } from 'gatsby-plugin-intl'
import brush from '../images/paint-board-and-brush.svg'
import {Price} from "./PriceTag"
import DefaultButton from "../styles/Button"

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
  const makeLink = design=>`/pricing?${queryString.stringify({...params,step:"enrol",design})}`
  return(
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
        </div>
      </div>
      <div
        css={`
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top:3em;
        `}
      >
        <Button onClick={()=>window.history.back()}>{intl.formatMessage({id: 'pricing.back'})}</Button>
        <div>
          <Link
            to={makeLink("1")}
            activeClassName="active"
            css={`
              margin-right:1em
            `}
          >
            <Button>
              {intl.formatMessage({
                id: 'pricing.design.useCustomDesign',
              })}
            </Button>
          </Link>
          <Link to={makeLink("0")}>
            <Button>{intl.formatMessage({id: 'pricing.design.noCustomDesign'})}</Button>
          </Link>
        </div>
      </div>
    </>
  )
})


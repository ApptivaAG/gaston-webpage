import React from 'react'
import styled from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'

export default injectIntl(({ price, intl }) => (
  <Price>
    {price}
    <PriceUnit>
      {intl.formatMessage({ id: 'pricing.plans.pro.priceUnit' })}
    </PriceUnit>
  </Price>
))
export const Price = styled.div`
  color: ${p => p.theme.primary};
  font-size: 1.8em;
  font-weight: bold;
  padding: 1em 0em;
`
export const PriceUnit = styled.span`
  font-size: 50%;
`

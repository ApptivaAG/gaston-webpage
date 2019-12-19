import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const Thanks = ({ intl }) => (
  <>
    <h2>{intl.formatMessage({ id: 'thanks.title' })}</h2>
    <p>{intl.formatMessage({ id: 'thanks.instructions' })}</p>
  </>
)

export default injectIntl(Thanks)

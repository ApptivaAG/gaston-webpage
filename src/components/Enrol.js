import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import queryString from 'querystring'
import { injectIntl } from 'gatsby-plugin-intl'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { navigate } from 'gatsby-plugin-intl/link'

import DefaultButton from '../styles/Button'
import PriceTag from './PriceTag'
import { totalProPrice, tabletPrice } from './prices'
import BackNext from '../styles/BackNext'
import Right from '../styles/Right'
import Left from '../styles/Left'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const defaultState = params => ({
  email: '',
  name: '',
  restaurant: '',
  plan: params.plan,
  tablets: params.tablets,
  rent: params.rent,
  design: '',
  message: '',
})

const FormLabel = styled.label``

const sharedInput = css`
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0 1em 0;
  outline: none;
  border: 1px solid ${p => p.theme.primary};
  border-radius: 2px;
  box-sizing: border-box;
`

const Input = styled.input`
  ${sharedInput};
`
const Textarea = styled.textarea`
  ${sharedInput};
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

const Checkbox = ({ ...props }) => (
  <Input
    css={`
      display: inline;
      width: auto;
      margin-right: 2em;
      transform: scale(2) translate(2px, -2px);
    `}
    type="checkbox"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

const trackEvent = value => {
  // Lets track that custom click
  trackCustomEvent({
    // string - required - The object that was interacted with (e.g.video)
    category: 'Submit form',
    // string - required - Type of interaction (e.g. 'play')
    action: 'Click',
    // number - optional - Numeric value associated with the event. (e.g. A product ID)
    value: JSON.stringify(value),
  })
}

export default injectIntl(({ location, intl }) => {
  const params = queryString.parse(location.search.slice(1))
  const [formValues, setFormValues] = useState(defaultState(params))
  const makeLink = () =>
    `/pricing?${queryString.stringify({
      ...params,
      step: 'thanks',
    })}`

  const handleSubmit = e => {
    const { email, name, restaurant } = formValues
    if (email === '' || name === '' || restaurant === '') {
      /* eslint-disable-next-line no-alert */
      alert(intl.formatMessage({ id: 'enrol.failure' }))
    } else if (formValues['bot-field'] === undefined) {
      trackEvent(formValues)
      const body = encode({
        'form-name': 'enrol',
        subject: 'Gaston Abo-Abschluss',
        ...formValues,
      })
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then(response => {
          /* eslint-disable-next-line no-alert */
          if (response.status === 200) {
            setFormValues(defaultState(params))
            navigate(makeLink())
          } else {
            throw new Error('Not 200 response')
          }
        })
        .catch(error => {
          /* eslint-disable-next-line no-console */
          console.log('Error', error)
          /* eslint-disable-next-line no-alert */
          alert(intl.formatMessage({ id: 'enrol.sorry' }))
        })
    }
    e.preventDefault()
  }

  const handleTextChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
  }

  return (
    <>
      <h1>{intl.formatMessage({ id: `enrol.title.${params.plan}` })}</h1>
      <p>{intl.formatMessage({ id: `enrol.description.${params.plan}` })}</p>
      <form
        name="enrol"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p hidden>
          <label htmlFor="bot-field">
            Nicht ausfüllen:{' '}
            <input type="text" name="bot-field" onChange={handleTextChange} />
          </label>
          <input type="text" name="subject" />
          <input type="text" name="plan" />
          <input type="text" name="rent" />
          <input type="text" name="tablets" />
        </p>

        <p>
          {intl.formatMessage({ id: 'enrol.plan' })}:{' '}
          <strong>
            {intl.formatMessage({ id: `pricing.plans.${params.plan}.name` })}
          </strong>
        </p>
        {params.plan === 'pro' && (
          <>
            <p>
              {intl.formatMessage({ id: 'enrol.tabletCount' })}:{' '}
              <strong>{params.tablets}</strong>
            </p>
            <p>
              {intl.formatMessage({ id: 'enrol.rent' })}:{' '}
              <strong>
                {intl.formatMessage({ id: `enrol.rentTypes.${params.rent}` })}
              </strong>
            </p>

            <PriceTag
              price={intl.formatMessage(
                { id: 'pricing.plans.pro.price' },
                {
                  proPlanPrice: totalProPrice(
                    params.tablets,
                    tabletPrice(params.rent)
                  ),
                }
              )}
              unit={intl.formatMessage({ id: 'pricing.plans.pro.priceUnit' })}
            />
          </>
        )}
        <h2>{intl.formatMessage({ id: 'enrol.yourDetails' })}</h2>
        <p>
          <FormLabel htmlFor="name">
            {intl.formatMessage({ id: 'enrol.YourName' })}
            <Input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleTextChange}
            />
          </FormLabel>
        </p>
        <p>
          <FormLabel htmlFor="email">
            {intl.formatMessage({ id: 'enrol.YourEMail' })}
            <Input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleTextChange}
            />
          </FormLabel>
        </p>
        <p>
          <FormLabel htmlFor="restaurant">
            {intl.formatMessage({ id: 'enrol.YourRestaurant' })}
            <Input
              type="restaurant"
              name="restaurant"
              value={formValues.restaurant}
              onChange={handleTextChange}
            />
          </FormLabel>
        </p>
        <p>
          <FormLabel htmlFor="message">
            {intl.formatMessage({ id: 'enrol.YourMessage' })}
            <Textarea
              name="message"
              value={formValues.message}
              onChange={handleTextChange}
            />
          </FormLabel>
        </p>
        <p
          css={`
            margin: 2.5em 0 4em;
          `}
        >
          <FormLabel htmlFor="design">
            <Checkbox
              name="design"
              value={formValues.design}
              onChange={handleCheckboxChange}
            />
            {intl.formatMessage({ id: 'enrol.customDesign' })}
          </FormLabel>
        </p>

        <BackNext>
          <Right
            css={`
              flex: 3;
            `}
          >
            <Button type="submit">
              {intl.formatMessage({ id: 'enrol.submit' })}
            </Button>
          </Right>
          <Left>
            <Button type="button" onClick={() => window.history.back()}>
              {intl.formatMessage({ id: 'pricing.back' })}
            </Button>
          </Left>
        </BackNext>
      </form>
    </>
  )
})

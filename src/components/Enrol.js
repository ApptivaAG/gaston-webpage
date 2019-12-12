import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import queryString from 'querystring'
import { injectIntl } from 'gatsby-plugin-intl'
import DefaultButton from '../styles/Button'
import PriceTag from './PriceTag'
import {
  androidRentPrice,
  iPadRentPrice,
  licensePrice,
  proPlanPrice,
} from './prices'

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
  design: params.design,
  message: '',
})

const totalProPrice = (tc, tabletPrice = 0) =>
  Math.max(0, tc - 10) * licensePrice + tc * tabletPrice + proPlanPrice

const tabletPrice = rent => {
  switch (rent) {
    case 'ipad':
      return iPadRentPrice

    case 'android':
      return androidRentPrice

    default:
      return 0
  }
}

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

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  a,
  button {
    width: 100%;
  }
  @media (min-width: 600px) {
    button {
      flex: 0 1 50%;
    }
  }
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

export default injectIntl(({ location, intl }) => {
  const params = queryString.parse(location.search.slice(1))
  const [formValues, setFormValues] = useState(defaultState(params))

  const handleSubmit = e => {
    const { email, name, restaurant } = formValues
    if (email === '' || name === '' || restaurant === '') {
      /* eslint-disable-next-line no-alert */
      alert(intl.formatMessage({ id: 'enrol.failure' }))
    } else if (formValues['bot-field'] === undefined) {
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
        .then(() => {
          /* eslint-disable-next-line no-alert */
          alert(intl.formatMessage({ id: 'enrol.thanks' }))
          setFormValues(defaultState(params))
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

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
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
            <input type="text" name="bot-field" onChange={handleChange} />
          </label>
          <input type="text" name="plan" onChange={handleChange} />
          <input type="text" name="tablets" onChange={handleChange} />
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </FormLabel>
        </p>
        <p>
          <FormLabel htmlFor="message">
            {intl.formatMessage({ id: 'enrol.YourMessage' })}
            <Textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </FormLabel>
        </p>
        <p
          css={`
            margin: 2.5em 0 4em;
          `}
        >
          <FormLabel htmlFor="name">
            <Checkbox
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {intl.formatMessage({ id: 'enrol.customDesign' })}
          </FormLabel>
        </p>

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
            <Button type="submit">
              {intl.formatMessage({ id: 'enrol.submit' })}
            </Button>
          </Right>
          <div
            css={`
              display: block;
              flex: 1;
              margin-right: 50px;
            `}
          >
            <Button type="button" onClick={() => window.history.back()}>
              {intl.formatMessage({ id: 'pricing.back' })}
            </Button>
          </div>
        </div>
      </form>
    </>
  )
})

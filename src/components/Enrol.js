import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { injectIntl } from 'gatsby-plugin-intl'
import { navigate } from 'gatsby-plugin-intl/link'
import fetch from 'unfetch'

import { graphql, useStaticQuery } from 'gatsby'
import { Button as DefaultButton, BackNext, Right, Left } from '../styles'
import PriceTag from './PriceTag'
import { totalProPrice } from './prices'
import gtagEvent from '../lib/gtagEvent'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const defaultState = (plan, tablets, rent, locale) => ({
  email: '',
  name: '',
  restaurant: '',
  website: '',
  plan,
  tablets,
  rent,
  design: '',
  message: '',
  locale,
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

const trackEvent = value =>
  gtagEvent('conversion', {
    send_to: 'AW-869564557/OZlVCMz0sLgBEI2B0p4D',
    value,
    event_category: 'order',
    currency: 'CHF',
    transaction_id: '',
  })

const query = graphql`
  {
    items: allMarkdownRemark(sort: { fields: frontmatter___sort, order: ASC }) {
      nodes {
        frontmatter {
          id
          name
          price {
            oneYear
            twoYears
          }
        }
      }
    }
  }
`

export default injectIntl(
  ({ plan, tablets = undefined, rent = undefined, intl }) => {
    const [formValues, setFormValues] = useState(
      defaultState(plan, tablets, rent, intl.locale)
    )

    const tabletsModels = useStaticQuery(query).items.nodes.map(
      ({ frontmatter }) => frontmatter
    )

    const { name: tabletName, price: tabletPrice } =
      rent !== 'none' &&
      rent !== undefined &&
      tabletsModels.find(({ id }) => id === rent)

    const handleSubmit = e => {
      const { email, name, restaurant } = formValues
      if (email === '' || name === '' || restaurant === '') {
        /* eslint-disable-next-line no-alert */
        alert(intl.formatMessage({ id: 'enrol.failure' }))
      } else if (formValues['bot-field'] === undefined) {
        trackEvent(totalProPrice(formValues.tablets, formValues.rent))
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
              setFormValues(defaultState(plan, tablets, rent))
              navigate('/pricing/thanks/')
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
        <h2 css="margin-top: 0">
          {intl.formatMessage({ id: `enrol.title.${plan}` })}
        </h2>
        <p>{intl.formatMessage({ id: `enrol.description.${plan}` })}</p>
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
            <input type="text" name="locale" />
          </p>
          <div
            css={`
              padding: 2em;
              background: #eee;
              border-radius: 0.5em;
              p {
                margin: 0.2em 0;
              }
            `}
          >
            <p>
              {intl.formatMessage({ id: 'enrol.plan' })}:{' '}
              <strong>
                {intl.formatMessage({ id: `pricing.plans.${plan}.name` })}
              </strong>
            </p>
            {plan === 'pro' && (
              <>
                <p>
                  {intl.formatMessage({ id: 'enrol.tabletCount' })}:{' '}
                  <strong>{tablets}</strong>
                </p>
                <p>
                  {intl.formatMessage({ id: 'enrol.rent' })}:{' '}
                  <strong>{tabletName}</strong>
                </p>

                <PriceTag
                  css="padding: 0;"
                  price={totalProPrice(tablets, tabletPrice.oneYear)}
                />
              </>
            )}
          </div>
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
            <FormLabel htmlFor="website">
              {intl.formatMessage({ id: 'enrol.YourWebsite' })}
              <Input
                type="website"
                name="website"
                value={formValues.website}
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
  }
)

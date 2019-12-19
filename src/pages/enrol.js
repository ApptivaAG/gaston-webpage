import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import queryString from 'querystring'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Button from '../styles/Button'

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
  message: '',
})

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

const EnrolPage = ({ location, intl }) => {
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
          alert(intl.formatMessage({ id: EnrolPage.sorry }))
        })
    }
    e.preventDefault()
  }

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
  }

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'enrol.title' })} />
      <Container>
        <section>
          <h1>{intl.formatMessage({ id: `enrol.title.${params.plan}` })}</h1>
          <p>
            {intl.formatMessage({ id: `enrol.description.${params.plan}` })}
          </p>
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
              <input type="text" name="subject" />
              <input type="text" name="plan" onChange={handleChange} />
              <input type="text" name="tablets" onChange={handleChange} />
            </p>
            <p>
              {intl.formatMessage({ id: 'enrol.plan' })}:{' '}
              <strong>{params.plan}</strong>
            </p>
            {params.plan === 'pro' && (
              <p>
                {intl.formatMessage({ id: 'enrol.tabletCount' })}:{' '}
                <strong>{params.tablets}</strong>
              </p>
            )}
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
              <FormLabel htmlFor="design">
                <Checkbox
                  name="design"
                  value={formValues.design}
                  onChange={handleCheckboxChange}
                />
                {intl.formatMessage({ id: 'enrol.customDesign' })}
              </FormLabel>
            </p>
            <p>
              <Button type="submit">
                {intl.formatMessage({ id: 'enrol.submit' })}
              </Button>
            </p>
          </form>
        </section>
      </Container>
    </Layout>
  )
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

export default injectIntl(EnrolPage)

import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import queryString from 'querystring'
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

const EnrolPage = ({ location }) => {
  const params = queryString.parse(location.search.slice(1))
  const [formValues, setFormValues] = useState(defaultState(params))

  const handleSubmit = e => {
    const { email, name, restaurant } = formValues
    if (email === '' || name === '' || restaurant === '') {
      /* eslint-disable-next-line no-alert */
      alert('Ups, ein zwingendes Feld ist noch nicht ausgefüllt.')
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
          alert(
            'Danke! Wir haben Ihre Nachricht erhalten und melden uns so bald wie möglich bei Ihnen.'
          )
          setFormValues(defaultState(params))
        })
        .catch(error => {
          /* eslint-disable-next-line no-console */
          console.log('Error', error)
          /* eslint-disable-next-line no-alert */
          alert(
            `Leider hat dies nicht funktioniert. Entschuldigen Sie die Umstände. Wenn Sie uns auf info@apptiva.ch ein Email schicken melden wir uns sofort bei Ihnen.`
          )
        })
    }
    e.preventDefault()
  }

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <SEO title="Enrol" />
      <Container>
        <section>
          <h1>Pro-Plan bestellen</h1>
          <p>
            Vielen Dank für Ihr Interesse. Bitte ergänzen Sie die folgenden
            Angaben, damit wir Ihnen eine Offerte zustellen können.
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
              <input type="text" name="plan" onChange={handleChange} />
              <input type="text" name="tablets" onChange={handleChange} />
            </p>
            <p>
              Abo-Plan: <strong>{params.plan}</strong>
            </p>
            <p>
              Anzahl Tablets: <strong>{params.tablets}</strong>
            </p>
            <p>
              <FormLabel htmlFor="name">
                Ihr Name (Pflichtfeld){' '}
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
                Ihre Email-Adresse (Pflichtfeld){' '}
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
                Ihr Restaurant (Pflichtfeld){' '}
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
                Möchten Sie uns noch etwas sagen?{' '}
                <Textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </FormLabel>
            </p>
            <p>
              <Button type="submit">Offerte anfordern</Button>
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

export default EnrolPage

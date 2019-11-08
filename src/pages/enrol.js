import React, { useState } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import Button from '../styles/Button'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const EnrolPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    message: '',
  })

  const handleSubmit = e => {
    if (formValues.email === '' || formValues.name === '') {
      /* eslint-disable-next-line no-alert */
      alert('Ups, ein zwingendes Feld ist noch nicht ausgefüllt.')
    } else if (formValues['bot-field'] === undefined) {
      const body = encode({
        'form-name': 'enrol',
        subject: 'Kontaktformular apptiva.ch',
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
          setFormValues({
            email: '',
            name: '',
            message: '',
          })
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
    setFormValues({ [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <SEO title="Enrol" />
      <Container>
        <section>
          <h1>Pro-Plan bestellen</h1>
          <p>Vielen Dank für Ihr Interesse. Bitte füllen Sie </p>
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
            </p>
            <p>
              <label htmlFor="name">
                Ihr Name (Pflichtfeld){' '}
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label htmlFor="email">
                Ihre Email-Adresse (Pflichtfeld){' '}
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label htmlFor="message">
                Ihre Nachricht{' '}
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <Button type="submit">Senden</Button>
            </p>
          </form>
        </section>
      </Container>
    </Layout>
  )
}

export default EnrolPage

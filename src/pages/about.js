import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { theme, Container, H1 } from '../styles'

const EmployeeList = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const EmployeeContainer = styled.div`
  width: 12rem;
  margin: 20px;
  text-align: center;

  .gatsby-image-wrapper {
    width: 100%;
    border-radius: 1000px;

    box-shadow: 0 0 10px 0px #ccc;
  }
`
const EmployeeName = styled.h3`
  color: ${theme.primary};
  margin-bottom: 0px;
`
const EmployeePosition = styled.span``

const About = () => {
  const employees = [
    {
      name: 'Patrik Stutz',
      position: 'software-developer',
      image: <StaticImage src="../images/team/patrik-stutz-prev.jpg" />,
    },
    {
      name: 'Philip Schoenholzer',
      position: 'product-developer',
      image: <StaticImage src="../images/team/philip-schoenholzer-prev.jpg" />,
    },
    {
      name: 'Roman Schaller',
      position: 'software-developer',
      image: <StaticImage src="../images/team/roman-schaller-prev.jpg" />,
    },
    {
      name: 'Renato Wasescha',
      position: 'consultant',
      image: <StaticImage src="../images/team/renato-wasescha-prev.jpg" />,
    },
    {
      name: 'Linus Huesler',
      position: 'consultant',
      image: <StaticImage src="../images/team/linus-huesler-prev.jpg" />,
    },
    {
      name: 'Markus Tanner',
      position: 'consultant',
      image: <StaticImage src="../images/team/markus-tanner-prev.jpg" />,
    },
    {
      name: 'David Decker',
      position: 'trainee',
      image: <StaticImage src="../images/team/david-decker-prev.jpg" />,
    },
  ]

  return (
    <Layout>
      <SEO title="about us" />
      <Container>
        <H1>
          <FormattedMessage id="header.about" />
        </H1>
        <p>
          <FormattedHTMLMessage id="about.content" />
        </p>
        <EmployeeList>
          {employees.map(({ name, image, position }) => (
            <EmployeeContainer key={name}>
              {image}
              <EmployeeName>{name}</EmployeeName>
              <EmployeePosition>
                <FormattedMessage id={`about.${position}`} />
              </EmployeePosition>
            </EmployeeContainer>
          ))}
        </EmployeeList>
      </Container>
    </Layout>
  )
}

export default About

import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import theme from '../styles/theme'

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
`
const EmployeeImage = styled(Img)`
  width: 100%;
  border-radius: 1000px;

  box-shadow: 0 0 10px 0px #ccc;
`
const EmployeeName = styled.h3`
  color: ${theme.primary};
  margin-bottom: 0px;
`
const EmployeePosition = styled.span``

const Employee = ({ employee: { name, position, image } }) => (
  <EmployeeContainer key={name}>
    <EmployeeImage fixed={image.childImageSharp.fixed} />
    <EmployeeName>{name}</EmployeeName>
    <EmployeePosition>
      <FormattedMessage id={`about.${position}`} />
    </EmployeePosition>
  </EmployeeContainer>
)

export default () => {
  const {
    david,
    linus,
    markus,
    patrik,
    philip,
    renato,
    roman,
  } = useStaticQuery(graphql`
    query {
      david: file(relativePath: { eq: "team/david-decker-prev.jpg" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linus: file(relativePath: { eq: "team/linus-huesler-prev.jpg" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      markus: file(relativePath: { eq: "team/markus-tanner-prev.jpg" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      patrik: file(relativePath: { eq: "team/patrik-stutz-prev.jpg" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      philip: file(relativePath: { eq: "team/philip-schoenholzer-prev.jpg" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      renato: file(relativePath: { eq: "team/renato-wasescha-prev.jpg" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      roman: file(relativePath: { eq: "team/roman-schaller-prev.jpg" }) {
        childImageSharp {
          fixed(width: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const employees = [
    {
      name: 'Patrik Stutz',
      position: 'software-developer',
      image: patrik,
    },
    {
      name: 'Philip Schoenholzer',
      position: 'product-developer',
      image: philip,
    },
    {
      name: 'Roman Schaller',
      position: 'software-developer',
      image: roman,
    },
    {
      name: 'Renato Wasescha',
      position: 'consultant',
      image: renato,
    },
    {
      name: 'Linus Huesler',
      position: 'consultant',
      image: linus,
    },
    {
      name: 'Markus Tanner',
      position: 'consultant',
      image: markus,
    },
    {
      name: 'David Decker',
      position: 'trainee',
      image: david,
    },
  ]

  return (
    <Layout>
      <SEO title="about us" />
      <Container>
        <h2>
          <FormattedMessage id="header.about" />
        </h2>
        <p>
          <FormattedHTMLMessage id="about.content" />
        </p>
        <EmployeeList>
          {employees.map(employee => (
            <Employee employee={employee} />
          ))}
        </EmployeeList>
      </Container>
    </Layout>
  )
}

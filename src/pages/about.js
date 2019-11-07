import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import styled from "styled-components"

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'
import theme from "../styles/theme"

import linus from "../images/linus-huesler-prev.jpg"
import markus from "../images/markus-tanner-prev.jpg"
import patrik from "../images/patrik-stutz-prev.jpg"
import philip from "../images/philip-schoenholzer-prev.jpg"
import renato from "../images/renato-wasescha-prev.jpg"
import roman from "../images/roman-schaller-prev.jpg"
import david from "../images/david-decker-prev.jpg"
import { FormattedHTMLMessage } from 'react-intl'

const employees = [
  {
    name: "Linus Huesler",
    position: "software-developer",
    image: linus
  },{
    name: "Markus Tanner",
    position: "software-developer",
    image: markus
  },{
    name: "Patrik Stutz",
    position: "software-developer",
    image: patrik
  },{
    name: "Philip Schoenholzer",
    position: "software-developer",
    image: philip
  },{
    name: "Renato Wasescha",
    position: "software-developer",
    image: renato
  },{
    name: "Roman Schaller",
    position: "software-developer",
    image: roman
  },{
    name: "David Decker",
    position: "trainee",
    image: david
  }
]

const EmployeeList = styled.div`
  margin-top:60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const EmployeeContainer = styled.div`
  width: 12rem;
  margin: 20px;
  text-align:center;
`
const EmployeeImage = styled.img`
  width: 100%;
  border-radius:1000px;
  
  box-shadow: 0 0 10px 0px #ccc;
`
const EmployeeName = styled.h3`
  color: ${theme.primary};
  margin-bottom:0px;
`
const EmployeePosition = styled.span`
`

const Employee = ({employee:{name,position,image}})=>(
  <EmployeeContainer>
    <EmployeeImage src={image} />
    <EmployeeName>{name}</EmployeeName>
    <EmployeePosition>
      <FormattedMessage id={`about.${position}`} />
    </EmployeePosition>
  </EmployeeContainer>
)

export default ()=>{
  return (
    <Layout>
      <SEO title="about us" />
      <Container>
        <h2><FormattedMessage id="header.about" /></h2>
        <p>
          <FormattedHTMLMessage id="about.content" />
        </p>
        <EmployeeList>
          {employees.map(employee=>(
            <Employee employee={employee} />
          ))}
        </EmployeeList>
      </Container>
    </Layout>
  )
}
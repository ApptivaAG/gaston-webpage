import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../styles/Container'

const BlogPost = ({ data }) => (
  <Layout>
    <SEO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
      image={data.markdownRemark.frontmatter.image.childImageSharp}
    />
    <Container
      css={`
        padding-bottom: 6em;
      `}
    >
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Style dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Container>
  </Layout>
)

const Style = styled.div`
  h2,
  h3 {
    margin-top: 2em;
  }
  ul li {
    margin-bottom: 1rem;
  }
  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;
  }
`

export default BlogPost

export const query = graphql`
  query BlogPostByID($lang: String!, $slug: String!) {
    markdownRemark(frontmatter: { lang: { eq: $lang }, slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        slug
        lang
        description
        image {
          childImageSharp {
            gatsbyImageData(width: 512, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    }
  }
`

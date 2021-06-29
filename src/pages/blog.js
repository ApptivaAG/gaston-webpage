/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Button from '../styles/Button'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container, Right } from '../styles'

const BlogList = ({ blogs }) => (
  <>
    {blogs.map((blog) => (
      <BlogListEntry key={blog.node.frontmatter.slug} blog={blog} />
    ))}
  </>
)

const BlogListEntry = ({ blog }) => (
  <>
    <BlogTitle>{blog.node.frontmatter.title}</BlogTitle>
    <Date>{blog.node.frontmatter.date}</Date>
    <Lead>{blog.node.excerpt}</Lead>
    <div css="text-align: right;">
      <Link to={`/blog/${blog.node.frontmatter.slug}`}>
        <Button>
          <FormattedMessage id="blog.readmore" />
        </Button>
      </Link>
    </div>
  </>
)

const BlogPage = ({ intl, data }) => {
  const blogs = data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.frontmatter.lang === intl.locale
  )
  return (
    <Layout>
      <SEO title="Blog" />
      <Container
        css={`
          padding-bottom: 6em;
        `}
      >
        <h1>Blog</h1>
        <BlogList blogs={blogs} />
      </Container>
    </Layout>
  )
}

const Lead = styled.div`
  margin-bottom: 1em;
`
const Date = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 1em;
  opacity: 0.7;
`
const BlogTitle = styled.h2`
  margin-bottom: 0;
`
export default injectIntl(BlogPage)

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            slug
            lang
          }
        }
      }
    }
  }
`

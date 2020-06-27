import React from 'react'
import { graphql } from 'gatsby'

import PostLink from 'components/PostLink'
import Title from 'components/Title'
import Section from 'components/Section'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

import styled from 'styled-components'

const PostsWrapper = styled.div`
  margin-bottom: 15px;
`

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.category !== 'reports') // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const Reports = edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.category === 'reports') // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Blog" />
      <Section>
        <Title>ARTICLES</Title>
        <PostsWrapper>{Posts}</PostsWrapper>
        <Title>CONFERENCES REPORTS</Title>
        <PostsWrapper>{Reports}</PostsWrapper>
      </Section>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            category
          }
        }
      }
    }
  }
`

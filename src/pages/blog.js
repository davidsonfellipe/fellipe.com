import React from 'react'
import { graphql } from 'gatsby'

import Title from 'components/Title'
import Section from 'components/Section'
import Layout from 'components/Layout'
import ListItemLink from 'components/ListItemLink'
import SEO from 'components/SEO'

import styled from 'styled-components'

const PostsWrapper = styled.div`
  margin-bottom: 15px;
`

const SubTitle = styled(Title)`
  font-size: 2rem;
`

const filterPostsByLang = (edges, lang) => {
  return edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.lang === lang)
    .map(edge => (
      <ListItemLink
        url={edge.node.frontmatter.path}
        headline={edge.node.frontmatter.date}
        headlineSecondary={''}
        title={edge.node.frontmatter.title}
      />
    ))
}

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const PostsInEnglish = filterPostsByLang(edges, 'en')
  const PostsInPortuguese = filterPostsByLang(edges, 'pt')

  return (
    <Layout>
      <SEO title="Blog" />
      <Section>
        <Title>Blog</Title>
        <SubTitle>articles in english</SubTitle>
        <PostsWrapper>{PostsInEnglish}</PostsWrapper>
        <SubTitle>articles in portuguese</SubTitle>
        <PostsWrapper>{PostsInPortuguese}</PostsWrapper>
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
            lang
          }
        }
      }
    }
  }
`

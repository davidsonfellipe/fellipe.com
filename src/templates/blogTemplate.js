import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Title from '../components/Title'
import Section from '../components/Section'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostContent from '../components/PostContent'
import PostFooter from '../components/PostFooter'

const Date = styled.span`
  color: #ccc;
  display: block;
  font-style: italic;
  font-size: 12px;
  letter-spacing: normal;
  line-height: 1em;
  margin-top: 10px;
  text-align: right;
  text-transform: capitalize;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Section>
        <Title>
          {frontmatter.title}
          <Date>{frontmatter.date}</Date>
        </Title>

        <PostContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PostContent>

        <PostFooter />
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'

import Title from '../components/Title'
import Section from '../components/Section'
import Text from '../components/Text'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Section>
        <Title>{frontmatter.title}</Title>
        <span>{frontmatter.date}</span>
        <Text>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Text>
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

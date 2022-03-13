import React from 'react'
import { graphql } from 'gatsby'

import Title from 'components/Title'
import Section from 'components/Section'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import PostContent from 'components/PostContent'
import PostDate from 'components/PostDate'
import PostFooter from 'components/PostFooter'
import TimeToRead from 'components/TimeToRead'

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Section>
        <Title>
          {frontmatter.title}
          <PostDate>
            {frontmatter.date} - {TimeToRead(timeToRead)}
          </PostDate>
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
      timeToRead
    }
  }
`

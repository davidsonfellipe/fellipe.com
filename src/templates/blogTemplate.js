import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Title from '../components/Title'
import Section from '../components/Section'
import Text from '../components/Text'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import profile from './profile.jpg'

import { screen } from '../styles/screen'

const Footer = styled.h1`
  margin: 75px 0 25px 0;
  font-size: 25px;
  text-transform: uppercase;

  img,
  ul {
    display: block;
    margin: 0;

    ${screen.md} {
      display: inline-block;
      vertical-align: middle;
    }
  }

  img {
    border-radius: 50%;
    margin: 0 0 25px 0;

    ${screen.md} {
      margin: 0 25px 0 0;
    }
  }

  li {
    display: block;
    padding: 10px 10px 10px 0;

    ${screen.md} {
      display: inline-block;
      margin-right: 25px;
      padding: 0;
    }
  }

  ${screen.md} {
    font-size: 30px;
    margin: 100px 0 15px 5px;
    letter-spacing: -0.04em;
  }
`

//
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

        <Footer>
          <img src={profile} alt="profile" width={100} height={100} />
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCHbWMt6KrLUwCexeiAFjUBg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              <a href="https://twitter.com/davidsonfellipe" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/davidsonfellipe" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/davidsonfellipe/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </Footer>
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

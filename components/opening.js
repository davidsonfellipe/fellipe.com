import React from 'react'
import styled from 'styled-components'

import Text from './text'
import { screen } from '../styles/screen'

const Section = styled.section`
  display: inline-block;
  padding: 15px 0 15px 0;
  vertical-align: top;

  ${screen.md} {
    margin-top: 100px;
    padding: 20px 0 0 0;
  }
`

const Block = styled.div`
  margin-bottom: 0;
  width: 100%;

  &:first-child {
    border: 0;
  }
`

const OpeningText = styled(Text)`
  display: inline-block;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 10px;
  vertical-align: top;
  -webkit-font-smoothing: antialiased;

  ${screen.md} {
    border-left: 1px solid #EEEEEE;
    font-size: 0.9rem;
    margin: 50px 0 0;
    min-height: 80px;
    padding: 0 15px 10px 15px;
    width: 25%;
  }

  &:first-child {
    border: 0;
    padding-left: 0;
  }

  a {
    text-decoration: underline;
  }
}
`

const Opening = () => (
  <Section>
    <Block>
      <OpeningText>
        I&apos;m a Brazilian based in Brooklyn with over 15 years of experience in the Software Development Industry.
      </OpeningText>
      <OpeningText>
        Previously, I worked for <a href="https://salesforce.com/">Salesforce</a>,{' '}
        <a href="https://loadsmart.com/">Loadsmart</a> and <a href="https://www.globo.com/">Globo.com</a>. You can find
        more on my <a href="https://www.linkedin.com/in/fellipe/">Linkedin.</a>
      </OpeningText>
      <OpeningText>
        Take a few minutes to browse through my <a href="https://github.com/davidsonfellipe">open source projects</a>{' '}
        and see what catches your eye.
      </OpeningText>
      <OpeningText>
        Want to get in touch? Feel free to send me a <a href="https://twitter.com/davidsonfellipe">direct message</a>{' '}
        via twitter.
      </OpeningText>
    </Block>
  </Section>
)

export default Opening

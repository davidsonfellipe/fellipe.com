import React from 'react'
import styled from 'styled-components'

import Text from './Text'
import { screen } from '../styles/screen'

const Section = styled.section`
  display: inline-block;
  padding: 15px 0 15px 0;
  vertical-align: top;

  ${screen.lg} {
    padding: 40px 0 15px 0;
  }
`

const Block = styled.div`
  border-top: 1px solid #eeeeee;
  margin-bottom: 50px;

  &:first-child {
    border: 0;
  }

  ${screen.lg} {
    width: calc(100vw - 400px);
  }
`

const OpeningText = styled(Text)`
  display: inline-block;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-size: 1.25em;
  line-height: 1.5em;
  margin-bottom: 10px;
  vertical-align: top;
  -webkit-font-smoothing: antialiased;

  ${screen.lg} {
    border-left: 1px solid #EEEEEE;
    font-size: 1em;
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
        I'm a Engineering Manager at <a href="https://loadsmart.com/">Loadsmart</a>, working on a technical leadership,
        mentoring, architecture design, recruiting.
      </OpeningText>
      <OpeningText>
        I'm also <a href="https://twitter.com/frontinbh/">@FrontinBH</a> co-organizer, a conference for web developers
        in Belo Horizonte, Brazil.
      </OpeningText>
      <OpeningText>
        Previously, I worked at <a href="https://www.globo.com/">Globo.com</a> and{' '}
        <a href="http://english.cesar.org.br/">CESAR</a>. and some{' '}
        <a href="https://github.com/davidsonfellipe">open source projects</a>. You can find more on my{' '}
        <a href="https://www.linkedin.com/in/fellipe/">Linkedin.</a>
      </OpeningText>
      <OpeningText>
        I'm a Brazilian, Based in Brooklyn, NY. Have something you'd like to discuss? Send me a{' '}
        <a href="https://twitter.com/davidsonfellipe">DM</a> via twitter.
      </OpeningText>
    </Block>
  </Section>
)

export default Opening

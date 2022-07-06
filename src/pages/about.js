import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Section from 'components/Section'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

import { screen } from 'styles/screen'

const Subtitle = styled.h2`
  color: #333;
  line-height: 1em;
  margin: 50px 0 20px 0;
  font-size: 1.5em;

  ${screen.md} {
    font-size: 1em;
    margin: 20px 0 20px 0;
  }
`

const Bio = styled.p`
  border-left: 4px solid #dedede;
  font-size: 1em;
  padding: 0.5em 0 0.5em 1em;

  ${screen.lg} {
    font-size: 0.9em;
  }
`

const TalksPage = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <Title>ABOUT</Title>
      <p>Here is a list of copy-and-paste resources for conference and podcasts organizers.</p>

      <Subtitle>Tiny bio</Subtitle>
      <Bio>
        Davidson is a Brazilian based in Brookly who works as an Engineering Manager at Salesforce Commerce Cloud.
      </Bio>

      <Subtitle>Short bio</Subtitle>
      <Bio>
        Brazilian based in Brooklyn since 2015, he has over fifteen years of experience in the Software Industry and has
        worked for some large and small companies in the US and Brazil. Currently works as an Engineering Manager at
        Salesforce, also in the US, he joined Loadsmart at an early stage and worked for nearly seven years, was the
        first front-end engineer, led the area, and was an engineering manager. In Brazil, he worked for five years
        building high scalable front-end applications for globo.com, and a few more years in projects related to web
        development, e-learning platforms, and mentoring in coding bootcamp-like programs. He is highly interested in
        building teams, Agile software development, Front-end development, Web Performance, Tests, and Web standards.
      </Bio>

      <Subtitle>Long bio</Subtitle>
      <Bio>
        Brazilian based in Brooklyn since 2015, and has over fifteen years of experience in the Software Development
        Industry and has worked for some large and small companies in the US and Brazil.
        <br />
        <br />
        Currently, he works as an Engineering Manager at Salesforce Commerce Cloud for Commerce Search team. While in
        the US, he joined Loadsmart at an early stage, being the first front-end engineer, leading the area for five
        years, being responsible for the maintenance and evolution of the engineering recruitment process, he also
        worked as an engineering manager, managing teams, roadmap, backlog and supporting the career growth of 2
        engineering teams. While in Brazil, he worked for five years on the design, development, and maintenance of high
        scalable front-end applications for globo.com, ge.globo.com and sportv.globo.com. Globo is the largest media
        company in latin america. And also, he worked a few more years in projects related to web development,
        e-learning platforms, and mentoring in coding bootcamp-like programs. He already spoken in over 30 conferences
        about software development, and former co-organized of some conferences for developers: Front in BH, Front in
        Recife, PernambucoJS, and Rio.JS.
        <br />
        <br />
        He is highly interested in Building teams, Agile software development, Front-end development, Web Performance,
        Tests, and Web standards. He holds a MSc in Web Performace from PUC-Rio and a BSc in Computer Engineer from
        University of Pernambuco. In his spare time, he enjoys traveling and talking about travel.
      </Bio>
    </Section>
  </Layout>
)

export default TalksPage

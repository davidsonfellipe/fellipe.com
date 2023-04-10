import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Section from 'components/Section'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import PageDescription from 'components/PageDescription'
import SocialMediaLinks from 'components/SocialMediaLinks'
import profile from 'images/profile.jpg'

import { screen } from 'styles/screen'
import { colors } from 'styles/theme'

import profiles from 'data/profiles'

const Subtitle = styled.h2`
  color: #333;
  line-height: 1em;
  margin: 50px 0 20px 0;
  font-size: 1.5em;
  font-style: italic;
  position: relative;

  ${screen.md} {
    font-size: 1.5rem;
    margin: 20px 0 20px 0;
  }

  &:after {
    border-top: 1px solid ${colors.tertiary};
    content: ' ';
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 25%;

    ${screen.lg} {
      width: 60%;
    }
  }
`

const Bio = styled.section`
  font-size: 1.1rem;
  line-height: 1.25em;
  margin: 1rem 0 2rem 0;
`

const ImageProfile = styled.img`
  float: left;
  margin: 0 1rem 0 0;
  box-shadow: 0.25rem 0.25rem ${colors.tertiary};
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <Title>About me</Title>
      <Bio>
        <ImageProfile src={profile} alt="profile" width={250} height={250} />
        ✋ Hello! Brazilian based in Brooklyn since 2015, and has over fifteen years of experience in the Software
        Development Industry and has worked for some large and small companies in the US and Brazil.
        <br />
        <br />
        He has worked as an Engineering Manager at Salesforce Commerce Cloud for Commerce Search team. While in the US,
        he joined Loadsmart at an early stage, being the first front-end engineer, leading the area for five years, and
        being responsible for the maintenance and evolution of the engineering recruitment process, he also worked as an
        engineering manager, managing teams, roadmap, backlog and supporting the career growth of 2 engineering teams.
        While in Brazil, he worked for five years on the design, development, and maintenance of high scalable front-end
        applications for globo.com, ge.globo.com, and sportv.globo.com. Globo is the largest media company in Latin
        America. And also, worked for a few more years on projects related to web development, e-learning platforms, and
        mentoring in coding bootcamp-like programs. He has already spoken in over 30 conferences about software
        development, and former co-organized of some conferences for developers: Front in BH, Front in Recife,
        PernambucoJS, and Rio.JS.
        <br />
        <br />
        He is highly interested in building teams, Agile software development, Front-end development, Web Performance,
        Tests, and Web standards. He holds an MSc in Web Performance from PUC-Rio and a BSc in Computer Engineering from
        University of Pernambuco. In his spare time, he enjoys traveling and talking about travel.
      </Bio>
      <PageDescription>
        You can find more on my Linkedin: <a href={profiles.linkedin.url}>{profiles.linkedin.url}</a>
      </PageDescription>

      <Subtitle>Social Media</Subtitle>

      <SocialMediaLinks />

      <Subtitle>Technologies used on this site</Subtitle>
      <Bio>
        <ul>
          <li>Framework: Gatsby</li>
          <li>Styling: Styled components</li>
          <li>Deployment: Vercel</li>
          <li>
            <a href="https://github.com/davidsonfellipe/fellipe.com">Source code on github</a>
          </li>
        </ul>
      </Bio>

      <PageDescription>
        Below is a list of copy and paste resources for conference and podcast organizers.
      </PageDescription>

      <Subtitle>Tiny bio</Subtitle>
      <Bio>
        Davidson is a Brazilian based in Brooklyn who worked as an Engineering Manager at Salesforce Commerce Cloud.
      </Bio>

      <Subtitle>Short bio</Subtitle>
      <Bio>
        Brazilian based in Brooklyn since 2015, he has over fifteen years of experience in the Software Industry and has
        worked for some large and small companies in the US and Brazil. He worked as an Engineering Manager at
        Salesforce, also in the US, he joined Loadsmart at an early stage and worked for nearly seven years, was the
        first front-end engineer, led the area, and was an engineering manager. In Brazil, he worked for five years
        building high scalable front-end applications for globo.com, and a few more years in projects related to web
        development, e-learning platforms, and mentoring in coding bootcamp-like programs. He is highly interested in
        building teams, Agile software development, Front-end development, Web Performance, Tests, and Web standards.
      </Bio>
    </Section>
  </Layout>
)

export default AboutPage

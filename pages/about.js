import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import Seo from '../components/seo'
import Title from '../components/title'
import Section from '../components/section'
import Layout from '../components/layout'

import PageDescription from '../components/page-description'
import SocialMediaLinks from '../components/social-media-links'

import { screen } from '../styles/screen'
import { colors } from '../styles/theme'

import profiles from '../data/profiles'

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
  font-size: 1rem;
  line-height: 1.25em;
  margin: 1rem 0 2rem 0;
`

const ImageProfile = styled.div`
  img {
    float: left;
    margin: 0 1rem 0 0;
    box-shadow: 0.25rem 0.25rem ${colors.tertiary};
  }
`

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Section>
      <Title>About me</Title>
      <Bio>
        <ImageProfile>
          <Image priority src="/images/profile.jpg" height={250} width={250} alt="profile" />
        </ImageProfile>
        ✋ Hi there! I'm a Brazilian who has been living in Brooklyn since 2015. With over fifteen years of experience
        in the software development industry, I've had the opportunity to work for large and small companies in the US
        and Brazil. <br />
        <br />
        During my time in the US, I worked as an Engineering Manager at Salesforce Commerce Cloud for Commerce Search
        team until 2023. In 2014, I joined Loadsmart in its early stages and was the first front-end engineer, leading
        the area for five years. I was responsible for maintaining and evolving the engineering recruitment process and
        also worked as an engineering manager, managing teams, roadmap, backlog and supporting the career growth of two
        engineering teams.
        <br />
        <br />
        During my time in Brazil, I had the opportunity to work on some exciting projects. For five years, I worked on
        the design, development, and maintenance of highly scalable front-end applications for Globo.com, ge.globo.com,
        and sportv.globo.com. Globo is the largest media company in Latin America, and it was a fantastic experience to
        work with such a significant player in the industry.
        <br />
        <br />
        Before working at Globo.com, I spent almost three years working on various web development projects, e-learning
        platforms, and mentoring in coding bootcamp-like programs. It was fulfilling to work on these programs and help
        others develop their skills in the industry.
        <br />
        <br />
        I have already spoken at over 30 conferences about software development. In addition, I was a former
        co-organizer of some conferences for developers, including Front in BH, Front in Recife, PernambucoJS, and
        Rio.JS.
        <br />
        <br /> I am highly interested in building teams, Agile software development, Front-end development, Web
        Performance, Tests, and Web standards. I hold an MSc in Web Performance from PUC-Rio and a BSc in Computer
        Engineering from University of Pernambuco. In my spare time, I enjoy traveling, visit coffeeshops and talking
        about travel.
      </Bio>

      {/* Render the social media links */}
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

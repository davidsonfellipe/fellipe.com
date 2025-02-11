import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

// Components
import Seo from '../components/seo'
import PageTitle from '../components/page-title'
import Subtitle from '../components/subtitle'
import Section from '../components/section'
import Layout from '../components/layout'
import SocialMediaLinks from '../components/social-media-links'

import { screen } from '../styles/screen'

import profiles from '../data/profiles'

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Section>
      <PageTitle>About me</PageTitle>
      <Bio>
        <ImageProfile>
          <Image priority src="/images/profile.jpg" height={250} width={250} alt="profile" />
        </ImageProfile>
        ✋ Hi there! I&apos;m a Brazilian who has been living in Brooklyn since 2015. With over fifteen years of
        experience in the software development industry, I&apos;ve had the opportunity to work for large and small
        companies in the US and Brazil. I&apos;m currently Senior Software Engineer, Front-end at Upgrade.com.
        <br />
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

      <Subtitle>
        You can find more on my Linkedin: <a href={profiles.linkedin.url}>{profiles.linkedin.url}</a>
      </Subtitle>

      <SubtitleUnderline>Social Media</SubtitleUnderline>

      <SocialMediaLinks />

      <SubtitleUnderline>Tiny bio</SubtitleUnderline>
      <Bio>
        Davidson is a Brazilian who lives in Brooklyn and works as a Senior Software Engineer, Front-end at Upgrade.com.
      </Bio>

      <SubtitleUnderline>Short bio</SubtitleUnderline>
      <Bio>
        Brazilian based in Brooklyn since 2015, he has over fifteen years of experience in the Software Industry and has
        worked for some large and small companies in the US and Brazil. He worked as an Engineering Manager at
        Salesforce, also in the US, he joined Loadsmart at an early stage and worked for nearly seven years, was the
        first front-end engineer, led the area, and was an engineering manager. In Brazil, he worked for five years
        building high scalable front-end applications for globo.com, and a few more years in projects related to web
        development, e-learning platforms, and mentoring in coding bootcamp-like programs. He is highly interested in
        building teams, Agile software development, Front-end development, Web Performance, Tests, and Web standards.
      </Bio>

      <SubtitleUnderline>About this website</SubtitleUnderline>
      <Bio>
        <ul>
          <li>Framework: Next.js - A React framework for building web applications.</li>
          <li>Styling: Styled Components - A CSS-in-JS library with component-based styling.</li>
          <li>
            Icons: <a href="https://github.com/simple-icons/simple-icons/">Simple Icons</a>.
          </li>
          <li>Deployment: Vercel - A platform for deployment and hosting of web applications.</li>
          <li>
            Source Code is on <a href="https://github.com/davidsonfellipe/fellipe.com">GitHub</a>.
          </li>
        </ul>
      </Bio>
    </Section>
  </Layout>
)

const SubtitleUnderline = styled.h2`
  color: var(--color-text);
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
    border-top: 1px solid var(--color-tertiary);
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
    box-shadow: 0.25rem 0.25rem var(--color-tertiary);
  }
`

export default AboutPage

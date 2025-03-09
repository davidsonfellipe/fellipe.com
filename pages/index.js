import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Text from '../components/text'
import Seo from '../components/seo'
import PageSectionFullWidth from '../components/page-section-full-width'
import PageSectionContainer from '../components/page-section-container'
import { screen } from '../styles/screen'

export default function Home() {
  return (
    <Layout home>
      <Seo title="Home" description="Engineering leader passionate about helping teams build for the web." />
      <ImgWrapper>
        <Image priority src="/images/profile.jpg" height={150} width={150} alt="logo - profile picture" />
        <Baloon>Olá</Baloon>
      </ImgWrapper>
      <TextIntro>
        I&rsquo;m an engineering leader passionate about helping teams build for the web as a developer or manager —
        based in Brooklyn.
      </TextIntro>
      <TextIntro>
        When I&rsquo;m off my laptop, I&rsquo;m exploring coffee spots, enjoying &rsquo;90s arcade games, or planning my
        next getaway.
      </TextIntro>
      <Section>
        <PageSectionContainer>
          <Block>
            <OpeningText>
              I&rsquo;m currently an engineer at Upgrade.com. Previously, I worked for{' '}
              <a href="https://salesforce.com/">Salesforce</a>, <a href="https://loadsmart.com/">Loadsmart</a> and{' '}
              <a href="https://www.globo.com/">Globo.com</a>. Allowing me to grow both technically and as a leader,
              taking on various projects. You can find more on my{' '}
              <a href="https://www.linkedin.com/in/fellipe/">Linkedin.</a>
            </OpeningText>
            <OpeningText>
              Check out my <a href="https://github.com/davidsonfellipe">open source projects</a> and see what interests
              you. I&rsquo;ve also spoken at 30+ conferences and meetups on topics like performance, front-end
              development, and testing.
            </OpeningText>
            <OpeningText>
              Want to get in touch? Feel free to send me a direct message via{' '}
              <a href="https://bsky.app/profile/davidsonfellipe.bsky.social">bluesky</a> or{' '}
              <a href="https://www.linkedin.com/in/fellipe/">linkedin</a>.
            </OpeningText>
          </Block>
        </PageSectionContainer>
      </Section>
    </Layout>
  )
}

const TextIntro = styled.h2`
  font-family: var(--font-text);
  font-weight: 500;
  font-size: 1.75em;
  margin: 1.25rem 0;
  text-align: left;
  text-wrap: balance;

  ${screen.md} {
    font-size: 2rem;
  }
`

const ImgWrapper = styled.div`
  margin: 125px 0 25px 0;
  position: relative;

  ${screen.lg} {
    margin: 100px 0 0 -5px;
  }

  img {
    border-radius: 50%;
  }
`

const Baloon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50% 50% 50% 5px;
  position: absolute;
  top: -20px;
  left: 120px;
  background-color: var(--color-tertiary);
  color: var(--color-secondary);
  padding: 28px 25px;
  font-family: var(--font-text);
  font-weight: 500;
  opacity: 0;
  animation: fadeIn 750ms linear 1s forwards;
  rotate: 10deg;
  z-index: -1;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(-60px, 60px);
      z-index: -1;
    }
    50% {
      opacity: 0.5;
      z-index: -1;
      transform: translate(30px, -30px);
    }
    100% {
      opacity: 1;
      z-index: 1;
      transform: translate(0, 0);
    }
  }
`

const Section = styled(PageSectionFullWidth)`
  display: none;

  ${screen.md} {
    display: block;
    padding: 75px 0;
  }
`

const Block = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${screen.md} {
    gap: 16px;
    grid-template-columns: 1.75fr 1.75fr 1.5fr;
  }
`

const OpeningText = styled(Text)`
  font-weight: 400;
  font-size: 1.25em;
  line-height: 1.5em;

  ${screen.md} {
    padding-left: 15px;
    border-left: 1px solid var(--color-tertiary);
    font-size: 0.8rem;
  }

  &:first-child {
    border: 0;
    padding-left: 0;
  }
`

import Head from 'next/head'
import styled from 'styled-components'

// Styles
import { screen } from '../styles/screen'
import { font } from '../styles/theme'
import { Reset as ResetStyles } from '../styles/reset'
import { Global as GlobalStyles } from '../styles/global'

export const siteTitle = 'Davidson Fellipe'
import Header from './header'
import Footer from './footer'
import profiles from '../data/profiles'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href={profiles?.mastodon.url} rel="me" />
      </Head>
      <ResetStyles />
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Section>{children}</Section>
        <Footer />
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  font-family: ${font.text};
  padding: 15px 7px 15px 0;
  margin: 0 auto;
  min-width: 340px;
  width: 100%;
  overflow: hidden;
  max-width: ${screen.max};
`

const Section = styled.div`
  display: inline-block;
  padding: 15px;
  vertical-align: top;
  width: 100%;
`

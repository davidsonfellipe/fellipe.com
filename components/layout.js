import Head from 'next/head'
import styled from 'styled-components'

// Styles
import { screen } from '../styles/screen'
import { Reset as ResetStyles } from '../styles/reset'
import { Global as GlobalStyles } from '../styles/global'

export const siteTitle = 'Davidson Fellipe'
import Header from './header'
import Footer from './footer'
import profiles from '../data/profiles'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/images/profile.jpg" />
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
  font-family: var(--font-text);
  margin: 0 auto;
  min-width: 340px;
  width: 100%;
  max-width: ${screen.max};
`

const Section = styled.div`
  display: inline-block;
  padding: var(--layout-wrapper-padding-sm);
  vertical-align: top;
  width: 100%;

  ${screen.md} {
    padding: var(--layout-wrapper-padding-md);
  }

  ${screen.lg} {
    padding: var(--layout-wrapper-padding-sm);
  }
`

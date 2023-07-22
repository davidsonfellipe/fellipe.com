import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styled, { createGlobalStyle } from 'styled-components'

import ResetStyles from '../styles/resetStyles'
import { screen } from '../styles/screen'
import { font, colors } from '../styles/theme'

export const siteTitle = 'Next.js Sample Website'
import StyledComponentsRegistry from '../lib/registry'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
          />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StyledComponentsRegistry>
        <ResetStyles />
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Section>{children}</Section>
          <Footer />
        </Wrapper>
      </StyledComponentsRegistry>
    </div>
  )
}


const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: ${ebGaramond.style.fontFamily};
  }

  body {
    background-color: ${colors.bg};
    color: ${colors.text};
  }

  a {
    color: inherit;
  }
`

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

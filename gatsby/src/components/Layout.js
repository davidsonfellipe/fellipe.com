import React from 'react'
import PropTypes from 'prop-types'

import styled, { createGlobalStyle } from 'styled-components'

import ResetStyles from 'styles/resetStyles'
import { screen } from 'styles/screen'
import { font, colors } from 'styles/theme'

import Header from 'components/Header'
import Footer from 'components/Footer'

const GlobalStyle = createGlobalStyle`
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

const Layout = ({ children }) => (
  <>
    <ResetStyles />
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </Wrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

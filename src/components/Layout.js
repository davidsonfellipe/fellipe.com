/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

import styled, { createGlobalStyle } from 'styled-components';

import { screen } from 'styles/screen'
import { font } from 'styles/theme'

import Header from 'components/Header'
import Footer from 'components/Footer'

const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
  }
`

const Wrapper = styled.div`
  font-family: ${font.text};
  padding: 15px 7px 15px 0;
  margin: 0 auto;
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

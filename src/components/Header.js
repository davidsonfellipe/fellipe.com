import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Section from 'components/Section'
import { screen } from 'styles/screen'
import { font } from 'styles/theme'

const Logo = styled.span`
  display: inline-block;
  text-align: left;
  width: 40%;
`

const LogoMobile = styled(Logo)`
  display: inline-block;

  ${screen.md} {
    display: none;
  }
`

const LogoDesktop = styled(Logo)`
  display: none;

  ${screen.md} {
    display: inline-block;
  }
`

const Wrapper = styled(Section)`
  position: relative;
  max-width: ${screen.max};
`

const Nav = styled.nav`
  background: #000;
  color: #fff;
  padding: 15px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  right: 0;
  z-index: 10;

  a {
    font-family: ${font.title};
    font-weight: 900;
    text-decoration: none;
  }
`

const Links = styled.div`
    display: inline-block;
    position: absolute;
    right: 0;

    a {
      padding: 0;

      &:after {
        content: '  /';
        display: inline-block;
        text-align: center;
        width: 25px;
      }

      &:last-child:after {
        display: none;
      }
    }
  }
`

const Header = () => (
  <Nav>
    <Wrapper>
      <LogoMobile>
        <Link to="/">Fellipe.com</Link>
      </LogoMobile>
      <LogoDesktop>
        <Link to="/"> Davidson Fellipe</Link>
      </LogoDesktop>

      <Links>
        <Link to="/blog/">blog</Link>
        <Link to="/talks/">talks</Link>
        <Link to="/interviews/">interviews</Link>
      </Links>
    </Wrapper>
  </Nav>
)

export default Header

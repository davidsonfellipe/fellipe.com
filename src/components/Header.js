import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import profile from 'images/profile.jpg'
import Section from 'components/Section'
import { screen } from 'styles/screen'
import { font, colors } from 'styles/theme'

const Logo = styled.span`
  display: inline-block;
  line-height: 45px;
  text-align: left;
  width: 40%;

  img {
    margin: 0 10px 0 0;
    vertical-align: middle;
    opacity: 80%;
  }
`

const Nav = styled.nav`
  background: ${colors.bg};
  box-shadow: 0 1px 5px 0 rgba(32, 33, 36, 0.1);
  color: #333;
  margin: 0 auto;
  padding: 10px 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  ${screen.md} {
    right: 0;
  }

  a {
    font-family: ${font.text};
    font-weight: 900;
    text-decoration: none;
  }

  a.current:link,
  a.current:visited {
    color: blue;
  }
`

const Wrapper = styled(Section)`
  position: relative;
  overflow-x: auto;

  ${screen.lg} {
    padding: 0 20px;
    max-width: ${screen.max};
  }
`

const Links = styled.div`
    display: inline-block;
    line-height: 45px;
    position: absolute;
    right: 0;

    a {
      padding: 0;

      &:after {
        content: '  /';
        color: ${colors.tertiary};
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
      <Logo>
        <Link to="/">
          <img src={profile} alt="profile" width={40} height={40} />
        </Link>
      </Logo>

      <Links>
        <Link to="/blog/">blog</Link>
        <Link to="/projects/">projects</Link>
        <Link to="/talks/">talks</Link>
        <Link to="/interviews/">interviews</Link>
        <Link to="/about/">about</Link>
      </Links>
    </Wrapper>
  </Nav>
)

export default Header

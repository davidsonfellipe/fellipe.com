import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import profile from 'images/profile.jpg'
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
  height: 40px;
  width: 20%;

  ${screen.md} {
    display: none;
  }

  img {
    border-radius: 50%;
    margin-bottom: 0;
  }
`

const LogoDesktop = styled(Logo)`
  display: none;

  ${screen.md} {
    display: inline-block;
  }
`

const Nav = styled.nav`
  background: #000;
  color: #fff;
  margin: 0 auto;
  padding: 10px 15px;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 10;

  ${screen.md} {
    line-height: auto;
    padding: 15px;
    right: 0;
  }

  a {
    font-family: ${font.title};
    font-weight: 900;
    text-decoration: none;
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
    line-height: 40px;
    position: absolute;
    right: 0;


    ${screen.md} {
      line-height: inherit;
    }

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
        <Link to="/">
          <img src={profile} alt="profile" width={40} height={40} />
        </Link>
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

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Image from 'next/image'
import Section from './section'
import { screen } from '../styles/screen'

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
  background-color: var(--color-background);
  box-shadow: 0 1px 5px 0 rgba(32, 33, 36, 0.1);
  color: var(--color-text);
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
    font-family: var(--font-text);
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
      content: '/';
      color: var(--color-tertiary);
      display: inline-block;
      text-align: center;
      width: 15px;
    }

    &:last-child:after {
      display: none;
    }
  }
`

const Name = styled.span`
  display: none;

  ${screen.md} {
    display: inline-block;
  }
`

const ImgWrapper = styled.span`
  display: inline-block;

  ${screen.md} {
    display: none;
  }
`

const Header = () => (
  <Nav>
    <Wrapper>
      <Logo>
        <Link href="/">
          <ImgWrapper>
            <Image priority src="/images/profile.jpg" height={40} width={40} alt="profile" />
          </ImgWrapper>
          <Name>Davidson Fellipe</Name>
        </Link>
      </Logo>

      <Links>
        <Link href="/blog/">blog</Link>
        <Link href="/projects/">projects</Link>
        <Link href="/bookshelf/">bookshelf</Link>
        <Link href="/talks/">talks</Link>
        <Link href="/about/">about</Link>
      </Links>
    </Wrapper>
  </Nav>
)

export default Header

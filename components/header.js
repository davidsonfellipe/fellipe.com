import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { IconMenu2, IconX } from '@tabler/icons-react'

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
  padding: 10px var(--layout-wrapper-padding-sm);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  ${screen.md} {
    right: 0;
    padding: 10px var(--layout-wrapper-padding-md);
  }

  ${screen.lg} {
    padding: 10px var(--layout-wrapper-padding-sm);
  }

  a {
    font-family: var(--font-title);
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
  display: none;

  ${screen.md} {
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
  }
`

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: var(--color-text);

  ${screen.md} {
    display: none;
  }
`

const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
  opacity: ${p => (p.$open ? 1 : 0)};
  visibility: ${p => (p.$open ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;

  ${screen.md} {
    display: none;
  }
`

const MobileMenuPanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  max-width: 85vw;
  height: 100%;
  background: var(--color-background);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  z-index: 21;
  padding: 60px 24px 24px;
  transform: translateX(${p => (p.$open ? 0 : '100%')});
  transition: transform 0.25s ease;

  ${screen.md} {
    display: none;
  }
`

const MobileMenuClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: var(--color-text);
`

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    display: block;
    padding: 12px 0 12px 12px;
    font-size: 1.125rem;
    border-bottom: 1px solid #eee;
    border-left: 3px solid transparent;
    transition: border-left-color 0.2s ease;

    &:before {
      content: '/';
      color: var(--color-tertiary);
      margin-right: 8px;
    }

    &:active {
      border-left-color: transparent;
    }

    &:last-child {
      border-bottom: none;
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

const navLinks = [
  { href: '/blog/', label: 'blog' },
  { href: '/projects/', label: 'projects' },
  { href: '/talks/', label: 'talks' },
  { href: '/about/', label: 'about' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Nav>
      <Wrapper>
        <Logo>
          <Link href="/" onClick={closeMobileMenu}>
            <ImgWrapper>
              <Image priority src="/images/profile.jpg" height={40} width={40} alt="profile" />
            </ImgWrapper>
            <Name>Davidson Fellipe</Name>
          </Link>
        </Logo>

        <HamburgerButton onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menu" aria-expanded={mobileMenuOpen}>
          <IconMenu2 size={28} stroke={1.5} />
        </HamburgerButton>

        <Links>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </Links>
      </Wrapper>

      <MobileMenuOverlay $open={mobileMenuOpen} onClick={closeMobileMenu} aria-hidden="true" />
      <MobileMenuPanel $open={mobileMenuOpen}>
        <MobileMenuClose onClick={closeMobileMenu} aria-label="Fechar menu">
          <IconX size={24} stroke={1.5} />
        </MobileMenuClose>
        <MobileMenuLinks>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMobileMenu}>
              {label}
            </Link>
          ))}
        </MobileMenuLinks>
      </MobileMenuPanel>
    </Nav>
  )
}

export default Header

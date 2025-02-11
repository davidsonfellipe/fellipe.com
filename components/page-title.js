import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { screen } from '../styles/screen'
import Title from './title'

const PageTitle = ({ children }) => {
  const [isRotated, setIsRotated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const triggerPosition = 140
      setIsRotated(window.scrollY > triggerPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <PageTitleStyled className={isRotated ? 'rotated' : ''}>{children}</PageTitleStyled>
}

const PageTitleStyled = styled(Title)`
  ${screen.xlg} {
    position: sticky;
    top: 50px;
    transform-origin: left center;
    z-index: 10;
    transition:
      transform 0.5s ease,
      margin-left 0.5s ease;

    &.rotated {
      transform: rotate(90deg);
      margin-left: -75px;
      opacity: 0.8;
    }
  }
`

export default PageTitle

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { screen } from '../styles/screen'

const Wrapper = styled.section`
  margin: 50px 0 25px 0;
  text-align: center;

  ${screen.lg} {
    margin: 150px 0 0 -5px;
  }

  img {
    box-shadow: 0.25rem 0.25rem var(--color-tertiary);
    margin-top: 50px;
  }
`

const Name = styled.h1`
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 2.5em;
  margin-bottom: 0.1em;

  ${screen.md} {
    font-size: 4rem;
  }
`

const Subtitle = styled.h2`
  background-color: var(--color-tertiary);
  box-shadow: 0.25rem 0.25rem #000;
  display: inline-block;
  font-family: var(--font-text);
  font-size: 1em;
  font-weight: 100;
  margin-bottom: 0;
  max-width: 75%;
  padding: 0.5rem;

  ${screen.md} {
    min-width: 525px;
  }

  span {
    display: none;

    ${screen.md} {
      display: inline-block;
    }
  }
`

const Hello = () => (
  <Wrapper>
    <Image priority src="/images/profile.jpg" height={150} width={150} alt="logo - profile picture" />
    <Name>Davidson Fellipe</Name>
    <Subtitle>Senior Software Engineer, Front-end at Upgrade.com</Subtitle>
  </Wrapper>
)

export default Hello

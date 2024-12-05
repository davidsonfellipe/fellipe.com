import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { screen } from '../styles/screen'
import { colors } from '../styles/theme'
import profiles from '../data/profiles'

const Wrapper = styled.div`
  img,
  ul,
  li {
    display: inline-block;
    margin: 0;
  }

  ul {
    margin-top: 1rem;
  }

  li {
    vertical-align: top;
    width: 70px;
    margin: 0 20px 0 0;

    ${screen.md} {
      margin-right: 25px;
    }
  }

  a {
    padding: 15px;
    text-decoration: none;
    text-align: center;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    height: 40px;
    width: 40px;
  }
`

const Name = styled.span`
  background-color: var(--color-tertiary);
  box-shadow: 0.25rem 0.25rem var(--color-secondary);
  color: var(--color-secondary);
  display: block;
  font-size: 0.5rem;
  font-weight: 600;
  line-height: 1.25rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
  vertical-align: top;
`

const formatAllSocialIcons = () => {
  let keys = Object.keys(profiles)

  return keys.map(key => (
    <li key={key}>
      <a href={profiles[key].url} target="_blank" rel="noopener noreferrer">
        <Image width={18} height={18} src={profiles[key].icon} alt={`My profile at ${key}`} />
        <Name>{key}</Name>
      </a>
    </li>
  ))
}

const SocialMediaLinks = () => (
  <Wrapper>
    <ul>{formatAllSocialIcons()}</ul>
  </Wrapper>
)

export default SocialMediaLinks

import React from 'react'
import styled from 'styled-components'
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandMastodon,
  IconBrandThreads,
  IconBrandBluesky,
  IconBrandYoutube,
  IconBrandNpm,
  IconPresentation,
} from '@tabler/icons-react'

import { screen } from '../styles/screen'
import profiles from '../data/profiles'

const ICON_MAP = {
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  mastodon: IconBrandMastodon,
  threads: IconBrandThreads,
  bluesky: IconBrandBluesky,
  youtube: IconBrandYoutube,
  npm: IconBrandNpm,
  speakerdeck: IconPresentation,
  slideshare: IconPresentation,
}

const Wrapper = styled.div`
  svg,
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

  svg {
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
  const keys = Object.keys(profiles)

  return keys.map(key => {
    const Icon = ICON_MAP[key]
    return (
      <li key={key}>
        <a href={profiles[key].url} target="_blank" rel="noopener noreferrer">
          <Icon size={40} stroke={1.5} aria-hidden />
          <Name>{key}</Name>
        </a>
      </li>
    )
  })
}

const SocialMediaLinks = () => (
  <Wrapper>
    <ul>{formatAllSocialIcons()}</ul>
  </Wrapper>
)

export default SocialMediaLinks

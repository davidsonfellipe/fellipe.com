import React from 'react'
import styled from 'styled-components'

import profile from 'images/profile.jpg'
import { screen } from 'styles/screen'
import { font, colors } from 'styles/theme'

const Wrapper = styled.section`
  margin: 50px 0 25px 0;
  text-align: center;

  ${screen.lg} {
    margin: 150px 0 0 -5px;
  }

  img {
    box-shadow: 0.25rem 0.25rem ${colors.tertiary};
    margin-top: 50px;
  }
`

const Name = styled.h1`
  font-family: ${font.title};
  font-weight: 800;
  font-size: 2.5em;
  margin-bottom: 0.1em;

  ${screen.md} {
    font-size: 4rem;
  }
`

const Subtitle = styled.h2`
  background-color: ${colors.tertiary};
  box-shadow: 0.25rem 0.25rem #000;
  display: inline-block;
  font-family: ${font.text};
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
    <img src={profile} alt="profile" width={150} height={150} />
    <Name>Davidson Fellipe</Name>
    <Subtitle>Software Engineer at [Coming soon]</Subtitle>
  </Wrapper>
)

export default Hello

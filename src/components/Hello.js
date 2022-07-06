import React from 'react'
import styled from 'styled-components'

import profile from 'images/profile.jpg'
import { screen } from 'styles/screen'
import { font } from 'styles/theme'

const Wrapper = styled.section`
  margin: 50px 0 25px 0;
  text-align: center;

  ${screen.lg} {
    margin: 150px 0 0 -5px;
  }

  img {
    border-radius: 50%;
  }
`

const Name = styled.h1`
  font-family: ${font.title};
  font-weight: 500;
  font-size: 2em;
  margin-bottom: 0.1em;
  text-transform: uppercase;

  ${screen.lg} {
    font-size: 3em;
    letter-spacing: -0.04em;
  }
`

const Subtitle = styled.h2`
  font-family: ${font.text};
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 0;

  ${screen.lg} {
    letter-spacing: -0.04em;
  }
`

const Hello = () => (
  <Wrapper>
    <img src={profile} alt="profile" width={150} height={150} />
    <Name>Davidson Fellipe</Name>
    <Subtitle>Engineering Manager at Salesforce - Based in Brooklyn, NY.</Subtitle>
  </Wrapper>
)

export default Hello

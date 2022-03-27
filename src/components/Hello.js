import React from 'react'
import styled from 'styled-components'

import { screen } from 'styles/screen'
import { font } from 'styles/theme'

const Name = styled.h1`
  font-family: ${font.title};
  font-weight: 500;
  margin: 75px 0 25px 0;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;

  ${screen.lg} {
    font-size: 60px;
    margin: 175px 0 0 -5px;
    letter-spacing: -0.04em;
  }
`

const Hello = () => (
  <section>
    <Name>
      Davidson Fellipe <br />A Brazilian Software Engineer
    </Name>
  </section>
)

export default Hello

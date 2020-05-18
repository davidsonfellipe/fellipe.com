import styled from 'styled-components'

import { font } from '../styles/theme'
import { screen } from '../styles/screen'

const Title = styled.h1`
  color: #333;
  font-style: normal;
  font-family: ${font.title};
  font-weight: 900;
  line-height: 1em;
  margin: 75px 0 30px 0;
  font-size: 40px;
  letter-spacing: -2px;
  text-transform: uppercase;

  ${screen.md} {
    line-height: 1em;
    font-size: 60px;
  }
`

export default Title

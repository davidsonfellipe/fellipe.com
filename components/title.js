import styled from 'styled-components'

import { font } from '../styles/theme'
import { screen } from '../styles/screen'

const Title = styled.h1`
  color: var(--color-text);
  font-style: normal;
  font-family: ${font.text};
  font-weight: 900;
  line-height: 1em;
  margin: 75px 0 20px 0;
  font-size: 40px;
  letter-spacing: -2px;

  ${screen.md} {
    font-size: 4rem;
    line-height: 1em;
    margin: 60px 0 15px 0;
  }
`

export default Title

import styled from 'styled-components'
import { screen } from '../styles/screen'

const Title = styled.h1`
  color: var(--color-text);
  font-style: normal;
  font-family: var(--font-text);
  font-weight: 900;
  line-height: 1em;
  margin: 75px 0 40px 0;
  font-size: 4rem;
  letter-spacing: -2px;

  ${screen.md} {
    line-height: 1em;
    padding: 25px 0 40px 0;
  }
`

export default Title

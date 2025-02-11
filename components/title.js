import styled from 'styled-components'
import { screen } from '../styles/screen'

const Title = styled.h1`
  color: var(--color-text);
  font-style: normal;
  font-family: var(--font-title);
  font-weight: 900;
  line-height: 1em;
  margin: 75px 0 40px 0;
  font-size: 3rem;
  letter-spacing: -2px;

  ${screen.md} {
    font-size: 4rem;
    line-height: 1em;
    padding: 25px 0 40px 0;
  }

  &:after {
    content: ' ';
    width: 1rem;
    display: inline-block;
    height: 3px;
    background: var(--color-tertiary);
    margin-left: 5px;
    animation: blink 2s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

export default Title

import styled from 'styled-components'
import { screen } from '../styles/screen'

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  padding: 5px 0;
  line-height: 1.5em;
  position: relative;

  ${screen.lg} {
    padding: 15px 0;
  }
`

export default Text

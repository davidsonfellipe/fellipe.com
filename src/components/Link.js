import styled from 'styled-components'

import { font } from 'styles/theme'

const Link = styled.a`
  border-bottom: 2px solid #efefef;
  display: block;
  font-family: ${font.text};
  font-size: 0.9em;
  font-weight: 700;
  color: #444;
  padding: 15px 0;
  line-height: 1.5em;
  position: relative;
  text-decoration: none;
  transition: color 300ms;

  &:hover {
    color: #999;
  }

  &:last-child {
    border: 0;
  }
`

export default Link

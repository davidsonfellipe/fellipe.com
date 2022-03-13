import styled from 'styled-components'

import { font } from 'styles/theme'

const Link = styled.a`
  border-bottom: 1px dashed #eee;
  display: block;
  font-family: ${font.title};
  font-size: 18px;
  font-weight: 500;
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

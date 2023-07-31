import styled from 'styled-components'

import { colors } from '../styles/theme'

const PostDate = styled.span`
  background: ${colors.tertiary};
  clear: both;
  display: inline-block;
  font-size: 12px;
  letter-spacing: normal;
  line-height: 1em;
  margin-top: 10px;
  padding: 5px 10px;
  text-transform: capitalize;
`

export default PostDate

import styled from 'styled-components'

import { font } from '../styles/theme'
import { screen } from '../styles/screen'

const PostContent = styled.div`
  font-size: 20px;
  font-weight: 300;
  padding: 20px 0;
  line-height: 1.5em;
  position: relative;

  ${screen.md} {
    font-size: 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${font.title};
    font-weight: 900;
    margin: 1.5em 0 0;
  }

  p,
  ul {
    margin: 1em 0 0 0;
    list-style-position: inside;
  }

  pre {
    border-radius: 0;
    font-size: 0.8em;
  }
`

export default PostContent

import styled from 'styled-components'

import { font } from 'styles/theme'
import { screen } from 'styles/screen'

const PostWrapper = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0;
  line-height: 1.5em;
  position: relative;

  ${screen.md} {
    font-size: 20px;
  }

  .gatsby-highlight {
    margin: 10px 0 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${font.title};
    font-weight: 900;
    background: #000;
    color: #fff;
    display: inline-block;
    padding: 10px;
  }

  pre {
    border-radius: 0;
    font-size: 0.8em;
  }
`

export default PostWrapper

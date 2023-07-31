import styled from 'styled-components'

import { font, colors } from 'styles/theme'

const PageDescription = styled.p`
  background-color: ${colors.tertiary};
  display: inline-block;
  font-family: ${font.text};
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  min-width: 75%;
  padding: 1rem 1.5rem;
  box-shadow: 0.25rem 0.25rem ${colors.secondary};
`

export default PageDescription

import styled from 'styled-components'

import { font } from '../styles/theme'

const PageDescription = styled.p`
  background-color: var(--color-tertiary);
  display: inline-block;
  font-family: ${font.text};
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  min-width: 75%;
  padding: 1rem 1.5rem;
  box-shadow: 0.25rem 0.25rem var(--color-secondary);
`

export default PageDescription

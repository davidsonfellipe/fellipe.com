import { createGlobalStyle } from 'styled-components'
import { variables } from './variables'

export const Global = createGlobalStyle`
  :root {
    ${variables}
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
  }

  a {
    color: inherit;
  }
`
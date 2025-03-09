import React from 'react'
import styled from 'styled-components'

const Text = styled.footer`
  color: var(--color-primary);
  font-size: 0.8rem;
  padding: var(--spacing-md) 0;
  text-align: center;
`

const Footer = () => (
  <Text>
    since 2007 · <a href="https://github.com/davidsonfellipe/fellipe.com">source code</a>
  </Text>
)

export default Footer

import React from 'react'
import styled from 'styled-components'

const Text = styled.footer`
  color: #ccc;
  padding: 15px 0;
  text-align: center;
`

const Footer = () => (
  <Text>
    made by me with{' '}
    <span role="img" aria-label="love">
      🖤
    </span>{' '}
    since 2007
  </Text>
)

export default Footer
